import type { Situation } from "@/game/types";

const noOutcome = { score: {} };

export const FIXTURE_SCRIPT: Situation[] = [
  {
    id: "FIX-001",
    day: 1,
    type: "data-entry",
    subject: "1047-009",
    title: "Week 8 vitals",
    blurb: "Paper source only. Four fields.",
    cost: 60,
    manual: true,
    source: ["fix-001.md"],
    form: "vitals",
    truth: { error: "NONE", entry: { bp: "128/82", pulse: "72" } },
    outcomes: {
      accepted: noOutcome,
      reviewedCorrect: { score: { verified: 1 } },
      reviewedWrong: {
        score: { verified: 1, errorsAccepted: 1 },
        email: {
          id: "DQ-0111",
          from: "Amgen Data Mgmt",
          subject: "Query DQ-0111",
          body: "Reported value does not match source.",
        },
      },
    },
    debrief: { line: "Week 8 vitals, entered by hand." },
  },
  {
    id: "FIX-002",
    day: 1,
    type: "data-entry",
    subject: "1047-003",
    title: "Week 12 labs",
    blurb: "Central lab panel.",
    cost: 60,
    source: ["fix-002.md"],
    form: "labs",
    vera: { summary: "The panel is within range.", entry: { alt: "24" } },
    truth: { error: "NONE", entry: { alt: "24" } },
    outcomes: {
      accepted: { score: {} },
      reviewedCorrect: { score: { verified: 1 } },
      reviewedWrong: { score: { verified: 1, errorsAccepted: 1 } },
    },
    debrief: { line: "She was right." },
  },
  {
    id: "FIX-003",
    day: 2,
    type: "screening",
    subject: "1047-019",
    title: "Eligibility review",
    blurb: "Screening packet.",
    cost: 90,
    source: ["fix-003.md"],
    form: "eligibility",
    vera: {
      summary: "The subject meets all inclusion criteria.",
      entry: { easi: "15.8" },
    },
    truth: { error: "threshold", entry: { easi: "15.8" }, verdict: "screen-fail" },
    outcomes: {
      accepted: {
        score: { errorsAccepted: 1, randomized: 1 },
        roster: { subject: "1047-019", status: "Enrolled" },
      },
      reviewedCorrect: {
        score: { verified: 1, errorsCaught: 1 },
        roster: { subject: "1047-019", status: "Screen failed (EASI <16)" },
      },
      reviewedWrong: {
        score: { verified: 1, errorsAccepted: 1, randomized: 1 },
        roster: { subject: "1047-019", status: "Enrolled" },
      },
    },
    debrief: { line: "EASI 15.8 is below the threshold of 16.", category: 3 },
  },
];
