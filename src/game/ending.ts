import { situationById } from "@/game/state";
import type { Situation, State } from "@/game/types";

export type AnswerRow = {
  id: string;
  subject: string;
  title: string;
  action: string;
  truth: string;
  consequence: string;
  category?: 1 | 2 | 3;
};

export type Calibration = {
  verified: number;
  verifiedContainingError: number;
  errorsThroughUnverified: number;
};

// UNCATCHABLE is deliberately excluded: it is real error taxonomy for the ending's own
// "what you could not have caught" heading (category 2), but it must never be tallied
// here as a miss, because every document on the desk agreed — there was nothing to
// verify against. Counting it would collapse category 2 into category 3 ("what got past
// you"), which the design forbids as strongly as it forbids the reverse.
const carriesError = (s: Situation) => s.truth.error !== "NONE" && s.truth.error !== "UNCATCHABLE";

export function buildAnswer(state: State, script: Situation[]): AnswerRow[] {
  return state.resolutions.map((r) => {
    const s = situationById(r.situationId, script);
    return {
      id: s.id,
      subject: s.subject,
      title: s.title,
      action: r.action === "accepted" ? "Accepted as drafted" : "Reviewed by hand",
      truth: s.debrief.line,
      consequence: s.outcomes[r.outcomeKey].email?.subject ?? "",
      category: s.debrief.category,
    };
  });
}

export function calibrate(state: State, script: Situation[]): Calibration {
  let verified = 0;
  let verifiedContainingError = 0;
  let errorsThroughUnverified = 0;

  for (const r of state.resolutions) {
    const s = situationById(r.situationId, script);
    if (!s.vera) continue; // day 1's manual items are not decisions about VERA

    if (r.action === "reviewed") {
      verified += 1;
      if (carriesError(s)) verifiedContainingError += 1;
    } else if (carriesError(s)) {
      errorsThroughUnverified += 1;
    }
  }

  return { verified, verifiedContainingError, errorsThroughUnverified };
}
