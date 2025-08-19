interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export const Hero = ({
  scrollToSection
}: HeroProps) => {
  return (
    <section 
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('/images/tennis-hero.jpg')`
      }}
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
          hello, i'm <span className="text-primary-foreground">Coach Z</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          tennis coaching and strength & conditioning — built on consistency, clarity, and work
        </p>
      </div>
    </section>
  );
};