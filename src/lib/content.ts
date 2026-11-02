// Liest die Inhalte aus /website. Texte werden nicht verändert:
// Eine Änderung in einer .md-Datei erscheint ohne Codeänderung auf der Website.
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(process.cwd(), 'website');

type Section = { name: string; lines: string[] };

const read = (file: string): Section[] => {
  const sections: Section[] = [];
  for (const line of readFileSync(join(ROOT, file), 'utf8').split(/\r?\n/)) {
    if (line.startsWith('## ')) sections.push({ name: line.slice(3).trim(), lines: [] });
    else if (sections.length && line.trim()) sections.at(-1)!.lines.push(line.trim());
  }
  return sections;
};

const section = (all: Section[], name: string) => {
  const found = all.find((s) => s.name === name);
  if (!found) throw new Error(`Abschnitt "${name}" fehlt in den Inhalten`);
  return found.lines;
};

const heading = (lines: string[], level: number) =>
  lines.find((l) => l.startsWith('#'.repeat(level) + ' '))?.slice(level + 1) ?? '';
const bullets = (lines: string[]) => lines.filter((l) => l.startsWith('- ')).map((l) => l.slice(2));
const paragraphs = (lines: string[]) => lines.filter((l) => !/^(#|- |\*\*)/.test(l));
const field = (lines: string[], key: string) =>
  lines.find((l) => l.startsWith(`**${key}:**`))?.split(':**')[1].trim();

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
export const inline = (s: string) => escape(s).replace(/\*(.+?)\*/g, '<em>$1</em>');

export const slugify = (title: string) =>
  title.split(':')[0].trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');

export function getGlobal() {
  const g = read('global.md');
  const nav = bullets(section(g, 'Navigation'));
  const contact = section(g, 'Contact');
  const footer = bullets(section(g, 'Footer'));
  return {
    name: nav[0],
    nav: nav.slice(1, 5),
    resume: nav[5],
    contact: {
      title: heading(contact, 3),
      text: paragraphs(contact)[0],
      email: bullets(contact)[0],
      resume: bullets(contact)[1],
    },
    footer: { copyright: footer[0], role: footer[1], wordmark: footer[2] },
  };
}

export function getHome() {
  const h = read('home.md');
  const hero = section(h, 'Hero');
  const work = section(h, 'Selected Work');
  const about = section(h, 'About');

  const projects: { title: string; tag?: string; cta: string; slug: string }[] = [];
  let current: string[] | null = null;
  const blocks: string[][] = [];
  for (const line of work) {
    if (line.startsWith('#### ')) blocks.push((current = [line]));
    else current?.push(line);
  }
  for (const block of blocks) {
    const title = heading(block, 4);
    projects.push({ title, tag: field(block, 'Tag'), cta: bullets(block)[0], slug: slugify(title) });
  }

  return {
    hero: {
      title: heading(hero, 3),
      text: paragraphs(hero)[0],
      actions: bullets(hero),
      tools: (field(hero, 'Tools') ?? '').split(',').map((t) => t.trim()),
    },
    intro: section(h, 'Intro').join(' '),
    work: {
      title: heading(work, 3),
      text: paragraphs(work.slice(0, work.findIndex((l) => l.startsWith('#### '))))[0],
      projects,
    },
    about: {
      title: heading(about, 3),
      text: paragraphs(about),
      links: bullets(about),
    },
  };
}
