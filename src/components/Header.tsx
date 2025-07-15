interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

export const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 matrix-card border-b border-primary/30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-display font-bold tracking-wider text-foreground matrix-glow">
          z i a d
        </h1>
        
        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('current-projects')} 
            className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            current projects
          </button>
          <button 
            onClick={() => scrollToSection('tennis-coaching')} 
            className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            tennis coaching
          </button>
          <button 
            onClick={() => scrollToSection('bitcoin-resources')} 
            className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            bitcoin resources
          </button>
          <button 
            onClick={() => scrollToSection('other-projects')} 
            className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            other projects
          </button>
          <button 
            onClick={() => scrollToSection('podcast')} 
            className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            podcast
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
          >
            contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-muted-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};