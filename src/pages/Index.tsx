import { ExternalLink, Github, Mail, Mic, Briefcase, FolderOpen, User, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const currentProjects = [{
    title: "AI-Powered Web App",
    description: "Building an intelligent web application using React and machine learning APIs",
    link: "https://github.com/ziad/ai-web-app",
    tech: ["React", "TypeScript", "AI/ML"]
  }, {
    title: "Mobile App Development",
    description: "Creating a cross-platform mobile application for productivity",
    link: "https://github.com/ziad/mobile-app",
    tech: ["React Native", "Node.js", "MongoDB"]
  }, {
    title: "Open Source Library",
    description: "Contributing to and maintaining a popular JavaScript library",
    link: "https://github.com/ziad/js-library",
    tech: ["JavaScript", "npm", "Testing"]
  }];
  const pastProjects = [{
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    link: "https://github.com/ziad/ecommerce",
    tech: ["Vue.js", "Python", "PostgreSQL"]
  }, {
    title: "Portfolio Website",
    description: "Responsive portfolio website for a design agency",
    link: "https://designagency.example.com",
    tech: ["HTML5", "SCSS", "JavaScript"]
  }, {
    title: "Data Visualization Tool",
    description: "Interactive dashboard for business analytics",
    link: "https://github.com/ziad/data-viz",
    tech: ["D3.js", "React", "Express"]
  }];
  const resources = [{
    title: "Blog",
    description: "Technical articles and thoughts on web development",
    link: "https://blog.ziad.dev",
    icon: <Globe className="w-5 h-5" />
  }, {
    title: "Newsletter",
    description: "Weekly insights on tech trends and development tips",
    link: "https://newsletter.ziad.dev",
    icon: <Mail className="w-5 h-5" />
  }, {
    title: "Code Snippets",
    description: "Useful code snippets and development tools",
    link: "https://snippets.ziad.dev",
    icon: <FolderOpen className="w-5 h-5" />
  }];
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 matrix-card border-b border-primary/30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-display font-bold tracking-wider text-foreground matrix-glow">
            z i a d
          </h1>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('current-projects')} className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
              current projects
            </button>
            <button onClick={() => scrollToSection('other-projects')} className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
              other projects
            </button>
            <button onClick={() => scrollToSection('podcast')} className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
              podcast
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
              contact
            </button>
            <button onClick={() => scrollToSection('resources')} className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium">
              resources
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

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 tracking-tight matrix-glow">
            hello, i'm <span className="text-primary">z</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">let this be my contribution to the world</p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => scrollToSection('current-projects')} className="bg-primary text-primary-foreground px-8 py-3 rounded matrix-border hover:bg-primary/80 transition-colors duration-200 font-medium">
              view my work
            </button>
            <button onClick={() => scrollToSection('contact')} className="border border-primary text-primary px-8 py-3 rounded hover:bg-primary/10 transition-colors duration-200 font-medium">
              get in touch
            </button>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="current-projects" className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <Briefcase className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-4xl font-bold text-foreground">current projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => <Card key={index} className="group matrix-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors lowercase">
                    {project.title.toLowerCase()}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed lowercase">
                    {project.description.toLowerCase()}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => <span key={techIndex} className="bg-primary/20 text-primary px-3 py-1 rounded text-sm font-medium border border-primary/30">
                        {tech.toLowerCase()}
                      </span>)}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                    view project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section id="other-projects" className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <FolderOpen className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-4xl font-bold text-foreground">other projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastProjects.map((project, index) => <Card key={index} className="group matrix-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors lowercase">
                    {project.title.toLowerCase()}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed lowercase">
                    {project.description.toLowerCase()}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => <span key={techIndex} className="bg-primary/20 text-primary px-3 py-1 rounded text-sm font-medium border border-primary/30">
                        {tech.toLowerCase()}
                      </span>)}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                    view project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <Mic className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-4xl font-bold text-foreground">podcast</h2>
          </div>
          <Card className="matrix-card hover:shadow-2xl transition-shadow duration-300 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">tech talks with ziad</h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                join me for weekly conversations about technology, development, and the future of digital innovation. 
                i interview industry experts, share insights, and discuss the latest trends in tech.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://spotify.com/podcast/ziad" target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-3 rounded matrix-border hover:bg-primary/80 transition-colors duration-200 font-medium">
                  listen on spotify
                </a>
                <a href="https://podcasts.apple.com/podcast/ziad" target="_blank" rel="noopener noreferrer" className="bg-accent text-accent-foreground px-6 py-3 rounded matrix-border hover:bg-accent/80 transition-colors duration-200 font-medium">
                  apple podcasts
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <Globe className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-4xl font-bold text-foreground">resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => <Card key={index} className="group matrix-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/20 rounded border border-primary/30 group-hover:bg-primary/30 transition-colors">
                      {resource.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors lowercase">
                    {resource.title.toLowerCase()}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed lowercase">
                    {resource.description.toLowerCase()}
                  </p>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                    visit <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <User className="w-8 h-8 text-primary mr-4" />
            <h2 className="text-4xl font-bold text-foreground">get in touch</h2>
          </div>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">i</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:hello@ziad.dev" className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded matrix-border hover:bg-primary/80 transition-colors duration-200 font-medium">
              <Mail className="w-5 h-5" />
              <span>email me</span>
            </a>
            <a href="https://github.com/ziad" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors duration-200 font-medium">
              <Github className="w-5 h-5" />
              <span>github</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-muted border-t border-primary/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025. built with patience and coffee.</p>
        </div>
      </footer>
    </div>;
};
export default Index;