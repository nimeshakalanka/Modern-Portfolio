"use client";

import React from "react";
import { Education } from "@/data/profile";
import { GraduationCap, Award, BookOpen, MapPin } from "lucide-react";
import { Badge } from "./Badge";

interface TimelineProps {
  items: Education[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-200 dark:border-indigo-900/60 space-y-10 my-4">
      {items.map((item, index) => (
        <div key={index} className="relative group">
          {/* Milestone Node Dot */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 dark:border-indigo-500 flex items-center justify-center shadow-md">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
          </div>

          {/* Timeline Card */}
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm group-hover:border-indigo-300 dark:group-hover:border-indigo-700/60 transition-all">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">
                {item.period}
              </span>
              {item.gpa && (
                <Badge variant="emerald" size="sm">
                  GPA: {item.gpa}
                </Badge>
              )}
            </div>

            <h3 className="text-lg sm:text-xl font-heading font-bold text-slate-900 dark:text-white">
              {item.degree} — <span className="text-indigo-600 dark:text-indigo-400">{item.field}</span>
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 my-2">
              <span className="font-medium text-slate-800 dark:text-slate-200">
                {item.institution}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {item.location}
              </span>
            </div>

            {item.honors && (
              <div className="flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 mb-3">
                <Award className="w-3.5 h-3.5" />
                <span>{item.honors}</span>
              </div>
            )}

            {/* Highlights List */}
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                <span>Key Coursework & Leadership</span>
              </h4>
              <ul className="space-y-1.5">
                {item.highlights.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
