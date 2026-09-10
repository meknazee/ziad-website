import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Check, X, CalendarCheck, Mail, FileDown } from "lucide-react";
import { Layout } from "@/components/Layout";

const packages = [
  {
    name: "game",
    lessons: "12 lessons",
    discount: "5% off",
    price60: "$1,596",
    per60: "$133 / lesson",
    price90: "$2,337",
    per90: "$194.75 / lesson",
    save: "save $84",
    popular: false,
    features: [
      { label: "locked-in rate", included: true },
      { label: "priority calendly booking", included: true },
      { label: "court fees included", included: true },
      { label: "remaining-lesson emails", included: true },
      { label: "video review", included: false },
      { label: "progress report + guest session", included: false },
    ],
  },
  {
    name: "set",
    lessons: "24 lessons",
    discount: "10% off",
    price60: "$3,024",
    per60: "$126 / lesson",
    price90: "$4,428",
    per90: "$184.50 / lesson",
    save: "save $336",
    popular: true,
    features: [
      { label: "locked-in rate", included: true },
      { label: "priority calendly booking", included: true },
      { label: "court fees included", included: true },
      { label: "remaining-lesson emails", included: true },
      { label: "video review", included: true },
      { label: "progress report + guest session", included: false },
    ],
  },
  {
    name: "match",
    lessons: "36 lessons",
    discount: "15% off",
    price60: "$4,284",
    per60: "$119 / lesson",
    price90: "$6,273",
    per90: "$174.25 / lesson",
    save: "save $756",
    popular: false,
    features: [
      { label: "locked-in rate", included: true },
      { label: "priority calendly booking", included: true },
      { label: "court fees included", included: true },
      { label: "remaining-lesson emails", included: true },
      { label: "video review", included: true },
      { label: "progress report + guest session", included: true },
    ],
  },
];

const tiers = [
  {
    slug: "private-1-1",
    name: "Private 1:1",
    blurb: "Just you and me. The fastest way to improve.",
    features: ["60 or 90 min sessions", "Video review included", "Personalized practice plan", "Progress check every 6 weeks"],
    featured: true,
  },
  {
    slug: "semi-private",
    name: "Semi-Private (2)",
    blurb: "Bring a partner. Same court, shared cost.",
    features: ["60 min sessions", "Drill + point play", "Great for couples & friends", "Same level recommended"],
  },
  {
    slug: "junior-development",
    name: "Junior Development",
    blurb: "Ages 8–17. Technique, tactics, tournament prep.",
    features: ["Age-appropriate progression", "USTA tournament guidance", "Parent updates each month", "Group clinics available"],
  },
  {
    slug: "strength-conditioning",
    name: "Strength & Conditioning",
    blurb: "Build the engine that powers your tennis.",
    features: ["SES framework", "Strength, endurance & skills", "Off-court training plan", "Injury-resilient body"],
  },
];

const includes = [
  "Free 30-minute intro session",
  "Court fees included at partner clubs",
  "Video analysis on request",
  "Loaner racquets for new players",
  "Flexible cancellation (24h notice)",
  "Prepaid lesson packages — game / set / match (see below)",
];

const locations = [
  { name: "Tuckahoe Recreation Club (Pass Academy)", area: "Arlington, VA" },
  { name: "Additional DC–Virginia courts", area: "By arrangement" },
];

const Services = () => {
  const navigate = useNavigate();

  const scheduleService = (slug: string) => {
    navigate(`/contact?services=${slug}`);
  };

  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">services</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1] max-w-3xl">
          sessions built around <em className="text-accent not-italic">your</em> game.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          pick what fits — tap schedule on any card to start an inquiry. i'll follow up
          personally with pricing, availability, and a suggested starting point.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative flex flex-col rounded-2xl border p-7 transition hover:-translate-y-1 ${
              t.featured ? "bg-foreground text-background border-foreground shadow-court" : "bg-card border-border"
            }`}
          >
            {t.featured && (
              <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                most popular
              </span>
            )}
            <h3 className="font-display text-2xl">{t.name.toLowerCase()}</h3>
            <p className={`mt-2 text-sm ${t.featured ? "text-background/70" : "text-muted-foreground"}`}>
              {t.blurb.toLowerCase()}
            </p>
            <ul className="mt-6 space-y-2.5 text-sm flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 mt-0.5 text-accent" />
                  <span className={t.featured ? "text-background/85" : ""}>{f.toLowerCase()}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 relative group">
              <button
                type="button"
                onClick={() => scheduleService(t.slug)}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition ${
                  t.featured
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
              >
                <CalendarCheck className="h-4 w-4" />
                schedule a {t.name.toLowerCase()}
              </button>
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-11 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs text-background opacity-0 group-hover:opacity-100 transition shadow-lg">
                start an inquiry for {t.name.toLowerCase()}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-2 w-2 rotate-45 bg-foreground" />
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-12 md:grid-cols-2">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">what's included</span>
            <h2 className="mt-4 font-display text-4xl leading-tight">everything you need. nothing you don't.</h2>
            <ul className="mt-8 grid gap-3">
              {includes.map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{i.toLowerCase()}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">where we play</span>
            <h2 className="mt-4 font-display text-4xl leading-tight">dc–virginia area courts.</h2>
            <ul className="mt-8 divide-y divide-border border border-border rounded-lg bg-card">
              {locations.map((l) => (
                <li key={l.name + l.area} className="flex items-center justify-between px-5 py-4">
                  <span className="font-medium">{l.name.toLowerCase()}</span>
                  <span className="text-sm text-muted-foreground">{l.area.toLowerCase()}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="packages" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-24">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">lesson packages</span>
        <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
          commit to your game. <em className="text-accent not-italic">save</em> while you do.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          prepaid private-lesson packages at a locked-in rate. the more you commit, the more you save.
        </p>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex min-w-0 flex-col overflow-hidden rounded-lg border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
                p.popular ? "border-primary shadow-court md:-translate-y-3 md:hover:-translate-y-4" : "border-border"
              }`}
            >
              <div
                className={`relative flex min-h-40 flex-col items-center justify-center px-6 pb-12 pt-7 text-center [clip-path:polygon(0_0,100%_0,100%_72%,50%_100%,0_72%)] ${
                  p.popular ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                }`}
              >
                {p.popular && (
                  <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    most popular
                  </span>
                )}
                <h3 className="font-display text-4xl">{p.name}</h3>
                <p className={`mt-1 text-xs font-medium uppercase tracking-[0.16em] ${p.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {p.lessons} · {p.discount}
                </p>
              </div>

              <ul className="mt-2 divide-y divide-border">
                {p.features.map((feature) => (
                  <li key={feature.label} className="flex min-h-12 items-center gap-3 px-6 py-3 text-sm">
                    {feature.included ? (
                      <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    ) : (
                      <X className="h-4 w-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
                    )}
                    <span className={feature.included ? "text-foreground" : "text-muted-foreground line-through decoration-border"}>
                      {feature.label}
                    </span>
                    <span className="sr-only">{feature.included ? "included" : "not included"}</span>
                  </li>
                ))}
              </ul>

              <div className="flex-1 px-6 pb-6 pt-7 text-center">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">60 minutes</p>
                    <p className="mt-1 font-display text-3xl">{p.price60}</p>
                    <p className="text-xs text-muted-foreground">{p.per60}</p>
                  </div>
                  <div className="border-l border-border pl-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">90 minutes</p>
                    <p className="mt-1 font-display text-3xl">{p.price90}</p>
                    <p className="text-xs text-muted-foreground">{p.per90}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm font-semibold text-accent">{p.save} on 60-min</p>
              </div>

              <a
                href={`mailto:contactme@coachziad.com?subject=${encodeURIComponent(`${p.name} package inquiry`)}`}
                className={`mx-6 mb-6 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition ${
                  p.popular ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                <Mail className="h-4 w-4" />
                email coach ziad
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
            valid 6 months (game / set) or 9 months (match) from purchase · 24-hour reschedule notice · unused lessons expire.
          </p>
          <a
            href="/coach-ziad-private-lesson-packages.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
          >
            <FileDown className="h-4 w-4" />
            download full terms (pdf)
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl">ready to hit?</h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          the first 30 minutes are free. tell me about your game and i'll suggest a starting point.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/90 transition group"
        >
          get in touch
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
        </Link>
      </section>
    </Layout>
  );
};

export default Services;
