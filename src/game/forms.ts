import type { FormId } from "@/game/types";

export type Field = { name: string; label: string; hint?: string };

export type FormSpec = {
  title: string;
  fields: Field[];
  verdict?: { label: string; options: { value: string; label: string }[] };
};

export const FORMS: Record<FormId, FormSpec> = {
  vitals: {
    title: "eCRF — VITAL SIGNS",
    fields: [
      { name: "bp", label: "BP sitting", hint: "mmHg" },
      { name: "pulse", label: "Pulse", hint: "bpm" },
      { name: "temp", label: "Temperature", hint: "°C" },
      { name: "weight", label: "Weight", hint: "kg" },
    ],
  },
  labs: {
    title: "eCRF — CENTRAL LABORATORY",
    fields: [
      { name: "alt", label: "ALT", hint: "U/L" },
      { name: "ast", label: "AST", hint: "U/L" },
      { name: "creatinine", label: "Creatinine", hint: "mg/dL" },
      { name: "eos", label: "Eosinophils, absolute", hint: "×10⁹/L" },
    ],
  },
  eligibility: {
    title: "eCRF — SCREENING ELIGIBILITY",
    fields: [
      { name: "easi", label: "EASI (screening)" },
      { name: "viga", label: "vIGA-AD" },
      { name: "bsa", label: "BSA involvement", hint: "%" },
      { name: "nrs", label: "Worst Pruritus NRS" },
    ],
    verdict: {
      label: "Determination",
      options: [
        { value: "eligible", label: "Eligible — randomize" },
        { value: "screen-fail", label: "Screen failure" },
      ],
    },
  },
  safety: {
    // The visit field is what makes a misattribution catchable. Without it the form is a
    // verdict radio and nothing else, so an error of the form "right event, wrong visit"
    // has nowhere to land — the player could submit VERA's draft untouched and be scored
    // correct. Every safety source document prints the visit under DOSING HISTORY
    // REFERENCED, so the check is comparing one line of her draft against one line of the
    // note.
    title: "eCRF — ADVERSE EVENT",
    fields: [{ name: "visit", label: "Visit at event onset", hint: "Week n" }],
    verdict: {
      label: "Determination",
      options: [
        { value: "not-serious", label: "Adverse event — not serious" },
        { value: "serious", label: "Serious adverse event — report within 24 hours" },
        { value: "not-reportable", label: "Not an adverse event" },
      ],
    },
  },
};
