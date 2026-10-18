import SectionTitle from "@/components/ui/SectionTitle";
import { skillsData } from "@/data/skills";

export default function Skills() {
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

        {/* ডান দিক: (পরবর্তী কমিটে যোগ হবে) */}
        <div className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
          <p className="text-slate-500 text-sm italic">Technologies will appear here...</p>
        </div>

      </div>
    </section>
  );
}