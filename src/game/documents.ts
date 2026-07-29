export type DocEntry = { file: string; title: string; bytes: number; modified: string };

const DOCS = "/content/documents";
const SOURCE = "/content/source";

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

/** `164 KB`-style size, matching how a period file listing rounds. */
export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  return `${Math.round(bytes / 1024)} KB`;
}

/** `29-NOV-2023`, matching the date format used throughout the rest of the trial's fiction. */
export function formatFileDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  const monthIndex = Number(month) - 1;
  return `${day}-${MONTHS[monthIndex]}-${year}`;
}

const cache = new Map<string, string>();

export async function loadDocIndex(): Promise<DocEntry[]> {
  const res = await fetch(`${DOCS}/index.json`);
  if (!res.ok) throw new Error(`Could not load the document index (${res.status})`);
  return res.json();
}

async function loadText(base: string, file: string): Promise<string> {
  const key = `${base}/${file}`;
  const hit = cache.get(key);
  if (hit !== undefined) return hit;

  const res = await fetch(key);
  if (!res.ok) throw new Error(`Could not load ${file} (${res.status})`);

  const text = await res.text();
  cache.set(key, text);
  return text;
}

export const loadDocument = (file: string) => loadText(DOCS, file);
export const loadSource = (file: string) => loadText(SOURCE, file);
