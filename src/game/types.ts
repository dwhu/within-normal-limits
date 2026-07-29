export type ItemType = "screening" | "data-entry" | "safety";

export type ErrorType =
  | "NONE"
  | "UNCATCHABLE"
  | "fabrication"
  | "omission"
  | "misattribution"
  | "stale-context"
  | "normalization"
  | "threshold";

export type FormId = "vitals" | "labs" | "eligibility" | "safety";
export type FormValues = Record<string, string>;
export type Day = 1 | 2 | 3 | 4;

export type Email = {
  id: string;
  from: string;
  subject: string;
  body: string;
};

export type RosterChange = { subject: string; status: string };

/** A roster change as actually committed: the status the subject held immediately before. */
export type RosterTransition = { subject: string; from: string; to: string };

export type Tally = {
  verified: number;
  errorsCaught: number;
  errorsAccepted: number;
  randomized: number;
  harmed: number;
};

export type Outcome = {
  email?: Email;
  roster?: RosterChange;
  score: Partial<Tally>;
};

export type OutcomeKey = "accepted" | "reviewedCorrect" | "reviewedWrong";

export type Situation = {
  id: string;
  day: Day;
  type: ItemType;
  subject: string;
  title: string;
  blurb: string;
  cost: 60 | 90;
  manual?: true;
  source: string[];
  form: FormId;
  vera?: { summary: string; entry: FormValues; verdict?: string };
  truth: { error: ErrorType; entry: FormValues; verdict?: string };
  outcomes: Record<OutcomeKey, Outcome>;
  debrief: { line: string; category?: 1 | 2 | 3 };
  /**
   * Delivered to the inbox the moment this situation becomes current — a mid-day narrative
   * beat, unlike LADDER's day-end rungs. Used once, for VERA's arrival partway through day 1.
   */
  arrivalEmail?: Email;
};

export type Resolution = {
  situationId: string;
  action: "accepted" | "reviewed";
  submitted?: FormValues;
  verdict?: string;
  correct: boolean;
  outcomeKey: OutcomeKey;
};

export type Subject = { id: string; name: string; status: string };
export type Roster = Subject[];

export type Screen = "signin" | "desk" | "dayend" | "ending";

export type State = {
  screen: Screen;
  day: Day;
  clock: number; // minutes since 08:00, display only
  index: number; // position in the script
  resolutions: Resolution[];
  inbox: Email[];
  roster: Roster;
  /** The roster transitions committed when the most recently closed day closed. Replaced, not appended, each time a day closes. */
  dayRosterChanges: RosterTransition[];
  tally: Tally;
};

export type Action =
  | { type: "SIGN_IN" }
  | { type: "ACCEPT" }
  | { type: "SUBMIT"; values: FormValues; verdict?: string }
  | { type: "BEGIN_DAY" }
  | { type: "SKIP_DAY" }
  | { type: "RESTORE"; state: State };
