import SectionTitle from "@/components/ui/SectionTitle";
import { skillsData, techStack } from "@/data/skills";

export default function Skills() {
  const categories = [
    "Frontend Dev", "Backend Dev", "Database", "DevOps",
    "Cloud", "AI & Automation", "UI/UX", "Testing"
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">
      <SectionTitle
        label="Expertise"
        title="Skills Dashboard"
        subtitle="Practical, job-ready skills built through real projects and consistent practice."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* বাম দিক: প্রোগ্রেস বার */}
        <div className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
            Core Technologies
          </h3>

          {skillsData.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-700 dark:text-slate-300">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${skill.color}`}
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* ডান দিক: ক্যাটাগরি ও টেক স্ট্যাক */}
        <div className="space-y-8">
          {/* ক্যাটাগরি */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
              Core Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <span key={i} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-800">
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* টেক স্ট্যাক */}
          <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
              Technologies I Use
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}