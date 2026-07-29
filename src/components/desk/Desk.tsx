"use client";

import { Taskbar } from "@/components/desk/Taskbar";
import { useWindows } from "@/components/desk/useWindows";
import { Window } from "@/components/desk/Window";
import { Rail } from "@/components/vera/Rail";
import { WorkQueue } from "@/components/windows/WorkQueue";
import type { Action, Situation, State } from "@/game/types";

type Props = {
  state: State;
  dispatch: (action: Action) => void;
  script: Situation[];
};

export function Desk({ state, dispatch, script }: Props) {
  const { windows, focus, close, move } = useWindows();

  const today = script.filter((s) => s.day === state.day);
  const current = script[state.index];
  const doneIds = state.resolutions.map((r) => r.situationId);

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
            <WorkQueue today={today} current={current} doneIds={doneIds} />
          )}
        </Window>
      ))}

      <Rail
        situation={current}
        onAccept={() => dispatch({ type: "ACCEPT" })}
        onReview={() => dispatch({ type: "SUBMIT", values: {} })}
      />

      <Taskbar windows={windows} clock={state.clock} day={state.day} onFocus={focus} />
    </div>
  );
}
