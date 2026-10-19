import SectionTitle from "@/components/ui/SectionTitle";
import { educationData, journeyData } from "@/data/timeline";
import { GraduationCap, Code2, Star, Rocket } from "lucide-react";

export default function Timeline() {

  const getTimelineStyle = (color: string) => {
    switch (color) {
      case "brand":
        return { bg: "bg-blue-600", shadow: "shadow-blue-600/30", icon: <GraduationCap size={18} /> };
      case "blue":
        return { bg: "bg-sky-500", shadow: "shadow-sky-500/30", icon: <Code2 size={18} /> };
      case "purple":
        return { bg: "bg-purple-500", shadow: "shadow-purple-500/30", icon: <Star size={18} /> };
      case "green":
        return { bg: "bg-emerald-500", shadow: "shadow-emerald-500/30", icon: <Rocket size={18} /> };
      default:
        return { bg: "bg-slate-500", shadow: "shadow-slate-500/30", icon: <Code2 size={18} /> };
    }
  };

  return (
    <section id="timeline" className="py-20 px-6 max-w-4xl mx-auto space-y-20">

      <div>
        <SectionTitle
          label="Education"
          title="General Education"
          subtitle="My academic background and formal qualifications."
        />

        <div className="relative mt-12">
          {educationData.map((item, index) => {
            const style = getTimelineStyle(item.color);
            const isLast = index === educationData.length - 1;

            return (
              <div key={item.id} className="relative pl-12 md:pl-16 pb-8">
                {!isLast && (
                  <div className="absolute left-5 md:left-7 top-10 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                )}
                <div className={`absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full ${style.bg} text-white flex items-center justify-center shadow-lg ${style.shadow} z-10`}>
                  {style.icon}
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600">{item.year}</span>
                    <span className="text-xs text-slate-500 font-medium">{item.phase}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ ২. ডেভেলপার জার্নি */}
      <div>
        <SectionTitle
          label="My Path"
          title="Developer Journey"
          subtitle="A timeline of my continuous learning and growth in software engineering."
        />

        <div className="relative mt-12">
          {journeyData.map((item, index) => {
            const style = getTimelineStyle(item.color);
            const isLast = index === journeyData.length - 1;

            return (
              <div key={item.id} className="relative pl-12 md:pl-16 pb-8">
                {!isLast && (
                  <div className="absolute left-5 md:left-7 top-10 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                )}
                <div className={`absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 rounded-full ${style.bg} text-white flex items-center justify-center shadow-lg ${style.shadow} z-10`}>
                  {style.icon}
                </div>
                <div className={`bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl border ${isLast ? 'border-emerald-500/50 dark:border-emerald-500/50 shadow-md shadow-emerald-500/10' : 'border-slate-200 dark:border-slate-700'}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-500">{item.year}</span>
                    {item.phase === "5th Semester" ? (
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                        {item.phase}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-500 font-medium">{item.phase}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}