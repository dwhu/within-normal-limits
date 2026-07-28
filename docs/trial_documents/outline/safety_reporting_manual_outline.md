> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline — Study-Specific Safety Reporting Manual (Protocol 20210143 / ROCKET-Horizon)

Deep section analysis: what a sponsor-issued safety reporting manual contains, why each part exists,
and what breaks at a site when it is missing. Written as design notes for
`/docs/trial_documents/safety_reporting_manual.md`.

---

## 0. What this document *is*, and what it is not

A safety reporting manual is not the protocol and not an SOP. It sits in the gap between them.

- The **protocol** (Protocol 20210143, Amendment 3, 29-NOV-2023) states the safety obligations in a
  single dense section written for a regulator and an ethics committee. It says *what* must happen.
- The **site SOP** (Cascade SOP-012, *Adverse Event Identification and Reporting*) states how the
  site does safety reporting across *all* its studies. It is study-agnostic by design.
- The **safety reporting manual** is study-specific operating instructions: this compound, these
  AESIs, these forms, this fax number, this clock. It exists because the protocol is not usable at
  the bedside and the site SOP does not know what rocatinlimab is.

Regulatorily the manual is not itself a required document. It is a sponsor's implementation of
21 CFR 312.50 ("ensure proper monitoring") and ICH E6(R3) sponsor obligations to give investigators
the information and tools they need. It is filed in the Investigator Site File and is version
controlled because it is trained-to; if it changes, retraining is documented.

**Design consequence:** the manual must be self-sufficient. A coordinator holding it must never need
to open the protocol to file an SAE. Everything — contacts, forms, timelines, definitions — is
reproduced inside it, even at the cost of duplication. Duplication is a maintenance risk the sponsor
accepts deliberately; the mitigation is the version history table and the "in case of conflict, the
protocol governs" clause.

---

## 1. Regulatory foundations the manual must operationalise

The manual never cites these as a lecture. It embeds them as behaviours. But every rule in the
document traces to one of the following, and the outline records the trace so the manual's content
can be audited.

### 1.1 ICH E2A — *Clinical Safety Data Management: Definitions and Standards for Expedited Reporting*

E2A is the source of nearly every definition the manual carries.

- **Adverse event (AE):** any untoward medical occurrence in a patient administered a pharmaceutical
  product, which does not necessarily have a causal relationship with the treatment. The critical
  clause is "does not necessarily have a causal relationship" — this is why the manual must teach
  that AE capture is *deliberately over-inclusive* and causality is assessed afterwards, not used as
  a filter beforehand.
- **Adverse drug reaction / adverse reaction:** for an investigational product, all noxious and
  unintended responses where a *reasonable possibility* of causal relationship cannot be ruled out.
  E2A's phrase "reasonable possibility" is later adopted verbatim by 21 CFR 312.32(a). The manual
  must use that exact phrase because it is what the causality checkbox actually means.
- **Serious:** the six criteria (death, life-threatening, inpatient hospitalisation or prolongation
  of existing hospitalisation, persistent or significant disability/incapacity, congenital
  anomaly/birth defect, plus the "other medically important event" catch-all requiring medical
  judgement). E2A explicitly frames these as **regulatory reporting triggers**, not clinical
  severity judgements. This is the single most valuable sentence in E2A for a site audience.
- **Unexpected:** not consistent in nature or severity with the applicable product information —
  for an unapproved investigational product, the Investigator's Brochure.
- **SUSAR:** the intersection of serious + unexpected + suspected causal relationship.
- **Expedited reporting standards:** 7 calendar days for fatal/life-threatening unexpected ADRs;
  15 calendar days otherwise. E2A is where these clocks originate; the manual must make clear that
  they are *sponsor* clocks, downstream of the site's own clock.

### 1.2 21 CFR 312.32 — IND safety reports

- **312.32(a)** defines "suspected adverse reaction" (reasonable possibility that the drug caused
  the event) and "life-threatening" (the patient was at *immediate* risk of death as it occurred —
  not an event that hypothetically might have become fatal).
- **312.32(c)(1)** — sponsor notifies FDA and all participating investigators of a serious and
  unexpected suspected adverse reaction **no later than 15 calendar days** after determining the
  information qualifies.
- **312.32(c)(2)** — **7 calendar days** (by phone/fax/email) for any unexpected fatal or
  life-threatening suspected adverse reaction.
- **312.32(c)(1)(i)** — the aggregate triggers: a single occurrence of an event uncommonly
  associated with drug exposure; one or more occurrences of an event not commonly associated with
  drug exposure but otherwise uncommon in the population; an aggregate analysis showing events
  occurring more frequently in the drug arm.

**Why this matters to the manual's design:** the aggregate triggers explain, to a site, why the
sponsor asks for structured follow-up data on individually unremarkable events (pyrexia, chills).
Sites report better when they know the data is going somewhere.

### 1.3 21 CFR 312.64(b) — the investigator's obligation

> "An investigator must immediately report to the sponsor any serious adverse event, whether or not
> considered drug related..."

Three load-bearing words:

1. **Investigator** — the obligation is personal to the PI, delegable in execution but not in
   accountability.
2. **Immediately** — the regulation gives no number. The sponsor supplies one: 24 hours. The manual
   must state that the 24-hour figure is a *contractual and protocol* obligation implementing a
   regulatory word, so the site understands that 26 hours is a protocol deviation even though no
   CFR section says "24."
3. **Whether or not considered drug related** — kills the most common site failure mode: "I didn't
   report it because it obviously wasn't the study drug."

312.64(b) also requires study records adequate to permit evaluation, and prompt reporting of
non-serious AEs per protocol.

### 1.4 21 CFR 312.66 — IRB notification

> "An investigator shall assure that an IRB... will be responsible for the initial and continuing
> review... The investigator shall also assure that he or she will promptly report to the IRB all
> changes in the research activity and all unanticipated problems involving risks to human subjects
> or others..."

The manual must draw the distinction that trips sites constantly: **not every SAE is an
unanticipated problem, and not every unanticipated problem is an SAE.** The IRB reporting section
must therefore give a decision rule, not just a list, and must name the person who owns the
submission (Sam Oyelaran, Regulatory Coordinator) so it does not fall between the PI and the CRC.

### 1.5 ICH E6(R3) §2.12 — investigator safety reporting

E6(R3) restates 312.64(b) in ICH language and adds obligations the CFR leaves implicit:

- report SAEs immediately except those the protocol identifies as not requiring immediate reporting;
- the protocol must specify which those are (this drives the manual's "protocol-defined exempt
  events" subsection);
- follow-up information must be supplied;
- reports must identify participants by code, not name (drives the redaction rules for hospital
  discharge summaries — genuinely the most-violated rule at sites);
- the investigator complies with reporting requirements to the sponsor, IRB/IEC, and where
  applicable the regulatory authority.

E6(R3)'s risk-proportionate framing also justifies the manual's structure: heavier procedure where
the risk is real (anaphylaxis, serious infection), lighter procedure where it is not.

### 1.6 EU CTR 536/2014 Articles 41–43 and Annex III

ROCKET-Horizon ran across 151 centres in 21 countries under EU CT number 2022-501538-44. Site 1047
is in the United States, so EU CTR does not bind it directly — but the manual is a global document
and the site is on the distribution list. The manual should carry the EU requirements in a clearly
labelled section rather than omitting them, so that a US coordinator reading a SUSAR notification
that references EudraVigilance understands what they are looking at.

- **Article 41** — investigator records and reports SAEs to the sponsor *without undue delay*,
  within 24 hours of becoming aware, unless the protocol exempts specified events; follow-up
  information follows.
- **Article 42** — sponsor reports SUSARs to **EudraVigilance**: 7 days for fatal/life-threatening
  (with follow-up within a further 8 days), 15 days for all other SUSARs.
- **Article 43** — annual safety report (the DSUR) to the Agency via the EU portal, covering the
  period and all trials with that IMP.
- **Annex III** — the operational detail: the sponsor keeps detailed records of all safety events,
  the investigator's immediate reporting duty, the requirement to report deaths with any information
  requested, and rules for reference safety information.

Practically, the EU section of the manual is short and its job is vocabulary: EudraVigilance, RSI,
DSUR, "without undue delay."

### 1.7 MedDRA coding

The manual must explain the division of labour and then get out of the way:

- The **site** records a **verbatim term** — the clinician's own words, in the source and the eCRF,
  one event per term, no combined diagnoses ("nausea and vomiting" is two events).
- The **sponsor's safety group** codes to MedDRA (Preferred Term and System Organ Class) using the
  version current at coding.
- The site never codes, never selects a Preferred Term, and never changes a verbatim term to make it
  code better. But the site **will** be queried when a verbatim term is uncodable ("felt lousy") or
  ambiguous ("flare" — of what?).
- Where a diagnosis is available, record the **diagnosis**, not the constellation of signs. Where
  only signs exist, record the signs and update to the diagnosis when it arrives — with the manual
  explaining that this is a *correction* of the original term, not a new event.

The practical guidance the manual owes the site is therefore about **verbatim term hygiene**, which
is what actually determines data quality — not about MedDRA itself.

---

## 2. Section-by-section analysis of the manual

For each section: why it exists, what it must contain, and the failure mode if it is thin.

### 2.1 Cover page and version history

*Why:* the manual is a trained-to controlled document. An auditor's first question is "which version
was in force on the date of this SAE, and is that version's training documented?"

*Must contain:* document number, version, effective date, protocol reference in the canonical form,
sponsor and CRO, distribution/confidentiality statement, and a version history table listing what
changed. Version 3.0 aligns with Protocol Amendment 3 (29-NOV-2023) and is dated 05-DEC-2023 — six
days after the amendment, which is itself a realism signal.

*Failure mode:* undated form templates circulating at the site; a site filing an SAE on a v1.0 form
with a superseded fax number.

### 2.2 Purpose, scope, and how to use this manual

*Why:* to establish precedence and set expectations about what the manual can and cannot decide.

*Must contain:* an explicit "in case of conflict, the protocol governs" clause; a statement that
this manual does not replace clinical judgement; the scope boundary (all participants from ICF
signature through the Week 36 EOS visit, plus post-study related SAEs).

*Failure mode:* the manual becomes an unofficial protocol amendment.

### 2.3 The quick-reference card

*Why:* this is the section that determines whether the manual works. Everything else is read once
during initiation and then never again. This page is read under stress.

*Must contain:* the three transmission routes with actual numbers, the 24-hour rule stated in one
sentence, the four minimum criteria for a valid initial report, a printable decision tree, and the
medical monitor's number for clinical questions kept visually separate from the safety intake
channel for reporting. It must fit on one physical page.

*Design principle:* it should be legible at arm's length and contain no sentence longer than about
fifteen words.

*Failure mode:* the site makes its own cheat sheet from memory. Sites always make a cheat sheet; the
manual's job is to be the cheat sheet so that the version on the wall is the correct one.

### 2.4 Roles and responsibilities

*Why:* to attach every task to a named role and prevent the diffusion-of-responsibility failure that
produces late reports.

*Must contain:* who identifies AEs, who records them, who assesses severity and causality (PI or
Sub-I only), who transmits the report, who submits to the IRB, who reconciles. For Site 1047
specifically this means naming that Alonzo Vega, FNP-C, is delegated AE assessment for clinical
management but is **not** delegated causality — a distinction that exists on the site's delegation
log and is exactly the kind of thing a manual must reflect back to the site.

*Failure mode:* a coordinator signs the causality field because the PI is in clinic. This is a
finding, every time.

### 2.5 Definitions with worked examples

*Why:* generic definitions do not transfer. A coordinator can recite the six seriousness criteria and
still not recognise that a three-day admission for IV antibiotics for cellulitis is an SAE.

*Must contain:* every definition paired with an atopic-dermatitis-specific worked example drawn from
the study's own safety profile — the real SAE list gives cellulitis, eczema herpeticum,
anaphylactic reaction, exfoliative dermatitis, spinal stenosis, and a thymic cyst, all of which map
neatly onto different seriousness criteria.

*Special attention:*
- **"Other medically important event"** is the criterion sites under-use. It needs its own worked
  example and an explicit instruction: when in doubt, report and let the sponsor down-grade.
- **Hospitalisation** needs the exclusions spelled out (elective procedure for a pre-existing
  condition planned before consent; admission for social/convenience reasons; ER visit under 24
  hours without admission).
- **Life-threatening** needs the "at immediate risk of death *as it occurred*" gloss, because sites
  routinely over-apply it to events that were merely frightening.

### 2.6 What is and is not an AE in this study

*Why:* this is where a study-specific manual earns its existence. The generic answer is "any
untoward medical occurrence"; the useful answer is a table of the twenty judgement calls this
particular study generates.

*Must contain, at minimum:*

| Situation | Why it is hard |
|---|---|
| Worsening of AD | The indication *is* the AE. The convention (report worsening beyond expected fluctuation as an AE, verbatim "atopic dermatitis worsening") is arbitrary and must be stated, because both "always report" and "never report" are defensible in the abstract. The registry shows 19.1% of the rocatinlimab arm with "dermatitis atopic" — so the convention was clearly to report it. |
| Positive pregnancy test | Not an AE. Reportable in 24 hours anyway, on a different form. Sites conflate the two. |
| Abnormal lab value | Only an AE if clinically significant. "Clinically significant" must be *defined* operationally or the definition is useless. |
| Pre-existing condition | Only an AE if it worsens after consent. Requires that baseline conditions be captured properly at screening — a documentation dependency the manual should flag. |
| Elective procedure planned before consent | Hospitalisation is not an SAE; unexpected complications are. |
| Injection-site reactions | Expected for an SC biologic; still AEs; the manual should say whether they are solicited or unsolicited. |
| Screen-failure events | Reduced collection scope. Ambiguous unless stated. |
| Events after last dose (Week 20) but before Week 36 | The safety follow-up period is 12 weeks precisely so these are captured. Sites stop collecting after EOT unless told not to. |
| Efficacy assessment results | An EASI increase is not itself an AE; the clinical deterioration it reflects may be. |

*Failure mode:* under-reporting of AD worsening, over-reporting of every out-of-range lab.

### 2.7 Severity grading, and the severe/serious distinction

*Why:* the most persistent conceptual error in clinical research.

*Must contain:* three-point scale with operational definitions anchored to *interference with
activity*, not to the sponsor's anxiety level; AD-specific examples for each grade; and the canonical
illustration, which must be stated twice — a severe headache is not serious; a mild myocardial
infarction requiring admission is serious. For this study the natural illustration is severe pruritus
(severe, not serious) versus a routine admission for IV antibiotics (moderate cellulitis, serious).

The manual must also state that severity and seriousness are recorded in **separate fields** and that
one never implies the other.

### 2.8 Causality assessment

*Why:* it determines whether an SAE becomes a SUSAR and therefore whether a global expedited report
is generated.

*Must contain:*
- The **scale**. A binary related/not-related scale is preferable in a manual for sites because it
  forces the "reasonable possibility" question directly and cannot be dodged by choosing "possibly"
  and moving on. If a five-point scale is used, the manual must state the collapse rule (which
  categories map to "suspected adverse reaction" for regulatory purposes).
- The **five questions**: temporal plausibility; biological plausibility given the mechanism (here,
  OX40/CD134 blockade and T-cell modulation); dechallenge; rechallenge (rarely available and never
  deliberately performed); alternative explanation (concomitant disease, concomitant medication,
  the underlying AD itself).
- **Who** may assess: PI or a Sub-I on the delegation log. Not the CRC. Not the NP at this site.
- The **asymmetry rule**: "related" needs no justification beyond inability to exclude; **"not
  related" requires a stated alternative explanation.** This single rule prevents the most damaging
  pattern in site-generated safety data, which is reflexive "not related" on every event.
- The rule that the investigator's assessment is **never overwritten** by the sponsor — the sponsor
  may add its own, and both travel with the case.
- That causality is assessed **blinded**, and that this is not a defect: the investigator assesses
  relationship to *study treatment*, not to a known active drug.

*Failure mode:* every event "not related," the safety database is useless, and the first SUSAR is
missed.

### 2.9 The 24-hour rule and the meaning of "awareness"

*Why:* the clock is the single most audited element of site safety performance.

*Must contain:* the clock starts at **site awareness**, not event onset, not visit date, not the day
the PI reviewed it. "Awareness" must be defined operationally — any study staff member learning of
the event by any route (participant call, spouse call, hospital fax, lab alert, chart review during
an unrelated visit, monitor discovery). And the manual must say to **document the awareness
date/time in source at the moment it happens**, because a reconstructed awareness time is
indefensible.

*Must also contain:* what to do when the PI is unreachable — file the initial report with the
information available and the causality field marked "pending PI assessment," then follow up. The
report is never held for the PI. Weekend and holiday procedure; the site's Friday 15:00 PT close is
a real operational hazard for this specific site and should be addressed by name.

### 2.10 Step-by-step SAE reporting workflow

*Why:* under stress, people execute procedures, not principles.

*Must contain:* a numbered sequence — recognise, stabilise/treat, notify PI, complete the form,
transmit three ways, confirm receipt, document in source, enter in EDC, respond to queries, follow up
to resolution, close. Plus the four minimum criteria for a valid report (identifiable patient,
identifiable reporter, suspect product, event) with the instruction that **missing detail never
delays the initial report**. Plus the acknowledgement expectation and what to do if none arrives.

*Design note:* the EDC entry is deliberately placed *after* transmission. Sites frequently believe
that entering the SAE in the EDC constitutes reporting. It does not, and the manual must say so in
those words.

### 2.11 The SAE Report Form: blank, instructions, and a worked example

*Why:* a blank form teaches nothing; a completed one teaches everything.

*Must contain:* a full field-labelled blank form; field-by-field completion instructions including
the redaction rule for attachments; and a **fully worked example** using a real-looking case. The
example should be chosen from the study's own SAE list so the manual is internally consistent with
the compound's actual profile — cellulitis is ideal, because it appeared twice in the rocatinlimab
arm, it is an AESI, it is an ordinary event that a site might under-report, and it produces a
non-trivial causality discussion.

*Failure mode:* the site fills in only the fields it understands and leaves the rest blank,
generating a week of queries.

### 2.12 Adverse events of special interest

*Why:* AESIs are the sponsor's early-warning system for the mechanism-specific risks that a Phase 3
safety database is too small to detect by counting.

*Must contain,* for each of the five AESIs: definition, mechanistic rationale (why *this* compound),
recognition criteria, immediate management, whether IP must be discontinued or merely withheld,
additional data collection required, and the reporting timeline. The critical rule, stated up front:
**AESIs are reported on the 24-hour SAE timeline whether or not they meet a seriousness criterion.**

The five for this study — anaphylaxis/systemic hypersensitivity; dose-associated pyrexia/chills;
serious or opportunistic infection; malignancy; severe AD exacerbation/exfoliative
dermatitis/erythroderma — each need genuinely different handling, which is the point: a single
generic AESI paragraph would be useless.

### 2.13 Anaphylaxis (expanded)

*Why:* one anaphylactic reaction occurred in the rocatinlimab arm, and every dose is administered on
site with a mandated observation period. This is the one AESI where the site's own actions in the
first ninety seconds matter.

*Must contain:* Sampson/NIAID-FAAN criteria in usable form; the on-site response sequence;
epinephrine availability as a site *requirement* not a suggestion; permanent discontinuation of IP;
and the unblinding question — anaphylaxis is one of the few genuine indications to consider
unblinding, and the manual must say when it is and is not necessary for management.

### 2.14 Pyrexia and chills after dosing

*Why:* the single most distinctive feature of this compound's tolerability profile — pyrexia 10.3%
vs 1.1% placebo, chills 6.1% vs 1.1%. A site that does not expect this will either panic or, worse,
stop reporting it as background noise.

*Must contain:* what is expected (onset within 24–48 h of dosing, self-limiting, more frequent after
the first two doses); how to document (temperature, onset time relative to injection, duration,
treatment, whether it recurred at subsequent doses); the antipyretic guidance; the reportability
threshold; and how to distinguish it from an infection — because the *consequence* of getting this
wrong is missing a serious infection AESI, which is a real harm.

### 2.15 Pregnancy

*Why:* structurally confusing — not an AE, but on the SAE clock, on a different form, with a
follow-up obligation extending past the participant's study exit.

*Must contain:* pregnancy is not an AE; complications of pregnancy are AEs and may be SAEs; the
24-hour reporting requirement; the separate Pregnancy Report Form (reproduced blank); partner
pregnancies and the additional-consent problem (the partner is not a study participant and their
information cannot be collected without their own authorisation); immediate IP discontinuation;
follow-up to outcome including neonatal outcome; and the fact that a spontaneous abortion or
congenital anomaly *is* an SAE requiring both forms.

### 2.16 Overdose, medication error, misuse, product complaint

*Why:* four adjacent concepts routed to three different destinations, routinely conflated.

*Must contain:* definitions (for a fixed two-syringe SC dose, overdose is concrete — a third syringe,
or two doses inside the Q4W interval); the rule that these are reported *whether or not* an AE
resulted; where each goes (safety intake vs. product complaint intake vs. deviation log); and the
overlap rule — an event may be all three at once and generate three records.

### 2.17 Deaths

*Why:* the study recorded zero deaths, which makes it more likely a site would fumble the procedure
if one occurred.

*Must contain:* immediate phone notification in addition to the written report; the requirement to
report *whether or not* related; autopsy — request it, do not obstruct it, forward the report when
available; death certificate handling and redaction; the continuing obligation to supply information
after the participant has died; and the reminder that the participant's identity is still protected.

### 2.18 Emergency unblinding

*Why:* it destroys the participant's blinded data and is therefore a genuine last resort, but sites
who fear it will delay it when it is needed. The manual must lower the fear and raise the bar
simultaneously.

*Must contain:* the standard — unblind only when knowledge of treatment assignment would change
immediate clinical management; the observation that for most emergencies it would not; the IRT
process (Axion IRT, with the phone backup); who is notified and when (medical monitor as soon as
practicable, ideally before, always within 24 h); the documentation requirement; the consequence —
the participant is typically discontinued from IP; and the explicit statement that treating clinicians
outside the site can be given the information without the site team being unblinded, which is the
usual correct answer.

### 2.19 SUSAR handling at the site

*Why:* sites receive SUSAR notifications, do not know what to do with them, and let them accumulate.

*Must contain:* what an arriving notification looks like and what the fields mean; **the site does
not determine expectedness — the sponsor does, against the Reference Safety Information in the IB**
(Edition 6.0, 15-AUG-2023), and the site should not attempt to second-guess it; the site's obligations
on receipt (acknowledge, assess whether the ICF or participant management should change, file, submit
to the IRB); and the IRB's specific timeline.

*The RSI concept deserves its own paragraph:* expectedness is not a clinical judgement, it is a
documentary comparison against a specific, dated, listed section of a specific IB edition. When the IB
is updated, the same event may change from unexpected to expected. This is genuinely counter-intuitive
and is the reason the manual must be explicit that the site's opinion about whether an event is
"surprising" is not the operative question.

### 2.20 IRB reporting

*Why:* 21 CFR 312.66, and because central IRBs have their own timelines that differ from the
sponsor's.

*Must contain:* the unanticipated-problem test (unexpected + related or possibly related + suggests
greater risk of harm than previously known); what goes to Keystone IRB and what does not; who
submits; the timeline; and a worked distinction showing an SAE that is *not* reportable to the IRB
and an unanticipated problem that is *not* an SAE.

### 2.21 SAE reconciliation

*Why:* the safety database and the clinical database are separate systems populated by different
routes, and they drift. Reconciliation before database lock is a regulatory expectation and an
inspection target.

*Must contain:* the cadence; the format of the listing the site receives; what the site is asked to
confirm; and the common discrepancy types — event in EDC not in safety database (site never sent the
form), in safety database not in EDC (site sent the form and never did the eCRF), onset date
mismatch, verbatim term mismatch after a diagnosis was refined, seriousness criterion changed on
follow-up, outcome still "ongoing" months after resolution.

### 2.22 Follow-up obligations

*Why:* the most commonly abandoned obligation. Sites report the initial event well and then stop.

*Must contain:* SAEs are followed to resolution, stabilisation, or a determination that the outcome
will not change; follow-up continues **after** the participant completes or withdraws from the study;
what a follow-up report must contain; the cadence of follow-up; and the closure criteria.

### 2.23 Appendices

Contact card, seriousness checklist, causality decision tree, escalation matrix, glossary. These
exist to be photocopied. Every appendix should be self-contained on a page.

---

## 3. The conceptual distinctions sites get wrong

These are the manual's real curriculum. Everything else is procedure.

### 3.1 AE vs SAE vs SUSAR

Three nested sets, with different owners.

- **AE** — anything untoward. Determined by the site. Recorded in the eCRF. Volume: high.
- **SAE** — an AE meeting one of six regulatory criteria. Determined by the site. Reported to the
  sponsor in 24 hours *and* recorded in the eCRF. Volume: low.
- **SUSAR** — an SAE that is both suspected-related (site's assessment) and unexpected (**sponsor's**
  assessment against the IB's RSI). Determined jointly, with the sponsor owning the expectedness leg.
  Reported by the sponsor to regulators and to all investigators. The site never files a SUSAR; the
  site *receives* them.

The failure: sites believe they decide whether something is a SUSAR, and either try to make the
determination or wait for it before reporting. The manual must say: report the SAE, let the sponsor
do the rest.

### 3.2 Seriousness vs severity

Different axes entirely. Seriousness is a **regulatory** classification with six fixed criteria and a
24-hour consequence. Severity is a **clinical** gradation of intensity with no reporting consequence
at all. They are recorded in different fields, assessed against different standards, and an event may
be severe-and-not-serious or mild-and-serious.

The manual must give both directions of the illustration, because sites reliably learn one and not
the other:
- Severe but not serious: a severe AD flare with intolerable pruritus managed at home.
- Serious but not severe: a mild fever that results in a precautionary overnight admission.

### 3.3 Causality vs temporality

*Post hoc ergo propter hoc* is the default cognitive error, in both directions. An event occurring
four hours after dosing is not thereby related; an event occurring at Week 20 is not thereby
unrelated, particularly for a monoclonal antibody with a long half-life and an immunomodulatory
mechanism whose effects may be delayed.

The manual should give both a false-positive example (nasopharyngitis three days after dosing during
a household outbreak) and a false-negative example (a malignancy detected at Week 32, twelve weeks
after the last dose, which must still be assessed rather than dismissed as too late).

### 3.4 Expected vs unexpected, and why the RSI is the arbiter

"Expected" does not mean "unsurprising to me." It means **listed, at the observed specificity and
severity, in the Reference Safety Information section of the Investigator's Brochure edition in
force**. Consequences the manual must draw out:

- An event can be clinically routine and still regulatorily unexpected (a common infection not listed
  in the RSI).
- An event listed in the RSI can still be unexpected if it occurs at greater severity or specificity
  than described — "hepatitis" is unexpected where the RSI lists only "transaminase elevation."
- Expectedness changes over time as the IB is revised. Cases are assessed against the RSI in force at
  the time of assessment.
- The site does not make this call. Full stop.

### 3.5 What "immediately" means

The regulation says "immediately" and stops. The operational translation is a chain:

1. **Immediately** (21 CFR 312.64(b)) → interpreted by the sponsor as
2. **within 24 hours of site awareness** (protocol requirement, contractual, deviation if missed) →
   enabling the sponsor to meet
3. **7 or 15 calendar days to the regulator** (21 CFR 312.32(c)) from *sponsor* awareness.

The 24-hour figure exists because the sponsor's clock starts when the site's report lands, and the
sponsor needs the remaining days to investigate, code, assess expectedness, query the site, and
narrate. A site that reports on day 6 has consumed most of a 7-day clock.

"Within 24 hours" also does not mean "within one business day." Calendar hours. Weekends count.

---

## 4. What the coordinator reads at 4:45 pm on a Friday

Site 1047 closes at 15:00 PT on Fridays. It is 16:45 and Priya Raghunathan has just taken a call from
a participant's spouse saying he was admitted to hospital last night. She is not going to read a
7,000-word manual. She will read, in this order:

1. **The quick-reference card** (§3) — taped above the desk. Is this serious? Yes: hospitalisation.
   Clock started at 16:45 today.
2. **Appendix A, the contact card** — the fax number and the safety intake email, because she is
   going to send it three ways.
3. **§10.3, "When the PI is unreachable"** — because Dr Okonkwo is not in the building on a Friday
   evening, and Priya needs to know whether she may transmit an initial report without a causality
   assessment. (She may, and must.)
4. **§10.4, weekend and holiday procedure** — because it is now Friday and the follow-up information
   will arrive Saturday.
5. **§12.1, the blank SAE form** — printed, filled by hand if the EDC is slow.
6. **§11.4, "How to confirm receipt"** — because on a Friday evening nobody will reply, and she needs
   to know that the fax confirmation and the timestamped sent email are sufficient evidence that she
   met the clock.

Everything else in the manual is read once, at the initiation visit, and during monitoring visits.

**Design implication:** those six items must be findable without the table of contents. That argues
for the quick-reference card early (§3, not an appendix), the contacts repeated in at least three
places, and the unreachable-PI and weekend rules given their own numbered headings rather than being
buried as paragraphs inside a longer section. A manual optimised for completeness and a manual
optimised for 16:45 on a Friday are different documents; this one has to be both, and the way to be
both is redundancy with a stable numbering scheme.

---

## 5. Anticipated omissions and invented content

Items the ClinicalTrials.gov record does not supply, which must be invented and logged in the
assumptions fragment:

- Document number, version history, and effective dates for the manual itself
- The sponsor's causality scale (two-point chosen) and severity scale (three-point, non-CTCAE)
- Safety database name, case reference number format, and acknowledgement service level
- SAE Report Form and Pregnancy Report Form field sets
- MedDRA version in use
- AESI definitions, management rules, and IP discontinuation rules (the AESI *list* is itself flagged
  ASSUMED in STUDY_FACTS.md §13)
- Keystone IRB's 5-working-day SUSAR submission timeline
- Reconciliation cadence and listing format
- The worked example (participant 1047-006) in its entirety
- Post-study reporting window for related SAEs
- Epinephrine and emergency-equipment requirements at the site

All contacts, identifiers, dates, and the safety profile numbers come from STUDY_FACTS.md and must
not be altered.
