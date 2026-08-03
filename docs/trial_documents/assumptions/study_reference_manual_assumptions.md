> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions Log — `study_reference_manual.md`

**Document covered:** `/Users/dave/code/icf-please/docs/trial_documents/study_reference_manual.md`
**Document version:** Study Reference Manual, Version 5.0, dated 08-DEC-2023
**Canon sources:** `STUDY_FACTS.md`, `RESEARCH_SITE.md`, `NCT05651711.json`
(`protocolSection.outcomesModule`, `eligibilityModule`, `designModule`)

Every detail below is **invented for the simulation**. Nothing here is drawn from a real Meridian
document, a real ROCKET-Horizon operations manual, or any real vendor. Where the registry record or
STUDY_FACTS.md supplied a fact, it is not listed here.

**Confidence key:** *High* = the invention follows standard, near-universal industry practice and
would very likely match a real manual. *Med* = plausible and defensible, but real programmes vary.
*Low* = a specific number or rule chosen to make the simulation coherent; real values could easily
differ.

---

## 1. Document identity, version history, and structure

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Cover | Manual authored by Harborlight Clinical Research, Inc. (HCR) Clinical Operations on behalf of Meridian | HCR is the canon CRO (STUDY_FACTS.md §9); operations manuals are typically CRO-authored under sponsor approval | High |
| Version history | Five prior/current versions with dates 21-SEP-2022, 19-JAN-2023, 11-MAY-2023, 02-AUG-2023, 08-DEC-2023 | Manual v5.0 / 08-DEC-2023 was specified by the assignment; a plausible revision history was back-filled. v1.0 predates first-participant-first-visit (14-DEC-2022); v5.0 follows Amendment 3 (29-NOV-2023) by nine days | Med |
| Version history, drivers | Each revision attributed to a specific driver (early-enrolment findings, sponsor data review, IB Edition 6.0 preparation, Amendment 3) | Makes the change history internally causal and consistent with canon dates | Med |
| §1.3 | "must / should / may" convention defined explicitly | Common but not universal in real SRMs; included because the outline calls for deliberate modal usage | Med |
| §1.4 | Precedence clause: protocol governs; apparent conflicts reported to the CRA within **one business day** | Standard precedence language is near-universal; the one-business-day reporting clock is invented | Med |
| §2 | Document map naming Pharmacy Manual, Laboratory Manual, Safety Reporting Manual, Veriscribe EDC User Guide, Axion IRT User Guide, Clinical Monitoring Plan | Enforces the assignment's scope boundary; sibling document titles chosen to be the obvious names other authors would use | High |
| Throughout | Section numbering scheme (§1–§18 plus Appendices A–D) | Authorial choice | High |

---

## 2. Roles, delegation, and training

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5.1 | DOA log uses **task codes** rather than free text; PI signs personally; log updated before the task is performed | Standard GCP practice | High |
| §5.3 | Specific training matrix (GCP, protocol, this manual, ICF, EDC, IRT, ePRO, DATG, Lab Manual/IATA, SOPs) with named evidence artefacts for each | Assembled from canon staffing details in RESEARCH_SITE.md §2; the matrix itself is invented | Med |
| §5.3 | Manual-version training is a prerequisite for continuing delegated tasks; v5.0 effective per-person on the date the training log is signed | Invented mechanism to make manual versioning operationally meaningful | Med |
| §5.4 | Five-step remediation when a task was performed without delegation (stop, log deviation, re-review, notify, assess data impact) | Standard remediation shape; the specific five steps are invented | Med |
| §5.4 | "Rating data produced by an uncertified rater cannot be retrospectively certified — the assessment is unusable" | A judgement call; some sponsors would allow a certified rater to re-rate if within window. Stated absolutely for teaching clarity | Med |
| §5.2 | Consent discussion conducted by Priya Raghunathan with PI countersignature | Directly from RESEARCH_SITE.md §2 ("consent process (PI countersigns)") — restated, not invented | High |

---

## 3. Rater certification and consistency

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §6.1 | DATG certification requires training modules + an image-based scoring examination with a pass threshold + a live-scoring concordance exercise | DATG is a canon fictional vendor; its certification *content* is invented but mirrors real rater-training vendors | Med |
| §6.2 | **Re-certification every 12 months**, plus on any revised scoring convention | Annual is the most common real-world cadence; the specific interval is invented | Med |
| §6.2 | **No grace period** — rating stops on the expiry date; reminders at 90/60/30 days | Invented; strictness chosen for teaching value | Med |
| §6.3 | Backup rater sequence at Site 1047: **Nakamura → Feist → Okonkwo** | Derived from RESEARCH_SITE.md (Nakamura is "primary rater for most visits"); the ordering of the backups is invented | Med |
| §6.3 | Rater change is *not itself* a deviation if the substitute is certified and the visit stays in window | A defensible reading; some sponsors classify any rater change as a minor deviation | Med |
| §6.3 | Rater change at Weeks 16/24 requires documented unavoidability | Invented, proportionate to the endpoint timepoints | Med |
| §6.4 | **15–20 minutes** allowed for the combined rater assessment set; **no emollient within 4 hours**; no make-up; participant gowned and examined region by region | The 4-hour emollient rule and the 15–20 minute allowance are invented; the underlying principle is real practice | Med |
| §6.5 | Rater must not see prior scores, eDiary data, or same-visit PROs; standalone blank worksheet; no verbal summary from the coordinator; workstation locked | The requirement is a real design principle in rater-scored trials; this specific operational implementation is invented | Med |
| §6.5 | The rater *may* see baseline reference photographs and *must* know baseline FASS/HASS presence | Invented carve-out to keep §8.6 workable | Low |
| §6.1 | Recommendation (not requirement) that the certified rater also performs BSA and SCORAD extent | Invented; rationalised by the shared anatomical estimation skill | Med |

---

## 4. Screening, eligibility, and washout

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §7.1 | Pre-screening conversation content (six numbered topics) and a pre-screening log | Standard practice; the specific structure is invented | High |
| §7.2 | Consent process details: private room, **≥45 minutes**, open-comprehension questions, participant records the **time** as well as the date | Times on consent signatures are common in the US; the 45-minute allowance is invented | Med |
| §7.3 | The 13-step screening procedure order, and specifically placing the rater assessment at step 5 before ECG and phlebotomy | Invented sequencing rationale (cheap disqualifiers first). The SoA specifies *what*, not *order* | Med |
| §7.4 | **Day 1 scheduled no fewer than 8 days after eDiary activation** | Derived from the invented ≥4-of-7-days evaluability rule; the 8-day figure is invented | Med |
| §7.5 | Five worked half-life examples with representative half-lives (biologic ≈21 d; biologic ≈8 d; oral JAK ≈12 h; prednisone ≈3 h; TCS fixed 1 week) | Half-life values are approximate real-world figures used illustratively. Exclusion windows themselves are canon (STUDY_FACTS.md §7) | Med |
| §7.5 | Washout documentation set (half-life used, its source, computed end date, calculator's name and date) | Invented documentation standard | Med |
| §7.6 | **PI/Sub-I signs the eligibility checklist before the IRT randomization transaction** | Standard and widely enforced; the explicit "before, not same-day" framing is authorial emphasis | High |
| §7.6 | Day 1 re-confirmation of EASI ≥16 / vIGA-AD ≥3 / BSA ≥10% on the Day 1 assessment | SoA shows "Eligibility review" at both Screening and Day 1; the interpretation that severity criteria must be *re-met* at Day 1 is an assumption | Med |
| §7.7 | Screen-fail documentation set, including arranging clinical follow-up for the participant | Standard; specific list invented | High |
| §7.8 | Single re-screen requires **re-consent**, retains the **original participant ID**, repeats **all** procedures except demographics/unchanging history, with a possible QuantiFERON carry-forward subject to medical monitor agreement | Single re-screen is canon (STUDY_FACTS.md §5). The re-consent requirement, ID retention, and carry-forward carve-out are invented | Med |

---

## 5. Assessment instructions

### 5.1 EASI

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.1 | Region multipliers (0.1 / 0.2 / 0.3 / 0.4), four signs each 0–3, area bands 0–6, total 0–72 | These are the published EASI instrument's own properties, consistent with the registry description ("four anatomical regions… erythema, induration/papulation, excoriation, lichenification… 0 to 72") | High |
| §8.1 | Area band boundaries (1=1–9%, 2=10–29%, 3=30–49%, 4=50–69%, 5=70–89%, 6=90–100%) | Standard EASI banding | High |
| §8.1 | **Half-point scores are not used in this study** | A protocol-level convention not in the registry record; invented | Med |
| §8.1 | Worked Screening example totalling **EASI 24.6** and the Week 24 example totalling **EASI 3.4** (86.2% reduction → EASI-75 yes, EASI-90 no) | Fully invented participant data; arithmetic verified | High (as arithmetic) |
| §8.1 | Requirement to record the **estimated percentage** as well as the derived area band | Invented documentation standard; real manuals vary | Med |
| §8.1 | Guidance on erythema in more deeply pigmented skin | Real and important clinical guidance; its inclusion in *this* manual is invented | High |
| §8.1 | Two-person arithmetic verification at Weeks 16 and 24 | Invented control | Med |
| §8.5 | Cross-instrument reconciliation checks (SCORAD A vs BSA, EASI bands vs BSA, etc.) | Invented quality control; not a standard published requirement | Med |

### 5.2 vIGA-AD / rIGA

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.2 | 5-point scale 0–4 with labels Clear / Almost clear / Mild / Moderate / Severe | Verbatim from the registry record | High |
| §8.2 | Morphological descriptors for each of the five levels | The published vIGA-AD descriptors; only score 1's descriptors are partially reconstructable from the registry text — the full table is reconstructed | Med |
| §8.2 | **rIGA decision question reproduced verbatim**: "Did the participant have barely perceptible erythema, no induration/papulation, no lichenification, and no oozing/crusting?" with Yes/No logic, and automatic qualification at vIGA-AD = 0 | Taken directly from `outcomesModule.primaryOutcomes[0].description` | High |
| §8.2 | Instruction that vIGA-AD must be scored independently and never back-calculated from EASI | Real principle; explicit statement is authorial | High |
| §8.2 | "Read the question off the worksheet each time; do not answer from memory" | Invented operational control | Med |

### 5.3 BSA

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.3 | Palm method: **the participant's own palmar surface including digits ≈ 1% BSA** | Standard dermatological convention | High |
| §8.3 | Regional maxima table (head/neck 9%, each upper limb 9%, anterior trunk 18%, posterior trunk 18%, each lower limb 18%, genitalia 1%) | Standard rule of nines | High |
| §8.3 | Use of the regional maxima as a cross-check against the palm count | Invented technique framing | Med |
| §8.3 | The five listed over-estimation errors, including the "counting your own palm" error | Invented but drawn from real recurring site errors | Med |
| §8.3 | BSA reported as a whole percentage, with a regional breakdown retained in the source | Invented documentation standard | Med |

### 5.4 SCORAD

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.4 | Components A (extent, 0–100), B (intensity, six items × 0–3 = 0–18), C (two VAS = 0–20); formula **A/5 + 7B/2 + C**; maximum **103** | Published SCORAD instrument; total of 0–103 confirmed by the registry record | High |
| §8.4 | The six B items, with **dryness assessed on non-lesional skin** | Published SCORAD convention | High |
| §8.4 | C recall period is **the last 3 days and nights** | Published SCORAD convention; not stated in the registry record | Med |
| §8.4 | Worked example totalling **SCORAD 59.5** (A=45, B=11, C=12) | Invented participant data; arithmetic verified | High (as arithmetic) |
| §8.4 | Sleeplessness VAS collected alongside Itch VAS | Standard SCORAD; only the Itch VAS appears as an endpoint in the registry record | Med |
| §8.4 | Requirement that SCORAD A and BSA agree, and be reconciled if they do not | Invented control | Med |

### 5.5 FASS / HASS

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.6 | 5-category scale 0–4 (clear / almost clear / mild / moderate / severe) for both | Verbatim from the registry record | High |
| §8.6 | **Baseline presence defined as FASS ≥2 or HASS ≥2 at Day 1** | **Key invention.** The registry says only "participants with facial AD at baseline" / "hand AD at baseline" without defining the threshold. ≥2 (mild or worse) was chosen so that a "clear" response is a meaningful change; a real protocol could plausibly use ≥1 | **Low** |
| §8.6 | Populations fixed at Day 1 and never revised | Invented but standard analysis-population practice | Med |
| §8.6 | Requirement to score FASS and HASS for **all** participants at every scheduled timepoint, including scores of 0 | Invented operational rule; follows from the analysis design | High |

### 5.6 DLQI

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.7 | 10 items, 0–3 each, total 0–30, recall "over the last week", higher = greater impact | Confirmed by the registry record and the published instrument | High |
| §8.7 | "Not relevant" and unanswered items score **0** | Published DLQI scoring rule | High |
| §8.7 | **Item 7's two-part structure** (Yes = 3; if No, follow-up scores 2/1/0; scored once) | Published DLQI scoring rule | High |
| §8.7 | Missing-item rule: one unanswered item scores 0 and totals normally; **two or more and the questionnaire is not scored** | Published DLQI scoring rule | High |
| §8.7 | Severity bands (0–1 no effect through 21–30 extremely large effect) | Published DLQI banding | High |
| §8.7 | **≥4-point MCID** | Consistent with the registry endpoint (≥4-point reduction in participants with baseline DLQI ≥4) and the published MCID | High |
| §8.7 | Domain grouping of items 1–2, 3–4, 5–6, 7, 8–9, 10 | Published DLQI structure | High |
| §8.7 | Instruction to check completeness while the participant is still in the room | Invented operational control | High |

### 5.7 POEM

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.8 | 7 items, total 0–28, recall "last week" | Confirmed by the registry record | High |
| §8.8 | The seven symptoms: itching, sleep disturbance, bleeding, weeping/oozing, cracking, flaking, dryness/roughness | The registry names bleeding, oozing, cracked, flaking, dry/rough and sleep impact; **itching** is added from the published instrument | High |
| §8.8 | Frequency bands: no days = 0, 1–2 = 1, 3–4 = 2, 5–6 = 3, every day = 4 | Published POEM scoring | High |
| §8.8 | Interpretation bands (0–2 clear/almost clear … 25–28 very severe) | Published POEM banding | High |
| §8.8 | Missing-item rule identical to DLQI | Published POEM scoring rule | High |
| §8.8 | Scripted reminder of the recall period before handing over the form | Invented operational control | Med |

### 5.8 HADS

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.9 | 14 items; **odd-numbered = HADS-A, even-numbered = HADS-D**; each item 0–3; subscales 0–21; recall "the past week"; some items reverse-scored | Published HADS structure | High |
| §8.9 | Severity bands 0–7 normal, 8–10 mild, 11–14 moderate, 15–21 severe | **Verbatim from the registry record** | High |
| §8.9 | **No total HADS score** is reported in this study | Follows from the registry, which reports subscales only | High |
| §8.9 | **Escalation thresholds: HADS-D ≥11 or HADS-A ≥15 → investigator assessment while the participant is still on site; HADS-A/D 8–10 → PI review before discharge** | **Key invention.** The registry defines the bands but no safety pathway. Thresholds chosen at the moderate-depression and severe-anxiety boundaries | **Low** |
| §8.9 | Requirement to **score HADS before the participant leaves the building, every time** | Invented; necessary to make the pathway operable | High |
| §8.9 | Explicit note that **HADS contains no self-harm or suicidality item**, so a normal score is never evidence of safety, and the pathway also triggers on any spontaneous disclosure at any time | Factually correct about the instrument. The assignment asked for handling of self-harm endorsement; since HADS has no such item, the pathway was built to trigger on disclosure instead | High |
| §8.9 | Five post-trigger actions (document, AE/SAE assessment, medical monitor notification, written referral with a crisis line, continuation decision) | Invented but standard duty-of-care practice | Med |
| §8.9 | "Participation is never conditioned on the answers"; honest answer to be given if the participant asks how the scores are used | Ethical stance chosen for the simulation | High |

### 5.9 Daily NRS items and weekly averages

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.10 | Item wording for Worst Pruritus, AD Skin Pain, and Sleep Disturbance NRS, each 0–10 with stated anchors | Anchors derived from the registry descriptions ("10 represented the highest intensity of itch", etc.); the exact question wording is invented | Med |
| §8.10 | All three items use a **24-hour recall** | The registry states 24 h explicitly for Sleep Disturbance; extended to the other two by assumption | Med |
| §8.10 | **Weekly average = arithmetic mean of available daily scores over the 7 consecutive days immediately preceding and including the visit date**; missing days excluded, not imputed | The registry confirms "weekly average" and "mean of daily scores" but not the window definition | Med |
| §8.10 | **Evaluable week = entries on ≥4 of the 7 days** | **Key invention.** No such rule appears in the registry record. 4 of 7 is a common industry convention (majority of days) | **Low** |
| §8.10 | Worked example: five of seven days recorded, mean 3.6, baseline 7.8, change −4.2 | Invented participant data; arithmetic verified | High (as arithmetic) |
| §8.10 | Day 1 confirmation of Worst Pruritus NRS ≥4 against the eDiary baseline weekly average | Inclusion criterion is canon; using the eDiary weekly average to confirm it is an assumption | Med |

---

## 6. The eDiary

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §9.1 | Site-provisioned handheld only; participants do not use their own phones | STUDY_FACTS.md §9 says "provisioned handheld"; the BYOD prohibition is the natural reading | High |
| §9.1 | Provisioning record contents (serial number, issue date/time, language, trainer) and the pre-departure checks including a training-mode test entry | Invented | High |
| §9.2 | The full participant training **script**, and a **15-minute** training allowance | Entirely invented; written to be usable verbatim in the game | High |
| §9.3 | **Daily window 18:00–03:59 local time**, participant-selected reminder defaulting to 20:00 with one repeat at +60 minutes | **Key invention.** No window is specified anywhere in canon. An evening window covering the prior 24 h was specified by the assignment; the exact hours are invented | **Low** |
| §9.3 | **No late entry and no back-filling by anyone, including the helpdesk** | Invented but standard ePRO design | High |
| §9.4 | **Compliance target ≥80%** of expected days | **Key invention.** 80% is the most common industry threshold; no canon source | **Low** |
| §9.4 | **Re-training trigger: <80% since the last visit, or ≥3 consecutive missed days** | **Key invention** | **Low** |
| §9.4 | **Escalation trigger: <80% at two consecutive visits, or any interval <50%** | **Key invention** | **Low** |
| §9.4 | Expected days run from the day after activation through Week 24 | Follows the SoA ("continuous daily entry through Week 24"); the day-after-activation start is an assumption | Med |
| §9.5 | Five-step visit review process, and the requirement to review compliance **after** the rater has finished | Invented; the ordering follows from the §6.5 blinding rule | High |
| §9.5 | Four-step re-training escalation ladder, including a PI-level conversation at step 3 | Invented | Med |
| §9.5 | **eDiary non-compliance is never by itself grounds for withdrawal** | Ethical stance chosen for the simulation | High |
| §9.6 | Replacement device typically arrives in **1–2 business days**; unsynced data on a lost device are permanently lost; a DayLog ticket number is recorded | Invented service level | Med |
| §9.6 | **No paper diary as a stopgap** | Invented but follows from Part 11 attributability | High |
| §9.7 | Absolute prohibition on site staff completing entries, framed as simultaneously fabrication, a Part 11 violation, a GCP violation, and a site employment matter | The prohibition itself was required by the assignment; the framing is authorial | High |
| §9.7 | Carve-out permitting a **consistent caregiver** to enter answers dictated by the participant, if documented and the medical monitor is informed | **Invention.** Real programmes differ; some prohibit this entirely | **Low** |

---

## 7. Vitals, physical examination, ECG, weight and height

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §10.1 | Vital signs comprise SBP, DBP, pulse, respiratory rate, and temperature | Not itemised in canon; standard set | High |
| §10.1 | **5 minutes seated rest**; same arm every visit, recorded; vitals before blood draws and before IP | Standard technique; the "same arm, recorded" rule is invented | High |
| §10.1 | Abnormal first reading → repeat after 5 minutes → **record both** | Invented but standard data-integrity practice | High |
| §10.2 | Content of the **full** physical examination (11 named systems) and the definition of the **targeted** exam as history-directed plus injection-site review | The SoA distinguishes full from targeted; the content of each is invented | Med |
| §10.2 | Screening abnormalities → medical history; post-Day 1 abnormalities → adverse events | Standard convention | High |
| §10.3 | ECG: **supine, 5 minutes' rest, acquired before blood draws**; standard 10-electrode placement; avoid lesional skin for electrodes | Invented technique detail; the lesional-skin caution is specific to an AD study | Med |
| §10.3 | Investigator interpretation categories: normal / abnormal not clinically significant / abnormal clinically significant | Standard | High |
| §10.3 | Certified copy required because thermal paper fades | Real concern; the instruction is invented | High |
| §10.4 | Height in cm with heels together and the Frankfort plane; weight in kg to one decimal, same scale, shoes off, light clothing | Standard technique | High |

---

## 8. Concomitant medications

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §11.1 | Concomitant medications collected from **30 days before Screening** (longer for washout-relevant agents) | **Invention.** No collection window is in canon; 30 days is a common convention | **Low** |
| §11.1 | Required fields: name, indication, dose, unit, frequency, route, start date, stop date/ongoing | Standard | High |
| §11.1 | Scripted open-then-specific questioning technique | Invented | High |
| §11.3 | **Bland emollients permitted and encouraged**; regimen should be stable from before Day 1; recorded as concomitant medications | Standard AD-trial practice; not stated in canon | High |
| §11.3 | **No emollient or topical product within 4 hours of a visit** | **Invention**, repeated throughout the manual as a participant instruction | **Low** |
| §11.3 | "Bland" defined as containing no active pharmaceutical ingredient; instruction to ask to see the tube | Invented operational control | High |
| §11.4 | Prohibited-medication table with named example products, and the inclusion of **live vaccines** and tanning beds | The classes are canon (STUDY_FACTS.md §7 exclusions); the named examples, the live-vaccine entry, and the tanning-bed entry are invented | Med |
| §11.4 | Distinction between a prohibited medication taken **for AD** (= rescue therapy) and taken for another indication (= prohibited conmed, not rescue) | **Invention**, but essential to make §12's data consequences coherent | Med |
| §11.5 | The nine-step response process, including "do not react" and "do not unblind" | Invented | High |

---

## 9. Rescue therapy

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §12.2 | Trigger defined as symptoms **intolerable to the participant** despite emollients and study regimen, **or** clinically significant worsening making withholding treatment medically unacceptable | **Invention.** The registry confirms rescue exists and drives NRI/WOCF but does not define the trigger | **Low** |
| §12.2 | Decision reserved to the investigator or a sub-investigator | Follows from §5.2 (medical judgement is not delegable) | High |
| §12.3 | **Three-step hierarchy: Step 0 optimise emollients → Step 1 topical (TCS, with TCI for face/neck/flexures) → Step 2 systemic** | **Key invention.** The assignment specified "TCS first, then systemic"; the intermediate detail and the TCI carve-out are invented | **Low** |
| §12.3 | **Minimum 7-day topical trial** before escalating to systemic, unless the clinical situation does not permit | **Key invention** | **Low** |
| §12.3 | **Topical rescue → IP continues. Systemic rescue → IP permanently discontinued, participant remains in the study through Week 36.** | **Key invention.** This is a protocol-level rule not present in canon; it is stated here as a restatement of protocol requirements. A real protocol might instead interrupt rather than discontinue IP | **Low** |
| §12.3 | Rescue never triggers unblinding; unblinding remains a separate emergency process under SOP-024 | Follows from canon (STUDY_FACTS.md §10, RESEARCH_SITE.md §7) | High |
| §12.4 | NRI for binary endpoints and WOCF for continuous endpoints | **Canon** (STUDY_FACTS.md §6) and confirmed in the registry record — reproduced, not invented. The plain-language explanation and the suggested wording for participants are invented | High |
| §12.4 | Explicit instruction to continue performing all assessments after rescue | Invented | High |
| §12.5 | The nine-item documentation packet, including the requirement to **flag the medication as AD rescue therapy** in the eCRF because the flag drives NRI/WOCF | Invented; the flag mechanism is plausible EDC design | Med |
| §12.5 | Appropriately administered rescue therapy is **not** a protocol deviation | A judgement call; some sponsors log all rescue as deviations | Med |

---

## 10. Visit windows and scheduling

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §13.1 | **All windows calculated from Day 1, never from the previous visit** | Follows directly from the canon SoA, which expresses windows relative to Day 1. The emphasis and the drift explanation are authorial | High |
| §13.2 | Worked window table anchored on a Day 1 of 15-JAN-2024 | Invented illustrative dates; arithmetic verified against the canon study days | High (as arithmetic) |
| §13.3 | Veriscribe visit-schedule calculator and a validated site spreadsheet as the scheduling tools; all 12 visits booked on Day 1; book to the target day, not the window edge; confirm at 7 days and 48 hours | Invented; Veriscribe is a canon fictional vendor | Med |
| §13.3 | Brendan Koss maintains the visit-window tracker | From RESEARCH_SITE.md §2 ("primary for … visit-window tracking") | High |
| §13.4 | Six-step out-of-window process, including **prospective** medical monitor notification before the window closes | Invented; prospective notification is standard practice | High |
| §13.4 | At dosing visits, an out-of-window visit is flagged to the medical monitor for a decision on whether to dose | Invented | Med |
| §13.4 | A missed visit is a distinct and more serious category than a window deviation | Invented framing | High |

---

## 11. Source documentation

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §14.1 | ALCOA+ table with paired compliant / non-compliant examples for all nine elements | ALCOA+ is real; every example is invented | High |
| §14.2 | Maintenance of a **source data location list**, completed before first screening and reviewed at each monitoring visit | Standard practice | High |
| §14.3 | **The EMR-versus-worksheet split at Site 1047** — which data live in Modernizing Medicine EMA, which on paper worksheets, which are the participant's own form, which are vendor systems | **Key invention.** RESEARCH_SITE.md §3 establishes that both exist ("source documents on the practice EMR … plus study-specific paper worksheets"); the field-by-field allocation is invented | Med |
| §14.3 | Rating worksheets are paper and standalone specifically to protect rater blinding | Invented, but consistent with §6.5 | High |
| §14.3 | Participant-completed PRO forms **are** the source and are never transcribed and discarded | Standard | High |
| §14.3 | **Nothing at Site 1047 is currently direct-entry into the EDC** | Invention; chosen to make the direct-entry rule concrete and to give the game a clean baseline | Med |
| §14.4 | Correction convention (single line, correct value, initial, date, brief reason; never obliterate) and the late-entry labelling format | Standard practice; the exact wording template is invented | High |
| §14.5 | Part 11 obligations table, including the statement that shared credentials are the most common serious data-integrity finding | The rules are real; the "most common finding" claim is authorial emphasis | Med |
| §14.6 | The eight-item list of what the CRA verifies | Invented; Kevin Ostrander is canon | High |

---

## 12. Protocol deviations

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §15.2 | **Eleven deviation categories** (consent, eligibility, visit schedule, assessment, IP, conmed, eDiary/PRO, safety reporting, lab/specimen, delegation/training, documentation) | **Key invention.** Canon lists no categories; RESEARCH_SITE.md §5 names four *types* seen at the site (visit-window, eDiary compliance, missed PK sample, out-of-window lab), all of which map into this scheme | Med |
| §15.3 | Major/minor definition anchored on safety, rights, or data integrity | Standard industry definition | High |
| §15.3 | The 21-row major-versus-minor **decision table**, including specific calls such as "Week 16 or Week 24 out of window = major" but "Week 4 or Week 8 1–2 days out = minor", and "PK/ADA drawn post-dose = major" | **Key invention.** Every classification is a judgement made for this simulation | **Low** |
| §15.3 | Instruction to classify **major** when genuinely unclear and let the CRA downgrade | Invented policy stance | Med |
| §15.4 | **5 business days** to log and notify; **same business day** for major deviations | The 5-business-day rule was specified by the assignment; the same-day major rule is invented | Med |
| §15.4 | Deviation log fields, including separate **date occurred** and **date site became aware** | Standard; the field list is invented | High |
| §15.4 | Sam Oyelaran maintains the log under SOP-018 | From RESEARCH_SITE.md §2 and §7 | High |
| §15.5 | Six IRB-reportability criteria and a **5 working day** prompt-reporting expectation attributed to Keystone IRB policy | **Invention.** Keystone is a canon fictional IRB with no published policy; criteria modelled on common central-IRB reporting policies | **Low** |
| §15.5 | Deviations to eliminate an immediate hazard need no prior approval but must be reported promptly | Standard GCP | High |

---

## 13. Visit-by-visit walkthrough

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §16, throughout | Visit **durations**: Screening 2.5–3 h; Day 1 ~4 h; Week 2 ~2 h; Weeks 4–20 ~1.5 h; Week 24 2–2.5 h; Weeks 28/32 ~45 min; Week 36 1.5–2 h | Invented; internally consistent with the assessment loads and observation periods | Med |
| §16, throughout | The **day-before preparation** lists for every visit type | Invented | High |
| §16, throughout | The **participant instruction** sets (no emollient 4 h, no make-up, bring the eDiary, bring medications, allow the duration) | Invented | High |
| §16, throughout | The **ordered activity sequences**, especially placing pregnancy testing early, the rater assessment before all other skin contact, PROs before the clinical conversation, and eDiary review after the rater | Invented sequencing. The canon ordering rule (efficacy and predose draws before dosing; rater first) is honoured throughout | Med |
| §16.2 | Day 1 framed as the visit where FASS/HASS "define the analysis populations" | Follows from the §8.6 assumption | Med |
| §16.2 | Physical separation of predose tubes from the injection tray, and not bringing IP into the room until draws are confirmed complete | Invented control | High |
| §16.3 | The **delta table** for Weeks 2/4/8/12/16/20 | Derived entirely from the canon SoA; presentation is authorial | High |
| §16.3 | Week 20 identified as the **largest single retention risk** and the point at which the "study continues after the last injection" conversation belongs | Invented judgement | Med |
| §16.4 | Week 24 requires independent verification of EASI arithmetic and a confirmed final eDiary sync before device collection | Invented controls | High |
| §16.6 | Week 36 exit conversation: participants are not unblinded at the visit; results via ClinicalTrials.gov and later site contact; **must leave with an AD treatment plan and a booked follow-up appointment** | Invented; the treatment-plan requirement is an ethical stance chosen for the simulation | High |
| §16.7 | **No IP at an Unscheduled Visit** unless prospectively approved by the medical monitor; unscheduled rater assessments do not substitute for scheduled ones; Unscheduled Visits never move a window | Invented rules | Med |
| §16.8 | ET visit performed as a Week 24 / EOT visit, **ideally within 14 days** of the discontinuation decision; ECG included if on or after Day 1; PK/ADA if any IP was received | **Invention.** The 14-day target and the content list are invented | **Low** |

---

## 14. Discontinuation, withdrawal, and retention

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §17.1 | The IP-discontinuation vs study-withdrawal comparison table, including that IP discontinuation **does not** trigger an ET visit | Standard GCP distinction; the table is invented | High |
| §17.1 | Instruction to document what the participant actually withdrew consent **to** | Invented; addresses a real and common error | High |
| §17.2 | Five-step withdrawal conversation, including "accept the answer — ask once" | Invented; the anti-coercion stance is deliberate | High |
| §17.3 | The **seven-rung retention ladder** | **Invention**, though the concept of graded consent withdrawal is standard | Med |
| §17.4 | **Three telephone attempts on three different days at three different times (one outside working hours), plus one certified letter with return receipt, plus at least 30 days before declaring LTFU** | Three calls plus a certified letter was specified by the assignment; the different-days/different-times detail, the emergency-contact and email/SMS additions, and the **30-day** minimum are invented | Med |
| §17.4 | A participant who re-contacts the site is no longer LTFU | Invented | High |
| §18 | Reminder cadence of **7 days** and **48 hours** before each visit | **Invention** | **Low** |
| §18 | Parking validated on arrival rather than reimbursed later; rideshare/transit arranged in advance | Invented operational detail; RESEARCH_SITE.md §6 confirms parking/travel reimbursement exists | Med |
| §18 | $125 per completed visit stipend and prompt payment as a retention factor | Stipend amount is canon (RESEARCH_SITE.md §6); the retention framing is authorial | High |
| §18 | The explicit list of impermissible retention practices (escalating payments, withholding accrued payment, repeated asking, implying care is affected, suggesting delayed rescue, guessing at assignment) | Invented; ethical stance chosen for the simulation | High |

---

## 15. Appendices

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Appendix A | Seven printable visit checklists (A1–A7) | Invented; every line derives from the canon SoA plus this manual's invented sequencing | High |
| Appendix A | Checklists explicitly stated not to replace the source record, but to evidence sequence and completeness | Invented framing | High |
| Appendix B | Screening eligibility checklist with criteria numbered **I1–I9** and **E1–E9** | The criteria themselves are canon (STUDY_FACTS.md §7). The numbering, the split of the combination-product exclusion into E6–E9, and the added I8 (consent) and I9 (willing and able to comply) are invented | Med |
| Appendix B | Investigator determination attestation wording and the requirement that the signature precede the IRT transaction | Invented wording; the requirement follows §7.6 | High |
| Appendix C | ASCII order-of-operations card, and the "quick reference — the numbers that matter" table | Invented presentation; all values traced to canon or to assumptions logged above | High |
| Appendix D | Glossary contents | Built from STUDY_FACTS.md §12 and extended with terms used in this manual (ALCOA+, DATG, eISF, EMR, ePRO, LTFU, MCID, PDE4, PRN, PRO, SDV, SRM, VAS, and others) | High |

---

## 16. Summary of the highest-impact inventions

These are the assumptions most likely to conflict with a sibling document or with a future canon
update, and the ones a reviewer should look at first:

1. **eDiary compliance thresholds** — ≥80% target; ≥4-of-7-days evaluable week; re-training at <80%
   or ≥3 consecutive missed days; escalation at two consecutive visits <80% or any interval <50%.
   (§9.4, §8.10)
2. **eDiary daily window — 18:00 to 03:59 local, no back-filling.** (§9.3)
3. **Rescue therapy hierarchy** — emollient optimisation → topical (≥7-day trial) → systemic; and
   the consequence that **topical rescue continues IP while systemic rescue permanently
   discontinues IP with the participant remaining in the study.** (§12.3)
4. **Protocol deviation categories and the 21-row major/minor decision table.** (§15.2, §15.3)
5. **FASS/HASS baseline-presence threshold of ≥2.** (§8.6)
6. **HADS escalation thresholds — HADS-D ≥11 / HADS-A ≥15 for same-visit investigator assessment.**
   (§8.9)
7. **The 4-hour no-emollient rule before every visit** — repeated throughout the manual as a
   participant instruction. (§6.4, §11.3, §16)
8. **The EMR-versus-worksheet source split at Site 1047**, including that nothing is currently
   direct-entry into the EDC. (§14.3)
9. **Rater re-certification at 12 months with no grace period**, and the Nakamura → Feist → Okonkwo
   backup sequence. (§6.2, §6.3)
10. **The 30-day minimum before declaring lost to follow-up.** (§17.4)
