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
          from: "Amgen Data Management",
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
          from: "Amgen Data Management",
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
      "Telephone contact worksheet, one page. No assistant provisioned. Read it and " +
      "record the determination.",
    cost: 60,
    manual: true,
    source: ["saf-0031.md"],
    form: "safety",
    truth: {
      error: "NONE",
      entry: {},
      verdict: "not-serious",
    },
    outcomes: {
      accepted: { score: {} },
      reviewedCorrect: { score: {} },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0108",
          from: "Amgen Global Patient Safety",
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
          from: "Amgen Data Management",
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
          from: "Amgen Data Management",
          subject: "Query DQ-0111 — subject 1047-008",
          body: "Reported eosinophil count does not match source. Please verify and respond.",
        },
      },
      reviewedCorrect: { score: { errorsCaught: 1 } },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0111",
          from: "Amgen Data Management",
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
          from: "Amgen Data Management",
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
      entry: {},
      verdict: "not-serious",
    },
    truth: {
      error: "misattribution",
      entry: {},
      verdict: "not-serious",
    },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0113",
          from: "Amgen Global Patient Safety",
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
          from: "Amgen Global Patient Safety",
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
          from: "Amgen Data Management",
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
        "sought. This is an adverse event; the determination is not serious, meaning none " +
        "of the six seriousness criteria in the safety reporting manual are met. The " +
        "entry is drafted and ready for your review.",
      entry: {},
      verdict: "not-serious",
    },
    truth: {
      error: "omission",
      entry: {},
      verdict: "serious",
    },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0114",
          from: "Amgen Global Patient Safety",
          subject: "Query DQ-0114 — subject 1047-002",
          body:
            "Adverse event determination does not match source. Source documents indicate " +
            "the event meets the hospitalization criterion in the safety reporting manual. " +
            "Please verify and respond.",
        },
      },
      reviewedCorrect: { score: { errorsCaught: 1 } },
      reviewedWrong: {
        score: { errorsAccepted: 1 },
        email: {
          id: "DQ-0114",
          from: "Amgen Global Patient Safety",
          subject: "Query DQ-0114 — subject 1047-002",
          body:
            "Adverse event determination does not match source. Source documents indicate " +
            "the event meets the hospitalization criterion in the safety reporting manual. " +
            "Please verify and respond.",
        },
      },
    },
    debrief: {
      line:
        "The headache wasn't the story. Page two: two days of worsening eczema and an " +
        "overnight admission for a secondary infection — hospitalization, which makes " +
        "this serious regardless of how mild the headache was.",
    },
  },
];

export const SCRIPT: Situation[] = [...DAY_1, ...DAY_2];
