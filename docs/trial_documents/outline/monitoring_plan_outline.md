> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline — Clinical Monitoring Plan (Protocol 20210143 / ROCKET-Horizon)

Deep section analysis: what a Clinical Monitoring Plan (CMP) contains, why each part exists, what
regulation each part discharges, and — because this is source material for a game played from the
site's chair — what each part *does to the site*. Written as design notes for
`/docs/trial_documents/monitoring_plan.md`.

---

## 0. The document's peculiar position

Every other document in this corpus is written **to** the site. The protocol instructs the
investigator. The Study Reference Manual teaches the coordinator. The ICF speaks to the participant.
The Safety Reporting Manual hands the site a fax number and a clock.

The Clinical Monitoring Plan is different. It is written **by** the sponsor, **for** the CRO's own
monitoring staff, **about** the site. The site is the object of the sentence, not the recipient of
the letter.

That single fact drives almost every design decision below, and it is the reason this document is
interesting in a game about working at a site:

1. **The site is not the intended audience but is entirely governed by it.** The CMP decides how
   often Kevin Ostrander shows up, what he opens first, what fraction of the data he re-reads
   against source, which numbers get watched from a desk in another state, and what happens on the
   day a number crosses a line. None of that is negotiable by the site, and most of it is invisible
   to the site.
2. **It contains an escalation ladder that ends in the site's termination.** It is a document that
   quietly enumerates the conditions under which the player loses their job, written in the mild,
   process-neutral register of clinical operations.
3. **It is nonetheless routinely shared.** In practice sites frequently receive the CMP or a
   site-facing extract of it, sometimes at the SIV, sometimes never. A site that has read it knows
   what triggers a for-cause visit. A site that has not, does not. That asymmetry is the point.

**Design consequence:** the plan must be written in a voice that never addresses the site directly
except in the sections that define the site's obligations. Elsewhere the site is "the site,"
"Site 1047," "the investigator" — third person, observed. Where the document does turn and address
the site (the follow-up letter in the appendix, the obligations subsection), the register change
should be palpable.

---

## 1. What a Clinical Monitoring Plan *is*, and what it is not

| Document | Answers | Owner | Audience |
|---|---|---|---|
| Protocol | What the study does to participants | Sponsor | Regulators, IRB, investigator |
| Study Reference Manual | How the site executes a visit | CRO/Sponsor | Site staff |
| Safety Reporting Manual | How safety data moves | CRO/Sponsor | Site staff |
| **Clinical Monitoring Plan** | **How the sponsor verifies the site did it right** | **CRO on behalf of sponsor** | **CRAs, central monitors, CTM; site secondarily** |
| Data Management Plan | How data is cleaned and locked | CRO Data Management | DM, programmers |
| Site SOPs | How this site does anything | Site | Site staff |

The CMP is the operational instantiation of a *sponsor* obligation, not an investigator obligation.
Its statutory parent is short and blunt:

> **21 CFR 312.56(a)** — "A sponsor who discovers that an investigator is not complying with the
> signed agreement (Form FDA 1572), the general investigational plan, or the requirements of this
> part or other applicable parts shall promptly either secure compliance or discontinue shipments of
> the investigational new drug to the investigator and end the investigator's participation in the
> investigation."

Read carefully, that sentence is the entire escalation ladder in embryo: *secure compliance* (all the
retraining, CAPA, and for-cause visits) **or** *end participation* (termination). Everything in
§10 of the plan is elaboration on that "either/or."

Its companions:

- **21 CFR 312.50** — sponsors are responsible for "ensuring proper monitoring of the
  investigation."
- **21 CFR 312.53(d)** — sponsors must select monitors qualified by training and experience.
- **21 CFR 312.56(b)** — a sponsor who discovers noncompliance *by the sponsor's own review* must
  act; and 312.56(c)-(d) require review of safety information and discontinuation of an
  investigation presenting unreasonable risk.
- **21 CFR 312.62 / 312.68** — investigator recordkeeping and the obligation to permit FDA access;
  this is what makes source records inspectable, which is what makes SDV possible at all.

**Design consequence for the plan:** the regulatory section must not be a list of citations. It must
make visible that monitoring is a *sponsor risk-control activity*, not a service the sponsor
performs for the site. Sites often experience monitoring as help — the CRA finds the missing
signature before the auditor does — and it can be, but that is a by-product. The plan's own voice
should never pretend otherwise.

---

## 2. ICH E6 and the shift the plan is written on top of

### 2.1 What E6(R1) produced in practice

E6(R1) (1996) §5.18 described monitoring in terms of *purpose* — verify rights and well-being of
subjects, verify reported data are accurate/complete/verifiable from source, verify conduct complies
with protocol, GCP, and regulatory requirements — and then said essentially nothing about *how
much*.

Into that silence, the industry poured **100% source data verification**. Every field in every eCRF
for every participant, checked letter-by-letter against a paper chart, by a CRA sitting in a room at
the site. It became the default because it was defensible, auditable, and required no thinking. It
consumed, by common estimate, a quarter to a third of trial operating cost.

It also did not work very well. The published evidence that accumulated through the 2000s and 2010s
was consistent and uncomfortable:

- SDV finds a very large number of trivial transcription discrepancies and a very small number of
  errors that would change a study conclusion.
- The errors that *do* change conclusions — a participant enrolled who did not meet eligibility, an
  unreported SAE, a systematically miscalibrated rater, a fabricated visit — are frequently
  invisible to field-by-field comparison and frequently *visible* in aggregate data patterns.
- CRA time spent on comparison is CRA time not spent on process: watching a consent conversation,
  interviewing a coordinator, opening the drug fridge, walking the storage room.

### 2.2 E6(R2) (2016): quality by design, risk-based monitoring, made mandatory

The R2 addendum inserted §5.0 (**Quality Management**) and rewrote §5.18. It required the sponsor
to:

- implement a system to manage quality throughout the trial, focused on activities **essential to
  ensuring human subject protection and the reliability of trial results** (this phrase is the
  origin of the term "critical");
- identify critical processes and data during protocol development;
- perform **risk identification, evaluation, control, communication, review, and reporting** —
  the six-step cycle every RACT table in the industry is drawn from;
- define **quality tolerance limits** in advance, taking into consideration the medical and
  statistical characteristics of the variables, and evaluate deviations from them;
- adopt a **risk-based approach to monitoring**, with the sponsor developing "a systematic,
  prioritized, risk-based approach to monitoring";
- explicitly permit **centralized monitoring**, describing it as statistical/analytical evaluation
  of accumulating data performed in a timely manner, and stating that it "can provide additional
  monitoring capabilities that can complement and reduce the extent and/or frequency of on-site
  monitoring";
- require a **monitoring plan** as a document, tailored to the human subject protection and trial
  integrity risks, describing the monitoring strategy, responsibilities, methods, rationale, and
  emphasising monitoring of critical data and processes.

R2 §5.18.3 also carried the important sentence that the sponsor "should determine the appropriate
extent and nature of monitoring" based on objective, trial-specific factors — objective, meaning the
plan must show its reasoning rather than assert a percentage.

### 2.3 E6(R3) (2025): the renumbering and the reframing

R3 restructures the guideline into Principles + Annex 1 (interventional trials) + Annex 2 (elements
for less-conventional designs). For a monitoring plan the two anchors are:

- **§3.11 — Quality Management / Risk-based approach** (sponsor section): the quality-by-design and
  proportionality framing. R3 sharpens the R2 language in three ways worth reflecting in the plan:
  - it foregrounds **proportionality** — controls should be proportionate to the risk's importance
    to participant safety and result reliability, and *"errors that have no meaningful impact"*
    should not be pursued at the cost of the ones that do;
  - it insists that quality is designed in, not inspected in — the protocol and systems should make
    the error hard to commit, and monitoring only catches what design failed to prevent;
  - it makes **risk review a continuing loop** — the risk assessment is a living object revisited at
    defined intervals and on trigger, not a startup artefact.
- **§4.10 — Monitoring** (sponsor section): the operational requirements. Extent and nature
  determined by risk; on-site, centralized, or a combination, with the combination justified;
  monitoring plan required and to be kept current; monitors qualified and trained; monitoring
  results documented and communicated; findings followed up to resolution; escalation of significant
  non-compliance; and the requirement that the sponsor act on identified issues including, where
  necessary, terminating the site's participation.

R3 also elevates **serious breach** handling and the expectation that significant non-compliance is
reported to regulators and IRBs/IECs where required.

**Design consequence:** the plan should cite E6(R3) §3.11 and §4.10 as its architecture, but must
also make the *why* legible in one paragraph a coordinator could read: we no longer check
everything, because checking everything is how studies used to miss the things that matter.

---

## 3. FDA and EMA source documents the plan should stand on

### 3.1 FDA — *Oversight of Clinical Investigations: A Risk-Based Approach to Monitoring* (final guidance August 2013; questions-and-answers guidance March 2019)

The 2013 guidance did three things the plan should reflect:

1. **It said out loud that FDA does not require 100% SDV.** The guidance states the agency
   encourages greater use of centralized monitoring and that on-site monitoring at fixed intervals
   with 100% data verification "may not be the most effective way" to ensure quality. This mattered
   because the practice was sustained largely by fear of the inspector.
2. **It recommended a written monitoring plan** describing the monitoring methods, responsibilities,
   requirements, and the rationale for the chosen approach, and identified the plan itself as an
   essential document.
3. **It enumerated risk factors to consider** in choosing intensity: complexity of the study design;
   type of endpoint (subjective endpoints and investigator-assessed endpoints carry more risk than
   objective ones — *directly applicable here*, since EASI and vIGA-AD are both); clinical
   complexity of the population; geography and number of sites; use of electronic systems;
   relative safety of the investigational product; stage of the trial; and quantity of data.

The **2019 Q&A** added practical clarifications the plan should implement rather than quote:

- monitoring plans should be **risk-indexed, not uniform** — different sites in the same study may
  legitimately receive different monitoring intensity, and that difference must be documented and
  justified rather than improvised;
- **centralized monitoring findings can and should change on-site plans** — the plan must include a
  feedback path from the central monitor to the field;
- **sponsors should describe how monitoring findings are communicated, escalated, and resolved**,
  including timelines;
- sponsors should specify what happens when a site does not respond, and should not treat an
  unanswered follow-up letter as closed.

### 3.2 EMA — *Reflection paper on risk based quality management in clinical trials* (EMA/269011/2013, adopted 18-NOV-2013)

The EMA paper is the more conceptually rigorous of the two and supplies the vocabulary the RACT
table uses. Its contributions:

- the risk framework of **identify → evaluate → control → communicate → review**, evaluated on
  **probability of occurrence, impact on participant safety/data integrity, and detectability**
  (detectability is the axis the FDA guidance mostly omits, and the one that most changes monitoring
  design — a high-impact risk that is *easily detected centrally* needs a KRI, not a plane ticket);
- explicit endorsement of **quality tolerance limits** and of accepting that "zero defects" is not
  the objective;
- the distinction between risks to **participants** and risks to **reliability of results**, which
  should be carried into the critical-data table as two separate justification columns;
- emphasis that risk controls must be **proportionate and documented**, and that the sponsor must be
  able to explain to an inspector why it monitored what it monitored.

### 3.3 EU Clinical Trials Regulation (EU) No 536/2014 — Article 52, serious breach

Because this study runs in Belgium, Czechia, Denmark, Estonia, Finland, Germany, Poland, Portugal,
Romania, Spain, and Sweden (among the 21 countries in the registry record), the CMP must be
CTR-compliant, and the serious breach clock is a hard, statutory number:

> **Article 52(1)** — Where a serious breach occurs, the sponsor shall notify the Member States
> concerned through the EU portal **without undue delay but not later than seven days of becoming
> aware of that breach**.
>
> **Article 52(2)** — "serious breach" means a breach likely to affect to a significant degree the
> safety and rights of a subject or the reliability and robustness of the data generated in the
> clinical trial.

Two design points follow. First, the seven days runs from **sponsor awareness**, which means the
site's obligation is to escalate *immediately*, not to investigate first and report a tidy
conclusion; the plan must say so. Second, the definition is a two-limb test (safety/rights **or**
data reliability), so a data-integrity event with no safety consequence is still capable of being a
serious breach — a point sites routinely get wrong.

The UK equivalent (Medicines for Human Use (Clinical Trials) Regulations 2004, reg. 29A) uses the
same seven-day clock to the MHRA and applies to the Great Britain sites in the registry record.

### 3.4 Other instruments the plan touches

- **ICH E6(R3) Annex 1 §2.x** — investigator obligations that monitoring verifies: qualified staff,
  adequate resources, delegation, records.
- **ICH E8(R1)** — quality by design and "critical to quality factors," the conceptual sibling of
  critical data/processes.
- **21 CFR Part 11 / Annex 11** — audit trails; the plan should require audit-trail review as a
  monitoring activity, because the audit trail is where retro-dating and mass edits surface.
- **21 CFR 50 / 56** and **EU CTR Ch. II–III** — the consent and ethics rules that make consent
  verification the single most heavily monitored process in any plan.
- **HIPAA / GDPR** — constrain remote source access; the driver behind the remote-monitoring limits
  section.

---

## 4. Critical data vs critical processes — the distinction the whole plan hangs on

This is the section most monitoring plans get muddled, and getting it clean makes the document feel
real.

- A **critical process** is an *activity* whose failure endangers participants or invalidates
  results: obtaining informed consent; determining eligibility; randomising; storing and
  administering IP; performing the primary endpoint assessment; identifying, assessing, and
  reporting SAEs; capturing rescue therapy; maintaining the blind.
- **Critical data** are the *records* that evidence those processes and feed the analysis: the
  signed consent form and its date/time; the eligibility values (EASI, vIGA-AD, BSA, Worst Pruritus
  NRS, washout dates); randomisation number and stratum; kit numbers and dosing dates; EASI and
  vIGA-AD at Week 24; SAE onset/seriousness/causality/outcome; rescue therapy start date and agent.

The two are monitored by different techniques, which is the whole reason to separate them:

| | Critical process | Critical data |
|---|---|---|
| Monitored by | **Observation, interview, walkthrough, document review (SDR)** | **Comparison against source (SDV)**, plus central analytics |
| Detects | Wrong method, undocumented delegation, unqualified rater, consent obtained after a procedure, IP left at room temperature | Transcription error, missing value, out-of-window date, implausible value |
| Fails silently when | The data look fine because the process produced clean-looking data | Nobody looks at source |
| Example failure | Coordinator consents the participant, PI countersigns three days later without having met them | eDiary compliance transcribed as 84% when the raw export says 61% |

**Design consequence:** the critical-data table in the plan must have a *process* column and a
*data* column, and the strategy section must assign a technique to each. A plan that only lists SDV
percentages has silently declared that it does not monitor processes at all.

---

## 5. SDV vs SDR — two different verbs

Sites and junior CRAs conflate these constantly; a good plan defines them in its first pages and
uses them consistently thereafter.

**Source Data Verification (SDV)** — comparing a data point recorded in the eCRF against the
original source record, to confirm the eCRF faithfully reproduces the source. It asks: *does the
database match the chart?* It is a **transcription** check. It answers nothing about whether the
chart is right.

**Source Data Review (SDR)** — reviewing the source documents themselves for quality, completeness,
consistency, plausibility, protocol compliance, and GCP compliance, independent of what was
transcribed. It asks: *is the chart any good, and does it show a compliant study?* SDR catches:

- a Week 12 visit note that never mentions rescue therapy assessment, which the protocol requires at
  every visit;
- a consent form signed on a date after the screening labs were drawn;
- an EASI worksheet with a total that does not equal the sum of its regional components;
- a vital-sign entry that is identical across four visits;
- a physician progress note describing "flare, started triamcinolone" with no AE and no rescue
  therapy entry;
- an eDiary training record that predates the participant's consent.

Note the asymmetry: **you can do 100% SDR with 0% SDV, and vice versa.** They are independent dials.
Modern risk-based plans typically hold SDR high (because it is where the real findings are) and
allow SDV to drop for non-critical fields.

A third verb worth defining, because it appears in the KRI section:

**Centralized data review / statistical monitoring** — examination of accumulating aggregate data
across sites for patterns: outliers, inliers, digit preference, improbable variance, temporal
clustering, duplicate records. This finds what neither SDV nor SDR can, because neither of them
compares Site 1047 to the other 150 sites.

---

## 6. What centralized monitoring detects that a site visit cannot

Worth a dedicated subsection in the plan because it justifies the whole reallocation of effort.

| Signal | What it looks like | Why on-site monitoring misses it |
|---|---|---|
| **Rater drift / miscalibration** | Site's mean EASI change is 2 SD from the study mean; site's baseline EASI clusters at 16–18 | The CRA sees one site. A rater consistently scoring 3 points high looks entirely normal in the chart. |
| **Digit preference / rounding** | Terminal digits of EASI scores non-uniform; vital signs ending in 0 far too often | Individual values are plausible; only the distribution is wrong. |
| **Inlier fabrication** | Variance *too low* — a participant's daily NRS entries with implausibly small day-to-day variation | Fabricated data usually looks tidier than real data. Tidy data does not attract a CRA's eye. |
| **Under-reporting of AEs** | Site reports 0.4 AEs/participant when the study mean is 2.1 | You cannot SDV an event that was never recorded anywhere. Absence has no source document. |
| **Enrollment implausibility** | Six randomisations in one week at a site that averages one a month | Looks like success, in real time, at the site. |
| **Duplicate or shared participants** | Same DOB + initials + sex across two sites in one metro area | Requires cross-site data. |
| **Date-pattern anomalies** | All eDiary entries for a participant entered in a single session before a visit | Requires the raw device audit trail, which is vendor-side, not site-side. |
| **eCRF audit-trail anomalies** | Mass edits to eligibility fields the day after a monitoring visit | Requires audit-trail analytics across the study. |
| **Query behaviour** | Site's queries reopened at 3× the study rate; a pattern of answers that change the data to whatever the query implied | The CRA who raised the query sees only their own queries. |

The last row is the argument for an independent **Central Monitor** role, separate from the CRA:
the person who raises the query should not be the only person judging the answer.

**And the converse, for balance** — the plan should state honestly what centralized monitoring
cannot do, or the site-facing sections lose credibility: it cannot read a paper chart that was never
transcribed; it cannot watch a consent conversation; it cannot open the refrigerator; it cannot
interview the coordinator who has been quietly covering three studies alone since a colleague left;
it cannot tell you the standardized-lighting exam room now has a broken bulb and the rater has been
scoring erythema in a hallway.

---

## 7. Triggers — for-cause visits and audits

The plan must be concrete about what turns a routine schedule into an unscheduled one. Design the
trigger list in three tiers.

**Tier 1 — automatic for-cause visit (no discretion):**
- credible allegation of data falsification or misconduct;
- suspected consent forgery, missing consent, or a participant treated without a signed consent;
- an SAE discovered in source that was never reported;
- IP dispensed to a participant who did not meet eligibility;
- a temperature excursion in which IP was administered from quarantined stock;
- loss of the blind at site level;
- notification of a regulatory inspection of the site.

**Tier 2 — CTM discretion, presumption in favour of a visit:**
- two consecutive IMVs with unresolved action items past due date;
- three or more KRI thresholds simultaneously red;
- deviation rate exceeding the study QTL at site level;
- change of PI, or departure of the lead coordinator, mid-study;
- protocol deviation of major category;
- a site whose data are an outlier on the primary endpoint.

**Tier 3 — trigger for *increased routine intensity*, not a separate visit:**
- new site or new staff (the first-participant rule);
- first two participants at any site;
- resumption after an enrollment hold;
- reduced-SDV site that produces a critical finding — SDV returns to 100% for a defined period.

**Audit triggers** are distinct and should be described as such: sponsor Quality Assurance selects
sites by risk model (high enroller, outlier data, prior findings, first-in-country, sites likely to
be inspected because they contribute heavily to the pivotal analysis) plus a random component. The
random component matters and should be stated — an audit programme with no random arm is a
programme sites can game.

---

## 8. Section-by-section design notes for the plan itself

### 8.1 Cover and version history
Standard. Version 4.0 / 15-DEC-2023 places it just after Protocol Amendment 3 (29-NOV-2023) and the
SRM v5.0 (08-DEC-2023) — the plan is being re-issued *because* of the amendment, and the version
history should show that lineage, plus earlier revisions driven by the R2→risk-based transition and
by observed study data (rater variance, eDiary compliance). Include an approvals block with
signature lines — sponsor Clinical Program Lead, CRO Clinical Trial Manager, CRO Lead CRA, Medical
Monitor, Data Management Lead, Quality lead. Signature *blocks*, unsigned, as a controlled document
template would appear.

### 8.2 Purpose, scope, regulations, definitions
Scope must state what is *out* of scope as loudly as what is in: this plan does not cover safety
reporting (Safety Reporting Manual), data cleaning (Data Management Plan), vendor oversight
(Vendor Oversight Plan), or audits (QA Audit Plan). Monitoring plans bloat when scope is not fenced.

Definitions: SDV, SDR, critical data, critical process, KRI, QTL, RACT, centralized monitoring,
for-cause, action item, significant issue, serious breach, CAPA. Define once, use consistently.

### 8.3 Roles and responsibilities
Named humans where the canon supplies them. Rosalind Achebe (CTM), Kevin Ostrander CCRA (assigned
CRA for 1047), Ana Belmonte-Ruiz MD (Medical Monitor). Invent a Central Monitor, a Lead CRA/Regional
Monitoring Manager, a Data Management Lead, a QA lead, and a sponsor Clinical Program Lead — and log
them.

The subsection that matters for the game is **"Site obligations to the monitor"**: direct source
access under 21 CFR 312.68 and E6, workspace, availability of the PI during the visit, response
timelines to follow-up letters, notification obligations (staff changes, inspections, IRB actions,
data breaches). This is where the document turns and speaks to the site, and it should read like a
contract clause.

### 8.4 Risk assessment (RACT)
The centrepiece. Score on **Likelihood (1–5) × Impact (1–5) × Detectability (1–5, where 5 = hard to
detect)**, product 1–125, banded. Detectability inverted is the standard convention and produces the
right behaviour: an easily-detected risk scores low even at high impact, which is exactly why it
gets a KRI instead of a visit.

Study-specific risks, each with a mitigation and a *monitoring response* (the two must differ —
mitigation prevents, monitoring detects):

1. **Rater inconsistency across 151 sites and multiple raters per site.** Site 1047 alone has three
   certified raters (Okonkwo, Feist, Nakamura) plus a non-delegated NP. Both co-primary endpoints
   are investigator-scored. This is the highest-impact, lowest-detectability risk in the study.
2. **eDiary compliance over ~168 consecutive days of daily entries** across three NRS items. Known
   to decay; drives key secondary endpoints; already the cause of 2 of Site 1047's 11 deviations.
3. **Washout verification at screening** — three separate washout rules (12 weeks/5 half-lives
   biologics; 4 weeks/5 half-lives systemics, phototherapy, JAK; 1 week topicals) verified against
   patient recall and outside records.
4. **Cold-chain integrity** — 2–8 °C PFS, ≤30 days cumulative ≤25 °C excursion allowance, 24-hour
   sponsor notification.
5. **Blinding integrity** — matched PFS, no unblinded pharmacist, blinded raters; risk of
   inadvertent unblinding via AE pattern (pyrexia/chills at 10.3% vs 1.1%), IRT misuse, or
   lab-result inference.
6. **Rescue therapy documentation.** Highest data-integrity leverage in the study: rescue therapy
   triggers NRI/WOCF, so an undocumented rescue converts a non-responder into a responder. A site
   under enrollment pressure has a motive it may not even recognise.
7. **PK/ADA trough timing errors** — predose samples drawn post-dose invalidate trough
   concentrations irrecoverably. Site 1047 already has one missed PK sample logged.
8. **Screening EASI/vIGA-AD score inflation to meet ≥16 / ≥3 thresholds.** Name it explicitly. When
   a site has a 39% screen-fail rate driven by EASI <16, the pressure to score generously is
   structural, not moral. The monitoring response is central: baseline score distribution vs study,
   proportion of baseline EASI in the 16.0–18.0 band, and the baseline-to-Week-2 trajectory (an
   inflated baseline produces an implausibly large early "improvement").

Additional risks to round out the table: visit-window compliance; delegation/training currency;
IRT transaction errors; lab alert follow-up; AE under-reporting; source documentation quality;
competing-study contamination (Site 1047 ran two concurrent AD trials); staff turnover.

### 8.5 Critical data and processes table
Two-part table as designed in §4 above, with a third column stating the verification technique and a
fourth stating the percentage. This table is the plan's contract with itself; the strategy section
must not contradict it.

### 8.6 Monitoring strategy
- The mix: centralized (continuous), remote (monthly), on-site (interval + triggered).
- **SDV/SDR percentages by data category** — a table. 100% categories: consent, eligibility,
  randomisation and IP administration, primary and key secondary endpoint assessments, SAEs and
  AESIs, rescue therapy, deaths, pregnancies, discontinuations. Sampled categories: routine AEs,
  concomitant medications, vital signs, non-critical labs, questionnaires — with a stated sample
  percentage and a stated sampling method (the *method* matters: random sample selected by the EDC,
  not CRA choice, or the sample is not a sample).
- **First-participant rule:** 100% SDV/SDR on the first 2 participants at every site regardless of
  risk band; step-down only after a clean review.
- **Risk-tiered site bands** (low/standard/enhanced) with defined entry and exit criteria, and a
  statement of which band Site 1047 is in and why.
- **Step-up triggers** — the conditions that return a reduced site to 100%.

### 8.7 Visit types and frequency
SQV, SIV, IMV, for-cause, COV. Routine IMV interval: every 8–10 weeks while actively enrolling,
extending to 12–16 weeks when enrollment closes and the site is in follow-up only, with a floor of
one visit per 6 months for any site holding IP or active participants. Include Site 1047's actual
history as a table — SIV 21-DEC-2022; IMVs 09-FEB-2023, 20-APR-2023, 27-JUL-2023, 02-NOV-2023,
14-MAR-2024; COV pending — and note the intervals it implies (roughly 10, 14, 14, and 18 weeks),
which is itself a mild finding worth acknowledging in the plan's own voice.

### 8.8 What happens at each visit
The IMV subsection is the longest thing in the document and should read like a checklist a person
actually works through, in order:

1. Pre-visit preparation (data review before travel — a CRA who arrives without having read the
   data wastes the trip).
2. Opening meeting with PI/coordinator.
3. Regulatory binder / ISF review — the essential-document checklist, delegation log currency,
   training records, 1572, 3455, IRB correspondence, lab certifications, CVs, licences.
4. **Consent verification** — every consent, every participant, every version. The most
   procedurally rigid activity in monitoring: signature present, dated by the participant in their
   own hand, dated by the person obtaining consent, correct IRB-approved version, version current at
   the time of signature, consent before any study procedure, re-consent to Amendment 3/ICF v4.0.1
   documented with timing, optional genomic consent handled separately, copy given to participant
   documented.
5. Eligibility verification — inclusion/exclusion against source, screening EASI/vIGA-AD/BSA/NRS
   values, washout dates, lab results, TB test.
6. Source-to-eCRF verification per the SDV/SDR matrix.
7. IP accountability — receipt through dispensing through return, kit-by-kit, against IRT.
8. Temperature log review — TempTrak export, alarms, excursions, quarantine decisions.
9. Lab and sample reconciliation — requisitions vs shipments vs results vs eCRF; PK/ADA timing.
10. AE/SAE review and reconciliation — source vs eCRF vs safety database.
11. Deviation review — site log vs monitor's own findings; the delta is itself a finding.
12. Staff interviews — the underrated activity; the CRA's job is to find out what is actually
    happening, which staff will tell you if asked properly.
13. Facility and equipment check — calibration, storage, lighting, access control.
14. Close-out meeting with the PI, findings stated verbally before departure.

Each other visit type gets a shorter but complete treatment. The COV gets its own section (§8.13).

### 8.9 Centralized monitoring and KRIs
A table: indicator, definition, green/amber/red thresholds, review frequency, owner, action on
breach. Then a subsection stating **Site 1047's current position** against each — a small, sharp
piece of writing, because it is the moment the document stops being generic and starts being about
the player's workplace.

The two numbers to handle honestly:
- **Screen-fail rate 39%** (9 of 23). If the amber threshold is set around 35% and red around 50%,
  Site 1047 is **amber**, not red. The right narrative move: amber is not an accusation, it is a
  request for explanation, and the site's explanation (EASI <16 at screening, washout
  non-compliance) is *the expected explanation* for a well-run derm site with a large unselected
  patient database — a site with a 5% screen-fail rate in this study would be far more alarming.
  Say that. It teaches the player how the sponsor actually reads the number.
- **11 deviations across 14 participants = 0.79 per participant.** If amber is 0.75 and red is 1.5,
  Site 1047 is marginally **amber**. But the composition is benign: 7 visit-window, 2 eDiary, 1
  missed PK, 1 out-of-window lab, **no major deviations**. The plan should state the rule that
  composition outweighs count, and that a site with three deviations, all major, is in worse shape
  than a site with eleven minor ones.

The AE-reporting-rate row needs a paragraph of its own explaining why *low* is a red flag —
counterintuitive to sites, standard to sponsors. With a known 19.1% rate of AD worsening and 10.3%
pyrexia on active drug, a site reporting almost nothing is not a clean site; it is a site not
asking.

### 8.10 Visit documentation
- **Confirmation letter** — sent in advance (10 business days routine; 48 hours minimum for
  for-cause, and the plan should state that a for-cause visit may be conducted with the minimum
  notice permitted by the CTA if notice would compromise the purpose of the visit — a genuinely
  chilling sentence to have in a document, delivered flatly).
- **Visit report** — drafted within a stated number of business days, QC'd by the Lead CRA, approved
  by the CTM, filed in the TMF. Report contents.
- **Follow-up letter** — issued to the PI within a stated number of business days, listing findings,
  action items, owners, and due dates; site response due within a stated period.
- **Action item tracking** — a log, with ageing, and an explicit rule that items are closed by
  evidence and not by assertion.
- **Sample follow-up letter to Dr. Okonkwo** — three action items drawn from real Site 1047 history:
  (a) the visit-window deviations (7 of 11) — request a scheduling-control CAPA; (b) the eDiary
  compliance deviations — request documented re-training and a compliance-check-at-every-visit
  process; (c) the missed PK sample — request a predose-draw checklist and confirmation the sample
  was not drawn post-dose. Realistic dates, realistic tone: polite, precise, and unmistakably a
  record being created for a file.

### 8.11 Escalation ladder
Five rungs, each with a definition, a decision-maker, a timeline, and — the part that makes it real
— *what it means for the site*:

| Rung | Means at the site |
|---|---|
| Observation | Mentioned verbally, appears in the report, no action required. Costs nothing but is remembered. |
| Action item | Written in the follow-up letter with a due date. Ageing tracked centrally. Non-response escalates automatically. |
| Significant issue | CTM and Medical Monitor engaged; a documented issue record; the site's risk band changes; SDV returns to 100%. Visible to the sponsor by name. |
| Serious breach | 7-day regulatory notification. Sponsor QA engaged. Almost always a for-cause visit. The site's name is now in a regulatory submission. |
| Termination | IP shipments stop; participants transferred or discontinued; the CTA terminates; the site's record follows it to every future feasibility questionnaire. |

Responses available to the sponsor, described concretely: retraining (with documented competency
assessment, not a slide deck); for-cause visit; **CAPA plan** (site-authored, sponsor-approved, with
root cause — and the plan should say plainly that "human error" is not a root cause and will be
returned); **enrollment suspension** (no new consents, existing participants continue, IP retained,
lifted only on documented CAPA effectiveness); **site termination**.

### 8.12 Serious breach, misconduct, and fraud
Definitions per CTR Art. 52 and the UK reg. 29A equivalent. Examples calibrated to this study
(consent forgery; enrolling an ineligible participant and dosing them; fabricated EASI scores;
undisclosed rescue therapy; systematic backdating). The **suspicion-of-fraud pathway** must be
explicit that the CRA does **not** investigate, does **not** confront, does **not** discuss with
site staff, and does secure and copy the relevant records and notify the CTM within 24 hours; the
matter transfers to sponsor QA/Compliance. Notification list: sponsor QA, sponsor Clinical Program
Lead, Medical Monitor, regulatory affairs, IRB/IEC where required, competent authorities within 7
days where CTR applies.

### 8.13 Protocol deviation management
How the monitor reviews the site's log, how categorisation works (major/minor per protocol and this
plan), the rule that the monitor may add deviations the site did not log and that the *delta between
the site's log and the monitor's findings* is itself a monitored metric, and the interface with the
site's SOP-018 process. State the categorisation examples using Site 1047's actual deviation types.

### 8.14 Quality tolerance limits
Define carefully — QTLs are **study-level**, not site-level, and they are limits on parameters
material to the *reliability of the trial results*, not a performance target for a site. This is
almost universally misunderstood and the plan should correct it in one clean paragraph.

Three or four QTLs for this study, with thresholds and rationale:
1. Proportion of randomised participants receiving **rescue therapy for AD** — because rescue drives
   NRI/WOCF and excessive rescue erodes the primary comparison.
2. Proportion of randomised participants with **major protocol deviations affecting the primary
   endpoint**.
3. Proportion of randomised participants with **missing Week 24 primary endpoint** (rIGA/EASI).
4. Proportion of participants with **eDiary compliance <50%** over the treatment period, given the
   key secondary NRS endpoints.
(Optionally a fifth: proportion of randomised participants later found not to have met eligibility.)

A QTL breach does **not** automatically mean anything is wrong; it triggers a documented evaluation,
a root-cause analysis, a decision on action, and — importantly — **a record in the Clinical Study
Report**. That last consequence is what gives QTLs their weight.

### 8.15 Audits and inspections
Monitoring is line management of quality; auditing is independent assurance *of the monitoring*.
Different reporting line (QA, not clinical operations), different frequency, different consequences.
Sponsor audit selection criteria. Regulatory inspection support: the site's obligation to notify the
sponsor of an inspection notice **immediately** (state a number: within 24 hours, or immediately on
receipt), the sponsor's right to attend, document preparation, and the handling of Form FDA 483
observations and EIRs. Note the site's own history — one BIMO inspection in 2019, NAI — as an
asset in the audit risk model.

### 8.16 Close-out
The full COV checklist. Note that Site 1047's COV is pending, and that the plan can therefore state
prerequisites and a target rather than a date. Elements: all data entered and queries resolved; PI
electronic casebook signature on every participant; final IP reconciliation, kit-by-kit, and
destruction authorisation (on-site destruction under SOP-007 vs return to GlobalRx Logistics);
final IP return/destruction documentation; sample reconciliation and disposition of retained
samples; ISF completeness against the essential-document index; final deviation log; final
delegation log closure; final financial reconciliation and holdback (10%, per the CTA) release
mechanics; **record retention — 25 years**, with the instruction that records may not be destroyed
without written sponsor authorisation and that the site must notify the sponsor of any change of
custodian or location; **participant notification of study results** (EU CTR lay summary
obligations and the site's role); IRB/IEC end-of-study notification; and the close-out letter.

### 8.17 Remote monitoring and disruption
Provisions for public-health emergency or travel disruption, drawn from the 2020–2022 experience:
what can be done remotely (central data review, remote SDR of documents transmitted through
validated channels, remote consent verification of *redacted* consent images where permitted,
remote IP reconciliation against IRT and photographed logs, video walkthroughs), and the hard
limits: no PHI over unvalidated email; no wholesale copying of source records off-site; remote
source access only via a site-controlled, read-only, audit-trailed view; local law and IRB approval
required for remote consent review; and a requirement that everything done remotely is documented as
remote in the visit report, so the TMF shows honestly what was and was not seen.

### 8.18 Appendices
IMV checklist; consent-verification worksheet (per-participant grid: participant, ICF version, date
signed by participant, date signed by person obtaining consent, PI countersignature date, before any
procedure Y/N, copy given Y/N, re-consent required/completed); IP reconciliation worksheet; KRI
threshold table; escalation matrix; sample confirmation letter; sample follow-up letter.

---

## 9. Tone and register notes

- **Third person, about the site.** "The CRA will verify…", "Site 1047 currently reports…". Never
  "you" except in the letters and the site-obligations section.
- **Flat affect on high-stakes sentences.** The termination clause should read like a shipping
  instruction. That is how these documents actually read, and the flatness is the horror.
- **Numbers with rationale.** Every threshold in the plan should be followed by a clause explaining
  what it is protecting. A bare number invites a site to game it; a number with a reason invites a
  site to understand it.
- **No moralising.** The plan never says a site "should care about" anything. It says what is
  measured and what happens when the measurement crosses a line.
- **Honest about limits.** The sections admitting what centralized monitoring and remote monitoring
  cannot do are what make the rest believable.

## 10. Consistency constraints (must not violate)

- CRO is **Harborlight Clinical Research, Inc. (HCR)**; monitoring is performed by HCR on behalf of
  Meridian.
- CRA for Site 1047 is **Kevin Ostrander, CCRA**; CTM is **Rosalind Achebe**; Medical Monitor is
  **Ana Belmonte-Ruiz, MD**.
- Site 1047 = Cascade Dermatology & Clinical Research, LLC, Portland OR; PI **Miriam A. Okonkwo, MD,
  FAAD**.
- Visit history exactly as in RESEARCH_SITE.md §5; COV pending.
- 14 randomized, 23 screened, 9 screen failures, 2 early terminations, 11 deviations (7 visit-window,
  2 eDiary, 1 missed PK, 1 out-of-window lab), **no major deviations**.
- 151 activated centers, 21 countries, 197 registry locations, 726 randomized.
- Protocol 20210143, Amendment 3 (29-NOV-2023); ICF v4.0.1 at Site 1047, IRB approval 19-DEC-2023.
  **Note:** the CMP is dated 15-DEC-2023, *before* the 19-DEC-2023 IRB approval — the plan may
  reference ICF v4.0 as the current master and note site approvals as pending/rolling. Do not state
  that Site 1047's v4.0.1 was approved as of the plan date.
- Dates `DD-MMM-YYYY`; temperatures `2–8 °C`; windows `±3 days` / `±7 days`.
- Every invented number (SDV %, KRI thresholds, visit intervals, QTL thresholds, report timelines,
  invented staff names) goes in the assumptions fragment.
