> ⚠️ **SIMULATED DOCUMENT — GENERATED FOR TRAINING/GAME USE — NOT A GENUINE AMGEN DOCUMENT.**
> This file is fabricated source material for *icf-please*, a simulation game. It is based on the
> public ClinicalTrials.gov record for NCT05651711 but its operational content is invented. It must
> not be used for any clinical, regulatory, or medical purpose.

# VERISCRIBE EDC v9.2

## Site User Guide & eCRF Completion Guidelines

### ROCKET-Horizon — Protocol 20210143

**A Phase 3, Randomized, 24-week, Placebo-controlled, Double-blind Study to Assess the Efficacy,
Safety and Tolerability of Rocatinlimab (AMG 451) Monotherapy in Adult Subjects With
Moderate-to-severe Atopic Dermatitis (AD)**

| | |
|---|---|
| Sponsor | Amgen Inc., One Amgen Center Drive, Thousand Oaks, CA 91320-1799, USA |
| Sponsor protocol number | 20210143 |
| ClinicalTrials.gov | NCT05651711 |
| EU CT number | 2022-501538-44 |
| US IND | IND 145,882 |
| Protocol version in force | Amendment 3, Version 4.0, dated 29-NOV-2023 |
| EDC system | **Veriscribe EDC v9.2** (Veriscribe Data Systems) |
| Study database build | **20210143_PROD build 9.2.14**, released 08-DEC-2023 |
| **Manual version** | **Version 3.0** |
| **Manual date** | **11-DEC-2023** |
| Prepared by | Veriscribe Data Systems, with Clinical Data Management, Harborlight Clinical Research, Inc. (HCR), on behalf of Amgen Inc. |
| Distribution | All activated investigational sites; CRAs; sponsor data management |
| Confidentiality | Confidential. For use by qualified site personnel in the conduct of Protocol 20210143 only. |

---

## Version history

| Version | Date | Summary of change | Driver |
|---|---|---|---|
| 1.0 | 14-NOV-2022 | Initial issue for database go-live (build 9.1.6). | Study start-up |
| 2.0 | 06-JUN-2023 | Added FASS/HASS conditional-display rules (§7.13); added the eDiary compliance report (§7.16); expanded partial-date conventions; added the query-response cheat sheet (Appendix C). | Build 9.2.0 upgrade; cross-site query-quality review |
| 2.1 | 21-AUG-2023 | Corrected the EASI region-multiplier note; added error codes VS-114 and AE-207 to the glossary. | Site feedback |
| **3.0** | **11-DEC-2023** | **Aligned to Protocol Amendment 3 (29-NOV-2023) and build 9.2.14. Added the source-versus-eCRF section (§6.2). Added MFA re-authentication at signature (§11.4). Added quarterly SAE reconciliation (§10). Added the downtime paper-worksheet packet (§13). Restated the 5-business-day entry timeline with its justification (§6.1). New Appendix A eCRF index by visit.** | **Protocol Amendment 3; build release** |

Superseded versions are removed from site circulation and retained marked **SUPERSEDED** in the
Investigator Site File. At Site 1047 this is Sam Oyelaran's task under SOP-027.

---

## 1. Purpose, scope, and boundaries

### 1.1 Purpose

This manual tells you how to get a result **into the study database correctly and keep it clean**. It
covers system access, navigation, field-level completion rules for every eCRF in the study, edit
checks, queries, corrections, the investigator signature, and database lock.

### 1.2 Who this is for

Anyone at an activated site whose name appears on the Delegation of Authority log against a task that
produces or reviews study data. At Site 1047 that is Priya Raghunathan and Brendan Koss for most
entry, Wen-Li Chao for IP accountability, Marisol Duarte for sample-collection fields, Alonzo Vega for
history and AE-collection fields, and Dr. Okonkwo, Dr. Feist, and Dr. Nakamura for the
clinician-restricted fields and casebook signature.

### 1.3 What this manual is **not**

| If your question is… | Go to |
|---|---|
| *How do I perform an EASI, or what counts as lichenification?* | **Study Reference Manual v5.0** |
| *What is the Week 16 visit window?* | Protocol 20210143 Amd 3; Study Reference Manual §13 |
| *How do I register a screen failure, randomize, or request kits?* | **Axion IRT Manual** |
| *An SAE happened — who do I call, what form, what deadline?* | **Safety Reporting Manual** |
| *How do I ship a PK sample?* | Meridian Central Laboratories Lab Manual |
| *Where does the value go, what fires, and who signs it?* | **This manual** |

> **Entering an SAE in Veriscribe is not reporting it.** The 24-hour notification to Harborlight
> Global Patient Safety is a separate, mandatory act. See §10 and the Safety Reporting Manual.

---

## 2. Support and routing

Sites call the wrong number more often than any other operational error in this study. Use this table.

| Problem | Contact | Hours |
|---|---|---|
| Cannot log in; locked account; MFA device lost; page errors; system slow or down | **Veriscribe Helpdesk** · +1 (800) 555-0188 · `support@veriscribe.com` | **24/7** |
| New user account; role change; user removal | Your CRA — **Kevin Ostrander, CCRA** · `k.ostrander@harborlightcro.com` · +1 (503) 555-0188 | Mon–Fri 07:00–19:00 ET |
| "What does this query mean?"; "which value does the sponsor want?"; reconciliation listings | **HCR Clinical Data Management** · `dm.20210143@harborlightcro.com` | Mon–Fri 08:00–18:00 ET |
| Protocol interpretation, deviation questions, visit windows | CRA, then Clinical Trial Manager **Rosalind Achebe** · +1 (888) 555-0145 | Mon–Fri 07:00–19:00 ET |
| Medical judgment, eligibility, safety management | **Medical Monitor, Ana Belmonte-Ruiz, MD** · +1 (888) 555-0142 | 24/7 |
| eDiary device, participant login, missing diary data | **DayLog ePRO** · +1 (800) 555-0199 | 24/7, 14 languages |
| Lab result missing, wrong, or not loaded into the EDC | **Meridian Central Laboratories** · +1 (800) 555-0133 · `support@meridiancentrallabs.com` | 24/7 |
| Randomization or kit number wrong on the eCRF | **Axion IRT** · +1 (800) 555-0164 · `helpdesk@axionirt.com` | 24/7 |

When you call the Veriscribe helpdesk, have ready: site number (1047), your user ID, the participant
ID, the visit, the form, and the **error code** shown on screen. Every Veriscribe error code is in
Appendix D.

---

## 3. System requirements and availability

### 3.1 Browsers

| Supported | Version | Notes |
|---|---|---|
| Google Chrome | Current release and one prior | Recommended |
| Microsoft Edge | Current release and one prior | |
| Mozilla Firefox | Current ESR and current release | |
| Apple Safari | 16.x and later | macOS only; iPadOS is **not** validated |

Minimum screen resolution 1366 × 768. JavaScript and cookies must be enabled. Pop-up blocking must
allow `*.veriscribe.com`, or the audit-trail viewer and the signature dialog will silently fail to
open. Mobile phones are not a validated platform.

Veriscribe is a **validated** system. Do not install browser extensions that modify page content
(auto-fill, translation, form assistants) on the data-entry workstation. At Site 1047, entry is
performed on the research VLAN workstations only.

### 3.2 Availability and the maintenance window

The production environment is available **24/7** except:

- **Scheduled maintenance: every Sunday 02:00–06:00 UTC** (Saturday 18:00–22:00 PT for Site 1047).
  The system is unavailable for the whole window.
- **Quarterly extended maintenance:** the first Sunday of February, May, August, and November,
  02:00–10:00 UTC. Announced by banner 14 days ahead.
- **Emergency maintenance:** announced by banner and by email to all site users as far ahead as
  possible.

Plan around it. A Friday-evening catch-up session that runs into Saturday 18:00 PT will end abruptly,
and unsaved forms will be lost. See §13 for what to do if the system is down when a deadline falls.

### 3.3 Training and the training environment

A separate **TRAINING** environment (`train.veriscribe.com`) holds practice participants 9999-001
through 9999-010. Use it freely. It is a different database; nothing you type there reaches
production, and nothing you type in production can be practised there first. Confirm the environment
banner colour before you type: **PRODUCTION is red, TRAINING is grey.**

---

## 4. Access and security

### 4.1 Getting an account

1. The site notifies the CRA that a new user requires access, giving full name, role, email, and the
   date they were added to the Delegation of Authority log.
2. The CRA confirms the **prerequisites**: current GCP certification (ICH E6(R3), CITI Program);
   protocol training on Amendment 3 documented; delegation log signed by the PI; Veriscribe site-user
   training module completed with the certificate on file.
3. HCR Data Management raises the account request. Provisioning takes **2 business days**.
4. The user receives an activation email valid for **72 hours**, sets a password, and enrols in MFA.

You cannot have an account before you are on the delegation log. You cannot enter data before you have
an account. Plan for this: a new coordinator starting the week of a Day 1 visit will not be able to
enter that visit.

### 4.2 Password policy

| Rule | Value |
|---|---|
| Minimum length | 12 characters |
| Composition | At least one upper case, one lower case, one digit, one special character |
| Expiry | 90 days |
| Re-use | Last 12 passwords blocked |
| Failed attempts | Account locked after 5 consecutive failures |
| Unlock | Veriscribe Helpdesk, with identity verification |
| Inactivity | Account auto-suspended after **90 days** with no login; reactivation requires a CRA request |

### 4.3 Multi-factor authentication

MFA is **mandatory** for every user. At first login you enrol either an authenticator app (TOTP,
recommended) or SMS to a personal or site mobile number. You receive ten single-use backup codes;
print them and store them in the Investigator Site File, not on a sticky note beside the monitor.

MFA is challenged:

- at every login from a new device or browser profile;
- every 14 days on a recognised device;
- **every time an investigator applies an electronic signature**, without exception (§11.4).

If you lose your MFA device, call the Veriscribe Helpdesk. They will re-enrol you after identity
verification. They will not do it by email.

### 4.4 Session timeout

The session ends after **20 minutes of inactivity**. Two minutes before, a countdown dialog appears
and you may extend. If the session ends, **unsaved fields on the open form are lost** — Veriscribe
does not auto-save drafts.

Practical consequence: on long forms (EASI, SCORAD, HADS) save after each section rather than at the
end. A partially completed saved form is normal and is not an error state.

### 4.5 The rules that get people fired

> **Never share your credentials.** Not with a colleague, not with your CRA, not with the PI, not for
> five minutes, not to help someone meet a deadline.
>
> **Never enter data under another person's login.** Under 21 CFR Part 11 an electronic signature and
> a system login are unique to one individual and are legally equivalent to that person's handwritten
> signature. Data entered under someone else's ID is attributed to them in the audit trail. It is a
> falsified record even when every number is correct.
>
> **Never let anyone else use your session.** If you walk away, lock the workstation.

If you find yourself needing to break one of these rules to get the work done, the workflow is wrong
and the CRA needs to know. That is a survivable conversation. The alternative is not.

### 4.6 Offboarding

When a user leaves the site or is removed from a delegated task, the site notifies the CRA **within 1
business day**. HCR deactivates the account within 1 further business day. Deactivation does not
delete anything: the user's historical entries, signatures, and audit-trail records remain intact and
permanently attributed. At Site 1047, Sam Oyelaran triggers this alongside the delegation-log end
date under SOP-021.

### 4.7 Periodic access review

Every **6 months** (March and September), HCR sends the PI a **User Access Review** listing every
active Veriscribe user at Site 1047, their role, and their last login. The PI must confirm or amend
the list and return it within **10 business days**. An unreturned review is escalated to the CTM and
recorded as a site-level finding.

This is not paperwork theatre. The most common Part 11 access finding at close-out is an active
account belonging to a coordinator who left eight months earlier.

### 4.8 Roles

| Role | Can do | Site 1047 |
|---|---|---|
| **Site Data Entry** | Enter and edit all non-restricted fields; answer queries; run reports | Priya Raghunathan, Brendan Koss |
| **Site Data Entry (limited)** | As above, restricted to assigned form groups | Wen-Li Chao (IP forms), Marisol Duarte (sample-collection fields) |
| **Investigator** | All of the above, **plus** eligibility determination, AE causality and severity, clinical-significance flags, and casebook signature | Dr. Okonkwo (PI), Dr. Feist, Dr. Nakamura |
| **Clinical (non-investigator)** | Entry, plus AE collection fields; **cannot** enter eligibility determination, causality, or vIGA-AD/EASI ratings | Alonzo Vega, FNP-C |
| **Site Read-only** | View and export; no entry | Sam Oyelaran |
| **Monitor** | View, raise manual queries, apply source-verification flags; **cannot enter or change data** | Kevin Ostrander, CCRA |

If a field you expect to edit is greyed out, check this table before calling the helpdesk. The system
is almost certainly enforcing your delegated role correctly.

---

## 5. Navigation

### 5.1 Site dashboard

This is the landing page after login.

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ VERISCRIBE EDC 9.2   ●PRODUCTION                    P. Raghunathan | Site 1047 | ⏻ │
│ Study 20210143 · ROCKET-Horizon                                                     │
├────────────────────────────────────────────────────────────────────────────────────┤
│ ⚑ 6 OPEN QUERIES   ⏱ 2 OVERDUE FORMS   ✎ 3 AWAITING SIGNATURE   ⌁ 1 eDIARY <70%   │
├────────────────────────────────────────────────────────────────────────────────────┤
│ Participants                                     [+ Add Participant]  [Search ____] │
│                                                                                     │
│  ID        Status          Last visit    Next due     Forms   Qry  Sig   Flags      │
│  1047-001  ● Completed     W36 08-NOV    —            ▣ 100%   0   ✔     —          │
│  1047-006  ● On treatment  W12 04-DEC    W16 01-JAN   ▨  92%   2   ◷    ⏱ 1 overdue │
│  1047-011  ◐ Screening     Scr 05-DEC    D1  12-DEC   ▨  60%   1   ◷    ⌁ eDiary 64%│
│  1047-012  ○ Screen fail   Scr 21-NOV    —            ▣ 100%   0   ✔     —          │
│  1047-013  ● On treatment  W20 07-DEC    W24 04-JAN   ▨  95%   0   ◷    ⏱ 1 overdue │
│  1047-014  ⊘ Early term.   ET  12-OCT    —            ▨  97%   0   ◷     —          │
│  1047-024  ● On treatment  W08 06-DEC    W12 03-JAN   ▨  88%   3   ◷     —          │
│                                                       ‹ 1 2 ›   Showing 7 of 23     │
└────────────────────────────────────────────────────────────────────────────────────┘
```

**Status icons — participant**

| Icon | Meaning |
|---|---|
| ◐ | Screening — consented, not yet randomized |
| ● | On treatment / in follow-up |
| ○ | Screen failure |
| ⊘ | Early termination |
| ● Completed | Week 36 EOS complete |

**Flags**

| Flag | Meaning | Action |
|---|---|---|
| ⚑ n | Open queries on this participant | Answer within 3 business days (§8.4) |
| ⏱ | One or more forms past the 5-business-day entry deadline | Enter today |
| ⌁ | eDiary compliance below 70% over the trailing 14 days | Re-train per SRM §9 |
| ◷ | Casebook has unsigned visits | PI review |
| ✔ | All visits signed | — |

**Colour convention.** Red = action required and overdue. Amber = action required, within target.
Green = no action. Grey = not yet applicable. Colour is never the *only* carrier of meaning — every
coloured element also has a glyph, for accessibility and for the CRA's monochrome printouts.

### 5.2 Participant casebook

Click a participant ID.

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ 1047-024 · Randomized 204518 · Enrolled 12-JUN-2023          [Casebook] [Audit] [⇩]│
├────────────────────────────────────────────────────────────────────────────────────┤
│  Visit             Date          Window   Forms          Queries  Status   Signed   │
│  Screening         02-JUN-2023   —        12/12  ▣       0        Clean    ✔ 21-JUN │
│  Day 1 / Week 0    12-JUN-2023   —        18/18  ▣       0        Clean    ✔ 28-JUN │
│  Week 2            26-JUN-2023   Day 15 ✔  9/9   ▣       0        Clean    ✔ 10-JUL │
│  Week 4            10-JUL-2023   Day 29 ✔ 14/14  ▣       0        Clean    ✔ 24-JUL │
│  Week 8            08-AUG-2023   Day 58 ⚠ 13/13  ▣       1 ⚑      Query    ◷        │
│  Week 12           05-SEP-2023   Day 86 ✔ 16/16  ▣       2 ⚑      Query    ◷        │
│  Week 16           03-OCT-2023   Day 114 ✔ 16/16 ▣       0        Clean    ✔ 17-OCT │
│  Week 20           31-OCT-2023   Day 142 ✔ 11/11 ▣       0        Clean    ✔ 14-NOV │
│  Week 24           06-DEC-2023   Day 178 ⚠ 15/17 ▨       0        Incompl. ◷        │
│  Week 28           — not started                                                     │
│  Unscheduled 01    18-JUL-2023   —         4/4   ▣       0        Clean    ✔ 01-AUG │
└────────────────────────────────────────────────────────────────────────────────────┘
```

The **Window** column shows the actual study day and whether it fell inside the protocol window
(✔ inside, ⚠ outside). An out-of-window visit is not blocked by the system — it is recorded, and it
generates a protocol deviation that must be entered on the Protocol Deviation form (§7.21).

**Form status glyphs:** ▣ complete · ▨ partially complete · ▢ not started · ⚑ query open ·
✔ signed · ◷ awaiting signature · 🔒 locked (post-freeze, read-only).

### 5.3 Visit folder

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ 1047-024 › Week 24 (Day 178) · Visit date 06-DEC-2023          15/17 forms complete │
├────────────────────────────────────────────────────────────────────────────────────┤
│  ▣ Visit Date & Status              ▣ Vital Signs           ▣ Physical Exam (full)  │
│  ▣ Weight                           ▣ 12-lead ECG           ▣ vIGA-AD / rIGA        │
│  ▣ EASI                             ▣ BSA Involvement       ▣ SCORAD                │
│  ▣ FASS / HASS                      ▣ DLQI                  ▣ POEM                  │
│  ▣ HADS                             ▨ Laboratory Collection ▢ eDiary Compliance     │
│  ▣ Concomitant Medications (log)    ▣ Adverse Events (log)  ▣ Rescue Therapy        │
│  ▢ Study Completion / Discontinuation                                                │
└────────────────────────────────────────────────────────────────────────────────────┘
```

Log-type forms (Concomitant Medications, Adverse Events, Protocol Deviations, Comments) are *not*
visit-specific. They appear in every visit folder as a shortcut but hold one continuous list per
participant. Adding a record from the Week 24 folder does not tie the record to Week 24.

### 5.4 A form

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ 1047-024 › Week 24 › VITAL SIGNS                       Form VS · v9.2.14 · ▣ Saved  │
├────────────────────────────────────────────────────────────────────────────────────┤
│ Were vital signs performed?   (•) Yes   ( ) No                                      │
│ Date of assessment            [06-DEC-2023]   (DD-MMM-YYYY)                         │
│ Time of assessment            [09:14]  24h                                          │
│ Position                      [Seated ▾]     Rest before measurement ≥5 min (•)Y ( )N│
│ Systolic BP                   [ 118 ] mmHg      integer 60–260                      │
│ Diastolic BP                  [  74 ] mmHg      integer 30–150                      │
│ Pulse                         [  71 ] bpm       integer 30–200                      │
│ Respiratory rate              [  16 ] /min      integer 6–40                        │
│ Temperature                   [ 36.8 ] °C       1 decimal, 33.0–42.5                │
│   ⚑ Q-2291 OPEN · DM · "Temperature 38.9 recorded at W20; please confirm whether an │
│      AE was assessed." → [Answer]                                                   │
├────────────────────────────────────────────────────────────────────────────────────┤
│ [Save]  [Save & Next]  [Mark Complete]        Last modified 08-DEC-2023 11:02 PT PR │
│                                               [View Audit Trail]                     │
└────────────────────────────────────────────────────────────────────────────────────┘
```

Field-level query flags appear inline, attached to the field they concern. Form-level queries appear
in a banner above the first field.

---

## 6. General data entry rules

### 6.1 The 5-business-day entry timeline

**All data from a visit must be entered within 5 business days of the visit date.**

This is a sponsor requirement, not a suggestion, and it is monitored (§12). It exists for four
reasons. **Contemporaneity** — ALCOA+ requires records to be contemporaneous, and a value entered five
weeks later is a weaker record however carefully transcribed. **Safety signal detection** — with 151
activated centres and a DMC reviewing quarterly plus ad hoc, an AE entered in March that occurred in
January is invisible to the February review. **Query turnaround** — queries are generated from entered
data, so late entry pushes the site's work into close-out. **Memory** — three weeks on, the
coordinator answering a query cannot recall whether the participant said "since Tuesday" or "about a
week".

**Exceptions to the 5-day clock:**

| Data | Timeline |
|---|---|
| Central laboratory results | Arrive electronically from Meridian, typically 3–7 days after receipt. No site action. |
| eDiary data | Arrive nightly from DayLog. No site action. |
| Randomization / kit assignment | Arrives from Axion IRT within minutes of the transaction. |
| **SAEs** | eCRF entry within 5 business days, **but the 24-hour notification to safety is independent and comes first.** |
| Results pending at visit (e.g. local pathology) | Enter the form with the pending field marked, then update within 5 business days of receipt. |

### 6.2 Source, eCRF, and when the eCRF *is* the source

This distinction determines how you correct an error, so it is worth two minutes.

**Pattern 1 — Transcribed.** The result exists first somewhere else: the paper EASI worksheet, the
Modernizing Medicine EMA chart note, the ECG tracing, Wen-Li Chao's accountability log. The eCRF is a
transcription. The original stays at the site and the CRA verifies against it.

**Pattern 2 — Direct data entry.** The result is typed straight into Veriscribe and exists nowhere
else. If you read the blood pressure off the monitor and type it into the Vital Signs form with no
worksheet in between, **that eCRF field is the source record.** Three consequences: it must be entered
during or immediately after the visit; the audit trail is the entire correction history; and there is
nothing for the CRA to verify it against, so accuracy at first entry is the only control.

**Pattern 3 — Electronically transferred.** Meridian lab results, DayLog diary entries, Axion IRT
randomization and kit numbers. The originating system is the source; the EDC holds a copy. **You
cannot edit these fields**, and a correction must be made by the originating vendor and re-transmitted.

**The test:** *if Veriscribe vanished tonight, could I reconstruct this value from paper or another
system?* If no, the eCRF is your source. Do not print eCRFs and file them as source — a printout of a
transcription is a second-generation copy that will disagree with the database the moment anything is
corrected.

> **Enter from source. Never from memory.** Reconstructing Tuesday's vitals on Friday from what you
> remember is fabrication, even if the numbers happen to be right. If a source record was never made,
> the honest entry is a "not done" with the reason — and a protocol deviation.

### 6.3 What "complete" means

Veriscribe distinguishes three states, and they are not the same thing:

| State | Meaning |
|---|---|
| **Entered / Complete** | Every required field holds a value or an explicit not-done/unknown code, and the form is saved and marked complete. |
| **Clean** | Complete, **and** no open queries. |
| **Signed** | Clean, **and** the investigator has applied an electronic signature to the casebook. |

A form can be complete and dirty. It cannot be signed and dirty — and if it becomes dirty after
signature, the signature breaks (§11.5).

### 6.4 Field conventions

| Convention | Rule |
|---|---|
| Required fields | Marked with a red asterisk. Leaving one blank blocks **Mark Complete**. |
| Dates | `DD-MMM-YYYY`. The date picker enforces the format. Typed entry accepts `06DEC2023` or `06-DEC-2023`; it rejects `12/06/2023` because that is ambiguous internationally. |
| Times | 24-hour `HH:MM`, site local time. Do not enter AM/PM. |
| Future dates | Blocked on all assessment forms. A hard stop, error `SYS-004`. |
| Numbers | Enter exactly the precision the field shows. Temperature 1 decimal, weight 1 decimal, height 1 decimal, BSA integer, lab values as reported. Do not round to make a value look tidy. |
| Units | Fixed and displayed beside the field. **You cannot change the unit.** If your source is in pounds, convert before entry and record the conversion on the worksheet. |
| Text | Plain text. No abbreviations, no site shorthand, no emoji, no special characters beyond `- . , / ( ) %`. |
| Case | Type normally. The system does not care; downstream coding does not either. |

### 6.5 Partial and unknown dates

Real dates are sometimes incomplete — a medication started "sometime in 2019", an AE that began "last
month". Veriscribe accepts partial dates on the forms where they are legitimate: Medical History, AD
History, Concomitant Medications, and prior-therapy fields.

```
 Start date   [ UNK ]-[ MAR ]-[ 2019 ]     ☑ Day unknown
 Start date   [ UNK ]-[ UNK ]-[ 2019 ]     ☑ Day unknown  ☑ Month unknown
```

Rules:

- You may leave **day** unknown, or **day and month** unknown. **Year is always required.** A fully
  unknown date is not acceptable; if the participant genuinely cannot place it in a year, record the
  medication or condition with a Comments entry explaining the uncertainty and enter the earliest
  plausible year.
- Partial dates are **not** permitted for: informed consent, visit dates, dosing dates, sample
  collection dates, AE onset, AE resolution, or death. These must be complete. If an AE onset is
  genuinely uncertain, use the earliest date on which the participant is confident the event was
  present, and explain in the AE comment field.
- Ticking a partial-date box changes the edit checks. A medication with an unknown start month will
  not fire the "start date after stop date" check on the missing component.

### 6.6 Not done, unknown, and not applicable

Blank means nothing. It could mean not done, forgotten, refused, or lost in a data transfer, and the
database cannot tell the difference. So Veriscribe forces the distinction.

| Code | Use when | Reason required |
|---|---|---|
| **ND — Not Done** | The assessment was scheduled and was not performed | **Yes** |
| **UNK — Unknown** | The value existed but cannot be determined | **Yes** |
| **NA — Not Applicable** | The field does not apply (e.g. urine pregnancy test in a male participant) | No |

The reason field is free text with a picklist of common values: *participant declined · participant
left early · assessment not performed in error · equipment unavailable · sample not obtained ·
insufficient sample · outside visit window · other (specify)*.

"Assessment not performed in error" is an honest answer and is often also a protocol deviation. Enter
it anyway. Data managers can work with a documented gap; they cannot work with a blank.

---

## 7. eCRF completion guidelines

Every form below follows the same shape: **purpose · when · source · fields · checks · common
errors.** Appendix A lists which forms appear at which visit.

### 7.1 Visit Date & Status

**Purpose.** Anchors every other form in the visit. **When.** First form of every visit, before
anything else. **Source.** Appointment record and visit worksheet.

Fields: visit performed (Yes / No — not done); visit date; visit type (scheduled / unscheduled / ET);
if not performed, reason. The visit date drives the study-day calculation, the window check, and the
5-business-day entry clock. Get it right first; changing it later re-fires every date-dependent check
in the visit.

**Checks.** `VIS-101` visit date before the previous visit date (hard stop). `VIS-104` study day
outside the protocol window (query, not a stop). `VIS-107` visit date in the future (hard stop).

### 7.2 Informed Consent

**Purpose.** Establishes the legal and temporal boundary of the participant's participation.
**When.** Screening, before any protocol procedure. **Source.** The signed ICF itself.

| Field | Guidance |
|---|---|
| Consent obtained | Yes / No. "No" ends the record. |
| **Date of consent** | The date the **participant** signed. Not the date the PI countersigned, if different. |
| **Time of consent** | 24-hour. Required, because same-day procedures must be shown to follow consent. Take it from the ICF signature block, not from memory. |
| ICF version signed | Picklist. Site 1047 uses **v4.0.1 (29-NOV-2023)**, IRB-approved 19-DEC-2023. Earlier participants show earlier versions — do not "correct" a historical version to the current one. |
| Consent obtained by | Picklist of delegated staff. |
| Optional genomic consent | Yes / No / Declined. Separate signature; separate date. |
| Re-consent | Additional rows for each re-consent, with version and date. |

**Checks.** `IC-201` **any procedure date earlier than the consent date** — hard stop on save of the
offending form, and a form-level query on the consent form. This includes screening labs, the first
eDiary entry, and the screening EASI. `IC-203` consent time later than the earliest same-day procedure
time (query). `IC-205` ICF version not IRB-approved on the consent date (query).

**Common errors.** Entering the PI countersignature date. Leaving the time blank because "it was
obviously first". Selecting the current ICF version for a participant consented under an earlier one.

### 7.3 Eligibility Criteria (Inclusion / Exclusion)

**Purpose.** Documents that each criterion was assessed. **When.** Screening, then confirmed at Day 1
before randomization. **Source.** Eligibility checklist worksheet, signed by the PI or Sub-I.

Each inclusion and exclusion criterion is a separate **Yes / No** item. There is no "N/A". The form
does not accept a global "eligible: yes".

```
 INCLUSION                                                          Met?
 1. Age ≥18 years at signing of informed consent                    (•)Yes ( )No
 2. AD per AAD Consensus Criteria (2014), present ≥12 months        (•)Yes ( )No
 3. Inadequate response to medium/higher-potency TCS (±TCI), or
    topical treatment medically inadvisable                         (•)Yes ( )No
 4. EASI ≥16                                                        (•)Yes ( )No   ← auto-cross-checked
 5. vIGA-AD ≥3                                                      (•)Yes ( )No   ← auto-cross-checked
 6. ≥10% BSA AD involvement                                         (•)Yes ( )No   ← auto-cross-checked
 7. Worst Pruritus NRS ≥4 (weekly average from eDiary)              (•)Yes ( )No   ← auto-cross-checked
 EXCLUSION  (answer "Yes" = criterion is PRESENT = participant excluded)
 1. Biologic within 12 weeks or 5 half-lives, whichever is longer   ( )Yes (•)No
 …
 Eligibility determination by  [Okonkwo, Miriam A., MD ▾]   Date [12-JUN-2023]
```

**Checks.** `ELG-301` any inclusion answered **No**, or any exclusion answered **Yes**, **blocks
randomization** — the Randomization form cannot be opened and the IRT randomization call will be
rejected. `ELG-304` inclusion 4/5/6/7 answered Yes but the corresponding EASI, vIGA-AD, BSA, or eDiary
NRS value on the assessment forms does not support it (query — this is the cross-form check that
catches most screening errors). `ELG-309` eligibility determination signed by a user without
Investigator role (hard stop).

**Common errors.** Coordinators answering the criteria — only a delegated investigator may. Answering
exclusion criteria in the inclusion sense ("No, they don't have that" entered as "No" is correct;
"Yes, they're fine" is not). Waiver requests: **there are no waivers.** A participant who does not
meet a criterion is a screen failure. If the site believes a criterion was misapplied, call the
Medical Monitor before touching the form.

### 7.4 Demographics

**When.** Screening. **Source.** Participant report, recorded on the demography worksheet.

Fields: year of birth (full date of birth is **not** collected — enter year only); age at consent
(auto-calculated, read-only); sex at birth; childbearing potential (female participants only —
conditional); ethnicity; race (multi-select, per FDA categories, with "not reported" and "unknown" as
distinct options); country.

**Checks.** `DM-401` calculated age <18 (hard stop). `DM-404` childbearing potential "Yes" but no
pregnancy test recorded at Screening (query).

**Common errors.** Recording "not reported" when the participant actually declined — those are
different categories and both exist. Leaving race blank; use the explicit codes.

### 7.5 Medical History

**When.** Screening. **Source.** Chart review and participant interview, on the medical history
worksheet.

One row per condition. Fields: condition (verbatim, plain language); body system (picklist); start
date (partial permitted); ongoing (checkbox) or stop date; treated (Y/N).

Record conditions that are clinically relevant or that bear on eligibility. Do not record every entry
in a 20-year chart. Do record: everything in the exclusion criteria; all significant infections;
malignancy; cardiac, hepatic, renal, and thyroid history; and all atopic comorbidities (asthma,
allergic rhinitis, food allergy).

**Checks.** `MH-501` stop date before start date (hard stop). `MH-503` ongoing ticked **and** stop
date entered (hard stop). `MH-506` a condition matching an exclusion-criterion term recorded but the
matching exclusion criterion answered "No" (query).

### 7.6 Atopic Dermatitis History

**When.** Screening. **Source.** Chart and interview.

Fields: age at AD diagnosis; **duration of AD in months** (auto-calculated from date of diagnosis,
read-only); diagnostic criteria met (AAD Consensus Criteria 2014 — Yes/No); prior AD therapies (log:
therapy class, potency where applicable, start/stop, response — adequate / inadequate / not
tolerated); prior systemic therapy (Y/N with detail); current AD flare duration.

**Checks.** `ADH-601` calculated duration <12 months (hard stop against inclusion 2). `ADH-604` no
TCS therapy recorded with "inadequate response" and no "topical treatment medically inadvisable"
justification (query against inclusion 3).

### 7.7 Randomization — read-only

**Purpose.** Records the randomization event. **When.** Day 1, after eligibility confirmation.
**Source.** **Axion IRT.** The site never types on this form.

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ 1047-024 › Day 1 › RANDOMIZATION                       🔒 READ-ONLY · SOURCE: IRT   │
├────────────────────────────────────────────────────────────────────────────────────┤
│ Randomization number       204518                                                   │
│ Randomization date/time    12-JUN-2023 08:41 PT                                     │
│ Stratum — region           North America                                            │
│ Stratum — baseline vIGA-AD 4                                                        │
│ Kit numbers assigned       417203, 417204                                           │
│ IRT transaction ID         AX-20230612-0841-1047                                    │
│ Data received from Axion IRT 12-JUN-2023 08:43 PT                                   │
└────────────────────────────────────────────────────────────────────────────────────┘
```

**How the integration works.** When you complete the randomization transaction in Axion IRT, Axion
sends a message to Veriscribe. The Randomization eCRF populates automatically, usually within 2
minutes and always within 30. Treatment assignment is **not** transmitted — this is a double-blind
study and the field does not exist in the site-facing database.

**If the form is empty after 30 minutes**, call Axion first (+1 (800) 555-0164) to confirm the
transaction completed, then Veriscribe (+1 (800) 555-0188) if Axion confirms it did. Do not repeat the
IRT transaction. Do not open a query asking data management to type it in — they cannot.

**If a value is wrong**, it is wrong in IRT and must be corrected there. The corrected record
re-transmits and the eCRF updates, with both versions visible in the audit trail.

### 7.8 Vital Signs

**When.** Every visit. **Source.** Direct data entry from the monitor, or the vitals worksheet.

Fields as rendered in §5.4. Measure after ≥5 minutes seated rest, per the Study Reference Manual.

**Checks.** `VS-111` value outside plausible range (hard stop): SBP 60–260, DBP 30–150, pulse 30–200,
RR 6–40, temperature 33.0–42.5 °C. `VS-114` DBP ≥ SBP (hard stop). `VS-118` temperature ≥38.0 °C and
no AE recorded with an onset within ±2 days (query — pyrexia is a known event at 10.3% on active drug
and the sponsor checks this every time). `VS-121` change from the previous visit exceeding 40 mmHg
systolic (query).

**Common errors.** Entering temperature in Fahrenheit — the field is °C and 98.6 fails the range
check, which is the system doing its job. Entering the time the participant arrived rather than the
time of measurement.

### 7.9 Physical Examination

**When.** Full exam at Screening, Week 20, Week 24, Week 36; targeted exam at Day 1, Weeks 2, 4, 8, 12,
16, 28, 32. **Source.** Exam worksheet or chart note.

For each body system: **Normal / Abnormal / Not examined.** If abnormal: describe, and answer
**clinically significant Y/N** — an Investigator-role field. A clinically significant abnormality at
Screening becomes Medical History; a clinically significant abnormality after Day 1 becomes an Adverse
Event.

**Checks.** `PE-131` abnormal and clinically significant recorded post-baseline with no corresponding
AE (query). `PE-134` "clinically significant" completed by a non-Investigator role (hard stop).

### 7.10 Weight and Height

**When.** Height at Screening only. Weight at Screening, Day 1, Week 12, Week 24, Week 36.
**Source.** Calibrated scale and stadiometer; direct entry.

Height in cm to 1 decimal. Weight in kg to 1 decimal. BMI auto-calculated, read-only.

**Checks.** `WT-141` weight change >15% from Screening (query — this catches both real weight loss and
a transposed digit). `WT-144` height differing from the Screening value by >2 cm at any later visit
(hard stop; height is collected once and should not change).

### 7.11 12-lead ECG

**When.** Screening and Week 24. **Source.** The ECG tracing, which is retained as source and
initialled by the reviewing investigator.

Fields: performed Y/N; date; time; heart rate; PR, QRS, QT, QTcF intervals (ms, integer); overall
interpretation (normal / abnormal not clinically significant / abnormal clinically significant —
Investigator role).

**Checks.** `ECG-151` QTcF >480 ms (query, with a medical-monitor notification flag). `ECG-154`
interpretation abnormal-CS with no AE (query). `ECG-157` QT shorter than QRS (hard stop — a
transcription error).

### 7.12 EASI

**Purpose.** Co-primary endpoint component. **When.** Every visit. **Source.** The paper EASI
worksheet completed by the certified rater at the chairside, retained as source. At Site 1047 the
rater is usually Dr. Nakamura.

> **You enter components. You never enter a total.** The EASI total is calculated by the system from
> the values you type. There is no field for it. If the rater has written a total on the worksheet and
> it disagrees with the system's calculation, the **system is right and the worksheet arithmetic is
> wrong** — tell the rater, and do not adjust the components to make the total match.

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ 1047-024 › Week 24 › EASI                              Rater [Nakamura, Tessa, DO ▾]│
├────────────────────────────────────────────────────────────────────────────────────┤
│ Region        Area   Erythema  Edema/Pap  Excoriation  Lichenif.   Mult.  Subtotal  │
│               (0–6)   (0–3)     (0–3)       (0–3)        (0–3)                       │
│ Head/Neck      [2]     [1]       [1]         [0]          [1]       ×0.1     0.6    │
│ Upper limbs    [3]     [2]       [2]         [1]          [1]       ×0.2     3.6    │
│ Trunk          [3]     [2]       [1]         [1]          [2]       ×0.3     5.4    │
│ Lower limbs    [4]     [2]       [2]         [2]          [1]       ×0.4    11.2    │
├────────────────────────────────────────────────────────────────────────────────────┤
│ EASI TOTAL (calculated)                                                    20.8     │
│ Assessment date [06-DEC-2023]   Time [08:52]   Performed before other skin assess.  │
│                                                 and before eDiary review: (•)Y ( )N │
└────────────────────────────────────────────────────────────────────────────────────┘
```

Area scores are the 0–6 band score, **not** a percentage. Sign scores are whole integers 0–3;
half-steps are not permitted by this protocol's rating convention and the field will not accept them.
Every one of the twenty cells is required. A region with no involvement is entered as area 0 and all
four signs 0 — it is not left blank.

**Checks.** `EASI-161` any cell blank (blocks Mark Complete). `EASI-163` area 0 with a non-zero sign
score in the same region (hard stop — logically impossible). `EASI-166` **calculated total <16 at
Screening while inclusion criterion 4 is answered Yes** (hard stop; this is the single most common
screening error across the study). `EASI-169` total change >70% from the immediately preceding visit
(query). `EASI-172` rater not on the certified-rater list for Site 1047 (hard stop). `EASI-175`
assessment date differs from the visit date (query).

**Common errors.** Entering a BSA percentage in the area field. Skipping a clear region. Entering the
worksheet total somewhere in the Comments form "for reference" — do not; it creates a second,
conflicting record of a derived value.

### 7.13 vIGA-AD / rIGA

**When.** Every visit, by the certified rater, before any other skin assessment. **Source.** Rating
worksheet.

```
 vIGA-AD score   ( )0 Clear  (•)1 Almost clear  ( )2 Mild  ( )3 Moderate  ( )4 Severe

 ▼ appears only when vIGA-AD = 1 ───────────────────────────────────────────────────
 │ rIGA qualification — does the participant have ALL of the following?
 │   Only barely perceptible erythema ............................ (•)Yes ( )No
 │   No induration / papulation .................................. (•)Yes ( )No
 │   No lichenification .......................................... ( )Yes (•)No
 │   No oozing / crusting ........................................ (•)Yes ( )No
 │   → rIGA 0/1 criteria met (calculated):  NO
 └────────────────────────────────────────────────────────────────────────────────
```

**Dynamic form behaviour.** Veriscribe forms change shape in response to what you enter. The rIGA
block above does not exist on the form until you select vIGA-AD = 1; select 2 and it disappears again,
and any answers you had entered in it are **deleted, with the deletion recorded in the audit trail**.
The same pattern appears on FASS/HASS (§7.15), Concomitant Medications (ongoing / stop date), and
Study Completion (reason sub-questions). Nothing is broken when a section vanishes; you changed the
condition that summoned it.

Because vIGA-AD = 0 automatically satisfies rIGA 0/1 and scores 2–4 automatically fail it, the
sub-question is asked only in the one place where it is not determined by the score itself.

**Checks.** `IGA-181` vIGA-AD <3 at Screening with inclusion criterion 5 answered Yes (hard stop).
`IGA-184` rIGA sub-questions incomplete when vIGA-AD = 1 (blocks Mark Complete). `IGA-187` vIGA-AD
improving by 3 or more points in a single visit interval (query). `IGA-190` vIGA-AD recorded but no
EASI at the same visit (cross-form query).

### 7.14 BSA Involvement

**When.** Every visit. **Source.** Rating worksheet.

Single field: percentage of total body surface area with AD involvement, integer 0–100.

**Checks.** `BSA-191` <10% at Screening with inclusion criterion 6 answered Yes (hard stop).
`BSA-194` BSA and EASI grossly inconsistent — BSA ≤5% with EASI ≥20, or BSA ≥50% with EASI ≤5 (query;
this is a cross-form check and is the one that most often reveals a worksheet transcribed into the
wrong participant's record).

### 7.15 SCORAD, FASS, HASS

**SCORAD** — Day 1, Weeks 4, 8, 12, 16, 24, 36. Three parts: **A** extent (%, integer);
**B** six intensity items each 0–3 (erythema, oedema/papulation, oozing/crusting, excoriation,
lichenification, dryness on uninvolved skin); **C** two participant-reported VAS scores 0.0–10.0 to
one decimal (itch over the last 3 days, sleep loss over the last 3 days). The total is
**calculated** — again, you never type it.

The **C** components are participant-reported. The participant marks the VAS on the paper scale; the
coordinator measures it and enters the value. This is the one place in the study where a coordinator
legitimately transcribes a participant-derived number, because the instrument is a paper VAS.

**FASS / HASS** — Day 1, Weeks 4, 8, 12, 16, 24, 36. Facial and hand AD severity, each 0–4
(clear / almost clear / mild / moderate / severe).

Conditional logic: at Day 1 you answer **"Facial AD present at baseline? Y/N"** and **"Hand AD present
at baseline? Y/N"**. If No, that scale is suppressed at every later visit for that participant, because
the endpoint (FASS-clear / HASS-clear at Week 24) is defined only in participants with involvement at
baseline. This baseline answer cannot be changed after Day 1 is signed without a data-management
change request.

**Checks.** `SCR-201` VAS entered with two decimals (rejected). `SCR-204` extent (A) differing from
the BSA form by more than 15 percentage points at the same visit (query). `FH-211` FASS entered for a
participant with no facial AD at baseline (hard stop).

### 7.16 DLQI, POEM, HADS — participant-completed questionnaires

**When.** DLQI and POEM at Day 1, Weeks 4, 8, 12, 16, 24, 36. HADS at Day 1, Weeks 12, 16, 24, 36.
**Source.** The completed paper questionnaire, retained as source.

> **Who enters these:** a delegated site staff member transcribes the participant's answers from the
> completed paper form. The **participant does not use Veriscribe** and must never be shown the EDC.
> Your job is transcription with zero interpretation.

Rules that matter:

1. **Transcribe exactly.** If the participant ticked "a lot", enter "a lot" — not what you believe
   they meant, not what is consistent with their skin, not what they said out loud afterwards.
2. **Do not complete missing items on the participant's behalf**, and do not ask them to change an
   answer. If you notice a blank item **while the participant is still in the clinic**, you may hand
   the form back and ask them to review whether they intended to skip it. Once they have left, the
   item is missing.
3. **A missing item is recorded as missing.** Enter the item as **ND — Not Done** with the reason
   *"participant left item blank"*. Do not enter 0. Do not average the neighbours. The statistical
   analysis plan has scoring rules for missing items; inventing a value defeats them.
4. **Totals are calculated.** DLQI 0–30 from ten items 0–3; POEM 0–28 from seven items 0–4; HADS as
   two subscales, anxiety 0–21 and depression 0–21, from seven items each. You enter items.
5. **Questionnaires are completed before any clinical assessment or discussion of the participant's
   skin**, per the Study Reference Manual. The eCRF records the completion time so this can be
   verified.

**Checks.** `QS-221` one or more items blank with no ND code (blocks Mark Complete). `QS-224`
questionnaire completion time later than the EASI assessment time at the same visit (query).
`QS-227` **HADS depression subscale ≥11, or item 7 of the depression subscale scored 3** — generates a
query *and* an automatic notification to the Medical Monitor, per the safety escalation pathway in
Study Reference Manual §8.9. Answer this query promptly; it is not administrative.

**Common errors.** Entering a total from the participant's own arithmetic. Filling in a skipped item
after the participant leaves. Transcribing DLQI item 1 into item 2 and shifting the whole scale — read
the item numbers, not the positions.

### 7.17 eDiary / ePRO

**Purpose.** Daily Worst Pruritus NRS, AD Skin Pain NRS, and Sleep Disturbance NRS — the source of
several key secondary endpoints. **When.** Daily from consent through Week 24. **Source.**
**DayLog ePRO. The DayLog database is the source record.**

**How the data flow.** The participant enters three 0–10 scores on the provisioned handheld each
evening. DayLog transmits to Veriscribe in a nightly batch at approximately 03:00 UTC. Entries appear
in the participant's eDiary listing the following morning.

> **eDiary data are READ-ONLY at the site. You cannot change them. Neither can your CRA, your data
> manager, or the sponsor.** The participant's entry is the record, and it stands.

This is the rule sites find hardest, so here is the reasoning. The NRS is a participant-reported
outcome; its validity rests on it being the participant's own contemporaneous report, uninfluenced by
the site. The moment a site can amend a diary entry, every diary entry in the study becomes
questionable. The inability to correct it is the feature.

**When a participant tells you they entered a wrong number** — "I meant to put 3 on Tuesday, I hit 8
by accident" — do the following:

1. **Do not attempt to change the entry.** There is no mechanism, and requesting one is not
   appropriate.
2. Document the conversation in a **Note to File**, filed in the participant's source: date, what the
   participant reported, which diary day it concerns, and who they told.
3. Add a **Comments** eCRF record referencing the note (§7.26).
4. Do not re-train the participant *on that entry*; do re-train on device use if the report suggests a
   usability problem, and document the re-training.

The analysis will use the recorded value. That is correct and expected.

**What the site *does* enter:** the **eDiary Compliance Review** form at each visit listed in the SoA.

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ 1047-011 › Week 4 › eDIARY COMPLIANCE REVIEW                                        │
├────────────────────────────────────────────────────────────────────────────────────┤
│ Compliance since last visit (calculated from DayLog)          19 / 28 days = 68% 🔴  │
│ Longest gap                                                    5 consecutive days   │
│ Device functioning normally?              (•)Yes ( )No                              │
│ Compliance discussed with participant?    (•)Yes ( )No                              │
│ Re-training performed?                    (•)Yes ( )No   Date [05-DEC-2023]         │
│ Reason for non-compliance   [ Participant reports forgetting on weekends       ]    │
│ Device replaced?            ( )Yes (•)No                                            │
└────────────────────────────────────────────────────────────────────────────────────┘
```

**Checks.** `EPR-231` compliance <70% since the last visit with no re-training recorded (query).
`EPR-234` compliance <50% (query plus CRA notification). `EPR-237` fewer than 4 evaluable days in the
7 days before a visit at which a weekly average is an endpoint timepoint (query — the weekly average
may not be computable, which is an analysis problem, not a site error, but it must be documented).
`EPR-241` no diary entries at all since the previous visit and device reported functioning (query).

### 7.18 Study Drug Administration

**When.** Day 1, Weeks 2, 4, 8, 12, 16, 20 — the seven dosing visits. **No dose at Week 24**, and the
form does not exist in the Week 24 folder. **Source.** Dosing worksheet plus the pharmacy
accountability log.

| Field | Guidance |
|---|---|
| Dose administered | Yes / No — partial / No — not administered. Sub-questions appear for the last two. |
| Kit number, injection 1 | 6 digits. **Must match a kit assigned by IRT to this participant at this visit.** |
| Kit number, injection 2 | As above, and must differ from injection 1. |
| Date of administration | Complete date, no partial. |
| Time, injection 1 / injection 2 | 24-hour, each recorded separately. |
| Injection site, 1 / 2 | Picklist: abdomen L / abdomen R / thigh L / thigh R / upper arm L / upper arm R. **The two must differ.** |
| Administered by | Delegated staff picklist. |
| Volume administered | 1.0 mL each unless a partial dose occurred. |
| Post-dose observation start / end | 24-hour times. |
| Observation period completed | Yes / No + reason. |
| Reaction during observation | Yes / No. Yes requires a linked AE record. |

**Checks.** `DOS-251` kit number not assigned to this participant by IRT (hard stop). `DOS-254` both
injections recorded at the same site (hard stop). `DOS-257` **observation duration shorter than
required** — 60 minutes at Day 1 and Week 2, 30 minutes at Weeks 4–20 (query). `DOS-261` **dosing
recorded at a visit where no dose is scheduled**, i.e. Week 24 or later (hard stop; the form is not
available, but the check also runs against unscheduled visits). `DOS-264` more than 7 dosing records
for a participant (hard stop). `DOS-267` injection time earlier than the predose PK or ADA sample time
(query — predose samples must precede dosing).

**Common errors.** Recording one time for both injections. Reversing the kit numbers between injection
1 and 2 — harmless clinically, but it will disagree with the accountability log at monitoring, so
enter them in the order administered. Entering the observation *duration* in the end-time field.

### 7.19 Concomitant Medications

**Purpose.** Complete record of non-study medication. **When.** Reviewed at every visit; the log is
continuous. **Source.** Interview and chart.

| Field | Guidance |
|---|---|
| Medication name | **Trade or generic name as reported.** No abbreviations. No dose in the name field. |
| **Indication** | **Required.** "Prophylaxis", "PRN", and "unknown" are not acceptable indications. Write what it treats: "seasonal allergic rhinitis", not "allergies". |
| Dose, unit, frequency, route | Structured picklists. |
| Start date | Partial permitted. |
| Ongoing | Checkbox. Ticking it suppresses the stop-date field. |
| Stop date | Complete date required if not ongoing. |
| Related to an AE? | Yes / No. Yes prompts you to link the AE record. |
| AD rescue therapy? | Yes / No. **Yes also requires a Rescue Therapy record (§7.22).** |

**Coding happens downstream.** The verbatim name you type is coded by the sponsor against the **WHO
Drug Dictionary**. You do not code anything and you will never see the code. What this means for you:
the verbatim must be codable. "Vitamin" is not codable. "Cholecalciferol 1000 IU daily" is. If the
coder cannot match your term, you will receive a coding query months later asking what the participant
actually took — which is much harder to answer in June than it was in January.

**Checks.** `CM-271` stop date before start date (hard stop). `CM-274` ongoing ticked and stop date
present (hard stop). `CM-277` indication blank (blocks Mark Complete). `CM-281` a medication in a
prohibited class — TCS, TCI, topical PDE4 inhibitor, systemic corticosteroid, systemic
immunosuppressant, JAK inhibitor, biologic, phototherapy — with a start date after Day 1 and no
Rescue Therapy record (query). `CM-284` a prohibited medication with a stop date inside the washout
window before Day 1 (query against the exclusion criteria).

### 7.20 Adverse Events

**When.** Reviewed at every visit; the log is continuous from consent to Week 36. **Source.** AE
worksheet, chart note, and the investigator's assessment.

**Verbatim term.** This is the most consequential free-text field in the study.

| Rule | Why |
|---|---|
| **One event per record.** | Each record becomes one row in the submission dataset. "Rash and fever" cannot be coded, analysed, or counted. Split it. |
| **No abbreviations.** | "SOB" is coded by a person who is not in your clinic. Write "shortness of breath". |
| **No diagnosis plus its own symptoms in one record.** | If the investigator diagnoses cellulitis, record **cellulitis** — not "cellulitis, redness, warmth, pain". The symptoms are part of the diagnosis. |
| **Report a diagnosis when one exists; symptoms when it does not.** | "Fever, headache, sore throat" as three records is correct before a diagnosis. Once the investigator says "influenza", record influenza going forward — do not retrospectively merge the earlier records. |
| **No severity, causality, or outcome words in the term.** | Those are separate coded fields. "Severe drug-related rash" is just "rash". |
| **No participant quotes.** | "Feeling rubbish" is not codable. Ask what they mean. |

| Field | Guidance |
|---|---|
| Verbatim term | As above. |
| Onset date | Complete date, no partial. Onset **time** required if the event began on a dosing day. |
| Resolution date / ongoing | One or the other. |
| **Severity** | Mild / Moderate / Severe. **Investigator role only.** Severity is not seriousness. |
| **Causality — relationship to study drug** | Related / Not related. **Investigator role only** — at Site 1047, Dr. Okonkwo, Dr. Feist, or Dr. Nakamura. Alonzo Vega is not delegated for this and the field is read-only for him. |
| Action taken with study drug | None / dose interrupted / drug withdrawn / not applicable. |
| Other action taken | Picklist plus free text. |
| Outcome | Recovered/resolved · recovering/resolving · not recovered · recovered with sequelae · fatal · unknown. |
| **Serious? Y/N** | Yes opens the seriousness-criteria block and triggers the banner below. |
| AESI? | Auto-flagged by term matching, confirmed by the investigator. The five AESI categories are in the Safety Reporting Manual. |

```
 ⚠ SERIOUS = YES
 ┌──────────────────────────────────────────────────────────────────────────────────┐
 │ Reporting this event in Veriscribe does NOT notify the sponsor.                   │
 │ Transmit the SAE form to Harborlight Global Patient Safety within 24 HOURS of     │
 │ awareness:  rocket.safety@harborlightcro.com · fax +1 (888) 555-0177              │
 │             phone +1 (888) 555-0143                                              │
 │ See the Safety Reporting Manual. Then complete this eCRF within 5 business days.  │
 └──────────────────────────────────────────────────────────────────────────────────┘
 Seriousness criteria (tick all that apply)
   ☐ Death   ☐ Life-threatening   ☑ Hospitalisation / prolongation
   ☐ Persistent or significant disability   ☐ Congenital anomaly
   ☐ Other medically important event
 Date safety report transmitted  [__-___-____]     Confirmation reference [________]
```

**Checks.** `AE-291` **onset date before the informed consent date** (hard stop). `AE-294` onset date
after the resolution date (hard stop). `AE-297` ongoing ticked with a resolution date (hard stop).
`AE-301` serious = Yes with the transmission date blank (query, escalated to the CRA at 48 hours).
`AE-304` causality or severity completed by a non-Investigator role (hard stop). `AE-307` action taken
= "drug withdrawn" with no Study Drug Discontinuation form (cross-form query). `AE-311` verbatim term
containing a comma or the word "and" (soft warning at entry — "This term may describe more than one
event. Consider splitting."). `AE-314` outcome = fatal with no death record (hard stop). `AE-317` AE
onset within 48 hours of a dose with the term matching pyrexia or chills and AESI not flagged (query).

### 7.21 Protocol Deviations

**When.** As they are identified. **Source.** Site deviation log (SOP-018), maintained by Sam
Oyelaran.

Fields: deviation date; date identified; category (picklist — visit window, eligibility, consent,
IP administration, prohibited medication, assessment not performed, sample handling, eDiary, other);
description; **was the deviation due to COVID-19 or other emergency? Y/N**; corrective and preventive
action; reported to IRB? Y/N with date.

The site enters deviations it identifies. The CRA may raise a manual query proposing a deviation the
site has not logged; the site then enters it. Classification as major or minor is performed by the
sponsor, not the site, and the field is read-only to you.

**Checks.** `PD-321` an out-of-window visit (from `VIS-104`) with no corresponding deviation record
(query). `PD-324` deviation date before consent date (query).

### 7.22 Rescue Therapy

**When.** Assessed at Day 1 through Week 36. **Source.** Chart and interview.

Fields: rescue therapy used since the last visit Y/N; if yes — therapy (picklist: TCS, TCI, systemic
corticosteroid, systemic immunosuppressant, phototherapy, JAK inhibitor, biologic, other); start date;
stop date or ongoing; reason; linked Concomitant Medication record; study drug action taken.

> This form has consequences far beyond its size. Under the study's missing-data conventions, a
> participant who initiates **rescue therapy for AD** is treated as a **non-responder at all
> subsequent timepoints** for binary endpoints, and continuous endpoints use the **worst observation
> carried forward**. A wrong "Yes" here removes a participant from the responder analysis for the rest
> of the study. A wrong "No" corrupts the analysis in the other direction. Enter it from source,
> exactly, and query it yourself if you are unsure.

**Checks.** `RT-331` rescue therapy Yes with no matching Concomitant Medication record (hard stop).
`RT-334` a prohibited-class medication recorded post-Day 1 with rescue therapy answered No (query).

### 7.23 Study Drug Discontinuation

**When.** If study drug is permanently stopped before the Week 20 dose. **Source.** Chart.

Fields: date of last dose; primary reason (adverse event / participant decision / physician decision /
protocol deviation / pregnancy / lost to follow-up / other); linked AE if applicable; **will the
participant continue study visits? Y/N.**

That last field matters. **Stopping study drug is not the same as leaving the study.** A participant
who discontinues drug should, wherever possible, continue the visit schedule through Week 36. If they
are continuing, do **not** complete the Study Completion / Discontinuation form.

### 7.24 Study Completion / Discontinuation

**When.** At Week 36, or at the point the participant leaves the study. **Source.** Chart.

Fields: completed the study Y/N; date of completion or discontinuation; primary reason; **specify who
made the decision** (participant / investigator / sponsor); date of last contact; lost-to-follow-up
contact attempts (three documented attempts required, with dates and methods, before this reason may
be selected); death Y/N.

**Checks.** `SC-341` lost to follow-up selected with fewer than 3 contact attempts recorded (hard
stop). `SC-344` completion date before the last visit date (hard stop). `SC-347` study completed = Yes
but the Week 36 visit is absent or incomplete (query).

### 7.25 Laboratory

**Purpose.** Records central lab collection and holds the results. **When.** Per the SoA.
**Source.** Meridian requisition and the specimen log for the collection fields; **Meridian's LIMS**
for the results.

**What the site enters:**

| Field | Notes |
|---|---|
| Sample collected? Y / N | Per panel. |
| Collection date and time | 24-hour. Predose samples require a time so the predose relationship can be verified. |
| Fasting? Y / N | Chemistry only. |
| Accession / kit number | From the Meridian requisition. |
| Not-collected reason | Required if No. |
| Local urine pregnancy result | Point-of-care, entered by the site: negative / positive / not done. **This is the only lab result the site types.** |
| Sample shipped date | Marisol Duarte's field. |

**What arrives electronically from Meridian:** every analyte result, the unit, the reference range, the
lab's normal/abnormal flag, and the result date. These fields are **read-only**. They typically load 3
to 7 days after the sample reaches the lab.

**What the investigator does:** reviews every lab report and records **clinically significant Y/N** on
abnormal results, with a signature and date within 5 business days of the report becoming available
(STUDY_FACTS §8). A clinically significant post-baseline abnormality requires an AE.

**If a result is wrong or missing,** call Meridian on +1 (800) 555-0133. Do not raise a query in
Veriscribe; data management cannot alter a transferred result either. Corrected results re-transmit and
both versions remain visible in the audit trail.

**Checks.** `LB-351` sample marked collected but no result received after 21 days (query). `LB-354`
collection date after the visit date (hard stop). `LB-357` PK or ADA sample collection time after the
dosing time at the same visit (query — these are predose samples). `LB-361` a result flagged abnormal
and high/low with no clinical-significance assessment after 10 days (query). `LB-364` urine pregnancy
positive (immediate query plus Medical Monitor notification).

### 7.26 Comments

**Purpose.** A general free-text log for context that has nowhere else to live. **When.** Rarely.

Use it for: documenting a Note to File that affects data interpretation; explaining an unusual
circumstance not captured elsewhere; recording a participant's report of an eDiary entry error
(§7.17).

Do **not** use it for: data that belongs on a form; answering a query (use the query field);
correcting a value (use the field and the reason for change); clinical narrative that belongs in the
chart; anything that identifies the participant by name, initials, address, or full date of birth.

> **Never enter identifying information in any free-text field.** No names, no initials, no medical
> record numbers, no full dates of birth, no addresses. This applies to Comments, AE terms,
> concomitant medication fields, and query responses alike.

---

## 8. Edit checks and queries

### 8.1 What an edit check is

A rule that runs against entered data. Three behaviours:

| Behaviour | What you see | What to do |
|---|---|---|
| **Hard stop** | The value is rejected and cannot be saved | Check source. Correct, or use ND/UNK with a reason. |
| **Soft warning** | A dialog you may acknowledge and proceed past | Confirm against source, then proceed if correct. The acknowledgement is recorded. |
| **Auto-query** | The value saves; a query opens against the field | Answer within 3 business days (§8.4). |

### 8.2 The three kinds of check

**1. Univariate — within one field.** Range, format, precision, allowed values.
*Example:* `VS-111` — "Temperature 98.6 °C is outside the range 33.0–42.5." Almost always a typo or a
unit error.

**2. Cross-form — between forms at the same visit.** A relationship the database knows must hold.
*Examples:* `BSA-194` — "BSA 4% recorded with EASI total 22; these values are mutually implausible.
Please verify against the rating worksheets." · `IGA-184` — "vIGA-AD = 1 recorded but the rIGA
sub-questions are incomplete." · `ELG-304` — "Inclusion criterion 4 answered Yes but the calculated
EASI total at Screening is 14.6."

**3. Cross-visit — across time.** A relationship spanning visits or anchored to a fixed event.
*Examples:* `AE-291` — "AE onset date 02-JUN-2023 precedes the informed consent date 05-JUN-2023." ·
`DOS-261` — "Study drug administration recorded at Week 24, where no dose is scheduled per the
protocol." · `WT-141` — "Weight at Week 24 (91.0 kg) differs from Screening (68.8 kg) by 32%." ·
`EASI-169` — "EASI total decreased 78% between Week 8 and Week 12; please confirm both values."

Cross-visit checks often reveal a real protocol event rather than a typo, and a real event usually
needs a protocol deviation record as well as a query answer.

### 8.3 When checks fire

Univariate checks fire on **field exit**. Cross-form checks fire on **form save**, and again in the
**nightly batch at approximately 04:00 UTC** once the related form arrives. Cross-visit checks fire in
the nightly batch.

So: a coordinator who leaves at 18:00 with a visit showing zero queries may arrive to six the next
morning. Nothing went wrong. The batch simply ran after the last form was saved.

### 8.4 The query lifecycle

```
                    ┌──────────────────────────────────────────────┐
                    │                                              │
   edit check       ▼                site answers                  │  DM/CRA not satisfied
   or manual  →  OPENED  ─────────────────────────────►  ANSWERED ─┴──►  RE-QUERIED
                    │                                        │                │
                    │ raised in error                        │ accepted       │ site answers
                    ▼                                        ▼                ▼
                CANCELLED                                  CLOSED  ◄───────────┘
```

**Target: answer every query within 3 business days of it opening.** Queries age visibly on the
dashboard: green under 3 days, amber 4–10 days, red over 10 days. Over 30 days, the CRA and the
Clinical Trial Manager are notified automatically.

**An open query blocks database lock.** This is not administrative fussiness. A query is a documented
statement that the sponsor does not currently believe a value in the regulatory record is correct or
explained. Locking with that outstanding means submitting data the sponsor has itself flagged. The same
logic applies to a participant who withdrew eighteen months ago: their data are still in the analysis.

### 8.5 Answering a query well

A query response is a permanent part of the record. It should stand on its own, months later, to a
reader who was not there.

**A good answer states: what you checked, against what source, what you found, and what you changed.**

| Query | ✗ Poor answer | ✓ Good answer |
|---|---|---|
| `VS-118` "Temperature 38.4 °C at Week 8; was an AE assessed?" | "Yes" | "Verified against the vital signs worksheet dated 08-AUG-2023: temperature 38.4 °C is correct. Participant was assessed by Dr. Feist the same day; the event was recorded as AE #4 'pyrexia', onset 08-AUG-2023. No change to the vital signs data." |
| `EASI-169` "EASI total decreased 78% between W8 and W12." | "Confirmed correct" | "Both worksheets re-checked. W8 EASI 24.6 (rater Nakamura) and W12 EASI 5.4 (rater Nakamura) are transcribed correctly from source. The participant had a substantial clinical response between these visits, documented in the 05-SEP-2023 chart note. No data change." |
| `CM-277` "Indication missing for cetirizine." | "Allergy" | "Indication updated to 'seasonal allergic rhinitis' per the 12-JUN-2023 chart note. Field corrected; reason for change 'omission at entry'." |
| `AE-291` "AE onset 02-JUN precedes consent 05-JUN." | "Date fixed" | "AE onset date was transcribed in error. Source (AE worksheet, 12-JUN-2023) records onset 12-JUN-2023. Field corrected from 02-JUN-2023 to 12-JUN-2023; reason for change 'transcription error'." |
| `EPR-234` "eDiary compliance 46% since last visit." | "Patient not compliant" | "Compliance confirmed at 46% (13/28 days). Discussed with the participant on 05-DEC-2023: they report forgetting on weekends and while travelling. Device tested and functioning. Re-training performed 05-DEC-2023 and documented on the eDiary Compliance Review form; daily reminder alarm enabled. No device replacement required." |

Things that do not constitute an answer: "OK". "Confirmed." "As per source." "Please close." "This is
correct — see the CRF." "Site has reviewed."

### 8.6 If you disagree with a query

This happens, and the correct response is not to change correct data to make a query go away.

1. Re-check the source. Most disagreements dissolve here.
2. If you still believe the data are right, **say so explicitly** in the answer, with the source
   reference and date: *"Data confirmed correct against [source, date]. No change made."*
3. If the query is re-raised on the same point, contact HCR Data Management
   (`dm.20210143@harborlightcro.com`) or your CRA and discuss it in words. A query thread is a poor
   medium for a disagreement.
4. If the disagreement is clinical, escalate to the Medical Monitor.

Never change a correct value to close a query. That is a data-integrity failure with your name on it
in the audit trail.

### 8.7 Manual queries

The CRA raises manual queries during source data verification: *"Source document dated 06-DEC-2023
records weight 68.4 kg; eCRF records 68.0 kg."* Data management raises them during review: *"Please
clarify the verbatim term 'AD flare — worse, itchy, some weeping'; this appears to describe more than
one event."* The Medical Monitor raises them during medical review: *"Please confirm the investigator's
causality assessment for AE #7 given the temporal relationship to dosing."*

Manual queries are usually about judgment, not typing. Answer them in prose, with reasoning.

---

## 9. Corrections and the audit trail

### 9.1 Changing a value

Before a form is first saved, edit freely. **After the first save, every change requires a reason.**

```
┌──────────────────────────────────────────────────────────┐
│ REASON FOR CHANGE — Weight (kg)                          │
│ Previous value  68.0        New value  68.4              │
│ Reason  [ Transcription error                        ▾ ] │
│   · Transcription error                                  │
│   · Omission at entry                                    │
│   · New information received                             │
│   · Corrected per source document                        │
│   · Query response                                       │
│   · Entered in error / wrong participant                 │
│   · Other (specify)                                      │
│ Detail  [ Source worksheet 06-DEC-2023 records 68.4 kg ] │
│                              [Cancel]  [Confirm change]  │
└──────────────────────────────────────────────────────────┘
```

The reason is part of the regulatory record and should be honest and specific. "Correction" and
"error" are not reasons. "Transcription error — source records 68.4 kg" is.

### 9.2 The audit trail

Every create, change, and deletion is captured automatically: **old value, new value, user, UTC
timestamp, reason for change.** It is generated by the system, not by users. There is no privilege at
the site, at the CRO, or at the sponsor that can alter it. It is retained with the record and exported
at database lock.

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ AUDIT TRAIL — 1047-024 › Week 24 › Weight                                           │
├────────────────────────────────────────────────────────────────────────────────────┤
│ 08-DEC-2023 19:02 UTC  P. Raghunathan  CHANGED  68.0 → 68.4 kg                      │
│    Reason: Transcription error — source worksheet 06-DEC-2023 records 68.4 kg       │
│ 07-DEC-2023 17:41 UTC  P. Raghunathan  CREATED  68.0 kg                             │
└────────────────────────────────────────────────────────────────────────────────────┘
```

**Nothing is ever deleted.** A record you "delete" — a duplicate AE, a medication entered on the wrong
participant — is flagged as deleted, struck through in the interface, excluded from analysis, and
permanently visible in the trail with the reason you gave.

> Entering a wrong value and correcting it is **normal** and is not a protocol deviation. What creates
> a finding is correcting without an honest reason, or correcting to something the source does not
> support. A clean audit trail with candid reasons is your protection, not your exposure.

---

## 10. SAE and EDC reconciliation

An SAE lives in two databases: the **safety database** at Harborlight Global Patient Safety, populated
from the SAE form you transmit within 24 hours, and the **clinical database** in Veriscribe, populated
from the AE eCRF. Both are required. Neither substitutes for the other.

They drift. Reconciliation is how that is caught before lock.

**Cadence.** HCR Data Management circulates a **quarterly reconciliation listing** to the site — every
SAE recorded in either system for Site 1047, side by side. The site reviews and responds within **10
business days**. At Site 1047 this is Priya Raghunathan's task, with Dr. Okonkwo's review.

**The four discrepancies that actually surface:**

| Discrepancy | Usual cause | Resolution |
|---|---|---|
| **In the EDC, not in the safety database** | The site ticked serious = Yes and never transmitted an SAE form. This is a reportable compliance failure, not a data issue. | Transmit immediately; document the delay; notify the CRA. |
| **In the safety database, not in the EDC** | The site transmitted the SAE form and never completed the AE eCRF. | Enter the eCRF record; explain the delay. |
| **Onset or resolution date mismatch** | The SAE form was completed from memory during the 24-hour window and the eCRF later from source. | The **source document** decides. Correct whichever system disagrees with it — both may need a follow-up. |
| **Verbatim term mismatch** | "Cellulitis right lower leg" on the paper form, "leg infection" in the eCRF. | Align both to the investigator's verbatim term in source. Submit an SAE follow-up if the safety database needs the change. |

The SAE form itself, the 24-hour clock, and the follow-up process are in the **Safety Reporting
Manual**. This manual covers only the reconciliation of the two records.

---

## 11. Investigator electronic signature

### 11.1 What it is

Under 21 CFR Part 11, the investigator's electronic signature is **legally equivalent to a handwritten
signature**. It is not a workflow step and it is not an acknowledgement that data entry has finished.

### 11.2 What the PI is attesting

By signing, the investigator attests that they have reviewed the data in the signed casebook; that
those data accurately reflect the participant's source records and the conduct of the visit(s); that
adverse events and concomitant medications have been reviewed and assessed; and that discrepancies
identified during review have been resolved. This is a direct extension of the commitments on the
Form FDA 1572.

### 11.3 What is signed, and when

Signature is applied at **casebook level** — an entire visit's forms at once, or the whole casebook at
study completion. Individual fields are not signed.

Signature occurs **after queries on those forms are resolved**. Signing a casebook with open queries
means attesting to data the sponsor has already said it disputes; the system therefore blocks it and
displays `SIG-401`.

Expected cadence at Site 1047: the PI or delegated Sub-I signs each visit's casebook within **10
business days** of that visit becoming clean. In practice this means a standing signature session —
Dr. Okonkwo is in clinic most of the week, and a signature queue left to accumulate becomes a
close-out problem.

### 11.4 The signature screen

```
┌────────────────────────────────────────────────────────────────────────────────────┐
│ ELECTRONIC SIGNATURE — 1047-024 · Week 24 casebook (17 forms)                        │
├────────────────────────────────────────────────────────────────────────────────────┤
│ By signing below I attest that I have reviewed the data contained in this casebook; │
│ that these data accurately reflect the source records and the conduct of the visit; │
│ that adverse events and concomitant medications have been reviewed and assessed;    │
│ and that identified discrepancies have been resolved.                               │
│                                                                                     │
│ I understand that this electronic signature is the legally binding equivalent of my │
│ handwritten signature (21 CFR Part 11).                                             │
│                                                                                     │
│ User ID   [ mokonkwo          ]                                                     │
│ Password  [ ****************  ]                                                     │
│ MFA code  [ ______ ]   ← required at every signature, no exceptions                 │
│                                                        [Cancel]      [SIGN]         │
└────────────────────────────────────────────────────────────────────────────────────┘
```

The stored manifestation displays the printed name of the signer, the date and time of signing, and the
meaning of the signature, per §11.50:

```
 Signed by: Miriam A. Okonkwo, MD — Principal Investigator, Site 1047
 12-DEC-2023 16:22 UTC — "Investigator attestation of data accuracy"
```

### 11.5 A signature is broken by later changes

If any data on a signed form change afterwards — a query answered, a correction made, a late lab
result loading — **the signature is invalidated** and the casebook returns to ◷ awaiting signature. The
original signature remains in the audit trail; it no longer covers the current data. The investigator
must re-sign.

Sites frequently do not notice this and finish the study with a queue of casebooks that were signed
once and re-opened. Check the dashboard signature counter weekly.

### 11.6 Nobody signs for the investigator

> **No one may apply the investigator's signature except the investigator.** Not the coordinator, not
> the Sub-Investigator, not the CRA. Not with the PI's verbal permission. Not because the PI is on
> vacation and the visit is ageing. Not "just this once".
>
> A delegated Sub-Investigator — Dr. Feist or Dr. Nakamura — may sign casebooks **under their own
> credentials** where the delegation log permits. That is a different act from signing *as* Dr.
> Okonkwo, and only the first is lawful.
>
> This is the single most serious falsification risk in the EDC workflow. It ends careers and it
> invalidates data.

---

## 12. Reports and metrics

### 12.1 Reports the site can run

Available under **Reports** on the dashboard; all export to PDF and CSV.

| Report | Use |
|---|---|
| **Open Query Listing** | Every open query with age, form, and field. Run weekly. |
| **Overdue Form Report** | Forms past the 5-business-day deadline. Run every Monday. |
| **Enrollment Report** | Screened, screen-failed, randomized, ongoing, completed, discontinued. |
| **Signature Status Report** | Casebooks awaiting signature, with age. Hand this to the PI. |
| **eDiary Compliance Report** | Per participant, per interval, with gap detail. |
| **Data Entry Lag Report** | Median days from visit date to first entry, by month. |
| **Subject Casebook (PDF)** | The complete casebook for one participant, with the audit trail. |

### 12.2 The metrics the sponsor watches

These are the site-level key risk indicators reviewed monthly by HCR and reported to Amgen.

| KRI | Target | Escalation |
|---|---|---|
| Data entry lag (median days, visit to entry) | ≤5 business days | >10 days triggers a CRA discussion |
| Overdue forms | 0 | >5 forms open for >10 days triggers a for-cause contact |
| Open queries >30 days | 0 | Any triggers CTM notification |
| Query rate per 100 forms | ≤8 | >15 suggests a training or process problem |
| Casebooks unsigned >30 days after clean | 0 | >3 triggers a PI discussion |
| eDiary compliance (site mean) | ≥80% | <70% triggers a re-training plan |
| Protocol deviations per randomized participant | ≤1.0 | Reviewed in context |

### 12.3 Where you can see how you compare

The dashboard's **Benchmarks** tab shows Site 1047's value for each KRI against the study-wide median
and the country median, updated monthly. It is anonymised — you see the distribution, not other sites'
identities.

These metrics drive monitoring intensity. A site carrying an ageing query backlog gets more frequent
visits, longer visits, and a longer close-out. A site that stays inside the targets is largely left
alone. That is a fair trade and it is worth managing deliberately.

---

## 13. Downtime procedure

### 13.1 During an outage

If Veriscribe is unavailable — scheduled maintenance, emergency maintenance, a site network failure —
study visits proceed normally. Data capture does not stop.

1. Record all data on the **paper backup worksheets** in the Downtime Packet. At Site 1047 the packet
   is in the research file room, maintained by Sam Oyelaran, and reprinted from the study portal
   whenever a build changes. It contains a paper version of every eCRF in the study.
2. Complete the worksheets **in real time**, in ink, with the recorder's initials and date. These are
   ALCOA+ source documents and will be monitored as such.
3. For an unplanned outage lasting more than 2 hours, notify the Veriscribe Helpdesk (they may already
   know) and your CRA.
4. If the outage prevents an **IRT** transaction — randomization, kit assignment — that is a different
   system and a different procedure. See the Axion IRT Manual.

### 13.2 After restoration

**All data captured on paper during the outage must be entered within 24 hours of system
restoration.** Retain the paper worksheets as source; they are not superseded by entry.

Entries made during catch-up will show an entry timestamp well after the visit date, and the Data
Entry Lag report will flag them. Add a **Comments** record noting the outage dates so the lag is
explained in the record rather than in someone's memory. HCR Data Management issues a study-wide
notice after any outage exceeding 4 hours, which covers you, but a site-level note costs nothing.

---

## 14. Database lock

### 14.1 The stages

| Stage | What happens | Site can still… |
|---|---|---|
| **Interim freeze** | Applied to a participant or visit after cleaning, ahead of an analysis. Forms become read-only. | Request an unfreeze through data management with a documented reason. |
| **Soft lock** | All data entered, all queries closed, all casebooks signed, reconciliation complete. Read-only pending final checks. | Request changes through a formal change request. |
| **Hard lock** | The database is locked. Randomization codes are released for analysis. | Nothing without a documented, sponsor-approved post-lock change, signed by the sponsor's data management lead and the study statistician. |

### 14.2 What the site must do before lock

The CRA issues a site-specific pre-lock checklist. It always includes:

- Every visit for every participant entered and marked complete, including screen failures and early
  terminations.
- **Zero open queries.** Not "one we're waiting on" — zero.
- Every casebook signed by the investigator, with no signature broken by later changes.
- SAE reconciliation complete and signed off.
- Protocol deviation log reconciled against the EDC deviation records.
- IP accountability reconciled with the IRT records and the pharmacy log.
- eDiary compliance documentation complete.
- Every outstanding source document available for the close-out visit.

### 14.3 What "final" means, and the copy you keep

After hard lock, the data are the regulatory record. They support the clinical study report and the
marketing application. A correction after lock requires a formal change request, sponsor approval at
data-management-lead and statistician level, and re-locking — expensive, slow, and visible.

Before your site's access is withdrawn, HCR provides a **certified copy of the complete casebook for
every participant at Site 1047**, including the full audit trail, as a signed PDF set. Verify you have
received it, verify it opens, and file it with the essential documents. The investigator is obliged to
retain these records under the retention terms in the Clinical Trial Agreement, and the site's
Veriscribe access will not be there to fall back on. At Site 1047 this is Sam Oyelaran's task under
SOP-027.

---

# Appendices

## Appendix A — eCRF index by visit

`X` = form present. Log forms (Concomitant Medications, Adverse Events, Protocol Deviations, Comments)
are continuous and available at every visit.

| eCRF | Scr | D1 | W2 | W4 | W8 | W12 | W16 | W20 | W24 | W28 | W32 | W36 | Unsch | ET |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Visit Date & Status | X | X | X | X | X | X | X | X | X | X | X | X | X | X |
| Informed Consent | X | | | | | | | | | | | | | |
| Eligibility Criteria | X | X | | | | | | | | | | | | |
| Demographics | X | | | | | | | | | | | | | |
| Medical History | X | | | | | | | | | | | | | |
| AD History | X | | | | | | | | | | | | | |
| Randomization (read-only) | | X | | | | | | | | | | | | |
| Vital Signs | X | X | X | X | X | X | X | X | X | X | X | X | X | X |
| Physical Exam — full | X | | | | | | | X | X | | | X | | X |
| Physical Exam — targeted | | X | X | X | X | X | X | | | X | X | | X | |
| Height | X | | | | | | | | | | | | | |
| Weight | X | X | | | | X | | | X | | | X | | X |
| 12-lead ECG | X | | | | | | | | X | | | | | X |
| vIGA-AD / rIGA | X | X | X | X | X | X | X | X | X | X | X | X | X | X |
| EASI | X | X | X | X | X | X | X | X | X | X | X | X | X | X |
| BSA Involvement | X | X | X | X | X | X | X | X | X | X | X | X | X | X |
| SCORAD | | X | | X | X | X | X | | X | | | X | | X |
| FASS / HASS | | X | | X | X | X | X | | X | | | X | | X |
| DLQI | | X | | X | X | X | X | | X | | | X | | X |
| POEM | | X | | X | X | X | X | | X | | | X | | X |
| HADS | | X | | | | X | X | | X | | | X | | X |
| eDiary Compliance Review | X | X | X | X | X | X | X | X | X | | | | | X |
| Laboratory Collection | X | X | X | X | X | X | X | X | X | | | X | X | X |
| Local Urine Pregnancy | | X | X | X | X | X | X | X | X | | | | | |
| Study Drug Administration | | X | X | X | X | X | X | X | | | | | | |
| IP Accountability | | X | X | X | X | X | X | X | X | | | | | X |
| Rescue Therapy | | X | X | X | X | X | X | X | X | X | X | X | X | X |
| Study Drug Discontinuation | | as required | | | | | | | | | | | | X |
| Study Completion / Discontinuation | | | | | | | | | | | | X | | X |
| Screen Failure | X | | | | | | | | | | | | | |

## Appendix B — Field convention quick card

| | |
|---|---|
| Dates | `DD-MMM-YYYY` — `06-DEC-2023` |
| Times | 24-hour `HH:MM`, site local — `08:52` |
| Partial dates | Day, or day + month, may be UNK. **Year always required.** Not permitted on consent, visit, dosing, sample, or AE dates. |
| Temperature | °C, 1 decimal |
| Weight | kg, 1 decimal · **Height** cm, 1 decimal |
| BP, pulse, RR | Integer |
| BSA | Integer % |
| EASI area | Band score 0–6, not a percentage |
| EASI signs | Integer 0–3, all four per region, all four regions |
| SCORAD VAS | 0.0–10.0, **1 decimal** |
| Totals (EASI, SCORAD, DLQI, POEM, HADS) | **Calculated. Never typed.** |
| Not done | `ND` + reason (required) |
| Unknown | `UNK` + reason (required) |
| Not applicable | `NA`, no reason |
| Blank | **Never acceptable in a required field** |
| Free text | No abbreviations, no participant identifiers, no site shorthand |
| Entry deadline | **5 business days** from visit date |
| Query response | **3 business days** from query opening |
| Downtime catch-up | **24 hours** from system restoration |

## Appendix C — Query response cheat sheet

**Every answer covers four things:**

1. **What you checked** — "the vital signs worksheet"
2. **Which source, with its date** — "dated 08-AUG-2023"
3. **What you found** — "temperature 38.4 °C is correct as recorded" / "source records 68.4 kg"
4. **What you did** — "no change made" / "field corrected from 68.0 to 68.4 kg, reason 'transcription
   error'"

**Templates**

- *Data confirmed correct:* "Verified against [source, date]. Value [X] is correct as entered. No
  change made."
- *Data corrected:* "Source [source, date] records [Y]. Field corrected from [X] to [Y]; reason for
  change '[reason]'."
- *Explaining a real event:* "The value is correct. [Clinical or operational explanation], documented
  in [source, date]. No change made."
- *Missing data:* "Assessment not performed because [reason]. Recorded as ND with reason '[reason]'.
  Protocol deviation PD-[n] logged."
- *You disagree:* "Data confirmed correct against [source, date]. Site does not believe a change is
  warranted. Please contact the site if further clarification is required."

**Never write:** "OK" · "Confirmed" · "As per source" · "Please close" · "See CRF" · "Site has
reviewed" · anything that names the participant.

## Appendix D — Error message glossary

| Code | Message | What it means |
|---|---|---|
| `SYS-004` | Date cannot be in the future | Check the year — most often a typo in the century or a stale date picker |
| `SYS-011` | Session expired — unsaved data lost | 20-minute timeout. Save more often |
| `SYS-017` | You do not have permission to edit this field | Role restriction. Check §4.8 before calling the helpdesk |
| `SYS-023` | This form is read-only (source system) | Lab, eDiary, or IRT data. Contact the originating vendor |
| `SYS-031` | Form is locked (database freeze) | Contact HCR Data Management with a change request |
| `VIS-101` / `VIS-104` / `VIS-107` | Visit date sequence / window / future | See §7.1 |
| `IC-201` | Procedure recorded before informed consent date | See §7.2. Serious — investigate before changing anything |
| `ELG-301` | Eligibility not met — randomization blocked | See §7.3. There are no waivers |
| `VS-111` / `VS-114` | Vital sign out of range / DBP ≥ SBP | Usually a unit or transposition error |
| `EASI-163` | Area score 0 with non-zero sign score | Logically impossible; re-check the worksheet |
| `EASI-166` | Screening EASI <16 conflicts with inclusion criterion 4 | See §7.12 |
| `IGA-184` | rIGA sub-questions incomplete | vIGA-AD = 1 requires all four answers |
| `BSA-194` | BSA and EASI mutually implausible | Check you are in the right participant's record |
| `QS-221` | Questionnaire item blank with no ND code | See §7.16 — do not invent a value |
| `QS-227` | HADS depression threshold met | Medical Monitor notified. Respond promptly |
| `DOS-251` | Kit number not assigned to this participant | Check the IRT confirmation, not the carton |
| `DOS-261` | Dosing recorded where no dose is scheduled | No dose at Week 24 or later |
| `CM-277` | Concomitant medication indication missing | "PRN" is not an indication |
| `AE-291` | AE onset precedes informed consent | See §7.20 |
| `AE-304` | Causality/severity requires Investigator role | Only a delegated investigator may complete these |
| `AE-311` | Verbatim term may describe more than one event | Soft warning. Split the record |
| `RT-331` | Rescue therapy with no matching concomitant medication | See §7.22 |
| `LB-357` | Predose sample collected after dosing time | Check the recorded times |
| `SIG-401` | Cannot sign — open queries on this casebook | Resolve queries first |
| `SIG-407` | Signature invalidated by subsequent data change | Re-sign. See §11.5 |

## Appendix E — Contact card

*Print and keep at the data-entry workstation.*

```
┌────────────────────────────────────────────────────────────────────┐
│ ROCKET-Horizon · Protocol 20210143 · Site 1047                     │
│ Veriscribe EDC v9.2 — Site User Guide v3.0, 11-DEC-2023            │
├────────────────────────────────────────────────────────────────────┤
│ VERISCRIBE HELPDESK  (login, access, faults, downtime)             │
│    +1 (800) 555-0188  ·  support@veriscribe.com  ·  24/7           │
│ HCR DATA MANAGEMENT  (queries, reconciliation, change requests)    │
│    dm.20210143@harborlightcro.com  ·  Mon–Fri 08:00–18:00 ET       │
│ CRA — Kevin Ostrander, CCRA  (accounts, conduct, deviations)       │
│    k.ostrander@harborlightcro.com  ·  +1 (503) 555-0188            │
│ CTM — Rosalind Achebe                                              │
│    r.achebe@harborlightcro.com  ·  +1 (888) 555-0145               │
│ MEDICAL MONITOR — Ana Belmonte-Ruiz, MD  ·  24/7                   │
│    +1 (888) 555-0142                                               │
│ SAE INTAKE — Harborlight Global Patient Safety  ·  24 HOURS        │
│    rocket.safety@harborlightcro.com · fax +1 (888) 555-0177        │
│    phone +1 (888) 555-0143                                         │
│ DayLog ePRO  +1 (800) 555-0199  ·  Meridian Labs  +1 (800) 555-0133│
│ Axion IRT    +1 (800) 555-0164                                     │
├────────────────────────────────────────────────────────────────────┤
│ Entry: 5 business days  ·  Query: 3 business days                  │
│ Maintenance: Sun 02:00–06:00 UTC (Sat 18:00–22:00 PT)              │
│ Never share credentials. Never sign for someone else.              │
│ Enter from source, never from memory.                              │
└────────────────────────────────────────────────────────────────────┘
```

---

*End of document. Veriscribe EDC v9.2 — Site User Guide & eCRF Completion Guidelines, Version 3.0,
11-DEC-2023. Protocol 20210143 / NCT05651711.*
