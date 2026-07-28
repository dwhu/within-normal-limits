import { describe, expect, it } from "vitest";

import type { Situation } from "../types";
import { blockCost, resolve } from "./resolve";

const dataEntry: Situation = {
  id: "DE-1113",
  day: 3,
  type: "data-entry",
  subjectId: "1047-011",
  title: "Week 20 central lab panel",
  blurb: "Week 20 labs",
  manual: false,
  manualCost: 2,
  sourceDocs: ["de-1113-lab.md"],
  form: {
    template: "lab-panel",
    fields: [
      { key: "alt", label: "ALT", unit: "U/L" },
      { key: "ast", label: "AST", unit: "U/L" },
    ],
  },
  // She states an ALT that appears nowhere in the source. Fabrication.
  vera: { summary: "ALT 42 U/L, AST 31 U/L.", entry: { alt: "42", ast: "31" } },
  truth: {
    errorType: "fabrication",
    values: { alt: "24", ast: "31" },
    tell: "Lab report page 1 — ALT reads 24. No value of 42 appears anywhere.",
  },
  outcomes: {},
  debrief: { line: "" },
};

const screening: Situation = {
  ...dataEntry,
  id: "SCR-0219",
  type: "screening",
  manualCost: 3,
  subjectId: "1047-019",
  form: { template: "screening-eligibility", fields: [] },
  vera: { summary: "Meets all criteria.", entry: {}, verdict: "eligible" },
  truth: {
    errorType: "threshold-overconfidence",
    values: {},
    verdict: "screen-fail",
    tell: "Screening packet page 2 — EASI 15.8, below the 16 threshold.",
  },
};

describe("blockCost", () => {
  it("charges one block to accept", () => {
    expect(blockCost(dataEntry, "accept")).toBe(1);
    expect(blockCost(screening, "accept")).toBe(1);
  });

  it("charges the item's manual cost to review by hand", () => {
    expect(blockCost(dataEntry, "manual")).toBe(2);
    expect(blockCost(screening, "manual")).toBe(3);
  });
});

describe("resolve", () => {
  it("marks accepting a fabrication as wrong", () => {
    const record = resolve(dataEntry, "accept", 3);

    expect(record.correct).toBe(false);
    expect(record.outcomeKey).toBe("acceptedWrong");
  });

  it("marks accepting a correct output as right", () => {
    const clean: Situation = {
      ...dataEntry,
      vera: { summary: "ALT 24 U/L, AST 31 U/L.", entry: { alt: "24", ast: "31" } },
      truth: { errorType: "NONE", values: { alt: "24", ast: "31" }, tell: "" },
    };

    expect(resolve(clean, "accept", 3).outcomeKey).toBe("acceptedCorrect");
  });

  it("marks a manual submission matching truth as right", () => {
    const record = resolve(dataEntry, "manual", 3, { values: { alt: "24", ast: "31" } });

    expect(record.correct).toBe(true);
    expect(record.outcomeKey).toBe("manualCorrect");
  });

  it("marks a mistyped manual submission as wrong", () => {
    const record = resolve(dataEntry, "manual", 3, { values: { alt: "42", ast: "31" } });

    expect(record.outcomeKey).toBe("manualWrong");
  });

  it("ignores surrounding whitespace and case in typed values", () => {
    const record = resolve(dataEntry, "manual", 3, { values: { alt: " 24 ", ast: "31" } });

    expect(record.correct).toBe(true);
  });

  it("compares the verdict, not the values, on screening items", () => {
    expect(resolve(screening, "manual", 3, { verdict: "screen-fail" }).correct).toBe(true);
    expect(resolve(screening, "manual", 3, { verdict: "eligible" }).correct).toBe(false);
  });

  it("counts an accepted uncatchable item as wrong but records it as uncatchable", () => {
    const uncatchable: Situation = {
      ...dataEntry,
      truth: { errorType: "UNCATCHABLE", values: { alt: "24", ast: "31" }, tell: "" },
    };
    const record = resolve(uncatchable, "accept", 2);

    expect(record.correct).toBe(false);
  });

  it("counts a manually reviewed uncatchable item as wrong too", () => {
    // The whole point: verifying does not help. The source agrees with her.
    const uncatchable: Situation = {
      ...dataEntry,
      truth: { errorType: "UNCATCHABLE", values: { alt: "24", ast: "31" }, tell: "" },
    };
    const record = resolve(uncatchable, "manual", 2, { values: { alt: "24", ast: "31" } });

    expect(record.correct).toBe(false);
    expect(record.outcomeKey).toBe("manualWrong");
  });
});
