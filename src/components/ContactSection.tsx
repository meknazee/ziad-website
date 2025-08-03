import { User, Mail, Twitter, Mic, Zap } from "lucide-react";
export const ContactSection = () => {
  return <section id="contact" className="py-16 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-12">
          <User className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-4xl font-bold text-foreground">get in touch</h2>
        </div>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">contact me for business inquiries</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <a href="mailto:placeholder@email.com" className="flex flex-col items-center space-y-2 bg-primary text-primary-foreground px-6 py-4 rounded matrix-border hover:bg-primary/80 transition-colors duration-200 font-medium">
            <Mail className="w-6 h-6" />
            <span>email</span>
          </a>
          <a href="#signal-placeholder" className="flex flex-col items-center space-y-2 border border-primary text-primary px-6 py-4 rounded hover:bg-primary/10 transition-colors duration-200 font-medium">
            <Mic className="w-6 h-6" />
            <span>signal</span>
          </a>
          <a href="#nostr-placeholder" className="flex flex-col items-center space-y-2 border border-primary text-primary px-6 py-4 rounded hover:bg-primary/10 transition-colors duration-200 font-medium">
            <Zap className="w-6 h-6" />
            <span>nostr</span>
          </a>
          <a href="#twitter-placeholder" className="flex flex-col items-center space-y-2 border border-primary text-primary px-6 py-4 rounded hover:bg-primary/10 transition-colors duration-200 font-medium">
            <Twitter className="w-6 h-6" />
            <span>twitter</span>
          </a>
        </div>
      </div>
    </section>;
};