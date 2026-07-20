import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Award, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import hero from "@/assets/hero-court.jpg";
import portrait from "@/assets/coach-ziad-photo.png";

const CALENDLY_URL = "https://calendly.com/coach.ziad";

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Tennis court"
            className="h-full w-full object-cover"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 grid gap-12 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              <span className="h-px w-8 bg-accent" /> Private Tennis Coaching
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">
              Sharper game.<br />
              <span className="italic text-accent">Every shot.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              One-on-one and group lessons built around your level, your goals, and your rhythm.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/90 transition group"
              >
                Book a Session
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </a>
              <Link
                to="/about"
                className="text-sm font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
              >
                About me
              </Link>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-foreground/15 pt-8">
              {[
                { n: "15+", l: "Years coaching" },
                { n: "200+", l: "Players trained" },
                { n: "All", l: "Levels welcome" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-court">
              <img
                src={portrait}
                alt="Coach Ziad on the tennis court"
                className="h-full w-full object-cover object-[50%_30%]"
                width={900}
                height={1200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-3 text-sm">
          <Fact icon={<MapPin className="h-4 w-4" />} title="Where" text="DC, Arlington and NoVA courts" />
          <Fact icon={<Award className="h-4 w-4" />} title="Who" text="Juniors & adults, all levels" />
          <Fact icon={<Clock className="h-4 w-4" />} title="When" text="Mornings, evenings & weekends" />
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl bg-foreground text-background px-8 md:px-14 py-14 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-xl">
              Ready to hit?
            </h2>
            <p className="mt-4 text-background/70 max-w-md">
              Pick a time on my calendar — I'll confirm your slot within a day.
            </p>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-accent-foreground font-medium hover:opacity-90 transition shrink-0"
          >
            Book a Session <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

const Fact = ({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 text-accent">{icon}</div>
    <div>
      <div className="font-medium">{title}</div>
      <div className="text-muted-foreground">{text}</div>
    </div>
  </div>
);

export default Home;
