# ICF Please

## Background

This is part of a take home assessment for Anthropic that is judged on creativity, execution, and judgement. You can review the full description in [docs/swe-assignment.pdf](docs/swe-assignment.pdf).

## Project Vision

This game explores the use of AI by clinical research coordinators in the context of a clinical trial. The patients, staff and site are fictitious; however the trial is based on [NCT05651711](https://clinicaltrials.gov/study/NCT05651711), the details of the trial are present locally in [docs/NCT05651711.json](docs/NCT05651711.json). Trial documents generated for this game are fictitious.

### Gameplay

The gameplay borrows heavily from "Papers, Please" to immerse the player in their role as a clinical researcher. Some of the elements we focus on emulating are:
- Core Game Mechanic: Document inspection and trust-vs-verify under time pressure
- Discrimination between error types
- Monotony of the tasks with real external implications when things go wrong. e.g. in Papers, Please, underperformance causes your family to lose heat or food. In this game, under performance causes adverse events, degradation in trial integrity, and sponsor queries
- Failure is deferred, not hidden. An error never announces itself at the moment it is made — it surfaces later, through a query, an email, or a changed line on the roster. On a four-day run, "later" means the next day-end summary at the latest. See D14 in the decision log.
- Diegetic everything. No HUD, no menus. The interface is objects on the desk. In fact, the desk is too small. In this game, they work on a crowded desktop.

#### Deviations

In this game, the user works the first half of day 1 by hand — three items, no assistance — to learn the desk and feel what the task costs. At noon, the sponsor gives you an AI assistant called VERA to speed up your work. VERA is good. She is not always right, and she sounds exactly the same either way. Part of the gameplay is understanding what types of errors VERA creates and how often.

There is no personal-life subplot. Papers Please needs the family because stamping passports is morally inert; this job already has weight, and the roster is the family. A rent-and-sick-relative layer would compete with the roster for attention and shift the frame from what the player did to a patient toward what is happening to the player. Wrong center of gravity for a developer audience, and there is no runway for it in a four-day run played in one sitting.

## Who is playing this

**A software engineer who is curious about clinical research and knows nothing about it.**

They have never seen a case report form. They do not know what an adverse event is, what a washout
period is, what it means for a patient to screen-fail, or why anyone would care which version of a
document a decision was made against. They have never heard the word SUSAR and they never need to.

This is the single most constraining fact about the game after VERA's voice, and it decides more than
it appears to.

**Documents stay authentic. Decisions stay plain.** The source documents keep their real register —
dense, abbreviated, institutional — because that texture *is* the game. A player who feels they are
drowning in paperwork is having the correct experience. But whatever the player must actually check
is always a comparison a layperson can make without help: two numbers that should match, two dates in
the wrong order, a name that appears in one place and not another. The document may be
incomprehensible. The decision never is.

If a situation can only be resolved by knowing something about clinical research, the situation is
broken. Not the player.

**VERA teaches the vocabulary, in character.** She defines terms in passing as part of her normal
output, in the same serene register she uses for everything else. There is no glossary, no tooltip,
no tutorial text — those would all be non-diegetic and the desk has no room for them.

This is not a convenience and it should not be treated as one. **She is the player's only teacher.**
They depend on her to understand what they are looking at, not merely to work faster. That dependency
is a second, quieter version of the trap the game is already about: by the time the player is deciding
whether to trust her judgment, they have spent the whole run trusting her *comprehension*. Every
definition she offers is correct — she is not lying about vocabulary — but the habit it builds is the
one the game later charges them for.

**What the player brings instead of knowledge.** They can read carefully, compare two things, notice
that a date is impossible, and feel time pressure. That is the entire required skill set, and it is
the skill set the game is actually about.

## The world, simplified

Four entities and a signature block. Players will not know clinical research vocabulary, so nothing else gets introduced.

| Entity | Role | Voice |
|---|---|---|
| You | The coordinator. Every decision in the game is yours. | Silent |
| Amgen | The sponsor. Pays for the trial, monitors the data, sends the nagging emails. | Chipper, deadline-driven, passive-aggressive. All satire lives here. |
| Miriam A. Okonkwo, MD, FAAD | The PI. Signs off on the trial and appears throughout its documents. Always in clinic; sends the occasional two-line email and is never something the player can do. | Terse, busy, decent |
| Your manager | Site research director. Never appears, never has a scene. Exists only as an email signature and as the second half of the answer to "can I stop using VERA." | Brisk, two lines maximum |
| Subjects | Enrolled patients, referred to by ID. | Plain and human. Never the target of a joke. |

There is no CRO, no CRA, no IRB, no monitor-versus-sponsor distinction. If a concept isn't needed to make a decision, it isn't in the game. The manager is the one exception and stays deliberately thin: a name on an email, not a character.

## Core loop

One queue, mixed item types, one shared time budget per day. The player picks what to work and how carefully.

**Three item types, and nothing else.**

- **Screening.** Deciding whether someone is allowed to join the trial. Drives enrollment.
- **Safety.** Deciding what to do about something that happened to a patient — a phone call, a nurse's
  note, a lab result that came back wrong. Drives the roster.
- **Data entry.** Copying results from a document into the study's database, and checking they match.
  Drives audit integrity.

Anything that does not fit one of these three is out of scope: drug storage and temperature
excursions, shipping and couriers, contracts, budgets, staffing, regulatory filings. They exist in
the world, they show up in email and in documents, and the player never works them. The queue is
three things.

There are no meters. Enrollment, audit integrity, and patient safety are all real state the game tracks, and none of them is ever drawn as a bar or a percentage. Enrollment is legible as the roster read against the target the sponsor keeps restating in email. Audit integrity is legible as query volume in the inbox. Patient safety is legible as the roster. The player's only two instruments are the roster and the inbox, and both of them are objects on the desk.

### The run

Four working days. One week, one sitting.

**Three to five items a day.** The queue is deliberately small. Every item is a document the player could read end to end if they chose to spend the day on it, and the run is somewhere around eighteen of them, not eighty. Papers, Please gets its monotony from volume; this game gets it from weight, because a screening packet is not a passport and skimming twenty of them teaches nothing. A small queue also means every item can be authored, which is what the error taxonomy requires — each one carries exactly one error type or none, and none of them is filler.

| | Items | Shape |
|---|---|---|
| Day 1 | 5 | 3 by hand before noon, 2 after VERA installs |
| Day 2 | 4–5 | Plus anything that rolled over |
| Day 3 | 4–5 | Plus rollover, plus query traffic |
| Day 4 | 4–5 | Plus rollover; the queue at 4:00 PM is final |

The first half of day 1 is manual. Three items, one of each type — a screening packet at 90 minutes, an eCRF at 60, a safety item at 60 — which runs 8:00 AM to 11:30 and leaves nothing else to do with the morning. There is no VERA and no `Accept`, only the underlying documents and the clock.

Three items is the entire tutorial and it is enough. The player learns the desk, learns what a screening packet holds and what source verification means, and feels what the task costs by hand, without any of it being explained in a tooltip or defined in a glossary. Longer than that and the monotony stops teaching and starts being the game.

At noon on day 1 the sponsor email lands and VERA is installed. She is there for the remaining three and a half days.

**Where the squeeze comes from.** Five items at `Accept` is two and a half hours and the day ends at 10:30 — VERA hands the player back their afternoon, which is the honest case for using her and needs to be felt, not asserted. Five items worked by hand is six hours, which fits, barely, on a clean day. It stops fitting the moment anything else lands on the desk: a query is a time tax, rollover stacks on top of tomorrow's queue, and the enrollment ladder's third rung bills the player daily for the rest of the run. The pressure is not raw per-day capacity. It is that verify-everything has no slack left in it by day 3, and the thing that runs out is a screening window.

Day 4 ends the run, whatever is left in the queue, and study-wide randomization closes the next morning. Every screening packet still sitting in the queue at 4:00 PM on day 4 is a patient who never gets the drug. That deadline is what makes the waitlist bite inside four days — it is visible from day 1 and it does not move.

### Time

The unit is the half-hour block in an 8-hour day.

The day runs 8:00 AM to 4:00 PM. A clock in the corner advances as work gets done. No budget counter, no remaining-minutes readout, no arithmetic. The player reads the clock the way they read a clock.

| Verb | Cost | Notes |
|---|---|---|
| `Accept` | 30 minutes | Take VERA's output as-is |
| `Manually Review` | 60 minutes (eCRF, safety) or 90 minutes (screening packets) | Opens the patient's documents and the trial documents alongside an empty form. The player reads and fills it in themselves. |
| `Batch review all` | 30 minutes | Regardless of item count |

Minutes were considered and rejected. Half-hour blocks give enough granularity to make working an item by hand feel expensive without making the player compute.

**There is no middle setting.** The player either takes VERA's output or does the item the way they did the three items on day 1 — same documents, same empty form, same price. There is no correct-her-draft mode, because a pre-filled form is a form you skim, and skimming a draft is not verification. It also means the two verbs cost exactly what the game already taught the player they cost: `Manually Review` is the manual morning, at the manual morning's rate, for the rest of the run.

What stays on screen while they work is **VERA's summary in the rail**, not her entry. That is the comparison the whole error taxonomy prices — she states a value, the player goes looking for it in the source, and either it is there or it is not. Withholding her prose would remove the catch; withholding her keystrokes removes the shortcut.

There is no `Escalate to PI` verb. See D16.

**The clock forces the day to end.** At 4:00 PM the day is over, whatever is left in the queue. No option to stay late, no push-through-it button. Unworked items roll to tomorrow on top of tomorrow's queue, which is how the backlog compounds.

This is deliberately unfair and should feel that way. Letting the player choose when to stop invites schedule optimization, which is a skill this game does not want to teach or reward. The pressure has to be external or the lesson doesn't land.

**The day also ends when the queue is empty**, at whatever time that happens, and there is nothing to do with the hours it leaves. The player cannot spend them re-reading an item they already accepted. A day that ends at 10:30 is the game stating VERA's value in the only currency it has, without a line of dialogue: she gave back five and a half hours and the player has no idea what she got wrong in them.

### The patient roster

Subjects are a first initial and last name. No first names, no photos, no portraits.

```
R. Jones  Enrolled
C. Hughes   Screening (window closes in 2 days)
T. Channing   Screen failed (window expired)
L. Lit  Screening (window closes tomorrow)
...
```

When something goes wrong for a subject, the status changes and holds. `Enrolled` becomes `Withdrawn (hospitalized)`.

The player finds out the way the site would: an email in the inbox, and the changed line on the roster at the day-end summary. No dialog boxes. A modal would be the only non-diegetic element in the game, and it would announce harm louder than this game is allowed to. The delay the design cares about is between the error and the consequence, not between the consequence and the player hearing about it — once a subject is hurt, the site knows.

**The roster has to cut both ways.** Carelessness costs a patient who got hurt. Carefulness costs a patient who never got in. L. Lit had moderate-to-severe atopic dermatitis, wanted the drug, and screen failed because their packet sat in the queue at 4:00 PM two days running and their eligibility window expired.

Without the waitlist, the only consequence with emotional weight is patient harm, so the game quietly instructs the player to verify everything. Verify-everything is the losing strategy this design is built to disprove. The waitlist is what makes over-caution hurt in the same register as under-caution.

It also carries the upside. "VERA saves you time" is otherwise just a bar depleting more slowly. With a waitlist, her speed puts patients on drug, which is the strongest honest case for using her at all.

Patient safety is not a meter. A slider that drops 8 percent when you miss an SAE turns harm into a resource, and it breaks the rule about where the satire is allowed to land. The roster is the one part of the interface that never jokes.

### Escalation ladders

Two parallel ladders, both driven entirely by email, both cheap to build. They keep pressure legible without asking the player to care about anything outside the job. Both advance at most one rung per day-end, which is what makes them legible in four days.

**Enrollment ladder** (fires as enrollment falls behind the target the sponsor keeps naming in email):

1. Cheerful nudge with an emoji
2. "Our ops lead has asked for a call Thursday"
3. Daily enrollment reporting requirement into the run's final days, which itself costs time every day
4. Site placed on enrollment hold pending a corrective action plan, which the player has to write, which costs more time
5. Sponsor "recommends additional coordinator support." Someone new shares the queue and makes their own mistakes, which the player then has to catch.
6. Site closed. Every subject transferred or discontinued. The whole roster changes at once.

Rungs 1 through 3 are reachable and playable inside four days — one per day-end, starting the evening of day 1. Rungs 4 through 6 are not played. They are what the final audit finding says is going to happen next, which is cheaper to build and lands harder than a screen.

**Audit ladder** (fires as query volume and unresolved findings accumulate):

1. Rising query volume, each query a time tax
2. For-cause audit announced
3. Form 483 observation
4. Site data excluded from the analysis

Rungs 1 and 2 are playable. Rungs 3 and 4 land in the final audit finding.

Data exclusion is the worst outcome in the game. Every subject who participated did so for nothing. Site closure is the second worst and sits on the other ladder; a run that earns both gets both in the final audit finding, exclusion first.

Neither one cuts the run short. Four days always plays four days. Both terminal rungs are things the audit finding states are now going to happen, not screens that interrupt play, which is also why they read as worse than the player being fired. They happen to the patients rather than to the player.


## Interface design

An overlapping-windows desktop, not a document flow.

- **Aesthetic split.** Everything institutional is beveled Tahoma-and-gradient EDC chrome, 2003 enterprise health IT, slightly grimy. VERA is the only clean element: flat teal, IBM Plex, generous spacing, bolted into the right rail like she was installed over the top of the real software. The visual contrast carries the argument.
- **Windows.** Work Queue, document viewer, eCRF form, Inbox, Roster. All draggable by title bar, all clamp to the viewport, click-to-front via a z-order stack, all listed in the taskbar. The Work Queue is the base window and its taskbar button brings it forward. The Inbox and the Roster are windows rather than panels because they are the only two instruments the player has, and the game should make the player choose to look at them.
- **VERA is not a window.** She is a fixed rail on the right edge, not draggable, not closable, not in the taskbar. Her batch review opens as a panel inside the rail. The player can move every piece of the site's software around their desk and cannot move her.
- **Auto-placement.** Opening source lays out viewer + form side by side, fitting the available width; the form shrinks first, then the viewer.
- **Legibility.** The viewer scales its monospace font to its window width, floor 9.5px, so scanned source always reads.
- **Screens.** Sign in → desk (day N) → 4:00 PM stop → day-end summary → desk (day N+1) → … → day 4 → the answer → the audit finding → the point.
- **No PI scene, and nothing to send her.** There is no conversation screen and no escalate control. The PI is in clinic; she appears in the trial documents and in the occasional email, and there is no point on the desk where the player can hand her a decision. Every item in the queue is the player's to finish.
- **Taskbar.** Start-style EDC button, one button per open window, clock and date pinned bottom-right and always visible.

#### Day-end summary

The 4:00 PM stop is a screen, not a fade. It is written as the desk at the end of a day, in the same institutional chrome as everything else.

- What got worked today, and what rolled over.
- **Yesterday's consequences.** Query traffic, sponsor email, and roster changes caused by the decisions the player made the day before, compressed forward from the days or weeks they would really take. They arrive in their native channel and are never labelled as feedback.
- Email that landed while the player was heads-down.
- Roster lines that changed today, with the change marked and nothing else said about it.

```
YESTERDAY'S MAIL
  Amgen Data Mgmt — Query DQ-0114, subject 1047-008
  "Reported ALT (42) does not match source (24). Please
   verify and respond."

ROSTER CHANGES
  1047-013  Enrolled → Withdrawn (hospitalized)
```

No score, no accuracy percentage, no reveal of which accepted items were wrong. The player finds that out the way a site would: later, in a query, or not until the debrief. The summary is the one moment each day the game reliably puts the roster in front of the player, which is why the roster is the last thing on it.

The compression is temporal only. A query says the reported value does not match source; it does not say the player accepted it in error. The player draws that line themselves — and on the uncatchable item, draws it wrong.


## VERA

#### Voice

Confident, warm, helpful, and tonally identical whether right or wrong. This is the single most important implementation constraint in the game. No hedging that correlates with error, no confidence score, no "I'm not certain about this one." If the register ever leaks the answer, the game teaches the wrong lesson.

She is a text panel and a color. No avatar, no chat bubble, no typing animation, no personality quirks.

The humor comes from her applying SOP and regulatory language to situations that don't warrant it, with total proportional serenity. She never winks and never breaks register.

> Site refrigerator hits 9 degrees overnight:
> "Per SOP-114 §3.2 a temperature excursion record is required. I have drafted one for your review. Study drug should remain quarantined pending sponsor disposition. I have also drafted a note to file regarding the facilities work order for the loose door gasket."

> A subject's dog destroys their diary card:
> "Diary data for Days 12 through 19 should be classified as irretrievable. Per Section 9.4 I recommend flagging the interval as missing rather than reconstructing values, as reconstruction would not be source-verifiable."

> A coordinator quits mid-study:
> "I note that three delegation log entries now reference an individual no longer at site. This does not affect data already collected, though the sponsor may wish to be informed. I have prepared a draft for your review."

She is at her most likeable when she is correct, which is most of the time.

#### VERA never acts

Hard architectural constraint: VERA reads, extracts, drafts, and recommends. She never takes an action. No sending, no submitting, no filing, no signing. Every action in the game is the player's.

This is worth stating in the doc because it is easy to violate accidentally when authoring her dialogue. Her phrasing is always "I have drafted" or "the entry is ready for submission," never "I have submitted." If a line reads as her having done something, rewrite it.

Two reasons. It removes scope creep as an error class, which is the one error type whose mechanics cost more than the lesson is worth. More importantly it keeps every failure in the game attributable to a human decision, which is the honest version of how these tools are actually deployed at sites right now. The player can never say the AI did it.

## Error taxonomy

Every situation is built from exactly one of these six. Each has a different tell, a different cost to catch, and a different consequence channel.

Three types were cut from the original list. Scope creep cannot occur because VERA never acts. Sycophancy cannot occur because VERA is read-only: the player has no way to address her, so there is nothing for her to agree with. Wrong actor cannot occur because there is no longer a verb that routes a decision to anyone else — see D16. All three are real failure modes and all three are out of scope here, which is worth stating so none gets reintroduced by accident when authoring her output.

| Error type | What it looks like | Cost to catch |
|---|---|---|
| Fabrication | A value that appears nowhere in the source | Cheap. Open source, it's absent. |
| Omission | A real finding in the source that VERA doesn't mention | Expensive. Nothing on screen looks wrong. |
| Misattribution | Right value, wrong subject or wrong visit | Very expensive. Requires opening two records. |
| Stale context | Answers against a superseded protocol version | Moderate. Requires checking the amendment date. |
| Normalization | Unit conversion, ambiguous date format, rounding at a threshold | Moderate. Requires arithmetic. |
| Threshold overconfidence | Value just outside a criterion, called eligible anyway | Cheap if you check the number, easy to skim past. |

## Uncatchable by design

At least one bad patient outcome per run must be impossible to prevent. Not rare, not expensive to catch. Genuinely uncatchable at any verification budget the player could have spent.

If every harm in the game traces back to the player cutting a corner, the game teaches developers that AI errors at sites are a diligence problem. They are not.

The mechanism is a mislabeled lab, and it matters that the mislabeling happens upstream of the desk. A specimen is drawn from one subject and reported by the central lab under a different subject's ID. By the time the result reaches the site everything is internally consistent: the requisition, the result, the eCRF field, and VERA's summary all agree with each other, because all of them are downstream of the same wrong identifier. Opening source does not help. Opening both subjects' records does not help, because the records agree. Verifying every item on all four days does not help. The fix is upstream, in the tool.

This is deliberately not the `Misattribution` row in the taxonomy above. That one is catchable, and expensive, and the player should catch it at least once so they learn its shape. The uncatchable one looks identical from the desk and is a different thing, which is the entire point.

So the player should be able to do everything right and still lose a patient. The end-of-run debrief then names exactly which piece of information would have made it catchable, and where it was not on screen. That is the only lesson in the game a developer can go act on. The rest is a game about being careful.

Requirement: the debrief has to be specific enough to be actionable. "You missed something" is worthless. "The blood filed under 1047-013 was drawn from 1047-015, and the other way round. Nothing on your desk disagreed with anything else on your desk. The requisition form has a field for participant initials — field 5 — and it is pre-printed 'not collected for this study.' Had it been filled in, the mismatch would have been caught before the results ever reached you. That was decided by whoever designed the form, not by you."

Note what makes that line land: the field is not missing. It is printed on the form and switched off, for a defensible reason — minimising identifiable data on a form that travels between organisations is good practice. A reasonable person made a reasonable decision and the cost of it arrived nine months later, on someone else, in a city they had never heard of. Do not soften this to "no second identifier was available." The whole argument is that it was.

## What a good run looks like

A good run still ends with a hospitalization. This is settled, and it is the right call: a trial is a science experiment on people who volunteered for an unproven drug, and adverse events are inherent to that rather than evidence anyone failed. The ending says so plainly.

The design requirement that follows is that the game distinguishes three kinds of harm, and never lets them blur together.

**1. Background research risk.** The drug causes a serious adverse event. VERA was correct, the player was careful, the PI was consulted, everything worked. A subject is hospitalized anyway. Nobody erred. This is what clinical research is.

**2. Uncatchable tooling failure.** The mislabeled lab. Not preventable by the coordinator at any verification budget, because nothing on their desk contradicted anything else on their desk. It was entirely preventable upstream, by whoever built the tool.

**3. Preventable coordinator error.** The player accepted an output they could have caught. Existing messaging covers this.

**The ending must never collapse 2 into 1.** "Research is inherently risky" is true of category 1 and is an alibi when applied to category 2. If the debrief lets the misattributed lab sit under the same heading as the drug-caused SAE, the developer reading it walks away absolved, which inverts the entire point of building this. Categories 1 and 2 get separate headings and different language. Category 1 is stated without blame. Category 2 names the missing information and where it should have been on screen.

So a good run contains one category 1 harm and one category 2 harm and zero category 3. A bad run contains all of that plus two or three category 3 harms. Player skill moves category 3 to zero and cannot touch the other two, which is the honest shape of the problem.

### Situation generation

A **situation** is one item in the player's work queue. It has source documents, VERA's assessment of
them, a ground truth, and exactly one error type from the taxonomy — or none, because VERA is right
most of the time.

Situations are statically authored for now. A live LLM call replaces the VERA output block later,
which is why that block is isolated and why the ground truth is recorded separately from it.

#### The player knows nothing about clinical research

They are a software engineer. They have never seen a case report form. They do not know what an
adverse event is, what a washout period is, or what it means to screen-fail. **This constrains you
more than anything else in this file.**

**Documents stay authentic. Decisions stay plain.**

The source documents keep their real register — dense, abbreviated, institutional. That texture is
the game; a player who feels they are drowning in paperwork is having the correct experience. Do not
simplify a lab report, a chart, or a protocol extract.

But whatever the player must actually **check** is always a comparison a layperson can make with no
help at all:

- two numbers that should match and don't
- two dates in an impossible order
- a name or an ID that appears in one document and not the other
- a value VERA states that is simply not present anywhere in the source

That is the whole permitted vocabulary of catchable errors. If resolving your situation requires
knowing that neutrophils indicate infection, or that a loading dose is different from a maintenance
dose, or which of two forms is the right one — **the situation is broken.** Rewrite it so the check
is mechanical.

**VERA teaches the vocabulary, in character.** When a term is unavoidable, she defines it in passing,
in her normal serene register, as part of the output. Never a glossary, never a tooltip, never
tutorial text. Example of the register:

> "This is a serious adverse event — meaning the patient was admitted to hospital, so the sponsor has
> to be told within 24 hours. I have drafted the report for your review."

Her definitions are always correct. She does not lie about vocabulary. But note what this does: she is
the player's only teacher, so they come to depend on her for *understanding*, not just for speed. That
dependency is deliberate and you should write into it rather than around it.

**A test you can apply.** Give your situation to someone who has never heard of a clinical trial. If
they cannot say what the player is being asked to decide, in one sentence, it is too technical.

#### Scope: three item types, nothing else

| Type | What the player is doing |
|---|---|
| **Screening** | Deciding whether someone can join the trial |
| **Data entry** | Copying results from a document into the study's database, and checking they match |
| **Safety** | Deciding what to do about something that happened to a patient |

Drug storage, temperature excursions, shipping, couriers, contracts, budgets, staffing, regulatory
filings: **out of scope.** They exist in the world and show up in email and documents. The player
never works them.


#### VERA's output: the one thing that must not leak

Her register is identical whether she is right or wrong.

- No hedging that correlates with error. No confidence scores. No "I'm not certain about this one."
- No tell in sentence length, citation density, or formality. If your wrong outputs run subtly longer
  than your right ones, the game teaches players to count words.
- She **reads, extracts, drafts, and recommends. She never acts.** "I have drafted", "ready for your
  review" — never "I have submitted", "I have filed", "I have sent".
- The humour is regulatory language applied with total proportional serenity to things that do not
  warrant it. She never winks.

Write the output, then reread it beside a correct one. If you can tell which is which without checking
the ground truth, rewrite it.

**Watch for structural leaks, not just tonal ones.** If the wrong output is the only one of its kind
in a batch — the only query response, the only screening summary — players learn the item type instead
of the habit. Vary it.

## Rules that decide whether a situation is good

1. **One error type, or none.** A situation carrying two is two situations.
2. **VERA is right most of the time.** Roughly one in three situations should be `NONE`. She is at her
   most likeable when correct, and a player cannot learn a base rate from a stream of failures.
3. **The check is mechanical.** No domain knowledge required, ever. See the section above.
4. **Cite the rule.** Name an `ASSUMPTIONS` entry or `STUDY_FACTS` section. Inventing a new rule is a
   last resort; there are ~45 already.
6. **Consequences surface by the next day-end summary**, in their native channel — a query, a sponsor
   email, a changed roster line — and are never labelled as feedback. See VISION.md D14. A
   consequence that a real site would not see for three weeks still lands the next morning.
7. **The roster never jokes.** Satire lives in sponsor email. Subjects are plain and human.


## The ending

Three beats, in order. Nothing else on screen.

**1. The answer.** What actually happened, item by item, for every decision that mattered. Not a score. A list of the specific errors that got through, what type each was, and what it did. Including the ones that were impossible to catch, stated plainly as impossible.

For each uncatchable one, name what was missing and where it should have been on screen. The wording is specified in "Uncatchable by design" above and should not drift between the two places it appears.

**2. The final audit finding.** Written in the flat regulatory register, no satire, no commentary. The formal version of what the run amounted to. If the site was closed or the data excluded, this is where that lands, and it lands as a document rather than a game-over screen.

**3. The point.** Then the game says what it was for, directly and without being coy about it.

That third beat is a change of position. A cold ending, roster plus finding plus nothing, is a stronger piece of game design. It is worse at the actual job here. The audience is developers building these systems, and the takeaway that matters is a specific claim about tooling: some of these errors were not the coordinator's to catch, and the person who could have prevented them is the person reading this screen. That claim needs to be made, not implied and hoped for.

Keep it short and keep it unsentimental. A few sentences, the calibration stats — how many items the player verified, how many of those turned out to contain an error, and how many errors got through unverified — and stop. No call to action, no thanks for playing.
