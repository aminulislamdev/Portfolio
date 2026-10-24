"use client";

import { useState, useMemo } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import TechIcon from "@/components/ui/TechIcon";
import { skillsData, skillCategories, SkillCategory, Skill } from "@/data/skills";
import { ArrowUpDown } from "lucide-react";

type SortOption = "proficiency" | "name-asc" | "name-desc";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"All" | SkillCategory>("All");
  const [sortBy, setSortBy] = useState<SortOption>("proficiency");

  // Filter and sort skills
  const filteredAndSortedSkills = useMemo(() => {
    let list: Skill[] = [...skillsData];

    // Filter by Category
    if (activeCategory !== "All") {
      list = list.filter((skill) => skill.category === activeCategory);
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === "proficiency") {
        return b.percent - a.percent;
      }
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    return list;
  }, [activeCategory, sortBy]);

  // Skill counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: skillsData.length,
    };
    skillsData.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <SectionTitle
        label="Expertise"
        title="Skills & Technologies"
        subtitle="Explore my technology stack categorized by domain. Filter and sort by proficiency or alphabetical order."
      />

      {/* Filter and Sort Toolbar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.key;
            const count = categoryCounts[cat.key] || 0;

            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/80"
                }`}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? "bg-blue-500/60 text-white"
                      : "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sorting Dropdown Control */}
        <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
          <label htmlFor="skill-sort" className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <ArrowUpDown size={14} />
            <span>Sort:</span>
          </label>
          <select
            id="skill-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 rounded-xl px-3 py-1.5 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-sm transition-colors"
          >
            <option value="proficiency">Proficiency (High → Low)</option>
            <option value="name-asc">Name (A → Z)</option>
            <option value="name-desc">Name (Z → A)</option>
          </select>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredAndSortedSkills.map((skill) => (
          <div
            key={skill.id}
            className="group bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-blue-950/20 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header with Icon, Name & Category Badge */}
              <div className="flex items-start justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-900/80 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm border border-slate-200/60 dark:border-slate-700 shrink-0">
                    <TechIcon name={skill.icon} size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">
                      {skill.category}
                    </span>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                    skill.level === "Advanced"
                      ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/60"
                      : skill.level === "Proficient"
                      ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/60"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  {skill.level}
                </span>
              </div>

              {/* Description */}
              {skill.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {skill.description}
                </p>
              )}
            </div>

            {/* Proficiency Meter */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 mt-auto">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1.5">
                <span className="text-[11px] text-slate-400 dark:text-slate-500">Proficiency</span>
                <span className="font-bold text-slate-800 dark:text-slate-200">{skill.percent}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700/80 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-2 rounded-full ${skill.color} transition-all duration-500`}
                  style={{ width: `${skill.percent}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Showing count indicator */}
      <div className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
        Showing <span className="font-semibold text-slate-700 dark:text-slate-300">{filteredAndSortedSkills.length}</span> of{" "}
        <span className="font-semibold text-slate-700 dark:text-slate-300">{skillsData.length}</span> technologies
        {activeCategory !== "All" && (
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="ml-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            (Reset to All)
          </button>
        )}
      </div>
    </section>
  );
}