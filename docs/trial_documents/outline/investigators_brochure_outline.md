> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline — Investigator's Brochure (IB)

**Target document:** `/Users/dave/code/icf-please/docs/trial_documents/investigators_brochure.md`
**Structural authority:** ICH E6(R3) Good Clinical Practice, **Section 7 — Investigator's Brochure**
(carried forward essentially unchanged in content requirements from E6(R2) §7 and E6(R1) §7).
**Product:** Rocatinlimab (MER 451; formerly KHK4083), fully human anti-OX40 (CD134) IgG1 mAb.
**Edition modelled:** Edition 6.0, 15-AUG-2023 (the edition in force for Protocol 20210143 per
`STUDY_FACTS.md` §1).

---

## 0. What the IB *is*, in one paragraph

The Investigator's Brochure is the sponsor's **compilation of all clinical and nonclinical data on
the investigational product that are relevant to its study in humans**, written for the investigator.
It is not a marketing document, not a protocol, and not a package insert. Regulatorily it does three
things simultaneously, and confusing them is the single most common source of site-level error:

1. **It is the risk-disclosure basis for informed consent.** The risks a participant is told about
   in the ICF must be traceable to the IB. If the IB changes materially, the ICF is potentially
   obsolete and the IRB must be notified.
2. **It is the clinical-management manual for the drug.** Dose, route, expected reactions, what to
   do when something goes wrong — the "Guidance for the Investigator" section is the only place
   where the sponsor tells the investigator, in prose, how to keep a participant safe.
3. **It contains the Reference Safety Information (RSI)** — the list of expected adverse reactions
   against which every serious adverse event in the programme is judged. This is the section that
   decides, mechanically, whether a given SAE becomes a **SUSAR** with a 7- or 15-day expedited
   reporting clock, or simply an SAE recorded in the database. Nothing else in the trial master file
   has that power.

ICH E6(R3) §7.1 states the purpose plainly: the IB should provide the investigator and others
involved in the trial with the information to facilitate their understanding of the rationale for,
and their compliance with, many key features of the protocol — dose, dose frequency/interval, methods
of administration, and safety monitoring procedures.

---

## 1. Section-by-section analysis (ICH E6(R3) §7.3, "Contents of the Investigator's Brochure")

### 1.1 Title Page

**What it contains:** sponsor name and address, product identifier(s) (research number, generic name,
trade name if approved), edition number, release date, and the edition/date of the document it
supersedes.

**Regulatory function:** the title page is the *version control* artefact. Because expectedness
assessment (see §2 below) depends on *which* edition of the IB was in force on the date the SAE
occurred, the edition number and effective date are legally load-bearing. A safety database query
that cannot resolve "which IB was current on 04-MAR-2023" cannot defend its SUSAR decisions to an
inspector. Sites must file every edition, not just the current one, and must keep the transmittal
correspondence proving when each was received.

**Site-level consequence:** the Investigator Site File must contain the current IB, IRB
acknowledgement of it, and evidence that all delegated staff were trained on the current edition.
A superseded IB left in the binder without an obsolescence stamp is a classic monitoring finding.

### 1.2 Confidentiality Statement

**What it contains:** a statement that the IB is confidential sponsor property, provided for the
purpose of the trial, and may be disclosed only to the investigator, site staff with a need to know,
and the IRB/IEC.

**Regulatory function:** the IB contains unpublished proprietary data (nonclinical toxicology, early
clinical, manufacturing). The confidentiality statement is what allows the sponsor to disclose it
under the Clinical Trial Agreement's confidentiality provisions while preserving trade-secret status.
Note the deliberate carve-out: the IB may *always* be given to the reviewing IRB/IEC and, on request,
to regulatory authorities — confidentiality never overrides ethics review or inspection.

### 1.3 Table of Contents

Functional, not ceremonial. An IB is 80–200 pages; the investigator who needs the anaphylaxis
management paragraph at 22:00 will find it via the TOC or not at all. ICH lists it as a required
element for this reason.

### 1.4 Summary

**What it contains:** a brief summary (ICH suggests not more than about two pages) covering
significant physical, chemical, pharmaceutical, pharmacological, toxicological, pharmacokinetic and
clinical information available to date, consistent with the stage of clinical development.

**Regulatory function and reality:** this is, with the Guidance section, **what the site investigator
actually reads**. In practice a busy PI at a Phase 3 site reads the Summary, skims the Reference
Safety Information table, reads the Guidance for the Investigator, and never opens the cynomolgus
monkey toxicology. That is not negligence — it is a rational allocation of attention, and the IB is
structured to accommodate it. The Summary must therefore be *self-sufficient for safe conduct*: if a
material risk appears only in §6 (Effects in Humans) and not in the Summary or the Guidance, the
document has failed in its primary purpose.

**What the outline document must do:** write the Summary so that a PI who reads only it and §8 can
(a) explain the mechanism to a patient, (b) recognise the two or three reactions that will actually
happen at their site, and (c) know when to call the medical monitor.

### 1.5 Introduction

**What it contains:** chemical/generic name of the active, all active ingredients, the pharmacological
class and rationale for placing the product in that class, the anticipated therapeutic indication(s),
and the general approach to evaluating the product.

**Regulatory function:** the Introduction establishes the *scientific rationale* — the "why is it
plausible that this molecule helps this disease" argument. Ethics committees weight this heavily
because risk–benefit assessment is impossible without it. For a first-in-class mechanism such as
anti-OX40 depletion, the Introduction carries an unusually large burden: the IRB has no comparator
class experience to reason from.

**For rocatinlimab specifically the Introduction must cover:** OX40 (CD134, TNFRSF4) biology and its
ligand OX40L (CD252, TNFSF4); the restricted expression of OX40 on recently/chronically activated
effector and memory T cells; the accumulation of OX40+ pathogenic T cells in AD lesional skin; why
*depletion* (via enhanced ADCC) rather than *cytokine blockade* is a distinct therapeutic hypothesis
that may produce disease modification and off-treatment durability; and the development programme
map (the ROCKET studies), so the investigator understands where their protocol sits.

### 1.6 Physical, Chemical, and Pharmaceutical Properties and Formulation

**What it contains:** description of the substance (including structural formula where relevant),
a brief summary of relevant physical, chemical and pharmaceutical properties, the formulation
(including excipients), storage and handling instructions, and — critically — any structural
similarities to other known compounds.

**Regulatory function:** for a small molecule this section is largely chemistry. For a monoclonal
antibody it is where the investigator learns the things that will actually change their behaviour at
the bench: that it is a protein and therefore cannot be shaken, frozen, or filtered; that it must be
kept at 2–8 °C; that in-use stability at room temperature is finite; that the syringe barrel must
reach room temperature before injection or the injection will hurt and the plunger will be stiff.

**Why "structural similarity to other compounds" matters:** it is a cross-reactivity and
class-effect warning. For an IgG1 with enhanced ADCC, the relevant class comparison is to other
depleting antibodies (rituximab, alemtuzumab) rather than to non-depleting immunomodulators, and the
infusion/injection-reaction and infection-risk framing follows from that.

### 1.7 Nonclinical Studies

**What it contains** (ICH E6(R3) §7.3.5): a summary of nonclinical pharmacology, pharmacokinetics
and product metabolism, and toxicology, presented in tabular format where possible, and — crucially —
a **discussion of the significance of the findings for the anticipated human study**, including
comparison of animal and human exposure, and the relevance of the findings to expected human safety.

**Sub-sections and their function:**

| Sub-section | What it answers | Why the investigator or IRB cares |
|---|---|---|
| Nonclinical pharmacology | Does it bind the target, at what affinity, and does binding produce the intended cellular effect? | Establishes mechanistic plausibility; supports the ICF's "how it is thought to work" paragraph |
| Species selection / cross-reactivity | Is the tox species pharmacologically relevant? | If no species expresses a cross-reactive target, the tox package cannot detect exaggerated-pharmacology toxicity, and the first-in-human starting dose must be MABEL-based instead of NOAEL-based |
| Safety pharmacology (CV, respiratory, CNS) | Will it stop the heart, the breathing, or the brain? | Justifies (or does not justify) intensive cardiac monitoring in the protocol |
| PK/ADME in animals | Exposure, half-life, clearance, immunogenicity in the tox species | The **exposure multiple** at the NOAEL vs the human clinical dose is the number the IRB actually looks for |
| Toxicology (repeat-dose GLP) | Target organs, NOAEL, reversibility | Determines what laboratory monitoring the protocol mandates and what the stopping rules are |
| Reproductive/developmental | Fetal risk | Directly generates the contraception requirements and the pregnancy language in the ICF |
| Genotoxicity/carcinogenicity | Mutagenic or tumorigenic potential | For large molecules, standard genotoxicity batteries are **not** conducted (ICH S6(R1)) — the IB must say so *and give the rationale*, or the IRB will ask |

**Common failure mode:** presenting animal data without the human-relevance discussion. A NOAEL of
30 mg/kg means nothing to a dermatologist. "A NOAEL of 30 mg/kg weekly, corresponding to an
approximately 28-fold exposure multiple over the 300 mg Q4W clinical regimen" means something.

### 1.8 Effects in Humans

**What it contains:** a thorough discussion of known effects in humans — PK (including metabolism,
absorption, protein binding, distribution, elimination), bioavailability, population subgroups,
pharmacodynamics/pharmacological activity, safety, efficacy, and any post-marketing experience.

**Sub-sections and their function:**

- **Pharmacokinetics.** Justifies the dose interval. For rocatinlimab, a terminal half-life of
  roughly 10–14 days is the arithmetic reason for Q4W dosing and the reason a Week 2 loading dose
  exists at all — without it, steady state would not be approached until well past the Week 16 key
  secondary timepoint. It is also the reason the washout for prior biologics is "12 weeks or 5
  half-lives, whichever is longer."
- **Pharmacodynamics.** Demonstrates target engagement. Receptor occupancy, OX40+ T-cell subset
  depletion, and biomarker movement (TARC/CCL17, total IgE) are what convert "we gave a drug" into
  "we hit the target." PD data also anticipate laboratory findings the site will see — a transient
  lymphocyte decline that is *expected* pharmacology must be documented here or it will be reported
  as an unexplained abnormal lab at every site in the study.
- **Immunogenicity.** ADA incidence and its impact on exposure, efficacy, and safety. Determines
  whether the protocol needs ADA sampling (it does) and how to interpret loss of response.
- **Efficacy.** Study-by-study, with design, N, endpoints, and results. Supports the equipoise
  argument the IRB must make.
- **Safety.** Pooled and by-study adverse event tables, SAEs, deaths, discontinuations, and
  laboratory abnormalities. This is the substrate from which the RSI is derived — but it is **not**
  the RSI.

**The critical distinction the section must make explicit:** the safety tables describe *what has
been observed*. The RSI declares *what is expected*. They are different documents doing different
jobs, and an event can appear in a safety table without being in the RSI (observed once, causality
unclear, frequency indeterminate) — in which case it is still **unexpected** for reporting purposes.

### 1.9 Summary of Data and Guidance for the Investigator

**What it contains** (ICH E6(R3) §7.3.7): an overall discussion of the nonclinical and clinical data,
summarising the information from various sources on different aspects of the product wherever
possible, so the investigator can anticipate adverse reactions or other problems in the trial. It
should provide a clear understanding of the possible risks and adverse reactions and of the specific
tests, observations, and precautions that may be needed.

**Regulatory function:** this is the *operational* section. Everything else in the IB is evidence;
this is instruction. It is the second of the two sections a site investigator reliably reads.

**What good guidance looks like:** for each identified risk — a recognition paragraph (what it looks
like, when it happens), a management paragraph (what to do, in order), and a disposition paragraph
(continue, interrupt, or permanently discontinue). Vague guidance ("monitor closely") is a
documented cause of inconsistent site behaviour and of avoidable protocol deviations.

**For rocatinlimab the guidance must cover, at minimum:**

1. Dose-associated **pyrexia and chills** — the single most frequent and most site-disruptive
   reaction; onset within 24–48 h of the first one or two doses; self-limiting; antipyretic guidance;
   how to distinguish from infection.
2. **Hypersensitivity and anaphylaxis** — recognition, the reason for the 60-minute post-dose
   observation at the first two doses, on-site management, permanent discontinuation.
3. **Infection risk** — an ADCC-depleting antibody in an atopic population; eczema herpeticum
   recognition specifically, because AD patients are the population at risk and because it appeared
   in this programme.
4. **Injection-site reactions** and technique.
5. **Laboratory monitoring**, including the expected transient lymphocyte decline and how *not* to
   overreact to it.
6. **Contraception and pregnancy**, flowing from the reproductive toxicology.
7. **AD exacerbation / exfoliative dermatitis** — the paradox that worsening AD is both the disease
   and a reportable event.

### 1.10 Appendices

Abbreviations and references. References must be real-shaped (author, journal, year, volume, pages)
because IRB members do check them.

---

## 2. Reference Safety Information — the section that matters most

### 2.1 What RSI is

**Reference Safety Information** is a discrete, explicitly identified subset of the IB — normally a
single table — listing the adverse reactions that the sponsor considers **expected** for the
investigational product, with their frequency. It is *not* the whole safety section, *not* the list
of all observed adverse events, and *not* the ICF risk list.

The EU Clinical Trials Regulation (Regulation (EU) 536/2014), **Annex III, Section 2, point 8**,
requires that the RSI be a clearly identified section of the IB, and that it contain information on
the adverse reactions that are expected to occur, along with their frequency and nature. The
UK MHRA and the EU CTFG *Q&A on Reference Safety Information* elaborate the same requirements:

- The RSI must be **clearly identified and separable** — an inspector must be able to point at it.
- It must have its own **version and effective date**, and the sponsor must be able to reconstruct
  which RSI version was in force on any date in the trial.
- It must list reactions with **frequency categories** — conventionally the CIOMS/SmPC bands:
  very common ≥1/10; common ≥1/100 to <1/10; uncommon ≥1/1,000 to <1/100; rare ≥1/10,000 to
  <1/1,000; very rare <1/10,000.
- Only reactions for which there is **sufficient evidence of a causal relationship** with the
  product belong in it. Listing an event "just in case" is a regulatory error, not caution: it
  **suppresses** SUSAR reporting for that event and blinds the pharmacovigilance system.
- The RSI should generally be updated **once per annual cycle**, aligned to the Development Safety
  Update Report (DSUR), rather than continuously, so that a stable denominator period exists.

### 2.2 How the expectedness table drives SUSAR determination

Under **ICH E2A**, an adverse event becomes a **SUSAR** — Suspected Unexpected Serious Adverse
Reaction — only when **all three** conditions hold:

| Test | Question | Who decides | Source of truth |
|---|---|---|---|
| **Serious** | Does it meet a seriousness criterion (death, life-threatening, hospitalisation or prolongation, persistent/significant disability, congenital anomaly, or other important medical event)? | Investigator, then sponsor | ICH E2A seriousness criteria |
| **Suspected (related)** | Is there a reasonable possibility of a causal relationship with the IMP? | Investigator **or** sponsor — either assessment of "related" suffices; the sponsor may not downgrade the investigator's causality | Investigator's causality assessment on the SAE form |
| **Unexpected** | Is the nature or severity **not consistent with** the applicable product information? | **Sponsor only** — the investigator does not assess expectedness | **The RSI in the IB** |

The third test is where the IB does its work. The determination is mechanical:

1. Take the reported term (MedDRA Preferred Term).
2. Look it up in the RSI table of the IB edition **in force at the date of onset**.
3. **Not in the table → UNEXPECTED.** In the table → expected, *unless* the event is more severe or
   more specific than what is described (the "nature or severity" clause: hepatitis listed, but
   fulminant hepatic necrosis reported → unexpected; interstitial nephritis listed, but necrotising
   interstitial nephritis → unexpected).
4. Serious + related + unexpected = **SUSAR** → expedited report to competent authorities and
   ethics committees: **7 calendar days** for fatal or life-threatening SUSARs (with a follow-up
   within a further 8 days), **15 calendar days** for all other SUSARs. In the US, 21 CFR 312.32
   imposes the parallel IND safety report obligation on the same clocks, with the same
   IB-as-reference logic ("not listed in the investigator's brochure").
5. Blinded trials: for a SUSAR arising in a blinded study the sponsor generally unblinds that single
   case for reporting purposes. Sites remain blinded.

**Frequency in the RSI is not decorative.** Two consequences follow from the frequency column:
(a) a listed reaction occurring at a materially higher frequency than stated can itself trigger a
safety signal and an "unexpected by frequency" argument in some jurisdictions; (b) the frequency
categories are what the ICF's risk language is drawn from, so the RSI and the ICF must remain
consistent across amendments.

### 2.3 Why this makes the IB the most consequential pharmacovigilance document

Consider the arithmetic. A single sentence in the RSI table — the presence or absence of one MedDRA
Preferred Term — determines whether an event in a 726-participant, 151-centre, 21-country trial
generates:

- an expedited regulatory submission in every participating country, on a 7- or 15-day clock;
- a notification to every ethics committee of record;
- an Investigator Notification letter to all 151 sites, each of which must be filed, acknowledged,
  and often re-submitted to the local IRB;
- potentially a change to the ICF and re-consent of participants still on study;
- a line in the DSUR and, ultimately, in the product's label.

Nothing else in the trial master file converts a one-line clinical observation into that volume of
regulatory activity. This is also why the **anaphylactic reaction** in the ROCKET-Horizon SAE list is
the single most game-relevant fact in this document: whether that event was a SUSAR depended entirely
on whether "anaphylactic reaction" was in the RSI table on the day it happened. In this IB it is —
listed as *uncommon* — which means it was an expected serious adverse reaction, reportable in the
database and the DSUR but **not** expedited as a SUSAR. Change one row of the table and the answer
inverts. That is the drama the game should be able to reach for.

### 2.4 What sites get wrong about RSI

| Misconception | Reality |
|---|---|
| "The ICF lists the risks, so that's the reference." | The ICF is derived from the IB but is a lay document; it is never the expectedness reference. |
| "The investigator decides if it's unexpected." | The investigator assesses **seriousness and causality**. Expectedness is a sponsor determination. |
| "If it's in the safety tables it's expected." | Only the RSI table confers expectedness. Observed ≠ expected. |
| "We only need the current IB on file." | Superseded editions must be retained; expectedness is assessed against the edition in force at onset. |
| "An IB update is just an FYI." | A new IB edition frequently requires IRB submission, staff retraining, and sometimes ICF revision and re-consent. |

---

## 3. What the site investigator actually reads

Ranked by observed reality at an ordinary Phase 3 dermatology site:

| Rank | Section | Read by | Typical depth |
|---|---|---|---|
| 1 | Summary (§4) | PI, sub-Is | Fully, once, at study start |
| 2 | Summary of Data and Guidance for the Investigator (§8) | PI, sub-Is, lead CRC | Fully; re-read when an event occurs |
| 3 | Reference Safety Information table (§7) | PI when completing an SAE form; regulatory coordinator when filing IB updates | Table only |
| 4 | Clinical safety tables (§6.5) | PI, occasionally, when a participant asks "how common is that?" | Skimmed |
| 5 | Dosage and administration / handling (§5) | Pharmacist — this is *their* section | Fully |
| 6 | Everything else — nonclinical pharmacology, monkey toxicology, ADME | Almost nobody at the site; the IRB's scientific reviewer and the medical monitor | Rarely opened |

**Design implication for the simulated document:** the Summary and the Guidance must be written so
that they are genuinely sufficient. The nonclinical sections should be complete and correct — because
the game's fiction depends on the document being inspectable — but they are, honestly, set dressing
for the player. The Guidance section is where the player's decisions live.

**Design implication for the game:** the gap between "what is in the IB" and "what the site staff
have actually read" is a natural source of dramatic tension. A player who has read only the Summary
will not know that the transient lymphocyte decline is expected pharmacology, and will escalate it.
A player who has read the Guidance will not.

---

## 4. Section map for the target document

| § | Title | Approx. words | ICH E6(R3) §7 element |
|---|---|---|---|
| — | Title page, confidentiality statement | 350 | 7.3.1, 7.3.2 |
| — | Edition history and summary of changes | 450 | 7.3.1 (edition control) |
| — | Table of contents | 250 | 7.3.3 |
| 1 | Summary | 1,200 | 7.3.4 |
| 2 | Introduction | 1,200 | 7.3.4 (Introduction) |
| 3 | Physical, chemical and pharmaceutical properties and formulation | 900 | 7.3.5 |
| 4 | Nonclinical studies | 2,200 | 7.3.6 |
| 5 | Effects in humans | 2,900 | 7.3.7 |
| 6 | Reference Safety Information | 900 | EU CTR Annex III §2(8); ICH E2A |
| 7 | Summary of data and guidance for the investigator | 1,900 | 7.3.8 |
| 8 | Appendices — abbreviations, references | 600 | 7.3.9 |

---

## 5. Canon constraints on this document

Drawn from `STUDY_FACTS.md`; the IB must not deviate.

- Edition **6.0**, dated **15-AUG-2023**; supersedes Edition 5.0 (12-SEP-2022). (§1)
- IND **145,882**; sponsor Meridian Biotherapeutics, Inc., 1200 Kestrel Way, Emeryville, CA 94608. (§1)
- Product: fully human anti-OX40 (CD134) IgG1 mAb; **150 mg/1.0 mL single-use PFS**; clinical dose
  **300 mg = two PFS SC**; storage **2–8 °C**; do not freeze, do not shake; 30 minutes to room
  temperature before injection. (§4)
- Regimen in ROCKET-Horizon: Day 1, Week 2 loading dose, then Q4W to Week 20 — **7 doses**. (§4, §5)
- Post-dose observation **60 minutes** at Day 1 and Week 2, **30 minutes** thereafter. (§4)
- Safety Analysis Set **544 rocatinlimab / 180 placebo**; zero deaths; all AE counts exactly as
  given in §13, including the named SAEs.
- AESIs exactly as listed in §13.
- Dates `DD-MMM-YYYY`; temperatures as `2–8 °C`; abbreviations per §12.

Everything else — all nonclinical data, all Phase 1 and Phase 2b data, all PK/PD/immunogenicity
parameters, the ROCKET sibling study names and numbers, the RSI frequency assignments — is invented
and must be logged in
`/Users/dave/code/icf-please/docs/trial_documents/assumptions/investigators_brochure_assumptions.md`.

**Known and deliberate anachronism:** an IB dated 15-AUG-2023 cannot contain results from a study
whose primary completion was 05-JUN-2024. It does anyway, because the ROCKET-Horizon numbers in
`STUDY_FACTS.md` §13 are the only real safety numbers available and canon requires them verbatim.
Logged explicitly in the assumptions file.
