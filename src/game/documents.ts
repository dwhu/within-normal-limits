export type DocEntry = { file: string; title: string; words: number };

const DOCS = "/content/documents";
const SOURCE = "/content/source";

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
