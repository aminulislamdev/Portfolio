import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

// কাস্টম Github আইকন
const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-slate-900 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500 transition-all duration-300 flex flex-col">
      {/* প্রজেক্টের ছবি বা প্লেসহোল্ডার */}
      <div className="h-48 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-700/50 flex items-center justify-center text-slate-400 font-semibold text-sm">
          {project.title.split(' — ')[0]} Preview
        </div>
      </div>

      {/* কন্টেন্ট */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-bold text-lg leading-tight text-white">
            {project.title}
          </h3>
          <span className="text-[10px] font-bold bg-blue-900/50 text-blue-400 px-2 py-1 rounded-full whitespace-nowrap border border-blue-800">
            {project.category}
          </span>
        </div>

        <p className="text-sm text-slate-400 line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-2 py-1 rounded-md border border-slate-700">
              {tag}
            </span>
          ))}
        </div>

        {/* অ্যাকশন বাটন */}
        <div className="mt-auto pt-4 border-t border-slate-700/50 flex items-center justify-between">
          <span className={`text-[10px] font-bold uppercase tracking-wider ${project.status === 'Completed' ? 'text-green-500' :
              project.status === 'In Progress' ? 'text-amber-500' : 'text-slate-500'
            }`}>
            {project.status}
          </span>

          <div className="flex gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub Repository">
                <GithubIcon size={16} />
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors" aria-label="Live Demo">
                <ExternalLink size={16} />
              </a>
            )}
            {!project.github && !project.link && (
              <span className="text-xs text-slate-500 italic">Coming Soon</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}