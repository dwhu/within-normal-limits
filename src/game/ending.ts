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

const carriesError = (s: Situation) => s.truth.error !== "NONE";

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
