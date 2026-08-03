> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

---

# INVESTIGATIONAL PRODUCT HANDLING MANUAL

## Clinical Supply Manual — Rocatinlimab (MER 451) and Matching Placebo

### Protocol 20210143 — ROCKET-Horizon

---

| | |
|---|---|
| **Sponsor** | Meridian Biotherapeutics, Inc., 1200 Kestrel Way, Emeryville, CA 94608, USA |
| **Protocol number** | **20210143** |
| **ClinicalTrials.gov** | NCT05651711 |
| **EU CT number** | 2022-501538-44 |
| **Study title** | A Phase 3, Randomized, 24-week, Placebo-controlled, Double-blind Study to Assess the Efficacy, Safety and Tolerability of Rocatinlimab (MER 451) Monotherapy in Adult Subjects With Moderate-to-severe Atopic Dermatitis (AD) |
| **Investigational product** | Rocatinlimab (MER 451) 150 mg/1.0 mL prefilled syringe, and matching placebo |
| **Document** | Investigational Product Handling Manual (Clinical Supply Manual) |
| **Version** | **Version 3.0** |
| **Effective date** | **20-NOV-2023** |
| **Supersedes** | Version 2.1, dated 07-JUL-2023 |
| **Document owner** | Meridian Global Clinical Supply Chain, with Meridian Clinical Supply Quality |
| **Applies to** | All investigational sites, all regional and in-country depots, GlobalRx Logistics, Axion Clinical Systems, and Harborlight Clinical Research, Inc. |

**Confidentiality.** This manual is the confidential property of Meridian Biotherapeutics, Inc. It is provided to
investigators, site staff, contracted vendors, and reviewing ethics committees solely for the conduct
or oversight of Protocol 20210143. Retain this version and all superseded versions in the
Investigator Site File.

---

## DOCUMENT HISTORY

| Version | Date | Principal changes |
|---|---|---|
| 1.0 | 15-SEP-2022 | Original issue for study start-up. Depot network, shipper qualification, IRT supply parameters. |
| 2.0 | 10-MAR-2023 | Addition of the Singapore regional depot and in-country depots for Brazil, Japan, Mexico, South Korea, Türkiye and South Africa following country activations. Lane list expanded to 34 qualified lanes. |
| 2.1 | 07-JUL-2023 | Correction to the temperature excursion reporting route (all excursions now raised through the IRT Temperature Excursion transaction rather than by email). Turnaround target formalised at 3 business days. |
| **3.0** | **20-NOV-2023** | **Current version.** Migration to ColdTrace ST-4 electronic data loggers in all shipments (paper chart recorders discontinued). Expiry-extension procedure added (§7.4) ahead of the first batch extension. IRT predictive-resupply algorithm re-parameterised for the enrollment tail. Destruction authorisation template revised (Appendix C). Recall section rewritten to include the participant-exposure pathway (§15.5). |

**Training.** Version 3.0 requires documented retraining of all site personnel delegated for
investigational product receipt, storage, accountability, or returns, and of all depot personnel.
Training must be recorded before the site's next investigational product shipment.

---

## 1. PURPOSE

This manual describes how investigational product for Protocol 20210143 is manufactured, packaged,
labelled, certified, released, stored, distributed, monitored, reconciled, and destroyed. It defines
the responsibilities of the sponsor, the depot network, the courier, the interactive response
technology (IRT) provider, and the investigational site, and it defines the interfaces between them.

It exists because a site cannot make good decisions about a carton of drug without knowing what
stands behind it. A coordinator who understands that a kit's expiry date is a stability claim, that
an excursion is debited from a budget that does not reset, and that a resupply shipment is generated
by an algorithm rather than a person, files better reports and asks better questions.

---

## 2. SCOPE AND BOUNDARIES

### 2.1 What this manual covers

The investigational product supply chain from drug substance manufacture to final destruction and
record archival, including: manufacturing and blinded packaging; labelling design and label change
control; Qualified Person (QP) certification and country release; depot operations; qualified
shipping lanes and cold-chain transport; the IRT supply and resupply algorithm; sponsor-side
temperature excursion triage and disposition; quarantine; product complaints and quality defects;
recall; returns, reconciliation and destruction authorisation; blinding integrity across the supply
chain; and end-of-study close-out.

### 2.2 What this manual does **not** cover

Site-side operational practice is governed by the **Pharmacy Manual for Protocol 20210143** and by
the site's own procedures (at Site 1047: **SOP-007** *Investigational Product Receipt, Storage, and
Accountability*, and **SOP-009** *Temperature Excursion Response*). The Pharmacy Manual owns: site
receipt inspection, including the bench sequence for the data logger; the site refrigerator, its
qualification, continuous monitoring, daily log review and first-hour alarm response; the dispensing
double-check and the IRT dispensing transaction at the visit; syringe preparation, the 30-minute
room-temperature equilibration and injection technique; and the site accountability log.

Where the two documents meet, this manual states the sponsor's requirement and refers to the
Pharmacy Manual for the procedure. **Neither document overrides the protocol.** In case of conflict:
**Protocol 20210143, Amendment 3 (29-NOV-2023)** governs; then the Pharmacy Manual for site-side
operations; then this manual.

---

## 3. CONTACTS AND ESCALATION

| Function | Organisation | Contact | Hours |
|---|---|---|---|
| **Supply, orders, forecasts, shipment scheduling** | Meridian Global Clinical Supply Chain | `clinicalsupply.20210143@meridianbio-sim.example` · +1 (866) 555-0180 | Mon–Fri 07:00–18:00 PT |
| **Temperature excursions, dispositions, quarantine release** | Meridian Clinical Supply Quality (CSQ) | `csq.excursions@meridianbio-sim.example` · +1 (866) 555-0182 | Mon–Fri 06:00–18:00 PT; on-call for urgent flags |
| **Product complaints and quality defects** | Meridian Product Quality Complaints | `productquality@meridianbio-sim.example` · +1 (866) 555-0181 | 24/7 intake |
| **Shipments in transit, delivery failures, returns pickup** | GlobalRx Logistics — Control Tower | +1 (800) 555-0172 | 24/7 |
| **Depot enquiries (Americas)** | GlobalRx Logistics, Memphis TN (GRX-MEM-01) | +1 (901) 555-0173 | Mon–Fri 08:00–18:00 CT |
| **General courier line** | GlobalRx Logistics | +1 (800) 555-0171 | Mon–Fri 08:00–18:00 local |
| **IRT transactions, kit status, unblinding** | Axion IRT (Axion Clinical Systems) | `helpdesk@axionirt.com` · +1 (800) 555-0164 | 24/7 |
| **Sponsor GCP Quality Assurance** | Meridian GCP QA | `gcpqa.20210143@meridianbio-sim.example` | Mon–Fri |
| **Site 1047 monitor** | Kevin Ostrander, CCRA (HCR) | `k.ostrander@harborlightcro.com` · +1 (503) 555-0188 | Business hours |
| **Clinical Trial Manager** | Rosalind Achebe (HCR) | `r.achebe@harborlightcro.com` · +1 (888) 555-0145 | Business hours |

The escalation matrix by symptom is at **Appendix F**. Sites should use it rather than defaulting to
the CRA; the CRA cannot disposition product and routing an excursion through the monitor typically
adds a full business day.

---

## 4. PRODUCT

| Attribute | Value |
|---|---|
| Active | Rocatinlimab (MER 451), fully human anti-OX40 (CD134) IgG1 monoclonal antibody |
| Presentation | Single-use prefilled syringe (PFS), **150 mg/1.0 mL** |
| Kit | Carton of **2 PFS**. **One carton = one dose = 300 mg**, given as two separate subcutaneous injections at the same visit |
| Comparator | **Matching placebo** — identical PFS, identical fill volume, identical carton, identical label text; also 2 injections |
| Regimen | Day 1, Week 2 (loading dose), then Q4W at Weeks 4, 8, 12, 16 and 20 — **7 doses total**. No dose at Week 24 |
| Storage | **2–8 °C**, in the original carton, protect from light. **Do not freeze. Do not shake.** |
| Excursion allowance | Cumulative **≤ 30 days at ≤ 25 °C** across the life of the kit |
| Shelf life | 36 months from date of manufacture when stored at 2–8 °C |
| Kit numbering | 6 digits, range 100001–999999, assigned by Axion IRT |
| Blinding | Rocatinlimab and placebo are visually indistinguishable in every respect. **No unblinded pharmacist is required at the site.** |

Scientific characterisation of the product is in the **Investigator's Brochure, Edition 6.0
(15-AUG-2023)**. This manual carries only the facts on which a supply decision depends.

---

## 5. SUPPLY CHAIN OVERVIEW

```
 ┌──────────────────────────────────┐
 │  DRUG SUBSTANCE MANUFACTURE      │   Meridian Emeryville, CA, USA
 │  Cell culture, purification      │
 └───────────────┬──────────────────┘
                 │  bulk DS, frozen, intra-company shipment
                 ▼
 ┌──────────────────────────────────┐
 │  DRUG PRODUCT FILL-FINISH        │   Meridian Manufacturing Limited,
 │  Formulation, sterile fill into  │   Juncos, Puerto Rico
 │  1 mL PFS, needle-shield assembly│
 └───────────────┬──────────────────┘
                 │  unlabelled bulk PFS, quarantined
                 ▼
 ┌──────────────────────────────────┐
 │  BLINDED CLINICAL PACKAGING      │   Meridian Clinical Supply Operations,
 │  Primary label · carton assembly │   Juncos, Puerto Rico
 │  (2 PFS) · booklet label · kit   │
 │  numbering · blinded bulk        │
 └───────────────┬──────────────────┘
                 │
        ╔════════▼═════════════════════════════╗
        ║  GATE 1 — QP CERTIFICATION           ║  Meridian Europe B.V., Breda, NL
        ║  Batch certified against the         ║  MIA(IMP) NL/MIA-IMP/2019/0087
        ║  Product Specification File          ║  QP: M. van der Zanden, PharmD
        ╚════════╤═════════════════════════════╝
                 │
        ╔════════▼═════════════════════════════╗
        ║  GATE 2 — COUNTRY / SITE RELEASE     ║  Meridian Clinical Supply Chain
        ║  CTA + ethics approval + import      ║  Recorded as available stock
        ║  licence + site green-light in IRT   ║  in Axion IRT
        ╚════════╤═════════════════════════════╝
                 ▼
 ┌───────────────────────────────────────────────────────────────┐
 │                     REGIONAL DEPOTS                           │
 │  GRX-MEM-01  Memphis, TN, USA      → Americas                 │
 │  GRX-BRE-01  Breda, Netherlands    → Europe, UK, Türkiye      │
 │  GRX-SIN-01  Singapore             → Asia-Pacific, S. Africa  │
 └───────────────┬───────────────────────────────────────────────┘
                 │  onward to in-country depots where national law requires
                 │  (São Paulo · Osaka · Mexico City · Incheon · Istanbul ·
                 │   Johannesburg · Sydney)
                 ▼
 ┌───────────────────────────────────────────────────────────────┐
 │  GlobalRx Logistics — qualified cold-chain courier            │
 │  Validated PCM shipper + ColdTrace ST-4 data logger           │
 └───────────────┬───────────────────────────────────────────────┘
                 ▼
 ┌───────────────────────────────────────────────────────────────┐
 │  INVESTIGATIONAL SITE — 2–8 °C, locked, monitored             │
 │  → Pharmacy Manual takes over here                            │
 └───────────────────────────────────────────────────────────────┘
```

**Site 1047 (Cascade Dermatology & Clinical Research, LLC, Portland, Oregon) is supplied from
GRX-MEM-01, Memphis, Tennessee, over qualified lane NA-07.** Typical transit is 24–36 hours in a
96-hour qualified configuration.

### 5.1 The two gates

The most common supply misunderstanding at sites is the belief that product physically present in a
depot is product a site can order. It is not. **Gate 1** is QP certification, a GMP act (§8.1).
**Gate 2** is country and site release, a regulatory and operational act performed by Meridian Clinical
Supply Chain (§8.2). Product that has passed Gate 1 but not Gate 2 sits in the depot's warehouse
management system as **unreleased** and does not exist as far as IRT is concerned. If IRT reports
zero available inventory for a country in which the depot visibly holds stock, the cause is almost
always Gate 2.

---

## 6. MANUFACTURING, PACKAGING, AND BLINDING

### 6.1 From drug substance to drug product

Rocatinlimab drug substance is produced in mammalian cell culture at Meridian Emeryville and shipped
frozen to Meridian Manufacturing Limited in Juncos, Puerto Rico, where it is thawed, formulated,
sterile-filtered, and filled into 1 mL long glass syringe barrels at 150 mg/1.0 mL. Assembled
syringes are held unlabelled in quarantine at 2–8 °C pending quality control release.

Matching placebo is filled on the same line, in a separate campaign under full line clearance, using
the identical formulation buffer without the antibody. Fill volume, syringe componentry, closure and
solution appearance are matched, and the formulations are matched for viscosity so that injection
force and injection duration are not distinguishable by the participant or the administering staff.

### 6.2 Blinded packaging operations

Clinical packaging is performed at Meridian Clinical Supply Operations, Juncos, under blinded
conditions:

- Active and placebo are **never packaged simultaneously**. Each campaign is preceded and followed by
  documented line clearance and component reconciliation.
- Syringe and carton labels are drawn from a **single approved artwork** used for both products.
  There is no active-specific or placebo-specific label version.
- Two syringes are packed per carton with the insert; the booklet label is applied; the kit number is
  applied last, from the study's kit-number sequence.
- A QC over-check of label legibility, kit-number uniqueness and carton contents is performed on a
  sampled basis by personnel who are not told which campaign they are checking.
- Certified batches are held as **blinded bulk** — physically indistinguishable cartons differing
  only in kit number — until allocated to a depot.

### 6.3 The randomisation-to-kit-number linkage

The randomisation schedule is generated by an independent, unblinded Meridian biostatistician using a
validated system, in permuted blocks, stratified by geographic region (North America / Europe /
Asia-Pacific / Rest of World) and baseline vIGA-AD score (3 vs 4), to a **3:1** allocation.

A separate **medication list** maps each 6-digit kit number to a medication type (A or B). Kit
numbers are drawn from **one interleaved sequence** across both campaigns: they are not blocked,
banded or otherwise patterned by treatment, and no property of a kit number carries information about
its contents. The list is generated before packaging and transmitted under controlled conditions to
the packaging line's labelling system and to Axion IRT.

**Who holds the code.** The randomisation schedule and the medication list are held in the Meridian
secure code repository, by the unblinded biostatistics group, and in the Axion IRT production
database. No copy is held by the clinical study team, the CRO, the CRA, the depot, the courier or any
site. Depot systems handle kits by number and by a non-semantic type flag only.

**A note on the label.** The clinical label carries the **packaging batch number**, not the drug
product lot number. Rocatinlimab and placebo lots are distinct, and printing them would unblind the
study on sight. The packaging batch number is common to both arms within a campaign and is traceable
to the underlying lots through the sponsor-held batch record.

---

## 7. LABELLING

### 7.1 Mandatory content

The clinical label complies with EU GMP Annex 13 (Annex VI) §26 and, for United States sites, with
21 CFR 312.6. It carries:

1. Name, address and telephone number of the sponsor, and the contact for information on the product
   and for emergency unblinding;
2. Pharmaceutical dosage form, route of administration, and quantity of dosage units;
3. **Batch (packaging) number**;
4. Trial reference code permitting identification of the trial, the site and the investigator;
5. **Kit number**, and space for participant identification number and visit;
6. Investigator and site identification fields;
7. Directions for use, or reference to the protocol and Pharmacy Manual;
8. **"For clinical trial use only"** and, for US supply, **"Caution: New Drug — Limited by Federal
   (or United States) law to investigational use"**;
9. Storage conditions;
10. Expiry (use-by) date, expressed as month and year in an unambiguous format;
11. **"Keep out of the sight and reach of children."**

A rendered example is at **Appendix A**.

### 7.2 The multi-language booklet label

ROCKET-Horizon runs at 151 activated centres in **21 countries**. A single global label design is
used, implemented as a **multi-page booklet label** affixed to the carton along one edge and sealed
with a tamper-evident tab. The booklet carries identical mandatory content in every required
language; the outermost page carries the English text and the machine-readable kit-number barcode.

One artwork means one approval cycle, one translation verification, one change-control event and —
critically — **one physical kit that can be shipped anywhere the study is open**. Country-specific
labelling would fragment inventory into national pools that cannot be re-deployed and would make
every amendment a global relabelling exercise. The cost is bulk: the booklet thickens the carton and,
if opened carelessly, the pages can tear free of the sealing tab. **A booklet label that has become
detached renders the kit unusable**; quarantine it and report it as a quality defect under §14.

### 7.3 The tear-off accountability portion

The lower portion of the outer label is a **detachable, perforated panel** carrying the kit number,
packaging batch number, expiry date, and fields for participant identification number, visit, date
and dispenser initials. It is removed at dispensing and affixed to the site's accountability record,
giving a physical, non-transcribed link between kit and participant. All mandatory particulars are
duplicated above the perforation, so removal strips nothing from the carton. **How the tear-off is
used at the bench is governed by the Pharmacy Manual.**

### 7.4 Expiry extension in the field

Investigational product shelf life is frequently extended as real-time stability data accumulate.
Annex 13 permits the extension to be executed by over-labelling at the site, by trained personnel,
under sponsor authorisation and with second-person verification. The procedure is:

1. **Stability decision.** Meridian stability sciences supports an extension for a named packaging
   batch. The change is approved under sponsor change control and the QP is notified.
2. **Relabelling authorisation.** Meridian Clinical Supply Chain issues a batch-specific written
   **Relabelling Authorisation** naming the batch, the current and new expiry dates, the effective
   date, and the sites holding affected inventory.
3. **Expiry-extension notice and label kit.** The site receives an **Expiry Extension Notice**
   (Appendix B) and a sealed set of pre-printed over-labels — one per affected kit plus a controlled
   overage — each bearing the batch and the new expiry date. Over-labels are serialised and must be
   reconciled; unused labels are returned.
4. **IRT update.** Meridian updates the expiry date held in IRT for the batch, with an effective date
   and time recorded in the audit trail.
5. **Site execution.** A delegated person applies one over-label to each affected kit so that it
   covers the printed expiry date and no other mandatory particular. A **second delegated person
   independently verifies** each kit; both sign. The signed notice and label reconciliation are
   returned to Meridian Clinical Supply Chain within **5 business days**.
6. **Confirmation.** Meridian confirms receipt and closes the action.

Two rules are absolute.

> **The site never extends an expiry date on its own judgement, on a verbal instruction, or on the
> basis of an email that is not the Relabelling Authorisation.**
>
> **The physical label and the IRT expiry record must agree before the affected kits are dispensed
> again.** If IRT shows the extended date and the carton does not, or vice versa, the kit is
> quarantined and Meridian Clinical Supply Chain is contacted before use.

---

## 8. QP RELEASE AND CERTIFICATION

### 8.1 What certification means

Under EU CTR Article 62 and Delegated Regulation (EU) 2017/1569, the Qualified Person of the
manufacturing and import authorisation holder must ensure, before a batch is used in a clinical trial
in the European Union, that it has been manufactured and checked in accordance with GMP and with the
**Product Specification File** for the trial, and — for product manufactured outside the EU — to at
least equivalent standards. The QP records this determination in a register. That act is
**certification**.

For Protocol 20210143, certification is performed by the QP of **Meridian Europe B.V., Breda,
Netherlands**, holder of MIA(IMP) **NL/MIA-IMP/2019/0087**. Product packaged in Juncos is imported
under that authorisation, subject to the importation testing and documentation review it requires,
and certified there. The same certification record supports supply to the non-EU countries in the
study, so a single global batch disposition governs all 21 countries. **No site in the European Union
may receive investigational product that has not been QP-certified**, irrespective of where it was
manufactured.

### 8.2 Certification is not release

Certification attests batch quality. It does not authorise supply to any particular country or site.
**Release** is the sponsor's determination that a certified batch may be issued to a named country
and site, and requires all of: clinical trial authorisation in that country; a favourable ethics
opinion for that site; essential documents complete and the site green-lit; a valid import licence
where required; and no open quality hold on the batch.

### 8.3 The release documentation trail

| Record | Held by |
|---|---|
| Batch manufacturing and packaging records | Meridian Manufacturing Limited / Clinical Supply Operations |
| Certificates of Analysis (drug substance, drug product, packaged batch) | Meridian Quality Control |
| Product Specification File, including approved label artwork and the randomisation/code-break arrangements | Meridian, maintained for the life of the trial |
| **QP certification statement** in the certification register | Meridian Europe B.V., Breda |
| Country release memorandum | Meridian Clinical Supply Chain |
| Shipment authorisation and inventory availability record | Axion IRT |
| Shipping list and proof of delivery | GlobalRx Logistics |

Sites do not receive these records; the site-facing evidence of release is that the product is
available to order in IRT. The trail is made available to regulatory inspectors and to sponsor GCP QA
on request.

---

## 9. SHIPPING AND COLD CHAIN

### 9.1 Validated shipper configurations

All investigational product moves in validated passive shippers using **phase-change material (PCM)
conditioned to +5 °C**. Dry ice is not used: it is unnecessary for a 2–8 °C product, it introduces a
freezing risk that would be fatal to a monoclonal antibody, and it would bring the shipment into
scope as UN1845 Class 9 dangerous goods.

| Configuration | Payload | Qualified duration | Typical use |
|---|---|---|---|
| **GlobalRx ChillGuard CG-8** | up to 8 kits | **96 hours** | Domestic and short international lanes, including NA-07 (Memphis → Portland) |
| **GlobalRx ChillGuard CG-24** | up to 24 kits | **120 hours** | Long-haul, inter-regional, and lanes carrying customs-clearance risk |

Each shipper is packed to a fixed, documented packout: vacuum-insulated outer, conditioned PCM frame,
corrugated payload well, the kits in their original cartons, a payload-adjacent data logger, void
fill, and a lid with tamper-evident seals. Partial packouts are not permitted; under-filled shippers
are made up with dunnage, because thermal performance is qualified for the packout, not the product.

### 9.2 Electronic temperature data logger

**Every shipment contains one ColdTrace ST-4 single-use electronic data logger**, placed inside the
payload well adjacent to the cartons — not taped to the outside of the shipper, where it would
record ambient rather than product temperature.

| Parameter | Setting |
|---|---|
| Sampling interval | 5 minutes |
| Start | Activated by the depot at packout; a 30-minute start delay excludes the packing operation |
| Stop | Stopped by the receiving site at receipt |
| Alarm A (low) | Any reading **< 2.0 °C**, cumulative **> 60 minutes** |
| Alarm B (high) | Any reading **> 8.0 °C**, cumulative **> 240 minutes** |
| Alarm C (freeze) | Any single reading **≤ −0.5 °C** — immediate quarantine, no cumulative allowance |
| Alarm D (heat) | Any single reading **> 30.0 °C** |
| Readout | On-device LED status (OK / ALARM) plus a PDF report generated automatically when the logger is connected to a computer by USB |

The logger's PDF report — not the LED, and not the appearance of the shipper — is the record. It is
filed in the Investigator Site File with the receipt documentation and a copy is uploaded to IRT
with the receipt transaction.

**Site obligations, stated here for completeness; the bench procedure is in the Pharmacy Manual:**
stop the logger at receipt, download the PDF before placing product into the refrigerator, do not
discard the logger until the receipt transaction is complete, and, if any alarm is indicated, hold
the entire shipment in quarantine at 2–8 °C and report under §12 within 24 hours. Loggers are not
returned to the depot.

### 9.3 Qualified lanes

A **lane** is a specific origin–destination–carrier–service-level combination. Qualification consists
of documented thermal performance of the packout against seasonal ambient profiles derived from ISTA
7E summer and winter conditions, plus route data on transit time, customs dwell and handover points.
Thirty-four lanes are qualified for this study. A shipment may only move on a qualified lane; ad hoc
routing requires a documented risk assessment and Meridian Clinical Supply Quality approval before
dispatch. Lanes are requalified every 24 months, on any change of carrier, service level or shipper
configuration. A lane with two temperature-related failures in a rolling 12 months is suspended
pending investigation and its sites are re-routed.

**Lane NA-07 (GRX-MEM-01 Memphis → Site 1047, Portland OR):** CG-8 configuration, next-flight-out air
with ground final mile, typical transit 24–36 hours against a 96-hour qualification, delivery
Monday–Thursday only so that no shipment sits over a weekend. Site 1047's clinic hours are registered
with GlobalRx; deliveries outside them are held at the local station and re-attempted, never left.

### 9.4 Transport classification, customs, and import licences

Rocatinlimab drug product is not a dangerous good for transport, and PCM refrigerant is
non-hazardous. The lithium metal cell in the ST-4 logger falls within IATA Section II exemptions for
cells contained in equipment (UN3091), and the outer carton bears the required mark where
applicable. Road movements within the EU comply with ADR.

Every international shipment travels with a commercial invoice showing nil commercial value ("value
for customs purposes only"), a packing list, the shipping list, an import licence or permit where
required, and the applicable regulatory approval reference. Of the 21 participating countries,
per-shipment import licences are required for Brazil, Mexico, Türkiye and South Africa; Japan and
South Korea require importation through the in-country depot with local release documentation;
Australia requires TGA notification. These requirements are the principal reason inter-regional lanes
are qualified at 120 hours rather than 96 — customs dwell, not flight time, is the binding
constraint.

Customs holds are reported by the GlobalRx Control Tower to Meridian Clinical Supply Chain within 4
hours of detection. If a hold puts a shipment at risk of exceeding its qualified duration, the
shipment is recovered and re-conditioned at the nearest qualified facility, or written off and
replaced.

---

## 10. THE IRT SUPPLY ALGORITHM

Axion IRT (build 20210143-IRT-v6.4) is the study's system of record for kit-level inventory. It holds
the randomisation schedule and the medication list, and it decides — without human intervention —
what is shipped where. Sites see only the outputs. This section describes the mechanism, because
sites that understand it manage their stock better.

### 10.1 Initial site stock

On site green-light, IRT releases a fixed **initial allocation**: **10 kits** for Site 1047. It is
sized to cover the first several randomisations and their Day 1 and Week 2 loading doses, with
buffer, and deliberately not sized to the site's enrollment ambitions — oversupplying at activation
creates expiry risk and, if the site under-enrols, a large return.

### 10.2 Trigger level and resupply level

- **Trigger level** — the quantity of **available, unassigned** stock at or below which IRT generates
  a resupply order. For Site 1047: **6 kits**.
- **Resupply level** — the quantity to which IRT tops the site back up. For Site 1047: **14 kits**.

The order quantity is the gap between what the site holds and the resupply level. That gap is set so
a site orders infrequently enough to keep shipping cost and in-transit excursion exposure down, but
never holds more than roughly four to six weeks of demand — the point at which expiry management
becomes a problem. Both parameters are held **per medication type**, not in total (§10.5).

### 10.3 Predictive resupply

Trigger-based resupply is reactive. Layered on top of it is a **predictive** calculation that runs
nightly against a **28-day forward window**:

> **Projected demand** = (scheduled dosing visits falling in the window, from each randomised
> participant's next visit per the Schedule of Activities) + (site randomisation rate over the
> trailing 60 days × window length × 1 kit per new randomisation) + **buffer (4 kits)**

IRT knows every randomised participant's dosing schedule exactly — Day 1, Week 2, then Weeks 4, 8,
12, 16 and 20, seven doses in total, ±3 days — so the visit-driven half of the forecast is
near-deterministic. The uncertain half is new randomisations, which is why the buffer exists and why
the trailing enrollment rate is used rather than the site's contracted target.

If projected demand over the window exceeds available stock, IRT raises a resupply order even though
the trigger has not been reached. **This is why a site that randomises three participants in a week
receives a shipment it did not request.** It is not an error and need not be queried.

### 10.4 Assigned versus unassigned inventory

- **Unassigned** — kits at the site, released and in date, not committed to any participant. Only
  unassigned stock counts toward the trigger.
- **Assigned** — kits IRT has committed. A kit becomes assigned at the moment of the dispensing
  transaction and is thereafter attributed to that participant and visit permanently, whether or not
  it is administered.
- **Quarantined** — kits under an excursion, complaint, recall or damage hold. Quarantined stock is
  excluded from availability and does **not** count toward the trigger, which is why a large
  quarantine event can immediately generate a resupply order.
- **Expired** — automatically excluded on the day after the labelled expiry date, without any site
  action, and flagged for return.

### 10.5 Serving a 3:1 allocation without unblinding anyone

The study randomises **3:1**, rocatinlimab to placebo. IRT must satisfy whatever the next
randomisation calls for, so it cannot simply ship stock in a 3:1 ratio and hope. Internally it holds
each site's inventory in two invisible buckets, type A and type B, and runs the trigger/resupply
calculation **independently for each**, to a coverage target giving ≥95% confidence of serving the
next *n* randomisations and all scheduled dosing visits in the window.

The statistical consequence is that the minority bucket carries proportionally **more** buffer:
small numbers have higher relative variance, and running out of the minority type would either stop a
randomisation or force an unblinded intervention. A site holding 14 kits is not holding 10 and 4.

**Because per-type quantities would permit inference about treatment assignment, they are never
displayed to, transmitted to, or discussed with any blinded party.** The site's IRT screen shows a
single aggregate stock count. Shipment manifests, packing lists, IRT confirmations and CRA monitoring
reports show totals and kit numbers only. A site sent any document itemising inventory by anything
other than kit number and expiry must stop reading it and notify Meridian Clinical Supply Chain and the
CRA immediately as a potential unblinding event.

### 10.6 Automatic re-order after a dispensing transaction

The dispensing transaction is the event that decrements available stock and re-evaluates the site's
position. On completion, IRT assigns the kit number to the participant and visit, decrements
unassigned stock of that type, re-runs the trigger test and the 28-day forecast, and — if either is
breached — creates a resupply order against the serving depot for the next order cut-off, **14:00
depot local time, Monday to Thursday** for GRX-MEM-01.

This is why the sponsor requires IRT transactions to be completed **at the visit** rather than batched
at the end of the day or week. A site that batches its transactions batches its own resupply. The
commonest cause of a site running out of drug is not supply failure; it is a coordinator who entered
five visits on a Friday afternoon.

Order numbers take the form **SHP-1047-0019**. Sites should check open-order status in IRT before
calling.

---

## 11. DEPOT OPERATIONS

Regional and in-country depots are operated by GlobalRx Logistics under contract to Meridian and are
subject to Meridian qualification audit before use and at least every three years thereafter.

**Receipt.** Incoming batches are received against the shipping list and the QP certification
reference, quantity- and kit-number-verified, and the shipment's data logger downloaded and assessed
before the product is put away. Product is received into **unreleased** status and becomes available
in IRT only on country release (§5.1).

**Storage.** Product is held in temperature-mapped 2–8 °C cold rooms. Mapping is performed loaded and
unloaded, in summer and winter, before first use and after any significant change; probes sit at the
mapped worst-case locations. Monitoring is continuous with 15-minute logging, audible local alarm and
automated escalation to on-call depot staff and to Meridian Clinical Supply Quality. All depots have
emergency power with automatic transfer and a qualified contingency plan for relocating stock.

**Pick and pack.** Picking is IRT-directed to specific kit numbers; the picker scans each kit and the
system rejects any kit not on the order, out of date, quarantined or of the wrong type. A second
operator verifies the pick against the packing list before the shipper is sealed. Shipping follows
shortest-expiry-first, subject to no kit being shipped with less than **90 days** remaining shelf
life.

**Returns handling.** Returned product is received into a segregated, locked quarantine area,
reconciled against the site's return manifest, and held pending destruction authorisation.
**Site-returned product is never returned to usable inventory** under any circumstances — including
unopened, in-date kits with a clean temperature history. Chain of custody has been broken and cannot
be re-established.

**Inventory reconciliation cadence.** Automated IRT-to-warehouse-management reconciliation runs
**daily**, exceptions cleared within one business day. A **monthly cycle count** covers a
statistically selected sample plus 100% of kit numbers involved in an exception in the preceding
month. A **full physical inventory** is performed annually, and a **study-level reconciliation** at
close-out (§18).

---

## 12. TEMPERATURE EXCURSION MANAGEMENT — SPONSOR SIDE

### 12.1 The site's part, in one paragraph

On discovery of any deviation from 2–8 °C — in transit or at the site — the site quarantines the
affected kits, keeps them at 2–8 °C unless instructed otherwise, does not dispense or discard them,
and raises the **Temperature Excursion transaction in IRT within 24 hours of discovery**, attaching
the logger PDF or refrigerator monitoring report. The bench procedure is in the **Pharmacy Manual**
and, at Site 1047, in **SOP-009**. Everything below is what happens next, on the sponsor side.

### 12.2 Intake and triage

The IRT transaction does two things instantly: it places the named kit numbers into **IRT
quarantine**, so no user can dispense them, and it opens a case referenced **TE-2024-00417**.

Meridian Clinical Supply Quality triages within **1 business day** for completeness. A complete package
contains: kit numbers affected; date, time and duration; minimum and maximum temperatures; the raw
monitoring data file; location and circumstances; whether any affected kit was administered; and
confirmation that affected kits are quarantined. Incomplete packages are returned the same day.

**The turnaround clock starts when the package is complete, not when the case is opened.** This is
the single most useful thing a site can know about excursions.

### 12.3 Stability assessment

Assessment is performed by Meridian stability sciences in Product Quality — not by the CRA, the supply
chain, the depot or the site. It considers:

- the **mean kinetic temperature** of the event, not merely its peak;
- the event's duration in each temperature band;
- the kit's **cumulative excursion history**, debited against the allowance of **≤ 30 days cumulative
  at ≤ 25 °C**;
- the stability dataset for the affected packaging batch, including temperature-cycling and
  short-term-storage studies against aggregation, charge heterogeneity, potency, sub-visible
  particulates and container-closure integrity;
- remaining shelf life.

Two rules override the arithmetic:

> **The excursion budget is cumulative and does not reset.** A kit that has spent six days above
> 8 °C has twenty-four days of allowance left for the remainder of its life. This is why every
> excursion must be reported however trivial it appears — an unreported event corrupts the budget
> for every subsequent assessment.
>
> **There is no freezing allowance.** Any documented freeze event (Alarm C, or a refrigerator record
> showing ≤ −0.5 °C) results in **Destroy**, without assessment. Ice-crystal formation drives
> irreversible aggregation of the antibody.

### 12.4 Disposition categories

| Disposition | Meaning | IRT effect |
|---|---|---|
| **Release for use** | The excursion is within the product's demonstrated tolerance. The kits may be dispensed. The event is debited from the cumulative budget and remains on the kits' records. | Quarantine lifted; kits return to available stock |
| **Quarantine pending further data** | Assessment cannot be completed — data are incomplete, the event is outside characterised conditions, or confirmatory testing is required. Kits remain unusable and the case remains open with a stated next review date. | Quarantine maintained |
| **Destroy** | The product is not suitable for use. Kits are permanently withdrawn. | Status set to *destroyed-pending*; kits excluded from inventory and flagged for return or destruction under §16 |

### 12.5 Turnaround

**Target: 3 business days** from receipt of a complete data package to issue of a written
disposition. Cases flagged **urgent** — a dosing visit within the protocol window at risk, or product
already administered — are targeted at **24 hours**. Use the urgent flag when it is true and not
otherwise; a study in which every case is urgent has no urgent cases.

Where a disposition cannot be issued before a scheduled dosing visit, Meridian Clinical Supply Chain
arranges an emergency resupply shipment rather than allowing the site to dispense quarantined
product. Contact the supply line, not the CRA, as soon as a visit is at risk.

### 12.6 The disposition notice

The site receives a written **Temperature Excursion Disposition Notice**, reference **CSQ-DN-NNNNN**,
enumerating affected kit numbers, the assessed event, the disposition, the cumulative allowance
consumed and remaining, and any required site action (template at **Appendix D**). It is filed in the
Investigator Site File.

> **The IRT kit status, not the email, is the operative record.** If a notice says "release for use"
> and the kits are still quarantined in IRT, they may not be dispensed. Contact Axion IRT and Meridian
> Clinical Supply Quality.

### 12.7 Cumulative tracking across the product's life

Excursion history is held at kit-number level and follows the kit. Depot-side, in-transit and
site-side events are all debited from the same allowance. Hence a result sites find
counter-intuitive: **an identical excursion may be dispositioned differently on two kits sitting in
the same refrigerator**, because one arrived with prior history. That is not inconsistency; it is the
budget doing its job.

---

## 13. QUARANTINE

**Triggers.** Any of: a temperature excursion; visible damage to a kit, carton or syringe; a
suspected quality defect; a recall notice; expiry; a discrepancy between physical stock and the IRT
record; product of unknown or unverifiable provenance; or any sponsor instruction.

**Physical quarantine.** Affected kits are segregated in a clearly identified, locked location within
the site's controlled storage, labelled **"QUARANTINE — DO NOT DISPENSE"** with the case reference.
Quarantine is a *status*, not a disposal route: unless the sponsor instructs otherwise, quarantined
product **remains at 2–8 °C**. Letting a quarantined kit warm up while it awaits disposition converts
a recoverable event into a destruction.

**IRT quarantine.** The corresponding kit numbers are set to quarantine status in IRT, removing them
from availability and preventing any user from dispensing them.

**Both are required.** Physical segregation without the IRT status leaves the kits allocatable and
distorts resupply; IRT status without physical segregation leaves them reachable by a coordinator in
a hurry. A monitoring visit that finds one without the other will raise a finding.

**Return to usable status.** Only Meridian Clinical Supply Quality can release product from quarantine,
by issuing a disposition and lifting the IRT status. The site must never return quarantined product to
working stock on its own assessment, on a verbal assurance, or because "the temperature came back
down."

---

## 14. PRODUCT COMPLAINTS AND QUALITY DEFECTS

### 14.1 Definitions

A **product complaint** is any expression of dissatisfaction relating to the identity, quality,
durability, reliability, safety, or performance of the investigational product or its packaging.
Reportable examples:

- **Particulates** — visible particles, fibres, or aggregates in the solution;
- **Discolouration or turbidity** — the solution should be clear to slightly opalescent, colourless
  to pale yellow;
- **Damaged syringe** — cracked barrel, leakage, bent or missing needle, plunger already partly
  depressed, needle shield loose or absent, needle guard already activated;
- **Illegible, missing, incorrect, or detached label**, including a booklet label separated from its
  sealing tab;
- **Missing components** — a carton containing fewer than two syringes, or missing the insert;
- **Kit number mismatch** between the carton and IRT;
- **Device or delivery failure** — the syringe does not deliver, delivers incompletely, or requires
  abnormal force.

Do not open, disassemble, wash, or photograph-and-discard a suspect kit. Retain it exactly as found.

### 14.2 Reporting route and timeline

Report to **Meridian Product Quality Complaints** (`productquality@meridianbio-sim.example`, +1 (866)
555-0181), with a copy to the CRA, and quarantine the affected kit under §13.

| Situation | Timeline |
|---|---|
| Defect found before administration | **1 business day** of discovery |
| Defect involving product that was **administered** to a participant | **24 hours** of discovery |
| Defect associated with an adverse event | **24 hours**, and see §14.4 |
| Suspected counterfeit, tampering, or product of unknown provenance | **Immediately**, by telephone |

Each complaint receives a reference of the form **PQC-24-01187**. Sponsor acknowledgement is issued
within 2 business days and the investigation outcome is communicated to the site when the
investigation closes.

### 14.3 Sample return

Meridian may request return of the affected kit for investigation. GlobalRx Logistics arranges a
qualified return shipment with a data logger; the site must not use a general courier account. Unused
product is returned in its original carton at 2–8 °C. A used syringe is a sharp and a biohazard: it is
retained in a rigid sharps container in the site's controlled storage and returned only if Meridian
specifically requests it and supplies the qualified packaging and documentation. Otherwise,
photographs of the intact carton and label plus the kit number suffice. Product with an open
complaint is **not destroyed** until the investigation closes and destruction is authorised (§16).

### 14.4 Interface with pharmacovigilance

Where a product complaint is accompanied by an adverse event — for example a suspected delivery
failure followed by an injection-site reaction, or particulates noticed after administration — **two
separate reports are required, on two separate clocks**:

1. the **safety report**, per the protocol and the Safety Reporting Manual, to the Harborlight
   Clinical Research safety intake (`rocket.safety@harborlightcro.com`, fax +1 (888) 555-0177),
   within 24 hours for a serious adverse event;
2. the **product quality complaint**, per §14.2, to Meridian Product Quality Complaints.

**Neither report substitutes for the other.** Meridian Product Quality and Global Patient Safety
cross-reference the two records by participant identification number and kit number, but they cannot
do so if only one report exists. Filing only the safety report is the commonest failure in this area.

---

## 15. RECALL

### 15.1 Grounds and classification

A recall is initiated when product in distribution is found, or suspected, to present a quality
defect, a safety risk or a regulatory non-compliance. Recalls may be **sponsor-initiated** (following
an internal quality investigation, a stability failure, a labelling error or a complaint trend) or
**regulator-initiated** (at the request or requirement of a competent authority).

| Class | Description | Site quarantine | Site response |
|---|---|---|---|
| **Class I / Class 1** | Reasonable probability of serious adverse health consequences or death | Immediately, within **24 hours** of notice | Within **3 business days** |
| **Class II / Class 2** | May cause temporary or medically reversible adverse consequences; remote probability of serious consequences | Within **3 business days** | Within **5 business days** |
| **Class III / Class 3** | Unlikely to cause adverse health consequences (for example, a labelling defect not affecting identity or use) | Within **5 business days** | Within **10 business days** |

### 15.2 Notification cascade

```
 Meridian Global Quality / QP  ──►  Meridian Clinical Supply Quality
            │                              │
            │                              ├─► Competent authorities (as required by law)
            │                              │
            ├─► GlobalRx Logistics ────────┼─► All depots: immediate stock freeze
            │                              │
            └─► Axion IRT ─────────────────┼─► Affected kit numbers set to RECALLED,
                                           │   IRT resupply suspended for affected batches
                                           │
                Harborlight Clinical Research (CTM) ─► CRAs ─► SITES
                                                                │
                                                                └─► IRB/EC where required
```

For a Class I recall, sites are notified within **24 hours** of the sponsor's decision, by telephone
followed by written notice. IRT flags affected kit numbers immediately, so a site may see recalled
kits appear in quarantine before the written notice arrives.

### 15.3 Required site actions

1. **Quarantine** all affected kits per §13, within the class-specific window.
2. **Identify** all affected kits using the IRT recall report, which lists kit numbers held by the
   site and kit numbers already dispensed to participants. Do not rely on visual identification of
   the batch number.
3. **Confirm** completion in IRT and to the CRA within the class-specific response window, including
   an explicit statement of any affected kit that cannot be located.
4. **Reconcile** every affected kit number: on hand, dispensed and administered, dispensed and
   returned unused, previously returned to depot, previously destroyed, or unaccounted for.
5. **Do not destroy** any recalled product. Recalled product is returned to the depot unless the
   sponsor's notice states otherwise.

### 15.4 Reconciliation and closure

Meridian Clinical Supply Quality reconciles quantities distributed against quantities recovered and
accounted for, across every site and depot, and issues a recall effectiveness check. The recall
closes only when 100% of affected kits are accounted for; unlocated kits are individually
investigated. Recall records are retained with the study's essential documents.

### 15.5 Participants who already received recalled product

This is handled by the sponsor and the medical monitor, not by the supply chain, and not
unilaterally by the site.

- Meridian performs an **exposure assessment** identifying every participant who received an affected
  kit and characterising the potential clinical consequence of the defect.
- The **medical monitor** (Ana Belmonte-Ruiz, MD) determines, with the sponsor, whether participant
  notification, additional monitoring or additional assessments are warranted, and drafts the message.
- The **IRB/EC** is notified where the recall affects participant safety or willingness to continue;
  at Site 1047 this is the Keystone Independent Review Board, and the submission is made by the
  regulatory coordinator on sponsor instruction.
- The **investigator** retains the clinical decision about that participant's continued dosing.

> **Default position:** a recall does not automatically withdraw any participant from the study, and
> **no participant is contacted about a recall until the sponsor and the medical monitor have agreed
> the message.** A recall is not, of itself, an unblinding event: participants received a kit, and
> the recall does not disclose what was in it.

---

## 16. RETURNS, RECONCILIATION, AND DESTRUCTION AUTHORISATION

### 16.1 The order of operations

There is one sequence, and it is not negotiable:

> **reconcile → CRA source verification → written sponsor authorisation → destroy or return →
> certificate → file**

Under 21 CFR 312.59 the sponsor must assure the return of unused supplies or authorise alternative
disposition and must maintain **written records of any disposition**; under 21 CFR 312.62(a) the
investigator must maintain adequate records of drug disposition. The written authorisation is the
artefact those requirements produce. Product destroyed without it cannot be reconciled, and is both a
protocol deviation and a GCP finding.

### 16.2 What must reconcile

At kit-number level, with no unexplained variance:

**shipped to site = administered + dispensed-but-not-administered + on hand + returned to depot +
destroyed at site + under quarantine**

The reconciliation is prepared from the site accountability record (Pharmacy Manual), verified
against IRT, and source-verified by the CRA at a monitoring visit. Every variance is investigated and
documented before any destruction is authorised.

### 16.3 The written destruction authorisation

Meridian Clinical Supply Chain issues a **Destruction Authorisation**, reference
**DA-20210143-NNNN**, enumerating the specific kit numbers authorised for destruction, the
destruction route, the authorising signatory, and a validity period (90 days from issue). A template
is at **Appendix C**. The authorisation is countersigned by the CRA and filed in the Investigator
Site File with the destruction certificate.

### 16.4 On-site destruction versus return to depot

**Default: return to depot.** GlobalRx Logistics collects returns in a qualified return shipper with a
data logger, against a return manifest generated from IRT. Returned product goes to segregated
quarantine at the depot and is never restocked (§11).

**On-site destruction** is permitted only where the site has a documented, validated destruction
process compliant with local law and environmental regulation, has provided evidence of it to the
sponsor, and holds written sponsor approval in the Destruction Authorisation. Site 1047 is **approved
for on-site destruction of used and partially used syringes only**; all unused kits are returned to
GRX-MEM-01.

**Used and partially used syringes** are sharps and clinical waste. They are destroyed at the site per
local law and the site's waste procedures regardless of the returns route, after being counted and
recorded in the accountability log, and are not shipped to the depot except on specific sponsor
request in a complaint investigation (§14.3).

### 16.5 Destruction certificate and records

The destruction certificate must record: the Destruction Authorisation reference; the kit numbers and
quantities destroyed; the date, method and location of destruction; and the printed name, signature
and date of the person performing the destruction and of the witness. It is returned to Meridian Clinical
Supply Chain within **10 business days**, with a copy filed in the Investigator Site File.

**Records outlive the product.** Accountability records, shipping and receipt records, temperature
records, excursion cases, destruction authorisations and certificates are retained per 21 CFR
312.57(c) and 312.62(c) — a minimum of two years after a marketing application is approved for the
indication, or two years after investigational shipment is discontinued and FDA is notified — and per
applicable national law, whichever is longer. The Clinical Trial Agreement specifies the operative
period for Site 1047. **Do not destroy records on the schedule you destroy product.**

### 16.6 What may never be destroyed before final reconciliation

- Any kit subject to an **open temperature excursion case**;
- Any kit subject to an **open product quality complaint**;
- Any kit named in a **recall** that has not been reconciled and closed;
- Any kit involved in an **open protocol deviation or data query**;
- Any kit whose **IRT status and physical status disagree**;
- Any kit for which the accountability record is incomplete.

---

## 17. BLINDING AND CODE-BREAK INTEGRITY ACROSS THE SUPPLY CHAIN

### 17.1 Who is unblinded, by role

| Role | Status | Access |
|---|---|---|
| Unblinded biostatistician, Meridian | **Unblinded** | Randomisation schedule and medication list |
| Clinical packaging labelling systems | **Unblinded (system)** | Kit-to-type mapping, applied mechanically |
| Axion IRT technical/production team | **Unblinded** | Full database, under controlled access |
| Meridian Clinical Supply Chain analysts | **Unblinded to inventory type** | Per-type quantities; **no participant-level assignment** |
| Depot systems and staff | **Partially — non-semantic** | Kits carry a type flag with no disclosed meaning |
| Meridian Global Patient Safety (designated unblinded staff) | **Unblinded on demand** | For expedited regulatory reporting |
| Sponsor clinical study team, medical monitor, CTM, CRA | **Blinded** | Aggregate kit counts only |
| **All site personnel**, including the site investigational pharmacist | **Blinded** | Kit numbers and totals only |

Per the protocol, **no unblinded pharmacist is required at Site 1047**. Nothing in this manual
requires any site staff member to be unblinded; any procedure that appears to is an error in this
document and must be reported.

### 17.2 The firewall

- IRT role profiles present different data to different user classes. Site and CRA profiles cannot
  display type-level inventory, enforced server-side rather than by hiding a column.
- Communications from Meridian Clinical Supply Chain to sites use templated messages containing kit
  numbers, quantities, expiry dates and order references only.
- Shipment manifests, packing lists, customs paperwork and proofs of delivery carry no type
  information.
- Supply chain staff holding per-type visibility do not attend blinded study team meetings on
  Protocol 20210143 and do not communicate directly with sites.

### 17.3 Code breaks

Emergency unblinding is performed by the investigator through Axion IRT, per the protocol and Cascade
**SOP-024**, and only where knowledge of the assignment is necessary for the participant's medical
management. IRT immutably records the user, date and time, participant identification number, the
stated reason, and the fact that the code was revealed. Meridian Global Patient Safety and the Clinical
Trial Manager are notified automatically that **a break occurred** — not what it revealed.

The site must not communicate the revealed assignment to the CRA, the CTM, the medical monitor or any
sponsor representative other than designated unblinded pharmacovigilance staff. The IRT code-break
record is an essential document. Any accidental unblinding, including one arising from supply
documentation, is reported to Meridian Clinical Supply Chain and the CRA within 24 hours.

---

## 18. END OF STUDY

1. **Dispensing cut-off.** Following the last participant's Week 20 dose at the site, IRT suspends
   further resupply and the site's remaining stock is frozen for return.
2. **Final reconciliation.** The site completes kit-level accountability for every kit ever shipped
   to it, per §16.2. The CRA source-verifies at the close-out visit. All excursion cases, complaints
   and deviations touching investigational product must be closed.
3. **Final returns.** GlobalRx Logistics schedules a qualified return collection of all unused,
   expired and quarantined kits.
4. **Destruction authorisation.** Issued only after final reconciliation is accepted (§16.3).
5. **IRT close-out.** The site's inventory is driven to zero and the site is deactivated. A final
   inventory statement is generated and filed.
6. **Archival package** filed in the Investigator Site File: all shipment and receipt records with
   logger reports; the complete accountability log; all excursion cases and disposition notices; all
   complaint records; all relabelling authorisations and expiry-extension notices; the final
   reconciliation statement; the destruction authorisation and certificate; the IRT final inventory
   statement; and this manual with all superseded versions and the associated training records.

---

# APPENDICES

## Appendix A — Sample kit label

```
┌────────────────────────────────────────────────────────────────────────────┐
│ MERIDIAN BIOTHERAPEUTICS, INC.  1200 Kestrel Way, Emeryville, CA 94608, USA      │
│ Information / emergency unblinding: +1 (800) 555-0164 (Axion IRT, 24 h)    │
│                                                                            │
│ Protocol 20210143 — ROCKET-Horizon                                         │
│ NCT05651711 · EU CT 2022-501538-44                                         │
│                                                                            │
│ Rocatinlimab (MER 451) 150 mg/1.0 mL solution for injection OR PLACEBO     │
│ 2 × prefilled syringe · SUBCUTANEOUS USE · Contents = one 300 mg dose      │
│ Administer as two separate injections. See protocol and Pharmacy Manual.   │
│                                                                            │
│   KIT No.  318472            Batch  PKG-2309-04                            │
│   ║▌│█║▌║█║▌│█║▌║ 318472     USE BY  31-JAN-2025                          │
│                                                                            │
│ Store at 2–8 °C in the original carton. Protect from light.                │
│ DO NOT FREEZE.  DO NOT SHAKE.                                              │
│                                                                            │
│ Site No. ________  Investigator ______________________                     │
│ Participant ID ____-____  Visit ____________                               │
│                                                                            │
│ FOR CLINICAL TRIAL USE ONLY                                                │
│ Caution: New Drug — Limited by Federal (or United States) law to           │
│ investigational use.                                                       │
│ KEEP OUT OF THE SIGHT AND REACH OF CHILDREN.                               │
│                                                                            │
│ Other languages: see booklet.        Label artwork v4.0 / 12-SEP-2023      │
├ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  TEAR HERE  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─┤
│ ACCOUNTABILITY RECORD    KIT 318472   PKG-2309-04   USE BY 31-JAN-2025     │
│ Participant ID ____-____   Visit __________   Date __-___-____   Init ____ │
└────────────────────────────────────────────────────────────────────────────┘
```

## Appendix B — Sample expiry extension notice

```
MERIDIAN BIOTHERAPEUTICS, INC. — GLOBAL CLINICAL SUPPLY CHAIN
EXPIRY EXTENSION NOTICE                       Notice No. EEN-20210143-0006

Protocol:            20210143 (ROCKET-Horizon)
Site:                1047 — Cascade Dermatology & Clinical Research, LLC
Investigator:        Miriam A. Okonkwo, MD
Date of issue:       04-MAR-2024
Relabelling Auth.:   RLA-20210143-0006

Packaging batch:     PKG-2211-02
Current expiry:      31-MAR-2024
NEW EXPIRY:          30-SEP-2024
Basis:               Extension supported by real-time stability data; approved
                     under Meridian change control CC-2024-00318 and notified to
                     the Qualified Person, Meridian Europe B.V., Breda, NL.

Affected kits at this site (4):   318472  318473  318474  318475
Over-labels enclosed:             6 (serial 0031–0036; 2 controlled overage)

REQUIRED SITE ACTIONS
 1. Apply one over-label to each affected kit so that it covers the printed
    expiry date and no other information on the label.
 2. A second delegated person must independently verify every kit.
 3. Do not apply over-labels to kits of any other batch. Do not apply an
    over-label to a quarantined kit.
 4. Reconcile all enclosed over-labels. Return unused and damaged labels with
    this notice.
 5. Sign below and return to clinicalsupply.20210143@meridianbio-sim.example within
    5 business days. File a copy in the Investigator Site File.

The expiry date held in Axion IRT for batch PKG-2211-02 was updated effective
04-MAR-2024 14:00 PT. If the IRT record and the physical label do not agree,
quarantine the kits and contact Meridian Clinical Supply Chain before dispensing.

Applied by:  ______________________  Date: __-___-____  Kits relabelled: ____
Verified by: ______________________  Date: __-___-____  Labels returned:  ____

Authorised by: A. Ferreira-Lund, Associate Director, Global Clinical Supply Chain
```

## Appendix C — Sample destruction authorisation

```
MERIDIAN BIOTHERAPEUTICS, INC. — GLOBAL CLINICAL SUPPLY CHAIN
INVESTIGATIONAL PRODUCT DESTRUCTION AUTHORISATION
                                              Authorisation No. DA-20210143-0114

Issued to:      Site 1047 — Cascade Dermatology & Clinical Research, LLC
                4820 SW Barbur Boulevard, Suite 300, Portland, OR 97239, USA
Investigator:   Miriam A. Okonkwo, MD
Protocol:       20210143 (ROCKET-Horizon) · IND 145,882
Date of issue:  12-JUN-2024      Valid until: 10-SEP-2024

BASIS
Kit-level accountability reconciliation for the kits listed below has been
completed by the site, verified against Axion IRT, and source-verified by the
assigned monitor on 06-JUN-2024. No open excursion case, product complaint,
recall action or protocol deviation is associated with these kits.

AUTHORISED FOR DESTRUCTION — used and partially used syringes only (7 kits)
  318402  318403  318409  318417  318428  318431  318440

METHOD:   On-site destruction as sharps/clinical waste in accordance with
          Oregon law and site waste procedures. Witnessed.
NOT AUTHORISED: all unused kits. These are returned to GRX-MEM-01, Memphis TN,
          on the qualified return collection scheduled for 25-JUN-2024.

CONDITIONS
 1. Destroy only the kit numbers listed. Any kit not listed remains under site
    control.
 2. Record destruction in the site accountability log at the time of the act.
 3. Complete and return the destruction certificate to Meridian Global Clinical
    Supply Chain within 10 business days.
 4. This authorisation expires on the date shown. An expired authorisation may
    not be used; request re-issue.
 5. Retain this authorisation and the certificate in the Investigator Site File
    for the full record retention period.

Authorised by:  ____________________________   Date: __-___-____
                A. Ferreira-Lund, Associate Director, Global Clinical Supply Chain

Countersigned:  ____________________________   Date: __-___-____
                Kevin Ostrander, CCRA, Harborlight Clinical Research, Inc.
```

## Appendix D — Temperature excursion report and disposition form

```
PART 1 — SITE REPORT (raise as an IRT Temperature Excursion transaction
within 24 hours of discovery)                          Case No. TE-____-______

Site ________  Reported by ______________________  Date/time of report ________
Location of event:  □ In transit   □ Site refrigerator   □ Bench / in use
                    □ Transport within site  □ Other ________________________
Date/time excursion began ____________  ended ____________  Duration ________
Minimum temperature ______ °C     Maximum temperature ______ °C
Monitoring source:  □ ColdTrace ST-4 shipment logger (PDF attached)
                    □ Site continuous monitoring report (attached)
                    □ Other ______________________
Kit numbers affected _________________________________________________________
Total kits ______   Any kit administered during or after the event?  □ No □ Yes
Circumstances (what happened, and what has been done) ________________________
_____________________________________________________________________________
Kits quarantined physically?  □ Yes   Kits quarantined in IRT?  □ Yes (auto)
URGENT FLAG (dosing visit at risk within 3 business days, or product
administered)?  □ No  □ Yes — visit date ____________

PART 2 — SPONSOR DISPOSITION (Meridian Clinical Supply Quality)
                                              Disposition No. CSQ-DN-________
Case complete on ____________   Target response ____________   Issued ________
Mean kinetic temperature of event ______ °C
Cumulative excursion allowance:  consumed to date ______ d of 30 d
                                 this event ______ d   remaining ______ d
Freeze event (≤ −0.5 °C)?  □ No  □ Yes → automatic DESTROY

DISPOSITION:   □ RELEASE FOR USE
               □ QUARANTINE PENDING FURTHER DATA — next review ____________
               □ DESTROY

Kits covered ________________________________________________________________
Required site action ________________________________________________________
Assessed by ____________________  Approved by ____________________  Date _____

IRT status updated:  □ Yes, ____________ (date/time)
The IRT kit status is the operative record.
```

## Appendix E — Depot contact list

| Depot | Code | Location | Region served | Contact |
|---|---|---|---|---|
| GlobalRx North America | **GRX-MEM-01** | 4155 Delp Street, Memphis, TN 38118, USA | USA, Canada — **serves Site 1047** | +1 (901) 555-0173 |
| GlobalRx Europe | GRX-BRE-01 | Takkebijsters 3, 4817 BL Breda, Netherlands | Belgium, Czechia, Denmark, Estonia, Finland, Germany, Poland, Portugal, Romania, Spain, Sweden, United Kingdom | +31 (0) 76 555 0174 |
| GlobalRx Asia-Pacific | GRX-SIN-01 | 30 Tuas South Avenue 6, Singapore 637022 | Regional hub for APAC and South Africa | +65 6555 0175 |
| GlobalRx Brazil | GRX-SAO-02 | São Paulo, Brazil | Brazil | +55 11 5555 0176 |
| GlobalRx Japan | GRX-OSA-02 | Osaka, Japan | Japan | +81 6 5555 0177 |
| GlobalRx Mexico | GRX-MEX-02 | Mexico City, Mexico | Mexico | +52 55 5555 0178 |
| GlobalRx Korea | GRX-ICN-02 | Incheon, South Korea | South Korea | +82 32 555 0179 |
| GlobalRx Türkiye | GRX-IST-02 | Istanbul, Türkiye | Türkiye | +90 212 555 0180 |
| GlobalRx South Africa | GRX-JNB-02 | Johannesburg, South Africa | South Africa | +27 11 555 0181 |
| GlobalRx Australia | GRX-SYD-02 | Sydney, Australia | Australia | +61 2 5555 0182 |
| GlobalRx Control Tower (24/7) | — | Global | All shipments in transit | +1 (800) 555-0172 |

## Appendix F — Escalation matrix

| Symptom | Contact first | Target response |
|---|---|---|
| Data logger shows an alarm at receipt | IRT Temperature Excursion transaction → Meridian CSQ | Triage 1 business day; disposition 3 business days |
| Site refrigerator excursion | Same as above, after SOP-009 site response | Same |
| Shipment late, damaged, or not delivered | GlobalRx Control Tower +1 (800) 555-0172 | 4 hours |
| Shipment delivered to the wrong address | GlobalRx Control Tower, then Meridian Clinical Supply Chain | 4 hours |
| Kit damaged, discoloured, particulates, illegible label | Meridian Product Quality Complaints +1 (866) 555-0181 | Acknowledge 2 business days |
| Product administered from a defective kit | Meridian Product Quality Complaints **and** HCR safety intake | 24 hours, both |
| IRT will not release a kit / kit shows quarantined | Axion IRT +1 (800) 555-0164 | 1 hour |
| IRT shows insufficient stock for an upcoming visit | Meridian Clinical Supply Chain +1 (866) 555-0180 | 1 business day |
| Physical stock does not match IRT | Meridian Clinical Supply Chain, copy CRA | 1 business day |
| Expiry-extension labels missing or short | Meridian Clinical Supply Chain | 1 business day |
| Suspected unblinding from supply documentation | Meridian Clinical Supply Chain **and** CRA | 24 hours |
| Recall notice received | Follow the notice; confirm in IRT; copy CRA | Per recall class |
| Site-to-site transfer requested | **Not permitted.** Contact Meridian Clinical Supply Chain | — |

---

*End of Investigational Product Handling Manual, Version 3.0, 20-NOV-2023.*
