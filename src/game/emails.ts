import type { Day, Email } from "@/game/types";

/** One rung per day-end, scripted. Fires regardless of how the player is doing. */
export const LADDER: Record<Day, Email[]> = {
  1: [
    {
      id: "ENR-1",
      from: "Amgen Clinical Operations",
      subject: "Portland — we're SO close! 🎯",
      body:
        "Hi Site 1047!\n\nJust a friendly nudge — you're sitting at 11 randomized against a " +
        "contracted 12, and study-wide randomization closes 12-JAN-2024. One more gets you " +
        "over the line!\n\nYou've got this. 💪\n\n— Clinical Operations",
    },
  ],
  2: [
    {
      id: "ENR-2",
      from: "Amgen Clinical Operations",
      subject: "Enrolment check-in — Thursday",
      body:
        "Site 1047,\n\nOur operations lead has asked for a call on Thursday to walk through " +
        "your remaining screening pipeline ahead of randomization close.\n\nNo prep needed, " +
        "just bring your numbers.\n\n— Clinical Operations",
    },
    {
      id: "AUD-1",
      from: "Amgen Data Management",
      subject: "Query volume — Site 1047",
      body:
        "Site 1047,\n\nQuery volume at your site has risen relative to the study average " +
        "across the current reporting period. No action is required at this time. This " +
        "notice is generated automatically.\n\n— Data Management",
    },
  ],
  3: [
    {
      id: "ENR-3",
      from: "Amgen Clinical Operations",
      subject: "Daily enrolment reporting — effective immediately",
      body:
        "Site 1047,\n\nEffective immediately and through randomization close, please submit " +
        "a daily enrolment status to this address by 09:00 PT.\n\nWe know this is extra work " +
        "and we appreciate your partnership! 🙏\n\n— Clinical Operations",
    },
    {
      id: "AUD-2",
      from: "Harborlight Clinical Research",
      subject: "Notice of for-cause audit — Site 1047",
      body:
        "Investigator: M. A. Okonkwo, MD, FAAD\nProtocol 20210143, Amendment 3 (29-NOV-2023)\n\n" +
        "Please be advised that a for-cause audit of Site 1047 has been scheduled. Source " +
        "documents, the investigator site file, and the delegation log should be available " +
        "for review.\n\nThis notice is issued under Section 8 of the Monitoring Plan.",
    },
  ],
  4: [],
};
