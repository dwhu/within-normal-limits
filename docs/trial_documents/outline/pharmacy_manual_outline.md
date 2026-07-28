> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline & Section Analysis — Pharmacy Manual (Site-Side IP Handling)

**Target document:** `/Users/dave/code/icf-please/docs/trial_documents/pharmacy_manual.md`
**Study:** ROCKET-Horizon · Protocol 20210143, Amendment 3 (29-NOV-2023) · NCT05651711 · EU CT 2022-501538-44
**Manual version to be authored:** Version 4.0, dated 01-DEC-2023
**Audience:** the site investigational pharmacist and every delegated person who touches the carton —
at Site 1047, Wen-Li Chao, PharmD, RPh, plus the coordinators and the NP who administer.

---

## 1. What a Pharmacy Manual is, and what it is not

### 1.1 The one-sentence definition

A Pharmacy Manual is the sponsor's written instruction to the **investigator's pharmacy** covering
the life of the investigational product **from the moment the courier hands over the box to the
moment the last empty carton is authorised for destruction** — and nothing outside that arc.

Everything before the handover (manufacture, labelling design, release, depot storage, courier
routing, the IRT resupply algorithm) and everything that requires sponsor decision authority
(quarantine disposition, recall, destruction authorisation, excursion adjudication) belongs to the
**IP Handling Manual**. That document is written for the sponsor's clinical supply chain and for the
depot; this one is written for a pharmacist standing in front of a refrigerator at 07:15 on a
Tuesday.

The manual must state this boundary in its own §1, because the single most common failure mode of a
site pharmacy manual is that it quietly duplicates supply-chain content, drifts out of sync with the
document that actually owns it, and then two documents give a site two different instructions. The
inspection consequence of contradictory controlled documents is worse than the consequence of a
cross-reference the reader has to follow.

### 1.2 Why it is a separate document from the protocol and the Study Reference Manual

Three reasons, all worth a paragraph in the manual:

1. **Different reader, different desk.** The protocol reader is a clinician deciding whether a
   participant may be dosed. The pharmacy manual reader is a pharmacist deciding whether a *kit* may
   be released. Those are different questions with different failure modes, and interleaving them
   makes both harder to find under time pressure.
2. **Different change cadence.** Temperature-monitoring vendors change, courier contacts change, form
   revisions change. None of that should require a protocol amendment. The pharmacy manual is
   sponsor-controlled and re-issued on its own version line (here: v1.0 → v4.0 across fourteen
   months) with a training acknowledgement per re-issue.
3. **Different inspection lens.** During a BIMO inspection the test-article accountability review is
   a discrete work-stream with its own document requests. Having a single document that answers
   "show me how you were told to handle the drug" is worth a great deal on the day.

### 1.3 The precedence clause the manual must carry

**Protocol > Pharmacy Manual.** The manual may not change a dose, a regimen, a visit window, an
eligibility requirement, or a safety-reporting obligation. Where the manual appears to conflict with
Protocol 20210143 Amendment 3, the protocol governs and the site raises the apparent conflict to the
CRA as a suspected manual erratum. Where the manual appears to conflict with the IP Handling Manual
on a supply-chain topic, the IP Handling Manual governs. Where a **site SOP** is stricter than the
manual, the stricter control applies — a site is always free to be more careful, never less.

---

## 2. Regulatory grounding

The manual's instructions must be anchored rather than asserted. A pharmacist who understands *why*
a rule exists follows it correctly in the situation the rule did not anticipate. Six anchors.

### 2.1 ICH E6(R3), §2.7 — Investigational product management (investigator responsibilities)

E6(R3) places IP management inside the **investigator's** responsibilities, not the pharmacy's. This
matters more than it sounds: the pharmacist acts under delegation from the PI, and the PI remains
accountable for everything the pharmacy does. The manual must say so plainly, and the delegation log
must reflect it.

The substantive obligations E6(R3) §2.7 imposes, each of which needs a corresponding manual section:

- **Accountability at the trial site rests with the investigator/institution.** Duties may be
  assigned to a pharmacist or another appropriate individual, but the assignment must be documented
  and the assignee must be qualified and supervised. → Manual §"Personnel and delegation".
- **Records must show receipt, inventory, use by each participant, and return or alternative
  disposition** — with dates, quantities, batch/lot and code (kit) numbers, expiry dates, and the
  participant identifiers to whom product was assigned. → Manual §"Drug accountability" and the
  Appendix A form, whose column set is derived line-by-line from this sentence.
- **Records must demonstrate that participants were provided the doses specified by the protocol**,
  and must **reconcile** all IP received from the sponsor. Reconciliation, not merely recording, is
  the obligation. → the running-balance requirement.
- **Storage per the sponsor's specified conditions** and per applicable regulatory requirements. →
  Manual §"Storage" and §"Temperature monitoring".
- **Use only in accordance with the approved protocol.** → the "never before randomisation" rule.
- **The blind must be maintained**, and any unblinding must be documented and explicable. → Manual
  §"Blinding integrity" and §"Emergency unblinding".

E6(R3)'s risk-proportionality principle also licenses the manual to *not* impose controls that do
not reduce risk. That is the argument the manual should make explicitly about USP <797> (see §2.4).

### 2.2 21 CFR 312.61 — Control of the investigational drug

Short and absolute: the investigator shall administer the drug only to subjects under the
investigator's personal supervision or under the supervision of a sub-investigator responsible to
the investigator, and **shall not supply the investigational drug to any person not authorized to
receive it.**

Two site-level consequences the manual must draw out:

- The "authorised persons" set is exactly the DOA log. Not the clinic staff generally, not a covering
  physician who has not been delegated, not the participant. IP is **never** dispensed to a
  participant to take home in this study — every dose is administered at the site, which conveniently
  removes an entire class of accountability risk (and removes the "keep out of reach of children"
  labelling statement's practical relevance).
- Physical control means physical control: keypad-restricted room, badge audit trail, no propping the
  door, no leaving a kit on a counter. A kit unattended in an unlocked room is a 312.61 problem even
  if nothing happens to it.

### 2.3 21 CFR 312.62(a) and 312.59 — Records of disposition, and the return of unused supply

**312.62(a)** requires the investigator to maintain adequate records of the **disposition** of the
drug, including dates, quantity, and use by subjects; and, when the investigation is terminated,
suspended, discontinued, or completed, to return unused supplies to the sponsor or otherwise provide
for their disposition under §312.59. **312.62(c)** sets retention: two years after a marketing
application is approved for the indication, or two years after the investigation is discontinued and
FDA notified.

**312.59** is a **sponsor** obligation and the manual must say so: the *sponsor* shall assure the
return of all unused supplies from each investigator whose participation is discontinued or
terminated, and the *sponsor* may authorise alternative disposition (i.e., destruction) provided it
does not expose humans to risk, keeping written records of the disposition. This is the regulatory
reason the destruction *authorisation* lives in the IP Handling Manual and not here. The site's role
is to (a) never destroy on its own initiative, (b) execute the sponsor's written instruction, and
(c) document the execution. Writing this out prevents the extremely common site error of "we ran out
of room in the fridge so we tossed the expired kits."

The retention rule also drives a manual instruction that sites forget: **the accountability record
outlives the drug.** Destroying the kits does not license destroying the log.

### 2.4 USP <797> and <800> — and why a prefilled syringe of a biologic largely sidesteps them

This section deserves genuine explanation in the manual, because pharmacists arriving from a hospital
setting reflexively assume an ISO Class 5 hood is required, and non-pharmacists reflexively assume
nothing is.

**USP <797> (sterile compounding)** governs the preparation of *compounded sterile preparations*
(CSPs). Its controls — ISO-classified primary engineering controls, cleanroom or SEC/containment
design, garbing, media-fill competency, beyond-use dating, environmental monitoring — attach to the
act of **compounding**: reconstituting, diluting, pooling, repackaging, transferring a sterile
product from its original container into another container, or preparing from non-sterile components.

For ROCKET-Horizon, the product arrives as a **single-use, single-dose, ready-to-inject prefilled
syringe**. The complete preparation sequence is: remove carton from refrigerator → wait 30 minutes →
inspect → remove rigid needle shield → inject. There is **no** reconstitution, **no** dilution, **no**
withdrawal into a second syringe, **no** pooling of two syringes into one, **no** repackaging, and
**no** transfer between containers. Under <797> this is **administration**, not compounding. The
chapter's controls therefore do not attach, and imposing them would be a risk-disproportionate
control that E6(R3) explicitly discourages.

What *does* still apply, and must be stated so the exemption is not read as "no technique required":

- Hand hygiene and aseptic technique at the point of administration; skin antisepsis at the injection
  site; a clean, uncluttered preparation surface.
- The syringe is exposed to room air for the minimum necessary time; the rigid needle shield stays on
  until immediately before injection.
- The **hard prohibition on any manipulation** — the manual must state that transferring the contents
  of the PFS to another syringe is forbidden not only because it would create a CSP (with a
  1-hour-or-less beyond-use date and a hood requirement the site cannot meet) but because it would
  destroy dose accuracy, void the sponsor's product release, and — critically — risk breaking the
  blind by exposing the solution outside its intended presentation.
- If the sponsor ever supplied a vial presentation, this analysis would change completely. The manual
  should say so, so nobody reasons by analogy in a future study.

**USP <800> (hazardous drugs)** applies to handling of drugs appearing on the NIOSH hazardous drugs
list, and to entities that handle them. Unconjugated monoclonal antibodies are not, as a class,
NIOSH-listed: they are large proteins that are not absorbed through intact skin in meaningful
quantity, are not genotoxic, and carry no cytotoxic payload. Rocatinlimab is an unconjugated fully
human IgG1 anti-OX40 antibody. It is **not** a hazardous drug for <800> purposes; the containment
architecture of <800> (C-PEC, externally vented negative-pressure room, chemotherapy-rated PPE,
deactivation/decontamination agents, spill kits of the <800> type) is **not** required.

The manual should nonetheless (a) record that this determination was made and by whom, because
"we assumed" is not an answer to an inspector, and (b) prescribe sensible standard precautions:
gloves at the discretion of the administrator, a simple absorbent-pad-and-gloves spill response for
a broken syringe, and sharps disposal in a rigid, puncture-resistant container.

**A state-law note** belongs here too: investigational drug handling at a non-institutional site sits
under the state board of pharmacy's rules for the licensed pharmacist as well as under the IND. The
manual should direct the site to its own SOP where the two intersect rather than attempt to restate
Oregon law.

### 2.5 EU GMP Annex 13 / Annex VI of Regulation (EU) 536/2014 — labelling expectations

Labelling **design and print** are the sponsor's; the site never labels anything. But the manual must
teach the pharmacist to **read** the label and to know when a label is wrong, because a mislabelled
or unreadable kit is a stop-the-line event.

The expected content set, harmonised across Annex 13 (historic) and Annex VI (current, under
Regulation 536/2014), which the sponsor's global label carries even for US sites:

- Sponsor (and where applicable CRO/investigator) name and address
- Dosage form, route of administration, quantity of dosage units
- Batch and/or code number
- Trial reference code (protocol number) permitting identification of trial, site, investigator
- Participant identification number / treatment number where applicable
- Directions for use, or a reference to an instruction leaflet
- **"For clinical trial use only"**
- Storage conditions
- Use-by / expiry / retest date, expressed as month and year
- "Keep out of the reach of children" — except where the product is not taken home by the participant
  (the case here; every dose is site-administered)

Plus the US-specific caution statement under **21 CFR 312.6**: *"Caution: New Drug — Limited by
Federal (or United States) law to investigational use."*

Two label features earn their own manual treatment:

- **The two-part / detachable (tear-off) label portion.** Annex-style IMP labels are designed with a
  perforated portion carrying the kit number, batch number, expiry, and protocol number, intended to
  be removed and affixed to the accountability record or the source document. The manual must say
  exactly where it goes (Appendix A, the participant's accountability line) and — importantly — that
  removing it does **not** obscure any information remaining on the carton, and that the portion is
  never affixed anywhere that a blinded reader could compare kits.
- **Expiry-extension overlabelling.** When a sponsor extends shelf life, new labels are applied over
  the old expiry, by authorised persons, per an instruction that lives in the IP Handling Manual. The
  site's job in this manual is narrow: do not apply any label yourself unless instructed in writing,
  do not obscure other text, and record the relabelling event on the accountability record.

The manual should also carry a short **"what a wrong label looks like"** list: illegible print,
mismatch between carton kit number and syringe kit number, a kit number outside the 6-digit
100001–999999 convention, an expiry that has passed, a torn or missing tear-off portion on receipt,
any handwritten alteration.

### 2.6 Blinding integrity obligations

Double-blind means the participant, the investigator, and the sponsor study team are all masked.
The protocol's design (STUDY_FACTS §3) and E6(R3)'s requirement that the blind be maintained combine
into a set of pharmacy-specific duties:

- Because there is **no unblinded pharmacist** in this study, the pharmacy holds **no** treatment
  assignment information at all. There is nothing at Site 1047 to leak. The manual should make this
  reassuring point explicitly — it changes the shape of the risk from "protect the secret" to
  "do not create an inference".
- The residual risks are **inference risks**: differing carton appearance, differing lot numbers by
  arm, differing kit-number ranges by arm, a pharmacist noticing that all of one participant's kits
  come from one numeric block. The countermeasure is that the sponsor uses a **single blinded batch
  number** spanning both presentations and randomly interleaved kit numbering, and the manual should
  explain that this is deliberate so nobody "helpfully" sorts or annotates.
- The **recording** prohibition: nothing in the pharmacy record may encode an inference — no notes
  about solution appearance differences between kits, no arm labels, no colour coding, no separate
  storage bins by anything other than assignment status.
- **Inadvertent unblinding** needs a defined response: stop, do not tell anyone else, notify the PI
  and CRA within one business day, document the who/what/when/how, and assess whether the affected
  staff member must be recused from assessments (raters especially).

---

## 3. What an inspector looks for in a drug accountability record

This section exists so the manual can teach the *shape* of the expectation, not just the form fields.

### 3.1 The four questions

Almost every accountability review reduces to four questions asked in sequence:

1. **Does it reconcile?** Received − dispensed − returned − destroyed = on hand, and does "on hand"
   equal what is physically in the refrigerator right now? The inspector will count.
2. **Was every unit dispensed to a person entitled to receive it?** Cross-check kit numbers against
   the randomisation/dispensing records in IRT and against the consent and randomisation dates. A kit
   dispensed on a date before the participant's consent signature, or to a screen failure, is a
   serious finding.
3. **Was every dose the protocol dose, at a protocol visit, from an in-date kit?** Two syringes, one
   kit, at Day 1 / Weeks 2, 4, 8, 12, 16, 20 only. A kit consumed at Week 24 is a protocol violation
   visible from the log alone.
4. **Is the record contemporaneous and attributable?** Ink, initials, dates, single-line corrections
   with initial/date/reason, no obliteration, no back-filling. An audit trail in a spreadsheet that
   post-dates the event by three weeks is a data-integrity concern, not a clerical one.

### 3.2 Where the findings actually come from

The most-cited clinical-investigator observation families relevant here are failure to maintain
adequate records of drug disposition (21 CFR 312.62(a)) and failure to control the investigational
drug (312.61). In practice they crystallise out of a small set of behaviours:

- **A running balance that is not run.** Columns filled, balance column blank or arithmetically wrong.
  This is the single most common finding and it is entirely preventable.
- **Two records that disagree.** The paper log, the IRT inventory, and a coordinator's "helpful"
  spreadsheet diverge. The manual must forbid shadow accountability records outright — one record,
  reconciled to IRT, and IRT is not the accountability record.
- **Quarantined product dispensed.** A kit under excursion quarantine that was released before written
  sponsor disposition arrived. This is a critical finding because it touches participant safety.
- **Temperature records with holes.** Missing weekend readings, a logger download gap, a calibration
  certificate that expired six months ago. An out-of-calibration probe means every temperature record
  since the expiry is unverifiable, which in turn means the storage condition of every dose dispensed
  in that period is unverifiable.
- **Missing units.** A kit received and never accounted for. Even one is a finding; the inspector's
  concern is diversion, not tidiness.
- **Undocumented delegation.** The person who signed the log is not on the DOA log for that task, or
  was added after the fact.
- **Destruction without authorisation**, or destruction of the record along with the product.

### 3.3 How the manual should convert this into behaviour

By making the correct action the path of least resistance: a form whose columns force the balance to
be computed; a receipt checklist that cannot be completed without the logger status; a dispensing
double-check card that fits in a lab-coat pocket; a self-audit checklist run monthly so the CRA never
finds anything the site has not already found. The manual should say out loud that the purpose of the
self-audit is to make the monitoring visit boring.

---

## 4. Section-by-section plan for the manual

| § | Section | Purpose | Principal failure mode it prevents |
|---|---|---|---|
| 1 | Cover, version history, distribution | Change control; proves which version the site was trained on | Site working from a superseded manual |
| 2 | Purpose, scope, precedence | Sets authority order | Manual used to override protocol |
| 3 | **Scope boundary vs IP Handling Manual** | Names what this manual does *not* own | Contradictory instructions across documents |
| 4 | Contacts | Puts the phone number where the panic is | 3 a.m. alarm with nobody to call |
| 5 | Product description | Teaches what a good kit and a good solution look like | Dispensing a degraded or mislabelled unit |
| 6 | Personnel, delegation, training | Ties every action to a delegated, trained person | 312.61 / E6(R3) delegation findings |
| 7 | Receipt of shipment | 24-h acknowledgement, logger check, accept/quarantine/reject tree | Accepting a heat-damaged shipment into usable stock |
| 8 | Storage | Physical control and correct placement | Freezing at the back wall; door-shelf storage |
| 9 | Temperature monitoring | Continuous + manual, calibration, escalation, backup power | Unverifiable storage history |
| 10 | **Excursion response** | Quarantine, characterise, notify ≤24 h, await written disposition, cumulative tracking | Dispensing quarantined product; discarding evidence |
| 11 | Dispensing | IRT transaction, independent second check, never before randomisation | Wrong kit to wrong participant |
| 12 | Preparation & administration | 30-min equilibration, inspection, two injections, sites, observation | Warmed drug; injection into lesional skin; missed reaction |
| 13 | Documentation at administration | The exact source fields | Reconstructed source |
| 14 | Missed / delayed / partial doses | Windows, drops, leakage, over-warmed kits | Ad-hoc re-dosing |
| 15 | Drug accountability | The record itself, worked | The four inspector questions |
| 16 | Blinding integrity | Inference risk, recording prohibition | Unblinding by bookkeeping |
| 17 | Emergency unblinding | IRT route, PI decision, notification | Ad-hoc unblinding; late safety notification |
| 18 | Returns & destruction | Site-side execution only | Unauthorised destruction |
| 19 | Site inventory management | Par level, expiry, clinic closures | Stock-out at a dosing visit |
| 20 | Monitoring & inspection readiness | Reconciliation prep; self-audit | Surprise findings |
| A–F | Appendices | Usable forms | Improvised recordkeeping |

### 4.1 Notes on the harder sections

**§7 Receipt.** The decision tree must be genuinely trinary. Sites default to binary (accept/reject)
and then have nowhere to put a shipment that is *probably* fine but has an unresolved logger alarm.
Quarantine is the answer to "I do not yet know," and the manual must make it a first-class, cheap,
reversible action. The 24-hour acknowledgement obligation should be tied to IRT, and the manual must
be explicit that acknowledging receipt in IRT is **not** the same as releasing the shipment to
dispensable stock.

**§10 Excursion response.** Five things sites get wrong, so the procedure must be written against
them: (a) they discard the product; (b) they release it after a phone call rather than a written
disposition; (c) they record only "excursion occurred" without the profile (min, max, duration, and
the area under the excursion); (d) they forget that the ≤30-day cumulative allowance at ≤25 °C is
**cumulative across the product's whole life**, including depot and transit time the site cannot see
— which is precisely why disposition must come from the sponsor, who holds the rest of the history;
(e) they fail to distinguish a **cold** excursion (<2 °C, potential freezing, generally
non-recoverable for a protein) from a **warm** one (≤25 °C, usually recoverable within the allowance).
That last distinction is the one worth teaching hardest.

**§11 Dispensing.** The independent second check is a four-field check — participant ID, kit number,
visit, expiry — performed by a second delegated person against the IRT confirmation, not against
memory. The manual needs a defined answer for "IRT assigned kit 214823 and it is not in the fridge,"
because the wrong instinct (grab the next kit) is a randomisation-integrity breach.

**§12 Administration.** The manual owns the physical technique because the protocol only names the
sites. Load-bearing details: 30 minutes at room temperature and **no other warming method**; visual
inspection criteria with a positive description of acceptable appearance; do not shake; two injections
in **different** sites at the same visit; 5 cm periumbilical exclusion; the lesional-skin prohibition,
which is non-trivial in a moderate-to-severe AD population where finding 4 cm² of clear skin can be
genuinely hard; and the differential observation period (60 minutes at Day 1 and Week 2, 30 minutes
thereafter) tied to the anaphylaxis signal in the known safety profile.

**§14 Partial dose.** The rule must be counter-intuitive and stated as such: if part of a dose is lost
(leakage, premature withdrawal), **do not re-dose from a second kit**. Record what was administered,
report as a deviation, notify the CRA and medical monitor. Re-dosing would create an unquantified
exposure and an unaccountable kit. Sites reliably want to "fix" this, so the manual must pre-empt it.

**§15 Accountability.** The form must be unit-level (per syringe), not kit-level, because the protocol
dose is two syringes and the only way a "1 syringe administered" event is visible is if the record can
express it. Both a blank and a filled example are required; the filled example should include at least
one non-clean event (a damaged syringe, a partial dose, or a quarantine) because a worked example in
which nothing goes wrong teaches nothing.

**§20 Inspection readiness.** The self-audit checklist should be monthly, signed, and filed — and the
manual should say that the filed checklists are themselves a favourable inspection finding.

---

## 5. Form and appendix design principles

- **Every form is reproduced blank in an appendix and worked in the body.** A form seen only blank is
  filled in wrongly the first time.
- **Column order follows the order of the physical action**, not the order of the data model.
- **Every form has a version identifier and a page-of-page footer**, because a missing page 2 is
  indistinguishable from a fabricated page 2 without one.
- **Signature blocks demand initials + date on every line**, not a single sign-off at the bottom.
- **The quick-reference contact card and the dispensing double-check card are designed to be printed
  and physically posted** — on the refrigerator and in the IP room respectively. The manual should say
  where they go.

---

## 6. Scope boundary register (what this manual must NOT contain)

Owned by the **IP Handling Manual** — reference by name only:

| Topic | Why it lives there |
|---|---|
| Label design, text, translations, booklet construction | Sponsor GMP labelling function |
| Courier selection, routing, packaging qualification, shipping lanes | Supply chain |
| IRT **resupply algorithm** (trigger logic, buffer maths) | Sponsor supply strategy |
| Depot receipt, storage, and depot-level QC | Depot operations |
| **Authorisation** to quarantine-release, destroy, or return | Sponsor decision authority under 21 CFR 312.59 |
| Recall / field-safety-notice procedure | Sponsor QA |
| Excursion **adjudication** and escalation into sponsor QA/stability | Sponsor QA and stability programme |
| Expiry-extension label issue and overlabelling instruction | Sponsor GMP |

Owned by the **IRT Manual** — reference by name only: transaction screens, user provisioning,
password resets, screen-by-screen click paths.

Owned by the **Safety Reporting Manual** — reference by name only: SAE forms, reporting clocks,
causality assessment, AESI definitions.

Owned by the **Study Reference Manual** — reference by name only: visit order of operations,
assessment technique, eDiary handling.

---

## 7. Word-count and tone targets

5,000–7,000 words. Register: procedural imperative, second person for actions the reader performs,
"must" for requirements and "should" for recommendations with the distinction stated up front. No
hedging in the excursion and dispensing sections — those are checklists that must be executable while
mildly panicking.
