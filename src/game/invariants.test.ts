import { describe, expect, it } from "vitest";

import { calibrate } from "@/game/ending";
import { FORMS } from "@/game/forms";
import { SCRIPT } from "@/game/script";
import { initialState } from "@/game/state";
import type { ErrorType, ItemType, Situation, State } from "@/game/types";

/**
 * This file locks §4 and §5 of the design spec in place: the run's shape, its error
 * budget, the guards that stop a player from learning a shortcut instead of the habit,
 * and the two set pieces the ending's argument rests on.
 *
 * Every assertion here has been verified by hand at some point during authoring. A
 * failure means the script drifted from the design, not that the assertion is wrong —
 * fix the script, never relax the check.
 */

/** A situation known, by construction, to carry a `vera` block. */
type Assisted = Situation & { vera: NonNullable<Situation["vera"]> };

/** Finds the one situation matching `pred`, or throws — a missing fixture should fail loudly. */
function theOneWhere<T>(arr: T[], pred: (t: T) => boolean, label: string): T {
  const found = arr.find(pred);
  if (!found) throw new Error(`invariant setup: expected to find ${label}, found none`);
  return found;
}

const assisted: Assisted[] = SCRIPT.filter((s): s is Assisted => s.vera !== undefined);
const wrong = assisted.filter((s) => s.truth.error !== "NONE");
const right = assisted.filter((s) => s.truth.error === "NONE");

describe("shape", () => {
  it("is nineteen situations across four days, 5/4/5/5", () => {
    expect(SCRIPT).toHaveLength(19);
    expect([1, 2, 3, 4].map((d) => SCRIPT.filter((s) => s.day === d).length)).toEqual([5, 4, 5, 5]);
  });

  it("gives every situation a unique id", () => {
    expect(new Set(SCRIPT.map((s) => s.id)).size).toBe(SCRIPT.length);
  });

  it("has sixteen situations carrying a vera block and three that don't", () => {
    // The three are day 1's manual morning, before VERA is installed — there is no
    // "her draft" to review because there is no her yet.
    expect(assisted).toHaveLength(16);
    const manual = SCRIPT.filter((s) => s.vera === undefined);
    expect(manual).toHaveLength(3);
    expect(manual.every((s) => s.day === 1)).toBe(true);
    expect(manual.every((s) => s.manual === true)).toBe(true);
  });

  it("only writes truth.entry keys that exist on the situation's own form", () => {
    // A key no field defines can never be matched against a submitted value, so
    // valuesMatch() in state.ts can never see it — the item would be unpassable by
    // manual review no matter what the player typed.
    for (const s of SCRIPT) {
      const fieldNames = new Set(FORMS[s.form].fields.map((f) => f.name));
      const badKeys = Object.keys(s.truth.entry).filter((k) => !fieldNames.has(k));
      expect(
        badKeys,
        `${s.id}: truth.entry has key(s) [${badKeys.join(", ")}] not in ${s.form}'s field list — ` +
          "an unmatchable key makes this item impossible to pass by manual review",
      ).toEqual([]);
    }
  });
});

describe("error budget", () => {
  // Rebalanced late in authoring: NONE 6, fabrication 3, normalization 2, omission 1,
  // misattribution 1, stale-context 1, threshold 1, uncatchable 1 — sixteen assisted
  // situations. This table is the ground truth; the design doc's §4 table must agree
  // with it, not the other way around.
  const expectedCounts: Record<ErrorType, number> = {
    NONE: 6,
    fabrication: 3,
    normalization: 2,
    omission: 1,
    misattribution: 1,
    "stale-context": 1,
    threshold: 1,
    UNCATCHABLE: 1,
  };

  it("matches the authored count for every error type", () => {
    for (const [type, expected] of Object.entries(expectedCounts) as [ErrorType, number][]) {
      const actual = assisted.filter((s) => s.truth.error === type).length;
      expect(actual, `expected ${expected} situation(s) of type "${type}", found ${actual}`).toBe(
        expected,
      );
    }
    // And nothing outside the table — the counts above must exhaust all sixteen.
    const total = Object.values(expectedCounts).reduce((a, b) => a + b, 0);
    expect(total).toBe(assisted.length);
  });

  it("uses every error type in the taxonomy at least once", () => {
    const used = new Set(SCRIPT.map((s) => s.truth.error));
    const taxonomy: ErrorType[] = [
      "NONE",
      "UNCATCHABLE",
      "fabrication",
      "omission",
      "misattribution",
      "stale-context",
      "normalization",
      "threshold",
    ];
    for (const type of taxonomy) {
      expect(used.has(type), `error type "${type}" is never used anywhere in the script`).toBe(
        true,
      );
    }
  });

  it("has exactly one uncatchable situation", () => {
    // The ending's whole argument (§5, item 6) depends on there being one and only one
    // item that no amount of verification could have caught.
    expect(wrong.filter((s) => s.truth.error === "UNCATCHABLE")).toHaveLength(1);
  });

  it("has exactly one category-1 harm and one category-2 harm", () => {
    // Category 1: research risk, nobody erred. Category 2: uncatchable tooling failure.
    // Two, and only two, situations carry a debrief category at all.
    expect(SCRIPT.filter((s) => s.debrief.category === 1)).toHaveLength(1);
    expect(SCRIPT.filter((s) => s.debrief.category === 2)).toHaveLength(1);
    expect(SCRIPT.filter((s) => s.debrief.category !== undefined)).toHaveLength(2);
  });
});

describe("leak guards", () => {
  it("makes her right at least twice in every item type", () => {
    // Once could be a fluke a player writes off; twice is a pattern. If any type read
    // "she's bad at this," the player would learn to distrust the type instead of
    // reading the desk.
    for (const type of ["screening", "data-entry", "safety"] as ItemType[]) {
      const ofType = assisted.filter((s) => s.type === type);
      const correct = ofType.filter((s) => s.truth.error === "NONE");
      expect(
        correct.length,
        `item type "${type}" has only ${correct.length} situation(s) where VERA is simply right — needs at least 2`,
      ).toBeGreaterThanOrEqual(2);
    }
  });

  it("never makes a whole day wrong", () => {
    // A day with zero right answers teaches "distrust everything today," which is a
    // different, easier game than the one this run is trying to teach.
    for (const day of [1, 2, 3, 4] as const) {
      const ofDay = assisted.filter((s) => s.day === day);
      if (ofDay.length === 0) continue;
      expect(
        ofDay.some((s) => s.truth.error === "NONE"),
        `day ${day} has no situation where VERA is simply right`,
      ).toBe(true);
    }
  });

  // A systematic length difference between her right and wrong summaries would teach
  // players to count words instead of reading them — exactly the shortcut this suite
  // exists to close off. 25% is loose enough to absorb ordinary topic-driven variance
  // (a two-page safety note narrates more than a four-field vitals table) while still
  // catching a summary that was visibly padded or trimmed to signal its own correctness.
  const WRONG_VS_RIGHT_LENGTH_TOLERANCE = 0.25;

  it("does not make her wrong summaries systematically longer than her right ones", () => {
    const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
    const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

    const wrongLen = mean(wrong.map((s) => words(s.vera.summary)));
    const rightLen = mean(right.map((s) => words(s.vera.summary)));
    const ratio = Math.abs(wrongLen - rightLen) / rightLen;

    expect(
      ratio,
      `mean wrong-summary length (${wrongLen.toFixed(1)} words) diverges from mean right-summary ` +
        `length (${rightLen.toFixed(1)} words) by ${(ratio * 100).toFixed(1)}%, over the ` +
        `${WRONG_VS_RIGHT_LENGTH_TOLERANCE * 100}% tolerance — a length tell would let players skip reading`,
    ).toBeLessThan(WRONG_VS_RIGHT_LENGTH_TOLERANCE);
  });

  it("never lets her hedge", () => {
    // VERA states things. A player who could catch a "probably" or "worth checking"
    // would be reading her tone, not the source documents.
    const hedges =
      /\b(?:I think|I believe|probably|possibly|might be|may be|not certain|unsure|appears to|seems to|I'm not sure|please double[- ]check|worth checking)\b/i;

    for (const s of assisted) {
      expect(s.vera.summary, `${s.id}: VERA's summary hedges`).not.toMatch(hedges);
    }
  });

  it("never lets her claim to have acted", () => {
    // VISION.md and the design doc are explicit: VERA reads, extracts, drafts, and
    // recommends. She never acts. If she ever claimed to, "ready for your review" would
    // stop meaning anything.
    const acted = /\bI have (?:submitted|filed|sent|signed|entered|saved|reported)\b/i;

    for (const s of assisted) {
      expect(s.vera.summary, `${s.id}: VERA's summary claims to have acted`).not.toMatch(acted);
    }
  });
});

describe("set pieces", () => {
  const uncatchable = theOneWhere(
    assisted,
    (s) => s.truth.error === "UNCATCHABLE",
    "the uncatchable situation",
  );
  const categoryOneHarm = theOneWhere(
    SCRIPT,
    (s) => s.debrief.category === 1,
    "the category-1 harm",
  );

  describe("item 6 — the uncatchable tooling failure", () => {
    it("has a desk where nothing disagrees with anything else on it", () => {
      // truth.entry deep-equal to vera.entry is the mechanic: the mislabeled specimen
      // makes every document downstream of the wrong identifier agree with every other
      // document, so there is nothing a more careful reading of the desk could surface.
      expect(uncatchable.truth.entry).toEqual(uncatchable.vera.entry);
    });

    it("costs the same whether or not the player reviewed it", () => {
      // If accepting and reviewing-correctly produced different outcomes, reading the
      // source would have mattered — which is precisely what "uncatchable" denies.
      expect(uncatchable.outcomes.accepted).toEqual(uncatchable.outcomes.reviewedCorrect);
    });

    it("is excluded from the ending's error tallies", () => {
      // Counting an impossible-to-catch item among the player's misses collapses
      // category 2 (uncatchable) into category 3 ("what got past you"), which the
      // design forbids as strongly as it forbids the reverse.
      const acceptedState: State = {
        ...initialState,
        resolutions: [
          {
            situationId: uncatchable.id,
            action: "accepted",
            correct: false,
            outcomeKey: "accepted",
          },
        ],
      };
      expect(calibrate(acceptedState, SCRIPT).errorsThroughUnverified).toBe(0);

      const reviewedState: State = {
        ...initialState,
        resolutions: [
          {
            situationId: uncatchable.id,
            action: "reviewed",
            correct: true,
            outcomeKey: "reviewedCorrect",
          },
        ],
      };
      expect(calibrate(reviewedState, SCRIPT).verifiedContainingError).toBe(0);
    });
  });

  describe("item 13 — the category-1 harm", () => {
    it("costs the same whether or not the player reviewed it", () => {
      // R. Jones's hospitalization happens regardless of what the player does with the
      // item — nobody erred, so there is no decision that could have changed it.
      expect(categoryOneHarm.outcomes.accepted).toEqual(categoryOneHarm.outcomes.reviewedCorrect);
    });

    it("carries a debrief line with no blame language", () => {
      // §7 of the design doc: category 1 is stated without blame. This is what
      // clinical research is, and the ending has to say so without implying the
      // player, or anyone, did something wrong.
      const blame =
        /\b(fault|blame|negligent|negligence|careless|your error|you (?:should|failed to)|preventable)\b/i;
      expect(categoryOneHarm.debrief.line).not.toMatch(blame);
    });
  });
});

describe("ordering", () => {
  it("ends the script on SCR-0218", () => {
    // The run ends on a decision where looking changes nothing (SCR-0218 is `NONE` —
    // plainly eligible either way). That is deliberate: the last choice a player makes
    // should not be the uncatchable item or a category-1 harm, either of which would
    // read as "the game gotcha'd you" rather than land the argument.
    expect(SCRIPT[SCRIPT.length - 1].id).toBe("SCR-0218");
  });
});
