> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline & Section Analysis — Central Laboratory Manual

**Target document:** `/Users/dave/code/icf-please/docs/trial_documents/lab_manual.md`
**Study:** ROCKET-Horizon · Protocol 20210143, Amendment 3 (29-NOV-2023) · NCT05651711
**Central laboratory:** Meridian Central Laboratories (MCL) — Indianapolis IN / Geneva CH / Singapore
**Manual version to be authored:** Version 4.0, dated 28-NOV-2023
**Audience:** site personnel who draw, process, store, ship, and review specimens. At Site 1047
(Cascade Dermatology & Clinical Research, LLC) that is principally Marisol Duarte, MLT (ASCP), with
Priya Raghunathan, BSN, RN, CCRC as backup and Dr Okonkwo as the reviewing investigator.

---

## 1. What a laboratory manual is, and what it is *not*

### 1.1 The gap it fills

The protocol says "central safety labs (chemistry, hematology) at Screening, Day 1, Weeks 2, 4, 8,
12, 16, 20, 24, and 36." It says "PK sample, predose trough." It says the draw order is
serology/chemistry → hematology → PK → ADA → biomarker → genomic. What it does *not* say — and by
design must not say, because these details change faster than a protocol amendment cycle — is:

- which tube, in which colour, at which fill volume, inverted how many times;
- how long the SST may sit before the clot is complete, and what happens if it sits too long;
- what relative centrifugal force, for how long, at what temperature;
- how many aliquots of what volume go into which cryovial, carrying which barcode;
- what happens to a frozen aliquot at a site that has no −70 °C freezer;
- how many kilograms of dry ice a Portland-to-Indianapolis lane consumes;
- who at the site is permitted to accept a critical potassium result at 19:40 on a Thursday.

The laboratory manual is the answer to all of those. It is an **operational companion**, not a
regulatory commitment. Protocol governs; where the manual and the protocol appear to conflict, the
protocol wins and the conflict is reported to MCL and the CRO as a manual erratum. That precedence
clause belongs in the manual's opening pages, stated plainly, because a lab manual is exactly the
document a busy coordinator will treat as authoritative in the moment.

### 1.2 Scope boundary

This manual owns the **specimen lifecycle end to end**: kit → collection → processing → storage →
shipment → result → investigator review → query. It deliberately does **not** cover:

- Investigational product handling, storage, dispensing, or accountability — see the **Pharmacy
  Manual** and site SOP-007.
- eCRF screen-by-screen data entry — see the **EDC User Guide (Veriscribe EDC v9.2)**.
- Randomization and kit assignment transactions — see the **IRT User Guide (Axion IRT)**.
- AE and SAE definitions, causality, and reporting timelines — see the **Safety Reporting Manual**.
- Visit sequencing and rater workflow — see the **Study Reference Manual**.

Stating the boundary matters operationally: a coordinator who cannot find the answer here needs to
know *which other manual* to open, at 07:15, with a participant already in the chair.

---

## 2. Regulatory grounding — why each requirement exists

A lab manual that reads as arbitrary rules gets ignored. Each requirement in the manual should be
traceable to a named obligation. The manual will not carry footnotes on every line, but the author
must know the provenance of every rule so the wording carries the right weight ("must" vs "should").

### 2.1 ICH E6(R3) — laboratory certification, normal ranges, and the investigator's judgement

ICH E6(R3) carries forward the long-standing E6 expectations that the sponsor obtain and retain, as
essential documents, the **certification or accreditation, established quality control, and/or
current normal value ranges** for every laboratory performing protocol-specified testing. Three
consequences flow into the manual:

1. **The site must hold MCL's accreditation certificates and current reference ranges in the
   Investigator Site File.** MCL supplies them; the site files them; the CRA verifies them. When a
   range changes mid-study — and over a 20-month enrolment period at least one will — MCL reissues,
   and the *superseded* version is retained, not discarded. The manual must say this, because the
   most common ISF finding on a lab section is a missing or superseded range sheet with no
   effective-date trail.
2. **Reference ranges are how "abnormal" is defined.** E6(R3) reinforces the investigator's
   responsibility to make a clinical judgement about the significance of each abnormality, which is
   impossible without the range that was in force *on the date the sample was analysed*. Hence the
   manual's rule that every report prints the range applied, and that the site never substitutes a
   local hospital's range when reading a central report.
3. **Risk-proportionate quality.** E6(R3)'s quality-by-design framing lets the manual be explicit
   about which errors actually matter. A missing collection *time* on a chemistry sample is a minor
   data-cleaning nuisance; a missing collection time on a **PK trough** sample can render the
   concentration uninterpretable, because the value's meaning depends entirely on its position
   relative to the previous dose. The manual should rank its rules that way rather than presenting
   forty equally weighted instructions.

### 2.2 CLIA and CAP — why the site cares about someone else's accreditation

CLIA (42 CFR Part 493) is the US statutory floor: any laboratory examining human specimens for the
assessment of health must hold a CLIA certificate appropriate to the complexity of the testing it
performs. CAP accreditation is a voluntary, deemed-status programme whose inspection standard
exceeds CLIA's. ISO 15189 is the international analogue used by the Geneva facility.

For a *site*, this matters in three concrete ways that belong in the manual:

- **The site's own CLIA status constrains what it may do locally.** Site 1047 holds a
  **certificate of waiver (38D2178456)**. That permits waived-complexity testing — the urine
  point-of-care β-hCG — and nothing more. It does *not* permit the site to run its own chemistry or
  haematology on a study participant and call it protocol data. The manual must say so, because the
  practice next door has an analyser and the temptation exists.
- **A local lab used in an emergency becomes an essential-document obligation.** If a participant
  is sent to an emergency department and a local panel is drawn, the site must obtain that
  laboratory's CLIA certificate (or equivalent) and its normal ranges covering the date of the
  test, and file them. The manual gives the collection procedure for those documents, not just for
  the blood.
- **Accreditation defines what MCL will and will not accept.** A CAP-accredited lab has documented
  specimen-rejection criteria and must apply them. "The site would like us to run it anyway" is not
  a permissible override. This is why the haemolysis and QNS rules in the manual are absolute
  rather than negotiable.

### 2.3 21 CFR Part 11 — the lab's electronic results are regulated records

MCL's LIMS, the results portal, and the electronic transfer of results into Veriscribe EDC are all
Part 11 systems. The manual needs to make the site's obligations under that framework concrete:

- **Individual accounts, never shared.** Each user of the MCL portal has a unique ID and password;
  credentials are not shared, not written on a monitor, not left in a browser on a shared
  workstation. A shared login destroys attributability for every action taken under it.
- **Electronic signature = handwritten signature.** When Dr Okonkwo applies her electronic signature
  to a lab report in the portal, she is making the same legal attestation as an ink signature: that
  she has reviewed the report and assessed the clinical significance of every flagged value. The
  manual must state that signing without reading is a falsification, not a formality.
- **Audit trail.** Every view, signature, and query response is time-stamped and attributed. The
  site should understand that a report signed at 23:58 on the fifth business day, sixty seconds
  after it was first opened, is visible as such to a monitor and an inspector.
- **Access management on staff change.** When a coordinator leaves, portal access is revoked
  within a defined window and the change is documented. The manual assigns that duty (Regulatory
  Coordinator, Sam Oyelaran, at Site 1047) rather than leaving it ownerless.

### 2.4 IATA Dangerous Goods Regulations — UN3373 and UN1845

Every frozen shipment in this study is a **double dangerous goods consignment**: the specimens
themselves as **UN3373, Biological Substance, Category B** (Packing Instruction 650), and the dry
ice as **UN1845, Dry ice / Carbon dioxide, solid, Class 9** (Packing Instruction 954). The manual
must treat these as separate obligations that happen to travel in the same box, because sites
routinely think of dry ice as packaging rather than as a regulated substance with its own
declaration and net-weight marking.

Why the detail belongs in a *lab* manual rather than a shipping annex nobody reads:

- **The person packing is the person regulated.** IATA requires trained personnel; the training is
  role-based and expires (Site 1047's phlebotomist, Marisol Duarte, is certified through
  30-JUN-2026, and the manual should say what happens if she is out and her certification is the
  only one current).
- **The triple-packaging logic is a containment argument, not a form.** Primary receptacle
  (leak-proof, the cryovial or the tube); absorbent capable of taking up the *entire* liquid
  contents; secondary packaging (leak-proof, the sealed biohazard sleeve); rigid outer with the
  UN3373 diamond, the proper shipping name adjacent to it, and a responsible-person name and
  telephone number. The itemised list of contents goes *between* secondary and outer. Every element
  answers "what happens when this box is dropped from a conveyor at 02:00."
- **Dry ice sublimes and must vent.** A sealed pressure vessel of subliming CO₂ is a bomb; a package
  that vents is compliant. Hence "never seal the inner liner airtight," and hence the requirement to
  mark the **net weight of dry ice in kilograms** on the outer package, because that number is what
  the carrier uses to compute the aircraft's total Class 9 load.
- **Category B is not Category A.** The manual should say why: these are specimens from participants
  with atopic dermatitis, with screening serology performed but not necessarily negative. Category B
  is the correct classification for diagnostic/clinical specimens not meeting Category A criteria,
  and misclassifying upward is as much a compliance failure as misclassifying downward.

### 2.5 GCP: the investigator reviews and signs every lab report

This is one of the most consistently cited findings in FDA BIMO inspections of clinical sites, and
it is worth the manual explaining the reasoning rather than just the rule.

A central laboratory report is not data until a clinician has looked at it. The laboratory reports a
number and a flag; only the investigator can decide whether an ALT of 78 U/L in this participant, on
this drug, with this history, is clinically significant — and clinical significance is precisely
what converts an out-of-range value into an **adverse event**. If nobody reviews the report, nobody
makes that determination, and the study's safety database silently under-reports. The chain is:

> lab result → investigator review → clinical significance judgement → (if significant) AE entry →
> (if criteria met) SAE reporting to the CRO.

Break the first link and every subsequent link is missing. The manual therefore specifies a review
deadline (**5 business days**, per canon), names who may sign (PI or a delegated Sub-Investigator —
at Site 1047: Okonkwo, Feist, Nakamura; *not* the FNP, *not* a coordinator), and requires that the
signature be dated. It also needs to say what "review" means: annotating each flagged value as
clinically significant or not clinically significant, not merely applying a signature to a page.

---

## 3. Why the specific operational rules exist — the four essays the manual must contain

The manual will be read by people under time pressure. Four rules generate most of the study's
laboratory failures, and each deserves a short "why" paragraph in the body, not a footnote.

### 3.1 Why alert-value callback trees exist

A critical laboratory value is a clinical emergency detected by a machine in another state. The
participant is at home. The result exists inside MCL's LIMS in Indianapolis. The only thing standing
between a potassium of 6.4 mmol/L and a cardiac arrhythmia is a telephone call.

Portal delivery is insufficient for this class of result for three reasons: nobody is watching the
portal at 21:00; the report may sit unopened for days within the legitimate 5-business-day review
window; and email/portal notification provides no confirmation that a *human* received the
information. So a parallel, synchronous, human-to-human channel exists, with:

- **A clock** — MCL telephones the site within **1 hour** of result verification; the medical
  monitor is notified within **24 hours**.
- **A defined recipient class** — an alert result is clinical information and may be accepted only
  by a licensed clinician or registered nurse on the delegation log. At Site 1047 that means
  Okonkwo, Feist, Nakamura, Vega, or Raghunathan. Duarte (MLT) and Koss (CCRP) take the callback
  number and escalate; they do not receive the value. This is a deliberately awkward rule and the
  manual must justify it, or it will be quietly ignored.
- **Read-back** — the recipient repeats the analyte, the value, the units, and the participant ID
  back to the caller, exactly as in a hospital critical-value policy. Transcription of a decimal
  point is the failure mode.
- **A documentation artefact** — an alert-value receipt log entry with date, time, caller,
  recipient, value, and the clinical action taken. Without it, the call did not happen.
- **Escalation on non-contact** — MCL does not stop after one attempt; the manual gives the ladder
  (research line → after-hours pager → PI mobile → answering service) and the site's obligation to
  keep that ladder current.

### 3.2 Why draw order matters

The canonical order — **serology/chemistry → hematology → PK → ADA → biomarker → genomic** — is not
arbitrary sequencing for the coordinator's convenience. Three separate mechanisms are at work, and
the manual should name them:

1. **Additive carryover.** Tube additives cross-contaminate at the needle hub. The classic failure
   is EDTA (K₂ or K₃ salt) carried from a lavender-top into a subsequent serum tube: potassium is
   spuriously elevated and calcium spuriously depressed, because EDTA chelates calcium. A
   pseudo-hyperkalaemia of 6.8 mmol/L triggers an alert call, an unnecessary redraw, possibly an
   unnecessary clinical work-up, and a protocol deviation. Drawing serum tubes **before** EDTA
   eliminates the mechanism. Heparin carryover interferes differently, biasing some immunoassays.
2. **Time-sensitivity and the trough clock.** PK and ADA are trough samples whose interpretation
   depends on the interval since the last dose and, at this visit, the interval *before* the
   injection. They sit early in the sequence so that the whole venepuncture completes well before IP
   administration, and so that a difficult draw does not push the PK tube past the predose boundary.
3. **Salvage priority.** Draw order is also a triage order. If a vein fails halfway through, the
   tubes already filled are the ones that were most important to fill. Safety chemistry and
   haematology protect the participant; PK/ADA/biomarker are irreplaceable at that visit (you cannot
   redraw a Week 12 trough on Week 13); the optional genomic sample can be drawn at any later visit
   if consent allows. Losing the genomic tube is an inconvenience. Losing the chemistry tube is a
   safety gap. The order matches that hierarchy, and the manual should say so, because it tells the
   phlebotomist what to abandon when a draw goes wrong.

### 3.3 Why haemolysis is the single most common cause of a lost PK sample

Haemolysis is red-cell rupture releasing intracellular contents into the serum or plasma. It is the
most frequent pre-analytical rejection reason in clinical trials, and it kills PK samples
specifically because:

- **The PK tube is a plain serum tube with a long clot time and no gel barrier** in many designs,
  so it accumulates handling risk (mixing, transport, delayed spin) that a gel tube partially
  shields against.
- **Free haemoglobin is optically and chemically interfering.** Ligand-binding assays used for
  serum drug concentration and for ADA are vulnerable to haemoglobin's absorbance and to released
  proteases and phospholipids; a validated assay's acceptance criteria will simply exclude a
  haemolysed matrix.
- **A haemolysed PK sample cannot be replaced.** A haemolysed chemistry can be redrawn tomorrow; the
  chemistry is still a valid Week 12 safety sample within the window. A trough PK sample redrawn
  after the injection is not a trough sample at all. It is gone.

The mechanical causes are all site-controllable and the manual must list them as an actionable
checklist rather than a warning: needle gauge too small (use 21G or 22G; avoid 25G for study draws),
excessive vacuum against a collapsing vein, prolonged tourniquet time (>1 minute), fist pumping,
drawing through a line without discarding, vigorous shaking instead of gentle inversion, transport
in a pneumatic tube, freezing whole blood, and delayed centrifugation. Each cause maps to a
countermeasure, and the manual should present it in that two-column form.

### 3.4 What a "quantity not sufficient" (QNS) result costs a study

QNS is what MCL reports when the specimen physically cannot support the requested testing: an
under-filled tube, a short spin yielding too little serum, aliquots below the assay's minimum
volume, or volume consumed by a repeat that leaves nothing for the reflex.

The cost is layered and the manual should spell it out, because "QNS" reads as a shrug and is not:

- **Immediate clinical cost.** A QNS chemistry at a dosing visit may mean dosing proceeds without a
  current safety panel, or is delayed, or the participant returns for a redraw — an extra
  venepuncture, an extra trip, a dissatisfied participant, and a stipend the site pays again.
- **Data cost.** A QNS at a key timepoint is a missing value. At Week 24 — the primary endpoint
  visit — a missing safety panel weakens the safety dataset for that participant permanently. A
  missing PK trough removes one point from a sparse-sampling design where each participant
  contributes only seven.
- **Compliance cost.** A required protocol assessment not performed is a **protocol deviation**,
  logged, reported, trended by the CRA, and summarised in the clinical study report. Repeated QNS at
  one site is a quality signal that draws a for-cause monitoring visit.
- **Blinding cost.** If a QNS forces an unscheduled redraw and that redraw is mishandled, the
  blinded PK/ADA workflow can be disturbed.
- **Financial cost.** Kits are consumed, courier and dry-ice charges are incurred, and reimbursement
  for the visit may be reduced if the procedure was not completed.

Prevention is entirely pre-analytical: fill every tube to the fill line (vacuum tubes are calibrated
to a specific draw volume and an under-filled additive tube is also a wrong additive-to-blood
ratio), do not split one tube across two assays, and never "top up" a partially filled tube from a
second venepuncture.

---

## 4. Section-by-section plan for `lab_manual.md`

Below is the section list to be authored, with the purpose and the must-include content for each.
Target length 6,000–8,000 words.

| § | Section | Purpose / must include |
|---|---|---|
| — | Banner, cover block | Version 4.0, 28-NOV-2023; protocol, NCT, EU CT; MCL identity; supersedes v3.0 |
| — | Version history | v1.0 through v4.0 with what changed; v4.0 aligns to Amendment 3 |
| 1 | Purpose, scope, precedence | What this manual owns; what it does not (Pharmacy Manual, EDC User Guide, IRT User Guide, Safety Reporting Manual, SRM); protocol precedence |
| 2 | Contacts | MCL 24/7 help desk, MCL sample management, courier, CRO/CRA, medical monitor, Site 1047 internal roles |
| 3 | Quick reference — what to draw at every visit | One-page grid derived **exactly** from SoA §5; total volume per visit |
| 4 | Central laboratory overview | Three MCL facilities; Indianapolis serves Site 1047; CLIA, CAP, ISO 15189; reference-range convention and update process; SI vs conventional units |
| 5 | Kits: types, contents, colour, expiry, ordering, par levels, storage, expired-kit handling | Six kit types + QFT sub-kit; contents table; 10-business-day lead time; par level for ~14 participants |
| 6 | Requisition form | Blank form reproduced in markdown; field-by-field completion; the five rejection-generating rules incl. participant ID format and the no-name rule |
| 7 | Specimen collection | Preparation; WOCBP pregnancy testing before dosing; draw order + rationale; tube/volume table; inversions; labelling at the bedside; predose trough rule; per-visit and cumulative volume |
| 8 | Special collections | QuantiFERON-TB Gold Plus four-tube procedure; pregnancy testing; optional genomic sample and consent verification |
| 9 | Processing | Clot times; centrifuge settings by tube (g, rpm at 180 mm, temperature, duration); draw-to-spin limits; aliquot scheme; cryovial labelling; centrifuge-down contingency |
| 10 | Storage before shipment | Ambient / refrigerated / frozen; **the −20 °C constraint**; maximum hold times; freezer alarm response; no freeze-thaw |
| 11 | Shipping | Schedules by category; UN3373 triple packaging; UN1845 dry ice; manifest and airway bill; courier cut-offs; **no Friday/pre-holiday shipments**; Airgas lead time; dry-ice quantity; missed pickup |
| 12 | Excursions and lost shipments | MCL notification; salvage assessment; redraw decision |
| 13 | Results | Turnaround by panel; portal + EDC delivery; **PI/Sub-I review, sign, date**; 5-business-day rule; clinically significant abnormality → AE |
| 14 | Alert (panic) values | Threshold table; callback tree; permitted recipients; documentation; Hy's law pathway |
| 15 | Blinded vs unblinded analytes | PK, ADA, biomarker withheld; why; receipt confirmation without result |
| 16 | Local laboratory use | When permitted; certification and ranges for the ISF; data entry |
| 17 | Repeat and unscheduled testing | Ordering, labelling, appearance in data |
| 18 | Query resolution | Common queries and prevention |
| A–G | Appendices | Kit contents; tube/volume/handling matrix; blank requisition; shipping checklist; dry-ice aid; alert values; contact card |

### 4.1 Notes on the hardest sections

**§3 Quick reference.** Must be derived mechanically from the SoA. Points of care: Weeks 28 and 32
have **no laboratory draws at all** (safety follow-up visits with clinical assessments only) — the
manual should call this out explicitly because it is counter-intuitive that a "safety follow-up"
visit takes no safety labs. Week 20 and Week 8 take chemistry/haematology and a urine pregnancy test
only. PK is drawn at seven visits (Day 1, W2, W4, W12, W16, W24, W36); ADA at five (Day 1, W4, W12,
W24, W36); biomarker at four (Day 1, W4, W12, W24); genomic once (Day 1).

**§7 Draw order and predose.** The single most consequential operational instruction in the manual.
It must state: PK and ADA are **trough** samples; they are drawn **before** the injection; the
collection time of the sample **and** the administration time of the injection are both recorded;
and the injection is not given until the draw is complete and the pregnancy result is in hand.

**§10 Storage.** This is where Site 1047's constraint bites and the manual must address it head-on
rather than assuming a −70 °C freezer exists. The structure is: (a) MCL's assay-validated frozen
storage target is −70 °C or colder for long-term; (b) sites without ultra-low capability hold
aliquots at −20 °C for a **bounded** period backed by MCL's short-term stability data; (c) therefore
hold time becomes the controlling variable and shipment scheduling is not discretionary; (d)
therefore dry ice must be ordered *before* the sample exists, on a 24-hour lead time, which means
the frozen shipment is planned at visit-scheduling time, not on the day. That causal chain is the
core of the section.

**§11 Shipping.** Needs to be long and checklist-shaped. The Friday rule deserves its own reasoning:
a frozen shipment arriving to a closed dock spends the weekend on sublimating dry ice; MCL's
Indianapolis specimen-receiving operates limited weekend hours; and a dry-ice charge is bounded by
sublimation, not by intent. Same for the day before a US federal holiday.

**§14 Alert values.** The threshold table is invented and must be internally consistent with the
chemistry and haematology panels in canon §8 (so: ALT, AST, total bilirubin, ALP for the Hy's law
triad; creatinine; potassium and sodium; ANC from the 5-part differential; platelets; haemoglobin).
The Hy's law pathway must cross-reference the Safety Reporting Manual rather than restating SAE
criteria.

**§15 Blinding.** The subtle point the manual must not fumble: **absolute eosinophil count appears in
two places** — in the haematology differential (released to the site as a safety result) and in the
biomarker panel (withheld). The manual must state that these are not in conflict and that the site
sees the safety eosinophil value normally.

---

## 5. Facts that must be honoured (traceability to canon)

| Canon source | Fact the manual must reflect |
|---|---|
| §1 | Protocol 20210143, Amendment 3, 29-NOV-2023; NCT05651711; EU CT 2022-501538-44; IND 145,882 |
| §2 | SIMULATION banner verbatim, first |
| §4 | 300 mg = 2 PFS SC; 7 doses; no dose at Week 24 — drives the predose/trough rule |
| §5 | Visit list, windows, and the exact assessment grid — the manual may not add or move a sample |
| §8 | Panel contents; draw order; alert callback 1 h / 24 h; 5-business-day investigator review |
| §9 | MCL identity, three cities, +1 (800) 555-0133, 24/7 |
| §11 | Date format, participant ID `1047-001`, 2–8 °C en-dash form, 24-h clock with time zone |
| RESEARCH_SITE §2 | Duarte MLT (IATA to 30-JUN-2026); Raghunathan RN backup; Okonkwo/Feist/Nakamura as signers |
| RESEARCH_SITE §3 | Eppendorf 5810R refrigerated swing-bucket; −20 °C upright alarmed freezer; **no ultra-low**; Airgas Portland, 24 h notice |
| RESEARCH_SITE §1 | CLIA certificate of **waiver** 38D2178456 — limits local testing to waived POC |
| RESEARCH_SITE §7 | SOP-009 (temperature excursion), SOP-015 (specimen collection/processing/shipment), SOP-018 (deviations) |

## 6. Deliberate invention list (to be logged in the assumptions fragment)

The ClinicalTrials.gov record contains **no laboratory information whatsoever** — no panels, no
volumes, no vendor, no schedule of samples beyond what the assessment grid implies. Everything
operational in this manual is invented. The assumptions file must log at minimum: tube types and
volumes; per-visit and cumulative blood volume; centrifuge g-force/rpm/temperature/duration by tube;
clot and draw-to-spin time limits; aliquot counts and volumes; cryovial and barcode scheme; kit
names, colours, contents, expiry and lead times; par levels; requisition field set; alert-value
thresholds; turnaround times; −20 °C hold-time limits; dry-ice quantities and sublimation rate;
courier identity and cut-off times; MCL accession-number format; and the local-lab documentation
process.
