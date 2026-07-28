> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline & Section Analysis — Clinical Trial Budget (Exhibit B to the CTA)

**Target document:** `/Users/dave/code/icf-please/docs/trial_documents/budget.md`
**Study:** ROCKET-Horizon · Protocol 20210143, Amendment 3 (29-NOV-2023) · NCT05651711
**Sponsor:** Amgen Inc. · **Site:** 1047, Cascade Dermatology & Clinical Research, LLC, Portland OR
**Instrument:** Exhibit B to the Clinical Trial Agreement executed 12-DEC-2022
**Budget version to be authored:** Version 2.0, effective 12-DEC-2022
**Currency:** United States dollars (USD)
**Audience:** Gregory Tarrant (Site Director, signs it), Amgen Clinical Contracts (countersigns it),
Priya Raghunathan (lives inside it), and — six months later — whoever at the site has to explain why
the quarter's reconciliation does not match the sponsor's remittance advice.

---

## 0. What this document actually is

A clinical trial budget is not a price list. It is a **contract exhibit** that simultaneously has to
satisfy four different readers with four different anxieties:

1. **The sponsor's finance function** wants a defensible per-participant unit cost it can multiply by
   726 participants across 151 centres and put in a forecast.
2. **The sponsor's compliance function** wants documentary evidence that every dollar paid to a
   physician who prescribes the sponsor's other products is **fair market value for services actually
   rendered**, and not an inducement.
3. **The site's business manager** wants to know whether the study makes money, when the money
   arrives, and how much working capital the site must float in the meantime.
4. **The site's coordinator** wants to know whether the thing she is being asked to do at 07:15 on a
   Tuesday is a thing anybody is paying for.

Those four readers pull in different directions. The compliance reader wants granularity — a line for
every procedure, benchmarked. The finance reader wants a single number. The coordinator wants the
budget to mirror the Schedule of Activities exactly, because that is the document she works from. The
business manager wants the invoiceable schedule to be generous, because that is where the unbudgeted
reality of a trial actually lands.

The budget that gets signed is a compromise. The one that gets *litigated* is the one where the
compromise was never written down.

### 0.1 Relationship to the CTA

Exhibit B is incorporated by reference into the Clinical Trial Agreement. It does not stand alone:
the CTA supplies the definitions (Participant, Completed Visit, Screen Failure, Early Termination),
the payment mechanics that Exhibit B assumes (net 45, holdback release, remittance), the indemnity
and publication terms, and the termination clause that determines what happens to accrued but
uninvoiced work. Exhibit B supplies the arithmetic.

Two drafting rules follow. First, **Exhibit B must never redefine a term the CTA defines.** If the
CTA says a Completed Visit is one where all protocol-required procedures were performed or their
omission documented as a deviation, Exhibit B does not get to say something subtly different.
Second, **where Exhibit B states a financial term that also appears in the CTA body — overhead rate,
payment timing, holdback percentage — the two must be word-identical.** A 28% overhead in the CTA and
a "28% indirect" in Exhibit B applied to a different base is the single most common source of site
payment disputes.

For Site 1047, the binding terms are fixed in advance by `RESEARCH_SITE.md` §6 and cannot be varied:
28% overhead on per-visit clinical procedures and not on pass-throughs; quarterly in arrears, net 45
from receipt of a clean reconciliation; 10% holdback released within 60 days of final database lock
and site close-out; $9,500 non-refundable startup fee invoiceable at CTA execution; IRB fees
pass-through at cost with no markup; screen failures reimbursed at actual procedures performed,
capped at two per randomized participant; $125 per completed visit participant stipend plus travel
and parking, paid by the site and invoiced as a pass-through.

---

## 1. Building a budget from the Schedule of Activities

### 1.1 The SoA is the bill of materials

Every clinical trial budget in existence is built the same way: take the Schedule of Activities,
transpose it, and put a price in each cell where the SoA has an X. The SoA in `STUDY_FACTS.md` §5 has
twelve visit columns and roughly thirty assessment rows; the budget grid has roughly thirty procedure
rows and the same twelve visit columns. That is not a coincidence, it is the whole method.

What makes this non-trivial is that the SoA and the budget do not have a clean one-to-one
correspondence:

- **Some SoA rows are not billable at all.** "Rescue therapy assessment" is a judgement the
  investigator makes while doing something else; it does not get its own line, it gets folded into
  the adverse-event and concomitant-medication review line. "Eligibility review" at Day 1 is a
  five-minute confirmation, not a repeat of the Screening determination, and is priced accordingly.
- **Some budget rows do not appear in the SoA at all.** eCRF data entry, IRT transactions, specimen
  shipping handling, and coordinator visit time are all real work that the SoA never mentions because
  the SoA is a clinical document, not an operational one. If the budget author works only from the
  SoA, the site loses the largest single labour category in the study.
- **Some SoA rows collapse.** Chemistry and haematology are two panels but one draw, one processing
  workflow, and one shipment. Height and weight are two measurements but one line with vital signs.
- **Some SoA rows explode.** "Central safety labs" at Screening sits alongside serology,
  QuantiFERON-TB, TSH/free T4, serum pregnancy, and urinalysis. That is six distinct specimen types
  to process, aliquot, label, and log, from a single venipuncture. Pricing that as one "labs" line
  understates the Screening visit by a factor of five in the specimen-handling category.

The discipline is: **walk the visit in your head, minute by minute, and price what actually happens.**
A Week 2 visit on this protocol is not "a dosing visit"; it is a greeting, a vitals check, a urine
pregnancy test, an eDiary compliance conversation, a certified-rater skin assessment in the
standardized-lighting room, a venipuncture with a predose PK trough that must be drawn *before* the
injection, a walk to the pharmacy, a thirty-minute wait for the syringes to reach room temperature,
two subcutaneous injections in two different sites, sixty minutes of post-dose observation, an IRT
transaction, an accountability entry, and a casebook. Six of those thirteen things are invisible in
the SoA.

### 1.2 Pricing units: what a "line" should be

Three pricing units are in common use, and a good budget uses all three deliberately:

| Unit | Use it for | Why |
|---|---|---|
| **Per-procedure flat fee** | ECG, EASI, DLQI, urine pregnancy test, phlebotomy | The work is bounded and identical every time. A benchmark exists. |
| **Banded time fee** | Coordinator visit time, eCRF data entry | The work scales with visit complexity but is not worth timing to the minute. Bands make the budget auditable without a stopwatch. |
| **Per-unit variable fee** | Specimen processing (per specimen type), translation (per word), query resolution (per query) | The count genuinely varies and both parties can verify it from a system record. |

The failure mode is using a flat fee where the work is variable. "Specimen processing — $85 per
visit" looks tidy and is wrong at both ends: it overpays a Week 8 visit with one panel and badly
underpays a Screening visit with six specimen types. Per-unit pricing costs nothing to administer
because the central lab requisition already records the count.

### 1.3 Banding coordinator time

Coordinator time is the largest line in almost every site budget, and it is the one sponsors push
back on hardest, because it is the one with no CPT analogue. The defensible approach is to band it by
**scheduled visit duration derived from the SoA**, publish the band table in the budget, and let the
sponsor check the arithmetic:

- Bands are stated in hours and dollars, with the hourly rate visible.
- The band assigned to each visit is stated, so the sponsor can dispute the *duration*, not the rate.
- Post-dose observation is priced **separately** from coordinator time, because it is a distinct
  regulatory obligation with a distinct duration (60 minutes at Day 1 and Week 2; 30 minutes
  thereafter) and pricing it inside the visit band hides a real cost difference between visits.

That last point matters on this protocol specifically. Day 1 and Week 2 each carry sixty minutes of
mandatory observation; Weeks 4 through 20 carry thirty. If observation is buried inside a single
"dosing visit" fee, the site is paid the same for a three-hour visit and a two-hour one.

---

## 2. Fair market value — a legal requirement, not a courtesy

### 2.1 Why the sponsor cares more than the site does

A site director reads "fair market value" as a haggling constraint. A sponsor's compliance officer
reads it as the difference between a payment and a felony. The asymmetry is worth understanding,
because it explains almost every negotiating position a sponsor takes on a budget.

**The federal Anti-Kickback Statute (42 U.S.C. § 1320a-7b(b))** makes it a criminal offence to
knowingly and wilfully offer or pay remuneration to induce the referral of, or the purchase, ordering,
or recommending of, any item or service reimbursable by a federal health care programme. The statute
is **intent-based** and, since the Affordable Care Act, has an explicit *one-purpose* gloss: a
payment violates the AKS if **any one** of its purposes is to induce referrals, even if the other
purposes are entirely legitimate. A claim tainted by an AKS violation is, by statute, a false claim
for False Claims Act purposes.

Now apply that to Dr Okonkwo. She is a board-certified dermatologist who prescribes biologics. Amgen
sells biologics. Amgen is about to pay her institution roughly $22,800 per participant. If those
payments exceed the fair market value of the services rendered, a prosecutor does not need to prove
that anyone said "prescribe more"; the excess itself is the evidence of inducement. The **only**
robust defence is a contemporaneous, documented, benchmarked valuation showing that the payment
compensates identified services at a commercially reasonable rate.

That is what a per-procedure budget grid *is*. It is not accounting hygiene. It is the sponsor's
exhibit.

**The safe harbour** at 42 C.F.R. § 1001.952(d) (personal services and management contracts) is the
structure sponsors are aiming at. Its requirements map directly onto budget drafting: the agreement
is in writing and signed; it specifies the services; it covers all services to be provided; the term
is at least one year; **the aggregate compensation is set in advance, is consistent with fair market
value in arm's-length transactions, and is not determined in a manner that takes into account the
volume or value of referrals**; and the services do not involve counselling or promotion of unlawful
activity. Every one of those is a drafting instruction. "Set in advance" is why the budget has unit
prices for unscheduled work rather than "to be negotiated". "Covers all services" is why the
invoiceable schedule needs to be exhaustive rather than a token list.

**The Physician Self-Referral Law (Stark, 42 U.S.C. § 1395nn)** is a strict-liability prohibition —
no intent required — on a physician making Medicare referrals for designated health services to an
entity with which the physician has a financial relationship, unless an exception applies. Research
payments implicate Stark whenever the site is an entity furnishing designated health services and the
investigator has a compensation arrangement. The relevant exceptions (fair market value compensation,
personal service arrangements) again require FMV, set in advance, not varying with referral volume.
Because Stark is strict liability, "we didn't mean it that way" is not available.

**The Physician Payments Sunshine Act (42 U.S.C. § 1320a-7h)** requires applicable manufacturers to
report payments and transfers of value to covered recipients to CMS for publication in the **Open
Payments** database. Research payments are reportable — including payments made to a research
institution where a named principal investigator is identified. So the budget is not merely a private
document: the aggregate paid under it, with Dr Okonkwo's name attached, becomes public. A budget line
that cannot survive being read by a journalist should not be in the budget.

### 2.2 What "fair market value" actually means operationally

FMV is not "what the site asked for" and not "what the sponsor usually pays". The working definition
is the compensation that would be negotiated between well-informed parties in an arm's-length
transaction, not taking into account the volume or value of referrals or other business generated.

In practice sponsors establish FMV three ways, and a budget is negotiated against whichever the
sponsor uses:

1. **Procedure benchmarking.** Where a protocol procedure has a clinical analogue with a CPT code,
   the sponsor benchmarks against a published fee schedule — most commonly the Medicare Physician Fee
   Schedule or the Clinical Laboratory Fee Schedule, geographically adjusted, often at a stated
   multiple (120–200% of Medicare is a common corridor for research, on the reasoning that research
   procedures carry documentation burdens clinical ones do not). Sponsors also license commercial
   datasets that report actual negotiated per-procedure rates across thousands of sites.
2. **Time-and-rate build-up.** Where no CPT analogue exists — coordinator time, eCRF entry, IRT
   transactions, regulatory document preparation — FMV is established as hours × a benchmarked hourly
   rate for the role, drawn from salary survey data (ACRP, SoCRA, or commercial compensation surveys)
   with a defensible burden and overhead loading.
3. **Third-party FMV opinion.** For high-value or unusual arrangements, a valuation firm issues an
   opinion. Rare at the per-site budget level; common for advisory boards and steering committees.

The budget document should **state which basis it used**, per line if the bases differ. That single
sentence — "procedures with a CPT analogue are benchmarked at the geographically adjusted Medicare
Physician Fee Schedule; time-based line items are built from role-specific hourly rates" — is what
converts a price list into an FMV attestation.

### 2.3 The FMV statement in the header

Exhibit B should carry an explicit representation, near the top, that the parties have negotiated at
arm's length, that the compensation represents fair market value for services actually rendered, that
it was set in advance, and that it does not take into account the volume or value of any referrals or
other business between the parties. It should also state that no payment is made for participants who
were not enrolled or for procedures not performed.

This is boilerplate in the sense that it appears in every such document. It is not boilerplate in the
sense that it does nothing: it is the document's own account of its legality, and if it is absent, an
investigator reading the file two years later will notice.

---

## 3. Coverage analysis: who pays for what

### 3.1 The Medicare Clinical Trial Policy

Before 2000, Medicare's position was, broadly, that services furnished in the course of a clinical
trial were not covered because they were not "reasonable and necessary". The **National Coverage
Determination 310.1** (Routine Costs in Clinical Trials), issued under a September 2000 Executive
Memorandum and revised in 2007, changed that. Medicare now covers the **routine costs** of a
qualifying clinical trial, plus the reasonable and necessary items and services used to diagnose and
treat complications arising from participation.

Two definitions do all the work.

**A qualifying trial** must, among other things, evaluate an item or service that falls within a
Medicare benefit category, have therapeutic intent, and enrol patients with diagnosed disease. Trials
of drugs under an IND are deemed to qualify. ROCKET-Horizon — Phase 3, therapeutic intent, IND
145,882, enrolling adults with diagnosed moderate-to-severe atopic dermatitis — qualifies.

**Routine costs** are the items and services that would be covered if the beneficiary were *not*
enrolled in a trial: conventional care, items and services required solely for the provision of the
investigational item (administration, monitoring for the effects, prevention of complications), and
items and services needed for reasonable and necessary care arising from the investigational item.
Routine costs explicitly **exclude**:

- the investigational item or service itself (unless otherwise covered outside the trial);
- items and services provided **solely to satisfy data collection and analysis needs** and not used
  in the direct clinical management of the patient;
- items and services customarily provided free of charge by the sponsor.

### 3.2 What that means for this protocol

A **coverage analysis** (often called a Medicare Coverage Analysis, MCA, or billing grid) walks the
SoA row by row and assigns every procedure at every visit to one of three buckets: **research
(sponsor pays)**, **routine (billable to third-party payer)**, or **not billable to anyone**. It is
performed before the first participant is consented, it is signed, and it becomes the instruction set
for the site's billing department.

Applying that logic to ROCKET-Horizon at Site 1047:

| Procedure | Bucket | Reasoning |
|---|---|---|
| Rocatinlimab / placebo administration | Research | Investigational item; sponsor-supplied free of charge |
| Post-dose observation | Research | Required solely to monitor for the effects of the investigational item — and this protocol's 60/30-minute observation is protocol-specific, not standard dermatology practice |
| EASI, vIGA-AD/rIGA, BSA, SCORAD, FASS/HASS | Research | Certified-rater instruments performed at protocol-specified frequency solely for data collection |
| DLQI, POEM, HADS, daily eDiary NRS | Research | Pure data collection; no clinical management use |
| PK, ADA, biomarker (TARC/CCL17, total IgE), optional genomic samples | Research | Data-collection only; no result returned for clinical management |
| Screening serology (HBV, HCV, HIV), QuantiFERON-TB | Research | Performed to satisfy protocol eligibility, at a frequency and in a population where they would not otherwise be ordered |
| Safety chemistry/haematology at every visit | Mixed — **research at this protocol's frequency** | A dermatologist starting a biologic might order baseline labs and periodic monitoring; she would not draw nine times in 36 weeks. The *frequency* is protocol-driven, so the whole series is research |
| Urine pregnancy test at every dosing visit | Research | Protocol-mandated frequency |
| 12-lead ECG at Screening and Week 24 | Research | Not standard of care for AD |
| Treatment of an SAE arising from participation (e.g. the cellulitis in the safety profile) | **Routine — billable** | Reasonable and necessary care for a complication of participation is expressly covered |
| A routine visit for an unrelated condition during the study | Routine — billable | Would have happened anyway |

The pattern is nearly uniform for an interventional trial of an unapproved biologic in a
non-Medicare-typical indication: **almost everything is research**. That is why the budget grid in
Exhibit B covers essentially the entire SoA, and why the site should bill approximately nothing to
insurance for a ROCKET-Horizon visit.

### 3.3 Why getting it wrong is a False Claims Act problem

The **False Claims Act (31 U.S.C. §§ 3729–3733)** imposes liability for knowingly presenting a false
or fraudulent claim for payment to the government. "Knowingly" includes **deliberate ignorance** and
**reckless disregard** — actual intent to defraud is not required. Penalties are treble damages plus
a substantial per-claim civil penalty, and the statute's *qui tam* provisions let a relator (typically
a former employee — a billing clerk, a coordinator, a research nurse) file suit on the government's
behalf and take a share of the recovery.

The research billing failure mode is mundane and therefore common. A protocol-mandated CBC is drawn
at Week 12. The blood tube goes to the central lab, paid by the sponsor. But the encounter is also
recorded in the practice EMR — Cascade uses Modernizing Medicine EMA for source — and the practice's
billing engine, which does not know what a study is, drops a claim to Medicare for a CBC on the same
date of service. The sponsor pays. Medicare pays. That is a **double bill**, it is a false claim, and
it happened because nobody flagged the encounter as research in the EMR.

Multiply by one procedure per visit, twelve visits, fourteen participants, and the site has generated
168 potential false claims from a single unmapped workflow. The government's research-billing
settlements have run into eight and nine figures at academic medical centres for precisely this.

The controls that prevent it, all of which the budget should assume are in place:

1. A **written, signed coverage analysis** completed before enrolment.
2. A **research participant flag** in the practice management system, applied at consent and removed
   at study exit, that suppresses or routes claims for research encounters.
3. Where a routine cost *is* billed, the correct coding: **modifier Q0** (investigational clinical
   service) or **Q1** (routine clinical service in an approved trial), the **Z00.6** diagnosis code
   (encounter for examination for normal comparison and control in clinical research), and the
   **8-digit NCT number in the claim's clinical trial field** — for this study, 05651711.
4. Periodic reconciliation of the sponsor-paid procedure log against the practice's claims file for
   the same participants and dates.

The budget document itself should carry a short **coverage analysis and billing** clause stating that
all items in the grid are research costs payable by the sponsor and shall not be billed to any
third-party payer or to the participant, and that the site maintains a signed coverage analysis.
That clause is cheap to write and is the site's first line of defence.

---

## 4. Direct costs, indirect costs, and what 28% actually buys

### 4.1 The distinction

**Direct costs** are attributable to a specific participant at a specific visit: the coordinator's
hour, the rater's assessment, the tube, the courier pouch, the stipend. **Indirect costs** — overhead,
facilities and administrative, F&A — are real costs of doing the study that cannot be traced to a
participant without an arbitrary allocation: rent on the two research exam rooms and the consent
room, the keypad-access IP storage room, the Helmer refrigerator and its TempTrak monitoring, the
segregated research VLAN, the locked file room, the monitor's desk, professional and clinical trial
liability insurance, the finance function that issues the invoice, the regulatory infrastructure that
keeps the site inspection-ready, quality and SOP maintenance, CITI and ACRP subscriptions, and the
portion of the Site Director's time spent on this study rather than another.

The overhead rate is the mechanism for recovering those. Site 1047's rate is **28%, applied to
per-visit clinical procedures and not to pass-throughs.**

### 4.2 Why the base matters as much as the rate

A 28% rate on a large base beats a 40% rate on a small one. Three base questions decide the outcome,
and all three should be answered explicitly in the budget rather than left to the first invoice
dispute:

1. **Are pass-throughs in the base?** For Site 1047, no — this is fixed. So the $1,500 of participant
   stipends per completer generates no overhead recovery even though the site does the administrative
   work of paying them.
2. **Is the startup fee in the base?** The convention this budget adopts is that startup and one-time
   fees are **quoted all-in** and are not subject to a separate overhead application; the IRB fee
   inside Section 1 is a pass-through at cost and is excluded from any overhead in any case. Stating
   this prevents an argument later about whether $25,930 of startup should have carried $7,260 of
   overhead.
3. **Are invoiceable service fees in the base?** The convention here: unscheduled visits and repeat
   labs are clinical procedures and therefore carry the 28%; service and administrative fees (SAE
   reporting, monitoring support, amendment implementation, query resolution) are quoted all-in.

### 4.3 The honest accounting question

Does 28% actually cover indirect cost? Almost never at a small private site, and the budget's
reality-check section should say so with numbers rather than implication. Academic medical centres
negotiate federally approved F&A rates of 50–65% on grants and are routinely pushed to 25–30% on
industry trials. Private practices absorb the difference out of the direct-procedure margin. That is
not a scandal — it is simply how industry trial pricing works — but a site director who does not know
the size of the gap cannot tell whether a study was worth doing.

---

## 5. Per-visit payments versus invoiceables and pass-throughs

### 5.1 Three payment mechanisms, three cash-flow profiles

| Mechanism | What it covers | How it pays |
|---|---|---|
| **Per-visit** | The grid: everything that happens on a scheduled visit day | Earned when the visit is completed and the data entered; paid on the quarterly reconciliation; subject to holdback |
| **Invoiceable** | Events that happen, but not on a schedule: SAE reports, amendments, re-consenting, monitoring days, unscheduled visits, query overage | Earned when the event occurs; invoiced with the quarterly reconciliation or separately; typically **not** subject to holdback |
| **Pass-through** | Third-party costs the site fronts: IRB fees, participant stipends and travel, translation, equipment | Reimbursed **at cost, no markup, no overhead**; requires documentation (invoice, receipt) |

The distinction is not cosmetic. A pass-through is a **loan the site makes to the sponsor**. Site 1047
pays every participant $125 in cash at the end of each visit, plus parking. Across fourteen
participants and 166 visits that is $20,750 of stipends and roughly $3,320 of travel — call it
$24,000 — that leaves the site's bank account weeks or months before it comes back, generates zero
overhead recovery, and earns nothing. The same is true of the $3,150 Keystone initial review fee and
every subsequent IRB invoice.

### 5.2 The invoiceable schedule is where the honesty lives

The per-visit grid describes an idealised study in which every participant attends every visit on
schedule and nothing else happens. The invoiceable schedule describes the actual study. If it is
short, the site eats the difference.

A complete invoiceable schedule for this protocol needs, at minimum: IRB initial, continuing, and
amendment review fees; participant stipends and travel; unscheduled visits; repeat and unscheduled
laboratory draws; SAE reporting and follow-up, priced **per event** with a stated hourly rate for
follow-up; protocol amendment implementation, priced per amendment; re-consenting, priced per
participant per amendment; query resolution beyond a stated per-participant threshold; monitoring
visit support, priced per monitoring day; records storage per year; investigational product
destruction or return coordination; translation; equipment purchase or recalibration; site close-out
support; early termination visits; and re-screens.

The one that sites most often fail to negotiate is **query resolution**. Modern EDC systems generate
queries relentlessly, and a coordinator can spend twenty minutes on a single query about a
concomitant-medication stop date. Thirty-odd queries per participant is normal on a Phase 3 with a
heavy PRO battery. At a quarter-hour each that is eight unbudgeted hours per participant. A threshold
("first ten queries per participant included; thereafter $X per query") is the standard structure and
is easy for the sponsor to verify from the EDC audit trail.

---

## 6. Cash flow: the structural problem

### 6.1 The mismatch

The site's costs are **weekly**. Payroll runs every two weeks whether or not anyone enrolled. Rent is
monthly. Participant stipends are paid in cash on the day of the visit. Dry ice is ordered per
shipment with a standing account. The IRB invoices on submission.

The site's revenue is **quarterly, in arrears, net 45, at 90%**. Work performed on 3 January is
included in a reconciliation prepared after 31 March, submitted in mid-April, and paid 45 days after
the sponsor accepts it as clean — call it early June. That is a **five-month lag on the first day of
the quarter**, and it is the *good* case, because "net 45 from receipt of a clean reconciliation"
means the clock does not start until the sponsor agrees the reconciliation is clean. One disputed
visit can hold the whole quarter.

Then 10% is withheld until final database lock and site close-out, which for a study whose last
participant last visit is 27-AUG-2024 means a payment landing somewhere in late 2024 or 2025 — for
work performed in early 2023.

### 6.2 What this looks like in practice

A cash-flow projection is therefore not decoration; it is the section the site director reads first
after the per-participant total. Built properly it shows:

- a **trough**, usually in the second or third quarter of enrolment, when visit volume has ramped but
  the first substantial payment has not landed;
- the **crossover quarter**, when cumulative receipts finally exceed cumulative outlays;
- the **tail**, where activity has stopped, fixed costs continue, and the site is waiting on the
  holdback.

The number that matters is the depth of the trough, because that is the working capital the site must
have or borrow. For a nine-person research division, a trough in the high five figures is the
difference between comfortable and calling the bank.

Mitigations worth negotiating and worth naming in the budget: a larger startup fee paid at execution
(Site 1047 has $9,500, which is modest); milestone payments at first-participant-first-visit and at
enrolment-target-achieved; monthly rather than quarterly reconciliation; a shorter net term; a
holdback capped in dollars rather than percentage; and the right to invoice pass-throughs
separately and immediately rather than waiting for the quarterly cycle.

### 6.3 Holdbacks

A holdback is the sponsor's leverage to secure data cleaning. It is defensible in principle — sites
do go quiet after the last visit, and queries do go unanswered — and punitive in practice, because
the release condition (**final database lock**) is entirely outside the site's control. A site can
answer every query within 24 hours and still wait eighteen months because another site in another
country has not.

Three things to insist on and to write into Exhibit B: the holdback percentage and the base it
applies to (procedures and overhead only, not pass-throughs, not startup); a **stated outside date**
for release regardless of database lock; and an explicit statement that the release is triggered by
"final database lock **and** site close-out", with site close-out defined so the site can tell when it
has happened.

---

## 7. The true cost of a screen failure

### 7.1 Why screen failures are underfunded everywhere

Site 1047 screened 23 people and randomized 14. Nine screen failures is a 39% rate, which for
moderate-to-severe AD with an **EASI ≥16, vIGA-AD ≥3, ≥10% BSA, Worst Pruritus NRS ≥4** entry gate
and a one-week TCS washout is entirely ordinary. Those nine people each consumed a consent
conversation, a full history, an eligibility determination, a certified-rater assessment battery, and
in most cases a venipuncture with six specimen types going to a central lab.

The screening visit is the **most expensive visit in the study** — $1,907.00 in clinical procedures
at this site, more than Day 1 — because it carries the consent process, the full physical exam, the
ECG, the eDiary provisioning, and the largest specimen panel. And it is the one most likely to be
performed on someone who never enrols.

### 7.2 The reimbursement rule and its cap

Site 1047's term is: **reimbursed at actual procedures performed, capped at two screen failures per
randomized participant.** That structure is common and mostly fair.

- "**At actual procedures performed**" is the right basis, because screen failures fail at different
  points. Someone who fails on EASI <16 fails during the visit, before phlebotomy; someone who fails
  on a QuantiFERON result fails a week later, after the site has paid for everything. Paying a flat
  screen-failure fee overpays the first and underpays the second.
- The **cap** protects the sponsor from a site that screens indiscriminately. Two per randomized
  participant tolerates a 67% screen-failure rate before it bites. At 14 randomized the cap is 28;
  the site used 9. It never binds here — but the site should still know where it sits, because a
  study with a tighter cap and a harder entry gate can push a site past it, at which point every
  further screen is free work.

### 7.3 What a screen failure costs the site beyond the reimbursement

Even fully reimbursed, a screen failure is a loss:

- The site pays the **$125 stipend** either way.
- The site absorbs the **pre-screening** effort that produced the candidate — chart review, phone
  screening, the appointment slot. None of that is billable.
- The **28% overhead** on a $1,907 screening visit recovers $533.96 against a fixed-cost base that
  does not scale down.
- The **opportunity cost** is a research exam room and a coordinator morning that could have been a
  Week 12 visit for the competing AD trial down the hall.

The budget cannot fix that, but it should make it visible.

---

## 8. What sites forget to budget

This is the checklist section, and it is the most practically valuable part of the outline. Each item
below is real, recurring work that the SoA does not mention and that a naïve budget therefore omits.

| Forgotten item | Why it happens | What it costs |
|---|---|---|
| **SAE reporting time** | The SoA has an "adverse event review" row; it does not have a "spend four hours reconstructing a hospitalisation from an outside hospital's discharge summary, complete the SAE form, obtain PI causality, transmit within 24 hours, and then do it three more times as follow-up information arrives" row. | 3–5 hours for the initial report, 1–3 hours per follow-up. Price per event, with a stated hourly rate for follow-up. |
| **Re-consenting** | Amendments happen. This study is on Amendment 3 with ICF v4.0.1 approved 19-DEC-2023, meaning every participant still on study had to be re-consented at their next visit. | 30–45 minutes per participant per re-consent, plus the regulatory work of distributing and filing. Price per participant per event. |
| **Query resolution** | Universally underestimated. See §5.2. | 15–25 minutes per query, 25–40 queries per participant on a PRO-heavy Phase 3. |
| **Monitoring visit staff time** | The CRA books two days. Someone pulls the charts, sits with the monitor, answers questions, and resolves findings afterwards. Site 1047 hosted an SIV and five interim monitoring visits. | 6–8 coordinator hours per monitoring day plus 2 regulatory hours. Price per monitoring day. |
| **IP destruction / return** | Happens once, at the end, after everyone has stopped thinking about the study. Reconciliation, sponsor authorisation, packing, courier, documentation. | One-time fee. |
| **Archiving and records storage** | The retention obligation outlives the study by 15–25 years. Someone pays for that shelf. | A startup reserve plus an annual per-study storage fee, invoiceable after close-out. |
| **Pharmacy time** | Wen-Li Chao is on site Tue/Thu at 20% FTE. Beyond visit-day dispensing, she does IP receipt, temperature log review, TempTrak alarm response, quarantine of excursion stock, resupply ordering, and destruction coordination. Only the dispensing is in the grid. | An hourly rate for non-visit pharmacy time; a per-shipment IP receipt fee. |
| **Long-term specimen storage** | If retained samples stay at the site rather than shipping out, the freezer, the monitoring, and the alarm response are the site's problem indefinitely. | Per participant per year. |
| **Safety letter processing** | A 726-participant global Phase 3 generates a steady stream of SUSAR notifications and IB updates. Each one needs logging, PI review, IRB submission where required, and filing. | 0.5–1.0 hour each; dozens over the study. Often entirely unbudgeted. |
| **eDiary chasing** | See below — the signature omission on this protocol. | |
| **Protocol deviation documentation** | Eleven at this site. Each needs investigation, a log entry, sponsor notification, and sometimes a CAPA. | 1–2 hours each. |
| **Screen-failure pre-screening** | The chart reviews and phone screens that produce a candidate. | Never reimbursed anywhere. Know the number anyway. |

### 8.1 The eDiary problem specifically

This protocol requires **daily** entry of three NRS items — Worst Pruritus, AD Skin Pain, Sleep
Disturbance — from consent through Week 24. That is roughly 190 days of daily compliance for a
completer, and the primary and key secondary endpoints depend on it: a ≥4-point reduction in *weekly
average* Worst Pruritus NRS at Weeks 16 and 24 is a key secondary, and a weekly average cannot be
computed from a participant who entered data twice.

The SoA has an "eDiary compliance review" X at nine visits. So a budget built mechanically from the
SoA pays for **nine touchpoints across twenty-four weeks of daily data**. The other fifteen weeks —
the weeks between Week 4 and Week 8, between Week 8 and Week 12, between Week 16 and Week 20 — have
no visit, no X, and no line item, but they absolutely have work: Brendan Koss pulls the DayLog
compliance dashboard weekly, identifies the participants who have dropped below threshold, and calls
them. That is the single most reliably unfunded activity in a modern PRO-driven trial, and the budget
should either price it (a per-participant-per-month compliance management fee) or the reality-check
section should state the shortfall explicitly.

---

## 9. The site director's first question

Gregory Tarrant does not read the budget front to back. He reads two numbers and then asks one
question.

The two numbers are **the per-participant total** and **the enrolment target**. Their product is
what the study is nominally worth.

The question is: **does the per-participant total cover the staff hours the visit schedule demands?**

Answering it requires building an hours model the same way the budget was built — from the SoA — and
then comparing:

1. **Participant-facing hours.** Sum the scheduled visit durations. On this protocol, twelve visits
   ranging from one hour (Week 28 and Week 32: vitals, targeted exam, rater assessments, AE review)
   to three hours (Screening, Day 1, Week 24).
2. **Non-visit hours per participant.** Pre-visit preparation, post-visit closeout, scheduling and
   reminder calls, eCRF entry outside chair time, query resolution, eDiary compliance monitoring and
   outreach, deviation documentation, AE follow-up, monitoring support, re-consenting.
3. **A blended fully-burdened cost rate**, not a charge rate — salary plus payroll taxes plus
   benefits, weighted by the actual mix of roles in the hours model.

Then three ratios:

- **Revenue per staff hour** (procedures plus overhead ÷ total hours). Compare it against the blended
  burdened cost. A ratio below roughly 2.0× means the study cannot carry its own indirect cost; 2.5×
  to 3.0× is a normal working corridor for a well-run private site.
- **Overhead recovery versus true indirect burden.** The 28% is a number in a contract; the site's
  actual allocated indirect plus non-billable study-level effort is a number in the general ledger.
  Print both.
- **Net contribution per participant and for the study as a whole**, and note the difference between
  them — because the per-participant line is usually thinner than the study total, with the startup
  fee and the invoiceable schedule doing the carrying.

Two secondary questions follow immediately and should be answerable from the same model:

- **What happens if enrolment misses?** Startup costs are fixed and largely sunk. A site that
  contracted for 12 and randomized 4 does not lose a third of the margin; it loses all of it, because
  the fixed base is spread over a third of the participants. Conversely Site 1047 randomized 14
  against a target of 12 — the two extra participants are the most profitable in the study, because
  they carry no incremental fixed cost at all.
- **Is any individual line under water?** The eDiary line on this protocol is. Naming it is more
  useful than a favourable bottom line, because it is the line that will still be under water on the
  next study unless somebody negotiates it.

---

## 10. Structure of the document to be authored

| § | Title | Content | Notes |
|---|---|---|---|
| Header | Identification block | Study, protocol 20210143, NCT05651711, EU CT 2022-501538-44, sponsor, site 1047, effective 12-DEC-2022, version 2.0, USD, FMV statement, coverage-analysis clause | Must match `STUDY_FACTS.md` §1 and `RESEARCH_SITE.md` §1 exactly |
| 1 | Startup and one-time fees | Table with unit costs and totals; $9,500 non-refundable fee; IRB initial at cost; SIV staff time; regulatory document preparation; training hours by role; rater certification; pharmacy setup; equipment calibration; archiving reserve | State the hourly rate table once and derive |
| 2 | Per-participant per-visit grid | Procedures as rows, twelve visits as columns, split into three tables by visit group; per-visit subtotal; per-participant completer total | Derived cell by cell from `STUDY_FACTS.md` §5; the three groups must reconcile |
| 3 | Overhead | 28% applied to clinical procedures only, shown explicitly; per-participant total including overhead | State the exclusions |
| 4 | Invoiceable and pass-through items | Unit prices for every item in §8 above | Stated hourly rate for SAE follow-up |
| 5 | Screen failures | The rule; the cap of 2 per randomized; worked example; the actual 9-against-14 total | Two failure archetypes, priced separately |
| 6 | Payment terms | Quarterly in arrears; net 45 from clean reconciliation; 10% holdback and release condition; invoicing requirements; remittance; currency and tax; early termination | Verbatim consistency with `RESEARCH_SITE.md` §6 |
| 7 | Total study value | Contracted at 12; realised at 14 plus screen failures and pass-throughs; arithmetic shown | Both totals to the cent |
| 8 | Payment schedule and cash-flow projection | Quarter-by-quarter costs incurred vs payments received vs cumulative cash position | Show the trough and the crossover |
| 9 | Site cost reality check | Hours model from the visit schedule at a stated blended rate; margin; the eDiary question | The interesting section |
| 10 | Signatures | Amgen; Gregory Tarrant, MBA, Site Director, for Cascade Dermatology & Clinical Research, LLC | Per `RESEARCH_SITE.md` §6 |

### 10.1 Drafting cautions

- **Every total must reconcile in more than one direction.** The three visit-group tables must sum to
  the per-participant total; the sum of per-visit overhead must equal 28% of the procedure total; the
  quarterly cash-flow rows must sum to the realised study value.
- **State every rate once and derive everything from it.** A budget with two different coordinator
  hourly rates in two different sections is a budget nobody trusts.
- **Never let a pass-through pick up overhead.** The single most common arithmetic error in a site
  budget, and it is always caught, and it is always embarrassing.
- **Say what is excluded.** A budget that lists twenty invoiceable items implies the twenty-first is
  free. An explicit "not included, chargeable by written agreement" line prevents that reading.
- **Round consistently and disclose rounding.** Applying 28% per visit and summing gives a different
  answer from applying 28% to the sum, unless the numbers happen to be clean. Check it, and if a cent
  falls out somewhere, say so rather than hiding it.
