> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions Log — `monitoring_plan.md`

**Document covered:** `/Users/dave/code/icf-please/docs/trial_documents/monitoring_plan.md` —
*Clinical Monitoring Plan, Protocol 20210143 (ROCKET-Horizon)*, Version 4.0, 15-DEC-2023, issued by
Harborlight Clinical Research, Inc. on behalf of Amgen Inc.
**Outline:** `/Users/dave/code/icf-please/docs/outline/monitoring_plan_outline.md`.

---

## Blanket statement

The ClinicalTrials.gov record for NCT05651711 contains **nothing** about how this study was
monitored. Registry records never do. There is no CRO, no monitoring strategy, no visit schedule, no
risk assessment, no key risk indicator, no quality tolerance limit, and no escalation pathway
anywhere in the public record. Every operational element of this document is therefore invented.

Specifically and without exception:

- **All SDV and SDR percentages are invented** (§8.3). Every figure in the SDV/SDR matrix — the 100%
  categories, the 30% / 25% / 20% / 10% samples, the SDR tiering — is a fabrication. Real percentages
  vary enormously by sponsor, therapeutic area, and study phase; these were chosen to be internally
  coherent and to sit within the range that a risk-based Phase 3 plan plausibly occupies.
- **All KRI thresholds are invented** (§11.2, Appendix D). All thirteen indicators, their
  definitions, their green/amber/red bands, their review cycles, and their prescribed actions are
  fabricated. They were calibrated backwards so that Site 1047's canonical numbers (39% screen-fail
  rate, 11 deviations across 14 randomized participants) land in **amber but not red** — a
  deliberate design choice, because a site that is neither clean nor in trouble is the interesting
  state for the game.
- **All visit frequencies and intervals are invented** (§9.4) — the 8–10 week routine interval, the
  post-enrollment taper, the 12-week / 16-week / 20-week hard maxima, and the shortening triggers.
  The *actual visit dates* at Site 1047 are canon (RESEARCH_SITE.md §5); the intervals were derived
  from those dates, and the plan's stated policy was constructed so that the canonical dates all fall
  within it.
- **All quality tolerance limits are invented** (§16.2) — QTL-01 through QTL-05, their parameters,
  their thresholds, and their warning levels.
- **All timelines for monitoring documentation and escalation are invented** (§12, §13) — notice
  periods, report drafting and QC windows, follow-up letter timing, site response periods, action
  item due dates, and the internal escalation clocks. The one exception is the **7-day serious breach
  notification**, which is the real statutory period under EU CTR Article 52(1) and UK SI 2004/1031
  reg. 29A.
- **All risk scores in the RACT (§6.2) are invented**, as is the 1–5 × 1–5 × 1–5 scoring convention
  and the 1–24 / 25–59 / 60–125 banding. The *risks themselves* are genuine, study-specific hazards
  derived from the canonical protocol design; their numerical evaluation is not.
- **Five personnel are invented for this document** and appear nowhere in `STUDY_FACTS.md` or
  `RESEARCH_SITE.md` (plus one backup CRA). They are listed individually below.
- **All Site 1047 operational metrics not stated in `RESEARCH_SITE.md` are invented** — query counts,
  data entry lag, eDiary compliance percentage, AE rate, total visits performed, laboratory alert
  turnaround, rater distribution statistics, and the site's enrollment close date and projected
  last-visit dates.

The **regulatory framing is genuine**. ICH E6(R2)/E6(R3), 21 CFR 312.50/312.53(d)/312.56/312.62/
312.68, the FDA 2013 risk-based monitoring guidance and its 2019 Q&A, EMA/269011/2013, EU CTR
Article 52, and UK reg. 29A are real instruments and are represented accurately in substance. Their
*implementation* in this plan is fabricated.

Nothing in this document contradicts `STUDY_FACTS.md` or `RESEARCH_SITE.md`. Where canon and the
plan's internal logic risked collision, the collision is recorded explicitly in the last section of
this log.

---

## 1. Cover, version history, approvals

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Cover | Plan is **Version 4.0, dated 15-DEC-2023** | Specified by the assignment. Placed two weeks after Protocol Amendment 3 (29-NOV-2023) and one week after SRM v5.0 (08-DEC-2023), so the document sits in a plausible cascade of amendment-driven re-issues | High |
| Cover | Issued by HCR Clinical Operations on behalf of Amgen | HCR is the canonical CRO (`STUDY_FACTS.md` §9) with monitoring in scope | High |
| Cover | Distribution list includes Amgen R&D Quality Assurance and states the plan is provided to sites "on request or at sponsor discretion" | Reflects real practice — the CMP is a sponsor/CRO document, and site access varies. This is the sentence that establishes the document's asymmetric position, which is its point for the game | High |
| Version history | v1.0 12-SEP-2022; v2.0 24-FEB-2023; v3.0 09-JUN-2023; v3.1 18-SEP-2023 | Invented. Spaced to precede site activation (v1.0), follow first-wave activation (v2.0), follow a mid-study rater variance review (v3.0), and provide one administrative point release (v3.1) | Med |
| Version history | v2.0 driver: "recalibrated KRI thresholds against the first 50 activated centers" | Invented. 50 of 151 is a plausible point at which real threshold calibration becomes possible | Med |
| Version history | v3.0 driver: sponsor inter-rater variance review; cross-referenced to SRM v3.0 (11-MAY-2023), which canonically added rater-blinding requirements after an inter-rater variance review | Deliberate cross-document consistency with `study_reference_manual.md` version history | High |
| Version history | v4.0 changes include "full RACT refresh, new risk R-11, post-enrollment taper, QTL-04, expanded close-out" | Invented, but chosen so each is visibly present in the document | High |
| Approvals | **Yusuf Adeyemi-Clarke, PharmD** — Global Clinical Program Lead, Amgen | Invented. The registry lists only an anonymous "Study Director, Amgen Inc." A named sponsor approver is required for a signature block | Med |
| Approvals | **Deirdre Lamontagne, RN, CCRA** — Regional Monitoring Manager, North America, HCR | Invented. Kevin Ostrander needs a line manager for the QC step in §12.2 | Med |
| Approvals | **Hyun-Woo Baek, MS** — Central Monitoring Lead, HCR | Invented. A named, functionally independent central monitor is required by the plan's own logic (§5.6) | Med |
| Approvals | **Tomás Ferreira-Lund** — Data Management Lead, HCR | Invented. No DM contact exists in canon | Med |
| Approvals | **Nadia Krishnamurthy, MSc** — Director, Clinical Quality Assurance, HCR | Invented. The serious breach and misconduct pathways require a named QA recipient independent of clinical operations | Med |
| §5.4 | **Jonah Ellsworth-Pike, CCRA** — backup monitor for Site 1047 | Invented. Real monitoring plans name a backup and require periodic co-monitoring | Med |
| Approvals | Re-approval required for changes to intensity, thresholds, or QTLs; point releases permitted for administrative changes | Invented governance convention, standard in controlled-document practice | High |

---

## 2. Purpose, scope, regulations, definitions

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §2 | Out-of-scope table naming a Vendor Oversight Plan, Data Management Plan, Statistical Analysis Plan, DMC Charter, and QA Audit Programme | Invented documents. None exists in this corpus; all are named only as scope boundaries. The DMC itself is canon (`STUDY_FACTS.md` §3) | High |
| §2 | "Where this plan and the protocol conflict, the protocol governs" | Invented precedence clause; standard and consistent with the equivalent clause in the Study Reference Manual | High |
| §3 | ICH E6(R3) section numbers **§3.11** (quality management / risk-based approach) and **§4.10** (monitoring) | Used as specified by the assignment brief. R3's final numbering should be verified against the adopted guideline before any real-world use; the substance described is accurate to E6(R2) §5.0/§5.18 and to R3's restructuring | Med |
| §3 | Characterisation of the FDA 2013 guidance as stating that fixed-interval on-site monitoring with 100% SDV "may not be the most effective way" to ensure quality | Accurate paraphrase of the real guidance, not a verbatim quotation | High |
| §3 | Characterisation of EMA/269011/2013 as supplying the probability / impact / **detectability** triad | Accurate to the real reflection paper; detectability is the axis the FDA guidance largely omits | High |
| §3 | EU CTR Article 52(1) seven-day clock and Article 52(2) two-limb definition | Real and quoted accurately in substance | High |
| §4 | Definitions of SDV, SDR, centralized monitoring, KRI, QTL, RACT, action item, significant issue, CAPA | Substance is industry-standard; the exact wording is written for this document. The specific claim that SDV and SDR are independent dials (100% SDR with 0% SDV is coherent) is a real and frequently misunderstood point | High |

---

## 3. Roles and responsibilities

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5.1 | An "Amgen–HCR transfer of obligations schedule" | Invented document reference. Real sponsor–CRO arrangements document delegated obligations this way (and 21 CFR 312.52 requires it for transferred obligations) | High |
| §5.3 | Rosalind Achebe's specific authorities — approving interval extensions, chairing IQRM, determining risk band, authorising Tier 2 for-cause visits | Invented allocation of authority. Achebe's role as Clinical Trial Manager is canon (`STUDY_FACTS.md` §10) | Med |
| §5.3, §11.6 | **Integrated Quality Risk Management (IQRM)** review, monthly, with named attendees | Invented governance forum and name. Real studies use a variety of names (RBQM committee, risk review board, quality management team) | Med |
| §5.4 | Kevin Ostrander's duties and the statement that "the CRA has no discretion to withhold escalation of a Tier 1 trigger" | Invented. Ostrander as the assigned CRA for Site 1047 is canon | High |
| §5.4 | At least one accompanied or co-monitoring visit per site per year | Invented QC convention, standard in CRO practice | High |
| §5.6 | Central Monitoring is "functionally independent of the field monitoring line"; central signals are "a directed instruction to look," not findings | Invented framing, but it reflects a genuine design principle in risk-based monitoring — separating signal generation from signal adjudication | High |
| §5.8 | Ana Belmonte-Ruiz's monitoring-facing duties (eligibility queries, alert follow-up, rescue therapy review, notification on every significant issue) | Invented allocation. Belmonte-Ruiz as Medical Monitor and Vandermeer as backup are canon | High |
| §5.10 | Site obligations: 15-business-day response to follow-up letters; 5-business-day notification of staff and IRB changes; **24-hour** notification of inspections, IP excursions, data breaches; advance notification of PI change; immediate notification of blind compromise | All timelines invented. The 24-hour IP excursion notification is canon (`STUDY_FACTS.md` §4, "reported to the sponsor within 24 h") and is reproduced consistently | High |
| §5.10 | Monitor workspace description (dedicated desk, wired drop, lockable drawer, read-only EMR account) | Canon, from `RESEARCH_SITE.md` §3 | High |

---

## 4. Risk assessment (RACT)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §6.1 | Scoring on Likelihood × Impact × Detectability, each 1–5, product 1–125, banded Low 1–24 / Medium 25–59 / High 60–125 | Invented. The three-axis approach with inverted detectability is genuinely conventional (it derives from FMEA and is endorsed in substance by EMA/269011/2013); the specific scale and band boundaries are fabricated | Med |
| §6.1 | RACT refresh performed **04-DEC-2023** | Invented date, placed between Protocol Amendment 3 (29-NOV-2023) and the plan date (15-DEC-2023) | Med |
| §6.2 R-01 | Rater inconsistency scored L4 / I5 / D5 = 100, High | Invented scores. The underlying risk is real and is the highest-impact risk in a study with two investigator-scored co-primary endpoints across 151 centers | High (risk) / Low (score) |
| §6.2 R-01 | "Site 1047 has three certified raters" | Canon — Okonkwo, Feist, and Nakamura are all DATG rater-certified (`RESEARCH_SITE.md` §2) | High |
| §6.2 R-02 | eDiary risk scored 5/4/2 = 40; "~168 consecutive days" | 168 days = 24 weeks of daily entry, derived arithmetically from the canonical SoA. Scores invented | High (arithmetic) / Low (score) |
| §6.2 R-03 | Washout risk scored 4/5/4 = 80. The three washout rules quoted | Washout rules are canon verbatim (`STUDY_FACTS.md` §7). Scores invented | High (rules) / Low (score) |
| §6.2 R-04 | Cold chain scored 3/5/2 = 30 | Storage conditions, the ≤30-day cumulative ≤25 °C allowance, and the 24-hour notification are canon. Scores invented | High (conditions) / Low (score) |
| §6.2 R-05 | Blinding scored 3/5/4 = 60; pyrexia 10.3% vs 1.1% and chills 6.1% vs 1.1% cited as potential unblinding cues | Safety percentages are canon (`STUDY_FACTS.md` §13) and used exactly. The inference that the pyrexia/chills differential is an unblinding hazard is invented but medically reasonable | High (data) / Med (inference) |
| §6.2 R-06 | Rescue therapy scored 4/5/4 = 80; the reasoning that an undocumented rescue "converts a non-responder into a responder" | The NRI/WOCF convention is canon (`STUDY_FACTS.md` §6). The inference about the direction of bias is a correct derivation from that convention | High (logic) / Low (score) |
| §6.2 R-07 | PK/ADA timing scored 4/3/3 = 36 | Predose trough requirement and draw order are canon (`STUDY_FACTS.md` §5, §8). Scores invented | High (requirement) / Low (score) |
| §6.2 R-08 | Visit window scored 5/3/1 = 15, Low — explicitly the lowest-effort risk because it is fully detectable centrally | Invented, but it makes a genuine design point: high-likelihood risks that are trivially detectable do not warrant on-site effort. This directly explains why Site 1047's seven window deviations are not treated as serious | High (logic) / Low (score) |
| §6.2 R-09 | AE under-reporting scored 3/5/4 = 60 | Scores invented. Event rates quoted are canon | High (rates) / Low (score) |
| §6.2 R-11 | **Screening EASI/vIGA-AD score inflation**, added at v4.0, scored 3/5/5 = 75 | Invented as a named risk, at the assignment's direction. The underlying eligibility-integrity concern is genuine and well recognised in dermatology trials with numeric entry thresholds | High (risk) / Low (score) |
| §6.2 R-11 | Monitoring response includes the **16.0–18.0 baseline EASI band** as a surveillance statistic and the **baseline-to-Week-2 change** as an inflation detector | Invented methodology. Both are plausible and analytically sound: mass immediately above a threshold and implausibly large early improvement are the two signatures score inflation actually leaves | Med |
| §6.2 R-15 | Competing study contamination; "Site 1047 ran two concurrent AD trials during its enrollment period" | Canon (`RESEARCH_SITE.md` §5), including the shared exclusion tracker maintained by Sam Oyelaran | High |
| §6.2 R-12 to R-16 | All remaining risks and scores | Invented | Med (risks) / Low (scores) |
| §6.3 | Monthly review cadence; re-scoring on amendment, serious breach, QTL breach, and phase transition | Invented cadence | Med |

---

## 5. Critical data and processes

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §7 | The ten critical processes and their paired critical data | The selection is invented but is close to universal industry consensus (consent, eligibility, randomisation, IP, primary endpoint, SAE, and — study-specific — rescue therapy and blinding) | High |
| §7 | Primary endpoint SDV at 100% for Day 1 / Week 16 / Week 24 and 30% elsewhere | Invented split. Rationalised by the canonical endpoint structure: Week 24 is the co-primary timepoint and Week 16 is the key secondary timepoint (`STUDY_FACTS.md` §6) | High (rationale) / Low (percentages) |
| §7 | The explicit statement that "non-critical does not mean unmonitored" | Invented framing, included because it is the most commonly misread implication of risk-based monitoring | High |

---

## 6. Monitoring strategy

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.1 | Mix of continuous centralized, monthly remote, interval/triggered on-site | Invented cadence | Med |
| §8.1 | The paragraph listing what centralized monitoring **cannot** do, including the failed light bulb in the standardized-lighting room | Invented. The standardized-lighting exam room is canon (`RESEARCH_SITE.md` §3); the failure scenario is illustrative | High |
| §8.2 | Three risk bands (Enhanced / Standard / Reduced) with entry criteria and monitoring consequences | Invented framework. Risk-tiered site banding is real practice; these specific criteria are not | Med |
| §8.2 | **Site 1047 banded Standard**, ineligible for Reduced while any KRI is amber | Invented, but derived deterministically from the invented KRI thresholds and the canonical site metrics | High (internal consistency) |
| §8.3 | Every SDV and SDR percentage in the matrix | **All invented.** See blanket statement | Low |
| §8.3 | Sampling performed by the EDC, not chosen by the CRA | Invented control, but a real and important one — a sample selected by the person performing the check is not a sample | High |
| §8.3 | Central laboratory results marked "SDV N/A" because of direct electronic transfer | Correct in principle for a central-lab direct data transfer; the arrangement with Meridian Central Laboratories is canon in outline, the direct-transfer detail is invented | Med |
| §8.3 | eDiary marked "SDV N/A" because DayLog data are direct-from-device | Correct in principle for ePRO; consistent with the canonical vendor roster | High |
| §8.4 | **First-participant rule: 100% SDV/SDR on the first 2 participants through Week 4**, plus 100% on critical categories for their whole participation | Invented parameters (the number 2 and the Week 4 boundary). The rule itself is a real and widespread practice | Med |
| §8.4 | Framing of the rule as "diagnostic, not punitive" | Invented rationale, included because it is what actually justifies the rule | High |
| §8.5 | The seven step-up triggers, and the asymmetry that step-up is automatic while step-down requires CTM approval | Invented. The asymmetry is a genuine and deliberate control-design principle | High (principle) / Med (specifics) |

---

## 7. Visit types, frequency, and Site 1047 history

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §9.1 | SQV content | Invented but standard | High |
| §9.2 | SIV content and the "green light" activation concept | Invented content. SIV date **21-DEC-2022** and activation **06-JAN-2023** are canon (`RESEARCH_SITE.md` §5) | High |
| §9.4 | Routine intervals: 8–10 weeks enrolling; 10–12 weeks enrollment closed but dosing; 12–16 weeks follow-up only; hard maxima 12/16/**20** weeks | **All invented.** Constructed specifically so that every canonical visit interval at Site 1047 falls inside the stated policy — including the longest, IMV 4 → IMV 5 at 19.0 weeks | High (internal consistency) / Low (real-world) |
| §9.4 | Shortening triggers, including "3 participants in 4 weeks → visit within 4 weeks" | Invented | Med |
| §9.5 | **Site Qualification Visit 04-NOV-2022** | **Invented.** `RESEARCH_SITE.md` does not record an SQV. Placed before the IRB reliance agreement (04-NOV-2022) and initial IRB approval (08-NOV-2022) — note it shares a date with the reliance agreement, which is coincidental but not contradictory | Low |
| §9.5 | "Qualified without conditions" | Invented, consistent with the site's strong profile (62 trials, 9 AD studies, NAI inspection outcome) | Med |
| §9.5 | IMV dates 09-FEB-2023, 20-APR-2023, 27-JUL-2023, 02-NOV-2023, 14-MAR-2024; COV pending | **Canon**, reproduced exactly from `RESEARCH_SITE.md` §5 | High |
| §9.5 | Intervals (7.1 / 10.0 / 14.1 / 14.1 / 19.0 weeks) | Arithmetic from the canonical dates | High |
| §9.5 | IMV 5 (14-MAR-2024) shown as **Planned**, not complete | Necessary for internal consistency: the plan is dated 15-DEC-2023, so a 2024 visit cannot yet have occurred. Does not contradict canon, which lists the visit without stating a status relative to any document date | High |
| §9.5 | IMV 1 covered the site's first two randomized participants and satisfied the first-participant rule | Invented, but arithmetically consistent — first participant randomized 24-JAN-2023 (canon), IMV 1 on 09-FEB-2023 (canon), so two participants and a Week-2 visit are plausible by then. The IDs 1047-001 and 1047-002 were dropped from this row on 29-JUL-2026: both are worked by the script in January 2024 (SAF-0033 puts 1047-001 at Day 113 on 04-JAN-2024, DE-1115 puts 1047-002 at Week 24), which a 09-FEB-2023 first-participant review contradicts. The count carries the point without naming anyone | Med |
| §9.5 | **Site 1047 closed enrollment 12-SEP-2023** with 14 randomized against a contracted 12 | **Invented date.** The counts are canon. The date was chosen so that the site's last Week 24 visit (Day 169) falls on ~27-FEB-2024, which makes the canonical 14-MAR-2024 IMV land just after it — supplying the plan's stated justification for the long interval | Med |
| §9.5 | Projected last dose 30-JAN-2024 (Week 20 / Day 141); projected last Week 24 27-FEB-2024; projected LPLV 22-MAY-2024 (Week 36 / Day 253) | Arithmetic from the invented 12-SEP-2023 enrollment close and the canonical SoA day numbers | High (arithmetic) / Med (premise) |
| §9.5 | COV target "within 8 weeks of LPLV" | Invented | Med |
| §9.5 | Three days allocated on site for IMV 5 rather than the usual two | Invented | Med |
| §9.6 | Tier 1 (mandatory) and Tier 2 (presumptive) for-cause trigger lists | Invented. The content is standard in substance; the two-tier structure and the removal of CTM discretion at Tier 1 are design choices made for this document | Med |
| Global | Study-level context: the plan is issued while global enrollment is still closing | Derived from the registry — primary completion 05-JUN-2024 minus 168 days implies the last randomization occurred around 19-DEC-2023, days after the plan date. Not stated explicitly in the document, but the post-enrollment taper language assumes it | High |

---

## 8. Conduct of visits

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §10.1 | Pre-visit preparation performed in the five business days before a visit | Invented | Med |
| §10.3 | The ISF review list | Invented composition, drawn from the standard ICH E6 essential document set. Site-specific elements (binder **and** Veriscribe eISF; SOP references) are canon | High |
| §10.4 | The ten-point consent verification procedure | Invented in its specific formulation. The requirement that the participant's date be in their own hand, and that no procedure precede consent, are genuine and universal | High |
| §10.4 | The named pre-consent procedures for this study (screening blood draw, screening EASI/vIGA-AD, eDiary issue) | Derived from the canonical SoA, which places all three at Screening | High |
| §10.4 | "The CRA confirms the IRB approval date for the site-specific version before accepting re-consents on it" | **Deliberate hedge.** Site 1047's ICF v4.0.1 was approved 19-DEC-2023 — four days *after* this plan's date. The plan therefore cannot assert that the site-specific version is approved, and this clause makes the timing an instruction rather than a claim | High |
| §10.4 | Any consent finding is a significant issue at minimum; procedure-before-consent is Tier 1 | Invented severity assignment, consistent with universal practice | High |
| §10.5–10.13 | All checklist content for eligibility, SDV, IP, temperature, laboratory, AE, deviation, interview, and facility review | Invented in composition. Every underlying protocol requirement referenced (post-dose observation durations, draw order, injection site rules, 30-minute equilibration, alert value 5-business-day review, alarm escalation chain Chao → Raghunathan → Okonkwo → answering service) is canon and is reproduced without alteration | High |
| §10.11 | The "monitor-identified-not-site-logged" delta treated as a metric in its own right | Invented metric. A genuinely useful one and a real practice at some sponsors | Med |
| §10.12 | Staff interviews conducted "without the PI present where practicable" | Invented. Reflects real technique; occasionally contentious | Med |
| §10.14 | "Every finding is stated verbally before the CRA leaves the site. No finding appears for the first time in the follow-up letter." | Invented rule, but it is a genuine professional norm and is the sentence that makes the follow-up letter in Appendix G legitimate rather than an ambush | High |

---

## 9. Centralized monitoring and KRIs

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §11.1 | Monthly KRI report, quarterly statistical monitoring package | Invented cadence | Med |
| §11.1 | "A threshold breach is not a finding. It is a signal." | Invented framing; a genuinely important and frequently violated principle | High |
| §11.2 | **All thirteen KRIs, their definitions, thresholds, cycles, and actions** | **All invented.** See blanket statement | Low |
| §11.3 | Study mean AE rate used as the KRI-08 reference | Invented (see §11.5 row below) | Low |
| §11.3 | The explanation of why a low AE rate is a red flag, and why a high one is a different (lower-severity) problem | Invented exposition. The reasoning is sound and standard; the specific event rates cited (AD worsening 19.1%, pyrexia 10.3%, nasopharyngitis 8.8%, headache 7.2%, chills 6.1%) are canon and used exactly | High |
| §11.4 | The seven rater-consistency and eligibility-integrity analyses, performed quarterly | Invented methodology. Each analysis is a real technique in statistical monitoring (distributional comparison, z-scoring, terminal-digit analysis, inlier/variance analysis, internal consistency, cross-instrument concordance) | Med |
| §11.5 | Data "as at 30-NOV-2023" | Invented cut-off, placed shortly before the plan date | High |
| §11.5 | 23 screened, 9 screen failures, 14 randomized, 2 early terminations (1 withdrawal, 1 lost to follow-up) | **Canon**, `RESEARCH_SITE.md` §5 | High |
| §11.5 | KRI-03 open queries 1.4 per participant | **Invented** | Low |
| §11.5 | KRI-04 query ageing 7% | **Invented** | Low |
| §11.5 | KRI-05 data entry lag 4 business days (median) | **Invented** | Low |
| §11.5 | KRI-06 eDiary compliance 78% site mean, with 2 participants below 70% | **Invented**, but tied to the two canonical eDiary deviations so the numbers explain the deviations rather than floating free | Med |
| §11.5 | KRI-08 site AE rate 2.1 per participant against a **study mean of 2.4** | **Both invented.** No AE-per-participant figure exists in the registry record, which reports event incidence by preferred term only | Low |
| §11.5 | KRI-09 **168 protocol visits performed**, 7 out of window → 95.8% | Denominator invented; numerator (7) is canon. 168 is plausible: 14 randomized participants at up to 12 visits each, less 2 early terminations, plus screening visits | Med |
| §11.5 | KRI-10 lab alert follow-up median 2 business days | **Invented** | Low |
| §11.5 | KRI-11 0% timing errors; the canonical missed PK sample classified as a **collection omission, not a timing error** | Invented classification. It is a meaningful distinction — a sample not drawn is a lost data point; a sample drawn post-dose is a *wrong* data point — and it keeps the canonical deviation from being double-counted | Med |
| §11.5 | KRI-12 site z = +0.4; 36% of baseline EASI in the 16.0–18.0 band vs a study mean of 31% | **All invented.** Set deliberately green: the site's screen-fail rate is amber, and if the rater distribution were also flagged the site would read as a fraud site rather than a busy one | Low |
| §11.5 | KRI-13 IP accountability 0% discrepancy | **Invented**, consistent with the canonical absence of any IP-related deviation | Med |
| §11.5.1 | The argument that a **5%** screen-fail rate would be more alarming than 39%, and that KRI-01 is monitored in both directions | Invented argument. It is analytically correct given restrictive numeric entry thresholds and is the single most useful thing in the document for a player trying to understand how sponsors read site metrics | High |
| §11.5.1 | Patient database figures (~4,100 AD patients, ~1,300 moderate-to-severe) | **Canon**, `RESEARCH_SITE.md` §5 | High |
| §11.5.2 | The rule that "composition outweighs count," and the illustration that three major deviations are worse than eleven minor ones | Invented framing; accurate to real sponsor practice | High |
| §11.5.2 | "The visit-window cluster represents 64% of the site's deviations" | Arithmetic from canon: 7 of 11 = 63.6% | High |
| §11.6 | IQRM membership, agenda, and minuting to the TMF | Invented | Med |

---

## 10. Documentation, escalation, breach, deviations

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §12.1 | Notice periods: 10 business days IMV, 15 COV, 48 hours for-cause, and **"the minimum notice permitted by the CTA, which may be none"** where notice would compromise the visit's purpose | **All invented.** The last clause is a real feature of clinical trial agreements and is included deliberately for its effect | Med |
| §12.2 | Report timeline: draft 10 business days, QC 5, approval 5, TMF filing within 25 | **All invented.** Real sponsor standards vary between roughly 10 and 21 business days for the full cycle | Low |
| §12.2 | "Conclusions about intent are not recorded in a monitoring visit report" | Invented rule, but it is genuine practice and is the necessary precondition for the misconduct pathway in §14.4 | High |
| §12.3 | Follow-up letter within 10 business days; site response within 15 | **Invented** | Low |
| §12.4 | Items closed by evidence not assertion; auto-escalation at 10 business days overdue; unanswered letters never treated as closed | Invented mechanics. The last point is drawn directly from the FDA 2019 Q&A's expectations about resolution tracking | High |
| §13.1–13.6 | The six-rung ladder, its definitions, decision-makers, and timelines | **Structure and all timelines invented.** The rungs correspond to real practice; the granularity and the explicit "what this means at the site" column are design choices for this document | Med |
| §13.3 | Significant issue timelines: CTM within 1 business day, issue log within 3, site within 5, CAPA within 20 | **Invented** | Low |
| §13.3 | Consequence that the issue is "named in the study quality report seen by the sponsor" and will show in future feasibility assessments | Invented, and true to life | Med |
| §13.5 | Enrollment suspension mechanics — no new consents, existing participants continue, IP retained, lifted only on demonstrated CAPA effectiveness | Invented specifics; standard in substance | High |
| §13.6 | Termination mechanics — IP recall, participant transfer or discontinuation, CTA termination, holdback treatment, retention survival, IRB notification, CSR record | Invented. The 10% holdback and its 60-day release are canon (`RESEARCH_SITE.md` §6) | High |
| §13.7 | "'Human error' is not a root cause and a CAPA offering it will be returned" | Invented, and a genuine and widely-held quality position | High |
| §14.2 | Jurisdiction table for serious breach notification | The EU CTR and UK obligations are real. The country list is derived from the registry record's location list (Belgium, Czechia, Denmark, Estonia, Finland, Germany, Poland, Portugal, Romania, Spain, Sweden are the EU/EEA members among the 21 countries) | High |
| §14.2 | The emphasis that seven days runs from **sponsor** awareness, and the consequence for the site | Correct reading of Article 52(1); the operational consequence drawn from it is invented framing | High |
| §14.3 | The ten study-specific serious breach examples | Invented, each mapped to a canonical study feature | High |
| §14.4 | The six-step suspicion-of-fraud pathway (do not investigate, do not confront, do not record in the visit report, secure evidence, notify CTM within 24 h, transfer to QA) | Invented in its specific formulation; accurate to real sponsor policy | High |
| §14.4 | The notification list | Invented, using the invented QA and sponsor roles | Med |
| §15.2 | The six-step monitor review of the deviation log | Invented | High |
| §15.3 | Major/minor categorisation definitions and examples | Invented specifics; standard in substance | High |
| §15.3 | The statement that all eleven Site 1047 deviations are minor and none is major | **Canon** — `RESEARCH_SITE.md` §5 states "no major deviations" | High |

---

## 11. QTLs, audits, close-out, remote monitoring

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §16.1 | The insistence that QTLs are study-level and that sites *contribute to* but cannot *breach* a QTL | Invented framing of a genuine and widely-misapplied distinction from E6(R2)/E6(R3) | High |
| §16.2 | **QTL-01** rescue therapy >30% (warning 25%) | **Invented threshold.** The rationale — that rescue drives NRI/WOCF — is canon-derived | Low (number) / High (rationale) |
| §16.2 | **QTL-02** major deviations affecting a co-primary endpoint >5% | **Invented** | Low |
| §16.2 | **QTL-03** missing Week 24 co-primary data >10% | **Invented** | Low |
| §16.2 | **QTL-04** eDiary compliance <50% in >20% of participants; added at v4.0 | **Invented.** The 50% floor rests on the reasonable proposition that a weekly average of daily NRS entries is uninterpretable below half-completeness | Low (number) / Med (rationale) |
| §16.2 | **QTL-05** eligibility failures >3% | **Invented**; deliberately linked to risk R-11 | Low |
| §16.3 | Breach response: notification within 3 business days, documented evaluation, sponsor decision, and **mandatory reporting in the CSR** | The CSR reporting expectation is genuine (it is what gives QTLs their force); the 3-business-day clock is invented | High (principle) / Low (clock) |
| §17.1 | The monitoring-versus-audit comparison table, including the point that an audit evaluates the monitoring | Invented framing; accurate | High |
| §17.2 | Sponsor audit selection criteria including an explicit **random component** | Invented list. The random arm is a real and important design feature — a purely risk-targeted programme is predictable and therefore gameable | High |
| §17.2 | Site 1047's 2019 BIMO inspection with an NAI outcome treated as reducing selection weighting but not excluding the site from the random arm | Inspection history is canon (`RESEARCH_SITE.md` §2). The weighting effect is invented | Med |
| §17.3 | Inspection support obligations and the 24-hour site notification requirement | Invented timeline; the substance is standard | High |
| §18.1 | COV prerequisites; Site 1047 COV targeted within 8 weeks of a projected 22-MAY-2024 LPLV | Prerequisites invented; the projected date derives from the invented enrollment-close date | Med |
| §18.2 | IP close-out: return to GlobalRx Logistics as the default, on-site destruction under SOP-007 only with separate written authorisation | Invented arrangement. GlobalRx as the depot/courier and SOP-007 as the site's IP SOP are canon | High |
| §18.3 | PI casebook signature may not be delegated | Invented statement of a genuine requirement | High |
| §18.6 | Financial close-out — screen failures reimbursed at actual procedures capped at 2 per randomized participant; 10% holdback released within 60 days of database lock and close-out | **Canon**, `RESEARCH_SITE.md` §6 | High |
| §18.7 | **Record retention 25 years**, no destruction without written Amgen authorisation, notification of custodian/location change, survival of the obligation after termination | The 25-year period was specified by the assignment and matches EU CTR Article 58 (25 years from end of trial). It is longer than the US minimum under 21 CFR 312.62(c) and reflects a sponsor applying the strictest applicable standard globally. The ancillary obligations are invented | High |
| §18.8 | Participant notification of results via a sponsor-supplied lay summary and results letter, distributed by the site and documented | Invented mechanism. The EU CTR lay summary obligation and ClinicalTrials.gov results posting are real. The publication restriction referenced is canon (`STUDY_FACTS.md` §14) | High |
| §18.9 | Close-out letter within 10 business days and its contents | **Invented** | Med |
| §19.1–19.3 | Remote monitoring provisions and limits, including redacted consent images, site-controlled read-only audit-trailed access, no PHI over unvalidated email, no wholesale off-site copying, and the **26-week** cap without on-site monitoring | Substance reflects the real 2020–2022 regulatory position (FDA and EMA COVID-19 guidances). All specific limits, and the 26-week cap, are invented | Med |
| §19.3 | Requirement that remote activity be documented **as remote** in the visit report | Invented rule; genuine expectation | High |

---

## 12. Appendices

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Appendix A | The 40-item IMV checklist | Invented in composition; every referenced protocol requirement is canon | High |
| Appendix B | Consent verification worksheet columns, including the requirement for a separate row per consent event and per re-consent, and the Tier 1 escalation on any "procedure before consent" | Invented form design | High |
| Appendix C | IP reconciliation worksheet, including the "unaccounted must be 0" and "quarantined kits dispensed must be 0" controls | Invented form design | High |
| Appendix D | KRI threshold table | Reproduces the invented thresholds from §11.2 | Low |
| Appendix E | Escalation matrix | Reproduces the invented ladder from §13 | Med |
| Appendix F | Sample confirmation letter | Written as a **template with bracketed fields**, deliberately, to avoid dating a worked example after 15-DEC-2023 | High |
| Appendix G | Sample follow-up letter, dated **10-NOV-2023**, following the canonical IMV of **02-NOV-2023**, with responses due **01-DEC-2023** | The visit date is canon. The letter date sits within the invented 10-business-day issue window; the due date sits within the invented 15-business-day response window. All content is invented | Med |
| Appendix G | The three action items — visit windows (7 deviations, 64% of total), eDiary compliance (2 deviations), missed PK sample (1 deviation) | **Drawn directly from the canonical deviation composition.** The mapping of deviations to named participants is invented | High (composition) / Low (participant IDs) |
| Appendix G | Participant identifiers 1047-004 and 1047-011 | **Invented.** Format follows the canonical `SSSS-NNN` convention. 1047-004 and 1047-011 are assigned the eDiary deviations. The missed-PK-sample and SDV-coverage rows named 1047-007 and the range 1047-009 through 1047-014 until 29-JUL-2026; both named subjects the script works in January 2024 against visits SDV'd by 02-NOV-2023, so the identifiers were dropped and the prose carries the finding instead | Med |
| Appendix G | "Fourteen participants were open to review" and SDV completed for six of them through Week 12 | Invented detail, consistent with the canonical randomized count and the invented enrollment timeline | Med |
| Appendix G | Named staff in the letter (Raghunathan, Koss, Chao, Duarte, Oyelaran) and the action item owners assigned to them | **Canon** personnel and canon role assignments — Koss is canonically "primary for eDiary compliance monitoring and visit-window tracking," which is precisely why he owns action items 1 and 2 | High |
| Appendix G | The closing statement that nothing in the letter is a significant issue and the site remains banded Standard | Invented, and consistent with §11.5 and the canonical absence of major deviations | High |

---

## 13. Deliberate collision avoidance

Three points where canon and the plan's internal logic could have contradicted each other, and how
each was handled:

| Collision | Resolution |
|---|---|
| **ICF v4.0.1 was approved by Keystone IRB on 19-DEC-2023, four days after this plan is dated (15-DEC-2023).** The plan could not assert that the site-specific consent version was in force | §10.4 item 8 refers to the master ICF v4.0 and instructs the CRA to *confirm* the IRB approval date for the site-specific version before accepting re-consents on it. The plan makes the timing an instruction, never a claim |
| **The 14-MAR-2024 IMV is canon but is in the future relative to the plan date.** Listing it as complete would be internally impossible | §9.5 lists it as **Planned**, with the interval, the justification, and the resource allocation stated prospectively. The COV is listed as **Pending**, matching canon exactly |
| **The 19.0-week IMV 4 → IMV 5 interval exceeds any tight routine monitoring cadence.** A plan mandating 8–10 weeks throughout would put the sponsor's own canonical schedule in breach of its own plan | §9.4 defines a post-enrollment taper with a 20-week hard maximum, and §9.5 records the interval as a documented CTM-approved extension with an operational justification (timing the visit after the site's last Week 24 visit so all primary endpoint data can be verified in one pass). The canonical date is thereby explained rather than excused |

---

## 14. Cross-document consistency checks performed

| Item | Source | Status |
|---|---|---|
| CRO name and role | `STUDY_FACTS.md` §9 — Harborlight Clinical Research, Inc. (HCR) | Consistent |
| CRA, CTM, Medical Monitor, backup MM names and contacts | `STUDY_FACTS.md` §10 | Consistent, reproduced exactly |
| Site identity, address, PI, staff, delegations, SOPs, facilities | `RESEARCH_SITE.md` §1–§3, §7 | Consistent |
| Visit history and study conduct metrics | `RESEARCH_SITE.md` §5 | Consistent, reproduced exactly |
| Financial terms cited at close-out | `RESEARCH_SITE.md` §6 | Consistent |
| SoA visits, windows, day numbers, post-dose observation, draw order | `STUDY_FACTS.md` §5, §8 | Consistent |
| IP storage, excursion allowance, kit format, blinding, injection rules | `STUDY_FACTS.md` §4 | Consistent |
| Eligibility thresholds and washout rules | `STUDY_FACTS.md` §7 | Consistent, quoted exactly |
| Endpoints and the NRI/WOCF rescue convention | `STUDY_FACTS.md` §6 | Consistent |
| Safety event rates and AESI list | `STUDY_FACTS.md` §13 | Consistent, quoted exactly |
| 151 centers / 21 countries / 197 locations / 726 randomized | `STUDY_FACTS.md` §3 and registry record | Consistent |
| Protocol Amendment 3 (29-NOV-2023); IB Edition 6.0 (15-AUG-2023) | `STUDY_FACTS.md` §1 | Consistent |
| SRM version history cross-references (v3.0 rater blinding; v5.0 08-DEC-2023) | `trial_documents/study_reference_manual.md` | Consistent |
| Date, time, ID, temperature, and window conventions | `STUDY_FACTS.md` §11 | Consistent |
| Abbreviations | `STUDY_FACTS.md` §12 | Consistent |
