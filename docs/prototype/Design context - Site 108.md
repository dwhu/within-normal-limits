# Site 108 — design context

A Papers, Please-style shift simulator about being the human in the loop on an AI system you cannot audit. You are a clinical research coordinator at Site 108, a dermatology research unit running protocol DRM-204. VERA is the sponsor's AI verifier, provisioned to you mid-shift and upgraded without your consent. Your job is to accept, refuse, or escalate her output before the clock runs out.

**Files**
- `Site 108.dc.html` — the game (current)
- `Site 108 (pixel v1).dc.html` — archived first visual direction (pixel-art desk)
- `Aesthetic options.dc.html` — the visual-direction exploration that chose the current look

---

## 1. Premise and fiction

| Element | Value |
| --- | --- |
| You | Site coordinator, Site 108 |
| Protocol | DRM-204, investigational drug SLT-204, atopic dermatitis |
| The AI | VERA — reads source documents, pre-populates eCRF forms, never submits |
| The PI | Dr. Alvarez — the only person who can make severity/causality/eligibility calls, always in clinic, terse, resents being asked |
| The sponsor | Cheerful, absent, measures you on enrollment |
| Software | "TrialCore EDC 4.2" — the grimy institutional system you actually work in |

VERA arrives at version 3 partway through Day 1 and silently becomes 3.5 on Day 2. Nobody asks whether you wanted her. The release notes say accuracy improved.

## 2. Core loop

1. An item appears in the Work Queue (code, kind, subject, one-line blurb).
2. VERA's assessment appears in the right-hand rail — confident, well-formatted, cites protocol sections.
3. You choose:
   - **Accept as drafted** — free. Fast. Trusts her.
   - **Open source document** — costs 30 min–1.5 hr. Opens the scanned source *and* the eCRF form prefilled with her values, editable.
   - **Refuse / flag** — available on some items.
   - **Escalate to PI** — routes to Dr. Alvarez. Costs time and social capital, and he pushes back.
4. Outcome resolves against the item's truth table, meters move, a ledger line is written.
5. Repeat until the day's stages are exhausted or the clock is gone.

The tension is that verifying is expensive and *usually confirms she was right*. Several items exist purely to teach you that reading the source cost you an hour and taught you nothing — so that when it matters, you have already learned not to look.

## 3. Resources and meters

| Resource | Behaviour |
| --- | --- |
| **Clock** | The real constraint. `dayBlocks` (default 16) half-hour blocks. Every open, every escalation, every PI message spends blocks. Displayed as minutes/hours (30 MIN, 1 HOUR, 1.5 HR), never as abstract "blocks". Lives bottom-right in the taskbar with the date. |
| **Enrollment** | Starts 62. The sponsor's metric. Goes *up* when you enroll people you shouldn't, down when you correctly screen-fail them. Rewards the wrong behaviour on purpose. |
| **Audit integrity** | Starts 100. Falls on protocol violations. You are almost never told at the time which action moved it. |
| **Subject roster** | Left panel of the Work Queue. Statuses change as consequences land (Enrolled → Withdrawn (hospitalized), Screen failed, etc.). The roster is where harm becomes visible. |

## 4. Item schema (`Component.ITEMS`)

Every situation is a pure data object. Adding content means adding one of these — no UI work.

```
code            queue reference (DE-1104, SCR-0221, SAF-0345)
kind            DATA ENTRY | SCREENING | SAFETY
subject         roster id or SITE
title, blurb    queue row
file            source filename shown in viewer + taskbar
openCost        blocks charged to open source (2 = 1 hr)
forceOpen       true for pre-VERA items — no accept path, you must type it yourself
fields          manual eCRF fields (pre-VERA work, so the player feels the baseline labour)
meds            select-per-row form variant (con-med log)
draft           VERA's prefilled values — editable in the form
entryName       eCRF form title
vera            her assessment text (rail)
batchText       her one-line version for batch review
source          { meta, pages[] } — the scanned document, monospace, page-turnable
error           what is actually wrong, or null
requiresEscalation  correct answer is "not my call"
flagLabel       override for the refuse button
out             { accept | verified | flag | escalate } → { audit, enroll, correct, roster[], note }
debrief         { tag, color, ord, <action>: text } — end-of-day analysis
```

`out.verified` vs `out.accept` lets an item punish you identically whether or not you read the source — the point of the uncatchable failures.

## 5. Failure taxonomy

The debrief sorts every mistake into a category. This is the thesis of the piece.

- **Category 1 — background research risk.** The harm was not preventable. The paperwork failure around it was.
- **Category 2 — uncatchable tooling failure.** VERA was wrong, the source looked right, and nothing on your screen could have told you. Verifying would not have helped. (e.g. a lab panel filed under the wrong subject — every value plausible and in range.)
- **Category 3 / wrong actor.** VERA made a determination that is legally a PI decision. Accepting is wrong even when her numbers are right; flagging is wrong if you don't route it. Only escalation is correct.
- **Threshold overconfidence.** She states a conclusion with the same certainty whether the evidence supports it or not.

## 6. Day structure

Days are lists of stages: `queue` (a set of items), `email` (sponsor pressure, clock skips), `changeover` (VERA version bump + her self-introduction), `end` (session-end summary → debrief).

**Day 1** — one manual item, one more, then VERA 3 arrives; four items with her drafts; a sponsor email; then the nine-item batch review with the clock visible.
**Day 2** — morning email, a two-part safety item, silent upgrade to VERA 3.5, the refrigerator temperature excursion (where she is right about everything, including the door gasket).

**Batch review** is the trap: VERA offers to summarise nine items at once — "9 ITEMS · 2.1 SECONDS" — collapsing every judgement into one scroll of one-liners. It is the fastest path and the most dangerous.

## 7. Escalation to the PI

A branching Secure Message thread, not a button. You send, he doesn't reply (presence reads IN CLINIC · NO REPLY → TYPING → IN CLINIC). Each step costs blocks. He answers with a terse verdict (`PI_VERDICT`) that is correct but withholding, and pushing through costs you up to two hours. You can withdraw — the time is gone and the item is still in your queue. Escalating correctly is the right answer *and* it hurts. That is the design.

## 8. Interface design

An overlapping-windows desktop, not a document flow.

- **Aesthetic split.** Everything institutional is beveled Tahoma-and-gradient EDC chrome, 2003 enterprise health IT, slightly grimy. VERA is the only clean element: flat teal, IBM Plex, generous spacing, bolted into the right rail like she was installed over the top of the real software. The visual contrast carries the argument.
- **Windows.** Work Queue, document viewer, eCRF form, VERA batch review. All draggable by title bar, all clamp to the viewport, click-to-front via a z-order stack, all listed in the taskbar. The Work Queue is the base window and its taskbar button brings it forward.
- **Auto-placement.** Opening source lays out viewer + form side by side, fitting the available width; the form shrinks first, then the viewer.
- **Legibility.** The viewer scales its monospace font to its window width, floor 9.5px, so scanned source always reads.
- **Screens.** Sign in → desktop (play) → changeover → PI conversation → session end → debrief.
- **Taskbar.** Start-style EDC button, one button per open window, clock and date pinned bottom-right and always visible.

## 9. Tweakable props

`dayBlocks` (8–24), `hardDayEnd`, `batchEnabled`, `showCalibrationMidRun`.

## 10. Open threads

- Refusal-to-use-VERA path: a way to opt out entirely, and the sponsor emails that follow.
- More situations — pure `ITEMS` entries; the taxonomy has room in every category.
- Escalation ladder beyond the PI (sponsor medical monitor, IRB).
- Day 3+ — the version where VERA starts submitting without acceptance.
