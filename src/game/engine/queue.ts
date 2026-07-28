import type { DayNumber, Situation, Subject } from "../types";
import { formatRunDate } from "./clock";

/** Rolled-over items go on top of today's — that is how the backlog compounds. */
export function buildQueue(
  day: DayNumber,
  all: Situation[],
  rolledOver: string[],
): string[] {
  const today = all.filter((s) => s.day === day).map((s) => s.id);
  return [...rolledOver, ...today];
}

type ExpireOptions = { randomizationClosesTomorrow?: boolean };

/**
 * Run at the 4:00 PM stop. Any unworked screening item whose window has closed
 * becomes a screen failure. At the end of day 4 every remaining screening item
 * expires regardless of window, because randomization closes the next morning.
 */
export function expireWindows(
  day: DayNumber,
  unworkedQueue: string[],
  all: Situation[],
  roster: Record<string, Subject>,
  options: ExpireOptions = {},
): { expired: string[]; roster: Record<string, Subject> } {
  const byId = new Map(all.map((s) => [s.id, s]));
  const today = formatRunDate(day);
  const expired: string[] = [];
  const next = { ...roster };

  for (const id of unworkedQueue) {
    const situation = byId.get(id);
    if (!situation || situation.type !== "screening") continue;

    const subject = next[situation.subjectId];
    if (!subject || subject.status !== "Screening") continue;

    // Compare day-of-month numerically rather than lexically — every run date
    // is in JAN-2024, but string comparison would break the moment one isn't.
    const closedByDate =
      subject.windowCloses !== undefined &&
      dayOfMonth(subject.windowCloses) <= dayOfMonth(today);

    if (!options.randomizationClosesTomorrow && !closedByDate) continue;

    expired.push(id);
    next[situation.subjectId] = {
      ...subject,
      status: "Screen failed (window expired)",
      windowCloses: undefined,
    };
  }

  return { expired, roster: next };
}

function dayOfMonth(date: string): number {
  return Number.parseInt(date.slice(0, 2), 10);
}
