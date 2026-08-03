> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# STUDY_FACTS.md — Canonical Fact Base for ROCKET-Horizon

**This file is the single source of truth.** Every generated trial document derives from it. No
document may state a dose, visit, window, contact, identifier, or vendor that contradicts what is
written here. Where a document needs a detail not listed here, the author invents it and logs it in
that document's assumptions fragment.

---

## 1. Identifiers

| Field | Value | Source |
|---|---|---|
| Sponsor | Meridian Biotherapeutics, Inc., 1200 Kestrel Way, Emeryville, CA 94608, USA | INVENTED — the sponsor is fictional (see §1.1) |
| Sponsor protocol number | **20210143** | Record |
| ClinicalTrials.gov | **NCT05651711** | Record |
| EU CT number | **2022-501538-44** | Record |
| Study acronym | **ROCKET-Horizon** | Record |
| Brief title | A Study Assessing Rocatinlimab (MER 451) Monotherapy in Moderate-to-severe Atopic Dermatitis (AD) | Record, with the sponsor compound code substituted (§1.1) |
| Official title | A Phase 3, Randomized, 24-week, Placebo-controlled, Double-blind Study to Assess the Efficacy, Safety and Tolerability of Rocatinlimab (MER 451) Monotherapy in Adult Subjects With Moderate-to-severe Atopic Dermatitis (AD) | Record, with the sponsor compound code substituted (§1.1) |
| US IND number | **IND 145,882** | ASSUMED |
| Investigational product | Rocatinlimab (MER 451; also KHK4083) | Record, with the sponsor compound code substituted (§1.1) |
| Protocol version in force | **Amendment 3, Version 4.0, dated 29-NOV-2023** | Date from record's posted protocol; version numbering ASSUMED |
| Original protocol date | 07-OCT-2022 | ASSUMED |
| IB edition in force | **Edition 6.0, dated 15-AUG-2023** | ASSUMED |
| Master ICF version | **Version 4.0, 29-NOV-2023** (site-specific: Site 1047 v4.0.1) | ASSUMED |
| Study period | First participant first visit 14-DEC-2022; primary completion 05-JUN-2024; last participant last visit 27-AUG-2024 | Record |

**Always write dates as `DD-MMM-YYYY`** (e.g., 14-DEC-2022) in all documents.

### 1.1 The sponsor is fictional

The corpus is derived from a real registry record, but **the sponsor is not the real one.** Every
organisation in this world is invented — Harborlight CRO, Veriscribe, Axion, GlobalRx Logistics,
Cascade Dermatology — and the sponsor is no exception:

| Substituted | Reads as | Note |
|---|---|---|
| Sponsor company, address, phone, e-mail, web domains | Meridian Biotherapeutics, Inc., Emeryville, CA · `@meridianbio-sim.example` | No real company, address, or telephone number appears anywhere in the corpus |
| Sponsor compound code | **MER 451** | The code belongs to the sponsor, so it moved with the sponsor |

What did **not** change, and must not be changed, is anything clinical that the registry record
supplies: the INN **rocatinlimab**, the originator code **KHK4083** (a different company's code —
the compound is licensed *in*, which is exactly why the sponsor's own code is separate), the
protocol number **20210143**, **NCT05651711**, the dosing, the SoA, the endpoints (§6), the
eligibility criteria (§7), and the safety numbers (§13). Those stay verbatim.

So when a row below is sourced `Record`, the clinical fact is real and the sponsor's name attached
to it is not.

---

## 2. Mandatory banner

Every generated file — outlines, documents, and the merged assumptions log — opens with this block
verbatim, before the title:

```
> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.
```

---

## 3. Study design

| Attribute | Value |
|---|---|
| Phase | 3 |
| Type | Interventional, treatment |
| Allocation | Randomized, **3:1** (rocatinlimab : placebo) |
| Model | Parallel group |
| Masking | **Double-blind** — participant and investigator masked. Sponsor study team also blinded to individual assignment. |
| Treatment duration | 24 weeks double-blind |
| Total study duration per participant | Up to **~40 weeks** (≤30 d screening + 24 w treatment + 12 w safety follow-up) |
| Planned enrollment | ~700 randomized |
| Actual enrollment | **726** (543 rocatinlimab / 183 placebo) |
| Activated centers | **151** centers across 21 countries (197 locations listed in the registry record) |
| DMC | **Yes** — independent Data Monitoring Committee, quarterly plus ad hoc |
| FDA-regulated drug | Yes. FDA-regulated device: No. |
| Healthy volunteers | No |

**Randomization stratification factors** — **CONFIRMED BY THE RECORD**, which states the CMH test was
"adjusted for the stratification factors of **baseline disease severity and geographic region**." Only
the operationalisation is ASSUMED: baseline disease severity as vIGA-AD 3 vs 4, and geographic region
as North America / Europe / Asia-Pacific / Rest of World.

**Primary analysis method — CONFIRMED BY THE RECORD**: Cochran-Mantel-Haenszel test adjusted for
randomization strata; Mantel-Haenszel common risk difference as the treatment-effect estimate.

---

## 4. Investigational product

| Attribute | Value |
|---|---|
| Active | Rocatinlimab (MER 451), a fully human anti-OX40 (CD134) IgG1 monoclonal antibody |
| Presentation | Single-use **prefilled syringe (PFS), 150 mg/1.0 mL** |
| Dose | **300 mg = two (2) PFS**, administered as two separate subcutaneous injections at the same visit |
| Route | Subcutaneous (SC) |
| Comparator | **Matching placebo** — identical PFS, identical carton, identical volume; also 2 injections |
| Regimen | Day 1 → **Week 2 (loading dose)** → then **Q4W**: Weeks 4, 8, 12, 16, 20. **Seven (7) doses total.** No dose at Week 24. |
| Storage | **2 °C to 8 °C**, in original carton, protect from light. **Do not freeze. Do not shake.** |
| Excursion allowance | Cumulative **≤ 30 days at ≤ 25 °C**; any excursion outside 2–8 °C must be quarantined and reported to the sponsor within 24 h |
| Pre-administration | Remove from refrigerator and allow to reach room temperature **30 minutes** before injection; do not warm by other means |
| Injection sites | Abdomen (avoiding a 5 cm radius around the navel), anterior thigh, or upper outer arm. Rotate sites; the two injections at a given visit go in **different** sites. Never into tender, bruised, red, hard, scarred, tattooed, or actively lesional AD skin. |
| Post-dose observation | **60 minutes** at Day 1 and Week 2; **30 minutes** at all subsequent dosing visits |
| Supplied by | Meridian, via GlobalRx Logistics, to the site pharmacy |
| Kit format | Carton of 2 PFS, one carton = one dose. Kit numbers are **6 digits** (range 100001–999999), assigned by IRT. |
| Blinding | Product and placebo are visually indistinguishable. **No unblinded pharmacist is required at the site.** Administration is performed by blinded, delegated site staff. |

---

## 5. Master Schedule of Activities (SoA)

**This table is canon.** No document may add, remove, or re-time a visit.

Visit windows: **±3 days** for Weeks 2 through 24 (relative to Day 1); **±7 days** for Weeks 28–36.
Screening may be extended once by up to 14 days with medical monitor approval (single re-screen
permitted).

| # | Visit | Study day | Window | Dose given |
|---|---|---|---|---|
| 1 | Screening | Day −30 to Day −1 | — | No |
| 2 | **Day 1 / Week 0** — Randomization, first dose | Day 1 | — | **Yes (dose 1)** |
| 3 | Week 2 — **loading dose** | Day 15 | ±3 d | **Yes (dose 2)** |
| 4 | Week 4 | Day 29 | ±3 d | **Yes (dose 3)** |
| 5 | Week 8 | Day 57 | ±3 d | **Yes (dose 4)** |
| 6 | Week 12 | Day 85 | ±3 d | **Yes (dose 5)** |
| 7 | Week 16 — key secondary timepoint | Day 113 | ±3 d | **Yes (dose 6)** |
| 8 | Week 20 — **last dose** | Day 141 | ±3 d | **Yes (dose 7)** |
| 9 | **Week 24 — PRIMARY ENDPOINT / End of Treatment** | Day 169 | ±3 d | No |
| 10 | Week 28 — safety follow-up | Day 197 | ±7 d | No |
| 11 | Week 32 — safety follow-up | Day 225 | ±7 d | No |
| 12 | **Week 36 — End of Study (EOS)** | Day 253 | ±7 d | No |
| — | Unscheduled Visit | any | — | No |
| — | Early Termination (ET) | any | — | No |

### Assessments by visit

| Assessment | Scr | D1 | W2 | W4 | W8 | W12 | W16 | W20 | W24 | W28 | W32 | W36 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Informed consent | X | | | | | | | | | | | |
| Eligibility review | X | X | | | | | | | | | | |
| Medical/AD history | X | | | | | | | | | | | |
| Demographics | X | | | | | | | | | | | |
| Full physical exam | X | | | | | | | X | X | | | X |
| Targeted physical exam | | X | X | X | X | X | X | | | X | X | |
| Vital signs | X | X | X | X | X | X | X | X | X | X | X | X |
| Height | X | | | | | | | | | | | |
| Weight | X | X | | | | X | | | X | | | X |
| 12-lead ECG | X | | | | | | | | X | | | |
| **vIGA-AD / rIGA** | X | X | X | X | X | X | X | X | X | X | X | X |
| **EASI** | X | X | X | X | X | X | X | X | X | X | X | X |
| **BSA involvement** | X | X | X | X | X | X | X | X | X | X | X | X |
| SCORAD (incl. Itch VAS) | | X | | X | X | X | X | | X | | | X |
| FASS / HASS | | X | | X | X | X | X | | X | | | X |
| DLQI | | X | | X | X | X | X | | X | | | X |
| POEM | | X | | X | X | X | X | | X | | | X |
| HADS | | X | | | | X | X | | X | | | X |
| **eDiary — daily NRS** (Worst Pruritus, AD Skin Pain, Sleep Disturbance) | X (from consent) | ←— continuous daily entry through Week 24 —→ | | | | | | | X | | | |
| eDiary compliance review | X | X | X | X | X | X | X | X | X | | | |
| Central safety labs (chem, heme) | X | X | X | X | X | X | X | X | X | | | X |
| Urinalysis | X | | | | | X | | | X | | | X |
| Serology (HBsAg, anti-HBc, HBV DNA, anti-HCV/HCV RNA, HIV Ag/Ab) | X | | | | | | | | | | | |
| QuantiFERON-TB Gold Plus | X | | | | | | | | | | | X |
| TSH / free T4 | X | | | | | X | | | X | | | |
| Serum pregnancy test (WOCBP) | X | | | | | | | | | | | X |
| Urine pregnancy test (WOCBP), predose | | X | X | X | X | X | X | X | X | | | |
| **PK sample** (predose trough) | | X | X | X | | X | X | | X | | | X |
| **ADA sample** (predose) | | X | | X | | X | | | X | | | X |
| Biomarker sample (TARC/CCL17, total IgE, eosinophils) | | X | | X | | X | | | X | | | |
| Optional genomic (DNA) sample — separate consent | | X | | | | | | | | | | |
| IRT transaction | X | X | X | X | X | X | X | X | X | | | X |
| **IP administration** | | X | X | X | X | X | X | X | | | | |
| Post-dose observation | | 60 min | 60 min | 30 min | 30 min | 30 min | 30 min | 30 min | | | | |
| IP accountability | | X | X | X | X | X | X | X | X | | | |
| Concomitant medication review | X | X | X | X | X | X | X | X | X | X | X | X |
| Adverse event review | X | X | X | X | X | X | X | X | X | X | X | X |
| Rescue therapy assessment | | X | X | X | X | X | X | X | X | X | X | X |

**Ordering rule at dosing visits:** all efficacy assessments and predose blood draws are completed
**before** IP administration. vIGA-AD/rIGA and EASI are performed by a **certified rater** before any
other skin assessment and before the participant sees their eDiary scores.

---

## 6. Endpoints (from the record — do not alter)

**Co-primary (Week 24):**
1. Proportion achieving **rIGA 0/1** — vIGA-AD 0, or vIGA-AD 1 with only barely perceptible erythema,
   no induration/papulation, no lichenification, no oozing/crusting — with ≥2-point reduction from baseline.
2. Proportion achieving **EASI-75** (≥75% reduction from baseline in EASI).

**Key secondary:** EASI-75 at Week 16; vIGA-AD 0/1 at Weeks 16 and 24; ≥4-point reduction in weekly
average Worst Pruritus NRS at Weeks 16 and 24; EASI-90 at Week 24; AD Skin Pain NRS responses
(≥3- and ≥4-point) at Weeks 16 and 24; changes in Worst Pruritus NRS, SCORAD Itch VAS, DLQI, POEM,
Sleep Disturbance NRS, HADS-A, HADS-D; FASS-clear and HASS-clear at Week 24; SCORAD ≥8.7-point response.

**Missing-data conventions:** participants initiating **rescue therapy for AD** are non-responders at
all subsequent timepoints for binary endpoints (NRI); for continuous endpoints the worst observation
before rescue, including baseline, is carried forward (**WOCF**).

---

## 7. Eligibility (verbatim from the record; expand but never contradict)

**Inclusion**
- Age ≥18 years (or ≥ legal adult age in country if older) at signing of informed consent
- AD diagnosed per **AAD Consensus Criteria (2014)**, present for **≥12 months**
- History of inadequate response to medium- or higher-potency **TCS** (± TCI), or topical treatment
  otherwise medically inadvisable
- **EASI ≥16**
- **vIGA-AD ≥3**
- **≥10% BSA** AD involvement
- **Worst Pruritus NRS ≥4**

**Exclusion (washouts, relative to Day 1)**
- Biological product within **12 weeks or 5 half-lives**, whichever is longer
- Within **4 weeks or 5 half-lives**, whichever is longer: systemic corticosteroids, systemic
  immunosuppressants, phototherapy, oral or topical JAK inhibitors
- Within **1 week**: TCS of any potency, TCI, topical PDE4 inhibitors, other topical immunosuppressive
  agents, or combination products containing any of these

---

## 8. Laboratory

Central laboratory performs all protocol-specified testing except urine pregnancy tests (local, point
of care) and any local safety testing ordered for clinical care.

| Panel | Contents |
|---|---|
| Chemistry | Na, K, Cl, CO₂, BUN, creatinine, eGFR, glucose, calcium, phosphate, total protein, albumin, total & direct bilirubin, ALT, AST, ALP, GGT, LDH, CK, uric acid |
| Hematology | CBC with 5-part differential (incl. absolute eosinophils), platelets, reticulocytes |
| Urinalysis | Dipstick + microscopy reflex |
| Serology | HBsAg, anti-HBc, HBV DNA (reflex), anti-HCV with HCV RNA reflex, HIV-1/2 Ag/Ab |
| TB | QuantiFERON-TB Gold Plus (indeterminate → one repeat; second indeterminate → chest X-ray + medical monitor) |
| Thyroid | TSH with reflex free T4 |
| Pregnancy | Serum β-hCG (Screening, Week 36); urine β-hCG predose at every dosing visit and Week 24 |
| PK | Serum rocatinlimab concentration, predose trough |
| ADA | Anti-drug antibody, with neutralizing-antibody reflex; predose |
| Biomarker | Serum TARC/CCL17, total IgE, absolute eosinophil count |
| Optional genomic | Whole blood DNA, one draw at Day 1, **separate optional consent** |

**Draw order:** serology/chemistry → hematology → PK → ADA → biomarker → genomic.
**Alert (panic) values** are called by the central lab to the site within 1 hour and to the medical
monitor within 24 hours. Site must document review of every lab report with PI or Sub-I signature and
date within 5 business days.

---

## 9. Vendor roster

> **All vendors below are fictional.** The ClinicalTrials.gov record names no CRO, laboratory, or
> technology vendor. Invented names are used rather than attributing fabricated operational manuals
> to real companies. Logged in ASSUMPTIONS.md.

| Role | Vendor | Contact | Hours |
|---|---|---|---|
| CRO (clinical operations, monitoring, medical monitoring, safety intake) | **Harborlight Clinical Research, Inc. (HCR)** | +1 (888) 555-0140 | Mon–Fri 07:00–19:00 ET |
| Central laboratory | **Meridian Central Laboratories (MCL)** — Indianapolis IN (Americas), Geneva CH (EU), Singapore (APAC) | +1 (800) 555-0133 · `support@meridiancentrallabs.com` | 24/7 |
| IRT / RTSM | **Axion IRT** (Axion Clinical Systems) | +1 (800) 555-0164 · `helpdesk@axionirt.com` | 24/7 |
| EDC | **Veriscribe EDC v9.2** (Veriscribe Data Systems) | +1 (800) 555-0188 · `support@veriscribe.com` | 24/7 |
| ePRO / eDiary | **DayLog ePRO** (provisioned handheld) | +1 (800) 555-0199 | 24/7, 14 languages |
| Drug depot & courier | **GlobalRx Logistics** | +1 (800) 555-0171 | Mon–Fri 08:00–18:00 local |
| Central IRB | **Keystone Independent Review Board**, Overland Park, KS · IRB00009812 | +1 (913) 555-0110 · `submissions@keystoneirb.org` | Mon–Fri 08:00–17:00 CT |
| Rater certification | **Dermatology Assessment Training Group (DATG)** | `certify@datg-training.com` | — |

## 10. Contact directory

| Role | Name | Contact |
|---|---|---|
| Sponsor Study Director | (per registry) Study Director, Meridian Biotherapeutics, Inc. | `medinfo@meridianbio-sim.example` · +1 (866) 555-0190 |
| Medical Monitor (24/7) | **Ana Belmonte-Ruiz, MD** (HCR, on behalf of Meridian) | +1 (888) 555-0142 · `medicalmonitor.20210143@harborlightcro.com` |
| Back-up Medical Monitor | **Peter Vandermeer, MD** | via +1 (888) 555-0142 |
| **SAE / safety intake** | Global Patient Safety intake, HCR | Email `rocket.safety@harborlightcro.com` · Fax +1 (888) 555-0177 · Phone +1 (888) 555-0143 |
| Clinical Trial Manager | **Rosalind Achebe** | `r.achebe@harborlightcro.com` · +1 (888) 555-0145 |
| Assigned CRA / monitor for Site 1047 | **Kevin Ostrander, CCRA** | `k.ostrander@harborlightcro.com` · +1 (503) 555-0188 (mobile) |
| Site contract / budget | **Meridian Clinical Contracts** | `ctagreements@meridianbio-sim.example` |
| Emergency unblinding | Axion IRT system (primary) → +1 (800) 555-0164 (backup) | 24/7 |

---

## 11. Cross-document conventions

| Convention | Rule |
|---|---|
| Dates | `DD-MMM-YYYY` (14-DEC-2022) |
| Times | 24-hour clock with time zone (14:30 PT) |
| Participant ID | `SSSS-NNN` — 4-digit site number, hyphen, 3-digit sequential (e.g., **1047-001**) |
| Screening number | Same as participant ID; assigned at consent by IRT |
| Randomization number | 6-digit, IRT-assigned at Day 1 (e.g., **204518**) |
| Kit number | 6-digit (100001–999999), IRT-assigned |
| Visit naming | "Week N" for all post-baseline visits; baseline is "Day 1"; never "Visit 5" alone without the week |
| Temperature | Celsius, with the en dash range form: **2–8 °C** |
| Windows | `±3 days` (Weeks 2–24), `±7 days` (Weeks 28–36) |
| Site number | Site 1047 throughout |
| Protocol reference | "Protocol 20210143, Amendment 3 (29-NOV-2023)" |
| Phone format | +1 (NNN) 555-NNNN — all fictional 555 numbers |

## 12. Abbreviations (use consistently)

AD atopic dermatitis · ADA anti-drug antibody · AE adverse event · AESI adverse event of special
interest · BSA body surface area · CRA clinical research associate · CRC clinical research
coordinator · CTA clinical trial agreement · DLQI Dermatology Life Quality Index · DMC data
monitoring committee · EASI Eczema Area and Severity Index · eCRF electronic case report form ·
EDC electronic data capture · EOS end of study · EOT end of treatment · ET early termination ·
FASS Facial AD Severity Scale · GCP Good Clinical Practice · HADS Hospital Anxiety and Depression
Scale · HASS Hand AD Severity Scale · IB Investigator's Brochure · ICF informed consent form ·
IP investigational product · IRB institutional review board · IRT interactive response technology ·
NRI non-responder imputation · NRS numeric rating scale · PFS prefilled syringe · PI principal
investigator · PK pharmacokinetics · POEM Patient-Oriented Eczema Measure · Q4W every 4 weeks ·
rIGA revised Investigator's Global Assessment · SAE serious adverse event · SC subcutaneous ·
SCORAD SCORing Atopic Dermatitis · SoA schedule of activities · SUSAR suspected unexpected serious
adverse reaction · TCI topical calcineurin inhibitor · TCS topical corticosteroid · vIGA-AD
Validated Investigator's Global Assessment for AD · WOCBP women of childbearing potential ·
WOCF worst observation carried forward

---

## 13. Known safety profile (from the record — use these exact numbers)

Safety Analysis Set: 544 rocatinlimab / 180 placebo. **Zero deaths in either arm.**

| Event | Rocatinlimab 300 mg Q4W (n=544) | Placebo (n=180) |
|---|---|---|
| Any SAE | 10 (1.8%) | 8 (4.4%) |
| Pyrexia | 56 (10.3%) | 2 (1.1%) |
| Nasopharyngitis | 48 (8.8%) | 21 (11.7%) |
| Headache | 39 (7.2%) | 7 (3.9%) |
| Upper respiratory tract infection | 34 (6.3%) | 6 (3.3%) |
| Chills | 33 (6.1%) | 2 (1.1%) |
| Dermatitis atopic (AD worsening) | 104 (19.1%) | 48 (26.7%) |

SAEs on rocatinlimab (1 each unless noted): thymic cyst, gastritis, **anaphylactic reaction**,
cellulitis (×2), arthralgia, lumbar spinal stenosis, spondylitic myelopathy, dermatitis exfoliative
generalised, eczema. SAEs on placebo (1 each): myocarditis, hypothyroidism, bacteraemia, eczema
herpeticum, infected cyst, influenza, lower limb fracture, mental status changes, renal colic.

**Adverse events of special interest (AESI)** — ASSUMED, derived from the above profile:
1. Anaphylaxis / systemic hypersensitivity reaction
2. Pyrexia and/or chills occurring within 48 h of dosing (dose-associated reaction cluster)
3. Serious or opportunistic infection, including eczema herpeticum and cellulitis
4. Malignancy
5. Severe AD exacerbation / exfoliative dermatitis / erythroderma

---

## 14. Publication terms (real, from the record — reproduce faithfully in the CTA)

The wording below is the record's, verbatim, apart from the sponsor's name (§1.1). Reproduce the
terms as written; do not paraphrase them.

> The Clinical Trial Agreement generally does not restrict an investigator's discussion of trial
> results after completion. The Agreement permits Meridian a limited period of time to review material
> discussing trial results (typically up to 45 days and possible extension). Meridian may remove
> confidential information, but authors have final control and approval of publication content. For
> multicenter studies, the investigator agrees not to publish any results before the first
> multi-center publication.
