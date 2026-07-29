"use client";

import { useState } from "react";

import { buildAnswer, calibrate } from "@/game/ending";
import type { Situation, State } from "@/game/types";

const UNCATCHABLE_WORDING =
  "The blood filed under 1047-005 was drawn from 1047-010, and the other way round. " +
  "Nothing on your desk disagreed with anything else on your desk. The requisition form " +
  "has a field for participant initials — field 5 — and it is pre-printed “not " +
  "collected for this study.” Had it been filled in, the mismatch would have been " +
  "caught before the results ever reached you. That was decided by whoever designed the " +
  "form, not by you.";

type Props = { state: State; script: Situation[] };

export function Ending({ state, script }: Props) {
  const [beat, setBeat] = useState(0);
  const rows = buildAnswer(state, script);
  const cal = calibrate(state, script);

  const uncatchable = rows.filter((r) => r.category === 2);
  const background = rows.filter((r) => r.category === 1);
  const preventable = rows.filter((r) => r.category === 3);

  return (
    <div className="flex h-screen items-center justify-center p-8">
      <div className="bevel-out max-h-full w-[760px] overflow-auto shadow-2xl">
        <div className="bevel-in m-0.5 p-8 font-mono text-[11px] leading-[1.8]">
          {beat === 0 && (
            <>
              <h2 className="tracking-widest">WHAT ACTUALLY HAPPENED</h2>
              <table className="mt-4 w-full border-collapse text-left">
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="align-top">
                      <td className="py-1 pr-3">{r.id}</td>
                      <td className="py-1 pr-3">{r.subject}</td>
                      <td className="py-1 pr-3">{r.action}</td>
                      <td className="py-1">{r.truth}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {background.length > 0 && (
                <>
                  <h2 className="mt-8 tracking-widest">WHAT THE DRUG DID</h2>
                  <p className="mt-2 max-w-[70ch]">
                    A subject was hospitalized. VERA was correct, you were careful, and the event is
                    on the drug&apos;s known safety profile. Nobody erred. A trial is an experiment
                    on people who volunteered for something unproven, and this is what that means.
                  </p>
                </>
              )}

              {uncatchable.length > 0 && (
                <>
                  <h2 className="mt-8 tracking-widest">WHAT YOU COULD NOT HAVE CAUGHT</h2>
                  <p className="mt-2 max-w-[70ch]">{UNCATCHABLE_WORDING}</p>
                </>
              )}

              {preventable.length > 0 && (
                <>
                  <h2 className="mt-8 tracking-widest">WHAT GOT PAST YOU</h2>
                  {preventable.map((r) => (
                    <p key={r.id} className="mt-2 max-w-[70ch]">
                      {r.id} · {r.subject}
                    </p>
                  ))}
                </>
              )}
            </>
          )}

          {beat === 1 && (
            <>
              <h2 className="tracking-widest">FINAL AUDIT FINDING</h2>
              <p className="mt-4 max-w-[70ch]">
                Site 1047 — Cascade Dermatology &amp; Clinical Research, LLC, Portland, Oregon.
                Protocol 20210143, Amendment 3 (29-NOV-2023). Investigator: M. A. Okonkwo, MD, FAAD.
              </p>
              <p className="mt-4 max-w-[70ch]">
                Review of the period 08-JAN-2024 through 11-JAN-2024 identified{" "}
                {cal.errorsThroughUnverified} data point(s) entered into the study database that are
                not supported by source documentation. Source data verification was performed by the
                coordinator on {cal.verified} of {script.filter((s) => s.vera).length} assisted
                records.
              </p>
              <p className="mt-4 max-w-[70ch]">
                Randomized at close: {state.tally.randomized + 11} against a contracted 12.
              </p>
            </>
          )}

          {beat === 2 && (
            <>
              <h2 className="tracking-widest">THE POINT</h2>
              <p className="mt-4 max-w-[70ch]">
                Over four days you verified {cal.verified} of {script.filter((s) => s.vera).length}{" "}
                things the assistant told you. {cal.verifiedContainingError} of those turned out to
                contain an error. {cal.errorsThroughUnverified} errors went into the database
                unverified.
              </p>
              <p className="mt-4 max-w-[70ch]">
                Some of what went wrong here was not yours to catch. The mislabelled specimen was
                consistent with itself at every point it touched your desk, and no amount of
                checking would have found it. It was preventable — one field, on one form, switched
                off for a defensible reason by someone who never met the patient.
              </p>
              <p className="mt-4 max-w-[70ch]">That person builds tools. So do you.</p>
            </>
          )}

          {beat < 2 && (
            <button
              type="button"
              className="bevel-out mt-10 px-6 py-1.5"
              onClick={() => setBeat((b) => b + 1)}
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
