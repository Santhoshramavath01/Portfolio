"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, PlayCircle } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectPreview } from "@/components/project-preview";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group grid grid-cols-1 items-center gap-8 rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:border-border-strong hover:shadow-[0_20px_70px_-35px_rgba(99,102,241,0.35)] sm:p-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* =====================================================
          PROJECT IMAGE / PREVIEW
          ===================================================== */}
      <div className={reversed ? "lg:order-2" : "lg:order-1"}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card-secondary">

          {/* FINOVA — REAL IMAGE */}
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} dashboard`}
              fill
              priority={index === 0}
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          ) : (
            /* SMART CAMPUS — ANIMATED DASHBOARD */
            <ProjectPreview
              label={project.name}
              index={index}
            />
          )}

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>

      {/* =====================================================
          PROJECT CONTENT
          ===================================================== */}
      <div className={reversed ? "lg:order-1" : "lg:order-2"}>
        <h3 className="font-display text-[20px] font-medium leading-snug text-fg sm:text-[22px]">
          {project.name}
        </h3>

        <p className="mt-3 text-[14.5px] leading-relaxed text-fg-secondary">
          {project.description}
        </p>

        {/* FEATURES */}
        <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
          {project.features.slice(0, 8).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 font-mono text-[12px] text-fg-muted"
            >
              <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-fg-muted" />
              {feature}
            </li>
          ))}
        </ul>

        {/* TECHNOLOGIES */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-fg-secondary transition-colors duration-300 group-hover:border-border-strong"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-mono text-[12.5px] text-fg transition-all duration-300 hover:border-border-strong hover:bg-card-secondary"
            >
              <Github size={14} />
              GitHub

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
          )}

          {project.demoVideo && (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 font-mono text-[12.5px] font-medium text-white transition-all duration-300 hover:bg-accent-deep"
            >
              <PlayCircle size={14} />

              Demo Video

              <ArrowUpRight
                size={13}
                className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}