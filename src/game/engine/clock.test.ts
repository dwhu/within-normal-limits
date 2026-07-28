import { describe, expect, it } from "vitest";

import { BLOCKS_PER_DAY, blocksToClock, formatRunDate } from "./clock";

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
