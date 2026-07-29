import { describe, expect, it } from "vitest";

import { findMatches } from "@/components/windows/find";

describe("findMatches", () => {
  it("returns nothing for an empty query", () => {
    expect(findMatches("EASI ≥16 at screening", "")).toEqual([]);
  });

  it("finds a single match with its offsets", () => {
    expect(findMatches("EASI ≥16 at screening", "≥16")).toEqual([{ start: 5, end: 8 }]);
  });

  it("finds every match", () => {
    expect(findMatches("alt alt alt", "alt")).toHaveLength(3);
  });

  it("is case-insensitive", () => {
    expect(findMatches("Protocol Amendment 3", "amendment")).toEqual([{ start: 9, end: 18 }]);
  });

  it("treats regex characters as literals", () => {
    expect(findMatches("value (42) recorded", "(42)")).toEqual([{ start: 6, end: 10 }]);
  });

  it("does not loop forever on a query of only special characters", () => {
    expect(findMatches("a.b.c", ".")).toHaveLength(2);
  });
});
