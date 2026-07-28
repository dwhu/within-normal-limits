import type {
  Action,
  DayNumber,
  FormValues,
  OutcomeKey,
  Situation,
  Verdict,
  WorkRecord,
} from "../types";

export type Submission = { values?: FormValues; verdict?: Verdict };

export function blockCost(situation: Situation, action: Action): number {
  return action === "accept" ? 1 : situation.manualCost;
}

/**
 * Decides whether the player got it right.
 *
 * Reads `situation.truth` only. It must never read `situation.vera` — that
 * separation is what lets the vera block be replaced by a live LLM call
 * without touching the engine.
 *
 * An UNCATCHABLE item is wrong whichever verb the player chose. Nothing on
 * their desk disagreed with anything else on their desk.
 */
export function resolve(
  situation: Situation,
  action: Action,
  day: DayNumber,
  submission: Submission = {},
): WorkRecord {
  const correct =
    situation.truth.errorType === "UNCATCHABLE"
      ? false
      : action === "accept"
        ? situation.truth.errorType === "NONE"
        : matchesTruth(situation, submission);

  const outcomeKey: OutcomeKey =
    action === "accept"
      ? correct
        ? "acceptedCorrect"
        : "acceptedWrong"
      : correct
        ? "manualCorrect"
        : "manualWrong";

  return {
    situationId: situation.id,
    day,
    action,
    correct,
    outcomeKey,
    submitted: submission.values,
    verdict: submission.verdict,
  };
}

function matchesTruth(situation: Situation, submission: Submission): boolean {
  if (situation.type === "data-entry") {
    return Object.entries(situation.truth.values).every(
      ([key, expected]) => normalise(submission.values?.[key]) === normalise(expected),
    );
  }
  return submission.verdict === situation.truth.verdict;
}

function normalise(value: string | undefined): string {
  return (value ?? "").trim().toLowerCase();
}
