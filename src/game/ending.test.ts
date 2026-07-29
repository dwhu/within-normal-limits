import { describe, expect, it } from "vitest";

import { buildAnswer, calibrate } from "@/game/ending";
import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState, reducer } from "@/game/state";
import type { State } from "@/game/types";

const play = (...actions: Parameters<typeof reducer>[1][]): State =>
  actions.reduce((s, a) => reducer(s, a, FIXTURE_SCRIPT), {
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
