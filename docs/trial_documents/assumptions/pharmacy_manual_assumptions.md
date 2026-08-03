> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions Log — `pharmacy_manual.md`

**Document covered:** `/Users/dave/code/icf-please/docs/trial_documents/pharmacy_manual.md`
(Pharmacy Manual, Version 4.0, 01-DEC-2023)
**Companion outline:** `/Users/dave/code/icf-please/docs/outline/pharmacy_manual_outline.md`

Everything traceable to `STUDY_FACTS.md` or `RESEARCH_SITE.md` is **not** listed here — that is canon.
Everything below is invented by the author of this document because the canon and the
ClinicalTrials.gov record are silent on it. Confidence reflects how likely the invented detail is to
match real-world practice for a Phase 3 SC biologic prefilled-syringe study, not how likely it is to
match anything Meridian actually did.

---

## 1. Document identity, control, and ownership

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Cover block | Document owner is "Meridian Global Clinical Supply Chain"; operational contact is HCR | Canon names Meridian as sponsor and HCR as CRO but assigns no owner to a pharmacy manual; clinical supply is the conventional owner | High |
| Cover block | Manual is a sponsor-controlled, study-level document distributed to all sites, used at Site 1047 | Standard industry structure; keeps the document reusable across the 151 activated centers in canon | High |
| §1 Version history | v1.0 15-OCT-2022; v2.0 20-MAR-2023; v3.0 12-JUL-2023; v4.0 01-DEC-2023 (v4.0 date given in the brief) | v1.0 precedes first participant first visit (14-DEC-2022) and site activation (06-JAN-2023); intermediate versions spaced plausibly across enrollment | Med |
| §1 Version history | The v2.0 change was driven by "a cross-site kit-assignment error"; v3.0 by excursion-tracking confusion | Invented change drivers give the version history a narrative and seed gameplay hooks; no such events exist in the record | Low |
| §1 | Read-and-acknowledge training required per re-issue, filed in the ISF, blocking IP tasks until on file | Standard GCP training control; consistent with RESEARCH_SITE SOP-021 | High |
| §2.3 | Precedence order protocol > IP Handling Manual > this manual > stricter site SOPs | Conventional document hierarchy; makes the scope boundary enforceable | High |
| §2.4 | Explicit "must" / "should" convention | Common in sponsor manuals; needed so §14 deviations are unambiguous | High |

## 2. Contacts and vendors

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §4 Contacts | Sponsor clinical supply mailbox `clinicalsupply.20210143@meridianbio-sim.example`, phone +1 (510) 555-0150 | Canon gives no clinical-supply contact; 510 is the Emeryville area code, matching the sponsor address in canon; fictional 555 number per §11 conventions | Med |
| §4 Contacts | GlobalRx Logistics site-services mailbox `siteservices@globalrxlogistics-sim.example` | Canon gives GlobalRx a phone number only; an email is needed for the 24-hour excursion notification | High |
| §4 Contacts | TempTrak support reached "via site facilities, +1 (503) 555-0121" | RESEARCH_SITE names TempTrak but gives no vendor contact; routing through the site main line is realistic for a private practice | Med |
| §4 | "Escalation rule of thumb" (kit → GlobalRx/CRA; participant → PI/MM; temperature → quarantine then sponsor supply) | Invented mnemonic; no canon source | High |

## 3. Product presentation and appearance

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5.1 | Formulation is a sterile, preservative-free aqueous solution in an acetate/sucrose/polysorbate-80 buffer | Typical excipient set for a subcutaneous IgG1 mAb at 150 mg/mL; the record and canon give no formulation | Med |
| §5.1 | Syringe hardware: 1 mL long glass barrel, staked 27-gauge ½-inch needle, rigid needle shield, passive spring needle guard | Standard PFS configuration for 1.0 mL SC biologics; needed because the brief requires needle-safety-device handling instructions | High |
| §5.1 | Placebo is the identical buffer without active | Canon says "matching placebo — identical PFS, identical carton, identical volume"; buffer-only placebo is the necessary corollary | High |
| §5.2 | Acceptable appearance = clear to slightly opalescent, colourless to pale yellow, essentially free of visible particulates | Given in the brief; consistent with mAb labelling convention | High |
| §5.2 | The specific unacceptable-appearance list (turbid/milky; brown, orange, pink, green; fibres/glass/metal; flocculate; freeze-thaw haze; foaming; leakage/cracks/displaced plunger) | Invented but conventional visual-inspection criteria for a protein PFS | Med |
| §5.2, §12.4 step 2 | Do not expel the air bubble; the syringe is overfilled to deliver the labelled volume | Standard PFS instruction; canon is silent | High |
| §5.5 | Carton approximately 13 × 7 × 4 cm, two sealed clear blisters with moulded trays, folded IFU leaflet, tamper-evident seals at both ends | Dimensions and contents wholly invented; needed so the receipt inspection has something concrete to inspect | Low |
| §5.5 | Kits ship in an insulated shipper with coolant packs and at least one electronic data logger | Standard 2–8 °C clinical shipping; canon silent | High |
| §5.5 | Cartons are not opened at receipt; blisters are first opened at the point of administration | Preserves tamper evidence and blinding; conventional | High |

## 4. Labelling

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5.3 | The label carries the Annex-VI-style content set plus the 21 CFR 312.6 caution statement, on a single global label used at US sites | Realistic for a sponsor running 21 countries under one label design; the record confirms a US + EU study | High |
| §5.3 | "Keep out of reach of children" is not operationally relevant because all doses are site-administered | Follows from canon (post-dose observation at every dosing visit implies site administration); the Annex VI exemption for products not taken home | Med |
| §5.3 | The "wrong label" stop list (illegible print, carton/syringe kit-number mismatch, out-of-range kit number, passed expiry, torn tear-off, handwritten alteration) | Invented; derived from the label content set | High |
| §5.4 | A perforated detachable label portion exists, printed with kit number, blinded batch number, expiry, and protocol number, and is affixed to the accountability record | Required by the brief; matches standard IMP two-part label practice | High |
| §5.4 | Site staff perform no other label handling; overlabelling occurs only on written sponsor instruction | Keeps label ownership with the IP Handling Manual per the scope boundary | High |
| §5.3, §15.4, §16.2 | Blinded batch numbers formatted `B23-0417`, `B23-0392` | Format invented; the concept of a single batch number spanning both arms is the blinding-critical part | Med |
| §15.4, Appendix A | Expiry expressed as month-year, e.g. `NOV-2024`, `JAN-2025` | Annex VI convention (month and year); dates chosen to be plausible relative to the 2022–2024 study period in canon | High |

## 5. Personnel and delegation

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §6.2 | The task-to-person matrix (who receives, stores, logs, dispenses, checks, administers, returns) | Extends the RESEARCH_SITE delegation lines into task granularity; Chao's and Raghunathan's scopes are taken from canon and not exceeded | High |
| §6.2 | Koss and Vega may perform the independent second check and IRT transactions; Koss may log temperatures | RESEARCH_SITE makes Koss "backup for all of Priya's delegated tasks" and delegates IP administration to Vega; the second-check role follows | Med |
| §6.2 | **Any** trained staff member may initiate excursion quarantine, regardless of delegation | Invented safety-first rule; quarantine is a protective, reversible act and delaying it for a delegated person is the greater risk | High |
| §6.3 | The "custody versus use" framing of pharmacist vs coordinator | Authorial framing; not from canon | High |
| §6.4 | Training prerequisites list, including anaphylaxis-recognition training for administrators | Justified by the anaphylactic reaction SAE in canon §13; the rest is conventional | High |
| §6.5 | The **remote release** procedure — phone read-back of six fields, photograph of the carton label, on-site second check by a third person, comments-column annotation, Chao countersignature within 2 business days | Wholly invented. Canon says Chao is on site Tue/Thu and Raghunathan is delegated only for **receipt and accountability**, not dispensing — this procedure closes that gap without exceeding her delegation | Med |
| §6.5 | The PI may authorise release in the pharmacist's place under the same read-back procedure | Follows from the PI's overall IP accountability under E6(R3) §2.7 | Med |

## 6. Receipt

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §7.2 | The logger is a single-use USB device with a STOP button and an OK / ALARM status display | Common shipment-logger design; brand deliberately unnamed to avoid attributing to a real vendor | High |
| §7.2 | Time out of controlled storage during receipt should not exceed **30 minutes**, and the actual elapsed time is recorded | Invented operational limit; a number is needed for the checklist to be usable | Med |
| §7.3 | **24-hour** IRT receipt acknowledgement; acknowledging receipt ≠ releasing to usable stock | The 24-hour rule is required by the brief; the acknowledge-vs-release distinction is invented and is the section's real teaching point | High |
| §7.4 | The specific accept / quarantine / reject decision tree, including "no logger read before unpacking → treat as ALARM" | Required by the brief; the trinary structure and the branch order are invented | High |
| §7.4 | Kits must have **≥30 days** shelf life remaining at receipt or be quarantined | Invented threshold; sponsors commonly set one | Med |
| §7.4 | REJECT is reserved for wrong-study / wrong-site / visibly unsalvageable shipments; everything else is QUARANTINE | Invented but follows from the fact that a site cannot adjudicate stability | High |
| §7.5 | Retain the logger, coolant packs, shipper, and packing material after an alarm | Invented; supports sponsor adjudication and prevents evidence loss | High |

## 7. Storage and temperature monitoring

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.2 | Refrigerator set point **5 °C** within the 2–8 °C range | Mid-range set point is conventional; canon gives only the range | High |
| §8.2 | Placement rules: minimum **5 cm** clear at the back wall, **2–3 cm** between stacks, never in the door, never on the cabinet floor, keep the unit **⅓ to ⅔ full** | Numbers invented; the underlying rules (evaporator freezing risk, door instability, airflow) are standard cold-chain practice | Med |
| §8.2 | Door-open periods over **5 minutes** are logged in the daily-log comments | Invented threshold | Low |
| §8.3 | Explicit prohibited-contents list for the IP refrigerator, including IP from other studies going to a separate study-stock refrigerator | RESEARCH_SITE mentions other freezers/shelving but not a second study-stock refrigerator; its existence is assumed and is also used as the §9.5 backup unit | Med |
| §8.4 | Four named zones — UNASSIGNED / ASSIGNED / QUARANTINE / RETURNED-USED — with physical separation | Required by the brief; the names and the "physical, never mental" rule are invented | High |
| §8.4 | Participant ID goes on a removable tag, never written on the carton | Invented; protects label integrity and blinding | High |
| §9.1 | The glycol buffer is described as damping door-opening transients so the record reflects product temperature | Canon states the probe is glycol-buffered; the explanation is authorial | High |
| §9.2 | Morning check before 09:00 PT and before the first refrigerator opening; afternoon check before the last IP-room keyholder leaves; min/max reset after each reading; closed-period TempTrak review on the first open day after a weekend or holiday | Timing rules invented; the twice-daily requirement is from the brief | Med |
| §9.3 | Annual NIST-traceable calibration; **last 14-SEP-2023, next due 14-SEP-2024**; 60-day renewal diary | Dates invented and chosen to sit before the 01-DEC-2023 manual date and inside the study period | Med |
| §9.3 | A calibration lapse makes the storage history unverifiable; do not dispense until the sponsor advises; report on the excursion form | Invented consequence chain, but the logic is standard | Med |
| §9.4 | Each escalation step allows **15 minutes** to acknowledge before advancing; whoever acknowledges must attend **in person**; contacts verified quarterly | The chain and the <2 °C / >8 °C sustained-15-min threshold are canon; the acknowledgement interval, the in-person rule, and quarterly verification are invented | Med |
| §9.5 | Do not open the refrigerator during an outage; do not relocate IP to a domestic fridge or cooler without sponsor instruction; the designated backup is the study-stock refrigerator | Invented; canon gives the generator and battery specifications only | High |

## 8. Excursions

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §10.1 | "QUARANTINE — DO NOT DISPENSE" signage on both the unit and the stock, with date, time, and reason | Required by the brief; wording invented | High |
| §10.2 | The excursion profile field set (min, max, start, end, total duration, cumulative time, direction, freezing suspicion, kits affected, cause, corrective action) and the mandatory temperature graph | Required by the brief; the specific field set and the "a number without a curve" rationale are invented | High |
| §10.2 | Cold excursions (<2 °C) are treated as more serious than warm ones and are never assessed by looking at the solution | Scientifically conventional for mAbs (irreversible aggregation on freeze-thaw); not stated in canon | High |
| §10.3 | The 24-hour clock runs from **discovery**, not from the excursion | Invented clarification; canon says only "reported to the sponsor within 24 h" | High |
| §10.4 | Three disposition outcomes — release / release with restriction / reject — and the rule that verbal reassurance is never a disposition | Invented; supports the scope boundary (adjudication belongs to the IP Handling Manual) | High |
| §10.5 | A site-maintained **cumulative excursion register**, one line per kit, and the statement that the site figure is partial because the sponsor holds depot and transit history | Invented mechanism for the canon rule (cumulative ≤30 days at ≤25 °C); the "partial view" argument is the reason disposition cannot be local | High |
| §10.5 | Excursions above 25 °C or below 2 °C are reported regardless of duration and are never counted against the ≤30-day allowance | Reading of the canon allowance ("cumulative ≤30 days at **≤25 °C**"); the explicit statement is authorial | Med |
| §10.7 | The entire worked example: 09-NOV-2023 door-latch failure, peak 13.4 °C, 12 h 55 min out of range, 9 kits (214772–214776, 214801–214803, 306115), 0.54-day cumulative, participant 1047-032's Week 8 visit rescheduled to 13-NOV-2023 inside window (retargeted from 1047-009 on 29-JUL-2026: the roster and DE-1109 put 1047-009's Week 8 in January 2024), report sent 11:10 PT, "CHECK LATCH" decal CAPA, disposition received 13-NOV-2023 | Entirely fabricated event, arithmetically tied to the §15.4 accountability example (9 kits = 18 syringes = the entire dispensable balance on that date). Kit numbers respect the canon 6-digit 100001–999999 range; participant ID respects the SSSS-NNN convention; the date sits inside the site's enrollment period and before the manual's 01-DEC-2023 version date | Low |
| §10.7, Appendix C | The daily temperature log gains a latch-confirmation column as CAPA | Invented; also explains why Appendix C has that column | Med |

## 9. Dispensing

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §11.1 | The seven-point precondition list, including predose urine pregnancy test and completed predose assessments | Derived from the canon SoA (urine pregnancy predose at every dosing visit; predose draws before IP) rather than invented, but its assembly into a pharmacy gate is authorial | High |
| §11.3 | The **four-field** independent second check (participant ID, kit number, visit, expiry), read aloud from the carton, by a person who did not select the kit | Required by the brief; the read-aloud and different-person rules and the "transposed digits" rationale are invented | High |
| §11.4 | When an assigned kit cannot be found: search all zones → check dispensed/quarantined/returned → call Axion for a **replacement kit assignment** → notify CRA same business day → record as UNACCOUNTED | Required by the brief; the specific sequence and the UNACCOUNTED status are invented | High |
| §11.5 | IP is never left unattended; a delayed participant means the kit returns to the fridge and the equilibration clock restarts | Invented but follows from 21 CFR 312.61 | High |

## 10. Preparation and administration

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §12.1 | Gloves are discretionary; no USP <800> containment PPE is required because an unconjugated IgG1 mAb is not a NIOSH-listed hazardous drug | Correct as a general matter for unconjugated mAbs; the site-level determination is invented | High |
| §12.2 | The full prohibited-warming list (microwave, hot water, bath, heating pad, radiator, sunlight, body heat, incubator, hands) and the no-immersion rule | Required by the brief; the enumeration is invented | High |
| §12.2 | **Maximum time out of refrigerator: 4 hours** to administer; **4–8 hours** → pharmacist decision, one return to 2–8 °C, use within 24 hours if it stayed ≤25 °C; **>8 hours** → quarantine | Entirely invented thresholds. Canon gives only the 30-minute equilibration. These numbers are the manual's most consequential invention and are deliberately generous-but-bounded | Low |
| §12.4 | Inject slowly over **approximately 10 seconds**; insert at **45–90°**; hold **5 seconds** before withdrawing; release the plunger to deploy the passive guard; do not rub the site | Conventional SC PFS technique; the specific numbers are invented | Med |
| §12.4 | If no acceptable injection site can be found anywhere, contact the investigator, who consults the medical monitor | Invented escalation; realistic given a moderate-to-severe AD population where clear skin is scarce | High |
| §12.5 | Observation is timed from the **second** injection | Invented clarification; canon gives durations only | High |
| §12.5 | Brief the participant to report post-dose pyrexia and chills after leaving | Derived from the canon AESI list (pyrexia/chills within 48 h of dosing) | High |
| §13 | The 17-field administration documentation set, including a required positive statement of observation findings ("no reaction observed" is a finding; a blank is not) | Required by the brief; the field list and the positive-statement rule are invented | High |

## 11. Missed, delayed, and partial doses

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §14.1 | Windows are calculated from Day 1, so a late visit does not shift later windows | Standard; canon gives windows relative to Day 1 but does not say this explicitly | High |
| §14.2 | Medical monitor must be contacted **before** an out-of-window dose; no catch-up dosing; the regimen stays fixed at seven doses | Invented procedure; the seven-dose regimen is canon | High |
| §14.4 | A damaged-but-unused syringe is accountable stock and goes to QUARANTINE, **not** to sharps; a replacement kit comes from IRT; the surviving syringe of a damaged kit is not used | Invented rules. The "do not use the surviving syringe" rule follows from canon's 300 mg = 2 PFS definition | High |
| §14.5 | On a partial injection: do not re-dose, record as administered, file a deviation, notify PI/CRA/MM, do not adjust the next dose | Required by the brief; the "estimated proportion delivered" and "same rule applies to a wrong injection site" extensions are invented | High |

## 12. Accountability

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §15.2, Appendix A | Form identifier **MER-20210143-DAR-v3.0**; the column set; the balance formula; unit-level (syringe) rather than kit-level tracking | Form number invented. Unit-level tracking is an authorial choice justified by the 2-syringe dose and by the need to represent partial events | High |
| §15.2 | Shadow accountability records are prohibited; IRT is not the accountability record | Invented statement of a widely held expectation | High |
| §15.4 | The entire worked example — participants 1047-030, 1047-034, 1047-031, 1047-011, 1047-012 (the first three retargeted from 1047-003, 1047-007 and 1047-009 on 29-JUL-2026: all three are worked by the script during the run, and this log dates their visits in Oct 2023 incompatibly with it); kit numbers 214744–214776, 214801–214803, 306115–306116; shipment reference GRX-1047-0019; deviations PD-2023-014 and PD-2023-015; page 7 of 14; pharmacy binder section 6 | Wholly fabricated. Participant IDs follow the canon SSSS-NNN convention and stay within the site's 14 randomized participants; kit numbers stay in the canon 6-digit range; dates sit inside the site's enrollment window. The retargeted IDs are placeholders past the site's 22 issued screening numbers | Low |
| §15.4 | Initials WLC / PR / BK / AV map to the four named staff | Derived from RESEARCH_SITE names | High |
| §15.5 | CRA performs 100% source data verification of drug accountability with no sampling | Invented but conventional for IP accountability | High |
| §15.6 | The ten-row discrepancy-cause table | Invented; drawn from the failure modes described in the companion outline | High |

## 13. Blinding and unblinding

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §16.2 | Kit numbers are **randomly interleaved** across arms across the whole 6-digit range | Invented but necessary; sequential-by-arm numbering would unblind by inspection | High |
| §16.2 | A single blinded batch number spans both active and placebo presentations | Invented; canon requires visual indistinguishability, and a batch number that differed by arm would defeat it | High |
| §16.3 | The prohibition list — no sorting/grouping/annotating by anything but assignment status; no recorded appearance comparisons; no correlating fever or response with kits | Required by the brief; the specific items are invented, with the pyrexia example drawn from the canon AESI list | High |
| §16.4 | Inadvertent-unblinding response: stop, notify PI and CRA within one business day, confidential PI-held note, recusal assessment with certified raters called out specifically, deviation filed | Invented procedure; rater recusal follows from canon's rater-certified staff list and the double-blind design | High |
| §17 | The site holds **no code-break envelopes** and none may be created; unblinding runs only through Axion IRT with a manual telephone fallback | Canon names Axion IRT as primary with a phone backup and states no unblinded pharmacist is required; the explicit no-envelopes rule is invented | High |
| §17 | Only the PI or a Sub-Investigator may decide to unblind; 24-hour notification to MM, CRA, and (if SAE/SUSAR) safety intake | Invented; consistent with canon's contact directory and SOP-024 | High |
| §17 | The pharmacist records that an unblinding occurred but never the result | Invented; protects the accountability record as a blinded document | High |

## 14. Returns, destruction, inventory, and readiness

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §18.2 | Used syringes are **not returned**; they go to a point-of-use sharps container and through the site's routine medical-waste stream per local policy | Required by the brief; the site's waste vendor is deliberately not named | High |
| §18.3 | Empty cartons and partially used kits are retained in the RETURNED/USED zone until CRA verification, then destroyed or returned on written authorisation | Invented sequencing; conventional | High |
| §18.5 | Records retained "at least 15 years" and never destroyed without written sponsor confirmation, in addition to the 21 CFR 312.62(c) minimum | The 15-year figure is invented as a typical CTA term; canon's CTA section does not state a retention period | Med |
| §19.1 | Par level **8 unassigned kits**, resupply trigger at **6**, maximum on-hand **16** | Entirely invented. Scaled to the site's 14 randomized participants and the 7-dose regimen | Low |
| §19.2 | Flag to the CRA any kit expiring within **90 days**; expired kits quarantined the day they expire | Invented thresholds | Med |
| §19.3 | "Use oldest first" applies to unassigned stock only, and an IRT assignment is never overridden locally | Required by the brief; the framing as a caveat on FEFO rotation is authorial | High |
| §19.4 | No delivery on closed days or after **14:00 PT Friday**; **10 business days'** closure notice to GlobalRx and IRT; annual holiday calendar published to the CRA each January; stock check before any closure over two days | Invented. The Friday cut-off is derived from the canon clinic hours (Fri close 15:00 PT) | Med |
| §20.2 | The "have ready" list for monitoring visits | Invented; assembled from the record types the manual creates | High |
| §20.3 | Monthly self-audit on the **first Tuesday** (a day Chao is on site), 24 checks, signed and filed | Required by the brief; the schedule, the item list, and the "make the monitoring visit boring" framing are invented | High |
| §20.4 | Do not create or complete records after an inspection is announced | Invented statement of standard inspection conduct | High |
| Appendices B, D | Form identifiers **CS-014** (excursion report) and the unnumbered receipt checklist; the section structure of the excursion form including a sponsor-completed disposition block | Invented. A sponsor-completed section on a site-submitted form is the mechanism that keeps disposition authority with the sponsor | Med |
| Appendices E, F | The two printable pocket/wall cards and their content | Required by the brief; layout and wording invented | High |

## 15. Regulatory interpretation (applies to both the manual and the outline)

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Outline §2.1; manual §6.1, §15.1 | Characterisation of ICH E6(R3) §2.7 as placing IP management within investigator responsibilities, requiring receipt/inventory/use/return records with dates, quantities, batch and code numbers, expiry, and participant identifiers, and requiring reconciliation | Faithful summary of the guideline's substance, paraphrased rather than quoted; section numbering as cited in the brief | Med |
| Outline §2.2–2.3; manual §11.4, §15.1, §18.1, §18.5 | Characterisations of 21 CFR 312.6, 312.59, 312.61, and 312.62(a)/(c) | Faithful paraphrase; the key interpretive move — that 312.59 is a **sponsor** obligation, which is why destruction authorisation sits in the IP Handling Manual — is authorial | High |
| Outline §2.4; manual §12.1 | The USP <797> analysis: a ready-to-inject single-dose PFS administered without reconstitution, dilution, pooling, transfer, or repackaging is **administration**, not compounding, so ISO Class 5 / cleanroom / garbing / BUD controls do not attach — while hand hygiene, aseptic technique, and skin antisepsis still do | Correct as a general reading of <797>'s scope; the site-level application and the "if it were a vial, this changes" caveat are authorial | Med |
| Outline §2.4; manual §12.1 | The USP <800> analysis: unconjugated mAbs are not NIOSH-listed, so <800> containment does not apply, but the determination should be documented | Correct as a general matter; the documentation recommendation is authorial | Med |
| Outline §2.5 | Merged Annex 13 / Annex VI (Regulation (EU) 536/2014) label content expectations, including the two-part detachable label and the not-taken-home exemption for the child-safety statement | Faithful summary of the substance; the merge into one list is a simplification for a US-site audience | Med |
| Outline §3 | Description of what an inspector looks for in accountability records, the four reconciliation questions, and the common finding families | Authorial synthesis, not a citation of any specific inspection guide or 483 | Med |

---

## 16. Deliberate omissions (scope boundary)

These were **not** written, by instruction, and are cross-referenced by name instead. Recording them
here so a later author does not mistake the gap for an oversight.

| Omitted topic | Referred to |
|---|---|
| Label design, text, translations, booklets, expiry-extension label issue | IP Handling Manual |
| Courier logistics, shipping lanes, packaging qualification | IP Handling Manual |
| IRT resupply algorithm and buffer maths | IP Handling Manual |
| Depot receipt, storage, and QC | IP Handling Manual |
| Quarantine-release, return, and destruction **authorisation** | IP Handling Manual |
| Recall / field safety notice procedure | IP Handling Manual |
| Excursion adjudication and escalation into sponsor QA | IP Handling Manual |
| IRT screen paths, user provisioning, password resets | IRT Manual |
| SAE forms, clocks, causality, AESI definitions | Safety Reporting Manual |
| Visit order of operations, assessment technique, eDiary handling | Study Reference Manual |
