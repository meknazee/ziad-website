import { Mail } from "lucide-react";
import type { PackageTier } from "@/lib/packages";

type Props = {
  tier: PackageTier;
  /** used to build the mailto subject, e.g. "doubles clinics" */
  context: string;
};

export const PackageCard = ({ tier: p, context }: Props) => (
  <div
    className={`relative flex min-w-0 flex-col overflow-hidden rounded-lg border bg-card transition duration-300 hover:-translate-y-1 hover:shadow-soft ${
      p.popular ? "border-primary shadow-court md:-translate-y-3 md:hover:-translate-y-4" : "border-border"
    }`}
  >
    <div
      className={`relative flex min-h-40 flex-col items-center justify-center px-6 pb-12 pt-7 text-center [clip-path:polygon(0_0,100%_0,100%_72%,50%_100%,0_72%)] ${
        p.popular ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
      }`}
    >
      {p.popular && (
        <span className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">most popular</span>
      )}
      <h3 className="font-display text-4xl">{p.name}</h3>
      <p
        className={`mt-1 text-xs font-medium uppercase tracking-[0.16em] ${
          p.popular ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}
      >
        {p.sessions} · {p.discount}
      </p>
      <p className={`mt-1 text-xs ${p.popular ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
        {p.duration}
      </p>
    </div>

    <ul className="mt-2 divide-y divide-border">
      {p.features.map((feature) => (
        <li key={feature.label} className="flex min-h-12 items-center gap-3 px-6 py-3 text-sm">
          {feature.included ? (
            <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          ) : (
            <X className="h-4 w-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
          )}
          <span
            className={
              feature.included ? "text-foreground" : "text-muted-foreground line-through decoration-border"
            }
          >
            {feature.label}
          </span>
          <span className="sr-only">{feature.included ? "included" : "not included"}</span>
        </li>
      ))}
    </ul>

    <div className="flex-1 px-6 pb-6 pt-7 text-center">
      <div className={`grid gap-4 ${p.prices.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
        {p.prices.map((price, i) => (
          <div key={price.label} className={i > 0 ? "border-l border-border pl-4" : undefined}>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{price.label}</p>
            <p className="mt-1 font-display text-3xl">{price.total}</p>
            <p className="text-xs text-muted-foreground">{price.per}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm font-semibold text-accent">{p.save}</p>
    </div>

    <div className="mx-6 mb-6">
      <a
        href={`mailto:contactme@coachziad.com?subject=${encodeURIComponent(
          `sign me up, coach — ${p.name} (${context})`,
        )}&body=${encodeURIComponent(
          `hi coach ziad,\n\ni'd like to sign up for the ${p.name} package (${context}).\n\nname:\nphone:\npreferred start date:\n\nthanks!`,
        )}`}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
      >
        <Mail className="h-4 w-4" />
        sign me up, coach
      </a>
    </div>
  </div>
);
