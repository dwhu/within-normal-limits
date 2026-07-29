/**
 * Copies the fifteen trial documents out of the `docs/` canon into `public/`, then writes the
 * index the document viewer reads.
 *
 * `docs/trial_documents/` is the single source of truth for the corpus, and `public/` has to hold
 * real files: these were once symlinks pointing back at `docs/`, which resolve fine under `next
 * dev` and `next build` but break Vercel's static-asset packaging outright ("Cannot copy
 * '../../../docs/trial_documents/budget.md' to a subdirectory of itself"). Generating the copies
 * keeps one authored copy of every document while giving the deploy something it can package.
 *
 * Runs from `predev`, `prebuild` and `pretest`, so the generated files are never committed.
 */
import { copyFile, mkdir, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const SOURCE = "docs/trial_documents";
const DEST = "public/content/documents";

/**
 * What the player can open, and nothing else. `docs/trial_documents/` also holds `ASSUMPTIONS.md`
 * and `index.md` — authoring notes that must not ship — so this table, rather than a directory
 * scan, decides what gets served.
 *
 * `modified` dates are fictional and consistent with the trial's timeline: contract documents dated
 * around site startup, the SIV deck on the date its own title claims, most manuals revised once
 * ahead of the SIV, and the protocol/ICF/safety manual bunched around Amendment 3 (29-NOV-2023),
 * the last thing to change before the run begins in Jan 2024.
 */
const DOCUMENTS = {
  "budget.md": { title: "Budget — Exhibit B", modified: "2022-10-03" },
  "cta.md": { title: "Clinical Trial Agreement", modified: "2022-10-03" },
  "edc_manual.md": { title: "EDC Manual — Veriscribe v9.2", modified: "2023-09-18" },
  "form_1572.md": { title: "FDA Form 1572", modified: "2022-12-21" },
  "icf.md": { title: "Informed Consent Form v4.0.1", modified: "2023-12-01" },
  "investigators_brochure.md": {
    title: "Investigator's Brochure ed. 6.0",
    modified: "2023-08-15",
  },
  "ip_handling_manual.md": { title: "IP Handling Manual", modified: "2023-01-10" },
  "irt_manual.md": { title: "IRT Manual — Axion", modified: "2023-02-06" },
  "lab_manual.md": { title: "Laboratory Manual", modified: "2023-03-15" },
  "monitoring_plan.md": { title: "Monitoring Plan", modified: "2023-09-01" },
  "pharmacy_manual.md": { title: "Pharmacy Manual", modified: "2022-12-15" },
  "protocol.md": { title: "Protocol 20210143, Amendment 3", modified: "2023-11-29" },
  "safety_reporting_manual.md": { title: "Safety Reporting Manual", modified: "2023-11-15" },
  "siv_slide_deck.md": { title: "SIV Slide Deck — 21-DEC-2022", modified: "2022-12-21" },
  "study_reference_manual.md": { title: "Study Reference Manual", modified: "2023-07-20" },
};

await mkdir(DEST, { recursive: true });

const files = Object.keys(DOCUMENTS).sort();
const index = [];

for (const file of files) {
  const from = join(SOURCE, file);

  // A document that has been renamed or deleted in the canon would otherwise ship as a stale copy
  // left over from an earlier run, or as a 404 in the viewer with nothing to explain it.
  try {
    await stat(from);
  } catch {
    throw new Error(`${from} is missing — the canon and the manifest in this script disagree.`);
  }

  await copyFile(from, join(DEST, file));

  const { size } = await stat(join(DEST, file));
  index.push({
    file,
    title: DOCUMENTS[file].title,
    bytes: size,
    modified: DOCUMENTS[file].modified,
  });
}

await writeFile(join(DEST, "index.json"), `${JSON.stringify(index, null, 2)}\n`);
console.log(`Copied and indexed ${index.length} documents.`);
