import { Briefcase } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { currentProjects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section id="current-projects" className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <Briefcase className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-4xl font-bold text-foreground">current projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};