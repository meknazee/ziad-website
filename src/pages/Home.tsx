import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Layout } from "@/components/Layout";
import { HomeDestinationCarousel } from "@/components/HomeDestinationCarousel";
import { ProgramFinder } from "@/components/ProgramFinder";
import { CalendlyInline } from "@/components/CalendlyInline";
import { InquiryForm } from "@/components/InquiryForm";

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
      {/* Static high-level page heading for search engines */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-6 sm:px-10">
          <h1 className="font-display text-lg leading-snug text-foreground/85 sm:text-xl">
            coach z — professional tennis coach for young athletes and adult enthusiasts in the
            dmv area.
          </h1>
        </div>
      </section>

      {/* Step 1 — swipeable website destinations */}
      <HomeDestinationCarousel />

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
              courts: tuckahoe recreation club — mclean, va. serving mclean, tysons corner and
              the greater dc area.
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
