> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline & Section Analysis — EDC Manual (eCRF Completion Guidelines & System User Guide)

**Target document:** `trial_documents/edc_manual.md` — *Veriscribe EDC v9.2 — Site User Guide & eCRF
Completion Guidelines*, Version 3.0, dated 11-DEC-2023.

**Audience:** the person at the keyboard. At Site 1047 that is Priya Raghunathan and Brendan Koss
most of the time, Wen-Li Chao for IP accountability fields, Marisol Duarte for sample-collection
fields, and Dr. Okonkwo, Dr. Feist, Dr. Nakamura, and Alonzo Vega for the clinician-restricted
fields. The register is a software user guide written by people who know that the software is a
regulated record.

---

## 1. What this document is, and why it is not the Study Reference Manual

### 1.1 The question each manual answers

There is a clean seam between the four site-facing manuals in this study, and the EDC manual sits on
one side of it:

| Question | Manual |
|---|---|
| *How do I perform an EASI assessment?* | Study Reference Manual |
| *Which visit is Week 16 and what is its window?* | Study Reference Manual (from the protocol SoA) |
| *How do I register a screen failure or request a kit?* | IRT Manual (Axion IRT) |
| *An SAE happened — who do I call and what form do I fax?* | Safety Reporting Manual |
| *Where does the EASI region score go, what fires if I mistype it, and who signs it?* | **This manual** |

The EDC manual owns **the transit of a result from source into the database, and its integrity
thereafter.** It does not own the clinical act, the transaction, or the safety notification. This
boundary must be stated in the document's own §1.3, because the most common site failure mode is a
coordinator looking for assessment instructions in the EDC manual, not finding them, and inventing
something.

### 1.2 Why this seam matters legally

The protocol is an IRB-approved document; changing it requires an amendment. The EDC manual is an
operational document; the sponsor revises it whenever the database build changes. If assessment
methodology lived here, the sponsor could silently change how an endpoint is measured by reissuing a
user guide. That is why methodology lives in the protocol and the SRM, and why this manual may
describe the *shape of the field* but never the *meaning of the measurement*.

### 1.3 What may never appear in the EDC manual

- Anything that changes what a protocol assessment means or when it happens.
- Instructions that would let a site enter data the source does not support ("if the SCORAD wasn't
  done, estimate from EASI" — never).
- Any statement implying that EDC entry constitutes SAE reporting. The Safety Reporting Manual is
  explicit that it does not; this manual must echo that in its own words.
- Screenshots of the IRT transaction flow. The randomization eCRF is read-only and auto-populated;
  the manual describes the *integration*, not the *transaction*.

---

## 2. Regulatory grounding — the "why" behind every rule in the manual

A site user guide that only says *click here* trains button-pushers. A site user guide that explains
why the button behaves that way trains people who can reason when the software surprises them. Each
of the following bodies of regulation produces at least one visible feature of the manual.

### 2.1 21 CFR Part 11 — Electronic Records; Electronic Signatures

Part 11 is the reason the system behaves in ways that feel obstructive.

**§11.10(a) — validation.** The sponsor must show the system does what it purports to do. Practical
consequence for the site: **the site may not modify the system, use an unvalidated browser, or work
around the software** by keeping the "real" data somewhere else. If the software will not accept a
value, that is a finding to escalate, not a problem to route around.

**§11.10(e) — the audit trail.** Secure, computer-generated, time-stamped audit trails that record
the operator entry and actions that create, modify, or delete records; record changes must **not
obscure previously recorded information**; the audit trail must be retained at least as long as the
record and be available for review and copying.

This single clause generates three manual sections:
- Nothing is ever deleted. A "deleted" record is flagged deleted and remains visible in the trail.
- Changing a saved value requires a reason for change. The system enforces it; the manual must
  explain that the reason is the *record*, not a nuisance.
- The site cannot edit the audit trail. Not "should not" — cannot. There is no privilege in the
  system that exposes it. The manual should say so plainly because coordinators occasionally ask.

**§11.10(d) and (g) — access controls and authority checks.** System access limited to authorised
individuals; authority checks so that only authorised individuals can use the system, sign records,
and perform the operation at hand. This generates: account request through the CRA, training
prerequisites before activation, role-based privileges (only a delegated investigator sees the
causality field as editable), prompt deactivation on departure, and periodic access review.

**§11.10(i) — training.** Persons who develop, maintain, or use the system have the education,
training, and experience to perform their assigned tasks. The manual states the prerequisite chain:
protocol training → GCP currency → delegation log entry → EDC training → account activation.

**§11.100(a) and §11.200 — signature uniqueness and components.** Each electronic signature is unique
to one individual and not reused or reassigned; a non-biometric signature uses at least two distinct
identification components. This is the whole basis of the **prohibition on credential sharing**, and
the reason the manual must state, in terms too blunt to be misread, that entering data under another
person's login is a falsification of the record even when the data are correct.

**§11.50 — signature manifestations.** The signed record must display the printed name of the signer,
the date and time of signing, and the meaning of the signature. The manual should reproduce the
signature manifestation block as a mock screen so the PI sees exactly what will be stamped onto the
casebook.

### 2.2 ICH E6(R3) §3.16 — Data handling; §4.9 — Records and computerised systems

E6(R3) restructured the data-governance expectations and pushed them earlier in the lifecycle. The
relevant themes for a site manual:

- **Data integrity across the data lifecycle**, from capture through transformation to reporting.
  The site is the first link. A value that is wrong at entry is wrong in the CSR.
- **Traceability of data to source.** There must be a documented path from the reported value back to
  the origin. This is why the manual devotes a section to *what is source for each form*, and why
  the eCRF-by-eCRF section repeatedly says "enter from the worksheet in front of you".
- **Computerised systems used in the trial should be fit for purpose, validated, and have controls
  proportionate to risk**, with the investigator retaining control of the records generated at the
  site. Site-level consequence: the investigator must be able to access, review, and retain the
  casebook — hence the section on the post-lock certified copy.
- **Blinding integrity in systems.** E6(R3) expects the system to protect the blind. This study is
  double-blind with sponsor-level blinding, so the manual must say which fields would break the
  blind if entered (kit number is fine; a lab result that reveals assignment is not an issue here,
  but an unblinding event must be recorded without recording the assignment).

### 2.3 ALCOA+ — the working vocabulary of a data query

Every query the site receives is, underneath, an ALCOA+ complaint. The manual should say this once,
explicitly, with the mapping:

| Attribute | What it means at the keyboard | The query it prevents |
|---|---|---|
| **A**ttributable | Your login, your entry; delegation log current | "Data entered by an individual not on the delegation log" |
| **L**egible | Verbatim terms spelled out, no site shorthand | "Please clarify the abbreviation 'SOB'" |
| **C**ontemporaneous | Entered within 5 business days of the visit | "Entry date is 41 days after visit date; please explain" |
| **O**riginal | From source, never from memory or another eCRF | "Value differs from source document at monitoring" |
| **A**ccurate | Right value, right unit, right precision | "Weight 68 recorded; source shows 68.4 kg" |
| **C**omplete | Every required field, or a documented reason | "Item 7 of DLQI blank — was it left blank by the participant?" |
| **C**onsistent | Same event, same dates, everywhere it appears | SAE date in EDC ≠ date on the SAE form |
| **E**nduring | The record survives; nothing overwritten | Why the audit trail cannot be edited |
| **A**vailable | Retrievable for monitoring, audit, inspection | The CRA's read-only account, the post-lock copy |

### 2.4 FDA guidance on electronic source data in clinical investigations

The 2013 guidance is the reason the manual must be precise about a distinction most coordinators
have never had explained: **when is the eCRF the source?**

Three patterns exist at Site 1047 in this study:

1. **Transcribed data.** The result exists first somewhere else — a paper EASI worksheet, the
   Modernizing Medicine EMA chart note, the ECG tracing, the pharmacy accountability log. The eCRF is
   a transcription; the original document is source and must be retained and available to the CRA.
2. **Direct data entry (DDE).** The result is first captured in the eCRF and exists nowhere else. If
   the coordinator types the vital signs straight from the monitor into Veriscribe with no worksheet
   in between, **the eCRF field is the source record.** The guidance's consequences follow
   immediately: it must be entered contemporaneously, the audit trail is the only correction history
   that exists, and there is nothing for the CRA to verify it against — so accuracy at first entry
   is the whole control.
3. **Electronic transfer from another system.** Central lab results from Meridian, eDiary data from
   DayLog, randomization and kit assignment from Axion IRT. The originator's system is source; the
   EDC holds a copy; **the site cannot correct these fields** and must go back to the originating
   vendor.

The manual must tell the site which pattern applies to each form, because the correction pathway is
different in each case. This is one of the highest-value sections in the document and is almost
always missing from real site manuals.

### 2.5 CDISC CDASH and SDTM — why the forms look like that

Coordinators routinely ask why the AE form wants a verbatim term *and* separate onset date fields
rather than a free-text narrative, or why "not done" needs a reason code instead of a blank.

The answer is that the eCRF is the front end of a submission pipeline:

- **CDASH** (Clinical Data Acquisition Standards Harmonization) defines standard collection fields —
  what to ask the site for, in what form. It is why AE forms across every sponsor look broadly alike:
  `AETERM`, `AESTDAT`, `AEENDAT`, `AESEV`, `AEREL`, `AESER`, `AEACN`, `AEOUT`.
- **SDTM** (Study Data Tabulation Model) is the submission structure the FDA receives. CDASH fields
  map into SDTM domains: AE → the AE domain, concomitant meds → CM, vital signs → VS, labs → LB,
  questionnaires → QS, exposure → EX.
- Consequences the site actually feels:
  - **One row per event.** SDTM is one record per observation. "Rash and fever" in one AE record has
    no valid SDTM representation, which is why the manual insists on splitting.
  - **Coded, not free text.** Severity and causality are controlled terminology, not prose.
  - **Reason codes rather than blanks.** A blank in SDTM is indistinguishable from a missing
    transfer. A "not done — participant declined" is analysable.
  - **Structured dates.** `DD-MMM-YYYY` with partial-date rules, because SDTM stores ISO 8601 and a
    partial date must be representable as `2023-11` rather than lost.
  - **Verbatim preserved.** Medical coding (MedDRA for AEs, WHO-DD for medications) happens
    downstream at the sponsor; the verbatim term is retained forever. The site's job is a codable
    verbatim, not a code.

Framing CDASH/SDTM this way converts a dozen arbitrary-seeming rules into one rule the coordinator
can reason from: *the form is a data structure, not a note.*

---

## 3. Concepts the manual must teach before it teaches the software

These are the five explanations that determine whether the rest of the manual lands. Each gets a
short, prominent subsection near the front.

### 3.1 Source versus eCRF, and when the eCRF becomes source

Covered above (§2.4). The manual states the three patterns, gives the Site 1047 examples, and adds
the practical test: **"If Veriscribe vanished tonight, could I reconstruct this value from paper or
another system? If no, the eCRF is the source."** That test is memorable and correct.

It must also address the reverse error: sites that print the eCRF and file it as "source". A printout
of a transcription is not a source document; it is a second-generation copy of a transcription, and
it invites exactly the discrepancy it was meant to prevent.

### 3.2 Why the audit trail cannot be edited

The manual explains: the audit trail is written by the system, not by users; there is no site-level or
sponsor-level privilege that can alter it; it captures old value, new value, user, UTC timestamp, and
reason for change; it is exported at lock and retained with the record. Then the pivot the coordinator
needs: *this is protective*. The audit trail is the only thing standing between a coordinator and an
allegation that they changed a value to make a participant look eligible. A clean trail with an honest
reason for change is a defence. An unexplained overwrite is a finding.

The manual should include the most common site anxiety and defuse it: **entering a wrong value and
correcting it is not a deviation.** It is normal. What is a finding is correcting it without an honest
reason, or correcting it to match something other than source.

### 3.3 What an edit check is, and the three kinds

An edit check is a rule that runs against entered data and, when violated, raises either a hard stop,
a warning the user must acknowledge, or an automatic query. The manual must classify them because the
right response differs:

1. **Univariate (within-field).** Range, format, precision, allowed values. *"Systolic BP 400 mmHg is
   outside the plausible range 60–260."* Almost always a typo. Response: check source, correct.
2. **Cross-form (within-visit).** A relationship between two forms at the same visit. *"vIGA-AD = 1
   recorded but the rIGA sub-question is blank."* *"EASI total 22 but BSA involvement 4% — these are
   mutually implausible."* Response: usually one of the two forms is wrong; source resolves it.
3. **Cross-visit (longitudinal).** A relationship across time or against a fixed anchor. *"AE onset
   date precedes the informed consent date."* *"Dosing recorded at Week 24, where no dose is
   scheduled."* *"Weight at Week 24 differs from Screening by 22 kg."* Response: often a real
   protocol event needing explanation, not just a typo — and often a deviation that must also go on
   the deviation log.

The manual must also distinguish **firing time**: some checks run on field exit, some on form save,
and some overnight in a batch when the related form arrives. A coordinator who saves a clean form and
finds three queries the next morning has not done anything wrong; the batch simply ran.

### 3.4 The query lifecycle, and why an open query blocks lock

Lifecycle: **Opened → Answered → Closed** or **Re-queried → Answered → Closed**, with a fourth state,
**Cancelled**, when the query was raised in error.

The reason an unanswered query blocks database lock is not administrative fussiness. A query is a
documented statement that the sponsor does not currently believe a value in the regulatory record is
correct or explained. Locking a database with that statement outstanding means submitting data the
sponsor has itself flagged as questionable. The manual should say it that way. It also explains why
"the query is about a participant who withdrew a year ago" is not a reason to skip it.

The manual also distinguishes **system queries** (auto-generated by edit checks) from **manual
queries** (raised by the CRA during SDV, or by the data manager during review, or by the medical
monitor during medical review). Manual queries are frequently about *judgment*, not typos, and require
a different kind of answer.

### 3.5 Why the investigator signature is a regulatory act

The PI's electronic signature on a casebook is legally equivalent to a handwritten signature under
Part 11 §11.2. The PI is attesting that they have reviewed the data, that the data accurately reflect
the participant's source records and the conduct of the visit, and that any discrepancies were
resolved. This is downstream of the 1572 commitment. The manual must state:

- The signature is at **casebook level** (all forms for the participant, or a defined visit set),
  applied after queries on those forms are resolved — otherwise the PI is attesting to data that the
  sponsor has already said it disputes.
- The system requires **MFA re-authentication at the moment of signing**, satisfying §11.200's
  two-component requirement.
- **No one signs for the PI.** Not the Sub-I "because Dr. Okonkwo is on vacation" — a delegated
  Sub-I may sign under their own credentials for their own participants if the delegation log
  permits, which is a different thing from signing *as* the PI. Not the coordinator, ever, under any
  circumstance, including with the PI's verbal permission. This is the single most serious
  falsification risk in the whole EDC workflow and deserves a box.
- A signature is **broken** by any subsequent data change on a signed form, and must be re-applied.
  Sites often do not know this and leave casebooks unsigned after a late correction.

---

## 4. Section-by-section plan for the manual

### 4.1 Front matter (cover, version history, purpose, scope, support)

Cover carries: system name and version (Veriscribe EDC v9.2), study identifiers (20210143 /
NCT05651711 / EU CT 2022-501538-44), manual version 3.0 and date 11-DEC-2023, preparer (Veriscribe
Data Systems with Harborlight Clinical Research data management), distribution, confidentiality.

Version history should be *narrative*, showing that the manual tracks the database build: v1.0 at
go-live, v2.0 adding the FASS/HASS conditional logic and eDiary compliance report, v3.0 aligning to
Protocol Amendment 3. Realism cue: a manual version dated **11-DEC-2023**, twelve days after the
protocol amendment (29-NOV-2023) and three days after SRM v5.0 (08-DEC-2023), is the correct
sequencing and quietly demonstrates a functioning document-control chain.

Support contacts: Veriscribe helpdesk (24/7) for system faults and access; HCR data management for
data questions; the CRA for study-conduct questions. The manual should give a **routing table**,
because sites call the wrong number constantly.

Browser and system requirements, and the **maintenance window** — an availability statement is a
Part 11-adjacent operational commitment and also a plot device: a coordinator who plans a Friday
evening catch-up session into the maintenance window loses the evening.

### 4.2 Access and security

Sequence: request via the CRA → training prerequisites verified → account provisioned → activation
email → first login and password set → MFA enrolment → role assignment from the delegation log.

Content beats: password policy; MFA method and backup codes; session timeout with unsaved-data
consequences; the credential-sharing prohibition with the falsification framing; the offboarding
window; the periodic access review that the site must actually respond to (a site that ignores the
review and leaves a departed coordinator active generates a finding at the close-out visit).

Role matrix is essential and should map to the Site 1047 delegation log: who can enter, who can
enter *and* sign, who is read-only. Alonzo Vega's exclusions (not delegated for eligibility
determination, causality, or EASI/vIGA-AD) must be visible in the role matrix, because the system
enforces them and a coordinator will otherwise think the software is broken.

### 4.3 Navigation with rendered mock screens

Four screens, each with an explanatory key underneath:

1. **Site dashboard** — participant list, status icons, open query counts, overdue-entry alerts,
   metrics strip.
2. **Participant casebook** — the visit folder grid, per-visit completion state, signature state.
3. **Visit folder** — form list for one visit with per-form status.
4. **A form** — header, fields, the save/verify bar, query flags inline.

Design principle for the mocks: they must be *ugly in the right way*. Real EDC systems have cramped
labels, redundant confirmations, and status legends nobody can remember. A too-clean mock reads as
marketing. Status icons and colour conventions get their own legend table, because the manual's most
consulted page after go-live is the icon key.

### 4.4 General data entry rules

- **The 5-business-day timeline** from visit date. Must be *stated and justified*: contemporaneity
  under ALCOA+, sponsor's ability to detect safety signals across 151 centres in near-real time, DMC
  review cycles, and the practical fact that memory degrades. Exceptions: labs and eDiary arrive on
  vendor schedules; SAEs go to safety within 24 hours regardless of the eCRF timeline.
- What **"complete"** means: every required field populated or explicitly marked with a reason code;
  form saved; no unaddressed hard-stop check; not the same as "clean" (no open queries) or "signed".
  A three-state model — Entered / Clean / Signed — is worth making explicit.
- Required-field convention, partial dates, unknown/not-done conventions with mandatory reason,
  units, decimal precision, date format enforcement.
- **Entered from source, never from memory.** Give the failing scenario concretely: reconstructing
  Tuesday's vitals on Friday from what the coordinator remembers is fabrication, even if the numbers
  turn out right.

### 4.5 eCRF-by-eCRF completion guidelines — the core

Uniform template per form so the coordinator can navigate by shape:

> **Purpose · Completed at · Source · Field-by-field · Edit checks that fire · Common errors**

Coverage must be complete against the SoA. Forms and the specific teaching point each carries:

| Form | The one thing this entry must teach |
|---|---|
| Informed Consent | Date *and time*; version; consent precedes every procedure — the check that enforces it |
| Eligibility Criteria | Every criterion answered Y/N individually; any failing answer blocks randomization |
| Demographics | Collected categories, why they are structured, "not reported" versus blank |
| Medical History / AD History | Ongoing versus resolved; the ≥12-month AD duration link to inclusion |
| Randomization | **Read-only, auto-populated from Axion IRT.** Explain the integration and the latency |
| Vital Signs, Physical Exam, Weight/Height, ECG | Units, precision, abnormal→clinically significant→AE chain |
| **EASI** | Four-region grid; area score + four sign scores per region; **site enters components, system calculates the total**; the site never types a total |
| **vIGA-AD / rIGA** | The conditional rIGA question that appears only when vIGA-AD = 1 — dynamic form behaviour explained generally, since FASS/HASS and others behave similarly |
| BSA, SCORAD, FASS, HASS | Conditional presence (FASS/HASS only if involved at baseline); SCORAD's mixed investigator/participant components |
| DLQI, POEM, HADS | **Who enters participant-completed questionnaires** and what to do with a missing item — the single most-asked question at every site |
| **eDiary / ePRO** | Data flow from DayLog; **read-only at site, uncorrectable**; the compliance report; what to do when a participant says they entered a wrong number |
| Study Drug Administration | Kit numbers, injection times and sites, observation period, the two-injection structure |
| Concomitant Medications | Indication mandatory; start/stop; ongoing checkbox; WHO-DD coding downstream |
| Adverse Events | Verbatim discipline; one event per record; causality restricted to PI/Sub-I; serious Y/N and the link to the 24-hour route |
| Protocol Deviations | What the site enters versus what the CRA logs |
| Rescue Therapy | The NRI/WOCF consequence — why this form is analytically explosive |
| Study Drug Discontinuation / Study Completion-Discontinuation | Two different things; stopping drug ≠ leaving the study |
| Laboratory | Which fields the site enters (collection date/time, not-done reason) versus what arrives from Meridian |
| Comments | When to use it and, more importantly, when not to |

The EASI and eDiary entries deserve the most space. EASI because the "enter components, not totals"
rule is the difference between a clean primary endpoint and a data-management catastrophe; eDiary
because "I can't fix it" is emotionally intolerable to a good coordinator and needs a real
explanation, not a shrug.

### 4.6 Edit checks and queries

Three check types with study-specific examples. The examples must be *this study's*, not generic:
EASI <16 at Screening against inclusion criterion 4; AE onset before consent; dosing at Week 24;
vIGA-AD 2 with rIGA answered; eDiary compliance below threshold at Day 1; Week 2 visit outside ±3
days.

Query lifecycle diagram; the 3-business-day response target; and the heart of the section — **worked
examples of good and bad query responses**. A bad answer ("Confirmed") and a good answer (states what
was checked, against what source, what the corrected value is, and why) side by side, three or four
times, teaches more than a page of principles.

Then: manual queries from the CRA and data management, and what to do when the site *disagrees* with
a query — a real situation the manual must legitimise, because coordinators otherwise either capitulate
and change correct data, or ignore the query.

### 4.7 Corrections and the audit trail

Mechanics of changing a saved value; the mandatory reason-for-change; the reason-code list plus free
text; nothing is deleted; how a deleted record displays; what the audit trail viewer shows and who can
see it; the effect of a change on a signed form.

### 4.8 SAE and EDC reconciliation

Both routes, both required, neither substitutes. Quarterly reconciliation listings, who works them at
Site 1047, and the four discrepancy archetypes: in EDC not in safety database; in safety database not
in EDC; onset/resolution date mismatch; verbatim term mismatch. Cross-reference the Safety Reporting
Manual by name and do not duplicate the SAE form.

### 4.9 Investigator electronic signature

Covered in §3.5 above; in the manual it becomes a procedural section with a mock signature screen, the
manifestation block, the re-authentication prompt, and the "signature broken by subsequent change"
rule.

### 4.10 Reports and metrics

Reports the site can run; the KRIs the sponsor watches (entry lag, open-query ageing, query rate per
100 forms, overdue signature, eDiary compliance, deviation rate); and the site-comparison view. The
manual should be honest that these metrics drive monitoring intensity — a site with an ageing query
backlog gets more visits and a longer close-out. That is useful pressure, and true.

### 4.11 Downtime procedure

Paper backup worksheets, where they live, what to do during an outage, the 24-hour catch-up rule after
restoration, and the entry-date/visit-date distinction that makes catch-up entries look late in the
audit trail (they will; document why).

### 4.12 Database lock

Soft lock / freeze / hard lock; the site's pre-lock obligations checklist; what "final" means; how a
post-lock change happens (it is possible, and it is expensive and formal); the certified copy the
investigator retains under E6(R3) record-retention expectations.

### 4.13 Appendices

- **A** — eCRF index by visit (must reconcile exactly to STUDY_FACTS §5)
- **B** — field-convention quick card (printable)
- **C** — query-response cheat sheet
- **D** — error-message glossary (codes the coordinator will see and what they actually mean)
- **E** — contact card

Appendix A is the appendix that gets printed and taped up. It must be exhaustively consistent with the
SoA or the whole document loses credibility.

---

## 5. Realism notes — the frictions that must be present

A site manual that describes only the happy path is not usable as game source material or as
training. The following frictions should appear naturally in the prose:

- The **batch check that fires overnight**, so a coordinator who left at 18:00 with a clean visit
  arrives to six queries.
- The **read-only field the site is certain is wrong** (a lab value, an eDiary entry) and cannot fix.
- The **participant who tells you at Week 12 that they entered "8" on the itch NRS by mistake back in
  Week 3** — and the correct answer, which is that the diary entry stands and the conversation is
  documented as a note to file, not a correction.
- The **session timeout mid-form**, and the resulting instruction to save often.
- The **maintenance window** colliding with the 5-business-day deadline.
- The **query the site disagrees with**, and the legitimate escalation path.
- The **PI who is in clinic all week** and the signature queue that builds, and why the coordinator
  cannot resolve it by any means other than getting the PI in front of the screen.
- The **date that is partially unknown** on a concomitant medication started "sometime in 2019".
- The **AE verbatim** a clinician wrote as "worsening eczema — likely flare, also itchy and febrile",
  which is three records, not one.

---

## 6. Voice and register

Second person, direct, imperative for procedures. Short sentences for rules; a sentence or two of
reasoning after any rule a coordinator would otherwise resent. No motivational language, no
exclamation marks, no "simply". Boxes reserved for the four things that are genuinely dangerous:
credential sharing, signing for someone else, entering from memory, and treating EDC entry as SAE
reporting. Everything else is body text — if everything is a warning box, nothing is.

Length target 5,000–7,000 words, weighted toward §4.5 (eCRF-by-eCRF), which should be roughly a third
of the document.
