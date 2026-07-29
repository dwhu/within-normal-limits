"use client";

import { useState } from "react";

import { FORMS } from "@/game/forms";
import type { FormValues, Situation } from "@/game/types";

type Props = {
  situation: Situation;
  onSubmit: (values: FormValues, verdict?: string) => void;
};

export function ECRF({ situation, onSubmit }: Props) {
  const spec = FORMS[situation.form];
  const [values, setValues] = useState<FormValues>(situation.vera?.entry ?? {});
  const [verdict, setVerdict] = useState<string | undefined>(situation.vera?.verdict);

  const ready = spec.verdict === undefined || verdict !== undefined;

  return (
    <form
      className="flex h-full flex-col p-3"
      onSubmit={(e) => {
        e.preventDefault();
        if (ready) onSubmit(values, verdict);
      }}
    >
      <div className="font-mono text-[10px] tracking-widest text-neutral-600">
        {spec.title} · {situation.subject}
      </div>

      <div className="mt-3 space-y-2">
        {spec.fields.map((f) => (
          <div key={f.name} className="grid grid-cols-[1fr_120px_40px] items-center gap-2">
            <label htmlFor={f.name}>{f.label}</label>
            <input
              id={f.name}
              className="bevel-in px-1 py-0.5 font-mono"
              value={values[f.name] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
            />
            <span className="text-neutral-500">{f.hint}</span>
          </div>
        ))}
      </div>

      {spec.verdict && (
        <fieldset className="mt-4">
          <legend className="font-mono text-[10px] tracking-widest text-neutral-600">
            {spec.verdict.label.toUpperCase()}
          </legend>
          {spec.verdict.options.map((o) => (
            <div key={o.value} className="mt-1">
              <input
                type="radio"
                id={o.value}
                name="verdict"
                checked={verdict === o.value}
                onChange={() => setVerdict(o.value)}
              />
              <label htmlFor={o.value} className="ml-2">
                {o.label}
              </label>
            </div>
          ))}
        </fieldset>
      )}

      <button type="submit" className="bevel-out mt-auto self-end px-4 py-1.5" disabled={!ready}>
        Submit to database
      </button>
    </form>
  );
}
