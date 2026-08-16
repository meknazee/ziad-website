export type Program = {
  slug: string;
  title: string;
  blurb: string;
  detail: string;
};

/** on-court sessions — bookable through calendly */
export const sessionPrograms: Program[] = [
  {
    slug: "private-lessons",
    title: "private lessons",
    blurb: "one-on-one, fastest path to a sharper game.",
    detail: "technique, tactics and match habits tuned to you — 60 or 90 minutes.",
  },
  {
    slug: "doubles-live-ball",
    title: "doubles & live ball clinics",
    blurb: "small-group, high-rep, competitive reps.",
    detail: "patterns, positioning and point play at game speed.",
  },
  {
    slug: "conditioning-sessions",
    title: "conditioning sessions",
    blurb: "build the engine that powers your tennis.",
    detail: "strength, endurance and movement work built for court athletes.",
  },
];

/** working athlete program — athlete onboarding tracks */
export const athleteTracks: Program[] = [
  {
    slug: "wa-junior",
    title: "junior",
    blurb: "ages 8–17 building a real foundation.",
    detail: "long-term technical, physical and competitive development.",
  },
  {
    slug: "wa-high-performance",
    title: "high performance",
    blurb: "for players chasing rankings and college tennis.",
    detail: "full training load: on-court blocks, s&c, match schedule and review.",
  },
  {
    slug: "wa-adult",
    title: "adult",
    blurb: "the working athlete — train around a real life.",
    detail: "sustainable programming for players with jobs, families and goals.",
  },
];

export const allPrograms = [...sessionPrograms, ...athleteTracks];
