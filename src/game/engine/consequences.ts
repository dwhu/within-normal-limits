import type {
  Consequence,
  InboxMessage,
  OutcomeKey,
  Situation,
  Subject,
  SubjectStatus,
} from "../types";

export type EmailTemplate = {
  id: string;
  from: string;
  subject: string;
  body: string;
};

export type RosterChange = {
  subjectId: string;
  from: SubjectStatus;
  to: SubjectStatus;
};

export type DeliveryResult = {
  messages: InboxMessage[];
  roster: Record<string, Subject>;
  rosterChanges: RosterChange[];
  remaining: Consequence[];
  /** Queries delivered now. Each one taxes thirty minutes tomorrow. */
  queryCount: number;
};

export function collect(situation: Situation, outcomeKey: OutcomeKey): Consequence[] {
  return situation.outcomes[outcomeKey] ?? [];
}

/**
 * Runs at a day-end. Consequences arrive in their native channel and are never
 * labelled as feedback: a query states that the reported value does not match
 * source, and says nothing about who entered it.
 */
export function deliver(
  dayEnd: number,
  pending: Consequence[],
  roster: Record<string, Subject>,
  emails: Record<string, EmailTemplate>,
): DeliveryResult {
  const due = pending.filter((c) => c.deliverAtDayEnd <= dayEnd);
  const remaining = pending.filter((c) => c.deliverAtDayEnd > dayEnd);

  const messages: InboxMessage[] = [];
  const rosterChanges: RosterChange[] = [];
  const nextRoster = { ...roster };
  let queryCount = 0;

  for (const consequence of due) {
    if (consequence.kind === "email") {
      const template = emails[consequence.emailId];
      if (!template) {
        throw new Error(`No email template for id "${consequence.emailId}"`);
      }
      messages.push({ ...template, arrivedDay: dayEnd });
      continue;
    }

    if (consequence.kind === "query") {
      queryCount += 1;
      messages.push({
        id: consequence.queryId,
        from: "Amgen Data Mgmt",
        subject: `Query ${consequence.queryId}, subject ${consequence.subjectId}`,
        body: consequence.text,
        arrivedDay: dayEnd,
      });
      continue;
    }

    const subject = nextRoster[consequence.subjectId];
    if (!subject) {
      throw new Error(`No roster subject for id "${consequence.subjectId}"`);
    }
    if (subject.status === consequence.status) continue;

    rosterChanges.push({
      subjectId: subject.id,
      from: subject.status,
      to: consequence.status,
    });
    nextRoster[subject.id] = { ...subject, status: consequence.status };
  }

  return { messages, roster: nextRoster, rosterChanges, remaining, queryCount };
}
