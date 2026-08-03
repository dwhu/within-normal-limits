> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions Log — `budget.md`

**Document covered:** `/Users/dave/code/icf-please/docs/trial_documents/budget.md`
(Exhibit B — Clinical Trial Budget, ROCKET-Horizon, Protocol 20210143, Site 1047, Version 2.0,
effective 12-DEC-2022)

**Scope of this log.** The ClinicalTrials.gov record for NCT05651711 contains **no financial
information whatsoever** — no budget, no per-participant cost, no site payment terms. `STUDY_FACTS.md`
fixes the Schedule of Activities, the visit structure, the vendors and the identifiers.
`RESEARCH_SITE.md` §6 fixes the binding commercial terms (28% overhead on clinical procedures and not
on pass-throughs; quarterly in arrears net 45 from a clean reconciliation; 10% holdback released
within 60 days of final database lock; $9,500 non-refundable startup fee; IRB fees pass-through at
cost; screen failures at actual procedures capped at two per randomized participant; $125 per
completed visit stipend plus travel and parking; ACH to Columbia Bank; Gregory Tarrant as signatory
and invoicing contact) and the site history (12 contracted / 14 randomized / 9 screen failures of 23
screened / 2 early terminations / 11 deviations / SIV plus 5 IMVs).

**Everything else — every dollar figure, every hourly rate, every duration, every count — is
invented.** Nothing in this budget contradicts the canon. Every arithmetic result was computed with
`python3` using decimal arithmetic and cross-checked in at least two directions before drafting.

---

## 1. Global rate basis and FMV benchmark

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Header — "Rate basis" table | Charge rates: PI $250.00/h; Sub-Investigator $175.00/h; Nurse Practitioner $120.00/h; Clinical Research Coordinator $85.00/h; Regulatory Coordinator $70.00/h; Investigational Pharmacist $115.00/h; MLT/phlebotomist $65.00/h; blended regulatory-clinical rate $110.00/h | No rate data exists in either canon file. These sit in the corridor commonly seen in US site budgets for a Portland-metro private dermatology practice in 2022. Every time-based line in the entire document derives from this single table so that no second rate can contradict it. | Med |
| Header — FMV statement | FMV established two ways: CPT-analogue procedures benchmarked against the geographically adjusted Medicare Physician Fee Schedule and Clinical Laboratory Fee Schedule for the Portland, Oregon locality; non-analogue items built from role hours × benchmarked hourly rate | This is the standard and defensible dual basis. Naming the locality makes the claim checkable rather than decorative. `RESEARCH_SITE.md` §6 says "Medicare-benchmarked where a CPT analogue exists", so this elaborates canon rather than inventing against it. | High |
| Header — FMV statement | No specific Medicare multiple (e.g. "150% of MPFS") is stated | Stating a multiple would require the underlying fee schedule values to be reproduced, which cannot be done credibly in a simulated document. The narrower claim ("benchmarked against") is defensible without them. | High |
| Header — Sunshine Act paragraph | Payments under this Exhibit are reportable to CMS Open Payments with the PI named | Correct statement of 42 U.S.C. § 1320a-7h for research payments where a principal investigator is identified. | High |
| Header — coverage analysis clause | A signed Medicare coverage analysis exists at Site 1047; a research-participant flag is maintained in the practice management system | Not in canon. Invented as a plausible and necessary control. `RESEARCH_SITE.md` §3 does establish that source documents sit on the Modernizing Medicine EMA practice EMR, which is exactly the system that would need the flag. | Med |
| Header — coverage analysis clause | All Section 2 items are research costs, not billable to any payer | Correct application of NCD 310.1: everything in the grid is either the investigational item, monitoring for its effects at a protocol-driven frequency, or data collection with no clinical management use. | High |
| Header — coordinator visit-time bands | Five bands, A ($85.00 / 1.0 h) through E ($255.00 / 3.0 h), at $85.00/h | Banding rather than per-minute billing is standard practice and makes the budget auditable. Bands are pure multiples of the CRC rate. | Med |

---

## 2. Visit-duration assumptions (these drive all coordinator pricing)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §2 Table 2A / §9.1 | Screening = 3.0 h (Band E) | Consent conversation in the private consultation room, full history, full physical exam, ECG, full rater battery, six specimen types, eDiary provisioning and training. Longest visit in the study. | Med |
| §2 Table 2A / §9.1 | Day 1 = 3.0 h (Band E) | Full PRO battery (SCORAD, FASS/HASS, DLQI, POEM, HADS), rater battery, five specimen types including optional genomic with separate consent, IRT randomization, dosing, **60 minutes** post-dose observation per `STUDY_FACTS.md` §4. | Med |
| §2 Table 2A / §9.1 | Week 2 = 2.0 h (Band C) | Light assessment set (no PRO battery per SoA) but carries the second **60-minute** observation. | Med |
| §2 Table 2A / §9.1 | Weeks 4, 8, 12, 16 = 2.5 h (Band D) | Full PRO battery plus dosing plus 30-minute observation. | Med |
| §2 Table 2B / §9.1 | Week 20 = 2.0 h (Band C) | Last dose, but SoA shows no SCORAD/FASS/HASS/DLQI/POEM/HADS at Week 20; full physical exam offsets. | Med |
| §2 Table 2B / §9.1 | Week 24 = 3.0 h (Band E) | Primary endpoint visit: full physical exam, ECG, full PRO battery, six specimen types, no dosing. | Med |
| §2 Table 2C / §9.1 | Weeks 28 and 32 = 1.0 h (Band A) | Safety follow-up only: vitals, targeted exam, rater assessments, AE and conmed review. Shortest visits. | High |
| §2 Table 2C / §9.1 | Week 36 = 2.0 h (Band C) | EOS: full physical exam, six specimen types, PRO battery, no dosing. | Med |
| §5.3 | Truncated screen-failure visit = 1.5 h (Band B) | Band B exists solely for this case. Consent plus history plus rater assessment, terminated before phlebotomy. | Med |

---

## 3. Section 1 — startup and one-time fees

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §1.1 | $9,500.00 non-refundable startup fee | **Canon** — `RESEARCH_SITE.md` §6. Not an assumption. | Canon |
| §1.2 | Keystone IRB initial review fee $3,150.00 | Invented. Central commercial IRB initial review of a Phase 3 protocol plus site-specific ICF plausibly sits in the $2,500–$4,000 band. Pass-through at cost per canon. | Med |
| §1.3 | SIV staff time = PI 2.0 h, Sub-I 2.0 h, CRC 8.0 h, pharmacist 2.0 h, MLT 2.0 h → $1,890.00 | Invented hour split for the SIV held 21-DEC-2022 (date is canon, `RESEARCH_SITE.md` §5). A full-day SIV with the CRC present throughout and specialists attending their sections. | Med |
| §1.4 | Regulatory document preparation = 12.0 h Regulatory Coordinator → $840.00 | Invented. 1572, two 3455s, CVs and licences for five delegated staff, MCL certifications and reference ranges, delegation log, ISF build. Sam Oyelaran is the named owner of all of these per `RESEARCH_SITE.md` §2. | Med |
| §1.5 | Training hours: PI 3.0; Sub-Is 3.0 each; NP 2.0; CRCs 6.0 each; Reg Coord 3.0; pharmacist 3.0; MLT 3.0 → $3,810.00 | Invented. CRCs get the most because they train on all four systems (Veriscribe EDC v9.2, Axion IRT, DayLog ePRO, MCL portal) named in `STUDY_FACTS.md` §9. | Med |
| §1.6 | Rater certification = 3 raters × 4.0 h → $2,400.00, and DATG certification vendor fees are **not** charged to the site budget | Okonkwo, Feist and Nakamura are all DATG rater-certified per `RESEARCH_SITE.md` §2 (12-OCT-2022 / 03-NOV-2022). The vendor fee is assumed sponsor-paid direct to DATG; only the site's staff time is billed here. In §9.6 a $850/rater DATG fee is *not* included as a site cost, consistent with that. | Med |
| §1.7 | Pharmacy setup = 6.0 h pharmacist → $690.00 | Invented. Storage qualification, TempTrak configuration and alarm escalation testing (equipment named in `RESEARCH_SITE.md` §3), accountability build, SOP-007 study annex. | Med |
| §1.8 | Equipment calibration $1,250.00 at cost | Invented. Two ECG machines, scales, stadiometer, BP monitors and the Eppendorf 5810R are all canon (`RESEARCH_SITE.md` §3); the calibration cost is not. | Low |
| §1.9 | Archiving reserve $2,400.00 covering the first 2 years of retention | Invented. A startup reserve plus a $450/yr recurring fee in §4.21 is a common two-part structure. | Low |
| §1 preamble | Startup fees are quoted all-in and carry **no** separate 28% overhead | Canon fixes overhead to "per-visit clinical procedures". Startup is neither per-visit nor a clinical procedure, so excluding it is the reading consistent with canon. Stated explicitly in the document to prevent a later dispute. | Med |
| §1 total | **$25,930.00** | Computed: 9,500.00 + 3,150.00 + 1,890.00 + 840.00 + 3,810.00 + 2,400.00 + 690.00 + 1,250.00 + 2,400.00. Verified. | Computed |

---

## 4. Section 2 — per-visit grid pricing

Every **occurrence pattern** in the grid (which visits an X appears at) is taken directly from
`STUDY_FACTS.md` §5 and is canon. Every **price** is invented. Line-item prices:

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §2 all tables | Investigator assessment and medical oversight $150.00 at all 12 visits | Approximately 0.6 h of Sub-Investigator time at $175/h, priced as a flat fee. Present at every visit because a delegated physician or NP is involved in every visit on this protocol. | Med |
| §2 | Eligibility determination and medical/AD history review $225.00 (Screening), $110.00 (Day 1) | SoA marks "Eligibility review" at both Screening and Day 1. Day 1 is a confirmation, not a repeat, so it is priced at roughly half. | Med |
| §2 | Informed consent administration $250.00, Screening only | Approximately 1.0 h of combined CRC and physician time; SOP-001 requires the PI to countersign. Screening-only per SoA. | Med |
| §2 | Optional genomic sub-study consent $60.00, Day 1 only | Separate optional consent is canon (`STUDY_FACTS.md` §5, §8). Priced as a short incremental conversation. | Med |
| §2 | Vital signs $25.00 at all 12 visits; height and weight folded into this line | Height (Screening) and weight (5 visits) are separate SoA rows but the same measurement episode. Folding them avoids three near-worthless lines. | Med |
| §2 | Full physical examination $90.00 (Screening, W20, W24, W36); targeted $45.00 (D1, W2, W4, W8, W12, W16, W28, W32) | Occurrence pattern is canon. The 2:1 price ratio reflects the time difference. | Med |
| §2 | 12-lead ECG with investigator interpretation $75.00 (Screening, W24) | Has a CPT analogue (93000-family); $75 is a plausible research rate at roughly 150% of the Portland-locality Medicare global fee. | Med |
| §2 | **EASI $95.00** at all 12 visits | The highest-priced individual assessment in the grid. Certified-rater instrument, no CPT analogue, ~20 minutes in the standardized-lighting room. It is a co-primary endpoint instrument and priced accordingly. | Med |
| §2 | **vIGA-AD / rIGA $65.00** at all 12 visits | Certified-rater, co-primary endpoint instrument, faster than EASI. | Med |
| §2 | BSA $40.00 at all 12 visits | Rater assessment, quick, but an eligibility criterion (≥10%) and a reported measure. | Med |
| §2 | SCORAD incl. Itch VAS $70.00 at 7 visits | Composite investigator plus participant instrument; longer than the pure questionnaires. | Med |
| §2 | FASS/HASS $35.00; DLQI $30.00; POEM $30.00; HADS $35.00 | Short participant-completed questionnaires; price reflects administration, scoring and source documentation only. HADS priced marginally above DLQI/POEM because a positive depression screen triggers investigator review. | Med |
| §2 | eDiary provisioning and training $110.00 (Screening only) | Device issue, DayLog account setup, hands-on training, first entry supervised. | Med |
| §2 | eDiary compliance review $35.00 at the 9 visits marked in the SoA | Deliberately modest — and §9.5 of the document argues it is too modest. | Med |
| §2 | Phlebotomy $45.00 per venipuncture, at the 10 visits with a draw | One stick regardless of tube count; draw order is canon (`STUDY_FACTS.md` §8). | Med |
| §2 | **Specimen processing $22.00 per specimen type** | Per-unit rather than flat, because the count ranges from 1 (Weeks 8 and 20) to 6 (Screening, Weeks 12, 24, 36). Counts invented from the SoA lab rows: Scr 6, D1 5, W2 2, W4 4, W8 1, W12 6, W16 2, W20 1, W24 6, W36 6. Chemistry and haematology are counted as one processing episode. | Med |
| §2 | Sample shipping handling $85.00 per shipping visit (10 visits) | Chain-of-custody documentation, requisition, packing, dry-ice arrangement with Airgas Portland (canon, 24 h notice), courier booking. Priced flat because the shipment is one event regardless of aliquot count. | Med |
| §2 | Urine pregnancy test $22.00 at the 8 dosing/EOT visits | Point-of-care under the site's CLIA-waived certificate 38D2178456 (canon). CPT analogue exists (81025). | Med |
| §2 | Pharmacy IP preparation and dispensing $80.00 at 7 dosing visits | ~0.7 h pharmacist. Includes the 30-minute room-temperature equilibration required by `STUDY_FACTS.md` §4 (staff-attended, not passive). | Med |
| §2 | IP administration $95.00 at 7 dosing visits | Two separate SC injections into two different sites per canon; site rotation documentation; lesional-skin avoidance check. | Med |
| §2 | IP accountability and reconciliation $30.00 at 8 visits (D1–W24) | Occurrence pattern is canon (accountability is marked at Week 24 although no dose is given). | Med |
| §2 | **Post-dose observation $120.00 for 60 minutes (D1, W2) and $60.00 for 30 minutes (W4–W20)** | Priced separately from coordinator time and at a strict 2:1 ratio matching the 60:30-minute split in `STUDY_FACTS.md` §4. This was an explicit design decision: burying observation inside the visit band would pay the same for a 3-hour and a 2-hour visit. | Med |
| §2 | IRT transaction $30.00 at the 10 visits marked in the SoA | Axion IRT registration, randomization and kit assignment. Randomization at Day 1 is not priced higher. | Med |
| §2 | eCRF data entry banded $60.00 / $85.00 / $110.00 / $145.00 by casebook volume | Veriscribe EDC v9.2. Band assignment: Scr $145, D1 $145, W2 $85, W4 $110, W8 $110, W12 $110, W16 $110, W20 $85, W24 $145, W28 $60, W32 $60, W36 $110. | Med |
| §2 | Concomitant medication, AE and rescue-therapy review $55.00 at all 12 visits | Three SoA rows collapsed into one line, since they are one conversation. Rescue therapy assessment matters on this protocol because it triggers NRI/WOCF imputation (`STUDY_FACTS.md` §6). | Med |
| §2 | Participant stipend $125.00 per completed visit, shown in the grid but excluded from the overhead base | **Canon** for the amount and the pass-through treatment (`RESEARCH_SITE.md` §6). The decision to display it in the grid rather than only in §4 is presentational. | Canon / Med |
| §2 | Travel and parking budgeted at **$20.00 per visit** for forecasting; reimbursed at actual | Canon says travel and parking are reimbursed; the amount is invented. $20 covers downtown Portland parking or a modest mileage claim. | Low |
| §3 | **Per-participant totals: procedures $16,639.00; overhead $4,658.92; procedures + overhead $21,297.92; stipends $1,500.00; completer total $22,797.92** | Computed from the grid. Verified three ways: sum of the three group subtotals (8,119.00 + 5,988.00 + 2,532.00); sum of all 12 per-visit columns; sum of all 31 procedure row totals. Per-visit overhead cells sum to exactly 28% of the procedure total with no rounding drift. | Computed |

---

## 5. Section 4 — invoiceable and pass-through unit prices

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §4.2 | IRB continuing review $1,850.00 | Invented; roughly 60% of the initial review fee, which is a typical commercial-IRB ratio. | Low |
| §4.3 / §4.4 | IRB protocol amendment review $625.00; ICF revision review $425.00 | Invented. Amendment review priced above ICF review because it is the larger document. | Low |
| §4.7 | Unscheduled visit **$454.40** | Built from grid rates: CRC 1.5 h ($127.50) + physician 0.5 h ($87.50) + vitals ($25.00) + AE/conmed review ($55.00) + eCRF entry ($60.00) = $355.00 × 1.28 = $454.40. Classified as a clinical procedure, so it carries overhead. | Med |
| §4.8 | Repeat/unscheduled lab draw **$194.56** | $45.00 phlebotomy + $22.00 processing + $85.00 shipping handling = $152.00 × 1.28. | Med |
| §4.9 / §4.10 | ET visit priced at the Week 24 rate ($2,014.72 incl. overhead); re-screen at the Screening rate ($2,440.96 incl. overhead) | Pricing by reference rather than inventing new numbers keeps the document internally consistent. The single-re-screen permission is canon (`STUDY_FACTS.md` §5). | Med |
| §4.11 / §4.12 | **SAE initial report $330.00 (3.0 h at the $110.00 blended rate); follow-up $110.00/h in 0.5 h increments** | The stated hourly rate the assignment calls for. 3 hours for an initial SAE is realistic for a case requiring outside-records retrieval, and the 24-hour transmission requirement to `rocket.safety@harborlightcro.com` (canon) makes it urgent work. | Med |
| §4.13 / §4.14 | Amendment implementation $1,200.00 substantive / $450.00 administrative | Invented. Substantive covers retraining, ISF update, source-document revision and deviation-risk review. | Med |
| §4.15 | Re-consenting $150.00 per participant per event | ~0.5 h CRC plus PI countersignature plus filing, rounded up. | Med |
| §4.16 | **Query resolution: first 10 queries per participant included; $28.00 per query thereafter** | The threshold structure is standard; the numbers are invented. $28.00 ≈ 0.33 h CRC. | Med |
| §4.17 / §4.18 | Monitoring visit support **$650.00 per monitoring day**; close-out support $650.00 | Built from grid rates: CRC 6.0 h ($510.00) + Regulatory Coordinator 2.0 h ($140.00) = $650.00 exactly. | Med |
| §4.19 | Non-visit pharmacy time $115.00/h | Equals the pharmacist charge rate. Covers TempTrak excursion investigation under SOP-009 and GlobalRx resupply receipt. | Med |
| §4.20 | IP destruction / return coordination $375.00 | Invented one-time fee. | Low |
| §4.21 / §4.22 | Records storage $450.00 per study per year; long-term retained-specimen storage $180.00 per participant per year | Invented. Both are named in the outline as items sites forget; including them with prices is the point. | Low |
| §4.23 | Translation $0.24 per word, $150.00 minimum | Invented; consistent with commercial certified-translation rates for regulated documents. | Low |

---

## 6. Section 5 — screen failures

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5.1 | Reimbursement at actual procedures, capped at 2 per randomized participant; cap = 28 at 14 randomized | **Canon** (`RESEARCH_SITE.md` §6). The observation that the cap does not bind is arithmetic. | Canon |
| §5.2 | Type A (full screening performed, failed on a result) = $2,565.96 | Computed: $1,907.00 × 1.28 = $2,440.96, + $125.00 stipend. | Computed |
| §5.3 | Type B (truncated at the rater assessment) = $1,709.00 | Computed from an invented list of 12 procedures actually performed totalling $1,237.50; × 1.28 = $1,584.00, + $125.00 stipend. | Computed |
| §5.4 | **Split of the 9 canonical screen failures into 4 Type A and 5 Type B**, with reasons: 3 × EASI <16, 1 × vIGA-AD <3, 1 × washout non-compliance (Type B); 4 failing on central laboratory or QuantiFERON results (Type A) | Canon says only "9 of 23 screened, mostly EASI <16 at screening and washout non-compliance". The split into two archetypes is invented but is the mechanism that makes "reimbursed at actual" meaningful. EASI is assessed early in the visit, so an EASI failure truncates the visit; a laboratory failure does not. | Med |
| §5.4 | Total screen-failure reimbursement **$18,808.84** | Computed: (4 × 2,565.96) + (5 × 1,709.00) = 10,263.84 + 8,545.00. Component split: procedures $13,815.50, overhead $3,868.34, stipends $1,125.00. | Computed |

---

## 7. Section 6 — payment terms

Every substantive term in Section 6 is canon from `RESEARCH_SITE.md` §6. The following elaborations
are invented.

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §6.1 | Reconciliation submitted within **20 days** of quarter end; "clean" defined as agreeing with the Veriscribe EDC record and the Axion IRT transaction log | Canon says "net 45 days from receipt of a clean quarterly reconciliation" but does not define "clean" or the submission deadline. Both are needed to model cash flow. | Med |
| §6.2 | Holdback base = per-visit clinical procedures **and their overhead only**; not startup, not pass-throughs, not §4 service fees | Canon fixes 10% and the release condition but not the base. Excluding pass-throughs is the only defensible reading — withholding 10% of a participant's stipend reimbursement would be indefensible. | Med |
| §6.4 | Invoicing content requirements and the `ctagreements@meridianbio-sim.example` submission address | The address is canon (`STUDY_FACTS.md` §10). The content list is invented boilerplate. | Med |
| §6.6 | Tax treatment: amounts exclusive of applicable taxes; Institution responsible for its own income taxes; Form 1099 issued | Invented standard language. | Med |
| §6.7 | Early termination: pay for completed visits and incurred items, non-cancellable commitments, and orderly close-out; startup fee never refundable; holdback released within 60 days of close-out completion | Invented, but the non-refundability of the startup fee is canon. | Med |

---

## 8. Section 7 — total study value

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §7.1 | Contracted budget assumes **6 screen failures** (a 33% screen-fail assumption, 18 screened for 12 randomized), all priced at the full Type A rate | Conservative budgeting convention. The actual rate was 39%, so the contracted assumption was slightly optimistic — realistic for a feasibility-stage estimate. | Med |
| §7.1 | Contracted invoiceable allowance line-by-line (2 continuing reviews, 2 protocol amendments, 2 ICF revisions, 24 re-consents, 4 unscheduled visits, 4 repeat labs, 3 SAEs, 6 monitoring days, 240 excess queries, etc.) totalling **$31,930.84** | Entirely invented forecast. Chosen to be close to but not equal to the realised figure, so the variance analysis in §7.3 has something to explain. | Med |
| §7.1 | **Contracted study value $346,831.64** | Computed: 25,930.00 + 199,668.00 + 55,907.04 + 18,000.00 + 11,442.00 + 3,203.76 + 750.00 + 31,930.84. Verified. | Computed |
| §7.2 | **Early termination detail is invented**: 1047-004 withdrew consent after Week 8 and attended an ET visit; 1047-011 was lost to follow-up after Week 16 and attended no further visits | Canon gives "2 early terminations (1 withdrawal by subject, 1 lost to follow-up)" but no timing. Timing had to be invented to compute value. The lost-to-follow-up participant attends no ET visit, which is what "lost to follow-up" means and which materially changes the payment. Retargeted from 1047-006 to 1047-004 29-JUL-2026: the roster already names 1047-004 L. Auguste as the withdrawal-by-subject, and 1047-006 M. Vasquez is enrolled/on-treatment elsewhere in canon (edc_manual.md, irt_manual.md, lab_manual.md, safety_reporting_manual.md) and carries a live day-4 situation (DE-1116) — this document's 1047-006 mention was the outlier. | Med |
| §7.2 | **166 total visits** (144 completer + 6 for 1047-004 + 7 for 1047-011 + 9 screening visits for screen failures) | Computed from the above. Drives the stipend total ($20,750.00) and travel total ($3,320.00). | Computed |
| §7.2 | Realised invoiceable detail: 1 continuing review, 2 protocol amendments (Amd 2, Amd 3), 2 ICF revisions (v3.0, v4.0.1), 15 re-consents, 6 unscheduled visits, 4 repeat labs, 2 SAEs with 5.5 follow-up hours, 7 monitoring days, 434 queries logged, 4,180-word Spanish ICF translation | All invented. Amendment 3 and ICF v4.0.1 are canon; **ICF v3.0 with an assumed 15-MAY-2023 IRB approval is invented** to create a second re-consent event. The 7 monitoring days derive from the canonical 5 IMVs with 2 of them assumed to be two-day visits. The 2 SAEs are consistent with the study-wide 1.8% SAE rate in `STUDY_FACTS.md` §13. | Med |
| §7.2 | **Re-consent counts of 8 (ICF v3.0) and 7 (ICF v4.0.1)** | Computed, not guessed: derived from invented randomization dates (below) by counting participants whose study window spans 15-MAY-2023 and 19-DEC-2023 respectively. | Computed |
| §7.2 | **Realised study value $378,250.88** | Computed: 25,930.00 + 234,430.50 + 65,640.54 + 20,750.00 + 31,499.84. Verified against an independent visit-by-visit roll-up. | Computed |
| §7.3 | Variance +$31,419.24 (+9.06%); holdback $30,007.10 | Computed. | Computed |

---

## 9. Section 8 — cash-flow projection

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8 | **Randomization dates for all 14 participants**: 1047-001 24-JAN-2023 (canon: first randomized), then 07-FEB, 21-FEB, 14-MAR, 28-MAR, 18-APR, 02-MAY, 23-MAY, 13-JUN, 27-JUN, 11-JUL, 08-AUG, 05-SEP, 26-SEP-2023 | Invented enrolment curve. Anchored on the canonical first-randomization date and shaped so the last participant's Week 36 visit (04-JUN-2024) falls before the canonical study LPLV of 27-AUG-2024. Visit dates computed from Day 1 using the canonical study days; Screening assumed 21 days before Day 1. | Med |
| §8 | Screen-failure screening dates spread across 2023-Q1 to Q3 (11-JAN-2023 first, per canon "first participant screened 11-JAN-2023") | Invented. | Med |
| §8 | Cash-out model: staff cost and consumables at **44.15%** of procedure charges; service labour and vendor cost at **48.35%** of §4 charges; IRB fees when paid; stipends and travel when paid; **$2,729.60/quarter** non-billable effort; **$15,562.50/quarter** allocated indirect; **$17,908.00** startup outlay in 2022-Q4 (billed-scope startup labour $10,942.00 + non-billed startup labour $5,716.00 + equipment $1,250.00) plus the $3,150.00 IRB initial fee | The two ratios are derived from the §9 cost model, not chosen: 44.15% = ($100,987.93 + $2,520.00) ÷ $234,430.50; 48.35% = ($12,774.65 + $850.00) ÷ $28,179.84. The per-quarter allocations are the §9 pools spread evenly over the 8 active quarters. | Computed |
| §8 | Cash-in model: each quarter's earnings received in the following quarter, at 90% for procedures and overhead and 100% for pass-throughs and service fees; startup received 2023-Q1; holdback released 2024-Q4 | Follows directly from the canonical terms plus the 20-day submission assumption: quarter end + 20 days + 45 days ≈ 65 days, which always lands in the following quarter. | Med |
| §8 | **Deepest cash position −$59,301.75 at 2023-Q2; crossover to positive in 2023-Q4; final position $65,703.50** | Computed. Column totals verified: earned $378,250.88 = cash in $378,250.88; cash out $312,547.38; net $65,703.50 = the §9.6 net contribution. | Computed |
| §8 | Holdback release stated as **$30,007.11**, being $30,007.10 plus a $0.01 rounding true-up | Real consequence of rounding nine quarterly 90% payments to the cent. Disclosed rather than hidden. | Computed |

---

## 10. Section 9 — cost reality check

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §9.1 | **Total 104.45 staff hours per completing participant**, of which 78.30 are coordinator hours | Built from the visit durations in §2 above (27.00 h chair time) plus 51.45 h of invented non-visit and specialist time. Every sub-line is an invented estimate; the visit-duration component is the same set of assumptions that priced the coordinator bands, so the two are internally consistent. | Med |
| §9.1 | Non-visit coordinator estimates: pre-visit prep 0.50 h × 12; post-visit closeout 0.50 h × 12; scheduling 0.40 h × 12; eCRF outside chair time 0.75 h × 12; query resolution 31 × 0.25 h; lab report handling 0.75 h; **eDiary weekly review 24 × 0.25 h**; **eDiary outreach 5.00 h**; deviation documentation 0.80 h; AE/SAE documentation 1.20 h; monitoring support 3.00 h; re-consent 1.00 h | All invented. The 31-query figure ties to the 434 queries logged in §7.2 (434 ÷ 14 = 31). The eDiary lines are the ones the document's argument turns on. | Med |
| §9.1 | Specialist hours: PI 2.50; Sub-I 7.65; pharmacist 5.00; MLT 8.50; Regulatory Coordinator 2.50 | Invented. The Sub-I figure is the larger because Nakamura is the primary rater per `RESEARCH_SITE.md` §2. | Med |
| §9.2 | **Fully burdened cost rates**: CRC $62.00/h; PI $198.00/h; Sub-I $145.00/h; pharmacist $86.00/h; MLT $48.00/h; Regulatory Coordinator $52.00/h — base salary plus 32% payroll taxes and benefits | Invented. These are *cost* rates, deliberately distinct from the *charge* rates in the header, and the document says so. The 32% burden is a common US small-employer loading. | Med |
| §9.2 | **Blended burdened rate $71.10/h; revenue per staff hour $203.91; ratio 2.87×** | Computed. The "2.5× to 3.0× corridor" benchmark is an invented rule of thumb, presented as such. | Computed / Low |
| §9.3 | Consumables and site-supplied materials **$180.00 per participant** | Invented. POC pregnancy tests, ECG electrodes, gloves, printing, non-kit supplies. | Low |
| §9.3 | **Study-level non-billable effort pool $21,836.80**, itemised: pre-screening 145 charts × 0.35 h; recruitment outreach 62.0 h; 86 weekly team meetings × 1.5 staff-hours; **41 safety-letter/IB-update events**; 30 sponsor teleconferences; 11 deviation investigations × 1.5 h; 24.0 h competing-study exclusion tracking | Entirely invented, except the 11 deviations (canon) and the existence of the competing-study exclusion tracker maintained by Sam Oyelaran (canon, `RESEARCH_SITE.md` §5). 41 safety letters is a plausible volume for a 726-participant global Phase 3 and is the classic unbudgeted item. | Med |
| §9.3 | **Allocated research-division indirect $124,500.00** = $415,000/yr indirect pool × 20 months ÷ 12 × 18% study share | All three inputs invented. The 20-month span runs from CTA execution (12-DEC-2022) to the last study visit; 18% is an assumed share of a division running several concurrent studies, consistent with the canonical "2 concurrent AD trials during the enrolment period". | Low |
| §9.3 | **Net margin per completing participant $3,238.44 (15.21%)** | Computed. | Computed |
| §9.4 | Overhead recovers $4,658.92 against a $10,452.63 burden — a **$5,793.71 shortfall**, i.e. 44.6% recovery | Computed from the above. This is the document's central honest finding about the 28% rate. | Computed |
| §9.5 | **eDiary is under water by $138.00 per participant**: $544.00 budgeted (($110.00 + $315.00) × 1.28) against $682.00 of cost (11.00 h × $62.00) | Computed from the invented eDiary hour estimates. The structural argument — 8 in-treatment paid touchpoints against 24 weeks of daily diary — is derived directly from the canonical SoA and is not an assumption. | Computed |
| §9.5 | "Two of Site 1047's eleven protocol deviations were eDiary compliance deviations" | **Canon** (`RESEARCH_SITE.md` §5). Used here as corroboration. | Canon |
| §9.6 | Whole-study P&L: retained revenue $346,230.88; total cost $280,527.38; **net contribution $65,703.50 (17.37%), $4,693.11 per randomized participant** | Computed. Reconciles exactly with the cash-flow table's final cumulative position. | Computed |
| §9.6 | Non-billed startup labour **$5,716.00** (feasibility questionnaire, CDA, budget and contract negotiation, site qualification visit hosting, IRB submission preparation) | Invented. Included because omitting it would overstate the startup margin. | Med |
| §9.6 | Participant-attached staff cost **$100,987.93** | Computed: (12 × $7,426.85) + ET participants pro-rated by procedure value + screen-failure labour (4 × 5.5 h and 5 × 3.0 h at an assumed $68.00/h screening-visit blended cost). | Computed |

---

## 11. Presentational and structural assumptions

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Header | Budget **Version 2.0**, superseding a Version 1.0 budget proposal dated 14-OCT-2022 | Version 2.0 is required by the assignment; the superseded Version 1.0 and its date are invented to make the version number meaningful. | Med |
| Header | Grid priced against Protocol 20210143 **Amendment 3 (29-NOV-2023)** while the budget is effective 12-DEC-2022 | Apparent tension is deliberate and reflects reality: the SoA in `STUDY_FACTS.md` §5 is the Amendment 3 schedule, but the budget was executed with the CTA in DEC-2022. The document handles this by pricing amendment implementation and re-consenting as invoiceable items in §4 and §7.2. | Med |
| §2 | Grid split into three tables by visit group (Screening–W8, W12–W24, W28–W36) with reconciling group subtotals | Required by the assignment; the reconciliation row is added so the split cannot hide an error. | High |
| §10 | Signature block: Meridian "Director, Clinical Contracts"; Gregory Tarrant, MBA, Site Director; plus a **Principal Investigator acknowledgement** for Miriam A. Okonkwo, MD, FAAD | Tarrant as signatory is canon. The Meridian title and the PI acknowledgement block are invented; the PI acknowledgement is included because an investigator attestation that compensation does not influence clinical judgement is good practice and thematically relevant to the game. | Med |
| Throughout | All arithmetic stated to the cent; every subtotal reconciles in at least two directions; the single $0.01 rounding artefact in the holdback release is disclosed rather than silently absorbed | Assignment requirement, and a deliberate design choice — a budget whose totals do not tie is worthless as a game artefact. | High |

---

## 12. Consistency notes for downstream authors

The Clinical Trial Agreement (Exhibit B's parent document) must reproduce the following **exactly**:

| Term | Value |
|---|---|
| Overhead / indirect rate and base | 28%, applied to per-visit clinical procedures only; not to pass-throughs, not to startup fees |
| Payment schedule | Quarterly, in arrears, net 45 days from Sponsor receipt of a clean quarterly reconciliation |
| Holdback | 10% of per-visit clinical procedures and associated overhead; released within 60 days of final database lock and site close-out |
| Startup fee | $9,500.00, non-refundable, invoiceable at CTA execution (12-DEC-2022) |
| IRB fees | Pass-through at cost, no markup |
| Screen failures | Actual procedures performed, capped at 2 per randomized participant |
| Participant stipend | $125.00 per completed visit, plus travel and parking, paid by the site and invoiced as a pass-through |
| Remittance | ACH to Columbia Bank, account on file; remittance advice to `ap@cascadederm-sim.example` |
| Institutional signatory | Gregory Tarrant, MBA, Site Director |
| Per-participant completer total | **$22,797.92** ($16,639.00 procedures + $4,658.92 overhead + $1,500.00 stipends) |
| Contracted study value at 12 randomized | **$346,831.64** |
| Realised study value at 14 randomized | **$378,250.88** |
| Exhibit B version and effective date | Version 2.0, effective 12-DEC-2022 |
