"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { projectsData, Project } from "@/data/projects";
import { featuredSkillsList } from "@/data/skills";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { Badge } from "@/components/Badge";
import {
  ArrowRight,
  Mail,
  FileText,
  Sparkles,
  ExternalLink,
  Code2,
  Layers,
  Database,
  CheckCircle,
} from "lucide-react";

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <div className="space-y-24 sm:space-y-32 pb-20">
      {/* 1. Hero Section */}
      <section className="relative pt-12 sm:pt-20 lg:pt-24 overflow-hidden">
        {/* Ambient Gradient Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-indigo-500/20 via-cyan-400/15 to-transparent rounded-full blur-3xl opacity-70"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Availability Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/5 dark:bg-white/5 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-medium">{profileData.availability}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                  {profileData.name}
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400 font-heading">
                {profileData.title}
              </p>

              {/* Short Bio Paragraph */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {profileData.shortBio}
              </p>

              {/* Call to Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm sm:text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4 text-indigo-500" />
                  <span>Contact Me</span>
                </Link>

                <a
                  href={profileData.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors"
                  title="Download Curriculum Vitae (PDF)"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume / CV</span>
                </a>
              </div>
            </div>

            {/* Right Hero Graphic Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-1 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-indigo-700 shadow-2xl shadow-indigo-500/20">
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-950">
                  <Image
                    src="/avatar.svg"
                    alt={`${profileData.name} avatar`}
                    fill
                    priority
                    className="object-cover"
                  />
                  {/* Floating Micro Status Pill */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 text-xs flex items-center justify-between text-white">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Information Systems</span>
                    </span>
                    <span className="font-mono text-cyan-400 font-semibold">2026 Grad</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Quick Tech Stack Pills Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
            Core Technologies & Technical Expertise
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {featuredSkillsList.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md">
              A curated showcase of full-stack web applications emphasizing performance, accessibility, and modern UI engineering.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors self-start sm:self-auto"
          >
            <span>Explore all projects ({projectsData.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>
      </section>

      {/* 4. Skills & Capabilities Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
              Engineering Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Combining technical depth across frontend architecture, database design, and user-centered interface development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Frontend */}
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                Frontend Architecture
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Expertise in Next.js App Router, React 19, TypeScript, and Tailwind CSS. Crafting fluid, responsive interfaces adhering to strict WCAG 2.1 AA accessibility standards.
              </p>
            </div>

            {/* Card 2: Backend */}
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                Backend & Systems
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Relational schema modeling with SQL and PostgreSQL. Building fast REST endpoints with Python FastAPI and Next.js serverless route handlers.
              </p>
            </div>

            {/* Card 3: UI/UX & Design Systems */}
            <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 space-y-3 sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                UI/UX & Design Systems
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Translating complex domain requirements into cohesive design tokens, wireframes, and interactive Figma prototypes with design system consistency.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              <span>View full academic timeline & complete skills breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Quick CTA Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold tracking-tight">
              Have an opportunity or project in mind?
            </h2>
            <p className="text-xs sm:text-sm text-indigo-200">
              I am actively looking for software engineering and web development internships. Let&apos;s discuss how I can contribute to your team.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 text-indigo-600" />
          </Link>
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
