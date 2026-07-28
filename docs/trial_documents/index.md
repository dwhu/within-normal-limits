> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Trial Document Index — ROCKET-Horizon (Protocol 20210143 / NCT05651711)

The document corpus a site receives for a Phase 3 atopic dermatitis study. Every file is fabricated
source material for *icf-please*, built from the real ClinicalTrials.gov record and anchored to two
canon files so the documents agree with each other.

**Study:** Amgen · rocatinlimab (AMG 451) 300 mg SC Q4W vs matching placebo · 3:1 randomized ·
double-blind · 24 weeks treatment + 12 weeks safety follow-up · 726 participants · 151 centers ·
21 countries.
**Site:** 1047 — Cascade Dermatology & Clinical Research, Portland, Oregon.

---

## Start here

| File | What it is |
|---|---|
| [`../STUDY_FACTS.md`](../STUDY_FACTS.md) | **The canon.** Identifiers, the master Schedule of Activities, dosing, lab panels, vendor roster, contacts, naming conventions, the real safety numbers. Every document below derives from this file. Change it and the corpus drifts. |
| [`../RESEARCH_SITE.md`](../RESEARCH_SITE.md) | **The site bible.** Site 1047's staff, credentials, delegated duties, facilities, IRB, enrollment history, and financial terms. |
| [`../NCT05651711.json`](../NCT05651711.json) | The source record from ClinicalTrials.gov. Read-only ground truth. |
| [`./ASSUMPTIONS.md`](./ASSUMPTIONS.md) | **The major, gameplay-relevant assumptions** — ~45 entries covering study-wide inventions, rules a player can break, the site's economics, deliberate artifacts, discrepancies in the source record, and the conflicts fixed during the consistency sweep. Start here before changing anything. |
| [`./assumptions/`](./assumptions/) | The exhaustive per-document logs — ~800 rows, every invented detail. Reference material, not review material. |

**Corpus size:** 15 documents, **246,080 words**. With outlines and assumption logs, 46 files and
416,455 words.

| Longest | | Shortest | |
|---|---|---|---|
| study reference manual | 26,269 | FDA 1572 package | 3,977 |
| protocol | 25,077 | budget | 7,865 |
| safety reporting manual | 21,955 | ICF | 10,334 |
| SIV deck (84 slides) | 21,857 | IP handling manual | 10,400 |

---

## The documents

Each row links the document, its section-analysis outline, and its assumptions log.

### Governing documents — what the study *is*

| Document | Answers | Outline | Assumptions |
|---|---|---|---|
| [**protocol.md**](./protocol.md) | What must happen, to whom, when, and how it will be analysed. The regulatory instrument; changing it requires an amendment. | [outline](../outline/protocol_outline.md) | [log](./assumptions/protocol_assumptions.md) |
| [**investigators_brochure.md**](./investigators_brochure.md) | What is known about the drug. Carries the **Reference Safety Information** — the expectedness table that decides whether an event is a SUSAR. | [outline](../outline/investigators_brochure_outline.md) | [log](./assumptions/investigators_brochure_assumptions.md) |
| [**icf.md**](./icf.md) | What the participant is told and agrees to. Includes the HIPAA authorization and the optional DNA/biobanking consents, each with its own signature. | [outline](../outline/icf_outline.md) | [log](./assumptions/icf_assumptions.md) |

### Operational manuals — how the site actually does it

| Document | Answers | Outline | Assumptions |
|---|---|---|---|
| [**study_reference_manual.md**](./study_reference_manual.md) | How to run each visit and score each instrument. EASI arithmetic, the rIGA decision question, SCORAD, DLQI, POEM, HADS, the eDiary. The coordinator's daily companion. | [outline](../outline/study_reference_manual_outline.md) | [log](./assumptions/study_reference_manual_assumptions.md) |
| [**safety_reporting_manual.md**](./safety_reporting_manual.md) | What counts as an AE, what makes it serious, who may assess causality, and the 24-hour clock. Blank SAE form plus a worked cellulitis case. | [outline](../outline/safety_reporting_manual_outline.md) | [log](./assumptions/safety_reporting_manual_assumptions.md) |
| [**pharmacy_manual.md**](./pharmacy_manual.md) | Site-side drug handling: receipt, 2–8 °C storage, excursion response, dispensing double-check, injection technique, accountability. | [outline](../outline/pharmacy_manual_outline.md) | [log](./assumptions/pharmacy_manual_assumptions.md) |
| [**lab_manual.md**](./lab_manual.md) | Kits, draw order, centrifuge settings, aliquoting, IATA shipping, alert values. Why the predose PK trough must precede the injection. | [outline](../outline/lab_manual_outline.md) | [log](./assumptions/lab_manual_assumptions.md) |
| [**irt_manual.md**](./irt_manual.md) | Randomization and kit assignment. Every transaction screen, and the emergency unblinding path that is immediate, irreversible, and logged. | [outline](../outline/irt_manual_outline.md) | [log](./assumptions/irt_manual_assumptions.md) |
| [**edc_manual.md**](./edc_manual.md) | How each result gets into the database and stays clean. 26 eCRFs at field level, ~60 named edit checks, the query lifecycle, the PI's signature. | [outline](../outline/edc_manual_outline.md) | [log](./assumptions/edc_manual_assumptions.md) |

### Sponsor-side documents — written about the site, not for it

| Document | Answers | Outline | Assumptions |
|---|---|---|---|
| [**ip_handling_manual.md**](./ip_handling_manual.md) | The supply chain the site sees only the end of: QP release, depots, label booklets, the IRT resupply algorithm, recall, destruction authorization. | [outline](../outline/ip_handling_manual_outline.md) | [log](./assumptions/ip_handling_manual_assumptions.md) |
| [**monitoring_plan.md**](./monitoring_plan.md) | How the sponsor watches. Risk assessment, SDV percentages, the KRI thresholds that would flag this site, and the escalation ladder ending in closure. | [outline](../outline/monitoring_plan_outline.md) | [log](./assumptions/monitoring_plan_assumptions.md) |

### Site-specific instruments — the paperwork with names on it

| Document | Answers | Outline | Assumptions |
|---|---|---|---|
| [**siv_slide_deck.md**](./siv_slide_deck.md) | The initiation training, 21-DEC-2022. Slides plus speaker notes — where the CRA says the quiet part. Ends in the signed attendance log. | [outline](../outline/siv_slide_deck_outline.md) | [log](./assumptions/siv_slide_deck_assumptions.md) |
| [**cta.md**](./cta.md) | The contract. Indemnification, IP, subject injury, and the publication clause — the one term reproduced from the real record. | [outline](../outline/cta_outline.md) | [log](./assumptions/cta_assumptions.md) |
| [**budget.md**](./budget.md) | What the site is paid, per visit and per participant, and whether it covers the hours the schedule demands. Exhibit B to the CTA. | [outline](../outline/budget_outline.md) | [log](./assumptions/budget_assumptions.md) |
| [**form_1572.md**](./form_1572.md) | The investigator's statement to the FDA. Filled for Site 1047, with the Form 3455 financial disclosure and the ISF maintenance checklist. | [outline](../outline/form_1572_outline.md) | [log](./assumptions/form_1572_assumptions.md) |

---

## Cross-document map

Which document to open for a given question — and which documents must agree with each other.

| Question | Authoritative source | Must also agree |
|---|---|---|
| When is the next visit due? | Protocol SoA | Study reference manual, EDC manual, budget, ICF |
| How much drug, and how many injections? | Canon §4 → protocol | Pharmacy manual, ICF, SIV deck |
| Is this event expected or a SUSAR? | **IB Reference Safety Information** | Safety reporting manual |
| Who may assess causality? | Protocol → safety reporting manual | Site delegation log, FDA 1572, EDC manual |
| What happens if a participant needs rescue therapy? | Protocol | Study reference manual, ICF, EDC manual |
| Is this kit usable after a temperature excursion? | Pharmacy manual → **sponsor disposition** (IP handling manual) | IRT manual (quarantine flag) |
| Who is listed as a sub-investigator? | FDA 1572 | Delegation log, monitoring plan |
| What does this visit pay? | Budget (Exhibit B) | CTA payment articles |

---

## Conventions used throughout

Dates `DD-MMM-YYYY` · temperatures `2–8 °C` · participant IDs `1047-001` · randomization and kit
numbers 6-digit · visits named "Week N" (baseline is "Day 1") · windows ±3 days through Week 24,
±7 days thereafter · all phone numbers fictional 555 exchanges.

**Dosing, stated once:** seven doses — Day 1, **Week 2 (loading)**, then Q4W at Weeks 4, 8, 12, 16,
and 20. **No dose at Week 24.** Week 24 is the primary endpoint visit; Week 36 is end of study.
