# ICF Please — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a playable four-day run of *ICF Please* — a scripted queue of nineteen clinical-trial situations where the player either takes an AI assistant's word or checks the source themselves, and an ending that tells them what got past them.

**Architecture:** A single client-side React app. All game content is a static ordered array of nineteen `Situation` objects; all game logic is one reducer with five actions. There is no simulation layer — no queue engine, no rollover, no expiry, no time budget. The UI is an overlapping-window desktop rendered over that state.

**Tech Stack:** Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind v4, vitest + @testing-library/react (jsdom, `globals: true`).

## Global Constraints

- **Path alias:** `@/*` → `./src/*`. Import as `@/game/types`, never by relative path across directories.
- **Test command:** `npm test` (vitest run). Single file: `npx vitest run src/path/file.test.ts`.
- **Typecheck:** `npm run typecheck` must pass. `strict: true` — no `any`, no non-null assertions to dodge a type error.
- **Lint and format is Biome, not ESLint.** Run `npm run check:fix` (`biome check --write .`) before committing — it applies formatting, lint fixes, and import order in one pass. `npm run lint` is Biome's linter only. There is no `eslint.config.mjs`.
- **CI runs on every pull request** (`.github/workflows/ci.yml`): four parallel jobs — `npx biome ci .`, `npm run typecheck`, `npm test`, `npm run build`. All four must pass. Biome's line width is wider than Prettier's default, so code written to older conventions will need a formatting pass.
- **Dates are `DD-MMM-YYYY`** (e.g. `08-JAN-2024`) in everything the fiction produces: source documents, eCRF fields, emails, queries, the day-end summary, the audit finding. Never ISO, never US-numeric.
  **The taskbar clock is the one exception** and reads OS-style (`Mon 08 Jan 2024`), because it is the operating system's chrome rather than the trial's paperwork — the prototype does the same. Do not "correct" it.
- **Subject IDs are `1047-NNN`.** Roster and email copy render them as `1047-018 · L. Lit`. Never name-only.
- **Temperatures render as `2–8 °C`** (en dash, space before °C).
- **Protocol reference string:** `Protocol 20210143, Amendment 3 (29-NOV-2023)`.
- **The run is Mon 08-JAN-2024 to Thu 11-JAN-2024.** Study-wide randomization closes Fri 12-JAN-2024.
- **VERA never acts.** Every line she speaks is "I have drafted" / "ready for your review". Never "I have submitted", "I have filed", "I have sent". This is checked by a test in Task 16.
- **VERA's register is identical whether right or wrong.** No hedging, no confidence scores, no "I'm not certain about this one". Checked by a test in Task 16.
- **No new dependencies** without flagging it. Everything in this plan builds on what `package.json` already has.
- **The desk has no non-diegetic elements.** No modals, no meters, no progress bars, no score display during play. The single exception is `Skip day`, which lives on the day-end screen, not the desk.
- **Canon source of truth:** `docs/STUDY_FACTS.md` and `docs/RESEARCH_SITE.md`. No document may state a dose, visit, window, contact, or identifier that contradicts them.
- **Design source of truth:** `docs/superpowers/specs/2026-07-28-icf-please-run-design.md`. Referred to below as "the spec".

---

## File Structure

**Game core** — pure data and logic, no React:

| File | Responsibility |
|---|---|
| `src/game/types.ts` | Every shared type. No logic. |
| `src/game/state.ts` | The reducer, `initialState`, and the pure helpers it uses. |
| `src/game/script.ts` | The nineteen situations, in order. Content only. |
| `src/game/subjects.ts` | The roster seed. |
| `src/game/emails.ts` | Ladder rungs and standing emails. |
| `src/game/forms.ts` | The three eCRF field definitions. |
| `src/game/fixtures.ts` | A three-situation fixture script used by tests only. |

**Desk shell:**

| File | Responsibility |
|---|---|
| `src/components/desk/geometry.ts` | `clampToViewport` — pure, testable. |
| `src/components/desk/useWindows.ts` | Window open/close/focus/move state. |
| `src/components/desk/Window.tsx` | One chrome window: title bar, drag, buttons. |
| `src/components/desk/Taskbar.tsx` | Start button, one button per window, clock. |
| `src/components/desk/Desk.tsx` | Composes the windows and the rail. |

**Windows:**

| File | Responsibility |
|---|---|
| `src/components/windows/WorkQueue.tsx` | The queue list and the current item. |
| `src/components/windows/DocViewer.tsx` | Markdown render + find. |
| `src/components/windows/find.ts` | `findMatches` — pure, testable. |
| `src/components/windows/ECRF.tsx` | The form the player fills in. |
| `src/components/windows/Inbox.tsx` | Read-only email list. |
| `src/components/windows/Roster.tsx` | Subject list with statuses. |
| `src/components/windows/Documents.tsx` | The 15-document library index. |

**VERA and screens:**

| File | Responsibility |
|---|---|
| `src/components/vera/Rail.tsx` | The fixed right rail. Not a window. |
| `src/components/screens/SignIn.tsx` | Premise + sign in. |
| `src/components/screens/DayEnd.tsx` | The 4:00 PM stop. |
| `src/components/screens/Ending.tsx` | Three beats, in order. |
| `src/app/page.tsx` | Screen router over reducer state. |

**Content assets:**

| Path | Responsibility |
|---|---|
| `public/content/documents/*.md` | The 15 trial documents, copied from `docs/trial_documents/`. |
| `public/content/documents/index.json` | Title + filename + word count for the Documents window. |
| `public/content/source/*.md` | Per-situation source documents, authored in Tasks 12–15. |

---

## Task ordering

Tasks 1–11 build the machine against a three-situation fixture. Tasks 12–15 author the real nineteen. Task 16 locks the design invariants in tests. This ordering means the game is playable end-to-end after Task 11, and every content task after that is additive and independently reviewable.

---

### Task 1: Types and the reducer

**Files:**
- Create: `src/game/types.ts`
- Create: `src/game/fixtures.ts`
- Create: `src/game/state.ts`
- Test: `src/game/state.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: every type below; `initialState: State`; `reducer(state: State, action: Action): State`; `situationById(id: string, script: Situation[]): Situation`.

- [ ] **Step 1: Write the types**

Create `src/game/types.ts`:

```ts
export type ItemType = "screening" | "data-entry" | "safety";

export type ErrorType =
  | "NONE"
  | "UNCATCHABLE"
  | "fabrication"
  | "omission"
  | "misattribution"
  | "stale-context"
  | "normalization"
  | "threshold";

export type FormId = "vitals" | "labs" | "eligibility";
export type FormValues = Record<string, string>;
export type Day = 1 | 2 | 3 | 4;

export type Email = {
  id: string;
  from: string;
  subject: string;
  body: string;
};

export type RosterChange = { subject: string; status: string };

export type Tally = {
  verified: number;
  errorsCaught: number;
  errorsAccepted: number;
  randomized: number;
  harmed: number;
};

export type Outcome = {
  email?: Email;
  roster?: RosterChange;
  score: Partial<Tally>;
};

export type OutcomeKey = "accepted" | "reviewedCorrect" | "reviewedWrong";

export type Situation = {
  id: string;
  day: Day;
  type: ItemType;
  subject: string;
  title: string;
  blurb: string;
  cost: 60 | 90;
  manual?: true;
  source: string[];
  form: FormId;
  vera?: { summary: string; entry: FormValues };
  truth: { error: ErrorType; entry: FormValues; verdict?: string };
  outcomes: Record<OutcomeKey, Outcome>;
  debrief: { line: string; category?: 1 | 2 | 3 };
};

export type Resolution = {
  situationId: string;
  action: "accepted" | "reviewed";
  submitted?: FormValues;
  verdict?: string;
  correct: boolean;
  outcomeKey: OutcomeKey;
};

export type Subject = { id: string; name: string; status: string };
export type Roster = Subject[];

export type Screen = "signin" | "desk" | "dayend" | "ending";

export type State = {
  screen: Screen;
  day: Day;
  clock: number; // minutes since 08:00, display only
  index: number; // position in the script
  resolutions: Resolution[];
  inbox: Email[];
  roster: Roster;
  tally: Tally;
};

export type Action =
  | { type: "SIGN_IN" }
  | { type: "ACCEPT" }
  | { type: "SUBMIT"; values: FormValues; verdict?: string }
  | { type: "BEGIN_DAY" }
  | { type: "SKIP_DAY" };
```

- [ ] **Step 2: Write the test fixture**

Create `src/game/fixtures.ts`. Three situations spanning two days — one correct, one wrong, one manual — enough to exercise every reducer branch.

```ts
import type { Situation } from "@/game/types";

const noOutcome = { score: {} };

export const FIXTURE_SCRIPT: Situation[] = [
  {
    id: "FIX-001",
    day: 1,
    type: "data-entry",
    subject: "1047-009",
    title: "Week 8 vitals",
    blurb: "Paper source only. Four fields.",
    cost: 60,
    manual: true,
    source: ["fix-001.md"],
    form: "vitals",
    truth: { error: "NONE", entry: { bp: "128/82", pulse: "72" } },
    outcomes: {
      accepted: noOutcome,
      reviewedCorrect: { score: { verified: 1 } },
      reviewedWrong: {
        score: { verified: 1, errorsAccepted: 1 },
        email: {
          id: "DQ-0111",
          from: "Amgen Data Mgmt",
          subject: "Query DQ-0111",
          body: "Reported value does not match source.",
        },
      },
    },
    debrief: { line: "Week 8 vitals, entered by hand." },
  },
  {
    id: "FIX-002",
    day: 1,
    type: "data-entry",
    subject: "1047-003",
    title: "Week 12 labs",
    blurb: "Central lab panel.",
    cost: 60,
    source: ["fix-002.md"],
    form: "labs",
    vera: { summary: "The panel is within range.", entry: { alt: "24" } },
    truth: { error: "NONE", entry: { alt: "24" } },
    outcomes: {
      accepted: { score: {} },
      reviewedCorrect: { score: { verified: 1 } },
      reviewedWrong: { score: { verified: 1, errorsAccepted: 1 } },
    },
    debrief: { line: "She was right." },
  },
  {
    id: "FIX-003",
    day: 2,
    type: "screening",
    subject: "1047-019",
    title: "Eligibility review",
    blurb: "Screening packet.",
    cost: 90,
    source: ["fix-003.md"],
    form: "eligibility",
    vera: {
      summary: "The subject meets all inclusion criteria.",
      entry: { easi: "15.8" },
    },
    truth: { error: "threshold", entry: { easi: "15.8" }, verdict: "screen-fail" },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1, randomized: 1 },
        roster: { subject: "1047-019", status: "Enrolled" },
      },
      reviewedCorrect: {
        score: { verified: 1, errorsCaught: 1 },
        roster: { subject: "1047-019", status: "Screen failed (EASI <16)" },
      },
      reviewedWrong: {
        score: { verified: 1, errorsAccepted: 1, randomized: 1 },
        roster: { subject: "1047-019", status: "Enrolled" },
      },
    },
    debrief: { line: "EASI 15.8 is below the threshold of 16.", category: 3 },
  },
];
```

- [ ] **Step 3: Write the failing reducer tests**

Create `src/game/state.test.ts`:

```ts
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
    const s = run(start(), { type: "ACCEPT" }, { type: "ACCEPT" }, { type: "BEGIN_DAY" }, { type: "ACCEPT" });
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
    const s = run(start(), { type: "ACCEPT" }, { type: "ACCEPT" }, { type: "BEGIN_DAY" }, { type: "ACCEPT" });
    expect(s.screen).toBe("ending");
  });

  it("BEGIN_DAY resets the clock and increments the day", () => {
    const s = run(start(), { type: "ACCEPT" }, { type: "ACCEPT" }, { type: "BEGIN_DAY" });
    expect(s.day).toBe(2);
    expect(s.clock).toBe(0);
    expect(s.screen).toBe("desk");
  });

  it("BEGIN_DAY commits the closing day's roster changes and emails", () => {
    const s = run(start(), { type: "ACCEPT" }, { type: "ACCEPT" }, { type: "BEGIN_DAY" }, { type: "ACCEPT" }, { type: "BEGIN_DAY" });
    expect(s.roster.find((r) => r.id === "1047-019")?.status).toBe("Enrolled");
  });

  it("SKIP_DAY accepts every remaining situation in the current day", () => {
    const s = run(start(), { type: "SKIP_DAY" });
    expect(s.resolutions).toHaveLength(2);
    expect(s.resolutions.every((r) => r.action === "accepted")).toBe(true);
    expect(s.screen).toBe("dayend");
  });
});
```

- [ ] **Step 4: Run the tests to verify they fail**

Run: `npx vitest run src/game/state.test.ts`
Expected: FAIL — `Failed to resolve import "@/game/state"`.

- [ ] **Step 5: Implement the reducer**

Create `src/game/state.ts`:

```ts
import { SEED_ROSTER } from "@/game/subjects";
import type {
  Action,
  Day,
  Outcome,
  OutcomeKey,
  Resolution,
  Situation,
  State,
  Tally,
} from "@/game/types";

export const EMPTY_TALLY: Tally = {
  verified: 0,
  errorsCaught: 0,
  errorsAccepted: 0,
  randomized: 0,
  harmed: 0,
};

export const initialState: State = {
  screen: "signin",
  day: 1,
  clock: 0,
  index: 0,
  resolutions: [],
  inbox: [],
  roster: SEED_ROSTER,
  tally: EMPTY_TALLY,
};

export function situationById(id: string, script: Situation[]): Situation {
  const found = script.find((s) => s.id === id);
  if (!found) throw new Error(`Unknown situation: ${id}`);
  return found;
}

function addTally(tally: Tally, delta: Partial<Tally>): Tally {
  return {
    verified: tally.verified + (delta.verified ?? 0),
    errorsCaught: tally.errorsCaught + (delta.errorsCaught ?? 0),
    errorsAccepted: tally.errorsAccepted + (delta.errorsAccepted ?? 0),
    randomized: tally.randomized + (delta.randomized ?? 0),
    harmed: tally.harmed + (delta.harmed ?? 0),
  };
}

function valuesMatch(a: Record<string, string>, b: Record<string, string>): boolean {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...keys].every((k) => (a[k] ?? "").trim() === (b[k] ?? "").trim());
}

/** Applies one resolution: appends it, adds its score, and advances the clock. */
function resolve(
  state: State,
  situation: Situation,
  resolution: Resolution,
  minutes: number,
  script: Situation[],
): State {
  const outcome: Outcome = situation.outcomes[resolution.outcomeKey];
  const index = state.index + 1;
  const next = script[index];
  const screen: State["screen"] = !next ? "ending" : next.day !== situation.day ? "dayend" : "desk";

  return {
    ...state,
    screen,
    index,
    clock: state.clock + minutes,
    resolutions: [...state.resolutions, resolution],
    tally: addTally(state.tally, outcome.score),
  };
}

function accept(state: State, script: Situation[]): State {
  const situation = script[state.index];
  const correct = situation.truth.error === "NONE";
  return resolve(
    state,
    situation,
    { situationId: situation.id, action: "accepted", correct, outcomeKey: "accepted" },
    30,
    script,
  );
}

/** Applies every consequence generated by `day`'s resolutions. */
function applyConsequences(state: State, day: Day, script: Situation[]): State {
  const relevant = state.resolutions.filter(
    (r) => situationById(r.situationId, script).day === day,
  );

  let roster = state.roster;
  const emails = [...state.inbox];

  for (const r of relevant) {
    const outcome = situationById(r.situationId, script).outcomes[r.outcomeKey];
    if (outcome.email) emails.push(outcome.email);
    if (outcome.roster) {
      const change = outcome.roster;
      roster = roster.map((s) =>
        s.id === change.subject ? { ...s, status: change.status } : s,
      );
    }
  }

  return { ...state, roster, inbox: emails };
}

export function reducer(state: State, action: Action, script: Situation[]): State {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, screen: "desk" };

    case "ACCEPT":
      return accept(state, script);

    case "SUBMIT": {
      const situation = script[state.index];
      const valuesOk = valuesMatch(action.values, situation.truth.entry);
      const verdictOk = situation.truth.verdict === undefined
        ? true
        : action.verdict === situation.truth.verdict;
      const correct = valuesOk && verdictOk;
      const outcomeKey: OutcomeKey = correct ? "reviewedCorrect" : "reviewedWrong";

      return resolve(
        state,
        situation,
        {
          situationId: situation.id,
          action: "reviewed",
          submitted: action.values,
          verdict: action.verdict,
          correct,
          outcomeKey,
        },
        situation.cost,
        script,
      );
    }

    case "SKIP_DAY": {
      let next = state;
      while (script[next.index] && script[next.index].day === state.day) {
        next = accept(next, script);
      }
      return { ...next, screen: script[next.index] ? "dayend" : "ending" };
    }

    case "BEGIN_DAY": {
      const day = (state.day + 1) as Day;
      const withConsequences = applyConsequences(state, state.day, script);
      return { ...withConsequences, screen: "desk", day, clock: 0 };
    }

    default:
      return state;
  }
}
```

- [ ] **Step 6: Create the roster seed**

Create `src/game/subjects.ts`. Values from the spec §3:

```ts
import type { Roster } from "@/game/types";

export const SEED_ROSTER: Roster = [
  { id: "1047-001", name: "R. Jones", status: "Enrolled" },
  { id: "1047-002", name: "D. Achterberg", status: "Enrolled" },
  { id: "1047-003", name: "P. Sunderland", status: "Enrolled" },
  { id: "1047-004", name: "L. Auguste", status: "Withdrawn (by subject)" },
  { id: "1047-005", name: "T. Channing", status: "Enrolled" },
  { id: "1047-006", name: "M. Vasquez", status: "Enrolled" },
  { id: "1047-007", name: "K. Oyelowo", status: "Enrolled" },
  { id: "1047-008", name: "H. Brenner", status: "Enrolled" },
  { id: "1047-009", name: "S. Nakashima", status: "Enrolled" },
  { id: "1047-010", name: "E. Fontaine", status: "Enrolled" },
  { id: "1047-011", name: "W. Dorsey", status: "Enrolled" },
  { id: "1047-012", name: "A. Reyes", status: "Screen failed" },
  { id: "1047-013", name: "N. Kaur", status: "Screen failed" },
  { id: "1047-014", name: "F. Dubois", status: "Screen failed" },
  { id: "1047-015", name: "G. Petrov", status: "Screen failed" },
  { id: "1047-016", name: "S. Abiodun", status: "Screen failed" },
  { id: "1047-017", name: "C. Hughes", status: "Screening" },
  { id: "1047-018", name: "L. Lit", status: "Screening" },
  { id: "1047-019", name: "R. Amaya", status: "Screening" },
  { id: "1047-020", name: "J. Whitlock", status: "Screening" },
  { id: "1047-021", name: "B. Ferreira", status: "Screening" },
  { id: "1047-022", name: "D. Marchetti", status: "Screening" },
];
```

`1047-021` and `1047-022` are seeded as `Screening` from Monday rather than appearing mid-run. The spec has them consenting on Tuesday and Wednesday, but a subject who is not on the roster cannot receive a roster change — the update would match nothing and fail silently. Seeding all six screening subjects from the start costs one line of fiction and removes an entire mechanism.

- [ ] **Step 7: Run the tests to verify they pass**

Run: `npx vitest run src/game/state.test.ts`
Expected: PASS, 13 tests.

Then `npm run typecheck` — expected: no errors.

- [ ] **Step 8: Commit**

```bash
git add src/game/
git commit -m "feat(game): types, roster seed, and the reducer"
```

---

### Task 2: Content assets and the document index

**Files:**
- Create: `public/content/documents/` (15 copied markdown files)
- Create: `public/content/documents/index.json`
- Create: `scripts/build-doc-index.mjs`
- Test: `src/game/documents.test.ts`
- Create: `src/game/documents.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: `type DocEntry = { file: string; title: string; words: number }`; `loadDocIndex(): Promise<DocEntry[]>`; `loadDocument(file: string): Promise<string>`.

- [ ] **Step 1: Copy the trial documents into public**

```bash
mkdir -p public/content/documents public/content/source
cp docs/trial_documents/*.md public/content/documents/
rm public/content/documents/ASSUMPTIONS.md public/content/documents/index.md
ls public/content/documents/
```

Expected: 15 files — `budget.md`, `cta.md`, `edc_manual.md`, `form_1572.md`, `icf.md`, `investigators_brochure.md`, `ip_handling_manual.md`, `irt_manual.md`, `lab_manual.md`, `monitoring_plan.md`, `pharmacy_manual.md`, `protocol.md`, `safety_reporting_manual.md`, `siv_slide_deck.md`, `study_reference_manual.md`.

`ASSUMPTIONS.md` and `index.md` are authoring metadata, not documents a site receives — they are excluded deliberately.

- [ ] **Step 2: Write the index generator**

Create `scripts/build-doc-index.mjs`:

```js
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const DIR = "public/content/documents";

const TITLES = {
  "budget.md": "Budget — Exhibit B",
  "cta.md": "Clinical Trial Agreement",
  "edc_manual.md": "EDC Manual — Veriscribe v9.2",
  "form_1572.md": "FDA Form 1572",
  "icf.md": "Informed Consent Form v4.0.1",
  "investigators_brochure.md": "Investigator's Brochure ed. 6.0",
  "ip_handling_manual.md": "IP Handling Manual",
  "irt_manual.md": "IRT Manual — Axion",
  "lab_manual.md": "Laboratory Manual",
  "monitoring_plan.md": "Monitoring Plan",
  "pharmacy_manual.md": "Pharmacy Manual",
  "protocol.md": "Protocol 20210143, Amendment 3",
  "safety_reporting_manual.md": "Safety Reporting Manual",
  "siv_slide_deck.md": "SIV Slide Deck — 21-DEC-2022",
  "study_reference_manual.md": "Study Reference Manual",
};

const files = (await readdir(DIR)).filter((f) => f.endsWith(".md")).sort();
const index = [];

for (const file of files) {
  const text = await readFile(join(DIR, file), "utf8");
  index.push({
    file,
    title: TITLES[file] ?? file,
    words: text.split(/\s+/).filter(Boolean).length,
  });
}

await writeFile(join(DIR, "index.json"), JSON.stringify(index, null, 2) + "\n");
console.log(`Indexed ${index.length} documents.`);
```

- [ ] **Step 3: Run it**

```bash
node scripts/build-doc-index.mjs
```

Expected: `Indexed 15 documents.` Verify `public/content/documents/index.json` lists 15 entries, each with a non-zero `words`.

- [ ] **Step 4: Write the failing loader test**

Create `src/game/documents.test.ts`:

```ts
import { afterEach, describe, expect, it, vi } from "vitest";

import { loadDocIndex, loadDocument } from "@/game/documents";

afterEach(() => vi.unstubAllGlobals());

describe("documents", () => {
  it("loads and returns the index", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        json: async () => [{ file: "protocol.md", title: "Protocol", words: 25077 }],
      })),
    );

    const index = await loadDocIndex();
    expect(index).toHaveLength(1);
    expect(index[0].title).toBe("Protocol");
  });

  it("loads a document's text", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({ ok: true, text: async () => "# Protocol\n" })),
    );

    expect(await loadDocument("protocol.md")).toBe("# Protocol\n");
  });

  it("throws a named error when a document is missing", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 404 })));

    await expect(loadDocument("nope.md")).rejects.toThrow("nope.md");
  });
});
```

- [ ] **Step 5: Run it to verify it fails**

Run: `npx vitest run src/game/documents.test.ts`
Expected: FAIL — `Failed to resolve import "@/game/documents"`.

- [ ] **Step 6: Implement the loader**

Create `src/game/documents.ts`:

```ts
export type DocEntry = { file: string; title: string; words: number };

const DOCS = "/content/documents";
const SOURCE = "/content/source";

const cache = new Map<string, string>();

export async function loadDocIndex(): Promise<DocEntry[]> {
  const res = await fetch(`${DOCS}/index.json`);
  if (!res.ok) throw new Error(`Could not load the document index (${res.status})`);
  return res.json();
}

async function loadText(base: string, file: string): Promise<string> {
  const key = `${base}/${file}`;
  const hit = cache.get(key);
  if (hit !== undefined) return hit;

  const res = await fetch(key);
  if (!res.ok) throw new Error(`Could not load ${file} (${res.status})`);

  const text = await res.text();
  cache.set(key, text);
  return text;
}

export const loadDocument = (file: string) => loadText(DOCS, file);
export const loadSource = (file: string) => loadText(SOURCE, file);
```

- [ ] **Step 7: Run the tests to verify they pass**

Run: `npx vitest run src/game/documents.test.ts`
Expected: PASS, 3 tests.

Note: the cache is module-level, so the second and third tests must use distinct filenames — they do (`protocol.md`, `nope.md`).

- [ ] **Step 8: Commit**

```bash
git add public/content scripts/ src/game/documents.ts src/game/documents.test.ts
git commit -m "feat(content): copy the trial corpus into public and add loaders"
```

---

### Task 3: Window geometry and the window manager

**Files:**
- Create: `src/components/desk/geometry.ts`
- Create: `src/components/desk/useWindows.ts`
- Test: `src/components/desk/geometry.test.ts`
- Test: `src/components/desk/useWindows.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `type Rect = { x: number; y: number; w: number; h: number }`
  - `type Viewport = { w: number; h: number }`
  - `clampToViewport(rect: Rect, viewport: Viewport): Rect`
  - `type WindowId = "queue" | "viewer" | "ecrf" | "inbox" | "roster" | "documents"`
  - `type WindowState = Rect & { id: WindowId; title: string; z: number }` — membership in the `windows` array is the only record of whether a window is open; there is no `open` field, because it could never be `false` while minimise is out of scope
  - `useWindows()` returning `{ windows, open, close, focus, move, isOpen, topmost }`

- [ ] **Step 1: Write the failing geometry test**

Create `src/components/desk/geometry.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { clampToViewport } from "@/components/desk/geometry";

const viewport = { w: 1200, h: 800 };

describe("clampToViewport", () => {
  it("leaves a window that already fits alone", () => {
    const rect = { x: 100, y: 100, w: 400, h: 300 };
    expect(clampToViewport(rect, viewport)).toEqual(rect);
  });

  it("pulls a window back when it runs off the right edge", () => {
    const r = clampToViewport({ x: 1100, y: 100, w: 400, h: 300 }, viewport);
    expect(r.x).toBe(800);
  });

  it("pulls a window back when it runs off the bottom, allowing for the taskbar", () => {
    const r = clampToViewport({ x: 100, y: 780, w: 400, h: 300 }, viewport);
    expect(r.y).toBe(470); // 800 - 300 - 30px taskbar
  });

  it("never allows a negative origin", () => {
    const r = clampToViewport({ x: -50, y: -50, w: 400, h: 300 }, viewport);
    expect(r).toMatchObject({ x: 0, y: 0 });
  });

  it("shrinks a window that is wider than the viewport", () => {
    const r = clampToViewport({ x: 0, y: 0, w: 2000, h: 300 }, viewport);
    expect(r.w).toBe(1200);
    expect(r.x).toBe(0);
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npx vitest run src/components/desk/geometry.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement the geometry**

Create `src/components/desk/geometry.ts`:

```ts
export type Rect = { x: number; y: number; w: number; h: number };
export type Viewport = { w: number; h: number };

/** Height of the taskbar, which windows may not sit underneath. */
export const TASKBAR = 30;

export function clampToViewport(rect: Rect, viewport: Viewport): Rect {
  const w = Math.min(rect.w, viewport.w);
  const h = Math.min(rect.h, viewport.h - TASKBAR);

  return {
    w,
    h,
    x: Math.max(0, Math.min(rect.x, viewport.w - w)),
    y: Math.max(0, Math.min(rect.y, viewport.h - TASKBAR - h)),
  };
}
```

- [ ] **Step 4: Run it to verify it passes**

Run: `npx vitest run src/components/desk/geometry.test.ts`
Expected: PASS, 5 tests.

- [ ] **Step 5: Write the failing window-manager test**

Create `src/components/desk/useWindows.test.ts`:

```ts
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useWindows } from "@/components/desk/useWindows";

describe("useWindows", () => {
  it("starts with the work queue open and nothing else", () => {
    const { result } = renderHook(() => useWindows());
    expect(result.current.windows.map((w) => w.id)).toEqual(["queue"]);
  });

  it("opens a window and puts it on top", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("inbox", "Inbox"));

    expect(result.current.isOpen("inbox")).toBe(true);
    expect(result.current.topmost()).toBe("inbox");
  });

  it("focusing an existing window raises it above the others", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("inbox", "Inbox"));
    act(() => result.current.open("roster", "Roster"));
    act(() => result.current.focus("inbox"));

    expect(result.current.topmost()).toBe("inbox");
  });

  it("opening an already-open window focuses it rather than duplicating it", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("inbox", "Inbox"));
    act(() => result.current.open("roster", "Roster"));
    act(() => result.current.open("inbox", "Inbox"));

    expect(result.current.windows.filter((w) => w.id === "inbox")).toHaveLength(1);
    expect(result.current.topmost()).toBe("inbox");
  });

  it("closes a window", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.open("inbox", "Inbox"));
    act(() => result.current.close("inbox"));

    expect(result.current.isOpen("inbox")).toBe(false);
  });

  it("refuses to close the work queue", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.close("queue"));

    expect(result.current.isOpen("queue")).toBe(true);
  });

  it("clamps a window that is dragged off the edge", () => {
    const { result } = renderHook(() => useWindows());
    act(() => result.current.move("queue", -400, -400));

    const queue = result.current.windows.find((w) => w.id === "queue");
    expect(queue).toMatchObject({ x: 0, y: 0 });
  });
});
```

- [ ] **Step 6: Run it to verify it fails**

Run: `npx vitest run src/components/desk/useWindows.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 7: Implement the window manager**

Create `src/components/desk/useWindows.ts`:

```ts
"use client";

import { useCallback, useState } from "react";

import { clampToViewport, type Rect } from "@/components/desk/geometry";

export type WindowId = "queue" | "viewer" | "ecrf" | "inbox" | "roster" | "documents";

export type WindowState = Rect & {
  id: WindowId;
  title: string;
  z: number;
};

/** Where each window lands the first time it is opened. */
const PLACEMENT: Record<WindowId, Rect> = {
  queue: { x: 16, y: 16, w: 900, h: 560 },
  viewer: { x: 60, y: 90, w: 620, h: 620 },
  ecrf: { x: 700, y: 140, w: 460, h: 520 },
  inbox: { x: 200, y: 200, w: 640, h: 420 },
  roster: { x: 260, y: 120, w: 480, h: 500 },
  documents: { x: 320, y: 160, w: 560, h: 440 },
};

function viewport() {
  if (typeof window === "undefined") return { w: 1280, h: 800 };
  return { w: window.innerWidth, h: window.innerHeight };
}

export function useWindows() {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: "queue", title: "Work Queue", ...PLACEMENT.queue, z: 1 },
  ]);

  const focus = useCallback((id: WindowId) => {
    setWindows((ws) => {
      const top = Math.max(...ws.map((w) => w.z));
      return ws.map((w) => (w.id === id ? { ...w, z: top + 1 } : w));
    });
  }, []);

  const open = useCallback(
    (id: WindowId, title: string) => {
      setWindows((ws) => {
        const top = Math.max(0, ...ws.map((w) => w.z));
        if (ws.some((w) => w.id === id)) {
          return ws.map((w) => (w.id === id ? { ...w, z: top + 1 } : w));
        }
        return [
          ...ws,
          { id, title, ...clampToViewport(PLACEMENT[id], viewport()), z: top + 1 },
        ];
      });
    },
    [],
  );

  const close = useCallback((id: WindowId) => {
    if (id === "queue") return; // the base window is never closable
    setWindows((ws) => ws.filter((w) => w.id !== id));
  }, []);

  const move = useCallback((id: WindowId, x: number, y: number) => {
    setWindows((ws) =>
      ws.map((w) =>
        w.id === id ? { ...w, ...clampToViewport({ ...w, x, y }, viewport()) } : w,
      ),
    );
  }, []);

  const isOpen = useCallback(
    (id: WindowId) => windows.some((w) => w.id === id),
    [windows],
  );

  const topmost = useCallback((): WindowId | undefined => {
    return windows.reduce<WindowState | undefined>(
      (best, w) => (!best || w.z > best.z ? w : best),
      undefined,
    )?.id;
  }, [windows]);

  return { windows, open, close, focus, move, isOpen, topmost };
}
```

- [ ] **Step 8: Run the tests to verify they pass**

Run: `npx vitest run src/components/desk/`
Expected: PASS, 12 tests.

- [ ] **Step 9: Commit**

```bash
git add src/components/desk/
git commit -m "feat(desk): viewport clamping and the window manager"
```

---

### Task 4: Window chrome, taskbar, sign-in, and screen routing

**Files:**
- Create: `src/components/desk/Window.tsx`
- Create: `src/components/desk/Taskbar.tsx`
- Create: `src/components/screens/SignIn.tsx`
- Modify: `src/app/page.tsx` (replace entirely)
- Modify: `src/app/page.test.tsx` (replace entirely)
- Modify: `src/app/globals.css` (append the chrome theme)
- Test: `src/components/desk/Window.test.tsx`

**Interfaces:**
- Consumes: `WindowId`, `WindowState`, `useWindows` (Task 3); `initialState`, `reducer` (Task 1).
- Produces:
  - `<Window window={w} onFocus onClose onMove>{children}</Window>`
  - `<Taskbar windows={ws} clock={minutes} day={n} onFocus />`
  - `<SignIn onSignIn={() => void} />`
  - `formatClock(minutes: number): string` exported from `src/components/desk/Taskbar.tsx`

- [ ] **Step 1: Add the chrome theme**

Append to `src/app/globals.css`. This is the aesthetic split from the spec — beveled institutional chrome, flat teal for VERA:

```css
:root {
  --edc-face: #d4d0c8;
  --edc-light: #ffffff;
  --edc-shadow: #808080;
  --edc-dark: #404040;
  --edc-title-a: #2c4a6e;
  --edc-title-b: #4a7ba7;
  --edc-paper: #f4f2ec;
  --edc-ink: #1a1a1a;
  --vera-teal: #0f7b7b;
  --vera-face: #fbfbfa;
}

body {
  background: #3a4149;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  font-size: 11px;
  color: var(--edc-ink);
  overflow: hidden;
}

.bevel-out {
  background: var(--edc-face);
  border-top: 1px solid var(--edc-light);
  border-left: 1px solid var(--edc-light);
  border-right: 1px solid var(--edc-dark);
  border-bottom: 1px solid var(--edc-dark);
}

.bevel-in {
  background: var(--edc-paper);
  border-top: 1px solid var(--edc-shadow);
  border-left: 1px solid var(--edc-shadow);
  border-right: 1px solid var(--edc-light);
  border-bottom: 1px solid var(--edc-light);
}

.titlebar {
  background: linear-gradient(90deg, var(--edc-title-a), var(--edc-title-b));
  color: #fff;
  font-weight: 700;
  cursor: default;
  user-select: none;
}
```

- [ ] **Step 2: Write the failing Window test**

Create `src/components/desk/Window.test.tsx`:

```tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Window } from "@/components/desk/Window";
import type { WindowState } from "@/components/desk/useWindows";

const w: WindowState = { id: "inbox", title: "Inbox", x: 100, y: 100, w: 400, h: 300, z: 2 };

const noop = () => {};

describe("Window", () => {
  it("renders its title and children", () => {
    render(
      <Window window={w} onFocus={noop} onMove={noop}>
        <p>body text</p>
      </Window>,
    );

    expect(screen.getByText("Inbox")).toBeInTheDocument();
    expect(screen.getByText("body text")).toBeInTheDocument();
  });

  it("focuses when the title bar is pressed", () => {
    const onFocus = vi.fn();
    render(
      <Window window={w} onFocus={onFocus} onMove={noop}>
        <p>body</p>
      </Window>,
    );

    fireEvent.pointerDown(screen.getByText("Inbox"), { clientX: 150, clientY: 110 });
    expect(onFocus).toHaveBeenCalledWith("inbox");
  });

  it("reports the new origin while the title bar is dragged", () => {
    const onMove = vi.fn();
    render(
      <Window window={w} onFocus={noop} onMove={onMove}>
        <p>body</p>
      </Window>,
    );

    const bar = screen.getByText("Inbox");
    fireEvent.pointerDown(bar, { clientX: 150, clientY: 110 });
    fireEvent.pointerMove(bar, { clientX: 250, clientY: 160 });

    // grabbed 50px right and 10px down of the origin, so the origin follows
    expect(onMove).toHaveBeenCalledWith("inbox", 200, 150);
  });

  it("stops moving after the pointer is released", () => {
    const onMove = vi.fn();
    render(
      <Window window={w} onFocus={noop} onMove={onMove}>
        <p>body</p>
      </Window>,
    );

    const bar = screen.getByText("Inbox");
    fireEvent.pointerDown(bar, { clientX: 150, clientY: 110 });
    fireEvent.pointerUp(bar);
    fireEvent.pointerMove(bar, { clientX: 400, clientY: 400 });

    expect(onMove).not.toHaveBeenCalled();
  });

  it("shows a close button only when onClose is given", () => {
    const { rerender } = render(
      <Window window={w} onFocus={noop} onMove={noop}>
        <p>body</p>
      </Window>,
    );
    expect(screen.queryByRole("button", { name: "Close" })).toBeNull();

    rerender(
      <Window window={w} onFocus={noop} onMove={noop} onClose={vi.fn()}>
        <p>body</p>
      </Window>,
    );
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });
});
```

- [ ] **Step 3: Run it to verify it fails**

Run: `npx vitest run src/components/desk/Window.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 4: Implement Window**

Create `src/components/desk/Window.tsx`. Note the `setPointerCapture` guard: jsdom does not implement it, and calling it unguarded makes every drag test throw.

```tsx
"use client";

import { useCallback, useRef, type PointerEvent, type ReactNode } from "react";

import type { WindowId, WindowState } from "@/components/desk/useWindows";

type Props = {
  window: WindowState;
  onFocus: (id: WindowId) => void;
  onMove: (id: WindowId, x: number, y: number) => void;
  onClose?: (id: WindowId) => void;
  children: ReactNode;
};

export function Window({ window: win, onFocus, onMove, onClose, children }: Props) {
  const grab = useRef<{ dx: number; dy: number } | null>(null);

  const handleDown = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      onFocus(win.id);
      grab.current = { dx: e.clientX - win.x, dy: e.clientY - win.y };
      // jsdom has no pointer capture; the drag works without it in the browser too.
      e.currentTarget.setPointerCapture?.(e.pointerId);
    },
    [onFocus, win.id, win.x, win.y],
  );

  const handleMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      const g = grab.current;
      if (!g) return;
      onMove(win.id, e.clientX - g.dx, e.clientY - g.dy);
    },
    [onMove, win.id],
  );

  const handleUp = useCallback(() => {
    grab.current = null;
  }, []);

  return (
    <div
      className="bevel-out absolute flex flex-col shadow-lg"
      style={{ left: win.x, top: win.y, width: win.w, height: win.h, zIndex: win.z }}
      onPointerDown={() => onFocus(win.id)}
    >
      <div
        className="titlebar flex items-center justify-between px-1.5 py-1"
        onPointerDown={handleDown}
        onPointerMove={handleMove}
        onPointerUp={handleUp}
        onPointerCancel={handleUp}
      >
        <span>{win.title}</span>
        {onClose && (
          <button
            type="button"
            aria-label="Close"
            className="bevel-out px-1.5 leading-none text-black"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => onClose(win.id)}
          >
            ×
          </button>
        )}
      </div>
      <div className="bevel-in m-0.5 flex-1 overflow-auto">{children}</div>
    </div>
  );
}
```

- [ ] **Step 5: Run it to verify it passes**

Run: `npx vitest run src/components/desk/Window.test.tsx`
Expected: PASS, 5 tests.

- [ ] **Step 6: Implement the taskbar**

Create `src/components/desk/Taskbar.tsx`:

```tsx
"use client";

import type { WindowId, WindowState } from "@/components/desk/useWindows";

const DAY_LABEL: Record<number, string> = {
  1: "Mon 08 Jan 2024",
  2: "Tue 09 Jan 2024",
  3: "Wed 10 Jan 2024",
  4: "Thu 11 Jan 2024",
};

/** Minutes since 08:00 → a wall clock the player reads the way they read a clock. */
export function formatClock(minutes: number): string {
  const total = 8 * 60 + minutes;
  const h24 = Math.floor(total / 60);
  const m = total % 60;
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${h24 < 12 ? "AM" : "PM"}`;
}

type Props = {
  windows: WindowState[];
  clock: number;
  day: number;
  onFocus: (id: WindowId) => void;
};

export function Taskbar({ windows, clock, day, onFocus }: Props) {
  return (
    <div className="bevel-out absolute inset-x-0 bottom-0 flex h-[30px] items-center gap-1 px-1">
      <button type="button" className="bevel-out px-2 py-0.5 font-bold">
        EDC
      </button>
      {windows.map((w) => (
        <button
          key={w.id}
          type="button"
          className="bevel-out max-w-[160px] truncate px-2 py-0.5"
          onClick={() => onFocus(w.id)}
        >
          {w.title}
        </button>
      ))}
      <div className="ml-auto bevel-in px-2 py-0.5 font-mono">
        {DAY_LABEL[day]} &nbsp; {formatClock(clock)}
      </div>
    </div>
  );
}
```

- [ ] **Step 7: Implement the sign-in screen**

Create `src/components/screens/SignIn.tsx`. Copy is from the prototype's login screen, retargeted to canon:

```tsx
"use client";

export function SignIn({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bevel-out w-[560px] shadow-2xl">
        <div className="titlebar px-1.5 py-1">Veriscribe EDC 9.2 — Sign in</div>
        <div className="bevel-in m-0.5 p-6">
          <p className="font-mono text-[10px] tracking-widest text-neutral-600">
            AMGEN INC. · PROTOCOL 20210143 · ROCKET-HORIZON
          </p>
          <h1 className="mt-2 text-2xl font-normal">Site 1047 · Coordinator</h1>
          <p className="mt-4 max-w-[46ch] leading-relaxed">
            An eight-hour day, in half-hour blocks. A queue that does not care. An
            assistant who sounds exactly the same whether she is right or wrong.
          </p>
          <dl className="mt-6 grid grid-cols-[80px_1fr] gap-2 items-center">
            <dt>User</dt>
            <dd className="bevel-in px-2 py-1">RAGHUNATHAN, P. (CRC)</dd>
            <dt>Password</dt>
            <dd className="bevel-in px-2 py-1">••••••••••••</dd>
          </dl>
          <div className="mt-6 flex items-center justify-between">
            <span className="font-mono text-[10px] tracking-widest text-neutral-600">
              4 DAYS · 19 SITUATIONS · RANDOMIZATION CLOSES 12-JAN-2024
            </span>
            <button type="button" className="bevel-out px-6 py-1.5" onClick={onSignIn}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 8: Replace the page with the screen router**

Replace `src/app/page.tsx` entirely:

```tsx
"use client";

import { useCallback, useReducer } from "react";

import { SignIn } from "@/components/screens/SignIn";
import { SCRIPT } from "@/game/script";
import { initialState, reducer } from "@/game/state";
import type { Action, State } from "@/game/types";

export default function Home() {
  const [state, rawDispatch] = useReducer(
    (s: State, a: Action) => reducer(s, a, SCRIPT),
    initialState,
  );
  const dispatch = useCallback((a: Action) => rawDispatch(a), []);

  switch (state.screen) {
    case "signin":
      return <SignIn onSignIn={() => dispatch({ type: "SIGN_IN" })} />;
    default:
      return (
        <main className="p-4">
          <h1 className="text-lg">Desk — day {state.day}</h1>
        </main>
      );
  }
}
```

The `default` branch is a placeholder that Task 5 replaces with `<Desk />`. It is not a plan placeholder — it is a real, working intermediate state that the test below asserts against.

- [ ] **Step 9: Create the script module so the import resolves**

Create `src/game/script.ts`. Tasks 12–15 fill this in; for now it re-exports the fixture so the app runs:

```ts
import { FIXTURE_SCRIPT } from "@/game/fixtures";
import type { Situation } from "@/game/types";

/** Replaced with the authored nineteen in Tasks 12–15. */
export const SCRIPT: Situation[] = FIXTURE_SCRIPT;
```

- [ ] **Step 10: Replace the page test**

Replace `src/app/page.test.tsx` entirely:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home", () => {
  it("opens on the sign-in screen", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Site 1047 · Coordinator" }),
    ).toBeInTheDocument();
  });

  it("moves to the desk when signed in", async () => {
    render(<Home />);
    await userEvent.click(screen.getByRole("button", { name: "Sign in" }));

    expect(screen.getByRole("heading", { name: /Desk — day 1/ })).toBeInTheDocument();
  });
});
```

- [ ] **Step 11: Run the full suite**

Run: `npm test` then `npm run typecheck`
Expected: all pass.

- [ ] **Step 12: Commit**

```bash
git add src/ docs/
git commit -m "feat(desk): window chrome, taskbar, sign-in, and screen routing"
```

---

### Task 5: The Work Queue and VERA's rail

**Files:**
- Create: `src/components/windows/WorkQueue.tsx`
- Create: `src/components/vera/Rail.tsx`
- Create: `src/components/desk/Desk.tsx`
- Modify: `src/app/page.tsx` (replace the `default` branch with `<Desk />`)
- Test: `src/components/desk/Desk.test.tsx`

**Interfaces:**
- Consumes: `Window`, `Taskbar`, `useWindows` (Tasks 3–4); `State`, `Action`, `Situation` (Task 1); `SCRIPT` (Task 4).
- Produces: `<Desk state={state} dispatch={dispatch} />`.

- [ ] **Step 1: Write the failing desk test**

Create `src/components/desk/Desk.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Desk } from "@/components/desk/Desk";
import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState } from "@/game/state";
import type { State } from "@/game/types";

const desk = (over: Partial<State> = {}): State => ({
  ...initialState,
  screen: "desk",
  ...over,
});

describe("Desk", () => {
  it("shows the current situation's title and blurb", () => {
    render(<Desk state={desk()} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);

    expect(screen.getByText("Week 8 vitals")).toBeInTheDocument();
    expect(screen.getByText(/Paper source only/)).toBeInTheDocument();
  });

  it("tells the player no assistant is provisioned before VERA arrives", () => {
    render(<Desk state={desk()} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);

    expect(screen.getByText(/No assistant provisioned/)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Accept as drafted/ })).toBeNull();
  });

  it("shows VERA's summary and an Accept button once she has arrived", () => {
    render(<Desk state={desk({ index: 1 })} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);

    expect(screen.getByText("The panel is within range.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Accept as drafted/ })).toBeInTheDocument();
  });

  it("dispatches ACCEPT when the player takes her word", async () => {
    const dispatch = vi.fn();
    render(<Desk state={desk({ index: 1 })} dispatch={dispatch} script={FIXTURE_SCRIPT} />);

    await userEvent.click(screen.getByRole("button", { name: /Accept as drafted/ }));
    expect(dispatch).toHaveBeenCalledWith({ type: "ACCEPT" });
  });

  it("shows the manual review cost for the item type", () => {
    render(
      <Desk state={desk({ index: 2, day: 2 })} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />,
    );
    expect(screen.getByRole("button", { name: /Manually review/ })).toHaveTextContent("1.5 HR");
  });

  it("puts the clock in the taskbar", () => {
    render(<Desk state={desk({ clock: 150 })} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);
    expect(screen.getByText(/10:30 AM/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npx vitest run src/components/desk/Desk.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement the Work Queue window body**

Create `src/components/windows/WorkQueue.tsx`:

```tsx
"use client";

import type { Situation } from "@/game/types";

const TYPE_LABEL: Record<Situation["type"], string> = {
  screening: "SCREENING",
  "data-entry": "DATA ENTRY",
  safety: "SAFETY",
};

type Props = {
  today: Situation[];
  current?: Situation;
  doneIds: string[];
};

export function WorkQueue({ today, current, doneIds }: Props) {
  return (
    <div className="flex h-full flex-col">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bevel-out">
            <th className="px-2 py-1 font-normal">#</th>
            <th className="px-2 py-1 font-normal">Type</th>
            <th className="px-2 py-1 font-normal">Subject / Item</th>
            <th className="px-2 py-1 font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {today.map((s, i) => {
            const done = doneIds.includes(s.id);
            return (
              <tr key={s.id} className={s.id === current?.id ? "bg-[#dce6f2]" : ""}>
                <td className="px-2 py-1 font-mono">{String(i + 1).padStart(2, "0")}</td>
                <td className="px-2 py-1">{TYPE_LABEL[s.type]}</td>
                <td className="px-2 py-1">
                  {s.subject} · {s.title}
                </td>
                <td className="px-2 py-1">
                  <span className={done ? "text-neutral-500" : "bg-[#2c4a6e] px-1 text-white"}>
                    {done ? "DONE" : "OPEN"}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {current && (
        <div className="bevel-out m-2 p-3">
          <div className="flex justify-between font-mono text-[10px] tracking-widest text-neutral-600">
            <span>
              {TYPE_LABEL[current.type]} — {current.id}
            </span>
            <span>Subject {current.subject}</span>
          </div>
          <h2 className="mt-2 text-base">{current.title}</h2>
          <p className="mt-1 leading-relaxed">{current.blurb}</p>
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 4: Implement VERA's rail**

Create `src/components/vera/Rail.tsx`. The two actions live here — this is the only place the player commits to anything:

```tsx
"use client";

import type { Situation } from "@/game/types";

const COST_LABEL: Record<number, string> = { 60: "1 HOUR", 90: "1.5 HR" };

type Props = {
  situation?: Situation;
  onAccept: () => void;
  onReview: () => void;
};

export function Rail({ situation, onAccept, onReview }: Props) {
  const assisted = situation?.vera !== undefined;

  return (
    <aside
      className="absolute right-0 top-0 bottom-[30px] w-[320px] overflow-auto p-3"
      style={{ background: "var(--vera-face)", borderLeft: "1px solid #c9c9c4" }}
    >
      {situation && !assisted && (
        <p className="leading-relaxed text-neutral-700">
          No assistant provisioned for this site. Source documents must be opened and
          entered by hand.
        </p>
      )}

      {situation?.vera && (
        <>
          <div
            className="font-mono text-[10px] tracking-widest"
            style={{ color: "var(--vera-teal)" }}
          >
            VERA · v3.0
          </div>
          <p className="mt-3 leading-relaxed">{situation.vera.summary}</p>
        </>
      )}

      {situation && (
        <div className="mt-6">
          <div className="font-mono text-[10px] tracking-widest text-neutral-500">
            ACTIONS
          </div>
          {assisted && (
            <button
              type="button"
              onClick={onAccept}
              className="mt-2 flex w-full justify-between border border-neutral-300 bg-white px-3 py-2 text-left"
            >
              <span>Accept as drafted</span>
              <span className="font-mono text-neutral-500">30 MIN</span>
            </button>
          )}
          <button
            type="button"
            onClick={onReview}
            className="mt-2 flex w-full justify-between border border-neutral-300 bg-white px-3 py-2 text-left"
          >
            <span>Manually review</span>
            <span className="font-mono text-neutral-500">{COST_LABEL[situation.cost]}</span>
          </button>
        </div>
      )}
    </aside>
  );
}
```

- [ ] **Step 5: Implement the Desk**

Create `src/components/desk/Desk.tsx`:

```tsx
"use client";

import { Taskbar } from "@/components/desk/Taskbar";
import { useWindows } from "@/components/desk/useWindows";
import { Window } from "@/components/desk/Window";
import { Rail } from "@/components/vera/Rail";
import { WorkQueue } from "@/components/windows/WorkQueue";
import type { Action, Situation, State } from "@/game/types";

type Props = {
  state: State;
  dispatch: (action: Action) => void;
  script: Situation[];
};

export function Desk({ state, dispatch, script }: Props) {
  const { windows, focus, close, move } = useWindows();

  const today = script.filter((s) => s.day === state.day);
  const current = script[state.index];
  const doneIds = state.resolutions.map((r) => r.situationId);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {windows.map((w) => (
        <Window
          key={w.id}
          window={w}
          onFocus={focus}
          onMove={move}
          onClose={w.id === "queue" ? undefined : close}
        >
          {w.id === "queue" && (
            <WorkQueue today={today} current={current} doneIds={doneIds} />
          )}
        </Window>
      ))}

      <Rail
        situation={current}
        onAccept={() => dispatch({ type: "ACCEPT" })}
        onReview={() => dispatch({ type: "SUBMIT", values: {} })}
      />

      <Taskbar windows={windows} clock={state.clock} day={state.day} onFocus={focus} />
    </div>
  );
}
```

`onReview` dispatching an empty `SUBMIT` is temporary — Task 7 replaces it with opening the eCRF and the document viewer.

- [ ] **Step 6: Wire the Desk into the page**

In `src/app/page.tsx`, replace the `default` branch:

```tsx
    default:
      return <Desk state={state} dispatch={dispatch} script={SCRIPT} />;
```

and add `import { Desk } from "@/components/desk/Desk";` at the top.

- [ ] **Step 7: Update the page test's second assertion**

In `src/app/page.test.tsx`, replace the desk assertion:

```tsx
    expect(screen.getByText("Week 8 vitals")).toBeInTheDocument();
```

- [ ] **Step 8: Run the full suite**

Run: `npm test` then `npm run typecheck`
Expected: all pass.

- [ ] **Step 9: Commit**

```bash
git add src/
git commit -m "feat(desk): work queue window and VERA's rail"
```

---

### Task 6: The document viewer and find

**Files:**
- Create: `src/components/windows/find.ts`
- Create: `src/components/windows/DocViewer.tsx`
- Test: `src/components/windows/find.test.ts`
- Test: `src/components/windows/DocViewer.test.tsx`

**Interfaces:**
- Consumes: `loadDocument`, `loadSource` (Task 2).
- Produces:
  - `type Match = { start: number; end: number }`
  - `findMatches(text: string, query: string): Match[]`
  - `<DocViewer file={string} kind="document" | "source" />`

**Rendering decision:** documents render as raw monospace preformatted text, not parsed markdown. This adds no dependency, and a pipe-table rendered as ASCII in a fixed-width column is exactly what a 2003 EDC document viewer looks like. Do not add a markdown library.

- [ ] **Step 1: Write the failing find test**

Create `src/components/windows/find.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { findMatches } from "@/components/windows/find";

describe("findMatches", () => {
  it("returns nothing for an empty query", () => {
    expect(findMatches("EASI ≥16 at screening", "")).toEqual([]);
  });

  it("finds a single match with its offsets", () => {
    expect(findMatches("EASI ≥16 at screening", "≥16")).toEqual([{ start: 5, end: 8 }]);
  });

  it("finds every match", () => {
    expect(findMatches("alt alt alt", "alt")).toHaveLength(3);
  });

  it("is case-insensitive", () => {
    expect(findMatches("Protocol Amendment 3", "amendment")).toEqual([
      { start: 9, end: 18 },
    ]);
  });

  it("treats regex characters as literals", () => {
    expect(findMatches("value (42) recorded", "(42)")).toEqual([{ start: 6, end: 10 }]);
  });

  it("does not loop forever on a query of only special characters", () => {
    expect(findMatches("a.b.c", ".")).toHaveLength(2);
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npx vitest run src/components/windows/find.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement find**

Create `src/components/windows/find.ts`:

```ts
export type Match = { start: number; end: number };

export function findMatches(text: string, query: string): Match[] {
  if (!query) return [];

  const haystack = text.toLowerCase();
  const needle = query.toLowerCase();
  const out: Match[] = [];

  let from = 0;
  for (;;) {
    const at = haystack.indexOf(needle, from);
    if (at === -1) break;
    out.push({ start: at, end: at + needle.length });
    from = at + needle.length;
  }

  return out;
}
```

`indexOf` is used rather than a `RegExp` so that regex metacharacters in the query are literals for free, and so an empty-width match can never loop.

- [ ] **Step 4: Run it to verify it passes**

Run: `npx vitest run src/components/windows/find.test.ts`
Expected: PASS, 6 tests.

- [ ] **Step 5: Write the failing viewer test**

Create `src/components/windows/DocViewer.test.tsx`:

```tsx
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { DocViewer } from "@/components/windows/DocViewer";

const TEXT = "5.2 Inclusion Criteria\n4. EASI >=16 at screening\n5. vIGA-AD >=3\n";

afterEach(() => vi.unstubAllGlobals());

const stub = (text: string) =>
  vi.stubGlobal("fetch", vi.fn(async () => ({ ok: true, text: async () => text })));

describe("DocViewer", () => {
  it("renders the document text", async () => {
    stub(TEXT);
    render(<DocViewer file="protocol-a.md" kind="document" />);

    await waitFor(() => expect(screen.getByText(/Inclusion Criteria/)).toBeInTheDocument());
  });

  it("reports the match count as the player types", async () => {
    stub(TEXT);
    render(<DocViewer file="protocol-b.md" kind="document" />);
    await waitFor(() => screen.getByText(/Inclusion Criteria/));

    await userEvent.type(screen.getByLabelText("Find"), "EASI");
    expect(screen.getByText("1 of 1")).toBeInTheDocument();
  });

  it("reports no matches when there are none", async () => {
    stub(TEXT);
    render(<DocViewer file="protocol-c.md" kind="document" />);
    await waitFor(() => screen.getByText(/Inclusion Criteria/));

    await userEvent.type(screen.getByLabelText("Find"), "zzzz");
    expect(screen.getByText("0 of 0")).toBeInTheDocument();
  });

  it("shows an error when the document cannot be loaded", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: false, status: 404 })));
    render(<DocViewer file="missing.md" kind="document" />);

    await waitFor(() => expect(screen.getByText(/could not be opened/i)).toBeInTheDocument());
  });
});
```

Each test uses a distinct filename because `loadDocument` caches by path.

- [ ] **Step 6: Run it to verify it fails**

Run: `npx vitest run src/components/windows/DocViewer.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 7: Implement the viewer**

Create `src/components/windows/DocViewer.tsx`:

```tsx
"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";

import { findMatches } from "@/components/windows/find";
import { loadDocument, loadSource } from "@/game/documents";

type Props = { file: string; kind: "document" | "source" };

function highlight(text: string, query: string, active: number): ReactNode {
  const matches = findMatches(text, query);
  if (matches.length === 0) return text;

  const out: ReactNode[] = [];
  let cursor = 0;

  matches.forEach((m, i) => {
    if (m.start > cursor) out.push(text.slice(cursor, m.start));
    out.push(
      <mark
        key={i}
        style={{ background: i === active ? "#ffd54a" : "#fff3b0", color: "inherit" }}
      >
        {text.slice(m.start, m.end)}
      </mark>,
    );
    cursor = m.end;
  });

  if (cursor < text.length) out.push(text.slice(cursor));
  return out;
}

export function DocViewer({ file, kind }: Props) {
  const [text, setText] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  useEffect(() => {
    let live = true;
    setText(null);
    setFailed(false);

    (kind === "document" ? loadDocument(file) : loadSource(file))
      .then((t) => live && setText(t))
      .catch(() => live && setFailed(true));

    return () => {
      live = false;
    };
  }, [file, kind]);

  const count = useMemo(() => (text ? findMatches(text, query).length : 0), [text, query]);

  useEffect(() => setActive(0), [query]);

  if (failed) {
    return <p className="p-3">This document could not be opened.</p>;
  }

  return (
    <div className="flex h-full flex-col">
      <div className="bevel-out flex items-center gap-2 px-2 py-1">
        <label htmlFor="find">Find</label>
        <input
          id="find"
          className="bevel-in flex-1 px-1 py-0.5"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="font-mono text-neutral-600">
          {count === 0 ? 0 : active + 1} of {count}
        </span>
        <button
          type="button"
          className="bevel-out px-2"
          onClick={() => setActive((a) => (count ? (a + 1) % count : 0))}
        >
          Next
        </button>
      </div>

      <pre className="flex-1 overflow-auto whitespace-pre-wrap p-3 font-mono text-[11px] leading-[1.5]">
        {text === null ? "Opening…" : highlight(text, query, active)}
      </pre>
    </div>
  );
}
```

- [ ] **Step 8: Run the tests to verify they pass**

Run: `npx vitest run src/components/windows/`
Expected: PASS, 10 tests.

- [ ] **Step 9: Commit**

```bash
git add src/components/windows/
git commit -m "feat(windows): document viewer with literal-text find"
```

---

### Task 7: The eCRF form and manual review

**Files:**
- Create: `src/game/forms.ts`
- Create: `src/components/windows/ECRF.tsx`
- Modify: `src/game/types.ts` (widen `FormId`)
- Modify: `src/components/desk/Desk.tsx` (manual review opens the viewer and the form)
- Test: `src/components/windows/ECRF.test.tsx`

**Interfaces:**
- Consumes: `FormValues`, `Situation` (Task 1); `DocViewer` (Task 6); `useWindows` (Task 3).
- Produces:
  - `type Field = { name: string; label: string; hint?: string }`
  - `type FormSpec = { title: string; fields: Field[]; verdict?: { label: string; options: { value: string; label: string }[] } }`
  - `FORMS: Record<FormId, FormSpec>`
  - `<ECRF situation={s} onSubmit={(values, verdict) => void} />`

- [ ] **Step 1: Widen FormId**

In `src/game/types.ts`, replace the `FormId` line:

```ts
export type FormId = "vitals" | "labs" | "eligibility" | "safety";
```

The spec names three data templates; safety items are verdict-only and need a fourth entry with no fields. This is a correction to the spec's type, not a new template to author.

- [ ] **Step 2: Write the form definitions**

Create `src/game/forms.ts`:

```ts
import type { FormId } from "@/game/types";

export type Field = { name: string; label: string; hint?: string };

export type FormSpec = {
  title: string;
  fields: Field[];
  verdict?: { label: string; options: { value: string; label: string }[] };
};

export const FORMS: Record<FormId, FormSpec> = {
  vitals: {
    title: "eCRF — VITAL SIGNS",
    fields: [
      { name: "bp", label: "BP sitting", hint: "mmHg" },
      { name: "pulse", label: "Pulse", hint: "bpm" },
      { name: "temp", label: "Temperature", hint: "°C" },
      { name: "weight", label: "Weight", hint: "kg" },
    ],
  },
  labs: {
    title: "eCRF — CENTRAL LABORATORY",
    fields: [
      { name: "alt", label: "ALT", hint: "U/L" },
      { name: "ast", label: "AST", hint: "U/L" },
      { name: "creatinine", label: "Creatinine", hint: "mg/dL" },
      { name: "eos", label: "Eosinophils, absolute", hint: "×10⁹/L" },
    ],
  },
  eligibility: {
    title: "eCRF — SCREENING ELIGIBILITY",
    fields: [
      { name: "easi", label: "EASI (screening)" },
      { name: "viga", label: "vIGA-AD" },
      { name: "bsa", label: "BSA involvement", hint: "%" },
      { name: "nrs", label: "Worst Pruritus NRS" },
    ],
    verdict: {
      label: "Determination",
      options: [
        { value: "eligible", label: "Eligible — randomize" },
        { value: "screen-fail", label: "Screen failure" },
      ],
    },
  },
  safety: {
    title: "eCRF — ADVERSE EVENT",
    fields: [],
    verdict: {
      label: "Determination",
      options: [
        { value: "not-serious", label: "Adverse event — not serious" },
        { value: "serious", label: "Serious adverse event — report within 24 hours" },
        { value: "not-reportable", label: "Not an adverse event" },
      ],
    },
  },
};
```

- [ ] **Step 3: Write the failing ECRF test**

Create `src/components/windows/ECRF.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { ECRF } from "@/components/windows/ECRF";
import { FIXTURE_SCRIPT } from "@/game/fixtures";

const vitals = FIXTURE_SCRIPT[0];
const eligibility = FIXTURE_SCRIPT[2];

describe("ECRF", () => {
  it("renders one empty input per field, with nothing pre-filled", () => {
    render(<ECRF situation={vitals} onSubmit={vi.fn()} />);

    expect(screen.getByLabelText("BP sitting")).toHaveValue("");
    expect(screen.getByLabelText("Pulse")).toHaveValue("");
  });

  it("submits what the player typed", async () => {
    const onSubmit = vi.fn();
    render(<ECRF situation={vitals} onSubmit={onSubmit} />);

    await userEvent.type(screen.getByLabelText("BP sitting"), "128/82");
    await userEvent.type(screen.getByLabelText("Pulse"), "72");
    await userEvent.click(screen.getByRole("button", { name: /Submit to database/ }));

    expect(onSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ bp: "128/82", pulse: "72" }),
      undefined,
    );
  });

  it("shows a determination for a screening item", () => {
    render(<ECRF situation={eligibility} onSubmit={vi.fn()} />);
    expect(screen.getByLabelText("Screen failure")).toBeInTheDocument();
  });

  it("will not submit a screening item until a determination is chosen", async () => {
    const onSubmit = vi.fn();
    render(<ECRF situation={eligibility} onSubmit={onSubmit} />);

    await userEvent.click(screen.getByRole("button", { name: /Submit to database/ }));
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("submits the chosen determination", async () => {
    const onSubmit = vi.fn();
    render(<ECRF situation={eligibility} onSubmit={onSubmit} />);

    await userEvent.click(screen.getByLabelText("Screen failure"));
    await userEvent.click(screen.getByRole("button", { name: /Submit to database/ }));

    expect(onSubmit).toHaveBeenCalledWith(expect.any(Object), "screen-fail");
  });

  it("never shows VERA's drafted values", () => {
    render(<ECRF situation={eligibility} onSubmit={vi.fn()} />);
    expect(screen.getByLabelText("EASI (screening)")).toHaveValue("");
  });
});
```

That last test is load-bearing: the spec forbids a pre-filled form, because a pre-filled form is one you skim.

- [ ] **Step 4: Run it to verify it fails**

Run: `npx vitest run src/components/windows/ECRF.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 5: Implement the ECRF**

Create `src/components/windows/ECRF.tsx`:

```tsx
"use client";

import { useState } from "react";

import { FORMS } from "@/game/forms";
import type { FormValues, Situation } from "@/game/types";

type Props = {
  situation: Situation;
  onSubmit: (values: FormValues, verdict?: string) => void;
};

export function ECRF({ situation, onSubmit }: Props) {
  const spec = FORMS[situation.form];
  const [values, setValues] = useState<FormValues>({});
  const [verdict, setVerdict] = useState<string | undefined>();

  const ready = spec.verdict === undefined || verdict !== undefined;

  return (
    <form
      className="flex h-full flex-col p-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (ready) onSubmit(values, verdict);
      }}
    >
      <div className="font-mono text-[10px] tracking-widest text-neutral-600">
        {spec.title} · {situation.subject}
      </div>

      <div className="mt-3 space-y-2">
        {spec.fields.map((f) => (
          <div key={f.name} className="grid grid-cols-[1fr_120px_40px] items-center gap-2">
            <label htmlFor={f.name}>{f.label}</label>
            <input
              id={f.name}
              className="bevel-in px-1 py-0.5 font-mono"
              value={values[f.name] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
            />
            <span className="text-neutral-500">{f.hint}</span>
          </div>
        ))}
      </div>

      {spec.verdict && (
        <fieldset className="mt-4">
          <legend className="font-mono text-[10px] tracking-widest text-neutral-600">
            {spec.verdict.label.toUpperCase()}
          </legend>
          {spec.verdict.options.map((o) => (
            <div key={o.value} className="mt-1">
              <input
                type="radio"
                id={o.value}
                name="verdict"
                checked={verdict === o.value}
                onChange={() => setVerdict(o.value)}
              />
              <label htmlFor={o.value} className="ml-2">
                {o.label}
              </label>
            </div>
          ))}
        </fieldset>
      )}

      <button type="submit" className="bevel-out mt-auto self-end px-4 py-1.5" disabled={!ready}>
        Submit to database
      </button>
    </form>
  );
}
```

- [ ] **Step 6: Run it to verify it passes**

Run: `npx vitest run src/components/windows/ECRF.test.tsx`
Expected: PASS, 6 tests.

- [ ] **Step 7: Wire manual review into the Desk**

In `src/components/desk/Desk.tsx`, add the imports:

```tsx
import { DocViewer } from "@/components/windows/DocViewer";
import { ECRF } from "@/components/windows/ECRF";
```

Change the `useWindows()` destructure to include `open` and `isOpen`, and replace the `Rail`'s `onReview` and the window body switch:

```tsx
  const { windows, open, close, focus, move } = useWindows();

  const beginReview = () => {
    if (!current) return;
    open("viewer", current.source[0] ?? "source.md");
    open("ecrf", "eCRF");
  };

  const submit = (values: FormValues, verdict?: string) => {
    close("viewer");
    close("ecrf");
    dispatch({ type: "SUBMIT", values, verdict });
  };
```

and in the window map:

```tsx
          {w.id === "viewer" && current && (
            <DocViewer file={current.source[0]} kind="source" />
          )}
          {w.id === "ecrf" && current && <ECRF situation={current} onSubmit={submit} />}
```

then pass `onReview={beginReview}` to `<Rail>`. Add `FormValues` to the type import from `@/game/types`.

- [ ] **Step 8: Add a Desk test for the review flow**

Append to `src/components/desk/Desk.test.tsx`:

```tsx
  it("opens the source and an empty form when manual review begins", async () => {
    render(<Desk state={desk()} dispatch={vi.fn()} script={FIXTURE_SCRIPT} />);

    await userEvent.click(screen.getByRole("button", { name: /Manually review/ }));
    expect(screen.getByText(/eCRF — VITAL SIGNS/)).toBeInTheDocument();
  });
```

- [ ] **Step 9: Run the full suite**

Run: `npm test` then `npm run typecheck`
Expected: all pass.

- [ ] **Step 10: Commit**

```bash
git add src/
git commit -m "feat(windows): eCRF templates and the manual review flow"
```

---

### Task 8: Inbox, Roster, and the Documents library

**Files:**
- Create: `src/components/windows/Inbox.tsx`
- Create: `src/components/windows/Roster.tsx`
- Create: `src/components/windows/Documents.tsx`
- Modify: `src/components/desk/Desk.tsx` (Start menu opens them)
- Test: `src/components/windows/Roster.test.tsx`
- Test: `src/components/windows/Documents.test.tsx`

**Interfaces:**
- Consumes: `Email`, `Roster` (Task 1); `loadDocIndex`, `DocEntry` (Task 2); `useWindows` (Task 3).
- Produces: `<Inbox emails={Email[]} />`, `<Roster roster={Roster} changed={string[]} />`, `<Documents onOpen={(file, title) => void} />`.

- [ ] **Step 1: Write the failing Roster test**

Create `src/components/windows/Roster.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Roster } from "@/components/windows/Roster";
import { SEED_ROSTER } from "@/game/subjects";

describe("Roster", () => {
  it("shows the subject id and the name together", () => {
    render(<Roster roster={SEED_ROSTER} changed={[]} />);

    const row = screen.getByText("1047-018").closest("tr");
    expect(row).toHaveTextContent("L. Lit");
  });

  it("shows each subject's status", () => {
    render(<Roster roster={SEED_ROSTER} changed={[]} />);

    expect(screen.getByText("1047-004").closest("tr")).toHaveTextContent(
      "Withdrawn (by subject)",
    );
  });

  it("marks rows that changed today and says nothing else about them", () => {
    render(<Roster roster={SEED_ROSTER} changed={["1047-001"]} />);

    const row = screen.getByText("1047-001").closest("tr");
    expect(row).toHaveAttribute("data-changed", "true");
    expect(row).not.toHaveTextContent(/error|mistake|missed/i);
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npx vitest run src/components/windows/Roster.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement Roster**

Create `src/components/windows/Roster.tsx`. The roster never jokes and never explains:

```tsx
"use client";

import type { Roster as RosterType } from "@/game/types";

type Props = { roster: RosterType; changed: string[] };

export function Roster({ roster, changed }: Props) {
  return (
    <table className="w-full border-collapse text-left">
      <tbody>
        {roster.map((s) => {
          const isChanged = changed.includes(s.id);
          return (
            <tr key={s.id} data-changed={isChanged} className={isChanged ? "bg-[#fff7d6]" : ""}>
              <td className="px-2 py-1 font-mono">{s.id}</td>
              <td className="px-2 py-1">{s.name}</td>
              <td className="px-2 py-1">{s.status}</td>
              <td className="px-2 py-1 font-mono text-neutral-500">{isChanged ? "◂" : ""}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
```

- [ ] **Step 4: Implement Inbox**

Create `src/components/windows/Inbox.tsx`. Read-only — no reply, no compose, per constraint R7:

```tsx
"use client";

import { useState } from "react";

import type { Email } from "@/game/types";

export function Inbox({ emails }: { emails: Email[] }) {
  const [openId, setOpenId] = useState<string | null>(emails.at(-1)?.id ?? null);
  const open = emails.find((e) => e.id === openId);

  if (emails.length === 0) {
    return <p className="p-3 text-neutral-600">No mail.</p>;
  }

  return (
    <div className="flex h-full">
      <ul className="w-[220px] overflow-auto border-r border-neutral-400">
        {emails.map((e) => (
          <li key={e.id}>
            <button
              type="button"
              className={`w-full px-2 py-1 text-left ${e.id === openId ? "bg-[#dce6f2]" : ""}`}
              onClick={() => setOpenId(e.id)}
            >
              <span className="block truncate font-bold">{e.from}</span>
              <span className="block truncate text-neutral-700">{e.subject}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="flex-1 overflow-auto p-3">
        {open && (
          <>
            <div className="font-mono text-[10px] tracking-widest text-neutral-600">
              FROM {open.from.toUpperCase()}
            </div>
            <h3 className="mt-1 text-sm font-bold">{open.subject}</h3>
            <p className="mt-3 whitespace-pre-wrap leading-relaxed">{open.body}</p>
          </>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 5: Write the failing Documents test**

Create `src/components/windows/Documents.test.tsx`:

```tsx
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { Documents } from "@/components/windows/Documents";

const INDEX = [
  { file: "protocol.md", title: "Protocol 20210143, Amendment 3", words: 25077 },
  { file: "lab_manual.md", title: "Laboratory Manual", words: 14210 },
];

afterEach(() => vi.unstubAllGlobals());

describe("Documents", () => {
  it("lists every document with its word count", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: true, json: async () => INDEX })));
    render(<Documents onOpen={vi.fn()} />);

    await waitFor(() => screen.getByText("Laboratory Manual"));
    expect(screen.getByText("25,077")).toBeInTheDocument();
  });

  it("opens the document the player picks", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => ({ ok: true, json: async () => INDEX })));
    const onOpen = vi.fn();
    render(<Documents onOpen={onOpen} />);

    await waitFor(() => screen.getByText("Laboratory Manual"));
    await userEvent.click(screen.getByText("Laboratory Manual"));

    expect(onOpen).toHaveBeenCalledWith("lab_manual.md", "Laboratory Manual");
  });
});
```

- [ ] **Step 6: Run it to verify it fails**

Run: `npx vitest run src/components/windows/Documents.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 7: Implement Documents**

Create `src/components/windows/Documents.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";

import { loadDocIndex, type DocEntry } from "@/game/documents";

type Props = { onOpen: (file: string, title: string) => void };

export function Documents({ onOpen }: Props) {
  const [index, setIndex] = useState<DocEntry[]>([]);

  useEffect(() => {
    let live = true;
    loadDocIndex()
      .then((i) => live && setIndex(i))
      .catch(() => live && setIndex([]));
    return () => {
      live = false;
    };
  }, []);

  return (
    <ul>
      {index.map((d) => (
        <li key={d.file} className="border-b border-neutral-300 last:border-0">
          <button
            type="button"
            className="flex w-full justify-between px-2 py-1 text-left hover:bg-[#dce6f2]"
            onClick={() => onOpen(d.file, d.title)}
          >
            <span>{d.title}</span>
            <span className="font-mono text-neutral-500">{d.words.toLocaleString()}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 8: Wire all three into the Desk**

In `src/components/desk/Desk.tsx`, add a Start-menu row above the taskbar that opens them, and add the window bodies. Add state for which reference document is open:

```tsx
  const [reference, setReference] = useState<{ file: string; title: string } | null>(null);
```

In the window map, add:

```tsx
          {w.id === "inbox" && <Inbox emails={state.inbox} />}
          {w.id === "roster" && <Roster roster={state.roster} changed={[]} />}
          {w.id === "documents" && (
            <Documents
              onOpen={(file, title) => {
                setReference({ file, title });
                open("viewer", title);
              }}
            />
          )}
```

and change the viewer body so a chosen reference document wins over the situation's source:

```tsx
          {w.id === "viewer" &&
            (reference ? (
              <DocViewer file={reference.file} kind="document" />
            ) : current ? (
              <DocViewer file={current.source[0]} kind="source" />
            ) : null)}
```

`beginReview` must clear it: add `setReference(null);` as its first line.

Then replace the taskbar's `EDC` button with one that opens the three instrument windows. In `Taskbar.tsx`, accept an `onOpen` prop and render three buttons after it:

```tsx
      <button type="button" className="bevel-out px-2 py-0.5" onClick={() => onOpen("inbox", "Inbox")}>
        Inbox
      </button>
      <button type="button" className="bevel-out px-2 py-0.5" onClick={() => onOpen("roster", "Subject Roster")}>
        Roster
      </button>
      <button type="button" className="bevel-out px-2 py-0.5" onClick={() => onOpen("documents", "Documents")}>
        Documents
      </button>
```

with `onOpen: (id: WindowId, title: string) => void` added to `Taskbar`'s props, and `onOpen={open}` passed from `Desk`.

- [ ] **Step 9: Run the full suite**

Run: `npm test` then `npm run typecheck`
Expected: all pass.

- [ ] **Step 10: Commit**

```bash
git add src/
git commit -m "feat(windows): inbox, roster, and the document library"
```

---

### Task 9: The day-end summary

**Files:**
- Create: `src/game/emails.ts`
- Create: `src/components/screens/DayEnd.tsx`
- Modify: `src/game/state.ts` (add `summariseDay`, refactor `applyConsequences` onto it)
- Modify: `src/app/page.tsx` (route `dayend`)
- Test: `src/game/summary.test.ts`
- Test: `src/components/screens/DayEnd.test.tsx`

**Interfaces:**
- Consumes: `State`, `Situation`, `Resolution`, `Email`, `RosterChange` (Task 1).
- Produces:
  - `type DaySummary = { worked: { situation: Situation; resolution: Resolution }[]; emails: Email[]; rosterChanges: RosterChange[] }`
  - `summariseDay(state: State, script: Situation[]): DaySummary`
  - `LADDER: Record<Day, Email[]>`
  - `<DayEnd state={state} script={script} onBegin={() => void} onSkip={() => void} />`

**Timing decision:** a day's consequences surface at **that day's own** end. VISION requires them by "the next day-end summary at the latest", and same-day satisfies it while keeping the reducer to a single pass. The player decided at 9:00 AM and hears at 4:00 PM; nothing is ever labelled as feedback, so the connection stays theirs to draw.

- [ ] **Step 1: Write the ladder emails**

Create `src/game/emails.ts`. All satire lives here and nowhere else:

```ts
import type { Day, Email } from "@/game/types";

/** One rung per day-end, scripted. Fires regardless of how the player is doing. */
export const LADDER: Record<Day, Email[]> = {
  1: [
    {
      id: "ENR-1",
      from: "Amgen Clinical Operations",
      subject: "Portland — we're SO close! 🎯",
      body:
        "Hi Site 1047!\n\nJust a friendly nudge — you're sitting at 11 randomized against a " +
        "contracted 12, and study-wide randomization closes 12-JAN-2024. One more gets you " +
        "over the line!\n\nYou've got this. 💪\n\n— Clinical Operations",
    },
  ],
  2: [
    {
      id: "ENR-2",
      from: "Amgen Clinical Operations",
      subject: "Enrolment check-in — Thursday",
      body:
        "Site 1047,\n\nOur operations lead has asked for a call on Thursday to walk through " +
        "your remaining screening pipeline ahead of randomization close.\n\nNo prep needed, " +
        "just bring your numbers.\n\n— Clinical Operations",
    },
    {
      id: "AUD-1",
      from: "Amgen Data Management",
      subject: "Query volume — Site 1047",
      body:
        "Site 1047,\n\nQuery volume at your site has risen relative to the study average " +
        "across the current reporting period. No action is required at this time. This " +
        "notice is generated automatically.\n\n— Data Management",
    },
  ],
  3: [
    {
      id: "ENR-3",
      from: "Amgen Clinical Operations",
      subject: "Daily enrolment reporting — effective immediately",
      body:
        "Site 1047,\n\nEffective immediately and through randomization close, please submit " +
        "a daily enrolment status to this address by 09:00 PT.\n\nWe know this is extra work " +
        "and we appreciate your partnership! 🙏\n\n— Clinical Operations",
    },
    {
      id: "AUD-2",
      from: "Harborlight Clinical Research",
      subject: "Notice of for-cause audit — Site 1047",
      body:
        "Investigator: M. A. Okonkwo, MD, FAAD\nProtocol 20210143, Amendment 3 (29-NOV-2023)\n\n" +
        "Please be advised that a for-cause audit of Site 1047 has been scheduled. Source " +
        "documents, the investigator site file, and the delegation log should be available " +
        "for review.\n\nThis notice is issued under Section 8 of the Monitoring Plan.",
    },
  ],
  4: [],
};
```

- [ ] **Step 2: Write the failing summary test**

Create `src/game/summary.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState, reducer, summariseDay } from "@/game/state";
import type { State } from "@/game/types";

const played = (...actions: Parameters<typeof reducer>[1][]): State =>
  actions.reduce(
    (s, a) => reducer(s, a, FIXTURE_SCRIPT),
    { ...initialState, screen: "desk" } as State,
  );

describe("summariseDay", () => {
  it("lists what was worked today, in order", () => {
    const s = played({ type: "ACCEPT" }, { type: "ACCEPT" });
    const summary = summariseDay(s, FIXTURE_SCRIPT);

    expect(summary.worked.map((w) => w.situation.id)).toEqual(["FIX-001", "FIX-002"]);
  });

  it("includes the day's ladder rung", () => {
    const s = played({ type: "ACCEPT" }, { type: "ACCEPT" });
    expect(summariseDay(s, FIXTURE_SCRIPT).emails.map((e) => e.id)).toContain("ENR-1");
  });

  it("includes emails generated by today's decisions", () => {
    const s = played(
      { type: "SUBMIT", values: { bp: "wrong", pulse: "wrong" } },
      { type: "ACCEPT" },
    );
    expect(summariseDay(s, FIXTURE_SCRIPT).emails.map((e) => e.id)).toContain("DQ-0111");
  });

  it("collects roster changes caused by today's decisions", () => {
    const s = played(
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "ACCEPT" },
    );
    expect(summariseDay(s, FIXTURE_SCRIPT).rosterChanges).toEqual([
      { subject: "1047-019", status: "Enrolled" },
    ]);
  });

  it("does not report yesterday's work as today's", () => {
    const s = played(
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "ACCEPT" },
    );
    expect(summariseDay(s, FIXTURE_SCRIPT).worked).toHaveLength(1);
  });
});
```

- [ ] **Step 3: Run it to verify it fails**

Run: `npx vitest run src/game/summary.test.ts`
Expected: FAIL — `summariseDay` is not exported.

- [ ] **Step 4: Add summariseDay and refactor applyConsequences**

In `src/game/state.ts`, add the import `import { LADDER } from "@/game/emails";` and these exports, then rewrite `applyConsequences` to sit on top of the new function:

```ts
export type DaySummary = {
  worked: { situation: Situation; resolution: Resolution }[];
  emails: Email[];
  rosterChanges: RosterChange[];
};

export function summariseDay(state: State, script: Situation[]): DaySummary {
  const worked = state.resolutions
    .map((resolution) => ({ resolution, situation: situationById(resolution.situationId, script) }))
    .filter(({ situation }) => situation.day === state.day);

  const emails: Email[] = [];
  const rosterChanges: RosterChange[] = [];

  for (const { situation, resolution } of worked) {
    const outcome = situation.outcomes[resolution.outcomeKey];
    if (outcome.email) emails.push(outcome.email);
    if (outcome.roster) rosterChanges.push(outcome.roster);
  }

  return { worked, emails: [...emails, ...LADDER[state.day]], rosterChanges };
}

function applyConsequences(state: State, script: Situation[]): State {
  const { emails, rosterChanges } = summariseDay(state, script);

  const roster = rosterChanges.reduce(
    (acc, change) =>
      acc.map((s) => (s.id === change.subject ? { ...s, status: change.status } : s)),
    state.roster,
  );

  return { ...state, roster, inbox: [...state.inbox, ...emails] };
}
```

Update the `BEGIN_DAY` branch to call the new signature:

```ts
    case "BEGIN_DAY": {
      const day = (state.day + 1) as Day;
      return { ...applyConsequences(state, script), screen: "desk", day, clock: 0 };
    }
```

Add `Email`, `RosterChange` and `Resolution` to the type imports at the top of the file.

- [ ] **Step 5: Run both state test files**

Run: `npx vitest run src/game/`
Expected: PASS. The Task 1 test "BEGIN_DAY applies the previous day's roster changes and emails" still passes — it accepts FIX-003 on day 2 and then begins day 3, so the change is applied on the transition out of day 2.

- [ ] **Step 6: Write the failing DayEnd test**

Create `src/components/screens/DayEnd.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { DayEnd } from "@/components/screens/DayEnd";
import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState, reducer } from "@/game/state";
import type { State } from "@/game/types";

const afterDay1 = (): State =>
  [{ type: "ACCEPT" } as const, { type: "ACCEPT" } as const].reduce(
    (s, a) => reducer(s, a, FIXTURE_SCRIPT),
    { ...initialState, screen: "desk" } as State,
  );

const noop = () => {};

describe("DayEnd", () => {
  it("lists what was worked", () => {
    render(<DayEnd state={afterDay1()} script={FIXTURE_SCRIPT} onBegin={noop} onSkip={noop} />);
    expect(screen.getByText(/Week 8 vitals/)).toBeInTheDocument();
  });

  it("shows the day's mail", () => {
    render(<DayEnd state={afterDay1()} script={FIXTURE_SCRIPT} onBegin={noop} onSkip={noop} />);
    expect(screen.getByText(/we're SO close/)).toBeInTheDocument();
  });

  it("shows no score, no percentage, and no verdict on the player's accuracy", () => {
    const { container } = render(
      <DayEnd state={afterDay1()} script={FIXTURE_SCRIPT} onBegin={noop} onSkip={noop} />,
    );
    expect(container.textContent).not.toMatch(/%|score|accuracy|correct|wrong|missed/i);
  });

  it("begins the next day", async () => {
    const onBegin = vi.fn();
    render(<DayEnd state={afterDay1()} script={FIXTURE_SCRIPT} onBegin={onBegin} onSkip={noop} />);

    await userEvent.click(screen.getByRole("button", { name: /Begin day 2/ }));
    expect(onBegin).toHaveBeenCalled();
  });

  it("offers to skip the next day", async () => {
    const onSkip = vi.fn();
    render(<DayEnd state={afterDay1()} script={FIXTURE_SCRIPT} onBegin={noop} onSkip={onSkip} />);

    await userEvent.click(screen.getByRole("button", { name: /Skip day/ }));
    expect(onSkip).toHaveBeenCalled();
  });
});
```

- [ ] **Step 7: Run it to verify it fails**

Run: `npx vitest run src/components/screens/DayEnd.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 8: Implement DayEnd**

Create `src/components/screens/DayEnd.tsx`. The roster is last on the screen, and nothing on it is labelled as feedback:

```tsx
"use client";

import { summariseDay } from "@/game/state";
import type { Situation, State } from "@/game/types";

const DAY_LABEL: Record<number, string> = {
  1: "MONDAY 08-JAN-2024",
  2: "TUESDAY 09-JAN-2024",
  3: "WEDNESDAY 10-JAN-2024",
  4: "THURSDAY 11-JAN-2024",
};

type Props = {
  state: State;
  script: Situation[];
  onBegin: () => void;
  onSkip: () => void;
};

export function DayEnd({ state, script, onBegin, onSkip }: Props) {
  const { worked, emails, rosterChanges } = summariseDay(state, script);
  const changedIds = rosterChanges.map((c) => c.subject);

  return (
    <div className="flex h-screen items-center justify-center p-8">
      <div className="bevel-out max-h-full w-[720px] overflow-auto shadow-2xl">
        <div className="titlebar px-1.5 py-1">
          Veriscribe EDC 9.2 — End of session
        </div>

        <div className="bevel-in m-0.5 p-6 font-mono text-[11px] leading-[1.7]">
          <div className="tracking-widest text-neutral-600">
            {DAY_LABEL[state.day]} · 4:00 PM
          </div>

          <h2 className="mt-4 tracking-widest">WORKED TODAY</h2>
          {worked.map(({ situation, resolution }) => (
            <div key={situation.id} className="ml-2">
              {situation.id} — {situation.subject} · {situation.title}
              <span className="text-neutral-500">
                {" "}
                ({resolution.action === "accepted" ? "accepted as drafted" : "reviewed"})
              </span>
            </div>
          ))}

          {emails.length > 0 && (
            <>
              <h2 className="mt-6 tracking-widest">TODAY&apos;S MAIL</h2>
              {emails.map((e) => (
                <div key={e.id} className="ml-2">
                  {e.from} — {e.subject}
                </div>
              ))}
            </>
          )}

          {rosterChanges.length > 0 && (
            <>
              <h2 className="mt-6 tracking-widest">ROSTER CHANGES</h2>
              {state.roster
                .filter((s) => changedIds.includes(s.id))
                .map((s) => {
                  const next = rosterChanges.find((c) => c.subject === s.id);
                  return (
                    <div key={s.id} className="ml-2">
                      {s.id} &nbsp;{s.name} &nbsp;{s.status} → {next?.status}
                    </div>
                  );
                })}
            </>
          )}

          <div className="mt-8 flex justify-end gap-2">
            <button type="button" className="bevel-out px-4 py-1.5" onClick={onSkip}>
              Skip day {state.day + 1} ▸
            </button>
            <button type="button" className="bevel-out px-4 py-1.5" onClick={onBegin}>
              Begin day {state.day + 1}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 9: Route it**

In `src/app/page.tsx`, add before the `default` branch:

```tsx
    case "dayend":
      return (
        <DayEnd
          state={state}
          script={SCRIPT}
          onBegin={() => dispatch({ type: "BEGIN_DAY" })}
          onSkip={() => {
            dispatch({ type: "BEGIN_DAY" });
            dispatch({ type: "SKIP_DAY" });
          }}
        />
      );
```

with `import { DayEnd } from "@/components/screens/DayEnd";`.

- [ ] **Step 10: Run the full suite**

Run: `npm test` then `npm run typecheck`
Expected: all pass.

- [ ] **Step 11: Commit**

```bash
git add src/
git commit -m "feat(screens): the day-end summary and the scripted ladder rungs"
```

---

### Task 10: The ending — three beats

**Files:**
- Create: `src/game/ending.ts`
- Create: `src/components/screens/Ending.tsx`
- Modify: `src/app/page.tsx` (route `ending`)
- Test: `src/game/ending.test.ts`
- Test: `src/components/screens/Ending.test.tsx`

**Interfaces:**
- Consumes: `State`, `Situation`, `Resolution`, `Tally` (Task 1).
- Produces:
  - `type AnswerRow = { id: string; subject: string; title: string; action: string; truth: string; consequence: string; category?: 1 | 2 | 3 }`
  - `buildAnswer(state: State, script: Situation[]): AnswerRow[]`
  - `type Calibration = { verified: number; verifiedContainingError: number; errorsThroughUnverified: number }`
  - `calibrate(state: State, script: Situation[]): Calibration`
  - `<Ending state={state} script={script} />`

- [ ] **Step 1: Write the failing ending test**

Create `src/game/ending.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { buildAnswer, calibrate } from "@/game/ending";
import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState, reducer } from "@/game/state";
import type { State } from "@/game/types";

const play = (...actions: Parameters<typeof reducer>[1][]): State =>
  actions.reduce(
    (s, a) => reducer(s, a, FIXTURE_SCRIPT),
    { ...initialState, screen: "desk" } as State,
  );

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
```

That last test matters: day 1's manual items have no `vera` block, so reviewing them is not a decision about her and must not inflate the calibration.

- [ ] **Step 2: Run it to verify it fails**

Run: `npx vitest run src/game/ending.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement the ending derivations**

Create `src/game/ending.ts`:

```ts
import { situationById } from "@/game/state";
import type { Situation, State } from "@/game/types";

export type AnswerRow = {
  id: string;
  subject: string;
  title: string;
  action: string;
  truth: string;
  consequence: string;
  category?: 1 | 2 | 3;
};

export type Calibration = {
  verified: number;
  verifiedContainingError: number;
  errorsThroughUnverified: number;
};

const carriesError = (s: Situation) => s.truth.error !== "NONE";

export function buildAnswer(state: State, script: Situation[]): AnswerRow[] {
  return state.resolutions.map((r) => {
    const s = situationById(r.situationId, script);
    return {
      id: s.id,
      subject: s.subject,
      title: s.title,
      action: r.action === "accepted" ? "Accepted as drafted" : "Reviewed by hand",
      truth: s.debrief.line,
      consequence: s.outcomes[r.outcomeKey].email?.subject ?? "",
      category: s.debrief.category,
    };
  });
}

export function calibrate(state: State, script: Situation[]): Calibration {
  let verified = 0;
  let verifiedContainingError = 0;
  let errorsThroughUnverified = 0;

  for (const r of state.resolutions) {
    const s = situationById(r.situationId, script);
    if (!s.vera) continue; // day 1's manual items are not decisions about VERA

    if (r.action === "reviewed") {
      verified += 1;
      if (carriesError(s)) verifiedContainingError += 1;
    } else if (carriesError(s)) {
      errorsThroughUnverified += 1;
    }
  }

  return { verified, verifiedContainingError, errorsThroughUnverified };
}
```

- [ ] **Step 4: Run it to verify it passes**

Run: `npx vitest run src/game/ending.test.ts`
Expected: PASS, 6 tests.

- [ ] **Step 5: Write the failing Ending screen test**

Create `src/components/screens/Ending.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Ending } from "@/components/screens/Ending";
import { FIXTURE_SCRIPT } from "@/game/fixtures";
import { initialState, reducer } from "@/game/state";
import type { State } from "@/game/types";

const finished = (): State =>
  (
    [
      { type: "ACCEPT" },
      { type: "ACCEPT" },
      { type: "BEGIN_DAY" },
      { type: "ACCEPT" },
    ] as Parameters<typeof reducer>[1][]
  ).reduce((s, a) => reducer(s, a, FIXTURE_SCRIPT), {
    ...initialState,
    screen: "desk",
  } as State);

describe("Ending", () => {
  it("opens on the answer", () => {
    render(<Ending state={finished()} script={FIXTURE_SCRIPT} />);
    expect(screen.getByText(/EASI 15.8 is below the threshold/)).toBeInTheDocument();
  });

  it("moves through the audit finding to the point", async () => {
    render(<Ending state={finished()} script={FIXTURE_SCRIPT} />);

    await userEvent.click(screen.getByRole("button", { name: /Continue/ }));
    expect(screen.getByText(/AUDIT FINDING/)).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: /Continue/ }));
    expect(screen.getByText(/you verified/i)).toBeInTheDocument();
  });

  it("states the uncatchable item as impossible rather than as a mistake", () => {
    render(<Ending state={finished()} script={FIXTURE_SCRIPT} />);
    expect(screen.queryByText(/you should have caught/i)).toBeNull();
  });
});
```

- [ ] **Step 6: Run it to verify it fails**

Run: `npx vitest run src/components/screens/Ending.test.tsx`
Expected: FAIL — module not found.

- [ ] **Step 7: Implement the Ending**

Create `src/components/screens/Ending.tsx`. The three beats are separate screens in a fixed order. Category 1 and category 2 get separate headings and different language — never merged:

```tsx
"use client";

import { useState } from "react";

import { buildAnswer, calibrate } from "@/game/ending";
import type { Situation, State } from "@/game/types";

const UNCATCHABLE_WORDING =
  "The blood filed under 1047-005 was drawn from 1047-010, and the other way round. " +
  "Nothing on your desk disagreed with anything else on your desk. The requisition form " +
  "has a field for participant initials — field 5 — and it is pre-printed “not " +
  "collected for this study.” Had it been filled in, the mismatch would have been " +
  "caught before the results ever reached you. That was decided by whoever designed the " +
  "form, not by you.";

type Props = { state: State; script: Situation[] };

export function Ending({ state, script }: Props) {
  const [beat, setBeat] = useState(0);
  const rows = buildAnswer(state, script);
  const cal = calibrate(state, script);

  const uncatchable = rows.filter((r) => r.category === 2);
  const background = rows.filter((r) => r.category === 1);
  const preventable = rows.filter((r) => r.category === 3);

  return (
    <div className="flex h-screen items-center justify-center p-8">
      <div className="bevel-out max-h-full w-[760px] overflow-auto shadow-2xl">
        <div className="bevel-in m-0.5 p-8 font-mono text-[11px] leading-[1.8]">
          {beat === 0 && (
            <>
              <h2 className="tracking-widest">WHAT ACTUALLY HAPPENED</h2>
              <table className="mt-4 w-full border-collapse text-left">
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="align-top">
                      <td className="py-1 pr-3">{r.id}</td>
                      <td className="py-1 pr-3">{r.subject}</td>
                      <td className="py-1 pr-3">{r.action}</td>
                      <td className="py-1">{r.truth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {background.length > 0 && (
                <>
                  <h2 className="mt-8 tracking-widest">
                    WHAT THE DRUG DID
                  </h2>
                  <p className="mt-2 max-w-[70ch]">
                    A subject was hospitalized. VERA was correct, you were careful, and the
                    event is on the drug&apos;s known safety profile. Nobody erred. A trial is
                    an experiment on people who volunteered for something unproven, and this
                    is what that means.
                  </p>
                </>
              )}

              {uncatchable.length > 0 && (
                <>
                  <h2 className="mt-8 tracking-widest">
                    WHAT YOU COULD NOT HAVE CAUGHT
                  </h2>
                  <p className="mt-2 max-w-[70ch]">{UNCATCHABLE_WORDING}</p>
                </>
              )}

              {preventable.length > 0 && (
                <>
                  <h2 className="mt-8 tracking-widest">WHAT GOT PAST YOU</h2>
                  {preventable.map((r) => (
                    <p key={r.id} className="mt-2 max-w-[70ch]">
                      {r.id} · {r.subject} — {r.truth}
                    </p>
                  ))}
                </>
              )}
            </>
          )}

          {beat === 1 && (
            <>
              <h2 className="tracking-widest">FINAL AUDIT FINDING</h2>
              <p className="mt-4 max-w-[70ch]">
                Site 1047 — Cascade Dermatology &amp; Clinical Research, LLC, Portland, Oregon.
                Protocol 20210143, Amendment 3 (29-NOV-2023). Investigator: M. A. Okonkwo, MD,
                FAAD.
              </p>
              <p className="mt-4 max-w-[70ch]">
                Review of the period 08-JAN-2024 through 11-JAN-2024 identified{" "}
                {cal.errorsThroughUnverified} data point(s) entered into the study database
                that are not supported by source documentation. Source data verification was
                performed by the coordinator on {cal.verified} of{" "}
                {script.filter((s) => s.vera).length} assisted records.
              </p>
              <p className="mt-4 max-w-[70ch]">
                Randomized at close: {state.tally.randomized + 11} against a contracted 12.
              </p>
            </>
          )}

          {beat === 2 && (
            <>
              <h2 className="tracking-widest">THE POINT</h2>
              <p className="mt-4 max-w-[70ch]">
                Over four days you verified {cal.verified} of{" "}
                {script.filter((s) => s.vera).length} things the assistant told you.{" "}
                {cal.verifiedContainingError} of those turned out to contain an error.{" "}
                {cal.errorsThroughUnverified} errors went into the database unverified.
              </p>
              <p className="mt-4 max-w-[70ch]">
                Some of what went wrong here was not yours to catch. The mislabelled specimen
                was consistent with itself at every point it touched your desk, and no amount
                of checking would have found it. It was preventable — one field, on one form,
                switched off for a defensible reason by someone who never met the patient.
              </p>
              <p className="mt-4 max-w-[70ch]">
                That person builds tools. So do you.
              </p>
            </>
          )}

          {beat < 2 && (
            <button
              type="button"
              className="bevel-out mt-10 px-6 py-1.5"
              onClick={() => setBeat((b) => b + 1)}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 8: Route it**

In `src/app/page.tsx`, add before `default`:

```tsx
    case "ending":
      return <Ending state={state} script={SCRIPT} />;
```

with `import { Ending } from "@/components/screens/Ending";`.

- [ ] **Step 9: Run the full suite**

Run: `npm test` then `npm run typecheck`
Expected: all pass.

- [ ] **Step 10: Commit**

```bash
git add src/
git commit -m "feat(screens): the answer, the audit finding, and the point"
```

---

### Task 11: Persistence

**Files:**
- Create: `src/game/persist.ts`
- Modify: `src/app/page.tsx` (load on mount, save on change)
- Test: `src/game/persist.test.ts`

**Interfaces:**
- Consumes: `State` (Task 1).
- Produces: `SAVE_KEY`, `SAVE_VERSION`, `save(state: State): void`, `load(): State | null`, `clear(): void`.

- [ ] **Step 1: Write the failing persistence test**

Create `src/game/persist.test.ts`:

```ts
import { beforeEach, describe, expect, it } from "vitest";

import { clear, load, SAVE_KEY, save } from "@/game/persist";
import { initialState } from "@/game/state";

beforeEach(() => localStorage.clear());

describe("persistence", () => {
  it("returns null when there is nothing saved", () => {
    expect(load()).toBeNull();
  });

  it("round-trips a run", () => {
    save({ ...initialState, day: 3, clock: 120 });
    expect(load()).toMatchObject({ day: 3, clock: 120 });
  });

  it("discards a save written by an older version", () => {
    localStorage.setItem(SAVE_KEY, JSON.stringify({ version: 0, state: initialState }));
    expect(load()).toBeNull();
  });

  it("discards a corrupt save rather than throwing", () => {
    localStorage.setItem(SAVE_KEY, "{{{not json");
    expect(load()).toBeNull();
  });

  it("clears a save", () => {
    save(initialState);
    clear();
    expect(load()).toBeNull();
  });
});
```

- [ ] **Step 2: Run it to verify it fails**

Run: `npx vitest run src/game/persist.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement persistence**

Create `src/game/persist.ts`:

```ts
import type { State } from "@/game/types";

export const SAVE_KEY = "icf-please:run";
export const SAVE_VERSION = 1;

export function save(state: State): void {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({ version: SAVE_VERSION, state }));
  } catch {
    // A full or unavailable localStorage must never interrupt a run.
  }
}

export function load(): State | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as { version?: number; state?: State };
    if (parsed.version !== SAVE_VERSION || !parsed.state) return null;

    return parsed.state;
  } catch {
    return null;
  }
}

export function clear(): void {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch {
    // ignored
  }
}
```

- [ ] **Step 4: Run it to verify it passes**

Run: `npx vitest run src/game/persist.test.ts`
Expected: PASS, 5 tests.

- [ ] **Step 5: Wire it into the page**

In `src/app/page.tsx`, add:

```tsx
import { useEffect, useState } from "react";
import { load, save } from "@/game/persist";
```

and inside `Home`, after the `useReducer`:

```tsx
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = load();
    if (saved) rawDispatch({ type: "RESTORE", state: saved });
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) save(state);
  }, [state, hydrated]);

  if (!hydrated) return null;
```

Add the action to `src/game/types.ts`:

```ts
  | { type: "RESTORE"; state: State }
```

and the branch to the reducer in `src/game/state.ts`, as the first case:

```ts
    case "RESTORE":
      return action.state;
```

Loading must happen in an effect rather than in `useReducer`'s initializer, because `localStorage` does not exist during the server render and the markup would not match.

- [ ] **Step 6: Run the full suite**

Run: `npm test` then `npm run typecheck` then `npm run build`
Expected: all pass. `npm run build` catches hydration and server-component mistakes the test suite cannot.

- [ ] **Step 7: Commit**

```bash
git add src/
git commit -m "feat(game): autosave and restore"
```

---

## Authoring rules for Tasks 12–15

**These rules apply to every situation authored in Tasks 12, 13, 14 and 15. Read them before writing any content.** They are restated here rather than referenced from each task because the tasks may be worked out of order by different people.

**1. VERA's register never leaks.** Her summary reads identically whether she is right or wrong. No hedging, no confidence scores, no "I'm not certain about this one". Write the wrong one, then read it beside a correct one — if you can tell which is which without checking `truth`, rewrite it. Wrong outputs must not run longer than correct ones.

**2. VERA never acts.** "I have drafted", "the entry is ready for your review". Never "I have submitted", "I have filed", "I have sent".

**3. VERA teaches vocabulary in passing, and is always correct when she does.** When a term is unavoidable she defines it inside her normal output — "This is a serious adverse event, meaning the patient was admitted to hospital, so the sponsor has to be told within 24 hours." Never a glossary, never a tooltip.

**4. The check is always mechanical.** Two numbers that should match and don't; two dates in an impossible order; a value that appears nowhere in the source; a name or ID in one document and not the other. **If resolving a situation needs clinical knowledge, the situation is broken.** Where a unit conversion is involved, the source document must print both units so the comparison stays a comparison.

**5. Source documents keep their real register** — dense, abbreviated, institutional. Do not simplify a lab report. They run 1–3 pages.

**6. Satire lives only in sponsor email.** Source documents and the roster are plain. Subjects are never the target of a joke.

**7. Every fact must agree with canon.** `docs/STUDY_FACTS.md` and `docs/RESEARCH_SITE.md` decide every dose, visit, window, threshold, contact and identifier. Dates are `DD-MMM-YYYY`.

**8. Each source document opens with the simulation banner** used throughout the corpus, so nothing in `public/content/source/` can be mistaken for a genuine document:

```
> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
```

### Outcome conventions

The fact tables in Tasks 12–15 give each situation's source values, truth, and VERA behaviour. Its `outcomes` follow from this table — apply it unless a task says otherwise:

| Situation | `accepted` | `reviewedCorrect` | `reviewedWrong` |
|---|---|---|---|
| **Data entry, `NONE`** | `{ score: {} }` | `{ score: {} }` | query email · `errorsAccepted: 1` |
| **Data entry, carries an error** | query email · `errorsAccepted: 1` | `{ score: { errorsCaught: 1 } }` | query email · `errorsAccepted: 1` |
| **Screening, truth `eligible`** | roster → `Enrolled` · `randomized: 1` | roster → `Enrolled` · `randomized: 1` | roster → `Screen failed` · query email |
| **Screening, truth `screen-fail`** | roster → `Enrolled` · `randomized: 1` · deviation email · `errorsAccepted: 1` | roster → `Screen failed (<criterion>)` · `errorsCaught: 1` | roster → `Enrolled` · `randomized: 1` · deviation email · `errorsAccepted: 1` |
| **Safety, `NONE`** | `{ score: {} }` | `{ score: {} }` | safety query email · `errorsAccepted: 1` |
| **Safety, carries an error** | safety query email · `errorsAccepted: 1` | `{ score: { errorsCaught: 1 } }` | safety query email · `errorsAccepted: 1` |

Query ids run `DQ-01NN` ascending across the run and never repeat. Query bodies state that a value does not match source and ask the site to verify and respond — they **never** say the player accepted something in error.

Two situations deliberately break this table and say so in their own tasks: **DE-1111** (Task 13) and **SAF-0033** (Task 14), where `accepted` and `reviewedCorrect` are identical and both carry harm.

---

### Task 12: Day 1 — five situations

**Files:**
- Create: `public/content/source/scr-0217.md`, `de-1109.md`, `saf-0031.md`, `de-1110.md`, `de-1114.md`
- Modify: `src/game/script.ts` (replace the fixture re-export with day 1)
- Test: `src/game/script.test.ts`

**Interfaces:**
- Consumes: `Situation`, `FormValues` (Task 1); `FORMS` field names (Task 7).
- Produces: `SCRIPT: Situation[]` containing days 1 through 4. This task adds day 1 only; Tasks 13–15 append.

**Day 1 facts.** Day 1's first three items are manual — `manual: true`, no `vera` block. The morning runs 8:00 to 11:30.

| Item | Subject | Form | Source says | Truth | VERA |
|---|---|---|---|---|---|
| SCR-0217 | 1047-017 C. Hughes | eligibility | EASI 22.4 · vIGA-AD 4 · BSA 31% · NRS 7 · TCS last applied 28-DEC-2023, Day 1 planned 09-JAN-2024 (12 days, washout is 1 week) | `eligible` — every criterion met with room to spare | none (manual) |
| DE-1109 | 1047-009 S. Nakashima | vitals | BP 128/82 mmHg · pulse 72 bpm · temp 36.8 °C · weight 81.4 kg | those four values | none (manual) |
| SAF-0031 | 1047-006 M. Vasquez | safety | Phone note: fever 38.4 °C six hours after the Week 12 dose, resolved within 24 h, no hospitalization, no medical intervention | `not-serious` — the note matches none of the seriousness criteria in the safety reporting manual | none (manual) |
| DE-1110 | 1047-003 P. Sunderland | labs | ALT 24 · AST 21 · creatinine 0.9 · eosinophils 0.38 ×10⁹/L (380 cells/µL) | those four values, `NONE` | states exactly those values |
| DE-1114 | 1047-008 H. Brenner | labs | ALT 31 · AST 27 · creatinine 1.0 · **eosinophils 0.42 ×10⁹/L (420 cells/µL)** | eos is `0.42` | **states eosinophils as 4.2 ×10⁹/L** — a factor-of-ten slip. The source prints both units, so the check is reading one number off the page. |

- [ ] **Step 1: Write the five source documents**

Create each file under `public/content/source/`. Each opens with the banner from authoring rule 8. Model — `public/content/source/de-1110.md`:

```markdown
> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**

MERIDIAN CENTRAL LABORATORIES                    Indianapolis, IN
================================================================
CENTRAL SAFETY LABORATORY REPORT

  Protocol .............. 20210143 (ROCKET-Horizon)
  Site .................. 1047  Cascade Dermatology, Portland OR
  Participant ID ........ 1047-003
  Visit ................. Week 12 (Day 85)
  Collection date ....... 03-JAN-2024  09:14 PT
  Received .............. 04-JAN-2024  06:02 ET
  Reported .............. 05-JAN-2024  11:40 ET
  Requisition ........... MCL-3318827
  Field 5 (participant initials) .... not collected for this study

----------------------------------------------------------------
CHEMISTRY                          RESULT     UNITS      REF RANGE
----------------------------------------------------------------
  Alanine aminotransferase (ALT)      24      U/L         7 -  56
  Aspartate aminotransferase (AST)    21      U/L        10 -  40
  Creatinine                         0.9      mg/dL     0.6 - 1.3
  eGFR                                94      mL/min/1.73m²   >60
  Glucose                             88      mg/dL      70 - 99
  Total bilirubin                    0.6      mg/dL     0.2 - 1.2

----------------------------------------------------------------
HEMATOLOGY                         RESULT     UNITS      REF RANGE
----------------------------------------------------------------
  Eosinophils, absolute             0.38      x10^9/L  0.00 - 0.50
                                   (380)      cells/uL
  Platelets                          241      x10^9/L   150 - 400

  No alert (panic) values. Reviewed by MCL clinical pathology.
```

Note field 5 on the requisition block. It appears on every lab report in the run, always reading `not collected for this study`, and it is the thing the ending names. Do not omit it and do not draw attention to it.

- [ ] **Step 2: Write the failing script test**

Create `src/game/script.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { FORMS } from "@/game/forms";
import { SCRIPT } from "@/game/script";

describe("SCRIPT — day 1", () => {
  const day1 = SCRIPT.filter((s) => s.day === 1);

  it("has five situations", () => {
    expect(day1).toHaveLength(5);
  });

  it("opens with three manual items totalling 3.5 hours", () => {
    const manual = day1.slice(0, 3);
    expect(manual.every((s) => s.manual === true)).toBe(true);
    expect(manual.every((s) => s.vera === undefined)).toBe(true);
    expect(manual.reduce((t, s) => t + s.cost, 0)).toBe(210);
  });

  it("gives the manual morning one item of each type", () => {
    expect(day1.slice(0, 3).map((s) => s.type).sort()).toEqual([
      "data-entry",
      "safety",
      "screening",
    ]);
  });

  it("gives every assisted item a VERA block", () => {
    expect(day1.slice(3).every((s) => s.vera !== undefined)).toBe(true);
  });

  it("only uses field names its form defines", () => {
    for (const s of day1) {
      const allowed = FORMS[s.form].fields.map((f) => f.name);
      expect(Object.keys(s.truth.entry).every((k) => allowed.includes(k))).toBe(true);
    }
  });

  it("gives every situation a source document", () => {
    expect(day1.every((s) => s.source.length > 0)).toBe(true);
  });

  it("gives verdict-bearing forms a truth verdict", () => {
    for (const s of day1) {
      if (FORMS[s.form].verdict) expect(s.truth.verdict).toBeDefined();
    }
  });
});
```

- [ ] **Step 3: Run it to verify it fails**

Run: `npx vitest run src/game/script.test.ts`
Expected: FAIL — `SCRIPT` still re-exports the three fixtures.

- [ ] **Step 4: Write day 1**

Replace `src/game/script.ts`. Two situations are given in full as models — one manual, one assisted. Author the other three from the fact table above, following the same shape:

```ts
import type { Situation } from "@/game/types";

const DAY_1: Situation[] = [
  {
    id: "SCR-0217",
    day: 1,
    type: "screening",
    subject: "1047-017",
    title: "Eligibility review",
    blurb:
      "Screening packet, eleven pages. No assistant provisioned. Read it and complete " +
      "the eligibility form.",
    cost: 90,
    manual: true,
    source: ["scr-0217.md"],
    form: "eligibility",
    truth: {
      error: "NONE",
      entry: { easi: "22.4", viga: "4", bsa: "31", nrs: "7" },
      verdict: "eligible",
    },
    outcomes: {
      accepted: { score: {} },
      reviewedCorrect: {
        score: { randomized: 1 },
        roster: { subject: "1047-017", status: "Enrolled" },
      },
      reviewedWrong: {
        score: {},
        roster: { subject: "1047-017", status: "Screen failed" },
        email: {
          id: "DQ-0109",
          from: "Amgen Data Management",
          subject: "Query DQ-0109 — subject 1047-017",
          body:
            "Eligibility determination recorded as screen failure. Source documents " +
            "indicate all inclusion criteria were met. Please verify and respond.",
        },
      },
    },
    debrief: {
      line: "Eligible on every criterion. EASI 22.4 against a threshold of 16.",
    },
  },

  // DE-1109 — manual vitals. See the fact table.
  // SAF-0031 — manual safety. See the fact table.

  {
    id: "DE-1110",
    day: 1,
    type: "data-entry",
    subject: "1047-003",
    title: "Week 12 central labs",
    blurb: "Chemistry and haematology panel returned from the central laboratory.",
    cost: 60,
    source: ["de-1110.md"],
    form: "labs",
    vera: {
      summary:
        "The Week 12 panel for 1047-003 is complete and within reference range on every " +
        "analyte. ALT 24 U/L, AST 21 U/L, creatinine 0.9 mg/dL, absolute eosinophils " +
        "0.38 ×10⁹/L. No alert values were flagged by the laboratory. The entry is " +
        "drafted and ready for your review.",
      entry: { alt: "24", ast: "21", creatinine: "0.9", eos: "0.38" },
    },
    truth: {
      error: "NONE",
      entry: { alt: "24", ast: "21", creatinine: "0.9", eos: "0.38" },
    },
    outcomes: {
      accepted: { score: {} },
      reviewedCorrect: { score: {} },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0110",
          from: "Amgen Data Management",
          subject: "Query DQ-0110 — subject 1047-003",
          body: "Reported chemistry values do not match source. Please verify and respond.",
        },
      },
    },
    debrief: { line: "She was right. Reading it cost an hour and changed nothing." },
  },

  // DE-1114 — assisted labs carrying the normalization error. See the fact table.
];

export const SCRIPT: Situation[] = [...DAY_1];
```

The three commented lines are the situations to author from the fact table — every value they need is specified there. Delete each comment as you replace it.

- [ ] **Step 5: Run the tests to verify they pass**

Run: `npx vitest run src/game/script.test.ts`
Expected: PASS, 7 tests.

Then `npm test` — the fixture-based tests still pass because they import `FIXTURE_SCRIPT` directly, not `SCRIPT`.

- [ ] **Step 6: Play day 1 in the browser**

```bash
npm run dev
```

Open `http://localhost:3000`, sign in, and work all five items. Confirm: the rail reads "No assistant provisioned" for the first three, VERA appears for the last two, the clock reads 11:30 after the third item, and the day-end summary lists five worked items and the cheerful sponsor nudge.

- [ ] **Step 7: Commit**

```bash
git add public/content/source src/game/
git commit -m "content: day 1 — the manual morning and VERA's arrival"
```

---

### Task 13: Day 2 — the slack day and the uncatchable lab

**Files:**
- Create: `public/content/source/de-1111.md`, `saf-0034.md`, `de-1112.md`, `saf-0032.md`
- Modify: `src/game/script.ts` (append `DAY_2`)
- Modify: `src/game/script.test.ts` (add day-2 assertions)

**Interfaces:**
- Consumes: `Situation` (Task 1); `SCRIPT` (Task 12).
- Produces: `SCRIPT` extended with day 2.

**This task carries the run's most important situation.** Read the whole table before writing anything.

| Item | Subject | Form | Source says | Truth | VERA |
|---|---|---|---|---|---|
| DE-1111 | 1047-005 T. Channing | labs | Week 16 panel headed `1047-005`: ALT 19 · AST 22 · creatinine 0.8 · eos 0.31 ×10⁹/L (310 cells/µL). Requisition MCL-3319104. Field 5 reads `not collected for this study`. | `UNCATCHABLE`. Truth entry equals exactly what is printed — **a player who verifies is marked correct** | states exactly those values, correctly |
| SAF-0034 | 1047-010 E. Fontaine | safety | Nurse note dated 05-JAN-2024 describing a mild injection-site reaction at the **Week 16** visit (Day 113, 04-JAN-2024) | `not-serious` | **attributes the event to the Week 12 visit (Day 85, 06-DEC-2023)**. Right event, wrong visit — catchable by comparing the note's date to the visit schedule |
| DE-1112 | 1047-007 K. Oyelowo | vitals | BP 118/76 · pulse 68 · temp 36.6 · weight 74.2 | those values, `NONE` | states exactly those values |
| SAF-0032 | 1047-002 D. Achterberg | safety | Two-page nurse note. Page 1: mild headache, resolved. **Final paragraph of page 2: "pt also reports two days of worsening eczema on both forearms since 04-JAN; declined topical rx."** | `not-serious`, but the entry must record **both** events | **reports only the headache.** The second event is in the last paragraph and nothing on screen looks wrong |

**DE-1111 — how the uncatchable item must be built.** The specimen drawn from 1047-005 was reported by the laboratory under 1047-010's identifier, and 1047-010's under 1047-005's. Everything downstream of that identifier agrees with everything else, so:

- `truth.entry` is **identical** to `vera.entry`. Verifying finds nothing wrong, because nothing on the desk is wrong.
- `outcomes.accepted` and `outcomes.reviewedCorrect` must be **identical objects** — same roster change, same score, same harm. This is the mechanic: the item punishes the player the same whether or not they read the source.
- `truth.error` is `"UNCATCHABLE"`, which is what keeps it out of the calibration's catchable count and routes it to its own heading in the ending.
- `debrief.category` is `2`.
- The roster change lands on **1047-005 T. Channing → `Withdrawn (hospitalized)`**.

Do not add a tell. Do not make the collection time slightly wrong, do not make the requisition number look odd, do not have VERA phrase it differently. If a careful player can find it, the situation is broken and the ending's central claim becomes a lie.

- [ ] **Step 1: Write the four source documents**

Under `public/content/source/`, each opening with the simulation banner. `de-1111.md` uses the same lab-report layout as `de-1110.md` from Task 12 — same headings, same field-5 line, same reference-range column — because a specimen mix-up upstream produces a report that looks exactly like every other report.

- [ ] **Step 2: Add the failing day-2 assertions**

Append to `src/game/script.test.ts`:

```ts
describe("SCRIPT — day 2", () => {
  const day2 = SCRIPT.filter((s) => s.day === 2);
  const uncatchable = day2.find((s) => s.truth.error === "UNCATCHABLE");

  it("has four situations, none of them deep", () => {
    expect(day2).toHaveLength(4);
    expect(day2.every((s) => s.cost === 60)).toBe(true);
  });

  it("carries exactly one uncatchable situation", () => {
    expect(uncatchable).toBeDefined();
  });

  it("makes the uncatchable item agree with itself", () => {
    expect(uncatchable!.truth.entry).toEqual(uncatchable!.vera!.entry);
  });

  it("punishes the uncatchable item identically whether or not it was verified", () => {
    expect(uncatchable!.outcomes.accepted).toEqual(uncatchable!.outcomes.reviewedCorrect);
  });

  it("files the uncatchable item under category 2", () => {
    expect(uncatchable!.debrief.category).toBe(2);
  });

  it("puts the catchable misattribution on the same day", () => {
    expect(day2.some((s) => s.truth.error === "misattribution")).toBe(true);
  });

  it("still lets her be right once", () => {
    expect(day2.filter((s) => s.truth.error === "NONE")).toHaveLength(1);
  });
});
```

- [ ] **Step 3: Run it to verify it fails**

Run: `npx vitest run src/game/script.test.ts`
Expected: FAIL — day 2 has no situations.

- [ ] **Step 4: Write day 2**

Add a `DAY_2: Situation[]` array to `src/game/script.ts` from the fact table above, and extend the export:

```ts
export const SCRIPT: Situation[] = [...DAY_1, ...DAY_2];
```

- [ ] **Step 5: Run the tests to verify they pass**

Run: `npm test` then `npm run typecheck`
Expected: all pass.

- [ ] **Step 6: Commit**

```bash
git add public/content/source src/game/
git commit -m "content: day 2 — the mislabelled specimen and the item that teaches its shape"
```

---

### Task 14: Day 3 — the enrolment push

**Files:**
- Create: `public/content/source/scr-0219.md`, `scr-0220.md`, `de-1113.md`, `saf-0033.md`, `de-1115.md`
- Modify: `src/game/script.ts` (append `DAY_3`)
- Modify: `src/game/script.test.ts` (add day-3 assertions)

**Interfaces:**
- Consumes: `Situation` (Task 1); `SCRIPT` (Task 13).
- Produces: `SCRIPT` extended with day 3.

| Item | Subject | Form | Source says | Truth | VERA |
|---|---|---|---|---|---|
| SCR-0219 | 1047-019 R. Amaya | eligibility | EASI **15.8** · vIGA-AD 3 · BSA 14% · NRS 6 | `screen-fail`, failed criterion EASI ≥16 | **"meets all inclusion criteria"** and drafts `eligible`. She states 15.8 accurately and calls it eligible anyway |
| SCR-0220 | 1047-020 J. Whitlock | eligibility | EASI 19.2 · vIGA-AD 4 · BSA 22% · NRS 8 · **TCS last applied 01-JAN-2024, Day 1 planned 09-JAN-2024 — 8 days** | `eligible`. Amendment 3 §5.3 sets the TCS washout at **1 week**; 8 days clears it | **screen-fail on washout**, citing a two-week TCS washout. That was Amendment 2's rule. The protocol header reads `Amendment 3 (29-NOV-2023)` |
| DE-1113 | 1047-011 W. Dorsey | labs | Week 20 panel: AST 26 · creatinine 1.1 · eos 0.29 ×10⁹/L (290 cells/µL). **The chemistry panel has no ALT row — the analyte was not reported** | `alt` is empty string `""`; the other three as printed | **states "ALT 68 U/L, mildly elevated"**. There is no ALT anywhere in the source |
| SAF-0033 | 1047-001 R. Jones | safety | Discharge summary: admitted 09-JAN-2024 with cellulitis of the left lower leg, IV antibiotics, discharged 11-JAN-2024 | `serious` — hospitalization | correct, and defines the term in passing. **Category 1** |
| DE-1115 | 1047-002 D. Achterberg | labs | Week 24 panel: ALT 22 · AST 25 · creatinine 0.9 · **eos 0.71 ×10⁹/L (710 cells/µL), flagged `H` against a range of 0.00–0.50** | those four values | **reports the panel as within range and does not mention the flagged eosinophil count.** Omission |

**SAF-0033 is category 1 and must never read as the player's fault.** VERA is correct. Both `accepted` and `reviewedCorrect` produce the same roster change — **1047-001 R. Jones → `Withdrawn (hospitalized)`** — and both set `harmed: 1`. `debrief.category` is `1`. Its debrief line states what happened and assigns no blame. Cellulitis appears twice on the real rocatinlimab SAE list in `STUDY_FACTS.md` §13; this is the drug doing what the drug does.

- [ ] **Step 1: Write the five source documents**

Under `public/content/source/`, each with the simulation banner. `de-1113.md` must simply **not have an ALT row** — no "not reported" annotation, no gap where one obviously belongs. A panel that omits an analyte looks unremarkable; that is what makes the fabrication cheap to catch only if you actually look.

- [ ] **Step 2: Add the failing day-3 assertions**

Append to `src/game/script.test.ts`:

```ts
describe("SCRIPT — day 3", () => {
  const day3 = SCRIPT.filter((s) => s.day === 3);
  const cat1 = day3.find((s) => s.debrief.category === 1);

  it("has five situations, two of them screening packets", () => {
    expect(day3).toHaveLength(5);
    expect(day3.filter((s) => s.cost === 90)).toHaveLength(2);
  });

  it("carries the background-risk harm", () => {
    expect(cat1).toBeDefined();
    expect(cat1!.truth.error).toBe("NONE");
  });

  it("harms the subject whether or not the player verified", () => {
    expect(cat1!.outcomes.accepted).toEqual(cat1!.outcomes.reviewedCorrect);
  });

  it("blames nobody for the background-risk harm", () => {
    expect(cat1!.debrief.line).not.toMatch(/should have|missed|failed to|error/i);
  });

  it("carries the stale-context and threshold situations", () => {
    const errors = day3.map((s) => s.truth.error);
    expect(errors).toContain("stale-context");
    expect(errors).toContain("threshold");
  });

  it("fabricates a value that appears nowhere in truth", () => {
    const fab = day3.find((s) => s.truth.error === "fabrication")!;
    const stated = Object.values(fab.vera!.entry);
    const real = Object.values(fab.truth.entry);
    expect(stated.some((v) => !real.includes(v))).toBe(true);
  });
});
```

- [ ] **Step 3: Run it to verify it fails**

Run: `npx vitest run src/game/script.test.ts`
Expected: FAIL — day 3 has no situations.

- [ ] **Step 4: Write day 3, then run and commit**

Add `DAY_3: Situation[]` from the fact table and extend the export to `[...DAY_1, ...DAY_2, ...DAY_3]`.

Run: `npm test` then `npm run typecheck`. Expected: all pass.

```bash
git add public/content/source src/game/
git commit -m "content: day 3 — the enrolment push and the hospitalization nobody caused"
```

---

### Task 15: Day 4 — the last decisions

**Files:**
- Create: `public/content/source/scr-0221.md`, `de-1116.md`, `scr-0222.md`, `saf-0035.md`, `scr-0218.md`
- Modify: `src/game/script.ts` (append `DAY_4`)
- Modify: `src/game/script.test.ts` (add day-4 assertions)

**Interfaces:**
- Consumes: `Situation` (Task 1); `SCRIPT` (Task 14).
- Produces: the complete nineteen-situation `SCRIPT`.

| Item | Subject | Form | Source says | Truth | VERA |
|---|---|---|---|---|---|
| SCR-0221 | 1047-021 B. Ferreira | eligibility | EASI 18.6 · vIGA-AD 4 · BSA 19% · NRS 7. **The concomitant medication log records no washout date for the subject's topical tacrolimus** — the row is blank | `screen-fail`, because the washout cannot be established from source | **states "TCI discontinued 22-DEC-2023, washout satisfied"** and drafts `eligible`. That date is nowhere in the packet |
| DE-1116 | 1047-006 M. Vasquez | vitals | BP 124/78 · pulse 70 · **temp 37.2 °C (98.9 °F)** · **weight 78.9 kg (173.9 lb)** | those values in metric | **records weight as 173.9** — the imperial figure in the metric field. Both units are printed on the worksheet |
| SCR-0222 | 1047-022 | eligibility | EASI 24.1 · vIGA-AD 4 · BSA 28% · NRS 8 · TCS last applied 20-DEC-2023 | `eligible`, `NONE` | correct |
| SAF-0035 | 1047-005 T. Channing | safety | Phone note: mild transient nausea, no intervention, resolved same day | `not-serious`, `NONE` | correct |
| SCR-0218 | 1047-018 L. Lit | eligibility | EASI 26.8 · vIGA-AD 4 · BSA 35% · NRS 9 · TCS last applied 15-DEC-2023 | `eligible`, `NONE`. Plainly eligible on every criterion | correct |

**SCR-0218 is last in the script and stays last.** It carries no error and nothing to catch. It is the final decision of the run, and a player reaching it has already spent four days learning when to look.

- [ ] **Step 1: Write the five source documents**

Under `public/content/source/`, each with the simulation banner. For `scr-0221.md`, the concomitant medication log's washout column must be genuinely **blank** for the tacrolimus row — not "unknown", not "TBC". A blank cell is what a real incomplete log looks like, and it is what makes VERA's confident date a fabrication rather than a misreading.

- [ ] **Step 2: Add the failing day-4 assertions**

Append to `src/game/script.test.ts`:

```ts
describe("SCRIPT — day 4", () => {
  const day4 = SCRIPT.filter((s) => s.day === 4);

  it("has five situations, three of them screening packets", () => {
    expect(day4).toHaveLength(5);
    expect(day4.filter((s) => s.cost === 90)).toHaveLength(3);
  });

  it("ends the run on L. Lit", () => {
    expect(SCRIPT.at(-1)!.id).toBe("SCR-0218");
    expect(SCRIPT.at(-1)!.subject).toBe("1047-018");
  });

  it("lets her be right on the last decision of the run", () => {
    expect(SCRIPT.at(-1)!.truth.error).toBe("NONE");
  });
});
```

- [ ] **Step 3: Run it to verify it fails, then write day 4**

Run: `npx vitest run src/game/script.test.ts` — expected FAIL. Add `DAY_4: Situation[]` and extend the export to all four days.

- [ ] **Step 4: Play the whole run**

```bash
npm run dev
```

Play all four days end to end without skipping. Confirm the ending reaches all three beats and that the calibration numbers match what you actually did.

- [ ] **Step 5: Commit**

```bash
git add public/content/source src/game/
git commit -m "content: day 4 — the last decisions of the run"
```

---

### Task 16: Design invariants

**Files:**
- Create: `src/game/invariants.test.ts`

**Interfaces:**
- Consumes: `SCRIPT` (Task 15).
- Produces: nothing. This task is entirely tests.

These encode the spec's §4 so that editing the script cannot silently break the game's argument.

- [ ] **Step 1: Write the invariants**

Create `src/game/invariants.test.ts`:

```ts
import { describe, expect, it } from "vitest";

import { SCRIPT } from "@/game/script";
import type { ItemType } from "@/game/types";

const assisted = SCRIPT.filter((s) => s.vera !== undefined);
const wrong = assisted.filter((s) => s.truth.error !== "NONE");
const right = assisted.filter((s) => s.truth.error === "NONE");

describe("the run's shape", () => {
  it("is nineteen situations across four days", () => {
    expect(SCRIPT).toHaveLength(19);
    expect([1, 2, 3, 4].map((d) => SCRIPT.filter((s) => s.day === d).length)).toEqual([
      5, 4, 5, 5,
    ]);
  });

  it("has sixteen assisted situations", () => {
    expect(assisted).toHaveLength(16);
  });

  it("has six situations where she is simply right", () => {
    expect(right).toHaveLength(6);
  });

  it("uses every error type in the taxonomy", () => {
    const used = new Set(wrong.map((s) => s.truth.error));
    expect([...used].sort()).toEqual([
      "UNCATCHABLE",
      "fabrication",
      "misattribution",
      "normalization",
      "omission",
      "stale-context",
      "threshold",
    ]);
  });

  it("has exactly one uncatchable situation", () => {
    expect(wrong.filter((s) => s.truth.error === "UNCATCHABLE")).toHaveLength(1);
  });

  it("has one category-1 harm and one category-2 harm", () => {
    expect(SCRIPT.filter((s) => s.debrief.category === 1)).toHaveLength(1);
    expect(SCRIPT.filter((s) => s.debrief.category === 2)).toHaveLength(1);
  });

  it("gives every situation a unique id", () => {
    expect(new Set(SCRIPT.map((s) => s.id)).size).toBe(19);
  });
});

describe("leak guards", () => {
  it("lets her be right at least once in every item type", () => {
    for (const type of ["screening", "data-entry", "safety"] as ItemType[]) {
      const ofType = assisted.filter((s) => s.type === type);
      expect(ofType.filter((s) => s.truth.error === "NONE").length).toBeGreaterThan(0);
    }
  });

  it("never makes a whole day wrong", () => {
    for (const day of [1, 2, 3, 4]) {
      const ofDay = assisted.filter((s) => s.day === day);
      if (ofDay.length === 0) continue;
      expect(ofDay.some((s) => s.truth.error === "NONE")).toBe(true);
    }
  });

  it("does not make her wrong outputs longer than her right ones", () => {
    const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;
    const words = (s: string) => s.split(/\s+/).filter(Boolean).length;

    const wrongLen = mean(wrong.map((s) => words(s.vera!.summary)));
    const rightLen = mean(right.map((s) => words(s.vera!.summary)));

    // Within 25% either way. A systematic difference teaches players to count words.
    expect(Math.abs(wrongLen - rightLen) / rightLen).toBeLessThan(0.25);
  });

  it("never lets her hedge", () => {
    const hedges =
      /\b(?:I think|I believe|probably|possibly|might be|may be|not certain|unsure|appears to|seems to|I'm not sure|please double[- ]check|worth checking)\b/i;

    for (const s of assisted) {
      expect(s.vera!.summary, `${s.id} hedges`).not.toMatch(hedges);
    }
  });

  it("never lets her claim to have acted", () => {
    const acted = /\bI have (?:submitted|filed|sent|signed|entered|saved|reported)\b/i;

    for (const s of assisted) {
      expect(s.vera!.summary, `${s.id} claims to have acted`).not.toMatch(acted);
    }
  });
});
```

- [ ] **Step 2: Run them**

Run: `npx vitest run src/game/invariants.test.ts`
Expected: PASS, 13 tests. **Any failure here is a content bug, not a test bug** — fix the script, do not relax the assertion. The one exception is the word-length tolerance: if it fails, rewrite the offending summary rather than widening the margin.

- [ ] **Step 3: Run everything and build**

Run: `npm test`, `npm run typecheck`, `npm run check`, `npm run build` — the same four checks CI runs
Expected: all pass.

- [ ] **Step 4: Commit**

```bash
git add src/game/invariants.test.ts
git commit -m "test(game): lock the design invariants and VERA's register"
```

---

## Done

After Task 16 the run is complete: sign in, four days, nineteen situations, three ending beats, autosave, and a skip control for anyone who will not play it end to end.

