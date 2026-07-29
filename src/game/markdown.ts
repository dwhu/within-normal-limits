import type { Nodes, Root } from "mdast";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";

const processor = unified().use(remarkParse).use(remarkGfm);

/** Parses markdown into an mdast tree. Rendering and search both walk this same tree. */
export function parseMarkdown(text: string): Root {
  return processor.parse(text) as Root;
}

export type LeafOffset = { start: number; end: number };

export type Corpus = {
  /** Every visible, searchable character in the document, in render order. */
  text: string;
  /** One entry per text-bearing leaf (text / inlineCode / code), in the same traversal order
   * the renderer visits them in — see `markdown-render.tsx`, which consumes these one-for-one
   * to know where each leaf's own text sits inside `text` without recomputing this walk. */
  leaves: LeafOffset[];
};

/** Node types whose `.value` is real, visible, searchable text. */
function isTextLeaf(node: Nodes): node is Nodes & { value: string } {
  return node.type === "text" || node.type === "inlineCode" || node.type === "code";
}

/** Node types with no visible searchable text of their own (structural or void). */
const SILENT_TYPES = new Set(["break", "html", "thematicBreak", "yaml", "definition"]);

function hasChildren(node: Nodes): node is Nodes & { children: Nodes[] } {
  return "children" in node && Array.isArray(node.children);
}

/**
 * Walks the parsed tree once, concatenating every visible text run into a single search corpus
 * — the same string the player sees, not the raw markdown source. Block-level siblings
 * (paragraphs, headings, list items, table rows/cells, blockquote children…) get a separator so
 * two unrelated blocks can never read as one contiguous phrase; inline content (the runs inside
 * a paragraph, a bold span, a link, a table cell) never does, because that inline boundary is
 * exactly what a phrase like "Protocol shall govern" crosses when part of it is bold.
 *
 * `markdown-render.tsx` walks the identical tree a second time, in the identical order, to
 * produce the rendered output — it consumes `leaves` one-for-one rather than recomputing any of
 * this, so the searched string and the displayed string can never drift apart.
 */
export function buildCorpus(root: Root): Corpus {
  const parts: string[] = [];
  const leaves: LeafOffset[] = [];
  let pos = 0;

  function pushText(value: string) {
    parts.push(value);
    pos += value.length;
  }

  function pushLeaf(value: string) {
    leaves.push({ start: pos, end: pos + value.length });
    pushText(value);
  }

  function walkBlockList(nodes: Nodes[]) {
    nodes.forEach((node, i) => {
      if (i > 0) pushText("\n");
      walk(node);
    });
  }

  function walkInlineList(nodes: Nodes[]) {
    for (const node of nodes) walk(node);
  }

  function walk(node: Nodes) {
    if (isTextLeaf(node)) {
      pushLeaf(node.value);
      return;
    }
    if (SILENT_TYPES.has(node.type)) return;

    switch (node.type) {
      case "paragraph":
      case "heading":
      case "tableCell":
      case "strong":
      case "emphasis":
      case "delete":
      case "link":
        if (hasChildren(node)) walkInlineList(node.children);
        return;
      default:
        // Block-level containers (root, list, listItem, table, tableRow, blockquote, …) and
        // any node type we didn't anticipate: recurse into children as blocks, so nothing
        // silently vanishes and leaf offsets stay in sync with the renderer's own fallback.
        if (hasChildren(node)) walkBlockList(node.children);
    }
  }

  walk(root);
  return { text: parts.join(""), leaves };
}
