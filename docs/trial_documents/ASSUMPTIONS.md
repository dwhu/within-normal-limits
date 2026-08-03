> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# ASSUMPTIONS — major, gameplay-relevant only

The ClinicalTrials.gov record gives a study skeleton: design, arms, endpoints, eligibility, results,
adverse events. **Everything operational was invented** — every vendor, contact, procedure, threshold,
timeline, price, and person.

This file lists only the assumptions that **matter to play**: ones that create a judgment call, define
a rule a player can break, constrain the site's world in a way you can feel, or are load-bearing
across several documents at once.

**Full per-document logs** — roughly 800 rows, every invented detail down to buffer composition and
OMB burden figures — live in [`./assumptions/`](./assumptions/), one file per document.

---

## A. Study-wide — if these are wrong, many documents are wrong together

| # | File(s) | Assumption | Why it matters |
|---|---|---|---|
| A1 | *all* | **All vendors are fictional**: Harborlight CRO, Meridian Central Labs, Axion IRT, Veriscribe EDC, DayLog ePRO, GlobalRx Logistics, Keystone IRB, DATG raters. The record names none. | Every help desk, escalation path, and system in the game is invented. Swap freely. |
| A2 | `protocol.md`, all | **Week 36 is end of study** — a 12-week safety follow-up after the Week 20 last dose. Derived from the record's max time on trial (40.3 weeks). | Sets the total participant journey at ~9 months and creates the Weeks 28/32/36 follow-up tail. |
| A3 | `protocol.md`, all | **Seven doses: Day 1, Week 2 (loading), then Q4W at 4, 8, 12, 16, 20. No dose at Week 24.** The record's phrasing ("Q4W for 24 weeks with a loading dose at Week 2") reads as if Week 24 might be a dosing visit. | The single likeliest operational misreading in the corpus. Stated in negative form in 6 documents. A player preparing a Week 24 dose is making a real error. |
| A4 | `protocol.md`, `pharmacy_manual.md`, `icf.md` | **300 mg = two 150 mg/1.0 mL prefilled syringes**, two injections, matching placebo identical. The record says only "Dose 1"; 300 mg comes from the results section. | Two injections per visit, not one. Drives injection-site rotation, accountability, and what the participant experiences. |
| A5 | `protocol.md` | **Visit windows: ±3 days through Week 24, ±7 days for follow-up.** Not in the record. | The most common protocol deviation category in the game. 7 of Site 1047's 11 logged deviations are visit-window. |
| A6 | `protocol.md`, `lab_manual.md` | **The entire laboratory programme** — panels, PK/ADA trough schedule, biomarkers, TB screening. The record specifies no lab testing whatsoever. | Every blood draw in the game rests on this. |
| A7 | `investigators_brochure.md` | **All nonclinical and Phase 1/2 data is invented**, including the Phase 2b dose-ranging study and its durable off-treatment response signal. Only the ROCKET-Horizon safety and efficacy numbers are real. | The IB reads authoritative but is ~90% fabrication. Its *safety tables* are the real part. |

## B. Rules a player can break

| # | File(s) | Assumption | Why it matters |
|---|---|---|---|
| B1 | `study_reference_manual.md` | **eDiary compliance: ≥80% target; a week is evaluable at ≥4 of 7 days; re-training below 80% or after 3 consecutive missed days; escalation at two consecutive visits <80%.** | The most frequent day-to-day pressure in the game — 24 weeks of daily entries per participant. |
| B2 | `study_reference_manual.md` | **eDiary window is 18:00–03:59 local, no back-filling.** Site staff may never enter on a participant's behalf. | A bright line with an obvious temptation attached. |
| B3 | `protocol.md`, `study_reference_manual.md` | **Rescue therapy: emollient → topical (≥7-day trial) → systemic. The participant continues IP and stays in the study.** Notify the medical monitor within 3 business days — a communication, not a permission request. Biologics and JAK inhibitors are not permitted as rescue and *do* trigger discontinuation. | Rescue drives the primary analysis (non-responder imputation). The rule that rescue must never be withheld for data-quality reasons is the study's central ethical pressure point. |
| B4 | `safety_reporting_manual.md`, `protocol.md` | **Only the PI or a Sub-I may assess causality.** Alonzo Vega FNP-C is delegated AE *assessment* but explicitly not causality; coordinators never. | A delegation boundary a rushed player will want to cross at 4:45 pm on a Friday. |
| B5 | `safety_reporting_manual.md` | **SAE reporting: 24 hours from site awareness**, not from event onset. | "Awareness" is the contested word. Defined in-document. |
| B6 | `study_reference_manual.md` | **EASI and vIGA-AD must be performed by a DATG-certified rater, same rater throughout where possible, blinded to prior scores and eDiary data.** Re-certification at 12 months, no grace period. | Site 1047 has exactly three certified raters. Scheduling pressure is structural. |
| B7 | `study_reference_manual.md`, `siv_slide_deck.md`, `monitoring_plan.md` | **Screening thresholds EASI ≥16, vIGA-AD ≥3, BSA ≥10%, pruritus NRS ≥4** are real (from the record) — but the *temptation to round a borderline score up* is modelled deliberately. The monitoring plan detects it by watching for mass piling in the 16.0–18.0 baseline band across 151 sites. | The corpus's clearest fraud vector, planted as a pressure rather than a puzzle. |
| B8 | `lab_manual.md` | **PK and ADA are predose trough samples** — drawn before the injection, with both times recorded. Draw order: serology/chem → haem → PK → ADA → biomarker → genomic. | Easy to get wrong under time pressure; invalidates the sample. |
| B9 | `lab_manual.md` | **No −70 °C freezer at Site 1047.** Frozen aliquots hold at −20 °C for max 30 days (PK/ADA) or 14 days (biomarker), forcing a shipping calendar and dry-ice orders placed when the *visit* is booked. | A physical constraint that propagates into scheduling. Purely invented. |
| B10 | `pharmacy_manual.md` | **Storage 2–8 °C; cumulative excursion budget ≤30 days at ≤25 °C across the product's lifetime; 30-minute room-temperature equilibration before injection.** | Excursions quarantine stock and require sponsor disposition — a stall the player cannot resolve alone. |
| B11 | `irt_manual.md` | **Emergency unblinding is immediate, irreversible, and permanently logged** with the user's name; sponsor, medical monitor, and CRA auto-notified. | The highest-consequence single click in the game. |
| B12 | `edc_manual.md` | **Data entry within 5 business days of the visit; query response within 3.** ~60 named edit checks. | The background hum of overdue work. |
| B13 | `study_reference_manual.md` | **HADS escalation: HADS-D ≥11 or HADS-A ≥15 triggers same-visit investigator assessment**, plus an explicit self-harm pathway. | A questionnaire that can turn into a duty of care mid-visit. |
| B14 | `study_reference_manual.md` | **Protocol deviations: 21-row major/minor decision table, 5-business-day reporting.** | Categorisation is a judgment call, not a lookup. |
| B15 | `study_reference_manual.md` | **4-hour no-emollient rule before every visit**, and a 30-day minimum before declaring lost to follow-up. | Small rules that generate rescheduling and chase work. |

## C. The site's world

| # | File(s) | Assumption | Why it matters |
|---|---|---|---|
| C1 | `RESEARCH_SITE.md` | **Site 1047, Cascade Dermatology, Portland OR — 9 research staff, entirely fictional.** Contracted for 12 participants, randomized 14, 9 screen failures, 11 minor deviations. | The whole workplace. |
| C2 | `RESEARCH_SITE.md`, `pharmacy_manual.md` | **The pharmacist is on site Tuesdays and Thursdays only.** A remote-release procedure covers the gap without exceeding the coordinator's delegation (receipt and accountability only). | Staffing scarcity as a recurring constraint. |
| C3 | `budget.md` | **Per-participant completer value $22,797.92**; contracted study value $346,831.64 at 12; realised $378,250.88 at 14. All rates invented at a $71.10 blended burdened staff rate. | The money. |
| C4 | `budget.md` | **Cash goes negative for four consecutive quarters to −$59,301.75**, crossing positive only after all 14 participants were already randomized. The site funds enrolment out of working capital. | Quarterly-in-arrears against weekly costs. A structural squeeze, not an event. |
| C5 | `budget.md` | **The eDiary line is under water by $138.00 per participant** — 8 paid compliance touchpoints against 24 weeks of daily diary. Overhead at 28% recovers only 44.6% of true indirect burden. | The unpaid labour is the empathy. |
| C6 | `budget.md`, `cta.md` | **Screen failures reimbursed at actual procedures, capped at 2 per randomized participant** — a cap of 28 that never binds against 9 actual. | Generous on paper; the cap is theatre. |
| C7 | `cta.md` | **The agreement is more site-favourable than a 31-person practice would realistically negotiate** — flagged honestly by its author. Cascade did take a bad deal on 25-year retention with no storage allowance. | Adjust if you want the site squeezed harder. |
| C8 | `cta.md` | **Indemnity carve-outs use "to the extent" with a materiality qualifier on protocol deviations.** An unqualified exclusion — a sponsor's normal first draft — would void indemnity for any participant touched by Site 1047's 11 deviations. | A latent trap connecting the contract to the site's conduct history. |
| C9 | `monitoring_plan.md` | **Site 1047 is amber on 2 KRIs, red on none, banded Standard.** The plan argues a 5% screen-fail rate would be *more* alarming than 39%, and that an unusually *low* AE rate is the red flag. | Sets how much scrutiny the player is under, and inverts the intuition about what looks bad. |
| C10 | `lab_manual.md` | **Argosy Clinical Courier** added as specimen courier — a vendor outside the canon roster, so the specimen and drug supply chains don't conflate. | Roster addition; promote to canon if reused. |
| C11 | `ip_handling_manual.md` | **GlobalRx 24/7 control tower line added** alongside the canonical business-hours number, because a cold chain cannot run on business hours. | Canon gap, patched additively. |

## D. Deliberate artifacts — intended, not errors

| # | File(s) | Artifact | Why it's there |
|---|---|---|---|
| D1 | `siv_slide_deck.md` | **The deck is dated 19-DEC-2022 and is therefore out of date on purpose** — it lists only 4 AESI categories (pyrexia/chills was added at Amendment 3), no re-screen provision, no rescue hierarchy, genomic sub-study not yet open. **Slide 84 is an archival annotation** dated 11-JAN-2024 tabulating each change and its retraining date. | This is what a real 2022 deck in an ISF looks like. Not an anachronism — a version-control artifact, with its reconciliation attached. |
| D2 | `investigators_brochure.md` | The IB is dated 15-AUG-2023 but its safety tables use ROCKET-Horizon results that completed in 2024. | Accepted knowingly: the alternative was inventing incidence rates instead of using the real ones. |
| D3 | `investigators_brochure.md` | **The RSI version history makes anaphylaxis "expected" as of 15-AUG-2023 (RSI v4.0).** An anaphylaxis case with onset before that date is a reportable SUSAR; on or after, it is an expected reaction. | An unrequested game hook the IB author built. Elegant and internally consistent — RSI change histories are real. **Flagged for your decision**: neutralise by removing the version-history entry, or keep as the corpus's first designed puzzle. |
| D4 | `form_1572.md` | The brief asked for a *negative disclosure* on **Form 3455**, which is strictly what Form **3454** certifies. The document renders the form sponsors actually collect and names the discrepancy in a note. | Gives the game a legitimate "is this the right form?" question rather than papering over it. |
| D5 | `form_1572.md` | **Alonzo Vega FNP-C is listed in Block 6; pharmacist Wen-Li Chao is not.** Vega makes medical judgments; dispensing is not a direct data contribution. | An interpretation, not a canon fact. The document shows its reasoning, so the exclusion doubles as a teaching point. |
| D6 | `pharmacy_manual.md` | The worked accountability example contains **two deliberately non-clean events** — an aborted dispense with a dropped syringe, and a partial injection recorded as administered and not re-dosed. | Real ledgers aren't tidy. Gives a player something to reconcile that isn't trivially correct. |
| D7 | `ip_handling_manual.md`, `pharmacy_manual.md` | Clinical labels carry the **blinded packaging batch number, not the drug product lot number** — active and placebo lots differ and would unblind on sight. | Both documents agree. A player comparing cartons learns nothing, by design. |

## E. Discrepancies in the source record itself

| # | Finding | Handling |
|---|---|---|
| E1 | **Enrollment arithmetic doesn't close.** 726 randomized (183/543) but Safety Set 724 (180/544). One placebo-randomized participant inadvertently received 300 mg rocatinlimab; two randomized were never dosed. | `protocol.md` §10.3 defines analysis sets so the protocol *predicts* this pattern rather than contradicting it. Preserved, not smoothed. |
| E2 | **"Q4W for 24 weeks with a loading dose at Week 2" is genuinely ambiguous** about a Week 24 dose. | Resolved to no Week 24 dose; stated explicitly in 6 documents. See A3. |
| E3 | The record lists **29 secondary outcomes with no indication which were alpha-controlled.** | The multiplicity testing hierarchy in `protocol.md` is the corpus's lowest-confidence invention. |
| E4 | Eligibility in the record is unusually sparse — **6 inclusion, 3 exclusion**, all severity and washout. | Reproduced verbatim, then expanded to 10 inclusion / 30 exclusion. The additions are invented. |
| E5 | **Stratification factors and the CMH analysis method ARE in the record** ("baseline disease severity and geographic region") — initially mis-flagged as assumed. | Canon corrected. Only the operationalisation (vIGA-AD 3 vs 4; four region categories) is invented. |

## F. Conflicts found and fixed in the consistency sweep

| # | File(s) | Conflict | Resolution |
|---|---|---|---|
| F1 | `icf.md` vs `lab_manual.md` | ICF told participants **220 mL** total blood; the lab manual computed **249.5 mL** (255.5 with the genomic sample) from tube-by-tube volumes. ICF also understated the genomic draw (10 mL vs 6 mL), the single-visit maximum, and the number of draws. | ICF corrected to the lab manual's bottom-up arithmetic: ~17 tbsp / ~250 mL, max ~40 mL at Day 1, 10 draws, 6 mL genomic. |
| F2 | `study_reference_manual.md` vs `protocol.md` | SRM said **systemic rescue permanently discontinues IP**. Protocol §6.9 says the participant **continues** study intervention. An SRM may never alter a protocol requirement. | SRM corrected to match the protocol, with the biologic/JAK exception preserved. |
| F3 | `investigators_brochure.md` | RSI frequency bands contradicted the real incidences — chills at "very common" (6.1%) and AD worsening at "common" (19.1%). *Caused by an error in the authoring brief, not the agent.* | Corrected to common and very common respectively; the RSI change note rewritten. |
| F4 | `safety_reporting_manual.md` | Worked SAE example and blank form showed **two kit numbers per dose**; canon is one carton = one kit = 2 syringes = one dose. | Corrected to a single kit number. |
| F5 | `icf.md` | Stated "up to **14** people at this site" — the *actual* final enrollment, on a form dated 29-NOV-2023 that could not know it. | Changed to the contracted **12**. |

**Verified clean across all 15 documents:** protocol and NCT numbers (16 files), no Week 24 dosing
claim anywhere, temperature format uniform at `2–8 °C` (56 instances, zero variants), no competing
dose or regimen claims outside the IB's Phase 2b tables, no stray non-fictional phone numbers, and
the SIMULATION banner present on all 46 files.
