> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Outline & Section Analysis — Clinical Trial Agreement (CTA)

**Target document:** `/Users/dave/code/icf-please/docs/trial_documents/cta.md`
**Study:** ROCKET-Horizon · Protocol 20210143, Amendment 3 (29-NOV-2023) · NCT05651711 · EU CT 2022-501538-44
**Parties:** Meridian Biotherapeutics, Inc. (Sponsor) · Cascade Dermatology & Clinical Research, LLC (Institution) ·
Miriam A. Okonkwo, MD, FAAD (Investigator)
**Effective Date to be authored:** 12-DEC-2022
**Audience of this outline:** the author of `cta.md`, and any designer who needs to know which
clause in the game can be made to *bite*.

---

## 1. What a Clinical Trial Agreement is, and what it is not

### 1.1 The one-sentence definition

A Clinical Trial Agreement is the **commercial and legal contract** that allocates money, risk,
data, intellectual property, and publicity between the entity paying for a study and the entity
performing it — and *nothing else*.

That last clause matters more than it sounds. Almost everything a person at a research site actually
does on a Tuesday morning is governed by some other document: the Protocol says who is eligible, the
Study Reference Manual says how to score EASI, the Pharmacy Manual says what temperature the
refrigerator must hold, the Safety Reporting Manual says the SAE goes out in 24 hours, the ICF says
what the participant was told. The CTA governs **none of that**. It governs who pays for it, who
owns the resulting data, who gets sued, and who may talk about the results.

The CTA is therefore the only study document in the corpus whose primary reader is not clinical. It
is read by a business manager, a contracts attorney, and a risk officer. It is negotiated by people
who will never see a participant. And it is signed months before anyone is screened — here,
**12-DEC-2022**, two days before the study's global first-participant-first-visit on 14-DEC-2022 and
twenty-five days before Site 1047's own activation on 06-JAN-2023.

### 1.2 What the CTA is *not*

Five negatives worth stating explicitly, because each one is a place where a naive draft goes wrong:

1. **It is not the Protocol.** The Protocol is incorporated by reference as Exhibit A. The CTA must
   never restate a dose, a visit window, an eligibility criterion, or a safety-reporting timeline,
   because the Protocol is amended on its own cycle (here: original 07-OCT-2022 → Amendment 3 on
   29-NOV-2023) and a CTA that duplicates protocol content goes stale the moment it is signed. The
   CTA's job is to say *the Protocol governs, and here is what happens when it changes*.
2. **It is not the Budget.** The Budget is Exhibit B, in `budget.md`. The CTA carries the payment
   *mechanics* — when invoices go out, how many days until payment, what the holdback is, what
   happens on a screen failure — but not the per-visit line items. This split exists so the budget
   can be re-negotiated by amendment to a single exhibit without reopening the indemnity clause.
3. **It is not the IRB submission.** IRB approval is a *condition* in the CTA, not a subject of it.
   The CTA says "you shall obtain and maintain approval"; Keystone IRB's actual approval letter of
   08-NOV-2022 lives in the Investigator Site File.
4. **It is not a Business Associate Agreement**, though it does the work of one for this
   configuration. See §2.4 below.
5. **It is not employment.** Article 16 (Independent Contractor) exists specifically to prevent a
   reading in which the Investigator is Meridian's agent — a reading that would import respondeat
   superior liability onto the Sponsor and, more practically, would compromise the Investigator's
   independent medical judgement over her own patients.

### 1.3 Why this document exists at all in *icf-please*

For the game, the CTA is the document that explains the **structural pressure** on the site. The
coordinator never reads it. But every constraint the coordinator feels — that a screen failure
beyond the second one is unpaid work; that the site is owed money quarterly in arrears at net 45,
so cash arrives roughly five months after the visit; that the site contracted for twelve
participants and enrolled fourteen; that the Site Director keeps asking about enrollment — traces
back to a clause in here. The CTA is the invisible physics of the site.

---

## 2. Regulatory and legal grounding

A CTA is not a free-form commercial contract. A substantial fraction of its content is there because
a regulation requires the Sponsor to obtain a specific commitment, in writing, from the
Investigator. Six anchors.

### 2.1 21 CFR 312.53(c) — the sponsor's obligation to obtain investigator commitments

This is the load-bearing regulation for the whole document, and it is frequently misunderstood as an
*investigator* obligation. It is not. It sits in Subpart D, **Responsibilities of Sponsors**:

> "Before permitting an investigator to begin participation in an investigation, the sponsor shall
> obtain … a signed investigator statement (Form FDA-1572)…"

The 1572 itself carries the investigator's commitments: to conduct the study in accordance with the
protocol, to personally conduct or supervise the investigation, to ensure informed consent is
obtained under 21 CFR 50, to report adverse experiences under 312.64, to read and understand the
Investigator's Brochure, to ensure all associates are informed of their obligations, to maintain
adequate records under 312.62 and make them available for inspection under 312.68, to ensure IRB
review under 21 CFR 56, and to comply with all other requirements of Part 312.

**Why this matters for the CTA's structure:** the 1572 is a commitment to *FDA*, not to Meridian. If
the Investigator breaches the protocol, FDA can act — but Meridian has no contractual remedy against
her from the 1572 alone. So the CTA does two things: (a) it makes execution and maintenance of the
1572 a contractual obligation, so that a 1572 breach is *also* a contract breach the Sponsor can
enforce; and (b) it restates the substance of the 1572 commitments as covenants running to the
Sponsor. This is the reason Article 3 looks repetitive to a clinician. It is not repetition; it is
the conversion of a regulatory duty into a privately enforceable one.

312.53(c) also requires the sponsor to obtain a **curriculum vitae**, a statement of qualifications,
and — critically — the **financial disclosure** information described next.

### 2.2 21 CFR Part 54 — Financial Disclosure by Clinical Investigators

Part 54 requires the sponsor of a covered clinical study to collect and, at marketing-application
time, submit either a certification that no listed financial arrangements exist (**Form FDA 3454**,
signed by the *applicant*) or disclosure of those that do (**Form FDA 3455**, the investigator's
disclosure). The disclosable categories are:

- compensation to the investigator whose value could be **affected by the study outcome**
  (§54.4(a)(3)(i)) — the reason the CTA must state that payment is fair market value for work
  performed and is *not* contingent on results;
- a **proprietary interest** in the tested product (patent, trademark, copyright, licensing
  agreement);
- a **significant equity interest** in the sponsor — for a publicly traded sponsor, holdings
  exceeding **$50,000** in value during the study and for one year afterward;
- **significant payments of other sorts** exceeding **$25,000** from the sponsor, exclusive of the
  costs of conducting the study, during the study and for one year afterward (grants, consulting,
  honoraria, equipment, retainers).

The obligation extends to **sub-investigators and their spouses and dependent children**, and — this
is the clause sites forget — it runs for **one year after study completion**, which is why the CTA
must impose an ongoing update duty rather than a one-time collection. Dr. Okonkwo's disclosure is
negative (per RESEARCH_SITE.md §2), but Dr. Feist, Dr. Nakamura, and NP Vega each owe one too. This
is the content of **Exhibit D**.

### 2.3 ICH E6(R3) §4.5 — the sponsor–investigator agreement

E6(R3) restructured the guideline around the sponsor's and investigator's respective
responsibilities and made the written agreement more explicit than R2 did. Its §4.5 (Agreements)
requires that the sponsor obtain the investigator's/institution's agreement, in writing, covering at
minimum:

- conduct in compliance with GCP, the protocol, and applicable regulatory requirements;
- compliance with data recording, handling, and reporting procedures;
- permitting **monitoring, auditing, and inspection**;
- retention of essential records for the required period and until the sponsor says otherwise;
- financial aspects, documented in an agreement between the parties.

E6(R3) is also the source of two clauses that a 2010-vintage CTA template would not have: the
explicit treatment of **data governance across the data lifecycle** (which is why Article 13 in this
draft is far longer than an old template's privacy clause), and a risk-proportionate framing of
monitoring, which is why Article 14 distinguishes routine notice-based access from immediate
inspection notification.

For record retention, E6(R3) and the EU CTR pull in the same direction — the EU CTR (Regulation
536/2014) Article 58 requires the **clinical trial master file** to be retained for **25 years** —
and the CTA here adopts 25 years globally as a single administrable rule rather than maintaining
different clocks per region. See §4.14 below on why a site's attorney will push back on that.

### 2.4 HIPAA and the business-associate question

Cascade is a covered entity: it is a dermatology practice that bills electronically. Meridian is not.
The instinct is therefore to demand a Business Associate Agreement. That instinct is usually wrong
for a sponsored trial, and the CTA should say why in its own terms:

- A BAA is required when a person creates, receives, maintains, or transmits PHI **on behalf of** a
  covered entity to perform a function *for* that covered entity. In a sponsored clinical trial the
  sponsor is not performing a function for the site; the site is performing research and disclosing
  data to the sponsor for the sponsor's own purposes.
- The lawful basis for the disclosure is instead (a) a **HIPAA research authorization** signed by
  the participant — in this study, embedded in the ICF at v4.0.1 — and/or (b) disclosure of a
  **limited data set** under 45 CFR 164.514(e) pursuant to a **data use agreement**, and/or (c)
  disclosure of **de-identified** data under 164.514(a)–(b), which is not PHI at all.
- The practical result: data leaving Site 1047 for Veriscribe EDC is key-coded to `1047-NNN` with
  dates of birth reduced to year, which is a limited data set at most and arguably de-identified;
  the CTA therefore contains **data-use-agreement covenants** (no re-identification, no contact of
  individuals, downstream flow-down) inside Article 13 rather than bolting on a BAA.
- A BAA *does* become the right instrument in narrow cases — e.g. if the Sponsor's vendor is
  performing a billing or operations function for the site. The CTA should reserve for that
  possibility rather than pretending it cannot arise.

The author should also note the **HHS/OCR-relevant asymmetry**: the site bears the breach
notification duty to individuals under the Breach Notification Rule; the Sponsor's duty in Article
13 is to notify the *site*, quickly enough that the site can meet its own clock.

### 2.5 GDPR Article 28, the EU CTR, and cross-border transfer

ROCKET-Horizon is a 151-centre, 21-country study. Site 1047 is in Portland, Oregon, and has no EU
participants — but the CTA is a global template and the site's data flows into a global database
that is accessed from the EU, so the GDPR articles ride along. The outline must be honest that this
is mostly boilerplate *for this site* while explaining what it would mean elsewhere.

The controller/processor analysis for a commercial trial is contested and the CTA should reflect the
mainstream industry position rather than pretend it is settled:

- **The sponsor is a controller** for the research purpose: it sets the protocol, determines the
  purposes and means of processing, and holds the data for its own regulatory and commercial
  objectives.
- **The site is also a controller**, not a processor, for its own clinical-care and legal-retention
  purposes: it cannot delete a participant's medical record on the sponsor's instruction, which is
  the defining test of processor status. Most EU regulators and the EFPIA position treat sponsor and
  site as **independent (or, less commonly, joint) controllers**, not controller-and-processor.
- Therefore **Article 28 does not squarely apply** to the sponsor–site relationship. Article 28
  applies downstream: Meridian → Harborlight CRO, Meridian → Veriscribe EDC, Meridian → Meridian Central
  Labs, Meridian → Axion IRT, Meridian → DayLog ePRO. The CTA nonetheless commonly carries Article
  28-style covenants — documented instructions, confidentiality of personnel, security measures
  under Article 32, sub-processor controls, assistance with data subject rights, deletion/return at
  end, audit rights — because sponsors want them flowed down regardless of the controller
  characterisation. The CTA should say which theory it adopts and then carry the covenants anyway;
  ambiguity here is a real negotiation risk.
- **Transfer mechanism.** Post-*Schrems II*, EU→US transfers need Chapter V cover. The realistic 2022
  drafting is **Standard Contractual Clauses** (the 2021 modules) plus a transfer impact assessment,
  with the option to rely on the **EU–US Data Privacy Framework** once Meridian self-certifies. For a
  US site sending data to a US sponsor, no Chapter V mechanism is engaged at all — which the CTA can
  say without weakening the global template.
- **EU CTR (Reg. 536/2014)** contributes the 25-year retention rule (Art. 58), the CTIS transparency
  regime, and the requirement that the trial master file be available to inspectors. It also
  contributes the reason the CTA cannot simply promise a participant "your data will be deleted on
  request": Article 17(3)(b)/(c) and (i) GDPR exceptions for public-health and research purposes
  mean erasure is often refused, and the ICF and CTA must be consistent about that.

### 2.6 State law on indemnification — and why governing law is fought over

Two doctrines make indemnity drafting jurisdiction-sensitive:

1. **Anti-indemnity statutes and public policy limits.** Most states will not enforce an indemnity
   for a party's *own* sole negligence unless the intent is expressed in unmistakable terms; some
   refuse it outright in specified contexts. This is why an indemnity clause reads with such
   laborious specificity — "except to the extent arising from the negligence or wilful misconduct
   of the Indemnified Party" — rather than the plain-English version.
2. **Corporate-practice-of-medicine and charitable/sovereign immunity.** Irrelevant here (Cascade is
   a private Oregon LLC, not a state university), but the reason a template must accommodate
   institutions that *cannot* indemnify at all. Public university sites routinely strike the
   reciprocal indemnity in Article 11.3 and substitute a bare statement that they are responsible
   for their own negligent acts to the extent permitted by state law. Cascade has no such excuse and
   will be held to a reciprocal.

**On the choice itself:** the Sponsor's template will propose the sponsor's home state (California)
or Delaware. The site will propose its own (Oregon). The realistic settled outcome for a small
private site with no leverage is the Sponsor's choice; the realistic outcome for a site with
leverage is Delaware as a neutral, or occasionally "the law of the state where the Institution is
located." The document should adopt **Delaware** with an express note that this was a negotiated
point and that Oregon was proposed and traded away — this is exactly the kind of texture that makes
the artefact read as a real contract rather than a template.

Also note what Oregon law contributes even under Delaware governing law: **ORS 12.110(4)**, the
two-year medical-malpractice limitations period, and Oregon's professional-liability landscape drive
the Article 12 insurance figures. Governing law does not displace the law of the place of injury for
tort claims by third parties.

---

## 3. The three-party structure

### 3.1 Why there are three signatures on a two-party contract

The CTA is nominally between Sponsor and Institution — those are the two entities exchanging
consideration. Money flows Meridian → Cascade. Services flow Cascade → Meridian. Dr. Okonkwo is paid by
Cascade, not by Meridian, and receives no separate consideration under this Agreement.

She signs anyway, for four reasons:

1. **Regulatory necessity.** The commitments that 21 CFR 312.53(c) requires the Sponsor to obtain
   are *personal* to the investigator. FDA holds the named investigator on the 1572 responsible.
   Meridian needs those commitments to run to it directly, from her, not filtered through her employer.
2. **Non-delegable duty.** "Personally conduct or supervise" cannot be discharged by an LLC. If
   Cascade were the only signatory and Dr. Okonkwo left the practice, Cascade would still be
   contractually bound to conduct the study while having no one able to perform the non-delegable
   part.
3. **Indemnity and insurance run to her.** Article 11.1 names her as an Indemnified Party. A person
   who is not a party to a contract has, in most jurisdictions, a harder time enforcing an indemnity
   written for her benefit. Her signature makes her a party and removes the third-party-beneficiary
   argument.
4. **Publication and IP.** Article 8's invention-assignment and Article 9's publication rights are
   worthless against an individual who never signed. An academic investigator's publication rights
   in particular are hers, not her institution's, in the ordinary case.

### 3.2 What she is *not* signing up for

The Investigator's signature block should be limited by its own words — she signs "solely to
acknowledge and agree to be bound by Articles 3, 7, 8, 9, 13, and 14" — and she should expressly
**not** assume the Institution's payment, insurance, or indemnity obligations. A site attorney who
lets an individual physician become jointly and severally liable for a corporate indemnity has made
a serious error. The document must carve this out on the face of the signature page.

### 3.3 Who actually reads what

| Reader | Cares about | Reads |
|---|---|---|
| **Coordinator (Priya, Brendan)** | Almost nothing in here. Occasionally the participant stipend amount and the screen-failure cap, because they generate the paperwork. | §6.6, §6.8 |
| **Regulatory Coordinator (Sam)** | 1572/3455 currency, IRB maintenance, records retention. | Art. 3.3, Art. 14, Ex. D |
| **PI (Dr. Okonkwo)** | Publication, subject injury, indemnity, and the personal covenants she signed. | Art. 3, 9, 10, 11 |
| **Site Director (Gregory Tarrant)** | **All of it.** Every article is a line on a risk register or a line in a cash-flow model. | The whole document |
| **Pharmacist (Wen-Li Chao)** | The non-diversion covenant, at most. | §3.6 |

This asymmetry is the design point for the game. The player-coordinator inhabits a world whose rules
were set in a document they have never opened.

---

## 4. Article-by-article analysis

For each article: what it is for, what the standard form says, and — where it applies — **how hard
it is negotiated in practice**, on a 1–5 scale where 5 means "this clause is why the contract took
four months."

### 4.1 Preamble and recitals — negotiation heat: 1

Purely identificatory, but three things must be right or downstream clauses fail:

- **Exact legal names and forms.** "Cascade Dermatology & Clinical Research, LLC, an Oregon limited
  liability company" — not the trade name, not the clinic. If the entity is misnamed, the indemnity
  protects nobody and the invoices are unenforceable.
- **The Study is defined by reference to the Protocol number and NCT number**, so that "the Study"
  is a fixed object even as the Protocol is amended.
- **Recitals are not operative.** A well-drafted agreement puts nothing substantive in the "WHEREAS"
  clauses, and Article 17 should say recitals are incorporated for context only — otherwise a
  recital becomes a warranty by accident.

### 4.2 Article 1, Definitions — heat: 2 (but high consequence)

The most under-appreciated article. Every fight in Articles 7–11 is really a fight about a
definition:

- **"Confidential Information"** — if defined too broadly (everything the Sponsor says), the site
  cannot function; too narrowly (only what is marked), and oral disclosures at the SIV leak.
  Standard compromise: marked-or-reasonably-understood-to-be-confidential, with a 30-day
  confirmation duty for oral disclosure. This study's SIV was 21-DEC-2022; the SIV deck is
  Confidential Information under this definition.
- **"Study Data"** — the boundary between Study Data (Sponsor's) and the **medical record**
  (Institution's) is the single most important line in the document. Get it wrong and Meridian
  nominally owns Dr. Okonkwo's patient charts. The definition must expressly exclude the medical
  record and the site's own source documents *as records*, while granting the Sponsor the data
  content recorded in them.
- **"Institution Personnel"** — must be broad enough to capture Alonzo Vega (an FNP, not an
  employee-physician), Marisol Duarte, and any contractor, because the confidentiality and
  indemnity provisions flow through this term.
- **"Investigational Product"** — must include the matching placebo, or the subject-injury clause
  fails to cover a participant injured by a placebo injection procedure.
- **"Personal Data"** — must be defined to bridge HIPAA's "PHI" and GDPR's "personal data," because
  the two do not have the same scope and the Article 13 obligations attach to both.
- **"Affiliate"** — controls who on the Meridian side may receive Confidential Information and Study
  Data without a further agreement, and who may take an assignment under Article 17.1.

### 4.3 Article 2, Scope and order of precedence — heat: 2

Two jobs. First, incorporate the Protocol as Exhibit A and make future amendments automatically part
of the Agreement without re-executing the contract (with a carve-out: an amendment that materially
changes the work *does* require a budget amendment — otherwise the Sponsor can add a visit for
free).

Second, the **order of precedence**, which must be stated because Protocol and CTA *will* conflict:

> Protocol governs on **scientific and medical** matters. Agreement governs on **legal, financial,
> and commercial** matters. Where they conflict on anything else, the Agreement governs.

This split is the correct answer and the one a good site attorney insists on. A naive template says
"the Agreement governs in all cases," which would let a contract clause override a safety
requirement — an unacceptable result. The inverse ("Protocol governs in all cases") is equally bad,
because it would let a protocol's boilerplate publication paragraph override the negotiated Article
9.

### 4.4 Article 3, Institution and Investigator obligations — heat: 2

The regulatory conversion described in §2.1. Contents:

- GCP/regulatory compliance, including ICH E6(R3), 21 CFR 50/54/56/312, and applicable state law.
- **IRB approval and maintenance** — including continuing review (here annual, next due
  19-DEC-2024) and prompt notice of any suspension or withdrawal of approval. The Sponsor needs to
  know within days, not at the next monitoring visit, because an unapproved site enrolling is an
  IND-level problem.
- **The 1572 commitment** — executed before enrolment, updated on any change of sub-investigator or
  facility. The CTA should reference the *duty to update*, which is where sites actually fail.
- **Personnel qualification and delegation** — mapped to the site's delegation log and SOP-021.
- **Enrollment target: 12 randomized, with no guarantee.** This is worth its own paragraph. The
  contracted number is a planning figure, not a covenant; the site does not breach by
  under-enrolling and the Sponsor does not owe payment for unrealised enrolment. What the Sponsor
  *does* get is a right to reduce or reallocate, and the ability to terminate for convenience under
  Article 5. Site 1047 randomized 14 against a target of 12 — a fact the game can use, since it
  means the site over-performed and still has to argue about the last two participants' worth of
  invoices if the cap language is drawn tightly.
- **Non-diversion of Investigational Product** — IP is used only for the Study, only for enrolled
  Study Subjects, never for commercial or personal use, never transferred to a third party. Absolute
  and non-negotiable; ties to 21 CFR 312.61 and to the Pharmacy Manual's accountability regime.
- **Debarment and exclusion representation** — a representation that neither the Institution, the
  Investigator, nor any Institution Personnel is debarred under **21 U.S.C. §335a**, excluded from
  a Federal health care program under **42 U.S.C. §1320a-7** (the OIG LEIE), listed on **SAM.gov**,
  or disqualified under **21 CFR 312.70**. Crucially this is not a point-in-time representation: it
  carries an **ongoing screening and notification duty**, typically within 5 business days of
  knowledge. The consequence is immediate termination under Article 5.4. This clause is short and
  the site should not negotiate it — but the *screening* obligation it implies (monthly LEIE checks)
  is a real operational cost sites routinely overlook when they sign.

### 4.5 Article 4, Sponsor obligations — heat: 2

Sparse in most templates, and sites should push to fatten it. Contents:

- Provide the **Protocol, IB (Edition 6.0, 15-AUG-2023), and Investigational Product at no charge**.
  "At no charge" is doing real work: it forecloses any argument that the site owes for drug, and it
  is the clause the site cites if a Sponsor ever tries to bill for unused kits.
- **Safety information updates** — IB updates, safety letters, SUSAR notifications, and DMC-driven
  changes, provided in time for the site to meet its own IRB reporting duties.
- **Regulatory filings** — the Sponsor holds IND 145,882 and is responsible for CTIS/EU CTR
  submissions, ClinicalTrials.gov registration and results posting.
- **Monitoring** — the Sponsor (through Harborlight) shall monitor. A site should read this as a
  *Sponsor obligation*, not just a right, and should push for reasonable-notice language, because
  monitoring visits consume coordinator time that the budget does not separately compensate.
- What is conspicuously absent from most templates and worth adding: an obligation to **provide the
  IRT, EDC, ePRO, and central-lab systems at no cost**, and to provide central lab kits and courier
  accounts. If it is not in the CTA it is not owed.

### 4.6 Article 5, Term and Termination — heat: 3

The asymmetry is the point and should be visible on the page. The Sponsor may terminate **for
convenience on 30 days' notice**; the Institution generally may not (or may only for cause, or on a
much longer notice). Sites dislike this and mostly lose. What they can win:

- **Wind-down costs.** The site must be paid for work performed through termination *and* for
  non-cancellable commitments reasonably incurred. Without this, a convenience termination leaves
  the site holding staffing costs.
- **Effect on enrolled Study Subjects.** The most important clause in the article and the one with
  actual ethical weight: on termination, participants already enrolled must be **completed or safely
  transitioned**, at the Sponsor's cost, in accordance with the Protocol and the Investigator's
  medical judgement, with IRB notification. A termination clause that lets the Sponsor walk away
  from fourteen mid-treatment participants on 30 days' notice is not merely bad contracting — it is
  a Declaration-of-Helsinki problem, and no IRB would tolerate it.
- **Immediate termination for safety or non-compliance** — no cure period. Available to both parties
  for safety; available to the Sponsor for GCP breach, debarment, or loss of IRB approval;
  available to the Investigator on her independent medical judgement that continuation is unsafe.
  That last limb is the one sites forget to ask for and the one that most protects the PI.
- **Survival.** Articles 7 (Confidentiality), 8 (IP), 9 (Publication), 10 (Subject Injury), 11
  (Indemnification), 13 (Data Protection), 14 (Records), and the payment obligation for accrued work
  survive. Getting the survival list wrong is a classic drafting failure — an indemnity that expires
  with the contract is no indemnity at all, since claims surface years later.

### 4.7 Article 6, Budget and Payment — **heat: 5 (jointly with Article 11)**

This is where the site's attention actually is. All figures from RESEARCH_SITE.md §6 and immovable:

| Term | Value | Why the site cares |
|---|---|---|
| Overhead | **28%** on per-visit clinical procedures, not on pass-throughs | Below ~25% a private site loses money; academic sites run 25–30%+ |
| Schedule | **Quarterly, in arrears** | Combined with net 45, cash arrives ~5 months after the visit |
| Terms | **Net 45** from receipt of a *clean* reconciliation | "Clean" is the weasel word — see below |
| Holdback | **10%**, released within 60 days of final database lock and close-out | Site is financing 10% of the study for ~2 years |
| Startup fee | **$9,500 non-refundable**, invoiceable at execution | The only money before enrolment; funds regulatory start-up labour |
| IRB fees | Pass-through **at cost, no markup** | Keystone's fees; site earns nothing, so it wants fast reimbursement |
| Screen failures | Actual procedures performed, **capped at 2 per randomized participant** | At a 39% screen-fail rate (9 of 23) against 14 randomized, the cap (28) is not binding here — but it would be at a worse site |
| Stipend | **$125 per completed visit** + parking/travel, paid by site, invoiced as pass-through | Site fronts the cash; 12 visits × 14 participants ≈ $21,000 outlaid before reimbursement |

The negotiated points, honestly stated:

- **"Clean reconciliation" is the single most abused phrase in CTA payment clauses.** If the Sponsor
  alone decides what is clean, the net-45 clock never starts. The site should demand a **deemed-clean
  provision**: the reconciliation is deemed accepted unless the Sponsor disputes specific line items
  in writing within a stated period (15 business days is normal), and undisputed amounts are paid
  regardless of the dispute. The draft should include this, because its absence is what turns a
  net-45 contract into a net-120 reality.
- **Quarterly vs monthly.** Sites want monthly. Sponsors offer quarterly. Small sites lose this.
- **Holdback size and trigger.** 10% is standard. The fight is over the *trigger*: "final database
  lock" is a Sponsor-controlled event that can be years away — here, last-participant-last-visit was
  27-AUG-2024, and lock would follow. Sites push for release on site close-out instead. Cascade did
  not win that.
- **Interest on late payment.** Sites should ask for 1–1.5%/month. Most templates omit it. Include a
  modest late-payment provision so the artefact has something for a player to notice.
- **Fair market value representation.** Required by the compliance architecture around Part 54 and
  AKS: compensation reflects FMV for bona fide services actually rendered, was negotiated at arm's
  length, and is **not determined in a manner that takes into account the volume or value of
  referrals or other business generated** between the parties.
- **No-inducement / anti-kickback.** The **federal Anti-Kickback Statute (42 U.S.C. §1320a-7b(b))**
  makes it a felony to knowingly offer or receive remuneration to induce referrals for items or
  services reimbursable by a Federal health care program. Research payments are not exempt merely
  because they are research payments. Hence the representation that no payment is intended to induce
  prescribing, purchasing, or recommending any Meridian product. Coupled with **§6002 of the ACA, the
  Physician Payments Sunshine Act (42 U.S.C. §1320a-7h)**: Meridian must report payments to covered
  recipients — physicians and teaching hospitals — to CMS **Open Payments**. Research payments made
  to the *institution* and named to the PI are reportable under the research category. The CTA must
  therefore (a) tell the Investigator she will be named, (b) require the site to supply NPI and
  license data for reporting (Dr. Okonkwo NPI 1730294856), and (c) allow a 45-day pre-publication
  review window under the Open Payments dispute process. Sites are frequently surprised by (a).
- **Taxes and currency.** USD; site is responsible for its own taxes; the Sponsor may withhold if
  law requires; W-9 on file (EIN **84-3319027**). Trivial for a US site, but the global template
  carries VAT and withholding language and the draft should show it.

### 4.8 Article 7, Confidentiality — heat: 3

Mechanically standard, with three points that matter:

- **The four standard exclusions** — publicly known through no fault; independently developed
  without use of the Confidential Information; rightfully received from a third party without
  restriction; already known before disclosure — plus the **compelled-disclosure** limb (required by
  law or a Regulatory Authority, with notice and minimum necessary scope). These exclusions exist to
  keep the clause enforceable; without them it is an unbounded restraint.
- **Term.** Sponsors want perpetual; sites want a finite tail. Common landing: **10 years from
  disclosure**, with **trade secrets protected for as long as they remain trade secrets** and
  Personal Data protected indefinitely. Perpetual confidentiality on everything is unadministrable —
  the site cannot know in year 20 which binder is still restricted.
- **The safety carve-out is non-negotiable and must be explicit:** nothing in the article prevents
  disclosure to the IRB, to a treating physician, or to a Study Subject where necessary for that
  Subject's medical care or safety, or the discharge of the Investigator's professional duty. A
  confidentiality clause that could be read to gag a physician about a participant's own safety
  information would fail IRB review and would probably be void as against public policy.
- **Return or destruction on termination**, with the standard carve-outs: one archival copy for
  compliance, materials required to be retained under Article 14 (which is most of it — the 25-year
  rule effectively swallows the destruction duty), and routine backup copies.

### 4.9 Article 8, Intellectual Property — heat: 4

Second-hottest clause after indemnity and money. The structure:

- **Study Data and results are the Sponsor's**, exclusively, including all CRFs and the content
  recorded in them. No serious negotiation; the Sponsor is paying for the data and needs it for a
  marketing application.
- **Inventions.** Sponsor owns Inventions that arise from performance of the Study, from use of the
  Investigational Product, or from use of Confidential Information. The negotiation is entirely
  about the **breadth of the trigger**. A Sponsor template says "any invention conceived during the
  Term by Institution Personnel." A site attorney strikes that and insists on a nexus: *arising from
  the conduct of the Study or the use of the Investigational Product or Confidential Information*.
  Without the nexus, an unrelated device Dr. Okonkwo invents in her clinic on a Saturday becomes
  Meridian's. This is a real and frequent fight, and the draft should land on the nexus formulation.
- **Improvements.** The named-in-the-brief hardest sub-issue. If Dr. Okonkwo devises a better
  injection technique, a new dosing schedule, or a biomarker method while using rocatinlimab, is
  that an "improvement to the Investigational Product" (Sponsor's) or an independent invention
  (hers)? The workable line: inventions **specific to the Investigational Product or its use** are
  the Sponsor's; inventions of general applicability that merely happened to be made during the
  Study are the Institution's, subject to a Sponsor licence if the Sponsor's Confidential
  Information was used. Sites with real technology-transfer offices fight hard here; a small private
  practice like Cascade will accept a broad clause and should at least secure the licence-back.
- **Institution pre-existing IP retained.** Obvious, always included, and always insufficient on its
  own — hence the improvement carve-out above.
- **The licence-back.** The Sponsor grants the Institution a non-exclusive, royalty-free,
  non-transferable licence to use Study Data and Sponsor-owned Inventions **for internal
  non-commercial research, education, and patient care** only. This is what lets the site use its
  own results in teaching. It should exclude commercialisation and sublicensing.
- **Prompt disclosure duty.** The Investigator shall disclose Inventions in writing within a stated
  period (30 days) and shall cooperate — at Sponsor cost — in filings. Without a disclosure duty the
  ownership clause is unenforceable in practice because the Sponsor never learns of the invention.

### 4.10 Article 9, Publication — **heat: 5 at academic sites, 2 here**

This is the article whose substance is *real*: STUDY_FACTS.md §14 reproduces the actual language
from the ClinicalTrials.gov record, and the CTA must reproduce its substance faithfully. The five
components:

1. **No restriction on discussing results after completion.** The registry statement leads with
   this and the CTA should too — the agreement does not gag the investigator.
2. **A 45-day Sponsor review period** for material discussing trial results, submitted before
   publication or presentation. *Plus a permitted extension* — the record says "typically up to 45
   days and possible extension." The draft specifies **30 additional days where the Sponsor needs to
   file patent applications**, which is the conventional reason an extension is sought and the
   conventional length.
3. **The Sponsor may require removal of Confidential Information.** Note the limit: removal of
   *confidential information*, not removal of unfavourable results. The distinction is the entire
   ethical content of the clause.
4. **Authors have final control and approval of publication content.** This is the sentence that
   makes the clause acceptable to journals and to ICMJE. It means the review period is advisory as
   to content and mandatory only as to timing and confidential material.
5. **The multicentre restriction.** No site-specific publication before the first multicentre
   publication. The standard and necessary addition — which the registry summary omits but every
   real CTA contains — is a **backstop**: the restriction lapses **12 months after Study completion**
   (here, last-participant-last-visit 27-AUG-2024) if no multicentre publication has appeared,
   **whichever is earlier**. Without a backstop the site could be silenced forever by a Sponsor that
   simply never publishes, which is precisely the abuse the ICMJE and the FDAAA results-reporting
   regime were built to prevent.

Add authorship conventions: ICMJE criteria, authorship determined by contribution not by enrolment
volume, and a customary courtesy that high-enrolling investigators are considered for the writing
committee. Note honestly that a site enrolling 14 of 726 participants — about 1.9% — is not
realistically getting a byline on the primary paper, and the clause should not pretend otherwise.

At Cascade specifically this clause is nearly dead letter: a private dermatology practice has no
tenure clock and no publication imperative. The article is hot at academic medical centres and cool
here. The document should still carry it in full, because the game's fiction is that this is the
same global template every site signed.

### 4.11 Article 10, Subject Injury — heat: 4

Distinct from Article 11, and the distinction is worth stating because sites conflate them: Article
10 is a **direct promise to pay medical expenses**, triggered without any third-party claim. Article
11 is an **indemnity**, triggered by a claim against the site. A participant with an infusion-site
reaction invokes Article 10. A participant's lawyer invokes Article 11.

Components:

- **The promise.** Sponsor pays the **reasonable and necessary costs of medical treatment** for a
  physical injury **proximately caused by** the Investigational Product or by a procedure required
  by the Protocol and performed for no reason other than the Study. Both limbs matter: an injury
  from the blood draw at Week 4 is covered even though rocatinlimab did not cause it, because the
  draw was protocol-required. An injury from a chest X-ray ordered for clinical care after an
  indeterminate QuantiFERON is arguably *not*, and the ambiguity is real.
- **The exclusions**, each of which should be drawn narrowly:
  - negligence or wilful misconduct of the Institution, Investigator, or Institution Personnel;
  - failure to follow the Protocol or the Sponsor's written instructions;
  - **natural progression of the underlying disease** — critical here, because AD worsening was the
    single most common adverse event in the study (19.1% on rocatinlimab, 26.7% on placebo) and
    without this exclusion the Sponsor would be paying for every eczema flare in the trial;
  - treatment not required by the Protocol, or concomitant medication given contrary to it.
- **Secondary vs primary payment.** The genuine fight. Sponsors want to pay only what insurance does
  not cover; participants and IRBs prefer primary payment. The ICF language controls what the
  participant was promised, and **the CTA must not promise the participant less than the ICF does**
  — a mismatch between the CTA's injury clause and the ICF's injury paragraph is a finding waiting
  to happen. The article should include an express consistency covenant and a rule that the ICF
  governs as between Sponsor and Study Subject.
- **Notice.** The Institution shall notify the Sponsor promptly (48 hours is typical) of any injury
  it believes may be compensable, and shall not admit liability or settle without consent.
- **No waiver.** Nothing in the Agreement waives any legal right of a Study Subject, including the
  right to seek compensation. This sentence is required by IRBs and by 21 CFR 50.20's prohibition on
  exculpatory language.

### 4.12 Article 11, Indemnification — **heat: 5. The hardest clause in the document.**

Structure:

- **11.1 Sponsor indemnity.** Sponsor defends, indemnifies, and holds harmless the Institution, the
  Investigator, and their respective personnel against third-party claims for personal injury or
  death arising from (a) the administration or use of the Investigational Product, (b) performance
  of the Protocol, or (c) the Sponsor's own negligence or breach.
- **11.2 Exclusions.** Every one of these is negotiated:
  - **negligence or wilful misconduct** of the Indemnified Party — universal, but the fight is over
    *whose* negligence and whether the carve-out is "to the extent" (comparative, site-friendly) or
    "arising from" (all-or-nothing, sponsor-friendly). "**To the extent**" is the site's win and the
    draft should have it, because an all-or-nothing carve-out means a 5%-negligent site loses the
    entire indemnity.
  - **failure to adhere to the Protocol** — the site should insist on qualifying this to *material*
    deviations, because Site 1047 logged 11 deviations (7 visit-window, 2 eDiary, 1 missed PK, 1
    out-of-window lab). If any protocol deviation voids the indemnity, no site is ever indemnified.
    This is a real and important negotiation and the draft should reflect the *material* qualifier.
  - **failure to obtain valid informed consent** in accordance with 21 CFR 50 and the approved ICF.
  - failure to comply with the Sponsor's written instructions or applicable law.
- **11.3 Institution's reciprocal indemnity.** Narrower by design: covers claims arising from the
  Institution's negligence, wilful misconduct, material protocol non-compliance, or breach. Should
  be capped where possible; a private site of 31 staff cannot back an uncapped indemnity, and its
  insurance limits (Article 12) are the practical ceiling regardless of what the clause says.
- **11.4 Procedure.** Prompt written notice; the Indemnifying Party controls the defence and selects
  counsel; the Indemnified Party cooperates at the Indemnifying Party's expense; **no settlement
  that imposes a non-indemnified obligation, admits fault, or fails to include a full release,
  without the Indemnified Party's consent**. That last limb is the one sites forget and the one that
  matters most: without it, Meridian could settle a case in terms that publicly attribute fault to Dr.
  Okonkwo. She should also have the right to retain her own counsel at her own expense, and at the
  Sponsor's expense where a conflict of interest exists between her defence and the Sponsor's.
- **11.5 Survival**, without time limit or with a long tail. Personal-injury claims from a 2023
  exposure can be filed years later. An indemnity that expires with the Term is worthless.

Two further points a good site attorney raises:

- **Interaction with Article 10.** A participant may be an Article 10 payee *and* an Article 11
  claimant. The clauses must not be drafted so that a payment under one is treated as an admission
  under the other.
- **Insurance is not indemnity.** Article 12 is not a substitute for Article 11 and vice versa. A
  sponsor offering "we carry $10M in product liability, isn't that enough?" is offering nothing:
  insurance covers the insured, not the site.

### 4.13 Article 12, Insurance — heat: 2

Rarely fought, occasionally decisive. Figures are invented (see the assumptions log) but should be
plausible for a 2022 US pharma-sponsored Phase 3:

| Party | Coverage | Limit |
|---|---|---|
| Sponsor | Clinical trial / product liability | $10,000,000 per occurrence and aggregate |
| Sponsor | Commercial general liability | $5,000,000 |
| Institution | Commercial general liability | $1,000,000 per occurrence / $3,000,000 aggregate |
| Institution | Professional (medical malpractice) liability | $1,000,000 per claim / $3,000,000 aggregate |
| Institution | Workers' compensation | Statutory (Oregon) |

Plus: certificates of insurance on request, **30 days' written notice of cancellation or material
reduction**, and — the clause sites miss — **tail coverage** if the professional policy is
claims-made, because a claims-made policy that lapses when the practice closes leaves nothing behind.
Self-insurance is expressly permitted for the Sponsor, since large pharma typically self-insures the
first layer.

### 4.14 Article 13, Data Protection and Privacy — heat: 3, and rising

Everything in §2.4 and §2.5 above, expressed operationally:

- **HIPAA authorization** obtained as part of the ICF (v4.0.1); the disclosure to the Sponsor rests
  on it. If a participant revokes, data already collected may be used but no further data collected
  — and the CTA must say so, because a naive revocation clause would require deleting data from a
  locked regulatory database, which is impossible and would corrupt the analysis.
- **Limited data set / de-identification.** Data transmitted to Veriscribe EDC is key-coded to
  `1047-NNN`. The key stays at the site. The Sponsor undertakes not to attempt re-identification and
  not to contact Study Subjects directly.
- **GDPR roles** — independent controllers, per §2.5, with Article 28-style covenants carried
  anyway.
- **Transfer mechanism** — SCCs (2021 modules) with a transfer impact assessment; DPF as an
  alternative once certified; noted as inapplicable to US-only Site 1047 flows.
- **Data subject rights** — access, rectification, restriction, objection, portability, and the
  limits on erasure for research/public-health reasons under Article 17(3). Requests routed to the
  Sponsor's privacy office within a stated period (5 business days) so the Sponsor can meet its own
  one-month clock.
- **Breach notification** — the number to fight over. The Sponsor's template says "promptly." Sites
  should insist on a number and Sponsors will insist that the *site* notify fast. Landing:
  **without undue delay and in any event within 48 hours** of becoming aware, with a defined content
  set (nature, categories and approximate numbers affected, likely consequences, measures taken).
  48 hours is chosen because it leaves the site room inside GDPR's 72-hour Article 33 clock and
  inside HIPAA's 60-day individual-notice clock.
- **Retention** — aligned to Article 14's 25 years, with the acknowledgement that HIPAA's own
  6-year documentation rule and Oregon's medical-record retention rules run in parallel and the
  longest governs.

### 4.15 Article 14, Records, Retention, and Audit — heat: 3

- **25 years.** Aligned to EU CTR Article 58 and ICH E6(R3). Note honestly that this is *much*
  longer than 21 CFR 312.62(c) requires (2 years after marketing approval, or 2 years after
  IND withdrawal) and that adopting the EU figure globally is a Sponsor-convenience choice that
  imposes a real, uncompensated storage cost on a small US site. A well-advised Cascade would have
  asked either for a **storage allowance** or for the right to transfer records to the Sponsor's
  archive at the Sponsor's cost after a shorter period. It appears not to have. That is a good,
  quiet, realistic detail.
- **No destruction without written Sponsor notice.** The operative half of the retention clause: the
  clock is not the site's to run. Sam Oyelaran's SOP-027 has to encode "ask first."
- **Access rights** — the Sponsor and its monitors (Kevin Ostrander, CCRA, of Harborlight) and
  auditors, and any Regulatory Authority, may inspect source documents and facilities. The site
  should require **reasonable advance notice for routine audits** (5 business days is normal) and
  confine access to Study-related records — a monitor is not entitled to browse the practice EMR at
  large, which is why Cascade gives the CRA a **read-only EMR account** rather than the run of the
  system.
- **Immediate notification of a regulatory inspection.** Notice within 24 hours (or immediately on
  the inspector's arrival), the Sponsor's right to be present and to review responses, and provision
  of any Form FDA 483 or inspection report. Dr. Okonkwo has one prior BIMO inspection (2019, NAI),
  which is exactly the history a Sponsor's site-selection team wanted to see.
- **Transfer on closure.** If the site closes or the Investigator departs, records transfer to the
  Sponsor or a designated archive rather than being orphaned.

### 4.16 Article 15, Use of Name — heat: 1

Neither party may use the other's name, logo, or marks in publicity without prior written consent.
Carve-outs: **ClinicalTrials.gov and CTIS registration** (which publish the site's name and address
as a matter of law — Site 1047 is one of the 197 locations in the registry record), disclosures
required by law or regulation, and Open Payments reporting under Article 6. Also worth a line: the
Sponsor may identify the Institution in internal materials and to Regulatory Authorities without
consent.

### 4.17 Article 16, Independent Contractor — heat: 1

Short, and load-bearing for two reasons: it prevents vicarious liability travelling up to the
Sponsor, and it preserves the Investigator's independent medical judgement. It must include an
express statement that **nothing in the Agreement interferes with the Investigator's professional
judgement in the medical care of Study Subjects**, and that no Institution Personnel is an employee
or agent of the Sponsor for any purpose including tax and benefits.

### 4.18 Article 17, General — heat: 2, except governing law (4)

- **Assignment.** Sponsor may assign to an Affiliate or to a successor to the rocatinlimab
  programme; Institution may not assign at all. Standard and correctly asymmetric — Meridian bought the
  asset from Kyowa Kirin (whence "KHK4083") and needs assignability; Cascade's identity is the whole
  point of the contract.
- **Notices.** Full addresses for both parties, with a separate copy to Legal. Practical detail:
  notices to Cascade go to Gregory Tarrant, `g.tarrant@cascadederm-sim.example`, +1 (503) 555-0126.
- **Governing law.** See §2.6. Delaware, without regard to conflicts principles, expressly noted as
  a negotiated point.
- **Dispute resolution.** Escalation to senior executives, then either courts or arbitration. Note
  that arbitration is Sponsor-preferred (confidential, no jury) and that sites sometimes prefer
  courts. Carve out injunctive relief for confidentiality and IP breaches, since damages are an
  inadequate remedy for a leak.
- **Force majeure** — post-2020 templates name epidemic and pandemic expressly, and provide that
  participant safety obligations survive the force majeure suspension. That is the correct, and
  faintly poignant, drafting for a contract signed in December 2022.
- **Severability, waiver, amendment in writing, counterparts and electronic signature, entire
  agreement.** The entire-agreement clause must expressly supersede the prior **CDA** (Exhibit C)
  while preserving confidentiality obligations already accrued under it — otherwise a merger clause
  accidentally extinguishes the CDA's protection of everything disclosed during feasibility.

### 4.19 Signature page

Three blocks, each with printed name, title, signature, date. The Investigator's block must carry
the limiting language from §3.2. Sponsor signatory is an Meridian contracts officer (invented — Meridian's
authorised signatories are not public), not the Study Director.

### 4.20 Exhibits

| Exhibit | Content | Note |
|---|---|---|
| **A** | Protocol, incorporated by reference | Cover sheet only; the Protocol lives in `protocol.md` and is version-controlled independently |
| **B** | Budget, incorporated by reference | Cover sheet pointing to `budget.md`; **do not reproduce line items in the CTA** |
| **C** | Confidentiality acknowledgement; prior CDA superseded | Names the CDA date (invented) and preserves accrued obligations |
| **D** | Financial disclosure obligations under 21 CFR 54; Form FDA 3455 | Lists the four disclosable categories, the covered persons (PI, sub-Is, spouses, dependent children), and the one-year tail |

---

## 5. What the coordinator sees, and what the site director sees

The design point, restated for the game.

**Priya Raghunathan will never open this file.** Nothing in it changes what she does at 07:15 on a
Tuesday. But four of its clauses reach her desk in disguise:

1. The **screen-failure cap** (§6.8) becomes "why does Gregory need the screen-fail worksheets so
   fast?"
2. The **participant stipend** (§6.9) becomes the $125 gift card she hands over and the receipt she
   has to log.
3. The **enrollment target of 12** (§3.5) becomes the number on the whiteboard.
4. The **records retention** duty (Art. 14) becomes Sam's locked file room and the fact that nothing
   is ever thrown away.

**Gregory Tarrant reads all seventeen articles**, and for him the document is a cash-flow model with
a risk register attached. Quarterly in arrears at net 45 with a 10% holdback means that of the
roughly $9,500 + fourteen participants' worth of per-visit revenue, a tenth is unavailable until
some point in 2025 and the rest arrives about five months in arrears. The $9,500 startup fee is the
only money that arrives before a participant is screened. He signed on 12-DEC-2022 and the first
participant was randomized on 24-JAN-2023; the first quarterly reconciliation covering that work
would not be paid until roughly mid-2023.

**Dr. Okonkwo signed a document that makes her personally responsible** for regulatory compliance,
confidentiality, invention disclosure, publication restraint, data protection, and records — and
personally indemnified for third-party claims. If the game ever wants a moment where the PI's
interests and the site's interests diverge, Articles 3, 9, and 11 are where the crack is.

---

## 6. Drafting notes for `cta.md`

- **Register.** "Shall," not "will." Defined terms capitalised throughout and defined on first use in
  Article 1. Numbered articles with decimal sub-sections (`11.2(b)`). Cross-references by number
  ("as set forth in Section 6.4"), used often enough that the document reads as an interlocking
  whole.
- **Length.** 8,000–10,000 words. Article 1 (Definitions), Article 6 (Payment), Article 11
  (Indemnification), and Article 13 (Data Protection) should be the longest.
- **No clinical content.** No doses, no windows, no eligibility criteria. Where a clinical fact is
  needed, cite the Protocol.
- **Every financial figure must match RESEARCH_SITE.md §6 exactly.** The Budget is being authored
  separately as Exhibit B and any drift is a contradiction in the corpus.
- **Do not reproduce the per-visit grid.** Reference Exhibit B.
- **The publication article's substance is real** and must survive intact: 45 days, extension,
  removal of confidential information only, authors' final control, multicentre restriction.
- **Log every invented figure** — insurance limits, governing law, the CDA date, the Sponsor
  signatory, notice periods, the interest rate, the extension length — in
  `assumptions/cta_assumptions.md`.
