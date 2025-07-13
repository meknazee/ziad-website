import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group matrix-card hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-primary/20">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors lowercase">
          {project.title.toLowerCase()}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed lowercase">
          {project.description.toLowerCase()}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="bg-primary/20 text-primary px-3 py-1 rounded text-sm font-medium border border-primary/30"
            >
              {tech.toLowerCase()}
            </span>
          ))}
        </div>
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
        >
          view project <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </CardContent>
    </Card>
  );
};