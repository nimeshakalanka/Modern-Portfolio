import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { Timeline } from "@/components/Timeline";
import { SkillCategorySection } from "@/components/SkillCategorySection";
import {
  FileText,
  Download,
  GraduationCap,
  Sparkles,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Me & Education",
  description:
    "Learn more about Alex Morgan's background, education at State University of Technology, coursework, and technical skills.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20">
      {/* 1. Header & Personal Profile Overview */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Biography & Mission</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
          About Me
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          I bridge technical systems engineering and modern front-end design to craft digital experiences that are clean, resilient, and inclusive.
        </p>

        {/* Profile Card & Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-start">
          {/* Left Column: Visual Card */}
          <div className="lg:col-span-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-6">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <Image
                src="/avatar.svg"
                alt={`${profileData.name} portrait`}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="space-y-3">
              <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
                {profileData.name}
              </h2>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                {profileData.title}
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Class of 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a
                    href={`mailto:${profileData.email}`}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {profileData.email}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
                <a
                  href={profileData.socialLinks.find((s) => s.icon === "github")?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.socialLinks.find((s) => s.icon === "linkedin")?.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  aria-label="Email directly"
                  className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Download CV Action */}
              <div className="pt-2">
                <a
                  href={profileData.resumeUrl}
                  download="Alex_Morgan_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.01]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Full Narrative Bio */}
          <div className="lg:col-span-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-5">
            <h3 className="text-xl font-heading font-bold text-slate-900 dark:text-white">
              My Journey in Tech & Software Architecture
            </h3>
            <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {profileData.fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Principles Callouts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Performance First
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Optimized bundles, zero CLS, sub-100ms response targets.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  Universal a11y
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  100% keyboard navigable, WCAG 2.1 AA certified markup.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Clean Architecture
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Type-safe TypeScript, single responsibility components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Education & Academic Timeline */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Milestones</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
              Education & Qualifications
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            University degree progress, honors, and verified coursework
          </p>
        </div>

        <Timeline items={profileData.education} />
      </section>

      {/* 3. Comprehensive Skills Breakdown by Category */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Technical Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 dark:text-white tracking-tight">
              Skills Grouped by Domain
            </h2>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Visual proficiency metrics and production practical experience
          </p>
        </div>

        <SkillCategorySection />
      </section>

      {/* 4. Bottom Download CV CTA */}
      <section className="rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-r from-indigo-50 dark:from-indigo-950/40 to-cyan-50 dark:to-cyan-950/20 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="space-y-1">
          <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
            Need an offline summary?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Download my complete academic CV formatted for HR screening and hiring managers.
          </p>
        </div>

        <a
          href={profileData.resumeUrl}
          download="Alex_Morgan_Resume.pdf"
          className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all hover:scale-105"
        >
          <FileText className="w-4 h-4" />
          <span>Download CV (PDF)</span>
        </a>
      </section>
    </div>
  );
}
