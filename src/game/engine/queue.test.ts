import { describe, expect, it } from "vitest";

import type { Situation, Subject } from "../types";
import { buildQueue, expireWindows } from "./queue";

function situation(over: Partial<Situation> & Pick<Situation, "id" | "day">): Situation {
  return {
    type: "data-entry",
    subjectId: "1047-009",
    title: "t",
    blurb: "b",
    manual: false,
    manualCost: 2,
    sourceDocs: [],
    form: { template: "vitals", fields: [] },
    vera: { summary: "s", entry: {} },
    truth: { errorType: "NONE", values: {}, tell: "" },
    outcomes: {},
    debrief: { line: "" },
    ...over,
  } as Situation;
}

const ALL: Situation[] = [
  situation({ id: "A", day: 1 }),
  situation({ id: "B", day: 2 }),
  situation({ id: "C", day: 2 }),
];

describe("buildQueue", () => {
  it("returns only today's situations when nothing rolled over", () => {
    expect(buildQueue(2, ALL, [])).toEqual(["B", "C"]);
  });

  it("puts rolled-over items on top of today's queue", () => {
    expect(buildQueue(2, ALL, ["A"])).toEqual(["A", "B", "C"]);
  });
});

describe("expireWindows", () => {
  const roster: Record<string, Subject> = {
    "1047-018": {
      id: "1047-018",
      name: "L. Lit",
      status: "Screening",
      windowCloses: "11-JAN-2024",
    },
    "1047-019": {
      id: "1047-019",
      name: "R. Amaya",
      status: "Screening",
      windowCloses: "12-JAN-2024",
    },
  };

  const screening: Situation[] = [
    situation({ id: "SCR-0218", day: 3, type: "screening", subjectId: "1047-018", manualCost: 3 }),
    situation({ id: "SCR-0219", day: 3, type: "screening", subjectId: "1047-019", manualCost: 3 }),
  ];

  it("expires a screening item whose window closed today", () => {
    const result = expireWindows(4, ["SCR-0218", "SCR-0219"], screening, roster);

    expect(result.expired).toEqual(["SCR-0218"]);
    expect(result.roster["1047-018"].status).toBe("Screen failed (window expired)");
    expect(result.roster["1047-019"].status).toBe("Screening");
  });

  it("leaves an open window alone before its date", () => {
    const result = expireWindows(3, ["SCR-0218"], screening, roster);

    expect(result.expired).toEqual([]);
    expect(result.roster["1047-018"].status).toBe("Screening");
  });

  it("expires every remaining screening item at the end of day 4", () => {
    const result = expireWindows(4, ["SCR-0219"], screening, roster, {
      randomizationClosesTomorrow: true,
    });

    expect(result.expired).toEqual(["SCR-0219"]);
    expect(result.roster["1047-019"].status).toBe("Screen failed (window expired)");
  });

  it("ignores non-screening items entirely", () => {
    const result = expireWindows(4, ["A"], ALL, roster, {
      randomizationClosesTomorrow: true,
    });

    expect(result.expired).toEqual([]);
  });
});
