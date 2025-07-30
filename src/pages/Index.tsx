import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TennisCoachingSection } from "@/components/TennisCoachingSection";
import { BitcoinResourcesSection } from "@/components/BitcoinResourcesSection";
import { OtherProjectsSection } from "@/components/OtherProjectsSection";
import { PodcastSection } from "@/components/PodcastSection";

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
      <ProjectsSection />
      <BitcoinResourcesSection />
      <OtherProjectsSection />
      <PodcastSection />
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;