> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions Log — `cta.md`

**Document covered:** `/Users/dave/code/icf-please/docs/trial_documents/cta.md`
**Outline:** `/Users/dave/code/icf-please/docs/outline/cta_outline.md`
**Document:** Clinical Trial Agreement CTA-20210143-1047, executed 12-DEC-2022
**Parties:** Amgen Inc. · Cascade Dermatology & Clinical Research, LLC · Miriam A. Okonkwo, MD, FAAD

---

## 0. Provenance summary — what is real and what is invented

**Read this section first.** It is the short answer to "how much of this document can be trusted as
derived from the registry record?"

| Category | Status |
|---|---|
| **Article 9 (Publication) — substance** | **REAL.** The 45-day Sponsor review period, the permitted extension, the Sponsor's right to remove confidential information, the authors' final control and approval of publication content, and the multicentre restriction all reproduce the substance of the actual publication-terms language in the ClinicalTrials.gov record for NCT05651711, as transcribed at STUDY_FACTS.md §14. |
| **Identifiers, parties, dates, financial terms** | **CANON.** Taken verbatim from STUDY_FACTS.md and RESEARCH_SITE.md. Not invented by this document, though most were themselves invented at the canon level. |
| **Regulatory citations** | **REAL.** 21 CFR Parts 11/50/54/56/312, 21 U.S.C. §335a, 42 U.S.C. §1320a-7, §1320a-7b(b), §1320a-7h, 45 CFR 160/164, GDPR, Regulation (EU) 536/2014, ICH E6, Commission Implementing Decision (EU) 2021/914, Forms FDA 1572/3454/3455, the Part 54 thresholds of US$50,000 and US$25,000. These are genuine legal references, used for verisimilitude. Their *application* in this fabricated contract is not legal advice. |
| **Everything else** | **INVENTED.** All notice periods, cure periods, insurance limits, governing law, indemnity carve-outs, retention period, the Sponsor's signatory, the CDA date, the agreement reference number, the interest rate, and the entire clause architecture. |

**Sub-note on the publication clause.** The registry language says "typically up to 45 days and
possible extension" without quantifying the extension, and states the multicentre restriction without
a backstop. This document specifies **30 additional days for patent filing** (Section 9.3) and a
**12-month-after-Study-completion backstop** (Section 9.6(b)). Both were directed by the authoring
brief and are conventional in real CTAs, but neither number appears in the registry record.

**Sub-note on the retention period.** The **25 years** at Section 14.2 was directed by the authoring
brief and is grounded in a real requirement — Article 58 of Regulation (EU) 536/2014 — but it is
substantially longer than 21 CFR 312.62(c) requires of a US site, and adopting it globally is a
drafting choice made for this document.

---

## 1. Preamble, recitals, and cover block

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Cover block | Agreement reference **CTA-20210143-1047** | No reference number exists in canon. Constructed from protocol number + site number so it is self-explaining and cross-referenceable from `budget.md` and any invoice prop. | High |
| Preamble | Amgen Inc. described as **"a Delaware corporation"** | Consistent with the choice of Delaware governing law and with a large US-listed pharmaceutical sponsor. Not stated in canon. | Med |
| Preamble | Cascade described as **"an Oregon limited liability company"** | Canon (RESEARCH_SITE.md §1). Not an assumption; recorded for completeness. | Canon |
| Preamble | Investigator identified by Oregon licence **MD-118472** | Canon (RESEARCH_SITE.md §2). | Canon |
| Recitals | Study described as conducted at **"approximately 151 investigational centres in 21 countries"** | Canon (STUDY_FACTS.md §3). Used in the recitals to make the multicentre publication restriction in Article 9.6 self-justifying on the face of the document. | Canon |
| Recitals | Rocatinlimab described as **"a fully human anti-OX40 (CD134) monoclonal antibody"** | Canon (STUDY_FACTS.md §4). | Canon |
| Recitals closing note | Recitals expressly **non-operative** | Standard commercial drafting; prevents a recital being construed as a warranty. Invented. | High |
| Cover block | Confidentiality legend on the face of the Agreement | Conventional. Invented. | High |

---

## 2. Article 1 — Definitions

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §1.3 "Affiliate" | Control threshold **> 50% of voting securities**, plus a de facto control limb | The most common formulation. Invented. | High |
| §1.5 "Applicable Law" | The specific statutes enumerated | All real citations, but the selection is a drafting choice. Chosen to pre-load the statutes later relied on in §§3.8, 6.13, 13.1, 14.2. | High |
| §1.6 "CRF" | Expressly includes the **audit trail and data clarification records** | Makes Article 14's retention duty reach the EDC audit trail, which matters for an inspection scenario in the game. Invented. | High |
| §1.11 "Institution Personnel" | Deliberately broad — includes contractors, temporary staff, and students | Needed so that confidentiality and indemnity reach Alonzo Vega (FNP), Marisol Duarte (MLT), and Wen-Li Chao (PharmD, 20% FTE), none of whom is a physician employee. Invented. | High |
| §1.15 "Investigational Product" | Expressly **includes the matching placebo** | Without this, Article 10 would not cover a participant injured by a placebo injection or by the injection procedure itself. A real and consequential drafting point. Invented. | High |
| §1.18 "Personal Data" | Defined to bridge **HIPAA "PHI" and GDPR "personal data"** | The two terms have different scope; a single defined term avoids Article 13 having to be written twice. Invented. | High |
| §1.19 "Protocol" | States original protocol **07-OCT-2022** in force at the Effective Date, with Amendment 3 (29-NOV-2023) as the current version | Both dates are canon (STUDY_FACTS.md §1). The two-date construction reflects that the CTA was signed before Amendment 3 existed and that Section 2.3 auto-incorporates amendments. | Canon / High |
| §1.23 "Study Data" | Expressly **excludes the Study Subject medical record as a record**, while granting the Sponsor the Protocol-required data content recorded in it | This is the single most important definitional boundary in the document. Without it, Section 8.1 would purport to transfer Dr. Okonkwo's patient charts to Amgen, which is unlawful under Oregon medical-record law and would be struck by any competent site attorney. Invented, but standard. | High |
| §1.24 "Study Subject" | Includes an individual who **consents but screen-fails** | Necessary for Section 6.7 (screen-failure reimbursement) and Article 10 (a screen failure injured by a screening blood draw) to work. Invented. | High |
| §1.17 "IRB" | Keystone Independent Review Board, IRB00009812, with reliance agreement | Canon (RESEARCH_SITE.md §4). | Canon |

---

## 3. Article 2 — Scope and order of precedence

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §2.3 | Protocol amendments **auto-incorporate** without executing a contract amendment | Universal in practice; otherwise every amendment would require a re-signed CTA. Invented. | High |
| §2.3(a) | Budget renegotiation right where an amendment **materially increases scope** | The site-protective counterpart to auto-incorporation. Without it the Sponsor could add work for free. Invented; a genuine negotiation point. | High |
| §2.3(b) | No Protocol amendment may modify Articles 6–17 | Prevents the Protocol's own boilerplate from overriding negotiated commercial terms. Invented. | High |
| §2.4 | **Split precedence**: Protocol governs scientific/clinical/medical; Agreement governs legal/financial/commercial; Agreement governs residually | Directed by the brief; the split (rather than a flat "Agreement governs") is the drafting a good site attorney insists on, because a flat rule would let a commercial clause override a safety requirement. Invented. | High |
| §2.5 | Notification duty for concurrent trial participation | Site 1047 ran two concurrent AD trials with a shared exclusion tracker (RESEARCH_SITE.md §5), so this clause has an in-world referent. Invented. | Med |
| §2.6 | **Site activation** as an express written condition precedent to screening | Canon records site activation on 06-JAN-2023 (RESEARCH_SITE.md §5), 25 days after execution; the clause explains the gap. Invented. | High |

---

## 4. Article 3 — Institution and Investigator obligations

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §3.3(c) | IRB suspension/withdrawal notified within **2 business days** | Short because an unapproved site enrolling is an IND-level problem. Number invented. | High |
| §3.3(b) | Continuing review stated as **annual** | Canon (RESEARCH_SITE.md §4: annual, next due 19-DEC-2024). | Canon |
| §3.4(c) | Certified-rater requirement carried into the contract | Canon that the Protocol requires DATG rater certification for vIGA-AD/rIGA and EASI (STUDY_FACTS.md §5, RESEARCH_SITE.md §2). Making it a *contractual* covenant is invented. | High |
| §3.5 | Form FDA 1572 updated and re-executed within **10 business days** of any change | Number invented. The substantive duty is real (21 CFR 312.53(c)). | High |
| §3.5 closing | 1572 commitments deemed to constitute **contractual covenants running to the Sponsor** | This is the doctrinal move that converts an FDA-facing duty into a privately enforceable one. Real drafting practice; invented for this document. | High |
| §3.6(a) | Enrolment Target **12 randomized** | Canon (RESEARCH_SITE.md §5). | Canon |
| §3.6(b) | Enrolment Target expressly **not a guarantee, covenant, or minimum** | Directed by the brief. Standard. Invented. | High |
| §3.6(c) | Site may not exceed the target without written approval; Sponsor may cap or close enrolment | Invented. Note the in-world friction: Site 1047 actually randomized **14** against a target of 12 (RESEARCH_SITE.md §5), so this clause implies a written over-enrolment approval exists somewhere in the site file. A deliberate hook. | Med |
| §3.7 | Non-diversion covenant, five limbs, title remaining with the Sponsor | Grounded in 21 CFR 312.61/312.62(a). Drafting invented. | High |
| §3.8(a) | Debarment/exclusion representation across five registers (FDA debarment, OIG LEIE, SAM.gov, 21 CFR 312.70 disqualification, foreign equivalents) | Registers are real; the five-limb formulation is invented. | High |
| §3.8(b) | Screening **not less frequently than monthly** | Invented. Chosen because monthly LEIE screening is the common compliance-programme standard and because it imposes a real, quiet operational cost on a 9-person research division — useful texture. | Med |
| §3.8(c) | Notification within **5 business days** of knowledge | Invented. | High |
| §3.9 | Financial disclosure obligation with a **one-year post-completion tail** | The one-year tail is real (21 CFR 54.4(a)(3)). Placement in the CTA and cross-reference to Exhibit D invented. | High |
| §3.11 | Compliance-reporting duty, **5 business days**, four triggers | Invented. | High |

---

## 5. Article 4 — Sponsor obligations

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §4.2 | Investigational Product supplied **at no charge**; Sponsor bears shipping, return, destruction, and recall costs | The "no charge" phrase is universal; extending it expressly to return/destruction/recall costs is a site-protective addition. Invented. | High |
| §4.3 | Sponsor provides **IRT, EDC, ePRO, central lab kits, and courier account at no cost** | Invented, and deliberately included because most Sponsor templates omit it — the outline flags this as something a site should add. Maps to the canon vendor roster (Axion IRT, Veriscribe EDC, DayLog ePRO, Meridian Central Labs, GlobalRx). No vendor is named in the CTA itself, to avoid coupling the contract to the vendor roster. | High |
| §4.4(c) | Notice of **DMC** recommendations that change Study conduct | Canon that the Study has an independent DMC meeting quarterly plus ad hoc (STUDY_FACTS.md §3). Contractualising the notice duty is invented. | Med |
| §4.6 | Monitoring visits on **not less than 5 business days'** notice | Invented. Consistent with the canon monitoring history (SIV 21-DEC-2022; five IMVs; COV pending). | High |
| §4.6 | Sponsor may monitor "directly or through a contract research organisation" | Canon that Harborlight Clinical Research performs monitoring; the CRO is not named in the CTA so that a change of CRO does not require an amendment. Drafting choice, invented. | High |

---

## 6. Article 5 — Term and termination

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5.2 | Sponsor termination for convenience on **30 days'** notice | The most common figure. Invented. Note the asymmetry — the Institution has no matching convenience right — which is realistic and deliberate. | High |
| §5.3 | Termination for cause on **30 days'** notice with a 30-day cure period | Invented. | High |
| §5.4 | Six Sponsor immediate-termination triggers; a **safety trigger available to the Investigator** on her independent judgement; insolvency trigger for both | The Investigator-side safety trigger is the clause sites most often fail to ask for; included deliberately. Invented. | High |
| §5.5 | **Obligation to complete or safely transition enrolled Study Subjects**, funded by the Sponsor, with IRB notification and continued IP supply | Directed by the brief. Ethically necessary — Site 1047 had up to 14 participants mid-treatment. Invented drafting. | High |
| §5.6(b) | Final invoice within **60 days**; payment for work performed, transition activities, and **non-cancellable commitments** with a mitigation duty | The non-cancellable-commitments limb is a site win and is invented. | High |
| §5.6(c) | Start-up fee expressly **non-refundable in all circumstances** | Canon says "non-refundable" (RESEARCH_SITE.md §6); the express carve-out from the refund-of-advances rule is invented. | High |
| §5.7 | Survival list | Invented. Constructed so that the indemnity, injury, IP, confidentiality, data-protection, and records obligations all outlive the Term — the classic drafting failure being an indemnity that expires with the contract. | High |

---

## 7. Article 6 — Budget and payment

**Every figure in this table marked "Canon" must match `budget.md` exactly.**

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §6.2 | Overhead **28%**, applied to per-visit clinical procedures, **0% on pass-throughs** | Canon (RESEARCH_SITE.md §6). | Canon |
| §6.3(a) | **Quarterly, in arrears** | Canon. | Canon |
| §6.3(b) | Reconciliation submitted within **30 days** of quarter end | Invented. Needed to make the payment clock mechanically determinate. | High |
| §6.3(c) | **Net 45 days** from a clean Reconciliation | Canon. | Canon |
| §6.3(c) | Definition of "clean" (complete, accurate, supported by entered CRF data, undisputed) | Canon uses the phrase "clean quarterly reconciliation" without defining it. Definition invented. | High |
| §6.3(d) | **Deemed-clean at 15 business days**; undisputed portion paid notwithstanding a dispute; 30 days to resolve | Invented, and deliberately included: without a deemed-clean provision the phrase "clean reconciliation" lets the Sponsor stop the net-45 clock indefinitely. This is a site-favourable term and arguably generous for a 9-person site with no leverage — flagged as the one place where the draft is kinder to Cascade than a real 2022 negotiation probably was. | Med |
| §6.3(e) | Late-payment interest at **1% per month** | Invented. Most Sponsor templates omit interest entirely. | Med |
| §6.4 | Start-up fee **US$9,500**, non-refundable, invoiceable at execution, not credited against other amounts | Amount and non-refundability are canon (RESEARCH_SITE.md §6). "Not credited against other amounts" is invented. | Canon / High |
| §6.5 | Holdback **10%**, released within **60 days** of the later of final database lock and site close-out | Canon (RESEARCH_SITE.md §6 says "released within 60 days of final database lock and site close-out"; the "later of" construction is the invented clarification). Four release conditions and the set-off right are invented. | Canon / High |
| §6.6 | IRB fees pass-through **at cost, no mark-up, no overhead**; direct-invoice carve-out | Canon (at cost, no markup). The no-overhead statement and the direct-invoice carve-out are invented. | Canon / High |
| §6.7 | Screen failures at actual procedures performed, capped at **2 per randomized Study Subject** | Canon (RESEARCH_SITE.md §6). In-world the cap is not binding at Site 1047: 9 screen failures against 14 randomized, cap = 28. | Canon |
| §6.8 | Re-screening counts as a separate screening event against the cap | Canon permits one re-screen (STUDY_FACTS.md §5). The budget treatment is invented. | Med |
| §6.9 | Stipend **US$125 per completed visit** plus parking/travel, paid by the site, invoiced as a pass-through at cost | Canon (RESEARCH_SITE.md §6). | Canon |
| §6.10 | Nine mandatory invoice elements; **180-day** submission deadline | All invented. The 180-day deadline is a Sponsor-favourable term and a plausible trap for a site with a busy business manager. | High |
| §6.10 | EIN **84-3319027** on every invoice | Canon (RESEARCH_SITE.md §1). | Canon |
| §6.11 | ACH payment, remittance advice, verification of changed banking details | Canon that remittance is ACH to Columbia Bank with advice to `ap@cascadederm-sim.example` (RESEARCH_SITE.md §6). The CTA deliberately does **not** name the bank or the account, which is realistic. The bank-change verification clause is invented (a modern anti-fraud control). | High |
| §6.12 | Five-limb **fair market value** representation | Invented drafting; the substance is required by the compliance architecture around 21 CFR Part 54 and the AKS. "Not contingent on the outcome of the Study" maps directly to 21 CFR 54.4(a)(3)(i). | High |
| §6.12(e) | No double-billing to Study Subjects, insurers, or Federal health care programmes | Invented. Real and important — Medicare billing for research services is a live False Claims Act exposure. | High |
| §6.13(a)–(b) | Anti-Kickback Statute representation and no-inducement covenant | 42 U.S.C. §1320a-7b(b) is real; the drafting is invented. | High |
| §6.13(c) | **Sunshine Act / Open Payments** acknowledgement; site to supply NPI and licence data; Sponsor to provide pre-publication review where practicable | 42 U.S.C. §1320a-7h and 42 CFR Part 403 Subpart I are real, as is the fact that research payments are reported naming the PI. The obligation to supply identifiers and the courtesy pre-review are invented. Dr. Okonkwo's NPI **1730294856** is canon. | High |
| §6.14 | USD; site responsible for its own taxes; VAT/withholding language; **IRS Form W-9** | Invented. The VAT/withholding language is inert for a US-to-US payment and is carried because this is a global template — a deliberate verisimilitude choice. | High |
| §6.15 | Financial records retained **7 years**; audit on **10 business days'** notice, once per 12 months | All invented. Note the deliberate mismatch with Article 14's 25-year clinical retention — financial and clinical records genuinely run on different clocks in practice. | Med |

---

## 8. Article 7 — Confidentiality

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §7.1 | Marked-**or**-reasonably-understood standard; **30 days** to confirm oral disclosure in writing | Invented. The "obviously confidential from its nature" saving proviso is a site-unfriendly but common addition. | High |
| §7.1 | Confidential Information expressly includes **the existence and terms of this Agreement** and **the Budget** | Invented. In-world this is why Gregory Tarrant cannot discuss the budget with the two competing AD trials' sponsors. | High |
| §7.3 | Four standard exclusions (public, prior knowledge, rightful third-party receipt, independent development) | Universal. Invented drafting. | High |
| §7.4 | Compelled disclosure with notice, cooperation, and minimum-necessary scope | Invented. | High |
| §7.5 | Term of **10 years from each disclosure**, with trade secrets protected indefinitely and Personal Data protected without limit of time | Invented. A perpetual obligation on everything is the Sponsor's opening position; 10 years is the common landing and is administrable by a site that has to know in year 20 which binder is still restricted. | Med |
| §7.6 | **Safety and ethics carve-out** — IRB, Study Subject, treating physician, Regulatory Authority, and the Investigator's professional duty | Directed by the brief. Non-negotiable in practice; a clause capable of gagging a physician about a participant's own safety information would fail IRB review and is likely void as against public policy. Invented drafting. | High |
| §7.7 | Return or destruction with three carve-outs (Article 14 retention, one archival copy, routine backups) plus retention of the medical record | Invented. Note that the 25-year retention in §14.2 effectively swallows the destruction duty for most Study material — a real and slightly absurd feature of modern CTAs. | High |

---

## 9. Article 8 — Intellectual property

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8.1 | Sponsor owns Study Data and results outright, with assignment from Institution and Investigator | Standard and effectively non-negotiable. Invented drafting. | High |
| §8.1 | Express preservation of the **medical record as a record** | The counterpart to §1.23. Invented; essential. | High |
| §8.2 | Invention ownership triggered by a **nexus** — "arises from" the Study, the IP, or the Confidential Information — with express rejection of a bare "conceived during the Term" trigger | Invented, and the single most negotiated point in a real Article 8. Without the nexus, an unrelated invention made by Dr. Okonkwo on a Saturday would vest in Amgen. Sponsor templates routinely propose the broader trigger. | High |
| §8.3 | **Improvements split**: inventions *specific to the Investigational Product* are the Sponsor's; inventions of *general applicability* are the Institution's, subject to a Sponsor licence where the Sponsor's Confidential Information was used | Invented. This is the hardest sub-issue in the article and the split is the workable compromise. A small private practice like Cascade would realistically have accepted a broader Sponsor-side clause; the draft is modestly site-favourable here. | Med |
| §8.4 | Institution Pre-Existing IP retained, with a necessity licence to the Sponsor | Invented. | High |
| §8.5 | **Licence-back** for internal non-commercial research, teaching, and patient care; no commercialisation, no sublicensing, no third-party use, no support of third-party regulatory filings | Directed by the brief. Invented drafting. | High |
| §8.6 | Invention disclosure within **30 days** of conception or first reduction to practice, with a pre-disclosure publication restraint | Number invented. Without a disclosure duty the ownership clause is unenforceable in practice. | High |
| §8.7 | Cooperation at Sponsor expense, surviving termination and reaching departed personnel "to the extent of the Institution's ability to compel" | Invented. The qualifier is realistic — an institution cannot promise the cooperation of a former employee. | High |

---

## 10. Article 9 — Publication

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §9.1 | "This Agreement does not restrict the Investigator's discussion of the results of the Study following its completion" | **REAL** — reproduces the substance of STUDY_FACTS.md §14, first sentence. | Real |
| §9.1 | Express statement that the Sponsor may not suppress unfavourable results | Invented gloss, but faithful to the intent of the registry language. | High |
| §9.2 | **45-day** Sponsor review period | **REAL** — STUDY_FACTS.md §14 ("typically up to 45 days"). | Real |
| §9.3 | Extension of **up to 30 additional days for patent filing**; aggregate cap of **75 days** | The *existence* of an extension is real ("and possible extension"); the **30-day length**, the patent-filing trigger, and the 75-day aggregate cap are **invented**, directed by the brief. 30 days is the conventional figure in real CTAs. | Med |
| §9.4 | Sponsor may require removal of **Confidential Information**, expressly **not** of Study Data, results, analyses, conclusions, or interpretations | **REAL in substance** — STUDY_FACTS.md §14 ("Amgen may remove confidential information"). The express negative limb is an invented clarification, and it is the sentence that carries the article's ethical content. | Real / High |
| §9.5 | "**the authors shall retain final control of and approval over the content of any publication**" | **REAL** — STUDY_FACTS.md §14 ("authors have final control and approval of publication content"). | Real |
| §9.5 | Sponsor's silence within the review period deemed to be no comment | Invented. | High |
| §9.6(a) | No site publication before the **first multicentre publication** | **REAL** — STUDY_FACTS.md §14. | Real |
| §9.6(b) | Backstop: restriction lapses **12 months after Study completion** (last visit of the last Study Subject across all centres), whichever is earlier | **INVENTED**, directed by the brief. Not in the registry language. Necessary in practice: without a backstop a Sponsor that never publishes could silence the site indefinitely. In-world the clock would run from last-participant-last-visit **27-AUG-2024** (STUDY_FACTS.md §1), giving a lapse date of 27-AUG-2025. | Med |
| §9.7 | **ICMJE** authorship criteria; authorship not determined by enrolment volume or compensation; Sponsor discloses its role and any funded writing assistance; Investigator discloses financial relationships | Invented. Conventional and consistent with 21 CFR Part 54 disclosure. Note the in-world reality: Site 1047 enrolled 14 of 726 participants (~1.9%), so a byline on the primary publication is unlikely and §9.8 says so. | High |
| §9.8 | Acknowledgement as a participating investigator where not named as an author; no obligation to include the Investigator as an author | Invented; deliberately unsentimental. | High |
| §9.9 | Carve-out preserving ClinicalTrials.gov (42 U.S.C. §282(j), 42 CFR Part 11) and CTIS results reporting | Real statutes; drafting invented. | High |

---

## 11. Article 10 — Study Subject injury

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §10.1 | Sponsor pays **reasonable and necessary costs of medical treatment** for injury **proximately caused by** the Investigational Product **or** a Protocol-required procedure performed for no other purpose | Directed by the brief. Standard formulation. Invented drafting. | High |
| §10.1 | Payment is **secondary** — "to the extent not covered by insurance or otherwise reimbursed" | **Invented, and a genuine negotiation point.** Sponsors prefer secondary; participants and IRBs prefer primary. Flagged because it must be consistent with whatever `icf.md` tells participants; §10.4 resolves any mismatch in the participant's favour. | Med |
| §10.2(a)–(e) | Five exclusions: negligence/wilful misconduct; failure to follow the Protocol; **natural progression of underlying disease**; non-Protocol therapy including rescue therapy; Study Subject's failure to follow instructions | Directed by the brief. Invented drafting. The disease-progression exclusion is load-bearing in this specific study: AD worsening was the most common adverse event (19.1% rocatinlimab / 26.7% placebo, STUDY_FACTS.md §13), so without it the Sponsor would be funding every eczema flare in the trial. | High |
| §10.3(a) | Injury notice within **48 hours** of the Investigator becoming aware | Number invented. Deliberately aligned with the 48-hour breach clock in §13.9(b) so the site has one number to remember. | Med |
| §10.3(c) | No admission of liability, no settlement without Sponsor consent | Invented. | High |
| §10.4 | **The IRB-approved ICF governs as between Sponsor and Study Subject**, and the Sponsor honours the ICF where it promises more | Directed by the brief. Invented, and important: a CTA/ICF mismatch on injury language is a classic inspection finding. Requires that whoever authors `icf.md` not promise less than this article. | High |
| §10.5 | No waiver of Study Subject rights; no exculpation for negligence; no third-party beneficiary right created | Invented. Required in substance by 21 CFR 50.20's prohibition on exculpatory language. | High |
| §10.6 | Payment under Article 10 is not an admission for Article 11 purposes; the two are cumulative | Invented. | High |

---

## 12. Article 11 — Indemnification

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §11.1(a)–(e) | Sponsor indemnity covering IP administration, Protocol performance, product defect/failure to warn, Sponsor negligence or breach, and third-party IP infringement | Directed by the brief. The IP-infringement limb (e) is an addition beyond the brief and is standard. Invented drafting. | High |
| §11.2 | Four exclusions plus a general Applicable-Law limb | Directed by the brief. Invented drafting. | High |
| §11.2 | Carve-outs framed as "**to the extent**" (comparative) rather than "arising from" (all-or-nothing), with an express proportionality sentence | **Invented, and the most consequential single drafting choice in the article.** An all-or-nothing carve-out means a site 5% at fault loses the whole indemnity. This is a site win and realistic only for a site with some leverage; Cascade arguably had none. Flagged as generous. | Med |
| §11.2(b) | Protocol-adherence exclusion qualified to **material** failures, with an express statement that an immaterial, non-causative deviation does not void the indemnity | **Invented, and deliberate.** Site 1047 logged 11 deviations (7 visit-window, 2 eDiary, 1 missed PK, 1 out-of-window lab; no major deviations — RESEARCH_SITE.md §5). Under an unqualified exclusion, none of those participants would be indemnified. This clause is the reason the site's deviation log does not destroy its risk position, and is a good in-game detail. | High |
| §11.3 | Institution reciprocal indemnity, narrower, with a symmetric "except to the extent" carve-back | Directed by the brief. Invented. Not capped — noted as a real exposure for a 31-person practice whose practical ceiling is its §12.2 insurance limits. | High |
| §11.4 | **The Investigator assumes no personal indemnity obligation** | **Invented.** Directed by the requirement that she sign only to acknowledge her own obligations. A site attorney who lets an individual physician become jointly liable for a corporate indemnity has erred; this clause and the signature-block limitation are the two places the document prevents it. | High |
| §11.5 | Notice within **30 days**, materiality-of-prejudice saving, Indemnifying Party controls the defence with counsel reasonably acceptable, cooperation at Indemnifying Party's expense | Numbers invented. | High |
| §11.5 | **No settlement** that imposes an unindemnified obligation, admits the Indemnified Party's fault, or omits a full release, without consent | Invented, and the limb sites most often forget. Without it, Amgen could settle a case in terms that publicly attribute fault to Dr. Okonkwo. | High |
| §11.5 | Separate counsel **at the Indemnifying Party's expense where a conflict of interest exists**; Indemnified Party may defend if the Indemnifying Party fails to assume within 30 days | Invented; both are site-protective additions. | Med |
| §11.6 | Survival **without limit of time** | Invented. Personal-injury claims from a 2023 exposure can surface years later; an indemnity that expires with the Term is worthless. | High |
| §11.7 | Indemnity not limited by insurance | Invented. Guards against the "we carry $10M, isn't that enough?" argument. | High |

---

## 13. Article 12 — Insurance

**All figures in this article are invented.** No insurance information appears anywhere in canon.
The amounts were chosen to be plausible for a 2022 US pharmaceutical-sponsored Phase 3 study with a
small private-practice site.

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §12.1(a) | Sponsor clinical trial / products liability: **US$10,000,000** per occurrence and aggregate | Typical large-pharma figure in a US CTA. Invented. | Med |
| §12.1(b) | Sponsor commercial general liability: **US$5,000,000** | Invented. | Med |
| §12.1 | Sponsor may satisfy through **self-insurance** | Realistic — large pharmaceutical companies typically self-insure the primary layer. Invented. | High |
| §12.2(a) | Institution CGL: **US$1,000,000 / US$3,000,000** | The near-universal small-practice figure. Invented. | Med |
| §12.2(b) | Institution professional liability (medical malpractice): **US$1,000,000 per claim / US$3,000,000 aggregate**, covering the Investigator and clinical Institution Personnel | The standard Oregon private-practice figure. Invented. Note it is the practical ceiling on §11.3 regardless of the clause's uncapped wording. | Med |
| §12.2(c) | Workers' compensation at **Oregon statutory** limits | Invented; Oregon is canon as the state of operation. | High |
| §12.3 | **5-year tail coverage** for claims-made policies, retroactive date no later than the Effective Date | Invented, and the clause sites most often miss: a claims-made policy that lapses when a practice closes leaves nothing behind. | Med |
| §12.4 | Coverage maintained for **5 years** after the Term | Invented. Chosen as a round figure comfortably beyond Oregon's two-year medical-malpractice limitations period (ORS 12.110(4)) with its discovery rule. | Med |
| §12.5 | **30 days'** notice of cancellation, non-renewal, or material reduction, with a fallback where the insurer will not undertake to give notice | 30 days is the market standard. The fallback is a modern addition — most insurers stopped giving third-party cancellation notice years ago. Invented. | High |
| §12.6 | Insurance does not limit liability | Invented; the counterpart of §11.7. | High |

---

## 14. Article 13 — Data protection and privacy

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §13.2 | **HIPAA research authorization** obtained as part of the informed consent process, per 45 CFR 164.508 | Real regulatory mechanism. Its embedding in the ICF is canon-adjacent (Master ICF v4.0.1, STUDY_FACTS.md §1) and must be consistent with `icf.md`. Drafting invented. | High |
| §13.2 | On **revocation**, no further collection but continued use of data already collected to preserve scientific integrity | Invented; standard and necessary. Deleting data from a locked regulatory database is impossible and would corrupt the analysis. Must be disclosed in the ICF — flagged as a cross-document dependency. | High |
| §13.3 | **Key-coding** to the Study Subject identifier, key retained at the site, Sponsor receives at most a **limited data set** under 45 CFR 164.514(e) | The participant ID convention `SSSS-NNN` (e.g. 1047-001) is canon (STUDY_FACTS.md §11). The limited-data-set characterisation and the five data-use-agreement covenants in §13.3(a)–(e) are invented. | High |
| §13.5 | Express statement that **the Sponsor is not a business associate**, with a reservation to execute a BAA if circumstances change | **Invented legal position**, and the mainstream industry view: the Sponsor does not perform a function on the covered entity's behalf. Reasonable people draft this differently; flagged as a position rather than a fact. | Med |
| §13.6 | Sponsor and Institution are **independent controllers**, not controller/processor and not joint controllers | **Invented legal position.** The mainstream European view for commercial trials, and defensible on the ground that the site cannot delete a participant's medical record on the Sponsor's instruction. Contested; some regulators treat the parties as joint controllers. | Med |
| §13.6 (second paragraph) | **Article 28-style covenants carried anyway** notwithstanding the independent-controller characterisation | Invented, and deliberately slightly incoherent — this is exactly what real CTAs do. Sponsors want the covenants regardless of the characterisation. Noted as a tension a site attorney would mark up. | Med |
| §13.7 | Transfer mechanism: **SCCs under Implementing Decision (EU) 2021/914**, UK IDTA addendum, transfer impact assessment, DPF as an alternative | Real instruments. Their selection is invented. Expressly noted as inapplicable to Site 1047's US-to-US flows — a deliberate acknowledgement that this is global-template boilerplate for this site. | High |
| §13.8 | Data subject requests forwarded to the Sponsor within **5 business days**; erasure limited by GDPR Article 17(3) | 5 business days invented; chosen to leave room inside the Sponsor's one-month Article 12(3) clock. Article 17(3) exceptions are real. | High |
| §13.9(b) | Breach notification **without undue delay and in any event within 48 hours** of awareness | **Invented.** Chosen to leave the notified party room inside GDPR's 72-hour Article 33 clock and well inside HIPAA's 60-day individual-notice clock. Reciprocal, which is slightly site-favourable — Sponsor templates usually make it one-way. | Med |
| §13.9(c) | Four-element notification content set | Modelled on GDPR Article 33(3). Invented drafting. | High |
| §13.9(d) | Neither Party names the other in a breach notification without prior consultation | Invented; a reputational protection both sides want. | High |
| §13.10 | Retention aligned to Article 14, with 45 CFR 164.316(b)(2)'s six-year rule and Oregon medical-record rules running in parallel and the **longer** governing | Invented. The "longer governs" rule is the administrable answer to overlapping clocks. | High |

---

## 15. Article 14 — Records, retention, and audit

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §14.1 | Definition of "Study Records" enumerating source documents, ICFs, CRFs and audit trails, IP accountability, IRB correspondence, DOA log, training records, deviation records | Maps to the canon site file (RESEARCH_SITE.md §3: binders plus Veriscribe eISF; source on the Modernizing Medicine EMA EMR plus paper worksheets). Drafting invented. | High |
| §14.2 | Retention for **25 years** after Study completion | Directed by the brief; grounded in the real Article 58 of Regulation (EU) 536/2014 and ICH E6. **Note honestly:** this is far longer than 21 CFR 312.62(c) requires of a US site, and adopting the EU figure globally is a Sponsor-convenience choice that imposes an uncompensated storage burden on a 31-person practice. A well-advised Cascade would have asked for a storage allowance or a right to transfer to the Sponsor's archive. It did not. | High |
| §14.3 | **No destruction without prior written Sponsor authorisation**, Sponsor to respond within **60 days**, Sponsor to reimburse incremental storage costs beyond the §14.2 period | Directed by the brief. The 60-day response and the storage-cost reimbursement are invented site-protective additions. Maps to SOP-027 (Essential Document Management and Retention). | High |
| §14.4 | **60 days'** notice and transfer of custody on closure, dissolution, change of ownership, or Investigator departure | Invented. | High |
| §14.5 | Direct access for Sponsor, CRO, and auditors, on **5 business days'** notice for routine visits, with shorter or no notice for a good-faith safety or data-integrity concern | Directed by the brief; numbers invented. | High |
| §14.5(a), (e) | Access **limited to Study-related records**; no access to the medical record of a non-Study Subject | Invented, and important: it is why the CRA gets a **read-only EMR account** (RESEARCH_SITE.md §3) rather than the run of the practice system. | High |
| §14.6 | Regulatory Authority direct access without notice to or consent from the Sponsor | Real duty under 21 CFR 312.68. Drafting invented. | High |
| §14.7(a) | Notification of a Regulatory Authority inspection **immediately and in any event within 24 hours** | Directed by the brief; number invented. | High |
| §14.7(c) | Copies of any **Form FDA 483**, EIR, warning letter, or untitled letter within **5 business days** | Invented. In-world relevance: Dr. Okonkwo has one prior BIMO inspection (2019, NAI — RESEARCH_SITE.md §2). | High |
| §14.7 (closing) | Sponsor may attend the inspection and **review and comment on** the response, but the Institution retains final control and is not prevented from meeting the authority's deadline | Invented. The retained-control proviso is a real and necessary site protection — a Sponsor review right that could delay a 483 response past its deadline would be untenable. | High |
| §14.8 | Investigator Site File maintained to an ICH E6 standard | Canon that the site maintains both binders and a Veriscribe eISF. Drafting invented. | High |

---

## 16. Articles 15–17 — Use of name, independent contractor, general provisions

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §15.1 | Mutual restriction on use of name, marks, and employee names in publicity | Directed by the brief. Invented. | High |
| §15.2(a) | Carve-out for **ClinicalTrials.gov** and **CTIS** registration | Directed by the brief. Real: the registry record lists 197 locations, of which Site 1047 is one in-world. | High |
| §15.2(b)–(e) | Carve-outs for legally required disclosure, securities-exchange rules, transparency reporting, regulatory submissions, ICF and recruitment materials, Sponsor internal materials and investigator lists, and the site's factual experience listing | Invented. The last one matters commercially — a site's ability to say "we have run Amgen studies" when pitching for new work. | High |
| §15.3 | Consent response within **10 business days** | Invented. | Med |
| §16.1–16.3 | Independent contractor; no authority to bind; no employment benefits | Directed by the brief. Standard. Invented. | High |
| §16.4 | Express preservation of **independent professional judgement** | Invented; the substantive reason Article 16 exists at all, beyond tax and vicarious-liability hygiene. Duplicates §3.10 deliberately. | High |
| §17.1 | Institution may not assign at all; Sponsor may assign to an Affiliate or a successor to the Investigational Product | Invented, and correctly asymmetric — rocatinlimab is also designated **KHK4083** (STUDY_FACTS.md §4), reflecting an in-licensing history, so assignability of the programme matters to the Sponsor. | High |
| §17.2 | No subcontracting without consent; flow-down of Articles 3, 7, 8, 13, 14 | Invented. | High |
| §17.3 | No third-party beneficiaries except the named Indemnified Parties | Invented. | High |
| §17.4 | Notice addresses and methods; e-mail effective with confirmation, followed by hard copy for breach, termination, and indemnity notices | Amgen's address and `ctagreements@amgen-sim.example` are canon (STUDY_FACTS.md §1, §10). Cascade's address, `g.tarrant@cascadederm-sim.example`, +1 (503) 555-0126, and the fax +1 (503) 555-0122 are canon (RESEARCH_SITE.md §1, §6). | Canon |
| §17.4 | Sponsor copy-to addressee **"Vice President, Legal Affairs — R&D Legal"** | **Invented.** Amgen's internal legal titles are not public. Kept generic and title-only, with no named individual. | Med |
| §17.5 | Governing law: **State of Delaware**, without regard to conflicts principles, CISG excluded | **Invented**, directed by the brief's instruction to choose Delaware or Oregon and to note the negotiation. | High |
| §17.5 (note) | Express **negotiation note** recording that the Institution proposed Oregon, the Sponsor proposed California, and the Parties settled on Delaware; and that Oregon law still governs licensure, medical-record retention, the practice of medicine, and third-party tort claims | **Wholly invented**, and an unusual thing to find on the face of a real contract — included deliberately because the brief asked that the negotiated character of the choice be noted, and because it gives a player-facing artefact a visible seam. Treat as a game-design flourish rather than realistic drafting. | Low |
| §17.6 | Escalation: **15 business days** to confer, **30 days** at project level, **60 days** before litigation; exclusive jurisdiction in Delaware state and federal courts; injunctive relief carve-out for Articles 7, 8, 13; nothing delays Study Subject safety obligations | All numbers invented. Litigation rather than arbitration was chosen so the clause is legible; arbitration would be equally realistic. | Med |
| §17.7 | Force majeure expressly naming **epidemic, pandemic, or public health emergency** and governmental measures; **90 days** before either Party may terminate; safety obligations expressly survive the suspension | Invented. The pandemic limb is standard in post-2020 templates and is period-appropriate for a contract signed 12-DEC-2022. The carve-out preserving Study Subject safety obligations during a force majeure is an invented addition and the ethically necessary one. | High |
| §17.8–17.11 | Severability with reformation, waiver, amendment in writing (with the two carve-outs), counterparts and electronic signature | Invented. §17.10(b) allowing the Budget to be amended by the Sponsor and Institution alone, without the Investigator, is a deliberate practical touch. | High |
| §17.12 | Entire agreement superseding the CDA **while preserving accrued confidentiality obligations** | Invented. The preservation proviso is essential — a bare merger clause would accidentally extinguish the CDA's protection of everything disclosed during feasibility. | High |
| §17.13 | Construction rules; "business day" defined by reference to **Oregon** public holidays | Invented. Deliberately Oregon rather than Delaware, since the Institution is the party that must count the days. | Med |

---

## 17. Signature page

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Sponsor block | **Helena K. Draycott, Executive Director, Clinical Contracts and Outsourcing** | **Wholly invented.** Amgen's authorised contract signatories are not public, and attributing a fabricated signature to a real named person would be inappropriate. A fictional name and a plausible generic title were used. Consistent with STUDY_FACTS.md §9's rationale for inventing vendors rather than naming real companies. | High |
| Institution block | **Gregory Tarrant, MBA, Site Director**, with an authority representation | Canon (RESEARCH_SITE.md §2, §6: "Signs contracts on behalf of the institution"). The authority representation is invented. | Canon |
| Investigator block | **Miriam A. Okonkwo, MD, FAAD**, licence MD-118472, NPI 1730294856 | Canon (RESEARCH_SITE.md §2). | Canon |
| Investigator block | Limiting language: signs **solely in her personal capacity** to be bound by Articles 3, 7, 8, 9, 13, 14, 16, and to take the benefit of Article 10 and §§11.1 and 11.4; expressly **does not** assume Articles 6, 12, or §11.3 | **Invented**, and the most important drafting decision on the page. Prevents an individual physician becoming jointly liable for a corporate indemnity, payment, or insurance obligation. | High |
| All blocks | Date **12-DEC-2022** | Canon (RESEARCH_SITE.md §6: "CTA executed 12-DEC-2022"). | Canon |

---

## 18. Exhibits

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Exhibit A | Protocol incorporated by reference; cover sheet only, pointing to `protocol.md` | Directed by the brief. Identifiers all canon. | Canon / High |
| Exhibit A | Version in force at the Effective Date recorded as the **original protocol, 07-OCT-2022** | Canon (STUDY_FACTS.md §1, itself marked ASSUMED there). Recording both the original and Amendment 3 makes §2.3's auto-incorporation legible. | Canon |
| Exhibit B | Budget incorporated by reference; cover sheet pointing to **`budget.md`**; per-visit line items expressly **not** reproduced | Directed by the brief's scope boundary. | High |
| Exhibit B | Summary table restating the twelve financial terms that live in the body of the Agreement, with an express statement that the body governs on those terms | **Invented device.** Included so that the CTA and `budget.md` cannot silently diverge: any inconsistency is resolved in favour of the CTA, and the table gives the Budget's author a single checklist. All twelve values are canon from RESEARCH_SITE.md §6 except the deemed-clean period (15 business days), the interest rate (1%/month), and the invoice deadline (180 days), which are invented and are marked as such in §7 above. | High |
| Exhibit C | Prior Confidential Disclosure Agreement dated **22-AUG-2022**, reference **CDA-20210143-1047** | **Wholly invented.** No CDA appears in canon. The date was chosen to sit plausibly before IRB reliance (04-NOV-2022), initial IRB approval (08-NOV-2022), and CTA execution (12-DEC-2022), giving a coherent site-startup timeline. | Med |
| Exhibit C | CDA scope described as protocol synopsis, feasibility questionnaire, and preliminary IP information | Invented; the conventional feasibility package. | High |
| Exhibit C §C.3 | Accrued obligations preserved; CDA-disclosed information deemed Confidential Information under Article 7; the 10-year clock runs from original disclosure | Invented. | High |
| Exhibit C §C.5 | Institution to ensure Institution Personnel are bound by equivalent confidentiality obligations | Invented. | High |
| Exhibit D | Financial disclosure obligations under **21 CFR Part 54**; Forms **FDA 3454** (applicant certification) and **FDA 3455** (investigator disclosure) | Real. The distinction between the two forms — 3454 is signed by the applicant, 3455 by the investigator — is real and correctly stated. | Real |
| Exhibit D §D.2 | Covered persons include the Investigator, the named sub-investigators, and **spouses and dependent children** | Sub-investigator names (Daniel R. Feist, MD; Tessa Nakamura, DO; Alonzo Vega, FNP-C) are canon (RESEARCH_SITE.md §2). The spouse/dependent-child extension is a real Part 54 requirement. | Canon / Real |
| Exhibit D §D.3 | Four disclosable categories with thresholds **US$50,000** (equity in a publicly held sponsor) and **US$25,000** (significant payments of other sorts), and a **one-year** post-completion tail | **Real** regulatory figures from 21 CFR 54.2 and 54.4. Not invented. | Real |
| Exhibit D §D.4(b) | Change notified within **30 days** | Number invented. | High |
| Exhibit D §D.6 | Institution shall not review, edit, or withhold a covered person's disclosure | Invented; a real integrity control. | High |
| Exhibit D §D.7 | Investigator has certified **no disclosable interests** and executed a negative Form FDA 3455 | Canon (RESEARCH_SITE.md §2: "Financial disclosure: no disclosable interests (FDA 3455 negative)"). | Canon |

---

## 19. Cross-document dependencies

Items in this document that constrain, or are constrained by, other documents in the corpus. Flagged
for whoever authors or reviews them.

| Dependency | Requirement |
|---|---|
| **`budget.md` (Exhibit B)** | Must match the twelve financial terms in the Exhibit B summary table and in Article 6: 28% overhead on procedures and 0% on pass-throughs; quarterly in arrears; net 45; 10% holdback released within 60 days; US$9,500 non-refundable start-up fee; IRB fees at cost; screen failures capped at 2 per randomized participant; US$125 per completed visit stipend plus parking/travel as pass-through; Enrolment Target 12. Must **not** restate the CTA's legal terms. |
| **`icf.md`** | Article 10.4 requires that the ICF's research-injury language be consistent with Article 10 and provides that the ICF governs as between Sponsor and Study Subject where it promises more. Article 13.2 assumes the ICF carries a HIPAA authorization and discloses the revocation rule; Article 13.8 assumes the ICF discloses the limits on erasure. |
| **`protocol.md` (Exhibit A)** | The CTA states no dose, window, eligibility criterion, or safety timeline. Nothing in the CTA should require a change to the Protocol; Section 2.4 governs any conflict. |
| **Safety reporting manual** | Section 3.2(e) defers entirely to the Protocol and the Study's safety reporting procedures for timeframes. No number is stated in the CTA. |
| **FDA 1572 / regulatory documents** | Section 3.5 and Exhibit D assume a 1572 naming Feist, Nakamura, and Vega as sub-investigators and a negative 3455 for Dr. Okonkwo. |
| **Vendor roster** | The CTA deliberately names **no vendor** — not Harborlight, Veriscribe, Axion, DayLog, Meridian, or GlobalRx — referring instead to "a contract research organisation," "the electronic data capture system," etc. This is realistic (a CTA is not amended when a vendor changes) and keeps the contract decoupled from STUDY_FACTS.md §9. |

---

## 20. Known tensions and deliberate imperfections

Recorded so that a reviewer does not mistake them for errors.

1. **The draft is somewhat more site-favourable than a real 2022 negotiation would have produced.**
   Cascade is a 31-person private practice with no leverage. Yet the document gives it a deemed-clean
   payment provision (§6.3(d)), late-payment interest (§6.3(e)), comparative "to the extent"
   indemnity carve-outs (§11.2), a materiality qualifier on the protocol-deviation exclusion
   (§11.2(b)), a nexus-limited invention trigger (§8.2), and conflict counsel at the Sponsor's
   expense (§11.5). Each is individually realistic; the combination is generous. Retained because the
   document is more legible and more useful as game material when the site-protective clauses are
   present and visible.
2. **Against that, the site took a bad deal on retention.** Twenty-five years of storage with no
   allowance (§14.2, §14.3) is a real uncompensated cost, and the document does not hide it.
3. **§13.6 is internally in tension** — it characterises the parties as independent controllers and
   then imposes Article 28-style processor covenants anyway. This is what real CTAs do, and it is
   left in.
4. **§17.5's negotiation note is not realistic drafting.** Contracts do not usually narrate their own
   negotiation history. It is included because the brief asked for the point to be noted and because
   it is useful to a reader of the game's source material.
5. **Word count.** The finished document is approximately **18,400 words**, against a stated target of
   8,000–10,000. The overage is attributable to the size of the required-content list (17 articles,
   four exhibits, and roughly sixty individually enumerated sub-requirements) combined with the
   instruction to write at "full fidelity." No required element was omitted and no clause is padding,
   but the document is roughly twice the target length and is the longest artefact in the corpus.
