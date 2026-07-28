> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline & Section Analysis — Clinical Study Protocol

**Target document:** `/Users/dave/code/icf-please/docs/trial_documents/protocol.md`
**Subject:** Protocol 20210143 (ROCKET-Horizon), Amendment 3, Version 4.0, 29-NOV-2023
**Structural authority:** ICH M11 *Clinical electronic Structured Harmonised Protocol* (CeSHarP)
Template and Technical Specification, harmonised with ICH E6(R3) GCP, ICH E8(R1) General
Considerations for Clinical Studies, ICH E9(R1) Estimands and Sensitivity Analysis, 21 CFR Part 312
(US IND regulations), and Regulation (EU) No 536/2014 (EU Clinical Trials Regulation, Annex I).

---

## 0. How to read this outline

This is a section-by-section engineering analysis of the protocol document. For every section it
states four things:

1. **What it is** — the content the section carries.
2. **What belongs in it** — the specific elements a reviewer expects to find.
3. **Why it exists** — the failure mode the section prevents.
4. **Driver** — the regulation, guidance, or convention that forces its presence.

A fifth column runs through the whole analysis and matters more than any of the others for a game
about site life:

> **Read-by.** Who actually opens this section. A Phase 3 protocol is not one document; it is three
> documents bound together — an **operational manual** for the site, a **scientific argument** for
> the regulator and the journal, and a **legal instrument** for the sponsor's quality system. Sites
> read perhaps 20% of the page count and re-read 5% of it constantly. Regulators read the parts
> sites never open. Almost nobody reads all of it, which is exactly why protocol deviations cluster
> in the sections that fall between the two audiences.

---

## 1. Title Page

**What it is.** The identity block. Every number by which the trial can be looked up in any
jurisdiction, plus the sponsor of record and the version stamp.

**What belongs in it.**
- Full official title (must match the registry record's `officialTitle` verbatim, or the registry
  entry is wrong and must be amended)
- Short title / acronym (ROCKET-Horizon)
- Sponsor protocol number (20210143), NCT number (NCT05651711), EU CT number (2022-501538-44),
  US IND number (IND 145,882)
- Protocol version and date, and the version this one supersedes
- Sponsor legal name and registered address; sponsor's responsible medical officer
- Medical monitor block with a 24-hour number — this is the single most photocopied line in the
  whole document
- Compliance statement (ICH E6(R3), Declaration of Helsinki, applicable local law)
- Confidentiality statement

**Why it exists.** Version control failure is the most common finding in a document-review
inspection. A site consenting a participant on a superseded protocol version is a reportable
deviation; if the ICF version is also stale it can rise to a serious GCP non-compliance. The title
page is where a monitor's eyes land first at every visit.

**Driver.** ICH M11 §Title Page (mandatory); ICH E6(R3) §7.1 (protocol content); 21 CFR
312.23(a)(6)(iii)(a); EU CTR 536/2014 Annex I §D.

**Read-by.** Everyone. Sites read the version/date line dozens of times; regulators read the
identifier block; nobody reads the confidentiality paragraph twice.

---

## 2. Protocol Amendment History and Summary of Changes

**What it is.** A ledger of every version of the protocol with the rationale for each change, plus a
detailed change table for the current amendment showing old text, new text, and reason.

**What belongs in it.**
- Version table: version number, date, type (global/local, substantial/non-substantial), scope
- For the current amendment: overall rationale, whether it affects the benefit-risk balance, whether
  it requires re-consent of already-enrolled participants, and a section-by-section change table
- An explicit statement of which changes are **substantial modifications** under EU CTR Art. 16 and
  which are **changes requiring an IND amendment** under 21 CFR 312.30

**Why it exists.** Two reasons. First, regulators need to reconstruct what rules governed a
participant enrolled on any given date — an efficacy or safety signal analysed across three protocol
versions is only interpretable if the versions are traceable. Second, the re-consent decision lives
here: if the amendment changes risk information, every active participant must be re-consented, and
the IRB will ask the site to confirm it happened.

**Driver.** ICH E6(R3) §4.9 (sponsor documentation), §3.3 (IRB/IEC review of amendments); EU CTR
Art. 16–24 (substantial modification procedure); 21 CFR 312.30(b) (protocol amendments).

**Read-by.** The regulatory coordinator reads it closely (it drives the IRB submission). Coordinators
read the change table to find out what got harder. Regulators read it in every inspection. The PI
usually reads only the "does this need re-consent" line.

**Content for this amendment (Amendment 3, 29-NOV-2023).** The realistic change set for a Phase 3
study 11 months into enrolment: clarification of rescue-therapy hierarchy and its estimand
consequences; addition of an AESI category following accumulating pyrexia/chills reports; extension
of the permitted screening window; clarification of the post-dose observation period; alignment of
the statistical section with the finalised SAP; administrative vendor/contact updates.

---

## 3. Investigator's Agreement / Signature Page

**What it is.** The PI's countersigned undertaking to conduct the trial per the protocol, GCP, and
applicable law.

**What belongs in it.** Statement of protocol adherence; agreement to obtain IRB/IEC approval before
enrolment; agreement to supervise delegated staff; agreement on record retention and inspection
access; signature, printed name, title, site number, and date lines.

**Why it exists.** In the US it is the protocol-level mirror of Form FDA 1572 §9 commitments; it is
the document that makes "protocol non-compliance" a personal commitment rather than an abstraction.
In inspection, an unsigned or undated investigator agreement is a stand-alone finding.

**Driver.** ICH E6(R3) §2.2 (investigator responsibilities); 21 CFR 312.60 and Form FDA 1572;
EU CTR Annex I §D(6).

**Read-by.** Signed once by the PI, filed by the regulatory coordinator in the Investigator Site
File, checked by every monitor forever after.

---

## 4. Protocol Synopsis (ICH M11 §1.1)

**What it is.** A 2–3 page structured abstract of the entire protocol.

**What belongs in it.** Title; phase; sponsor; objectives and endpoints (co-primary at minimum);
design; population with headline eligibility; intervention and comparator with dose, route, regimen;
duration; sample size and allocation; statistical methods; DMC status; number of sites and
countries.

**Why it exists.** It is the section that actually gets read. IRB members read the synopsis and the
ICF and nothing else. New coordinators read the synopsis to orient themselves. Pharmacy reads the
synopsis for the dosing line. It also feeds the registry posting and the EU CTIS public summary
almost verbatim.

**Driver.** ICH M11 §1.1 (mandatory synopsis); EU CTR Annex I §D(2) (summary of protocol in lay and
technical form).

**Read-by.** Highest read-rate section in the document. This is the section that must be perfect.

---

## 5. Trial Schema (ICH M11 §1.2)

**What it is.** A one-page diagram of the participant journey: screening → randomisation → treatment
periods → follow-up → end of study, with the timing of key endpoints and interventions marked.

**What belongs in it.** Period boundaries in study weeks and days; allocation ratio; dose timing
marks; primary endpoint marker; safety follow-up; a legend.

**Why it exists.** It is the compression that makes the SoA comprehensible. A coordinator who can
see that the last dose is Week 20 and the primary endpoint is Week 24 will never accidentally dose
at Week 24.

**Driver.** ICH M11 §1.2 (recommended, near-universal in practice). No regulation compels it; every
sponsor includes it.

**Read-by.** Sites, constantly. It is the slide that gets lifted into the SIV deck and pinned to the
coordinator's wall.

---

## 6. Schedule of Activities (SoA) (ICH M11 §1.3)

**What it is.** The visit-by-visit grid of every procedure, with windows and footnotes.

**What belongs in it.**
- A visit table: visit number, name, nominal study day, permitted window, whether dosing occurs
- An assessment × visit grid with X marks
- Footnotes that carry the operational rules the grid cannot: fasting requirements, ordering rules
  (efficacy before dosing; certified rater before other skin assessments), sample-handling notes,
  when a repeat is permitted, what happens at Unscheduled and Early Termination visits
- The window convention, stated explicitly and anchored (relative to Day 1, not to the previous
  visit — this distinction alone prevents visit-window drift over a 36-week study)

**Why it exists.** This is the operational contract. Every protocol deviation a site logs is,
functionally, a deviation from this table. It is also the table that the budget is costed against
and the eCRF is built against; when the SoA changes in an amendment, the budget, the eCRF, the lab
manual, the IRT visit structure, and the ePRO schedule all change with it. That is why sponsors
resist SoA amendments harder than any other change.

**Driver.** ICH M11 §1.3 (mandatory); ICH E6(R3) §7.1; EU CTR Annex I §D(17).

**Read-by.** Sites, every single day of the study. This and the AE reporting section are the two
sections coordinators know by heart. Regulators check it against the CRF and the deviation log.

**Canon note.** For this protocol the SoA is fixed by `STUDY_FACTS.md` §5 and must be reproduced
exactly — 12 visits, 7 dosing visits (Day 1, Week 2 loading, Weeks 4/8/12/16/20), primary endpoint at
Week 24, EOS at Week 36, ±3 days through Week 24 and ±7 days thereafter.

---

## 7. Introduction (ICH M11 §2)

### 7.1 Purpose of the Trial (§2.1)
One or two paragraphs: what question the trial answers, and what decision the answer supports.

### 7.2 Background (§2.2)
**What belongs in it.** Disease epidemiology and burden; current standard of care and its
limitations; the unmet need the product addresses; product description (modality, target,
mechanism); summary of nonclinical pharmacology and toxicology; summary of prior clinical
experience with dose-response and safety; cross-reference to the Investigator's Brochure edition in
force.

**Why it exists.** The IRB's determination under 21 CFR 56.111(a)(2) — that risks are reasonable in
relation to anticipated benefits and to the importance of the knowledge expected — is made on the
basis of this section. It is also the scientific-validity check that ICH E8(R1) asks sponsors to
document.

**Driver.** ICH E6(R3) §7.1; ICH E8(R1) §3 (quality by design, critical-to-quality factors);
21 CFR 312.23(a)(6)(iii)(b); EU CTR Annex I §D(9).

**Read-by.** IRB scientific reviewers; the PI once; medical writers producing the CSR. Coordinators
essentially never. It exists for the regulator and the ethics committee.

### 7.3 Benefit-Risk Assessment (§2.3)
**What belongs in it.** A structured statement of anticipated benefits to participants and to
society; identified and potential risks of the investigational product; risks of study procedures
(venepuncture, biopsies if any, radiation if any); risks of placebo exposure and of the required
washouts; and the mitigations for each (eligibility restrictions, monitoring frequency, stopping
rules, rescue therapy availability, DMC oversight).

**Why it exists.** ICH E6(R3) elevates risk-proportionate thinking to a principle; this section is
where the sponsor shows its work. For a placebo-controlled trial in a symptomatic, non-life-
threatening but severely burdensome disease, the ethical defence of the placebo arm lives here and
nowhere else, and it must connect to a real rescue-therapy provision — otherwise the argument is
that participants may be left untreated for 24 weeks, which no IRB will accept.

**Driver.** ICH E6(R3) Principles §2 and §7.1; ICH E8(R1) §3.2; Declaration of Helsinki §§16–18, 33;
EU CTR Art. 6(1)(b) and Annex I §D(11).

**Read-by.** IRB, always. Sites, when a participant asks "why might I get placebo?" — which is why
the ICF's placebo paragraph should be a plain-language derivative of this section.

---

## 8. Objectives, Endpoints, and Estimands (ICH M11 §3)

**What it is.** A table pairing each objective with its endpoint(s), followed by a formal estimand
for each primary and key secondary endpoint.

**What belongs in it — the estimand attributes (ICH E9(R1) §A.3.2).** Five, and all five must be
present or the estimand is not an estimand:
1. **Treatment condition** — the intervention under evaluation and the alternative, stated as the
   regimen the participant is assigned to, not the regimen they took.
2. **Population** — the target population, defined by the trial's eligibility criteria or a
   principal stratum thereof.
3. **Variable (endpoint)** — the measurement obtained on each participant, at a defined time.
4. **Intercurrent event (ICE) strategy** — for each anticipated ICE, which of the five strategies
   applies: treatment policy, hypothetical, composite variable, while-on-treatment, or principal
   stratum.
5. **Population-level summary** — the statistic contrasting the treatment conditions (risk
   difference, odds ratio, mean difference).

**Why it exists.** Before E9(R1), "the primary analysis" was a method, and the trial's actual
question was inferred from the method — which meant two statisticians could analyse the same data
and be answering different questions without noticing. The estimand states the question first, so
the estimator and the sensitivity analyses can be judged against it.

**The ICEs that matter in this trial.**
- **Initiation of rescue therapy for AD.** Handled by a **composite variable** strategy for binary
  endpoints (rescue = non-responder, i.e. NRI) and by **worst observation carried forward (WOCF)**
  for continuous endpoints. This is the single most consequential design choice in the protocol: it
  makes rescue clinically free (a participant may always be rescued) but analytically costly (they
  can never contribute a success afterwards). That asymmetry is deliberate — it removes the
  incentive to withhold treatment from a suffering participant to protect the data.
- **Permanent discontinuation of study intervention.** Treatment policy where data continue to be
  collected; participants are asked to remain in the study and complete the SoA.
- **Death.** Not anticipated as a material ICE in this population; handled as non-responder.

**Driver.** ICH E9(R1) (Addendum on Estimands and Sensitivity Analysis in Clinical Trials, adopted
2019); ICH M11 §3; FDA guidance on AD drug development; EU CTR Annex I §D(13).

**Read-by.** Statisticians, regulators, and the DMC. Sites read exactly one sentence of it — the one
that says rescue therapy is permitted — and that sentence must be findable.

---

## 9. Trial Design (ICH M11 §4)

### 9.1 Overall Design (§4.1)
Design type, arms, allocation ratio, masking level and who is masked, period durations, end-of-trial
definition, and the number of participants and sites.

### 9.2 Scientific Rationale for Trial Design (§4.2)
**What belongs in it.** Justification for: the control (placebo vs active vs none); the allocation
ratio; the masking approach; the treatment duration relative to the endpoint's expected time course;
the choice of endpoints and the timing of the primary assessment; and the population.

**Why the three rationales in this protocol are non-trivial.**
- **Placebo control.** Defensible only because AD is not life-threatening, the exposure is time-
  limited (24 weeks), rescue is available at any time, and no approved therapy is being withheld
  from a participant who requires it. State all four conditions or the argument is incomplete.
- **3:1 allocation.** Trades a small loss of power per randomised participant (relative to 1:1) for
  three benefits: a larger safety database on the investigational product at the same total N, a
  materially better recruitment proposition (75% chance of active drug is a real consenting
  argument), and lower total exposure to placebo. The power cost is modest because power depends on
  the harmonic-mean-like quantity 1/n₁ + 1/n₀, which is fairly flat between 1:1 and 3:1.
- **24-week duration.** Long enough for an immunomodulator with a delayed, progressively deepening
  effect to reach or approach plateau; short enough to be ethically defensible against placebo.

### 9.3 Justification for Dose and Regimen (§4.3)
Bridge from Phase 1/2 exposure-response and safety to the selected 300 mg SC regimen, and justify the
Week 2 loading dose as a means of reaching steady-state exposure faster than Q4W dosing alone would.

### 9.4 End of Trial Definition (§4.4)
The date of the last visit of the last participant, or last scheduled procedure — a single sentence
with large regulatory consequence, because it starts the clocks for CSR submission, registry results
posting (FDAAA 801 / 42 CFR Part 11: 12 months), and EU CTIS summary posting.

**Driver.** ICH E8(R1) §§6–7; ICH E6(R3) §7.1; ICH E10 (choice of control group); 21 CFR
312.23(a)(6)(iii)(a); EU CTR Annex I §D(12).

**Read-by.** Regulators and IRBs. Sites read §9.1 only.

---

## 10. Trial Population (ICH M11 §5)

### 10.1 Inclusion Criteria (§5.1) and 10.2 Exclusion Criteria (§5.2)

**What belongs in them.** Numbered, individually assessable, unambiguous criteria. The test for a
well-written criterion is whether two coordinators reading the same source document would reach the
same answer. "Clinically significant" without a threshold fails that test and generates queries for
the life of the study.

Standard criterion families for a Phase 3 biologic in a dermatologic indication:
- Disease definition and severity floor (diagnostic criteria, duration, EASI/vIGA-AD/BSA/itch
  thresholds)
- Prior-therapy history (inadequate response to topical therapy — the criterion that defines the
  population as "eligible for systemic therapy")
- Washout criteria for every drug class that could confound the efficacy endpoint
- Infection screening: hepatitis B (HBsAg, anti-HBc, HBV DNA), hepatitis C, HIV, tuberculosis — the
  standard immunomodulator battery, because immune-modulating therapy can reactivate latent
  infection
- Organ-function thresholds (hepatic, renal, haematologic) expressed as numbers with the lab's
  ULN/LLN referenced
- Malignancy history with a look-back period and the conventional carve-outs (adequately treated
  non-melanoma skin cancer, in-situ cervical carcinoma)
- Reproductive criteria: pregnancy, lactation, contraception commitments for WOCBP, with the
  duration derived from the product's half-life (typically ≥5 half-lives after last dose)
- Live vaccine restriction
- Prior exposure to the same target (prior OX40/OX40L-directed therapy) — exclusion here protects
  both the efficacy read and the immunogenicity assessment
- Investigator-discretion criterion ("any condition that in the opinion of the investigator…") —
  every protocol has one; it is the safety valve, and it should be the *last* criterion, not a
  substitute for writing the specific ones

**Why it exists.** Eligibility criteria are simultaneously a scientific instrument (they define the
population to which the result generalises), a safety instrument (they exclude those for whom risk
is unacceptable), and the single largest source of protocol deviations at sites. ICH E8(R1) pushes
sponsors to avoid unnecessary restriction, because over-narrow criteria slow enrolment and reduce
generalisability without improving safety.

**Driver.** ICH E6(R3) §7.1; ICH E8(R1) §6.2.3 (participant selection and diversity); FDA Guidance
on Enhancing Diversity of Clinical Trial Populations (2020/2024); EU CTR Annex I §D(14).

**Read-by.** Sites, obsessively, during the enrolment period; then almost never again. Written on a
laminated card at most sites.

### 10.3 Lifestyle Considerations (§5.3)
Restrictions the participant must observe: bathing/emollient conventions before skin assessments,
sun/tanning/phototherapy restriction, tattoo restriction over assessment areas, blood donation
restriction, alcohol/substance considerations where relevant.

### 10.4 Screen Failures and Re-screening (§5.4)
Definition of a screen failure; what data must be retained on a screen failure (demographics,
eligibility outcome, SAEs, reason); and the re-screening rule. **How many re-screens are permitted
and under what conditions is a question sites ask within the first week of enrolment** — if the
protocol is silent the site will call the medical monitor for every case, which is why sponsors
state it.

---

## 11. Trial Intervention and Concomitant Therapy (ICH M11 §6)

### 11.1 Description of Trial Intervention (§6.1)
Product name and code; formulation and presentation; strength and volume; excipients (at least
qualitatively); manufacturer/labelling status; comparator description with an explicit statement of
how identity of appearance is achieved.

### 11.2 Preparation, Handling, Storage, Accountability (§6.2)
Storage conditions and excursion policy; light protection; time to room temperature before
injection; injection technique, site selection and rotation; accountability records; return and
destruction.

**Why it matters more than its length suggests.** Temperature excursion is the most common
IP-related deviation at sites, and the second most common cause of a participant being dosed with
quarantined product. The protocol must state the excursion boundary numerically so the site knows
when to quarantine rather than guess.

### 11.3 Assignment to Trial Intervention / Randomisation (§6.3)
Randomisation method (permuted blocks within strata), stratification factors, the IRT's role, and
the timing of the randomisation call relative to first dose.

### 11.4 Blinding (§6.4)
Who is blinded; how the blind is maintained (identical presentation, no unblinded pharmacist
required in this design); what unblinded roles exist at the sponsor/CRO and how they are firewalled;
and the **emergency unblinding procedure** — who may initiate it, through what system, what must be
documented, and the requirement to attempt to contact the medical monitor first where the
participant's safety permits.

**Why it exists.** Unblinding is the point at which a trial's integrity can be lost irreversibly. The
procedure must be simple enough to execute at 03:00 by a covering physician who has never seen the
protocol — which is why the IRT phone number, not the protocol section number, is what belongs on
the wall.

### 11.5 Treatment Compliance (§6.5)
How administration is documented; what counts as a missed dose; how a delayed dose is handled and
whether the subsequent schedule shifts (it should not — the schedule is anchored to Day 1).

### 11.6 Dose Modification and Interruption (§6.6)
Because a fixed-dose biologic has no titration, this section is really a set of **hold rules**:
conditions under which a dose must be withheld (active serious infection, unresolved AESI,
pregnancy, hepatic laboratory triggers), how long a hold may run before the participant is
discontinued from intervention, and who authorises resumption.

### 11.7 Prior and Concomitant Therapy (§6.8)
Three lists, and they must be exhaustive enough to be actionable:
- **Permitted** — bland emollients, non-medicated cleansers, stable-dose antihistamines, treatment
  for intercurrent illness
- **Prohibited** — any therapy that could confound the efficacy endpoint or compound immunosuppression
- **Rescue therapy** — see below

### 11.8 Rescue Therapy — the ethical hinge of the protocol
**What belongs in it.** A hierarchy (least-confounding first: topical corticosteroid → topical
calcineurin inhibitor → systemic agents), a requirement to notify the medical monitor, a requirement
to record the start/stop dates and agent, an explicit statement that rescue is **never withheld for
data-quality reasons**, and an explicit statement of the analytical consequence (NRI/WOCF from the
date of initiation).

**Why it exists.** This is the section that makes the placebo arm ethical. It also produces the most
morally uncomfortable moment in site work: the coordinator knows that giving the participant relief
converts them to a permanent non-responder in the analysis. Naming that tension in the protocol —
rather than hiding it in the statistics section — is what distinguishes a well-written protocol from
a defensible one.

**Driver.** ICH E6(R3) §7.1; ICH E9(R1) §A.3 (rescue as an intercurrent event); Declaration of
Helsinki §33.

**Read-by.** Sites, heavily. Pharmacy reads §11.1–11.2 exclusively.

---

## 12. Discontinuation of Intervention and Participant Withdrawal (ICH M11 §7)

**What it is.** Three distinct concepts that are constantly conflated and must be separated
explicitly:

| Concept | Meaning | Data consequence |
|---|---|---|
| **Discontinuation of study intervention** | Participant stops receiving IP but remains in the study and continues the SoA | Full follow-up data continue to accrue; treatment-policy estimand preserved |
| **Withdrawal from the study** | Participant withdraws consent to further participation | Data collection stops prospectively; data already collected are retained |
| **Lost to follow-up** | Participant cannot be contacted | Not a withdrawal; documented contact attempts required before the designation |

**What belongs in it.** Reasons for each; the requirement to attempt an Early Termination visit; the
requirement to distinguish withdrawal of consent to *treatment* from withdrawal of consent to *data
use* (in the EU, GDPR makes the second question materially different from the first); the
lost-to-follow-up procedure with a specified minimum of documented attempts (typically three,
including one by recorded delivery) before the designation is applied.

**Why it exists.** Missing data is the enemy of any estimand. Every participant who is discontinued
from intervention but retained in the study is a participant whose data survive. Sites that believe
"off drug = off study" destroy the treatment-policy analysis without ever intending to, which is why
this section must be written for a coordinator, not for a statistician.

**Driver.** ICH E6(R3) §7.1; ICH E9(R1) §A.4; GDPR Art. 17 and Recital 33 (in EU sites); 21 CFR
50.25(a)(8).

**Read-by.** Sites, at the worst possible moment — when a participant is upset and leaving. Should
be written to be readable under stress.

---

## 13. Trial Assessments and Procedures (ICH M11 §8)

### 13.1 Efficacy Assessments (§8.1)
Each instrument gets: what it measures, its scale and range and direction, who administers it
(clinician-reported vs patient-reported), when, and any ordering constraints.

**The rater-consistency requirement** is the operationally important part: the same certified rater
should assess a given participant throughout, EASI and vIGA-AD must be performed before any other
skin assessment and before the participant is exposed to their own ePRO scores, and raters must hold
current certification from the study's training vendor. Loss of rater certification mid-study is a
deviation with data-integrity implications, not a paperwork problem.

**Instrument inventory for this protocol:** vIGA-AD/rIGA, EASI, %BSA, SCORAD (incl. Itch VAS), FASS,
HASS (clinician-reported); DLQI, POEM, HADS, and the daily eDiary NRS items — Worst Pruritus, AD Skin
Pain, Sleep Disturbance (patient-reported).

**Driver.** FDA PRO Guidance (2009) and the Patient-Focused Drug Development guidance series
(2020–2023); EMA reflection paper on PRO use; ICH E6(R3) §7.1.

### 13.2 Safety Assessments (§8.2)
Physical examination (full vs targeted, and what "targeted" means); vital signs with the measurement
convention (resting, seated, ≥5 minutes); 12-lead ECG; clinical laboratory tests referencing the
appendix; and the injection-site and post-dose observation requirements.

### 13.3 Adverse Events and Serious Adverse Events (§8.3) — see §14 below.

### 13.4 Pharmacokinetics (§8.4)
Sampling schedule (predose trough at specified visits), analyte, handling, and the statement that
samples may be used for assay-related work but not for genetic analysis.

### 13.5 Immunogenicity (§8.5)
Tiered ADA strategy: screening assay → confirmatory assay → titre → neutralising-antibody assay for
confirmed positives. Sampling must be predose. Report ADA in relation to PK and to hypersensitivity
events.

**Driver.** FDA Guidance for Industry: Immunogenicity Testing of Therapeutic Protein Products (2019);
EMA Guideline on Immunogenicity Assessment of Therapeutic Proteins (EMEA/CHMP/BMWP/14327/2006 Rev 1).

### 13.6 Biomarkers (§8.6) and 13.7 Genomics sub-study (§8.7)
Exploratory analytes and their rationale. The genomic sub-study requires **separate, optional
consent**; refusal must not affect participation, and this must be stated in both the protocol and
the ICF. Retention period and withdrawal-of-sample rights belong here.

**Driver.** ICH E18 (Genomic Sampling and Management of Genomic Data); 45 CFR 46.116; GDPR Art. 9
(special-category data).

**Read-by.** §13.1–13.2 are read constantly by sites. §13.4–13.7 are read by the lab technician once,
then replaced in practice by the central laboratory manual — a real operational risk, because the lab
manual and the protocol can drift apart across amendments.

---

## 14. Adverse Events (ICH M11 §8.3) — the other section sites know by heart

**What belongs in it.**
- **Definitions**: AE, SAE, adverse drug reaction, unexpected ADR, SUSAR, AESI
- **The six SAE seriousness criteria**: death; life-threatening; inpatient hospitalisation or
  prolongation; persistent or significant disability/incapacity; congenital anomaly/birth defect;
  important medical event requiring intervention to prevent one of the above
- **Severity** (mild/moderate/severe) — distinguished explicitly from seriousness, because the
  confusion between "severe" and "serious" is the most common AE-reporting error in the industry
- **Causality**: the assessment scale, who may make it (a physician investigator, not a coordinator
  or NP unless delegated), and the instruction that "unrelated" requires an alternative explanation
- **Collection periods**: from consent (for SAEs and procedure-related events) or from first dose
  (for non-serious AEs) through the safety follow-up window
- **The 24-hour rule**: SAEs reported to the sponsor's safety inbox within 24 hours of site
  awareness, using the SAE form, whether or not the causality assessment is complete
- **Sponsor expedited-reporting obligations**: IND safety reports at 15 calendar days (7 for fatal or
  life-threatening unexpected suspected ADRs) under 21 CFR 312.32; EU SUSAR reporting to EudraVigilance
  under CTR Art. 42 with the same clocks
- **AESIs**: the defined list, the additional data required for each, and any accelerated reporting
- **Pregnancy**: not an AE per se, but reportable on a pregnancy form within 24 hours; follow to
  outcome; partner pregnancies with consent of the partner
- **Overdose / medication error / product complaint**: definitions and handling
- **Hepatotoxicity stopping rules**: the Hy's law construct (ALT or AST ≥3×ULN with total bilirubin
  ≥2×ULN and no alternative explanation such as ALP ≥2×ULN), the required close-monitoring protocol,
  and the mandatory permanent discontinuation triggers

**Why it exists.** This is where the protocol stops being a scientific document and becomes a
pharmacovigilance instrument. The 24-hour rule exists because the sponsor's own 7- and 15-day clocks
to FDA and EMA start at *sponsor* awareness, and the sponsor cannot meet them if the site sits on a
report. Every hour a site delays is an hour off the sponsor's regulatory clock.

**Driver.** ICH E2A (definitions and standards for expedited reporting); ICH E2B(R3) (electronic
transmission); ICH E6(R3) §§2.12, 4.5; 21 CFR 312.32 and 312.64(b); EU CTR Art. 41–43; FDA Guidance:
Drug-Induced Liver Injury — Premarketing Clinical Evaluation (2009).

**Read-by.** Sites, constantly, under time pressure. The single section most worth writing in short
sentences.

---

## 15. Statistical Considerations (ICH M11 §9)

**What belongs in it.**
- **Statistical hypotheses**, stated for each co-primary endpoint
- **Sample size determination**: assumed response rates in each arm, allocation ratio, two-sided
  alpha, target power, test used, dropout assumption, and the resulting N — with enough detail that
  a reviewer can reproduce the calculation
- **Analysis sets**: Full Analysis Set (all randomised, as randomised), Safety Analysis Set (all who
  received ≥1 dose, as treated), Per-Protocol Set, PK Analysis Set, ADA Analysis Set — each with the
  rule for assigning a participant who received the wrong treatment
- **Primary analysis method**: for binary endpoints stratified by the randomisation strata, the
  Cochran–Mantel–Haenszel test with the Mantel–Haenszel common risk difference
- **Multiplicity control**: with two co-primary endpoints and a long list of key secondaries, a
  graphical (Bretz/Maurer–Bretz) or fixed-sequence hierarchical procedure controlling family-wise
  type I error at two-sided 0.05. Both co-primaries must succeed before the hierarchy opens.
- **Missing data**: the imputation conventions, tied back to the estimands (NRI for binary, WOCF for
  continuous, applied from the date of rescue initiation)
- **Sensitivity and supplementary analyses**: at least one analysis under a different missing-data
  assumption (e.g. multiple imputation, tipping-point), because E9(R1) requires the estimand's
  robustness to be examined
- **Subgroup analyses**: pre-specified, descriptive, with a statement that they are not
  alpha-protected
- **Interim analysis and the DMC**: what the DMC sees, how often it meets, what it can recommend,
  and the explicit statement that no efficacy interim with alpha spending is planned (if that is the
  case — because an unplanned efficacy peek is a regulatory problem, not a statistical one)

**Why it exists.** Everything here is pre-specification. The value of a Phase 3 result is entirely a
function of how much of the analysis was fixed before the blind was broken. The protocol establishes
the frame; the SAP fills in the detail and is finalised before database lock and unblinding.

**Driver.** ICH E9 and ICH E9(R1); ICH E6(R3) §7.1; 21 CFR 312.23(a)(6)(iii)(g); EU CTR Annex I
§D(18); FDA Guidance on Multiple Endpoints in Clinical Trials (2022); FDA Adjusting for Covariates
guidance (2023).

**Read-by.** Statisticians, regulators, the DMC, and — after publication — reviewers and
meta-analysts. Sites read one line: the sample size. It exists almost entirely for regulators.

---

## 16. General Considerations: Regulatory, Ethical, and Trial Oversight (ICH M11 §10)

Sub-sections and their drivers:

| Sub-section | Content | Driver |
|---|---|---|
| Regulatory and ethical considerations | Conduct per ICH E6(R3), Declaration of Helsinki, applicable law; IND/CTA in force before enrolment | ICH E6(R3) §2.1; 21 CFR 312.40; EU CTR Art. 4 |
| Informed consent process | Who consents, where, how much time, re-consent triggers, impartial witness for illiterate participants, LAR provisions, documentation requirements | ICH E6(R3) §2.8; 21 CFR 50.20–50.27; EU CTR Art. 29 |
| IRB/IEC | Approval before enrolment; annual continuing review; amendment and safety-report submission; approval of recruitment materials | ICH E6(R3) §3; 21 CFR 56; EU CTR Art. 4–8 |
| Data protection | GDPR lawful basis, data-subject rights, transfer mechanisms; HIPAA authorisation in the US; pseudonymisation via participant ID | GDPR Arts. 6, 9, 13–17, 44–49; 45 CFR 160/164; EU CTR Art. 93 |
| Financial disclosure | Investigator financial-interest certification and updates for one year after completion | 21 CFR 54; Form FDA 3455 |
| Insurance / indemnity | Sponsor's clinical trial insurance and the compensation-for-injury statement | EU CTR Art. 76; local law |
| Quality assurance and control | Risk-based quality management, critical-to-quality factors, quality tolerance limits, audits | ICH E6(R3) §§3.10–3.11; ICH E8(R1) §3 |
| Source data | ALCOA+ expectations; what may be recorded directly on the CRF as source | ICH E6(R3) §§2.10, 4.9 |
| Records retention | Duration and the prohibition on destruction without sponsor notification | ICH E6(R3) §2.11; 21 CFR 312.62(c); EU CTR Art. 58 (25 years for the trial master file) |
| Monitoring | Risk-based monitoring approach, on-site/remote/central mix, SDV strategy | ICH E6(R3) §3.11; FDA Risk-Based Monitoring guidance (2013/2019) |
| Protocol deviations | Definition, classification (important vs other), documentation, reporting timelines, and the rule that a prospective waiver is not permitted | ICH E6(R3) §§2.4, 3.9 |
| Publication policy | Registration and results-posting commitments, authorship, multicentre-first rule | ICMJE recommendations; FDAAA 801 / 42 CFR Part 11; EU CTR Art. 37(4) |
| Trial/site termination | Criteria for suspending or terminating the trial or a site, and the notification obligations | ICH E6(R3) §§2.13, 4.13; 21 CFR 312.56 |

**Read-by.** The regulatory coordinator lives in this chapter; the PI reads the deviations and
records-retention lines; regulators read all of it. Coordinators read only the informed-consent
section — and they should read the deviation section too, because most sites define "deviation"
more narrowly than the sponsor does.

---

## 17. Appendices

Standard appendix set for an M11-structured protocol, and why each is separated out rather than left
in the body:

| Appendix | Content | Why separate |
|---|---|---|
| A | Clinical laboratory tests | It is a list, it changes with the lab manual, and it is looked up rather than read |
| B | Contraception and pregnancy-testing guidance | It is long, it is jurisdiction-specific, and it is referenced by both the eligibility and safety chapters (CTFG *Recommendations related to contraception and pregnancy testing in clinical trials*) |
| C | Adverse event definitions and reporting | Duplicates the body deliberately, so the site can print one appendix and have everything needed to report an SAE |
| D | Liver safety: criteria, follow-up, and stopping rules | Because it is an algorithm, not prose |
| E | Country-specific requirements | Local ethics, local reporting, local contraception and data-protection variations — the only way to run one global protocol without a separate document per country |
| F | Abbreviations | Reference |
| G | Schedule of Activities footnote key | The footnotes are operationally denser than the grid; separating them makes the grid printable |
| H | Protocol amendment change table (detailed) | Long, historical, and only of interest to regulators and inspectors |

---

## 18. Sections that exist for regulators vs sections sites actually read

A summary map, because it is the most useful thing in this outline for anyone modelling site work:

| Read constantly by sites | Read once or never by sites (exists for regulators/IRB/statisticians) |
|---|---|
| Synopsis | Background and disease epidemiology |
| Schema | Nonclinical summary |
| **Schedule of Activities + footnotes** | Estimand framework |
| Eligibility criteria (during enrolment) | Sample size derivation |
| Rescue therapy and prohibited medications | Multiplicity control |
| **AE/SAE definitions and the 24-hour rule** | Analysis sets and sensitivity analyses |
| Dosing, storage, administration technique | Data protection and insurance |
| Unblinding procedure | Publication policy |
| Discontinuation vs withdrawal | Records retention (until an inspection) |
| Visit windows | Amendment history |

The gap between the two columns is where protocol deviations live. A deviation is rarely an act of
carelessness; it is usually a collision between a rule written for column two and a person working
in column one.

---

## 19. Drafting rules for the target document

1. Every fact traces to `STUDY_FACTS.md`. Where the canon is silent, invent and log in
   `assumptions/protocol_assumptions.md`.
2. Reproduce the SoA from `STUDY_FACTS.md` §5 without alteration — including the ordering rule.
3. Reproduce the registry's eligibility criteria verbatim as the core, then expand around them
   without contradicting them.
4. Dates `DD-MMM-YYYY`; temperatures `2–8 °C`; participant IDs `1047-001`; abbreviations per §12.
5. Numbered sections with stable cross-references; the AE chapter and the SoA must be findable
   without a table of contents.
6. Register: declarative, obligation-bearing ("must", "will"), no marketing language, no hedging in
   operational instructions.
