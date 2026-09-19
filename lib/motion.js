// Motion tokens — the single source of truth for every animation on the page.
// Mirrored into @theme in app/globals.css for the CSS-only animations.

export const ease = {
  out: [0.22, 1, 0.36, 1], // easeOutQuint — entrances (workhorse)
  soft: [0.33, 1, 0.68, 1], // easeOutCubic — large/heavy elements, media
  inOut: [0.65, 0, 0.35, 1], // easeInOutCubic — A→B state swaps
  in: [0.55, 0, 1, 0.45], // easeInQuint — exits only
};

export const dur = {
  micro: 0.16, // colour, opacity flips
  fast: 0.28, // hover states, exits, nav background
  base: 0.5, // the default reveal
  slow: 0.8, // line wipes, big media
  hero: 1.0, // the one hero frame moment
};

export const dist = {
  xs: 8,
  sm: 16,
  md: 24, // workhorse — never more than 40
  lg: 40,
};

export const stagger = {
  tight: 0.05,
  base: 0.08,
  loose: 0.14,
  delayChildren: 0.06,
};

export const spring = {
  magnetic: { stiffness: 260, damping: 22, mass: 0.6 },
  snappy: { stiffness: 400, damping: 32, mass: 0.5 },
};

// One viewport config page-wide. `once: true` always — a reveal that plays
// twice is what made the old page fade content back out on scroll-past.
export const viewport = {
  once: true,
  amount: 0.25,
  margin: '0px 0px -12% 0px',
};

export const scale = {
  in: 0.98, // cards, panels — 0.88 reads as a popup
  media: 1.03,
};
