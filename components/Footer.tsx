"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950 mt-auto transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Bio / Tagline */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-slate-900 dark:text-white font-heading font-bold text-lg">
              <span>{profileData.name}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-normal">
                Portfolio
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {profileData.tagline}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Task 1: Personal Portfolio Website • University Coursework Submission
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  About & Background
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Projects Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Contact */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect
            </h3>
            <div className="flex items-center gap-3">
              <a
                href={profileData.socialLinks.find((s) => s.icon === "github")?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 flex items-center justify-center transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.socialLinks.find((s) => s.icon === "linkedin")?.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Send direct email"
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 flex items-center justify-center transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500 pt-1">
              {profileData.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} {profileData.name}. Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>using Next.js & Tailwind CSS.</span>
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
