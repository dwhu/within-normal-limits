import type { DayNumber } from "../types";

export const BLOCKS_PER_DAY = 16;
const DAY_START_MINUTES = 8 * 60;
const MINUTES_PER_BLOCK = 30;

/** Wall-clock time after `blocksUsed` half-hour blocks of an 8:00 AM start. */
export function blocksToClock(blocksUsed: number): string {
  const total = DAY_START_MINUTES + blocksUsed * MINUTES_PER_BLOCK;
  const hour24 = Math.floor(total / 60);
  const minute = total % 60;
  const suffix = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${suffix}`;
}

const RUN_DATES: Record<DayNumber, string> = {
  1: "08-JAN-2024",
  2: "09-JAN-2024",
  3: "10-JAN-2024",
  4: "11-JAN-2024",
};

export function formatRunDate(day: DayNumber): string {
  return RUN_DATES[day];
}

/** The morning after day 4. Randomization closes here and does not move. */
export const RANDOMIZATION_CLOSES = "12-JAN-2024 08:00 PT";
