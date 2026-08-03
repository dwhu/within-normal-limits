"use client";

import { useEffect, useState } from "react";

import { Taskbar } from "@/components/desk/Taskbar";
import { useWindows } from "@/components/desk/useWindows";
import { Window } from "@/components/desk/Window";
import { Rail } from "@/components/vera/Rail";
import { Documents } from "@/components/windows/Documents";
import { DocViewer } from "@/components/windows/DocViewer";
import { ECRF } from "@/components/windows/ECRF";
import { Inbox } from "@/components/windows/Inbox";
import { Roster } from "@/components/windows/Roster";
import { WorkQueue } from "@/components/windows/WorkQueue";
import type { Action, FormValues, Situation, State } from "@/game/types";

type Props = {
  state: State;
  dispatch: (action: Action) => void;
  script: Situation[];
};

export function Desk({ state, dispatch, script }: Props) {
  const { windows, open, close, focus, move } = useWindows();
  const [sourceFile, setSourceFile] = useState<string | undefined>();
  const [reference, setReference] = useState<{ file: string; title: string } | null>(null);

  const today = script.filter((s) => s.day === state.day);
  const current = script[state.index];
  const doneIds = state.resolutions.map((r) => r.situationId);

  // VERA turns up mid-day-1 as an email from Clinical Operations, delivered the moment the
  // situation carrying it becomes current. She appears in the rail at the same instant, so the
  // announcement is forced to the top of the screen rather than left to be found in the taskbar.
  const arrivalId = current?.arrivalEmail?.id;
  useEffect(() => {
    if (!arrivalId) return;
    open("inbox", "Inbox", { y: 16 });
  }, [arrivalId, open]);

  const beginReview = () => {
    if (!current) return;
    setReference(null);
    open("ecrf", "eCRF");
  };

  const openSource = (file: string) => {
    setReference(null);
    setSourceFile(file);
    open("viewer", file);
  };

  const accept = () => {
    close("viewer");
    close("ecrf");
    dispatch({ type: "ACCEPT" });
  };

  const submit = (values: FormValues, verdict?: string) => {
    close("viewer");
    close("ecrf");
    dispatch({ type: "SUBMIT", values, verdict });
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {windows.map((w) => (
        <Window
          key={w.id}
          window={w}
          onFocus={focus}
          onMove={move}
          onClose={w.id === "queue" ? undefined : close}
        >
          {w.id === "queue" && (
            <WorkQueue
              today={today}
              current={current}
              doneIds={doneIds}
              onOpenSource={openSource}
            />
          )}
          {w.id === "viewer" &&
            (reference ? (
              <DocViewer key={current?.id ?? "reference"} file={reference.file} kind="document" />
            ) : (
              current && (
                <DocViewer key={current.id} file={sourceFile ?? current.source[0]} kind="source" />
              )
            ))}
          {w.id === "ecrf" && current && (
            <ECRF key={current.id} situation={current} onSubmit={submit} />
          )}
          {w.id === "inbox" && <Inbox emails={state.inbox} />}
          {w.id === "roster" && <Roster roster={state.roster} changed={[]} />}
          {w.id === "documents" && (
            <Documents
              onOpen={(file, title) => {
                setReference({ file, title });
                open("viewer", title);
              }}
            />
          )}
        </Window>
      ))}

      <Rail situation={current} onAccept={accept} onReview={beginReview} />

      <Taskbar
        windows={windows}
        clock={state.clock}
        day={state.day}
        onFocus={focus}
        onOpen={open}
      />
    </div>
  );
}
