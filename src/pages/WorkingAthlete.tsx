import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Lock, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SESPillarsChart } from "@/components/SES/SESPillarsChart";

const LIBRARY_URL = "https://coachz-athletelibrary.lovable.app";

type ProgramStatus = "featured" | "active" | "in-review" | "coming-soon";

const programs: {
  title: string;
  category: string;
  duration: string;
  description: string;
  status: ProgramStatus;
}[] = [
  {
    title: "Mile Repeat Progression",
    category: "Track",
    duration: "7 weeks",
    description:
      "Test, build, retest. The starting block for every working athlete's running base.",
    status: "featured",
  },
  {
    title: "Tennis Summer Playbook",
    category: "Summer",
    duration: "12 weeks",
    description:
      "Coach Z is finalizing review — preview coming soon.",
    status: "in-review",
  },
  {
    title: "Master Your Bodyweight",
    category: "Strength",
    duration: "—",
    description: "The strength layer that lets the rest of the work land.",
    status: "coming-soon",
  },
  {
    title: "Find Your Serve",
    category: "Tennis",
    duration: "—",
    description: "Mechanics, intent, and reps — until your serve is yours.",
    status: "coming-soon",
  },
  {
    title: "Recovery Protocols",
    category: "Recovery",
    duration: "—",
    description: "The unglamorous work that keeps the rest of the program possible.",
    status: "coming-soon",
  },
];

const statusBadge: Record<ProgramStatus, { label: string; cls: string }> = {
  featured: {
    label: "Open now",
    cls: "bg-accent text-accent-foreground",
  },
  active: {
    label: "Active",
    cls: "bg-foreground text-background",
  },
  "in-review": {
    label: "In review",
    cls: "bg-secondary text-secondary-foreground border border-border",
  },
  "coming-soon": {
    label: "Coming soon",
    cls: "bg-muted text-muted-foreground border border-border",
  },
};

const WorkingAthlete = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">The Working Athlete</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1] max-w-3xl">
          A library for the player who <em className="text-accent not-italic">trains like one</em>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Field manuals from Coach Z — running, strength, tennis, recovery. Free to read.
          A few are still in the workshop. The first one is open right now.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={LIBRARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/90 transition group"
          >
            Open the Library
            <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </a>
          <Link
            to="/book"
            className="text-sm font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
          >
            Or book a session with Coach Z →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => {
            const badge = statusBadge[p.status];
            const isOpen = p.status === "featured" || p.status === "active";
            return (
              <a
                key={p.title}
                href={LIBRARY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative rounded-2xl border bg-card p-6 transition hover:-translate-y-0.5 hover:border-accent/50 ${
                  isOpen ? "border-accent/40" : "border-border"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {p.category} · {p.duration}
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider ${badge.cls}`}>
                    {badge.label}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 group-hover:gap-3 transition-all">
                  {isOpen ? (
                    <>
                      Read in the Library <ArrowUpRight className="h-4 w-4" />
                    </>
                  ) : p.status === "in-review" ? (
                    <>
                      Preview soon <Sparkles className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Coming soon <Lock className="h-4 w-4" />
                    </>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            How the training stacks
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight max-w-2xl">
            Strength. Endurance. Skills. The three pillars every manual leans on.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            The Working Athlete library is built around the same SES framework Coach Z teaches
            in his strength &amp; conditioning sessions. Read the manuals, then bring questions
            to the court.
          </p>
          <div className="mt-10">
            <SESPillarsChart />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Ready to put it on the court?</h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Read the manuals, then book a session and let's apply them to your game.
        </p>
        <Link
          to="/book"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/90 transition group"
        >
          Book a session with Coach Z
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
        </Link>
      </section>
    </Layout>
  );
};

export default WorkingAthlete;
