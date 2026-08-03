import { VERA_ARRIVAL } from "@/game/emails";
import type { Situation } from "@/game/types";

const DAY_1: Situation[] = [
  {
    id: "SCR-0217",
    day: 1,
    type: "screening",
    subject: "1047-017",
    title: "Eligibility review",
    blurb:
      "Screening packet, eleven pages. No assistant provisioned. Read it and complete " +
      "the eligibility form.",
    cost: 90,
    manual: true,
    source: ["scr-0217.md"],
    form: "eligibility",
    truth: {
      error: "NONE",
      entry: { easi: "22.4", viga: "4", bsa: "31", nrs: "7" },
      verdict: "eligible",
    },
    outcomes: {
      accepted: { score: {} },
      reviewedCorrect: {
        score: { randomized: 1 },
        roster: { subject: "1047-017", status: "Enrolled" },
      },
      reviewedWrong: {
        score: {},
        roster: { subject: "1047-017", status: "Screen failed" },
        email: {
          id: "DQ-0109",
          from: "Meridian Data Management",
          subject: "Query DQ-0109 — subject 1047-017",
          body:
            "Eligibility determination recorded as screen failure. Source documents " +
            "indicate all inclusion criteria were met. Please verify and respond.",
        },
      },
    },
    debrief: {
      line: "Eligible on every criterion. EASI 22.4 against a threshold of 16.",
    },
  },

  {
    id: "DE-1109",
    day: 1,
    type: "data-entry",
    subject: "1047-009",
    title: "Week 8 vitals",
    blurb:
      "Paper vitals worksheet, four fields. No assistant provisioned. Read it and " +
      "complete the vitals form.",
    cost: 60,
    manual: true,
    source: ["de-1109.md"],
    form: "vitals",
    truth: {
      error: "NONE",
      entry: { bp: "128/82", pulse: "72", temp: "36.8", weight: "81.4" },
    },
    outcomes: {
      accepted: { score: {} },
      reviewedCorrect: { score: {} },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0106",
          from: "Meridian Data Management",
          subject: "Query DQ-0106 — subject 1047-009",
          body: "Reported vital signs do not match source. Please verify and respond.",
        },
      },
    },
    debrief: {
      line: "Four numbers, copied correctly. VERA wasn't installed yet — the hour was the job.",
    },
  },

  {
    id: "SAF-0031",
    day: 1,
    type: "safety",
    subject: "1047-005",
    title: "Week 16 safety review",
    blurb:
      "Telephone contact worksheet, one page. No assistant provisioned. Read it, record " +
      "the visit the event follows, and enter the determination.",
    cost: 60,
    manual: true,
    source: ["saf-0031.md"],
    form: "safety",
    truth: {
      error: "NONE",
      entry: { visit: "Week 16" },
      verdict: "not-serious",
    },
    outcomes: {
      accepted: { score: {} },
      reviewedCorrect: { score: {} },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0108",
          from: "Meridian Global Patient Safety",
          subject: "Query DQ-0108 — subject 1047-005",
          body:
            "Adverse event determination does not match source. Source documents " +
            "indicate the event meets none of the six seriousness criteria in the " +
            "safety reporting manual. Please verify and respond.",
        },
      },
    },
    debrief: {
      line:
        "Fever, resolved in under a day, no hospitalization, no intervention. None of the " +
        "six criteria. Not serious.",
    },
  },

  {
    id: "DE-1110",
    day: 1,
    type: "data-entry",
    subject: "1047-003",
    title: "Week 12 central labs",
    blurb: "Chemistry and haematology panel returned from the central laboratory.",
    cost: 60,
    source: ["de-1110.md"],
    form: "labs",
    arrivalEmail: VERA_ARRIVAL,
    vera: {
      summary:
        "The Week 12 panel for 1047-003 is complete and within reference range on every " +
        "analyte. ALT 24 U/L, AST 21 U/L, creatinine 0.9 mg/dL, absolute eosinophils " +
        "0.38 ×10⁹/L. No alert values were flagged by the laboratory. The entry is " +
        "drafted and ready for your review.",
      entry: { alt: "24", ast: "21", creatinine: "0.9", eos: "0.38" },
    },
    truth: {
      error: "NONE",
      entry: { alt: "24", ast: "21", creatinine: "0.9", eos: "0.38" },
    },
    outcomes: {
      accepted: { score: {} },
      reviewedCorrect: { score: {} },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0110",
          from: "Meridian Data Management",
          subject: "Query DQ-0110 — subject 1047-003",
          body: "Reported chemistry values do not match source. Please verify and respond.",
        },
      },
    },
    debrief: { line: "She was right. Reading it cost an hour and changed nothing." },
  },

  {
    id: "DE-1114",
    day: 1,
    type: "data-entry",
    subject: "1047-008",
    title: "Week 12 central labs",
    blurb: "Chemistry and haematology panel returned from the central laboratory.",
    cost: 60,
    source: ["de-1114.md"],
    form: "labs",
    vera: {
      summary:
        "The Week 12 panel for 1047-008 is complete and within reference range on every " +
        "analyte. ALT 31 U/L, AST 27 U/L, creatinine 1.0 mg/dL, absolute eosinophils " +
        "4.2 ×10⁹/L. No alert values were flagged by the laboratory. The entry is " +
        "drafted and ready for your review.",
      entry: { alt: "31", ast: "27", creatinine: "1.0", eos: "4.2" },
    },
    truth: {
      error: "normalization",
      entry: { alt: "31", ast: "27", creatinine: "1.0", eos: "0.42" },
    },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0111",
          from: "Meridian Data Management",
          subject: "Query DQ-0111 — subject 1047-008",
          body: "Reported eosinophil count does not match source. Please verify and respond.",
        },
      },
      reviewedCorrect: { score: { errorsCaught: 1 } },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0111",
          from: "Meridian Data Management",
          subject: "Query DQ-0111 — subject 1047-008",
          body: "Reported eosinophil count does not match source. Please verify and respond.",
        },
      },
    },
    debrief: {
      line:
        "Source printed 0.42 ×10⁹/L (420 cells/µL). She typed 4.2 — a factor of ten, off " +
        "the same line that prints both units.",
    },
  },
];

const DAY_2: Situation[] = [
  {
    id: "DE-1111",
    day: 2,
    type: "data-entry",
    subject: "1047-005",
    title: "Week 16 central labs",
    blurb: "Chemistry and haematology panel returned from the central laboratory.",
    cost: 60,
    source: ["de-1111.md"],
    form: "labs",
    vera: {
      summary:
        "The Week 16 panel for 1047-005 is complete and within reference range on every " +
        "analyte. ALT 19 U/L, AST 22 U/L, creatinine 0.8 mg/dL, absolute eosinophils " +
        "0.31 ×10⁹/L. No alert values were flagged by the laboratory. The entry is " +
        "drafted and ready for your review.",
      entry: { alt: "19", ast: "22", creatinine: "0.8", eos: "0.31" },
    },
    truth: {
      error: "UNCATCHABLE",
      entry: { alt: "19", ast: "22", creatinine: "0.8", eos: "0.31" },
    },
    outcomes: {
      accepted: {
        score: { harmed: 1 },
        roster: { subject: "1047-005", status: "Withdrawn (hospitalized)" },
      },
      reviewedCorrect: {
        score: { harmed: 1 },
        roster: { subject: "1047-005", status: "Withdrawn (hospitalized)" },
      },
      reviewedWrong: {
        score: { errorsAccepted: 1, harmed: 1 },
        roster: { subject: "1047-005", status: "Withdrawn (hospitalized)" },
        email: {
          id: "DQ-0115",
          from: "Meridian Data Management",
          subject: "Query DQ-0115 — subject 1047-005",
          body: "Reported chemistry values do not match source. Please verify and respond.",
        },
      },
    },
    debrief: {
      line:
        "The blood filed under 1047-005 was drawn from 1047-010, and the other way round. " +
        "Nothing on your desk disagreed with anything else on your desk. The requisition " +
        "form has a field for participant initials — field 5 — and it is pre-printed " +
        "“not collected for this study.” Had it been filled in, the mismatch would have " +
        "been caught before the results ever reached you. That was decided by whoever " +
        "designed the form, not by you.",
      category: 2,
    },
  },

  {
    id: "SAF-0034",
    day: 2,
    type: "safety",
    subject: "1047-010",
    title: "Injection-site reaction review",
    blurb: "Telephone contact worksheet, one page.",
    cost: 60,
    source: ["saf-0034.md"],
    form: "safety",
    vera: {
      summary:
        "1047-010 called to report a mild injection-site reaction following the Week 12 " +
        "visit (Day 85, 06-DEC-2023): localized redness and tenderness at the site, " +
        "resolved without treatment within a day. No fever, no swelling beyond the " +
        "immediate area, no medical attention sought. This is an adverse event; the " +
        "determination is not serious, meaning none of the six seriousness criteria in " +
        "the safety reporting manual are met. The entry is drafted and ready for your " +
        "review.",
      entry: { visit: "Week 12" },
      verdict: "not-serious",
    },
    // The verdict is right and the entry is wrong: the note's DOSING HISTORY REFERENCED
    // block prints Week 16 (Day 113), 04-JAN-2024, and she filed the event against the
    // Week 12 visit five weeks earlier. This is the catchable counterpart to DE-1111 —
    // one line of her draft against one line of the note.
    truth: {
      error: "misattribution",
      entry: { visit: "Week 16" },
      verdict: "not-serious",
    },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0113",
          from: "Meridian Global Patient Safety",
          subject: "Query DQ-0113 — subject 1047-010",
          body:
            "Adverse event determination does not match source. Source documents indicate " +
            "the event followed the Week 16 visit, not the Week 12 visit recorded. Please " +
            "verify and respond.",
        },
      },
      reviewedCorrect: { score: { errorsCaught: 1 } },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0113",
          from: "Meridian Global Patient Safety",
          subject: "Query DQ-0113 — subject 1047-010",
          body:
            "Adverse event determination does not match source. Source documents indicate " +
            "the event followed the Week 16 visit, not the Week 12 visit recorded. Please " +
            "verify and respond.",
        },
      },
    },
    debrief: {
      line:
        "Right event, wrong visit. The note's dosing history reads Week 16, Day 113, " +
        "04-JAN-2024 — she filed it against Week 12, Day 85, 06-DEC-2023.",
    },
  },

  {
    id: "DE-1112",
    day: 2,
    type: "data-entry",
    subject: "1047-007",
    title: "Week 16 vitals",
    blurb: "Vitals worksheet, four fields.",
    cost: 60,
    source: ["de-1112.md"],
    form: "vitals",
    vera: {
      summary:
        "Vitals for 1047-007's Week 16 visit are complete. BP 118/76 mmHg, pulse 68 bpm, " +
        "temperature 36.6 °C, weight 74.2 kg. No values outside the expected range for " +
        "this visit. The entry is drafted and ready for your review.",
      entry: { bp: "118/76", pulse: "68", temp: "36.6", weight: "74.2" },
    },
    truth: {
      error: "NONE",
      entry: { bp: "118/76", pulse: "68", temp: "36.6", weight: "74.2" },
    },
    outcomes: {
      accepted: { score: {} },
      reviewedCorrect: { score: {} },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0112",
          from: "Meridian Data Management",
          subject: "Query DQ-0112 — subject 1047-007",
          body: "Reported vital signs do not match source. Please verify and respond.",
        },
      },
    },
    debrief: {
      line: "She was right. Four numbers, correctly transcribed, and the hour changed nothing.",
    },
  },

  {
    id: "SAF-0032",
    day: 2,
    type: "safety",
    subject: "1047-002",
    title: "Telephone safety follow-up",
    blurb: "Telephone contact worksheet, two pages.",
    cost: 60,
    source: ["saf-0032.md"],
    form: "safety",
    vera: {
      summary:
        "1047-002 called to report a headache earlier in the week: mild, no aura, no " +
        "visual change, resolved the same day with no treatment and no medical attention " +
        "sought. Onset follows the Week 20 dosing visit of 11-DEC-2023. This is an " +
        "adverse event; the determination is not serious, meaning none of the six " +
        "seriousness criteria in the safety reporting manual are met. The entry is " +
        "drafted and ready for your review.",
      entry: { visit: "Week 20" },
      verdict: "not-serious",
    },
    // Her visit is right; the verdict is not. The omission is on page 2 of the note, and
    // the only field it can move is the determination radio.
    truth: {
      error: "omission",
      entry: { visit: "Week 20" },
      verdict: "serious",
    },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0114",
          from: "Meridian Global Patient Safety",
          subject: "Query DQ-0114 — subject 1047-002",
          body:
            "Adverse event determination does not match source. Source documents indicate " +
            "formal inpatient admission, meeting the hospitalization criterion (criterion " +
            "3) in the safety reporting manual. Please verify and respond.",
        },
      },
      reviewedCorrect: { score: { errorsCaught: 1 } },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0114",
          from: "Meridian Global Patient Safety",
          subject: "Query DQ-0114 — subject 1047-002",
          body:
            "Adverse event determination does not match source. Source documents indicate " +
            "formal inpatient admission, meeting the hospitalization criterion (criterion " +
            "3) in the safety reporting manual. Please verify and respond.",
        },
      },
    },
    debrief: {
      line:
        "The headache wasn't the story. Page two: the eczema turned into eczema " +
        "herpeticum, and she spent three nights admitted as an inpatient for IV " +
        "aciclovir — formal inpatient admission, criterion 3, which makes this serious " +
        "regardless of how mild the headache was.",
    },
  },
];

const DAY_3: Situation[] = [
  {
    id: "SCR-0219",
    day: 3,
    type: "screening",
    subject: "1047-019",
    title: "Eligibility review",
    blurb: "Screening packet, twelve pages.",
    cost: 90,
    source: ["scr-0219.md"],
    form: "eligibility",
    vera: {
      summary:
        "1047-019's screening packet is complete. EASI 15.8, vIGA-AD 3, BSA 14%, Worst " +
        "Pruritus NRS 6. No washout issues identified — the subject meets all inclusion " +
        "criteria. The entry is drafted and ready for your review.",
      entry: { easi: "15.8", viga: "3", bsa: "14", nrs: "6" },
      verdict: "eligible",
    },
    truth: {
      error: "threshold",
      entry: { easi: "15.8", viga: "3", bsa: "14", nrs: "6" },
      verdict: "screen-fail",
    },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1, randomized: 1 },
        roster: { subject: "1047-019", status: "Enrolled" },
        email: {
          id: "DQ-0116",
          from: "Harborlight Clinical Research",
          subject: "Protocol deviation — subject 1047-019",
          body:
            "Randomization recorded for subject 1047-019 with screening EASI 15.8, below " +
            "the inclusion threshold of EASI ≥16 (Protocol §7, criterion I4). Logged as " +
            "a protocol deviation. Please provide a corrective and preventive action plan " +
            "within 5 business days.",
        },
      },
      reviewedCorrect: {
        score: { errorsCaught: 1 },
        roster: { subject: "1047-019", status: "Screen failed (EASI <16)" },
      },
      reviewedWrong: {
        score: { errorsAccepted: 1, randomized: 1 },
        roster: { subject: "1047-019", status: "Enrolled" },
        email: {
          id: "DQ-0116",
          from: "Harborlight Clinical Research",
          subject: "Protocol deviation — subject 1047-019",
          body:
            "Randomization recorded for subject 1047-019 with screening EASI 15.8, below " +
            "the inclusion threshold of EASI ≥16 (Protocol §7, criterion I4). Logged as " +
            "a protocol deviation. Please provide a corrective and preventive action plan " +
            "within 5 business days.",
        },
      },
    },
    debrief: {
      line:
        "She named the number correctly — EASI 15.8 — and drafted eligible anyway. The " +
        "threshold is 16.",
    },
  },

  {
    id: "SCR-0220",
    day: 3,
    type: "screening",
    subject: "1047-020",
    title: "Eligibility review",
    blurb: "Screening packet, twelve pages.",
    cost: 90,
    source: ["scr-0220.md"],
    form: "eligibility",
    vera: {
      summary:
        "1047-020's screening packet is complete. EASI 19.2, vIGA-AD 4, BSA 22%, Worst " +
        "Pruritus NRS 8. Topical corticosteroid was last applied 02-JAN-2024, with Day 1 " +
        "planned for 10-JAN-2024 — 8 days. The required washout for topical corticosteroids " +
        "under this protocol is two weeks, so the washout is not clear. Screening failure " +
        "recommended. The entry is drafted and ready for your review.",
      entry: { easi: "19.2", viga: "4", bsa: "22", nrs: "8" },
      verdict: "screen-fail",
    },
    truth: {
      error: "stale-context",
      entry: { easi: "19.2", viga: "4", bsa: "22", nrs: "8" },
      verdict: "eligible",
    },
    outcomes: {
      accepted: {
        score: { randomized: 1 },
        roster: { subject: "1047-020", status: "Enrolled" },
      },
      reviewedCorrect: {
        score: { randomized: 1 },
        roster: { subject: "1047-020", status: "Enrolled" },
      },
      reviewedWrong: {
        score: {},
        roster: { subject: "1047-020", status: "Screen failed" },
        email: {
          id: "DQ-0117",
          from: "Meridian Data Management",
          subject: "Query DQ-0117 — subject 1047-020",
          body:
            "Eligibility determination recorded as screen failure. Source documents " +
            "indicate all inclusion criteria were met and the topical corticosteroid " +
            "washout was satisfied under the protocol version in force. Please verify and " +
            "respond.",
        },
      },
    },
    debrief: {
      line:
        "The washout she cited is two weeks. Amendment 3, in force since 29-NOV-2023, set " +
        "it to one week — eight days clears it.",
    },
  },

  {
    id: "DE-1113",
    day: 3,
    type: "data-entry",
    subject: "1047-007",
    title: "Week 16 central labs",
    blurb: "Chemistry and haematology panel returned from the central laboratory.",
    cost: 60,
    source: ["de-1113.md"],
    form: "labs",
    vera: {
      summary:
        "The Week 16 panel for 1047-007 is complete. ALT 68 U/L, mildly elevated. AST " +
        "26 U/L, creatinine 1.1 mg/dL, and absolute eosinophils 0.29 ×10⁹/L are within " +
        "reference range. No alert values were flagged by the laboratory. The entry is " +
        "drafted and ready for your review.",
      entry: { alt: "68", ast: "26", creatinine: "1.1", eos: "0.29" },
    },
    truth: {
      error: "fabrication",
      entry: { alt: "", ast: "26", creatinine: "1.1", eos: "0.29" },
    },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0118",
          from: "Meridian Data Management",
          subject: "Query DQ-0118 — subject 1047-007",
          body: "Reported ALT value does not match source. Please verify and respond.",
        },
      },
      reviewedCorrect: { score: { errorsCaught: 1 } },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0118",
          from: "Meridian Data Management",
          subject: "Query DQ-0118 — subject 1047-007",
          body: "Reported ALT value does not match source. Please verify and respond.",
        },
      },
    },
    debrief: {
      line: "There is no ALT anywhere in the source. She drafted 68 U/L, mildly elevated.",
    },
  },

  {
    id: "SAF-0033",
    day: 3,
    type: "safety",
    subject: "1047-001",
    title: "Hospitalization — discharge summary review",
    blurb: "Hospital discharge summary, one page.",
    cost: 60,
    source: ["saf-0033.md"],
    form: "safety",
    vera: {
      summary:
        "1047-001 was admitted 08-JAN-2024 with cellulitis of the left lower leg and " +
        "discharged 10-JAN-2024 after two nights of intravenous antibiotics. Onset " +
        "follows the Week 16 dosing visit of 04-JAN-2024. This is a serious adverse " +
        "event — hospitalization meets criterion 3 in the safety reporting manual, which " +
        "means the sponsor must be notified within 24 hours. The determination is " +
        "serious. The entry is drafted and ready for your review.",
      entry: { visit: "Week 16" },
      verdict: "serious",
    },
    truth: {
      error: "NONE",
      entry: { visit: "Week 16" },
      verdict: "serious",
    },
    outcomes: {
      accepted: {
        score: { harmed: 1 },
        roster: { subject: "1047-001", status: "Withdrawn (hospitalized)" },
      },
      reviewedCorrect: {
        score: { harmed: 1 },
        roster: { subject: "1047-001", status: "Withdrawn (hospitalized)" },
      },
      reviewedWrong: {
        score: { errorsAccepted: 1, harmed: 1 },
        roster: { subject: "1047-001", status: "Withdrawn (hospitalized)" },
        email: {
          id: "DQ-0119",
          from: "Meridian Global Patient Safety",
          subject: "Query DQ-0119 — subject 1047-001",
          body:
            "Adverse event determination does not match source. Source documents indicate " +
            "formal inpatient admission, meeting the hospitalization criterion (criterion " +
            "3) in the safety reporting manual. Please verify and respond.",
        },
      },
    },
    debrief: {
      line:
        "Cellulitis of the left lower leg, two nights inpatient on IV antibiotics — " +
        "criterion 3, hospitalization. It is on rocatinlimab's own safety table, twice " +
        "over; this is one of the two.",
      category: 1,
    },
  },

  {
    id: "DE-1115",
    day: 3,
    type: "data-entry",
    subject: "1047-002",
    title: "Week 24 central labs",
    blurb: "Chemistry and haematology panel returned from the central laboratory.",
    cost: 60,
    source: ["de-1115.md"],
    form: "labs",
    vera: {
      summary:
        "The Week 24 panel for 1047-002 is complete and within reference range on every " +
        "analyte. ALT 22 U/L, AST 25 U/L, creatinine 0.9 mg/dL, absolute eosinophils " +
        "0.071 ×10⁹/L. No alert values were flagged by the laboratory. The entry is " +
        "drafted and ready for your review.",
      entry: { alt: "22", ast: "25", creatinine: "0.9", eos: "0.071" },
    },
    truth: {
      error: "normalization",
      entry: { alt: "22", ast: "25", creatinine: "0.9", eos: "0.71" },
    },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0120",
          from: "Meridian Data Management",
          subject: "Query DQ-0120 — subject 1047-002",
          body: "Reported eosinophil count does not match source. Please verify and respond.",
        },
      },
      reviewedCorrect: { score: { errorsCaught: 1 } },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0120",
          from: "Meridian Data Management",
          subject: "Query DQ-0120 — subject 1047-002",
          body: "Reported eosinophil count does not match source. Please verify and respond.",
        },
      },
    },
    debrief: {
      line:
        "Source printed 0.71 ×10⁹/L (710 cells/µL), flagged H. She typed 0.071 — three " +
        "places left, and the flag went with it.",
    },
  },
];

const DAY_4: Situation[] = [
  {
    id: "SCR-0221",
    day: 4,
    type: "screening",
    subject: "1047-021",
    title: "Eligibility review",
    blurb: "Screening packet, eight pages.",
    cost: 90,
    source: ["scr-0221.md"],
    form: "eligibility",
    vera: {
      summary:
        "1047-021's screening packet is complete. EASI 25.4, vIGA-AD 4, BSA 29%, Worst " +
        "Pruritus NRS 8. Topical calcineurin inhibitor (tacrolimus) was discontinued " +
        "30-DEC-2023, 13 days before planned Day 1 — the one-week washout is satisfied. " +
        "The subject meets all inclusion criteria. The entry is drafted and ready for " +
        "your review.",
      entry: { easi: "25.4", viga: "4", bsa: "29", nrs: "8" },
      verdict: "eligible",
    },
    truth: {
      error: "fabrication",
      entry: { easi: "25.4", viga: "4", bsa: "29", nrs: "8" },
      verdict: "screen-fail",
    },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1, randomized: 1 },
        roster: { subject: "1047-021", status: "Enrolled" },
        email: {
          id: "DQ-0121",
          from: "Harborlight Clinical Research",
          subject: "Protocol deviation — subject 1047-021",
          body:
            "Randomization recorded for subject 1047-021 with the topical calcineurin " +
            "inhibitor washout unconfirmed at Day 1 — no stop date was ever obtained for " +
            "tacrolimus 0.1% ointment, so exclusion criterion E7 (Protocol §7) could not be " +
            "verified. Logged as a protocol deviation. Please provide a corrective and " +
            "preventive action plan within 5 business days.",
        },
      },
      reviewedCorrect: {
        score: { errorsCaught: 1 },
        roster: { subject: "1047-021", status: "Screen failed (TCI washout not confirmed)" },
      },
      reviewedWrong: {
        score: { errorsAccepted: 1, randomized: 1 },
        roster: { subject: "1047-021", status: "Enrolled" },
        email: {
          id: "DQ-0121",
          from: "Harborlight Clinical Research",
          subject: "Protocol deviation — subject 1047-021",
          body:
            "Randomization recorded for subject 1047-021 with the topical calcineurin " +
            "inhibitor washout unconfirmed at Day 1 — no stop date was ever obtained for " +
            "tacrolimus 0.1% ointment, so exclusion criterion E7 (Protocol §7) could not be " +
            "verified. Logged as a protocol deviation. Please provide a corrective and " +
            "preventive action plan within 5 business days.",
        },
      },
    },
    debrief: {
      line:
        "The 30-DEC-2023 stop date she cited is nowhere in the packet. The concomitant " +
        "medication log's tacrolimus row was never completed — two follow-up calls went " +
        "unanswered, and the washout was never confirmed.",
    },
  },

  {
    id: "DE-1116",
    day: 4,
    type: "data-entry",
    subject: "1047-010",
    title: "Week 16 vitals",
    blurb: "Vitals worksheet, four fields.",
    cost: 60,
    source: ["de-1116.md"],
    form: "vitals",
    vera: {
      summary:
        "Vitals for 1047-010's Week 16 visit are complete. BP 126/80 mmHg, pulse 74 bpm, " +
        "temperature 36.9 °C, weight 76.4 kg. No values outside the expected range for this " +
        "visit. The entry is drafted and ready for your review.",
      entry: { bp: "126/80", pulse: "74", temp: "36.9", weight: "76.4" },
    },
    truth: {
      error: "fabrication",
      entry: { bp: "126/80", pulse: "74", temp: "36.9", weight: "" },
    },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0122",
          from: "Meridian Data Management",
          subject: "Query DQ-0122 — subject 1047-010",
          body: "Reported vital signs do not match source. Please verify and respond.",
        },
      },
      reviewedCorrect: { score: { errorsCaught: 1 } },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0122",
          from: "Meridian Data Management",
          subject: "Query DQ-0122 — subject 1047-010",
          body: "Reported vital signs do not match source. Please verify and respond.",
        },
      },
    },
    debrief: {
      line:
        "Week 16 doesn't collect weight — the worksheet carries no row for it. She drafted " +
        "76.4 kg anyway.",
    },
  },

  {
    id: "SCR-0222",
    day: 4,
    type: "screening",
    subject: "1047-022",
    title: "Eligibility review",
    blurb: "Screening packet, eight pages.",
    cost: 90,
    source: ["scr-0222.md"],
    form: "eligibility",
    vera: {
      summary:
        "1047-022's screening packet is complete. EASI 24.1, vIGA-AD 4, BSA 28%, Worst " +
        "Pruritus NRS 8. Topical corticosteroid was last applied 20-DEC-2023, 23 days before " +
        "planned Day 1 — the one-week washout is satisfied. The subject meets all inclusion " +
        "criteria. The entry is drafted and ready for your review.",
      entry: { easi: "24.1", viga: "4", bsa: "28", nrs: "8" },
      verdict: "eligible",
    },
    truth: {
      error: "NONE",
      entry: { easi: "24.1", viga: "4", bsa: "28", nrs: "8" },
      verdict: "eligible",
    },
    outcomes: {
      accepted: {
        score: { randomized: 1 },
        roster: { subject: "1047-022", status: "Enrolled" },
      },
      reviewedCorrect: {
        score: { randomized: 1 },
        roster: { subject: "1047-022", status: "Enrolled" },
      },
      reviewedWrong: {
        score: {},
        roster: { subject: "1047-022", status: "Screen failed" },
        email: {
          id: "DQ-0123",
          from: "Meridian Data Management",
          subject: "Query DQ-0123 — subject 1047-022",
          body:
            "Eligibility determination recorded as screen failure. Source documents " +
            "indicate all inclusion criteria were met and the topical corticosteroid washout " +
            "was satisfied. Please verify and respond.",
        },
      },
    },
    debrief: {
      line: "She was right. Eligible on every criterion, washout satisfied by more than three weeks.",
    },
  },

  {
    id: "SAF-0035",
    day: 4,
    type: "safety",
    subject: "1047-005",
    title: "Telephone safety follow-up",
    blurb: "Telephone contact worksheet, one page.",
    cost: 60,
    source: ["saf-0035.md"],
    form: "safety",
    vera: {
      summary:
        "1047-005 called to report mild, transient nausea the evening of their Week 16 " +
        "dosing visit (Day 113, 04-JAN-2024): onset about nine hours after injection, " +
        "resolved without treatment within thirty minutes, no medical attention sought. This " +
        "is an adverse event; the determination is not serious, meaning none of the six " +
        "seriousness criteria in the safety reporting manual are met. The entry is drafted " +
        "and ready for your review.",
      entry: { visit: "Week 16" },
      verdict: "not-serious",
    },
    truth: {
      error: "NONE",
      entry: { visit: "Week 16" },
      verdict: "not-serious",
    },
    outcomes: {
      accepted: { score: {} },
      reviewedCorrect: { score: {} },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0124",
          from: "Meridian Global Patient Safety",
          subject: "Query DQ-0124 — subject 1047-005",
          body:
            "Adverse event determination does not match source. Source documents indicate " +
            "the event meets none of the six seriousness criteria in the safety reporting " +
            "manual. Please verify and respond.",
        },
      },
    },
    debrief: {
      line:
        "Nausea, resolved in thirty minutes, no treatment, no medical attention sought. None " +
        "of the six criteria. Not serious.",
    },
  },

  {
    id: "SCR-0218",
    day: 4,
    type: "screening",
    subject: "1047-018",
    title: "Eligibility review",
    blurb: "Screening packet, eight pages.",
    cost: 90,
    source: ["scr-0218.md"],
    form: "eligibility",
    vera: {
      summary:
        "1047-018's screening packet is complete. EASI 26.8, vIGA-AD 4, BSA 35%, Worst " +
        "Pruritus NRS 9. Topical corticosteroid was last applied 15-DEC-2023, 28 days before " +
        "planned Day 1 — the one-week washout is satisfied. The subject meets all inclusion " +
        "criteria. The entry is drafted and ready for your review.",
      entry: { easi: "26.8", viga: "4", bsa: "35", nrs: "9" },
      verdict: "eligible",
    },
    truth: {
      error: "NONE",
      entry: { easi: "26.8", viga: "4", bsa: "35", nrs: "9" },
      verdict: "eligible",
    },
    outcomes: {
      accepted: {
        score: { randomized: 1 },
        roster: { subject: "1047-018", status: "Enrolled" },
      },
      reviewedCorrect: {
        score: { randomized: 1 },
        roster: { subject: "1047-018", status: "Enrolled" },
      },
      reviewedWrong: {
        score: {},
        roster: { subject: "1047-018", status: "Screen failed" },
        email: {
          id: "DQ-0125",
          from: "Meridian Data Management",
          subject: "Query DQ-0125 — subject 1047-018",
          body:
            "Eligibility determination recorded as screen failure. Source documents " +
            "indicate all inclusion criteria were met and the topical corticosteroid washout " +
            "was satisfied. Please verify and respond.",
        },
      },
    },
    debrief: {
      line: "Eligible on every criterion. EASI 26.8 against a threshold of 16.",
    },
  },
];

export const SCRIPT: Situation[] = [...DAY_1, ...DAY_2, ...DAY_3, ...DAY_4];
