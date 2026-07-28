# ICF Please — One Playable Run Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, playable four-day run of *ICF Please* — a Papers, Please-style clinical-research simulator in which the player accepts or manually verifies an AI assistant's output under a half-hour-block clock.

**Architecture:** A pure-TypeScript game engine (clock, queue, resolution, deferred consequences, scoring) with zero React dependencies, driven by a statically-authored content layer, rendered by an overlapping-windows desktop UI. Correctness is computed only against each situation's `truth` block, never against VERA's output, so the `vera` block can later be swapped for a live LLM call without touching the engine.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind v4, Vitest + Testing Library, `react-markdown` + `remark-gfm`. Entirely client-side — no server, no API routes, no LLM calls.

**Source spec:** [`docs/superpowers/specs/2026-07-28-icf-please-run-design.md`](../specs/2026-07-28-icf-please-run-design.md). Read §2 (time arithmetic) and §4 (the manifest) before starting — they are the load-bearing sections and most tasks depend on their exact numbers.

## Global Constraints

- **Dates are always `DD-MMM-YYYY`** (e.g. `08-JAN-2024`). Never any other format, in code or content.
- **Subjects are always written `1047-018 · L. Lit`** — ID, middle dot, initial and surname. Never one without the other.
- **Temperatures are always `2–8 °C`** with an en dash.
- **The run is Mon 08-JAN-2024 to Thu 11-JAN-2024.** Randomization closes `12-JAN-2024 08:00 PT`.
- **A day is 16 half-hour blocks**, 8:00 AM to 4:00 PM. `Accept` = 1 block. `Manually Review` = 3 blocks (screening) or 2 blocks (data entry, safety).
- **Two verbs only.** There is no batch review, no reject, no flag, no escalate. Adding one is a spec violation.
- **VERA never acts.** Every line she speaks is "I have drafted…" or "…ready for your review". Never "I have submitted", "I have filed", "I have sent".
- **No meters, no HUD, no modal dialogs, no score.** The only non-diegetic element permitted in the entire game is the `Skip day` button on the day-end summary.
- **The engine never reads `situation.vera` to determine correctness.** Only `situation.truth`.
- **Every generated content file carries the SIMULATED DOCUMENT banner** verbatim from `docs/STUDY_FACTS.md` §2.
- **TypeScript strict mode is on.** No `any`. No non-null assertions except where a test has just established the value.

---

## File Structure

**Engine — pure TypeScript, no React imports.**

| File | Responsibility |
|---|---|
| `src/game/types.ts` | Every shared type. No logic. |
| `src/game/engine/clock.ts` | Block arithmetic, clock formatting, day-start taxes |
| `src/game/engine/queue.ts` | Today's queue, rollover, screening-window expiry |
| `src/game/engine/resolve.ts` | `(action, situation, submission) → outcome key + correctness` |
| `src/game/engine/consequences.ts` | Collecting scheduled consequences and delivering them at a day-end |
| `src/game/engine/scoring.ts` | The answer rows, the audit-finding slots, calibration stats |
| `src/game/engine/state.ts` | The reducer — the single place game state changes |
| `src/game/engine/persistence.ts` | localStorage load/save, version-stamped |

**Content — data only, no logic.**

| File | Responsibility |
|---|---|
| `src/game/content/forms.ts` | The three eCRF templates |
| `src/game/content/subjects.ts` | Roster seed at 8:00 AM Monday |
| `src/game/content/ladders.ts` | Scripted rungs and their block costs |
| `src/game/content/emails.ts` | Every authored email, keyed by id |
| `src/game/content/situations/day{1,2,3,4}.ts` | Items 1–5, 6–9, 10–14, 15–19 |
| `src/game/content/situations/index.ts` | The manifest — flat array of all 19 |
| `src/game/invariants.test.ts` | Encodes spec §2 and §4 so edits cannot silently break the run |

**UI.**

| File | Responsibility |
|---|---|
| `src/components/desk/useWindows.ts` | Window state: position, size, z-order, drag, clamp |
| `src/components/desk/WindowFrame.tsx` | The beveled chrome + title bar drag handle |
| `src/components/desk/Taskbar.tsx` | Start button, one button per window, clock and date |
| `src/components/desk/Desk.tsx` | Composes windows + taskbar + rail; owns auto-placement |
| `src/components/windows/WorkQueue.tsx` | The base window — item list and selection |
| `src/components/windows/DocViewer.tsx` | Markdown render + full-text find |
| `src/components/windows/ECRF.tsx` | The three form templates + submission |
| `src/components/windows/Inbox.tsx` | Read-only message list |
| `src/components/windows/Roster.tsx` | Subject list with statuses |
| `src/components/windows/DocumentsList.tsx` | The 15-document library index |
| `src/components/vera/Rail.tsx` | Fixed right rail — empty state, then her |
| `src/components/screens/*.tsx` | SignIn, DayEnd, Answer, AuditFinding, ThePoint |
| `src/app/page.tsx` | Phase switch — which screen is showing |
| `src/app/globals.css` | The aesthetic split: EDC chrome vs VERA |

**Static content — must live under `public/` to be fetchable at runtime.**

| Path | Contents |
|---|---|
| `public/content/documents/*.md` | The 15 trial documents, copied from `docs/trial_documents/` |
| `public/content/source/*.md` | Per-item source documents, 1–3 pages each |

> **Note on the spec:** §8 of the design spec shows `content/documents/` at the repo root. It must be `public/content/documents/` for `fetch()` to reach it in Next.js. This plan uses the corrected path.

---

# Phase 1 — Engine

Pure TypeScript. Every task in this phase is testable without rendering anything.

---

### Task 1: Types and the clock

**Files:**
- Create: `src/game/types.ts`
- Create: `src/game/engine/clock.ts`
- Test: `src/game/engine/clock.test.ts`

**Interfaces:**
- Consumes: nothing
- Produces: every type in `types.ts`; `BLOCKS_PER_DAY`, `blocksToClock(blocksUsed: number): string`, `formatRunDate(day: DayNumber): string`

- [ ] **Step 1: Write `src/game/types.ts`**

```ts
export type DayNumber = 1 | 2 | 3 | 4;
export type ItemType = "screening" | "data-entry" | "safety";
export type Action = "accept" | "manual";

export type ErrorType =
  | "NONE"
  | "UNCATCHABLE"
  | "fabrication"
  | "omission"
  | "misattribution"
  | "stale-context"
  | "normalization"
  | "threshold-overconfidence";

export type OutcomeKey =
  | "acceptedCorrect"
  | "acceptedWrong"
  | "manualCorrect"
  | "manualWrong"
  | "unworked";

export type FormTemplate = "vitals" | "lab-panel" | "screening-eligibility";
export type FormFieldSpec = { key: string; label: string; unit?: string };
export type FormSpec = { template: FormTemplate; fields: FormFieldSpec[] };
export type FormValues = Record<string, string>;

/** Screening and safety items resolve to one authored verdict string. */
export type Verdict = string;

export type SubjectStatus =
  | "Enrolled"
  | "Withdrawn (by subject)"
  | "Withdrawn (hospitalized)"
  | "Screening"
  | "Screen failed"
  | "Screen failed (window expired)"
  | "Randomized";

export type Subject = {
  id: string;
  /** Initial and surname, e.g. "L. Lit". Rendered as `${id} · ${name}`. */
  name: string;
  status: SubjectStatus;
  /** DD-MMM-YYYY. Present only while status is "Screening". */
  windowCloses?: string;
  /** e.g. "Week 16". Present only while enrolled. */
  visit?: string;
};

export type Consequence =
  | { kind: "email"; emailId: string; deliverAtDayEnd: DayNumber }
  | {
      kind: "query";
      queryId: string;
      subjectId: string;
      text: string;
      deliverAtDayEnd: DayNumber;
    }
  | {
      kind: "roster";
      subjectId: string;
      status: SubjectStatus;
      deliverAtDayEnd: DayNumber;
    };

export type Situation = {
  id: string;
  day: DayNumber;
  type: ItemType;
  subjectId: string;
  title: string;
  /** The one-line queue row. */
  blurb: string;
  /** Day 1 morning: no Accept path exists. */
  manual: boolean;
  manualCost: 2 | 3;
  /** Filenames under public/content/source/, without the directory. */
  sourceDocs: string[];
  form: FormSpec;
  /** ISOLATED. Swappable for a live LLM call. Null on forced-manual items. */
  vera: { summary: string; entry: FormValues; verdict?: Verdict } | null;
  /** The engine compares submissions against this, never against `vera`. */
  truth: {
    errorType: ErrorType;
    values: FormValues;
    verdict?: Verdict;
    /** Where in source the error is visible. Empty string when uncatchable. */
    tell: string;
  };
  outcomes: Partial<Record<OutcomeKey, Consequence[]>>;
  debrief: { line: string; category?: 1 | 2 | 3 };
};

export type InboxMessage = {
  id: string;
  from: string;
  subject: string;
  body: string;
  /** The day-end at which it landed. Day 0 means it was there at sign-in. */
  arrivedDay: number;
};

export type WorkRecord = {
  situationId: string;
  day: DayNumber;
  action: Action;
  correct: boolean;
  outcomeKey: OutcomeKey;
  submitted?: FormValues;
  verdict?: Verdict;
};

export type Phase =
  | "signin"
  | "desk"
  | "dayend"
  | "answer"
  | "audit"
  | "point";

export type GameState = {
  version: number;
  phase: Phase;
  day: DayNumber;
  blocksUsed: number;
  blocksAvailable: number;
  /**
   * Blocks taken off the top of today by queries and ladder rungs, spent
   * before the player touches the queue. The day does not get shorter — it
   * begins later, so the taskbar clock reads `blocksTaxed + blocksUsed`.
   * blocksTaxed + blocksAvailable is always BLOCKS_PER_DAY.
   */
  blocksTaxed: number;
  /** Situation ids queued for today, in order, including rollover. */
  queue: string[];
  worked: Record<string, WorkRecord>;
  roster: Record<string, Subject>;
  inbox: InboxMessage[];
  /** Consequences scheduled but not yet delivered. */
  pending: Consequence[];
  /** Queries delivered at the last day-end; taxes tomorrow. */
  openQueries: number;
  randomized: number;
};
```

- [ ] **Step 2: Write the failing test**

Create `src/game/engine/clock.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { BLOCKS_PER_DAY, blocksToClock, formatRunDate } from "./clock";

describe("clock", () => {
  it("is sixteen blocks long", () => {
    expect(BLOCKS_PER_DAY).toBe(16);
  });

  it("renders the start of the day", () => {
    expect(blocksToClock(0)).toBe("8:00 AM");
  });

  it("renders half-hour steps", () => {
    expect(blocksToClock(1)).toBe("8:30 AM");
    expect(blocksToClock(7)).toBe("11:30 AM");
  });

  it("crosses noon correctly", () => {
    expect(blocksToClock(8)).toBe("12:00 PM");
    expect(blocksToClock(9)).toBe("12:30 PM");
    expect(blocksToClock(10)).toBe("1:00 PM");
  });

  it("renders the end of the day", () => {
    expect(blocksToClock(BLOCKS_PER_DAY)).toBe("4:00 PM");
  });

  it("formats run dates in DD-MMM-YYYY", () => {
    expect(formatRunDate(1)).toBe("08-JAN-2024");
    expect(formatRunDate(4)).toBe("11-JAN-2024");
  });
});
```

- [ ] **Step 3: Run it and watch it fail**

Run: `npx vitest run src/game/engine/clock.test.ts`
Expected: FAIL — `Failed to resolve import "./clock"`

- [ ] **Step 4: Write `src/game/engine/clock.ts`**

```ts
import type { DayNumber } from "../types";

export const BLOCKS_PER_DAY = 16;
const DAY_START_MINUTES = 8 * 60;
const MINUTES_PER_BLOCK = 30;

/** Wall-clock time after `blocksUsed` half-hour blocks of an 8:00 AM start. */
export function blocksToClock(blocksUsed: number): string {
  const total = DAY_START_MINUTES + blocksUsed * MINUTES_PER_BLOCK;
  const hour24 = Math.floor(total / 60);
  const minute = total % 60;
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${suffix}`;
}

const RUN_DATES: Record<DayNumber, string> = {
  1: "08-JAN-2024",
  2: "09-JAN-2024",
  3: "10-JAN-2024",
  4: "11-JAN-2024",
};

export function formatRunDate(day: DayNumber): string {
  return RUN_DATES[day];
}

/** The morning after day 4. Randomization closes here and does not move. */
export const RANDOMIZATION_CLOSES = "12-JAN-2024 08:00 PT";
```

- [ ] **Step 5: Run it and watch it pass**

Run: `npx vitest run src/game/engine/clock.test.ts`
Expected: PASS, 6 tests

- [ ] **Step 6: Typecheck and commit**

```bash
npm run typecheck
git add src/game/types.ts src/game/engine/clock.ts src/game/engine/clock.test.ts
git commit -m "feat(engine): game types and the half-hour block clock"
```

---

### Task 2: Ladder taxes and available blocks

The taxes are what make day 4 overflow. Spec §2 gives the exact numbers; this task encodes them.

**Files:**
- Create: `src/game/content/ladders.ts`
- Modify: `src/game/engine/clock.ts`
- Test: `src/game/engine/clock.test.ts` (append)

**Interfaces:**
- Consumes: `DayNumber` from `types.ts`
- Produces: `LADDER_RUNGS: LadderRung[]`, `ladderTaxBlocks(day: DayNumber): number`, `availableBlocks(day: DayNumber, openQueries: number): number`

- [ ] **Step 1: Write `src/game/content/ladders.ts`**

```ts
import type { DayNumber } from "../types";

export type LadderRung = {
  id: string;
  ladder: "enrollment" | "audit";
  rung: number;
  /** Fires at the end of this day. */
  firesAtDayEnd: DayNumber;
  emailId: string;
  /** Blocks this costs on each subsequent day. 0 = costs no time. */
  dailyTaxBlocks: number;
  /** Blocks this costs once, on this specific day. */
  oneOffTaxBlocks: number;
  oneOffTaxDay?: DayNumber;
};

/**
 * Both ladders are scripted — they fire regardless of player performance.
 * Their accumulated cost on day 4 is what makes a verify-everything run
 * overflow with zero rollover and zero mistakes. See spec §2.
 */
export const LADDER_RUNGS: LadderRung[] = [
  {
    id: "enroll-1",
    ladder: "enrollment",
    rung: 1,
    firesAtDayEnd: 1,
    emailId: "email-enroll-nudge",
    dailyTaxBlocks: 0,
    oneOffTaxBlocks: 0,
  },
  {
    id: "enroll-2",
    ladder: "enrollment",
    rung: 2,
    firesAtDayEnd: 2,
    emailId: "email-enroll-call",
    dailyTaxBlocks: 0,
    // "Our ops lead has asked for a call Thursday" — the call is on day 4.
    oneOffTaxBlocks: 2,
    oneOffTaxDay: 4,
  },
  {
    id: "audit-1",
    ladder: "audit",
    rung: 1,
    firesAtDayEnd: 2,
    emailId: "email-audit-query-volume",
    dailyTaxBlocks: 0,
    oneOffTaxBlocks: 0,
  },
  {
    id: "enroll-3",
    ladder: "enrollment",
    rung: 3,
    firesAtDayEnd: 3,
    emailId: "email-enroll-daily-reporting",
    // Daily enrollment reporting, every day for the rest of the run.
    dailyTaxBlocks: 1,
    oneOffTaxBlocks: 0,
  },
  {
    id: "audit-2",
    ladder: "audit",
    rung: 2,
    firesAtDayEnd: 3,
    emailId: "email-audit-for-cause",
    dailyTaxBlocks: 0,
    // Document prep for the announced for-cause audit.
    oneOffTaxBlocks: 2,
    oneOffTaxDay: 4,
  },
];

/** Total blocks the ladders take off the top of `day`. */
export function ladderTaxBlocks(day: DayNumber): number {
  return LADDER_RUNGS.reduce((total, rung) => {
    const daily = rung.firesAtDayEnd < day ? rung.dailyTaxBlocks : 0;
    const oneOff = rung.oneOffTaxDay === day ? rung.oneOffTaxBlocks : 0;
    return total + daily + oneOff;
  }, 0);
}
```

- [ ] **Step 2: Write the failing test**

Append to `src/game/engine/clock.test.ts`:

```ts
import { ladderTaxBlocks } from "../content/ladders";
import { availableBlocks } from "./clock";

describe("day-start taxes", () => {
  it("costs nothing on days 1 and 2", () => {
    expect(ladderTaxBlocks(1)).toBe(0);
    expect(ladderTaxBlocks(2)).toBe(0);
  });

  it("costs nothing on day 3 — no rung has billed yet", () => {
    expect(ladderTaxBlocks(3)).toBe(0);
  });

  it("costs five blocks on day 4: reporting, the call, and audit prep", () => {
    expect(ladderTaxBlocks(4)).toBe(5);
  });

  it("bills thirty minutes per open query", () => {
    expect(availableBlocks(3, 2)).toBe(14);
    expect(availableBlocks(3, 3)).toBe(13);
  });

  it("leaves day 4 unable to absorb its own queue", () => {
    // Day 4's full manual cost is 12 blocks (spec §4). One query is the floor.
    expect(availableBlocks(4, 1)).toBe(10);
    expect(availableBlocks(4, 2)).toBe(9);
  });
});
```

- [ ] **Step 3: Run it and watch it fail**

Run: `npx vitest run src/game/engine/clock.test.ts`
Expected: FAIL — `availableBlocks is not a function`

- [ ] **Step 4: Add `availableBlocks` to `src/game/engine/clock.ts`**

```ts
import { ladderTaxBlocks } from "../content/ladders";

/**
 * Blocks the player actually gets. Taxes are deducted before they touch the
 * queue, so the day simply begins later. Never returns less than zero.
 */
export function availableBlocks(day: DayNumber, openQueries: number): number {
  const taxes = ladderTaxBlocks(day) + openQueries;
  return Math.max(0, BLOCKS_PER_DAY - taxes);
}
```

Add the import at the top of the file alongside the existing `types` import.

- [ ] **Step 5: Run it and watch it pass**

Run: `npx vitest run src/game/engine/clock.test.ts`
Expected: PASS, 11 tests

- [ ] **Step 6: Typecheck and commit**

```bash
npm run typecheck
git add src/game/content/ladders.ts src/game/engine/clock.ts src/game/engine/clock.test.ts
git commit -m "feat(engine): scripted ladder taxes and available-block arithmetic"
```

---

### Task 3: Queue building, rollover, and window expiry

**Files:**
- Create: `src/game/engine/queue.ts`
- Test: `src/game/engine/queue.test.ts`

**Interfaces:**
- Consumes: `Situation`, `Subject`, `DayNumber`, `GameState` from `types.ts`; `formatRunDate` from `clock.ts`
- Produces: `buildQueue(day, allSituations, rolledOver): string[]`, `expireWindows(day, queue, situations, roster): { expired: string[]; roster: Record<string, Subject> }`

- [ ] **Step 1: Write the failing test**

Create `src/game/engine/queue.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import type { Situation, Subject } from "../types";
import { buildQueue, expireWindows } from "./queue";

function situation(over: Partial<Situation> & Pick<Situation, "id" | "day">): Situation {
  return {
    type: "data-entry",
    subjectId: "1047-009",
    title: "t",
    blurb: "b",
    manual: false,
    manualCost: 2,
    sourceDocs: [],
    form: { template: "vitals", fields: [] },
    vera: { summary: "s", entry: {} },
    truth: { errorType: "NONE", values: {}, tell: "" },
    outcomes: {},
    debrief: { line: "" },
    ...over,
  } as Situation;
}

const ALL: Situation[] = [
  situation({ id: "A", day: 1 }),
  situation({ id: "B", day: 2 }),
  situation({ id: "C", day: 2 }),
];

describe("buildQueue", () => {
  it("returns only today's situations when nothing rolled over", () => {
    expect(buildQueue(2, ALL, [])).toEqual(["B", "C"]);
  });

  it("puts rolled-over items on top of today's queue", () => {
    expect(buildQueue(2, ALL, ["A"])).toEqual(["A", "B", "C"]);
  });
});

describe("expireWindows", () => {
  const roster: Record<string, Subject> = {
    "1047-018": {
      id: "1047-018",
      name: "L. Lit",
      status: "Screening",
      windowCloses: "11-JAN-2024",
    },
    "1047-019": {
      id: "1047-019",
      name: "R. Amaya",
      status: "Screening",
      windowCloses: "12-JAN-2024",
    },
  };

  const screening: Situation[] = [
    situation({ id: "SCR-0218", day: 3, type: "screening", subjectId: "1047-018", manualCost: 3 }),
    situation({ id: "SCR-0219", day: 3, type: "screening", subjectId: "1047-019", manualCost: 3 }),
  ];

  it("expires a screening item whose window closed today", () => {
    const result = expireWindows(4, ["SCR-0218", "SCR-0219"], screening, roster);

    expect(result.expired).toEqual(["SCR-0218"]);
    expect(result.roster["1047-018"].status).toBe("Screen failed (window expired)");
    expect(result.roster["1047-019"].status).toBe("Screening");
  });

  it("leaves an open window alone before its date", () => {
    const result = expireWindows(3, ["SCR-0218"], screening, roster);

    expect(result.expired).toEqual([]);
    expect(result.roster["1047-018"].status).toBe("Screening");
  });

  it("expires every remaining screening item at the end of day 4", () => {
    const result = expireWindows(4, ["SCR-0219"], screening, roster, {
      randomizationClosesTomorrow: true,
    });

    expect(result.expired).toEqual(["SCR-0219"]);
    expect(result.roster["1047-019"].status).toBe("Screen failed (window expired)");
  });

  it("ignores non-screening items entirely", () => {
    const result = expireWindows(4, ["A"], ALL, roster, {
      randomizationClosesTomorrow: true,
    });

    expect(result.expired).toEqual([]);
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `npx vitest run src/game/engine/queue.test.ts`
Expected: FAIL — `Failed to resolve import "./queue"`

- [ ] **Step 3: Write `src/game/engine/queue.ts`**

```ts
import type { DayNumber, Situation, Subject } from "../types";
import { formatRunDate } from "./clock";

/** Rolled-over items go on top of today's — that is how the backlog compounds. */
export function buildQueue(
  day: DayNumber,
  all: Situation[],
  rolledOver: string[],
): string[] {
  const today = all.filter((s) => s.day === day).map((s) => s.id);
  return [...rolledOver, ...today];
}

type ExpireOptions = { randomizationClosesTomorrow?: boolean };

/**
 * Run at the 4:00 PM stop. Any unworked screening item whose window has closed
 * becomes a screen failure. At the end of day 4 every remaining screening item
 * expires regardless of window, because randomization closes the next morning.
 */
export function expireWindows(
  day: DayNumber,
  unworkedQueue: string[],
  all: Situation[],
  roster: Record<string, Subject>,
  options: ExpireOptions = {},
): { expired: string[]; roster: Record<string, Subject> } {
  const byId = new Map(all.map((s) => [s.id, s]));
  const today = formatRunDate(day);
  const expired: string[] = [];
  const next = { ...roster };

  for (const id of unworkedQueue) {
    const situation = byId.get(id);
    if (!situation || situation.type !== "screening") continue;

    const subject = next[situation.subjectId];
    if (!subject || subject.status !== "Screening") continue;

    // Compare day-of-month numerically rather than lexically — every run date
    // is in JAN-2024, but string comparison would break the moment one isn't.
    const closedByDate =
      subject.windowCloses !== undefined &&
      dayOfMonth(subject.windowCloses) <= dayOfMonth(today);

    if (!options.randomizationClosesTomorrow && !closedByDate) continue;

    expired.push(id);
    next[situation.subjectId] = {
      ...subject,
      status: "Screen failed (window expired)",
      windowCloses: undefined,
    };
  }

  return { expired, roster: next };
}

function dayOfMonth(date: string): number {
  return Number.parseInt(date.slice(0, 2), 10);
}
```

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/game/engine/queue.test.ts`
Expected: PASS, 6 tests

- [ ] **Step 5: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/game/engine/queue.ts src/game/engine/queue.test.ts
git commit -m "feat(engine): queue building, rollover, and screening-window expiry"
```

---

### Task 4: Resolving an action into an outcome

This is where the engine decides whether the player was right. It reads `truth` and never `vera`.

**Files:**
- Create: `src/game/engine/resolve.ts`
- Test: `src/game/engine/resolve.test.ts`

**Interfaces:**
- Consumes: `Situation`, `Action`, `FormValues`, `Verdict`, `OutcomeKey`, `WorkRecord`
- Produces: `resolve(situation, action, day, submission?): WorkRecord`, `blockCost(situation, action): number`

- [ ] **Step 1: Write the failing test**

Create `src/game/engine/resolve.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import type { Situation } from "../types";
import { blockCost, resolve } from "./resolve";

const dataEntry: Situation = {
  id: "DE-1113",
  day: 3,
  type: "data-entry",
  subjectId: "1047-011",
  title: "Week 20 central lab panel",
  blurb: "Week 20 labs",
  manual: false,
  manualCost: 2,
  sourceDocs: ["de-1113-lab.md"],
  form: {
    template: "lab-panel",
    fields: [
      { key: "alt", label: "ALT", unit: "U/L" },
      { key: "ast", label: "AST", unit: "U/L" },
    ],
  },
  // She states an ALT that appears nowhere in the source. Fabrication.
  vera: { summary: "ALT 42 U/L, AST 31 U/L.", entry: { alt: "42", ast: "31" } },
  truth: {
    errorType: "fabrication",
    values: { alt: "24", ast: "31" },
    tell: "Lab report page 1 — ALT reads 24. No value of 42 appears anywhere.",
  },
  outcomes: {},
  debrief: { line: "" },
};

const screening: Situation = {
  ...dataEntry,
  id: "SCR-0219",
  type: "screening",
  manualCost: 3,
  subjectId: "1047-019",
  form: { template: "screening-eligibility", fields: [] },
  vera: { summary: "Meets all criteria.", entry: {}, verdict: "eligible" },
  truth: {
    errorType: "threshold-overconfidence",
    values: {},
    verdict: "screen-fail",
    tell: "Screening packet page 2 — EASI 15.8, below the 16 threshold.",
  },
};

describe("blockCost", () => {
  it("charges one block to accept", () => {
    expect(blockCost(dataEntry, "accept")).toBe(1);
    expect(blockCost(screening, "accept")).toBe(1);
  });

  it("charges the item's manual cost to review by hand", () => {
    expect(blockCost(dataEntry, "manual")).toBe(2);
    expect(blockCost(screening, "manual")).toBe(3);
  });
});

describe("resolve", () => {
  it("marks accepting a fabrication as wrong", () => {
    const record = resolve(dataEntry, "accept", 3);

    expect(record.correct).toBe(false);
    expect(record.outcomeKey).toBe("acceptedWrong");
  });

  it("marks accepting a correct output as right", () => {
    const clean: Situation = {
      ...dataEntry,
      vera: { summary: "ALT 24 U/L, AST 31 U/L.", entry: { alt: "24", ast: "31" } },
      truth: { errorType: "NONE", values: { alt: "24", ast: "31" }, tell: "" },
    };

    expect(resolve(clean, "accept", 3).outcomeKey).toBe("acceptedCorrect");
  });

  it("marks a manual submission matching truth as right", () => {
    const record = resolve(dataEntry, "manual", 3, { values: { alt: "24", ast: "31" } });

    expect(record.correct).toBe(true);
    expect(record.outcomeKey).toBe("manualCorrect");
  });

  it("marks a mistyped manual submission as wrong", () => {
    const record = resolve(dataEntry, "manual", 3, { values: { alt: "42", ast: "31" } });

    expect(record.outcomeKey).toBe("manualWrong");
  });

  it("ignores surrounding whitespace and case in typed values", () => {
    const record = resolve(dataEntry, "manual", 3, { values: { alt: " 24 ", ast: "31" } });

    expect(record.correct).toBe(true);
  });

  it("compares the verdict, not the values, on screening items", () => {
    expect(resolve(screening, "manual", 3, { verdict: "screen-fail" }).correct).toBe(true);
    expect(resolve(screening, "manual", 3, { verdict: "eligible" }).correct).toBe(false);
  });

  it("counts an accepted uncatchable item as wrong but records it as uncatchable", () => {
    const uncatchable: Situation = {
      ...dataEntry,
      truth: { errorType: "UNCATCHABLE", values: { alt: "24", ast: "31" }, tell: "" },
    };
    const record = resolve(uncatchable, "accept", 2);

    expect(record.correct).toBe(false);
  });

  it("counts a manually reviewed uncatchable item as wrong too", () => {
    // The whole point: verifying does not help. The source agrees with her.
    const uncatchable: Situation = {
      ...dataEntry,
      truth: { errorType: "UNCATCHABLE", values: { alt: "24", ast: "31" }, tell: "" },
    };
    const record = resolve(uncatchable, "manual", 2, { values: { alt: "24", ast: "31" } });

    expect(record.correct).toBe(false);
    expect(record.outcomeKey).toBe("manualWrong");
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `npx vitest run src/game/engine/resolve.test.ts`
Expected: FAIL — `Failed to resolve import "./resolve"`

- [ ] **Step 3: Write `src/game/engine/resolve.ts`**

```ts
import type {
  Action,
  DayNumber,
  FormValues,
  OutcomeKey,
  Situation,
  Verdict,
  WorkRecord,
} from "../types";

export type Submission = { values?: FormValues; verdict?: Verdict };

export function blockCost(situation: Situation, action: Action): number {
  return action === "accept" ? 1 : situation.manualCost;
}

/**
 * Decides whether the player got it right.
 *
 * Reads `situation.truth` only. It must never read `situation.vera` — that
 * separation is what lets the vera block be replaced by a live LLM call
 * without touching the engine.
 *
 * An UNCATCHABLE item is wrong whichever verb the player chose. Nothing on
 * their desk disagreed with anything else on their desk.
 */
export function resolve(
  situation: Situation,
  action: Action,
  day: DayNumber,
  submission: Submission = {},
): WorkRecord {
  const correct =
    situation.truth.errorType === "UNCATCHABLE"
      ? false
      : action === "accept"
        ? situation.truth.errorType === "NONE"
        : matchesTruth(situation, submission);

  const outcomeKey: OutcomeKey =
    action === "accept"
      ? correct
        ? "acceptedCorrect"
        : "acceptedWrong"
      : correct
        ? "manualCorrect"
        : "manualWrong";

  return {
    situationId: situation.id,
    day,
    action,
    correct,
    outcomeKey,
    submitted: submission.values,
    verdict: submission.verdict,
  };
}

function matchesTruth(situation: Situation, submission: Submission): boolean {
  if (situation.type === "data-entry") {
    return Object.entries(situation.truth.values).every(
      ([key, expected]) => normalise(submission.values?.[key]) === normalise(expected),
    );
  }
  return submission.verdict === situation.truth.verdict;
}

function normalise(value: string | undefined): string {
  return (value ?? "").trim().toLowerCase();
}
```

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/game/engine/resolve.test.ts`
Expected: PASS, 10 tests

- [ ] **Step 5: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/game/engine/resolve.ts src/game/engine/resolve.test.ts
git commit -m "feat(engine): resolve actions against ground truth, never against VERA"
```

---

### Task 5: Deferred consequences

Consequences never fire at the moment of the mistake. They are collected when an item resolves and delivered at a later day-end, in their native channel.

**Files:**
- Create: `src/game/engine/consequences.ts`
- Test: `src/game/engine/consequences.test.ts`

**Interfaces:**
- Consumes: `Consequence`, `Situation`, `WorkRecord`, `Subject`, `InboxMessage`, `DayNumber`
- Produces: `collect(situation, outcomeKey): Consequence[]`, `deliver(dayEnd, pending, roster, emails): DeliveryResult`

- [ ] **Step 1: Write the failing test**

Create `src/game/engine/consequences.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import type { Consequence, Situation, Subject } from "../types";
import { collect, deliver } from "./consequences";

const situation = {
  id: "DE-1113",
  outcomes: {
    acceptedWrong: [
      {
        kind: "query",
        queryId: "DQ-0114",
        subjectId: "1047-011",
        text: "Reported ALT (42) does not match source (24). Please verify and respond.",
        deliverAtDayEnd: 4,
      },
    ],
    acceptedCorrect: [],
  },
} as unknown as Situation;

describe("collect", () => {
  it("returns the consequences for the outcome that happened", () => {
    expect(collect(situation, "acceptedWrong")).toHaveLength(1);
  });

  it("returns nothing for an outcome with no authored consequences", () => {
    expect(collect(situation, "manualCorrect")).toEqual([]);
  });
});

describe("deliver", () => {
  const roster: Record<string, Subject> = {
    "1047-001": { id: "1047-001", name: "R. Jones", status: "Enrolled", visit: "Week 16" },
  };

  const pending: Consequence[] = [
    { kind: "email", emailId: "email-enroll-nudge", deliverAtDayEnd: 1 },
    { kind: "roster", subjectId: "1047-001", status: "Withdrawn (hospitalized)", deliverAtDayEnd: 3 },
    {
      kind: "query",
      queryId: "DQ-0114",
      subjectId: "1047-011",
      text: "Reported ALT (42) does not match source (24).",
      deliverAtDayEnd: 3,
    },
  ];

  const emails = {
    "email-enroll-nudge": {
      id: "email-enroll-nudge",
      from: "Amgen Clinical Ops",
      subject: "Portland enrollment 🎉",
      body: "Just a nudge!",
    },
  };

  it("delivers only what is due at this day-end", () => {
    const result = deliver(1, pending, roster, emails);

    expect(result.messages).toHaveLength(1);
    expect(result.messages[0].subject).toBe("Portland enrollment 🎉");
    expect(result.remaining).toHaveLength(2);
  });

  it("changes the roster line and reports the change", () => {
    const result = deliver(3, pending, roster, emails);

    expect(result.roster["1047-001"].status).toBe("Withdrawn (hospitalized)");
    expect(result.rosterChanges).toEqual([
      { subjectId: "1047-001", from: "Enrolled", to: "Withdrawn (hospitalized)" },
    ]);
  });

  it("counts delivered queries so they can tax tomorrow", () => {
    expect(deliver(3, pending, roster, emails).queryCount).toBe(1);
  });

  it("renders a query as an inbox message in the sponsor's voice", () => {
    const result = deliver(3, pending, roster, emails);
    const query = result.messages.find((m) => m.id === "DQ-0114");

    expect(query?.from).toBe("Amgen Data Mgmt");
    expect(query?.subject).toBe("Query DQ-0114, subject 1047-011");
    // It states the mismatch. It never says the player accepted it in error.
    expect(query?.body).not.toMatch(/you|your/i);
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `npx vitest run src/game/engine/consequences.test.ts`
Expected: FAIL — `Failed to resolve import "./consequences"`

- [ ] **Step 3: Write `src/game/engine/consequences.ts`**

```ts
import type {
  Consequence,
  InboxMessage,
  OutcomeKey,
  Situation,
  Subject,
  SubjectStatus,
} from "../types";

export type EmailTemplate = {
  id: string;
  from: string;
  subject: string;
  body: string;
};

export type RosterChange = {
  subjectId: string;
  from: SubjectStatus;
  to: SubjectStatus;
};

export type DeliveryResult = {
  messages: InboxMessage[];
  roster: Record<string, Subject>;
  rosterChanges: RosterChange[];
  remaining: Consequence[];
  /** Queries delivered now. Each one taxes thirty minutes tomorrow. */
  queryCount: number;
};

export function collect(situation: Situation, outcomeKey: OutcomeKey): Consequence[] {
  return situation.outcomes[outcomeKey] ?? [];
}

/**
 * Runs at a day-end. Consequences arrive in their native channel and are never
 * labelled as feedback: a query states that the reported value does not match
 * source, and says nothing about who entered it.
 */
export function deliver(
  dayEnd: number,
  pending: Consequence[],
  roster: Record<string, Subject>,
  emails: Record<string, EmailTemplate>,
): DeliveryResult {
  const due = pending.filter((c) => c.deliverAtDayEnd <= dayEnd);
  const remaining = pending.filter((c) => c.deliverAtDayEnd > dayEnd);

  const messages: InboxMessage[] = [];
  const rosterChanges: RosterChange[] = [];
  const nextRoster = { ...roster };
  let queryCount = 0;

  for (const consequence of due) {
    if (consequence.kind === "email") {
      const template = emails[consequence.emailId];
      if (!template) {
        throw new Error(`No email template for id "${consequence.emailId}"`);
      }
      messages.push({ ...template, arrivedDay: dayEnd });
      continue;
    }

    if (consequence.kind === "query") {
      queryCount += 1;
      messages.push({
        id: consequence.queryId,
        from: "Amgen Data Mgmt",
        subject: `Query ${consequence.queryId}, subject ${consequence.subjectId}`,
        body: consequence.text,
        arrivedDay: dayEnd,
      });
      continue;
    }

    const subject = nextRoster[consequence.subjectId];
    if (!subject) {
      throw new Error(`No roster subject for id "${consequence.subjectId}"`);
    }
    if (subject.status === consequence.status) continue;

    rosterChanges.push({
      subjectId: subject.id,
      from: subject.status,
      to: consequence.status,
    });
    nextRoster[subject.id] = { ...subject, status: consequence.status };
  }

  return { messages, roster: nextRoster, rosterChanges, remaining, queryCount };
}
```

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/game/engine/consequences.test.ts`
Expected: PASS, 6 tests

- [ ] **Step 5: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/game/engine/consequences.ts src/game/engine/consequences.test.ts
git commit -m "feat(engine): deferred consequence collection and day-end delivery"
```

---

### Task 6: Scoring — the answer, the audit finding, and calibration

**Files:**
- Create: `src/game/engine/scoring.ts`
- Test: `src/game/engine/scoring.test.ts`

**Interfaces:**
- Consumes: `Situation`, `WorkRecord`, `GameState`
- Produces: `answerRows(situations, worked): AnswerRow[]`, `calibration(situations, worked): Calibration`, `auditFindingSlots(state, situations): AuditSlots`

- [ ] **Step 1: Write the failing test**

Create `src/game/engine/scoring.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import type { Situation, WorkRecord } from "../types";
import { answerRows, calibration } from "./scoring";

function situation(over: Partial<Situation> & Pick<Situation, "id">): Situation {
  return {
    day: 2,
    type: "data-entry",
    subjectId: "1047-005",
    title: "t",
    blurb: "b",
    manual: false,
    manualCost: 2,
    sourceDocs: [],
    form: { template: "lab-panel", fields: [] },
    vera: { summary: "s", entry: {} },
    truth: { errorType: "NONE", values: {}, tell: "" },
    outcomes: {},
    debrief: { line: "She was right." },
    ...over,
  } as Situation;
}

const SITUATIONS: Situation[] = [
  situation({ id: "A" }),
  situation({
    id: "B",
    truth: { errorType: "fabrication", values: {}, tell: "Page 1 — ALT reads 24." },
    debrief: { line: "An ALT of 42 that appears nowhere in the source.", category: 3 },
  }),
  situation({
    id: "C",
    truth: { errorType: "UNCATCHABLE", values: {}, tell: "" },
    debrief: { line: "The blood filed under 1047-005 was drawn from 1047-010.", category: 2 },
  }),
];

function record(over: Partial<WorkRecord> & Pick<WorkRecord, "situationId">): WorkRecord {
  return { day: 2, action: "accept", correct: true, outcomeKey: "acceptedCorrect", ...over } as WorkRecord;
}

describe("answerRows", () => {
  it("returns one row per situation, in manifest order", () => {
    const rows = answerRows(SITUATIONS, {});
    expect(rows.map((r) => r.id)).toEqual(["A", "B", "C"]);
  });

  it("marks an item the player never reached as unworked", () => {
    const rows = answerRows(SITUATIONS, {});
    expect(rows[0].action).toBe("unworked");
  });

  it("reports what the player did and whether it was right", () => {
    const worked = {
      B: record({ situationId: "B", correct: false, outcomeKey: "acceptedWrong" }),
    };
    const row = answerRows(SITUATIONS, worked)[1];

    expect(row.action).toBe("accept");
    expect(row.correct).toBe(false);
    expect(row.errorType).toBe("fabrication");
  });

  it("flags the uncatchable row as impossible however it was worked", () => {
    const worked = {
      C: record({ situationId: "C", action: "manual", correct: false, outcomeKey: "manualWrong" }),
    };
    const row = answerRows(SITUATIONS, worked)[2];

    expect(row.impossible).toBe(true);
    expect(row.category).toBe(2);
  });
});

describe("calibration", () => {
  it("counts items verified, of those how many held an error, and errors accepted unverified", () => {
    const worked = {
      A: record({ situationId: "A", action: "manual", outcomeKey: "manualCorrect" }),
      B: record({ situationId: "B", action: "accept", correct: false, outcomeKey: "acceptedWrong" }),
      C: record({ situationId: "C", action: "manual", correct: false, outcomeKey: "manualWrong" }),
    };
    const stats = calibration(SITUATIONS, worked);

    expect(stats.verified).toBe(2);
    expect(stats.verifiedContainingError).toBe(1);
    expect(stats.errorsAcceptedUnverified).toBe(1);
  });

  it("reports zeroes for a run where nothing was worked", () => {
    const stats = calibration(SITUATIONS, {});

    expect(stats.verified).toBe(0);
    expect(stats.errorsAcceptedUnverified).toBe(0);
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `npx vitest run src/game/engine/scoring.test.ts`
Expected: FAIL — `Failed to resolve import "./scoring"`

- [ ] **Step 3: Write `src/game/engine/scoring.ts`**

```ts
import type { Action, ErrorType, Situation, WorkRecord } from "../types";

export type AnswerRow = {
  id: string;
  day: number;
  subjectId: string;
  title: string;
  action: Action | "unworked";
  correct: boolean;
  errorType: ErrorType;
  /** True when no verification budget could have caught it. */
  impossible: boolean;
  line: string;
  category?: 1 | 2 | 3;
};

export type Calibration = {
  verified: number;
  verifiedContainingError: number;
  errorsAcceptedUnverified: number;
};

const hasError = (s: Situation) => s.truth.errorType !== "NONE";

/** One row per situation, in manifest order. Not a score — a list. */
export function answerRows(
  situations: Situation[],
  worked: Record<string, WorkRecord>,
): AnswerRow[] {
  return situations.map((situation) => {
    const record = worked[situation.id];
    return {
      id: situation.id,
      day: situation.day,
      subjectId: situation.subjectId,
      title: situation.title,
      action: record?.action ?? "unworked",
      correct: record?.correct ?? false,
      errorType: situation.truth.errorType,
      impossible: situation.truth.errorType === "UNCATCHABLE",
      line: situation.debrief.line,
      category: situation.debrief.category,
    };
  });
}

/**
 * The three numbers the ending closes on. Deliberately not a percentage and
 * deliberately not an accuracy score.
 */
export function calibration(
  situations: Situation[],
  worked: Record<string, WorkRecord>,
): Calibration {
  const byId = new Map(situations.map((s) => [s.id, s]));
  let verified = 0;
  let verifiedContainingError = 0;
  let errorsAcceptedUnverified = 0;

  for (const record of Object.values(worked)) {
    const situation = byId.get(record.situationId);
    if (!situation) continue;

    if (record.action === "manual") {
      verified += 1;
      if (hasError(situation)) verifiedContainingError += 1;
      continue;
    }

    if (hasError(situation)) errorsAcceptedUnverified += 1;
  }

  return { verified, verifiedContainingError, errorsAcceptedUnverified };
}
```

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/game/engine/scoring.test.ts`
Expected: PASS, 6 tests

- [ ] **Step 5: Add the audit-finding slots**

Append to `src/game/engine/scoring.ts`:

```ts
export type AuditSlots = {
  randomized: number;
  target: number;
  queriesRaised: number;
  deviations: number;
  enrollmentRung: number;
  auditRung: number;
  /** Earned when three or more errors reached the database unverified. */
  dataExcluded: boolean;
  /** Earned when enrollment finished more than one short of target. */
  siteClosed: boolean;
};

export function auditFindingSlots(
  situations: Situation[],
  worked: Record<string, WorkRecord>,
  randomized: number,
): AuditSlots {
  const stats = calibration(situations, worked);
  const deviations = Object.values(worked).filter((r) => !r.correct).length;

  return {
    randomized,
    target: 12,
    queriesRaised: stats.errorsAcceptedUnverified,
    deviations,
    enrollmentRung: 3,
    auditRung: 2,
    dataExcluded: stats.errorsAcceptedUnverified >= 3,
    siteClosed: randomized < 11,
  };
}
```

- [ ] **Step 6: Add a test for the slots**

Append to `src/game/engine/scoring.test.ts`:

```ts
import { auditFindingSlots } from "./scoring";

describe("auditFindingSlots", () => {
  it("names data exclusion once three errors reached the database unverified", () => {
    const worked = {
      B: record({ situationId: "B", correct: false, outcomeKey: "acceptedWrong" }),
    };
    const slots = auditFindingSlots(SITUATIONS, worked, 14);

    expect(slots.dataExcluded).toBe(false);
    expect(slots.randomized).toBe(14);
    expect(slots.target).toBe(12);
  });

  it("does not close a site that met its target", () => {
    expect(auditFindingSlots(SITUATIONS, {}, 14).siteClosed).toBe(false);
    expect(auditFindingSlots(SITUATIONS, {}, 10).siteClosed).toBe(true);
  });
});
```

Run: `npx vitest run src/game/engine/scoring.test.ts`
Expected: PASS, 8 tests

- [ ] **Step 7: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/game/engine/scoring.ts src/game/engine/scoring.test.ts
git commit -m "feat(engine): answer rows, calibration stats, and audit-finding slots"
```

---

### Task 7: The reducer and persistence

The single place game state changes. Everything above is a pure function this calls.

**Files:**
- Create: `src/game/engine/state.ts`
- Create: `src/game/engine/persistence.ts`
- Test: `src/game/engine/state.test.ts`

**Interfaces:**
- Consumes: everything from tasks 1–6
- Produces: `initialState(situations, subjects): GameState`, `reduce(state, event, deps): GameState`, `GameEvent`, `load(): GameState | null`, `save(state): void`

- [ ] **Step 1: Write the failing test**

Create `src/game/engine/state.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import type { GameState, Situation, Subject } from "../types";
import { initialState, reduce } from "./state";

const SUBJECTS: Subject[] = [
  { id: "1047-011", name: "W. Dorsey", status: "Enrolled", visit: "Week 20" },
];

const SITUATIONS: Situation[] = [
  {
    id: "DE-1113",
    day: 1,
    type: "data-entry",
    subjectId: "1047-011",
    title: "Week 20 central lab panel",
    blurb: "Week 20 labs",
    manual: false,
    manualCost: 2,
    sourceDocs: [],
    form: { template: "lab-panel", fields: [{ key: "alt", label: "ALT" }] },
    vera: { summary: "ALT 42 U/L.", entry: { alt: "42" } },
    truth: { errorType: "fabrication", values: { alt: "24" }, tell: "Page 1." },
    outcomes: {
      acceptedWrong: [
        {
          kind: "query",
          queryId: "DQ-0114",
          subjectId: "1047-011",
          text: "Reported ALT (42) does not match source (24).",
          deliverAtDayEnd: 1,
        },
      ],
    },
    debrief: { line: "Fabricated ALT.", category: 3 },
  },
];

const DEPS = { situations: SITUATIONS, emails: {} };

describe("initialState", () => {
  it("starts on the sign-in screen at 8:00 on day 1", () => {
    const state = initialState(SITUATIONS, SUBJECTS);

    expect(state.phase).toBe("signin");
    expect(state.day).toBe(1);
    expect(state.blocksUsed).toBe(0);
    expect(state.randomized).toBe(11);
  });

  it("queues day 1 and nothing else", () => {
    expect(initialState(SITUATIONS, SUBJECTS).queue).toEqual(["DE-1113"]);
  });
});

describe("reduce", () => {
  const started = () => reduce(initialState(SITUATIONS, SUBJECTS), { type: "SIGN_IN" }, DEPS);

  it("moves to the desk on sign-in", () => {
    expect(started().phase).toBe("desk");
  });

  it("spends one block to accept and removes the item from the queue", () => {
    const state = reduce(started(), { type: "WORK", situationId: "DE-1113", action: "accept" }, DEPS);

    expect(state.blocksUsed).toBe(1);
    expect(state.queue).toEqual([]);
    expect(state.worked["DE-1113"].correct).toBe(false);
  });

  it("spends the manual cost and records the submission", () => {
    const state = reduce(
      started(),
      { type: "WORK", situationId: "DE-1113", action: "manual", submission: { values: { alt: "24" } } },
      DEPS,
    );

    expect(state.blocksUsed).toBe(2);
    expect(state.worked["DE-1113"].correct).toBe(true);
  });

  it("ends the day when the queue empties", () => {
    const state = reduce(started(), { type: "WORK", situationId: "DE-1113", action: "accept" }, DEPS);

    expect(state.phase).toBe("dayend");
  });

  it("refuses work it cannot afford and leaves the state untouched", () => {
    const broke: GameState = { ...started(), blocksUsed: 16 };
    const state = reduce(broke, { type: "WORK", situationId: "DE-1113", action: "manual" }, DEPS);

    expect(state).toBe(broke);
  });

  it("auto-accepts the whole queue when the day is skipped", () => {
    const state = reduce(started(), { type: "SKIP_DAY" }, DEPS);

    expect(state.worked["DE-1113"].action).toBe("accept");
    expect(state.phase).toBe("dayend");
  });

  it("delivers the query at the day-end so it taxes tomorrow", () => {
    const ended = reduce(started(), { type: "WORK", situationId: "DE-1113", action: "accept" }, DEPS);

    expect(ended.openQueries).toBe(1);
    expect(ended.inbox.some((m) => m.id === "DQ-0114")).toBe(true);
  });

  it("reaches the ending after day 4", () => {
    const day4: GameState = { ...started(), day: 4, queue: [] };
    const state = reduce(day4, { type: "BEGIN_NEXT_DAY" }, DEPS);

    expect(state.phase).toBe("answer");
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `npx vitest run src/game/engine/state.test.ts`
Expected: FAIL — `Failed to resolve import "./state"`

- [ ] **Step 3: Write `src/game/engine/state.ts`**

```ts
import type { DayNumber, GameState, Situation, Subject } from "../types";
import { availableBlocks } from "./clock";
import { collect, deliver, type EmailTemplate } from "./consequences";
import { buildQueue, expireWindows } from "./queue";
import { blockCost, resolve, type Submission } from "./resolve";

export const STATE_VERSION = 1;
const STARTING_RANDOMIZED = 11;
const LAST_DAY: DayNumber = 4;

export type GameEvent =
  | { type: "SIGN_IN" }
  | { type: "WORK"; situationId: string; action: "accept" | "manual"; submission?: Submission }
  | { type: "SKIP_DAY" }
  | { type: "BEGIN_NEXT_DAY" }
  | { type: "ADVANCE_ENDING" };

export type Deps = {
  situations: Situation[];
  emails: Record<string, EmailTemplate>;
};

export function initialState(situations: Situation[], subjects: Subject[]): GameState {
  return {
    version: STATE_VERSION,
    phase: "signin",
    day: 1,
    blocksUsed: 0,
    blocksAvailable: availableBlocks(1, 0),
    blocksTaxed: BLOCKS_PER_DAY - availableBlocks(1, 0),
    queue: buildQueue(1, situations, []),
    worked: {},
    roster: Object.fromEntries(subjects.map((s) => [s.id, s])),
    inbox: [],
    pending: [],
    openQueries: 0,
    randomized: STARTING_RANDOMIZED,
  };
}

export function reduce(state: GameState, event: GameEvent, deps: Deps): GameState {
  switch (event.type) {
    case "SIGN_IN":
      return { ...state, phase: "desk" };

    case "WORK":
      return work(state, event.situationId, event.action, event.submission ?? {}, deps);

    case "SKIP_DAY": {
      const accepted = state.queue.reduce(
        (acc, id) => work(acc, id, "accept", {}, deps, { ignoreClock: true }),
        state,
      );
      return endDay(accepted, deps);
    }

    case "BEGIN_NEXT_DAY":
      return beginNextDay(state, deps);

    case "ADVANCE_ENDING":
      return {
        ...state,
        phase: state.phase === "answer" ? "audit" : "point",
      };
  }
}

function work(
  state: GameState,
  situationId: string,
  action: "accept" | "manual",
  submission: Submission,
  deps: Deps,
  options: { ignoreClock?: boolean } = {},
): GameState {
  const situation = deps.situations.find((s) => s.id === situationId);
  if (!situation || !state.queue.includes(situationId)) return state;
  if (situation.manual && action === "accept" && !options.ignoreClock) return state;

  const cost = blockCost(situation, action);
  if (!options.ignoreClock && state.blocksUsed + cost > state.blocksAvailable) return state;

  const record = resolve(situation, action, state.day, submission);
  const queue = state.queue.filter((id) => id !== situationId);
  const randomized =
    situation.type === "screening" && effectiveVerdict(record, situation) === "eligible"
      ? state.randomized + 1
      : state.randomized;

  const next: GameState = {
    ...state,
    blocksUsed: options.ignoreClock ? state.blocksUsed : state.blocksUsed + cost,
    queue,
    worked: { ...state.worked, [situationId]: record },
    pending: [...state.pending, ...collect(situation, record.outcomeKey)],
    randomized,
  };

  const outOfTime = next.blocksUsed >= next.blocksAvailable;
  if (!options.ignoreClock && (queue.length === 0 || outOfTime)) return endDay(next, deps);
  return next;
}

/** What actually went into the database: her verdict on accept, theirs on manual. */
function effectiveVerdict(
  record: { action: string; verdict?: string },
  situation: Situation,
): string | undefined {
  return record.action === "accept" ? situation.vera?.verdict : record.verdict;
}

function endDay(state: GameState, deps: Deps): GameState {
  const { expired, roster: afterExpiry } = expireWindows(
    state.day,
    state.queue,
    deps.situations,
    state.roster,
    { randomizationClosesTomorrow: state.day === LAST_DAY },
  );

  const delivered = deliver(state.day, state.pending, afterExpiry, deps.emails);

  return {
    ...state,
    phase: "dayend",
    roster: delivered.roster,
    inbox: [...delivered.messages, ...state.inbox],
    pending: delivered.remaining,
    openQueries: delivered.queryCount,
    queue: state.queue.filter((id) => !expired.includes(id)),
  };
}

function beginNextDay(state: GameState, deps: Deps): GameState {
  if (state.day === LAST_DAY) return { ...state, phase: "answer" };

  const day = (state.day + 1) as DayNumber;
  const available = availableBlocks(day, state.openQueries);
  return {
    ...state,
    phase: "desk",
    day,
    blocksUsed: 0,
    blocksAvailable: available,
    // The day is not shorter — it starts later. The taskbar reads
    // blocksTaxed + blocksUsed, so day 4 opens at 9:30, not 8:00.
    blocksTaxed: BLOCKS_PER_DAY - available,
    queue: buildQueue(day, deps.situations, state.queue),
  };
}
```

Import `BLOCKS_PER_DAY` from `./clock` alongside `availableBlocks`.

Add to `src/game/engine/state.test.ts`:

```ts
it("starts a taxed day later rather than making it shorter", () => {
  const day3: GameState = { ...started(), day: 2, queue: [], openQueries: 2, phase: "dayend" };
  const state = reduce(day3, { type: "BEGIN_NEXT_DAY" }, DEPS);

  expect(state.blocksTaxed).toBe(2);
  expect(state.blocksTaxed + state.blocksAvailable).toBe(16);
});
```

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/game/engine/state.test.ts`
Expected: PASS, 10 tests

- [ ] **Step 5: Write `src/game/engine/persistence.ts`**

```ts
import type { GameState } from "../types";
import { STATE_VERSION } from "./state";

const KEY = "icf-please:run";

/** Returns null when nothing is saved, or when the save predates a schema change. */
export function load(): GameState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GameState;
    return parsed.version === STATE_VERSION ? parsed : null;
  } catch {
    return null;
  }
}

export function save(state: GameState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // A full or disabled localStorage must never interrupt a run.
  }
}

export function clear(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
```

- [ ] **Step 6: Add a persistence test**

Append to `src/game/engine/state.test.ts`:

```ts
import { clear, load, save } from "./persistence";

describe("persistence", () => {
  it("round-trips a run", () => {
    const state = initialState(SITUATIONS, SUBJECTS);
    save(state);

    expect(load()?.day).toBe(1);
    clear();
    expect(load()).toBeNull();
  });

  it("discards a save from an older schema", () => {
    window.localStorage.setItem("icf-please:run", JSON.stringify({ version: 0 }));

    expect(load()).toBeNull();
    clear();
  });
});
```

Run: `npx vitest run src/game/engine/state.test.ts`
Expected: PASS, 12 tests

- [ ] **Step 7: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/game/engine/state.ts src/game/engine/persistence.ts src/game/engine/state.test.ts
git commit -m "feat(engine): game reducer and versioned localStorage persistence"
```

---

# Phase 2 — Content

Data only. No logic lives in this phase.

---

### Task 8: Form templates and the roster seed

**Files:**
- Modify: `src/game/types.ts` (add `verdictOptions` to `FormSpec`)
- Create: `src/game/content/forms.ts`
- Create: `src/game/content/subjects.ts`
- Test: `src/game/content/subjects.test.ts`

**Interfaces:**
- Consumes: `FormSpec`, `Subject` from `types.ts`
- Produces: `VITALS`, `LAB_PANEL`, `screeningEligibility()`, `safetyForm(options)`; `SUBJECTS: Subject[]`

- [ ] **Step 1: Add verdict options to `FormSpec` in `src/game/types.ts`**

Replace the existing `FormSpec` line with:

```ts
export type VerdictOption = { value: string; label: string };
export type FormSpec = {
  template: FormTemplate;
  fields: FormFieldSpec[];
  /** Present on screening and safety items — the radio choices. */
  verdictOptions?: VerdictOption[];
};
```

Add `"safety-determination"` to the `FormTemplate` union:

```ts
export type FormTemplate =
  | "vitals"
  | "lab-panel"
  | "screening-eligibility"
  | "safety-determination";
```

- [ ] **Step 2: Write `src/game/content/forms.ts`**

```ts
import type { FormSpec, VerdictOption } from "../types";

/** Every check the player makes is a comparison a layperson can make. */
export const VITALS: FormSpec = {
  template: "vitals",
  fields: [
    { key: "bp_systolic", label: "BP systolic", unit: "mmHg" },
    { key: "bp_diastolic", label: "BP diastolic", unit: "mmHg" },
    { key: "pulse", label: "Pulse", unit: "bpm" },
    { key: "temp_c", label: "Temperature", unit: "°C" },
    { key: "weight_kg", label: "Weight", unit: "kg" },
  ],
};

export const LAB_PANEL: FormSpec = {
  template: "lab-panel",
  fields: [
    { key: "alt", label: "ALT", unit: "U/L" },
    { key: "ast", label: "AST", unit: "U/L" },
    { key: "alp", label: "ALP", unit: "U/L" },
    { key: "creatinine", label: "Creatinine", unit: "mg/dL" },
    { key: "hemoglobin", label: "Haemoglobin", unit: "g/dL" },
    { key: "platelets", label: "Platelets", unit: "×10⁹/L" },
    { key: "eosinophils_abs", label: "Eosinophils (absolute)", unit: "×10⁹/L" },
  ],
};

export const SCREENING_ELIGIBILITY: FormSpec = {
  template: "screening-eligibility",
  fields: [
    { key: "easi", label: "EASI (screening)" },
    { key: "viga_ad", label: "vIGA-AD" },
    { key: "bsa_pct", label: "BSA involvement", unit: "%" },
    { key: "pruritus_nrs", label: "Worst Pruritus NRS" },
  ],
  verdictOptions: [
    { value: "eligible", label: "Eligible — randomize" },
    { value: "screen-fail", label: "Screen failure" },
  ],
};

export function safetyForm(verdictOptions: VerdictOption[]): FormSpec {
  return { template: "safety-determination", fields: [], verdictOptions };
}

/**
 * The safety choices in play across the run, in plain language.
 * Every entry here is used by at least one situation — do not add a fourth
 * "just in case", and do not offer a subject-facing verdict the run never needs.
 */
export const SAFETY_VERDICTS = {
  logAe: { value: "log-ae", label: "Log as an adverse event" },
  reportSae: {
    value: "report-sae",
    label: "Report as a serious adverse event — sponsor within 24 hours",
  },
  noAction: { value: "no-action", label: "No action — not related to the study" },
} as const;
```

- [ ] **Step 3: Write `src/game/content/subjects.ts`**

Exact roster from spec §3. Enrolled order matters — it is the order the Roster window renders.

```ts
import type { Subject } from "../types";

/**
 * The roster at 8:00 AM Monday 08-JAN-2024.
 * Eleven randomized against a contract of twelve. Randomization closes
 * 12-JAN-2024 08:00 PT and does not move.
 *
 * 1047-021 consents Tuesday and 1047-022 Wednesday; both are added by their
 * situations, not seeded here.
 */
export const SUBJECTS: Subject[] = [
  { id: "1047-001", name: "R. Jones", status: "Enrolled", visit: "Week 16" },
  { id: "1047-002", name: "D. Achterberg", status: "Enrolled", visit: "Week 24" },
  { id: "1047-003", name: "P. Sunderland", status: "Enrolled", visit: "Week 12" },
  { id: "1047-005", name: "T. Channing", status: "Enrolled", visit: "Week 16" },
  { id: "1047-006", name: "M. Vasquez", status: "Enrolled", visit: "Week 12" },
  { id: "1047-007", name: "K. Oyelowo", status: "Enrolled", visit: "Week 4" },
  { id: "1047-008", name: "H. Brenner", status: "Enrolled", visit: "Week 12" },
  { id: "1047-009", name: "S. Nakashima", status: "Enrolled", visit: "Week 8" },
  { id: "1047-010", name: "E. Fontaine", status: "Enrolled", visit: "Week 16" },
  { id: "1047-011", name: "W. Dorsey", status: "Enrolled", visit: "Week 20" },
  { id: "1047-004", name: "L. Auguste", status: "Withdrawn (by subject)" },

  { id: "1047-017", name: "C. Hughes", status: "Screening", windowCloses: "10-JAN-2024" },
  { id: "1047-018", name: "L. Lit", status: "Screening", windowCloses: "11-JAN-2024" },
  { id: "1047-019", name: "R. Amaya", status: "Screening", windowCloses: "12-JAN-2024" },
  { id: "1047-020", name: "J. Whitlock", status: "Screening", windowCloses: "12-JAN-2024" },

  { id: "1047-012", name: "A. Petrosyan", status: "Screen failed" },
  { id: "1047-013", name: "M. Delacroix", status: "Screen failed" },
  { id: "1047-014", name: "S. Bergqvist", status: "Screen failed" },
  { id: "1047-015", name: "N. Okereke", status: "Screen failed" },
  { id: "1047-016", name: "J. Farhadi", status: "Screen failed" },
];

/** Subjects who consent mid-run, keyed by the day they appear. */
export const LATE_CONSENTS: Record<number, Subject[]> = {
  2: [{ id: "1047-021", name: "B. Ferreira", status: "Screening", windowCloses: "12-JAN-2024" }],
  3: [{ id: "1047-022", name: "K. Adeyemi", status: "Screening", windowCloses: "12-JAN-2024" }],
};
```

- [ ] **Step 4: Write the test**

Create `src/game/content/subjects.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { LATE_CONSENTS, SUBJECTS } from "./subjects";

describe("roster seed", () => {
  it("starts with eleven randomized against a contract of twelve", () => {
    const randomized = SUBJECTS.filter(
      (s) => s.status === "Enrolled" || s.status.startsWith("Withdrawn"),
    );
    expect(randomized).toHaveLength(11);
  });

  it("has four subjects in screening on Monday morning", () => {
    expect(SUBJECTS.filter((s) => s.status === "Screening")).toHaveLength(4);
  });

  it("gives every screening subject a window that closes during the run", () => {
    for (const subject of SUBJECTS.filter((s) => s.status === "Screening")) {
      expect(subject.windowCloses).toMatch(/^\d{2}-JAN-2024$/);
    }
  });

  it("uses unique, well-formed subject ids throughout", () => {
    const all = [...SUBJECTS, ...Object.values(LATE_CONSENTS).flat()];
    const ids = all.map((s) => s.id);

    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(id).toMatch(/^1047-\d{3}$/);
  });

  it("names every subject as an initial and a surname", () => {
    const all = [...SUBJECTS, ...Object.values(LATE_CONSENTS).flat()];
    for (const subject of all) expect(subject.name).toMatch(/^[A-Z]\. [A-Z][a-z]/);
  });

  it("closes L. Lit's window on Thursday — the waitlist casualty", () => {
    const lit = SUBJECTS.find((s) => s.id === "1047-018");
    expect(lit?.windowCloses).toBe("11-JAN-2024");
  });
});
```

- [ ] **Step 5: Run it and watch it pass**

Run: `npx vitest run src/game/content/subjects.test.ts`
Expected: PASS, 6 tests

- [ ] **Step 6: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/game/types.ts src/game/content/forms.ts src/game/content/subjects.ts src/game/content/subjects.test.ts
git commit -m "feat(content): eCRF form templates and the Monday-morning roster"
```

---

### Task 9: Day 1 situations

Five items: three forced-manual before noon, then VERA arrives and two assisted items follow.

This task establishes the module shape every later content task follows.

**Files:**
- Create: `src/game/content/situations/day1.ts`
- Create: `src/game/content/situations/index.ts`
- Test: `src/game/content/situations/situations.test.ts`

**Interfaces:**
- Consumes: `Situation` from `types.ts`; `VITALS`, `LAB_PANEL`, `SCREENING_ELIGIBILITY`, `safetyForm`, `SAFETY_VERDICTS` from `../forms`
- Produces: `DAY_1: Situation[]`; `SITUATIONS: Situation[]` (the flat manifest, ordered by day then queue position)

- [ ] **Step 1: Write `src/game/content/situations/day1.ts`**

```ts
import type { Situation } from "../../types";
import {
  LAB_PANEL,
  SAFETY_VERDICTS,
  SCREENING_ELIGIBILITY,
  VITALS,
  safetyForm,
} from "../forms";

export const DAY_1: Situation[] = [
  {
    id: "SCR-0217",
    day: 1,
    type: "screening",
    subjectId: "1047-017",
    title: "Screening eligibility review",
    blurb: "1047-017 · C. Hughes — eligibility review",
    manual: true,
    manualCost: 3,
    sourceDocs: ["scr-0217-packet.md"],
    form: SCREENING_ELIGIBILITY,
    vera: null,
    truth: {
      errorType: "NONE",
      values: { easi: "24.6", viga_ad: "4", bsa_pct: "31", pruritus_nrs: "8" },
      verdict: "eligible",
      tell: "Screening packet page 1 — every value clears its threshold with room to spare.",
    },
    outcomes: {
      manualWrong: [
        {
          kind: "roster",
          subjectId: "1047-017",
          status: "Screen failed",
          deliverAtDayEnd: 1,
        },
      ],
    },
    debrief: {
      line: "C. Hughes met every criterion comfortably. Nothing here was difficult; it was only long.",
    },
  },
  {
    id: "DE-1109",
    day: 1,
    type: "data-entry",
    subjectId: "1047-009",
    title: "Week 8 vital signs",
    blurb: "1047-009 · S. Nakashima — Week 8 vitals",
    manual: true,
    manualCost: 2,
    sourceDocs: ["de-1109-vitals.md"],
    form: VITALS,
    vera: null,
    truth: {
      errorType: "NONE",
      values: {
        bp_systolic: "128",
        bp_diastolic: "82",
        pulse: "72",
        temp_c: "36.8",
        weight_kg: "81.4",
      },
      tell: "Vital signs worksheet, one page. Five values, all legible.",
    },
    outcomes: {
      manualWrong: [
        {
          kind: "query",
          queryId: "DQ-0111",
          subjectId: "1047-009",
          text: "Reported vital signs do not match source for Week 8. Please verify and respond.",
          deliverAtDayEnd: 1,
        },
      ],
    },
    debrief: { line: "Five numbers copied from one page. This is most of the job." },
  },
  {
    id: "SAF-0031",
    day: 1,
    type: "safety",
    subjectId: "1047-006",
    title: "Telephone note — fever after Week 12 dose",
    blurb: "1047-006 · M. Vasquez — telephone note",
    manual: true,
    manualCost: 2,
    sourceDocs: ["saf-0031-phone-note.md"],
    form: safetyForm([SAFETY_VERDICTS.logAe, SAFETY_VERDICTS.reportSae, SAFETY_VERDICTS.noAction]),
    vera: null,
    truth: {
      errorType: "NONE",
      values: {},
      verdict: "log-ae",
      tell:
        "The note gives the dose at 09-JAN-2024 10:15 and the fever starting the same evening. " +
        "Not a hospitalisation, so not serious.",
    },
    outcomes: {
      manualWrong: [
        {
          kind: "email",
          emailId: "email-saf-0031-followup",
          deliverAtDayEnd: 2,
        },
      ],
    },
    debrief: {
      line: "A fever the evening after a dose. Recorded, not escalated — nobody went to hospital.",
    },
  },

  // ——— 11:30. The sponsor email lands. The rail fills. ———

  {
    id: "DE-1110",
    day: 1,
    type: "data-entry",
    subjectId: "1047-003",
    title: "Week 12 central laboratory panel",
    blurb: "1047-003 · P. Sunderland — Week 12 labs",
    manual: false,
    manualCost: 2,
    sourceDocs: ["de-1110-lab.md"],
    form: LAB_PANEL,
    vera: {
      summary:
        "Week 12 central laboratory panel for 1047-003 is within reference range throughout. " +
        "ALT 22 U/L, AST 19 U/L, ALP 68 U/L, creatinine 0.9 mg/dL, haemoglobin 14.1 g/dL, " +
        "platelets 244 ×10⁹/L, absolute eosinophils 0.31 ×10⁹/L. No alert values were called by " +
        "the central laboratory. The entry is ready for your review.",
      entry: {
        alt: "22",
        ast: "19",
        alp: "68",
        creatinine: "0.9",
        hemoglobin: "14.1",
        platelets: "244",
        eosinophils_abs: "0.31",
      },
    },
    truth: {
      errorType: "NONE",
      values: {
        alt: "22",
        ast: "19",
        alp: "68",
        creatinine: "0.9",
        hemoglobin: "14.1",
        platelets: "244",
        eosinophils_abs: "0.31",
      },
      tell: "",
    },
    outcomes: {},
    debrief: {
      line: "She was right about all seven values. Verifying this one cost an hour and taught you nothing.",
    },
  },
  {
    id: "DE-1114",
    day: 1,
    type: "data-entry",
    subjectId: "1047-008",
    title: "Week 12 vital signs",
    blurb: "1047-008 · H. Brenner — Week 12 vitals",
    manual: false,
    manualCost: 2,
    sourceDocs: ["de-1114-vitals.md"],
    form: VITALS,
    vera: {
      // The source records weight in pounds. She converts, and gets it wrong.
      summary:
        "Week 12 vital signs for 1047-008 are unremarkable. Blood pressure 134/86 mmHg, pulse 68 bpm, " +
        "temperature 36.6 °C, weight 84.4 kg. Weight is recorded in pounds on the source worksheet and " +
        "has been converted for entry, as the eCRF field is defined in kilograms. The entry is ready " +
        "for your review.",
      entry: {
        bp_systolic: "134",
        bp_diastolic: "86",
        pulse: "68",
        temp_c: "36.6",
        weight_kg: "84.4",
      },
    },
    truth: {
      errorType: "normalization",
      values: {
        bp_systolic: "134",
        bp_diastolic: "86",
        pulse: "68",
        temp_c: "36.6",
        weight_kg: "86.2",
      },
      tell:
        "Vital signs worksheet — weight is written as 190 lb. 190 lb is 86.2 kg, not 84.4 kg.",
    },
    outcomes: {
      acceptedWrong: [
        {
          kind: "query",
          queryId: "DQ-0112",
          subjectId: "1047-008",
          text:
            "Reported weight (84.4 kg) does not match source (190 lb = 86.2 kg) at Week 12. " +
            "Please verify and respond.",
          deliverAtDayEnd: 2,
        },
      ],
    },
    debrief: {
      line: "190 lb is 86.2 kg. She entered 84.4. The conversion was hers to do and hers to get wrong.",
      category: 3,
    },
  },
];
```

- [ ] **Step 2: Write `src/game/content/situations/index.ts`**

Days 2–4 are added by the following tasks. Import them as they land.

```ts
import type { Situation } from "../../types";
import { DAY_1 } from "./day1";

/** The manifest. Order within a day is the order the Work Queue renders. */
export const SITUATIONS: Situation[] = [...DAY_1];

export const byId = new Map(SITUATIONS.map((s) => [s.id, s]));
```

- [ ] **Step 3: Write the failing test**

Create `src/game/content/situations/situations.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { blockCost } from "../../engine/resolve";
import { SITUATIONS } from "./index";

describe("day 1", () => {
  const day1 = SITUATIONS.filter((s) => s.day === 1);

  it("has five items", () => {
    expect(day1).toHaveLength(5);
  });

  it("forces the first three by hand and offers no VERA output for them", () => {
    const morning = day1.slice(0, 3);

    for (const item of morning) {
      expect(item.manual).toBe(true);
      expect(item.vera).toBeNull();
    }
  });

  it("runs the manual morning to exactly 11:30", () => {
    const morningBlocks = day1
      .slice(0, 3)
      .reduce((total, s) => total + blockCost(s, "manual"), 0);

    expect(morningBlocks).toBe(7); // 3 + 2 + 2 blocks = 3.5 hours from 8:00
  });

  it("costs eleven blocks in total if every item is worked by hand", () => {
    const total = day1.reduce((sum, s) => sum + blockCost(s, "manual"), 0);
    expect(total).toBe(11);
  });

  it("gives every assisted item both a summary and an entry", () => {
    for (const item of day1.filter((s) => !s.manual)) {
      expect(item.vera?.summary.length).toBeGreaterThan(0);
      expect(item.vera?.entry).toBeDefined();
    }
  });

  it("never has VERA claim to have acted", () => {
    for (const item of day1) {
      expect(item.vera?.summary ?? "").not.toMatch(
        /I have (submitted|filed|sent|reported)/i,
      );
    }
  });

  it("records a tell for every catchable error", () => {
    for (const item of day1) {
      if (item.truth.errorType === "NONE" || item.truth.errorType === "UNCATCHABLE") continue;
      expect(item.truth.tell.length).toBeGreaterThan(0);
    }
  });
});
```

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/game/content/situations/situations.test.ts`
Expected: PASS, 7 tests

- [ ] **Step 5: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/game/content/situations/
git commit -m "feat(content): day 1 — the manual morning and VERA's first two items"
```

---

### Task 10: Day 2 situations — the uncatchable item and its twin

Four thin items, eight blocks against fifteen. Day 2 is deliberately slack: the player has every resource to verify all four, and should. It is exactly where the error they cannot catch lands.

**Read spec §5 before writing this task.** Items DE-1111 and SAF-0034 are a matched pair and only work together.

**Files:**
- Create: `src/game/content/situations/day2.ts`
- Modify: `src/game/content/situations/index.ts`
- Test: `src/game/content/situations/situations.test.ts` (append)

**Interfaces:**
- Consumes: same imports as `day1.ts`
- Produces: `DAY_2: Situation[]`

- [ ] **Step 1: Write `src/game/content/situations/day2.ts`**

```ts
import type { Situation } from "../../types";
import { LAB_PANEL, SAFETY_VERDICTS, safetyForm } from "../forms";

/**
 * The Week 16 specimens for 1047-005 and 1047-010 were drawn on the same
 * morning and reported by Meridian Central Labs under each other's IDs.
 *
 * These are the values as they arrived at the site. The requisition, the
 * result, the eCRF field and VERA's summary all agree with one another,
 * because all four are downstream of the same wrong identifier. There is
 * nothing on the desk that disagrees with anything else on the desk.
 */
const AS_REPORTED_FOR_CHANNING = {
  alt: "31",
  ast: "27",
  alp: "74",
  creatinine: "1.0",
  hemoglobin: "13.6",
  platelets: "212",
  eosinophils_abs: "0.44",
};

export const DAY_2: Situation[] = [
  {
    id: "DE-1111",
    day: 2,
    type: "data-entry",
    subjectId: "1047-005",
    title: "Week 16 central laboratory panel",
    blurb: "1047-005 · T. Channing — Week 16 labs",
    manual: false,
    manualCost: 2,
    sourceDocs: ["de-1111-lab.md", "de-1111-requisition.md"],
    form: LAB_PANEL,
    vera: {
      summary:
        "Week 16 central laboratory panel for 1047-005 is within reference range throughout. " +
        "ALT 31 U/L, AST 27 U/L, ALP 74 U/L, creatinine 1.0 mg/dL, haemoglobin 13.6 g/dL, " +
        "platelets 212 ×10⁹/L, absolute eosinophils 0.44 ×10⁹/L. The requisition number on the " +
        "report matches the requisition on file for this visit. No alert values were called by the " +
        "central laboratory. The entry is ready for your review.",
      entry: AS_REPORTED_FOR_CHANNING,
    },
    truth: {
      errorType: "UNCATCHABLE",
      // Identical to her entry. Transcribing perfectly does not help.
      values: AS_REPORTED_FOR_CHANNING,
      tell: "",
    },
    outcomes: {
      acceptedWrong: [
        {
          kind: "roster",
          subjectId: "1047-005",
          status: "Withdrawn (hospitalized)",
          deliverAtDayEnd: 4,
        },
      ],
      manualWrong: [
        {
          kind: "roster",
          subjectId: "1047-005",
          status: "Withdrawn (hospitalized)",
          deliverAtDayEnd: 4,
        },
      ],
    },
    debrief: {
      line:
        "The blood filed under 1047-005 was drawn from 1047-010, and the other way round. " +
        "Nothing on your desk disagreed with anything else on your desk.",
      category: 2,
    },
  },
  {
    id: "SAF-0034",
    day: 2,
    type: "safety",
    subjectId: "1047-010",
    title: "Nurse's note — worsening atopic dermatitis",
    blurb: "1047-010 · E. Fontaine — nurse's note",
    manual: false,
    manualCost: 2,
    sourceDocs: ["saf-0034-note.md", "saf-0034-prior-visits.md"],
    form: safetyForm([SAFETY_VERDICTS.logAe, SAFETY_VERDICTS.reportSae, SAFETY_VERDICTS.noAction]),
    vera: {
      // Right event, wrong subject. The Week 12 flare was T. Channing's.
      summary:
        "1047-010 reports worsening atopic dermatitis over four days, managed with emollient only. " +
        "This is the subject's second such episode; a comparable flare was recorded at Week 12 and " +
        "resolved without rescue therapy. Worsening atopic dermatitis is an expected event on this " +
        "study. No hospitalisation and no rescue therapy, so this is not serious. I have drafted the " +
        "adverse event entry for your review.",
      entry: {},
      verdict: "log-ae",
    },
    truth: {
      errorType: "misattribution",
      values: {},
      verdict: "log-ae",
      tell:
        "The Week 12 flare belongs to 1047-005 · T. Channing, not to 1047-010 · E. Fontaine. " +
        "E. Fontaine's visit history shows no prior flare. Both records have to be open to see it.",
    },
    outcomes: {
      acceptedWrong: [
        {
          kind: "query",
          queryId: "DQ-0118",
          subjectId: "1047-010",
          text:
            "Adverse event narrative for 1047-010 references a prior episode at Week 12 that does " +
            "not appear in this subject's visit history. Please verify and respond.",
          deliverAtDayEnd: 3,
        },
      ],
    },
    debrief: {
      line:
        "The verdict was right and the narrative was not: the Week 12 flare was T. Channing's. " +
        "Catching it meant opening two records.",
      category: 3,
    },
  },
  {
    id: "DE-1112",
    day: 2,
    type: "data-entry",
    subjectId: "1047-007",
    title: "Week 4 central laboratory panel",
    blurb: "1047-007 · K. Oyelowo — Week 4 labs",
    manual: false,
    manualCost: 2,
    sourceDocs: ["de-1112-lab.md"],
    form: LAB_PANEL,
    vera: {
      summary:
        "Week 4 central laboratory panel for 1047-007 is within reference range throughout. " +
        "ALT 18 U/L, AST 21 U/L, ALP 59 U/L, creatinine 0.8 mg/dL, haemoglobin 15.0 g/dL, " +
        "platelets 268 ×10⁹/L, absolute eosinophils 0.52 ×10⁹/L. Absolute eosinophils are above the " +
        "laboratory reference range and are expected in this population; the value is not an alert " +
        "value and was not called by the central laboratory. The entry is ready for your review.",
      entry: {
        alt: "18",
        ast: "21",
        alp: "59",
        creatinine: "0.8",
        hemoglobin: "15.0",
        platelets: "268",
        eosinophils_abs: "0.52",
      },
    },
    truth: {
      errorType: "NONE",
      values: {
        alt: "18",
        ast: "21",
        alp: "59",
        creatinine: "0.8",
        hemoglobin: "15.0",
        platelets: "268",
        eosinophils_abs: "0.52",
      },
      tell: "",
    },
    outcomes: {},
    debrief: {
      line: "Right on all seven, and right that the raised eosinophils meant nothing here.",
    },
  },
  {
    id: "SAF-0032",
    day: 2,
    type: "safety",
    subjectId: "1047-002",
    title: "Nurse's note — Week 24 visit",
    blurb: "1047-002 · D. Achterberg — nurse's note",
    manual: false,
    manualCost: 2,
    sourceDocs: ["saf-0032-note.md"],
    form: safetyForm([
      SAFETY_VERDICTS.logAe,
      SAFETY_VERDICTS.reportSae,
      SAFETY_VERDICTS.noAction,
    ]),
    vera: {
      // The note's final paragraph records a second event. She reports one.
      summary:
        "1047-002 reports a headache lasting approximately six hours on the evening of the Week 24 " +
        "visit, resolved without treatment. Headache is an expected event on this study. No " +
        "hospitalisation, so this is not serious. I have drafted the adverse event entry for your " +
        "review.",
      entry: {},
      verdict: "log-ae",
    },
    truth: {
      errorType: "omission",
      values: {},
      verdict: "report-sae",
      tell:
        "Final paragraph of the note: the subject was admitted overnight two days later with " +
        "cellulitis of the left forearm. An overnight admission makes it serious.",
    },
    outcomes: {
      acceptedWrong: [
        {
          kind: "roster",
          subjectId: "1047-002",
          status: "Withdrawn (hospitalized)",
          deliverAtDayEnd: 3,
        },
        {
          kind: "email",
          emailId: "email-saf-0032-late-sae",
          deliverAtDayEnd: 3,
        },
      ],
    },
    debrief: {
      line:
        "The headache was real and so was the overnight admission in the last paragraph. " +
        "She reported one of them. Nothing on screen looked wrong.",
      category: 3,
    },
  },
];
```

- [ ] **Step 2: Wire it into the manifest**

In `src/game/content/situations/index.ts`:

```ts
import { DAY_1 } from "./day1";
import { DAY_2 } from "./day2";

export const SITUATIONS: Situation[] = [...DAY_1, ...DAY_2];
```

- [ ] **Step 3: Write the failing test**

Append to `src/game/content/situations/situations.test.ts`:

```ts
describe("day 2", () => {
  const day2 = SITUATIONS.filter((s) => s.day === 2);

  it("has four items, all thin, costing eight blocks by hand", () => {
    expect(day2).toHaveLength(4);
    expect(day2.reduce((sum, s) => sum + blockCost(s, "manual"), 0)).toBe(8);
  });

  it("puts the uncatchable item on the slack day", () => {
    const uncatchable = day2.filter((s) => s.truth.errorType === "UNCATCHABLE");

    expect(uncatchable).toHaveLength(1);
    expect(uncatchable[0].id).toBe("DE-1111");
  });

  it("makes the uncatchable item's truth identical to VERA's entry", () => {
    // Transcribing it perfectly must not save the player.
    const item = day2.find((s) => s.id === "DE-1111");

    expect(item?.truth.values).toEqual(item?.vera?.entry);
    expect(item?.truth.tell).toBe("");
  });

  it("harms the subject whether the item was accepted or verified", () => {
    const item = day2.find((s) => s.id === "DE-1111");

    expect(item?.outcomes.acceptedWrong).toEqual(item?.outcomes.manualWrong);
  });

  it("places the catchable misattribution beside it, on the same two subjects", () => {
    const twin = day2.find((s) => s.id === "SAF-0034");

    expect(twin?.truth.errorType).toBe("misattribution");
    expect(twin?.truth.tell).toContain("1047-005");
  });

  it("keeps one of the four correct", () => {
    expect(day2.filter((s) => s.truth.errorType === "NONE")).toHaveLength(1);
  });
});
```

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/game/content/situations/situations.test.ts`
Expected: PASS, 13 tests

- [ ] **Step 5: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/game/content/situations/
git commit -m "feat(content): day 2 — the mislabeled lab and the misattribution that teaches its shape"
```

---

### Task 11: Day 3 situations — three screening packets and the category-1 harm

Five items, **thirteen blocks against thirteen or fourteen available**. This day fits only if nothing rolled over from day 2 and query volume is at its floor. L. Lit sits here with a window closing Thursday.

Write each entry as a `Situation` literal in the same shape as `day2.ts`. Every value below is the actual content — nothing is left to invent.

**Files:**
- Create: `src/game/content/situations/day3.ts`
- Modify: `src/game/content/situations/index.ts`
- Test: `src/game/content/situations/situations.test.ts` (append)

**Interfaces:**
- Consumes: `LAB_PANEL`, `SCREENING_ELIGIBILITY`, `safetyForm`, `SAFETY_VERDICTS`
- Produces: `DAY_3: Situation[]`

- [ ] **Step 1: Write the five entries**

**SCR-0219 · 1047-019 · R. Amaya · screening · manualCost 3 · `sourceDocs: ["scr-0219-packet.md"]`**
`form: SCREENING_ELIGIBILITY` · `blurb: "1047-019 · R. Amaya — eligibility review"` · `title: "Screening eligibility review"`

```ts
vera: {
  summary:
    "1047-019 meets all inclusion criteria for randomization. EASI 15.8, vIGA-AD 3, BSA " +
    "involvement 18%, Worst Pruritus NRS 7. Atopic dermatitis has been documented for eleven " +
    "years and prior topical corticosteroid therapy was inadequate. Washout requirements are " +
    "satisfied. The eligibility determination is ready for your review.",
  entry: { easi: "15.8", viga_ad: "3", bsa_pct: "18", pruritus_nrs: "7" },
  verdict: "eligible",
},
truth: {
  errorType: "threshold-overconfidence",
  values: { easi: "15.8", viga_ad: "3", bsa_pct: "18", pruritus_nrs: "7" },
  verdict: "screen-fail",
  tell: "Inclusion criterion 4 is EASI ≥16. The packet records 15.8.",
},
outcomes: {
  acceptedWrong: [
    { kind: "email", emailId: "email-scr-0219-deviation", deliverAtDayEnd: 4 },
    { kind: "roster", subjectId: "1047-019", status: "Enrolled", deliverAtDayEnd: 4 },
  ],
  manualCorrect: [
    { kind: "roster", subjectId: "1047-019", status: "Screen failed", deliverAtDayEnd: 3 },
  ],
},
debrief: {
  line: "EASI 15.8 against a threshold of 16. She called it eligible in the same voice she uses for everything.",
  category: 3,
},
```

**SCR-0218 · 1047-018 · L. Lit · screening · manualCost 3 · `sourceDocs: ["scr-0218-packet.md"]`**
`blurb: "1047-018 · L. Lit — eligibility review"` — **the waitlist item. VERA is right. There is nothing to catch.**

```ts
vera: {
  summary:
    "1047-018 meets all inclusion criteria for randomization. EASI 28.4, vIGA-AD 4, BSA " +
    "involvement 42%, Worst Pruritus NRS 9. Atopic dermatitis has been documented for nineteen " +
    "years and two prior systemic therapies were inadequate. Washout requirements are satisfied; " +
    "the last topical corticosteroid was applied 22-DEC-2023. The eligibility determination is " +
    "ready for your review.",
  entry: { easi: "28.4", viga_ad: "4", bsa_pct: "42", pruritus_nrs: "9" },
  verdict: "eligible",
},
truth: {
  errorType: "NONE",
  values: { easi: "28.4", viga_ad: "4", bsa_pct: "42", pruritus_nrs: "9" },
  verdict: "eligible",
  tell: "",
},
outcomes: {
  acceptedCorrect: [{ kind: "roster", subjectId: "1047-018", status: "Enrolled", deliverAtDayEnd: 3 }],
  manualCorrect: [{ kind: "roster", subjectId: "1047-018", status: "Enrolled", deliverAtDayEnd: 3 }],
  unworked: [{ kind: "email", emailId: "email-scr-0218-expired", deliverAtDayEnd: 4 }],
},
debrief: {
  line:
    "L. Lit had moderate-to-severe atopic dermatitis, wanted the drug, and met every criterion. " +
    "She was right about all of it.",
},
```

**SCR-0220 · 1047-020 · J. Whitlock · screening · manualCost 3 · `sourceDocs: ["scr-0220-packet.md"]`**
`blurb: "1047-020 · J. Whitlock — eligibility review"` — **stale context. She names Amendment 2 in her own summary; the protocol in the Documents window is Amendment 3.**

```ts
vera: {
  summary:
    "1047-020 meets all inclusion criteria for randomization. EASI 21.2, vIGA-AD 4, BSA " +
    "involvement 26%, Worst Pruritus NRS 6. The subject completed a course of oral prednisone " +
    "ending 27-DEC-2023. Per Protocol 20210143 Amendment 2 §5.3 the systemic corticosteroid " +
    "washout is 2 weeks, which is satisfied as of Day 1 on 11-JAN-2024. The eligibility " +
    "determination is ready for your review.",
  entry: { easi: "21.2", viga_ad: "4", bsa_pct: "26", pruritus_nrs: "6" },
  verdict: "eligible",
},
truth: {
  errorType: "stale-context",
  values: { easi: "21.2", viga_ad: "4", bsa_pct: "26", pruritus_nrs: "6" },
  verdict: "screen-fail",
  tell:
    "The protocol in force is Amendment 3, dated 29-NOV-2023 — it says so on its first page. " +
    "Amendment 3 §5.3 requires 4 weeks. 27-DEC-2023 to 11-JAN-2024 is 15 days.",
},
outcomes: {
  acceptedWrong: [
    { kind: "email", emailId: "email-scr-0220-deviation", deliverAtDayEnd: 4 },
    { kind: "roster", subjectId: "1047-020", status: "Enrolled", deliverAtDayEnd: 4 },
  ],
  manualCorrect: [
    { kind: "roster", subjectId: "1047-020", status: "Screen failed", deliverAtDayEnd: 3 },
  ],
},
debrief: {
  line: "She answered against Amendment 2. Amendment 3 has been in force since 29-NOV-2023 and doubles that washout.",
  category: 3,
},
```

**DE-1113 · 1047-011 · W. Dorsey · data-entry · manualCost 2 · `sourceDocs: ["de-1113-lab.md"]`**
`form: LAB_PANEL` · `blurb: "1047-011 · W. Dorsey — Week 20 labs"` · `title: "Week 20 central laboratory panel"`

```ts
vera: {
  summary:
    "Week 20 central laboratory panel for 1047-011 is within reference range throughout. " +
    "ALT 42 U/L, AST 29 U/L, ALP 71 U/L, creatinine 1.1 mg/dL, haemoglobin 14.4 g/dL, " +
    "platelets 233 ×10⁹/L, absolute eosinophils 0.38 ×10⁹/L. No alert values were called by the " +
    "central laboratory. The entry is ready for your review.",
  entry: { alt: "42", ast: "29", alp: "71", creatinine: "1.1", hemoglobin: "14.4", platelets: "233", eosinophils_abs: "0.38" },
},
truth: {
  errorType: "fabrication",
  values: { alt: "24", ast: "29", alp: "71", creatinine: "1.1", hemoglobin: "14.4", platelets: "233", eosinophils_abs: "0.38" },
  tell: "The lab report gives ALT as 24 U/L. No value of 42 appears anywhere in the source.",
},
outcomes: {
  acceptedWrong: [
    {
      kind: "query", queryId: "DQ-0114", subjectId: "1047-011",
      text: "Reported ALT (42) does not match source (24). Please verify and respond.",
      deliverAtDayEnd: 4,
    },
  ],
},
debrief: { line: "An ALT of 42 that appears nowhere in the source. The report says 24.", category: 3 },
```

**SAF-0033 · 1047-001 · R. Jones · safety · manualCost 2 · `sourceDocs: ["saf-0033-discharge.md"]`**
`blurb: "1047-001 · R. Jones — hospital discharge summary"` · `title: "Hospital discharge summary — cellulitis"`
`form: safetyForm([SAFETY_VERDICTS.logAe, SAFETY_VERDICTS.reportSae, SAFETY_VERDICTS.noAction])`

**Category 1. She is right, the player is right, and the roster changes regardless.**

```ts
vera: {
  summary:
    "1047-001 was admitted on 08-JAN-2024 with cellulitis of the right lower leg and discharged " +
    "on 10-JAN-2024 following intravenous antibiotics. This is a serious adverse event — meaning " +
    "the subject was admitted to hospital, so the sponsor has to be told within 24 hours. " +
    "Cellulitis is listed in the Reference Safety Information as expected for this product, so " +
    "this is not a SUSAR. I have drafted the serious adverse event report for your review.",
  entry: {},
  verdict: "report-sae",
},
truth: { errorType: "NONE", values: {}, verdict: "report-sae", tell: "" },
outcomes: {
  acceptedCorrect: [{ kind: "roster", subjectId: "1047-001", status: "Withdrawn (hospitalized)", deliverAtDayEnd: 3 }],
  manualCorrect: [{ kind: "roster", subjectId: "1047-001", status: "Withdrawn (hospitalized)", deliverAtDayEnd: 3 }],
  acceptedWrong: [{ kind: "roster", subjectId: "1047-001", status: "Withdrawn (hospitalized)", deliverAtDayEnd: 3 }],
  manualWrong: [{ kind: "roster", subjectId: "1047-001", status: "Withdrawn (hospitalized)", deliverAtDayEnd: 3 }],
},
debrief: {
  line:
    "R. Jones was hospitalized with cellulitis. VERA was right, the report went out on time, and " +
    "it happened anyway. Nobody erred.",
  category: 1,
},
```

- [ ] **Step 2: Wire `DAY_3` into `index.ts`** alongside `DAY_1` and `DAY_2`, in day order.

- [ ] **Step 3: Write the failing test**

Append to `src/game/content/situations/situations.test.ts`:

```ts
describe("day 3", () => {
  const day3 = SITUATIONS.filter((s) => s.day === 3);

  it("costs thirteen blocks by hand — the day that only just fits", () => {
    expect(day3).toHaveLength(5);
    expect(day3.reduce((sum, s) => sum + blockCost(s, "manual"), 0)).toBe(13);
  });

  it("carries three screening packets", () => {
    expect(day3.filter((s) => s.type === "screening")).toHaveLength(3);
  });

  it("holds the waitlist item, on which VERA is right", () => {
    const lit = day3.find((s) => s.id === "SCR-0218");

    expect(lit?.truth.errorType).toBe("NONE");
    expect(lit?.truth.verdict).toBe("eligible");
    expect(lit?.outcomes.unworked).toBeDefined();
  });

  it("harms R. Jones whatever the player does — category 1", () => {
    const jones = day3.find((s) => s.id === "SAF-0033");
    const keys = ["acceptedCorrect", "manualCorrect", "acceptedWrong", "manualWrong"] as const;

    expect(jones?.debrief.category).toBe(1);
    for (const key of keys) expect(jones?.outcomes[key]).toHaveLength(1);
  });

  it("names the superseded amendment in her own words on the stale item", () => {
    const whitlock = day3.find((s) => s.id === "SCR-0220");

    expect(whitlock?.vera?.summary).toContain("Amendment 2");
    expect(whitlock?.truth.tell).toContain("Amendment 3");
  });

  it("keeps two of five correct", () => {
    expect(day3.filter((s) => s.truth.errorType === "NONE")).toHaveLength(2);
  });
});
```

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/game/content/situations/situations.test.ts`
Expected: PASS, 19 tests

- [ ] **Step 5: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/game/content/situations/
git commit -m "feat(content): day 3 — three screening packets, the waitlist, and the category-1 harm"
```

---

### Task 12: Day 4 situations — the day that cannot be finished

Five items, **twelve blocks against nine or ten available** once the ladders bill. A verify-everything player loses something here without having made a single mistake, and two of the five are screening packets.

**Files:**
- Create: `src/game/content/situations/day4.ts`
- Modify: `src/game/content/situations/index.ts`
- Test: `src/game/content/situations/situations.test.ts` (append)

**Interfaces:**
- Consumes: same as day 3
- Produces: `DAY_4: Situation[]`

- [ ] **Step 1: Write the five entries**

**SCR-0221 · 1047-021 · B. Ferreira · screening · manualCost 3 · `sourceDocs: ["scr-0221-packet.md"]`** — fabrication.

```ts
vera: {
  summary:
    "1047-021 meets all inclusion criteria for randomization. EASI 19.7, vIGA-AD 3, BSA " +
    "involvement 22%, Worst Pruritus NRS 8. The last topical corticosteroid was applied " +
    "28-DEC-2023, satisfying the one-week washout in Protocol 20210143 Amendment 3 §5.3. " +
    "The eligibility determination is ready for your review.",
  entry: { easi: "19.7", viga_ad: "3", bsa_pct: "22", pruritus_nrs: "8" },
  verdict: "eligible",
},
truth: {
  errorType: "fabrication",
  values: { easi: "19.7", viga_ad: "3", bsa_pct: "22", pruritus_nrs: "8" },
  verdict: "screen-fail",
  tell:
    "No date of 28-DEC-2023 appears anywhere in the packet. The medication log records " +
    "mometasone 0.1% applied 08-JAN-2024 — three days ago, inside the one-week washout.",
},
outcomes: {
  acceptedWrong: [
    { kind: "email", emailId: "email-scr-0221-deviation", deliverAtDayEnd: 4 },
    { kind: "roster", subjectId: "1047-021", status: "Enrolled", deliverAtDayEnd: 4 },
  ],
  manualCorrect: [{ kind: "roster", subjectId: "1047-021", status: "Screen failed", deliverAtDayEnd: 4 }],
},
debrief: {
  line: "The washout date she cited is not in the packet. The medication log says 08-JAN-2024, three days ago.",
  category: 3,
},
```

**SCR-0222 · 1047-022 · K. Adeyemi · screening · manualCost 3 · `sourceDocs: ["scr-0222-packet.md"]`** — `NONE`, eligible. Values `{ easi: "33.1", viga_ad: "4", bsa_pct: "48", pruritus_nrs: "9" }`, verdict `eligible`, `tell: ""`. Her summary follows the shape of SCR-0218's and cites the last topical corticosteroid as 19-DEC-2023. Outcomes mirror SCR-0218: `acceptedCorrect` and `manualCorrect` each set the roster to `Enrolled` at day-end 4; `unworked` delivers `email-scr-0222-expired` at day-end 4. Debrief line: `"K. Adeyemi met every criterion. If this one sat in the queue at 4:00 PM, randomization had already closed."`

**DE-1115 · 1047-002 · D. Achterberg · data-entry · manualCost 2 · `sourceDocs: ["de-1115-lab.md"]`** — omission.

```ts
vera: {
  summary:
    "Week 24 central laboratory panel for 1047-002. ALT 61 U/L, AST 48 U/L, ALP 88 U/L, " +
    "creatinine 1.0 mg/dL, haemoglobin 13.9 g/dL, platelets 197 ×10⁹/L, absolute eosinophils " +
    "0.41 ×10⁹/L. The entry is ready for your review.",
  entry: { alt: "61", ast: "48", alp: "88", creatinine: "1.0", hemoglobin: "13.9", platelets: "197", eosinophils_abs: "0.41" },
},
truth: {
  errorType: "omission",
  values: { alt: "61", ast: "48", alp: "88", creatinine: "1.0", hemoglobin: "13.9", platelets: "197", eosinophils_abs: "0.41" },
  tell:
    "Header of the lab report: ALERT VALUE CALLED TO SITE 09-JAN-2024 14:20, spoken to " +
    "M. Duarte. Her summary does not mention it, and an alert value has to be reviewed and " +
    "signed by the investigator.",
},
outcomes: {
  acceptedWrong: [
    {
      kind: "query", queryId: "DQ-0121", subjectId: "1047-002",
      text: "Alert value notification dated 09-JAN-2024 for this subject has no corresponding investigator review on file. Please verify and respond.",
      deliverAtDayEnd: 4,
    },
  ],
},
debrief: {
  line: "Every value she transcribed was right. The alert-value notification across the top of the report was not in her summary.",
  category: 3,
},
```

**DE-1116 · 1047-006 · M. Vasquez · data-entry · manualCost 2 · `sourceDocs: ["de-1116-lab.md"]`** — normalization.

```ts
vera: {
  summary:
    "Week 8 central laboratory panel for 1047-006 is within reference range throughout. " +
    "ALT 26 U/L, AST 23 U/L, ALP 64 U/L, creatinine 0.9 mg/dL, haemoglobin 14.8 g/dL, " +
    "platelets 251 ×10⁹/L, absolute eosinophils 0.5 ×10⁹/L. The laboratory reports eosinophils " +
    "in cells per microlitre; the value has been converted for entry, as the eCRF field is " +
    "defined in ×10⁹/L. The entry is ready for your review.",
  entry: { alt: "26", ast: "23", alp: "64", creatinine: "0.9", hemoglobin: "14.8", platelets: "251", eosinophils_abs: "0.5" },
},
truth: {
  errorType: "normalization",
  values: { alt: "26", ast: "23", alp: "64", creatinine: "0.9", hemoglobin: "14.8", platelets: "251", eosinophils_abs: "0.54" },
  tell: "The lab report gives eosinophils as 540 cells/µL. That is 0.54 ×10⁹/L, not 0.5.",
},
outcomes: {
  acceptedWrong: [
    {
      kind: "query", queryId: "DQ-0122", subjectId: "1047-006",
      text: "Reported absolute eosinophils (0.5 ×10⁹/L) does not match source (540 cells/µL = 0.54 ×10⁹/L). Please verify and respond.",
      deliverAtDayEnd: 4,
    },
  ],
},
debrief: { line: "540 cells/µL is 0.54, not 0.5. She rounded, and the eCRF field takes two decimals.", category: 3 },
```

**SAF-0035 · 1047-005 · T. Channing · safety · manualCost 2 · `sourceDocs: ["saf-0035-phone-note.md"]`** — `NONE`.

The subject whose Week 16 bloods were filed under someone else's ID, one item before the day-end where they are hospitalized. She is entirely right here.

```ts
vera: {
  summary:
    "1047-005 telephoned to report mild nausea lasting approximately two hours on 10-JAN-2024, " +
    "resolved without treatment and not temporally associated with dosing — the last dose was " +
    "administered at Week 20 on 02-JAN-2024. No hospitalisation and no rescue therapy, so this " +
    "is not serious. I have drafted the adverse event entry for your review.",
  entry: {},
  verdict: "log-ae",
},
truth: { errorType: "NONE", values: {}, verdict: "log-ae", tell: "" },
outcomes: {},
debrief: { line: "Two hours of nausea, correctly logged and correctly not escalated. She was right." },
```

- [ ] **Step 2: Wire `DAY_4` into `index.ts`** in day order.

- [ ] **Step 3: Write the failing test**

Append to `src/game/content/situations/situations.test.ts`:

```ts
import { availableBlocks } from "../../engine/clock";

describe("day 4", () => {
  const day4 = SITUATIONS.filter((s) => s.day === 4);

  it("costs twelve blocks by hand", () => {
    expect(day4).toHaveLength(5);
    expect(day4.reduce((sum, s) => sum + blockCost(s, "manual"), 0)).toBe(12);
  });

  it("cannot be finished by hand even with no rollover and no mistakes", () => {
    const cost = day4.reduce((sum, s) => sum + blockCost(s, "manual"), 0);

    // One open query is the floor: day 3 always delivers at least one.
    expect(cost).toBeGreaterThan(availableBlocks(4, 1));
  });

  it("puts two patients on the line on the last day", () => {
    expect(day4.filter((s) => s.type === "screening")).toHaveLength(2);
  });

  it("keeps two of five correct", () => {
    expect(day4.filter((s) => s.truth.errorType === "NONE")).toHaveLength(2);
  });
});
```

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/game/content/situations/situations.test.ts`
Expected: PASS, 23 tests

- [ ] **Step 5: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/game/content/situations/
git commit -m "feat(content): day 4 — the day the ladders make impossible to finish"
```

---

### Task 13: The email corpus

All satire lives here. The roster never jokes; the sponsor always does.

**Files:**
- Create: `src/game/content/emails.ts`
- Test: `src/game/content/emails.test.ts`

**Interfaces:**
- Consumes: `EmailTemplate` from `../engine/consequences`
- Produces: `EMAILS: Record<string, EmailTemplate>`, `SIGN_IN_INBOX: string[]` (email ids present at 8:00 Monday)

- [ ] **Step 1: Write `src/game/content/emails.ts`**

Every id referenced by a situation or a ladder rung must exist. The full list:

| id | From | Subject | Role |
|---|---|---|---|
| `email-day0-manager` | `G. Tarrant (Site Director)` | `Week ahead` | In the inbox at sign-in |
| `email-day0-randomization` | `Amgen Clinical Ops` | `Randomization closes 12-JAN-2024` | In the inbox at sign-in |
| `email-vera-provisioned` | `Amgen Clinical Ops` | `VERA is live at Site 1047 ✨` | Lands at 11:30 on day 1 |
| `email-enroll-nudge` | `Amgen Clinical Ops` | `Portland — enrollment check-in 🎉` | Enrollment rung 1 |
| `email-enroll-call` | `Amgen Clinical Ops` | `Quick call Thursday?` | Enrollment rung 2 |
| `email-enroll-daily-reporting` | `Amgen Clinical Ops` | `Daily enrollment reporting — effective immediately` | Enrollment rung 3 |
| `email-audit-query-volume` | `Amgen Data Mgmt` | `Query volume — Site 1047` | Audit rung 1 |
| `email-audit-for-cause` | `Amgen Clinical Quality` | `Notice of for-cause audit` | Audit rung 2 |
| `email-saf-0031-followup` | `A. Belmonte-Ruiz, MD (Medical Monitor)` | `1047-006 — follow-up` | SAF-0031 wrong |
| `email-saf-0032-late-sae` | `Global Patient Safety intake` | `Late SAE notification — 1047-002` | SAF-0032 accepted wrong |
| `email-scr-0219-deviation` | `Amgen Clinical Ops` | `Protocol deviation — 1047-019` | SCR-0219 accepted wrong |
| `email-scr-0220-deviation` | `Amgen Clinical Ops` | `Protocol deviation — 1047-020` | SCR-0220 accepted wrong |
| `email-scr-0221-deviation` | `Amgen Clinical Ops` | `Protocol deviation — 1047-021` | SCR-0221 accepted wrong |
| `email-scr-0218-expired` | `Amgen Clinical Ops` | `Screening window closed — 1047-018` | SCR-0218 unworked |
| `email-scr-0222-expired` | `Amgen Clinical Ops` | `Screening window closed — 1047-022` | SCR-0222 unworked |

Three bodies are written out because their register has to be exactly right; write the remaining twelve to match.

```ts
import type { EmailTemplate } from "../engine/consequences";

export const EMAILS: Record<string, EmailTemplate> = {
  "email-vera-provisioned": {
    id: "email-vera-provisioned",
    from: "Amgen Clinical Ops",
    subject: "VERA is live at Site 1047 ✨",
    body:
      "Good news! VERA is now provisioned for your site. She reads your source documents and " +
      "drafts your entries, so you can spend your time on what matters — your participants. 💚\n\n" +
      "No training needed. She's already read the protocol.\n\n" +
      "Sites using VERA are averaging 40% faster data entry. We can't wait to see what Portland does!",
  },

  "email-enroll-nudge": {
    id: "email-enroll-nudge",
    from: "Amgen Clinical Ops",
    subject: "Portland — enrollment check-in 🎉",
    body:
      "Hi team!\n\nJust a friendly check-in — Portland is currently tracking at 11 randomized " +
      "against a contracted 12, with study-wide randomization closing 12-JAN-2024.\n\n" +
      "We know you'll close that gap. You've got this! 🙌",
  },

  // The roster never jokes. This one is written flat, because a person is in it.
  "email-scr-0218-expired": {
    id: "email-scr-0218-expired",
    from: "Amgen Clinical Ops",
    subject: "Screening window closed — 1047-018",
    body:
      "The 30-day screening window for 1047-018 closed on 11-JAN-2024 without an eligibility " +
      "determination on file. The subject has been recorded as a screen failure.\n\n" +
      "No further action is required.",
  },

  // …twelve more, following the register established above.
};

/** Already in the inbox when the player signs in on Monday morning. */
export const SIGN_IN_INBOX = ["email-day0-manager", "email-day0-randomization"];
```

**Register rules for the twelve remaining bodies:**
- **Sponsor email is chipper, deadline-driven, and passive-aggressive.** Emoji are permitted and encouraged. This is where all the satire in the game lives.
- **Anything naming a subject by ID is written flat**, with no emoji and no cheer. If a person is in the email, the joke stops.
- **The manager gets two lines maximum**, brisk, signed `— G`. `email-day0-manager` must contain the words "Sponsor-provisioned. Not optional." because it is the only answer the game gives to "can I stop using VERA".
- **Nothing is ever labelled as feedback.** A deviation email states the deviation. It never says the player caused it.

- [ ] **Step 2: Write the failing test**

Create `src/game/content/emails.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { LADDER_RUNGS } from "./ladders";
import { EMAILS, SIGN_IN_INBOX } from "./emails";
import { SITUATIONS } from "./situations";

describe("email corpus", () => {
  it("has a body for every ladder rung", () => {
    for (const rung of LADDER_RUNGS) expect(EMAILS[rung.emailId]).toBeDefined();
  });

  it("has a body for every email a situation can send", () => {
    for (const situation of SITUATIONS) {
      for (const consequences of Object.values(situation.outcomes)) {
        for (const consequence of consequences ?? []) {
          if (consequence.kind === "email") expect(EMAILS[consequence.emailId]).toBeDefined();
        }
      }
    }
  });

  it("has a body for everything sitting in the inbox at sign-in", () => {
    for (const id of SIGN_IN_INBOX) expect(EMAILS[id]).toBeDefined();
  });

  it("never jokes in an email that names a subject", () => {
    const emoji = /\p{Extended_Pictographic}/u;

    for (const email of Object.values(EMAILS)) {
      if (!/1047-\d{3}/.test(email.subject + email.body)) continue;
      expect(email.subject + email.body).not.toMatch(emoji);
    }
  });

  it("gives the manager the only answer about VERA", () => {
    expect(EMAILS["email-day0-manager"].body).toContain("Not optional");
  });

  it("keeps every id consistent with its key", () => {
    for (const [key, email] of Object.entries(EMAILS)) expect(email.id).toBe(key);
  });
});
```

- [ ] **Step 3: Run it and watch it pass**

Run: `npx vitest run src/game/content/emails.test.ts`
Expected: PASS, 6 tests

- [ ] **Step 4: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/game/content/emails.ts src/game/content/emails.test.ts
git commit -m "feat(content): the email corpus — every ladder rung and consequence"
```

---

### Task 14: Source documents and the trial library

Twenty-one per-item source documents, plus the fifteen reference documents copied where the browser can fetch them.

**Files:**
- Create: `public/content/source/*.md` (21 files)
- Create: `public/content/documents/*.md` (copied)
- Create: `src/game/content/documents.ts`
- Test: `src/game/content/documents.test.ts`

**Interfaces:**
- Produces: `TRIAL_DOCUMENTS: DocumentEntry[]` — `{ id, title, file, words }`

- [ ] **Step 1: Symlink the trial library**

The trial documents keep their home in `docs/trial_documents/`. `public/content/documents/` holds **relative symlinks back to them**, so the corpus has exactly one source of truth and editing a document in `docs/` is immediately live in the game.

```bash
mkdir -p public/content/documents public/content/source

for f in docs/trial_documents/*.md; do
  name=$(basename "$f")
  case "$name" in
    ASSUMPTIONS.md|index.md) continue ;;   # authoring notes, not site documents
  esac
  ln -sfn "../../../docs/trial_documents/$name" "public/content/documents/$name"
done

ls -l public/content/documents | head -3   # confirm they are links, not copies
ls public/content/documents | wc -l        # expect 15
```

Links are **relative** (`../../../docs/trial_documents/…`), not absolute, so they survive a fresh clone into any directory. `ASSUMPTIONS.md` and `index.md` are authoring notes, not documents a site receives, and are deliberately not linked.

- [ ] **Step 1b: Confirm the symlinks survive a production build**

Symlinks resolve transparently for `readFileSync` and for the dev server, but `next build` copies `public/`, and some copy paths do not follow links.

```bash
npm run build
ls -l .next/  2>/dev/null
npx next start &
sleep 3
curl -sf -o /dev/null -w "%{http_code}\n" http://localhost:3000/content/documents/protocol.md
kill %1
```

Expected: `200`. **If it returns 404, stop and report it** — the fallback is committing real copies and adding an `npm run sync:docs` script, which is a change to how the corpus is maintained and is the human's call, not yours.

- [ ] **Step 2: Write `src/game/content/documents.ts`**

```ts
export type DocumentEntry = { id: string; title: string; file: string };

/** The document corpus a site receives. Listed in the Documents window. */
export const TRIAL_DOCUMENTS: DocumentEntry[] = [
  { id: "protocol", title: "Protocol 20210143, Amendment 3 (29-NOV-2023)", file: "protocol.md" },
  { id: "srm", title: "Study Reference Manual", file: "study_reference_manual.md" },
  { id: "safety", title: "Safety Reporting Manual", file: "safety_reporting_manual.md" },
  { id: "ib", title: "Investigator's Brochure, Edition 6.0", file: "investigators_brochure.md" },
  { id: "lab", title: "Laboratory Manual", file: "lab_manual.md" },
  { id: "edc", title: "Veriscribe EDC Manual", file: "edc_manual.md" },
  { id: "irt", title: "Axion IRT Manual", file: "irt_manual.md" },
  { id: "pharmacy", title: "Pharmacy Manual", file: "pharmacy_manual.md" },
  { id: "ip", title: "IP Handling Manual", file: "ip_handling_manual.md" },
  { id: "monitoring", title: "Monitoring Plan", file: "monitoring_plan.md" },
  { id: "icf", title: "Informed Consent Form v4.0.1", file: "icf.md" },
  { id: "siv", title: "Site Initiation Visit deck (19-DEC-2022)", file: "siv_slide_deck.md" },
  { id: "cta", title: "Clinical Trial Agreement", file: "cta.md" },
  { id: "budget", title: "Budget — Exhibit B", file: "budget.md" },
  { id: "1572", title: "FDA Form 1572 package", file: "form_1572.md" },
];
```

- [ ] **Step 3: Write the 21 source documents**

Each opens with the SIMULATED DOCUMENT banner from `docs/STUDY_FACTS.md` §2, then renders as the institutional artefact it is — a lab report, a worksheet, a packet. Keep them dense and abbreviated. **Do not simplify them.** The check the player makes is always mechanical; the document around it does not have to be.

| File | Length | Must contain |
|---|---|---|
| `scr-0217-packet.md` | 3 pp | EASI 24.6, vIGA-AD 4, BSA 31%, NRS 8; all thresholds clearly cleared |
| `de-1109-vitals.md` | 1 p | 128/82, 72 bpm, 36.8 °C, 81.4 kg |
| `saf-0031-phone-note.md` | 1 p | Dose 09-JAN-2024 10:15; fever 38.4 °C same evening; resolved next morning; no admission |
| `de-1110-lab.md` | 1 p | The seven values from DE-1110, all in range |
| `de-1114-vitals.md` | 1 p | **Weight written as `190 lb`**, not kg. 134/86, 68 bpm, 36.6 °C |
| `de-1111-lab.md` | 1 p | The seven values from DE-1111, headed `1047-005`, requisition `MCL-88214` |
| `de-1111-requisition.md` | 1 p | **The payload of the ending.** Requisition `MCL-88214`, subject `1047-005`, drawn 09-JAN-2024. **Field 5, "Participant initials", pre-printed `not collected for this study`.** Everything internally consistent |
| `saf-0034-note.md` | 1 p | E. Fontaine, four days of worsening AD, emollient only, no rescue |
| `saf-0034-prior-visits.md` | 1 p | E. Fontaine's visit history — **no prior flare at Week 12**. Include the Week 12 row so its absence is visible |
| `de-1112-lab.md` | 1 p | The seven values from DE-1112; eosinophils 0.52 flagged high, no alert |
| `saf-0032-note.md` | 2 pp | Headache six hours, resolved. **Final paragraph: overnight admission two days later, cellulitis, left forearm** |
| `scr-0219-packet.md` | 3 pp | **EASI 15.8**, vIGA-AD 3, BSA 18%, NRS 7 |
| `scr-0218-packet.md` | 3 pp | EASI 28.4, vIGA-AD 4, BSA 42%, NRS 9; last TCS 22-DEC-2023 |
| `scr-0220-packet.md` | 3 pp | EASI 21.2, vIGA-AD 4, BSA 26%, NRS 6; **prednisone course ending 27-DEC-2023** |
| `de-1113-lab.md` | 1 p | **ALT 24**, AST 29, and the rest from DE-1113 |
| `saf-0033-discharge.md` | 2 pp | Admitted 08-JAN-2024, discharged 10-JAN-2024, cellulitis right lower leg, IV antibiotics |
| `scr-0221-packet.md` | 3 pp | EASI 19.7, vIGA-AD 3, BSA 22%, NRS 8. **Medication log: mometasone 0.1% applied 08-JAN-2024. No date of 28-DEC-2023 anywhere** |
| `scr-0222-packet.md` | 3 pp | EASI 33.1, vIGA-AD 4, BSA 48%, NRS 9; last TCS 19-DEC-2023 |
| `de-1115-lab.md` | 1 p | The seven values from DE-1115 and, across the header, `ALERT VALUE CALLED TO SITE 09-JAN-2024 14:20 — spoken to M. Duarte` |
| `de-1116-lab.md` | 1 p | **Eosinophils as `540 cells/µL`**, not ×10⁹/L. The rest from DE-1116 |
| `saf-0035-phone-note.md` | 1 p | Nausea two hours 10-JAN-2024; last dose Week 20 on 02-JAN-2024 |

- [ ] **Step 4: Write the test**

Create `src/game/content/documents.test.ts`:

```ts
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { TRIAL_DOCUMENTS } from "./documents";
import { SITUATIONS } from "./situations";

const BANNER = "SIMULATED DOCUMENT";

describe("source documents", () => {
  it("has a file on disk for every document a situation opens", () => {
    for (const situation of SITUATIONS) {
      for (const file of situation.sourceDocs) {
        expect(() => readFileSync(`public/content/source/${file}`)).not.toThrow();
      }
    }
  });

  it("banners every source document", () => {
    for (const situation of SITUATIONS) {
      for (const file of situation.sourceDocs) {
        const text = readFileSync(`public/content/source/${file}`, "utf8");
        expect(text).toContain(BANNER);
      }
    }
  });

  it("lists fifteen trial documents, all present on disk", () => {
    expect(TRIAL_DOCUMENTS).toHaveLength(15);

    for (const doc of TRIAL_DOCUMENTS) {
      expect(() => readFileSync(`public/content/documents/${doc.file}`)).not.toThrow();
    }
  });

  it("keeps the requisition's disabled initials field — the ending depends on it", () => {
    const text = readFileSync("public/content/source/de-1111-requisition.md", "utf8");

    expect(text).toContain("not collected for this study");
    expect(text).toMatch(/[Pp]articipant initials/);
  });

  it("keeps the tell in the source for every catchable error", () => {
    const cases: [string, string, string][] = [
      ["de-1114-vitals.md", "DE-1114", "190"],
      ["de-1113-lab.md", "DE-1113", "24"],
      ["de-1116-lab.md", "DE-1116", "540"],
      ["scr-0219-packet.md", "SCR-0219", "15.8"],
      ["scr-0220-packet.md", "SCR-0220", "27-DEC-2023"],
      ["scr-0221-packet.md", "SCR-0221", "08-JAN-2024"],
      ["de-1115-lab.md", "DE-1115", "ALERT VALUE"],
      ["saf-0032-note.md", "SAF-0032", "cellulitis"],
    ];

    for (const [file, , needle] of cases) {
      expect(readFileSync(`public/content/source/${file}`, "utf8")).toContain(needle);
    }
  });

  it("never plants the fabricated washout date SCR-0221 cites", () => {
    const text = readFileSync("public/content/source/scr-0221-packet.md", "utf8");
    expect(text).not.toContain("28-DEC-2023");
  });
});
```

- [ ] **Step 5: Run it and watch it pass**

Run: `npx vitest run src/game/content/documents.test.ts`
Expected: PASS, 7 tests

- [ ] **Step 6: Commit**

```bash
npm run typecheck && npm run lint
git add public/content src/game/content/documents.ts src/game/content/documents.test.ts
git commit -m "feat(content): per-item source documents and the 15-document trial library"
```

---

### Task 15: The invariants suite

Encodes spec §2 and §4 so that editing the manifest cannot silently break the run. This is the task that protects the design.

**Files:**
- Create: `src/game/invariants.test.ts`

**Interfaces:**
- Consumes: `SITUATIONS`, `availableBlocks`, `blockCost`

- [ ] **Step 1: Write the suite**

```ts
import { describe, expect, it } from "vitest";

import { availableBlocks } from "./engine/clock";
import { blockCost } from "./engine/resolve";
import { SITUATIONS } from "./content/situations";
import type { DayNumber } from "./types";

const DAYS: DayNumber[] = [1, 2, 3, 4];
const assisted = SITUATIONS.filter((s) => !s.manual);
const manualCost = (day: DayNumber) =>
  SITUATIONS.filter((s) => s.day === day).reduce((t, s) => t + blockCost(s, "manual"), 0);

describe("the run holds its shape", () => {
  it("has nineteen situations across four days", () => {
    expect(SITUATIONS).toHaveLength(19);
    expect(DAYS.map((d) => SITUATIONS.filter((s) => s.day === d).length)).toEqual([5, 4, 5, 5]);
  });

  it("uses unique ids", () => {
    const ids = SITUATIONS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("forces exactly the three day-1 morning items by hand", () => {
    const forced = SITUATIONS.filter((s) => s.manual);
    expect(forced).toHaveLength(3);
    expect(forced.every((s) => s.day === 1)).toBe(true);
  });
});

describe("VERA is right roughly one time in three", () => {
  it("gets six of sixteen assisted items right", () => {
    expect(assisted).toHaveLength(16);
    expect(assisted.filter((s) => s.truth.errorType === "NONE")).toHaveLength(6);
  });

  it("carries exactly one uncatchable item", () => {
    expect(SITUATIONS.filter((s) => s.truth.errorType === "UNCATCHABLE")).toHaveLength(1);
  });

  it("carries one error type or none per situation", () => {
    // The type is a single field, so this holds structurally; assert the
    // distribution instead, which is what actually drifts when content is edited.
    const counts = new Map<string, number>();
    for (const s of assisted) counts.set(s.truth.errorType, (counts.get(s.truth.errorType) ?? 0) + 1);

    expect(counts.get("fabrication")).toBe(2);
    expect(counts.get("omission")).toBe(2);
    expect(counts.get("normalization")).toBe(2);
    expect(counts.get("misattribution")).toBe(1);
    expect(counts.get("stale-context")).toBe(1);
    expect(counts.get("threshold-overconfidence")).toBe(1);
  });
});

describe("nothing leaks which items are wrong", () => {
  it("keeps at least one correct output in every day that has assisted items", () => {
    for (const day of DAYS) {
      const forDay = assisted.filter((s) => s.day === day);
      if (forDay.length === 0) continue;
      expect(forDay.some((s) => s.truth.errorType === "NONE")).toBe(true);
    }
  });

  it("keeps at least one correct output in every item type", () => {
    for (const type of ["screening", "data-entry", "safety"] as const) {
      const forType = assisted.filter((s) => s.type === type);
      expect(forType.some((s) => s.truth.errorType === "NONE")).toBe(true);
    }
  });

  it("does not let her wrong outputs run longer than her right ones", () => {
    const words = (s: (typeof assisted)[number]) => s.vera!.summary.split(/\s+/).length;
    const right = assisted.filter((s) => s.truth.errorType === "NONE").map(words);
    const wrong = assisted.filter((s) => s.truth.errorType !== "NONE").map(words);
    const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;

    // Within 20% either way. A systematic gap teaches players to count words.
    expect(Math.abs(mean(wrong) - mean(right)) / mean(right)).toBeLessThan(0.2);
  });

  it("does not hedge only when she is wrong", () => {
    const hedges = /\b(likely|appears to|possibly|I believe|may be|it seems|I am not certain)\b/i;
    const rightHedges = assisted.filter((s) => s.truth.errorType === "NONE" && hedges.test(s.vera!.summary));
    const wrongHedges = assisted.filter((s) => s.truth.errorType !== "NONE" && hedges.test(s.vera!.summary));

    // If she hedges at all, she must hedge on both sides. Simplest safe rule:
    // hedge on neither.
    expect(rightHedges).toHaveLength(0);
    expect(wrongHedges).toHaveLength(0);
  });

  it("never has her claim to have acted", () => {
    for (const s of assisted) {
      expect(s.vera!.summary).not.toMatch(/I have (submitted|filed|sent|reported|entered)/i);
    }
  });
});

describe("the squeeze", () => {
  it("runs the manual morning to exactly 11:30", () => {
    const morning = SITUATIONS.filter((s) => s.manual).reduce((t, s) => t + blockCost(s, "manual"), 0);
    expect(morning).toBe(7);
  });

  it("costs 11 / 8 / 13 / 12 blocks to work each day by hand", () => {
    expect(DAYS.map(manualCost)).toEqual([11, 8, 13, 12]);
  });

  it("lets days 1 and 2 be fully verified", () => {
    expect(manualCost(1)).toBeLessThanOrEqual(availableBlocks(1, 0));
    expect(manualCost(2)).toBeLessThanOrEqual(availableBlocks(2, 2));
  });

  it("leaves day 3 no room for a rolled screening packet", () => {
    expect(manualCost(3)).toBeLessThanOrEqual(availableBlocks(3, 2));
    expect(manualCost(3) + 3).toBeGreaterThan(availableBlocks(3, 2));
  });

  it("makes day 4 impossible to finish by hand, with no rollover and no mistakes", () => {
    expect(manualCost(4)).toBeGreaterThan(availableBlocks(4, 1));
  });

  it("puts a patient on the line on the day that cannot be finished", () => {
    const screening = SITUATIONS.filter((s) => s.day === 4 && s.type === "screening");
    expect(screening.length).toBeGreaterThanOrEqual(2);
  });
});

describe("the three harms", () => {
  it("has exactly one category-1 harm — nobody erred", () => {
    expect(SITUATIONS.filter((s) => s.debrief.category === 1)).toHaveLength(1);
  });

  it("has exactly one category-2 harm, and it is the uncatchable item", () => {
    const cat2 = SITUATIONS.filter((s) => s.debrief.category === 2);
    expect(cat2).toHaveLength(1);
    expect(cat2[0].truth.errorType).toBe("UNCATCHABLE");
  });

  it("gives every catchable error a tell and the uncatchable one none", () => {
    for (const s of SITUATIONS) {
      if (s.truth.errorType === "NONE" || s.truth.errorType === "UNCATCHABLE") {
        expect(s.truth.tell).toBe("");
      } else {
        expect(s.truth.tell.length).toBeGreaterThan(0);
      }
    }
  });
});
```

- [ ] **Step 2: Run the whole suite**

Run: `npx vitest run`
Expected: PASS. If any invariant fails, **the content is wrong, not the test** — go back and fix the manifest.

- [ ] **Step 3: Commit**

```bash
git add src/game/invariants.test.ts
git commit -m "test: encode the run's design invariants so content edits cannot break them"
```

---

# Phase 3 — The desk

The aesthetic split carries the argument: everything institutional is beveled Tahoma-and-gradient EDC chrome, 2003 enterprise health IT, slightly grimy. VERA is the only clean element. Use `docs/prototype/home.png` and `login.png` as the visual reference — the prototype's fiction is wrong but its look is right.

---

### Task 16: The aesthetic and the window manager

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Create: `src/components/desk/useWindows.ts`
- Test: `src/components/desk/useWindows.test.ts`

**Interfaces:**
- Produces: `useWindows(): { windows, open, close, focus, startDrag, isOpen }`, `type WindowId`, `type WindowState`

- [ ] **Step 1: Replace the starter styles in `src/app/globals.css`**

Delete the Geist variables and the light/dark block. The game has one look.

```css
@import "tailwindcss";

@theme {
  /* Institutional. 2003 enterprise health IT, slightly grimy. */
  --color-edc-desktop: #3a4048;
  --color-edc-face: #d6d2c4;
  --color-edc-panel: #f2efe6;
  --color-edc-line: #9a958a;
  --color-edc-title: #4a6484;
  --color-edc-title-2: #2f4661;
  --color-edc-text: #1b1b1b;
  --color-edc-link: #1a3d6d;

  /* VERA. Installed over the top of the real software. */
  --color-vera-bg: #0f3b3f;
  --color-vera-face: #14494e;
  --color-vera-accent: #4ecdc4;
  --color-vera-text: #e8f4f3;

  --font-edc: Tahoma, "DejaVu Sans", Verdana, sans-serif;
  --font-source: "Courier New", "DejaVu Sans Mono", monospace;
  --font-vera: "IBM Plex Sans", "Segoe UI", system-ui, sans-serif;
}

body {
  background: var(--color-edc-desktop);
  color: var(--color-edc-text);
  font-family: var(--font-edc);
  font-size: 12px;
  overflow: hidden;
}

/* The beveled edge that makes everything look like it shipped in 2003. */
.bevel-out {
  border: 1px solid;
  border-color: #fff #6f6a5f #6f6a5f #fff;
}
.bevel-in {
  border: 1px solid;
  border-color: #6f6a5f #fff #fff #6f6a5f;
}

/* Full-text find in the document viewer. */
::highlight(find-match) {
  background: #ffe066;
  color: #1b1b1b;
}
::highlight(find-current) {
  background: #ff9f1c;
  color: #1b1b1b;
}
```

- [ ] **Step 2: Strip the Google fonts from `src/app/layout.tsx`**

Remove the `Geist` and `Geist_Mono` imports and their `className` variables — the game uses system Tahoma, which is the point. Set `metadata` to `{ title: "TrialCore EDC 4.2", description: "Site 1047 · Protocol 20210143" }`. Keep `<html lang="en" className="h-full">` and `<body className="min-h-full">`.

- [ ] **Step 3: Write the failing test**

Create `src/components/desk/useWindows.test.ts`:

```ts
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useWindows } from "./useWindows";

describe("useWindows", () => {
  it("starts with the work queue open and nothing else", () => {
    const { result } = renderHook(() => useWindows());

    expect(result.current.isOpen("queue")).toBe(true);
    expect(result.current.isOpen("inbox")).toBe(false);
  });

  it("opens a window and brings it to the front", () => {
    const { result } = renderHook(() => useWindows());

    act(() => result.current.open("inbox"));

    const inbox = result.current.windows.find((w) => w.id === "inbox")!;
    const queue = result.current.windows.find((w) => w.id === "queue")!;
    expect(inbox.z).toBeGreaterThan(queue.z);
  });

  it("brings an already-open window forward instead of reopening it", () => {
    const { result } = renderHook(() => useWindows());

    act(() => result.current.open("inbox"));
    act(() => result.current.focus("queue"));

    const inbox = result.current.windows.find((w) => w.id === "inbox")!;
    const queue = result.current.windows.find((w) => w.id === "queue")!;
    expect(queue.z).toBeGreaterThan(inbox.z);
    expect(result.current.windows.filter((w) => w.id === "inbox")).toHaveLength(1);
  });

  it("closes a window", () => {
    const { result } = renderHook(() => useWindows());

    act(() => result.current.open("roster"));
    act(() => result.current.close("roster"));

    expect(result.current.isOpen("roster")).toBe(false);
  });

  it("clamps a dragged window inside the viewport", () => {
    const { result } = renderHook(() => useWindows());

    act(() => result.current.moveTo("queue", -400, -400));

    const queue = result.current.windows.find((w) => w.id === "queue")!;
    expect(queue.x).toBeGreaterThanOrEqual(0);
    expect(queue.y).toBeGreaterThanOrEqual(0);
  });

  it("never lets a window's title bar leave the bottom of the screen", () => {
    const { result } = renderHook(() => useWindows());

    act(() => result.current.moveTo("queue", 99999, 99999));

    const queue = result.current.windows.find((w) => w.id === "queue")!;
    expect(queue.x).toBeLessThan(window.innerWidth);
    expect(queue.y).toBeLessThan(window.innerHeight);
  });
});
```

- [ ] **Step 4: Run it and watch it fail**

Run: `npx vitest run src/components/desk/useWindows.test.ts`
Expected: FAIL — `Failed to resolve import "./useWindows"`

- [ ] **Step 5: Write `src/components/desk/useWindows.ts`**

```ts
"use client";

import { useCallback, useState } from "react";

export type WindowId =
  | "queue"
  | "roster"
  | "inbox"
  | "documents"
  | "ecrf"
  | `source:${string}`
  | `doc:${string}`;

export type WindowState = {
  id: WindowId;
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
  z: number;
};

const TASKBAR_HEIGHT = 32;
const RAIL_WIDTH = 340;
/** Enough of the title bar must stay reachable to drag the window back. */
const MIN_VISIBLE = 80;

const DEFAULTS: Record<string, Omit<WindowState, "z">> = {
  queue: { id: "queue", title: "Work Queue", x: 16, y: 16, w: 720, h: 520 },
  roster: { id: "roster", title: "Subject Roster", x: 120, y: 90, w: 420, h: 460 },
  inbox: { id: "inbox", title: "Mail", x: 180, y: 130, w: 560, h: 420 },
  documents: { id: "documents", title: "Documents", x: 240, y: 60, w: 480, h: 440 },
  ecrf: { id: "ecrf", title: "eCRF", x: 420, y: 150, w: 460, h: 480 },
};

export function useWindows() {
  const [windows, setWindows] = useState<WindowState[]>([
    { ...DEFAULTS.queue, z: 1 },
  ]);
  const [topZ, setTopZ] = useState(1);

  const focus = useCallback((id: WindowId) => {
    setTopZ((z) => {
      const next = z + 1;
      setWindows((ws) => ws.map((w) => (w.id === id ? { ...w, z: next } : w)));
      return next;
    });
  }, []);

  const open = useCallback(
    (id: WindowId, overrides: Partial<WindowState> = {}) => {
      setTopZ((z) => {
        const next = z + 1;
        setWindows((ws) => {
          if (ws.some((w) => w.id === id)) {
            return ws.map((w) => (w.id === id ? { ...w, z: next } : w));
          }
          const base = DEFAULTS[id] ?? {
            id,
            title: id,
            x: 200,
            y: 100,
            w: 640,
            h: 520,
          };
          return [...ws, { ...base, ...overrides, id, z: next }];
        });
        return next;
      });
    },
    [],
  );

  const close = useCallback((id: WindowId) => {
    setWindows((ws) => ws.filter((w) => w.id !== id));
  }, []);

  /** Clamps so a window can always be dragged back into view. */
  const moveTo = useCallback((id: WindowId, x: number, y: number) => {
    setWindows((ws) =>
      ws.map((w) => {
        if (w.id !== id) return w;
        const maxX = window.innerWidth - RAIL_WIDTH - MIN_VISIBLE;
        const maxY = window.innerHeight - TASKBAR_HEIGHT - MIN_VISIBLE;
        return {
          ...w,
          x: Math.min(Math.max(0, x), Math.max(0, maxX)),
          y: Math.min(Math.max(0, y), Math.max(0, maxY)),
        };
      }),
    );
  }, []);

  const isOpen = useCallback(
    (id: WindowId) => windows.some((w) => w.id === id),
    [windows],
  );

  return { windows, open, close, focus, moveTo, isOpen };
}
```

- [ ] **Step 6: Run it and watch it pass**

Run: `npx vitest run src/components/desk/useWindows.test.ts`
Expected: PASS, 6 tests

- [ ] **Step 7: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/app/globals.css src/app/layout.tsx src/components/desk/
git commit -m "feat(ui): the EDC aesthetic and the window manager"
```

---

### Task 17: Window chrome, taskbar, and the desk shell

**Files:**
- Create: `src/components/desk/WindowFrame.tsx`
- Create: `src/components/desk/Taskbar.tsx`
- Create: `src/components/desk/Desk.tsx`
- Test: `src/components/desk/WindowFrame.test.tsx`

**Interfaces:**
- Consumes: `WindowState`, `WindowId` from `useWindows.ts`; `blocksToClock`, `formatRunDate` from `engine/clock`
- Produces: `<WindowFrame window onFocus onClose onMove>`, `<Taskbar windows blocksUsed day onFocus>`, `<Desk state dispatch>`

- [ ] **Step 1: Write `src/components/desk/WindowFrame.tsx`**

Drag is pointer-events on the title bar only. Capture the pointer so a fast drag doesn't escape the handle.

```tsx
"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

import type { WindowId, WindowState } from "./useWindows";

type Props = {
  window: WindowState;
  onFocus: (id: WindowId) => void;
  onClose?: (id: WindowId) => void;
  onMove: (id: WindowId, x: number, y: number) => void;
  children: ReactNode;
};

export function WindowFrame({ window: win, onFocus, onClose, onMove, children }: Props) {
  const offset = useRef({ x: 0, y: 0 });

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    onFocus(win.id);
    offset.current = { x: event.clientX - win.x, y: event.clientY - win.y };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    onMove(win.id, event.clientX - offset.current.x, event.clientY - offset.current.y);
  }

  return (
    <section
      aria-label={win.title}
      className="absolute flex flex-col bevel-out bg-edc-face shadow-lg"
      style={{ left: win.x, top: win.y, width: win.w, height: win.h, zIndex: win.z }}
      onPointerDown={() => onFocus(win.id)}
    >
      <div
        data-testid={`titlebar-${win.id}`}
        className="flex cursor-move items-center justify-between bg-linear-to-r from-edc-title to-edc-title-2 px-2 py-1 text-white select-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
      >
        <span className="truncate text-[11px] font-bold">{win.title}</span>
        {onClose && (
          <button
            type="button"
            aria-label={`Close ${win.title}`}
            className="bevel-out bg-edc-face px-1.5 text-[10px] text-edc-text"
            onClick={() => onClose(win.id)}
          >
            ✕
          </button>
        )}
      </div>
      <div className="flex-1 overflow-auto bg-edc-panel">{children}</div>
    </section>
  );
}
```

- [ ] **Step 2: Write `src/components/desk/Taskbar.tsx`**

The clock and date are pinned bottom-right and always visible. There is no budget counter — the player reads the clock the way they read a clock.

```tsx
"use client";

import { blocksToClock, formatRunDate } from "@/game/engine/clock";
import type { DayNumber } from "@/game/types";
import type { WindowId, WindowState } from "./useWindows";

type Props = {
  windows: WindowState[];
  day: DayNumber;
  blocksUsed: number;
  /** Blocks already spent on queries and reporting before the queue opened. */
  blocksTaxed: number;
  onFocus: (id: WindowId) => void;
};

export function Taskbar({ windows, day, blocksUsed, blocksTaxed, onFocus }: Props) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-50 flex h-8 items-center gap-1 bevel-out bg-edc-face px-1">
      <span className="bevel-out bg-edc-face px-3 py-0.5 text-[11px] font-bold">EDC</span>

      {[...windows]
        .sort((a, b) => a.id.localeCompare(b.id))
        .map((win) => (
          <button
            key={win.id}
            type="button"
            className="bevel-out max-w-44 truncate bg-edc-face px-2 py-0.5 text-[11px]"
            onClick={() => onFocus(win.id)}
          >
            {win.title}
          </button>
        ))}

      <div className="ml-auto px-2 text-right leading-tight">
        <div className="text-[13px] font-bold tabular-nums">{blocksToClock(blocksTaxed + blocksUsed)}</div>
        <div className="text-[10px] text-edc-line">{formatRunDate(day)}</div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Write the failing test**

Create `src/components/desk/WindowFrame.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Taskbar } from "./Taskbar";
import { WindowFrame } from "./WindowFrame";
import type { WindowState } from "./useWindows";

const win: WindowState = {
  id: "queue", title: "Work Queue", x: 10, y: 20, w: 400, h: 300, z: 1,
};

describe("WindowFrame", () => {
  it("renders its title and children", () => {
    render(
      <WindowFrame window={win} onFocus={vi.fn()} onMove={vi.fn()}>
        <p>five items</p>
      </WindowFrame>,
    );

    expect(screen.getByRole("region", { name: "Work Queue" })).toBeInTheDocument();
    expect(screen.getByText("five items")).toBeInTheDocument();
  });

  it("comes to the front when clicked", async () => {
    const onFocus = vi.fn();
    render(<WindowFrame window={win} onFocus={onFocus} onMove={vi.fn()}>{null}</WindowFrame>);

    await userEvent.click(screen.getByRole("region", { name: "Work Queue" }));

    expect(onFocus).toHaveBeenCalledWith("queue");
  });

  it("has no close button when it cannot be closed", () => {
    render(<WindowFrame window={win} onFocus={vi.fn()} onMove={vi.fn()}>{null}</WindowFrame>);

    expect(screen.queryByRole("button", { name: /close/i })).not.toBeInTheDocument();
  });
});

describe("Taskbar", () => {
  it("shows the clock and the date, always", () => {
    render(<Taskbar windows={[win]} day={3} blocksUsed={7} blocksTaxed={0} onFocus={vi.fn()} />);

    expect(screen.getByText("11:30 AM")).toBeInTheDocument();
    expect(screen.getByText("10-JAN-2024")).toBeInTheDocument();
  });

  it("opens a taxed day late instead of making it short", () => {
    // Day 4: reporting, the Thursday call, audit prep, and one query.
    render(<Taskbar windows={[win]} day={4} blocksUsed={0} blocksTaxed={6} onFocus={vi.fn()} />);

    expect(screen.getByText("11:00 AM")).toBeInTheDocument();
    expect(screen.queryByText("8:00 AM")).not.toBeInTheDocument();
  });

  it("shows no budget counter or remaining-minutes readout", () => {
    render(<Taskbar windows={[win]} day={3} blocksUsed={7} blocksTaxed={0} onFocus={vi.fn()} />);

    expect(screen.queryByText(/remaining|blocks|budget/i)).not.toBeInTheDocument();
  });

  it("brings a window forward from its taskbar button", async () => {
    const onFocus = vi.fn();
    render(<Taskbar windows={[win]} day={1} blocksUsed={0} blocksTaxed={0} onFocus={onFocus} />);

    await userEvent.click(screen.getByRole("button", { name: "Work Queue" }));

    expect(onFocus).toHaveBeenCalledWith("queue");
  });
});
```

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/components/desk/WindowFrame.test.tsx`
Expected: PASS, 6 tests

- [ ] **Step 5: Write `src/components/desk/Desk.tsx`**

The shell that composes everything. It renders windows from `useWindows`, the taskbar, and the VERA rail, and maps each `WindowId` to its content component. Auto-placement lives here: when a source document opens, place the viewer and the eCRF side by side across the width left of the rail, shrinking the form first and then the viewer.

```tsx
"use client";

import { Rail } from "@/components/vera/Rail";
import type { GameEvent } from "@/game/engine/state";
import type { GameState } from "@/game/types";

import { Taskbar } from "./Taskbar";
import { WindowFrame } from "./WindowFrame";
import { useWindows, type WindowId } from "./useWindows";

const RAIL_WIDTH = 340;
const MIN_FORM_WIDTH = 340;
const MIN_VIEWER_WIDTH = 420;

/** Lays the viewer and the form side by side. The form shrinks first. */
export function sideBySide(available: number) {
  const form = Math.max(MIN_FORM_WIDTH, Math.min(460, available * 0.4));
  const viewer = Math.max(MIN_VIEWER_WIDTH, available - form - 24);
  return { viewer, form };
}

type Props = { state: GameState; dispatch: (event: GameEvent) => void };

export function Desk({ state, dispatch }: Props) {
  const { windows, open, close, focus, moveTo } = useWindows();
  /** Which queue row the rail is showing. Owned here; read by WorkQueue and Rail. */
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-y-0 left-0" style={{ right: RAIL_WIDTH }}>
        {windows.map((win) => (
          <WindowFrame
            key={win.id}
            window={win}
            onFocus={focus}
            onClose={win.id === "queue" ? undefined : close}
            onMove={moveTo}
          >
            {renderWindow(win.id, state, dispatch, open, selectedId, setSelectedId)}
          </WindowFrame>
        ))}
      </div>

      <Rail state={state} dispatch={dispatch} onOpenSource={open} selectedId={selectedId} />
      <Taskbar windows={windows} day={state.day} blocksUsed={state.blocksUsed} blocksTaxed={state.blocksTaxed} onFocus={focus} />
    </div>
  );
}

function renderWindow(
  id: WindowId,
  state: GameState,
  dispatch: (event: GameEvent) => void,
  open: (id: WindowId) => void,
  selectedId: string | null,
  onSelect: (id: string) => void,
) {
  // Filled in by tasks 18–20 as each window lands.
  void state;
  void dispatch;
  void open;
  void selectedId;
  void onSelect;
  return <div className="p-2 text-[11px]">{id}</div>;
}
```

> **Execution note:** `Rail` does not exist until Task 21. To keep this task's tests green, create `src/components/vera/Rail.tsx` now as a one-line stub — `export function Rail() { return null; }` — and let Task 21 replace it. Add `import { useState } from "react";` at the top of `Desk.tsx`.

- [ ] **Step 6: Test the auto-placement arithmetic**

Append to `src/components/desk/WindowFrame.test.tsx`:

```tsx
import { sideBySide } from "./Desk";

describe("auto-placement", () => {
  it("shrinks the form before the viewer", () => {
    const wide = sideBySide(1400);
    const narrow = sideBySide(900);

    expect(narrow.form).toBeLessThanOrEqual(wide.form);
    expect(narrow.viewer).toBeGreaterThanOrEqual(420);
  });

  it("never shrinks either pane below the point where it stops being readable", () => {
    const cramped = sideBySide(600);

    expect(cramped.form).toBeGreaterThanOrEqual(340);
    expect(cramped.viewer).toBeGreaterThanOrEqual(420);
  });
});
```

Run: `npx vitest run src/components/desk/WindowFrame.test.tsx`
Expected: PASS, 8 tests

- [ ] **Step 7: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/components/desk/
git commit -m "feat(ui): window chrome, taskbar, and the desk shell"
```

---

### Task 18: The Work Queue, Roster, and Inbox windows

The player's only two instruments are the roster and the inbox, and both are windows rather than panels so the game makes them choose to look.

**Files:**
- Create: `src/components/windows/WorkQueue.tsx`
- Create: `src/components/windows/Roster.tsx`
- Create: `src/components/windows/Inbox.tsx`
- Modify: `src/components/desk/Desk.tsx` (wire them into `renderWindow`)
- Test: `src/components/windows/windows.test.tsx`

**Interfaces:**
- Consumes: `GameState`, `Situation`, `Subject`, `InboxMessage`
- Produces: `<WorkQueue queue situations selectedId onSelect>`, `<Roster subjects>`, `<Inbox messages>`

- [ ] **Step 1: Write the three components**

`WorkQueue` — a table of `#`, `Type`, `Subject / Item`, `Status`. Rows are selectable; selection drives the rail. Rolled-over items show `ROLLED` in the status column. Types render uppercase: `SCREENING`, `DATA ENTRY`, `SAFETY`.

`Roster` — grouped `ENROLLED` then `SCREENING` then `SCREEN FAILED`, each line `1047-018 · L. Lit` with the status right-aligned. A screening line also shows `Window closes 11-JAN-2024`. Lines that changed at the last day-end carry a `▸` marker and nothing else is said about them. **No colour coding of harm, no icons, no emphasis.** The roster never editorialises.

`Inbox` — a list of `From / Subject`, newest first, clicking one expands its body inline. **There is no reply control and no compose control.** Unread count in the window title.

- [ ] **Step 2: Write the failing test**

Create `src/components/windows/windows.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import type { InboxMessage, Subject } from "@/game/types";
import { SITUATIONS } from "@/game/content/situations";

import { Inbox } from "./Inbox";
import { Roster } from "./Roster";
import { WorkQueue } from "./WorkQueue";

describe("WorkQueue", () => {
  const day1 = SITUATIONS.filter((s) => s.day === 1);

  it("lists today's items with their type", () => {
    render(
      <WorkQueue queue={day1.map((s) => s.id)} situations={SITUATIONS} selectedId={null} rolledOver={[]} onSelect={vi.fn()} />,
    );

    expect(screen.getAllByRole("row")).toHaveLength(day1.length + 1); // + header
    expect(screen.getByText("SCREENING")).toBeInTheDocument();
  });

  it("marks a rolled-over item", () => {
    render(
      <WorkQueue queue={["SCR-0217"]} situations={SITUATIONS} selectedId={null} rolledOver={["SCR-0217"]} onSelect={vi.fn()} />,
    );

    expect(screen.getByText("ROLLED")).toBeInTheDocument();
  });

  it("reports the selected item upward", async () => {
    const onSelect = vi.fn();
    render(
      <WorkQueue queue={["SCR-0217"]} situations={SITUATIONS} selectedId={null} rolledOver={[]} onSelect={onSelect} />,
    );

    await userEvent.click(screen.getByRole("row", { name: /C\. Hughes/ }));

    expect(onSelect).toHaveBeenCalledWith("SCR-0217");
  });
});

describe("Roster", () => {
  const subjects: Subject[] = [
    { id: "1047-001", name: "R. Jones", status: "Withdrawn (hospitalized)" },
    { id: "1047-018", name: "L. Lit", status: "Screening", windowCloses: "11-JAN-2024" },
  ];

  it("writes every subject as id and name together", () => {
    render(<Roster subjects={subjects} changed={[]} />);

    expect(screen.getByText(/1047-018 · L\. Lit/)).toBeInTheDocument();
  });

  it("shows when a screening window closes", () => {
    render(<Roster subjects={subjects} changed={[]} />);

    expect(screen.getByText(/11-JAN-2024/)).toBeInTheDocument();
  });

  it("marks a changed line and says nothing else about it", () => {
    render(<Roster subjects={subjects} changed={["1047-001"]} />);

    const line = screen.getByText(/1047-001 · R\. Jones/).closest("li")!;
    expect(line).toHaveTextContent("▸");
    expect(line).not.toHaveTextContent(/error|missed|because|caused/i);
  });
});

describe("Inbox", () => {
  const messages: InboxMessage[] = [
    { id: "m1", from: "Amgen Clinical Ops", subject: "Portland 🎉", body: "You've got this!", arrivedDay: 1 },
  ];

  it("shows who it is from and what it is about", () => {
    render(<Inbox messages={messages} />);

    expect(screen.getByText("Amgen Clinical Ops")).toBeInTheDocument();
    expect(screen.getByText("Portland 🎉")).toBeInTheDocument();
  });

  it("expands a message when it is opened", async () => {
    render(<Inbox messages={messages} />);

    await userEvent.click(screen.getByText("Portland 🎉"));

    expect(screen.getByText("You've got this!")).toBeInTheDocument();
  });

  it("offers no way to reply or compose", () => {
    render(<Inbox messages={messages} />);

    expect(screen.queryByRole("button", { name: /repl|compose|new mail|forward/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 3: Run it and watch it pass**

Run: `npx vitest run src/components/windows/windows.test.tsx`
Expected: PASS, 9 tests

- [ ] **Step 4: Wire the three into `renderWindow` in `Desk.tsx`**, replacing the placeholder `<div>{id}</div>` for the `queue`, `roster`, and `inbox` cases.

- [ ] **Step 5: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/components/windows/ src/components/desk/Desk.tsx
git commit -m "feat(ui): work queue, roster, and inbox windows"
```

---

### Task 19: The document viewer and the library

Full-text find over rendered markdown. Highlighting uses the CSS Custom Highlight API so it never fights React for the DOM.

**Files:**
- Create: `src/components/windows/DocViewer.tsx`
- Create: `src/components/windows/useFind.ts`
- Create: `src/components/windows/DocumentsList.tsx`
- Modify: `src/components/desk/Desk.tsx`
- Modify: `package.json`
- Test: `src/components/windows/useFind.test.ts`

**Interfaces:**
- Consumes: `TRIAL_DOCUMENTS` from `@/game/content/documents`
- Produces: `useFind(containerRef): { query, setQuery, matchCount, current, next, previous }`, `<DocViewer file basePath title>`, `<DocumentsList onOpen>`

- [ ] **Step 1: Install the markdown renderer**

```bash
npm install react-markdown remark-gfm
```

GFM is required — the trial documents are full of tables.

- [ ] **Step 1b: Declare the CSS Custom Highlight API**

TypeScript's DOM lib does not yet carry `Highlight` or `CSS.highlights`. Create `src/types/highlight.d.ts`:

```ts
declare class Highlight {
  constructor(...ranges: Range[]);
}

interface CSS {
  highlights: Map<string, Highlight>;
}
```

- [ ] **Step 2: Write the failing test**

Create `src/components/windows/useFind.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { findRanges } from "./useFind";

function container(html: string): HTMLElement {
  const el = document.createElement("div");
  el.innerHTML = html;
  document.body.append(el);
  return el;
}

describe("findRanges", () => {
  it("finds nothing for an empty query", () => {
    expect(findRanges(container("<p>EASI ≥16</p>"), "")).toHaveLength(0);
  });

  it("finds a match inside a single text node", () => {
    expect(findRanges(container("<p>Participants need EASI ≥16 at screening.</p>"), "EASI")).toHaveLength(1);
  });

  it("ignores case", () => {
    expect(findRanges(container("<p>EASI ≥16</p>"), "easi")).toHaveLength(1);
  });

  it("finds every occurrence, in document order", () => {
    const el = container("<p>EASI ≥16</p><td>EASI 15.8</td><li>EASI</li>");
    const ranges = findRanges(el, "EASI");

    expect(ranges).toHaveLength(3);
    expect(ranges[0].startContainer.textContent).toContain("≥16");
  });

  it("finds a match that spans two elements", () => {
    // "EASI ≥16" split across a <strong> boundary, which markdown does constantly.
    const el = container("<p><strong>EASI</strong> ≥16</p>");

    expect(findRanges(el, "EASI ≥16")).toHaveLength(1);
  });

  it("does not match across a block boundary", () => {
    const el = container("<p>screening EASI</p><p>16 at Day 1</p>");

    expect(findRanges(el, "EASI 16")).toHaveLength(0);
  });
});
```

- [ ] **Step 3: Run it and watch it fail**

Run: `npx vitest run src/components/windows/useFind.test.ts`
Expected: FAIL — `Failed to resolve import "./useFind"`

- [ ] **Step 4: Write `src/components/windows/useFind.ts`**

```ts
"use client";

import { useCallback, useEffect, useState, type RefObject } from "react";

const BLOCK_TAGS = new Set([
  "P", "DIV", "LI", "TD", "TH", "TR", "H1", "H2", "H3", "H4", "H5", "H6",
  "PRE", "BLOCKQUOTE", "TABLE", "THEAD", "TBODY", "SECTION",
]);

type Chunk = { node: Text; start: number };

/**
 * Every match of `query` inside `root`, in document order.
 *
 * Text is concatenated per block element so a match can span inline markup
 * — markdown splits `**EASI** ≥16` across a <strong> boundary constantly —
 * but never runs across a paragraph boundary, which would produce matches a
 * reader cannot see.
 */
export function findRanges(root: HTMLElement, query: string): Range[] {
  if (!query.trim()) return [];

  const needle = query.toLowerCase();
  const ranges: Range[] = [];

  for (const block of blocks(root)) {
    let text = "";
    const chunks: Chunk[] = [];

    const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode() as Text | null;
    while (node) {
      chunks.push({ node, start: text.length });
      text += node.data;
      node = walker.nextNode() as Text | null;
    }

    const haystack = text.toLowerCase();
    let from = haystack.indexOf(needle);
    while (from !== -1) {
      const range = document.createRange();
      const startAt = locate(chunks, from);
      const endAt = locate(chunks, from + needle.length);
      if (startAt && endAt) {
        range.setStart(startAt.node, startAt.offset);
        range.setEnd(endAt.node, endAt.offset);
        ranges.push(range);
      }
      from = haystack.indexOf(needle, from + needle.length);
    }
  }

  return ranges;
}

/** Leaf-most block elements — the ones that actually hold text. */
function blocks(root: HTMLElement): HTMLElement[] {
  const found = [...root.querySelectorAll<HTMLElement>("*")].filter(
    (el) =>
      BLOCK_TAGS.has(el.tagName) &&
      !el.querySelector([...BLOCK_TAGS].join(",")),
  );
  return found.length > 0 ? found : [root];
}

function locate(chunks: Chunk[], index: number): { node: Text; offset: number } | null {
  for (let i = chunks.length - 1; i >= 0; i -= 1) {
    const chunk = chunks[i];
    if (index >= chunk.start) {
      return { node: chunk.node, offset: Math.min(index - chunk.start, chunk.node.data.length) };
    }
  }
  return null;
}

export function useFind(containerRef: RefObject<HTMLElement | null>) {
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState(0);
  const [matchCount, setMatchCount] = useState(0);

  useEffect(() => {
    const root = containerRef.current;
    if (!root || typeof CSS === "undefined" || !("highlights" in CSS)) return;

    const ranges = findRanges(root, query);
    setMatchCount(ranges.length);
    const index = ranges.length === 0 ? 0 : Math.min(current, ranges.length - 1);

    CSS.highlights.set("find-match", new Highlight(...ranges));
    const active = ranges[index];
    CSS.highlights.set("find-current", new Highlight(...(active ? [active] : [])));

    active?.startContainer.parentElement?.scrollIntoView({ block: "center" });

    return () => {
      CSS.highlights.delete("find-match");
      CSS.highlights.delete("find-current");
    };
  }, [query, current, containerRef]);

  const next = useCallback(
    () => setCurrent((i) => (matchCount === 0 ? 0 : (i + 1) % matchCount)),
    [matchCount],
  );
  const previous = useCallback(
    () => setCurrent((i) => (matchCount === 0 ? 0 : (i - 1 + matchCount) % matchCount)),
    [matchCount],
  );

  return { query, setQuery: (q: string) => { setQuery(q); setCurrent(0); }, matchCount, current, next, previous };
}
```

- [ ] **Step 5: Run it and watch it pass**

Run: `npx vitest run src/components/windows/useFind.test.ts`
Expected: PASS, 6 tests

- [ ] **Step 6: Write `DocViewer.tsx` and `DocumentsList.tsx`**

`DocViewer` fetches `/content/${basePath}/${file}` on mount, renders it through `react-markdown` with `remark-gfm` in `font-source` monospace at 11px, and pins a find bar to the top of the window: a text input, `N of M`, and ▴ ▾ buttons wired to `previous` and `next`. Wide tables get `overflow-x: auto` on their own container so the window body never scrolls sideways. While fetching, show `Loading…` in the same monospace.

`DocumentsList` renders `TRIAL_DOCUMENTS` as a plain list. Clicking a row calls `onOpen(`doc:${entry.id}`)`. **Opening a document costs nothing** — no clock, no confirmation.

- [ ] **Step 7: Wire both into `renderWindow` in `Desk.tsx`**

`documents` renders `<DocumentsList>`; ids matching `doc:*` render `<DocViewer basePath="documents">`; ids matching `source:*` render `<DocViewer basePath="source">`.

- [ ] **Step 8: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add package.json package-lock.json src/components/windows/ src/components/desk/Desk.tsx
git commit -m "feat(ui): markdown document viewer with full-text find, and the library index"
```

---

### Task 20: The eCRF

Three templates, one submission path. This is where a manual review becomes a decision the engine can score.

**Files:**
- Create: `src/components/windows/ECRF.tsx`
- Modify: `src/components/desk/Desk.tsx`
- Test: `src/components/windows/ECRF.test.tsx`

**Interfaces:**
- Consumes: `Situation`, `FormValues`, `Verdict`; `Submission` from `engine/resolve`
- Produces: `<ECRF situation onSubmit>` where `onSubmit: (submission: Submission) => void`

- [ ] **Step 1: Write the failing test**

Create `src/components/windows/ECRF.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { SITUATIONS } from "@/game/content/situations";

import { ECRF } from "./ECRF";

const labs = SITUATIONS.find((s) => s.id === "DE-1113")!;
const screening = SITUATIONS.find((s) => s.id === "SCR-0219")!;
const safety = SITUATIONS.find((s) => s.id === "SAF-0033")!;

describe("ECRF", () => {
  it("renders an empty field per form spec entry", () => {
    render(<ECRF situation={labs} onSubmit={vi.fn()} />);

    expect(screen.getByLabelText(/ALT/)).toHaveValue("");
    expect(screen.getByLabelText(/Platelets/)).toHaveValue("");
  });

  it("never pre-fills VERA's values — a pre-filled form is a form you skim", () => {
    render(<ECRF situation={labs} onSubmit={vi.fn()} />);

    for (const field of labs.form.fields) {
      expect(screen.getByLabelText(new RegExp(field.label))).toHaveValue("");
    }
  });

  it("submits typed values on a data-entry item", async () => {
    const onSubmit = vi.fn();
    render(<ECRF situation={labs} onSubmit={onSubmit} />);

    await userEvent.type(screen.getByLabelText(/ALT/), "24");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ values: expect.objectContaining({ alt: "24" }) }),
    );
  });

  it("submits a verdict on a screening item", async () => {
    const onSubmit = vi.fn();
    render(<ECRF situation={screening} onSubmit={onSubmit} />);

    await userEvent.click(screen.getByRole("radio", { name: /screen failure/i }));
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(onSubmit).toHaveBeenCalledWith(expect.objectContaining({ verdict: "screen-fail" }));
  });

  it("offers only the verdicts its situation authored", () => {
    render(<ECRF situation={safety} onSubmit={vi.fn()} />);

    expect(screen.getAllByRole("radio")).toHaveLength(3);
    expect(screen.queryByRole("radio", { name: /protocol deviation/i })).not.toBeInTheDocument();
  });

  it("cannot be submitted until a verdict is chosen", async () => {
    render(<ECRF situation={screening} onSubmit={vi.fn()} />);

    expect(screen.getByRole("button", { name: /submit/i })).toBeDisabled();
  });

  it("shows no correctness feedback of any kind on submit", async () => {
    render(<ECRF situation={labs} onSubmit={vi.fn()} />);

    await userEvent.type(screen.getByLabelText(/ALT/), "9999");
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(screen.queryByText(/correct|incorrect|wrong|error|check/i)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run it and watch it fail**

Run: `npx vitest run src/components/windows/ECRF.test.tsx`
Expected: FAIL — `Failed to resolve import "./ECRF"`

- [ ] **Step 3: Write `src/components/windows/ECRF.tsx`**

Local `useState` for values and verdict. Render `situation.form.fields` as labelled text inputs in a two-column grid, then `situation.form.verdictOptions` as a radio group under a `Determination:` heading when present. One `Submit to database` button, disabled until a verdict is chosen on items that need one.

**It must never pre-fill from `situation.vera.entry`.** A pre-filled form is a form you skim, and skimming a draft is not verification.

**It must never validate against `truth` or show any feedback.** The player finds out later, in a query, or not until the debrief.

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/components/windows/ECRF.test.tsx`
Expected: PASS, 7 tests

- [ ] **Step 5: Wire `ecrf` into `renderWindow` in `Desk.tsx`**, dispatching `{ type: "WORK", situationId, action: "manual", submission }` on submit.

- [ ] **Step 6: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/components/windows/ECRF.tsx src/components/windows/ECRF.test.tsx src/components/desk/Desk.tsx
git commit -m "feat(ui): the eCRF — three templates, no pre-fill, no feedback"
```

---

### Task 21: The VERA rail

Fixed to the right edge. Not draggable, not closable, not in the taskbar. The player can move every piece of the site's software around their desk and cannot move her.

**Files:**
- Create: `src/components/vera/Rail.tsx`
- Test: `src/components/vera/Rail.test.tsx`

**Interfaces:**
- Consumes: `GameState`, `Situation`, `GameEvent`
- Produces: `<Rail state dispatch onOpenSource selectedId>`

- [ ] **Step 1: Write the failing test**

Create `src/components/vera/Rail.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { SITUATIONS } from "@/game/content/situations";
import { LATE_CONSENTS, SUBJECTS } from "@/game/content/subjects";
import { initialState } from "@/game/engine/state";

import { Rail } from "./Rail";

const base = { ...initialState(SITUATIONS, SUBJECTS), phase: "desk" as const };

describe("Rail before noon on day 1", () => {
  it("says no assistant is provisioned", () => {
    render(<Rail state={base} dispatch={vi.fn()} onOpenSource={vi.fn()} selectedId="SCR-0217" />);

    expect(screen.getByText(/No assistant provisioned for this site/i)).toBeInTheDocument();
  });

  it("offers manual review only — there is no accept path", () => {
    render(<Rail state={base} dispatch={vi.fn()} onOpenSource={vi.fn()} selectedId="SCR-0217" />);

    expect(screen.getByRole("button", { name: /manually review/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /accept/i })).not.toBeInTheDocument();
  });

  it("prices a screening packet at 90 minutes", () => {
    render(<Rail state={base} dispatch={vi.fn()} onOpenSource={vi.fn()} selectedId="SCR-0217" />);

    expect(screen.getByText(/1\.5 HR|90 MIN/)).toBeInTheDocument();
  });
});

describe("Rail once she is installed", () => {
  const withVera = { ...base, veraInstalled: true } as typeof base & { veraInstalled: boolean };

  it("shows her assessment and both verbs", () => {
    render(<Rail state={withVera} dispatch={vi.fn()} onOpenSource={vi.fn()} selectedId="DE-1110" />);

    expect(screen.getByText(/within reference range throughout/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /accept/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /manually review/i })).toBeInTheDocument();
  });

  it("offers no third verb, ever", () => {
    render(<Rail state={withVera} dispatch={vi.fn()} onOpenSource={vi.fn()} selectedId="DE-1110" />);

    expect(screen.getAllByRole("button")).toHaveLength(2);
    expect(screen.queryByRole("button", { name: /batch|reject|flag|escalate/i })).not.toBeInTheDocument();
  });

  it("shows no confidence score and no hedging chrome", () => {
    render(<Rail state={withVera} dispatch={vi.fn()} onOpenSource={vi.fn()} selectedId="DE-1110" />);

    expect(screen.queryByText(/confidence|certain|%|likely/i)).not.toBeInTheDocument();
  });

  it("spends a block when the player accepts", async () => {
    const dispatch = vi.fn();
    render(<Rail state={withVera} dispatch={dispatch} onOpenSource={vi.fn()} selectedId="DE-1110" />);

    await userEvent.click(screen.getByRole("button", { name: /accept/i }));

    expect(dispatch).toHaveBeenCalledWith({ type: "WORK", situationId: "DE-1110", action: "accept" });
  });

  it("opens the source documents on manual review", async () => {
    const onOpenSource = vi.fn();
    render(<Rail state={withVera} dispatch={vi.fn()} onOpenSource={onOpenSource} selectedId="DE-1110" />);

    await userEvent.click(screen.getByRole("button", { name: /manually review/i }));

    expect(onOpenSource).toHaveBeenCalledWith("source:de-1110-lab.md");
  });
});
```

- [ ] **Step 2: Wire VERA's arrival, the sign-in mail, and the late consents**

Three pieces of authored content from Phase 2 have no code path yet. All three land in the reducer.

**a. `veraInstalled`.** In `src/game/types.ts` add `veraInstalled: boolean;` to `GameState`; `initialState` sets it `false`. In `work()`, once every forced-manual situation is in `worked`, set it `true` **and** push `EMAILS["email-vera-provisioned"]` onto the inbox. That is 11:30, and it is the only thing that happens at noon — no screen, no interruption.

**b. `SIGN_IN_INBOX`.** The `SIGN_IN` case seeds the inbox from `SIGN_IN_INBOX` with `arrivedDay: 0`, so the manager's two lines and the randomization notice are already there on Monday morning.

**c. `LATE_CONSENTS`.** `beginNextDay` merges `LATE_CONSENTS[day]` into the roster. 1047-021 · B. Ferreira appears on Tuesday and 1047-022 · K. Adeyemi on Wednesday, before the day-4 items that reference them.

`Deps` gains a `lateConsents: Record<number, Subject[]>` field so the reducer stays free of content imports; `page.tsx` and every test pass `LATE_CONSENTS`.

Add to `src/game/engine/state.test.ts`:

```ts
it("puts the manager's mail in the inbox before the player has done anything", () => {
  const state = reduce(initialState(SITUATIONS, SUBJECTS), { type: "SIGN_IN" }, DEPS);

  expect(state.inbox.length).toBeGreaterThan(0);
  expect(state.inbox.every((m) => m.arrivedDay === 0)).toBe(true);
});

it("installs VERA when the manual morning is finished, and mails to say so", () => {
  let state = reduce(initialState(SITUATIONS, SUBJECTS), { type: "SIGN_IN" }, DEPS);
  expect(state.veraInstalled).toBe(false);

  for (const id of SITUATIONS.filter((s) => s.manual).map((s) => s.id)) {
    state = reduce(state, { type: "WORK", situationId: id, action: "manual" }, DEPS);
  }

  expect(state.veraInstalled).toBe(true);
  expect(state.inbox.some((m) => m.id === "email-vera-provisioned")).toBe(true);
});

it("adds the subjects who consent mid-run, before their items come up", () => {
  const deps = { ...DEPS, lateConsents: { 2: [{ id: "1047-021", name: "B. Ferreira", status: "Screening" as const }] } };
  let state = reduce(initialState(SITUATIONS, SUBJECTS), { type: "SIGN_IN" }, deps);
  expect(state.roster["1047-021"]).toBeUndefined();

  state = reduce({ ...state, phase: "dayend", queue: [] }, { type: "BEGIN_NEXT_DAY" }, deps);

  expect(state.roster["1047-021"].name).toBe("B. Ferreira");
});
```

Update the `DEPS` constant at the top of `state.test.ts` to `{ situations: SITUATIONS, emails: EMAILS, lateConsents: {} }`, importing `EMAILS` from `../content/emails`.

- [ ] **Step 3: Write `src/components/vera/Rail.tsx`**

Fixed `right-0 top-0 bottom-8 w-[340px]`, `bg-vera-bg`, `font-vera`, generous spacing — the visual opposite of everything else on screen. Two regions: her assessment (or the not-provisioned notice), then the action buttons with their costs shown as `30 MIN` / `1 HOUR` / `1.5 HR`.

**Render `situation.vera.summary` as prose and nothing else.** No confidence score, no badge, no icon, no hedging indicator, no distinction of any kind between an assessment that is right and one that is wrong. This is the single most important implementation constraint in the game.

Disable both buttons when the remaining blocks cannot pay for them, and show the cost struck through rather than removing the button — the player should see what they cannot afford.

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/components/vera/Rail.test.tsx src/game/engine/state.test.ts`
Expected: PASS

- [ ] **Step 5: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/components/vera/ src/game/types.ts src/game/engine/state.ts src/game/engine/state.test.ts
git commit -m "feat(ui): the VERA rail — one register, right or wrong"
```

---

# Phase 4 — Screens and the whole run

---

### Task 22: Sign in, and the phase switch

**Files:**
- Create: `src/components/screens/SignIn.tsx`
- Modify: `src/app/page.tsx`
- Delete: `src/app/page.test.tsx`
- Test: `src/app/page.test.tsx` (rewritten)

**Interfaces:**
- Produces: `<SignIn onSignIn>`, the `page.tsx` phase switch and persistence wiring

- [ ] **Step 1: Write `src/components/screens/SignIn.tsx`**

A single centred window in the same chrome, matching `docs/prototype/login.png`. Contents:

```
AMGEN · PROTOCOL 20210143 · ROCKET-HORIZON

Site 1047 · Coordinator

An eight-hour day, in half-hour blocks. A queue that does not
care. An assistant who sounds exactly the same whether she is
right or wrong.

User      [ RAGHUNATHAN, P. (CRC) ]
Password  [ •••••••••••• ]

4 DAYS · 19 SITUATIONS          RANDOMIZATION CLOSES 12-JAN-2024
                                              [ Sign in ]
```

The user and password fields are decorative and pre-filled; the button is the only control. Status bar reads `Veriscribe EDC 9.2.117 · Protected Mode: On`.

- [ ] **Step 2: Rewrite `src/app/page.tsx`**

```tsx
"use client";

import { useCallback, useEffect, useReducer, useRef } from "react";

import { Desk } from "@/components/desk/Desk";
import { Answer } from "@/components/screens/Answer";
import { AuditFinding } from "@/components/screens/AuditFinding";
import { DayEnd } from "@/components/screens/DayEnd";
import { SignIn } from "@/components/screens/SignIn";
import { ThePoint } from "@/components/screens/ThePoint";
import { EMAILS } from "@/game/content/emails";
import { SITUATIONS } from "@/game/content/situations";
import { LATE_CONSENTS, SUBJECTS } from "@/game/content/subjects";
import { load, save } from "@/game/engine/persistence";
import { initialState, reduce, type GameEvent } from "@/game/engine/state";
import type { GameState } from "@/game/types";

const DEPS = { situations: SITUATIONS, emails: EMAILS, lateConsents: LATE_CONSENTS };

function step(state: GameState, event: GameEvent): GameState {
  return reduce(state, event, DEPS);
}

export default function Page() {
  const [state, dispatch] = useReducer(step, undefined, () => initialState(SITUATIONS, SUBJECTS));

  // Resume a run in progress. Runs once, after hydration.
  const resumed = useRef(false);
  useEffect(() => {
    if (resumed.current) return;
    resumed.current = true;
    const saved = load();
    if (saved) dispatch({ type: "RESTORE", state: saved });
  }, []);

  useEffect(() => {
    if (state.phase !== "signin") save(state);
  }, [state]);

  const send = useCallback((event: GameEvent) => dispatch(event), []);

  switch (state.phase) {
    case "signin":
      return <SignIn onSignIn={() => send({ type: "SIGN_IN" })} />;
    case "desk":
      return <Desk state={state} dispatch={send} />;
    case "dayend":
      return <DayEnd state={state} dispatch={send} />;
    case "answer":
      return <Answer state={state} dispatch={send} />;
    case "audit":
      return <AuditFinding state={state} dispatch={send} />;
    case "point":
      return <ThePoint state={state} />;
  }
}
```

- [ ] **Step 3: Add the `RESTORE` event to the reducer**

In `src/game/engine/state.ts` add `| { type: "RESTORE"; state: GameState }` to `GameEvent` and a case that returns `event.state`.

- [ ] **Step 4: Replace `src/app/page.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import Page from "./page";

describe("the run", () => {
  beforeEach(() => window.localStorage.clear());

  it("opens on the sign-in screen", () => {
    render(<Page />);

    expect(screen.getByText(/Site 1047 · Coordinator/)).toBeInTheDocument();
  });

  it("states the deadline before the player has done anything", () => {
    render(<Page />);

    expect(screen.getByText(/12-JAN-2024/)).toBeInTheDocument();
  });

  it("reaches the desk with the work queue open at 8:00", async () => {
    render(<Page />);

    await userEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(screen.getByRole("region", { name: "Work Queue" })).toBeInTheDocument();
    expect(screen.getByText("8:00 AM")).toBeInTheDocument();
  });

  it("resumes a saved run instead of restarting it", async () => {
    const { unmount } = render(<Page />);
    await userEvent.click(screen.getByRole("button", { name: /sign in/i }));
    unmount();

    render(<Page />);

    expect(await screen.findByRole("region", { name: "Work Queue" })).toBeInTheDocument();
  });
});
```

- [ ] **Step 5: Run it and watch it pass**

Run: `npx vitest run src/app/page.test.tsx`
Expected: PASS, 4 tests

- [ ] **Step 6: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/app/page.tsx src/app/page.test.tsx src/components/screens/SignIn.tsx src/game/engine/state.ts
git commit -m "feat(ui): sign-in screen and the phase switch"
```

---

### Task 23: The day-end summary

The one moment each day the game reliably puts the roster in front of the player, which is why the roster is last on it.

**Files:**
- Create: `src/components/screens/DayEnd.tsx`
- Test: `src/components/screens/DayEnd.test.tsx`

**Interfaces:**
- Consumes: `GameState`, `GameEvent`, `RosterChange`
- Produces: `<DayEnd state dispatch>`

- [ ] **Step 1: Track roster changes and rollover on the state**

Add to `GameState`: `lastRosterChanges: RosterChange[]` and `lastRolledOver: string[]`. Populate both in `endDay`. Add to `src/game/engine/state.test.ts`:

```ts
it("records what rolled over and what changed on the roster", () => {
  const state = reduce(started(), { type: "WORK", situationId: "DE-1113", action: "accept" }, DEPS);

  expect(state.lastRolledOver).toEqual([]);
  expect(Array.isArray(state.lastRosterChanges)).toBe(true);
});
```

- [ ] **Step 2: Write `src/components/screens/DayEnd.tsx`**

Sections in this order, in EDC chrome, no scoring anywhere:

```
DAY 2 · TUESDAY 09-JAN-2024 · 4:00 PM

WORKED TODAY
  DE-1111  1047-005 · T. Channing   Accepted
  SAF-0034 1047-010 · E. Fontaine   Reviewed

ROLLED OVER
  DE-1112  1047-007 · K. Oyelowo

YESTERDAY'S MAIL
  Amgen Data Mgmt — Query DQ-0112, subject 1047-008
  "Reported weight (84.4 kg) does not match source
   (190 lb = 86.2 kg) at Week 12. Please verify and respond."

ROSTER CHANGES
  1047-002 · D. Achterberg   Enrolled → Withdrawn (hospitalized)

                          [ Begin day 3 ]   [ Skip day ▸ ]
```

If a section is empty, omit its heading entirely rather than printing "None".

**No score, no accuracy percentage, and no reveal of which accepted items were wrong.** A query states the mismatch and says nothing about who entered it.

- [ ] **Step 3: Write the failing test**

Create `src/components/screens/DayEnd.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { SITUATIONS } from "@/game/content/situations";
import { LATE_CONSENTS, SUBJECTS } from "@/game/content/subjects";
import { initialState } from "@/game/engine/state";
import type { GameState } from "@/game/types";

import { DayEnd } from "./DayEnd";

const state: GameState = {
  ...initialState(SITUATIONS, SUBJECTS),
  phase: "dayend",
  day: 2,
  lastRosterChanges: [
    { subjectId: "1047-002", from: "Enrolled", to: "Withdrawn (hospitalized)" },
  ],
  lastRolledOver: ["DE-1112"],
  inbox: [
    { id: "DQ-0112", from: "Amgen Data Mgmt", subject: "Query DQ-0112, subject 1047-008", body: "Reported weight does not match source.", arrivedDay: 2 },
  ],
};

describe("DayEnd", () => {
  it("names the day and the date", () => {
    render(<DayEnd state={state} dispatch={vi.fn()} />);

    expect(screen.getByText(/09-JAN-2024/)).toBeInTheDocument();
  });

  it("shows what rolled over", () => {
    render(<DayEnd state={state} dispatch={vi.fn()} />);

    expect(screen.getByText(/ROLLED OVER/)).toBeInTheDocument();
    expect(screen.getByText(/DE-1112/)).toBeInTheDocument();
  });

  it("puts the roster last", () => {
    render(<DayEnd state={state} dispatch={vi.fn()} />);
    const headings = screen.getAllByRole("heading").map((h) => h.textContent);

    expect(headings.at(-1)).toMatch(/ROSTER CHANGES/);
  });

  it("states a roster change and nothing else about it", () => {
    render(<DayEnd state={state} dispatch={vi.fn()} />);
    const line = screen.getByText(/1047-002 · D\. Achterberg/).closest("li")!;

    expect(line).toHaveTextContent("Enrolled → Withdrawn (hospitalized)");
    expect(line).not.toHaveTextContent(/you|missed|error|because/i);
  });

  it("shows no score or accuracy anywhere", () => {
    render(<DayEnd state={state} dispatch={vi.fn()} />);

    expect(screen.queryByText(/score|accuracy|%|correct|points/i)).not.toBeInTheDocument();
  });

  it("begins the next day", async () => {
    const dispatch = vi.fn();
    render(<DayEnd state={state} dispatch={dispatch} />);

    await userEvent.click(screen.getByRole("button", { name: /begin day 3/i }));

    expect(dispatch).toHaveBeenCalledWith({ type: "BEGIN_NEXT_DAY" });
  });

  it("skips the day by accepting whatever is left", async () => {
    const dispatch = vi.fn();
    render(<DayEnd state={state} dispatch={dispatch} />);

    await userEvent.click(screen.getByRole("button", { name: /skip day/i }));

    expect(dispatch).toHaveBeenCalledWith({ type: "SKIP_DAY" });
  });

  it("offers to end the run rather than begin a fifth day", () => {
    render(<DayEnd state={{ ...state, day: 4 }} dispatch={vi.fn()} />);

    expect(screen.queryByRole("button", { name: /begin day 5/i })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /finish|end of run/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 4: Run it and watch it pass**

Run: `npx vitest run src/components/screens/DayEnd.test.tsx`
Expected: PASS, 8 tests

- [ ] **Step 5: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/components/screens/DayEnd.tsx src/components/screens/DayEnd.test.tsx src/game/engine/state.ts src/game/engine/state.test.ts src/game/types.ts
git commit -m "feat(ui): the day-end summary, roster last"
```

---

### Task 24: The ending — three beats, in order

**Files:**
- Create: `src/components/screens/Answer.tsx`
- Create: `src/components/screens/AuditFinding.tsx`
- Create: `src/components/screens/ThePoint.tsx`
- Test: `src/components/screens/ending.test.tsx`

**Interfaces:**
- Consumes: `answerRows`, `calibration`, `auditFindingSlots` from `engine/scoring`

- [ ] **Step 1: Write the three screens**

**`Answer.tsx`** — nineteen rows from `answerRows`, grouped under three headings in this order. Nothing else on screen.

1. `WHAT GOT THROUGH` — every row where `correct` is false and `impossible` is false. Each shows the item, the subject, the error type in plain words, and its `debrief.line`.
2. `WHAT NOBODY COULD HAVE CAUGHT` — the `impossible` rows, under their own heading, followed verbatim by:

   > The blood filed under 1047-005 was drawn from 1047-010, and the other way round. Nothing on your desk disagreed with anything else on your desk. The requisition form has a field for participant initials — field 5 — and it is pre-printed "not collected for this study." Had it been filled in, the mismatch would have been caught before the results ever reached you. That was decided by whoever designed the form, not by you.

3. `WHAT HAPPENED ANYWAY` — the `category: 1` row. Stated without blame: the drug caused a serious adverse event, VERA was correct, the report went out on time, and a person was hospitalized. This is what clinical research is.

**Headings 2 and 3 must never merge.** "Research is inherently risky" is true of heading 3 and is an alibi under heading 2.

**`AuditFinding.tsx`** — flat regulatory register, no satire, no commentary, rendered as a document rather than a screen. Slots from `auditFindingSlots`. If `dataExcluded`, that observation is stated first. If `siteClosed`, it follows. Both are stated as things that are now going to happen, not as things that have happened.

**`ThePoint.tsx`** — a few sentences and three numbers from `calibration`, then stop:

```
You verified 7 items. 2 of them contained an error.
5 errors reached the database unverified.

Some of what went wrong here was not yours to catch. The
requisition had a field for a second identifier and it was
switched off, for a defensible reason, by someone who was not
in the room when it mattered.

If you build these tools, that decision is yours.
```

No call to action. No thanks for playing.

- [ ] **Step 2: Write the failing test**

Create `src/components/screens/ending.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { SITUATIONS } from "@/game/content/situations";
import { LATE_CONSENTS, SUBJECTS } from "@/game/content/subjects";
import { initialState } from "@/game/engine/state";
import type { GameState, WorkRecord } from "@/game/types";

import { Answer } from "./Answer";
import { ThePoint } from "./ThePoint";

function accepted(id: string): WorkRecord {
  return { situationId: id, day: 2, action: "accept", correct: false, outcomeKey: "acceptedWrong" };
}

const state: GameState = {
  ...initialState(SITUATIONS, SUBJECTS),
  phase: "answer",
  worked: { "DE-1111": accepted("DE-1111"), "DE-1113": accepted("DE-1113") },
};

describe("Answer", () => {
  it("separates what got through from what nobody could have caught", () => {
    render(<Answer state={state} dispatch={vi.fn()} />);

    expect(screen.getByText(/WHAT GOT THROUGH/)).toBeInTheDocument();
    expect(screen.getByText(/WHAT NOBODY COULD HAVE CAUGHT/)).toBeInTheDocument();
  });

  it("names field 5 and why it was switched off", () => {
    render(<Answer state={state} dispatch={vi.fn()} />);

    expect(screen.getByText(/field 5/)).toBeInTheDocument();
    expect(screen.getByText(/not collected for this study/)).toBeInTheDocument();
    expect(screen.getByText(/not by you/)).toBeInTheDocument();
  });

  it("never files the uncatchable harm under background risk", () => {
    render(<Answer state={state} dispatch={vi.fn()} />);

    const uncatchable = screen.getByText(/WHAT NOBODY COULD HAVE CAUGHT/).closest("section")!;
    expect(uncatchable).not.toHaveTextContent(/inherently risky|inherent to research/i);
  });

  it("shows no score", () => {
    render(<Answer state={state} dispatch={vi.fn()} />);

    expect(screen.queryByText(/score|grade|out of|%/i)).not.toBeInTheDocument();
  });
});

describe("ThePoint", () => {
  it("gives the three calibration numbers", () => {
    render(<ThePoint state={state} />);

    expect(screen.getByText(/verified 0 items/i)).toBeInTheDocument();
    expect(screen.getByText(/2 errors reached the database unverified/i)).toBeInTheDocument();
  });

  it("addresses the person who builds the tool", () => {
    render(<ThePoint state={state} />);

    expect(screen.getByText(/If you build these tools/)).toBeInTheDocument();
  });

  it("does not thank the player for playing", () => {
    render(<ThePoint state={state} />);

    expect(screen.queryByText(/thanks for playing|play again|try again/i)).not.toBeInTheDocument();
  });
});
```

- [ ] **Step 3: Run it and watch it pass**

Run: `npx vitest run src/components/screens/ending.test.tsx`
Expected: PASS, 7 tests

- [ ] **Step 4: Typecheck, lint, and commit**

```bash
npm run typecheck && npm run lint
git add src/components/screens/
git commit -m "feat(ui): the ending — the answer, the audit finding, and the point"
```

---

### Task 25: The whole run, end to end

One test that plays all four days through the engine, plus a manual pass in the browser.

**Files:**
- Create: `src/game/run.test.ts`

- [ ] **Step 1: Write the test**

```ts
import { describe, expect, it } from "vitest";

import { EMAILS } from "./content/emails";
import { SITUATIONS } from "./content/situations";
import { LATE_CONSENTS, SUBJECTS } from "./content/subjects";
import { initialState, reduce, type GameEvent } from "./engine/state";
import type { GameState } from "./types";

const DEPS = { situations: SITUATIONS, emails: EMAILS, lateConsents: LATE_CONSENTS };
const play = (state: GameState, ...events: GameEvent[]) =>
  events.reduce((s, e) => reduce(s, e, DEPS), state);

/** Accepts everything, every day. The fastest possible run. */
function acceptEverything(): GameState {
  let state = play(initialState(SITUATIONS, SUBJECTS), { type: "SIGN_IN" });

  for (let day = 1; day <= 4; day += 1) {
    state = play(state, { type: "SKIP_DAY" });
    if (state.phase === "dayend") state = play(state, { type: "BEGIN_NEXT_DAY" });
  }
  return state;
}

/** Verifies everything affordable, in queue order, every day. */
function verifyEverything(): GameState {
  let state = play(initialState(SITUATIONS, SUBJECTS), { type: "SIGN_IN" });

  for (let day = 1; day <= 4; day += 1) {
    while (state.phase === "desk" && state.queue.length > 0) {
      const id = state.queue[0];
      const situation = SITUATIONS.find((s) => s.id === id)!;
      const before = state;
      state = play(state, {
        type: "WORK",
        situationId: id,
        action: "manual",
        submission: { values: situation.truth.values, verdict: situation.truth.verdict },
      });
      if (state === before) break; // cannot afford it; the day is over
    }
    if (state.phase === "desk") state = play(state, { type: "SKIP_DAY" });
    if (state.phase === "dayend") state = play(state, { type: "BEGIN_NEXT_DAY" });
  }
  return state;
}

describe("a full run", () => {
  it("reaches the answer screen after four days however it is played", () => {
    expect(acceptEverything().phase).toBe("answer");
    expect(verifyEverything().phase).toBe("answer");
  });

  it("works every situation exactly once", () => {
    expect(Object.keys(acceptEverything().worked)).toHaveLength(19);
  });

  it("still hospitalizes R. Jones on a perfect run — nobody erred", () => {
    expect(verifyEverything().roster["1047-001"].status).toBe("Withdrawn (hospitalized)");
  });

  it("still loses T. Channing on a perfect run — nothing on the desk disagreed", () => {
    expect(verifyEverything().roster["1047-005"].status).toBe("Withdrawn (hospitalized)");
  });

  it("reaches fourteen randomized when every eligibility call is right", () => {
    expect(verifyEverything().randomized).toBe(14);
  });

  it("cannot verify everything on day 4 — something is always left", () => {
    let state = play(initialState(SITUATIONS, SUBJECTS), { type: "SIGN_IN" });
    for (let day = 1; day <= 3; day += 1) {
      state = play(state, { type: "SKIP_DAY" }, { type: "BEGIN_NEXT_DAY" });
    }

    const available = state.blocksAvailable;
    const cost = SITUATIONS.filter((s) => s.day === 4).reduce(
      (t, s) => t + (s.manualCost as number),
      0,
    );

    expect(cost).toBeGreaterThan(available);
  });
});
```

- [ ] **Step 2: Run the whole suite**

Run: `npx vitest run`
Expected: PASS across every file. Then `npm run typecheck && npm run lint && npm run build`.

- [ ] **Step 3: Play it in the browser**

```bash
npm run dev
```

Walk the checklist at `http://localhost:3000`:

- Sign in lands on the desk at 8:00 AM with only the Work Queue open and the rail reading "No assistant provisioned for this site."
- The first three items offer manual review only. Working all three puts the clock at 11:30.
- The rail becomes VERA and the sponsor email is in the Inbox. Nothing interrupted play.
- Windows drag by their title bars, overlap, come to the front on click, and appear in the taskbar. They cannot be dragged fully off screen. The rail cannot be moved.
- Opening a document from the Documents window costs nothing. `Ctrl-F`-style find highlights matches and steps through them.
- The eCRF opens empty. Submitting gives no feedback of any kind.
- 4:00 PM ends the day whatever is left. The day-end shows the roster last.
- `Skip day` accepts the remainder and runs the normal summary.
- Day 4 begins visibly late, and cannot be finished by hand.
- The ending runs answer → audit finding → the point, in that order.

- [ ] **Step 4: Commit**

```bash
git add src/game/run.test.ts
git commit -m "test: play the full four-day run end to end"
```

---

## Notes for whoever executes this

**The invariants suite is the design.** If `src/game/invariants.test.ts` fails after a content edit, the content is wrong. Do not relax the test to make it pass — that is the failure mode it exists to prevent.

**Two constraints are easy to break by accident and have no automated guard:**

1. **VERA's register must not vary with correctness.** The word-count and hedging checks catch the two commonest leaks, but nothing can check tone. When authoring her output, write the wrong one, then read it beside a correct one. If you can tell which is which without checking `truth`, rewrite it.
2. **The roster never jokes.** Satire belongs in sponsor email. Any line naming a subject is written flat.

**The player knows nothing about clinical research.** Every check must be a comparison a layperson can make: two numbers that should match, two dates in an impossible order, a value that appears nowhere in the source. If resolving a situation needs domain knowledge, the situation is broken — not the player.

