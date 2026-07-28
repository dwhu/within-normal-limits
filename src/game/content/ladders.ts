import type { DayNumber } from "../types";

export type LadderRung = {
  id: string;
  ladder: "enrollment" | "audit";
  rung: number;
  /** Fires at the end of this day. */
  firesAtDayEnd: DayNumber;
  emailId: string;
  /** Blocks this costs on each subsequent day. 0 = costs no time. */
  dailyTaxBlocks: number;
  /** Blocks this costs once, on this specific day. */
  oneOffTaxBlocks: number;
  oneOffTaxDay?: DayNumber;
};

/**
 * Both ladders are scripted — they fire regardless of player performance.
 * Their accumulated cost on day 4 is what makes a verify-everything run
 * overflow with zero rollover and zero mistakes. See spec §2.
 */
export const LADDER_RUNGS: LadderRung[] = [
  {
    id: "enroll-1",
    ladder: "enrollment",
    rung: 1,
    firesAtDayEnd: 1,
    emailId: "email-enroll-nudge",
    dailyTaxBlocks: 0,
    oneOffTaxBlocks: 0,
  },
  {
    id: "enroll-2",
    ladder: "enrollment",
    rung: 2,
    firesAtDayEnd: 2,
    emailId: "email-enroll-call",
    dailyTaxBlocks: 0,
    // "Our ops lead has asked for a call Thursday" — the call is on day 4.
    oneOffTaxBlocks: 2,
    oneOffTaxDay: 4,
  },
  {
    id: "audit-1",
    ladder: "audit",
    rung: 1,
    firesAtDayEnd: 2,
    emailId: "email-audit-query-volume",
    dailyTaxBlocks: 0,
    oneOffTaxBlocks: 0,
  },
  {
    id: "enroll-3",
    ladder: "enrollment",
    rung: 3,
    firesAtDayEnd: 3,
    emailId: "email-enroll-daily-reporting",
    // Daily enrollment reporting, every day for the rest of the run.
    dailyTaxBlocks: 1,
    oneOffTaxBlocks: 0,
  },
  {
    id: "audit-2",
    ladder: "audit",
    rung: 2,
    firesAtDayEnd: 3,
    emailId: "email-audit-for-cause",
    dailyTaxBlocks: 0,
    // Document prep for the announced for-cause audit.
    oneOffTaxBlocks: 2,
    oneOffTaxDay: 4,
  },
];

/** Total blocks the ladders take off the top of `day`. */
export function ladderTaxBlocks(day: DayNumber): number {
  return LADDER_RUNGS.reduce((total, rung) => {
    const daily = rung.firesAtDayEnd < day ? rung.dailyTaxBlocks : 0;
    const oneOff = rung.oneOffTaxDay === day ? rung.oneOffTaxBlocks : 0;
    return total + daily + oneOff;
  }, 0);
}
