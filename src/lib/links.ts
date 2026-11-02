// Linkziele stehen nicht in den .md-Dateien. Sobald ein Wert eingetragen ist,
// wird das Element zum Link. Bis dahin bleibt es sichtbar, aber ohne Ziel.
export const links = {
  resume: null as string | null,   // z. B. '/julian-fohringer-resume.pdf'
  linkedin: null as string | null,
  dribbble: null as string | null,
  projects: {} as Record<string, string>, // z. B. { zeeus: '/work/zeeus' }
};

export const navTargets: Record<string, string> = {
  Home: '#top',
  Work: '#work',
  About: '#about',
  'Get in Touch': '#contact',
  'My Work': '#work',
};
