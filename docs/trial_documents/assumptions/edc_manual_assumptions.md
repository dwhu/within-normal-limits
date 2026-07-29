> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions Log — `edc_manual.md`

**Document covered:** `/Users/dave/code/icf-please/docs/trial_documents/edc_manual.md` —
*Veriscribe EDC v9.2, Site User Guide & eCRF Completion Guidelines*, Version 3.0, 11-DEC-2023.
**Outline:** `/Users/dave/code/icf-please/docs/outline/edc_manual_outline.md`.

## Blanket statement

The ClinicalTrials.gov record for NCT05651711 contains **no information whatsoever** about the study's
data-capture system, its vendor, its eCRF design, its edit checks, its query workflow, or its data
timelines. Registry records never do. Consequently:

- **The EDC vendor, product, and version (Veriscribe EDC v9.2, Veriscribe Data Systems) are
  fictional**, taken from the canonical vendor roster in `STUDY_FACTS.md` §9, which exists precisely so
  that fabricated operational manuals are not attributed to a real technology company. The same
  applies to Axion IRT, Meridian Central Laboratories, DayLog ePRO, and Harborlight Clinical Research.
- **Every rendered screen in this manual is invented.** No screenshot, wireframe, layout, icon set, or
  colour convention derives from any real EDC product. They are constructed to be plausible and
  legible, not to resemble any commercial system.
- **Every edit check, error code, check identifier, and error message is invented.** The `VS-111` /
  `EASI-166` / `AE-291` numbering scheme is a fabrication for internal cross-referencing within this
  document and its appendices.
- **Every timeline is invented** — the 5-business-day entry deadline, the 3-business-day query
  response target, the 24-hour downtime catch-up, the 10-business-day signature and reconciliation
  windows, provisioning and offboarding intervals.
- **All security parameters are invented** — password policy, MFA behaviour, session timeout, lockout
  thresholds, access-review cadence.

The regulatory framing (21 CFR Part 11, ICH E6(R3) §3.16 and §4.9, ALCOA+, the FDA electronic source
data guidance, CDISC CDASH/SDTM) reflects genuine regulatory expectations, but every *specific
operational implementation* of those expectations described below is fabricated.

Nothing in this document contradicts `STUDY_FACTS.md`. The eCRF index (Appendix A) is derived directly
from the canonical SoA in §5; the instrument list is derived from §5 and §6 and from the registry
record's `outcomesModule`; contacts and vendors are reproduced from §9 and §10; conventions follow §11
and abbreviations §12.

---

## Assumption table

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Cover | Manual titled *Site User Guide & eCRF Completion Guidelines*, Version 3.0, 11-DEC-2023 | Version and date specified by the assignment. The date sits 12 days after Protocol Amendment 3 (29-NOV-2023) and 3 days after SRM v5.0 (08-DEC-2023), which is the correct document-control sequence for an amendment cascade | High |
| Cover | Database build identifier `20210143_PROD build 9.2.14`, released 08-DEC-2023 | EDC studies are versioned at build level; a build ID lets the manual reference "the current build" credibly | Med |
| Cover | Prepared by Veriscribe Data Systems with HCR Clinical Data Management | EDC manuals are usually co-authored by the vendor (system) and the CRO's data management (study-specific content) | Med |
| Version history | v1.0 14-NOV-2022 (build 9.1.6); v2.0 06-JUN-2023; v2.1 21-AUG-2023; v3.0 11-DEC-2023 | v1.0 precedes first participant first visit (14-DEC-2022) as it must. Intermediate versions give the manual a lived history and explain why some sections read as retrofits | Med |
| Version history | v2.0 added FASS/HASS conditional display and the eDiary compliance report | Plausible mid-study build change; both are genuinely fiddly features that a v1 build often lacks | Low |
| §1.2 | Named Site 1047 staff mapped to entry responsibilities | Taken from `RESEARCH_SITE.md` §2 delegation descriptions; the mapping to *EDC* tasks specifically is inferred | High |
| §1.3 | Cross-reference table naming the SRM, IRT Manual, Safety Reporting Manual, Lab Manual | Required by the assignment's scope boundary; document names match the corpus | High |
| §2 | Support routing table with distinct owners per problem type | Invented. Reflects real practice where sites misroute calls constantly | Med |
| §2 | HCR data management mailbox `dm.20210143@harborlightcro.com` | Invented, consistent with the `harborlightcro.com` domain used in `STUDY_FACTS.md` §10 | Med |
| §2 | Data management hours Mon–Fri 08:00–18:00 ET | Invented; sits inside HCR's canonical 07:00–19:00 ET clinical-operations window without contradicting it | Med |
| §3.1 | Supported browsers, versions, 1366×768 minimum, iPadOS not validated | Invented but typical of validated EDC platform requirements circa 2023 | Med |
| §3.1 | Pop-up allowance for `*.veriscribe.com`; extension prohibition | Invented; both are real-world EDC support issues and produce good friction | Med |
| §3.2 | Maintenance Sunday 02:00–06:00 UTC = Saturday 18:00–22:00 PT | Invented. UTC-to-PT conversion is correct for PST (UTC−8); the manual gives both because Site 1047 is in Oregon | Med |
| §3.2 | Quarterly extended maintenance, first Sunday of Feb/May/Aug/Nov, 02:00–10:00 UTC, 14-day banner notice | Invented | Low |
| §3.3 | TRAINING environment `train.veriscribe.com`, practice participants 9999-001 to 9999-010, red/grey environment banner | Invented. Separate training environments are universal; the participant-ID range follows the `SSSS-NNN` convention in `STUDY_FACTS.md` §11 | Med |
| §4.1 | Account request routed through the CRA; 2-business-day provisioning; 72-hour activation link | Invented. CRA-mediated provisioning is the common model and preserves the delegation-log gate required by Part 11 §11.10(d) | Med |
| §4.1 | Prerequisite chain: GCP → protocol training → delegation log → EDC training → account | Invented sequence, grounded in Part 11 §11.10(i) and ICH E6(R3) training expectations | High |
| §4.2 | Password: 12 chars, mixed composition, 90-day expiry, 12-password history, 5-attempt lockout, 90-day inactivity suspension | Entirely invented parameter set; typical of validated systems of this era | Med |
| §4.3 | MFA mandatory; TOTP or SMS; ten single-use backup codes; challenge on new device, every 14 days, and at every signature | Invented. The signature-time challenge is the operationally important one and is the manual's implementation of Part 11 §11.200's two-component requirement | Med |
| §4.4 | 20-minute session timeout, 2-minute warning, no draft auto-save | Invented. The absence of auto-save is a deliberate friction choice and drives the "save often" guidance | Med |
| §4.6 | Site notifies CRA within 1 business day of departure; deactivation within 1 further day | Invented | Med |
| §4.7 | Semi-annual (March/September) User Access Review to the PI; 10-business-day return; escalation to CTM | Invented cadence. Periodic access review is a genuine Part 11 expectation; the frequency is not prescribed by regulation | Med |
| §4.8 | Six-role matrix (Site Data Entry, limited entry, Investigator, Clinical non-investigator, Site Read-only, Monitor) | Invented. Mapped onto the delegated and explicitly non-delegated tasks in `RESEARCH_SITE.md` §2 — notably Alonzo Vega's exclusion from eligibility, causality, and EASI/vIGA-AD rating, which is canon | High |
| §4.8 | Sam Oyelaran assigned Site Read-only | Inferred from "not delegated for any participant-facing activity" in `RESEARCH_SITE.md`; regulatory coordinators typically hold read-only EDC access | Med |
| §4.8 | Wen-Li Chao limited to IP forms; Marisol Duarte to sample-collection fields | Inferred from their canonical delegated tasks | Med |
| §5.1–5.4 | All four rendered screens: layout, columns, glyph set (◐ ● ○ ⊘ ▣ ▨ ▢ ⚑ ⏱ ⌁ ◷ ✔ 🔒), colour convention | Wholly invented. The "colour is never the only carrier of meaning" rule is an accessibility choice, not a vendor fact | Low |
| §5.1 | Site 1047 participants 1047-035, -006, -011, -012, -013, -014, -024 with the states shown; "Showing 7 of 23" | Illustrative. The total 23 matches the canonical 23 screened in `RESEARCH_SITE.md` §5; individual participant states are invented but consistent with 14 randomized / 9 screen failures / 2 early terminations. 1047-024 and 1047-035 are placeholder IDs used only for this worked example — both are past the site's 22 issued screening numbers and name no roster subject. 1047-035 was retargeted from 1047-001 on 29-JUL-2026: the dashboard row completes their W36 visit on 08-NOV, and SAF-0033 puts 1047-001 at Day 113 on 04-JAN-2024 | Med |
| §5.1 | eDiary flag threshold 70% over a trailing 14 days | Invented threshold | Low |
| §5.2 | Participant 1047-024 casebook: randomization number 204518, enrolled 12-JUN-2023, visit dates and study days | Invented, internally consistent with the SoA windows. Randomization number 204518 is the example value given in `STUDY_FACTS.md` §11. Retargeted from 1047-009 29-JUL-2026: the roster and DE-1109 (day 1) place 1047-009 at Week 8 in January 2024, incompatible with this Week 24/December 2023 walkthrough; pharmacy_manual.md and monitoring_plan.md already used 1047-009 consistent with Week 8, so this walkthrough was the outlier and was moved | Med |
| §5.2 | Week 8 at Day 58 and Week 24 at Day 178 shown as out-of-window (⚠) | Deliberate. Day 58 is +1 outside the ±3 window on Day 57; Day 178 is +9 outside ±3 on Day 169. Both illustrate the deviation linkage | High |
| §5.3 | Week 24 folder shows 17 forms | Derived by counting the Week 24 column of Appendix A plus log forms; approximate | Med |
| §5.4 | Vital Signs form layout, field ranges, inline query Q-2291 | Invented | Low |
| §6.1 | **5-business-day entry deadline** and its four-part justification | Invented deadline (assignment-specified). The justification invokes real ALCOA+ contemporaneity expectations and the canonical 151 centres and quarterly DMC from `STUDY_FACTS.md` §3 | High (as a rule) / Med (as a number) |
| §6.1 | Lab results load 3–7 days after receipt; eDiary nightly; IRT within 30 minutes | Invented latencies | Med |
| §6.2 | Three source patterns (transcribed / direct data entry / electronically transferred) and the "if Veriscribe vanished tonight" test | The three-pattern framing reflects the FDA's 2013 electronic source data guidance faithfully; the memorable test sentence is the author's | High (concept) / Med (phrasing) |
| §6.2 | Site 1047 source examples — paper EASI worksheet, Modernizing Medicine EMA chart notes, pharmacy accountability log | EMA EMR and paper worksheets are canon (`RESEARCH_SITE.md` §3) | High |
| §6.3 | Three-state model Entered / Clean / Signed | Invented terminology; the underlying distinction is real | Med |
| §6.4 | Date entry accepts `06DEC2023` and `06-DEC-2023`, rejects `12/06/2023` | Invented behaviour, consistent with `STUDY_FACTS.md` §11's mandated `DD-MMM-YYYY` and with genuine international-ambiguity concerns | Med |
| §6.4 | Units fixed and non-editable; precision per field (temperature/weight/height 1 decimal, BSA integer) | Invented specifics | Med |
| §6.5 | Partial dates: day, or day+month, may be UNK; **year always required**; prohibited on consent, visit, dosing, sample, AE dates | Invented rule set, modelled on SDTM ISO 8601 partial-date handling | Med |
| §6.6 | Three codes ND / UNK / NA with a mandatory reason for the first two, plus the reason picklist | Invented. The rationale (a blank is indistinguishable from a failed transfer in SDTM) is genuine | High (concept) / Med (codes) |
| §7 (all) | Every form's field list, layout, and check set | Invented. Forms are derived from the canonical SoA (`STUDY_FACTS.md` §5) and the endpoint list (§6) plus the registry `outcomesModule`; field-level design is fabricated | Med |
| §7.1 | A distinct "Visit Date & Status" form driving study-day and window calculation | Invented but near-universal in EDC builds | High |
| §7.2 | Consent **time** collected as a required field | Invented requirement. Justified because same-day screening procedures must be shown to follow consent — a real inspection finding pattern | Med |
| §7.2 | ICF version picklist including Site 1047's v4.0.1 (29-NOV-2023), IRB-approved 19-DEC-2023 | Version and approval date are canon (`STUDY_FACTS.md` §1, `RESEARCH_SITE.md` §4) | High |
| §7.2 | Check `IC-201` hard-stops any procedure dated before consent | Invented implementation of a real regulatory absolute | High (principle) |
| §7.3 | Eligibility form renders each inclusion/exclusion criterion as a separate Y/N with no N/A option | Invented design. Criteria text is taken verbatim from `STUDY_FACTS.md` §7 | High (criteria) / Med (design) |
| §7.3 | `ELG-301` — any failing criterion blocks the Randomization form **and** the IRT randomization call | Invented cross-system enforcement. Assignment-specified behaviour; the IRT half is inferred | Med |
| §7.3 | "There are no waivers" | Reflects genuine GCP practice for a Phase 3 registration study; not stated in the record | High |
| §7.4 | Demographics collects **year of birth only**, not full DOB | Invented but standard privacy practice in EDC builds | Med |
| §7.5 | Medical History guidance on what to record and what to omit | Invented; the linkage to exclusion criteria is derived from `STUDY_FACTS.md` §7 | Med |
| §7.6 | AD History with auto-calculated duration hard-stopping below 12 months | Enforces the canonical inclusion criterion (AD ≥12 months) | High (rule) / Med (implementation) |
| §7.7 | Randomization form read-only, auto-populated from Axion IRT; populates within 2–30 minutes; treatment assignment **not transmitted** | Invented integration. The non-transmission of assignment is required by the canonical double-blind design (`STUDY_FACTS.md` §3) | High (blinding) / Med (mechanics) |
| §7.7 | IRT transaction ID format `AX-YYYYMMDD-HHMM-SSSS` | Invented | Low |
| §7.7 | Kit numbers 417203 / 417204 | Invented, inside the canonical 6-digit 100001–999999 range | High (range) / Low (values) |
| §7.8 | Vital sign plausible ranges (SBP 60–260, DBP 30–150, pulse 30–200, RR 6–40, temp 33.0–42.5 °C) | Invented ranges, clinically plausible | Med |
| §7.8 | `VS-118` fires on temperature ≥38.0 °C with no AE within ±2 days | Invented check, motivated by the canonical 10.3% pyrexia rate on active drug (`STUDY_FACTS.md` §13) | Med |
| §7.9 | Physical exam recorded by body system with a clinically-significant flag restricted to Investigator role | Invented design; the screening→Medical History / post-baseline→AE convention is standard practice | High (convention) |
| §7.10 | `WT-144` hard-stops height changes >2 cm after Screening | Invented. Height is collected once per the canonical SoA | Med |
| §7.11 | ECG fields (PR, QRS, QT, QTcF), `ECG-151` at QTcF >480 ms | Invented. 480 ms is a conventional threshold; the protocol's own threshold is not in the record | Med |
| §7.12 | EASI grid: four regions, area 0–6, four signs 0–3, adult multipliers 0.1/0.2/0.3/0.4, calculated total | The EASI instrument structure is real and public. The **form design** — that the site enters twenty cells and never a total — is invented, and is the assignment's specified teaching point | High (instrument) / Med (form) |
| §7.12 | Worked example totalling 20.8 | Author's arithmetic on invented component values | High (arithmetic) |
| §7.12 | `EASI-172` blocks a rater not on the site's certified-rater list | Invented enforcement of the canonical DATG rater-certification requirement (`STUDY_FACTS.md` §9, `RESEARCH_SITE.md` §2) | Med |
| §7.13 | rIGA sub-block appears **only** when vIGA-AD = 1, and its four questions | The rIGA definition is canon (`STUDY_FACTS.md` §6 co-primary 1). The conditional-display implementation is invented, and is the assignment's specified vehicle for explaining dynamic form behaviour | High (definition) / Med (behaviour) |
| §7.13 | Answers in a suppressed conditional block are deleted, with the deletion recorded in the audit trail | Invented but standard EDC behaviour, and consistent with Part 11 §11.10(e) | Med |
| §7.15 | SCORAD structure (A extent, B six intensity items 0–3, C two VAS 0.0–10.0) | The instrument is real and public; the field layout is invented | High (instrument) |
| §7.15 | FASS/HASS 0–4 scales suppressed for the remainder of the study if absent at baseline | Invented implementation of the canonical endpoint definition ("FASS-clear at Week 24 **for participants with facial AD at baseline**", `STUDY_FACTS.md` §6 and the registry record) | High (rationale) / Med (mechanics) |
| §7.16 | DLQI 10×(0–3), POEM 7×(0–4), HADS 2×7×(0–3) | Real, public instrument structures | High |
| §7.16 | Site staff transcribe from paper; participant never touches the EDC; missing item recorded as ND, never imputed at the site | Invented operational rule, consistent with genuine PRO handling practice and with the assignment | High (principle) / Med (mechanics) |
| §7.16 | `QS-227` — HADS depression subscale ≥11 or depression item 7 = 3 triggers a query plus Medical Monitor notification | Invented thresholds and routing, aligned to the HADS escalation pathway referenced at SRM §8.9 | Med |
| §7.17 | DayLog transmits nightly at ~03:00 UTC; eDiary fields read-only to everyone including the sponsor | Invented mechanics. The read-only property is assignment-specified and is defensible on PRO-validity grounds | Med |
| §7.17 | The four-step procedure when a participant reports a diary entry error (no correction; Note to File; Comments record; re-train on device use only) | Invented procedure. It is the operationally correct answer and the emotionally hardest one, which is why it is spelled out | Med |
| §7.17 | eDiary Compliance Review form; thresholds `EPR-231` <70%, `EPR-234` <50%, `EPR-237` fewer than 4 evaluable days in the 7 before an endpoint visit | Invented. The 4-of-7 evaluable-day concept is consistent with the "evaluable week" definition referenced at SRM §9.5 | Med |
| §7.18 | Dosing form: two kit numbers, two injection times, two injection sites that must differ, observation start/end | Derived from the canonical two-PFS regimen and rotation requirement (`STUDY_FACTS.md` §4) | High (clinical) / Med (form) |
| §7.18 | `DOS-257` enforces 60 min observation at Day 1 and Week 2, 30 min thereafter | Directly enforces canonical §4 | High |
| §7.18 | `DOS-261` blocks dosing at Week 24 and beyond; `DOS-264` caps at 7 dosing records | Directly enforces the canonical 7-dose regimen with no Week 24 dose | High |
| §7.19 | Indication mandatory; "prophylaxis", "PRN", "unknown" rejected as indications | Invented rule; reflects real coding practice | Med |
| §7.19 | WHO-DD coding performed downstream by the sponsor; site never codes | Real industry practice; WHO-DD is named in the assignment | High |
| §7.19 | `CM-281` flags the prohibited classes post-Day 1 without a Rescue Therapy record | Prohibited classes taken verbatim from the canonical exclusion criteria (`STUDY_FACTS.md` §7) | High (classes) / Med (check) |
| §7.20 | AE verbatim rules — one event per record, no abbreviations, no diagnosis-plus-symptoms, no severity/causality words, no participant quotes | Assignment-specified; genuine CDASH/SDTM-driven practice | High |
| §7.20 | Causality and severity restricted to Investigator role; Alonzo Vega's fields read-only | Enforces the canonical delegation exclusion in `RESEARCH_SITE.md` §2 | High |
| §7.20 | The serious=Yes banner reproducing the safety intake contacts | Contacts are canon (`STUDY_FACTS.md` §10); the banner is invented | High (contacts) / Med (banner) |
| §7.20 | `AE-311` soft warning on a verbatim containing a comma or "and" | Invented; a plausible and useful heuristic check | Low |
| §7.20 | `AE-317` flags pyrexia/chills within 48 h of dosing against the AESI list | Enforces canonical AESI category 2 (`STUDY_FACTS.md` §13) | High (AESI) / Med (check) |
| §7.21 | Deviation categories; major/minor classification made by the sponsor and read-only to the site | Invented. Sponsor-side classification is standard practice | Med |
| §7.22 | Rescue Therapy form and its NRI/WOCF consequences | The missing-data conventions are canon (`STUDY_FACTS.md` §6). The warning framing is the author's | High (conventions) |
| §7.23 | "Will the participant continue study visits?" field; discontinuing drug ≠ leaving the study | Invented field; the distinction is a genuine and frequently misunderstood one | High (concept) |
| §7.24 | Lost-to-follow-up requires three documented contact attempts before it can be selected | Invented threshold; three attempts is conventional | Med |
| §7.25 | Site enters collection date/time, fasting, accession, not-collected reason and the local urine pregnancy result; all analyte results arrive from Meridian read-only | Invented split, consistent with the canonical central/local testing division (`STUDY_FACTS.md` §8) | High (split) / Med (fields) |
| §7.25 | Investigator lab review with clinical-significance flag within 5 business days | Directly enforces canonical `STUDY_FACTS.md` §8 | High |
| §7.25 | `LB-357` flags PK/ADA collection after dosing time | Enforces the canonical predose ordering rule (§5, §8) | High |
| §7.26 | Comments form usage rules; the identifying-information prohibition | Invented; the prohibition is a genuine GCP/privacy requirement | High (prohibition) |
| §8.1 | Three check behaviours (hard stop / soft warning / auto-query) | Invented taxonomy; matches real EDC behaviour | High |
| §8.2 | Three check *kinds* (univariate / cross-form / cross-visit) with study-specific examples | Taxonomy assignment-specified; all examples invented but derived from canon | High |
| §8.3 | Firing times: field exit, form save, nightly batch ~04:00 UTC | Invented. The overnight batch is the mechanism behind the "clean at 18:00, six queries at 08:00" friction | Med |
| §8.4 | Query lifecycle Opened → Answered → Closed / Re-queried, plus Cancelled; ageing colours; 30-day CRA/CTM escalation | Invented specifics; the lifecycle itself is universal | High (lifecycle) / Med (specifics) |
| §8.4 | **3-business-day** query response target | Invented (assignment-specified) | Med |
| §8.5 | Five worked good/bad query-response pairs | Entirely invented, using participants, dates, and events consistent with the rest of the document | Med |
| §8.6 | Four-step disagreement escalation path | Invented but operationally correct | Med |
| §9.1 | Reason-for-change picklist (seven values plus free-text detail) | Invented list | Med |
| §9.2 | Audit trail captures old value, new value, user, UTC timestamp, reason; no privilege anywhere can alter it; deletions are flags, not removals | Directly implements 21 CFR 11.10(e). The UTC display and the specific rendering are invented | High (regulation) / Med (rendering) |
| §10 | Quarterly SAE reconciliation listing; 10-business-day site response; Priya Raghunathan owns it with PI review | Invented cadence and ownership. Reconciliation before lock is a genuine expectation; the frequency is not prescribed | Med |
| §10 | Four discrepancy archetypes and their resolutions | Invented framing; matches the discrepancy types anticipated in the Safety Reporting Manual outline §2.21 | High (alignment) |
| §11.2 | Text of the investigator attestation | Invented wording, constructed to satisfy 21 CFR 11.50's "meaning of the signature" requirement and to echo the Form FDA 1572 commitments | Med |
| §11.3 | Casebook-level (not field-level) signature; blocked while queries are open (`SIG-401`); 10-business-day expected cadence | Invented implementation; the "sign after query resolution" logic is assignment-specified and regulatorily sound | High (logic) / Med (mechanics) |
| §11.4 | Signature dialog requiring user ID + password + MFA code | Implements Part 11 §11.200's two-component requirement. The third factor (MFA) exceeds the minimum and is a deliberate modern choice | High (regulation) / Med (implementation) |
| §11.4 | Signature manifestation block naming Miriam A. Okonkwo, MD, dated 12-DEC-2023 16:22 UTC | Format implements §11.50; the specific rendering and timestamp are invented | Med |
| §11.5 | Any subsequent data change invalidates the signature (`SIG-407`) | Invented implementation; standard and correct EDC behaviour | High |
| §11.6 | Absolute prohibition on signing for the PI; Sub-I may sign under their own credentials where delegated | Genuine regulatory position under Part 11 §11.100(a). The Site 1047 application (Feist/Nakamura) follows from the canonical delegation | High |
| §12.1 | Seven site-runnable reports | Invented set | Med |
| §12.2 | Seven KRIs with numeric targets and escalation triggers | Entirely invented thresholds. Chosen to be tight enough to bite and loose enough to be achievable | Low |
| §12.3 | Anonymised Benchmarks tab showing study-wide and country medians, updated monthly | Invented feature. Included because "where the site can see how it compares" was assignment-specified | Low |
| §13.1 | Downtime Packet of paper backup worksheets, one per eCRF, held in the Site 1047 research file room and maintained by Sam Oyelaran | Invented. Ownership is inferred from Sam Oyelaran's canonical essential-document role | Med |
| §13.1 | Notify helpdesk and CRA for unplanned outages exceeding 2 hours | Invented threshold | Low |
| §13.2 | **24-hour catch-up** after restoration; paper retained as source; Comments record noting the outage; study-wide notice after outages >4 hours | Invented (24-hour rule assignment-specified) | Med |
| §14.1 | Three lock stages (interim freeze / soft lock / hard lock) and what each permits | Invented terminology; the staged model is real industry practice | High (concept) / Med (terms) |
| §14.2 | Eight-item pre-lock site checklist | Invented but comprehensive and conventional | Med |
| §14.3 | Post-lock changes require sponsor data-management-lead and statistician approval | Invented governance; conventional | Med |
| §14.3 | HCR supplies a certified PDF casebook copy including the full audit trail before access withdrawal; Sam Oyelaran files it under SOP-027 | Invented deliverable, grounded in ICH E6(R3) investigator record-control and retention expectations. SOP-027 is canon | High (principle) / Med (mechanics) |
| Appendix A | eCRF index by visit | **Derived directly from the canonical SoA in `STUDY_FACTS.md` §5.** Additions beyond the SoA — Visit Date & Status, Screen Failure, IP Accountability, Local Urine Pregnancy, Study Drug Discontinuation, Study Completion/Discontinuation — are inferred administrative forms with no SoA row of their own | High (SoA rows) / Med (administrative forms) |
| Appendix A | Unscheduled and ET columns | Inferred. The SoA lists both visit types without specifying their assessment sets; the ET column mirrors the Week 36 set plus safety forms | Med |
| Appendix B | Field convention quick card | Consolidation of §6 and §7; conventions match `STUDY_FACTS.md` §11 | High |
| Appendix C | Query response cheat sheet and five templates | Invented | Med |
| Appendix D | Error message glossary, 26 codes | Wholly invented; codes are internally consistent with their in-text uses | Low (codes) / Med (usefulness) |
| Appendix E | Printable contact card | All contacts reproduced from `STUDY_FACTS.md` §9–§10 and `RESEARCH_SITE.md` | High |
| Throughout | Query identifier `Q-2291`, protocol deviation reference `PD-[n]` | Invented formats | Low |
| Throughout | UTC used for audit-trail and signature timestamps; site local 24-hour time for clinical data | Invented convention, but the right one — audit trails are conventionally UTC to survive time-zone comparison across 21 countries. Clinical times follow the canonical §11 convention | Med |
| Throughout | "5 business days" and "3 business days" expressed in business rather than calendar days | Invented. Business days are conventional for site-facing operational targets and avoid weekend edge cases | Med |

---

## Consistency checks performed

| Check | Result |
|---|---|
| Every visit in the SoA has an eCRF set in Appendix A | Pass — Screening through Week 36, plus Unscheduled and ET |
| Every instrument in `STUDY_FACTS.md` §6 and the registry `outcomesModule` has a form | Pass — EASI, vIGA-AD/rIGA, BSA, SCORAD (incl. Itch VAS), FASS, HASS, DLQI, POEM, HADS, and the three daily NRS via eDiary |
| Dose regimen | Pass — 7 doses, no dose at Week 24, enforced by `DOS-261` and `DOS-264` |
| Observation periods | Pass — 60 min Day 1 and Week 2, 30 min Weeks 4–20, enforced by `DOS-257` |
| Visit windows | Pass — ±3 d Weeks 2–24, ±7 d Weeks 28–36, referenced in §5.2 and §7.1 |
| Eligibility thresholds | Pass — EASI ≥16, vIGA-AD ≥3, BSA ≥10%, Worst Pruritus NRS ≥4, AD ≥12 months, all enforced by named checks |
| Vendor names, phone numbers, emails | Pass — reproduced from `STUDY_FACTS.md` §9–§10 without alteration |
| Date format | Pass — `DD-MMM-YYYY` throughout |
| Participant, randomization, and kit ID formats | Pass — `SSSS-NNN`, 6-digit randomization, 6-digit kit |
| Site staff names, roles, and delegation exclusions | Pass — per `RESEARCH_SITE.md` §2, including Alonzo Vega's three exclusions |
| Scope boundary | Pass — no IRT transaction screens, no SAE form, no assessment methodology; all three cross-referenced by name |
