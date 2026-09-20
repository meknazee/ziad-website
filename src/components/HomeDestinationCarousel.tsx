import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import academyShot from "@/assets/coach-ziad-img-academy.jpg";
import coachZiad from "@/assets/coach-ziad-photo.png";
import serveShot from "@/assets/coach-ziad-serve.png";
import tennisCourts from "@/assets/coach-ziad-tennis-courts.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const destinations = [
  {
    eyebrow: "train with coach z",
    title: "services",
    description: "private coaching, group sessions, clinics and focused work for every stage of your game.",
    cta: "explore services",
    to: "/services",
    image: serveShot,
    imagePosition: "object-[center_20%]",
    alt: "coach ziad serving on court",
  },
  {
    eyebrow: "choose your commitment",
    title: "packages",
    description: "compare session lengths, pricing and perks, then choose the package that fits your goals.",
    cta: "view packages",
    to: "/packages",
    image: tennisCourts,
    imagePosition: "object-center",
    alt: "tennis courts in mclean, virginia",
  },
  {
    eyebrow: "the working athlete",
    title: "library",
    description: "field manuals for building strength, endurance and skill — made to move from page to court.",
    cta: "open the library",
    to: "/working-athlete",
    image: academyShot,
    imagePosition: "object-center",
    alt: "coach ziad teaching on court",
  },
  {
    eyebrow: "start the conversation",
    title: "contact",
    description: "tell coach z about your game, your schedule and what you want to accomplish next.",
    cta: "get in touch",
    to: "/contact",
    image: coachZiad,
    imagePosition: "object-[center_26%]",
    alt: "portrait of coach ziad",
  },
];

export const HomeDestinationCarousel = () => {
  const [viewportRef, api] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateSelection = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    updateSelection();
    api.on("select", updateSelection);
    api.on("reInit", updateSelection);
    return () => {
      api.off("select", updateSelection);
      api.off("reInit", updateSelection);
    };
  }, [api, updateSelection]);

  useEffect(() => {
    if (!api || paused) return;
    const timer = window.setInterval(() => api.scrollNext(), 6500);
    return () => window.clearInterval(timer);
  }, [api, paused]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="explore coach ziad"
      className="relative overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div ref={viewportRef} className="overflow-hidden touch-pan-y">
        <div className="flex">
          {destinations.map((destination, index) => (
            <article
              key={destination.to}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${destinations.length}: ${destination.title}`}
              className="relative min-w-0 flex-[0_0_100%]"
            >
              <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-28 pt-16 md:grid-cols-2 md:gap-14 md:pb-32 md:pt-24">
                {/* Text panel */}
                <div
                  className={cn(
                    "max-w-xl transition-all duration-700 motion-reduce:transition-none",
                    selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
                  )}
                >
                  <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                    <span className="h-px w-9 bg-accent" />
                    {destination.eyebrow}
                  </p>
                  <h1 className="mt-5 font-display text-6xl leading-none sm:text-7xl md:text-8xl">
                    {destination.title}
                  </h1>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {destination.description}
                  </p>
                  <Button asChild size="lg" className="mt-8 rounded-full px-7">
                    <Link to={destination.to}>
                      {destination.cta}
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>

                {/* Image card — shown at native-ish scale, never stretched */}
                <div className="relative mx-auto w-full max-w-md md:max-w-none">
                  <div className="overflow-hidden rounded-2xl border border-border shadow-court">
                    <img
                      src={destination.image}
                      alt={destination.alt}
                      className={cn(
                        "h-[380px] w-full object-cover transition-transform duration-[6500ms] motion-reduce:transition-none sm:h-[440px] md:h-[520px]",
                        destination.imagePosition,
                        selectedIndex === index && "scale-[1.03]",
                      )}
                      width={900}
                      height={1200}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-4 left-6 rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-accent-foreground"
                  >
                    {destination.title}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-7 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
          <div className="pointer-events-auto flex items-center gap-2" aria-label="choose a destination">
            {destinations.map((destination, index) => (
              <Button
                key={destination.to}
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => api?.scrollTo(index)}
                aria-label={`show ${destination.title}`}
                aria-current={selectedIndex === index ? "true" : undefined}
                className="h-8 w-8 rounded-full hover:bg-foreground/10"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full bg-current transition-all",
                    selectedIndex === index ? "w-6 text-accent" : "w-1.5 text-foreground/40",
                  )}
                />
              </Button>
            ))}
          </div>

          <div className="pointer-events-auto flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              aria-label="previous destination"
              className="rounded-full"
            >
              <ArrowLeft aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              aria-label="next destination"
              className="rounded-full"
            >
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
