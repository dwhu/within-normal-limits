"use client";

import { Taskbar } from "@/components/desk/Taskbar";
import { useWindows } from "@/components/desk/useWindows";
import { Window } from "@/components/desk/Window";
import { Rail } from "@/components/vera/Rail";
import { DocViewer } from "@/components/windows/DocViewer";
import { ECRF } from "@/components/windows/ECRF";
import { WorkQueue } from "@/components/windows/WorkQueue";
import type { Action, FormValues, Situation, State } from "@/game/types";

type Props = {
  state: State;
  dispatch: (action: Action) => void;
  script: Situation[];
};

export function Desk({ state, dispatch, script }: Props) {
  const { windows, open, close, focus, move } = useWindows();

  const today = script.filter((s) => s.day === state.day);
  const current = script[state.index];
  const doneIds = state.resolutions.map((r) => r.situationId);

  const beginReview = () => {
    if (!current) return;
    open("viewer", current.source[0] ?? "source.md");
    open("ecrf", "eCRF");
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
          {w.id === "queue" && <WorkQueue today={today} current={current} doneIds={doneIds} />}
          {w.id === "viewer" && current && (
            <DocViewer key={current.id} file={current.source[0]} kind="source" />
          )}
          {w.id === "ecrf" && current && (
            <ECRF key={current.id} situation={current} onSubmit={submit} />
          )}
        </Window>
      ))}

      <Rail situation={current} onAccept={accept} onReview={beginReview} />

      <Taskbar windows={windows} clock={state.clock} day={state.day} onFocus={focus} />
    </div>
  );
}
