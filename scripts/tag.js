// tag.js
// For each template, gather a representative slice of its HTML/CSS and ask
// Claude to produce: industry tags, style tags, a colour-mode tag, and a
// short description. Designed to fail soft -- if the API call errors out,
// the template still gets added to the catalogue, just without tags.

import fs from "fs";
import path from "path";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = "claude-sonnet-4-6";
const MAX_HTML_CHARS = 12000; // keep prompt size sane across 50+ templates

function readEntryHtml(template) {
  const folderPath = path.join(process.cwd(), template.folder);
  let entryPath;

  if (template.type === "static") {
    entryPath = path.join(folderPath, template.entry);
  } else if (template.type === "build") {
    // best-effort: look for the same output candidates used by screenshot.js
    const candidates = ["out", "dist", "build"];
    for (const rel of candidates) {
      const full = path.join(folderPath, rel, "index.html");
      if (fs.existsSync(full)) {
        entryPath = full;
        break;
      }
    }
  }

  if (!entryPath || !fs.existsSync(entryPath)) return null;
  return fs.readFileSync(entryPath, "utf-8").slice(0, MAX_HTML_CHARS);
}

async function callClaude(html, slug) {
  const systemPrompt = `You are tagging website templates for a searchable catalogue. \
Given raw HTML (and inline/linked CSS context if present), respond with ONLY a JSON object, \
no preamble, no markdown fences. Schema:
{
  "industry_tags": string[],   // e.g. ["mechanic","automotive"] or ["cafe","restaurant"]
  "style_tags": string[],      // e.g. ["minimal","bold","corporate","playful","luxury"]
  "color_mode": "light" | "dark" | "mixed",
  "description": string        // one sentence, plain language, under 25 words
}
Infer industry from text content, image alt text, and structure. Infer style from layout density, \
typography choices, and visual language implied by class names. Be specific with industry_tags \
(2-4 tags) and style_tags (2-4 tags). If you genuinely cannot tell, use ["general"] for industry_tags.`;

  const userPrompt = `Template folder name: "${slug}"\n\nHTML:\n${html}`;

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 500,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Anthropic API error ${response.status}: ${text}`);
  }

  const data = await response.json();
  const textBlock = data.content.find((c) => c.type === "text");
  if (!textBlock) throw new Error("No text content in Claude response");

  const cleaned = textBlock.text
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "");

  return JSON.parse(cleaned);
}

export async function tagTemplate(template) {
  if (!ANTHROPIC_API_KEY) {
    console.warn(
      `  No ANTHROPIC_API_KEY set, skipping tagging for ${template.slug}`
    );
    return { ...template, tags: null, tagError: "API key not configured" };
  }

  const html = readEntryHtml(template);
  if (!html) {
    return {
      ...template,
      tags: null,
      tagError: "Could not read entry HTML for tagging",
    };
  }

  try {
    const tags = await callClaude(html, template.slug);
    return { ...template, tags, tagError: null };
  } catch (err) {
    console.error(`  Tagging failed for ${template.slug}:`, err.message);
    return { ...template, tags: null, tagError: err.message };
  }
}

export async function tagAll(templates) {
  const results = [];
  for (const template of templates) {
    console.log(`Tagging ${template.slug}...`);
    const result = await tagTemplate(template);
    results.push(result);
    // gentle pacing to stay well within rate limits across 50+ templates
    await new Promise((r) => setTimeout(r, 300));
  }
  return results;
}
