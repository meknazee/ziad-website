import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import portrait from "@/assets/coach-portrait.jpg";

const credentials = [
  "{credential 1}",
  "{credential 2}",
  "{credential 3}",
  "{credential 4}",
  "{credential 5}",
  "{credential 6}",
];

const About = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="grid gap-14 md:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-accent">About</span>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1]">
              Hello, I'm <span className="italic text-accent">Coach Z</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              [Your story — paragraph one. Where you started, what hooked you on tennis, and the
              moments that shaped how you coach today.]
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              [Your story — paragraph two. Playing background, coaching journey, and the kinds of
              players you love working with most.]
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-court">
              <img
                src={portrait}
                alt="Coach Z portrait"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1024}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Coaching philosophy</span>
            <h2 className="mt-4 font-display text-4xl leading-tight">Three things I believe.</h2>
          </div>
          <div className="md:col-span-2 grid gap-8">
            <Belief n="01" title="Technique serves the player, not the other way around.">
              We build strokes that fit your body, your goals, and the level you actually play at —
              not a textbook ideal.
            </Belief>
            <Belief n="02" title="Match-play is a skill of its own.">
              Hitting big in practice is easy. Closing out a 4-4 set isn't. We train both — and we
              talk about the second one a lot.
            </Belief>
            <Belief n="03" title="Progress should be visible.">
              Every six weeks we check in on what's improved, what's stuck, and what's next.
              No vague vibes — just clear, honest feedback.
            </Belief>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Credentials</span>
        <h2 className="mt-4 font-display text-4xl">The paperwork.</h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {credentials.map((c) => (
            <li key={c} className="flex items-start gap-3 rounded-lg border border-border bg-card px-5 py-4">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm">{c}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/90 transition group"
          >
            Book a session
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

const Belief = ({ n, title, children }: { n: string; title: string; children: React.ReactNode }) => (
  <div className="flex gap-5">
    <div className="font-display text-2xl text-accent shrink-0 w-10">{n}</div>
    <div>
      <h3 className="font-display text-xl">{title}</h3>
      <p className="mt-2 text-muted-foreground leading-relaxed">{children}</p>
    </div>
  </div>
);

export default About;
