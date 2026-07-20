import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import portrait from "@/assets/coach-ziad-portrait.jpg.asset.json";

const CALENDLY_URL = "https://calendar.com/coach-ziad";

const offerings = [
  "Private & semi-private lessons",
  "Junior development programs",
  "Match play & tournament prep",
  "Video stroke analysis",
];

const About = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16">
        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent font-semibold">
              About Me
            </span>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1]">
              Coach <span className="italic text-accent">Ziad</span>
            </h1>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Ziad is a passionate coach who works as a Head Tennis Pro at Tuckahoe Recreation
                Club in McLean, VA. His love for the game is unmatched, and his energy on the court
                is highly contagious. With his distinguished collegiate and humble professional
                tennis career, Ziad brings elite-level expertise and passion to the court.
              </p>
              <p>
                Footwork, technique, match strategy, and the mental side of the game — we work on
                all of it, at a pace that keeps tennis fun.
              </p>
            </div>

            <ul className="mt-8 max-w-md space-y-3">
              {offerings.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-border pb-3"
                >
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

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
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-court">
              <img
                src={portrait.url}
                alt="Coach Ziad on the tennis court"
                className="h-full w-full object-cover object-center"
                width={900}
                height={1200}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
