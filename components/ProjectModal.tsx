"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { X, ExternalLink, Github, CheckCircle2, Calendar, User, Tag } from "lucide-react";
import { Badge } from "./Badge";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Graphic Preview */}
        <div className="relative w-full h-56 sm:h-72 bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <Image
            src={project.image}
            alt={`${project.title} preview illustration`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-600 text-white tracking-wider uppercase mb-2 inline-block">
              {project.category}
            </span>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight"
            >
              {project.title}
            </h2>
            <p className="text-sm text-slate-300 mt-1">{project.tagline}</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Metadata Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 text-xs">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <User className="w-4 h-4 text-indigo-500" />
              <span>
                <strong>Role:</strong> {project.role}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Calendar className="w-4 h-4 text-indigo-500" />
              <span>
                <strong>Timeline:</strong> {project.year}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 col-span-2 sm:col-span-1">
              <Tag className="w-4 h-4 text-indigo-500" />
              <span>
                <strong>Category:</strong> {project.category}
              </span>
            </div>
          </div>

          {/* Deep-Dive Case Study Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Project Architecture & Overview
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.longDescription}
            </p>
          </div>

          {/* Key Achievements & Technical Highlights */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Technical Highlights & Engineering Decisions
            </h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02]"
            >
              <span>Live Demonstration</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-sm transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
