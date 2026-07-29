export type Match = { start: number; end: number };

export function findMatches(text: string, query: string): Match[] {
  if (!query) return [];

  const haystack = text.toLowerCase();
  const needle = query.toLowerCase();
  const out: Match[] = [];

  let from = 0;
  for (;;) {
    const at = haystack.indexOf(needle, from);
    if (at === -1) break;
    out.push({ start: at, end: at + needle.length });
    from = at + needle.length;
  }

  return out;
}
