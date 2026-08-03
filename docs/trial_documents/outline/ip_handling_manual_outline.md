> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline — Investigational Product Handling Manual / Clinical Supply Manual (Protocol 20210143 / ROCKET-Horizon)

Deep section analysis: what a **sponsor-issued** IP handling manual contains, why each part exists,
which regulation it implements, and what fails when it is missing. Written as design notes for
`/docs/trial_documents/ip_handling_manual.md`.

**Scope warning to the author of that file:** a separate document, the **Pharmacy Manual**, owns
everything that happens *inside* Site 1047 — receipt inspection at the site bench, the site
refrigerator and its TempTrak monitoring, the dispensing double-check, syringe preparation and
injection technique, the site accountability log, and the site's first-hour response to an alarm.
This manual owns the **other 99% of the product's life**: the parts the site never sees. Where the
two documents meet, this manual points at the Pharmacy Manual by name and stops.

---

## 0. What this document *is*, and what it is not

There are four documents in this study that all talk about the drug, and they are constantly
confused with each other. The outline starts by fixing the boundaries, because every design decision
below follows from them.

| Document | Audience | Question it answers |
|---|---|---|
| **Protocol 20210143 §6** | Regulator, IRB, investigator | What is the product, what dose, what regimen? |
| **Investigator's Brochure Ed. 6.0** | Investigator, IRB | What is known about this molecule's safety and pharmacology? |
| **Pharmacy Manual** | Wen-Li Chao, PharmD, at Site 1047 | What do *I* do with the carton in front of me? |
| **IP Handling Manual (this doc)** | Site + CRA + depot + sponsor supply chain | Where does the carton come from, who released it, who owns it, and what happens when something goes wrong upstream of me? |

The IP Handling Manual is a **hybrid** document, and that hybridity is its defining design problem.
It is filed in the Investigator Site File and is trained-to by site staff, so it must be readable by
a coordinator. But its subject matter is a global GMP/GDP supply chain that the coordinator will
never touch. The resolution: **the manual explains the system and then tells the site exactly which
three or four buttons it is responsible for pressing.** Everything else is written so the site
understands *why* a request from the sponsor is not negotiable — why the CRA cannot "just let you
destroy those expired kits," why an excursion report cannot be filed next week, why the sponsor asks
for a kit-level reconciliation before it will authorise anything.

Sites comply better when the machinery is visible. That is the thesis of the document.

**Regulatory status.** The manual is not itself an essential document named in ICH E6(R3). It is the
sponsor's implementation of:

- **ICH E6(R3) §4.6** — sponsor responsibilities for investigational product;
- **21 CFR 312.57–312.62** — sponsor recordkeeping, disposition, and investigator accountability;
- **EU GMP Annex 13 (now Annex VI to the GMP guide for IMPs)** and **Commission Delegated
  Regulation (EU) 2017/1569** — manufacture, labelling, QP certification of IMPs;
- **Regulation (EU) No 536/2014 (EU CTR) Articles 61–69** — manufacturing and import authorisation,
  QP responsibility, IMP labelling;
- **EU GDP guidelines (2013/C 343/01)** — distribution, transport, temperature control.

It is version controlled and retraining is documented on each major version, because it changes site
behaviour.

---

## 1. Regulatory foundations the manual must operationalise

The manual should never lecture. But every rule it states must trace to one of the following, and
this outline records the trace so the finished document can be audited.

### 1.1 EU GMP Annex 13 / Annex VI — *Investigational Medicinal Products*

Annex 13 is the single most load-bearing source for this manual. Its content, in the order the
manual will need it:

- **Product specification file (PSF).** Annex 13 requires a reference file containing, or referring
  to, everything needed to draft the batch-specific written instructions: specifications and
  analytical methods for starting materials, packaging, DP; manufacturing and packaging methods;
  in-process testing; the approved label text; randomisation codes; the emergency code-break
  arrangements; the shipping list. The PSF is the object the QP certifies *against*. The manual
  should name it, because it is the answer to "how does the sponsor know what the label is supposed
  to say."
- **Order → shipping → recall as three distinct documented flows.** Annex 13 explicitly separates
  the *order* (the request for supply), the *shipping* (dispatch to the investigator, contingent on
  QP certification and on regulatory/ethics clearance for that site), and the *recall*. This
  three-flow structure is why the manual has separate sections for IRT resupply, shipping and
  cold chain, and recall — they are not the same lifecycle.
- **Labelling (Annex 13 §26).** The mandatory particulars, reproduced in the manual almost verbatim
  because they are what the site sees:
  1. name/address/telephone of sponsor, CRO, or investigator (the "main contact for information on
     the product, clinical trial and emergency unblinding");
  2. pharmaceutical dosage form, route of administration, quantity of dosage units, and — in open
     trials — the name/identifier and strength;
  3. batch and/or code number to identify the contents and packaging operation;
  4. a trial reference code allowing identification of trial, site, investigator and sponsor if not
     given elsewhere;
  5. the trial subject identification number/treatment number and, where relevant, the visit number;
  6. name of the investigator (if not in 1 or 4);
  7. directions for use;
  8. **"For clinical trial use only"** or similar wording;
  9. storage conditions;
  10. period of use (use-by/expiry/re-test date), month and year, in a manner that avoids ambiguity;
  11. **"Keep out of reach of children"** except where the product is for use in trials where the
      product is not taken home.
- **Annex 13 §30–33 — expiry extension in the field.** Annex 13 explicitly contemplates extending
  shelf life and permits over-labelling at the investigator site, provided it is done by
  appropriately trained staff in accordance with sponsor SOPs and, if required, under contract with
  a manufacturer/importer; the operation must be verified by a second person or by validated
  process, and documented. *This is why the manual can ask Site 1047's pharmacist to apply an expiry
  extension label — but only under a written, batch-specific authorisation.* This is a genuinely
  non-obvious point and the manual must make it explicitly.
- **Annex 13 §36–43 — complaints, recalls and returns.** Recalls of IMPs are the sponsor's
  responsibility in liaison with the manufacturer; the procedure must allow reconciliation between
  quantities delivered and recovered; returned product is stored in a segregated, controlled area
  and destroyed only on written sponsor authorisation, with records retained.
- **Blinding at packaging.** Annex 13 addresses blinding operations, the loss of traceability that
  blinding creates, and the requirement for a system permitting rapid identification of product in
  an emergency.

### 1.2 Commission Delegated Regulation (EU) 2017/1569 and Directive 2003/94/EC — QP certification

Directive 2003/94/EC laid down GMP principles for medicinal products *and* IMPs; for IMPs it has
been superseded by **Delegated Regulation (EU) 2017/1569**, which supplements the EU CTR. What the
manual needs from it:

- Manufacture or import of an IMP into the EU requires a **manufacturing and import authorisation
  (MIA(IMP))** under **EU CTR Article 61**.
- The authorisation holder must have permanently at its disposal at least one **Qualified Person
  (QP)**, whose qualifications are set by Directive 2001/83/EC Article 49.
- **EU CTR Article 62** places on the QP the duty to ensure that each batch has been manufactured
  and checked in compliance with GMP and the PSF, and — for product manufactured in a third country
  — that it has been subject to equivalent standards. The QP then **certifies** the batch in a
  register or equivalent document.
- **Certification is not release.** This distinction is the single most useful thing the manual can
  teach a site. QP certification is a GMP act attesting batch compliance. *Release for use in a
  given country/site* is a separate, sponsor-controlled regulatory act that additionally requires:
  the trial to be authorised in that country, the site to be approved, the ethics opinion to be in
  place, import licences and any customs/controlled-substance permits to be current, and the site to
  be "green-lit" in IRT. The manual should show this as two gates in the flow diagram.
- **No EU site may receive product that has not been QP-certified.** Not "should not" — may not. The
  practical consequence for a 21-country study is that the EU-destined supply must physically route
  through an EU MIA(IMP) site (here: Breda, NL) even when the product was made in the US.

### 1.3 21 CFR 312.57, 312.59, 312.61, 312.62 — the US frame

- **§312.57(a)** — sponsor must maintain adequate records showing the receipt, shipment, or other
  disposition of the investigational drug, including the name of the investigator, shipment dates,
  quantity, and batch or code marks.
- **§312.57(c)** — records retained for **2 years after a marketing application is approved**, or,
  if no application is filed or it is not approved, **2 years after shipment and delivery of the
  drug for investigational use is discontinued and FDA has been notified.**
- **§312.59** — **Disposition of unused supply.** The sponsor shall assure the return of all unused
  supplies from each individual investigator whose participation is discontinued or terminated. The
  sponsor may authorise alternative disposition provided it does not expose humans to risk. The
  sponsor shall maintain **written records of any disposition**. *This section is the legal basis
  for the written destruction authorisation the manual reproduces as an appendix.*
- **§312.61** — the investigator's mirror obligation: return unused supply, or otherwise dispose of
  it as provided in §312.59.
- **§312.62(a)** — investigator must maintain adequate records of the **disposition of the drug**,
  including dates, quantity, and use by subjects. If the study is terminated/suspended/completed,
  the investigator returns unused supplies or otherwise disposes of them per §312.59.
- **§312.62(c)** — investigator record retention, same 2-year clocks.
- **§312.6** — labelling of an investigational new drug: the immediate package must bear a label with
  the statement **"Caution: New Drug — Limited by Federal (or United States) law to investigational
  use."** For a 21-country study using a global booklet label, the manual must explain how the US
  caution statement coexists with the Annex 13 particulars on a single label design.

### 1.4 ICH E6(R3) §4.6 — sponsor responsibilities for investigational product

E6(R3) restates and modernises the E6(R2) §5.13/5.14 content. The obligations the manual implements:

- The sponsor is responsible for supplying the investigator/institution with the IP, and must not
  supply it until all required documentation (regulatory authorisation, ethics approval) is
  obtained.
- The sponsor must ensure written procedures covering **storage, handling, receipt, dispensing,
  retrieval of unused product from participants, and return/alternative disposition**, and that
  these are followed.
- The sponsor must maintain **records documenting shipment, receipt, disposition, return and
  destruction**.
- The sponsor must maintain a **system for retrieving IPs and documenting this retrieval** (e.g.,
  deficient product recall, reclaim after study completion, expired product reclaim).
- The sponsor must maintain a system for the **disposition of unused IPs** and for documentation of
  this disposition.
- The sponsor must take steps to ensure the IP is **stable over the period of use**, and maintain
  sufficient quantities of the IP used in the trials to reconfirm specifications should this become
  necessary (**retention samples**).
- E6(R3) adds explicit emphasis on **risk-proportionate** quality management and on **data
  integrity** in the systems that carry these records — which for supply means the IRT.

### 1.5 EU GDP (2013/C 343/01) and cold-chain distribution

GDP formally applies to authorised medicinal products, not IMPs; IMP distribution is governed by
GMP Annex 13 and the CTR. But sponsors and depot operators apply GDP as the operating standard
because it is the only coherent framework for warehousing and transport. What the manual takes from
it:

- **Chapter 3 (Premises and equipment)** — temperature mapping of storage areas under
  representative conditions, before use and after any significant change; placement of monitoring
  probes at mapped worst-case locations, not convenient ones.
- **Chapter 5 (Operations)** — qualification of suppliers and customers; the principle that product
  moves only between authorised parties.
- **Chapter 9 (Transportation)** — the required temperature must be maintained *during* transport;
  validated shipping containers and/or temperature-controlled vehicles; **temperature monitoring
  devices in shipments**; the requirement to investigate and document deviations.
- **Mean kinetic temperature (MKT)** as the metric for evaluating cumulative thermal history, and
  the reason a simple "was it ever above 8 °C" test is scientifically inadequate.

### 1.6 IATA DGR / ADR / IMDG — transport classification

The manual must state, plainly, what this shipment *is* for transport purposes, because the site's
IATA training (RESEARCH_SITE.md notes all shipping personnel are certified for Category B / UN3373)
creates a false expectation that IP shipments are dangerous goods.

- Rocatinlimab drug product in a PFS is **not** a dangerous good. It is a non-hazardous
  pharmaceutical.
- What *can* make the shipment regulated is the **refrigerant**: dry ice is **UN1845, Class 9** and
  is subject to IATA DGR. This study's shippers use **phase-change material (PCM) at +5 °C**, not
  dry ice, precisely to keep shipments out of DG scope and to avoid the freezing risk that dry ice
  creates for a protein product.
- **Lithium batteries** in electronic data loggers fall under IATA **Section II / UN3091 (lithium
  metal cells contained in equipment)**; loggers used here are within the exempt limits and the
  outer carton bears the appropriate mark where required.
- Road movements in the EU are subject to **ADR**; the same logic applies.
- The manual should also cover **import licences, customs clearance, and country-specific
  requirements** for the 21 countries, since a customs hold is the most common cause of a lane
  failure and the site experiences it as "my shipment is late."

### 1.7 Stability science: ICH Q1A(R2), Q5C, and the excursion budget

The 30-day cumulative ≤25 °C allowance in STUDY_FACTS §4 is not folklore — it is a **stability
claim** derived from a designed study. The manual should explain (briefly, correctly):

- **ICH Q5C** governs stability testing of biotechnological/biological products: real-time,
  real-condition data at the recommended storage condition are the primary basis for shelf life;
  accelerated and stress data support excursion assessment but do not extend shelf life on their
  own.
- The **excursion allowance** derives from a dedicated temperature-cycling / short-term-storage
  study at 25 °C, monitoring the attributes that fail first for an IgG1 mAb — aggregation
  (SE-HPLC/HMW species), charge variants (iCIEF), potency (cell-based OX40 binding/functional
  assay), sub-visible particulates, and container-closure integrity.
- It is **cumulative and non-resetting**. A kit that has spent 6 days at 22 °C has 24 days left,
  forever. This is why the sponsor must track excursion history at kit level and why "it was only
  out for a few hours" is not a reason to skip the report.
- **Freezing is categorically different.** There is no freeze budget. A single documented freeze
  event destroys the product because ice-crystal formation at the interface drives irreversible
  aggregation. The manual states this as an absolute.

### 1.8 21 CFR Part 11 / EU GMP Annex 11 — the IRT as a regulated system

The IRT is a GxP computerised system holding the randomisation code, the kit-to-treatment map, the
inventory, and the code-break audit trail. Annex 11 / Part 11 obligations the manual should
acknowledge: validated system, unique named user accounts with role-based privileges, no shared
logins, secure computer-generated time-stamped audit trails, and a documented business continuity
procedure (the "IRT is down" fallback). Site-facing consequence: **the site's IRT account is the
site's signature.**

---

## 2. The six concepts that make this a supply manual and not a pharmacy manual

These are the ideas the finished manual exists to transmit. Each gets a named section.

### 2.1 QP certification and release are two different acts

Covered above (§1.2). Design note: render it as a **two-gate diagram**. Gate 1 = QP certifies the
batch (GMP). Gate 2 = sponsor releases to a country/site (regulatory + operational). Product sitting
between the gates is physically in the depot, visible in the depot's WMS, and *invisible to IRT*.
The most common site-facing symptom of a Gate-2 problem is "IRT says the depot has zero available
inventory" while the depot is full — because unreleased stock is not available stock.

### 2.2 The packaging and labelling supply chain

Bulk drug substance and finished drug product are commodity-like; **the kit is the study-specific
object**, and it is created at packaging. The manual must walk the chain:

DS → DP fill-finish into PFS → bulk unlabelled PFS in quarantine → primary label application →
carton assembly (2 PFS per carton) → booklet label application → kit numbering → blinded bulk →
QP certification → country release → depot allocation.

The **critical insight for a site audience**: the kit number is applied at packaging, and the
mapping from kit number to treatment is generated at the same moment, by a system the packaging
operators cannot see the output of. That mapping is the blind. It is uploaded to IRT and to the
sponsor's secure code repository, and nowhere else.

### 2.3 Comparator sourcing and blinding at the packaging stage

This study uses a **matching placebo**, not an active comparator, which simplifies the problem
enormously — but the manual should explain the general principle because it is what makes the
placebo credible:

- The placebo is manufactured to the same formulation minus the antibody: same buffer, same
  surfactant, same excipients, same fill volume, same syringe barrel, plunger, needle shield, and
  the same viscosity band, so that injection force and injection duration are indistinguishable.
- Both are packaged in **identical cartons with identical label text**. The only difference between
  an active and a placebo kit is the kit number, and the kit number is uninformative — kit numbers
  are drawn from a single interleaved sequence, not blocked by treatment.
- Where a study *does* use a marketed comparator, the analogous operations are over-encapsulation
  or de-labelling and re-labelling, which destroy the comparator's original identity and therefore
  require a separate stability justification. The manual should mention this in one paragraph to
  explain why an "identical placebo" design is the low-risk option.
- **Blinded packaging operations**: line clearance between active and placebo runs, no simultaneous
  running of the two products, reconciliation of components, and a QC over-check performed by
  personnel who are themselves blinded to which run is which where possible.

### 2.4 A depot is not a site, and a site is not a warehouse

The distinction the manual must draw:

| | **Depot** | **Site** |
|---|---|---|
| Legal basis | Wholesale/GDP authorisation; in the EU, receipt of certified IMP under the sponsor's MIA(IMP) chain | Clinical trial authorisation + ethics approval for that site |
| Holds | Country-released, unassigned bulk inventory, hundreds to thousands of kits | A working stock, typically 6–20 kits |
| Inventory model | Managed to a country forecast | Managed to a trigger/resupply pair |
| Reconciliation | Continuous cycle counting + full annual | Per-participant kit-level accountability |
| Can it ship to another site? | Yes, on IRT instruction | **No.** Site-to-site transfer is prohibited without written sponsor authorisation |

Sites routinely propose site-to-site transfers to help a struggling neighbour. The manual has to
close that door explicitly and say why: chain of custody, no validated shipper, no lane
qualification, no import authority, and an IRT record that becomes unreconcilable.

### 2.5 IRT-driven supply forecasting

The section a site never sees and should. Concepts:

- **Initial site stock** — a fixed allocation released on site green-light, sized to cover the first
  N randomisations plus a buffer, *not* sized to the site's enrollment ambitions.
- **Trigger level** — the on-hand available quantity at or below which IRT generates a resupply
  order. Expressed per medication type, not in total.
- **Resupply level** — the quantity IRT tops the site back up to. The gap between trigger and
  resupply is the order size; it is set so that the site orders infrequently enough to avoid
  shipping cost and excursion risk, but often enough that the site never sits on more than ~4–6
  weeks of stock (expiry management).
- **Predictive resupply** — the forecast layer. IRT knows every randomised participant's next
  scheduled dosing visit (Day 1 → W2 → W4 → W8 → W12 → W16 → W20; 7 doses total), and it knows the
  site's recent randomisation rate. Projected demand over a forward window = *scheduled dosing
  visits falling in the window* + *expected new randomisations × 1 kit* + buffer. This is why a site
  that suddenly randomises three participants in a week gets a shipment it did not request.
- **Buffer stock** — the safety margin against variability in both enrollment and visit timing
  (visits move within ±3 days; participants no-show and re-book).
- **Assigned vs unassigned inventory** — unassigned kits are fungible within their (hidden) type;
  assigned kits are committed to a participant/visit and removed from the available pool. Only
  unassigned inventory counts toward the trigger.
- **The 3:1 ratio without unblinding anyone.** IRT holds inventory in two invisible buckets. It must
  keep the site able to serve the next randomisation *whatever* the randomisation list says, so it
  cannot simply ship 3:1. It ships to a per-type coverage target, which means the placebo bucket
  carries proportionally *more* buffer than the active bucket (small numbers, higher relative
  variance). A site that could see per-type quantities could infer treatment; therefore IRT displays
  only a **single aggregate stock count** to the site. The manual should say this out loud — it
  explains why the site's IRT screen never itemises anything.
- **Automatic re-order after dispensing** — the dispensing transaction is the event that decrements
  stock and re-evaluates the trigger. This is the operational reason the manual insists that the
  IRT transaction be completed *at the visit*, not batched at end of day or end of week: a site that
  batches its transactions batches its own resupply and will eventually run out.

### 2.6 An unblinded supply chain coexisting with a blinded clinical team

The firewall. Roles that **are** unblinded by necessity: the randomisation statistician who
generates the list; the packaging operations that apply kit numbers; the IRT technical team holding
the code; the Meridian Clinical Supply Chain analysts who see per-type inventory; the depot systems
(which see type-coded kits without knowing the semantics); and the sponsor's unblinded
pharmacovigilance staff who action SUSAR unblinding. Roles that are **not**: everyone at the site,
the CRA, the Clinical Trial Manager, the medical monitor, the sponsor clinical team, and the site's
own pharmacist (STUDY_FACTS §4 is explicit — **no unblinded pharmacist is required at the site**).

The manual must describe the mechanisms, not just assert the firewall: separate IRT role profiles
with distinct data views, a supply team that communicates with sites only through templated messages
that carry no type information, per-type quantities never appearing in any site-facing report or
email, and an immutable IRT audit trail on every code-break with automatic notification to sponsor
pharmacovigilance and the CTM (who learn *that* a break occurred, not *what* it revealed).

---

## 3. Section-by-section design analysis

The manual's table of contents, with the rationale and the failure mode each section prevents.

### §1 Cover and document control

Version 3.0, 20-NOV-2023. Must carry: protocol number, NCT and EU CT numbers, sponsor, document
owner function, effective date, superseded version, and a confidentiality statement. Sits one week
ahead of Protocol Amendment 3 (29-NOV-2023) — deliberate; supply documents lead protocol amendments
because supply changes have lead times.

**Version history table.** Not decoration. It is how a CRA at a monitoring visit determines whether
the version in the ISF is current and whether retraining is documented. Each row states what changed
and why, so an auditor can reconstruct why a 2023 excursion was handled differently from a 2022 one.

### §2 Purpose, scope, and the boundary against the Pharmacy Manual

An explicit table: *this manual covers X; the Pharmacy Manual covers Y; in case of conflict, the
protocol governs, then the Pharmacy Manual for site-side operations, then this manual.* Without this
statement, two documents both appear to instruct on excursion handling and the site follows whichever
it opened first. Name Cascade SOP-007 and SOP-009 as the site's own layer.

### §3 Contacts and escalation

Four organisations, each with a specific competence, and sites route to the wrong one by default.
Meridian Clinical Supply Chain (supply, orders, forecasts). Meridian Clinical Supply Quality (excursions,
dispositions, complaints, recalls). GlobalRx Logistics (shipments in transit, delivery problems,
returns pickup). Axion IRT (system transactions, kit status, unblinding). Plus sponsor GCP QA and
the CRA. Failure mode prevented: a 3-hour delay while an excursion report bounces between the CRA
and the courier.

### §4 Product description and the supply-relevant facts

Deliberately thin — the protocol and IB own the science. What belongs here: presentation (150 mg/
1.0 mL PFS), kit configuration (carton of 2 PFS = one 300 mg dose), storage conditions, the
excursion budget, shelf life, and the fact that placebo is visually identical. Everything a supply
decision depends on and nothing else.

### §5 Supply chain overview and flow diagram

The centrepiece. An ASCII/markdown diagram showing: DS manufacture (Emeryville) → DP fill-finish
(Juncos, PR) → blinded clinical packaging and labelling → **QP certification (Breda MIA(IMP))** →
**country release** → regional depots (Memphis / Breda / Singapore) + in-country depots → GlobalRx
courier → site. Name the depot serving Site 1047 explicitly and early: **Memphis, TN**.

Two gates must be visually distinct from the boxes. The diagram is the thing a coordinator will
actually remember.

### §6 Manufacturing, packaging, and blinding

Per §2.2 and §2.3 above. Include the randomisation-to-kit-number linkage and who holds the code.
Include the fact that the **label carries the packaging batch number, not the drug product lot
number**, because DP lot numbers differ between active and placebo and would unblind on sight. This
is a small, true, satisfying detail that makes the rest of the document credible.

### §7 Labelling

- The Annex 13 §26 particulars, mapped to what actually appears on this study's label.
- The **multi-language booklet label** for 21 countries: a multi-page label affixed at one edge, all
  languages, identical content, opened like a book; why one global design is used (single artwork,
  single approval cycle, single change-control event) and what it costs (bulk, and a fold that can
  obscure the tear-off if applied wrong).
- The **tear-off / detachable portion**: what is on it, that it is designed to be affixed to the
  site accountability record, and that the Pharmacy Manual governs how it is used at the bench.
- **Expiry extension in the field**: the mechanism (Annex 13 §30–33), the batch-specific written
  relabelling authorisation, the expiry-extension notice, the physical over-label, the second-person
  verification, the IRT update by the sponsor, and the site's confirmation. Emphasise the two
  absolutes: **the site never extends an expiry on its own judgement**, and **the IRT record and the
  physical label must agree before the next dispensing**.

### §8 QP release and certification

Per §1.2. Include the release documentation trail: batch manufacturing record → QC certificate of
analysis → QP certification statement in the register → country-specific release memo → shipment
authorisation in IRT. A site never sees these; the point is that they exist and that "the depot has
it but IRT won't let me order it" has a lawful cause.

### §9 Shipping and cold chain

- Validated shipper configurations (2 sizes), payload limits, PCM conditioning, packout diagram in
  words.
- The **96-hour and 120-hour qualified lanes** and what "qualified" means: a lane is a defined
  origin–destination–carrier–service-level combination, tested against seasonal ambient profiles
  (ISTA 7E summer/winter), with documented performance margin. The 96 h configuration is used on
  domestic and short international lanes; 120 h on long-haul and lanes with customs risk.
- **The electronic temperature data logger.** One per shipper, started by the depot at packout,
  travelling *inside* with the payload; alarm thresholds; the site's obligations (stop it, download
  it, do not discard it, do not put product in the refrigerator before checking it) — with the
  actual bench sequence deferred to the Pharmacy Manual. State explicitly that the logger, not the
  shipper's exterior, is the record.
- **Customs, import licences, and the 21 countries.** Which countries require an import licence per
  shipment, which require pre-registration of the site, and the effect of a customs hold on lane
  performance (this is why some lanes are 120 h).
- **Lane qualification and requalification** cadence, and what happens when a lane fails.

### §10 The IRT supply algorithm

Per §2.5. This is the section the assignment specifically wants written for an audience that never
gets to read it, so it should be the most generous section in the document — parameters given as
actual numbers for Site 1047, the arithmetic shown once, and the 3:1 problem explained honestly.

### §11 Depot operations

Receipt (against the QP-certified batch and the shipping list), storage (mapped 2–8 °C rooms,
continuous monitoring, back-up power, alarm escalation), pick/pack (IRT-driven, kit-number
verified, double-checked), returns handling (segregated quarantine area, no restocking of
site-returned product), and **inventory reconciliation cadence** (daily automated IRT-vs-WMS
reconciliation, monthly cycle count, annual full physical, and a study-level reconciliation at
close-out).

Include the rule that returned product is **never** returned to saleable/usable stock. Sites assume
unopened kits go back in the pool. They do not — chain of custody is broken.

### §12 Temperature excursion management — the sponsor side

The section the site cares about most and understands least. Structure:

1. **What the site does** — one sentence and a pointer to Pharmacy Manual and SOP-009. Quarantine,
   do not discard, report within 24 h.
2. **Intake and triage.** IRT excursion transaction auto-quarantines the affected kits (so no one can
   dispense them by accident) and opens a case. Clinical Supply Quality triages within 1 business
   day for completeness: logger file, kit numbers, duration, min/max, and what the product was doing
   at the time.
3. **Stability assessment.** Performed by Meridian Product Quality / stability sciences — *not* by the
   CRA, not by the supply chain, not by the depot. Assessed against the kit's **cumulative excursion
   budget** (≤30 days at ≤25 °C), the MKT of the event, and the product's stability dataset.
4. **Disposition categories** — **Release for use / Quarantine pending further data / Destroy** —
   defined precisely, with what each means for the kits and for IRT status.
5. **Target turnaround: 3 business days** from receipt of a complete data package; 24 hours on an
   urgent flag where a dosing visit is at risk. State clearly that the clock starts when the package
   is *complete*, which is why incomplete reports are the site's own worst enemy.
6. **The written disposition notice** the site receives — reproduced in an appendix — and the rule
   that IRT status, not the email, is the operative record.
7. **Cumulative excursion tracking** across the product's life: depot-side and site-side events are
   both debited from the same kit-level budget, which is why a kit that has already had a shipping
   excursion may be dispositioned "destroy" for a site event that would otherwise have been trivial.

### §13 Quarantine

Triggers (excursion, damage, expiry, complaint, recall, unknown provenance, IRT/physical mismatch).
The distinction between **physical quarantine** (segregated, labelled, locked, still in 2–8 °C
unless instructed otherwise — quarantine is not permission to let it warm up) and **IRT quarantine**
(status change that makes the kit undispensable and invisible to allocation). Both are required;
either alone is a finding. Return to usable status happens **only** by sponsor action in IRT, never
by the site.

### §14 Product complaints and quality defects

Definitions with examples the site will actually encounter: visible particulates, discolouration or
turbidity, cracked or leaking syringe, bent/missing needle, damaged carton, illegible or missing
label, missing components, plunger already depressed, activated needle guard, kit number mismatch
against IRT. Reporting route and timeline (1 business day; **24 hours if the product was
administered** or if an AE is associated). Sample return for investigation, including the awkward
case where the syringe has been used and must be returned as a biohazard-controlled item. The
**pharmacovigilance interface**: a complaint accompanied by an AE generates *two* reports on two
clocks — the safety report per the Safety Reporting Manual, and the quality complaint — and neither
substitutes for the other. Sites routinely file one and think they are done.

### §15 Recall

Classes (FDA 21 CFR 7.3 Class I/II/III; EU rapid-alert Class 1/2/3), sponsor-initiated vs
regulator-initiated, and the **notification cascade** with named hops and a timeline. Required site
actions: quarantine on receipt of notice, kit-level identification through IRT, physical segregation,
response confirmation within a stated window, and reconciliation of every affected kit including
those already administered.

**Participants who already received recalled lots** — this is the human part of the section and
must be written with care: the sponsor performs an exposure assessment, the medical monitor decides
whether participant notification is warranted, the IRB is notified where required, and the
investigator retains the clinical decision about that participant's continued dosing. The manual
should state the default: participants are not automatically withdrawn, and no participant is told
anything before the sponsor and medical monitor have agreed the message.

### §16 Returns, reconciliation, and destruction authorisation

The order of operations is the whole content of this section, and it is the thing sites get wrong:

**reconcile → CRA source verification → sponsor written authorisation → destroy → certificate → file**

- What must reconcile: shipped = received + dispensed + returned + destroyed + on hand, at kit level,
  with no unexplained variance.
- **The written destruction authorisation** — reproduced as an appendix, batch/kit-enumerated,
  signed by Meridian Clinical Supply and countersigned by the CRA, valid for a defined period.
- On-site destruction vs return to depot: the criteria (site has a documented, validated destruction
  process and written approval; otherwise return). Note the specific case of **used/partially used
  syringes**, which are sharps and are destroyed at site per local law regardless.
- The **destruction certificate**: what it must record and where it is filed.
- **Retention of records** vs retention of product — the records outlive the product by years
  (§312.57(c), §312.62(c)).
- **What may never be destroyed before final reconciliation**: anything with an open excursion case,
  an open complaint, an open deviation, a pending recall reconciliation, or a kit whose IRT status
  and physical status disagree.

### §17 Blinding and code-break integrity across the supply chain

Per §2.6. Include a role-by-role unblinded/blinded table and the audit trail for a code break: who
can initiate, what IRT records, who is notified, that the site does not tell the CRA the result, and
that the code-break record is an essential document.

### §18 End of study

Final dispensing cut-off, final site inventory reconciliation, final returns pickup scheduling,
close-out of the site's IRT inventory to zero, the archival package contents, and the retention
clock. Also: what happens to the site's copy of this manual (retained, superseded versions included).

### Appendices

| App. | Content | Why it is an appendix and not body text |
|---|---|---|
| A | Sample kit label, rendered as a labelled box | Sites recognise the object faster than the description |
| B | Sample expiry-extension notice | Must be recognisable on arrival; it looks like junk mail otherwise |
| C | Sample destruction authorisation | The §312.59 artefact; sites must know not to act without it |
| D | Temperature excursion report / disposition form | Shows the site exactly what data will be demanded, before the excursion happens |
| E | Depot contact list | The 21-country picture, so a site understands why its neighbour's timelines differ |
| F | Escalation matrix | One page, by symptom, with a target response time |

---

## 4. What this manual deliberately does **not** contain

Recorded here so the finished document can be checked against it. All of the following belong to the
**Pharmacy Manual**:

- Bench-level receipt inspection steps at the site (open the shipper, check the logger, count kits).
- The site refrigerator: qualification, TempTrak configuration, probe placement, daily log review,
  alarm response in the first hour, backup-power procedures.
- The dispensing double-check, the two-person verification, and the IRT dispensing screen keystrokes.
- Preparation: 30-minute room-temperature equilibration, visual inspection before injection.
- Injection technique, site rotation, the two-injection rule, post-dose observation.
- The site accountability log: its columns, its signatures, its filing.
- The site's own first-hour excursion response and the SOP-009 checklist.

Where these are touched, the manual writes one sentence and a cross-reference. Nothing more.

---

## 5. Register, voice, and length

- **Register:** sponsor-corporate, declarative, mandatory verbs ("must", "shall"). Not chatty. No
  second-person exhortation except in the site-action boxes, where "you" is appropriate and useful.
- **Every requirement gets an owner and a clock.** "Report to the sponsor" is useless; "report to
  Meridian Clinical Supply Quality within 24 hours of discovery, via the IRT Temperature Excursion
  transaction" is a procedure.
- **Numbers are stated once, authoritatively**, and repeated in the appendices only.
- **Target 5,000–6,000 words.** The IRT algorithm and excursion sections should be the longest; the
  product description the shortest.
- Dates `DD-MMM-YYYY`; temperature as `2–8 °C` with the en dash; kit numbers 6 digits; Site 1047
  throughout; 555 phone numbers.

---

## 6. Invented parameters that must be held stable across the three files

The ClinicalTrials.gov record contains **none** of this. Every value below is fabricated and must be
logged in the assumptions fragment, and must match between the manual and the appendices.

| Item | Value fixed for this document set |
|---|---|
| DS manufacture | Meridian Emeryville, CA |
| DP fill-finish, PFS assembly | Meridian Manufacturing Limited, Juncos, Puerto Rico |
| Blinded clinical packaging (global) | Meridian Clinical Supply Operations, Juncos, PR |
| EU secondary packaging + QP certification | Meridian Europe B.V., Breda, Netherlands; MIA(IMP) NL/MIA-IMP/2019/0087 |
| Named QP | Marieke van der Zanden, PharmD (EU QP) |
| Regional depots | GRX-MEM-01 Memphis TN · GRX-BRE-01 Breda NL · GRX-SIN-01 Singapore |
| Depot for Site 1047 | **GRX-MEM-01, Memphis, TN** |
| In-country depots | São Paulo, Osaka, Mexico City, Incheon, Istanbul, Johannesburg, Sydney |
| Shipper | GlobalRx ChillGuard **CG-8** (96 h) and **CG-24** (120 h), +5 °C PCM |
| Logger | ColdTrace **ST-4** single-use electronic USB logger, 5-min sampling |
| Lane for Site 1047 | **NA-07**, Memphis → Portland OR, 96 h configuration, 24–36 h typical transit |
| Packaging batch (current) | PKG-2309-04, labelled expiry 31-JAN-2025 |
| Example kit numbers | 318472, 318473, 318474 |
| Shelf life | 36 months at 2–8 °C |
| IRT build | Axion IRT v6.4, study build 20210143-IRT-v6.4 |
| Site 1047 IRT parameters | initial 10 kits; trigger 6; resupply 14; buffer 4; 28-day forecast window |
| Excursion turnaround | 3 business days (24 h urgent) |
| Complaint reporting | 1 business day; 24 h if administered or AE-associated |
| Recall response | Class I quarantine ≤24 h, response ≤3 business days; Class II ≤3 / ≤5 |
| Form IDs | Excursion case `TE-YYYY-NNNNN` · disposition notice `CSQ-DN-NNNNN` · destruction authorisation `DA-20210143-NNNN` · complaint `PQC-YY-NNNNN` · shipment `SHP-1047-NNNN` |

---

## 7. Cross-document consistency checks before publishing

1. Dose is **300 mg = 2 × 150 mg/1.0 mL PFS**, one carton = one dose, **7 doses** (Day 1, W2, W4,
   W8, W12, W16, W20). Never a dose at Week 24.
2. Storage **2–8 °C**, original carton, protect from light, do not freeze, do not shake.
3. Excursion allowance **cumulative ≤30 days at ≤25 °C**; report within **24 h**.
4. Kit numbers **6 digits**, IRT-assigned, range 100001–999999.
5. Courier/depot vendor is **GlobalRx Logistics**; RTSM is **Axion IRT**; CRO is **Harborlight
   Clinical Research**; CRA is **Kevin Ostrander, CCRA**.
6. **No unblinded pharmacist at the site.** Do not write a procedure that requires one.
7. Site 1047 = Cascade Dermatology & Clinical Research, LLC, Portland OR; pharmacist **Wen-Li Chao,
   PharmD**; backup **Priya Raghunathan**; PI **Miriam A. Okonkwo, MD**.
8. Allocation **3:1**; 151 centres, **21 countries**; 726 randomised.
9. Randomisation numbers are 6-digit and **distinct** from kit numbers — do not reuse 204518 as a
   kit number.
