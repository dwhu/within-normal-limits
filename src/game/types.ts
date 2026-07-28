export type DayNumber = 1 | 2 | 3 | 4;
export type ItemType = "screening" | "data-entry" | "safety";
export type Action = "accept" | "manual";

export type ErrorType =
  | "NONE"
  | "UNCATCHABLE"
  | "fabrication"
  | "omission"
  | "misattribution"
  | "stale-context"
  | "normalization"
  | "threshold-overconfidence";

export type OutcomeKey =
  | "acceptedCorrect"
  | "acceptedWrong"
  | "manualCorrect"
  | "manualWrong"
  | "unworked";

export type FormTemplate = "vitals" | "lab-panel" | "screening-eligibility";
export type FormFieldSpec = { key: string; label: string; unit?: string };
export type FormSpec = { template: FormTemplate; fields: FormFieldSpec[] };
export type FormValues = Record<string, string>;

/** Screening and safety items resolve to one authored verdict string. */
export type Verdict = string;

export type SubjectStatus =
  | "Enrolled"
  | "Withdrawn (by subject)"
  | "Withdrawn (hospitalized)"
  | "Screening"
  | "Screen failed"
  | "Screen failed (window expired)"
  | "Randomized";

export type Subject = {
  id: string;
  /** Initial and surname, e.g. "L. Lit". Rendered as `${id} · ${name}`. */
  name: string;
  status: SubjectStatus;
  /** DD-MMM-YYYY. Present only while status is "Screening". */
  windowCloses?: string;
  /** e.g. "Week 16". Present only while enrolled. */
  visit?: string;
};

export type Consequence =
  | { kind: "email"; emailId: string; deliverAtDayEnd: DayNumber }
  | {
      kind: "query";
      queryId: string;
      subjectId: string;
      text: string;
      deliverAtDayEnd: DayNumber;
    }
  | {
      kind: "roster";
      subjectId: string;
      status: SubjectStatus;
      deliverAtDayEnd: DayNumber;
    };

export type Situation = {
  id: string;
  day: DayNumber;
  type: ItemType;
  subjectId: string;
  title: string;
  /** The one-line queue row. */
  blurb: string;
  /** Day 1 morning: no Accept path exists. */
  manual: boolean;
  manualCost: 2 | 3;
  /** Filenames under public/content/source/, without the directory. */
  sourceDocs: string[];
  form: FormSpec;
  /** ISOLATED. Swappable for a live LLM call. Null on forced-manual items. */
  vera: { summary: string; entry: FormValues; verdict?: Verdict } | null;
  /** The engine compares submissions against this, never against `vera`. */
  truth: {
    errorType: ErrorType;
    values: FormValues;
    verdict?: Verdict;
    /** Where in source the error is visible. Empty string when uncatchable. */
    tell: string;
  };
  outcomes: Partial<Record<OutcomeKey, Consequence[]>>;
  debrief: { line: string; category?: 1 | 2 | 3 };
};

export type InboxMessage = {
  id: string;
  from: string;
  subject: string;
  body: string;
  /** The day-end at which it landed. Day 0 means it was there at sign-in. */
  arrivedDay: number;
};

export type WorkRecord = {
  situationId: string;
  day: DayNumber;
  action: Action;
  correct: boolean;
  outcomeKey: OutcomeKey;
  submitted?: FormValues;
  verdict?: Verdict;
};

export type Phase =
  | "signin"
  | "desk"
  | "dayend"
  | "answer"
  | "audit"
  | "point";

export type GameState = {
  version: number;
  phase: Phase;
  day: DayNumber;
  blocksUsed: number;
  blocksAvailable: number;
  /**
   * Blocks taken off the top of today by queries and ladder rungs, spent
   * before the player touches the queue. The day does not get shorter — it
   * begins later, so the taskbar clock reads `blocksTaxed + blocksUsed`.
   * blocksTaxed + blocksAvailable is always BLOCKS_PER_DAY.
   */
  blocksTaxed: number;
  /** Situation ids queued for today, in order, including rollover. */
  queue: string[];
  worked: Record<string, WorkRecord>;
  roster: Record<string, Subject>;
  inbox: InboxMessage[];
  /** Consequences scheduled but not yet delivered. */
  pending: Consequence[];
  /** Queries delivered at the last day-end; taxes tomorrow. */
  openQueries: number;
  randomized: number;
};
