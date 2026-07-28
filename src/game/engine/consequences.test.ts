import { describe, expect, it } from "vitest";

import type { Consequence, Situation, Subject } from "../types";
import { collect, deliver } from "./consequences";

const situation = {
  id: "DE-1113",
  outcomes: {
    acceptedWrong: [
      {
        kind: "query",
        queryId: "DQ-0114",
        subjectId: "1047-011",
        text: "Reported ALT (42) does not match source (24). Please verify and respond.",
        deliverAtDayEnd: 4,
      },
    ],
    acceptedCorrect: [],
  },
} as unknown as Situation;

describe("collect", () => {
  it("returns the consequences for the outcome that happened", () => {
    expect(collect(situation, "acceptedWrong")).toHaveLength(1);
  });

  it("returns nothing for an outcome with no authored consequences", () => {
    expect(collect(situation, "manualCorrect")).toEqual([]);
  });
});

describe("deliver", () => {
  const roster: Record<string, Subject> = {
    "1047-001": { id: "1047-001", name: "R. Jones", status: "Enrolled", visit: "Week 16" },
  };

  const pending: Consequence[] = [
    { kind: "email", emailId: "email-enroll-nudge", deliverAtDayEnd: 1 },
    { kind: "roster", subjectId: "1047-001", status: "Withdrawn (hospitalized)", deliverAtDayEnd: 3 },
    {
      kind: "query",
      queryId: "DQ-0114",
      subjectId: "1047-011",
      text: "Reported ALT (42) does not match source (24).",
      deliverAtDayEnd: 3,
    },
  ];

  const emails = {
    "email-enroll-nudge": {
      id: "email-enroll-nudge",
      from: "Amgen Clinical Ops",
      subject: "Portland enrollment 🎉",
      body: "Just a nudge!",
    },
  };

  it("delivers only what is due at this day-end", () => {
    const result = deliver(1, pending, roster, emails);

    expect(result.messages).toHaveLength(1);
    expect(result.messages[0].subject).toBe("Portland enrollment 🎉");
    expect(result.remaining).toHaveLength(2);
  });

  it("changes the roster line and reports the change", () => {
    const result = deliver(3, pending, roster, emails);

    expect(result.roster["1047-001"].status).toBe("Withdrawn (hospitalized)");
    expect(result.rosterChanges).toEqual([
      { subjectId: "1047-001", from: "Enrolled", to: "Withdrawn (hospitalized)" },
    ]);
  });

  it("counts delivered queries so they can tax tomorrow", () => {
    expect(deliver(3, pending, roster, emails).queryCount).toBe(1);
  });

  it("renders a query as an inbox message in the sponsor's voice", () => {
    const result = deliver(3, pending, roster, emails);
    const query = result.messages.find((m) => m.id === "DQ-0114");

    expect(query?.from).toBe("Amgen Data Mgmt");
    expect(query?.subject).toBe("Query DQ-0114, subject 1047-011");
    // It states the mismatch. It never says the player accepted it in error.
    expect(query?.body).not.toMatch(/you|your/i);
  });
});
