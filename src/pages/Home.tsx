import { Link } from "react-router-dom";
import { ArrowRight, Users, Trophy, CalendarDays, Target, UsersRound, Sparkles } from "lucide-react";

import { Layout } from "@/components/Layout";
import portrait from "@/assets/coach-ziad-portrait.jpg.asset.json";

const CALENDLY_URL = "https://calendly.com/coach-ziad";

const offerings = [
  {
    icon: Target,
    title: "private lessons",
    body: "one-on-one sessions tuned to your goals, tempo, and level.",
  },
  {
    icon: UsersRound,
    title: "group clinics",
    body: "small groups for match-play, drilling, and match tactics.",
  },
  {
    icon: Sparkles,
    title: "junior development",
    body: "long-term technical and competitive pathways for young players.",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={portrait.url}
            alt="coach ziad on the tennis court"
            className="h-full w-full object-cover object-center"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              <span className="h-px w-8 bg-accent" /> private tennis coaching
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">
              sharper game.<br />
              <span className="italic text-accent">every shot.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              one-on-one and group lessons built around your level, your goals, and your rhythm — in
              arlington, mclean, and the greater dc area.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/90 transition group"
              >
                book a session
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </a>
              <Link
                to="/contact"
                className="text-sm font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
              >
                or send a note
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-foreground/15 pt-8">
              {[
                { icon: Users, label: "every age" },
                { icon: Trophy, label: "every level" },
                { icon: CalendarDays, label: "all year long" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-start gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Icon className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  <div className="text-xs uppercase tracking-widest font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              what to expect
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
              three ways to <span className="italic text-accent">work with me</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="text-sm font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
          >
            see all services →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6 hover:border-accent transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <blockquote className="text-center">
          <p className="font-display text-3xl md:text-4xl leading-tight text-foreground/90">
            "coach z brings elite-level expertise and unmatched energy to every session."
          </p>
          <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            pass academy
          </footer>
        </blockquote>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-foreground text-background px-8 md:px-14 py-14 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-xl">
              ready to hit?
            </h2>
            <p className="mt-4 text-background/70 max-w-md">
              pick a time on my calendar — i'll confirm your slot within a day.
            </p>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-accent-foreground font-medium hover:opacity-90 transition shrink-0"
          >
            book a session <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Home;

