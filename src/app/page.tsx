"use client";

import { useCallback, useEffect, useReducer, useState } from "react";

import { Desk } from "@/components/desk/Desk";
import { DayEnd } from "@/components/screens/DayEnd";
import { Ending } from "@/components/screens/Ending";
import { SignIn } from "@/components/screens/SignIn";
import { clear, load, save } from "@/game/persist";
import { SCRIPT } from "@/game/script";
import { initialState, reducer } from "@/game/state";
import type { Action, State } from "@/game/types";

export default function Home() {
  const [state, rawDispatch] = useReducer(
    (s: State, a: Action) => reducer(s, a, SCRIPT),
    initialState,
  );
  const dispatch = useCallback((a: Action) => rawDispatch(a), []);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);

    if (url.searchParams.get("reset") === "1") {
      clear();
      // Drop the param so a later refresh resumes the fresh run instead of wiping it again.
      url.searchParams.delete("reset");
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
      setHydrated(true);
      return;
    }

    const saved = load();
    if (saved) rawDispatch({ type: "RESTORE", state: saved });
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) save(state);
  }, [state, hydrated]);

  if (!hydrated) return null;

  switch (state.screen) {
    case "signin":
      return <SignIn onSignIn={() => dispatch({ type: "SIGN_IN" })} />;
    case "dayend":
      return (
        <DayEnd state={state} script={SCRIPT} onBegin={() => dispatch({ type: "BEGIN_DAY" })} />
      );
    case "ending":
      return <Ending state={state} script={SCRIPT} />;
    default:
      return <Desk state={state} dispatch={dispatch} script={SCRIPT} />;
  }
}
