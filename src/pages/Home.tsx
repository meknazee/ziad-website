import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Award, Clock } from "lucide-react";
import { Layout } from "@/components/Layout";
import hero from "@/assets/hero-court.jpg";
import court from "@/assets/court-detail.jpg";

const Home = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={hero}
            alt="Tennis coach mid-stroke on a clay court"
            className="h-full w-full object-cover"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent font-medium">
              <span className="h-px w-8 bg-accent" /> Private Tennis Coaching
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[0.95]">
              Hello, I'm <span className="italic text-accent">Coach Z</span>.<br />
              Passion meets <em className="text-accent not-italic">elite</em> experience.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Pass Academy coach, former Rollins College standout, and Moroccan junior champion —
              now coaching juniors and adults at Tuckahoe Recreation Club and across the DC–Virginia area.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/90 transition group"
              >
                Book a Session
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                to="/services"
                className="text-sm font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
              >
                See sessions &amp; pricing
              </Link>
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

      {/* Approach */}
      <section className="mx-auto max-w-6xl px-6 py-24 grid gap-16 md:grid-cols-2 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">The approach</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">
            Less drilling.<br />
            More <em className="text-accent not-italic">deliberate</em> play.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Every session is built around what you actually need on Saturday morning — whether that's a
            reliable second serve, a calmer return, or finally winning the close ones. We video, we
            measure, and we build habits that stick.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
          >
            Read my story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-court">
            <img
              src={court}
              alt="Overhead view of a tennis court"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1400}
              height={900}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg px-5 py-4 shadow-soft hidden md:block">
            <div className="text-3xl font-display">10+</div>
            <div className="text-xs text-muted-foreground">years coaching</div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-foreground text-background px-8 md:px-14 py-14 md:py-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight max-w-xl">
              First session is on me.
            </h2>
            <p className="mt-4 text-background/70 max-w-md">
              30 minutes on court. We hit, we talk goals, and you decide if it's a fit. Zero pressure.
            </p>
          </div>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-accent-foreground font-medium hover:opacity-90 transition shrink-0"
          >
            Book free intro <ArrowRight className="h-4 w-4" />
          </Link>
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
