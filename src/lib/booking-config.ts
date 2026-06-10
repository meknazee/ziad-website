// Hardcoded booking configuration. Pricing is a placeholder ($) — to be
// finalized in the next session along with Coach Z's real availability windows.

export type MeetingType = {
  slug: string;
  title: string;
  description: string;
  duration_minutes: number;
  location: string;
  featured?: boolean;
};

export const MEETING_TYPES: MeetingType[] = [
  {
    slug: "intro-30",
    title: "Free intro session",
    description:
      "30 minutes on court so we can hit, talk goals, and figure out a starting point. No charge.",
    duration_minutes: 30,
    location: "Tuckahoe Recreation Club · Arlington, VA",
    featured: true,
  },
  {
    slug: "private-60",
    title: "Private lesson · 60 min",
    description:
      "One-on-one coaching. Technique, tactics, point play — built around your game.",
    duration_minutes: 60,
    location: "Tuckahoe Recreation Club · Arlington, VA",
  },
  {
    slug: "private-90",
    title: "Private lesson · 90 min",
    description:
      "Deeper session for technical work, drill blocks, and match-play simulation.",
    duration_minutes: 90,
    location: "Tuckahoe Recreation Club · Arlington, VA",
  },
  {
    slug: "semi-private-60",
    title: "Semi-private (2 players) · 60 min",
    description:
      "Bring a partner. Shared cost, shared court. Best if you play at similar levels.",
    duration_minutes: 60,
    location: "Tuckahoe Recreation Club · Arlington, VA",
  },
  {
    slug: "junior-60",
    title: "Junior development · 60 min",
    description:
      "Ages 8–17. Age-appropriate technique, tactics, and tournament prep.",
    duration_minutes: 60,
    location: "Tuckahoe Recreation Club · Arlington, VA",
  },
];

export function getMeetingType(slug: string): MeetingType | undefined {
  return MEETING_TYPES.find((m) => m.slug === slug);
}

// Weekly recurring availability. Times in 24h local (America/New_York assumed).
// 0 = Sunday, 6 = Saturday. Placeholder — Coach Z to confirm real windows.
export type Window = { startMinute: number; endMinute: number };

export const AVAILABILITY: Record<number, Window[]> = {
  0: [], // Sun closed
  1: [{ startMinute: 9 * 60, endMinute: 19 * 60 }],
  2: [{ startMinute: 9 * 60, endMinute: 19 * 60 }],
  3: [{ startMinute: 9 * 60, endMinute: 19 * 60 }],
  4: [{ startMinute: 9 * 60, endMinute: 19 * 60 }],
  5: [{ startMinute: 9 * 60, endMinute: 19 * 60 }],
  6: [{ startMinute: 8 * 60, endMinute: 14 * 60 }],
};

// Slot grid step in minutes.
export const SLOT_STEP_MINUTES = 30;

// Minimum lead time before someone can book — 12 hours.
export const MIN_LEAD_TIME_MINUTES = 12 * 60;

// Site-wide contact email.
export const CONTACT_EMAIL = "contactme@coachziad.com";
