"use client";

import React, { useState } from "react";
import { skillsData, SkillCategory } from "@/data/skills";
import { Badge } from "./Badge";
import { Code, Database, Wrench, Palette, Sparkles } from "lucide-react";

export const SkillCategorySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code className="w-5 h-5 text-indigo-500" />,
    backend: <Database className="w-5 h-5 text-cyan-500" />,
    tools: <Wrench className="w-5 h-5 text-emerald-500" />,
    design: <Palette className="w-5 h-5 text-purple-500" />,
  };

  const filteredCategories: SkillCategory[] =
    selectedCategory === "all"
      ? skillsData
      : skillsData.filter((cat) => cat.categoryKey === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            selectedCategory === "all"
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
              : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
          }`}
        >
          All Domains
        </button>
        {skillsData.map((cat) => (
          <button
            key={cat.categoryKey}
            type="button"
            onClick={() => setSelectedCategory(cat.categoryKey)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              selectedCategory === cat.categoryKey
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>{cat.title}</span>
          </button>
        ))}
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.categoryKey}
            className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all"
          >
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800/80 mb-5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                {categoryIcons[category.categoryKey] || <Sparkles className="w-5 h-5 text-indigo-500" />}
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Skills List with Proficiency Meters */}
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      {skill.featured && (
                        <Badge variant="primary" size="sm">
                          Core
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 dark:text-slate-400">{skill.level}</span>
                      <span className="font-mono text-slate-700 dark:text-slate-300 font-medium">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar Track */}
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                      role="progressbar"
                      aria-valuenow={skill.proficiency}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`${skill.name} proficiency`}
                    />
                  </div>

                  {/* Skill Context / Description */}
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
