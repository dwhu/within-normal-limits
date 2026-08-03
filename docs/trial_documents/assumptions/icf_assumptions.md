> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions Log — `icf.md`

**Document covered:** `/Users/dave/code/icf-please/docs/trial_documents/icf.md`
**Artifact:** Informed Consent Form and HIPAA Authorization, Version 4.0.1, dated 29-NOV-2023, Keystone IRB-approved 19-DEC-2023, Site 1047.
**Companion outline:** `/Users/dave/code/icf-please/docs/outline/icf_outline.md`

Everything in the ICF that is **not** derivable from `STUDY_FACTS.md`, `RESEARCH_SITE.md`, or the ClinicalTrials.gov record for NCT05651711 is listed below.

Items marked **[canon]** in the Rationale column are *not* assumptions — they appear here only where a reader might mistake a canon-derived figure for an invention.

---

## 1. Blood volume — the calculation

The registry record and `STUDY_FACTS.md` §5/§8 specify **which** samples are drawn at each visit but not **how much**. Standard adult collection-tube volumes were assumed and summed.

**Assumed per-panel volumes:**

| Panel | Assumed volume | Basis |
|---|---|---|
| Chemistry | 5.0 mL (serum separator) | Standard SST |
| Hematology | 4.0 mL (EDTA) | Standard CBC tube |
| Urinalysis | — | No blood |
| Serology (HBsAg, anti-HBc, anti-HCV, HIV Ag/Ab) | 10.0 mL | Two SSTs, multiple assays |
| QuantiFERON-TB Gold Plus | 4.0 mL | 4 × 1 mL QFT tubes |
| TSH / free T4 | 3.5 mL | One SST |
| Serum pregnancy (β-hCG) | 3.5 mL | One SST |
| PK (serum rocatinlimab) | 5.0 mL | One SST, predose trough |
| ADA (+ neutralizing reflex) | 5.0 mL | One SST |
| Biomarker (TARC/CCL17, total IgE, eosinophils) | 8.5 mL | Serum + EDTA aliquots |
| Optional genomic (whole-blood DNA) | 10.0 mL | Two EDTA tubes, one draw at Day 1 |

**Resulting totals, mapped to the canon SoA:**

| Visit | Panels drawn | Volume | Stated in ICF as |
|---|---|---|---|
| Screening | Chem, heme, serology, QFT, TSH, serum hCG | 30.0 mL | ~2 tbsp |
| Day 1 | Chem, heme, PK, ADA, biomarker | 27.5 mL | ~2 tbsp |
| Week 2 | Chem, heme, PK | 14.0 mL | ~1 tbsp |
| Week 4 | Chem, heme, PK, ADA, biomarker | 27.5 mL | ~2 tbsp |
| Week 8 | Chem, heme | 9.0 mL | ~½ tbsp |
| Week 12 | Chem, heme, PK, ADA, biomarker, TSH | 31.0 mL | ~2 tbsp |
| Week 16 | Chem, heme, PK | 14.0 mL | ~1 tbsp |
| Week 20 | Chem, heme | 9.0 mL | ~½ tbsp |
| Week 24 | Chem, heme, PK, ADA, biomarker, TSH | 31.0 mL | ~2 tbsp |
| Week 28 | — | 0 | None |
| Week 32 | — | 0 | None |
| Week 36 | Chem, heme, PK, ADA, QFT, serum hCG | 26.5 mL | ~2 tbsp |
| **Total (main study)** | | **219.5 mL** | **~15 tbsp (~220 mL)** |
| Optional genomic, Day 1 | | +10.0 mL | ~2 tsp |

**Conversions used:** 1 US tablespoon = 14.79 mL; 1 US teaspoon = 4.93 mL. A standard whole-blood donation = 450–500 mL, hence the ICF's "roughly half what is taken in a single blood donation."

---

## 2. Assumptions table

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §4.4 visit table; §4.6 | Per-visit and total blood volumes (~31 mL max, ~220 mL total, ~15 tbsp) | Calculated in §1 above from standard tube volumes against the canon SoA. Neither the registry nor `STUDY_FACTS.md` gives volumes. Total is plausible for a 24-week Phase 3 biologic study with PK/ADA/biomarker sampling. | **Med** |
| §4.6 | Blood-donation comparison ("roughly half a single donation") | Comprehension aid. Real ICFs commonly use this analogy; the arithmetic checks (220 vs 450–500 mL). | High |
| §4.4 visit table | Visit durations (Screening 2–3 h; Day 1 3–4 h; dosing visits 1.5–3 h; W28/W32 ~1 h; W36 ~2 h) | Derived from the canon assessment list plus the canon post-dose observation times (60/60/30 min). Day 1 is longest because it stacks eligibility review, full questionnaire battery, randomization, dosing, and 60-minute observation. Not stated anywhere in canon. | **Med** |
| §4.4 | Early-morning appointment slots from 06:45 | `RESEARCH_SITE.md` §1 states research visits by appointment with early slots from 06:45. **[canon]** | High |
| §4.1 | Re-screening requires a new consent form | Standard GCP practice: a re-screen generates a new screening number, so consent must be re-executed. Canon permits one re-screen but is silent on consent. | High |
| §4.5 | Skin scoring takes 15–20 min and requires undressing to underwear in a private, well-lit room | Operationally realistic for a full-body EASI/BSA assessment. `RESEARCH_SITE.md` §3 confirms one exam room has dermatology-grade standardized lighting. Duration invented. | **Med** |
| §4.5 | Questionnaire battery takes 15–20 min | Estimated from the canon instrument list (SCORAD/Itch VAS, FASS, HASS, DLQI, POEM, HADS). Not in canon. | **Med** |
| §5 | eDiary prompts in the **evening**, takes about **one minute** | The canon NRS items ask about "the past 24 hours" and "last night's sleep," which implies an evening entry. Timing and duration invented. | **Med** |
| §5.1 | **"At least 4 of 7 days"** makes a week's data usable | A weekly-average NRS endpoint needs a minimum entry count; 4/7 is a common convention in AD trials. Invented — canon gives no threshold. | **Med** |
| §5.1 | **At least 4 entries in the 7 days before Day 1** required to randomize | Baseline weekly averages must be computable before randomization. Invented; consistent with the canon note that eDiary runs "from consent." | **Med** |
| §5.1 | The device **locks each day's entry after a set window**; back-filling is not possible | Standard ePRO design and the reason ePRO exists rather than paper diaries. Not stated in canon. | High |
| §5.1 | Participants must not view past scores before assessment; the device prevents it | Canon §5 ordering rule states raters assess "before the participant sees their eDiary scores." The device-level enforcement is inferred. | **Med** |
| §5.1 | Lost/broken device replaced via the research line +1 (503) 555-0124 | Number is **[canon]**; the replacement process is invented. | High |
| §6 | Injection site "at least 2 inches from your navel" | Plain-language rendering of the canon "5 cm radius around the navel" (5 cm ≈ 1.97 in). **[canon, unit-converted]** | High |
| §6 | 30-minute room-temperature equilibration before injection, described to the participant as something not to let anyone rush | Equilibration time is **[canon]** §4. Framing it as a participant-facing right is a drafting choice. | High |
| §7.1 | Fever guidance threshold **38.0 °C / 100.4 °F**, "more than 48 hours," and the stiff-neck/confusion/rash red flags | Standard clinical fever threshold and standard red flags. Canon gives the pyrexia rate but no clinical guidance. | High |
| §7.3 | Anaphylaxis symptom list and the "call 911, do not drive yourself" instruction | Standard anaphylaxis presentation. Canon confirms one anaphylactic reaction among 544 rocatinlimab recipients. Symptom list invented (clinically standard). | High |
| §7.3 | **Study wallet card** carried by the participant | Universal practice in biologic trials; not mentioned in canon. Implies a matching site-supplied item that other corpus documents may need. | **Med** |
| §7.3 | "You would not receive any more study injections after a severe allergic reaction" | Standard permanent-discontinuation rule for anaphylaxis to an investigational biologic. Not stated in canon. | High |
| §7.3 | Cellulitis and eczema herpeticum symptom descriptions | Cellulitis ×2 is **[canon]** (rocatinlimab SAE list); eczema herpeticum appears in the **placebo** SAE list in canon §13 and in the canon AESI list, so it is mentioned as an eczema-related risk rather than attributed to the drug. Symptom descriptions invented (clinically standard). | High |
| §7.4 | Blood-draw and ECG risk descriptions, "we will lay you down for it" | Standard, universal. Not in canon. | High |
| §7.7 | Contraception: "highly effective method," documented choice, urine test at each dosing visit | Testing schedule is **[canon]** §8. "Highly effective method" and the documentation step follow CTFG guidance; the specific acceptable-method list is deliberately **not** enumerated in the ICF and is deferred to the discussion. | High |
| §7.7 | Pregnancy follow-up requires separate permission and may be declined | Standard practice; a pregnancy-outcome follow-up form would normally be a separate consent. Not in canon. | High |
| §8 | Rescue treatment does not end participation; the participant keeps visits, eDiary, and payments | Follows from canon §5 (rescue therapy assessment continues at every visit through Week 36) and canon §6 (NRI/WOCF handling rather than discontinuation). Reasoning made explicit for the participant. | High |
| §8 | Plain-language explanation of NRI/WOCF ("counted as not improved," "earlier worse scores used") | Direct translation of the **[canon]** §6 missing-data conventions into 8th-grade language. Framing ("this is a rule about statistics, not a reason to go without treatment") is a drafting choice and is the deliberate empathy beat of the section. | High |
| §9 | "Some people had substantial improvement" — no efficacy percentage given | Deliberate omission. The registry record's efficacy outcomes are not in `STUDY_FACTS.md` and an ICF dated 29-NOV-2023 predates unblinded efficacy results anyway. Quoting a response rate would be an anachronism and would encourage therapeutic misconception. | High |
| §10 | Named alternatives: dupilumab (Dupixent), tralokinumab (Adbry), upadacitinib (Rinvoq), abrocitinib (Cibinqo), crisaborole, ruxolitinib cream, tacrolimus, pimecrolimus, phototherapy, cyclosporine, methotrexate | All were FDA-approved (or established off-label) for moderate-to-severe AD in adults as of 29-NOV-2023. Naming real approved products is required for 21 CFR 50.25(a)(4) to be meaningful; a generic "other treatments exist" would fail the element. Not listed in canon. | High |
| §10 | The explicit nudge: "if you have never tried an approved biologic or JAK inhibitor, ask whether that would be a better first step" | Drafting choice. Not required by regulation. Included because it is what an honest alternatives disclosure looks like, and it is a load-bearing empathy moment for the game. | **Med** |
| §11 | **$125 per completed visit; $1,500 for all 12** | Per-visit figure is **[canon]** (`RESEARCH_SITE.md` §6). The $1,500 total is arithmetic (125 × 12). | High |
| §11 | Payment for unscheduled and early-termination visits at $125 each | Not in canon. Reasonable and common. | **Med** |
| §11 | Partial visits are paid | Not in canon. Common ethical practice; included deliberately so the payment section is not coercive. | **Med** |
| §11 | Payment by **reloadable study payment card issued at Day 1**, loaded within **30 days**, check available on request | Mechanism entirely invented. Canon says only that the stipend is "paid by the site and invoiced as a pass-through." Card-based payment is the dominant US site practice. | **Med** |
| §11 | Parking **validated in the building garage**, free at every visit | Canon says "parking/travel reimbursement." The garage and validation mechanism are invented; the site is a Suite 300 office at 4820 SW Barbur Blvd, so a garage is plausible. | **Med** |
| §11 | Mileage reimbursement offered if the participant lives **more than 25 miles** away | Threshold invented. Canon says only "travel." | **Low** |
| §11 | Tax: **1099-MISC** at **$600**, W-9 collected first, "five visits reaches $625" | The $600 threshold is the actual IRS information-reporting threshold for Form 1099-MISC. The arithmetic (5 × $125 = $625) follows. The W-9 step is standard site practice. Not in canon. | High |
| §11 | Warning that the payment is taxable income and may affect income-tested benefits | Not required by regulation and frequently omitted from real ICFs. Included deliberately — it is a real harm participants encounter, and a good game hook. | **Med** |
| §12 | Injury compensation: **Meridian pays reasonable and necessary medical costs of injury directly caused by the drug or a required procedure**, secondary to insurance; **no payment for lost wages, time off work, childcare, or pain and suffering**; **no waiver of legal rights**; no release for negligence | Entirely invented. Neither the registry record nor `STUDY_FACTS.md` contains an injury-compensation provision. The wording follows the standard US industry-sponsor formulation: medical costs only, secondary payer, explicit exclusion of consequential loss, explicit non-waiver. Would in reality be dictated by the Clinical Trial Agreement — **the CTA document in this corpus must not contradict this.** | **Med** |
| §12 | "Meridian may reimburse co-pays and deductibles if the injury is study-related — ask us, do not just pay it" | Invented practical guidance consistent with the compensation clause above. | **Med** |
| §13.1 | Withdrawal by phone at +1 (503) 555-0124, in person, or in writing | Number is **[canon]**; the multi-channel option is a drafting choice. | High |
| §13.1 | Offer of telephone follow-up at the timepoints of remaining visits, declinable | Standard practice for participants who withdraw from treatment but not from follow-up. Not in canon. | High |
| §13.2 | Data already collected are retained and cannot be removed; unused stored samples destroyed on written request | Reflects FDA's position on data retention after withdrawal (21 CFR 312 and associated guidance). Not stated in canon. | High |
| §13.3 | Reasons for investigator/sponsor withdrawal, including sustained eDiary non-compliance | Safety, pregnancy, prohibited medication, and loss of eligibility follow from canon eligibility and exclusion rules. Withdrawal for eDiary non-compliance is invented — canon logs 2 eDiary compliance deviations at this site but does not tie them to withdrawal. | **Med** |
| §13.3 | DMC reviews safety "four times a year" | Plain-language rendering of the **[canon]** "quarterly plus ad hoc." | High |
| §14 | Participant number format 1047-001 | **[canon]** §11 convention. | High |
| §14 | Recipient list (Meridian, Harborlight, Meridian, Axion, Veriscribe, DayLog, Keystone, FDA, foreign regulators, DMC) | All **[canon]** from `STUDY_FACTS.md` §9. Naming the technology vendors to the participant is a drafting choice; many real ICFs would not. | High |
| §14 | Cross-border transfer warning | Follows from canon (21 countries, EU/APAC central lab hubs). Wording invented. | High |
| §14 | **ClinicalTrials.gov statement reproduced verbatim** | Mandated wording under 21 CFR 50.25(c) / 42 CFR 11.32(b)(2)(iii). Reproduced exactly as supplied, including "Web site" as two words and the capitalisation of ClinicalTrials.gov. **Not an assumption; must not be edited.** | High |
| §15.1 | Inclusion of **"photographs of your skin, if any are taken (we will ask you separately first)"** | The canon SoA contains **no photography**. Included because clinical photography is common in dermatology trials and because a HIPAA authorization must cover it if it ever happens. Flagged as a hedge, with a separate-permission caveat so it does not contradict the SoA. | **Low** |
| §15.5 | **"This authorization does not expire"** | 45 CFR 164.508(c)(1)(v) permits "none" as the expiration for research authorizations. Choosing no expiry (rather than "end of the study") is a deliberate drafting decision so that long-tail regulatory inspection remains authorized. Not in canon. | High |
| §15.6 | Revocation must be **in writing**, addressed to Dr. Okonkwo at the site address, or faxed to **+1 (503) 555-0122** | Address and fax are **[canon]** (`RESEARCH_SITE.md` §1 — secure research fax). The written-revocation requirement is from 164.508(c)(2)(i). | High |
| §15.6 | Revoking the authorization results in withdrawal from the study | Follows from the study being unable to proceed without PHI disclosure. Not in canon. | High |
| §15.7 | Clinical care is not conditioned on the authorization; study participation is | 45 CFR 164.508(b)(4)(i). Stated explicitly because it is the element most often mangled. | High |
| §16.1 | Optional DNA sample of **~10 mL (2 teaspoons)**, drawn once at Day 1 with no extra needle stick | Timing and the separate-consent requirement are **[canon]** §5/§8. Volume invented (see §1). | **Med** |
| §16.1 | Explicit statement that **no genomic results are returned** and none enter the medical record | Standard for exploratory pharmacogenomics; also the participant-facing form of the 45 CFR 46.116(c)(7) whole-genome-sequencing element. Not in canon. | High |
| §16.1 / §16.2 | Samples are **coded**, the **site holds the key**, and **Meridian does not** | Standard sponsor-blinding of identity. Not stated in canon. | High |
| §16.1 / §16.2 | Samples destroyed no later than **20 years** after the end of the study | Retention period entirely invented. Not in canon. Chosen to exceed the typical 15-year ICH essential-document retention while remaining finite (an indefinite period would draw an IRB deficiency). | **Low** |
| §16.1 | GINA notice, including the **explicit list of what GINA does not protect** (life, disability, and long-term care insurance; employers under 15 employees; military/VHA/IHS) | GINA (Pub. L. 110-233) is real law and these limits are accurate. Including the "does not protect" half is a drafting decision — omitting it is the common failure mode. Not in canon. | High |
| §16.1 / §16.2 | Commercial-value / no-profit-sharing statement | 45 CFR 46.116(c)(7)–(8) style disclosure. Not in canon. | High |
| §16.2 | Scope of future research limited to **atopic dermatitis and related allergic/immune conditions**; samples **not sold**; ethics review required before any future study | Scope, the no-sale promise, and the ethics-review requirement are invented. Deliberately narrower than a true broad-consent biobank, and the phrase "broad consent" is avoided. | **Med** |
| §16 | Choice recorded by **initials in YES/NO boxes** plus a **separate signature** for the whole section | Drafting choice, following 45 CFR 164.508(b)(3)(iii) (conditioned vs. unconditioned authorizations must be differentiated). Two initials boxes + one signature is one of several valid layouts. | High |
| §17 | Priya Raghunathan named as the day-to-day contact at extension 212 | **[canon]** `RESEARCH_SITE.md` §2. | High |
| §17 | Offer of a **free interpreter** and of the form in the participant's language | 21 CFR 50.20 requires understandable language; the free-of-cost offer and the reading-aloud-with-witness offer are drafting choices. Not in canon. | High |
| Header / p.1 | **IRB approval stamp block**, showing approval 19-DEC-2023 and expiry 19-DEC-2024 | Approval date is **[canon]** (`RESEARCH_SITE.md` §4). The expiry date is derived from the canon "continuing review next due 19-DEC-2024." The stamp's visual format is invented. | High |
| Throughout | Footer `Protocol 20210143 · ICF v4.0.1 · 29-NOV-2023 · Site 1047 · Page __ of __` | Format specified by the assignment. Page numbering (1–20) and the placement of page breaks are invented and are an artefact of rendering a paper form as Markdown. | High |
| §2 | "**About 700** adults are planned" rather than the actual 726 | Deliberate. The ICF is dated 29-NOV-2023, during enrollment; the actual figure would not have been knowable. Stating 726 would be an anachronism. | High |
| §2 | "Up to **14 people** at this clinic" | `RESEARCH_SITE.md` §6 gives a **contracted target of 12** and an **actual** of 14. The assignment specifies 14, so it is presented as the site's approved enrollment ceiling. Slightly forward-looking for a form dated 29-NOV-2023; retained for consistency with the assignment. | **Med** |
| §2 | "About **151 centers** in **21 countries**" | **[canon]** §3. The registry lists 197 locations; 151 activated centers is the canon figure and the participant-facing one. | High |
| Throughout | Duration described as "about **9 months** of study visits, plus up to a month of screening" | Day 1 to Week 36 is 253 days ≈ 8.3 months; the assignment specifies "about 9 months, 12 visits." Rounded up, which is the conservative direction for a consent disclosure. Canon total duration is ~40 weeks including screening. | High |
| §18 | Signature block captures **date *and* time** on every signature | Drafting choice, not a regulatory requirement. Included because same-day consent-then-screening makes time the only evidence that consent preceded the first procedure — and because it is the mechanic the game's inspection scenes can hinge on. | High |
| §18.1 | Instruction that **staff must not write the date or time** for the participant | Standard ALCOA+ / GCP expectation. Not in canon. | High |
| §18.3 | Impartial-witness attestation wording | Modelled on ICH E6 §4.8.9 and 21 CFR 50.27(b)(2). Wording invented. | High |
| §18.4 | Warning that the consenter's signature must be dated **on or after** the participant's | Drafting choice. Directly targets one of the most common real-world consent findings. | High |
| §18.5 | **Investigator countersignature** required | Required by **[canon]** `RESEARCH_SITE.md` §2 (Priya Raghunathan is delegated the consent process "PI countersigns") and SOP-001. | High |
| §18.6 | Copy-receipt acknowledgement with participant initials | 21 CFR 50.27(a) and 45 CFR 164.508(c)(4). The initials-plus-date layout is a drafting choice. | High |
| p.19 | "Version control — check before you sign" box telling the participant to verify the version, date, and page count | Entirely invented and unusual in a real ICF. Included on purpose: it hands the participant the version-control check that sites most often fail, which is a core theme of the corpus. | **Med** |
| p.20 | "**For site use only**" page (consent start/end times, first-procedure time, re-consent, interpreter, copy given, filing) | Entirely invented. Real ICFs often have a site cover sheet or a separate consent note; folding it into the form is a design decision that makes the document self-auditing and gives the game a surface to inspect. | **Med** |
| Throughout | Reading level, second person, natural frequencies ("about 1 in 10") alongside percentages, tablespoon/teaspoon units | Drafting method, targeted at 8th grade per the assignment. All percentages are the exact canon §13 figures; only their presentation is added. | High |
| Not stated | **IND 145,882** is deliberately omitted from the participant text | Canon carries it, but an IND number means nothing to a participant and appears in no real ICF. Omission is intentional, not an oversight. | High |
| Not stated | The EU CT number, GDPR language, and EU indemnity provisions are deliberately omitted | This is the **US site-specific** ICF. Importing EU CTR/GDPR content would promise rights the US sponsor has not agreed to. See `icf_outline.md` §4.1. | High |

---

## 3. Consistency notes for other documents in the corpus

Facts invented here that other documents must match, or must be checked against:

| Fact | Value asserted in `icf.md` | Documents that must agree |
|---|---|---|
| Injury compensation | Sponsor pays reasonable and necessary medical costs of study-caused injury, secondary to insurance; no lost wages or other compensation; no waiver of rights | **Clinical Trial Agreement**, site budget, protocol §on subject compensation |
| Participant stipend | $125 per completed visit, all visit types; card payment within 30 days; 1099-MISC over $600 | **Site budget**, CTA pass-through schedule |
| Total blood volume | ~220 mL over the study, max ~31 mL per visit | **Protocol**, lab manual, SIV deck |
| Optional genomic sample | 10 mL, once, Day 1 only, separate consent | **Protocol**, lab manual |
| Sample retention | Destroyed no later than 20 years after end of study | **Protocol**, lab manual |
| eDiary compliance | ≥4 of 7 days for a usable week; ≥4 entries in the 7 days before Day 1 to randomize | **Protocol**, ePRO manual, monitoring plan |
| Study wallet card | Issued to participants, lists the drug name and the 24-hour number | Site startup checklist, SIV deck |
| Post-dose observation | 60 min (Day 1, Week 2), 30 min (all later dosing visits) | **[canon]** — protocol, pharmacy manual |
| ICF version / IRB dates | v4.0.1, 29-NOV-2023, approved 19-DEC-2023, expires 19-DEC-2024 | **[canon]** — regulatory binder index, IRB correspondence, monitoring reports |
