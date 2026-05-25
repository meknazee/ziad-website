import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SESPillarsChart } from "@/components/SES/SESPillarsChart";

const StrengthConditioning = () => {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-accent">Strength &amp; Conditioning</span>
        <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1] max-w-3xl">
          You can only go as far as your <em className="text-accent not-italic">body</em> takes you.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Tennis is built on three pillars: strength, endurance, and skills. Train them deliberately
          and your match-play takes care of itself.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <SESPillarsChart />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Build your engine.</h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          Book an S&amp;C session and let's design a plan that fits your body and your tennis goals.
        </p>
        <Link
          to="/book"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-background font-medium hover:bg-foreground/90 transition group"
        >
          Book a session
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
        </Link>
      </section>
    </Layout>
  );
};

export default StrengthConditioning;
