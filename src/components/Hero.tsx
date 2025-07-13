interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 tracking-tight matrix-glow">
          hello, i'm <span className="text-primary">z</span>
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          let this be my contribution to the world
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => scrollToSection('current-projects')} 
            className="bg-primary text-primary-foreground px-8 py-3 rounded matrix-border hover:bg-primary/80 transition-colors duration-200 font-medium"
          >
            view my work
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="border border-primary text-primary px-8 py-3 rounded hover:bg-primary/10 transition-colors duration-200 font-medium"
          >
            get in touch
          </button>
        </div>
      </div>
    </section>
  );
};