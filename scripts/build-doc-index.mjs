import { readdir, readFile, writeFile } from "node:fs/promises";
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

const files = (await readdir(DIR)).filter((f) => f.endsWith(".md")).sort();
const index = [];

for (const file of files) {
  const text = await readFile(join(DIR, file), "utf8");
  index.push({
    file,
    title: TITLES[file] ?? file,
    words: text.split(/\s+/).filter(Boolean).length,
  });
}

await writeFile(join(DIR, "index.json"), JSON.stringify(index, null, 2) + "\n");
console.log(`Indexed ${index.length} documents.`);
