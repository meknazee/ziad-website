import { useNavigate } from "react-router-dom";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { sessionPrograms, athleteTracks, type Program } from "@/lib/programs";
import { openCalendly } from "@/lib/calendly";

const Card = ({
  program,
  action,
  onClick,
}: {
  program: Program;
  action: "book" | "apply";
  onClick: () => void;
}) => (
  <div className="flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent">
    <h4 className="font-display text-2xl">{program.title}</h4>
    <p className="mt-2 text-sm text-foreground/80">{program.blurb}</p>
    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{program.detail}</p>
    <button
      type="button"
      onClick={onClick}
      className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
        action === "book"
          ? "bg-accent text-accent-foreground hover:opacity-90"
          : "bg-foreground text-background hover:bg-foreground/90"
      }`}
    >
      {action === "book" ? (
        <>
          <CalendarCheck className="h-4 w-4" />
          schedule {program.title}
        </>
      ) : (
        <>
          apply — {program.title}
          <ArrowRight className="h-4 w-4" />
        </>
      )}
    </button>
  </div>
);

export const ProgramFinder = ({ onApply }: { onApply?: (slug: string) => void }) => {
  const navigate = useNavigate();

  return (
    <section id="programs" className="mx-auto max-w-6xl px-6 py-20 scroll-mt-24">
      <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
        step two
      </span>
      <h2 className="mt-3 font-display text-4xl md:text-5xl leading-tight max-w-2xl">
        which program is <span className="italic text-accent">right for you</span>?
      </h2>
      <p className="mt-5 max-w-xl text-muted-foreground leading-relaxed">
        two ways to train with me: book time on court, or onboard as an athlete in the working
        athlete program.
      </p>

      <div className="mt-12">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-2xl">on court</h3>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            book a time
          </span>
        </div>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {sessionPrograms.map((p) => (
            <Card key={p.slug} program={p} action="book" onClick={() => openCalendly()} />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-2xl">the working athlete program</h3>
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            athlete onboarding
          </span>
        </div>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {athleteTracks.map((p) => (
            <Card
              key={p.slug}
              program={p}
              action="apply"
              onClick={() =>
                onApply ? onApply(p.slug) : navigate(`/contact?services=${p.slug}`)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
