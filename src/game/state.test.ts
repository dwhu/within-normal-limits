import { describe, expect, it } from "vitest";

import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState, reducer } from "@/game/state";
import type { Situation, State } from "@/game/types";

const start = (): State => ({ ...initialState, screen: "desk" });
const run = (s: State, ...actions: Parameters<typeof reducer>[1][]) =>
  actions.reduce((acc, a) => reducer(acc, a, FIXTURE_SCRIPT), s);

describe("reducer", () => {
  it("SIGN_IN moves to the desk", () => {
    expect(reducer(initialState, { type: "SIGN_IN" }, FIXTURE_SCRIPT).screen).toBe("desk");
  });

  it("RESTORE lands on the sign-in screen whatever screen the run was saved on", () => {
    const saved: State = { ...initialState, screen: "desk", index: 1 };
    const s = reducer(initialState, { type: "RESTORE", state: saved }, FIXTURE_SCRIPT);

    expect(s.screen).toBe("signin");
    expect(s.index).toBe(1);
  });

  it("SIGN_IN resumes a restored run mid-day, at the situation it was left on", () => {
    const saved: State = { ...initialState, screen: "desk", index: 1, clock: 30 };
    const s = run(saved, { type: "RESTORE", state: saved }, { type: "SIGN_IN" });

    expect(s.screen).toBe("desk");
    expect(s.index).toBe(1);
    expect(s.clock).toBe(30);
  });

  it("SIGN_IN resumes a run saved at a day boundary on the day-end summary", () => {
    const saved = run(start(), { type: "ACCEPT" }, { type: "ACCEPT" });
    expect(saved.screen).toBe("dayend");

    const s = run(saved, { type: "RESTORE", state: saved }, { type: "SIGN_IN" });
    expect(s.screen).toBe("dayend");
  });

  it("SIGN_IN resumes a finished run on the ending", () => {
    const saved = run(
      start(),
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "ACCEPT" },
    );
    expect(saved.screen).toBe("ending");

    const s = run(saved, { type: "RESTORE", state: saved }, { type: "SIGN_IN" });
    expect(s.screen).toBe("ending");
  });

  it("ACCEPT advances the clock 30 minutes and the index by one", () => {
    const s = run(start(), { type: "ACCEPT" });
    expect(s.clock).toBe(30);
    expect(s.index).toBe(1);
  });

  it("SUBMIT advances the clock by the situation's cost", () => {
    const s = run(start(), { type: "SUBMIT", values: { bp: "128/82", pulse: "72" } });
    expect(s.clock).toBe(60);
  });

  it("SUBMIT with matching values records reviewedCorrect", () => {
    const s = run(start(), { type: "SUBMIT", values: { bp: "128/82", pulse: "72" } });
    expect(s.resolutions[0].outcomeKey).toBe("reviewedCorrect");
    expect(s.resolutions[0].correct).toBe(true);
    expect(s.tally.verified).toBe(1);
  });

  it("SUBMIT with a wrong value records reviewedWrong and its email", () => {
    const s = run(start(), { type: "SUBMIT", values: { bp: "128/28", pulse: "72" } });
    expect(s.resolutions[0].outcomeKey).toBe("reviewedWrong");
    expect(s.tally.errorsAccepted).toBe(1);
  });

  it("accepting a situation whose truth is NONE is correct", () => {
    const s = run(start(), { type: "ACCEPT" }, { type: "ACCEPT" });
    expect(s.resolutions[1].correct).toBe(true);
  });

  it("accepting a situation carrying an error is not correct", () => {
    const s = run(
      start(),
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "ACCEPT" },
    );
    expect(s.resolutions[2].correct).toBe(false);
    expect(s.tally.errorsAccepted).toBe(1);
  });

  it("screening verdict must match, not just the values", () => {
    const s = run(
      start(),
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "SUBMIT", values: { easi: "15.8" }, verdict: "eligible" },
    );
    expect(s.resolutions[2].outcomeKey).toBe("reviewedWrong");
  });

  it("finishing the last situation of a day moves to dayend", () => {
    const s = run(start(), { type: "ACCEPT" }, { type: "ACCEPT" });
    expect(s.screen).toBe("dayend");
  });

  it("finishing the last situation in the script moves to the ending", () => {
    const s = run(
      start(),
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "ACCEPT" },
    );
    expect(s.screen).toBe("ending");
  });

  it("BEGIN_DAY resets the clock and increments the day", () => {
    const s = run(start(), { type: "ACCEPT" }, { type: "ACCEPT" }, { type: "BEGIN_DAY" });
    expect(s.day).toBe(2);
    expect(s.clock).toBe(0);
    expect(s.screen).toBe("desk");
  });

  it("BEGIN_DAY commits the closing day's roster changes and emails", () => {
    const s = run(
      start(),
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
    );
    expect(s.roster.find((r) => r.id === "1047-019")?.status).toBe("Enrolled");
  });

  it("SKIP_DAY accepts every remaining situation in the current day", () => {
    const s = run(start(), { type: "SKIP_DAY" });
    expect(s.resolutions).toHaveLength(2);
    expect(s.resolutions.every((r) => r.action === "accepted")).toBe(true);
    expect(s.screen).toBe("dayend");
  });

  it("skipping a day that exhausts the script still commits its roster changes and emails", () => {
    const s = run(
      start(),
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "SKIP_DAY" },
    );
    expect(s.screen).toBe("ending");
    expect(s.roster.find((r) => r.id === "1047-019")?.status).toBe("Enrolled");
    expect(s.inbox.map((e) => e.id)).toEqual(expect.arrayContaining(["ENR-2", "AUD-1"]));
  });

  it("the final day of a run commits its consequences with no BEGIN_DAY to follow it", () => {
    const s = run(
      start(),
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "ACCEPT" },
    );
    expect(s.screen).toBe("ending");
    expect(s.roster.find((r) => r.id === "1047-019")?.status).toBe("Enrolled");
  });

  it("commits each day's consequences exactly once: a full run's inbox has exactly the expected emails", () => {
    const s = run(
      start(),
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "ACCEPT" },
    );
    // Fails if a day's ladder rung is dropped (the original bug) and equally fails if a
    // day is committed twice (a regression a plain "no duplicates" check would miss, since
    // dropping consequences never produces a duplicate).
    expect(s.inbox.map((e) => e.id)).toEqual(["ENR-1", "ENR-2", "AUD-1"]);
  });

  it("delivers a situation's arrivalEmail the moment it becomes current, mid-day", () => {
    const arrivalScript: Situation[] = [
      { ...FIXTURE_SCRIPT[0] },
      {
        ...FIXTURE_SCRIPT[1],
        arrivalEmail: { id: "ARR-1", from: "Test", subject: "Arrival", body: "..." },
      },
    ];
    const s = reducer(start(), { type: "ACCEPT" }, arrivalScript);

    // Fired immediately, not queued for the day's close: the day hasn't ended (both
    // situations are day 1), so this can only have come from resolve(), not applyConsequences.
    expect(s.screen).toBe("desk");
    expect(s.inbox.map((e) => e.id)).toEqual(["ARR-1"]);
  });
});
