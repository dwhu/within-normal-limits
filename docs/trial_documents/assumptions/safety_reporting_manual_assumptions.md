> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions log — `safety_reporting_manual.md`

Every detail in `/docs/trial_documents/safety_reporting_manual.md` that is **not** drawn from
`STUDY_FACTS.md`, `RESEARCH_SITE.md`, or the ClinicalTrials.gov record for NCT05651711 is listed
below. Items sourced from the canon (all contacts, identifiers, dates, vendor names, personnel, the
SoA, and the §13 safety numbers) are not repeated here.

Applies also to `/docs/outline/safety_reporting_manual_outline.md`, which shares the same invented
substrate.

---

## 1. Document identity and control

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Cover page | Document number **20210143-SAF-MAN** | Sponsor manuals carry a controlled document number; `<protocol>-<function>-<type>` is a common Amgen-style convention. Record supplies none. | High |
| Cover page | Version **3.0**, effective **05-DEC-2023**, supersedes v2.0 | Specified by the assignment brief. Placed 6 days after Protocol Amendment 3 (29-NOV-2023), the realistic lag for a study-manual refresh triggered by an amendment. | High |
| Cover page | Safety operations delegated to **HCR Global Patient Safety** | STUDY_FACTS §9 assigns "safety intake" to Harborlight Clinical Research; "Global Patient Safety" is the conventional department name for that function. | High |
| Cover page | Filed in **Section 3** of the Investigator Site File | Arbitrary but plausible ISF section numbering. | Low |
| Version history | v1.0 07-OCT-2022; v1.1 19-JAN-2023; v2.0 22-MAY-2023; v3.0 05-DEC-2023, with the listed change summaries | v1.0 pinned to the canon's original protocol date (STUDY_FACTS §1). Intermediate versions and their content invented to make the version history read like a real controlled document with a plausible amendment history. | Med |
| Version history | AESI 5 was **added at v2.0** following blinded aggregate review | Explains why the AESI list has five entries and gives the document a history. Entirely invented. | Low |
| Version history | Retraining deadline **31-DEC-2023** | Invented; consistent with a 05-DEC-2023 effective date. | Med |
| §24 | Training documented on the site training log; CRA reviews timeliness at every monitoring visit; late reports trigger CAPA | Standard GCP practice; no source. | High |

## 2. Scales, conventions, and coding

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.1 | Sponsor uses a **two-point causality scale** (Related / Not related) | The brief offered two-point or five-point. Two-point chosen because it maps directly onto the 21 CFR 312.32(a) "reasonable possibility" standard and cannot be evaded by selecting a middle category; it is also Amgen's real-world convention for many programmes. Record specifies nothing. | Med |
| §8.2 | **"Not related" requires a stated alternative explanation** in mandatory field 9c, or the case is queried | Invented as a hard rule. Some sponsors enforce this; many only encourage it. Made mandatory here because it is the manual's most useful teaching device and generates good game material. | Low |
| §7.1 | **Three-point severity scale** (mild/moderate/severe) with activity-limitation anchors; **CTCAE explicitly not used** | Typical for dermatology trials with non-oncology endpoints. The specific wording of the three definitions is invented but follows the widely used DAIDS/industry phrasing. | Med |
| §6.2, Appendix E | **MedDRA version 26.1** | v26.1 was the version current in September 2023, so it is the plausible version in force on 05-DEC-2023. Record does not state a coding dictionary version. | Med |
| §6.2 | Site supplies verbatim terms only; coding performed centrally by HCR | Universal industry practice. | High |
| §6.3 | Five-part operational definition of "clinically significant" laboratory abnormality | Invented. The five triggers (symptoms / intervention / IP action / meaningful change from baseline / confirmed alert value) are a synthesis of common sponsor definitions. The 5-business-day PI review requirement is drawn from STUDY_FACTS §8. | Med |
| §9.4 | Non-serious AEs entered in EDC within **5 business days**; SAEs/AESIs within **1 business day** of transmission | Invented timelines. Common but not universal. | Med |
| §9.2 | The specific non-leading elicitation question and the instruction not to read a symptom checklist | Standard GCP training content; wording invented. | High |
| §11.3 | Email subject-line format `SAE INITIAL \| 20210143 \| Site 1047 \| ...` | Invented convention. Sponsors do impose subject-line formats; this one is fabricated. | Low |
| §11.4 | Safety case reference number format **`ROC-YYYY-NNNNNN`** | Invented. | Low |
| §11.4 | Automated acknowledgement within minutes; **case acknowledgement within one business day** | Invented service level. | Med |
| §12.1 | The **entire SAE Report Form field set** (items 1–18) | Invented, modelled on the CIOMS-I form and common sponsor SAE forms. Field content is realistic; the exact layout, numbering, and item wording are fabricated. | Med |
| §16.6 | The **entire Pregnancy Report Form field set** (items 1–13) | Invented, same basis. | Med |
| §13, Appendix F | An **AESI supplement** exists as a separate two-page controlled template (Appendix F) | Invented device to justify the "additional data collection" requirements per AESI without bloating the SAE form. | Low |
| §12.2 item 18, §11.3 | Redaction rules and the year-of-birth-not-date-of-birth convention | ICH E6(R3) requires participant identification by code; the specific redaction checklist is invented but standard. | High |

## 3. Timelines and clocks

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §3, §10.1 | **24 hours from site awareness** for SAEs and AESIs | Specified by the brief; also the near-universal sponsor implementation of "immediately" in 21 CFR 312.64(b) and the explicit standard in EU CTR Art. 41. Record does not state it. | High |
| §10.2 | Operational definition of "awareness" (the eight listed routes) | Invented list, synthesised from standard sponsor guidance. | High |
| §10.3 | Procedure when the PI is unreachable: transmit with causality marked "PENDING INVESTIGATOR ASSESSMENT," phone the intake line, follow up within 1 business day | Invented procedure. The underlying principle (never hold the report for the PI) is standard. | Med |
| §10.4 | Weekend/holiday procedure; intake email and fax accept submissions 24/7; on-call coordinator transmits from a secure remote session; printed stock of blank forms held on site | Invented operational detail. The Friday 15:00 PT close is canon (RESEARCH_SITE §1); the risk framing built on it is invented. | Med |
| §15.4 | **Reduced 24-hour trigger for AESI 2** (pyrexia/chills): 24-hour report only if ≥39.0 °C, >48 h, rigors needing medical attention, ED/admission/unscheduled visit, suspected infection, severe, or serious | Wholly invented. Necessary to reconcile "AESIs are reported on the SAE timeline" with a 10.3% incidence event that would otherwise generate ~56 expedited reports of self-limiting fever. Realistic sponsor solution; no source. | Low |
| §17.4, §17.5 | Product complaints reported to GlobalRx within **2 business days**; temperature excursions within 24 h | The 24-hour excursion clock is canon (STUDY_FACTS §4). The 2-business-day complaint window is invented. | Med |
| §20.4, §21.4 | **Keystone IRB: 5 working days** for SUSARs, unanticipated problems, participant deaths, risk-increasing deviations, and hazard-eliminating changes | Specified by the brief for SUSARs; extended by inference to the other categories for internal consistency. Central IRBs commonly use 5–10 working days. | Med |
| §22.2 | **Quarterly** reconciliation; listing returned annotated within **10 business days** | Cadence specified by the brief; the 10-business-day turnaround is invented. | Med |
| §23.2 | Follow-up within 24 h for seriousness change/death/life-threatening development; otherwise **5 business days** | Invented. | Med |
| §23.3 | Lost-to-follow-up closure requires **three documented attempts by two methods over ≥30 days** | Invented; a common sponsor standard. | Med |
| §16.5 | Neonatal follow-up at **8 weeks of age** | Invented. Sponsors use anywhere from birth to 12 months; 8 weeks is a common midpoint. | Med |
| §23.4 | Related SAEs reportable after the Week 36 EOS visit with **no end date** | Invented. Many protocols set a 30- or 90-day post-study window; open-ended for related SAEs is also common and is the more conservative choice. | Med |

## 4. AE/SAE scope decisions

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §1.2, §6 | AEs collected **from ICF signature** through the Week 36 EOS visit | The most common convention and the one that makes the §6 screen-failure and post-last-dose rows coherent. Record and STUDY_FACTS state neither. | Med |
| §6 | **Screen failures:** collect SAEs and any AE related to a protocol-mandated procedure; non-serious, non-procedure-related AEs not collected | Invented; standard industry convention. | Med |
| §6.1 | **The AD-worsening convention** — the five "report when" triggers and the two "do not report" exclusions | Invented. The requirement to have *some* convention is forced by the record: "dermatitis atopic" was reported in 19.1% of the rocatinlimab arm and 26.7% of placebo, so the study clearly did report AD worsening as an AE. The specific triggers are fabricated. | Med |
| §6.1 | Worsening requiring rescue generates **both** an AE record and a rescue therapy assessment entry, which must agree on dates | Invented linkage. The rescue therapy assessment and its NRI/WOCF consequences are canon (STUDY_FACTS §5, §6). | High |
| §5.7 | The five **protocol-defined exempt events** | Items 1, 2 and 5 are standard. Items 3 (screening abnormalities leading to screen failure) and 4 (efficacy results as such) are invented for this study. | Med |
| §6 | Injection-site reactions are **unsolicited** AEs, one per episode not per syringe | Invented. Some protocols solicit ISRs on a dedicated eCRF page; treating them as unsolicited is the simpler and equally common choice. The two-injection, rotating-site regimen is canon (STUDY_FACTS §4). | Med |
| §5.4.3 | The four hospitalisation exclusions | Standard ICH E2A-derived practice; wording invented. | High |
| §5.4.6 | The five AD-specific "other medically important event" examples | Invented, each constructed to be plausible for this population. | High |

## 5. AESI content (§13)

The **list** of five AESIs is already flagged ASSUMED in STUDY_FACTS §13. Everything below is
additional invention layered on that list.

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §13 preamble | AESIs reported on the SAE timeline **whether or not serious**, ticking item 6g | Specified by the brief; standard practice. | High |
| §13.1 | AESI 1 definition; **permanent discontinuation** of IP; collect tryptase, ADA sample, 5-minute vitals, photographs | Invented. Permanent discontinuation after anaphylaxis to a biologic is near-universal. | High |
| §13.2 | AESI 2 defined as pyrexia ≥38.0 °C and/or chills within 48 h of dosing, absent identified infection; **IP continues**; no routine premedication | Invented. The 48-hour window, the 38.0 °C threshold, the attenuation-with-later-doses pattern, and the premedication rule are all fabricated. The incidence figures (10.3% / 6.1% vs 1.1%) are canon. | Low |
| §13.3 | AESI 3 definition, incl. any infection requiring IV antimicrobials, zoster >1 dermatome or ophthalmic, eczema herpeticum, cellulitis needing systemic antibiotics, and reactivation of TB/HBV/HCV; **withhold** IP, permanent discontinuation for opportunistic/disseminated/second serious infection | Invented. Serology and QuantiFERON screening are canon (STUDY_FACTS §8), which makes reactivation a coherent inclusion. | Med |
| §13.4 | AESI 4 definition incl. NMSC and in-situ disease; **permanent discontinuation** except adequately treated BCC, cutaneous SCC in situ, and cervical CIS; report on histological confirmation or strong suspicion | Invented. | Med |
| §13.5 | AESI 5 definition; **erythroderma defined as ≥90% BSA**; withhold IP, permanent discontinuation for confirmed generalised exfoliative dermatitis or erythroderma | The ≥90% BSA figure is the conventional dermatological definition of erythroderma. The IP rules are invented. | Med |
| §13.1–13.5 | The "Additional data" rows for all five AESIs | Invented data sets, each constructed to be what a sponsor safety physician would actually want. | Med |

## 6. Anaphylaxis (§14)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §14.1 | **Sampson / NIAID-FAAN criteria** reproduced in three-criterion form | These are real published criteria, paraphrased. Their adoption *by this protocol* is invented. | High |
| §14.1 | The AD-population caveat (chronic pruritus may mask criterion 1; look for new, acute, generalised findings) | Invented clinical guidance, but medically sound and specific to this population. | High |
| §14.2 | The 11-step on-site response, incl. **IM epinephrine 0.3–0.5 mg of 1 mg/mL** into the anterolateral mid-thigh, repeat every 5–15 min, mandatory transfer after any epinephrine dose | Standard anaphylaxis management; its inclusion in this manual is invented. | High |
| §14.3 | **Site emergency-preparedness requirement**: two in-date adult epinephrine doses, oxygen, BVM, BP cuff, pulse oximeter, IV supplies and fluid, injectable H1 and corticosteroid, posted call procedure; monthly check logged by Priya Raghunathan; **a dosing visit must not proceed without in-date epinephrine** | Invented as a hard sponsor requirement. Realistic for an on-site-administered biologic. The named checker is drawn from RESEARCH_SITE §2. | Med |
| §14.5 | Unblinding after anaphylaxis is a *consideration*, not automatic; not indicated for acute management, may be indicated for subsequent allergy counselling | Invented reasoning, consistent with §19.2. | Med |

## 7. Pyrexia and chills (§15)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §15.1 | Onset 6–24 h (up to 48 h), 38–39 °C, self-limiting in 24–48 h, more common after doses 1 and 2, attenuating thereafter | Wholly invented clinical pattern. The record supplies only incidence, not timing, duration, or dose-relationship. Constructed to be consistent with a known cytokine-mediated first-dose phenomenon for T-cell-directed antibodies. | **Low** |
| §15.3 | **Paracetamol/acetaminophen 500–1000 mg q4–6h, max 3 g/24 h**, preferred; NSAIDs at investigator discretion; no routine premedication | Invented protocol guidance. The dosing figures are standard adult labelling. | Med |
| §15.5 | The seven-row **pyrexia vs infection** differentiation table | Invented; medically sound. | High |
| §15.2 | Site 1047 provides a digital thermometer and paper symptom card at Day 1 | Invented site practice. | Low |

## 8. Pregnancy (§16)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §16.2 | **Immediate and permanent** IP discontinuation on confirmed pregnancy | Standard for an investigational biologic with no reproductive safety data. | High |
| §16.3 | Partner pregnancies require the **partner's own written authorisation**; a separate Partner Pregnancy Consent/Authorisation form exists; male participant's IP is not discontinued | Standard practice; the named form is invented. | High |
| §16.4 | The seven outcomes requiring both a Pregnancy Report Form and an SAE Report Form; elective termination for non-medical reasons reported on the Pregnancy form only | Invented list, standard in substance. | Med |
| §16.2 | Positive urine β-hCG at a dosing visit → **do not dose**, confirm with serum | Follows from the canon SoA (predose urine pregnancy test at every dosing visit); the confirm-with-serum step is invented. | High |

## 9. Overdose, error, misuse, complaints (§17)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §17.1 | Overdose = **>2 PFS at a visit**, a dose **<21 days** after the previous Q4W dose, or **>7 total doses**; observe ≥60 min | Derived from the canon regimen (300 mg = 2 PFS; Q4W; 7 doses total; Week 2 loading dose at Day 15). The 21-day minimum interval and the 60-minute observation are invented. | Med |
| §17.2 | The medication-error examples, incl. injection into lesional AD skin, tattoos, or within 5 cm of the navel | Built directly on the canon injection-site rules (STUDY_FACTS §4). Their classification as medication errors is invented. | High |
| §17.2 | **Near misses** go to the deviation log, not to safety | Invented but standard. | High |
| §17.3 | IP is administered on site only and never dispensed to participants; any kit leaving with a participant is misuse | Follows from the canon (post-dose observation at every dosing visit, site administration by delegated staff). | High |
| §17.4 | Product complaints route to **GlobalRx Logistics +1 (800) 555-0171**, not to safety intake; a "Product Complaint Form" exists; retain and quarantine the physical unit | Contact is canon (STUDY_FACTS §9). Routing complaints through the depot rather than a dedicated sponsor quality line is invented and is a simplification. | Med |

## 10. Deaths and unblinding (§18–§19)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §18.1 | **Same-day telephone notification** in addition to the written report | Invented; standard. Consistent with the canon's designation of +1 (888) 555-0143 as the safety phone line. | High |
| §18.2 | Interim verbatim terms "death of unknown cause" / "sudden death" pending cause | Standard practice. | High |
| §18.3–18.4 | Autopsy request/forward rules; death certificate redaction list; the note that the certificate's stated cause is not the investigator's causality assessment | Invented but standard. | High |
| §19.2 | The unblinding test ("would knowing the assignment change **immediate** clinical management?") plus the valid/invalid reason lists | Invented. The lists are the manual's own teaching content. | High |
| §19.3 | Unblind via **Axion IRT**, helpdesk **+1 (800) 555-0164** as backup; only the PI or a delegated Sub-I may transact; medical monitor notified within 24 h | Contacts are canon (STUDY_FACTS §10). The restriction to PI/Sub-I and the 24-hour notification are invented. Aligns with Cascade SOP-024. | High |
| §19.4 | IP **permanently discontinued** after unblinding in nearly all cases; participant remains in safety follow-up; post-unblinding efficacy data handled per the SAP; logged as a protocol deviation | Invented. | Med |
| §19.5 | An outside treating physician can be given the assignment **without** unblinding the site team; **raters must never be unblinded**; rating transfers to another certified rater if the PI is unblinded | Invented. The three certified raters are canon (RESEARCH_SITE §2). This is the manual's most game-relevant operational rule. | Med |

## 11. SUSAR, IRB, reconciliation (§20–§22)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §20.1 | SUSAR notification contents: cover letter, CIOMS-I form or narrative, sponsor expectedness determination, required-action statement, periodic line listings | Invented but standard. | High |
| §20.3 | **PI signs and dates each SUSAR cover letter** to evidence review | Invented site/sponsor practice; a very common monitoring checkpoint. | High |
| §20.4 | Submit the sponsor's notification **as received**, unedited, with no site opinion added; Keystone accepts periodic line listings as one submission | Invented. | Med |
| §20.5 | Site receives the **DSUR annually** and submits it with continuing review | Standard; the DMC's quarterly/ad hoc cadence is canon (STUDY_FACTS §3). | High |
| §21.2 | The **three-part unanticipated problem test** | Paraphrased from OHRP guidance; real in substance. Its adoption by Keystone IRB is invented. | High |
| §21.3 | The three worked distinctions — fractured tibia (SAE, not a UP); stolen laptop (UP, not an SAE); exfoliative dermatitis (both). Participant **1047-011** used for the tibia example. | Invented illustrations. 1047-011 is within the canon range (14 randomized at Site 1047). | High |
| §22.1 | The safety database is the **"HCR Global Safety Database"** and does not interface with Veriscribe EDC | Invented name. The two-system architecture is universal. | Med |
| §22.3–22.4 | The nine confirmation points and the eight discrepancy types | Invented; drawn from common reconciliation practice. | High |

## 12. The worked example — participant 1047-006 (§12.3)

Everything in this subsection is invented except the site, personnel, contacts, visit schedule, and
the fact that cellulitis occurred twice as a serious event in the rocatinlimab arm (canon).

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §12.3 | Participant **1047-006**, male, born 1976, age 47, 88.4 kg, 179 cm | 1047-006 is within the canon range of 14 randomized at Site 1047. Demographics invented. | High |
| §12.3 | Consent **06-FEB-2023**; randomized **20-FEB-2023**; randomization number **205117** | Consistent with canon site history (first randomized 24-JAN-2023). Randomization number is 6-digit per STUDY_FACTS §11. | High |
| §12.3 | Week 12 dose on **15-MAY-2023** = Day 85; onset **22-MAY-2023** = Day 92 | Arithmetically derived from Day 1 = 20-FEB-2023 against the canon SoA. Verified. | High |
| §12.3 | Kit numbers **441907 / 441908** | 6-digit, within the canon range 100001–999999. Two kits at one visit is a simplification — the canon states one carton of 2 PFS = one dose, so a single kit number would be more strictly correct. Flagged as a minor internal inconsistency. | **Low** |
| §12.3 | Baseline EASI 27.4, vIGA-AD 4, BSA 34%, Worst Pruritus NRS 8; Week 12 EASI 8.1 | All above the canon eligibility thresholds (EASI ≥16, vIGA-AD ≥3, BSA ≥10%, NRS ≥4). Values invented. | High |
| §12.3 | **Willamette Regional Medical Center, Portland, OR** | Fictional hospital, invented to avoid naming a real facility. | High |
| §12.3 | Clinical course: PCP visit 23-MAY, cephalexin, ED presentation and admission 24-MAY, IV cefazolin, discharge 28-MAY, resolved 04-JUN | Invented but clinically routine for MSSA cellulitis. | High |
| §12.3 | Vitals, WBC 14.2, neutrophils 11.6, CRP 78, wound swab MSSA, blood cultures negative, ultrasound findings, reference ranges | All invented; internally consistent. | High |
| §12.3 | Awareness **25-MAY-2023 08:40 PT** via spouse; PI call-back 11:15 PT; PI–hospitalist call 11:40 PT; signature 13:55 PT; email 14:15 PT; fax 14:22 PT | Invented timeline, constructed to demonstrate a compliant 5 h 35 min turnaround. | High |
| §12.3 | Case reference **ROC-2023-000412**, acknowledged 26-MAY-2023 09:12 PT | Invented, per the §11.4 format. | High |
| §12.3 | Causality **Related**, with the stated reasoning | Deliberate teaching choice: a genuine alternative explanation (excoriated AD skin, two prior impetiginised episodes) exists and is *insufficient* to permit "Not related," because the standard is reasonable possibility. This is the example's whole point. | High |
| §12.3 | Concomitant medications: lisinopril, cetirizine, ceramide emollient | Invented. Cetirizine for pruritus is not a prohibited medication under the canon exclusion list. | High |
| §12.3 | Follow-up chain #1 (30-MAY), #2 (06-JUN), #3 final (13-JUN); Week 16 dose given 12-JUN-2023 within the ±3 d window (Day 113 = 12-JUN-2023) | Arithmetically verified against the canon SoA. Medical monitor approval on 05-JUN-2023 is invented. | High |

## 13. Site-specific operational detail

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §4 | The responsibility matrix, incl. the explicit statement that **Alonzo Vega, FNP-C is not delegated causality** | Directly restates RESEARCH_SITE §2, which lists causality assessment among his non-delegated tasks. Its reproduction here is invented, but faithful. | High |
| §4, §20.3, §21 | **Sam Oyelaran owns all IRB submissions and the safety correspondence file** | Follows RESEARCH_SITE §2 (regulatory coordinator maintains the ISF and IRB submissions). The safety correspondence file is invented. | High |
| §10.4 | Site 1047 maintains printed blank SAE forms in the research office and a scanned copy in the Veriscribe eISF | Invented; the eISF is canon (RESEARCH_SITE §3). | Med |
| §14.3 | Emergency trolley checked monthly by Priya Raghunathan, logged | Invented. | Med |
| §15.2 | Digital thermometer and symptom card issued at Day 1 | Invented. | Low |
| Throughout | References to Cascade **SOP-004, SOP-009, SOP-012, SOP-024, SOP-027** | All are real entries in RESEARCH_SITE §7; the specific cross-references are invented but consistent with their titles. | High |
| §11.1 step 10 | Notifying the CRA is a courtesy, not a reporting route | Invented but standard and worth stating. | High |

## 14. Known internal tensions and caveats

| Item | Note |
|---|---|
| **Two kit numbers at one visit (§12.3)** | STUDY_FACTS §4 states "carton of 2 PFS, one carton = one dose," implying **one** kit number per dose. The worked example shows two. If strict consistency matters, replace `441907 / 441908` with a single kit number. Flagged rather than silently changed because form item 8c is written as `Kit number(s)` and other documents in the corpus may adopt either convention. |
| **Word count** | The document runs to roughly **16,500 words**, well above the 5,000–7,000 target in the brief. The overage is driven by the mandatory content list — two full blank forms, a fully worked SAE case with its follow-up chain, five AESI profiles at seven attributes each, and five appendices. Trimming to target would require dropping required content. |
| **AESI 2 reduced trigger (§15.4)** | This is the largest single invention in the document and the one most likely to be contradicted by any other corpus document that states "all AESIs are reported within 24 hours" without qualification. If another document takes the unqualified position, this section should be reconciled to it. |
| **Post-study reporting window (§23.4)** | Stated as open-ended for related SAEs. If the ICF or protocol summary in this corpus states a finite window (e.g. 30 or 90 days), that document governs and this section should be aligned. |
| **EU CTR content** | Included for vocabulary and global consistency only. Site 1047 is in the United States and is not directly bound by Regulation (EU) 536/2014. The manual says so. |
| **Real-world use** | Every clinical management instruction in this document — epinephrine dosing, antipyretic dosing, antimicrobial choices, the Sampson criteria — is reproduced for verisimilitude in a game asset. It must not be used to guide actual care. |
