import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TennisCoachingSection } from "@/components/TennisCoachingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <TennisCoachingSection />
      <div id="strength-conditioning" className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">Strength & Conditioning</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            In tennis, you can only go as far as your fitness takes you. Build the physical foundation for elite performance.
          </p>
          <a 
            href="/strength-conditioning" 
            className="inline-flex items-center text-primary hover:underline text-lg font-medium"
          >
            Explore Training Pillars →
          </a>
        </div>
      </div>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;