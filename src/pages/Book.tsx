// TODO: replace SQUARE_BOOKING_URL with the real Square Appointments link.
const SQUARE_BOOKING_URL = "https://book.squareup.com/REPLACE_ME";

import { Layout } from "@/components/Layout";
import { ArrowRight, Mail, Zap, MapPin } from "lucide-react";

const Book = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">Book a session</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1] max-w-3xl">
          Let's get you <em className="text-accent not-italic">on court</em>.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl">
          Pick a time that works through Square Appointments. Availability is updated live —
          if it's open, it's bookable.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12 shadow-soft flex flex-col items-start">
          <h2 className="font-display text-3xl md:text-4xl leading-tight">
            Schedule on Square Appointments.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md">
            Private lessons, semi-private, junior development, and strength &amp; conditioning are
            all bookable from the same page.
          </p>
          <a
            href={SQUARE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-background font-medium hover:bg-foreground/90 transition group text-base"
          >
            Open booking page
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </a>
          <p className="mt-6 text-xs text-muted-foreground">
            Opens in a new tab. You'll pick a service, time, and pay through Square.
          </p>
        </div>

        <aside className="space-y-6">
          <div>
            <h3 className="font-display text-2xl">Prefer to reach out directly?</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Email is fastest. Nostr works too.
            </p>
          </div>
          <ul className="space-y-4">
            <ContactItem
              icon={<Mail className="h-4 w-4" />}
              label="Email"
              value="coach.z@example.com"
              href="mailto:coach.z@example.com"
            />
            <ContactItem
              icon={<Zap className="h-4 w-4" />}
              label="Nostr"
              value="[your npub / handle]"
              href="#nostr-placeholder"
            />
            <ContactItem
              icon={<MapPin className="h-4 w-4" />}
              label="Service area"
              value="DC · Arlington · NoVA"
            />
          </ul>
          <div className="rounded-xl border border-border bg-secondary/40 p-5 text-sm">
            <div className="font-medium">Response time</div>
            <p className="text-muted-foreground mt-1">Within 24 hours, every time. Usually much faster.</p>
          </div>
        </aside>
      </section>
    </Layout>
  );
};

const ContactItem = ({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) => {
  const content = (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:border-accent/40 transition">
      <div className="mt-0.5 text-accent">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="mt-0.5 font-medium">{value}</div>
      </div>
    </div>
  );
  return <li>{href ? <a href={href}>{content}</a> : content}</li>;
};

export default Book;
