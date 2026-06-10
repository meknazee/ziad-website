import { Link } from "react-router-dom";
import { ArrowRight, Clock, MapPin, Mail } from "lucide-react";
import { Layout } from "@/components/Layout";
import { MEETING_TYPES, CONTACT_EMAIL } from "@/lib/booking-config";

const Book = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">Book a session</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1] max-w-3xl">
          Let's get you <em className="text-accent not-italic">on court</em>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Pick a session type to see Coach Z's open times at Tuckahoe Recreation Club.
          The first 30 minutes are on me — book the intro session if it's your first time.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 grid gap-4 md:gap-5">
        {MEETING_TYPES.map((mt) => (
          <Link
            key={mt.slug}
            to={`/book/${mt.slug}`}
            className={`group flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-2xl border bg-card p-6 md:p-7 transition hover:-translate-y-0.5 hover:border-accent/50 ${
              mt.featured ? "border-accent/50 shadow-soft" : "border-border"
            }`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-2xl">{mt.title}</h3>
                {mt.featured && (
                  <span className="rounded-full bg-accent px-3 py-0.5 text-xs font-medium text-accent-foreground">
                    Start here
                  </span>
                )}
              </div>
              <p className="mt-2 text-muted-foreground max-w-2xl">{mt.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {mt.duration_minutes} min
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {mt.location}
                </span>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
              Pick a time
              <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-border bg-secondary/40 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div>
            <h2 className="font-display text-xl">Prefer to reach out directly?</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Email is the fastest way. I'll respond within 24 hours.
            </p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-background hover:bg-foreground/90 transition"
          >
            <Mail className="h-4 w-4" />
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Book;
