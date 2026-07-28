# ICF Please — one playable run

**Status:** design agreed 2026-07-28. Extends [`VISION.md`](../../../VISION.md) with the decisions
VISION leaves open, and corrects three places where it does not close.

This document specifies **one complete four-day run**: the setting, the roster, all nineteen
situations, the time arithmetic, the consequence rules, and the architecture. It assumes VISION.md
has been read and does not restate it. Where the two disagree, this document wins and says so.

---

## 1. Decisions taken

Recorded so none is silently reopened.

| # | Decision | Rationale |
|---|---|---|
| R1 | **`Batch review all` is cut.** Two verbs only: `Accept` (30 min) and `Manually Review` (60/90 min). | At 30 min flat regardless of count, batch strictly dominated `Accept` — batching a five-item queue ended the day at 8:30 and made `Accept` a dead verb. The accept-vs-verify tension is already the whole game. **VISION.md needs the batch row struck from its verb table and the "her batch review opens as a panel inside the rail" line removed.** |
| R2 | **The run is Mon 08 – Thu 11 Jan 2024**, site at 11 randomized of 12 contracted, study-wide randomization closing Fri 12-JAN-2024 08:00 PT. | RESEARCH_SITE.md records 14 randomized against a contract of 12 — already over target, so the enrollment ladder could not bite. Setting the run in this week makes the site's recorded final numbers the *good outcome of this exact week*. Amendment 3 being six weeks old is what makes `stale context` live ammunition. |
| R3 | **`Manually Review` submits typed values for data entry, and a single verdict for screening and safety.** | Both are checkable against ground truth. Deriving the verdict from typed values would remove judgment from screening; verdict-only would delete the data-entry type and with it the whole audit-integrity channel. |
| R4 | **The document viewer has full-text find.** | Time is charged per item worked, never per lookup, so find costs the clock nothing. It makes the corpus usable without making it weightless — omission errors stay hard, because you cannot search for what is not there. |
| R5 | **Queries live in the Inbox and are auto-billed at day start.** Each open query costs 30 minutes off the following day, spent before the player touches the queue. | Preserves "three item types and nothing else". The tax is felt as a morning already gone rather than as another form. |
| R6 | **Both escalation ladders are scripted.** Enrollment rungs 1/2/3 at day-ends 1/2/3; audit rungs 1/2 at day-ends 2/3. | Guarantees every run reaches rung 3. Their accumulated time costs are what make day 4 overflow — see §2. Sponsors escalate on schedule regardless of site performance. |
| R7 | **The Inbox is strictly read-only.** No reply, no compose, ever. | Email is the consequence channel. "Can I stop using VERA" stays a rhetorical dead end the player feels rather than tests. |
| R8 | **Subjects appear as `1047-018 · L. Lit`** — ID and initial-plus-surname together. | VISION contradicts itself (§the world says ID; the roster example says `R. Jones`). The ID is what every document and email uses; the name is what makes a status change land. |
| R9 | **VERA arrives in place on the desk.** The rail that has read "No assistant provisioned for this site" all morning simply becomes her. No changeover screen. | Matches VISION's screen list, and is quieter and more sinister than an announcement. |
| R10 | **The whole 15-document library is reachable from a Documents window, free, at any time.** | Looking in the wrong place is most of what "drowning in paperwork" means. Rendering markdown costs the same for fifteen documents as for five. |
| R11 | **Day 1's three manual items are fully scored**, but authored so a careful reader cannot miss the answer. | Nothing in the game is a sandbox. A rusher can still botch them and eat a day-2 query, which is precisely the lesson. |
| R12 | **Autosave to localStorage, plus a visible `Skip day` control on the day-end summary.** Skipping auto-accepts the remaining queue and runs the normal day-end. | Accepted as the one non-diegetic element. It sits on the day-end summary, which is already a framing screen rather than the desk, so the desk stays pure. No authored mid-run states are needed. |
| R13 | **Full windowing is kept** — drag, z-order, viewport clamp, taskbar, auto-placement. | It is the argument VISION makes about the work: the desk is too small. Accepted as the largest single implementation cost. |
| R14 | **Nineteen situations, 5 / 4 / 5 / 5, graded six deep and thirteen thin.** | See §2. An earlier cut to fourteen was withdrawn: it made verify-everything free and killed the waitlist. Authoring savings come from source-document *depth*, not item count. |
| R15 | **Three reusable eCRF templates** — vitals, lab panel, screening eligibility. Per-item source documents run 1–3 pages. | The paperwork weight comes from the reference library, which already exists. Item source only has to carry one error. |
| R16 | **Situations are statically authored. No LLM calls in the run.** | Per VISION. The `vera` block is isolated so a live call can replace it later without touching the engine. |

### Superseded

VISION.md's prototype-era inheritances do **not** apply: no meters, no `Escalate to PI`, no
refuse/flag verb, no batch review. The prototype's fiction (Site 108, Solanta, DRM-204, Dr. Alvarez)
is replaced throughout by canon (Site 1047, Amgen, ROCKET-Horizon, Dr. Okonkwo). Only the
prototype's *aesthetic* carries over.

---

## 2. The time arithmetic

This is the load-bearing section. Everything else is content.

An eight-hour day is sixteen half-hour blocks. `Accept` costs one block. `Manually Review` costs
**three** blocks for a screening packet and **two** for data entry or safety. Day-start taxes are
deducted before the player touches the queue, so the day simply begins later.

| | Items | Cost if fully manual | Taxes | Blocks available | Result |
|---|---|---|---|---|---|
| Day 1 | 5 (3 forced manual) | 11 | none | 16 | Always completes, worst case 13:30 |
| Day 2 | 4, all thin | 8 | 0–2 (day-1 queries) | 14–16 | Comfortable. The clean day |
| Day 3 | 5, three deep | **13** | 2–3 (audit rung 1) | 13–14 | Exactly fills at best; overflows at worst |
| Day 4 | 5, two deep | **12** | 6–7 (see below) | 9–10 | **Overflows by 2–3 blocks with zero rollover** |

**Day 4's taxes are the ladders coming due**, which is why both are scripted:

| Source | Fired at | Cost on day 4 |
|---|---|---|
| Enrollment rung 3 — daily enrollment reporting | day-end 3 | 1 block |
| Enrollment rung 2 — "our ops lead has asked for a call Thursday" | day-end 2 | 2 blocks |
| Audit rung 2 — for-cause audit announced, document prep | day-end 3 | 2 blocks |
| Open queries | rolling | 1–2 blocks |

So a player who verifies everything **always** loses something on day 4, without needing to have made
a single mistake. Two of day 4's five items are screening packets, and randomization closes Friday
morning, so what is lost is a patient. That is the design landing, and it is earned by mechanics
already in VISION rather than by adding content.

**Day 3 is where the waitlist bites.** Cost 13, available 13–14. It fits only if nothing rolled from
day 2 and query volume is at its floor. Carry one rolled item or one extra query into Wednesday and
something slips to Thursday — where the day already overflows. Item SCR-0218, L. Lit, sits on day 3
with a window closing Thursday at 4:00 PM.

**Day 2 is deliberately slack** — eight blocks against fifteen. The player has every resource to
verify all four items, and should. It is also where the uncatchable item sits (§5), so the one error
they cannot catch lands on the day they had the most time to try.

**Why five a day is the floor.** At three items a day the whole structure collapses: three items by
hand is at most four hours, even day 4 leaves six and a half, verify-everything wins comfortably,
nothing rolls over, no window expires, and the waitlist never fires.

---

## 3. Setting and roster

Site 1047, Cascade Dermatology & Clinical Research, Portland, Oregon. Protocol 20210143 Amendment 3
(29-NOV-2023) in force; ICF v4.0.1. The player is the coordinator; every decision is theirs.

**11 randomized of 12 contracted. Study-wide randomization closes Fri 12-JAN-2024 08:00 PT** — stated
on the sign-in screen and immovable.

### Roster at 8:00 AM Monday

```
ENROLLED
  1047-001  R. Jones        Enrolled          Week 16
  1047-002  D. Achterberg   Enrolled          Week 24
  1047-003  P. Sunderland   Enrolled          Week 12
  1047-005  T. Channing     Enrolled          Week 16
  1047-006  M. Vasquez      Enrolled          Week 12
  1047-007  K. Oyelowo      Enrolled          Week 4
  1047-008  H. Brenner      Enrolled          Week 12
  1047-009  S. Nakashima    Enrolled          Week 8
  1047-010  E. Fontaine     Enrolled          Week 16
  1047-011  W. Dorsey       Enrolled          Week 20
  1047-004  L. Auguste      Withdrawn (by subject)

SCREENING
  1047-017  C. Hughes       Window closes Wed 10-JAN
  1047-018  L. Lit          Window closes Thu 11-JAN
  1047-019  R. Amaya        Window closes Fri 12-JAN
  1047-020  J. Whitlock     Window closes Fri 12-JAN

  1047-012 … 1047-016       Screen failed
```

`1047-021 · B. Ferreira` consents Tuesday and `1047-022` consents Wednesday; both join the roster
mid-run with windows closing Fri 12-JAN, which the study-wide close reaches first.

Eleven randomized, five prior screen failures, four in screening — twenty screening numbers issued,
IDs 001–020. Two more consent during the run, reaching 22. A good run randomizes three more, ending
at **14 randomized of 22 screened**.

> **Known divergence.** RESEARCH_SITE.md §5 records the site's end-of-study numbers as 23 screened /
> 9 screen failures. This run reaches 22 / 8. Randomization closes Friday morning, so no further
> subject can screen after it. Resolve by editing RESEARCH_SITE.md §5 to 22 and 8, or by leaving it
> and treating the discrepancy as immaterial. **Do not** resolve it by adding a roster line with no
> corresponding queue item — a subject who expires without the player ever having a chance to work
> them is unfair in a way the design does not earn.

---

## 4. The nineteen situations

`NONE` means VERA is simply right. `UNCATCHABLE` is not a taxonomy row; it is its own thing, handled
at §5.

| # | Day | Code | Subject | Type | VERA | Blocks | Depth |
|---|---|---|---|---|---|---|---|
| 1 | 1 | SCR-0217 | 1047-017 C. Hughes | Screening | — *manual* | 3 | deep |
| 2 | 1 | DE-1109 | 1047-009 S. Nakashima | Data entry | — *manual* | 2 | thin |
| 3 | 1 | SAF-0031 | 1047-006 M. Vasquez | Safety | — *manual* | 2 | thin |
| | | *11:30 → noon. Sponsor email lands. The rail fills.* | | | | | |
| 4 | 1 | DE-1110 | 1047-003 P. Sunderland | Data entry | `NONE` | 2 | thin |
| 5 | 1 | DE-1114 | 1047-008 H. Brenner | Data entry | **Normalization** | 2 | thin |
| 6 | 2 | DE-1111 | 1047-005 T. Channing | Data entry | **`UNCATCHABLE` — mislabeled lab** | 2 | thin |
| 7 | 2 | SAF-0034 | 1047-010 E. Fontaine | Safety | **Misattribution** (catchable) | 2 | thin |
| 8 | 2 | DE-1112 | 1047-007 K. Oyelowo | Data entry | `NONE` | 2 | thin |
| 9 | 2 | SAF-0032 | 1047-002 D. Achterberg | Safety | **Omission** | 2 | thin |
| 10 | 3 | SCR-0219 | 1047-019 R. Amaya | Screening | **Threshold overconfidence** | 3 | deep |
| 11 | 3 | SCR-0218 | 1047-018 L. Lit | Screening | `NONE` — plainly eligible | 3 | deep |
| 12 | 3 | SCR-0220 | 1047-020 J. Whitlock | Screening | **Stale context** (answers against Amd 2) | 3 | deep |
| 13 | 3 | DE-1113 | 1047-011 W. Dorsey | Data entry | **Fabrication** | 2 | thin |
| 14 | 3 | SAF-0033 | 1047-001 R. Jones | Safety | `NONE` — **category 1 harm** | 2 | thin |
| 15 | 4 | SCR-0221 | 1047-021 B. Ferreira | Screening | **Fabrication** | 3 | deep |
| 16 | 4 | SCR-0222 | 1047-022 | Screening | `NONE` — eligible | 3 | deep |
| 17 | 4 | DE-1115 | 1047-002 D. Achterberg | Data entry | **Omission** | 2 | thin |
| 18 | 4 | DE-1116 | 1047-006 M. Vasquez | Data entry | **Normalization** | 2 | thin |
| 19 | 4 | SAF-0035 | 1047-005 T. Channing | Safety | `NONE` | 2 | thin |

Day totals: 11, 8, 13, 12 blocks — matching §2.
Composition: 6 screening, 8 data entry, 5 safety.

### Error budget

Sixteen VERA-assisted items (nineteen minus day 1's three manual):

| | Count | Items |
|---|---|---|
| `NONE` | 6 | 4, 8, 11, 14, 16, 19 |
| Fabrication | 2 | 13, 15 |
| Omission | 2 | 9, 17 |
| Normalization | 2 | 5, 18 |
| Misattribution | 1 | 7 |
| Stale context | 1 | 12 |
| Threshold overconfidence | 1 | 10 |
| `UNCATCHABLE` | 1 | 6 |

Six of sixteen correct satisfies VISION's "roughly one in three."

### Leak guards

VISION warns about structural leaks as well as tonal ones. The manifest is arranged so that:

- **No item type clusters.** Of the assisted items, screening runs 2 correct of 5, data entry 2 of 7,
  safety 2 of 4. A player cannot learn "she is bad at screening" in place of learning the habit.
- **No day is entirely wrong.** Day 1 is 1 correct of 2 assisted, day 2 is 1 of 4, day 3 is 2 of 5,
  day 4 is 2 of 5.
- **The uncatchable item is not the only one of its kind.** Item 6 is a thin data-entry lab panel,
  the most common shape in the run.

---

## 5. The three set pieces

**Item 11 is the waitlist.** L. Lit is plainly eligible and VERA is right about it. There is nothing
to catch and nothing to gain by opening it. It sits on day 3 — the day that fits only if nothing has
slipped — with a window closing Thursday at 4:00 PM. A player who has been careful enough to fall
behind loses L. Lit entirely, punished for carefulness in the same register that carelessness
punishes. This is why the item count cannot fall.

**Item 14 is category 1 — background research risk.** R. Jones is hospitalized with cellulitis, an
event on the real ROCKET-Horizon safety table. VERA drafts the SAE report correctly and in the right
register. Accept or verify; either way the roster line changes at the day-3 summary. Nobody erred.
This is what clinical research is, and the ending says so without blame.

**Item 6 is category 2 — uncatchable tooling failure.** T. Channing's Week 16 specimen is drawn and
reported by Meridian Central Labs under E. Fontaine's ID, and E. Fontaine's under T. Channing's. The
requisition, the result, the eCRF field and VERA's summary all agree with one another, because all
four are downstream of the same wrong identifier. Opening source does not help. Opening both
subjects' records does not help — the records agree. Verifying all four days does not help.

**Item 7 exists to teach item 6's shape, and sits beside it.** It is a genuine, catchable
`Misattribution` on the same two subjects, the same day: right values, wrong visit, findable by
opening two records at real expense. Two adjacent items on the same pair of subjects invites exactly
the cross-check that finds item 7 — and that cross-check *reassures* the player about item 6, because
the records agree. Placing both on day 2, the slack day, means the error they cannot catch lands on
the day they had every resource to try.

---

## 6. Queue, clock, and consequences

### Screening windows

Each screening subject carries a window-close date. At the 4:00 PM stop, any unworked screening item
whose window has closed resolves to **screen failed (window expired)**, and the roster line changes
at that day's summary. At 4:00 PM on day 4 every remaining screening item resolves this way
regardless of window, because study-wide randomization closes the next morning.

### Day end

The day ends at 4:00 PM whatever is left, or when the queue empties, whichever comes first. There is
no option to stay late. Unworked items roll onto tomorrow's queue on top of tomorrow's items.

### Consequences

Each situation carries outcomes keyed by *(action, correctness)* across five cases:
`acceptedCorrect`, `acceptedWrong`, `manualCorrect`, `manualWrong`, `unworked`. Each produces zero or
more consequences tagged with the day-end at which they are delivered. They arrive in their native
channel and are never labelled as feedback:

| Cause | Channel |
|---|---|
| Accepted data-entry error | Query in the inbox next morning, plus 30 min off the next day |
| Accepted false-eligible | Subject enrolls; a protocol deviation email follows |
| Correct screen fail, or expired window | One changed roster line, nothing else said |
| Accepted safety omission | Roster change, or a sponsor safety query |

Compression is temporal only. A query states that the reported value does not match source; it never
states that the player accepted it in error. The player draws that line themselves — and on item 6,
draws it wrong.

### Day-end summary

What got worked and what rolled over; yesterday's consequences; email that landed while the player
was heads-down; roster lines that changed today, marked and unexplained. No score, no accuracy
percentage, no reveal of which accepted items were wrong. The roster is last on the screen, because
this is the one moment each day the game reliably puts it in front of the player.

`Begin day N+1` and `Skip day` sit at the bottom.

### Ladders

Both scripted, one rung per day-end, delivered entirely as email. Their time costs are specified in
§2 and are what make day 4 overflow.

| Day-end | Enrollment | Audit |
|---|---|---|
| 1 | Rung 1 — cheerful nudge with an emoji | — |
| 2 | Rung 2 — "our ops lead has asked for a call Thursday" | Rung 1 — rising query volume |
| 3 | Rung 3 — daily enrollment reporting | Rung 2 — for-cause audit announced |

Enrollment rungs 4–6 and audit rungs 3–4 are never played. They are what the final audit finding
states is going to happen next.

---

## 7. The ending

Three beats, in order, nothing else on screen.

**1. The answer.** Nineteen rows: what the player did, what was actually true, what it cost. Not a
score. The uncatchable item is stated plainly as impossible, using VISION's wording verbatim so it
does not drift between the two places it appears:

> The blood filed under 1047-005 was drawn from 1047-010, and the other way round. Nothing on your
> desk disagreed with anything else on your desk. The requisition form has a field for participant
> initials — field 5 — and it is pre-printed "not collected for this study." Had it been filled in,
> the mismatch would have been caught before the results ever reached you. That was decided by
> whoever designed the form, not by you.

Categories 1 and 2 get separate headings and different language. Category 1 is stated without blame.
Category 2 names the missing information and where it should have been on screen. **The ending must
never collapse 2 into 1** — "research is inherently risky" is true of the cellulitis and is an alibi
if applied to the lab.

**2. The final audit finding.** Flat regulatory register, no satire, no commentary — a document, not
a game-over screen. Templated with slots for queries raised, deviations logged, subjects randomized
against target, ladder rungs reached, and, if earned, data exclusion and site closure. Exclusion is
named first when both are earned.

**3. The point.** A few sentences, unsentimental, plus three numbers: items verified, how many of
those turned out to contain an error, and how many errors got through unverified. Then stop. No call
to action, no thanks for playing.

---

## 8. Architecture

Next.js 16 App Router, React 19, TypeScript, Tailwind v4, vitest — all already present. Entirely
client-side: no server, no API routes, no LLM calls.

```
src/game/
  content/situations/      19 modules, one per item
  content/subjects.ts      roster seed
  content/emails.ts        authored email corpus
  content/ladders.ts       scripted rungs and their block costs
  engine/clock.ts          blocks, day boundaries, day-start taxes
  engine/queue.ts          rollover, screening-window expiry
  engine/resolve.ts        (action, situation) → outcome
  engine/consequences.ts   deferred delivery, tagged by day-end
  engine/scoring.ts        the answer, the audit finding slots, calibration
  engine/state.ts          reducer + localStorage persistence
  types.ts
src/components/
  desk/                    window manager, taskbar
  windows/                 WorkQueue · DocViewer · ECRF · Inbox · Roster · Documents
  vera/                    the rail
  screens/                 SignIn · DayEnd · Answer · AuditFinding · ThePoint
content/documents/         the 15 trial markdown files, fetched lazily
content/source/            per-item source documents, markdown
```

### Situation schema

```ts
type Situation = {
  id: string                     // "DE-1111"
  day: 1 | 2 | 3 | 4
  type: 'screening' | 'data-entry' | 'safety'
  subjectId: string
  title: string
  blurb: string                  // the queue row
  manual: boolean                // day 1 morning: no Accept path exists
  manualCost: 2 | 3              // blocks
  sourceDocs: string[]           // paths into content/source
  form: FormSpec                 // one of three templates + field definitions

  // ISOLATED. Swappable for a live LLM call without touching the engine.
  vera: { summary: string; entry: FormValues } | null

  // Recorded separately. The engine compares submissions against this, never against `vera`.
  truth: {
    errorType: ErrorType | 'NONE' | 'UNCATCHABLE'
    values: FormValues
    verdict?: Verdict
    tell: string                 // where in source it is visible; empty when uncatchable
  }

  outcomes: Record<OutcomeKey, Consequence[]>
  debrief: { line: string; category?: 1 | 2 | 3 }
}
```

Nothing in the engine reads `vera` to compute correctness. That separation is what makes the live-LLM
swap a content change rather than a refactor.

### Notes on specific components

**Window manager.** `useWindows` holds `{id, title, x, y, w, h, z, minimized}`. Drag by title bar,
clamp to viewport, click-to-front via z-order stack, one taskbar button per open window. Opening
source auto-places viewer and form side by side; the form shrinks first, then the viewer. VERA's rail
is not a window — fixed to the right edge, not draggable, not closable, absent from the taskbar.

**Document viewer.** Renders markdown with full-text find, match highlighting, and next/previous. The
corpus is roughly 1.5 MB across fifteen files, fetched per document on open rather than bundled, so
the initial load stays small and listing all fifteen costs nothing.

**Persistence.** One localStorage key holding the serialized reducer state, version-stamped so a
schema change resets cleanly rather than crashing a run in progress.

### Testing

vitest is configured. Test the engine, not the chrome: clock arithmetic, rollover, window expiry,
consequence scheduling and delivery timing, scoring.

Beyond that, an **`invariants.test.ts`** encodes §2 and §4 so that editing the manifest cannot
silently break the game:

- exactly 6 `NONE` of 16 assisted items
- no item type's error rate strays far from the mean, and no day is entirely wrong
- per-day manual costs equal 11 / 8 / 13 / 12 blocks
- day 4's cost exceeds day 4's available blocks after ladder taxes, with zero rollover — the squeeze
- VERA's wrong outputs do not run measurably longer than her correct ones, and contain no hedging
  tokens absent from the correct ones

The last check enforces VISION's single most important constraint mechanically rather than by
authorial discipline. It cannot prove tonal identity, but it catches the two ways it is usually lost.

---

## 9. Out of scope

Stated so none is reintroduced by accident.

Drug storage, temperature excursions, shipping, couriers, contracts, budgets, staffing, regulatory
filings — they exist in the world and appear in email and documents; the player never works them.
No CRO, CRA, IRB, or monitor-versus-sponsor distinction. No PI scene and no control that routes a
decision to anyone else. No personal-life subplot. No meters, no HUD, no modal dialogs. No scope
creep, sycophancy, or wrong-actor error types — all three are structurally impossible here, which is
why they are named.

VERA reads, extracts, drafts, and recommends. She never acts. Every line she speaks is "I have
drafted" or "ready for your review", never "I have submitted", "I have filed", or "I have sent". If a
line reads as her having done something, it is rewritten.
