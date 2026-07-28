> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions log — `investigators_brochure.md`

**Documents covered by this log**

| File | Description |
|---|---|
| `/Users/dave/code/icf-please/docs/trial_documents/investigators_brochure.md` | The Investigator's Brochure for rocatinlimab (AMG 451), Edition 6.0, 15-AUG-2023 |
| `/Users/dave/code/icf-please/docs/outline/investigators_brochure_outline.md` | Structural/regulatory analysis supporting the above (contains no fabricated clinical data of its own beyond what is logged here) |

**Canon source:** `/Users/dave/code/icf-please/docs/STUDY_FACTS.md`.
**Real-data source:** `/Users/dave/code/icf-please/docs/NCT05651711.json` (ClinicalTrials.gov record for NCT05651711).

---

## 0. READ THIS FIRST — the two things that are genuinely misleading

### 0.1 ⚠️ Deliberate anachronism: a 2023 brochure containing 2024 results

| Item | Detail |
|---|---|
| **What** | The brochure is dated **15-AUG-2023** with a stated data cut-off of **30-JUN-2023**, but Section 5.6 presents the **completed primary-analysis efficacy and safety results of Study 20210143 (ROCKET-Horizon)**. |
| **Why this is impossible** | ROCKET-Horizon's primary completion date was **05-JUN-2024** and last participant last visit **27-AUG-2024** (STUDY_FACTS §1). A brochure issued in August 2023 could not contain results from a study that had not yet completed. At 15-AUG-2023 the study was still blinded and enrolling; no efficacy or unblinded safety data would have existed. |
| **Why it was done anyway** | Canon fixes two facts simultaneously: the IB edition in force is **Edition 6.0, 15-AUG-2023** (STUDY_FACTS §1), and the safety numbers that documents must use are the **completed ROCKET-Horizon results** in STUDY_FACTS §13, "use these exact numbers." The only real, verifiable safety numbers available are from the completed study. Inventing a plausible 2023-vintage interim safety table would have violated the "use the real AE numbers verbatim" rule. |
| **How it is signposted in the document** | Section 5.6 opens with a "Note on data maturity" callout framing the data as the most extensive experience with the 300 mg Q4W regimen. This softens but does **not** eliminate the anachronism. |
| **Consequence for the game** | The safety tables, the SAE list, and the Reference Safety Information frequency assignments are internally consistent with each other and with every other document derived from STUDY_FACTS §13. The date is the thing that is wrong. If the game ever needs a strictly chronologically coherent IB, either re-date this edition to ~Q4 2024 or replace Section 5.6 with an invented blinded-pooled interim safety summary. |
| **Confidence** | High that this is an anachronism; deliberate and accepted. |

### 0.2 ⚠️ Essentially all nonclinical and early-clinical data are fabricated

Only the following in the brochure is real: the molecule's identity and mechanism (fully human
anti-OX40 IgG1, non-fucosylated, depleting via ADCC), the ROCKET-Horizon design and enrolment, the
ROCKET-Horizon efficacy and safety numbers, the general shape of the published Phase 2b result
(274 participants, 5 arms, ~36 weeks, durable off-treatment response), and the cited regulatory
guidances. **Everything else — every binding affinity, EC₅₀, NOAEL, half-life, receptor occupancy
figure, ADA rate, biomarker percentage, sibling-study name, and frequency category — is invented.**
Do not cite this document for any factual purpose.

---

## 1. Title page, edition control, and document metadata

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Title page — Edition 6.0, 15-AUG-2023 | Taken as given | **Canon** (STUDY_FACTS §1). Not an assumption of this document. | — |
| Title page — supersedes Edition 5.0 (12-SEP-2022) | Taken as given | **Canon** (assignment brief). | — |
| Title page — IND 145,882 | Taken as given | **Canon** (STUDY_FACTS §1, itself flagged ASSUMED). | — |
| Title page — "EU CT / EudraVigilance product: Amgen Europe B.V." | Invented as the EU legal entity | Amgen's real EU entity is Amgen Europe B.V.; used as a plausible regulatory holder. Not verified against the record. | Med |
| Title page — "Prepared by Amgen Global Development and Global Patient Safety" | Invented | Generic, realistic internal ownership statement for an IB. | High (as plausible fiction) |
| Title page — "Approved by Amgen Development Safety Review Board, 09-AUG-2023" | Invented body and date | IBs carry an internal approval; date set 6 days before issue. | High (as plausible fiction) |
| Title page — RSI Version 4.0, effective 15-AUG-2023 | Invented version numbering | The RSI needs its own version and date per EU CTR Annex III. Version 4.0 chosen to align with Edition 6.0 having had RSI 1.0 introduced at Edition 4.0 and RSI 3.0 at Edition 5.0. | High (as plausible fiction) |
| Confidentiality statement (full text) | Invented | Standard IB confidentiality wording, including the IRB/IEC and regulatory-authority carve-outs and the emergency-treatment exception. | High |
| Document history table — all six editions with dates 04-FEB-2016 through 15-AUG-2023 and their stated bases for revision | **Entirely invented** | Constructs a plausible development history: original as KHK4083 (2016), Phase 1 results (2017), MAD + 26-week tox (2019), Amgen transfer and rename (2021), Phase 2b final (2022), Phase 3 (2023). The 2021 transfer approximates the real Amgen–Kyowa Kirin collaboration timing. | Med |
| "Summary of changes since Edition 5.0" — all 7 numbered changes | **Entirely invented** | Needed so the game can reason about *what changed* and therefore about re-consent, IRB submission, and retraining obligations. Item 1 (RSI changes) is the load-bearing one. | High (as plausible fiction) |
| Change 1 — chills upgraded from *common* (RSI v3.0) to *very common* (RSI v4.0); anaphylaxis newly added; exfoliative dermatitis/erythroderma newly added; lymphocyte count decreased newly added; injection site bruising subsumed into a grouped term | **Invented RSI change history** | Deliberately constructed to give the game a usable dramatic hook: *anaphylaxis was NOT in the RSI before 15-AUG-2023*. An anaphylaxis SAE with onset before that date would therefore have been a **SUSAR**; one after that date is an expected serious adverse reaction. This is the single most game-relevant fabricated fact in the document. | High (as designed fiction) |
| Data cut-off 30-JUN-2023 | Invented | Conventional ~6-week lag between cut-off and issue. See §0.1 for why it does not reconcile with Section 5.6. | Med |
| Cumulative exposure "more than 1,050 individuals" / "1,054 exposed; 618 patient-years" | Invented, derived by summing the invented study N values | 48 (Ph1 active) + 44 + 218 + 744 = 1,054. Patient-years computed roughly from exposure durations. | Med |

---

## 2. Introduction and development programme (Section 2)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §2.1 — AD epidemiology (2–8% adults, up to 20% children), disease burden claims | Drawn from general dermatology literature, not verified | Standard, widely cited ranges. Not sourced from the registry record. | Med |
| §2.2 — OX40/OX40L biology: expression kinetics (peak 24–72 h post activation), TRAF2/3/5 recruitment, NF-κB and PI3K/AKT signalling, BCL-2/BCL-xL/survivin upregulation, TSLP induction of OX40L | Consistent with published immunology; presented without individual citation | Genuinely accurate mechanism as far as the public literature goes; the *specific* claims about rocatinlimab's epitope are invented (see §4). | High (biology) / Med (attribution) |
| §2.2, §2.3 — claim that OX40 is "essentially absent from naive T cells, resting memory T cells, B cells, and all non-haematopoietic tissue" | Simplification of published expression data | Broadly correct and mechanistically load-bearing for the selectivity argument. Real expression is somewhat more complex (some ILC2, some Treg, some plasmacytoid DC contexts). | Med |
| §2.3 — "*TNFSF4* polymorphisms associated with atopic phenotypes in GWAS" | Asserted without specific citation | Plausible; *TNFSF4* variants are associated with several immune phenotypes. Not verified. | Low |
| §2.4 — "approximately 50-fold higher affinity for FcγRIIIa" from afucosylation | Invented specific multiple | Published afucosylation effects range roughly 10–100×. 50× chosen as a representative value and used consistently with the 53× ADCC potency difference in §4.1.2. | Med |
| §2.4 — claim that afucosylation "substantially reduces the impact of the FcγRIIIa V158F polymorphism" | Consistent with published work on afucosylated IgG1 | Real class property. Applied to rocatinlimab without study-specific evidence. | Med |
| §2.4 — predicted slower onset (Week 8–12 separation), no plateau at Week 24 | Invented framing, but consistent with the real ROCKET-Horizon result shape | The real data show ongoing improvement through Week 24; the mechanistic explanation is the sponsor's narrative, invented here. | Med |
| §2.5.1 — **Study KHK4083-101**, Phase 1, 64 healthy volunteers, Japan + UK, 8 cohorts of 8 (6:2), IV 0.01–10 mg/kg + SC 300 mg, 16-week follow-up | **Entirely invented** (study number, N, design, sites, dose levels) | The assignment requires a Phase 1 healthy-volunteer SAD study. Design is a conventional SAD. | High (invented) |
| §2.5.1 — **Study KHK4083-102**, Phase 1b MAD, 44 adults with AD, Japan + US, 4 IV cohorts Q2W × 10 weeks | **Entirely invented** | Bridges the Phase 1 healthy-volunteer study to the Phase 2b. Loosely echoes the real early Japanese KHK4083 experience but the N, design, and results are fabricated. | High (invented) |
| §2.5.1 — **Study 20200168**, Phase 2b, 274 participants, 5 arms, 20 weeks' treatment + 16 weeks off-treatment | **Study number invented.** N, arm count, duration structure, and the durable off-treatment finding are **modelled on the real published rocatinlimab Phase 2b** (Guttman-Yassky et al., *Lancet* 2023). | The assignment specifies a 274-participant, 5-arm, 36-week study with durable off-treatment response. The real study matches this shape closely, so the design is realistic; all numeric results are fabricated (see §6). | Med (design) / High (invented results) |
| §2.5.2 — **ROCKET-Shuttle (20210144)** — Phase 3 adolescent monotherapy, weight-tiered dosing | **Entirely invented** (name assignment, protocol number, design, population) | Assignment requires named sibling trials. "Shuttle" assigned to the adolescent study. Protocol numbers 20210144–20210147 invented to sit adjacent to the canonical 20210143. | High (invented) |
| §2.5.2 — **ROCKET-Ascend (20210145)** — Phase 3, 52-week, rocatinlimab + background TCS/TCI | **Entirely invented** | Combination-with-topicals study is a standard Phase 3 programme component in AD. | High (invented) |
| §2.5.2 — **ROCKET-Voyager (20210146)** — open-label long-term extension, up to 100 weeks | **Entirely invented** | Every Phase 3 AD programme has an LTE. 100 weeks chosen arbitrarily. | High (invented) |
| §2.5.2 — **ROCKET-Astro (20210147)** — randomised withdrawal and retreatment study | **Entirely invented** | Designed specifically to test the durability hypothesis that distinguishes rocatinlimab. Gives the corpus a study that "matters" mechanistically. | High (invented) |
| §2.5.2 — all study statuses ("Enrolling", "Enrolment complete") | Invented | Set relative to the stated 15-AUG-2023 issue date. | Med |
| §2.5.2 — "Additional studies in other T-cell–mediated inflammatory conditions are in preparation" | Invented, deliberately vague | Realistic pipeline language; avoids committing to specifics. | High |
| §2.5.3 — "where the protocol and this brochure differ, the protocol governs" | Invented but standard | Normal IB boilerplate and useful game logic. | High |
| §2.5 — "Amgen assumed global development in 2021 under a collaboration agreement" | Approximates real history | Kyowa Kirin originated KHK4083; Amgen licensed it. Year is approximate and not verified against a source. | Med |

---

## 3. Physical, chemical and pharmaceutical properties (Section 3)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §3.1 — 148 kDa; deglycosylated theoretical mass 145.6 kDa | Invented specific values | ~148 kDa specified by the assignment brief; the deglycosylated figure derived to be internally consistent. | High (invented) |
| §3.1 — heavy chain 446 aa, light chain 214 aa; 4 interchain + 12 intrachain disulfides; N-glycosylation at Asn297 | Invented sequence-level detail | Asn297 is the genuine conserved IgG1 glycosylation site; chain lengths and disulfide counts are typical IgG1 values, not rocatinlimab-specific. | Med |
| §3.1 — "> 95% non-fucosylated" | Invented specification | Consistent with FUT8-knockout platform outputs. | Med |
| §3.1 — pI 8.4–8.9 | **Invented** | Arbitrary but plausible for an IgG1. | Low |
| §3.2 — FUT8-knockout CHO cell line | Mechanistically real for KHK4083 (Kyowa Kirin POTELLIGENT platform); the specific description is written here | Genuine and central to the ADCC mechanism the assignment asked to be built accurately. | High (mechanism) |
| §3.2 — downstream process description (protein A, low-pH viral inactivation, two polishing steps, nanofiltration, UF/DF) | Invented | Entirely generic mAb process; no proprietary claim intended. | High (generic) |
| §3.3 — **formulation composition**: 10 mM acetate buffer pH 5.2, 85 mg sucrose, 10 mM L-proline, 0.4 mg polysorbate 80, WFI to 1.0 mL; ~300 mOsm/kg | **Entirely invented** | A realistic high-concentration mAb SC formulation. L-proline included as a viscosity modifier appropriate at 150 mg/mL. No relation to the real product. | High (invented) |
| §3.3 — container closure: 1 mL long siliconised type I borosilicate glass, staked 27G ½-inch thin-wall needle, fluoropolymer-laminated bromobutyl stopper, rigid needle shield, passive safety guard | **Entirely invented** | Standard PFS configuration for a 1 mL SC biologic. | High (invented) |
| §3.3 — "not made with natural rubber latex" | Invented | Standard modern statement; matters for ICF and allergy screening. | High |
| §3.3 — 150 mg/1.0 mL PFS; 300 mg = 2 PFS; carton of 2; matching placebo; Day 1 / Week 2 loading / Q4W to Week 20 = 7 doses | Taken as given | **Canon** (STUDY_FACTS §4, §5). | — |
| §3.4 — storage 2–8 °C; do not freeze; do not shake; 30-day cumulative ≤ 25 °C excursion allowance; 24 h excursion reporting; 30-minute room-temperature equilibration | Taken as given | **Canon** (STUDY_FACTS §4). | — |
| §3.4 — **36-month shelf life** at 2–8 °C | **Invented** | Typical for a commercial-stage mAb PFS. | Med |
| §3.4 — **"administer within 8 hours"** once equilibrated; do not return to the refrigerator | **Invented** | Canon specifies the 30-minute equilibration but not an in-use limit. 8 hours is a common in-use window. **Flag:** if another document in the corpus states a different in-use limit, this is the one to reconcile. | Med |
| §3.4 — acceptability of "a few translucent-to-white amorphous proteinaceous particles" | Invented but standard | Standard mAb visual-inspection language. | High |
| §3.4 — "do not expel air bubbles / do not prime" | Invented but standard | Correct and important practical guidance for PFS products. | High |
| §3.5 — comparison to anti-OX40 **agonist** antibodies (oncology) and to anti-OX40**L** antibodies (amlitelimab named) | Real class context; the framing is written here | Amlitelimab is a real anti-OX40L agent in AD. Naming it is factual context, not a claim about it. | Med |
| §3.5 — attribution of first-dose reactions to the depleting-antibody class | Reasoned inference | Well-established class behaviour; applied here to explain the pyrexia/chills signal. | High (reasoning) |

---

## 4. Nonclinical studies (Section 4) — **all data in this section are invented**

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §4.1.1 — **binding affinities**: human OX40 K_D **0.24 nM** (k_on 3.1 × 10⁵, k_off 7.4 × 10⁻⁵); cyno K_D **0.41 nM**; no rat or mouse binding; flow EC₅₀ 0.31 nM | **All invented** | Sub-nanomolar affinity is typical of a therapeutic mAb. Cyno within 2× of human is the standard justification for monkey-only toxicology. Absence of rodent cross-reactivity is the standard reason a rodent tox species is unavailable. | High (invented) |
| §4.1.1 — epitope in cysteine-rich domain 1 overlapping the OX40L interface; HDX + 2.4 Å co-crystal | **Invented** | Provides a mechanistic basis for ligand blockade. CRD1 is a plausible OX40L-contacting region. | Med |
| §4.1.1 — specificity panel (12 counter-targets, all negative) | **Invented** | Composition of the panel is realistic for a TNFRSF-targeting antibody. | High (invented) |
| §4.1.2 — **ADCC EC₅₀ 12 ng/mL**; max lysis 68%; fucosylated comparator 640 ng/mL (**53-fold** difference); 158F-homozygous donors 18 ng/mL | **All invented** | Chosen to be internally consistent with the ~50-fold afucosylation claim in §2.4. | High (invented) |
| §4.1.2 — OX40L blockade IC₅₀ 0.9 nM; 72–88% cytokine inhibition at 10 µg/mL | **Invented** | Supports the dual (deplete + block) mechanism. | High (invented) |
| §4.1.2 — **no CDC**, **no agonist activity** in either plate-bound or soluble format | **Invented** | Important and deliberate: distinguishes rocatinlimab from oncology anti-OX40 agonists. Also removes CDC as an explanation for the dose reaction. | High (invented) |
| §4.1.2 — cytokine release assay: transient IL-6/TNF-α/IFN-γ at ≥ 1 µg/mL, 10–50× below anti-CD28 superagonist positive control, 12 donors | **Invented** | Constructed specifically to be the nonclinical antecedent of the clinical pyrexia/chills signal, so the document has an internally coherent mechanistic story. | High (invented, by design) |
| §4.1.3 — cyno in vivo PD: > 90% RO at ≥ 1 mg/kg sustained ≥ 28 days at 10 mg/kg; ~80% OX40⁺ memory depletion by Day 7; no effect on naive/CD8/B/NK/monocytes; total lymphocytes −15% to −25% recovering by Day 14; KLH-DTH attenuation; IL-6 2–6× at 6–12 h post first dose only | **All invented** | Mirrors and predicts the clinical PD in §5.2, giving translational coherence. | High (invented) |
| §4.2 — safety pharmacology integrated into repeat-dose studies; telemetry n = 4/sex at 0 and 30 mg/kg; **max mean QTcI change −3.1 ms (90% CI upper bound 4.8 ms)**; plethysmography; modified Irwin/FOB; no hERG study | **All invented** | The integrated-assessment approach is the genuine ICH S6(R1)/S7A expectation for biologics. The specific QTcI numbers are fabricated. The hERG rationale is real. | High (invented data) / High (regulatory approach) |
| §4.3.1 — cyno single-dose PK table (C_max, T_max, AUC, t½ 8.9–12.1 d, **SC bioavailability 70%**, CL 7.5–8.3 mL/day/kg, V_z 106–131 mL/kg) | **All invented** | Values chosen to be typical for an IgG1 in cynomolgus monkey and to translate sensibly to the invented human PK in §5.1 (human t½ 11.6 d, F 65%). | High (invented) |
| §4.3.2 — no classical ADME studies; ¹²⁵I tissue distribution study | Regulatory position is genuine (ICH S6(R1)); the tissue distribution study is **invented** | The "no CYP/transporter studies for a mAb" rationale is correct and worth teaching. | High (rationale) / High (invented study) |
| §4.3.3 — monkey ADA: 7/40 (17.5%) in the 4-week study, 11/48 (22.9%) in the 26-week study, 4 animals with exposure loss from ~Week 12 | **All invented** | Typical for a human antibody in monkeys; included because a real IB would address it. | High (invented) |
| §4.4.1 — **4-week GLP study**: cyno, 5/sex/group, SC weekly × 5, 0/3/10/30 mg/kg, 8-week recovery; full endpoint list; findings; **NOAEL 30 mg/kg** | **Entirely invented** | Assignment requires a 4-week GLP study. Design is conventional. | High (invented) |
| §4.4.2 — **26-week GLP study**: cyno, 6/sex/group, SC Q2W × 13, 0/3/10/30 mg/kg, 12-week recovery; findings; **NOAEL 30 mg/kg**; AUC 14,800 µg·day/mL; **exposure multiple ~28×** | **Entirely invented** | Assignment requires a 26-week GLP study with NOAEL and margin. 28× is a comfortable, realistic margin for a well-tolerated mAb. | High (invented) |
| §4.4.1/4.4.2 — **target organs: none**; findings limited to (a) OX40⁺ memory T-cell reduction, (b) minimal–moderate germinal centre reduction, (c) injection-site mononuclear infiltration ± minimal fibrosis; all reversible | **Invented** | Deliberately constructed as "exaggerated pharmacology only" — the profile expected of a selectively depleting antibody and the reason the protocol requires no special lab monitoring. | High (invented, by design) |
| §4.4.1/4.4.2 — TDAR: primary responses preserved; secondary IgG response reduced ~30% (4-week) / ~40% (26-week) at 30 mg/kg, reversible | **Invented** | Gives a nuanced, non-cartoonish immune-competence result. | High (invented) |
| §4.4.2 — one high-dose female euthanised Day 121 for traumatic limb injury, unrelated | **Invented** | Realistic incidental-mortality detail. | High (invented) |
| §4.4.3 — rabbit local tolerance study | **Invented** | Standard formulation-tolerance study. | High (invented) |
| §4.5 — **ePPND study**: cyno, 16–18/group, SC Q2W from GD20 to parturition, 0/10/30 mg/kg, infants followed to postnatal month 6; no malformations; **infant:maternal serum ratio 1.4–1.9×**; milk:serum ≈ 0.008; infant OX40⁺ memory reduction resolving by PNM6; NOAEL 30 mg/kg | **Entirely invented** | ePPND is the genuine ICH S5(R3)/S6(R1) approach for a monkey-only mAb. Infant serum exceeding maternal at birth is real FcRn behaviour. All numbers fabricated. | High (invented) |
| §4.5 — **contraception for 5 months after last dose**, justified as ≈ 5 terminal half-lives plus margin | **Invented duration** | 5 × 11.6 days ≈ 58 days ≈ 2 months, so 5 months is conservative relative to the stated arithmetic; the "plus a safety margin" wording covers the gap. **Flag:** if another corpus document (ICF, protocol) states a different contraception duration, reconcile to that document, not this one. | Med |
| §4.6 — no genotoxicity, no carcinogenicity; weight-of-evidence rationale; malignancy retained as AESI | Regulatory position is **genuine** (ICH S6(R1)); the weight-of-evidence bullets are written here | The rationale (large molecule cannot reach DNA; no rodent cross-reactivity; certain immunogenicity in rodents) is correct and is exactly what an IB would say. | High |
| §4.7 — tissue cross-reactivity study: 38 human tissues, 3 donors each, 2 and 20 µg/mL, plus cyno panel; staining confined to lymphoid mononuclear cells; no unexpected binding | **Entirely invented** | Design mirrors a genuine GLP TCR study. Result (lymphoid-restricted) is the expected outcome for an OX40-targeting antibody. | High (invented) |
| §4.8 — the four "human relevance" conclusions | Written here as interpretation | Interpretation of the invented data; the reasoning pattern is realistic IB prose. | High |

---

## 5. Effects in humans — PK, PD, immunogenicity (Sections 5.1–5.3) — **all invented**

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5.1.1 — **SC bioavailability 65%** (0.647; 95% CI 0.59–0.71); median **T_max 7 days** (range 4–11); no site-dependence; split-dose equivalence | **All invented** | 60–70% F is typical for SC mAbs. T_max ~7 d is typical. Site-independence and split-dose equivalence are included because the product is administered as two 150 mg injections. | High (invented) |
| §5.1.2 — V_c 3.4 L, V_p 2.2 L, V_ss ≈ 5.6 L | **Invented** | Typical IgG1 distribution volumes. | High (invented) |
| §5.1.3 — **t½ 11.6 days** (range 9.8–14.3); CL/F 0.21 L/day; C_max,ss 26.7 µg/mL; C_trough,ss 9.8 µg/mL; AUC_tau,ss 528 µg·day/mL; accumulation ratio 1.8; **steady state ~Week 16** | **All invented** | The assignment specifies half-life ~10–14 days and steady state by ~Week 16; the specific values are chosen to be mutually consistent (CL/F × AUC ≈ dose/F etc. to within rounding). | High (invented) |
| §5.1.3 — **rationale for the Week 2 loading dose** (raises Week 4 trough ~55%; brings steady state forward to Week 16) | **Invented quantification** of a canonical design feature | The loading dose is canon (STUDY_FACTS §4/§5); the pharmacokinetic justification is constructed here. Useful for the game: it makes a missed Week 2 dose meaningful. | Med |
| §5.1.3 — links the half-life to the canonical 12-week biologic washout and 12-week safety follow-up | Reasoned inference from canon | Both facts are canon; the causal link is written here. | High (reasoning) |
| §5.1.4 — dose proportionality power exponent 0.97 (90% CI 0.89–1.05) over 150–600 mg; non-linearity below ~50 mg | **Invented** | Standard presentation. TMDD at low doses is expected for a target-binding antibody. | High (invented) |
| §5.1.5 — **popPK model AMG451-popPK-v4**, 2-compartment, first-order absorption, 4,118 records / 1,062 participants; allometric exponents 0.72 (CL) and 0.91 (V); ±42% / −33% AUC at weight extremes; no dose adjustment for any covariate | **All invented** | Model name, record count, and covariate effects fabricated. The conclusion (weight matters but not enough to require adjustment) is the usual finding for SC mAbs. | High (invented) |
| §5.1.6 — no DDI studies; theoretical inflammation–CYP interaction; caution with warfarin/ciclosporin/theophylline; live vaccines prohibited during treatment and for **12 weeks** after the last dose | Regulatory reasoning is genuine; the **12-week** vaccine interval is **invented** | The inflammation–CYP argument is a real and standard IB statement for biologics. **Flag:** confirm the 12-week live-vaccine interval against the protocol/ICF if those documents state one. | Med |
| §5.2.1 — receptor occupancy **> 95% within 48 h**, **> 90% sustained through the dosing interval including trough**, > 90% for ~6 weeks after the final dose | **All invented** | Supports the Q4W interval and the durability narrative. | High (invented) |
| §5.2.2 — T-cell subset table: OX40⁺ CD4 memory −68% (W4), −79% (W16), still −40% at W36; lesional OX40⁺ density −74% (n = 34 biopsy sub-study); Treg transient −20%; no change in naive/CD8/B/NK/monocytes/immunoglobulins | **All invented, including the biopsy sub-study** | Constructed to demonstrate selectivity — the central safety argument of the molecule. The Treg finding is included deliberately as a realistic loose end. | High (invented) |
| §5.2.2 — **transient total lymphocyte decline**: nadir Day 3–10 after first dose, median −18% (5th percentile −34%), recovery by ~Week 4 despite continued dosing; Grade 3 lymphopenia in < 1%, all asymptomatic | **Entirely invented** | The assignment explicitly requires a "suspected transient lymphocyte decline" to manage. This is the dataset that makes the §7.6 guidance coherent, and it drives the RSI listing of *lymphocyte count decreased* as **common**. | High (invented, by design) |
| §5.2.3 — biomarker table: **TARC/CCL17 −55%** at W16; total IgE −28% (W16) / −41% (W24); eosinophils −22%; IL-22/IL-13/IL-31 −35% to −52%; lesional transcriptome 71% improvement | **All invented** | TARC/CCL17, total IgE, and eosinophils are the canonical biomarker panel (STUDY_FACTS §8); the magnitudes are fabricated. | High (invented) |
| §5.2.3 — claim that biomarker suppression **persisted off treatment** in Study 20200168 | **Invented** | Reinforces the durability hypothesis; consistent with the invented Phase 2b efficacy result. | High (invented) |
| §5.3 — **Assay AMG451-ADA-v3**, tiered bridging ECL with NAb reflex, drug tolerance 30 µg/mL | **Invented** | The tiered design and NAb reflex are canon-adjacent (STUDY_FACTS §8 specifies "ADA with neutralising-antibody reflex"); the assay name and tolerance are fabricated. | High (invented) |
| §5.3 — ADA results: pre-existing 2.1%; **treatment-emergent 12.6%**; persistent 4.2%; transient 8.4%; median peak titre 1:80; **NAb 3.1%**; median onset Week 12 | **All invented** | Low immunogenicity is appropriate for a fully human SC antibody. | High (invented) |
| §5.3 — impact: no effect except in n = 14 with persistent high titre (−45% trough); **no association with hypersensitivity**; the anaphylaxis case was ADA-negative at the preceding visit | **Invented** | The "ADA-negative anaphylaxis case" detail is deliberate: it forecloses an easy explanation and keeps hypersensitivity risk live. | High (invented, by design) |

---

## 6. Effects in humans — clinical studies (Sections 5.4–5.7)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5.4.1 — Study KHK4083-101 results: dose-proportionality above 0.3 mg/kg, no MTD reached | **Invented** | Conventional SAD outcome. | High (invented) |
| §5.4.1 — Study KHK4083-101 safety: pyrexia 13/48 (27.1%), chills 8/48 (16.7%), headache 11/48 (22.9%) vs placebo; injection-site erythema 4/12 SC; median onset 8 h (IV) / 26 h (SC); median duration 20 h; IL-6/TNF-α peak 6–12 h; transient lymphopenia 19/48; no SAEs | **All invented** | Sets up the pyrexia/chills story at the earliest possible point in the programme and gives it a cytokine correlate. Higher incidence than Phase 3 is deliberate (healthy volunteers, IV route, higher mg/kg). | High (invented) |
| §5.4.2 — Study KHK4083-102 efficacy: mean EASI reduction 29/46/61/68% at Week 12 by cohort; **maintained at Week 24, 14 weeks after last dose** | **All invented** | First appearance of the durability signal; motivates the Phase 2b off-treatment design. | High (invented) |
| §5.4.2 — Study KHK4083-102 safety: pyrexia 50.0%, chills 31.8%; 2 SAEs (eczema herpeticum, appendicitis), neither related; no deaths | **Invented** | The eczema herpeticum SAE is placed here deliberately to justify the AESI designation and the §7.4 guidance. | High (invented, by design) |
| §5.5 — Study 20200168 arm structure (150 Q4W / 600 Q4W / 300 Q2W / 600 Q2W / placebo; n = 55/55/54/54/56 = 274) | Arm structure **modelled on the real published Phase 2b**; the per-arm N split is **invented** | The real study used these four regimens and n = 274. The exact allocation, study number, and site count (65 centres, Japan/Germany/Canada/US) are fabricated. | Med |
| §5.5.1 — **all Phase 2b efficacy numbers** (EASI % change −61.1 / −57.4 / −69.9 / −63.5 vs −15.0 at W16; EASI-75; vIGA-AD 0/1; Week 20 and Week 36 values; **62–72% of Week 20 responders maintaining EASI-75 at Week 36**; pruritus NRS changes) | **Entirely invented** | The *pattern* (all doses superior, flat dose–response, durable off-treatment response) reflects the real published finding; every number is fabricated. The Week 36 maintenance figures are the most important invented numbers in the document after the RSI. | High (invented) |
| §5.5.1 — dose-selection rationale for 300 mg Q4W with a Week 2 loading dose, from exposure–response modelling | **Invented** | Reverse-engineered to justify the canonical Phase 3 regimen. | High (invented, by design) |
| §5.5.2 — Phase 2b safety: AEs 79.9% vs 71.4%; pyrexia 18.8% vs 3.6%; chills 11.9% vs 1.8%; nasopharyngitis 16.5% vs 17.9%; headache 11.5% vs 7.1%; aphthous ulcer 4.6% vs 0%; ISRs 8.7% vs 5.4%; SAEs 2.3% vs 3.6%; discontinuations 4.6% vs 3.6%; higher pyrexia in Q2W arms | **All invented** | Aphthous ulcer is included because it appears in the real published rocatinlimab tolerability profile; the rate is fabricated. It is the reason *aphthous ulcer* appears in the RSI. Q2W-vs-Q4W pyrexia difference invented to further justify Q4W selection. | High (invented) |
| §5.6 header — "Note on data maturity" callout | Written to soften §0.1 | Does not resolve the anachronism. | — |
| §5.6 — design, 3:1 randomisation, 151 centres / 21 countries, 726 randomised (543/183), Safety Analysis Set 544/180, regimen, eligibility, co-primary endpoints | Taken as given | **Canon** (STUDY_FACTS §1, §3, §4, §5, §6, §7) and the registry record. | — |
| §5.6 — completion 481 (88.6%) / 155 (84.7%); the inadvertent placebo-arm dosing | Taken from the registry record | **Real** (`participantFlowModule`). | — |
| §5.6 — demographics (mean age 38.4; 45.3% female; 59.5% White / 30.6% Asian / 4.0% Black; 11.7% Hispanic) | Derived from the registry record's `baselineCharacteristicsModule` (total column) | **Real**, recomputed as percentages. | High |
| §5.6.1 — **all efficacy results** (rIGA 0/1 16.4% vs 4.9%; EASI-75 W24 32.8% vs 13.7%; EASI-75 W16 29.3% vs 12.6%; vIGA-AD 0/1 W16 12.7% vs 2.7%; vIGA-AD 0/1 ≥2pt W24 19.3% vs 6.6%; EASI-90 19.9% vs 4.9%; itch ≥4-pt 24.0% vs 10.5%; NRS LS mean changes) | Taken from the registry record | **Real** (`outcomeMeasuresModule`); percentages computed from the reported counts and denominators. | High |
| §5.6.1 — statement that separation emerged "from approximately Week 8" and had not plateaued | **Invented interpretive claim** | The record reports Week 16 and Week 24 only; the Week 8 onset is inferred, not observed. | Low |
| §5.6.2–5.6.4 — **all safety numbers**, including zero deaths, SAE counts (10 / 1.8% vs 8 / 4.4%), the ≥ 5% AE table, and the complete SAE-by-term table | Taken as given | **Canon** (STUDY_FACTS §13), confirmed against the registry record verbatim. Not assumptions. | — |
| §5.6.4 — narrative detail of the anaphylaxis case (began during the post-dose observation period; treated with IM adrenaline; resolved without sequelae; permanent discontinuation) | **Entirely invented** | The record states only "anaphylactic reaction, 1 participant." The narrative is constructed to make the §7.2 guidance and the post-dose observation requirement feel earned. | High (invented) |
| §5.6.5 — no clinically meaningful lab, vital sign, or ECG changes; no Hy's Law cases; no discontinuations for lab abnormalities | **Invented** | The registry record reports no laboratory outcomes. A negative statement is the realistic IB position. | Med |
| §5.7 — **pooled programme safety table** (76.4% any TEAE; pyrexia 12.8%; chills 7.9%; headache 8.1%; ISR 6.4%; SAEs 2.4%; serious infections 0.9%; hypersensitivity 0.4% / anaphylaxis 0.1%; discontinuations 3.1%; 0 deaths; 2 malignancies; 0 opportunistic infections; 0 TB; 0 MACE; 3 eczema herpeticum cases) | **Entirely invented** | This table is the stated derivation basis for the RSI frequency categories in Section 6, so it was constructed to make those categories arithmetically defensible — e.g. pooled pyrexia 12.8% supports *very common*; chills 7.9% is below 10% but the frequency was assigned from the Phase 3 arm plus programme judgement (see §7 note below). | High (invented, by design) |
| §5.7 — the two named malignancies (basal cell carcinoma; papillary thyroid carcinoma at Day 21, considered pre-existing) | **Invented** | Realistic background-incidence findings that do not constitute a signal. | High (invented) |

---

## 7. Reference Safety Information (Section 6) — **the most consequential invented content**

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §6 — designation of Section 6 as the RSI, with its own version (4.0) and effective date (15-AUG-2023), separable and clearly labelled | **Invented, but modelled on the genuine requirement** | EU CTR Annex III §2(8) and the CTFG RSI Q&A require exactly this. Constructed to be inspectable. | High (approach) / High (invented specifics) |
| §6.2 — CIOMS/EU frequency bands (very common ≥ 1/10; common ≥ 1/100 to < 1/10; uncommon ≥ 1/1,000 to < 1/100; rare; very rare) | **Real convention**, reproduced | Required by the assignment and genuinely standard. | — |
| §6.3 **Table 6-1** — the full expectedness table (34 preferred terms across 10 System Organ Classes) | **Entirely invented as a table**, though anchored to canon | Term selection and SOC assignment are the author's; the anchor terms were specified by the assignment. | High (invented) |
| Table 6-1 — **Pyrexia = very common; Chills = very common** | Specified by the assignment; supported in-document by Phase 3 pyrexia 10.3% and pooled 12.8% | Pyrexia at 10.3% in Phase 3 clears the ≥ 10% threshold. **Chills at 6.1% (Phase 3) and 7.9% (pooled) does NOT arithmetically clear ≥ 10%** — the *very common* assignment was mandated by the brief and is justified in-document only by reference to "pooled programme data." **This is a known internal inconsistency.** It is arguably realistic (sponsors do assign frequency conservatively across datasets, and the Phase 1/1b invented rates were 16.7% and 31.8%), but a careful reader can find it. | Med — flagged as a deliberate, brief-mandated inconsistency |
| Table 6-1 — **Nasopharyngitis, URTI, Headache, Dermatitis atopic = common** | Specified by the assignment; consistent with Phase 3 rates of 8.8%, 6.3%, 7.2%, and 19.1% | Note that dermatitis atopic at **19.1%** in Phase 3 would arithmetically be *very common*; it is listed as *common* per the brief, defensible on the basis that it occurred **less** often than on placebo (26.7%) and that only the drug-attributable fraction belongs in an adverse-*reaction* table. | Med — defensible but worth knowing |
| Table 6-1 — **Anaphylactic reaction and Hypersensitivity = uncommon** | Specified by the assignment; supported by pooled anaphylaxis 0.1% and hypersensitivity 0.4% | Arithmetically consistent (0.1% and 0.4% both fall in ≥ 0.1% to < 1%). **This is the game-critical row:** because anaphylaxis is listed, the ROCKET-Horizon anaphylaxis case is an *expected* serious adverse reaction and therefore **not** a SUSAR — provided its onset was on or after 15-AUG-2023. Per the invented RSI change history (§1 above), an onset before that date falls under RSI v3.0, where anaphylaxis was **not** listed, making it a SUSAR. | High (invented, by design) |
| Table 6-1 — all remaining terms (fatigue, influenza-like illness, injection site reaction grouped term, asthenia, oral herpes, folliculitis, herpes simplex, herpes zoster, eczema herpeticum, cellulitis, skin infection, dizziness, rash, urticaria, non-lesional pruritus, exfoliative dermatitis, erythroderma, myalgia, arthralgia, back pain, aphthous ulcer, nausea, diarrhoea, lymphopenia, conjunctivitis, lymphocyte count decreased, CPK increased, ALT increased) | **All invented, with frequency categories invented** | Each is traceable to something in the document: eczema herpeticum and cellulitis to the SAE list; exfoliative dermatitis and erythroderma to the Phase 3 SAE list; aphthous ulcer to the invented Phase 2b profile; lymphocyte count decreased to the invented PD finding; arthralgia to the Phase 3 SAE list. Conjunctivitis is deliberately listed as *uncommon* rather than common, to avoid implying the dupilumab class effect. | High (invented) |
| Table 6-1 — MedDRA Version 26.0 | **Invented but date-plausible** | MedDRA 26.0 was current around mid-2023. | Med |
| §6.3 — the boxed statement "Adverse reactions not listed in this table are considered UNEXPECTED for the purposes of expedited regulatory reporting" plus the nature-or-severity qualifier | Required by the assignment; **wording is genuine RSI practice** | The nature-or-severity clause is a real and frequently misunderstood part of ICH E2A. | — |
| §6.4 — three-part SUSAR test, allocation of each test to investigator vs sponsor, 7-day / 15-day clocks, 21 CFR 312.32 parallel, single-case unblinding | **Real regulatory content**, reproduced | Genuinely accurate under ICH E2A, EU CTR, and 21 CFR 312.32. This is the teaching core of the document. | High |
| §6.5 — the note that a listed reaction occurring at a materially higher frequency may be treated as unexpected in some jurisdictions | **Real but jurisdiction-variable** | Accurately described as variable rather than universal. | Med |

---

## 8. Guidance for the investigator (Section 7)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §7.1 — pyrexia/chills onset within 24–48 h, concentrated in the first two doses, temperature range 37.8–39.0 °C, resolution within 24–48 h, uncommon after the Week 8 dose | **Invented clinical detail** | Onset timing was specified by the assignment; the temperature range and the "uncommon after Week 8" claim are fabricated. | High (invented) |
| §7.1 — antipyretic guidance (paracetamol/acetaminophen up to 1 g q6h, max 3 g/24 h in adults; NSAIDs permitted) | **Invented dosing guidance**, aligned with common adult limits | **Flag:** this is a simulated document and must not be used clinically. The 3 g/24 h cap is deliberately conservative relative to some 4 g labels. | Med |
| §7.1 — permission for **prophylactic antipyretic** before the Week 2 dose at investigator discretion, recorded as concomitant medication | **Invented** | Realistic, and creates a small documentation obligation the game can use. **Flag:** verify against the protocol document if it addresses premedication. | Med |
| §7.1 — "do not interrupt or discontinue for uncomplicated dose-associated pyrexia" | **Invented management position** | Follows from the reaction being self-limiting and attenuating. | High (reasoning) |
| §7.1 — escalation triggers (≥ 40.0 °C; fever with hypotension/hypoxia/altered mental status; > 72 h; hospitalisation; new fever after several uneventful doses) | **Invented** | Constructed to be clinically sensible and to give the player clear decision boundaries. | High (invented) |
| §7.1 — the "dose reaction vs hypersensitivity" discriminator (hours-to-a-day and systemic-flu-like vs minutes and cutaneous/respiratory/cardiovascular) | **Invented framing**, clinically reasonable | This is the single most useful decision rule in the document for game purposes. | High (reasoning) |
| §7.2 — pre-dose preparedness requirements (adrenaline in the room, resuscitation equipment, trained staff present, EMS procedure known) | **Invented site-level requirements** | Standard practice for a biologic with known anaphylaxis risk. Not stated in canon. | High (invented) |
| §7.2 — post-dose observation 60 min at Day 1 and Week 2, 30 min thereafter | Taken as given | **Canon** (STUDY_FACTS §4, §5). | — |
| §7.2 — anaphylaxis recognition criteria (three-limb NIAID/FAAN-style construction) | **Real clinical criteria**, paraphrased | Widely used consensus criteria; paraphrased, not quoted. | High |
| §7.2 — management sequence: stop injection → **IM adrenaline 0.3–0.5 mg anterolateral thigh** → call for help → position supine → oxygen/IV access/fluids → adjuncts after adrenaline → observe ≥ 6 h → tryptase if available | **Real clinical practice**, written here | Correct in substance. **Flag:** simulated document; not for clinical use. | High |
| §7.2 — **permanent discontinuation; re-challenge prohibited** | Required by the assignment; **invented as a protocol rule** | Consistent with the invented Phase 3 anaphylaxis case narrative. **Flag:** must match the protocol document's discontinuation criteria. | Med |
| §7.3 — infection guidance: screening panel, do-not-dose-with-active-infection rule, AESI reporting, live-vaccine prohibition, participant counselling | Screening panel is **canon** (STUDY_FACTS §8); the dosing rule, vaccine interval, and counselling points are **invented** | The QuantiFERON indeterminate algorithm is canon. **Flag:** the "withhold the dose for active infection" rule must match the protocol. | Med |
| §7.4 — eczema herpeticum clinical description (monomorphic punched-out erosions, crops, face/neck/upper trunk, 24–72 h extension, **pain out of proportion**, periocular risk) | **Real clinical content**, written here | Clinically accurate and directly responsive to the assignment. The "pain rather than itch" discriminator is the practically useful part. | High |
| §7.4 — management (treat empirically on suspicion; aciclovir/valaciclovir; swabs without delaying treatment; withhold study drug; urgent ophthalmology for periocular involvement) | **Real clinical practice**; the withhold-and-call rule is **invented** | Specific antiviral doses were deliberately **not** stated, deferring to local practice. | High (clinical) / Med (study rule) |
| §7.5 — injection-site reaction rate 6.4%, character, absence of necrosis | **Invented** (rate from the invented pooled table) | — | High (invented) |
| §7.5 — injection technique table (equilibration, inspection, no priming, sites, rotation, two injections in two different sites, sites to avoid, 45°–90° insertion, documentation) | Sites, rotation, two-different-sites rule, 5 cm navel radius, and equilibration are **canon** (STUDY_FACTS §4); the insertion angle, "do not rub," and the documentation list are **invented** | — | High |
| §7.6 — scheduled laboratory monitoring, PI review within 5 business days, 1-hour panic-value call | Taken as given | **Canon** (STUDY_FACTS §5, §8). | — |
| §7.6 — **transient lymphocyte decline action algorithm** (five rows, from asymptomatic-any-grade through to non-lymphocyte cytopenias) | **Entirely invented** | The assignment explicitly requires guidance on "a suspected transient lymphocyte decline." The algorithm is constructed so that the *correct* action for the common case is to do nothing — which is exactly the kind of counter-intuitive rule a game about over- and under-reaction can build on. The "< 0.5 × 10⁹/L" threshold is CTCAE Grade 3 and is real. | High (invented, by design) |
| §7.6 — "any cytopenia other than lymphopenia is NOT an expected effect" | **Invented but important** | Consistent with the RSI, which lists only lymphopenia and lymphocyte count decreased. Gives the player a clear "this one is different" signal. | High (invented, by design) |
| §7.7 — pregnancy testing schedule (serum at Screening and Week 36; urine predose at every dosing visit and Week 24) | Taken as given | **Canon** (STUDY_FACTS §5, §8). | — |
| §7.7 — **contraception for 5 months after the last dose**; breastfeeding avoided for the same period; no restriction on male participants | **Invented durations and positions** | See §4 above for the arithmetic caveat. **Flag:** must be reconciled with the ICF and protocol. | Med |
| §7.7 — pregnancy handling (immediate permanent discontinuation, report within 24 h, follow to outcome with consent, adverse outcomes reported as SAEs, "pregnancy is not itself an AE but is reportable") | **Invented but standard** | The "pregnancy is not an AE" point is genuine industry practice and a common source of site error. | High |
| §7.8 — AD exacerbation guidance, including the instruction to report disease worsening rather than filter it | **Invented framing** of canonical facts | The 19.1% vs 26.7% comparison is canon. The instruction is the interpretive layer. | High |
| §7.8 — rescue-therapy analytic consequences (NRI for binary, WOCF for continuous) and the instruction never to withhold clinically necessary rescue | Taken as given | **Canon** (STUDY_FACTS §6). The ethical framing is written here. | — |
| §7.8 — erythroderma/exfoliative dermatitis red flags (> 90% BSA, sheet-like desquamation, systemic features, thermoregulatory failure, electrolyte disturbance, high-output failure, mucosal involvement) | **Real clinical content** | Clinically accurate. The > 90% BSA threshold is the conventional erythroderma definition. | High |
| §7.9 — malignancy guidance (report any malignancy including NMSC as an SAE within 24 h, withhold drug, provide histopathology) | **Invented study rule** | Follows from malignancy being a canonical AESI (STUDY_FACTS §13). Including NMSC is a deliberate, conservative choice. | Med |
| §7.10 — overdose: no reported cases, no antidote, not dialysable, doses up to 10 mg/kg IV and 600 mg SC Q2W tolerated, 5-step management, "overdose without an AE is a protocol deviation not an AE" | **Invented** | The last point is genuine industry practice and a realistic source of site confusion. | High (invented) |
| §7.11.1 — the five AESIs | Taken as given | **Canon** (STUDY_FACTS §13), reproduced verbatim in substance. The "within 24 hours whether or not serious" reporting rule for AESIs is **invented**. | Med (the reporting rule) |
| §7.11.2 — the investigator obligations table, including "**do NOT assess expectedness**" and "**do NOT unblind to report**" | **Real regulatory content**, presented as a table | The clearest single teaching point in the document, and the one most often got wrong at sites. | High |
| §7.11.3 — the cascade description (expedited submissions → ethics notifications → investigator notifications → possible ICF revision and re-consent) | **Real**, written here as narrative | Accurate description of what a SUSAR determination sets in motion. Deliberately included so the game can make the stakes legible. | High |

---

## 9. Appendices (Section 8)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.1 — abbreviations table | Superset of STUDY_FACTS §12, extended with IB-specific terms (ADCC, FcγRIIIa, FcRn, FUT8, ePPND, NOAEL, TDAR, T_RM, TSLP, etc.) | Canon abbreviations are used unchanged; additions are conventional. | High |
| §8.2 — the disclaimer preceding the reference list | Written to prevent the fabricated citations being mistaken for verified bibliography | Necessary. | — |
| §8.2 refs 1–8 — regulatory guidances (ICH E6(R3) §7, ICH E2A, EU CTR Annex III §2(8), CTFG RSI Q&A, 21 CFR 312.32, ICH S6(R1), S5(R3), S7A) | **Real documents**, correctly identified | These are genuine and correctly characterised. Version years are approximate. | High |
| §8.2 refs 9–16 — published literature on OX40 biology and Fc afucosylation | **Real papers as far as author/journal/topic**, but **volume, page, and year details are not verified** | Included for realism. **Do not rely on the bibliographic details.** | Low (bibliographic precision) |
| §8.2 refs 17–18 — rocatinlimab clinical literature (Guttman-Yassky *Lancet* 2023 Phase 2b; Nakagawa *J Dermatol Sci* 2020) | **Real publications**, details not verified | The Phase 2b *Lancet* citation is the real-world basis for the Study 20200168 design used here. | Med |
| §8.2 refs 19–26 — sponsor internal study reports, each marked `[internal]` | **Entirely invented**, including report numbers (AMG451-TOX-026, AMG451-ePPND-001, AMG451-TCR-002, AMG451-popPK-v4) | Marked so they cannot be mistaken for retrievable documents. | High (invented) |
| Closing block ("END OF INVESTIGATOR'S BROCHURE…") | Invented but standard | Restates edition, supersession, and RSI version for the reader who arrives at the back of the document. | High |

---

## 10. Cross-document reconciliation flags

Items in this brochure that other documents in the corpus may contradict, listed so they can be
reconciled. Where a conflict exists, **the protocol and the ICF should generally win** and this
document should be amended.

| # | Item | Value used here | Where it may conflict |
|---|---|---|---|
| 1 | Contraception duration after last dose | **5 months** | ICF, protocol, ICF supplement |
| 2 | Live-vaccine prohibition interval after last dose | **12 weeks** | Protocol, ICF |
| 3 | In-use time after equilibration to room temperature | **8 hours** | Pharmacy manual, IP handling instructions |
| 4 | Prophylactic antipyretic permitted before the Week 2 dose | **Permitted at investigator discretion** | Protocol (premedication rules) |
| 5 | Permanent discontinuation after anaphylaxis; re-challenge prohibited | **Mandatory** | Protocol discontinuation criteria |
| 6 | AESI reporting within 24 hours whether or not serious | **Required** | Protocol safety-reporting section, safety management plan |
| 7 | Withhold dose for clinically significant active infection | **Required** | Protocol dose-withholding rules |
| 8 | Malignancy including NMSC reportable as an SAE | **Required** | Protocol |
| 9 | RSI change history (anaphylaxis added at RSI v4.0, 15-AUG-2023) | **Invented, game-critical** | Any safety-reporting or SUSAR-related document in the corpus must use the same history |
| 10 | Sibling study names and protocol numbers (Shuttle 20210144, Ascend 20210145, Voyager 20210146, Astro 20210147) | **Invented** | Any document referencing the ROCKET programme must use the same assignments |
| 11 | Data cut-off 30-JUN-2023 vs presence of completed 2024 Phase 3 results | **Anachronistic; see §0.1** | Any document that reasons about what was known when |
