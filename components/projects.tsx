import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading eyebrow="Projects" heading="Things I've built." />

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
