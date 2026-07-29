"use client";

import { useCallback, useReducer } from "react";

import { Desk } from "@/components/desk/Desk";
import { SignIn } from "@/components/screens/SignIn";
import { SCRIPT } from "@/game/script";
import { initialState, reducer } from "@/game/state";
import type { Action, State } from "@/game/types";

export default function Home() {
  const [state, rawDispatch] = useReducer(
    (s: State, a: Action) => reducer(s, a, SCRIPT),
    initialState,
  );
  const dispatch = useCallback((a: Action) => rawDispatch(a), []);

  switch (state.screen) {
    case "signin":
      return <SignIn onSignIn={() => dispatch({ type: "SIGN_IN" })} />;
    default:
      return <Desk state={state} dispatch={dispatch} script={SCRIPT} />;
  }
}
