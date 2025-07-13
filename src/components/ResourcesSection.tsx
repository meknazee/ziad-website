import { Globe, Mail, FolderOpen, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { resources } from "@/data/projects";

export const ResourcesSection = () => {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'blog':
        return <Globe className="w-5 h-5" />;
      case 'newsletter':
        return <Mail className="w-5 h-5" />;
      case 'code snippets':
        return <FolderOpen className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section id="resources" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <Globe className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-4xl font-bold text-foreground">resources</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="group matrix-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/20 rounded border border-primary/30 group-hover:bg-primary/30 transition-colors">
                    {getIcon(resource.title)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors lowercase">
                  {resource.title.toLowerCase()}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed lowercase">
                  {resource.description.toLowerCase()}
                </p>
                <a 
                  href={resource.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  visit <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};