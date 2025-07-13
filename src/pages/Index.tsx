
import { ExternalLink, Github, Mail, Mic, Briefcase, FolderOpen, User, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentProjects = [
    {
      title: "AI-Powered Web App",
      description: "Building an intelligent web application using React and machine learning APIs",
      link: "https://github.com/ziad/ai-web-app",
      tech: ["React", "TypeScript", "AI/ML"]
    },
    {
      title: "Mobile App Development",
      description: "Creating a cross-platform mobile application for productivity",
      link: "https://github.com/ziad/mobile-app",
      tech: ["React Native", "Node.js", "MongoDB"]
    },
    {
      title: "Open Source Library",
      description: "Contributing to and maintaining a popular JavaScript library",
      link: "https://github.com/ziad/js-library",
      tech: ["JavaScript", "npm", "Testing"]
    }
  ];

  const pastProjects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      link: "https://github.com/ziad/ecommerce",
      tech: ["Vue.js", "Python", "PostgreSQL"]
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website for a design agency",
      link: "https://designagency.example.com",
      tech: ["HTML5", "SCSS", "JavaScript"]
    },
    {
      title: "Data Visualization Tool",
      description: "Interactive dashboard for business analytics",
      link: "https://github.com/ziad/data-viz",
      tech: ["D3.js", "React", "Express"]
    }
  ];

  const resources = [
    {
      title: "Blog",
      description: "Technical articles and thoughts on web development",
      link: "https://blog.ziad.dev",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Newsletter",
      description: "Weekly insights on tech trends and development tips",
      link: "https://newsletter.ziad.dev",
      icon: <Mail className="w-5 h-5" />
    },
    {
      title: "Code Snippets",
      description: "Useful code snippets and development tools",
      link: "https://snippets.ziad.dev",
      icon: <FolderOpen className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-display font-bold tracking-wider text-slate-800">
            Z I A D
          </h1>
          
          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('current-projects')}
              className="text-slate-600 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Current Projects
            </button>
            <button 
              onClick={() => scrollToSection('past-projects')}
              className="text-slate-600 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Past Projects
            </button>
            <button 
              onClick={() => scrollToSection('podcast')}
              className="text-slate-600 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Podcast
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('resources')}
              className="text-slate-600 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              Resources
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-slate-800 mb-6 tracking-tight">
            Hello, I'm <span className="text-purple-600">ZIAD</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate developer creating digital experiences and sharing knowledge through code, projects, and conversations.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => scrollToSection('current-projects')}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors duration-200 font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section id="current-projects" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <Briefcase className="w-8 h-8 text-purple-600 mr-4" />
            <h2 className="text-4xl font-bold text-slate-800">Current Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section id="past-projects" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <FolderOpen className="w-8 h-8 text-purple-600 mr-4" />
            <h2 className="text-4xl font-bold text-slate-800">Past Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section id="podcast" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <Mic className="w-8 h-8 text-purple-600 mr-4" />
            <h2 className="text-4xl font-bold text-slate-800">Podcast</h2>
          </div>
          <Card className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Tech Talks with ZIAD</h3>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                Join me for weekly conversations about technology, development, and the future of digital innovation. 
                I interview industry experts, share insights, and discuss the latest trends in tech.
              </p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://spotify.com/podcast/ziad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                >
                  Listen on Spotify
                </a>
                <a 
                  href="https://podcasts.apple.com/podcast/ziad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium"
                >
                  Apple Podcasts
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <Globe className="w-8 h-8 text-purple-600 mr-4" />
            <h2 className="text-4xl font-bold text-slate-800">Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-purple-100 rounded-full group-hover:bg-purple-200 transition-colors">
                      {resource.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
                  >
                    Visit <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-12">
            <User className="w-8 h-8 text-purple-600 mr-4" />
            <h2 className="text-4xl font-bold text-slate-800">Get In Touch</h2>
          </div>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, or just having a great conversation about technology.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:hello@ziad.dev" 
              className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a 
              href="https://github.com/ziad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors duration-200 font-medium"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 ZIAD. Built with passion and lots of coffee.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
