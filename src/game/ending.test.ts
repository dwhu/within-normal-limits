import { describe, expect, it } from "vitest";

import { buildAnswer, calibrate } from "@/game/ending";
import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { SCRIPT } from "@/game/script";
import { initialState, reducer } from "@/game/state";
import type { State } from "@/game/types";

const play = (...actions: Parameters<typeof reducer>[1][]): State =>
  actions.reduce((s, a) => reducer(s, a, FIXTURE_SCRIPT), {
    ...initialState,
    screen: "desk",
  } as State);

const playScript = (...actions: Parameters<typeof reducer>[1][]): State =>
  actions.reduce((s, a) => reducer(s, a, SCRIPT), {
    ...initialState,
    screen: "desk",
  } as State);

const acceptAll = () =>
  play({ type: "ACCEPT" }, { type: "ACCEPT" }, { type: "BEGIN_DAY" }, { type: "ACCEPT" });

describe("buildAnswer", () => {
  it("returns one row per situation the player worked", () => {
    expect(buildAnswer(acceptAll(), FIXTURE_SCRIPT)).toHaveLength(3);
  });

  it("says what the player did", () => {
    expect(buildAnswer(acceptAll(), FIXTURE_SCRIPT)[1].action).toBe("Accepted as drafted");
  });

  it("carries the debrief line and its category", () => {
    const row = buildAnswer(acceptAll(), FIXTURE_SCRIPT)[2];
    expect(row.truth).toBe("EASI 15.8 is below the threshold of 16.");
    expect(row.category).toBe(3);
  });
});

describe("calibrate", () => {
  it("counts nothing verified when everything was accepted", () => {
    expect(calibrate(acceptAll(), FIXTURE_SCRIPT)).toMatchObject({
      verified: 0,
      verifiedContainingError: 0,
      errorsThroughUnverified: 1,
    });
  });

  it("counts a verified item that turned out to contain an error", () => {
    const s = play(
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "SUBMIT", values: { easi: "15.8" }, verdict: "screen-fail" },
    );

    expect(calibrate(s, FIXTURE_SCRIPT)).toMatchObject({
      verified: 1,
      verifiedContainingError: 1,
      errorsThroughUnverified: 0,
    });
  });

  it("does not count the day-1 manual items as verification of VERA", () => {
    const s = play({ type: "SUBMIT", values: { bp: "128/82", pulse: "72" } });
    expect(calibrate(s, FIXTURE_SCRIPT).verified).toBe(0);
  });
});

describe("calibrate — the uncatchable item (DE-1111)", () => {
  // Accepting all of day 1 leaves a known baseline: DE-1114 (normalization error,
  // accepted unreviewed) contributes 1 to errorsThroughUnverified and 0 to
  // verifiedContainingError. Day 2 opens on DE-1111, the uncatchable item — whatever
  // it adds beyond this baseline is its own, isolated contribution.
  const acceptDay1 = [
    { type: "ACCEPT" as const }, // SCR-0217 — manual, not scored against VERA
    { type: "ACCEPT" as const }, // DE-1109 — manual
    { type: "ACCEPT" as const }, // SAF-0031 — manual
    { type: "ACCEPT" as const }, // DE-1110 — NONE
    { type: "ACCEPT" as const }, // DE-1114 — normalization error, accepted unreviewed
  ];

  it("does not count an accepted uncatchable item as an error let through unverified", () => {
    const s = playScript(...acceptDay1, { type: "BEGIN_DAY" }, { type: "ACCEPT" });
    // Baseline from DE-1114 alone is 1. DE-1111 must not add a second.
    expect(calibrate(s, SCRIPT).errorsThroughUnverified).toBe(1);
  });

  it("does not count a verified uncatchable item as an error caught", () => {
    const s = playScript(
      ...acceptDay1,
      { type: "BEGIN_DAY" },
      {
        type: "SUBMIT",
        values: { alt: "19", ast: "22", creatinine: "0.8", eos: "0.31" },
      },
    );
    // Baseline is 0 — DE-1114 was accepted, not reviewed. DE-1111, reviewed correctly,
    // must not be counted as a verified item that turned out to contain an error.
    expect(calibrate(s, SCRIPT).verifiedContainingError).toBe(0);
  });
});
