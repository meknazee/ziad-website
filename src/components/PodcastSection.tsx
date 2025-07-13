import { Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const PodcastSection = () => {
  return (
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
              <a 
                href="https://spotify.com/podcast/ziad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded matrix-border hover:bg-primary/80 transition-colors duration-200 font-medium"
              >
                listen on spotify
              </a>
              <a 
                href="https://podcasts.apple.com/podcast/ziad" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-accent text-accent-foreground px-6 py-3 rounded matrix-border hover:bg-accent/80 transition-colors duration-200 font-medium"
              >
                apple podcasts
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};