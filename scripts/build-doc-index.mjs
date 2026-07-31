import { readdir, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const DIR = "public/content/documents";

const TITLES = {
  "budget.md": "Budget — Exhibit B",
  "cta.md": "Clinical Trial Agreement",
  "edc_manual.md": "EDC Manual — Veriscribe v9.2",
  "form_1572.md": "FDA Form 1572",
  "icf.md": "Informed Consent Form v4.0.1",
  "investigators_brochure.md": "Investigator's Brochure ed. 6.0",
  "ip_handling_manual.md": "IP Handling Manual",
  "irt_manual.md": "IRT Manual — Axion",
  "lab_manual.md": "Laboratory Manual",
  "monitoring_plan.md": "Monitoring Plan",
  "pharmacy_manual.md": "Pharmacy Manual",
  "protocol.md": "Protocol 20210143, Amendment 3",
  "safety_reporting_manual.md": "Safety Reporting Manual",
  "siv_slide_deck.md": "SIV Slide Deck — 21-DEC-2022",
  "study_reference_manual.md": "Study Reference Manual",
};

// Fictional last-modified dates, consistent with the trial's timeline: contract documents
// dated around site startup, the SIV deck on the date its own title claims, most manuals
// revised once ahead of the SIV, and the protocol/ICF/safety manual bunched around Amendment 3
// (29-NOV-2023), the last thing to change before the run begins in Jan 2024.
const MODIFIED = {
  "budget.md": "2022-10-03",
  "cta.md": "2022-10-03",
  "edc_manual.md": "2023-09-18",
  "form_1572.md": "2022-12-21",
  "icf.md": "2023-12-01",
  "investigators_brochure.md": "2023-08-15",
  "ip_handling_manual.md": "2023-01-10",
  "irt_manual.md": "2023-02-06",
  "lab_manual.md": "2023-03-15",
  "monitoring_plan.md": "2023-09-01",
  "pharmacy_manual.md": "2022-12-15",
  "protocol.md": "2023-11-29",
  "safety_reporting_manual.md": "2023-11-15",
  "siv_slide_deck.md": "2022-12-21",
  "study_reference_manual.md": "2023-07-20",
};

const files = (await readdir(DIR)).filter((f) => f.endsWith(".md")).sort();
const index = [];

for (const file of files) {
  const { size } = await stat(join(DIR, file));
  index.push({
    file,
    title: TITLES[file] ?? file,
    bytes: size,
    modified: MODIFIED[file] ?? "2023-01-01",
  });
}

await writeFile(join(DIR, "index.json"), `${JSON.stringify(index, null, 2)}\n`);
console.log(`Indexed ${index.length} documents.`);
