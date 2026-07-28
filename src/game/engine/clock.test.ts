import { describe, expect, it } from "vitest";

import { BLOCKS_PER_DAY, blocksToClock, formatRunDate } from "./clock";
import { ladderTaxBlocks } from "../content/ladders";
import { availableBlocks } from "./clock";

describe("clock", () => {
  it("is sixteen blocks long", () => {
    expect(BLOCKS_PER_DAY).toBe(16);
  });

  it("renders the start of the day", () => {
    expect(blocksToClock(0)).toBe("8:00 AM");
  });

  it("renders half-hour steps", () => {
    expect(blocksToClock(1)).toBe("8:30 AM");
    expect(blocksToClock(7)).toBe("11:30 AM");
  });

  it("crosses noon correctly", () => {
    expect(blocksToClock(8)).toBe("12:00 PM");
    expect(blocksToClock(9)).toBe("12:30 PM");
    expect(blocksToClock(10)).toBe("1:00 PM");
  });

  it("renders the end of the day", () => {
    expect(blocksToClock(BLOCKS_PER_DAY)).toBe("4:00 PM");
  });

  it("formats run dates in DD-MMM-YYYY", () => {
    expect(formatRunDate(1)).toBe("08-JAN-2024");
    expect(formatRunDate(4)).toBe("11-JAN-2024");
  });
});

describe("day-start taxes", () => {
  it("costs nothing on days 1 and 2", () => {
    expect(ladderTaxBlocks(1)).toBe(0);
    expect(ladderTaxBlocks(2)).toBe(0);
  });

  it("costs nothing on day 3 — no rung has billed yet", () => {
    expect(ladderTaxBlocks(3)).toBe(0);
  });

  it("costs five blocks on day 4: reporting, the call, and audit prep", () => {
    expect(ladderTaxBlocks(4)).toBe(5);
  });

  it("bills thirty minutes per open query", () => {
    expect(availableBlocks(3, 2)).toBe(14);
    expect(availableBlocks(3, 3)).toBe(13);
  });

  it("leaves day 4 unable to absorb its own queue", () => {
    // Day 4's full manual cost is 12 blocks (spec §4). One query is the floor.
    expect(availableBlocks(4, 1)).toBe(10);
    expect(availableBlocks(4, 2)).toBe(9);
  });
});
