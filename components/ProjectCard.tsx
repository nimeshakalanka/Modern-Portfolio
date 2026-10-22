"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ExternalLink, Github, Info } from "lucide-react";
import { Badge } from "./Badge";

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900/90 shadow-sm hover:shadow-xl hover:border-indigo-400 dark:hover:border-indigo-600 transition-all duration-300 overflow-hidden hover:-translate-y-1.5"
    >
      {/* Project Thumbnail Image */}
      <div className="relative w-full h-48 sm:h-52 bg-slate-950 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3">
          <Badge variant="primary" size="sm" className="bg-slate-950/80 backdrop-blur-md text-white border-white/20">
            {project.category}
          </Badge>
        </div>

        {/* Featured Star/Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 uppercase tracking-wider font-mono">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Content Area */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        <div className="flex-grow space-y-2.5">
          <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] text-slate-500 dark:text-slate-500 self-center">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => onOpenModal(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-1 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Read case study details"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Details</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all"
              title="GitHub Repository"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium shadow-sm transition-all hover:shadow-indigo-500/20"
              title="Open Live Demonstration"
            >
              <span>Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
