import { User, Mail, Github, Mic } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-12">
          <User className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-4xl font-bold text-foreground">get in touch</h2>
        </div>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          contact me if you need help building digital tools
        </p>
        <div className="flex justify-center space-x-6">
          <a 
            href="mailto:hello@ziad.dev" 
            className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded matrix-border hover:bg-primary/80 transition-colors duration-200 font-medium"
          >
            <Mail className="w-5 h-5" />
            <span>email me</span>
          </a>
          <a 
            href="https://github.com/ziad" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors duration-200 font-medium"
          >
            <Github className="w-5 h-5" />
            <span>github</span>
          </a>
          <a 
            href="https://signal.me/#eu/ziad" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-2 border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors duration-200 font-medium"
          >
            <Mic className="w-5 h-5" />
            <span>signal</span>
          </a>
        </div>
      </div>
    </section>
  );
};