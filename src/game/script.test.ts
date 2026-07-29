import { describe, expect, it } from "vitest";

import { FORMS } from "@/game/forms";
import { SCRIPT } from "@/game/script";

describe("SCRIPT — day 1", () => {
  const day1 = SCRIPT.filter((s) => s.day === 1);

  it("has five situations", () => {
    expect(day1).toHaveLength(5);
  });

  it("opens with three manual items totalling 3.5 hours", () => {
    const manual = day1.slice(0, 3);
    expect(manual.every((s) => s.manual === true)).toBe(true);
    expect(manual.every((s) => s.vera === undefined)).toBe(true);
    expect(manual.reduce((t, s) => t + s.cost, 0)).toBe(210);
  });

  it("gives the manual morning one item of each type", () => {
    expect(
      day1
        .slice(0, 3)
        .map((s) => s.type)
        .sort(),
    ).toEqual(["data-entry", "safety", "screening"]);
  });

  it("gives every assisted item a VERA block", () => {
    expect(day1.slice(3).every((s) => s.vera !== undefined)).toBe(true);
  });

  it("only uses field names its form defines", () => {
    for (const s of day1) {
      const allowed = FORMS[s.form].fields.map((f) => f.name);
      expect(Object.keys(s.truth.entry).every((k) => allowed.includes(k))).toBe(true);
    }
  });

  it("gives every situation a source document", () => {
    expect(day1.every((s) => s.source.length > 0)).toBe(true);
  });

  it("gives verdict-bearing forms a truth verdict", () => {
    for (const s of day1) {
      if (FORMS[s.form].verdict) expect(s.truth.verdict).toBeDefined();
    }
  });
});

describe("SCRIPT — day 2", () => {
  const day2 = SCRIPT.filter((s) => s.day === 2);
  const uncatchable = day2.find((s) => s.truth.error === "UNCATCHABLE");

  it("has four situations, none of them deep", () => {
    expect(day2).toHaveLength(4);
    expect(day2.every((s) => s.cost === 60)).toBe(true);
  });

  it("carries exactly one uncatchable situation", () => {
    expect(uncatchable).toBeDefined();
  });

  it("makes the uncatchable item agree with itself", () => {
    expect(uncatchable!.truth.entry).toEqual(uncatchable!.vera!.entry);
  });

  it("punishes the uncatchable item identically whether or not it was verified", () => {
    expect(uncatchable!.outcomes.accepted).toEqual(uncatchable!.outcomes.reviewedCorrect);
  });

  it("files the uncatchable item under category 2", () => {
    expect(uncatchable!.debrief.category).toBe(2);
  });

  it("puts the catchable misattribution on the same day", () => {
    expect(day2.some((s) => s.truth.error === "misattribution")).toBe(true);
  });

  it("still lets her be right once", () => {
    expect(day2.filter((s) => s.truth.error === "NONE")).toHaveLength(1);
  });
});
