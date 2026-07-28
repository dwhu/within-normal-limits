> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline & Section Analysis — IRT (Interactive Response Technology) Site User Guide

**Target document:** `/Users/dave/code/icf-please/docs/trial_documents/irt_manual.md`
**System:** Axion IRT (Axion Clinical Systems) — help desk +1 (800) 555-0164 · `helpdesk@axionirt.com` · 24/7
**Study:** ROCKET-Horizon · Protocol 20210143, Amendment 3 (29-NOV-2023) · NCT05651711 · EU CT 2022-501538-44
**Manual version to be authored:** Version 2.1, dated 12-DEC-2023
**Audience:** delegated site staff at activated centres. Written for, and used at, Site 1047 —
Cascade Dermatology & Clinical Research, LLC, Portland OR.

These are design notes. They explain what an IRT site user guide contains, why each part exists, and
what breaks when it is missing or wrong. They are not the manual.

---

## 1. What an IRT actually is

### 1.1 The name is an accident of history

"Interactive Response Technology" is a fossil. The category began in the 1990s as **IVRS** —
Interactive *Voice* Response System — a touch-tone telephone tree that a coordinator called from the
clinic phone: *"Press 1 to randomize a subject. Enter the four-digit site number. Enter the subject
number."* The system spoke a kit number back and the coordinator wrote it on a worksheet. Web front
ends arrived and the category became **IWRS**; when sponsors stopped caring which channel was used,
the industry settled on **IRT**, and clinical-supply people increasingly say **RTSM** — Randomization
and Trial Supply Management — which is the only one of the four names that describes what the thing
does.

The manual should not lecture about this, but the author must hold it in mind for two reasons. First,
the telephone channel never went away: it is the backup path when the web application is unreachable,
and it is the path that must work at 02:00 when a participant is in the emergency department and the
treating physician needs to know what they received. Second, the vocabulary in a real system is
inherited and slightly inconsistent — screens say "Subject," staff say "participant," the protocol
says "participant," the confirmation email says "Subject ID." A manual that is *too* clean reads
fake. A little inherited friction is realism.

### 1.2 Two jobs, running simultaneously, on one dataset

An IRT does two things at once, and everything difficult about it comes from the fact that they are
the same transaction.

**Job one: randomization.** Allocate each participant to a treatment arm according to the
randomization schedule produced by the sponsor's biostatistics group, honouring the allocation ratio
(here **3:1**, rocatinlimab : placebo) and the stratification factors (here **geographic region** and
**baseline vIGA-AD 3 vs 4**). The randomization list is generated once, validated, loaded into the
system under change control, and never shown to anyone at the site. The IRT is the custodian of that
list. It is the only place in the trial where the participant-to-arm mapping exists in an operational
system before database lock.

**Job two: trial supply management.** Know what physical inventory exists at every site and depot in
the world, assign specific numbered kits to specific participants at specific visits, decrement
inventory, project future demand from the visit schedule, and trigger resupply shipments before a
site runs out. Track expiry. Track quarantine. Track destruction.

These are one transaction because a dispensing decision *is* an allocation decision. When a
coordinator clicks "Dispense" at Week 8 for participant 1047-011, the system must pick a kit that
contains the treatment 1047-011 was randomized to — without ever telling anyone which one that is.
The kit number is the ciphertext. The randomization list is the key. The site holds a box of
identical cartons and reads numbers off a screen.

**Design consequence for the manual:** every dispensing screen must be written so that the reader
understands they are being *told which carton to pick up*, not *asked to choose one*. The single most
common site error in IP handling is grabbing the next carton on the shelf instead of the carton the
system named. The manual must make the kit number feel like an instruction, not a record.

### 1.3 What the site sees versus what the system knows

| The system knows | The site sees |
|---|---|
| Randomization list: participant → arm | Nothing |
| Kit number → arm mapping | Nothing |
| Which kits at Site 1047 are active and which are placebo | A single undifferentiated pool of cartons |
| Allocation ratio and block structure | The protocol says 3:1; the system says nothing |
| Real-time enrolment across 151 centres | Their own site's participants only |
| Every keystroke, by user, with timestamp | Their own transaction history |

This asymmetry is the point. The manual must state it plainly and early, because a coordinator who
does not understand *why* a screen is missing information will assume the screen is broken and call
the help desk. A well-written IRT manual pre-empts a large fraction of its own support calls by
explaining absences.

---

## 2. Why this document exists separately from everything else

The IRT sits at the intersection of four other documents. The manual must state its boundaries
explicitly or it will be used as a substitute for all of them.

| Document | Owns | Does **not** own |
|---|---|---|
| **Protocol 20210143** | The randomization ratio, stratification factors, dose, regimen, SoA | How to execute a transaction |
| **Pharmacy Manual** | Storage, temperature monitoring, refrigerator qualification, preparation, disposal | Kit assignment |
| **IP Handling Manual** (sponsor) | The supply algorithm, resupply triggers, depot logistics, label text, destruction authorisation | Site-facing screens |
| **Veriscribe EDC Manual** | eCRF completion, query resolution, data entry conventions | Anything transactional |
| **This IRT manual** | Every keystroke a site makes in Axion IRT | All of the above |

Two boundaries deserve special emphasis in the manual's own scope section because they are the two
most commonly blurred:

1. **The IRT is not the eCRF.** A transaction in Axion IRT does not populate Veriscribe EDC. The site
   enters the visit in both. This is annoying, it is real, and sites forget it constantly. The manual
   must say it in bold. (Some modern platforms integrate; this one does not, and the manual should
   say that explicitly so nobody assumes.)
2. **The IRT does not store drug.** It has no opinion about whether the refrigerator was at 7 °C. It
   records that the site *told it* about an excursion and it flags the affected kits. The
   thermometer, the log, the excursion report, and the 24-hour notification to the sponsor all live in
   the Pharmacy Manual and Cascade SOP-009.

**Precedence clause.** Like every subordinate document, the manual needs a sentence stating that
where it appears to conflict with the protocol, the protocol governs, and the conflict is reported to
the CRA as an erratum. Unlike most subordinate documents, it needs a second sentence: where the
manual describes a screen and the screen differs, the **screen** governs and the discrepancy is
reported to the help desk — because software is versioned independently of its documentation and a
manual dated 12-DEC-2023 will inevitably describe a build that has since been patched.

---

## 3. Regulatory foundations the manual must operationalise

The manual should almost never cite regulation in the body — a coordinator does not need a CFR
citation to click a button. But every rule in it traces to one of the following, and the outline
records the trace so the finished document can be audited against its own justifications.

### 3.1 21 CFR Part 11 — Electronic Records; Electronic Signatures

Part 11 is the spine. It is why the system behaves in the specific, sometimes irritating ways it
does. The mapping:

- **§11.10(a) — validation.** "Validation of systems to ensure accuracy, reliability, consistent
  intended performance, and the ability to discern invalid or altered records." This is why the site
  cannot get an enhancement mid-study, why help-desk data corrections take days rather than minutes,
  and why the manual must never describe a workaround. It is also why the manual itself is version
  controlled: it is part of the system's controlled documentation set.
- **§11.10(b) — accurate and complete copies.** Why every transaction produces a printable
  confirmation and why that confirmation is a source document.
- **§11.10(c) — record protection and retrieval throughout the retention period.**
- **§11.10(d) — limiting system access to authorized individuals.** The account-request-through-the-CRA
  workflow exists because of this clause. Access is granted by the sponsor's delegate against a
  delegation log, not by the site.
- **§11.10(e) — the audit trail.** *"Use of secure, computer-generated, time-stamped audit trails to
  independently record the date and time of operator entries and actions that create, modify, or
  delete electronic records. Record changes shall not obscure previously recorded information."* Two
  operational consequences the manual must carry: (i) history is **append-only** — corrections add
  rows, they never overwrite; (ii) the audit trail is available to the site as a **report**, which is
  what makes the "the IRT said so" argument in §8 below possible.
- **§11.10(g) — authority checks.** The permissions matrix. Not decoration: it is a Part 11 control,
  and it is why an Investigator cannot perform a shipment receipt and a Site Pharmacist cannot check
  the eligibility box.
- **§11.10(j) — written policy holding individuals accountable for actions taken under their
  electronic signatures.** This is the regulatory teeth behind "never share your credentials." The
  manual must connect the two explicitly: the reason sharing is forbidden is not IT hygiene, it is
  that an electronic signature is legally equivalent to a handwritten one and a shared account makes
  every signature in the system deniable.
- **§11.100(a) — signatures unique to one individual, never reused or reassigned.** Why an offboarded
  coordinator's account is *deactivated*, never handed to their replacement.
- **§11.200(a)(1) — signature components.** A non-biometric electronic signature uses at least two
  distinct identification components. In this system: username + password at login, and — for the
  three transactions with signature meaning (randomization, unblinding, EOT/EOS) — a re-entry of the
  password at the point of commitment. The manual must explain that the second password prompt is not
  a bug.
- **§11.300 — controls for identification codes and passwords**: uniqueness, periodic revision
  (password expiry), loss management (help-desk reset with identity verification), unauthorized-use
  safeguards (lockout after failed attempts).

### 3.2 ICH E6(R3) — computerised systems in clinical trials

E6(R3) treats data governance as a first-class topic rather than an annex. The expectations the
manual must reflect:

- The **sponsor** is accountable for the validated state of the system; the **investigator** is
  accountable for the accuracy of what their site enters and for controlling access at the site.
- Systems must be **fit for purpose**, with documented validation proportionate to risk. An IRT is
  high risk — it controls both allocation and drug exposure — so it sits at the top of the validation
  effort scale.
- **Access control must be current.** Not "was correct at site initiation." This is the basis for the
  periodic user access review and for the requirement to offboard staff within a stated number of
  business days. E6(R3) is the reason the manual must contain an access-management section at all;
  older manuals often did not.
- **Data integrity via ALCOA+**: attributable, legible, contemporaneous, original, accurate, plus
  complete, consistent, enduring, available. *Contemporaneous* is the one the manual must push
  hardest on, because the characteristic site failure is batching a week of transactions on Friday
  afternoon. In an IRT this is not merely untidy: a batched dispensing transaction means the system's
  inventory picture was wrong all week, which means a resupply may not have triggered.
- **Blinding must be maintained by design**, and any unblinding must be documented and reportable.
- **Business continuity**: a validated system must have a documented procedure for what happens when
  it is unavailable. This is the regulatory basis for the downtime/manual-backup section.

### 3.3 ICH E9 — Statistical Principles for Clinical Trials

E9 §2.3.1–2.3.2 is where randomization and blinding get their scientific rationale. The manual does
not teach statistics, but two E9 ideas must survive into the site-facing text:

- Randomization exists to make treatment groups comparable **and to provide the basis for the
  statistical test**. Anything that lets a site influence which arm a participant lands in — including
  guessing and re-screening until the guess is favourable — attacks the analysis itself, not just
  tidiness.
- **Stratification** ensures balance within prognostically important subgroups. In ROCKET-Horizon the
  strata are region and baseline vIGA-AD (3 vs 4). This is why the system asks the vIGA-AD question at
  randomization and why the answer must match the source. A stratification value entered wrongly is
  not a typo; it puts the participant in the wrong randomization stream and cannot be corrected by
  editing a field afterwards.

### 3.4 Supporting frameworks worth one line each

- **EU Annex 11 (Computerised Systems)** — the European analogue to Part 11, adding explicit
  expectations around supplier assessment, periodic evaluation, and incident management. Relevant
  because ROCKET-Horizon runs in 21 countries under EU CT 2022-501538-44.
- **GAMP 5 (2nd ed.)** — the industry framework the vendor uses to structure validation: a configured
  commercial product (Category 4) with study-specific configuration validated per deployment.
- **21 CFR 312.62(a)** — the investigator's disposition-of-drug records obligation. The IRT dispensing
  history is the primary evidence that satisfies it.
- **ICH E6(R3) investigator obligations on IP** — accountability, use per protocol, records
  reconcilable.

---

## 4. Validation and the UAT lifecycle — why the site cares

Sites do not perform system validation, but the manual should carry a short, honest paragraph about
it, because it explains three behaviours the site experiences as friction.

The lifecycle, in the order it happens:

1. **User Requirement Specification (URS)** — sponsor-authored, study-specific. Says: 3:1 allocation,
   two stratification factors, one kit per dosing visit, seven dosing visits, resupply triggers,
   emergency unblinding available 24/7.
2. **Functional and design specifications** — vendor-authored, traced line by line to the URS.
3. **Configuration** — the study build: visit schedule, reason-code lists, kit definitions, site list,
   user roles, email notification rules.
4. **Randomization list generation and load.** Produced by an unblinded statistician outside the
   study team, loaded into the system by a controlled procedure, checksum-verified. The list is
   *never* held in the same environment as the study team's working files.
5. **IQ/OQ/PQ and UAT.** User Acceptance Testing is where sponsor and CRO staff run the built system
   against scripted scenarios in a test environment with dummy participants. It is the last chance to
   catch, for example, a reason-code list missing an option the sites will actually need.
6. **Validation summary report and release for production use.** The system goes live only after the
   sponsor signs.
7. **Change control.** Every post-go-live change — a new site, a new expiry date, a corrected reason
   code, a data correction — runs through a documented request, an impact assessment, a regression
   test, and a signed release.

**The three frictions this explains, and the manual must say so:**

- **"Why can't you just fix it?"** Because a fix is a change to a validated system and requires the
  documented cycle above. A data correction that takes the help desk five minutes to type takes two
  days to authorise.
- **"Why does the training environment look different?"** Because it is a separate instance, seeded
  with fake participants at fake sites, and it is deliberately not kept in perfect sync.
- **"Why so many confirmation screens?"** Because a validated system cannot rely on the user being
  careful; the controls have to be in the software. The confirmation screen is a designed obstacle.

The manual should also carry one sentence on **training as a release control**: credentials are not
issued until training is complete, because an untrained user in a validated system is an
uncontrolled variable, and the training record is an inspection artefact.

---

## 5. The IRT as the single point of blinding integrity

This is the conceptual heart of the manual and deserves its own section in the finished document,
placed early, before any transaction.

### 5.1 Where the blind actually lives

In a double-blind study, ask where the blind is physically maintained and you get a chain of
answers — identical cartons, identical syringes, matching placebo of identical volume, no unblinded
pharmacist at site. All of that is *necessary*, none of it is *sufficient*. Identical packaging keeps
someone from working out the assignment by looking. It does not decide the assignment.

The blind lives in exactly one place: the mapping between kit numbers and treatment, held inside the
IRT. Everything else in the study — the cartons, the labels, the observation periods, the raters'
training, the DMC's firewall — is downstream of that one table. Which means:

- The IRT is the **only** system in the trial that can break the blind.
- It is therefore the only system that needs a *deliberate, designed* mechanism for breaking it.
- And because it is the only one, every break is countable. There is no such thing as an unlogged
  unblinding, and the manual should say exactly that.

### 5.2 Design features that protect the blind, and why each looks like an inconvenience

The manual should present these as a short list, because each one is something a site would otherwise
report as a defect:

| Feature | Looks like | Actually is |
|---|---|---|
| No arm displayed anywhere in the site UI | Missing data | The whole point |
| Inventory shows kit numbers, never product type | An unhelpful report | Kit-level blinding |
| No "randomization list" report for sites | Withheld information | Correct |
| Dispensing history shows kits, not treatment | Incomplete history | Correct |
| Kit assignment is not "next carton on the shelf" | Illogical picking | The system is picking from the arm-appropriate pool |
| 3:1 ratio not reflected in any site-visible count | Confusing | Any site-visible allocation counter is a blinding leak |
| Blinded sponsor staff have *less* access than the help desk | Odd hierarchy | Unblinded access is confined to the smallest possible group |

That last row deserves elaboration in the manual. The permissions matrix must show two distinct
sponsor roles — **Sponsor (blinded)** and **Sponsor (unblinded)** — and make clear that the unblinded
role is held by a very small number of named individuals in clinical supply and biostatistics who are
firewalled from the study team, and that no site role can be granted it under any circumstance,
including the PI. A site coordinator reading that table learns something true and useful: *the
sponsor's own study team is in the same boat you are.* That is reassuring and it is accurate.

### 5.3 Why the site's ignorance is protective, not insulting

Worth a paragraph in the manual with a slightly human tone. Coordinators sometimes experience the
blind as distrust. It is the opposite: an investigator who does not know the assignment cannot be
accused of biased rating, and in a study whose primary endpoints are **investigator-rated** (rIGA 0/1
and EASI-75, both scored by a DATG-certified rater), the rater's ignorance is the single most
valuable asset the study has. The blind protects the investigator's own data from doubt.

---

## 6. Section-by-section analysis of the manual

For each section: what it contains, why it exists, and the failure mode it prevents.

### 6.1 Cover, version history, purpose, scope, contacts, availability

**Contains:** system name and vendor, guide version (2.1) and date (12-DEC-2023), the study it
supports, a version history table showing what changed at each revision, purpose statement, scope
in/out list, help desk contact, and the system availability statement including the maintenance
window.

**Why:** the version history is the training trigger. When v2.1 supersedes v2.0, the site must be able
to see in ten seconds whether the change affects them. A version history that says only "various
updates" is useless and is a real-world audit finding.

**Availability specifics the manual must commit to:** 24/7 web access; a stated recurring maintenance
window during which the web application is unavailable; and — critically — an explicit statement that
**emergency unblinding remains available by telephone throughout maintenance and any outage**. If the
manual states a maintenance window without stating that carve-out, it has created a period in which a
site would believe unblinding is impossible. That is a patient-safety defect in a document.

**Failure mode prevented:** a site consulting a superseded manual and following a retired procedure;
a site believing the system is down when it is a scheduled window; a site believing unblinding is
unavailable at 03:00 on a Sunday.

### 6.2 Getting started

**Contains:** account request via the CRA (not self-service), the training prerequisite, the
activation email and its expiry, first login, password composition and lifecycle rules, MFA
enrolment, the inactivity timeout and its effect on an in-progress transaction, and the prohibition on
sharing credentials.

**Why each piece:**

- **Request via the CRA.** Access must be traceable to the delegation log. The CRA (Kevin Ostrander)
  verifies that the person is delegated for IRT transactions before requesting the account. This is
  §11.10(d) in practice. It also means access requests take days, not minutes — the manual must set
  that expectation so a site plans ahead rather than sharing a login on the day.
- **Training first.** Credentials are the reward for a completed training record.
- **Activation email with a short expiry.** Realistic friction, and a genuine control: a stale
  activation link is a standing credential in an inbox.
- **Password rules.** State them concretely — length, character classes, history, expiry, lockout —
  because vague rules generate help-desk calls.
- **MFA.** A second factor at each login. The manual must cover the enrolment step, the lost-device
  path (help desk, identity verification, re-enrolment), and the fact that MFA is per-person and
  therefore another structural reason accounts cannot be shared: sharing a login means sharing a
  phone.
- **Timeout.** The manual must be precise about the consequence, because this is where site anxiety
  concentrates. The correct design, and the one to describe: a transaction is **not committed until
  the final confirmation**, so a timeout mid-transaction discards the in-progress entries and changes
  nothing — no participant registered, no kit assigned, no randomization performed. That is
  reassuring and it is the right behaviour. The corollary is the anxiety-inducing half: once
  committed, it is done.
- **Credential sharing.** Deserves its own subsection with a hard, unambiguous statement, the Part 11
  §11.10(j)/§11.100(a) rationale, and the consequence: an action performed under a shared account is
  attributable to the account holder and constitutes a GCP violation reportable to the sponsor and
  potentially to the IRB. The manual should include the realistic scenario — *"the coordinator is on
  holiday and the backup needs to dispense"* — and give the correct answer: the backup has their own
  account, and if they do not, that is a planning failure to fix in advance, not a login to borrow.

**Failure mode prevented:** the single most common real-world IRT finding, which is one coordinator's
credentials used by the whole site.

### 6.3 User roles and permissions

**Contains:** a matrix — roles down one axis, transactions across the other — for Site Coordinator,
Investigator, Site Pharmacist, CRA, Sponsor (blinded), Sponsor (unblinded), and Help Desk. Plus a
prominent statement that **no site role, including the Investigator, can view treatment assignment.**

**Why:** three reasons. (1) It is a Part 11 §11.10(g) authority check, documented. (2) It answers
"why can't I see that button?" without a support call. (3) It tells the site who to ask when they hit
a wall — knowing that only the help desk can perform a data correction is itself operational
knowledge.

**Design notes for the matrix:**
- The **Investigator** row is the interesting one: the Investigator is the *only* role that may check
  the eligibility-confirmation box at randomization, and is nonetheless the role with the fewest
  routine transactions, because in practice the PI delegates execution. The matrix should show that
  asymmetry rather than hide it.
- The **Site Pharmacist** row must reflect Cascade's reality: Wen-Li Chao is *blinded* (canon: no
  unblinded pharmacist is required at this site), holds receipt/quarantine/inventory permissions, and
  has no randomization permission.
- The **CRA** row is read-only across the board plus report access. A monitor who could transact could
  compromise independence.
- The **Help Desk** row is the only one with correction rights, and those rights are exercised only
  against a documented request. Worth a footnote in the matrix itself.
- The **Sponsor (unblinded)** row is the only one with any visibility of the kit-to-treatment mapping,
  and the matrix should note it is restricted to named clinical supply and biostatistics personnel
  firewalled from the study team.

### 6.4 Navigating the system

**Contains:** rendered mock screens of the login, the dashboard, the participant record, the inventory
view, and the reports menu.

**Why:** this is where a user guide earns its keep. Prose descriptions of software are almost
worthless; a picture of the screen is worth pages. Because this document is markdown, the mocks are
rendered as fenced ASCII blocks. They must be internally consistent — the same participants, the same
kit numbers, the same alert counts across every mock in the document — because an inconsistent mock
teaches the reader that the mocks are not to be trusted.

**Dashboard composition to render:** a participant list (ID, status, next visit due, window), an
alerts panel (expiring kits, overdue visits, low stock), an inventory summary panel (available /
assigned / quarantined counts), and a pending-actions panel (unconfirmed shipments). The dashboard is
the first thing a coordinator sees each morning and it should be designed as a to-do list rather than
a report.

**Consistency requirement:** the worked examples across the whole manual should follow a small cast
of participants — a participant being screened, one being randomized, one mid-treatment, one screen
failing — so the reader can follow a narrative. Numbers must stay fixed. If 1047-011 is randomized
with number 204518 in §7, it is still 204518 in the reports appendix.

### 6.5 The transaction sections

Each transaction section should follow an identical template, because IRT users navigate by pattern:

1. **When to perform it** (tied to the SoA)
2. **Who may perform it** (tied to the permissions matrix)
3. **What you need in front of you before you start** — a pre-flight checklist. This is the highest-value
   half-page in the manual: most bad transactions are caused by starting one without the source
   document open.
4. **The screens**, rendered
5. **What the system returns**
6. **What to print, sign, and file**
7. **What cannot be undone**

The transaction set, with the analysis specific to each:

**(a) Register a screened participant.** Performed **at consent, before any protocol procedure** —
this timing is the whole reason the transaction exists, because a screening number must attach to the
participant before the first protocol-mandated blood draw so that everything downstream is
attributable. Returns the participant ID in `SSSS-NNN` form (1047-001 …). The manual should note that
the number is sequential *at the site* and is never reassigned, even if the participant withdraws
consent five minutes later — a gap in the sequence is normal and is not an error to report.

**(b) Screen failure.** Needs a reason-code list. The codes should map to the actual eligibility
criteria (EASI <16, vIGA-AD <3, BSA <10%, NRS <4, washout not completed, lab exclusion, withdrew
consent, lost to follow-up, other with mandatory free text) because a generic list produces "Other"
for 60% of screen failures and destroys the sponsor's ability to understand its funnel. Site 1047's
own history — 9 screen failures of 23 screened, mostly EASI <16 and washout non-compliance — is a
useful reality check that the code list covers the real cases.

The **single permitted re-screen** is the subtle part. Canon allows one re-screen. The system must
therefore issue a **new** participant ID for the re-screened attempt (because the first attempt's data
is a closed record) while **linking** it to the original. The manual must describe the link
mechanism concretely — a "Previous Participant ID" field on the registration screen, a banner on the
participant record reading *Re-screen of 1047-006*, and a hard block on a second re-screen. Sites get
this wrong by re-using the original ID, which produces two screening episodes on one record and an
unresolvable data query.

**(c) Randomization.** The most consequential routine transaction. Elements:
- The **eligibility confirmation checkbox**, checkable only by an Investigator role (PI Okonkwo, or
  Sub-Is Feist / Nakamura — notably *not* NP Alonzo Vega, who per the DOA log is not delegated for
  eligibility determination). The manual should make the role restriction concrete with that example,
  because it is exactly the kind of thing a busy site gets wrong.
- The **stratification questions**: region and baseline vIGA-AD (3 vs 4). Region is a property of the
  site and should be system-derived and shown read-only for confirmation; vIGA-AD is entered and must
  match the certified rater's Day 1 source. The manual must state that this value **cannot be changed
  after commitment** and that a wrong value is a protocol deviation requiring a help-desk-logged
  documented request, not a self-service edit.
- The **randomization number** returned (6-digit, e.g. 204518) and the **kit assignment** for Day 1.
- The **confirmation screen** and the **printable confirmation** — a source document, signed, dated,
  filed.
- **Irreversibility.** The manual must state it in the strongest terms available and then answer the
  question the reader is now asking: *what if we randomized in error?* The answer is a procedure, not
  an undo: stop, do not dispense, call the help desk immediately, call the medical monitor, the
  randomization number is consumed and retired, the participant is discontinued as "Randomized in
  error," the kit is returned to inventory or quarantined depending on whether it left the pharmacy,
  a protocol deviation is logged, and the IRB is notified per Keystone's requirements. The
  randomization slot is *not* recycled — the manual should say so, because sites assume it must be.

**(d) Dispense IP at a visit.** Occurs at the seven dosing visits (Day 1, W2, W4, W8, W12, W16, W20).
Elements: visit selection from a list the system constrains by window; the assigned kit number(s); the
fact that this study's kit is a **carton of two prefilled syringes** and that one kit = one 300 mg
dose = two injections; the printed confirmation; and the interaction with the pharmacy double-check
(two people independently verify the kit number on the carton against the confirmation before the
carton leaves the pharmacy). The manual should also warn about the ordering trap: the transaction
should be performed when the kit is *actually dispensed*, not at the start of the visit, because a
participant can be sent home un-dosed after a failed predose pregnancy test — leaving an assigned kit
and no administration.

A note on plurality: the platform's kit panel is a list, because the platform supports regimens with
several kits per visit. In ROCKET-Horizon it will always contain exactly one row. Saying so prevents
a coordinator from waiting for a second kit number that will never come.

**(e) Missed or skipped dose.** Needed because the SoA has an IRT transaction at every dosing visit and
the system must be able to record the negative case. Two distinct situations to separate: the visit
occurred but IP was not administered, and the visit did not occur at all. Both must be recorded, both
affect the forward demand forecast, and the manual must explain the downstream effect — an unrecorded
missed dose leaves the system believing a kit was consumed and can under- or over-trigger the next
resupply. This is the section that makes the abstract "contemporaneous" requirement concrete.

**(f) Damaged, lost, or unusable kit.** Elements: reporting the kit number, a reason code (dropped/
broken, temperature excursion, seal compromised, expired, lost, participant did not return, other),
the automatic **quarantine flag** that removes the kit from the available pool, replacement kit
assignment where a dose is still due, and the fact that a quarantined kit stays on the shelf,
physically segregated, until sponsor disposition. The manual must be explicit that the site never
destroys a kit on its own authority.

**(g) Confirm receipt of a shipment.** Elements: the shipment ID, the packing list, kit-range
confirmation (from/to), a count, the **temperature-logger question** (was the monitor alarmed —
Yes / No / Monitor not present or unreadable), and the accept/quarantine decision. Two rules the
manual must carry: confirm receipt within a stated number of business hours (unconfirmed shipments
suppress the next automatic resupply, which is how a site quietly runs out of drug); and if the
logger alarmed, receive the shipment into **quarantine**, not into stock, and notify the sponsor —
never accept-then-sort-it-out.

**(h) Quarantine and release inventory.** Site-initiated quarantine after an excursion; sponsor
disposition to release back to available or to destroy. The manual must make the direction of
authority unmistakable: **the site can always quarantine; only the sponsor can release.** That
asymmetry is the safety property. Cross-reference Cascade SOP-009 and the Pharmacy Manual for the
temperature side without duplicating it.

**(i) End of treatment / end of study.** Two separate transactions because the study has two
endings — EOT at Week 24 (the primary endpoint visit) and EOS at Week 36, with a 12-week safety
follow-up in between. Reason-code lists for completion and for discontinuation. The discontinuation
list must distinguish *discontinued treatment but continuing follow-up* from *withdrawn from study*,
because conflating them is how participants get lost from the follow-up period. Site 1047's own two
early terminations (one withdrawal by subject, one lost to follow-up) should be codeable.

Note the SoA subtlety the manual must respect: there is **no IRT transaction at Week 28 or Week 32.**
Those are safety follow-up visits with no dispensing and no status change. A manual that implies
otherwise contradicts canon.

### 6.6 Emergency unblinding — the section everything else is built around

This is the moral centre of the document and should be written differently from the rest: slower,
plainer, with more white space. Design requirements:

1. **A justification standard, stated first.** Unblinding is justified only when knowledge of the
   assignment **will change the participant's immediate medical management**. The manual should give
   the counter-examples, because they are what actually happens: a participant is curious; an
   emergency-department physician asks routinely; a participant has withdrawn and wants to know; an
   SAE has occurred and someone assumes unblinding is part of reporting. None of these justify it.
   The last is worth calling out — SAE reporting is *not* a reason to unblind, and sites conflate the
   two constantly.
2. **Contact the medical monitor first when time allows.** Ana Belmonte-Ruiz, MD, 24/7 on
   +1 (888) 555-0142. The clause "when time allows" is load-bearing and honest: if the participant is
   in anaphylaxis, unblind and call after. The manual must not create a rule that a clinician has to
   break in an emergency; it must state the priority order and let the clinician act.
3. **The step-by-step procedure**, rendered screen by screen, including the mandatory free-text
   reason field (with a stated minimum length so it cannot be dismissed with "needed"), the multi-step
   confirmation — a type-to-confirm gate rather than a click-through, because a click-through can be
   done by reflex — and the password re-entry as electronic signature.
4. **The three-sentence statement of consequence**, set apart on the page: *immediate, irreversible,
   permanently logged with your name and the timestamp.* The manual should say plainly that the
   assignment appears on screen and cannot be un-seen, and that there is no "cancel" once the final
   confirmation is submitted.
5. **Automatic notification.** Sponsor, medical monitor, and the assigned CRA (Kevin Ostrander) are
   notified by the system within minutes. Stating this is a kindness: it tells the site that they do
   not have to make the call at 03:00 to raise the alarm, and it removes the fantasy that an
   unblinding might go unnoticed.
6. **What the site does afterwards**, as a numbered checklist with clocks: document in source
   (who, when, why, who was told); notify the sponsor within **24 hours** per protocol; notify
   Keystone IRB per its reporting requirements; log a protocol deviation only if the unblinding was
   not protocol-justified; **and continue the participant in the study and in follow-up** unless the
   PI decides otherwise. That last point is the one sites get wrong: unblinding does not
   automatically end participation, though it usually ends dosing. The participant's Week 24 and
   Week 36 data still matter.
7. **The telephone backup path.** If the web application is unreachable — outage, maintenance window,
   no network in the ED — call +1 (800) 555-0164. The manual must state what the caller will be asked
   for (protocol number, site number, participant ID, caller identity and role, callback number,
   reason) so a person under pressure at 03:00 can have it ready, and must state that the telephone
   break is logged identically and is followed by the same downstream obligations.
8. **A tone note.** This section should carry one sentence acknowledging that the person reading it
   may be reading it for the first time in an emergency, and that everything they need is on this
   page. A manual that knows when it will be read is a better manual.

### 6.7 Reports

**Contains:** the report list — inventory on hand, expiry, dispensing history, participant status,
transaction audit trail — with what each is for, and a short honest paragraph on what is **withheld**
and why. The withheld list (no randomization list, no arm on any report, no kit-to-treatment mapping,
no allocation counts) belongs in the manual precisely because listing an absence is the only way to
stop a user hunting for it.

The **expiry report** deserves emphasis: expiry dates are a supply property the site is uniquely
positioned to act on, and an expired kit dispensed is a reportable deviation and a wasted
participant-visit. The manual should recommend running it monthly and name an owner at the site.

The **audit trail report** is what makes §8 below work and should be described as such.

### 6.8 Downtime and manual backup

**Contains:** definition of an outage versus a scheduled window, the 24/7 help desk number, the paper
backup form for randomization and dispensing, the rule that the site must call the help desk *first*
(the help desk performs the transaction on the site's behalf where the back end is available; the
paper form is for a total outage), the **24-hour** requirement to enter the transaction into the
system after restoration, and a **blank, reproducible form**.

**Why the paper form must actually be printed in the manual:** a downtime procedure that requires
finding a form on a portal that is also down is not a downtime procedure. The form must be in the
document the site has on the shelf.

**Failure mode prevented:** a site that stops enrolling during an outage because it does not know a
backup exists, or a site that dispenses during an outage and never back-enters, leaving the system's
inventory permanently wrong.

### 6.9 Common errors and how to fix them

The most-read section after the first month. Format as a table or a series of short entries, each
with: what happened, can the site self-correct, what to do, what to document.

The error set to cover, with the honest answers:

| Error | Self-correct? |
|---|---|
| Wrong visit selected | No — help desk, documented request |
| Wrong participant selected | No — help desk; if a kit was assigned, quarantine it |
| Transaction completed for a participant who did not attend | No — help desk reversal + deviation |
| Kit assigned but not administered | Site records it as not administered; kit handled per damaged/unused rules |
| Screen failure entered after randomization | System should **block** this outright; if it did not, help desk immediately |
| Wrong stratification value entered | No — help desk; and this one is a protocol deviation, not a typo |
| Duplicate participant registration | Help desk voids the duplicate; the ID is retired, not reused |

The pattern the reader should absorb: **almost nothing is self-correctable, and that is by design.**
The manual should say that explicitly rather than letting it emerge as a series of disappointments.
It should also state the single most useful behavioural rule in the whole document: *if you think you
have made an error, stop and call. Do not attempt to correct it with a further transaction.* The
characteristic disaster is a coordinator who tries to fix a wrong-participant dispense by dispensing
again to the right participant, consuming two kits and corrupting two records.

### 6.10 Data corrections and the audit trail

Short section, one hard rule: **corrections are made by the help desk under a documented request,
never by editing history.** The request comes from a delegated site user, states the transaction ID,
what is wrong, what it should be, and why. The correction produces a **new** audit-trail entry
referencing the original; the original entry remains visible forever. Part 11 §11.10(e) —
"record changes shall not obscure previously recorded information" — is the whole justification and
can be quoted in one line.

### 6.11 Training and access management

**Contains:** the training requirement and its re-training triggers (new version of this guide, role
change, return from extended absence), **prompt offboarding** with a stated deadline in business days,
the **periodic user access review** with a stated frequency and a named site owner, and the CRA's
verification at monitoring visits.

**Why it matters more than it looks:** the departed-coordinator-with-a-live-account is one of the most
common inspection findings in the entire computerised-systems area, and it is entirely preventable by
a calendar reminder. The manual should name the site role that owns it — at Cascade, Sam Oyelaran,
Regulatory Coordinator, who already maintains the delegation log — because an unowned task is an
undone task.

### 6.12 Appendices

- **A — Transaction quick-reference card.** One page, designed to be printed and taped next to the
  workstation: which transaction at which visit, who may perform it, what to have ready. This is the
  page that will actually be used.
- **B — Permissions matrix.** Repeated from the body for standalone printing.
- **C — Blank downtime forms.** Randomization and dispensing.
- **D — Error-message glossary.** System codes with plain-English meaning and the required action.
  Realistic and genuinely useful: a coordinator seeing `AX-4041` should be able to find it.
- **E — Help-desk escalation.** Tiers, target response times, what to have ready before calling, and
  when to escalate past the help desk to the CRA or the medical monitor.

---

## 7. Why "the IRT said so" is the reconciliation authority

Worth its own short section in the manual, because it changes how carefully a coordinator treats the
printed confirmation.

At close-out, drug accountability must reconcile: what was shipped to the site, what was dispensed,
what was returned, what was destroyed. Four record sets exist — the depot's shipping records, the
site's pharmacy accountability log, the eCRF, and the IRT. They will not agree. They never agree.
Someone has to be right.

The IRT is right, for four reasons the manual should state:

1. **It is the only record created at the moment of the event by the system that caused the event.**
   The pharmacy log is transcribed afterwards. The eCRF is entered later. The IRT entry *is* the
   assignment.
2. **It is the only one with an unalterable audit trail.** A paper log can be rewritten with an
   initialled correction. An IRT record cannot be rewritten at all.
3. **It is the only one that both parties can see.** The site, the CRA, the sponsor, and the depot are
   all looking at the same rows.
4. **It is the only one tied to the blind.** A discrepancy between the pharmacy log and the IRT about
   which kit went to which participant is not a clerical problem; it is a question about whether a
   participant received the wrong treatment.

**The behavioural consequence the manual must draw out:** because the IRT wins every dispute, an
incorrect IRT transaction is worse than an incorrect paper log — it will be believed. This is the real
argument for the pharmacy double-check before the carton leaves the pharmacy, and for printing and
filing the confirmation at the time of the transaction rather than at the end of the day. The
confirmation is the site's evidence of what the authoritative record said at the moment it said it.

---

## 8. Scope boundaries — what this manual must *not* contain

Restated as a checklist for the author, because scope creep in an IRT manual is what produces
contradictions with the Pharmacy Manual and the IP Handling Manual:

- **No storage procedures.** No refrigerator temperatures beyond a passing reference, no monitoring
  device instructions, no excursion investigation procedure. Reference the Pharmacy Manual and
  Cascade SOP-009 by name.
- **No supply algorithm internals.** The manual may say *the system triggers resupply automatically
  based on your inventory and your participants' upcoming visits.* It may not describe par levels,
  buffer calculations, or shipment sizing — that is the sponsor's IP Handling Manual.
- **No eCRF instructions.** Say that the visit must also be entered in Veriscribe EDC; do not say how.
- **No dosing, preparation, or injection technique.** Protocol and Pharmacy Manual.
- **No safety reporting procedure.** The unblinding section must reference the Safety Reporting Manual
  and the 24-hour sponsor notification without restating SAE workflows.
- **No protocol content restated as requirement.** The SoA appears only as a reference table for
  *which visits have a transaction*, marked as reproduced from the protocol.

## 9. Rendering and style notes for the author

- **Mock screens in fenced blocks**, box-drawn, monospace. Each screen gets a caption naming what the
  reader is looking at. Field names in the prose match the mock exactly.
- **Consistent worked example cast**, fixed IDs and numbers across the whole document.
- **Second person, imperative** for procedures: "Select the visit. Confirm the kit number."
- **Friction is realism.** The timeout warning, the confirmation you must not click past, the
  transaction that cannot be undone, the activation link that expires, the help desk that needs two
  business days. These are what make the document feel like software rather than a description of
  software.
- **The unblinding section changes register.** Shorter sentences. More space. No cleverness.
- **Every clock and threshold must be a number**, not "promptly." Sites cannot comply with adverbs.
- **Dates `DD-MMM-YYYY`; times 24-hour with time zone; temperature `2–8 °C`; IDs per canon §11.**

## 10. Assumptions this outline commits the manual to

Logged in full in `/docs/trial_documents/assumptions/irt_manual_assumptions.md`. In summary: the
entire Axion IRT product — its URL, screens, field names, transaction set, reason codes, error codes,
role names, notification rules, maintenance window, password and MFA policy, timeout duration,
backup forms, and support tiers — is invented. The ClinicalTrials.gov record for NCT05651711 names no
technology vendor of any kind. The only canon anchors are: the vendor name and contact details
(STUDY_FACTS §9), the 3:1 ratio and stratification factors (§3), the kit format and 6-digit kit
numbers (§4), the visits at which an IRT transaction occurs (§5), and the identifier formats (§11).
