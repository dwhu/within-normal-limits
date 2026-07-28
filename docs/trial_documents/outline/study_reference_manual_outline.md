> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline & Section Analysis — Study Reference Manual (Study Operations Manual)

**Target document:** `/Users/dave/code/icf-please/docs/trial_documents/study_reference_manual.md`
**Study:** ROCKET-Horizon · Protocol 20210143, Amendment 3 (29-NOV-2023) · NCT05651711
**Manual version to be authored:** Version 5.0, dated 08-DEC-2023
**Audience:** site staff at all activated centres; used at Site 1047 (Cascade Dermatology & Clinical
Research, LLC) as the day-to-day operational bible.

---

## 1. What a Study Reference Manual is, and why it exists separately from the protocol

### 1.1 The two documents answer different questions

The protocol answers **what must happen and to whom**. It is the scientific and regulatory
instrument: it defines the population, the intervention, the schedule of activities, the endpoints,
the statistical plan, and the safety-reporting obligations. It is filed with regulators (under
IND 145,882 in the US and under EU CT 2022-501538-44 in the EU), reviewed and approved by every
IRB/EC of record, and referenced in the informed consent form. It is a *commitment*.

The Study Reference Manual (SRM) answers **how the site does it**. It is a procedural companion:
what order to run a visit in, how to hold a goniometer — or in this study, how to divide a torso
into quadrants for an EASI area estimate — what to say to a participant when handing them an
eDiary, what to write in the source, what to do when the participant calls to say they are going to
be four days late. It contains no new requirements. It contains the operational *expression* of
requirements that already exist.

### 1.2 Why the separation is load-bearing

Three practical consequences flow from the split, and the manual must state all three explicitly:

1. **Change control.** A protocol change requires a formal amendment: sponsor sign-off, regulatory
   submission, IRB/EC approval, often a re-consent, and a site-level implementation date. That cycle
   takes weeks to months. An SRM revision requires sponsor functional review and re-issue to sites,
   with a training acknowledgement. Days. Putting operational detail in the protocol makes the
   protocol brittle; every practical lesson learned in the field would otherwise require an
   amendment.
2. **Precedence.** Because the SRM is easier to change, it must never be able to change anything
   that matters to participant safety, data integrity, or regulatory commitments. The manual
   therefore carries an explicit precedence clause: **protocol > SRM**, and where the two appear to
   conflict, the protocol governs and the apparent conflict is reported to the CRO as a potential
   SRM erratum.
3. **Inspection posture.** During a BIMO inspection or a sponsor audit, the SRM is evidence of how
   the site was *instructed* to work. If the SRM says one thing and the source says another, that
   gap is a finding. So the SRM must be honest about what is required versus what is recommended —
   the document should use "must" and "should" deliberately, and the manual should say so up front.

### 1.3 What may **never** appear in an SRM

This is the section most easily got wrong, and it deserves a short, hard list in the manual itself.
An SRM may not:

- Add, remove, re-time, or re-window a visit or a procedure. The SoA in STUDY_FACTS.md §5 is
  reproduced in the manual for convenience *only*; the manual cannot alter it. Twelve visits, seven
  doses, ±3 days for Weeks 2–24, ±7 days for Weeks 28–36.
- Change an eligibility criterion, or add a site-level "additional" criterion. A site may not, for
  example, decide it will only enrol participants with EASI ≥20 because that is easier to defend —
  that is protocol-modifying by exclusion.
- Change the dose, regimen, route, or the definition of an endpoint.
- Change what constitutes an SAE, the reporting clock, or the causality framework.
- Waive a required procedure, including for participant convenience.
- Introduce a new consent element or alter what the ICF says. Consent content is IRB-approved;
  the SRM may only describe the *process* of consenting.
- Define a data-handling rule that changes an analysis (e.g., re-defining the weekly-average NRS
  derivation). The manual may *explain* NRI/WOCF so coordinators understand the consequences of
  rescue therapy; it may not create them.

The corollary worth stating: if a site finds a protocol requirement operationally impossible, the
remedy is a protocol amendment or a documented, prospectively approved exception via the medical
monitor — never a local SRM workaround.

### 1.4 What the SRM *is* uniquely good for

- Order-of-operations. The protocol says a PK sample is predose; only the SRM tells you the whole
  ordered sequence of a Week 12 visit, and where the pregnancy test sits inside it.
- Instrument technique. The protocol names EASI; the SRM teaches EASI, with worked arithmetic.
- Failure modes. The protocol is silent on what to do when an eDiary is dropped in a lake.
- Local reality. The EMR-versus-worksheet split at Site 1047 is a site fact, not a protocol fact.

---

## 2. Regulatory and documentation grounding

The manual's documentation guidance must be anchored, not asserted. Three anchors:

### 2.1 ICH E6(R3), §3.6 — Data governance: data and records

E6(R3) reframes documentation as a lifecycle rather than a filing task. The points to carry into
the manual:

- Records must be **attributable, legible, contemporaneous, original, and accurate**, and must
  remain so throughout retention — the classic ALCOA set, now explicit in the guideline text.
- The investigator is responsible for the **integrity of data captured at the site**, including data
  entered directly into a sponsor system (EDC, ePRO), and must have access to and control over the
  site's own data.
- **Metadata matter.** An audit trail is part of the record. Changes must be traceable to who, when,
  and why; the original entry must remain readable.
- **Fit for purpose and proportionate.** E6(R3) explicitly asks sponsors and sites to avoid
  unnecessary complexity — which licenses the manual to say "one record, not three" and to prefer
  direct data entry where the EDC is the first permanent record, provided it is declared as such.
- **Certified copies** are acceptable in place of originals when the copy process is validated and
  the copy preserves content and meaning.

### 2.2 ALCOA+

The manual should teach ALCOA+ by example rather than by definition list alone. The nine elements:

| Element | Site-level meaning at Site 1047 |
|---|---|
| Attributable | Every entry initialled and dated by a person on the DOA log for that task |
| Legible | Readable in ink; no pencil, no correction fluid, no obliteration |
| Contemporaneous | Recorded at the time of the observation, not reconstructed at the end of clinic |
| Original | The first place the observation was recorded, or a certified copy of it |
| Accurate | Matches what actually happened, including when what happened was wrong |
| Complete | Includes repeats, reruns, and the entries you wish had not occurred |
| Consistent | Same date format, same units, same sequence throughout the record |
| Enduring | On a medium that survives the retention period (not a sticky note, not a glove) |
| Available | Retrievable for the monitor, the sponsor, the IRB, and the FDA on request |

Each of these earns a compliant/non-compliant example pair in the manual. That is what makes the
section teachable rather than decorative.

### 2.3 21 CFR Part 11

Relevant to this study because Veriscribe EDC, Axion IRT, DayLog ePRO, and the TempTrak monitoring
system are all Part 11 systems, and the site's EMR (Modernizing Medicine EMA) is treated as a source
system. The manual must cover, in site-operator terms rather than validation terms:

- **Unique credentials, never shared.** A coordinator entering under the PI's login is a Part 11
  violation and a data-integrity finding, regardless of intent. This is the single most common
  serious finding at otherwise clean sites and deserves a boxed warning.
- **Electronic signature = handwritten signature.** The PI's e-signature on a lab report or a
  casebook is a legally binding act with the same weight as ink.
- **Audit trail is not editable and not disable-able**; nobody at the site should ever be asked to
  "clean up" an audit trail.
- **Reason-for-change** is a Part 11 artefact for records already signed; the manual should explain
  when Veriscribe will prompt for one.
- **ePRO data are the participant's own record.** Site staff never enter on a participant's behalf —
  this is both a Part 11 attributability failure and a fabricated-data failure. It belongs in the
  eDiary section as an absolute rule.

### 2.4 Source data verification expectations that follow

Because the CRA (Kevin Ostrander, CCRA) performs source data verification against the source, the
manual should tell the coordinator what the monitor will look for and *why*, so that the site builds
the record forward rather than repairing it backward:

- A source record must exist for every eCRF data point that is not direct-entry, and the site must
  maintain a declared **source data location list** stating, field by field, where the source lives
  (EMR note, paper worksheet, instrument printout, external system).
- Where the EDC is the source (direct entry), that must be declared in advance, not decided later.
- Consent must be verifiable end to end: version, date, times, signatures, who consented, that
  consent preceded every study-specific procedure.
- Eligibility must be reconstructable from the source without the coordinator explaining it.
- Every AE in the eCRF must trace to a source note; every source note describing a symptom must
  trace to an AE assessment or a documented rationale for why it is not one.

---

## 3. Section-by-section analysis of the manual to be written

### 3.1 Cover, version history, purpose, scope, precedence

*Purpose:* establish authority and currency. A manual whose version is ambiguous is worse than no
manual — staff will follow the copy on the shelf. Version history should show what changed and why,
so the reader knows whether their training is stale. Version 5.0 (08-DEC-2023) exists because
Amendment 3 landed on 29-NOV-2023; the manual follows amendments within days, which is precisely
the responsiveness the SRM exists to provide.

### 3.2 Contact directory and document map

*Purpose:* the SRM is the first thing a coordinator opens under pressure. Two questions dominate:
"who do I call?" and "which manual has this?" A document map that routes the reader *away* from the
SRM to the pharmacy manual, lab manual, safety manual, EDC and IRT manuals is a feature, not a
weakness; it also enforces the scope boundary and prevents contradiction between sibling documents.

### 3.3 Study overview at a glance

*Purpose:* orientation for new staff and a stable reference for everyone. One page: design (Phase 3,
randomized 3:1, double-blind, 24 weeks treatment, ~40 weeks total), the two arms, the SoA table
reproduced verbatim from canon, and the co-primary and key secondary endpoints. Every operational
instruction later in the manual should be traceable to something on this page — that is what makes
the instruction feel like a reason rather than a rule.

### 3.4 Roles and delegation

*Purpose:* the DOA log is the document an inspector reads first. Content required:

- The log's structure: task codes, start and end dates, PI signature, and the rule that the PI signs
  the log — nobody signs it on the PI's behalf.
- **Never delegable to non-physicians:** eligibility determination and AE causality assessment.
  At Site 1047 these belong to Okonkwo, Feist, or Nakamura only — expressly not to Vega, FNP-C,
  despite his other delegations.
- **Delegable only with certification:** vIGA-AD/rIGA and EASI rating (DATG certification required).
- **Training precedes delegation, always.** A task cannot be delegated on a date earlier than the
  date the person completed the training for it. Backdating a DOA row is fraud, not paperwork.
- Mid-study changes: adding a person, ending a row, what happens to work performed by someone whose
  delegation had lapsed.

### 3.5 Rater certification and consistency

*Purpose:* this study's co-primary endpoints are both rater-scored. Inter- and intra-rater variance
is the largest controllable source of noise in the dataset. Content:

- DATG certification required before any vIGA-AD/rIGA or EASI is performed on a study participant.
- **Same-rater-throughout rule**, and the escalation when it cannot be met (documented, second
  certified rater, deviation if the reason was avoidable).
- Re-certification cadence and what happens to data if a certification lapses mid-window.
- **Blinding of the rater to prior scores and to eDiary data** — a rater who has just seen that the
  participant reported itch 9/10 all week will not score the skin the same way. This is a genuine
  operational discipline and needs a concrete "how" (worksheet handling, screen locking, who reads
  the compliance report and when).

### 3.6 Visit-by-visit walkthrough

*Purpose:* the working heart of the manual for coordinators. Each visit gets: purpose, day-before
preparation, participant instructions, the ordered sequence, timing, pitfalls, source requirements.
Weeks 2/4/8/12/16/20 share a template with a delta table because they genuinely are the same visit
with different assessment sets — presenting them as six unique visits invites error by obscuring the
differences. Screening, Day 1, Week 24, the follow-up visits, Unscheduled, and ET each get their own
treatment because each is structurally different.

The single most important content in this whole section: **efficacy assessments and predose draws
precede dosing.** Once IP goes in, a "predose" PK sample can never be recovered. It should appear in
every dosing-visit sequence and again on the order-of-operations appendix card.

### 3.7 Screening and eligibility

*Purpose:* Site 1047's screen-fail rate is 39%, mostly EASI <16 and washout non-compliance — both of
which are largely preventable by a good pre-screening conversation. Content: the pre-screen call,
consent (cross-reference the ICF; never restate its content), procedure order that puts the cheap
disqualifiers before the expensive ones, washout verification with a **worked 5-half-life
calculation** for common prior AD therapies, the eligibility checklist, **PI sign-off before the IRT
randomization transaction**, screen-fail documentation, and the single permitted re-screen.

### 3.8 Assessment instructions — the core

*Purpose:* this is where the manual earns its length. Each instrument gets: who administers, when,
duration, procedure, scoring, documentation, and pitfalls. Instruments and the specific teaching
burden of each:

| Instrument | Teaching burden |
|---|---|
| EASI | Region multipliers, four signs, the 0–6 area bands, the arithmetic, a worked total |
| vIGA-AD / rIGA | 5-point morphological anchors; the rIGA decision question at vIGA-AD = 1, reproduced exactly |
| BSA | Palm method (1% per palmar surface incl. digits), regional estimation, over-estimation traps |
| SCORAD | A/B/C components and the A/5 + 7B/2 + C formula; Itch VAS and Sleep VAS |
| FASS / HASS | 5-point clear-to-severe; the baseline-presence rule that determines who is assessed at all |
| DLQI | 10 items, 0–30, "not relevant" handling, ≥4-point MCID |
| POEM | 7 items, frequency bands 0–4, 0–28 total |
| HADS | 14 items, two 0–21 subscales, the <8 cut-off, and a **written safety escalation pathway** |
| Worst Pruritus / AD Skin Pain / Sleep Disturbance NRS | eDiary daily items, weekly average derivation, evaluable-week rule |

The HADS section carries an ethical obligation the others do not: a questionnaire that surfaces
depression creates a duty to act. The manual must give a concrete pathway — who is told, how fast,
what the PI does, what is documented, and that participation is never conditioned on the answer.

### 3.9 The eDiary

*Purpose:* three key secondary endpoints and a primary eligibility criterion depend on it, and it is
the assessment the site controls least. Content: provisioning, a scripted training conversation, the
evening entry window covering the prior 24 h, the compliance threshold, the ≥4-of-7-days rule for an
evaluable weekly average, visit-by-visit compliance review, re-training escalation, lost/broken
device replacement, and the absolute rule that site staff never complete an entry for a participant.

### 3.10 Vitals, physical exam, ECG, weight and height

*Purpose:* small procedures, disproportionate deviation rate. Resting period before BP, consistent
position and arm, ECG before blood draws, weight technique. Also the full-versus-targeted physical
exam distinction as defined by the SoA.

### 3.11 Concomitant medications

*Purpose:* the boundary between "allowed and encouraged" (bland emollients), "allowed with rules"
(most non-AD medication), and "prohibited" (TCS, TCI, PDE4, JAK, systemic immunosuppressants,
phototherapy, other biologics) is exactly where sites make errors. Needs a process for what to do
when a participant reports a prohibited medication after the fact — which is a deviation, possibly
rescue-equivalent, and always a medical-monitor conversation.

### 3.12 Rescue therapy

*Purpose:* the most consequential judgement a coordinator will support. Requires: the trigger,
the hierarchy (topical first, systemic only if topical fails), the principle that rescue is a
welfare decision that never justifies withdrawal or unblinding, the documentation set, and the plain
explanation of the **data consequence** — NRI for binary endpoints, WOCF for continuous. The plain
explanation matters because it lets the coordinator explain honestly to a participant without
implying that the participant should suffer for the dataset. The correct framing, and the manual
should say it in these words: the analysis rules exist so that rescue is never hidden, not so that
rescue is avoided.

### 3.13 Visit windows and scheduling

*Purpose:* seven of Site 1047's eleven deviations are visit-window. The teachable core is one rule:
**windows are calculated from Day 1, not from the previous visit.** Drift is the mechanism by which
compliant-looking sites accumulate out-of-window visits. Plus the pre-emptive medical-monitor
notification when a participant will fall outside.

### 3.14 Source documentation

*Purpose:* apply §2 above to this site. Worksheet inventory, the EMR-versus-worksheet split, what is
direct-entry, correction conventions (single line, initial, date, reason; never obliterate), and
paired compliant/non-compliant examples.

### 3.15 Protocol deviations

*Purpose:* categories, a major-versus-minor decision table with examples drawn from this protocol,
the 5-business-day reporting rule, the deviation log, and the narrower set that is also an IRB
reportable event. The manual should be explicit that a deviation is reported, not concealed, and
that self-identified deviations are a sign of a healthy site.

### 3.16 Discontinuation and withdrawal

*Purpose:* the distinction coordinators most often blur — discontinuing IP is not withdrawing from
the study, and a participant who stops IP should still be followed through Week 36 if they consent
to it. Content: the conversation, the retention offer ladder, the ET visit contents, and the
lost-to-follow-up documentation standard (three documented call attempts on different days at
different times, plus a certified letter, before the participant is declared LTFU).

### 3.17 Participant retention

*Purpose:* short, honest, non-coercive. Reminder cadence, transport and parking, scheduling around
real life, and the things that actually work (a named person who answers the phone) versus the
things sites think work.

### 3.18 Appendices

*Purpose:* printable, usable artefacts. Per-visit checklists, a screening eligibility checklist, an
order-of-operations card for the exam room wall, and a glossary consistent with STUDY_FACTS.md §12.

---

## 4. Scope boundary — what this manual will deliberately not contain

| Topic | Owning document |
|---|---|
| IP receipt, storage, temperature excursions, accountability, returns | Pharmacy Manual |
| Kit handling, tube types, processing, centrifugation, shipping, dry ice | Laboratory Manual |
| SAE forms, reporting clocks, causality definitions, SUSAR handling | Safety Reporting Manual |
| eCRF field-level completion guidance, query resolution | EDC (Veriscribe) User Guide |
| Randomization transactions, kit assignment, emergency unblinding steps | IRT (Axion) User Guide |
| Consent form content and participant-facing language | Informed Consent Form |
| Monitoring visit frequency and SDV sampling | Clinical Monitoring Plan |

The manual references each of these by name at the point of need and stops there.

---

## 5. Voice and register

Second person, imperative, unhedged. "Draw the predose PK sample before the injection" — not "it is
recommended that the predose PK sample be obtained prior to administration." Coordinators read this
document standing up, mid-visit, with a participant in the room. Every sentence should survive that.
"Must" means required; "should" means strongly recommended with a documented rationale if not
followed; "may" means permitted. State that convention in the manual and then honour it.
