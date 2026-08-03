> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions Log — `ip_handling_manual.md`

**Document covered:** `/docs/trial_documents/ip_handling_manual.md` — Investigational Product
Handling Manual (Clinical Supply Manual), Protocol 20210143 / ROCKET-Horizon, **Version 3.0, dated
20-NOV-2023**.

**Companion outline:** `/docs/outline/ip_handling_manual_outline.md`.

---

## Blanket statement of invention

> **The ClinicalTrials.gov record for NCT05651711 contains no clinical supply information of any
> kind.** It names no manufacturing site, no packaging or labelling operation, no Qualified Person or
> MIA(IMP) holder, no depot, no courier lane, no shipper or data-logger model, no IRT supply
> parameters, no excursion turnaround target, no complaint or recall procedure, and no destruction
> workflow. **Every element of the supply chain described in this manual is invented**, including:
>
> - the manufacturing and packaging network and the geographic split between drug substance, drug
>   product, and clinical packaging;
> - the QP certification arrangement, the named QP, and the MIA(IMP) number;
> - the entire depot network — regional depots, in-country depots, depot codes, addresses and
>   telephone numbers;
> - shipper configurations, packouts, lane names, lane counts, qualification durations, and transit
>   times;
> - the electronic data logger model, its sampling interval, and every alarm threshold;
> - **every IRT supply-algorithm parameter** — initial allocation, trigger level, resupply level,
>   buffer size, forecast window, coverage confidence, and order cut-off times;
> - all turnaround targets, reporting timelines, recall response windows, and retention periods not
>   traceable to a cited regulation;
> - all form and case reference formats, all batch and kit numbers used as examples, and all named
>   sponsor personnel.
>
> The only facts inherited rather than invented are those in `STUDY_FACTS.md` and `RESEARCH_SITE.md`,
> which are themselves partly invented and separately logged. Regulatory citations (EU GMP Annex 13 /
> Annex VI, Regulation (EU) No 536/2014, Commission Delegated Regulation (EU) 2017/1569, 21 CFR
> 312.6/312.57/312.59/312.61/312.62, 21 CFR 7.3, ICH E6(R3), ICH Q5C, EU GDP 2013/C 343/01, IATA DGR,
> ADR, ISTA 7E) refer to real instruments; their **application** to this fictional study is invented.

---

## 1. Document identity and control

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Cover | Document titled "Investigational Product Handling Manual (Clinical Supply Manual)" | Assignment brief; both names are in common industry use for this artefact | High |
| Cover | Version 3.0, effective 20-NOV-2023, superseding v2.1 (07-JUL-2023) | Version and date specified in the assignment brief; supersession chain invented | High (date) / Low (chain) |
| Cover | Document owner: Meridian Global Clinical Supply Chain with Meridian Clinical Supply Quality | Plausible dual ownership; the record names no Meridian internal function | Med |
| Cover | Effective date sits 9 days ahead of Protocol Amendment 3 (29-NOV-2023) | Deliberate: supply documents lead protocol amendments because supply has lead time. Consistent with STUDY_FACTS §1 | Med |
| Document history | Five-row history: v1.0 15-SEP-2022, v2.0 10-MAR-2023, v2.1 07-JUL-2023, v3.0 20-NOV-2023 | Entirely invented. Dates chosen to bracket study start (FPFV 14-DEC-2022) and site activation (06-JAN-2023) sensibly | Low |
| Document history | v3.0 changes: migration to ColdTrace ST-4 loggers, addition of §7.4 expiry extension, IRT re-parameterisation, revised destruction template, rewritten recall §15.5 | Invented to give the version a reason to exist and to explain why the expiry-extension example (Appendix B) is dated MAR-2024 | Low |
| Training statement | Retraining required for delegated IP personnel before the next shipment | Standard sponsor practice; not regulated as such | Med |

## 2. Contacts

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §3 | Meridian Global Clinical Supply Chain: `clinicalsupply.20210143@meridianbio-sim.example`, +1 (866) 555-0180, Mon–Fri 07:00–18:00 PT | Invented. Follows the STUDY_FACTS §11 fictional 555 convention and the `-sim.example` domain used elsewhere | High (as convention) / Low (as fact) |
| §3 | Meridian Clinical Supply Quality (CSQ): `csq.excursions@meridianbio-sim.example`, +1 (866) 555-0182 | Invented. A distinct quality function is needed so that excursions do not route through the supply-planning team | Med |
| §3 | Meridian Product Quality Complaints: `productquality@meridianbio-sim.example`, +1 (866) 555-0181, 24/7 intake | Invented. Large sponsors do run 24/7 complaint intake | Med |
| §3 | GlobalRx Logistics Control Tower +1 (800) 555-0172, 24/7 | Invented. STUDY_FACTS §9 gives GlobalRx only a business-hours number (+1 (800) 555-0171), which cannot support a 24/7 cold chain — the Control Tower line is added rather than contradicting canon | Med |
| §3, App. E | GRX-MEM-01 depot line +1 (901) 555-0173 (Memphis area code) | Invented; area code chosen for realism | Med |
| §3 | Meridian GCP QA: `gcpqa.20210143@meridianbio-sim.example` | Invented | Low |
| §3 | Kevin Ostrander, CCRA and Rosalind Achebe, CTM contacts | Taken verbatim from STUDY_FACTS §10 | Inherited |
| App. B, C | "A. Ferreira-Lund, Associate Director, Global Clinical Supply Chain" as the sponsor signatory | Invented name for a signature block; needed to make the sample forms look real | Low |

## 3. Manufacturing, packaging, and blinding

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5, §6.1 | Drug substance manufactured at Meridian Emeryville, CA | Directed by the assignment brief; the sponsor and all its sites are invented, and siting drug-substance manufacture at the sponsor's own Emeryville HQ (STUDY_FACTS §1) is plausible for a large biologics sponsor | High (per brief) |
| §5, §6.1 | Drug product fill-finish and PFS assembly at Meridian Manufacturing Limited, Juncos, Puerto Rico | Directed by the assignment brief; Juncos is a real Meridian manufacturing site | High (per brief) |
| §5, §6.2 | Blinded clinical packaging at "Meridian Clinical Supply Operations, Juncos, PR" | Invented. Co-locating clinical packaging with fill-finish is common | Med |
| §6.1 | Placebo is the identical formulation buffer without antibody, viscosity-matched so injection force and duration are indistinguishable | Invented mechanism. Consistent with STUDY_FACTS §4 ("identical PFS, identical carton, identical volume") | Med |
| §6.1 | Syringes held unlabelled in quarantine at 2–8 °C pending QC release | Standard practice; invented as stated | High (as practice) |
| §6.2 | Active and placebo never packaged simultaneously; documented line clearance and component reconciliation; sampled QC over-check by personnel not told which campaign | Invented specifics implementing a real Annex 13 principle | Med |
| §6.3 | Randomisation generated by an independent unblinded Meridian biostatistician, permuted blocks, stratified by region and baseline vIGA-AD (3 vs 4), 3:1 | Ratio and stratification factors from STUDY_FACTS §3 (stratification itself flagged ASSUMED there). Permuted blocks and the "independent unblinded biostatistician" are invented | Med |
| §6.3 | A "medication list" maps 6-digit kit number → medication type A/B; kit numbers drawn from one interleaved sequence, not blocked by treatment | Invented but is the standard blinding-safe design. Directly supports the STUDY_FACTS §4 requirement that product and placebo be indistinguishable | High (as design) / Low (as fact) |
| §6.3 | Code held by: Meridian secure code repository, unblinded biostatistics, and the Axion IRT production database only | Invented distribution list | Med |
| §6.3, §7.1 | **The clinical label carries the packaging batch number, not the drug product lot number**, because active and placebo lot numbers differ and would unblind on sight | Invented, but a real and non-obvious blinding control. This is the manual's signature technical detail | Med |
| §6.3 | Packaging batch identifiers of the form `PKG-2309-04`, `PKG-2211-02` | Invented format (YYMM-sequence) | Low |

## 4. Labelling

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §7.1 | The eleven-item mandatory content list | Paraphrased from the real EU GMP Annex 13 §26 particulars and 21 CFR 312.6. The mapping to *this* study's label is invented | High (regulation) / Med (application) |
| §7.1, App. A | US caution statement "Caution: New Drug — Limited by Federal (or United States) law to investigational use." appears on the same global label as the Annex 13 particulars | Real 21 CFR 312.6 wording. Combining both on one global artwork is a real industry approach but invented here | Med |
| §7.2 | Multi-page booklet label, affixed along one edge, tamper-evident sealing tab, English + barcode on the outermost page | Invented implementation of a real device. The 21-country count is inherited from STUDY_FACTS §3 | Med |
| §7.2 | A detached booklet label renders the kit unusable and must be quarantined and reported as a quality defect | Invented rule, but follows from the label being a mandatory particular | Med |
| §7.3 | Perforated tear-off accountability panel with kit number, batch, expiry and fields for participant ID, visit, date, initials; all mandatory content duplicated above the perforation | Invented design; tear-off labels are real and common | High (as practice) |
| §7.4 | Six-step expiry-extension procedure with Relabelling Authorisation, serialised over-labels plus controlled overage, IRT update, second-person verification, 5-business-day return | Invented procedure implementing the real Annex 13 allowance for site over-labelling. The 5-business-day return window is invented | Med (mechanism) / Low (numbers) |
| App. A | Kit number 318472; batch PKG-2309-04; use by 31-JAN-2025; label artwork v4.0 / 12-SEP-2023 | Invented. Kit number complies with STUDY_FACTS §11 (6 digits, 100001–999999) and is deliberately distinct from the canonical example randomisation number 204518 | High (format) / Low (values) |
| App. B | EEN-20210143-0006 / RLA-20210143-0006; batch PKG-2211-02 extended 31-MAR-2024 → 30-SEP-2024; change control CC-2024-00318; kits 318472–318475; 6 over-labels serial 0031–0036 | Entirely invented worked example | Low |
| §4 | Shelf life 36 months at 2–8 °C | Invented. Plausible for a liquid mAb PFS; supports the 6-month expiry extension example | Med |

## 5. QP release and certification

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5, §8.1 | QP certification performed at **Meridian Europe B.V., Breda, Netherlands** | Directed by the assignment brief (Breda depot). Meridian Europe B.V. is genuinely Breda-based, so the choice is plausible | High (per brief) |
| §8.1 | MIA(IMP) number **NL/MIA-IMP/2019/0087** | Wholly invented; format modelled on real Dutch authorisation numbering | Low |
| §8.1 | Named QP: **Marieke van der Zanden, PharmD** | Invented person | Low |
| §8.1 | A single EU certification record supports supply to all 21 countries, EU and non-EU | Invented operating model. Real sponsors often certify centrally and release regionally; not universal | Med |
| §8.2 | Release requires: country CTA, site ethics opinion, essential documents complete/green-light, valid import licence, no quality hold | Invented enumeration of a real concept | Med |
| §8.3 | The seven-row release documentation trail and its custodians | Invented mapping; the individual record types are real GMP artefacts | Med |
| §5.1 | The "two gates" framing, and the claim that a zero-availability display in IRT over a stocked depot is usually a Gate-2 problem | Invented explanatory device (and a good game hook) | Med |

## 6. Depots, shipping, and cold chain

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5, App. E | Three regional depots: GRX-MEM-01 Memphis TN, GRX-BRE-01 Breda NL, GRX-SIN-01 Singapore | Directed by the assignment brief. Depot codes invented | High (per brief) / Low (codes) |
| §5 | **Site 1047 is served by GRX-MEM-01, Memphis TN** | Required by the brief; Memphis is a real air-cargo hub and a natural US pharma depot location | High |
| App. E | Depot street addresses (4155 Delp Street Memphis; Takkebijsters 3 Breda; 30 Tuas South Ave 6 Singapore) and all depot phone numbers | Invented. Addresses are plausible-format industrial addresses in real logistics districts | Low |
| §5, App. E | In-country depots in São Paulo, Osaka, Mexico City, Incheon, Istanbul, Johannesburg, Sydney | Invented, but chosen to match countries in the registry record that commonly require local importation | Med |
| App. E | Breda serves Belgium, Czechia, Denmark, Estonia, Finland, Germany, Poland, Portugal, Romania, Spain, UK; Singapore is the APAC/South Africa hub | Country list derived from the registry record's 21 countries; the depot-to-country mapping is invented | Med |
| §9.1 | Shippers: **GlobalRx ChillGuard CG-8** (≤8 kits, 96 h) and **CG-24** (≤24 kits, 120 h), +5 °C PCM | Product names, capacities and durations all invented. 96 h/120 h durations were specified in the brief | High (durations) / Low (names) |
| §9.1 | No dry ice; PCM chosen to avoid freezing risk and UN1845 DG classification | Invented rationale, but technically correct for a 2–8 °C biologic | High (as reasoning) |
| §9.1 | Under-filled shippers made up with dunnage because performance is qualified for the packout | Invented statement of a real qualification principle | High (as practice) |
| §9.2 | Logger: **ColdTrace ST-4**, single-use USB, 5-minute sampling, 30-minute start delay, PDF on connection | Product invented; the capability set matches real single-use USB loggers | Med |
| §9.2 | Alarm thresholds — A: <2.0 °C cumulative >60 min; B: >8.0 °C cumulative >240 min; C: any single reading ≤ −0.5 °C; D: any single reading >30.0 °C | **Entirely invented numbers.** Chosen to be internally consistent with the STUDY_FACTS §4 excursion allowance (a 4-hour warm alarm is far inside a 30-day budget, so alarms trigger reporting rather than destruction) and with the absolute no-freeze rule | Low (values) / Med (logic) |
| §9.2 | Logger travels inside the payload well, not on the shipper exterior; loggers are not returned to the depot | Invented operational rules reflecting real practice | Med |
| §9.3 | 34 qualified lanes; qualification against ISTA 7E summer/winter profiles; requalification every 24 months; suspension after two temperature failures in a rolling 12 months | Lane count, requalification interval and suspension rule invented. ISTA 7E is a real standard | Low (numbers) / High (standard) |
| §9.3 | **Lane NA-07**, Memphis → Portland OR, CG-8, next-flight-out air + ground final mile, 24–36 h typical against a 96-h qualification, delivery Mon–Thu only | Entirely invented. The Mon–Thu delivery rule is aligned to Site 1047's clinic hours in RESEARCH_SITE.md §1 (Fri closes 15:00 PT) | Med |
| §9.4 | Per-shipment import licences required for Brazil, Mexico, Türkiye, South Africa; Japan and South Korea require in-country depot importation; Australia requires TGA notification | Countries taken from the registry record. The specific import requirements are invented, though directionally consistent with well-known regional practice | Low |
| §9.4 | Customs holds reported by the Control Tower within 4 hours | Invented service level | Low |
| §9.4 | ST-4 lithium cell within IATA Section II / UN3091 exemption | Real regulatory framing applied to an invented device | Med |
| §11 | Depot qualification audit before use and at least every 3 years; 15-minute logging; emergency power with automatic transfer | Invented intervals; typical of real qualification programmes | Med |
| §11 | Shortest-expiry-first picking, and **no kit shipped with <90 days remaining shelf life** | Invented rule; 90 days is a common industry threshold | Med |
| §11 | **Site-returned product is never restocked** | Invented as an absolute; real depots do treat site returns this way | High (as practice) |
| §11 | Reconciliation cadence: daily automated IRT↔WMS, monthly cycle count, annual full physical, study-level at close-out | Invented cadence | Med |

## 7. IRT supply algorithm

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §10 | Axion IRT build **20210143-IRT-v6.4** | Invented. Axion IRT is canon (STUDY_FACTS §9); the build identifier is not | Low |
| §10.1 | Initial site allocation **10 kits** for Site 1047 | Invented. Sized to cover ~3 participants' Day 1 + Week 2 loading doses plus buffer, against a contracted target of 12 randomised (RESEARCH_SITE.md §5) | Med |
| §10.2 | **Trigger level 6 kits; resupply level 14 kits** for Site 1047 | Invented. Chosen so the site holds roughly 4–6 weeks of demand at its actual enrollment rate (14 randomised over ~18 months) | Med |
| §10.3 | Predictive resupply over a **28-day forward window**; demand = scheduled dosing visits + (trailing-60-day randomisation rate × window) + **4-kit buffer** | Invented algorithm and all parameters. The visit-schedule half is deterministic and derives from the canonical SoA (STUDY_FACTS §5): 7 doses at Day 1, W2, W4, W8, W12, W16, W20 | Med (structure) / Low (numbers) |
| §10.4 | Four inventory states: unassigned, assigned, quarantined, expired; only unassigned counts toward the trigger; expiry exclusion is automatic the day after the labelled date | Invented state model; standard for RTSM systems | High (as design) |
| §10.5 | IRT holds two invisible per-type buckets and runs trigger/resupply independently for each to a **≥95% coverage confidence**; the minority (placebo) bucket carries proportionally more buffer | Invented. The statistical reasoning is sound and is the honest answer to how a 3:1 study supplies sites without unblinding | Med (logic) / Low (95% figure) |
| §10.5 | Site IRT screens, manifests, packing lists and monitoring reports show **aggregate counts and kit numbers only**; any per-type itemisation is a potential unblinding event to be reported | Invented control. Directly protects the STUDY_FACTS §3 double-blind and §4 "no unblinded pharmacist" constraint | High (as design intent) |
| §10.6 | Dispensing transaction triggers re-evaluation; orders cut off at **14:00 depot local, Mon–Thu** for GRX-MEM-01 | Invented cut-off | Low |
| §10.6 | Order number format **SHP-1047-0019** | Invented format | Low |

## 8. Excursions, quarantine, complaints, recall, destruction

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §12.1 | Excursions raised via an IRT **Temperature Excursion transaction** within 24 hours, which auto-quarantines the kits | The 24-hour reporting obligation is canon (STUDY_FACTS §4). The IRT transaction as the route, and auto-quarantine, are invented | High (24 h) / Med (route) |
| §12.2 | Case reference format **TE-2024-00417**; triage for completeness within **1 business day**; incomplete packages returned same day | Invented | Low |
| §12.2, §12.5 | **The turnaround clock starts when the data package is complete** | Invented rule; realistic and a useful game mechanic | Med |
| §12.3 | Assessment performed by Meridian stability sciences in Product Quality, considering MKT, duration per band, cumulative history, batch stability dataset and remaining shelf life | Invented allocation of responsibility. MKT and the listed stability-indicating attributes (aggregation, charge heterogeneity, potency, sub-visible particulates, container-closure integrity) are real for an IgG1 mAb | Med |
| §12.3 | **The excursion budget is cumulative and does not reset**; **no freezing allowance — any freeze is an automatic Destroy** | The 30-day cumulative allowance is canon (STUDY_FACTS §4); "does not reset" and the absolute freeze rule are invented interpretations, though scientifically standard for proteins | High (canon) / Med (interpretation) |
| §12.4 | Three disposition categories — Release for use / Quarantine pending further data / Destroy — with defined IRT effects | Categories specified in the assignment brief; the IRT effects are invented | High (per brief) |
| §12.5 | **Target 3 business days**; **24 hours** on an urgent flag | 3 business days specified in the brief; the 24-hour urgent tier is invented | High / Med |
| §12.6 | Disposition notice reference **CSQ-DN-NNNNN**; **IRT status, not the email, is the operative record** | Invented format and invented precedence rule (a deliberate trap for the game) | Med |
| §12.7 | Excursion history held at kit level and follows the kit across depot, transit and site | Invented but necessary for the cumulative budget to mean anything | Med |
| §13 | Dual physical + IRT quarantine, both mandatory; quarantined product **stays at 2–8 °C**; only Meridian CSQ can release | Invented rules; the "quarantine is not permission to let it warm up" point is an invented emphasis | Med |
| §14.1 | The reportable-defect list (particulates, discolouration/turbidity, damaged syringe, illegible/detached label, missing components, kit-number mismatch, delivery failure) | Invented enumeration; typical of real complaint taxonomies. The appearance description ("clear to slightly opalescent, colourless to pale yellow") is invented but standard for a mAb | Med |
| §14.2 | Timelines: 1 business day normally; **24 hours if administered or AE-associated**; immediate by phone for suspected counterfeit/tampering. Acknowledgement within 2 business days | All invented | Low |
| §14.2 | Complaint reference format **PQC-24-01187** | Invented | Low |
| §14.3 | Sample return via a qualified GlobalRx return shipment; used syringes retained as sharps and returned only on specific request | Invented procedure | Med |
| §14.4 | A complaint accompanied by an AE requires **two separate reports on two clocks**, cross-referenced by participant ID and kit number | Invented rule, but the dual-reporting principle is real. Safety intake details inherited from STUDY_FACTS §10 | High (principle) |
| §15.1 | Recall classes I/II/III (FDA 21 CFR 7.3) and EU Class 1/2/3, with quarantine windows 24 h / 3 bd / 5 bd and response windows 3 bd / 5 bd / 10 bd | Classification framework is real; **all windows are invented** | High (framework) / Low (windows) |
| §15.2 | The notification cascade Meridian Global Quality → CSQ → GlobalRx/depots + Axion IRT → HCR CTM → CRAs → sites → IRB/EC, with Class I site notification within 24 h | Invented cascade using canonical vendor roles | Med |
| §15.3 | Five required site actions; recalled product returned to depot, never destroyed at site | Invented | Med |
| §15.4 | Recall closes only at 100% kit accountability; effectiveness check performed | Invented but standard | High (as practice) |
| §15.5 | Sponsor exposure assessment; medical monitor (Ana Belmonte-Ruiz, MD) decides on participant notification; IRB notified where required; investigator retains the dosing decision; **no participant contacted before sponsor and medical monitor agree the message**; a recall is not of itself an unblinding event | Invented policy. The medical monitor and Keystone IRB are canon (STUDY_FACTS §9–10, RESEARCH_SITE.md §4) | Med |
| §16.1 | The fixed sequence reconcile → CRA source verification → written authorisation → destroy/return → certificate → file | Invented as an explicit sequence; it is the standard implementation of 21 CFR 312.59 and 312.62(a) | High (as practice) |
| §16.2 | The reconciliation identity (shipped = administered + dispensed-not-administered + on hand + returned + destroyed + quarantined) | Invented formulation of a standard accountability check | High |
| §16.3 | Destruction Authorisation reference **DA-20210143-NNNN**, **90-day validity**, countersigned by the CRA | Invented format and validity period | Low |
| §16.4 | **Site 1047 is approved for on-site destruction of used/partially used syringes only**; all unused kits return to GRX-MEM-01 | Invented site-specific determination. Consistent with RESEARCH_SITE.md, which describes no validated destruction capability | Med |
| §16.5 | Destruction certificate contents; returned within **10 business days** | Invented timeline; contents are standard | Med |
| §16.5 | Record retention "2 years after approval / 2 years after discontinuation and FDA notification, or national law, whichever is longer" | Real 21 CFR 312.57(c)/312.62(c) wording; the deferral to the CTA for Site 1047's operative period is invented | High (regulation) |
| §16.6 | The six categories that block destruction before final reconciliation | Invented enumeration | Med |
| App. C | Worked destruction authorisation DA-20210143-0114, issued 12-JUN-2024, valid to 10-SEP-2024, monitor verification 06-JUN-2024, 7 kits (318402–318440), return collection 25-JUN-2024 | Entirely invented worked example. Dates sit between the study's primary completion (05-JUN-2024) and LPLV (27-AUG-2024) per STUDY_FACTS §1 | Low |
| App. D | The two-part excursion report / disposition form and every field on it | Invented form design | Med |

## 9. Blinding, end of study, and appendices

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §17.1 | The role-by-role unblinded/blinded table, including "depot systems handle a non-semantic type flag" and "designated unblinded Global Patient Safety staff" | Invented allocation. Consistent with STUDY_FACTS §3 (sponsor study team blinded) and §4 (no unblinded site pharmacist) | Med |
| §17.2 | Four firewall mechanisms, including **server-side enforcement** of IRT data views rather than column hiding | Invented technical control; a real and meaningful distinction | Med |
| §17.3 | IRT code-break audit fields; automatic notification to Global Patient Safety and the CTM that a break occurred but not what it revealed | Invented mechanism. Emergency unblinding via Axion IRT and Cascade SOP-024 are canon | Med |
| §17.3 | Accidental unblinding reported within 24 hours | Invented timeline | Low |
| §18 | Six-step close-out: dispensing cut-off after last Week 20 dose, final reconciliation, final returns, destruction authorisation, IRT close-out to zero, archival package | Invented sequence; the Week 20 last-dose anchor is canon (STUDY_FACTS §5) | Med |
| §18 | Contents of the archival package | Invented enumeration | Med |
| App. A | The rendered label box, including the barcode representation and the Axion IRT number as the emergency-unblinding contact | Invented rendering. Using the IRT 24/7 line as the label's emergency contact is consistent with STUDY_FACTS §10 | Med |
| App. F | The escalation matrix, its 13 symptom rows and every target response time | Invented. The final row ("site-to-site transfer — not permitted") is an invented prohibition, though it reflects real sponsor policy | Med |

---

## 10. Canon compliance check

| STUDY_FACTS / RESEARCH_SITE constraint | Where honoured |
|---|---|
| 2 × 150 mg/1.0 mL PFS = 300 mg SC per dose; one carton = one dose | §4, App. A |
| 7 doses: Day 1, W2, W4, W8, W12, W16, W20; no dose at Week 24 | §4, §10.3, §18 |
| Storage 2–8 °C, original carton, protect from light, do not freeze, do not shake | §4, App. A, §9, §13 |
| Cumulative ≤30 days at ≤25 °C; report within 24 h | §4, §12.1, §12.3, App. D |
| Kit numbers 6 digits, 100001–999999, IRT-assigned | §4, §6.3, App. A/B/C |
| GlobalRx Logistics as depot and courier | §3, §5, §9, §11, App. E |
| Axion IRT as RTSM | §3, §10, §12, §17 |
| Matching placebo, visually indistinguishable | §4, §6.1, §6.2 |
| **No unblinded pharmacist required at the site** | §17.1 (stated explicitly) |
| 3:1 allocation | §6.3, §10.5 |
| 21 countries, 151 centres | §7.2, §8.1, §9.4 |
| Site 1047 = Cascade Dermatology, Portland OR; PI Miriam A. Okonkwo, MD | §5, App. C |
| Dates as DD-MMM-YYYY; temperature as 2–8 °C; 555 phone numbers | Throughout |
| Pharmacy Manual owns site-side handling | §2.2, §7.3, §9.2, §12.1, §16.2 |

**No statement in `ip_handling_manual.md` is believed to contradict `STUDY_FACTS.md`.** The one place
where canon was extended rather than followed is the GlobalRx contact: STUDY_FACTS §9 gives business
hours only, and a cold chain requires 24/7 coverage, so a separate 24/7 Control Tower number was
added alongside the canonical line rather than changing it.
