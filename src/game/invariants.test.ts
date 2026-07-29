import { existsSync, readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

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

describe("catchability", () => {
  it("makes every catchable error differ from VERA on a field or the verdict", () => {
    // The invariant that has failed three times: an error the player has nowhere to
    // record is not an error, it is a second uncatchable. It failed on situation 14 (a
    // flagged lab value that was not a form field), on SAF-0032 (whose truth verdict
    // matched VERA's drafted one), and on SAF-0034 (a wrong-visit misattribution on a
    // form that was a verdict radio and nothing else — a player could click Manually
    // Review and Submit without opening the note and be scored as having caught it).
    const catchable = assisted.filter(
      (s) => s.truth.error !== "NONE" && s.truth.error !== "UNCATCHABLE",
    );

    for (const s of catchable) {
      const keys = new Set([...Object.keys(s.truth.entry), ...Object.keys(s.vera.entry)]);
      const differingFields = [...keys].filter(
        (k) => (s.truth.entry[k] ?? "") !== (s.vera.entry[k] ?? ""),
      );
      const verdictDiffers = s.truth.verdict !== s.vera.verdict;

      expect(
        differingFields.length > 0 || verdictDiffers,
        `${s.id} (${s.truth.error}): truth is identical to VERA's draft on every field of the ` +
          `${s.form} form and on the verdict, so submitting her draft untouched scores as ` +
          "catching the error — reading the source cannot change the outcome. Give the error a " +
          "field to land on, or move it onto the verdict.",
      ).toBe(true);
    }

    // Guards the guard: if the filter ever silently matched nothing, the loop above would
    // pass vacuously. Nine catchable errors of the ten, per §4.
    expect(catchable).toHaveLength(9);
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

describe("content on disk", () => {
  // vitest runs from the repo root, which is also where `public/` is served from.
  //
  // The trial documents are read from the `docs/` canon rather than from the copies under
  // `public/content/documents/`, which `npm run content` generates at build time: what this
  // suite is checking is the authored corpus, and reading it directly keeps the tests runnable
  // on a fresh clone that has never built.
  const DOCS_DIR = resolve(process.cwd(), "docs/trial_documents");
  const SOURCE_DIR = resolve(process.cwd(), "public/content/source");

  // `ASSUMPTIONS.md` and `index.md` sit alongside the corpus as authoring notes and are not
  // documents the player can open. The count assertion below is what keeps this list honest.
  const NOT_DOCUMENTS = new Set(["ASSUMPTIONS.md", "index.md"]);

  /**
   * `1047-009` but not the `1047-009` inside `SHP-1047-0091` or `TX-1047-00298`. The corpus
   * is full of shipment, transaction and note-to-file references built on the site number,
   * and a bare substring search reads every one of them as a participant.
   */
  const SUBJECT_ID = /(?<![-\w])1047-\d{3}(?!\d)/g;

  const subjectIdsIn = (text: string): string[] => text.match(SUBJECT_ID) ?? [];

  /**
   * Mentions of a situation's subject that are *not* a collision, each one checked by hand.
   *
   * Every entry here is an ID-format illustration — "the format is `1047-001`, four digits,
   * hyphen, three digits" — carrying no visit, no date, and no timeline, so there is nothing
   * in it for a played situation to contradict. `lab_manual.md` §2 additionally *defines* the
   * numbering as starting at 001, which is why that one cannot be retargeted at all.
   */
  const HARMLESS: { file: string; subject: string; why: string }[] = [
    {
      file: "lab_manual.md",
      subject: "1047-001",
      why: "requisition-field format spec (§2, §7, §12, appendix); states the numbering starts at 001",
    },
    {
      file: "icf.md",
      subject: "1047-001",
      why: "consent form's 'you are given a study number' example",
    },
    {
      file: "protocol.md",
      subject: "1047-001",
      why: "pseudonymisation clause's identifier example",
    },
  ];

  const docFiles = readdirSync(DOCS_DIR).filter((f) => f.endsWith(".md") && !NOT_DOCUMENTS.has(f));
  const subjects = new Set(SCRIPT.map((s) => s.subject));

  it("reads the fifteen trial documents off disk", () => {
    // If this ever finds nothing, every assertion below passes for the wrong reason.
    expect(docFiles).toHaveLength(15);
  });

  it("never lets a situation's subject id appear in the trial-document corpus", () => {
    // Four separate reworks were forced by this one class of bug: a manual, mockup or
    // worked example that dates a subject the script also works, so a player who opens the
    // documents is told their subject screen-failed last November, or had the visit they
    // are entering now on a different date. The roster and the script have been right every
    // time; the corpus example is always the outlier, and is retargeted to an unused ID.
    const collisions: string[] = [];

    for (const file of docFiles) {
      const text = readFileSync(`${DOCS_DIR}/${file}`, "utf8");
      const found = new Set(subjectIdsIn(text));
      for (const id of found) {
        if (!subjects.has(id)) continue;
        if (HARMLESS.some((h) => h.file === file && h.subject === id)) continue;
        const situations = SCRIPT.filter((s) => s.subject === id).map((s) => s.id);
        collisions.push(`${file} mentions ${id}, worked by ${situations.join(", ")}`);
      }
    }

    expect(
      collisions,
      `the trial corpus dates subjects the script also works:\n  ${collisions.join("\n  ")}\n` +
        "A player who opens the documents on one of these situations is handed a contradiction " +
        "the game then scores them wrong for believing. Retarget the corpus example to an " +
        "unused subject id (1047-026 and up), keeping every part of that example consistent " +
        "with itself, or add it to HARMLESS with a reason it cannot mislead.",
    ).toEqual([]);
  });

  it("keeps every HARMLESS entry live", () => {
    // A whitelist that outlives what it excused stops being a record of a judgement and
    // becomes a hole. If a mention is edited away, its entry has to go with it.
    for (const { file, subject, why } of HARMLESS) {
      const text = readFileSync(`${DOCS_DIR}/${file}`, "utf8");
      expect(
        subjectIdsIn(text).includes(subject),
        `HARMLESS lists ${subject} in ${file} (${why}) but it no longer appears there — delete the entry`,
      ).toBe(true);
    }
  });

  it("gives every situation its own source documents", () => {
    // Two situations sharing a source file means one of them is being verified against
    // another item's paperwork — either a copy-paste carry or a retarget half-applied.
    const all = SCRIPT.flatMap((s) => s.source.map((file) => ({ id: s.id, file })));
    const byFile = new Map<string, string[]>();
    for (const { id, file } of all) byFile.set(file, [...(byFile.get(file) ?? []), id]);

    const shared = [...byFile.entries()].filter(([, ids]) => ids.length > 1);
    expect(
      shared.map(([file, ids]) => `${file} is the source for ${ids.join(" and ")}`),
      "source documents must not be shared between situations",
    ).toEqual([]);
  });

  it("points every source reference at a file that exists", () => {
    // A missing source file is a situation the player cannot verify at all: the viewer
    // throws, and the only way through the item is to take VERA's word for it.
    const missing = SCRIPT.flatMap((s) =>
      s.source.filter((f) => !existsSync(`${SOURCE_DIR}/${f}`)).map((f) => `${s.id} → ${f}`),
    );
    expect(missing, "situations reference source documents that are not on disk").toEqual([]);
  });

  it("gives every query email its own id across situations", () => {
    // Within one situation `accepted` and `reviewedWrong` deliberately raise the same
    // query — the sponsor cannot tell the difference, which is the point. Across
    // situations a reused id means two different failures arrive in the inbox looking
    // like one, and the player draws the wrong line.
    const byId = new Map<string, Set<string>>();
    for (const s of SCRIPT) {
      for (const outcome of Object.values(s.outcomes)) {
        if (!outcome.email) continue;
        byId.set(outcome.email.id, (byId.get(outcome.email.id) ?? new Set()).add(s.id));
      }
    }

    const reused = [...byId.entries()].filter(([, ids]) => ids.size > 1);
    expect(
      reused.map(([email, ids]) => `${email} is raised by ${[...ids].join(" and ")}`),
      "one query id must belong to one situation",
    ).toEqual([]);
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
