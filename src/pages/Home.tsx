import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Users, Trophy, CalendarDays, ChevronDown } from "lucide-react";

import { Layout } from "@/components/Layout";
import { HeroVideo } from "@/components/HeroVideo";
import { ProgramFinder } from "@/components/ProgramFinder";
import { CalendlyInline } from "@/components/CalendlyInline";
import { InquiryForm } from "@/components/InquiryForm";
import { openCalendly } from "@/lib/calendly";
import portrait from "@/assets/coach-ziad-portrait.jpg.asset.json";

/** drop an mp4 clip in src/assets and import it here to turn the hero into video */
const HERO_VIDEO_SRC: string | undefined = undefined;

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const applyTrack = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    const current = (params.get("services") || "").split(",").filter(Boolean);
    if (!current.includes(slug)) current.push(slug);
    params.set("services", current.join(","));
    setSearchParams(params, { replace: true });
    document.getElementById("get-in-touch")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* Step 1 — video hook */}
      <section className="relative overflow-hidden">
        <HeroVideo
          src={HERO_VIDEO_SRC}
          poster={portrait.url}
          alt="coach ziad on the tennis court"
        />
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
              <button
                type="button"
                onClick={() => openCalendly()}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/90 transition group"
              >
                book a session
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </button>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-7 py-3.5 text-sm font-medium hover:border-accent transition"
              >
                find your program
                <ChevronDown className="h-4 w-4" />
              </a>
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

      {/* Step 2 — which program is right for you */}
      <ProgramFinder onApply={applyTrack} />

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

      {/* Step 3 — book + get in touch */}
      <section id="book" className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
          step three
        </span>
        <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
          pick a time, or <span className="italic text-accent">send a note</span>
        </h2>
        <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
          grab a slot straight from my calendar below — or tell me about your game and i'll come
          back to you within a day.
        </p>
        <div className="mt-10">
          <CalendlyInline />
        </div>
      </section>

      <section id="get-in-touch" className="mx-auto max-w-6xl px-6 pb-24 scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <InquiryForm />
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <h3 className="font-display text-2xl">prefer email?</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              reach me directly at{" "}
              <a
                href="mailto:contactme@coachziad.com"
                className="text-foreground underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
              >
                contactme@coachziad.com
              </a>
              .
            </p>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              courts: tuckahoe recreation club — mclean, va. serving washington dc, arlington and
              northern virginia.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
            >
              see all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
