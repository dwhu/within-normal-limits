> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions Log — `lab_manual.md`

**Document covered:** `/Users/dave/code/icf-please/docs/trial_documents/lab_manual.md`
**Central Laboratory Manual, Version 4.0, dated 28-NOV-2023**
**Study:** ROCKET-Horizon · Protocol 20210143, Amendment 3 (29-NOV-2023) · NCT05651711

---

## Scope of invention

**The ClinicalTrials.gov record for NCT05651711 contains no laboratory information of any kind.**
It names no central laboratory, no panels, no analytes, no sample volumes, no tube types, no
processing conditions, no shipping arrangements, no reference ranges, and no alert thresholds. The
record's outcome measures are entirely clinical (rIGA, EASI, NRS, DLQI, POEM, HADS, SCORAD) and its
adverse-event tables contain no laboratory-abnormality terms.

Consequently **every operational detail in this manual is invented.** The only constraints it honours
are the fabricated canon in `STUDY_FACTS.md` (which visits, which sample types, panel contents, draw
order, callback timings, the 5-business-day review rule, the vendor roster) and `RESEARCH_SITE.md`
(site equipment, personnel, credentials, and the absence of an ultra-low freezer).

Confidence ratings below mean:
- **High** — derived directly from canon, or a near-universal real-world convention that any
  laboratory manual would state in substantially this form.
- **Med** — a plausible, internally consistent choice among several equally defensible options.
- **Low** — freely invented; a different value would be equally valid.

---

## 1. Document identity and structure

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Cover block | Manual is **Version 4.0, dated 28-NOV-2023** | Specified by the authoring brief; sits one day before Protocol Amendment 3 (29-NOV-2023), consistent with a vendor manual issued to align with an imminent amendment | High |
| Cover block | Supersedes **Version 3.0, dated 05-MAY-2023** | Invented predecessor; dated just before Protocol Amendment 2 (12-MAY-2023) so the revision history mirrors the protocol history | Med |
| Cover block | MCL study code **`MCL-20210143-ROCKET`** | Central labs assign an internal study code distinct from the sponsor protocol number; format invented | Low |
| Cover block | Effective at each site on documented training acknowledgement, no later than **15-JAN-2024** | Standard vendor-manual rollout convention; date invented | Low |
| Version history | Four versions (1.0 10-OCT-2022; 2.0 06-FEB-2023; 3.0 05-MAY-2023; 4.0 28-NOV-2023) with the listed change summaries | Entirely invented. v1.0 dated 3 days after the original protocol (07-OCT-2022, canon) so the lab manual plausibly follows protocol issue | Med |
| §1.3 | Named companion manuals: Pharmacy Manual v3.0, Safety Reporting Manual v4.0, Study Reference Manual v5.0, IRT User Guide, EDC User Guide | Scope-boundary cross-references required by the brief; version numbers for the Safety Reporting Manual and SRM align with sibling documents in this corpus | Med |
| §1.5 | Explicit "must" / "should" distinction | Common in GCP-facing vendor manuals; makes deviation-triggering rules identifiable | High |

## 2. Central laboratory — MCL

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §2.1 | MCL Indianapolis address **1720 Meridian Park Way, Indianapolis, IN 46241** | Invented; ZIP 46241 is the Indianapolis airport industrial area, plausible for a specimen-receiving operation | Low |
| §2.1 | Geneva address **Route des Acacias 62, 1227 Geneva**; Singapore **8 Biopolis Way, Singapore 138665** | Invented plausible addresses for the two non-US facilities named in canon §9 | Low |
| §2.1 | Help-desk option tree (opt. 2 Sample Management, opt. 3 Data Management) and the mailboxes `kits@`, `data@` | Canon gives only the main number and `support@`; sub-routing invented | Low |
| §2.1 | Specimen receiving hours **06:00–22:00 ET Mon–Sat, 08:00–14:00 ET Sun** | Invented; chosen to make the Friday-shipping prohibition operationally coherent | Med |
| §4.1 | MCL Indianapolis holds **CLIA certificate of accreditation 15D0997231** and **CAP AU-ID 8871004** | Invented identifiers. The *requirement* to hold and file these is real (ICH E6 essential documents); the numbers are fabricated. `15D` is the Indiana CLIA state prefix | Med |
| §4.1 | Geneva **ISO 15189:2022 (SAS STS 0741)** and ISO/IEC 17025 for the bioanalytical unit; Singapore **CAP AU-ID 8871207** and **ISO 15189 (SAC MED 041)** | Invented accreditation identifiers; ISO 15189 is the correct standard for European medical laboratories, as specified in the brief | Med |
| §4.2 | PK, ADA, biomarker, and genomic testing performed at a **single global facility** (Indianapolis) | Real-world convention for pivotal-trial bioanalysis — inter-laboratory variability is unacceptable for exposure and immunogenicity data. Facility assignment invented | High (convention) / Low (facility) |
| §4.3 | Reference ranges issued as **Range Set 2023-C, effective 01-OCT-2023** | Invented naming and versioning scheme | Low |
| §4.3 | Conventional units with parallel SI for Americas sites; SI for EU/APAC | Plausible convention for a global study with US and EU sites | Med |
| §4.3 | Range changes notified **10 business days** in advance except safety-driven changes | Invented notice period | Low |
| §4.4 | Laminated one-page range summary as a convenience aid only | Invented; included to make the "read the range on the report" rule concrete | Low |

## 3. Kits, ordering, and inventory

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5.1 | Six kit types plus a QuantiFERON sub-kit, with codes `ROC-SCR`, `ROC-SAF`, `ROC-PKA`, `ROC-BIO`, `ROC-GEN`, `ROC-UNS`, `ROC-QFT` | Kit taxonomy specified by the brief; the codes are invented | Med |
| §5.1 | Colour coding: Screening white/black border, Dosing blue, PK/ADA orange, Biomarker green, Genomic purple, Unscheduled grey, QFT yellow sleeve | Entirely invented. Colour-coding kits by visit type is a real and near-universal central-lab practice; the specific palette is arbitrary | Low |
| §5.2 | Full kit contents matrix (tube counts, cryovial counts, pipettes, absorbent, secondary sleeve, requisition, instruction card) | Invented, but constructed to match exactly the tube list in §7.5 and the aliquot scheme in §9.5 | Med |
| §5.2 | Cryovials are **2.0 mL, externally threaded, self-standing** | Externally threaded cryovials are standard for frozen clinical-trial aliquots (no internal thread to trap liquid); size chosen to hold 0.5–1.0 mL with headspace | High (convention) |
| §5.3 | Kit expiry set by the shortest-dated component, typically 12–18 months from manufacture | Real convention; specific window invented | Med |
| §5.3 | Expired kits segregated to an "EXPIRED — DO NOT USE" bin, logged, MCL notified, destroyed locally after replacement ships; **not returned to MCL** | Invented procedure. "Do not return" is the usual real-world instruction because return shipping costs exceed kit value | Med |
| §5.3 | Monthly expiry review, first Monday, by Marisol Duarte | Invented cadence; owner taken from `RESEARCH_SITE.md` | Low |
| §5.4 | Lead times: standard **10 business days**, expedited **3 business days**, emergency next business morning | Invented but typical of central-lab supply chains | Med |
| §5.4 | Automatic replenishment **not** enabled | Invented; makes site-owned ordering a game-relevant failure mode | Low |
| §5.5 | Par-level table (min on hand / reorder point / order quantity per kit type) for a site with 14 randomized participants | Wholly invented. Quantities derived by working backwards from the visit grid: ~14 active participants × visit frequency, buffered to survive the 10-business-day lead time plus one week | Low |
| §5.5 | Add 20% to reorder points in months with >4 visits/week; drop Screening and Genomic par to zero once enrolment closes | Invented operational heuristics | Low |
| §5.6 | Unused kits stored **ambient 15–30 °C**, FEFO rotation, never refrigerated or frozen, not cannibalised | Real-world convention (gel separators are damaged by freezing); temperature band invented | High (convention) |

## 4. Requisition form

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §6.1 | The entire blank requisition layout — 21 numbered fields, two-part white/yellow form | Wholly invented. Field set assembled from what the manual's other sections require (visit, timepoint, collection date/time, IP time, fasting, tests, QFT incubation, processing, storage, collected by, processed by, comments) | Med |
| §6.1, §6.2 | Participant **initials and date of birth are NOT collected** and the fields are marked "leave blank" | Invented privacy design choice. Many real studies do transmit initials/year of birth; choosing not to makes the "never write a name" rule in the brief coherent and absolute | Med |
| §6.2 field 13 | **IP administration time** captured on the requisition, recording the time of the *first* of the two injections | Invented. Canon §4 specifies two injections per dose; the manual must say which one anchors the time | Med |
| §6.2 field 14 | **Fasting is not required** by this protocol | Invented. Nothing in the record or canon requires fasting, and no fasting-dependent analyte (e.g., fasting glucose, lipids) is in the canon chemistry panel | Med |
| §6.2 field 10 | **There are no postdose PK or ADA samples** in this study | Derived from canon §5, which labels every PK sample "predose trough" and every ADA sample "predose" | High |
| §6.2 field 12 | Target interval between the PK draw and the injection **≤ 60 minutes** | Invented tolerance | Low |
| §6.3 | The named "top rejection causes" list | Invented ranking, but reflects the genuine top pre-analytical rejection reasons in clinical trials | Med |
| §6.4 | Accession number format **`MCL-` + 7 digits** (e.g. `MCL-4471029`); barcode sheet contains one label per tube, one for the requisition, one for the manifest, plus **two spares** | Wholly invented format and sheet composition | Low |

## 5. Collection — tubes, volumes, technique

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §7.5 | **Chemistry: SST gold-top, 8.5 mL** (TSH/free T4 reflex and serum β-hCG run off the same tube) | Invented. 8.5 mL SST is a standard large serum tube; volume chosen to support a 20-analyte chemistry panel plus two reflex tests with margin | Med |
| §7.5 | **Serology: separate SST gold-top, 8.5 mL** (Screening only) | Invented. A separate tube is used because serology (HBsAg, anti-HBc, anti-HCV, HIV Ag/Ab, plus HBV DNA / HCV RNA reflexes) is run in a different department with reflex volume needs | Med |
| §7.5 | **Haematology: K₂EDTA lavender-top, 4.0 mL** | Invented volume; K₂EDTA is the standard anticoagulant for CBC with differential and reticulocytes | High (tube) / Med (volume) |
| §7.5 | **PK: plain serum red-top, no gel, 6.0 mL** | Invented. Gel-free serum tubes are standard for ligand-binding PK assays because gel separators can adsorb protein analytes | High (tube type) / Med (volume) |
| §7.5 | **ADA: plain serum red-top, no gel, 6.0 mL** | As above | High / Med |
| §7.5 | **Biomarker serum: SST gold-top, 5.0 mL** | Invented; serum matrix required for TARC/CCL17 and total IgE per canon §8 | Med |
| §7.5 | **Sodium heparin green-top, 4.0 mL — biomarker plasma retention aliquot held as a backup for the same canon biomarker analytes** | Invented. The brief required a sodium-heparin tube in the matrix; canon §8 defines the biomarker panel as serum TARC/CCL17, total IgE, and absolute eosinophils, so the heparin tube was given a **retention/backup** role rather than a new analyte, to avoid adding anything not in canon | **Low — flagged.** This is the most freely invented tube in the manual |
| §7.5 | **Genomic: K₂EDTA lavender-top, 6.0 mL**, single tube, Day 1 only | Invented volume; K₂EDTA whole blood is standard for genomic DNA extraction | Med |
| §7.5 | **QuantiFERON-TB Gold Plus: 4 × 1.0 mL** (Nil grey, TB1 green, TB2 yellow, Mitogen purple) | Tube count, order, and 1.0 mL fill reflect the real QFT-Plus product design; reproduced here as operational detail | High |
| §7.5 | **Urine: 90 mL sterile container → 10 mL preserved transfer tube** | Invented volumes | Low |
| §7.5 | Inversion counts: **5** for serum/SST, **8–10** for EDTA and heparin, **8** for the urine transfer tube | Invented specific counts; the *practice* of counting inversions and the rough magnitudes are standard | Med |
| §7.5 | Needle gauge **21G or 22G**, 23G butterfly only when unavoidable; tourniquet released within **60 seconds** | Real-world anti-haemolysis practice; specific figures conventional | High (convention) |
| §7.5 | Prohibitions: drawing through a line, pneumatic tube transport, freezing whole blood, topping up a tube from a second venepuncture | Standard clinical-trial specimen rules | High |
| §3.2, §7 | **Per-visit blood volumes** — Screening 25.0 mL, Day 1 39.5 mL (33.5 without genomic), W2 18.5, W4 33.5, W8 12.5, W12 33.5, W16 18.5, W20 12.5, W24 33.5, W28/W32 nil, W36 28.5 mL | **Computed arithmetically** from the invented tube volumes above applied to the canon SoA grid. Internally consistent by construction | Med |
| §3.2 | **Cumulative ≈ 255.5 mL with the genomic sample; ≈ 249.5 mL without; max 104.0 mL in any 8-week period** | Computed from the above. Well inside typical ethics-committee limits for adults; framed for participants as "about half a pint over nine months" | Med |
| §3.2 | Notify the medical monitor if a participant requires more than three unscheduled draws | Invented threshold | Low |
| §3 grid | **Early Termination takes the Week 24 (EOT) panel set** regardless of when it occurs | Invented. Canon §5 lists ET as a visit but assigns it no assessments; mapping ET to the End-of-Treatment panel is standard practice and gives the site an unambiguous rule | Med |
| §3 grid | **Weeks 28 and 32 have no laboratory draws at all**, and **Week 20 is a dosing visit with no PK sample** | Read directly off the canon §5 assessment grid; called out explicitly in §3.1 because both are counter-intuitive | High |
| §7.2 | Guidance to avoid drawing through active AD lesions, excoriation, or lichenification; use the dorsal hand with a 23G butterfly if both antecubital fossae are involved | Invented but indication-appropriate — moderate-to-severe AD with ≥10% BSA involvement (canon §7) frequently involves the antecubital fossae | Med |
| §7.4 | The three rationales for draw order (additive carryover, trough clock, salvage priority) and the instruction to **abandon from the end of the list backwards** | The order itself is canon §8. The rationale and the salvage-priority rule are invented explanatory content | Med |
| §7.6 | Label lengthwise, leave the fill window visible, do not cover the manufacturer's expiry/lot, label at the bedside before leaving the room | Standard specimen-labelling practice | High |
| §7.7 | Predose trough rule, including "if the injection has already been given, **do not draw the sample**; contact the medical monitor and log a deviation" | The predose requirement is canon; the specific instruction not to draw a post-hoc sample is invented and is the strongest operational judgement in the manual | Med |
| §7.8 | Eight-step order of operations at a dosing visit | Assembled from canon §5's ordering rule plus the pregnancy-test-before-dosing requirement; post-dose observation times taken from canon §4 | High |

## 6. Special collections

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.1 | QFT-Plus procedure: tubes at 17–27 °C before draw; fill to the black mark, acceptable range **0.8–1.2 mL**; **10 vigorous shakes for ~5 seconds**; incubation within **16 hours**; incubate 16–24 h at 37 °C ± 1 °C; post-incubation hold 2–27 °C for up to 3 days | Reflects the real QFT-Plus package-insert workflow. Reproduced as operational instruction; the brief specified the 5-second shake and the 16–24 h rule | High |
| §8.1 | **Site 1047 has no validated 37 °C incubator** and therefore uses the ship-un-incubated route only, scheduling QFT draws before **11:00 PT** and never on a Friday | Invented site-specific consequence, consistent with the equipment list in `RESEARCH_SITE.md` (which lists no incubator) | Med |
| §8.1 | Indeterminate pathway — repeat once with a fresh sub-kit; second indeterminate → chest X-ray + medical monitor | **Canon §8** specifies exactly this pathway | High |
| §8.1 | Advice to draw QFT early in the screening window because of 3–5 business-day turnaround against a Day −30 to Day −1 window | Derived from the invented turnaround time and the canon screening window | Med |
| §8.2 | Urine POC pregnancy test is the **only** in-house test, permitted under Site 1047's **CLIA certificate of waiver 38D2178456** | Certificate number is from `RESEARCH_SITE.md`; the interpretation that a waiver limits the site to waived-complexity testing is a real CLIA consequence | High |
| §8.2 | Source documentation requirement: date, time, **lot number, expiry, result, operator initials**, plus retention of the package insert and QC records | Standard waived-testing documentation practice; specific list invented | Med |
| §8.2 | Positive or equivocal urine result → do not dose, draw STAT serum β-hCG, notify investigator, follow the Safety Reporting Manual pregnancy pathway; invalid test → repeat with a different lot, then STAT serum | Invented procedure, consistent with canon's requirement that a pregnancy test precede dosing | Med |
| §8.3 | Optional genomic sample requires **physical verification of the signed optional-consent element** — the ticked and initialled box on ICF v4.0.1 — before the tube is drawn; a verbal yes is insufficient; the participant may not be re-approached if they decline | Canon §5 and §8 require separate consent. The verification procedure, the "do not re-approach" rule, and the withdrawal/destruction pathway are invented | Med |
| §8.3 | Genomic tube is not spun, not aliquoted, not frozen; ships whole and ambient | Invented handling, consistent with whole-blood DNA collection | High (convention) |
| §8.3 | Drawing a genomic tube without documented consent is a **serious deviation**; quarantine and notify CRA and medical monitor same day | Invented escalation | Med |

## 7. Processing

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §9.2 | Clot times: **30–60 minutes upright at room temperature** for all serum tubes | Invented specific window; 30 minutes minimum is the near-universal real convention, and an upper bound is required to prevent analyte drift | High (min) / Med (max) |
| §9.3 | **All spins at 1,500 × g** — chemistry/serology/biomarker SST **10 min at 20 °C**; PK and ADA **15 min at 4 °C**; sodium heparin **10 min at 4 °C** | Wholly invented settings. 1,500 × g for 10 min is a conventional serum-separation condition; the longer, refrigerated spin for PK/ADA reflects common bioanalytical practice | Med |
| §9.3 | **RPM equivalents computed for the Eppendorf 5810R rotor A-4-81 at 180 mm radius: 1,500 × g ≈ 2,730 rpm**, with the instruction to set g-force rather than RPM on other instruments | Rotor radius (180 mm) is invented but realistic for the A-4-81 swing-bucket; the RPM figure is calculated from RCF = 1.118 × 10⁻⁵ × r(cm) × N² | Med |
| §9.3 | Low or no brake; never re-spin a gel tube; a plain red-top may be re-spun once, immediately, documented | Standard practice; the single-re-spin allowance is invented | Med |
| §9.4 | Draw-to-centrifugation limits — chemistry/serology **2 h**; PK/ADA/biomarker serum **90 min**; sodium heparin **30 min**. Draw-to-frozen-storage — PK/ADA/biomarker serum **3 h**; heparin plasma **2 h** | Wholly invented. Chosen to be achievable at a site running six-visit days while still being tight enough to matter | Med |
| §9.4 | Haematology must reach MCL **within 48 h** of draw; genomic **within 96 h**; urine refrigerated within 30 min | Invented stability windows, consistent with real CBC and DNA-extraction practice | Med |
| §9.4 | Instruction to **process and ship anyway** when a limit is exceeded, with actual times documented, and let MCL assess reportability | Invented but strongly correct practice — a documented late sample can be evaluated; a discarded one cannot | High (principle) |
| §9.5 | Aliquot scheme: **PK 2 × 0.5 mL; ADA 2 × 0.5 mL; biomarker serum 3 × 0.5 mL; biomarker plasma 1 × 1.0 mL**; chemistry, serology, haematology and genomic shipped as intact tubes | Wholly invented counts and volumes. Primary-plus-backup for PK/ADA is standard; three biomarker aliquots covers TARC, IgE, and a retention vial | Med |
| §9.5 | Fill the **primary aliquot fully before the backup**; do not fill a 2.0 mL cryovial past 1.2 mL; a 6.0 mL plain red-top typically yields **2.5–3.0 mL** of serum | Invented figures; the ~45–50% serum yield from a plain tube is realistic | Med |
| §9.6 | Cryovial label carries accession number (barcode + human-readable), analyte suffix (`PK-1`, `ADA-2`, `BIO-S3`…), participant ID, visit, and a hand-completed collection date in cryo-resistant marker | Invented label design | Low |
| §9.7 | Centrifuge-failure contingency ladder: reschedule → back-office centrifuge with documented radius and settings → **ship unspun only with MCL telephone authorisation and a reference number**; never gravity-separate or manually decant | Wholly invented procedure. The principle that MCL rather than the site decides is a deliberate design choice | Med |

## 8. Storage and the −20 °C constraint

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §10.1 | Three categories: ambient 15–30 °C, refrigerated 2–8 °C, frozen | Standard; bands invented | High |
| §10.3 | **MCL's validated long-term frozen condition is −70 °C or colder**, and Site 1047 holds at −20 °C as a bounded short-term alternative | Invented, but is the standard bioanalytical storage target. `RESEARCH_SITE.md` states no ultra-low freezer is on site, so the manual had to construct a compliant workaround | Med |
| §10.3 | **Maximum hold at −20 °C: PK 30 days (target ≤14); ADA 30 days (target ≤14); biomarker serum and plasma 14 days (target ≤7)** | **Wholly invented.** The biomarker limit is set shorter than PK/ADA on the stated rationale that TARC/CCL17 is the least stable analyte at −20 °C. These four numbers are the core of the site's operating constraint and are the single most consequential invention in the manual | **Low — flagged** |
| §10.3 | The biomarker 14-day ceiling **governs the shipping calendar**: frozen shipment at least every 14 days whenever anything is in the freezer, and within 7 days of any biomarker visit (Day 1, W4, W12, W24) | Derived from the invented hold times applied to the canon SoA | Med |
| §10.3 | Exceeding a hold time is a protocol deviation; ship anyway, log it, never discard | Invented but correct-in-principle rule | High (principle) |
| §10.4 | Frozen batching trigger table, including "do not carry aliquots across a month boundary" and "ship before any closure of ≥3 days" | Invented operational rules | Low |
| §10.5 | Freezer alarm threshold **sustained above −15 °C for 15 minutes**; escalation Duarte → Raghunathan → Okonkwo → answering service | Escalation chain adapted from the IP-refrigerator alarm chain in `RESEARCH_SITE.md`; the −15 °C / 15-minute threshold is invented | Med |
| §10.5 | Alarm response: do not open the door; record current temperature, excursion start time, and maximum reached; restore within **2 hours** or transfer; MCL decides analysability; quarantine, do not discard | Invented procedure, consistent with site SOP-009 (named in `RESEARCH_SITE.md`) | Med |
| §10.6 | Absolute prohibition on site-level freeze–thaw; retrieve everything for a shipment in one freezer opening; a partially thawed aliquot is segregated and MCL is called, never refrozen silently | Invented but reflects genuine analyte-stability science; TARC/CCL17 and immunoglobulin sensitivity to freeze–thaw is real | High (principle) / Med (detail) |

## 9. Shipping

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §2.2, §11 | Courier is **Argosy Clinical Courier**, +1 (800) 555-0157, 24/7, account `MCL-ROCKET-1047` | Wholly invented vendor. Canon §9 names no specimen courier (GlobalRx Logistics is the *drug* depot courier and is deliberately not reused here). Follows the canon convention of fictional 555 numbers | Low |
| §11 | Site 1047 standing pickup **Mon–Thu 14:30 PT**; same-day on-demand booked by **12:00 PT**; portal manifest cut-off **13:30 PT** | Invented times, aligned to the clinic hours in `RESEARCH_SITE.md` (Mon–Thu to 17:30 PT, Fri to 15:00 PT) | Med |
| §11 | Only IATA-trained personnel may tender; **Duarte** (certified to 30-JUN-2026, from `RESEARCH_SITE.md`) with **Raghunathan** as trained backup; if neither is available, do not ship | Duarte's certification is canon. Raghunathan as a trained backup is invented but consistent with her delegated "sample processing and shipment" duties | Med |
| §11.1 | Ambient and refrigerated ship **same day**; frozen **batched**; gel packs and dry ice never in one container | Invented schedule; the gel-pack/dry-ice separation is standard | High (convention) |
| §11.2 | UN3373 Packing Instruction 650 triad: leak-proof primary ≤1 L; absorbent sufficient for the entire liquid contents; leak-proof sealed secondary; rigid outer ≥100 × 100 mm with a **≥50 × 50 mm** UN3373 diamond and the proper shipping name in **≥6 mm** characters adjacent to it; ≤4 L or 4 kg per outer; **1.2 m drop test**; **95 kPa** pressure differential; itemised contents list between secondary and outer; responsible person name and telephone | These reproduce the real substance of IATA PI 650 / the UN Model Regulations. Presented as operational instruction, not as a regulatory citation | High |
| §11.2 | Classification as **Category B, not Category A**, and the instruction not to up-classify or ship as exempt | Correct classification for clinical trial specimens of this type | High |
| §11.3 | UN1845 dry ice: PI 954; Class 9 label; proper shipping name plus **net weight in kg** marked on the outer package; air waybill entry *"Dry ice, 9, UN1845, x kg"*; **no Shipper's Declaration required** for UN3373 with dry ice; package must vent, inner liner never sealed; cryogenic gloves and eye protection; never store in a sealed room, refrigerator, cold room, or vehicle cabin | Reproduces the real substance of IATA dry-ice requirements. The "no Shipper's Declaration for PI 650 + PI 954" statement is a real and frequently misunderstood point | High |
| §11.4 | **Sublimation ≈ 4.5 kg per 24 h** for the standard MCL frozen shipper; PDX → IND transit 24 h; safety factor 2× transit; **standard fill 14 kg**, **extended fill 18 kg**; order increment 5 kg; Airgas **24 h** notice | Sublimation rate and fill quantities are **wholly invented**, though 4–6 kg/24 h is realistic for a mid-size EPS shipper. The 24 h Airgas notice and the standing account are from `RESEARCH_SITE.md` | Low (quantities) / High (lead time) |
| §11.5 | Manifest generated in the MCL portal, printed in duplicate, one copy between secondary and outer, submitted electronically before pickup; contents list specified | Invented but standard practice. Electronic pre-notification as a lost-shipment detection mechanism is a deliberate design point | Med |
| §11.6 | **Never ship Friday or pre-holiday** unless pre-arranged, with the stated exception procedure (MCL agreement + named receiving contact + reference number; Argosy Saturday-delivery waybill; 18 kg fill; CRA notified) | The prohibition was specified by the brief; the exception procedure and the "if any step fails, do not ship — hold at −20 °C within §10.3 limits" fallback are invented | Med |
| §11.6 | Site 1047 schedules **no laboratory visits on Fridays** except by exception | Invented site practice, consistent with the Friday 15:00 PT close in `RESEARCH_SITE.md` | Med |
| §11.8 | Track next business day; escalate if not **Received within 48 h**; monthly accession-to-receipt reconciliation | Invented cadence | Med |
| §11.9 | Missed-pickup procedure: call Argosy then MCL; **unpack and restore specimens to their correct storage**; frozen aliquots back to −20 °C before they soften (explicitly *not* a freeze–thaw cycle); dry ice is not reusable; **un-incubated QFT tubes are lost if the 16 h window will be missed** | Wholly invented procedure. The QFT consequence follows from the real 16 h incubation rule | Med |

## 10. Excursions, lost shipments, and redraws

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §12.1 | MCL notification channels: portal Specimen Receipt & Condition Report within 24 h, e-mail to designated contacts, **telephone within 1 business day** for critical discrepancies | Invented | Med |
| §12.1 | Condition codes `RCV-OK`, `RCV-TEMP`, `RCV-DMG`, `RCV-LBL`, `RCV-QNS`, `RCV-HEM`, `RCV-MAN`, `RCV-LATE` | Wholly invented code set | Low |
| §12.2 | Salvage-outcome table (which analytes survive which excursion) — including "potassium, LDH, phosphate and glucose fail first" on a warm chemistry SST; "reticulocytes and the differential" fail first on a late CBC; frozen whole blood and haemolysed PK are total losses | Invented specifics, but each is grounded in real pre-analytical behaviour | Med |
| §12.2 | MCL issues a **Specimen Discrepancy Notice** for every non-reportable specimen | Invented artefact name | Low |
| §12.3 | A shipment is "lost" at **72 hours** post-pickup without receipt | Invented threshold | Low |
| §12.4 | Redraw decision table — **yes** for safety chemistry/haematology, urinalysis, TSH, serology, QFT, serum β-hCG, and genomic; **no** for PK, ADA (generally), and biomarker because they are timepoint-bound | Invented but follows directly from the trough logic already established. The observation that the *optional* genomic sample is the only irreplaceable-looking sample that is actually replaceable is an invented framing | Med |
| §12.4 | Screening may be extended once by up to 14 days with medical monitor approval, to accommodate a serology redraw | **Canon §5** | High |

## 11. Results and investigator review

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §13.1 | Turnaround from receipt: chemistry 24 h; haematology 24 h; urinalysis 24 h (48 h with microscopy reflex); TSH 48 h; serum β-hCG 24 h (same day STAT before 12:00 ET); serology 3 business days; HBV DNA / HCV RNA reflex 5 business days; **QFT 3–5 business days** | Wholly invented; all are plausible for a global central lab | Med |
| §13.1 | Turnaround measured from **receipt**, not draw; add ~24 h for transit; screening results therefore complete 5–8 calendar days after draw | Derived from the above | Med |
| §13.2 | Portal at `portal.meridiancentrallabs.example` with PDF reports and a cumulative participant-level trend view; automatic electronic transfer into **Veriscribe EDC v9.2** within 24 h; e-mail prompts containing no results; fax/secure PDF by exception | Invented. The EDC product name is canon §9; the integration is invented | Med |
| §13.2 | **Site staff never transcribe central lab values into the eCRF** — only the clinical-significance assessment and any resulting AE are entered | Invented but standard for a central-lab study with electronic transfer, and an important game-relevant distinction | High (convention) |
| §13.2 | Part 11 access controls: unique individual accounts, never shared; access revoked within **5 business days** of a staff change, owned by Sam Oyelaran; full audit trail of views, signatures, and query responses | Part 11 principles are real; the 5-business-day revocation window and the named owner are invented | Med |
| §13.3 | **PI or delegated Sub-I must review, assess, sign, and date every report within 5 business days** | **Canon §8** | High |
| §13.3 | Permitted signers at Site 1047 are **Okonkwo, Feist, Nakamura**; **Vega (FNP-C) is not delegated to sign lab reports**; coordinators never sign | Derived from `RESEARCH_SITE.md`, which excludes Vega from eligibility determination and causality assessment. Extending that exclusion to lab-report sign-off is an invented but consistent reading | Med |
| §13.3 | The five-step definition of "review" (read value and flag → compare with the participant's own priors → determine CS/NCS → annotate → sign and date) | Invented articulation of a real GCP expectation | High (principle) |
| §13.3 | The 5-business-day clock starts at **posting**, not opening; a portal *Pending Review* dashboard exists; Site 1047 runs a **twice-weekly (Tue/Fri) review block** | Invented mechanics and site practice | Med |
| §13.4 | CS/NCS guidance; record a diagnosis rather than an isolated value where one exists; **any alert value is presumed clinically significant** unless documented otherwise | Invented guidance consistent with standard sponsor instructions | Med |

## 12. Alert values

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §14.2, App. F | **The entire alert-threshold table** — ALT/AST ≥5 × ULN (or ≥3 × ULN with bilirubin ≥2 × ULN); total bilirubin ≥2 × ULN; ALP ≥3 × ULN; creatinine ≥2.0 mg/dL or ≥1.5 × baseline; potassium <3.0 / >6.0 mmol/L; sodium <125 / >155 mmol/L; glucose <50 / >400 mg/dL; calcium <7.0 / >12.0 mg/dL; ANC <1.0 ×10⁹/L (critical <0.5); WBC <2.0 / >30.0 ×10⁹/L; platelets <75 ×10⁹/L (critical <50) / >1,000; haemoglobin <8.0 g/dL or a fall ≥2.0 g/dL, >19.0 g/dL; any positive β-hCG in a WOCBP; any reactive serology | **Wholly invented.** Values chosen to sit within the range commonly used across industry critical-value lists, and restricted to analytes that actually appear in the canon §8 chemistry and haematology panels so nothing is called that is not measured. Dual conventional/SI units given | **Low — flagged** |
| §14.2 | A haemolysed high potassium is still called, and the callback should prompt a redraw as well as a clinical assessment | Invented but correct handling | Med |
| §14.3 | Callback tree: MCL → research line within **1 h**; then pager, then Okonkwo → Feist → Nakamura at 15-minute intervals; then answering service; medical monitor within **24 h**; portal ALERT flag; site → medical monitor with assessment within 24 h | The **1 h / 24 h** timings are canon §8. The ladder, the 15-minute intervals, and the numbers used are built from `RESEARCH_SITE.md` | High (timings) / Med (ladder) |
| §14.4 | **Permitted alert recipients: Okonkwo, Feist, Nakamura, Vega, Raghunathan. Not permitted: Duarte, Koss, Oyelaran, Tarrant, administrative staff** | Wholly invented rule. Rationale: an alert value requires clinical triage, so only licensed clinicians and the RN coordinator may accept it. Deliberately excludes the phlebotomist who owns every other part of this manual, which is a meaningful in-game friction | Med |
| §14.5 | Mandatory **read-back** of participant ID, visit, analyte, value, units, and range; a 12-field **Alert Value Receipt Log** | Invented artefact; read-back mirrors real hospital critical-value policy | Med |
| §14.6 | Seven-step clinical follow-up including same-day participant contact, STAT confirmatory repeat, **dosing held pending assessment**, and follow-up to resolution | Invented procedure | Med |
| §14.7 | **Hy's law evaluation pathway** — ALT or AST ≥3 × ULN **and** total bilirubin ≥2 × ULN **and** ALP <2 × ULN **and** no alternative cause; MCL applies an automatic combination check and calls it even when no single analyte reaches its own threshold; interrupt IP; notify medical monitor within 24 h; repeat LFTs + INR within **48–72 h**; directed history (alcohol, paracetamol dose, supplements, travel, symptoms — noting that **pruritus is confounded in this population**); alternative-aetiology work-up (hepatitis A/B/C/E, EBV, CMV, HSV, autoimmune markers, ultrasound, CK); monitor at least twice weekly; expedited reporting per the Safety Reporting Manual; no rechallenge without sponsor approval | The Hy's law *definition* is a real and standard regulatory construct. Every operational timing and the work-up list are invented. The observation that pruritus is a confounded symptom in an AD population is an invented but clinically apt detail | High (definition) / Med (procedure) |

## 13. Blinding

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §15.1 | Released to the site: chemistry, haematology (incl. absolute eosinophils), urinalysis, serology, QFT, TSH/free T4, serum β-hCG. **Withheld: PK, ADA, biomarker, genomic** | Required by the brief; consistent with canon §3's double-blind design | High |
| §15.2 | Rationale — placebo participants have no measurable rocatinlimab so PK is functionally the randomization list; ADA can only develop with exposure; TARC/CCL17 and total IgE are pharmacodynamic and would bias the **co-primary** rater-scored endpoints | Invented articulation; the underlying logic is sound and the co-primary endpoints are canon §6 | High (logic) |
| §15.3 | **Absolute eosinophil count appears in both the released haematology differential and the withheld biomarker panel, and this is not a contradiction** | Invented clarification, necessitated by canon §8, which lists absolute eosinophils in both the hematology panel and the biomarker panel. Flagged explicitly so the corpus is internally consistent | High (necessary) |
| §15.4 | Portal **Specimen Receipt & Status** screen showing receipt, condition, and a status of `Received` → `In Process` → **`Analysis Complete — Result Withheld (Blinded)`**, plus exception statuses (`Not Reportable — QNS` / `— Haemolysed` / `— Stability Exceeded`), with **no numeric value** | Wholly invented mechanism, designed to answer the brief's requirement that the site confirm receipt without seeing the result. Site 1047 reviews it weekly (invented cadence) | Med |
| §15.5 | Emergency unblinding is via **Axion IRT** and SOP-024, never by requesting a result from MCL; MCL cannot unblind | Axion IRT and SOP-024 are canon; the explicit "do not telephone the lab" instruction is invented | High |

## 14. Local labs, repeats, and queries

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §16.1 | Local testing permitted for: the POC urine pregnancy test; medical emergencies; ED/inpatient care already delivered; central-lab unavailability with documented medical monitor approval. **Not** permitted for convenience, speed, or to second-guess a central result | Canon §8 permits local urine pregnancy and local safety testing for clinical care; the rest of the permission matrix is invented | Med |
| §16.2 | Site must obtain the local lab's **CLIA certificate (or national equivalent) valid on the date of test**, its **reference ranges** valid on that date, the lab director's credentials where required, and the report — filed in the ISF, indexed, at the time rather than at close-out; owned by Sam Oyelaran | The requirement derives from ICH E6 essential documents. The ownership assignment and the "get it now, not at close-out" practicality note are invented | High (requirement) / Med (detail) |
| §16.2 | Site 1047 maintains standing annual copies of ranges and certificates for its two most-used referral hospitals | Invented site practice | Low |
| §16.3 | Local results entered on a **separate EDC local-laboratory form**, never into the central dataset; value + units + local range entered exactly as reported; no hand conversion; investigator signs on the same 5-business-day basis; deviation logged where a central sample was replaced | Invented mechanics; the separate-form design is standard | Med |
| §17.1 | Three categories — **Repeat**, **Redraw**, **Unscheduled** — each on an Unscheduled kit, distinguished by the requisition cross-reference fields | Invented taxonomy and the corresponding requisition fields in §6.1 | Med |
| §17.2 | STAT handling requires a telephone call to the help desk and a reference number recorded in field 21; **a STAT flag speeds MCL's processing, not the courier** | Invented; the clarification is included because it is a genuine site misconception | Med |
| §17.4 | Repeats reported against the **original visit** with a sequence indicator; **repeats never overwrite originals**; unscheduled samples get their own EDC visit record; unscheduled PK/ADA are analysed but still withheld | Invented data-handling behaviour, consistent with §15 | Med |
| §18.1 | Query response windows: MCL portal queries **3 business days**, EDC queries **5 business days** | Invented | Low |
| §18.2 | The twelve-row common-query table and its prevention column | Invented compilation; each entry reflects a genuine recurring pre-analytical or documentation failure | Med |
| §18.3 | The four preventive habits (complete at the chair; one participant on the bench; read aloud; write down the deviation) | Invented articulation of standard good practice | High (principle) |
| §18.4 | Escalation matrix | Assembled from canon §9/§10 contacts plus the invented courier | High |

## 15. Appendices

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| App. A | Kit summary table | Restates §5.2 | (see §3 above) |
| App. B | Tube / volume / handling matrix with RPM equivalents | Restates §7.5 + §9.3 + §9.5 | (see §5, §7 above) |
| App. C | Points to the blank requisition at §6.1; notes that a photocopy of a completed form is not an acceptable blank | Invented instruction | Low |
| App. D | Full pre-shipment checklist across Contents / UN3373 / UN1845 / Logistics, with a packer sign-off line recording IATA certification expiry | Invented compilation of §11's requirements | Med |
| App. E | Dry-ice calculation aid, including the **worked Week 12 example dated Wed 13-MAR-2024 with a Mon 18-MAR-2024 shipment and a Fri 15-MAR-2024 Airgas order** | Wholly invented worked example. Dates chosen so the 24 h Airgas lead time, the 7-day biomarker limit, and the no-Friday rule all bind simultaneously — it exists to make the constraint chain in §10.3 tangible | Med |
| App. F | Alert-value quick card | Restates §14.2 and §14.7 | (see §12 above) |
| App. G | Contact card | Assembled from canon contacts plus the invented courier and Airgas account | High |

---

## Deliberately **not** invented

To avoid contradicting canon or straying outside this document's scope, the manual does **not**
specify:

- any reference-range **numeric values** (it specifies only that ranges exist, are supplied by MCL,
  are versioned, and must be filed) — inventing a full range set would create a large surface for
  contradiction with any future document;
- **eligibility thresholds** derived from laboratory values (these live in the protocol);
- **IP handling, storage, dispensing, or accountability** — explicitly out of scope, referred to the
  Pharmacy Manual;
- **eCRF screens or field-level data entry** — referred to the EDC User Guide;
- **AE/SAE definitions, seriousness criteria, causality, or reporting timelines** — referred to the
  Safety Reporting Manual;
- any **assay methodology, LLOQ, or analytical performance characteristic** for the PK, ADA, or
  biomarker assays;
- any additional **analyte** beyond the canon §8 panels.

## Highest-risk inventions

If any part of this manual is later found to contradict another document in the corpus, these are the
most likely candidates, in order:

1. **The −20 °C maximum hold times** (§10.3) — 30 days for PK/ADA, 14 days for biomarker. They drive
   the entire shipping calendar.
2. **The alert-value thresholds** (§14.2 / Appendix F).
3. **Tube volumes and the resulting per-visit and cumulative blood volumes** (§7.5, §3.2) — any other
   document quoting a blood volume to a participant must match **≈ 255.5 mL total / about half a
   pint**.
4. **The sodium heparin green-top's purpose** (§7.5) — assigned a biomarker plasma retention role
   purely to satisfy the required tube list without adding an analyte outside canon §8.
5. **Argosy Clinical Courier** as the specimen courier — a new vendor not in the canon roster,
   introduced because canon's GlobalRx Logistics is the drug depot courier and reusing it would
   conflate the two supply chains.
6. **The permitted alert-recipient list** (§14.4) — excludes Duarte and Koss.
