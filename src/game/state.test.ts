import { describe, expect, it } from "vitest";

import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState, reducer } from "@/game/state";
import type { State } from "@/game/types";

const start = (): State => ({ ...initialState, screen: "desk" });
const run = (s: State, ...actions: Parameters<typeof reducer>[1][]) =>
  actions.reduce((acc, a) => reducer(acc, a, FIXTURE_SCRIPT), s);

describe("reducer", () => {
  it("SIGN_IN moves to the desk", () => {
    expect(reducer(initialState, { type: "SIGN_IN" }, FIXTURE_SCRIPT).screen).toBe("desk");
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
});
