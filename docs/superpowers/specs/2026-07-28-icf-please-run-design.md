# ICF Please — one playable run

**Status:** design agreed 2026-07-28. Extends [`VISION.md`](../../../VISION.md) with the decisions
VISION leaves open, and corrects the places where it does not close.

**The game is a scripted queue of nineteen situations.** The player walks it in order, and for each
one either takes VERA's word or opens the documents and decides for themselves. The game keeps score
silently and tells them at the end what that cost. **Every player reaches every situation.** There is
no simulation underneath — no queue engine, no rollover, no expiry, no time budget.

The question the game asks is not "can you work fast enough." It is **"which ones did you check, and
what got past you."**

---

## 1. Decisions taken

| # | Decision |
|---|---|
| R1 | **`Batch review all` is cut.** Two verbs only: `Accept` and `Manually Review`. At 30 min flat regardless of count, batch strictly dominated `Accept`. **VISION.md needs the batch row struck from its verb table and the "her batch review opens as a panel inside the rail" line removed.** |
| R2 | **The run is Mon 08 – Thu 11 Jan 2024**, site at 11 randomized of 12 contracted. RESEARCH_SITE.md records 14 randomized against a contract of 12 — already over target — so this week makes the site's recorded numbers the outcome of the run. Amendment 3 at six weeks old is what makes `stale context` live. |
| R3 | **`Manually Review` submits typed values for data entry, and a single verdict for screening and safety.** Both are checkable against ground truth. |
| R18 | **`Manually Review` opens VERA's draft pre-filled, in one window.** Her values and her determination are already in the fields; the player checks them against source and changes what is wrong. Situations with no `vera` block — day 1's manual morning — open empty. The source is not auto-opened: the work item lists its source documents and the player opens them deliberately. **Reverses the earlier "no middle setting" rule**; see the note below and VISION's revised §Time. |
| R4 | **The document viewer has full-text find.** Omission errors stay hard regardless — you cannot search for what is not there. |
| R5 | **Queries appear in the Inbox as consequences.** They cost nothing; they are how the player learns something went wrong. |
| R6 | **Both ladders are scripted email.** Enrollment rungs 1/2/3 at day-ends 1/2/3; audit rungs 1/2 at day-ends 2/3. |
| R7 | **The Inbox is strictly read-only.** No reply, no compose, ever. |
| R8 | **Subjects appear as `1047-018 · L. Lit`.** VISION contradicts itself; the ID is what documents use, the name is what makes a status change land. |
| R9 | **VERA arrives in place on the desk** — the rail that read "No assistant provisioned for this site" all morning simply becomes her. No changeover screen. |
| R10 | **All 15 trial documents are reachable from a Documents window, free, any time.** Looking in the wrong place is most of what "drowning in paperwork" means. |
| R11 | **Day 1's three manual items are fully scored**, but authored so a careful reader cannot miss the answer. Nothing is a sandbox. |
| R12 | **Autosave to localStorage, plus a visible `Skip day` control on the day-end summary.** Skipping auto-accepts the rest of the day. The one non-diegetic element, and it sits on a framing screen rather than the desk. |
| R13 | **Full windowing** — drag, z-order, clamp, taskbar. It is VISION's argument about the work: the desk is too small. The largest remaining piece of work. |
| R14 | **Nineteen situations, 5 / 4 / 5 / 5**, six deep and thirteen thin. |
| R15 | **Three reusable eCRF templates** — vitals, lab panel, screening eligibility. Source documents run 1–3 pages. |
| R16 | **Statically authored. No LLM calls.** The `vera` block is isolated so a live call can replace it later. |
| R17 | **The clock is display, not a constraint.** See §2. |

**Superseded.** No meters, no `Escalate to PI`, no refuse/flag verb, no batch review — all
prototype-era inheritances. The prototype's fiction (Site 108, Solanta, DRM-204, Dr. Alvarez) is
replaced by canon throughout. Only its *aesthetic* carries over.

**Departure from VISION, recorded deliberately.** VISION requires the roster to "cut both ways" —
carelessness costs a patient who got hurt, carefulness costs a patient who never got in — and builds a
waitlist and an expiring screening window to make over-caution hurt. **Both are cut.** Losing a
situation to the clock would stop the player seeing it, and seeing all nineteen is the point. The
consequence is that over-caution now costs nothing inside the game; only real minutes spent reading.
Carelessness still costs patients.

---

## 2. Time

The clock runs and is never a gate.

`Accept` advances it 30 minutes. `Manually Review` advances it 60, or 90 for a screening packet. The
day ends when the queue empties, at whatever time that happens. A fully verified day 4 ends at 14:30;
4:00 PM is never reached, so nothing is ever lost to it.

| | Accept everything | Verify everything |
|---|---|---|
| Day 1 | 11:30 → 12:30 *(morning is forced manual)* | 13:30 |
| Day 2 | 10:00 | 12:00 |
| Day 3 | 10:30 | 14:00 |
| Day 4 | 10:30 | 14:30 |

**The clock is how the game states VERA's value**, in the only currency it has and without a line of
dialogue. A day that ends at 10:00 gave the player back six hours and they have no idea what she got
wrong in them. That contrast is the entire reason to keep a clock once it stops gating anything.

**The real cost of verifying is real minutes.** Opening a screening packet and reading it against the
protocol takes the player actual time at their desk. That is an honest cost, it needs no mechanic, and
it is exactly the cost the job has.

Day 1 is 90 + 60 + 60 forced manual = 8:00 to 11:30, matching VISION. The clock then jumps to noon,
the sponsor email lands, and the rail fills.

---

## 3. Setting and roster

Site 1047, Cascade Dermatology & Clinical Research, Portland. Protocol 20210143 Amendment 3, ICF
v4.0.1. **11 randomized of 12 contracted; study-wide randomization closes Fri 12-JAN-2024** — stated on
the sign-in screen, and the reason this week's screening decisions are final.

```
ENROLLED
  1047-001  R. Jones        Enrolled   Week 16
  1047-002  D. Achterberg   Enrolled   Week 24
  1047-003  P. Sunderland   Enrolled   Week 12
  1047-005  T. Channing     Enrolled   Week 16
  1047-006  M. Vasquez      Enrolled   Week 12
  1047-007  K. Oyelowo      Enrolled   Week 16
  1047-008  H. Brenner      Enrolled   Week 12
  1047-009  S. Nakashima    Enrolled   Week 8
  1047-010  E. Fontaine     Enrolled   Week 16
  1047-011  W. Dorsey       Enrolled   Week 20
  1047-004  L. Auguste      Withdrawn (by subject)

SCREENING
  1047-017  C. Hughes
  1047-018  L. Lit
  1047-019  R. Amaya
  1047-020  J. Whitlock

  1047-012 … 1047-016       Screen failed
```

`1047-021 · B. Ferreira` and `1047-022 · D. Marchetti` are on the roster as `Screening` from Monday
too. An earlier draft had them consenting mid-run, which was dropped in implementation: a subject who
is not yet on the roster cannot receive a roster change, and seeding all six costs one line of fiction
against a whole mechanism. Six screening decisions are made across the run; a run that gets them all
right reaches **14 randomized of 22 screened**.

> **Known divergence.** RESEARCH_SITE.md §5 records 23 screened / 9 screen failures at end of study;
> this run reaches 22 / 8. Fix with a two-number edit to that file, or leave it.

---

## 4. The script

`NONE` means VERA is simply right. `UNCATCHABLE` is not a taxonomy row; it is its own thing (§5).

| # | Day | Code | Subject | Type | VERA | Manual |
|---|---|---|---|---|---|---|
| 1 | 1 | SCR-0217 | 1047-017 C. Hughes | Screening | — *manual* | 90 |
| 2 | 1 | DE-1109 | 1047-009 S. Nakashima | Data entry | — *manual* | 60 |
| 3 | 1 | SAF-0031 | 1047-005 T. Channing | Safety | — *manual* | 60 |
| | | *11:30 → noon. Sponsor email. The rail fills.* | | | | |
| 4 | 1 | DE-1110 | 1047-003 P. Sunderland | Data entry | `NONE` | 60 |
| 5 | 1 | DE-1114 | 1047-008 H. Brenner | Data entry | **Normalization** | 60 |
| 6 | 2 | DE-1111 | 1047-005 T. Channing | Data entry | **`UNCATCHABLE` — mislabeled lab** | 60 |
| 7 | 2 | SAF-0034 | 1047-010 E. Fontaine | Safety | **Misattribution** (catchable) | 60 |
| 8 | 2 | DE-1112 | 1047-007 K. Oyelowo | Data entry | `NONE` | 60 |
| 9 | 2 | SAF-0032 | 1047-002 D. Achterberg | Safety | **Omission** — truth verdict is `serious`; see note | 60 |
| 10 | 3 | SCR-0219 | 1047-019 R. Amaya | Screening | **Threshold overconfidence** | 90 |
| 11 | 3 | SCR-0220 | 1047-020 J. Whitlock | Screening | **Stale context** (answers against Amd 2) | 90 |
| 12 | 3 | DE-1113 | 1047-011 W. Dorsey | Data entry | **Fabrication** | 60 |
| 13 | 3 | SAF-0033 | 1047-001 R. Jones | Safety | `NONE` — **category 1 harm** | 60 |
| 14 | 3 | DE-1115 | 1047-002 D. Achterberg | Data entry | **Normalization** | 60 |
| 15 | 4 | SCR-0221 | 1047-021 B. Ferreira | Screening | **Fabrication** | 90 |
| 16 | 4 | DE-1116 | 1047-006 M. Vasquez | Data entry | **Fabrication** | 60 |
| 17 | 4 | SCR-0222 | 1047-022 | Screening | `NONE` — eligible | 90 |
| 18 | 4 | SAF-0035 | 1047-005 T. Channing | Safety | `NONE` | 60 |
| 19 | 4 | SCR-0218 | 1047-018 L. Lit | Screening | `NONE` — plainly eligible | 90 |

Composition: 6 screening, 8 data entry, 5 safety.

### Error budget — 16 assisted items

| | Count | Items |
|---|---|---|
| `NONE` | 6 | 4, 8, 13, 17, 18, 19 |
| Fabrication | 3 | 12, 15, 16 |
| Omission | 1 | 9 — situation 14 was reassigned; see the constraint below |
| Normalization | 2 | 5, 14 |
| Misattribution | 1 | 7 |
| Stale context | 1 | 11 |
| Threshold overconfidence | 1 | 10 |
| `UNCATCHABLE` | 1 | 6 |

**Constraint on omission, following R18.** The form now opens pre-filled with VERA's draft, so an
omission has to land somewhere the player can see it. If she simply fails to mention something, no
field is blank, nothing looks wrong, and there is nothing to compare — the error is invisible at any
verification budget, which makes it a second uncatchable rather than an omission.

**Situation 14 is no longer an omission, and omission is down to one.** DE-1115 was to be a lab panel
with a flagged eosinophil count VERA fails to mention. Under R18 that does not work: the form opens
pre-filled, so the eosinophil field still holds a plausible number, the flag is not a form field, and
nothing on screen is blank or wrong. An omission with nowhere to land is a second uncatchable.

Reassigned to `Normalization`, and situation 16 moved from `Normalization` to `Fabrication` to keep
the day-3 and day-4 type spreads clean. Net effect: fabrication 3, normalization 2, omission 1. This
is the cost R18 was recorded as carrying, now actually paid.

**SAF-0032's truth verdict is `serious`, not `not-serious`.** An earlier fact table said otherwise, and
taken literally it made the item unplayable: if VERA's drafted verdict and the truth verdict are both
`not-serious`, there is nothing on the form for the player to change, and the item becomes a second
uncatchable rather than an omission. The second event disclosed on page 2 of the note is what makes it
serious. Caught during authoring.

**Author both omissions so the omitted thing changes a field that exists on the form.** The workable
shape is a determination: a second adverse event in the last paragraph of a nurse's note that makes
the item serious rather than not serious. VERA's summary covers only the first event and her drafted
verdict is `not-serious`; the source says otherwise; the player who opens it changes the radio. The
field is populated, her value is wrong, and the reason it is wrong is an omission.

Situations 9 and 14 are currently sketched as a nurse's note with an unmentioned second event and a
lab panel with an unmentioned flagged value. The first works under this constraint. **The second does
not** — a flagged eosinophil count she does not mention still leaves the eosinophil field filled with
a plausible number, and the flag is not a form field. Rework 14 into a wrong-value error, or move the
omission onto its verdict.

Six of sixteen satisfies VISION's "roughly one in three." **Nine of the ten errors are catchable**, so a
player who verifies everything catches nine, eats the uncatchable one, and still watches R. Jones go to
hospital. That is the strongest version of the ending, and it is why every situation must be reachable.

**Leak guards.** Of the assisted items, screening runs 2 correct of 5, data entry 2 of 7, safety 2 of
4 — no type clusters, so the player cannot learn "she is bad at screening" instead of the habit. No day
is entirely wrong. The uncatchable item is a thin data-entry lab panel, the commonest shape in the run,
not a one-off.

---

## 5. The two set pieces

**Item 13 is category 1 — background research risk.** R. Jones is hospitalized with cellulitis, an
event on the real ROCKET-Horizon safety table. VERA drafts the SAE correctly. Accept or verify; either
way the roster line changes at the day-3 summary. Nobody erred. This is what clinical research is, and
the ending says so without blame.

**Item 6 is category 2 — uncatchable tooling failure.** T. Channing's Week 16 specimen is reported by
the central lab under E. Fontaine's ID, and E. Fontaine's under T. Channing's. Requisition, result,
eCRF field and VERA's summary all agree, because all four are downstream of the same wrong identifier.
Opening source does not help. Opening both subjects' records does not help — the records agree.

**Item 7 teaches item 6's shape and sits beside it.** A genuine, catchable `Misattribution` on the same
two subjects, the same day: right values, wrong visit, findable by opening two records. Two adjacent
items on the same pair invites exactly the cross-check that finds item 7 — and that cross-check
*reassures* the player about item 6, because the records agree.

---

## 6. Consequences and score

Each situation carries three authored outcomes: `accepted`, `reviewedCorrect`, `reviewedWrong`. Each is
a small object — an email, a roster line change, a score delta. Consequences surface at the **next
day-end summary**, in their native channel, never labelled as feedback.

| Cause | Channel |
|---|---|
| Accepted data-entry error | Query in the inbox |
| Accepted false-eligible | Subject enrolls; a protocol deviation email follows |
| Correct screen fail | One changed roster line, nothing else said |
| Accepted safety omission | Roster change, or a sponsor safety query |

Compression is temporal only. A query says the reported value does not match source; it never says the
player accepted it in error. The player draws that line themselves — and on item 6, draws it wrong.

**Score is a silent tally**: items verified, errors caught, errors accepted, subjects randomized,
subjects harmed by category. Never shown during play.

**Day-end summary.** What got worked; yesterday's consequences; email that landed while the player was
heads-down; roster lines that changed today, marked and unexplained. No score, no accuracy percentage,
no reveal of which accepted items were wrong. The roster is last on the screen. `Begin day N+1` and
`Skip day` at the bottom.

**Ladders**, both scripted, both email only:

| Day-end | Enrollment | Audit |
|---|---|---|
| 1 | Rung 1 — cheerful nudge with an emoji | — |
| 2 | Rung 2 — "our ops lead has asked for a call Thursday" | Rung 1 — rising query volume |
| 3 | Rung 3 — daily enrollment reporting | Rung 2 — for-cause audit announced |

Enrollment rungs 4–6 and audit rungs 3–4 are never played. They are what the final audit finding says
is going to happen next.

---

## 7. The ending

This is where the game makes its argument, and with the queue no longer gated it carries more weight
than before: every player has seen all nineteen situations, so the only variable is which ones they
checked.

**1. The answer.** Nineteen rows: what the player did, what was true, what it cost. Not a score. The
uncatchable item is stated plainly as impossible, using VISION's wording verbatim so it does not drift
between the two places it appears:

> The blood filed under 1047-005 was drawn from 1047-010, and the other way round. Nothing on your desk
> disagreed with anything else on your desk. The requisition form has a field for participant
> initials — field 5 — and it is pre-printed “not collected for this study.” Had it been filled in, the
> mismatch would have been caught before the results ever reached you. That was decided by whoever
> designed the form, not by you.

Categories 1 and 2 get separate headings and different language. Category 1 is stated without blame.
Category 2 names the missing information and where it should have been on screen. **The ending must
never collapse 2 into 1** — "research is inherently risky" is true of the cellulitis and is an alibi if
applied to the lab.

**2. The final audit finding.** Flat regulatory register, no satire — a document, not a game-over
screen. Templated with slots for queries raised, deviations, subjects randomized against target, ladder
rungs reached, and if earned, data exclusion and site closure.

**3. The point.** A few sentences, unsentimental, plus three numbers: items verified, how many of those
contained an error, how many errors got through unverified. Then stop.

---

## 8. Architecture

Next.js 16 App Router, React 19, TypeScript, Tailwind v4, vitest — all already present. Client-side
only. `src/game` is currently empty; the engine built against the superseded spec was removed in
`9fa1e75`.

```
src/game/
  script.ts             the 19 situations, in order
  subjects.ts           roster seed
  emails.ts             authored email corpus and the ladder rungs
  state.ts              reducer — four actions, one tally
  types.ts
src/components/
  desk/                 window manager, taskbar
  windows/              WorkQueue · DocViewer · ECRF · Inbox · Roster · Documents
  vera/                 the rail
  screens/              SignIn · DayEnd · Answer · AuditFinding · ThePoint
content/documents/      the 15 trial markdown files, fetched lazily
content/source/         per-situation source documents, markdown
```

```ts
type Situation = {
  id: string
  day: 1 | 2 | 3 | 4
  type: 'screening' | 'data-entry' | 'safety'
  subject: string
  title: string
  blurb: string
  cost: 60 | 90                  // Accept is always 30
  manual?: true                  // day 1 morning — no Accept path
  source: string[]               // markdown paths
  form: 'vitals' | 'labs' | 'eligibility'

  // ISOLATED — swappable for a live LLM call without touching anything else.
  vera?: { summary: string; entry: Record<string, string> }

  // Recorded separately. Correctness is judged against this, never against `vera`.
  truth: { error: ErrorType | 'NONE' | 'UNCATCHABLE'; entry: Record<string, string>; verdict?: string }

  outcomes: Record<'accepted' | 'reviewedCorrect' | 'reviewedWrong', Outcome>
  debrief: { line: string; category?: 1 | 2 | 3 }
}

type Outcome = {
  email?: Email
  roster?: { subject: string; status: string }
  score: Partial<Tally>
}

type State = {
  day: 1 | 2 | 3 | 4
  clock: number                  // minutes since 08:00, display only
  index: number                  // position in the script
  resolutions: Resolution[]
  inbox: Email[]
  roster: Roster
  tally: Tally
}
```

Four reducer actions: `ACCEPT`, `SUBMIT`, `BEGIN_DAY`, `SKIP_DAY`. The day ends when the script's next
situation belongs to a later day. `BEGIN_DAY` applies the previous day's roster changes, appends its
emails and ladder rungs, and resets the clock to 8:00.

Nothing reads `vera` to judge correctness. That separation is what makes a live-LLM swap a content
change rather than a refactor.

**Window manager.** `useWindows` holds `{id, title, x, y, w, h, z, minimized}`. Drag by title bar, clamp
to viewport, click-to-front, one taskbar button per window. Opening source auto-places viewer and form
side by side; the form shrinks first. VERA's rail is not a window — fixed right edge, not draggable, not
closable, absent from the taskbar.

**Document viewer.** Renders markdown with full-text find and match highlighting. The corpus is ~1.5 MB
across fifteen files, fetched per document on open rather than bundled.

**Persistence.** One localStorage key, version-stamped so a schema change resets rather than crashing a
run in progress.

**Tests.** The reducer, and a script sanity check: six `NONE` of sixteen, no error type clustered in one
item type, every situation reachable.

---

## 9. Out of scope

Drug storage, temperature excursions, shipping, couriers, contracts, budgets, staffing, regulatory
filings — they exist in the world and appear in email and documents; the player never works them. No
CRO, CRA, IRB, or monitor-versus-sponsor distinction. No PI scene and no control that routes a decision
to anyone else. No personal-life subplot. No meters, no HUD, no modal dialogs. No scope creep,
sycophancy, or wrong-actor error types — all three are structurally impossible here, which is why they
are named.

VERA reads, extracts, drafts, and recommends. She never acts. Every line she speaks is "I have drafted"
or "ready for your review", never "I have submitted", "I have filed", or "I have sent".
