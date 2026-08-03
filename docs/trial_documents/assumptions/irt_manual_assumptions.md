> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE CLINICAL TRIAL DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# Assumptions log — `irt_manual.md`

**Document covered:** `/Users/dave/code/icf-please/docs/trial_documents/irt_manual.md`
— *Axion IRT — Site User Guide, Version 2.1, 12-DEC-2023*
**Companion outline:** `/Users/dave/code/icf-please/docs/outline/irt_manual_outline.md`
**Canon consulted:** `STUDY_FACTS.md` §§1–5, 9–12; `RESEARCH_SITE.md` §§1–2, 4–5, 7;
`NCT05651711.json` (registry record)

---

## Blanket statement — the whole system is invented

**The ClinicalTrials.gov record for NCT05651711 names no technology vendor of any kind** — no IRT/RTSM
provider, no EDC, no ePRO, no central laboratory, no CRO, no depot. It contains no operational,
supply-chain, randomization-implementation, or systems information whatsoever. It gives the design
(Phase 3, randomized, parallel, double-blind, participant and investigator masked), the arms, the
interventions, the enrolment (726), the outcome measures, and the results tables. Nothing else.

Consequently **the entire Axion IRT product as described in this manual is fabricated**: the
application, its URL, its release number, every screen, every field name, every button, every reason
code, every error code, every report, every notification rule, every role name, every service level,
every form, and every procedure. No part of it should be read as describing a real system or a real
vendor's product, and the described behaviours should not be taken as an authority on how any real
IRT works.

The **only** canon anchors are: the vendor name, phone, email, and 24/7 hours (`STUDY_FACTS.md` §9);
the 3:1 allocation and the two stratification factors (§3, themselves flagged ASSUMED in canon); the
kit format and 6-digit kit number range (§4); the visits at which an IRT transaction occurs (§5 SoA);
and the identifier formats (§11). Everything built on top of those anchors is listed below.

---

## 1. Document identity, version history, structure

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| Cover block | Guide is "Version 2.1, effective 12-DEC-2023," superseding "Version 2.0, 14-JUN-2023" | Version and date specified in the authoring brief. A v2.1 dated shortly after Protocol Amendment 3 (29-NOV-2023) makes the amendment the natural trigger for the revision, which is how vendor manuals actually version. | High (specified) |
| Cover block | Platform release "6.4.2"; guide version tracked separately from application release | Real IRT documentation versions independently of the software build; the mismatch is a common source of site confusion and is deliberately preserved. | Med |
| Cover block | Filed in "Investigator Site File, Section 8 (Study-Specific Manuals)" | Conventional ISF structure. Not specified in canon. | Med |
| Version history table | Five revisions with specific dates and change summaries (1.0 03-OCT-2022 … 2.1 12-DEC-2023) | v1.0 predates first participant first visit (14-DEC-2022) and site activation (06-JAN-2023), which is the correct sequence. Change summaries invented. | Med |
| Version history | v2.0 (14-JUN-2023) introduced "new dashboard, alerts panel, self-service reports" | Invented to justify a mid-study retraining event and to explain why the screens in this version look modern. | Low |
| Version history | v2.1 changes: revised screen-failure reason codes; expanded discontinuation codes; rewritten unblinding section; new error glossary; added access review | Chosen so that the amendment-driven revision touches things a site would actually notice. | Low |
| §1.4 | Precedence rule: protocol > this guide; and the live screen > this guide | Standard subordinate-document clause; the second half (screen governs) is invented but is correct practice for versioned software documentation. | Med |
| §1.3 | Statement that Axion IRT and Veriscribe EDC are **not integrated** for this study | Invented. Chosen deliberately: non-integration is the more common real-world case and it creates useful operational friction (double entry) for the game. | Med |

## 2. Support, availability, and service levels

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §2.1 | Help-desk phone +1 (800) 555-0164, email `helpdesk@axionirt.com`, 24/7 | **Canon** — `STUDY_FACTS.md` §9 and §10. Not an assumption. | Canon |
| §2.1 | Web support channel at `https://sites.axionirt.com` → Help → *Submit a request* | Invented; consistent with the canon email domain. | Med |
| §2.1 | Email target first response **4 hours** | Invented service level. | Low |
| §2.1 | Saying "emergency unblinding" routes the caller ahead of the queue | Invented mechanism, but a real and widely used design; it is the operational expression of 24/7 unblinding availability. | Med |
| §2.2 | Application URL `https://sites.axionirt.com`; training instance `https://train.axionirt.com` | Invented; derived from the canon email domain `axionirt.com`. | Med |
| §2.2 | Scheduled maintenance: **second Sunday of each month, 02:00–06:00 UTC** (Sat 18:00–22:00 PT), 7 days' email notice, in-app banner from 72 h | The brief required "24/7 with a stated maintenance window." Window placed on a weekend night in UTC, which is a weekend evening in Pacific time — deliberately awkward-but-tolerable for a US site. | Low |
| §2.2 | **Emergency unblinding remains available by telephone throughout maintenance and any outage** | Invented as stated, but treated as a non-negotiable design requirement: a manual that states a maintenance window without this carve-out would describe a period in which unblinding appears impossible. | High (design necessity) |
| §2.2 | Outages announced by email to active users and on the login page | Invented. | Med |
| Appendix E | Escalation tiers 0–3 with named target response times (immediate / 4 h / 1 business day / 3 business days) and a Sponsor System Owner tier at Meridian via the CRO | Entirely invented service-level structure. Tier 0 (unblinding) separated deliberately. | Low |

## 3. Getting started — access, credentials, session

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §4.1 | Accounts are requested **through the CRA**, who verifies the Delegation of Authority log first; no self-registration | Required by the brief; also the correct expression of 21 CFR Part 11 §11.10(d). CRA is Kevin Ostrander (canon, `STUDY_FACTS.md` §10). | High |
| §4.1 | Turnaround **3–5 business days** | Invented. Chosen long enough to make advance planning a real obligation. | Low |
| §4.2 | Training module ~45 minutes; practice transactions in a training environment; retraining triggers (new guide version marked *retraining required*, role change, absence >6 months) | Invented. The "absence >6 months" trigger is a plausible but arbitrary threshold. | Low |
| §4.2 | Training environment is a separate instance with fictional sites, deliberately not kept in sync with production | Invented; realistic and explains a common site complaint. | Med |
| §4.3 | Activation email from `no-reply@axionirt.com`, subject *"Axion IRT — activate your account (Protocol 20210143)"*, link expires **72 hours** | Invented. 72 h is a common but arbitrary choice. | Low |
| §4.4 | MFA mandatory for every user at every login; TOTP via "Axion Authenticator" or any TOTP app, SMS fallback; QR + manual key at enrolment; trusted browser for **12 hours**; lost device requires help-desk identity verification and re-enrolment | Entirely invented, including the 12-hour trust window and the named authenticator app. MFA on an IRT is increasingly standard but is not universal. | Low |
| §4.5 | Password policy: ≥12 characters; 3 of 4 character classes; may not contain username/name/"axion"; 12-password history; 90-day expiry with 14-day warning; lock after 5 failures; 30-minute auto-unlock | Every number invented. The *shape* of the policy traces to 21 CFR Part 11 §11.300 (uniqueness, periodic revision, loss management, unauthorised-use safeguards). | Low (values) / High (existence) |
| §4.6 | **20-minute inactivity timeout** with a 2-minute warning dialog | Timeout duration specified in the brief; the 2-minute warning is invented. | High (duration) / Low (warning) |
| §4.6, §11 | Transaction semantics: **nothing is committed until the final confirmation button**, so a timeout mid-transaction discards everything and creates no record | Invented, but chosen as the only defensible design — a system that could half-randomize a participant would be a validation failure. Also the reassuring half of the "cannot be undone" rule. | High (design necessity) |
| §4.7 | Credential sharing prohibited absolutely; described as a GCP violation reportable to sponsor and potentially the IRB; help desk will never ask for a password; the "coordinator on holiday" scenario and its correct answer | Prohibition and rationale trace to 21 CFR Part 11 §11.10(j) and §11.100(a). The specific reportability consequences are invented framing. | High (rule) / Med (consequences) |
| §4.7, §13.2 | Help desk may perform a transaction on the site's behalf under a documented request in a genuine emergency | Invented; a common real capability and the correct alternative to credential sharing. | Med |

## 4. Roles and permissions

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §5 | Seven roles: Site Coordinator, Investigator, Site Pharmacist, CRA, Sponsor (blinded), Sponsor (unblinded), Help Desk | Role list specified in the brief. Names invented. | High (specified) |
| §5 | Full transaction-by-role matrix as printed | Every cell invented. Internally consistent with the transaction set and referenced throughout the document. | Med |
| §5 | **No site role — including the PI — can view treatment assignment outside emergency unblinding** | Required by the brief and by canon's double-blind design (`STUDY_FACTS.md` §3). | Canon-consistent |
| §5 | Only the **Investigator** role may check the eligibility confirmation box; a Site Coordinator may otherwise run the randomization transaction | Invented split, but standard IRT practice. Grounded in site canon: Alonzo Vega, FNP-C, is explicitly **not** delegated for eligibility determination (`RESEARCH_SITE.md` §2), so he is used as the worked counter-example. | Med |
| §5 | Site Pharmacist has dispensing/receipt/quarantine rights but no randomization or registration rights | Invented; consistent with canon that no unblinded pharmacist is required at site (`STUDY_FACTS.md` §4) — Wen-Li Chao, PharmD, is a blinded role. | Med |
| §5 | CRA is **read-only across the board** with no transaction rights | Invented; correct for monitoring independence. | Med |
| §5 | Only **Sponsor (unblinded)** can release quarantined inventory; the site can always quarantine but never release | Invented asymmetry, deliberately chosen as the safety property. Consistent with canon's requirement to quarantine and report excursions to the sponsor within 24 h (`STUDY_FACTS.md` §4). | High |
| §5 | Sponsor (unblinded) restricted to named clinical-supply and biostatistics staff firewalled from the study team | Invented; standard blinding-firewall practice. Consistent with canon that the sponsor study team is blinded. | Med |
| §5 | Help Desk is the only role able to apply data corrections, and only under a documented request | Required by the brief; traces to 21 CFR Part 11 §11.10(a) and (e). | High |

## 5. Navigation and screens

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §6.1 | Dashboard composition: new-transaction button row, participant list, alerts panel, inventory summary, pending actions | Panel set specified in the brief; layout, wording, and counts invented. | High (content) / Low (layout) |
| §6.1–6.3 | The rendered mock screens (all of them, throughout the document) | Every screen is fabricated. Field names, button labels, step counters, and layout are invented and were kept internally consistent across the document. | Low |
| §6.2 | Participant record fields: registration/randomization dates, randomization number, stratum display, visit history with kit numbers, action buttons | Invented. Stratum is displayed to the site because region and vIGA-AD are non-blinding facts the site itself supplied. | Med |
| §6.2 | The **Emergency unblinding** button appears on every randomized participant's record for every site user, but only completes for the Investigator role; for others it opens instructions and the help-desk number | Invented. Chosen so that a coordinator alone at 03:00 can still find the path rather than hitting a permission wall. | Med |
| §6.3 | Inventory view columns; totals line; no product column | Invented. The absence of a product column is required by the blind. | High (absence) / Low (columns) |
| Throughout | Worked-example cast and their identifiers: 1047-029 (unblinded, randomization 204487), 1047-006 (EOT 09-JAN-2024), 1047-028 (W12 dispense, kit 215310), 1047-011 (mid-treatment, randomization 204518, Day 1 kit 214776), 1047-014 (missed dose), 1047-026 (screen failure SF06), 1047-027 (screened, D1 19-DEC), 1047-023 (registration then randomization 11-DEC-2023, randomization 204531, kit 215311) | All invented but constrained by canon: participant IDs follow `SSSS-NNN` (§11), randomization numbers are 6-digit (§11), kit numbers are 6-digit in 100001–999999 (§11 / §4). 1047-023 retargeted from the original 1047-019 during authoring: 1047-019 collided with the game's script (SCR-0219), which needs that ID still in screening in Jan 2024. Retargeted again 29-JUL-2026 (final pre-merge pass): 1047-003 → 1047-029, 1047-008 → 1047-028, 1047-017 → 1047-026, 1047-020 → 1047-027, because all four are subjects the game's script works during the run and this manual dates them incompatibly (W20 due 18-DEC / emergency unblinding 18-DEC-2023; W12 dispense 14-DEC-2023; screen failure 27-NOV-2023; D1 19-DEC). Placeholder IDs past the site's 22 issued screening numbers, as 1047-023/024/025 already are. | Med |
| §6.2 | 1047-011's visit dates computed from Day 1 = 05-SEP-2023 against the canon SoA study days (Day 15/29/57/85/113) | Arithmetic derived from canon `STUDY_FACTS.md` §5. Only the Day 1 date is invented. | High |
| §6.1, §7.7 | Shipment identifiers `SHP-1047-NNNN`; transaction identifiers `TX-1047-NNNNN` | Invented formats. Canon defines no shipment or transaction ID convention. | Low |

## 6. Transactions

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §7 preamble | IRT transactions occur at Screening, Day 1, Weeks 2/4/8/12/16/20, Week 24, Week 36 — and **not** at Weeks 28 or 32 | **Canon** — `STUDY_FACTS.md` §5 SoA row "IRT transaction". Restated, not assumed. | Canon |
| §7.1 | Registration is performed at consent, **before any protocol procedure**; the returned participant ID doubles as the screening number | Timing required by the brief; the ID/screening-number identity is **canon** (`STUDY_FACTS.md` §11). | High |
| §7.1 | Registration fields: consent date, three-letter initials, year of birth, sex, re-screen flag | Invented. Year-of-birth rather than full DOB chosen as the privacy-conservative option. | Med |
| §7.1 | Participant IDs are sequential within the site and **never reassigned**; gaps are normal | Invented rule, but standard and operationally important. | Med |
| §7.2 | Screen-failure reason codes **SF01–SF15** as listed | Every code invented. Content mapped deliberately onto canon eligibility criteria (`STUDY_FACTS.md` §7 — EASI ≥16, vIGA-AD ≥3, BSA ≥10%, NRS ≥4, ≥12-month duration, washouts, serology/TB/thyroid) and onto Site 1047's real screen-failure profile (`RESEARCH_SITE.md` §5 — mostly EASI <16 and washout non-compliance). | Med |
| §7.2 | SF15 "Other" requires ≥20 characters of free text | Invented threshold; a real and useful anti-"Other" control. | Low |
| §7.2 | Re-screening: **one** re-screen permitted; the re-screen receives a **new** participant ID linked to the original via a "Previous participant ID" field and a *Re-screen of 1047-026* banner; a second attempt is blocked (`AX-5001`) and requires medical monitor approval | Single re-screen is **canon** (`STUDY_FACTS.md` §5). The linkage mechanism — new ID, previous-ID field, banner, hard block — is entirely invented. An alternative real design re-uses the original ID with a suffix; the new-ID design was chosen because it keeps each screening episode a closed record. | Med (mechanism) / Canon (single re-screen) |
| §7.3 | Randomization asks region (system-derived from the site, read-only) and baseline vIGA-AD (3 vs 4, entered) | Stratification factors are canon (`STUDY_FACTS.md` §3, itself flagged ASSUMED). Deriving region from the site number rather than asking is invented, and is the correct design since region is a site property; Site 1047 = North America is canon (`RESEARCH_SITE.md` §1). | High |
| §7.3 | Eligibility confirmation wording; Investigator-only enforcement returning `AX-3007` | Invented. | Med |
| §7.3 | Three-step flow ending in a password re-entry as electronic signature | Invented. The signature step traces to 21 CFR Part 11 §11.200(a)(1) (two distinct identification components). | Med |
| §7.3 | Randomization returns a 6-digit number and exactly **one** kit; the kit panel is a table because the platform supports multi-kit regimens, but ROCKET-Horizon always has one row | 6-digit randomization number and 6-digit kit number are canon (§11). One kit per dosing visit follows from canon §4 (carton of 2 PFS = one 300 mg dose). The explanation of *why* the panel is a table is invented realism. | High (one kit) / Low (panel) |
| §7.3 | Confirmation must be printed, signed, dated, and filed as a source document | Invented as procedure; traces to 21 CFR Part 11 §11.10(b). | Med |
| §7.3.1 | Randomized-in-error procedure: stop, do not dispense, call help desk, call medical monitor, **number consumed and retired, never re-used**, status set to *Discontinued — randomized in error*, kit returned or quarantined, protocol deviation logged, Keystone IRB notified | Entirely invented procedure. The "number is retired, not recycled" rule is the key invented element and is the one sites most often assume otherwise. Contacts are canon: Ana Belmonte-Ruiz MD (`STUDY_FACTS.md` §10); Keystone IRB (§9); Cascade SOP-018 (`RESEARCH_SITE.md` §7). | Med |
| §7.4 | Dispensing performed at the point the kit is released from the pharmacy, after predose assessments — explicitly not at the start of the visit | Invented guidance; consistent with canon's ordering rule that predose assessments precede IP administration (`STUDY_FACTS.md` §5). | Med |
| §7.4 | Out-of-window dates are a **warning** (`AX-2011`), not a block; already-recorded visits are blocked (`AX-2014`) | Invented. Warn-not-block on windows is the right design — a site must be able to record what really happened. | Med |
| §7.4 | **Pharmacy double-check**: two delegated staff independently verify the carton number against the printed confirmation before the carton leaves the pharmacy, both initial and date | Invented procedure. Staffing named from canon (`RESEARCH_SITE.md` §2 — Chao on site Tue/Thu, hence the two-coordinator fallback). | Med |
| §7.5 | Visit-outcome transaction distinguishing *visit occurred, IP not administered* from *visit did not occur*; reason codes **ND01–ND08** | Entirely invented, including the codes. ND02 (pregnancy test) and ND03 (labs) map to canon's predose urine pregnancy test and central labs at dosing visits. | Med |
| §7.5 | Missed doses do not shift the schedule; doses are not made up; visits stay anchored to Day 1 | Invented statement, consistent with the fixed SoA in canon §5. | High |
| §7.5 | An unrecorded missed dose distorts the resupply forecast | Invented causal explanation; deliberately kept at the level of *effect* only, since the algorithm itself is IP Handling Manual scope. | Med |
| §7.6 | Kit-problem codes **KP01–KP07**; automatic quarantine on confirmation; optional same-visit replacement kit assignment; physical segregation; site never destroys on its own authority | Entirely invented. Quarantine-on-excursion and 24-h sponsor reporting are canon (`STUDY_FACTS.md` §4); the transaction that implements them is not. | Med |
| §7.7 | Shipment receipt within **24 hours**; unconfirmed shipments **suppress the next automatic resupply** | Both invented. The suppression rule is invented but is a real behaviour in many systems and is the most useful piece of consequence-reasoning in the section. | Med |
| §7.7 | Receipt questions: packing list, kit range from/to, count, damage, temperature monitor state (three options), receiver, date/time, disposition | Invented. Kit range 216440–216463 (24 kits) invented within the canon 100001–999999 range. | Med |
| §7.7 | Alarmed / missing / unreadable monitor **forces** quarantine — the system disables *Accept into stock* (`AX-4620`) | Invented enforcement. Chosen deliberately: making it a system block rather than a policy is what turns a rule into a control. | Med |
| §7.7 | Shipped by GlobalRx Logistics from a "Portland depot" | GlobalRx is canon (`STUDY_FACTS.md` §9); the Portland depot is invented. | Low |
| §7.8 | Quarantine screen fields including excursion start/end and min/max temperature; automatic sponsor and CRA notification; three sponsor dispositions (release / destroy / return to depot) | Entirely invented. The stability allowance referenced (cumulative ≤30 days at ≤25 °C) is canon (`STUDY_FACTS.md` §4) and is referenced, not restated as procedure. | Med |
| §7.8 | Worked excursion example (09–10-DEC-2023, 1.4–8.9 °C, door left ajar, TempTrak alarm escalated at 23:55) | Invented incident. TempTrak and the escalation chain are canon (`RESEARCH_SITE.md` §3). | Low |
| §7.9 | Two separate transactions — EOT at Week 24, EOS at Week 36 | Follows canon SoA: IRT transactions at Week 24 and Week 36, none at 28/32; Week 24 is EOT and primary endpoint, Week 36 is EOS. | High |
| §7.9 | Completion codes C01–C02; discontinuation codes **D01–D06** (*treatment discontinued, follow-up continues*) and **W01–W05** (*withdrawn from study*) | Every code invented. The two-heading split was required by the brief and is the operationally important part. W01/W02 cover Site 1047's actual two early terminations (`RESEARCH_SITE.md` §5). | Med |
| §7.9 | Participant record becomes read-only after EOS; remaining assigned kits auto-return to inventory | Invented. | Low |

## 7. Emergency unblinding

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §8 | Primary path in-system; backup +1 (800) 555-0164; medical monitor +1 (888) 555-0142 | **Canon** — `STUDY_FACTS.md` §10 ("Emergency unblinding | Axion IRT system (primary) → +1 (800) 555-0164 (backup)"), and the medical monitor's 24/7 line. | Canon |
| §8.1 | Justification standard: only when knowledge of assignment **will change immediate medical management** | Required by the brief; standard protocol language. | High |
| §8.1 | The explicit non-reasons list, including that **SAE reporting does not require unblinding** and that pregnancy is discussed with the medical monitor rather than auto-unblinded | Invented content, but each item is a genuine and common site misconception. The SAE item is the most important and is placed first. | Med |
| §8.1 | The "typically justified" examples (anaphylaxis, serious infection, overdose/medication error, treating clinician cannot proceed) | Invented, but mapped onto canon's AESI list (`STUDY_FACTS.md` §13 — anaphylaxis, serious/opportunistic infection). | Med |
| §8.2 | Contact the medical monitor **first when time allows**, and explicitly unblind-first-call-after when the clinical situation does not permit | Required by the brief. The explicit permission to skip the call in an emergency is an authored design choice: a rule a clinician must break in an emergency is a bad rule. | High |
| §8.2 | The unblinding decision is the Investigator's; out of hours use the PI pager | PI pager +1 (503) 555-0129 is canon (`RESEARCH_SITE.md` §1). Investigator-only decision is invented but standard. | Med |
| §8.3 | Three-step screen flow: mandatory reason with **50-character minimum**, medical-monitor-contacted radio, person requiring the information and their role; then type **UNBLIND** to confirm plus password re-entry; then assignment displayed | Every element invented, including the 50-character minimum and the type-to-confirm word. The type-to-confirm gate was chosen over a second button specifically because a button can be clicked by reflex. | Med |
| §8.3 | Action is **immediate, irreversible, permanently logged with name, role, date and time** | Required by the brief; traces to 21 CFR Part 11 §11.10(e). | High |
| §8.3 | Automatic notification to sponsor, medical monitor, and CRA "within minutes" | Recipients required by the brief; the timing is invented. | High (recipients) / Low (timing) |
| §8.4 | Containment rules: tell only clinicians who need it; **do not tell the rater**; do not enter the assignment in the eCRF; remaining kits auto-blocked; dosing normally stops but the PI decides with the medical monitor | Invented. The rater rule is the highest-value item and is grounded in canon: the co-primary endpoints are investigator-rated by DATG-certified raters (`STUDY_FACTS.md` §6, `RESEARCH_SITE.md` §2). | High (importance) / Med (mechanism) |
| §8.5 | Post-unblinding checklist with clocks: same-day source documentation; sponsor notification **within 24 h**; separate SAE report; Keystone IRB notification owned by Sam Oyelaran; deviation only if not protocol-justified (5 business days); **participant continues in follow-up** | 24-hour sponsor notification specified in the brief. Keystone IRB and Sam Oyelaran are canon (`STUDY_FACTS.md` §9; `RESEARCH_SITE.md` §2, §4). The 5-business-day deviation clock and the ownership assignments are invented. Cascade SOP-024 *Emergency Unblinding* is canon (`RESEARCH_SITE.md` §7). | Med |
| §8.5 | Unblinding does **not** automatically end participation; Week 24 and Week 36 data are still expected | Required by the brief; consistent with canon's 12-week safety follow-up. | High |
| §8.6 | Telephone path: information the agent will ask for; identity verification against the user list; break logged identically with the same notifications and obligations; printed confirmation emailed on restoration | Entirely invented procedure. The list of what the caller will be asked was written so it can be read aloud under pressure. | Med |

## 8. Reports

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §9 | Six site reports: Inventory on Hand, Expiry, Dispensing History, Participant Status, Shipment Status, Transaction Audit Trail; PDF and CSV export; scoped to Site 1047 | Five of the six were specified in the brief; Shipment Status was added because the receipt transaction needs a companion view. Export formats invented. | High (list) / Low (detail) |
| §9 | Recommended run cadences; Expiry Report owned monthly by the Site Investigational Pharmacist | Invented. Ownership assigned to Wen-Li Chao's role per canon delegation (`RESEARCH_SITE.md` §2). | Med |
| §9 | Audit trail is append-only; corrections appear as new rows referencing the original; nothing is overwritten | Traces directly to 21 CFR Part 11 §11.10(e). Not an assumption about regulation; the *implementation* is invented. | High |
| §9.1 | Withheld-reports table: no randomization list, no assignment on any report, no kit-to-treatment mapping, no allocation counts or ratios, no cross-site enrolment, no aggregate unblinding counts | Invented as a list, but each item is required by the double-blind design in canon §3. Listing absences explicitly is an authorial choice — it is the only way to stop a user hunting. | High |

## 9. Downtime and backup

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §10.2 | **Call the help desk before starting on paper**; the back end often remains available to the help desk even when the web front end is not, so the agent can transact on the site's behalf | Invented, and a deliberate design choice — it keeps the electronic record intact and makes paper genuinely last-resort. | Med |
| §10.3 | Paper forms **AX-BK-01** (randomization) and **AX-BK-02** (dispensing), reproduced blank in Appendix C | Form numbering and layout invented. Reproducing them inside the manual (rather than referencing a portal) is a deliberate choice: a downtime procedure that requires a website is not a downtime procedure. | Med |
| §10.3 | During total outage the site takes the **lowest-numbered available kit**, verified by two delegated staff — "the only circumstance in which the site chooses a kit" | Invented rule. Lowest-numbered-available is a common convention and is deterministic, which is what makes it auditable. | Med |
| §10.3 | Downtime fax **+1 (800) 555-0165**; email subject convention "DOWNTIME — 20210143 — Site 1047" | Fax number invented, adjacent to the canon help-desk number and within the fictional 555 convention (`STUDY_FACTS.md` §11). Canon lists no Axion fax. | Low |
| §10.3 | Randomization during total outage requires contacting the medical monitor first | Invented safeguard. | Med |
| §10.4 | **All downtime transactions entered within 24 h of restoration**, using the original event date/time; system flags retrospective entries and records both timestamps | 24-hour rule specified in the brief. The dual-timestamp behaviour is invented and traces to ALCOA+ contemporaneity. | High (rule) / Med (mechanism) |

## 10. Errors, corrections, access management

| Location in doc | Assumption | Rationale | Confidence |
|---|---|---|---|
| §11 | The eleven-row error table with self-correct verdicts and required documentation | Scenario list largely specified in the brief; verdicts, remedies, and documentation requirements invented. The near-uniform "no, call the help desk" answer is a deliberate design statement about validated systems. | Med |
| §11 | Governing rule: *if you think you have made an error, stop and call; do not attempt to fix it with another transaction* — with the double-dispense worst case | Invented, and the single most important behavioural instruction in the document. | High (value) / Med (specifics) |
| §11 | Wrong stratification value is a **protocol deviation**, not a typo, and requires medical monitor notification | Invented framing, but correct: a wrong stratum places the participant in the wrong randomization stream. Traces to ICH E9 §2.3. | High |
| §11 | Reprinted confirmations must be annotated with reason and print date, signed, and never backdated | Invented; ALCOA+ practice. | Med |
| §12 | Corrections only by the help desk under documented request; sponsor approval always required for randomization and stratification corrections; typical turnaround **2 business days**; expedite available | Required by the brief. The 2-business-day figure and the sponsor-approval carve-out are invented. | High (rule) / Low (turnaround) |
| §12 | Correction audit entry records old value, new value, applying help-desk user, requesting site user, and both timestamps; the original remains visible permanently | Invented implementation of 21 CFR Part 11 §11.10(e), which is quoted in substance. | High |
| §13.2 | Accounts deactivated within **5 business days** of departure, role change, or removal from the delegation log; deactivate first, update the log after | 5 business days invented. The deactivate-first sequencing is an authored recommendation. | Low (number) / Med (rule) |
| §13.2 | Accounts are **never transferred** to a replacement | Traces to 21 CFR Part 11 §11.100(a) — identification codes never reused or reassigned. | High |
| §13.3 | Periodic user access review **every 6 months**, via a *Site User List* report, signed and filed in the ISF; owned at Site 1047 by **Sam Oyelaran**, scheduled for June and December | Frequency, report name, and schedule invented. Ownership assigned to the Regulatory Coordinator, who per canon already maintains the delegation log and training records (`RESEARCH_SITE.md` §2). | Med |
| §13.4 | CRA verification checklist at monitoring visits | Invented; consistent with the canon monitoring cadence (`RESEARCH_SITE.md` §5). | Med |
| Appendix D | Error codes `AX-1002` … `AX-9000` with messages and required actions | Every code, message, and action invented. The numbering blocks (1xxx access, 2xxx visits, 3xxx randomization, 4xxx inventory, 5xxx status, 6xxx permissions, 9xxx system) are an invented but internally consistent scheme. | Low |
| Appendix A | Transaction quick-reference card, including "Three things that cannot be undone: randomization · dispensing · emergency unblinding" | The visit/transaction mapping is derived from canon §5. The card format and the three-irreversibles framing are invented. | High (mapping) / Med (framing) |

## 11. Scope boundaries deliberately observed

Recorded here so a reviewer can confirm the omissions are intentional rather than gaps.

| Excluded from this document | Owner named in the text instead |
|---|---|
| IP storage temperatures, refrigerator monitoring, excursion investigation, preparation, injection technique, destruction execution | Pharmacy Manual; Cascade SOP-007, SOP-009 |
| Sponsor supply forecasting, par levels, buffer stock, shipment sizing, depot logistics, label text, destruction authorisation | IP Handling Manual (sponsor) |
| eCRF completion, query resolution, data-entry conventions | Veriscribe EDC v9.2 User Manual |
| SAE identification, causality assessment, expedited reporting workflow | Safety Reporting Manual; Cascade SOP-012 |
| Eligibility criteria, dose, regimen, visit windows, endpoint definitions | Protocol 20210143, Amendment 3 (29-NOV-2023) |
| System validation, IQ/OQ/PQ, UAT scripts, change-control records | Sponsor/vendor validation file (discussed only in the outline, §4) |

The manual references each by name and does not restate its content. The one place the SoA is
reproduced (§7 preamble and Appendix A) is limited to *which visits carry an IRT transaction* and is
explicitly attributed to the protocol.

## 12. Known open points

| Point | Note |
|---|---|
| Canon's stratification factors are themselves marked ASSUMED in `STUDY_FACTS.md` §3 | The manual treats them as canon, as instructed. If the fact base is ever revised, §7.3 and Appendix C (Form AX-BK-01) must change together. |
| The re-screen linkage design (new ID + previous-ID field) is one of two plausible conventions | The alternative — re-using the original ID with a suffix — would change §7.2, §7.1's registration screen, and error `AX-5001`. Flagged in case another document in the corpus adopts the other convention. |
| No shipment or transaction ID convention exists in canon | `SHP-1047-NNNN` and `TX-1047-NNNNN` are introduced here. Any other document referring to shipments or IRT transactions should adopt them or a conflict will result. |
| Axion fax number `+1 (800) 555-0165` is introduced here | Canon lists only the voice number for Axion. Should be promoted to `STUDY_FACTS.md` §9 if other documents need it. |
| The Meridian/CRO escalation tier 3 in Appendix E is unnamed | Deliberate: naming a sponsor system owner would invent a person not in the canon contact directory. |
