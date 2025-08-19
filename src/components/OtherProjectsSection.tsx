import { FolderOpen } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { otherProjects } from "@/data/projects";

export const OtherProjectsSection = () => {
  return (
    <section id="other-projects" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <FolderOpen className="w-8 h-8 text-primary mr-4" />
          <h2 className="text-4xl font-bold text-foreground">other projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};