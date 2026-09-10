import { Link } from "react-router-dom";
import { ArrowRight, FileDown, Mail, Target, CalendarCheck } from "lucide-react";
import { openCalendly } from "@/lib/calendly";
import { Layout } from "@/components/Layout";
import { PackageCard } from "@/components/PackageCard";
import {
  privateTiers,
  clinicGroups,
  masterclasses,
  masterclassPrice,
  masterclassFormat,
  privatePdf,
  masterclassPdf,
  commonTerms,
  privateTerms,
  masterclassTerms,
} from "@/lib/packages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SectionHeader = ({ title, summary }: { title: string; summary: string }) => (
  <div className="text-left">
    <h2 className="font-display text-3xl md:text-4xl leading-tight">{title}</h2>
    <p className="mt-1 text-sm text-muted-foreground">{summary}</p>
  </div>
);

const Packages = () => (
  <Layout>
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-10">
      <span className="text-xs uppercase tracking-[0.2em] text-accent">packages</span>
      <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1] max-w-3xl">
        commit to your game. <em className="text-accent not-italic">save</em> while you do.
      </h1>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
        prepaid blocks at a locked-in rate — private lessons, group clinics and shot masterclasses.
        pick a section below to see the tiers.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => openCalendly()}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition hover:bg-accent/90"
        >
          <CalendarCheck className="h-4 w-4" />
          book a session
        </button>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium transition hover:bg-secondary"
        >
          ask about a package
        </Link>
      </div>
    </section>

    <section className="mx-auto max-w-6xl px-6 pb-24">
      <Accordion type="multiple" defaultValue={["private"]} className="space-y-4">
        {/* private lessons */}
        <AccordionItem value="private" className="rounded-lg border border-border bg-card/40 px-6">
          <AccordionTrigger className="py-6 hover:no-underline">
            <SectionHeader title="private lessons" summary="one-on-one — game / set / match, 60 or 90 minutes." />
          </AccordionTrigger>
          <AccordionContent className="pb-8">
            <div className="mt-4 grid items-stretch gap-6 md:grid-cols-3">
              {privateTiers.map((t) => (
                <PackageCard key={t.name} tier={t} context="private lesson package" />
              ))}
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-border pt-6 sm:flex-row sm:items-center">
              <p className="max-w-3xl text-xs leading-relaxed text-muted-foreground">
                valid 6 months (game / set) or 9 months (match) from purchase · 24-hour reschedule notice ·
                unused lessons expire · transfers to friends & family are subject to the restrictions in the
                full terms.
              </p>
              <a
                href={privatePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <FileDown className="h-4 w-4" />
                download full terms (pdf)
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* group clinics */}
        <AccordionItem value="clinics" className="rounded-lg border border-border bg-card/40 px-6">
          <AccordionTrigger className="py-6 hover:no-underline">
            <SectionHeader
              title="group clinics"
              summary="90-minute clinics — doubles and junior development, priced per player."
            />
          </AccordionTrigger>
          <AccordionContent className="pb-8">
            <div className="space-y-12">
              {clinicGroups.map((g) => (
                <div key={g.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl">{g.title}</h3>
                    <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      drop-in {g.baseline}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{g.blurb}</p>
                  <div className="mt-6 grid items-stretch gap-6 md:grid-cols-3">
                    {g.tiers.map((t) => (
                      <PackageCard key={t.name} tier={t} context={g.title} />
                    ))}
                  </div>
                  <a
                    href={g.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
                  >
                    <FileDown className="h-4 w-4" />
                    download {g.title} pdf (prices + terms)
                  </a>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* shot masterclass */}
        <AccordionItem value="masterclass" className="rounded-lg border border-border bg-card/40 px-6">
          <AccordionTrigger className="py-6 hover:no-underline">
            <SectionHeader
              title="shot masterclass"
              summary="5 × 60 min on one shot — break the plateau, max 3 players."
            />
          </AccordionTrigger>
          <AccordionContent className="pb-8">
            <p className="max-w-2xl text-sm text-muted-foreground">
              pick the shot holding your game back. each block is five 60-minute sessions in a focused group
              of no more than three players — {masterclassPrice} per player.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {masterclasses.map((m) => (
                <div
                  key={m.slug}
                  className="flex flex-col rounded-lg border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <Target className="h-5 w-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-2xl">{m.shot}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{m.blurb}</p>
                  <p className="mt-5 font-display text-3xl">{masterclassPrice}</p>
                  <p className="text-xs text-muted-foreground">{masterclassFormat}</p>
                  <a
                    href={`mailto:contactme@coachziad.com?subject=${encodeURIComponent(
                      `${m.shot} masterclass inquiry`,
                    )}`}
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                  >
                    <Mail className="h-4 w-4" />
                    email coach ziad
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => openCalendly()}
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition hover:bg-accent/90"
              >
                <CalendarCheck className="h-4 w-4" />
                book a masterclass
              </button>
              <a
                href={masterclassPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-primary px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-primary-foreground"
              >
                <FileDown className="h-4 w-4" />
                download masterclass pdf (prices + terms)
              </a>
            </div>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              included in every masterclass: small-group coaching, video feedback on request, and a simple
              practice plan to keep the change after the block ends.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section className="mx-auto max-w-6xl px-6 pb-24 text-center">
      <h2 className="font-display text-4xl md:text-5xl">not sure which one?</h2>
      <p className="mt-4 text-muted-foreground max-w-md mx-auto">
        tell me about your game and i'll suggest a starting point — the first 30 minutes are free.
      </p>
      <Link
        to="/contact"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/90 transition group"
      >
        get in touch
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
      </Link>
    </section>
  </Layout>
);

export default Packages;
