import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import coachZiad from "@/assets/coach-ziad-photo.png";
import courtDetail from "@/assets/court-detail.jpg";
import heroCourt from "@/assets/hero-court.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const destinations = [
  {
    eyebrow: "train with coach z",
    title: "services",
    description: "private coaching, group sessions, clinics and focused work for every stage of your game.",
    cta: "explore services",
    to: "/services",
    image: coachZiad,
    imagePosition: "object-[center_34%]",
    alt: "coach ziad holding a tennis racket",
  },
  {
    eyebrow: "choose your commitment",
    title: "packages",
    description: "compare session lengths, pricing and perks, then choose the package that fits your goals.",
    cta: "view packages",
    to: "/packages",
    image: courtDetail,
    imagePosition: "object-center",
    alt: "tennis courts in mclean, virginia",
  },
  {
    eyebrow: "the working athlete",
    title: "library",
    description: "field manuals for building strength, endurance and skill — made to move from page to court.",
    cta: "open the library",
    to: "/working-athlete",
    image: heroCourt,
    imagePosition: "object-center",
    alt: "tennis racket and ball arranged on a green court",
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
      className="relative overflow-hidden bg-foreground"
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
              className="relative min-w-0 flex-[0_0_100%] h-[min(720px,calc(100svh-5rem))] min-h-[590px]"
            >
              <img
                src={destination.image}
                alt={destination.alt}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-transform duration-[6500ms] motion-reduce:transition-none",
                  destination.imagePosition,
                  selectedIndex === index && "scale-[1.035]",
                )}
                width={1600}
                height={1200}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/55 to-foreground/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-transparent to-foreground/15" />

              <div className="relative mx-auto flex h-full max-w-6xl items-end px-6 pb-28 pt-20 md:items-center md:pb-20">
                <div
                  className={cn(
                    "max-w-2xl text-primary-foreground transition-all duration-700 motion-reduce:transition-none",
                    selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
                  )}
                >
                  <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                    <span className="h-px w-9 bg-accent" />
                    {destination.eyebrow}
                  </p>
                  <h1 className="mt-5 text-6xl leading-none sm:text-7xl md:text-8xl">
                    {destination.title}
                  </h1>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                    {destination.description}
                  </p>
                  <Button asChild size="lg" className="mt-8 rounded-full bg-accent px-7 text-accent-foreground hover:bg-accent/90">
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
                className="h-8 w-8 rounded-full text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground"
              >
                <span
                  className={cn(
                    "block h-1.5 rounded-full bg-current transition-all",
                    selectedIndex === index ? "w-6 text-accent" : "w-1.5 text-primary-foreground/60",
                  )}
                />
              </Button>
            ))}
          </div>

          <div className="pointer-events-auto flex gap-2">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => api?.scrollPrev()}
              aria-label="previous destination"
              className="rounded-full bg-primary-foreground text-foreground hover:bg-primary-foreground/85"
            >
              <ArrowLeft aria-hidden="true" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => api?.scrollNext()}
              aria-label="next destination"
              className="rounded-full bg-primary-foreground text-foreground hover:bg-primary-foreground/85"
            >
              <ArrowRight aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};