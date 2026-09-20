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
    imagePosition: "object-[52%_38%] md:object-[center_42%]",
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
    imagePosition: "object-[58%_center] md:object-center",
    alt: "coach ziad teaching on court",
  },
  {
    eyebrow: "start the conversation",
    title: "contact",
    description: "tell coach z about your game, your schedule and what you want to accomplish next.",
    cta: "get in touch",
    to: "/contact",
    image: coachZiad,
    imagePosition: "object-[center_24%]",
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
      className="relative overflow-hidden bg-background outline-none"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          api?.scrollPrev();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          api?.scrollNext();
        }
      }}
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
              className="relative min-h-[680px] min-w-0 flex-[0_0_100%] sm:min-h-[720px] lg:min-h-[760px]"
            >
              <div className="absolute inset-0 bg-secondary">
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className={cn(
                    "h-full w-full object-cover transition-[opacity,transform] duration-700 motion-reduce:transition-none",
                    destination.imagePosition,
                    selectedIndex === index ? "scale-100 opacity-100" : "scale-[1.01] opacity-80",
                  )}
                  width={1600}
                  height={900}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent md:bg-gradient-to-r md:from-background md:via-background/70 md:to-background/5"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/25 to-transparent"
              />

              <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-end px-6 pb-32 pt-24 sm:min-h-[720px] sm:px-10 md:items-center md:pb-28 lg:min-h-[760px] lg:px-16">
                <div
                  className={cn(
                    "w-full max-w-xl transition-all duration-700 motion-reduce:transition-none",
                    selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                >
                  <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                    <span className="h-px w-9 bg-accent" />
                    {destination.eyebrow}
                  </p>
                  <h1 className="mt-5 font-display text-6xl leading-none text-foreground sm:text-7xl md:text-8xl">
                    {destination.title}
                  </h1>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/80 sm:text-lg">
                    {destination.description}
                  </p>
                  <Button asChild size="lg" className="mt-8 rounded-full px-7">
                    <Link to={destination.to}>
                      {destination.cta}
                      <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
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
                className="h-8 w-8 rounded-full bg-background/45 backdrop-blur-sm hover:bg-background/70"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full bg-current transition-all",
                    selectedIndex === index ? "w-6 text-accent" : "w-1.5 text-foreground/55",
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
              className="rounded-full border-background/70 bg-background/75 backdrop-blur-sm"
            >
              <ArrowLeft aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              aria-label="next destination"
              className="rounded-full border-background/70 bg-background/75 backdrop-blur-sm"
            >
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
