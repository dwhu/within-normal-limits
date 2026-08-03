> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline & Section Analysis — FDA Form 1572 Package

**Target document:** `/Users/dave/code/icf-please/docs/trial_documents/form_1572.md`
**Study:** ROCKET-Horizon · Protocol 20210143, Amendment 3 (29-NOV-2023) · NCT05651711 · IND 145,882
**Site:** 1047 — Cascade Dermatology & Clinical Research, LLC, Portland, OR
**Investigator:** Miriam A. Okonkwo, MD, FAAD
**Forms rendered:** FDA Form 1572 (OMB No. 0910-0014); FDA Form 3455 (OMB No. 0910-0396)
**Target length of the authored document:** 2,000–3,000 words including the rendered forms

---

## 0. Why this document is short and why that is dangerous

Every other document in this corpus is long. The protocol runs to hundreds of pages; the
Investigator's Brochure is a monograph; the lab manual is a procedural encyclopaedia. The 1572 is one
page.

That asymmetry is the whole point of including it. The 1572 is the shortest document in the
Investigator Site File and the one most likely to generate a Form FDA 483 observation, because:

1. It is signed **once**, early, when nobody at the site is yet sure who will actually do what.
2. It then has to stay true for two years of staff turnover, new facilities, new labs, and
   protocol amendments — and it only stays true if somebody actively maintains it.
3. Nothing in the day-to-day workflow *touches* it. A coordinator never opens the 1572. A monitor
   opens it at every visit and glances at it. The regulatory coordinator is the only person whose
   job it is to notice that it has drifted out of date.
4. Its content is trivially checkable by an inspector against another document the site also
   maintains — the delegation of authority log — and the two drift apart silently.

The authored document must therefore be *dense*: the form itself, plus the apparatus that keeps it
true. A bare rendered form would be a poor game asset. A rendered form with a revision history, a
financial disclosure companion, a maintenance checklist, and an explicit list of the five errors that
show up on this form is a game asset that a player can be wrong about in five distinct ways.

---

## 1. What the 1572 *is*

### 1.1 The regulatory hook

**21 CFR 312.53(c)** — "Selecting investigators and monitors" — requires that, before permitting an
investigator to begin participation in an investigation, the sponsor obtain from the investigator a
signed **Statement of Investigator, Form FDA 1572**. The regulation enumerates what the statement
must contain; the form is simply the FDA's prescribed vehicle for that content.

Two consequences follow immediately, and both belong in the authored document:

- **No investigator may participate in an investigation until the sponsor holds a completed, signed
  1572.** This sentence appears on the face of the form itself. It is the single most important
  operational fact about the document: a site cannot screen a participant before the 1572 is
  executed and in the sponsor's hands. Site 1047 signed 05-DEC-2022; the site was activated
  06-JAN-2023 and screened its first participant 11-JAN-2023. That sequence is correct and the
  document should make the sequence visible, because in the game a player may be asked whether an
  activity occurred before the site was authorised to perform it.
- **The commitments in Block 9 are enforceable against the investigator personally.** They are the
  regulatory basis on which FDA issues Warning Letters to individual physicians and, in the extreme,
  initiates disqualification proceedings under 21 CFR 312.70.

### 1.2 A contract with the FDA, not with the sponsor

This distinction is the conceptual spine of the document and should be stated plainly and early.

The sponsor **collects** the 1572. The sponsor **files** it with the IND. The sponsor is the party
who will be cited under 21 CFR 312.53 if it permitted an investigator to participate without one.
But the promises in Block 9 run from the investigator to the **agency**. The sponsor is a conduit,
not a counterparty.

Why it matters practically:

- **The sponsor cannot waive a Block 9 commitment.** A CRA who says "the sponsor is fine with the
  sub-I not being on the 1572" is not offering relief; the sponsor has no authority to grant it.
- **A sponsor's project-level convenience does not change the obligation.** Sponsors sometimes
  maintain a separate "sub-investigator log" for administrative ease. That log is a sponsor
  document. It does not substitute for accurate completion of Block 6.
- **The obligations survive the contract.** If the Clinical Trial Agreement is terminated, the
  investigator's Block 9 commitments regarding records retention (21 CFR 312.62) and record
  availability for inspection (21 CFR 312.68) persist.
- **The counterpart obligations are personal, not institutional.** Cascade Dermatology & Clinical
  Research, LLC signs the CTA (Gregory Tarrant, Site Director). Dr Okonkwo signs the 1572. Those are
  different signatures, different documents, and different obligations, and the authored document
  should make that contrast explicit because it is a classic source of confusion at private-practice
  sites where the same handful of people wear all the hats.

### 1.3 What the 1572 is *not*

- It is **not** a commitment to ICH E6. Signing the 1572 commits the investigator to 21 CFR Parts
  312, 50, and 56. ICH GCP compliance is imposed by the protocol and the CTA, not by this form.
- It is **not** a delegation log. It names investigators; it does not describe who does what. The
  delegation log does that, and the two documents must agree without duplicating.
- It is **not** an IRB document. The IRB does not approve, review, or receive the 1572 (Block 5
  merely identifies the IRB).
- It is **not** a financial disclosure. That is Forms 3454/3455 under 21 CFR Part 54 — related,
  frequently filed together, legally distinct. See §6.

---

## 2. Field-by-field walkthrough: the nine blocks

The authored document renders each block with its official label. This section is the analysis behind
each rendering — what the block requires, what Site 1047 puts in it, and the specific error the block
invites.

### Block 1 — Name and address of investigator

**Requires:** the individual investigator's full name and the address at which they can be reached.
One name only. The 1572 admits exactly one principal investigator; co-principal investigators do not
exist for FDA purposes.

**Site 1047:** Miriam A. Okonkwo, MD, FAAD — 4820 SW Barbur Boulevard, Suite 300, Portland, OR 97239.

**Error this block invites:**
- Naming the *practice* rather than the *person*. "Cascade Dermatology & Clinical Research, LLC" is
  not an investigator. FDA regulates individuals.
- Two names, or "Okonkwo/Feist," reflecting a site's internal sense that leadership is shared. If
  the site genuinely wants two investigators of record, that is two 1572s, two IND filings, and two
  sets of Block 9 commitments — and in practice sponsors will not accept it for a single site number.
- A mailing address that is not the address where the investigation happens. Block 1 is a contact
  address; Block 3 is the conduct address. At Site 1047 they coincide, which is common and unremarkable,
  but the *reason* they coincide should be visible rather than assumed.
- Credential drift: a form signed as "MD" when the licence is a DO, or omitted degree entirely.

### Block 2 — Education, training, and experience that qualifies the investigator as an expert in the clinical investigation of the drug for the use under investigation

**Requires:** an attachment. The form gives two checkboxes — **curriculum vitae** or **other statement
of qualifications** — and the block itself is not a free-text biography field. The overwhelming
convention is to check "curriculum vitae" and attach it.

**Site 1047:** CV attached. The substance to be summarised in the authored document: ABD board
certification (recertified 2021), Oregon licence MD-118472 active through 31-DEC-2026, MD Michigan
2006, dermatology residency OHSU 2010, clinical immunodermatology fellowship Northwestern 2011, PI on
62 dermatology trials since 2014 including 9 atopic dermatitis studies, 3 prior Meridian studies, one
prior BIMO inspection in 2019 closed **NAI**.

**The CV currency rule.** The CV itself is not governed by 21 CFR 312 in any detail — the regulation
just says the statement must contain the qualifications. The **two-year signed-and-dated** convention
is an ICH E6 essential-document expectation reinforced by every sponsor's SOP, and it is the thing
that actually gets found. A CV that is unsigned, undated, or four years old is a 483-adjacent finding
even though the underlying qualifications are impeccable.

**Errors this block invites:**
- Checking neither box, or checking a box with nothing attached.
- Attaching a CV that does not evidence expertise **in the disease under study**. A general
  dermatologist with no AD trial history who nonetheless signs the AD 1572 is qualified as a
  dermatologist and arguably not qualified as an expert "for the use under investigation."
- An expired medical licence sitting behind a current CV. The licence is a separate essential
  document; the 1572 does not have a licence field, which is precisely why the licence gets forgotten.
- CVs describing positions in the present tense that ended two years ago.

### Block 3 — Name and address of any medical school, hospital, or other research facility where the clinical investigation(s) will be conducted

**Requires:** **every** location where study-related activity takes place. This is the block whose
rule is most frequently misunderstood and the block that most rewards explicit treatment in the
authored document.

The rule, as FDA has articulated it in its Statement of Investigator FAQ guidance, is that the
investigator should list all facilities where clinical investigation activities will be performed —
including satellite offices, off-site infusion or dosing suites, storage facilities where the
investigational product is kept, and any location where study procedures are conducted or study
records are maintained. If a participant is dosed at address B while the clinic is at address A, both
addresses belong in Block 3.

**Site 1047:** everything happens at 4820 SW Barbur Boulevard, Suite 300 — but the authored document
should nonetheless *itemise* the functional locations within that address, because it demonstrates
that the site understood the rule rather than merely got lucky:

- Clinical/exam space: 6 exam rooms, 2 research-dedicated, one with standardised dermatology lighting
  for EASI/vIGA-AD.
- The private consent room.
- The investigational product storage room (keypad-controlled, Helmer iPR105 refrigerator, TempTrak
  monitoring).
- The specimen processing area (Eppendorf 5810R refrigerated centrifuge, −20 °C freezer).
- The locked records room holding the Investigator Site File.

**Errors this block invites:**
- Listing only the clinic address when the pharmacy or drug storage is at a different building. This
  is the classic finding at hospital-affiliated sites where investigational pharmacy is in a separate
  tower.
- Omitting a satellite clinic used for overflow visits. If one Week 4 visit happened at a second
  office because the main office was closed, that office needed to be on the 1572 *before* the visit.
- Adding a facility mid-study without producing a revised 1572.
- Listing the *sponsor's* or *CRO's* address. Harborlight Clinical Research and Meridian do not appear
  anywhere on this form except in Block 7's protocol identification.

### Block 4 — Name and address of any clinical laboratory facilities to be used in the study

**Requires:** all laboratory facilities generating protocol-specified data — the central laboratory,
any specialty or reference laboratory, and **the site's own in-office laboratory** if it performs any
protocol-specified testing. Local hospital laboratories used for safety testing under the protocol
belong here too.

**Site 1047:**
- **Meridian Central Laboratories (MCL)**, Indianapolis, IN — the Americas hub, performing chemistry,
  haematology, urinalysis, serology, QuantiFERON-TB Gold Plus, thyroid, serum pregnancy, PK, ADA, and
  biomarker testing.
- **Cascade Dermatology & Clinical Research, LLC in-office laboratory**, CLIA certificate of waiver
  **38D2178456**, performing the protocol-specified **urine pregnancy tests** at every dosing visit and
  at Week 24 — the one test the protocol explicitly assigns to point-of-care.

The in-office CLIA-waived lab is the interesting case and the authored document should treat it as
such. Sites routinely forget that a waived point-of-care test performed under the protocol makes the
site a laboratory facility for Block 4 purposes. Because the urine β-hCG is a *protocol-required
predose safety test whose result gates dosing*, it is unambiguously protocol-specified testing.

**Errors this block invites:**
- Omitting the in-office lab entirely.
- Listing the wrong CLIA number, or listing a CLIA number whose certificate has lapsed. A certificate
  of waiver is valid two years and must be renewed; the 1572 does not track expiry, the ISF must.
- Listing only the local Meridian hub when specimens are, in fact, routed to a different Meridian
  facility for a specific assay (in this study, all Site 1047 specimens go to Indianapolis; a study
  where ADA went to Geneva would need Geneva listed).
- Listing a lab used only for standard-of-care clinical testing outside the protocol. Over-listing is
  a lesser sin than under-listing but still creates a document the site must maintain.

### Block 5 — Name and address of the Institutional Review Board (IRB) that is responsible for review and approval of the study(ies)

**Requires:** the IRB of record — the body that grants and maintains approval for this investigator at
this site.

**Site 1047:** Keystone Independent Review Board, Overland Park, KS · IRB registration
**IRB00009812**. Cascade is a private practice with no institutional IRB; it cedes review to Keystone
under a reliance agreement dated 04-NOV-2022. Site FWA is **FWA00029341**.

**Errors this block invites:**
- Naming a local IRB the site once used for a different study.
- Failing to revise the 1572 when the sponsor moves the study from one central IRB to another —
  a change of IRB is unambiguously a triggering event.
- Confusing the FWA with the IRB registration number. FWA00029341 is the *site's* assurance;
  IRB00009812 is *Keystone's* registration. Both are real fields in the regulatory binder and only
  one belongs in Block 5.
- Listing the central IRB when a local IRB also asserts jurisdiction (not the case here — the
  reliance agreement resolves it, and the authored document should say so).

### Block 6 — Names of the sub-investigators (e.g., research fellows, residents, associates) who will be assisting the investigator in the conduct of the investigation(s)

**Requires:** the individuals who will make a **direct and significant contribution to the data**.
FDA's guidance frames it functionally: list those who perform study-related procedures that require
the exercise of **medical judgement or medical decision-making** — determining eligibility, evaluating
adverse events, assessing causality, making treatment decisions, performing the primary efficacy
assessment, prescribing.

**Who must be listed at Site 1047:**

| Person | Why listed |
|---|---|
| Daniel R. Feist, MD | Confirms eligibility, provides medical oversight, backs up the PI; DATG rater-certified |
| Tessa Nakamura, DO | Primary EASI/vIGA-AD rater — the primary efficacy assessment; DATG rater-certified |
| Alonzo Vega, FNP-C | Performs history, physical examination, adverse event assessment, concomitant medication review |

**Who must *not* be listed, and why — the block's real teaching content:**

| Person | Role | Why not listed |
|---|---|---|
| Priya Raghunathan, BSN, RN, CCRC | Lead Study Coordinator | Consent process, scheduling, source documentation, eCRF entry, IRT, IP administration, sample handling, AE *collection* — none of it requires independent medical judgement. Delegated and trained; documented on the delegation log, not on the 1572. |
| Brendan Koss, CCRP | Study Coordinator II | Same rationale. |
| Sam Oyelaran | Regulatory Coordinator | No participant-facing activity at all. |
| Wen-Li Chao, PharmD, RPh | Investigational Pharmacist | Receives, stores, accounts for, and dispenses IP under the protocol. Dispensing is not a direct and significant contribution to the *data*. |
| Marisol Duarte, MLT (ASCP) | Phlebotomist/Lab Technician | Draws and ships specimens; performs no assay generating protocol data. |

The pharmacist is the borderline case and deserves a sentence of its own in the authored document.
Sites over-list pharmacists constantly, on the theory that anyone touching the drug must be on the
form. FDA's position is that pharmacists dispensing per protocol are not sub-investigators. The
consequence of over-listing is not benign: every listed sub-investigator acquires a CV requirement, a
licence-currency requirement, a GCP-training requirement, and a financial disclosure requirement, and
the site has just created four more documents to keep current for no regulatory gain.

**A note on nurse practitioners.** Vega is listed because his delegated duties include physical
examination and **adverse event assessment**. Had he been delegated only vitals and injections, he
would not need listing. Canon explicitly withholds eligibility determination, causality assessment,
and EASI/vIGA-AD rating from him — so his listing is defensible but not automatic, and the authored
document should make the reasoning visible rather than asserting the conclusion.

**Errors this block invites:**
- **Under-listing:** an unlisted physician evaluates an AE for causality. This is the single most
  common 1572 finding and it is discovered by cross-reading the delegation log against Block 6.
- **Over-listing:** coordinators and pharmacists on the form, generating an unmaintainable
  document set.
- **Stale listing:** a sub-investigator who left the site 14 months ago still on the current 1572.
- **Order-of-operations:** a sub-investigator performing study duties on a date *before* the revised
  1572 adding them was signed. This is why the revision history table in the authored document
  carries dates and why those dates matter.

### Block 7 — Name and code number, if any, of the protocol(s) in the IND for the study(ies) to be conducted by the investigator

**Requires:** unambiguous identification of the protocol. Sponsor protocol number and the protocol
title. The IND number is not a printed field on the form but is universally recorded in or adjacent to
this block, and sponsors commonly pre-print it.

**Site 1047:** Protocol **20210143** — *A Phase 3, Randomized, 24-week, Placebo-controlled,
Double-blind Study to Assess the Efficacy, Safety and Tolerability of Rocatinlimab (MER 451)
Monotherapy in Adult Subjects With Moderate-to-severe Atopic Dermatitis (AD)* — **IND 145,882**,
Phase 3. Study acronym ROCKET-Horizon; NCT05651711.

**The amendment question, which the authored document must answer explicitly.** Protocol 20210143
went through Amendment 3 (29-NOV-2023) during this site's participation. **A protocol amendment does
not, by itself, require a revised 1572**, because the protocol's *identification* — number and title —
has not changed. The investigator's Block 9 commitment to conduct the study "in accordance with the
relevant, current protocol(s)" already reaches the amended version. What the amendment does require is
IRB approval (obtained 19-DEC-2023), re-consent per the new ICF v4.0.1, and a training record. A site
that reflexively re-signs the 1572 for every amendment is not committing a violation but is generating
noise; a site that never re-signs for anything is heading for a finding. The distinction is worth a
paragraph and a table row.

**Errors this block invites:**
- Protocol number transposed (20210134 for 20210143) — trivially made, surprisingly durable, and
  it renders the form's identification of the protocol wrong.
- Title truncated to the brief title, so that the form does not identify the study FDA thinks it
  identifies.
- Multiple protocols listed on one form where the site is running two studies under the same IND —
  permitted by the block's plural "protocol(s)" but a maintenance trap.

### Block 8 — Attach the following clinical protocol information

**Requires:** an attachment, selected by phase. The form prints both options and the investigator
indicates which applies:

- **For Phase 1 investigations**: a general outline of the planned investigation, including the
  estimated duration of the study and the maximum number of subjects that will be involved.
- **For Phase 2 or 3 investigations**: an outline of the study protocol including an approximation
  of the number of subjects to be treated with the drug and the number to be employed as controls,
  if any; the clinical uses to be investigated; characteristics of subjects by age, sex, and
  condition; the kind of clinical observations and laboratory tests to be conducted; the estimated
  duration of the study; and copies or a description of case report forms to be used.

**Site 1047:** the Phase 2/3 option applies. The authored document should render **both** option texts
(so the reader sees the choice being made) and mark the Phase 2/3 box, then satisfy the Phase 2/3
content requirement concretely from canon: ~700 planned randomised at 3:1 rocatinlimab:placebo, adults
≥18 of either sex with moderate-to-severe AD (EASI ≥16, vIGA-AD ≥3, ≥10 % BSA, Worst Pruritus NRS ≥4),
24 weeks double-blind treatment with ~40 weeks total per participant, the listed clinical and
laboratory observations, and the Veriscribe EDC v9.2 electronic case report form set.

Attaching the full protocol satisfies the block; sponsors overwhelmingly do exactly that.

**The attestation.** Block 8 is where the applicable-regulations selection lives on the form, and it
is the block most often left blank because it looks like an instruction rather than a field. A blank
Block 8 on an otherwise perfect form is a real 483 observation.

**Errors this block invites:**
- Neither box checked.
- Phase 1 box checked on a Phase 3 study (copy-forward from a previous study's template).
- The attachment referenced but absent from the ISF.

### Block 9 — Commitments

See §3. Block 9 is pre-printed text; the investigator does not fill it in, they adopt it by signature.
The error this block invites is therefore not a completion error but a **conduct** error: the site
does something inconsistent with a commitment it made, and FDA cites the commitment.

### The signature block

The form closes with **signature of investigator** and **date**, plus the warning that a wilfully
false statement is a criminal offence (18 U.S.C. § 1001) and the OMB Paperwork Reduction Act burden
statement.

**Site 1047:** Miriam A. Okonkwo, MD — signed **05-DEC-2022**; revised and re-signed **14-MAR-2023**.

---

## 3. The nine commitments of Block 9

The authored document reproduces these in full. This section is the analysis of what each one
actually obliges the site to do, and which other document in this corpus discharges it.

| # | Commitment (subject) | What it actually obliges | Discharged by |
|---|---|---|---|
| 1 | Conduct per the current protocol; changes only after notifying the sponsor, except when necessary to protect subject safety, rights, or welfare | Protocol deviations are not merely operational untidiness; each is a departure from a signed federal commitment. The safety exception is narrow and must be documented, reported, and IRB-notified. | Protocol; deviation log (SOP-018); 11 deviations logged at Site 1047, none major |
| 2 | Personally conduct or supervise the investigation | The PI must be genuinely engaged — not a name on a form. "Supervise" has teeth: presence, availability, review, and signature. The 15 % FTE commitment is the operational expression of this. | Delegation log (SOP-021); PI signature on lab reviews within 5 business days; monitoring visit reports |
| 3 | Inform patients (and controls) that the drugs are being used for investigational purposes; ensure the informed consent requirements of **21 CFR Part 50** and IRB review and approval requirements of **21 CFR Part 56** are met | The PI owns consent even when a coordinator conducts it. At Site 1047, Priya Raghunathan runs the consent conversation and the PI countersigns — the countersignature is this commitment made visible. | ICF v4.0.1; SOP-001; consent room; Keystone IRB approvals |
| 4 | Report adverse experiences to the sponsor per **21 CFR 312.64** | Serious and unexpected events flow to the sponsor on the clock. At this site, SAE intake goes to Harborlight's Global Patient Safety within the protocol timeline. | Safety Reporting Manual; SOP-012 |
| 5 | Have read and understood the Investigator's Brochure, including potential risks and side effects | A documentable act, not a state of mind. IB Edition 6.0 (15-AUG-2023) receipt and review must be evidenced, for the PI and for every sub-investigator. | IB Edition 6.0; training log |
| 6 | Ensure all associates, colleagues, and employees assisting in the study are informed of their obligations | This is the commitment that makes the delegation log and the training log regulatory documents rather than administrative ones. | SOP-021; delegation of authority log; CITI GCP certificates |
| 7 | Maintain adequate and accurate records per **21 CFR 312.62** and make them available for inspection per **21 CFR 312.68** | Source documentation, case histories, drug accountability. Also the basis on which an inspector may walk in and ask for the ISF. | SOP-004 (ALCOA+); SOP-007; SOP-027; Veriscribe eISF |
| 8 | Ensure an IRB complying with **21 CFR Part 56** conducts initial and continuing review; promptly report to the IRB all changes in the research activity and all unanticipated problems involving risk to subjects or others; make no changes without IRB approval except to eliminate apparent immediate hazards | Continuing review is the PI's obligation, not the sponsor's favour. Keystone's annual review falls due 19-DEC-2024; a lapse is a stop-enrolment event. | Keystone IRB correspondence file |
| 9 | Comply with all other requirements regarding investigator obligations and all other pertinent requirements in **21 CFR Part 312** | The catch-all. It is what allows FDA to cite 21 CFR 312.60 — "failure to conduct the study in accordance with the signed statement of investigator" — as the umbrella charge in a Warning Letter. | Everything |

The authored document should present these as the form prints them (as prose commitments) and then
supply the "what this means at Site 1047" mapping as a companion table. The mapping is what turns the
form from boilerplate into a document a player can reason about.

---

## 4. When a revised 1572 is required

The trigger list, which the authored document renders as a decision table:

| Change | New 1572? | Note |
|---|---|---|
| Change of principal investigator | **Yes** | A wholly new 1572 signed by the new PI. The outgoing PI's obligations do not transfer. |
| Addition of a sub-investigator | **Yes** | Signed and dated **before** the new sub-I performs any study duty. |
| Removal of a sub-investigator | **Yes** | Sponsors vary in insisting on it; the conservative and defensible practice is to revise. At minimum the departure date must be documented on the delegation log. |
| New facility where the investigation is conducted (Block 3) | **Yes** | Before any activity occurs at the new facility. |
| New or changed clinical laboratory (Block 4) | **Yes** | Including adding an in-office CLIA-waived test the site did not previously perform. |
| Change of IRB (Block 5) | **Yes** | |
| Change in protocol identification — new protocol number or new protocol under the same IND (Block 7) | **Yes** | |
| Protocol **amendment** without change of number or title | **No** | Documented by note to file, IRB approval, re-consent, and training. |
| Site telephone number, suite number, or minor address correction | **Generally no** | Note to file; sponsor SOP governs. |
| PI's CV updated | **No** | The CV is an attachment with its own currency rule. |

**Every revision requires a fresh signature and a fresh date.** A revised 1572 is not an annotated
copy of the old one; it is a new execution of the whole instrument. Crossing out a name and initialling
it is not a revision, it is a defaced regulatory document. The authored document should say this in
those terms — it is the kind of shortcut a busy site takes and a monitor must refuse.

**Retention:** superseded versions stay in the ISF, marked SUPERSEDED, never destroyed. At Site 1047
that is Sam Oyelaran's task under SOP-027.

---

## 5. Who signs, and who may not

**Signs:** the individual named in Block 1. Nobody else. Not a designee, not a delegate, not "per".

**May not sign:**

- A **sub-investigator**, however senior. Feist cannot sign for Okonkwo even when he is covering the
  clinic.
- The **study coordinator**. This is the case worth expanding in the authored document, because it is
  the finding with the sharpest consequence. A 1572 signed by a coordinator is a false statement
  about who has made the Block 9 commitments — and the form carries an explicit 18 U.S.C. § 1001
  warning. It calls into question the authenticity of every other investigator signature in the ISF,
  which means the inspector stops looking at the 1572 and starts looking at whether the PI's
  signatures on consent forms and lab reviews are genuine. A single forged signature converts a
  document review into a data-integrity investigation.
- The **site director** or business manager. Gregory Tarrant signs the CTA. He has no clinical
  obligations and cannot make them.
- The **sponsor or CRA**. The sponsor receives the form; it does not execute it.

**Electronic signature.** Where the sponsor uses a compliant electronic signature system, an
electronic execution meeting 21 CFR Part 11 is acceptable. A scanned image of a signature pasted into
a PDF is not an electronic signature; it is a copy. The authored document should note which route
Site 1047 used (wet-ink, scanned to the sponsor, original retained in the ISF) because the game may
turn on where the original lives.

---

## 6. The Part 54 financial disclosure relationship

### 6.1 The two forms and the distinction that matters

**21 CFR Part 54** — Financial Disclosure by Clinical Investigators — applies to **covered clinical
studies**: any study of a drug, biologic, or device submitted in a marketing application in which the
investigator or their spouse or dependent children have a disclosable financial interest, and whose
outcome could be affected by that interest. A Phase 3 pivotal efficacy study such as ROCKET-Horizon is
paradigmatically covered.

| Form | Title | Says | Signed by |
|---|---|---|---|
| **FDA 3454** | Certification: Financial Interests and Arrangements of Clinical Investigators | The applicant **certifies** that no listed investigator had a disclosable arrangement | The **applicant/sponsor's** authorised representative |
| **FDA 3455** | Disclosure: Financial Interests and Arrangements of Clinical Investigators | The applicant **discloses** the arrangements that do exist, plus steps taken to minimise bias | The **applicant/sponsor's** authorised representative |

**Certification vs disclosure** is the distinction to draw explicitly. A certification is an assertion
of absence; a disclosure is an itemisation of presence. FDA does not treat a disclosure as
disqualifying — investigators with financial interests may absolutely participate — it treats it as
information relevant to weighing the data, and the applicant is expected to describe the steps taken to
minimise bias (blinding, central adjudication, multi-centre design, independent statistical analysis).

### 6.2 The wrinkle the authored document should surface

Both forms are, strictly, **applicant-level** submissions made at the time of the marketing
application, aggregating across all investigators. What happens at a site is upstream of that: under
**21 CFR 312.53(c)(4)**, the investigator provides the sponsor with *sufficient accurate financial
information to allow the sponsor to submit complete and accurate certification or disclosure
statements*, and commits to **promptly update that information if any relevant changes occur during
the course of the investigation and for one year following completion of the study**.

In practice sponsors collect this by having each investigator complete a form in 3454/3455 format at
the site. The authored document is asked to render a **completed 3455 for Dr Okonkwo showing a negative
result**, which is a slight abuse of the form's design (a fully negative result is what the 3454
certifies), and that abuse is worth naming in a footnote rather than papering over — it is exactly the
sort of nuance that makes a simulated regulatory document feel real, and it gives the game a legitimate
"is this the right form?" question.

### 6.3 The four disclosable categories

The rendered 3455 must show all four with their thresholds:

1. **Compensation affected by outcome** — 21 CFR 54.2(a). Compensation to the investigator for
   conducting the study in which the value could be influenced by the study outcome.
2. **Significant payments of other sorts** — 21 CFR 54.2(f). Payments from the sponsor with a monetary
   value exceeding **$25,000**, *exclusive of the costs of conducting the study* — grants, equipment,
   retainers for ongoing consultation, honoraria.
3. **Proprietary interest in the tested product** — 21 CFR 54.2(b). Patent, trademark, copyright, or
   licensing agreement.
4. **Significant equity interest in the sponsor** — 21 CFR 54.2(c). Any equity interest in a publicly
   held company exceeding **$50,000** in value during the study and for one year afterwards; **any**
   equity interest in a privately held sponsor.

The threshold arithmetic is the part sites get wrong. Site 1047's per-participant payments under the
CTA are payments **for conducting the study** and are therefore outside category 2 no matter how large
they become. An unrelated $30,000 consulting retainer from Meridian would be inside it. The authored
document should include a worked line to this effect, because the natural intuition — "we were paid a
lot, so we must disclose" — is backwards.

### 6.4 The one-year tail

The obligation to update runs for **one year following completion of the study**. For ROCKET-Horizon,
last participant last visit is 27-AUG-2024, so the tail runs to approximately **27-AUG-2025**. If Dr
Okonkwo acquires Meridian equity above threshold in March 2025, she must tell the sponsor. This is the
obligation most reliably forgotten, because by then the site has closed out, the binders are in
storage, and nobody thinks of the study as ongoing. It belongs in the maintenance checklist with a
date attached.

---

## 7. What FDA looks for at a BIMO inspection

Under the Bioresearch Monitoring compliance programme for clinical investigators (CP 7348.811), the
1572 is pulled early in the inspection because it is the map of who and where. The investigator
reviews it for:

1. **Presence and signature.** Is there a signed, dated 1572 for this protocol at this site, executed
   *before* the first participant was screened? Site 1047: signed 05-DEC-2022, activation 06-JAN-2023,
   first screen 11-JAN-2023. Clean.
2. **Consistency with the delegation of authority log.** Every name in Block 6 should appear on the
   delegation log with duties consistent with sub-investigator status. Every person on the delegation
   log performing medical-judgement tasks should appear in Block 6.
3. **Whether listed sub-investigators were actually on the study.** A name in Block 6 with no
   corresponding training record, no delegation log entry, and no signature anywhere in the source is
   evidence the site listed someone reflexively — a paperwork finding that raises the question of
   what else is reflexive.
4. **Whether unlisted people performed study duties.** The inspector reads source documents backwards:
   who signed this eligibility assessment? Who assessed the causality of this SAE? Is that person in
   Block 6? This is where under-listing is caught, and it is caught from the *source*, not from the
   1572.
5. **Version currency.** Is the 1572 in the binder the current one? Do the dates of revisions precede
   the activities they authorise? Are superseded versions retained and marked?
6. **Facility completeness.** Did anything happen anywhere not listed in Block 3? Drug stored off-site?
   A satellite visit?
7. **Laboratory completeness.** Is the in-office CLIA-waived testing reflected in Block 4, and is the
   CLIA certificate current?
8. **Attachment completeness.** CV present, signed, dated within currency; licence current; GCP
   training current; financial disclosure on file for every listed investigator.

The cross-read against the delegation log is the heart of it. The authored document's maintenance
checklist should be built around making that cross-read survivable.

---

## 8. Common findings and the language that follows

The authored document should include a short section of representative findings with the citation
language they attract. These are composed for the simulation, in the register FDA actually uses:

- **Under-listed sub-investigator.**
  > *"You failed to conduct the study in accordance with the signed statement of investigator [21 CFR
  > 312.60]. Specifically, [physician] performed eligibility determinations and adverse event
  > causality assessments for subjects enrolled at your site between [dates], but was not identified
  > as a sub-investigator on the Form FDA 1572 you signed on [date]."*

- **Facility not listed in Block 3.**
  > *"Investigational product was stored at [address], a location not identified on any Form FDA 1572
  > submitted for this investigation."*

- **Delegation without qualification or training.**
  > *"You failed to ensure that individuals to whom study tasks were delegated were adequately trained
  > and qualified to perform those tasks."*

- **Inadequate supervision.**
  > *"You failed to personally conduct or supervise the clinical investigation [21 CFR 312.60]."*

- **Records.**
  > *"You failed to maintain adequate and accurate case histories that record all observations and
  > other data pertinent to the investigation on each individual [21 CFR 312.62(b)]."*

The escalation ladder — Form FDA 483 observations → Untitled Letter → Warning Letter → disqualification
under 21 CFR 312.70 — is worth one line for context, and worth noting that Dr Okonkwo's 2019 inspection
closed **NAI**, the best possible outcome, which is a fact from canon and a piece of characterisation.

---

## 9. Structure of the authored document

Proposed section order and approximate weight (target 2,000–3,000 words total):

| § | Section | ~Words |
|---|---|---|
| — | SIMULATION banner | — |
| — | Cover page: package title, study identification, site identification, contents list, package assembly/filing statement | 250 |
| 1 | **Form FDA 1572 — Statement of Investigator**, all nine blocks with official labels, filled for Site 1047; both Phase 1 and Phase 2/3 option texts shown with the Phase 2/3 box marked; full Block 9 commitment text; signature block dated 05-DEC-2022; 18 U.S.C. § 1001 warning; OMB burden statement | 1,100 |
| 2 | Revision history table (original 05-DEC-2022; Revision 1 dated 14-MAR-2023 adding Nakamura), plus the "changes documented by note to file, no revised 1572" companion table | 250 |
| 3 | **Form FDA 3455** rendered and completed for the PI as a negative disclosure, with the certification statement and a note on the 3454/3455 division | 400 |
| 4 | Sub-Investigator Financial Disclosure Summary — all four investigators, four categories each | 200 |
| 5 | Completion and maintenance checklist for the regulatory coordinator: what accompanies the 1572 in the ISF, currency requirements, annual review | 400 |
| 6 | What to check before filing — the five errors | 250 |

Every heading carries the simulation watermark line in the form header, per the assignment: the two
rendered forms each open with a bracketed watermark row immediately under the form title so that a
printed page, detached from the file, is still unmistakably a simulation.

**Voice.** Bureaucratic and flat inside the rendered forms — official field labels in the FDA's own
capitalised style, no editorialising. Outside the forms (checklist, maintenance, "what to check"),
the voice is the site's regulatory coordinator: direct, practical, mildly weary. That contrast is
itself a design feature; the reader should feel the difference between what the federal government
requires and what Sam Oyelaran has to do about it every Tuesday.

**Facts that must not be invented.** Site address, PI name and licence, sub-investigator names and
licences, IRB name/registration/location, CLIA number, FWA, central lab name and city, protocol number,
official title, phase, sponsor address, the 05-DEC-2022 signature date. All are canon.

**Facts to invent and log.** IND number is already flagged ASSUMED in canon and must be re-logged; the
14-MAR-2023 revision date and its reason; the note-to-file dates; the OMB expiration date and burden
figure on the form face; the financial disclosure content for all four investigators; the CV signature
dates; the CITI GCP certificate dates; the CLIA certificate expiry; the 3455 sponsor-representative
signatory.
