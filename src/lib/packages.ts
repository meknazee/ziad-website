export type PackageFeature = { label: string; included: boolean };

export type PackagePrice = { label: string; total: string; per: string };

export type PackageTier = {
  name: string;
  sessions: string;
  discount: string;
  prices: PackagePrice[];
  save: string;
  popular: boolean;
  features: PackageFeature[];
};

/** ordered perk list shared across the private-lesson tiers */
const privatePerks = [
  "priority booking",
  "court fees + locked-in rate",
  "end-of-package report",
  "transferable to friends & family",
  "video review",
  "monthly check-in",
  "bring a friend for free",
];

const privateFeatures = (includedCount: number): PackageFeature[] =>
  privatePerks.map((label, i) => ({ label, included: i < includedCount }));

export const privateTiers: PackageTier[] = [
  {
    name: "game",
    sessions: "12 lessons",
    discount: "5% off",
    prices: [
      { label: "60 minutes", total: "$1,596", per: "$133 / lesson" },
      { label: "90 minutes", total: "$2,337", per: "$194.75 / lesson" },
    ],
    save: "save $84 on 60-min",
    popular: false,
    features: privateFeatures(2),
  },
  {
    name: "set",
    sessions: "24 lessons",
    discount: "10% off",
    prices: [
      { label: "60 minutes", total: "$3,024", per: "$126 / lesson" },
      { label: "90 minutes", total: "$4,428", per: "$184.50 / lesson" },
    ],
    save: "save $336 on 60-min",
    popular: true,
    features: privateFeatures(5),
  },
  {
    name: "match",
    sessions: "36 lessons",
    discount: "15% off",
    prices: [
      { label: "60 minutes", total: "$4,284", per: "$119 / lesson" },
      { label: "90 minutes", total: "$6,273", per: "$174.25 / lesson" },
    ],
    save: "save $756 on 60-min",
    popular: false,
    features: privateFeatures(7),
  },
];

const clinicPerks = [
  "priority booking",
  "court fees + locked-in rate",
  "end-of-package report",
  "transferable to friends & family",
  "bring a friend for free",
];

const clinicFeatures = (includedCount: number): PackageFeature[] =>
  clinicPerks.map((label, i) => ({ label, included: i < includedCount }));

export type ClinicGroup = {
  slug: string;
  title: string;
  blurb: string;
  baseline: string;
  tiers: PackageTier[];
};

export const clinicGroups: ClinicGroup[] = [
  {
    slug: "doubles",
    title: "doubles clinics",
    blurb: "90-minute doubles patterns, positioning and point play. $60 per player drop-in rate.",
    baseline: "$60 / clinic",
    tiers: [
      {
        name: "game",
        sessions: "6 clinics",
        discount: "5% off",
        prices: [{ label: "per player", total: "$342", per: "$57 / clinic" }],
        save: "save $18",
        popular: false,
        features: clinicFeatures(2),
      },
      {
        name: "set",
        sessions: "12 clinics",
        discount: "10% off",
        prices: [{ label: "per player", total: "$648", per: "$54 / clinic" }],
        save: "save $72",
        popular: true,
        features: clinicFeatures(4),
      },
      {
        name: "match",
        sessions: "18 clinics",
        discount: "15% off",
        prices: [{ label: "per player", total: "$918", per: "$51 / clinic" }],
        save: "save $162",
        popular: false,
        features: clinicFeatures(5),
      },
    ],
  },
  {
    slug: "junior-development",
    title: "junior development clinics",
    blurb: "90-minute clinics for ages 8–17 — technique, movement and competitive reps. $50 per player drop-in rate.",
    baseline: "$50 / clinic",
    tiers: [
      {
        name: "game",
        sessions: "12 clinics",
        discount: "5% off",
        prices: [{ label: "per player", total: "$570", per: "$47.50 / clinic" }],
        save: "save $30",
        popular: false,
        features: clinicFeatures(2),
      },
      {
        name: "set",
        sessions: "18 clinics",
        discount: "10% off",
        prices: [{ label: "per player", total: "$810", per: "$45 / clinic" }],
        save: "save $90",
        popular: true,
        features: clinicFeatures(4),
      },
      {
        name: "match",
        sessions: "24 clinics",
        discount: "15% off",
        prices: [{ label: "per player", total: "$1,020", per: "$42.50 / clinic" }],
        save: "save $180",
        popular: false,
        features: clinicFeatures(5),
      },
    ],
  },
];

export type Masterclass = { slug: string; shot: string; blurb: string };

export const masterclasses: Masterclass[] = [
  { slug: "serve", shot: "serve", blurb: "toss, rhythm and free points off the first ball." },
  { slug: "volley", shot: "volley", blurb: "hands, footwork and finishing at the net." },
  { slug: "slice", shot: "slice", blurb: "the change-up that resets points and breaks rhythm." },
  { slug: "topspin", shot: "topspin", blurb: "heavier shape, higher margin, more court to play with." },
  { slug: "return", shot: "return", blurb: "read, split, block — turn the return into a weapon." },
];

export const masterclassPrice = "$275";
export const masterclassFormat = "5 × 60 min · max 3 players";
