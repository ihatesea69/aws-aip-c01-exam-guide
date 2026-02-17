import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import matter from 'gray-matter';
import { readdirSync, readFileSync, statSync, existsSync } from 'fs';
import { join, relative } from 'path';

// Helper: recursively collect all markdown files under a directory
function collectMarkdownFiles(dir, base = dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...collectMarkdownFiles(full, base));
    } else if (entry.endsWith('.md')) {
      results.push(relative(base, full).replace(/\\/g, '/'));
    }
  }
  return results;
}

// Helper: collect content directories (not files) under a dir
function collectContentDirs(dir, base = dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(relative(base, full).replace(/\\/g, '/'));
      results.push(...collectContentDirs(full, base));
    }
  }
  return results;
}

const viFiles = collectMarkdownFiles('content/vi');
const enFiles = collectMarkdownFiles('content/en');
const viDirs = collectContentDirs('content/vi');
const enDirs = collectContentDirs('content/en');

// Collect all markdown files with parsed front matter
function collectFilesWithMatter(dir) {
  const files = collectMarkdownFiles(dir);
  return files.map(f => {
    const content = readFileSync(join(dir, f), 'utf-8');
    const parsed = matter(content);
    return { path: f, data: parsed.data, content: parsed.content };
  });
}

const viFilesWithMatter = collectFilesWithMatter('content/vi');
const enFilesWithMatter = collectFilesWithMatter('content/en');
const allFilesWithMatter = [...viFilesWithMatter, ...enFilesWithMatter];

// **Feature: genai-developer-exam-guide, Property 1: Bilingual file parity**
// **Validates: Requirements 6.1, 6.2**
describe('Property 1: Bilingual file parity', () => {
  it('for any markdown file in content/vi/, a corresponding file exists in content/en/ with the same weight', () => {
    const viArb = fc.constantFrom(...viFilesWithMatter);

    fc.assert(
      fc.property(viArb, (viFile) => {
        // Find corresponding en file
        const enFile = enFilesWithMatter.find(e => e.path === viFile.path);
        expect(enFile, `Missing English counterpart for content/vi/${viFile.path}`).toBeDefined();
        expect(enFile.data.weight, `Weight mismatch for ${viFile.path}: vi=${viFile.data.weight}, en=${enFile.data.weight}`).toBe(viFile.data.weight);
      }),
      { numRuns: viFilesWithMatter.length }
    );
  });
});


// **Feature: genai-developer-exam-guide, Property 2: Hugo front matter completeness**
// **Validates: Requirements 7.1, 7.2**
describe('Property 2: Hugo front matter completeness', () => {
  it('for any markdown file, front matter contains title, date, and weight; chapter pages also have chapter:true and pre field', () => {
    const allArb = fc.constantFrom(...allFilesWithMatter);

    fc.assert(
      fc.property(allArb, (file) => {
        // Every file must have title, date, weight
        expect(file.data.title, `Missing title in ${file.path}`).toBeDefined();
        expect(file.data.date, `Missing date in ${file.path}`).toBeDefined();
        expect(file.data.weight, `Missing weight in ${file.path}`).toBeDefined();

        // Chapter pages (top-level _index.md with chapter: true) must have pre field
        if (file.data.chapter === true) {
          expect(file.data.pre, `Missing pre field in chapter page ${file.path}`).toBeDefined();
          expect(file.data.pre).toMatch(/<b>\d+\. <\/b>/);
        }
      }),
      { numRuns: allFilesWithMatter.length }
    );
  });
});

// **Feature: genai-developer-exam-guide, Property 3: Chapter pages contain children shortcode**
// **Validates: Requirements 7.3**
describe('Property 3: Chapter pages contain children shortcode', () => {
  it('for any chapter page, the body contains the {{% children %}} shortcode', () => {
    const chapterFiles = allFilesWithMatter.filter(f => f.data.chapter === true);
    if (chapterFiles.length === 0) return;

    const chapterArb = fc.constantFrom(...chapterFiles);

    fc.assert(
      fc.property(chapterArb, (file) => {
        expect(file.content, `Missing {{% children %}} in chapter page ${file.path}`).toContain('{{% children');
      }),
      { numRuns: chapterFiles.length }
    );
  });
});

// **Feature: genai-developer-exam-guide, Property 4: Directory naming convention**
// **Validates: Requirements 7.4**
describe('Property 4: Directory naming convention', () => {
  it('for any content directory, the name matches N-kebab-case or N.N-kebab-case and contains _index.md', () => {
    const allDirs = [...new Set([...viDirs, ...enDirs])];
    if (allDirs.length === 0) return;

    const dirArb = fc.constantFrom(...allDirs);

    fc.assert(
      fc.property(dirArb, (dir) => {
        const dirName = dir.split('/').pop();
        // Directory name should match pattern: N-name or N.N-name
        expect(dirName, `Directory ${dir} does not match naming convention`).toMatch(/^\d+(\.\d+)*-[a-z0-9-]+$/);

        // Check _index.md exists in at least one language
        const viIndex = existsSync(join('content/vi', dir, '_index.md'));
        const enIndex = existsSync(join('content/en', dir, '_index.md'));
        expect(viIndex || enIndex, `No _index.md found in ${dir}`).toBe(true);
      }),
      { numRuns: allDirs.length }
    );
  });
});
