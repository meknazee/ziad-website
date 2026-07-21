import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Check, CalendarCheck } from "lucide-react";
import { Layout } from "@/components/Layout";

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
  "Package discounts (5 / 10 / 20 sessions)",
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
