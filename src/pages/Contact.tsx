import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";

const CALENDLY_URL = "https://calendly.com/coach.ziad";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "contactme@coachziad.com",
    href: "mailto:contactme@coachziad.com",
  },
  {
    icon: MapPin,
    label: "Courts",
    value: "Tuckahoe Recreation Club — McLean, VA",
    href: null as string | null,
  },
  {
    icon: MapPin,
    label: "Area",
    value: "Washington DC · Arlington · Northern Virginia",
    href: null as string | null,
  },
];

const Contact = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
          Contact
        </span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1] max-w-2xl">
          Let's get <span className="italic text-accent">you on court</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
          Reach out directly, or book a session straight into my calendar — I'll confirm your slot
          within a day.
        </p>

        <div className="mt-10 grid gap-4 max-w-xl">
          {details.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-accent">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                  <div className="font-medium">{value}</div>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block">
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/90 transition group"
          >
            Book a Session
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
