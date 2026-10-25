import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="group bg-white dark:bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 hover:border-blue-500/60 dark:hover:border-blue-500/60 hover:shadow-xl dark:hover:shadow-blue-950/30 transition-all duration-300 cursor-pointer flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      {/* Project Image / Visual Banner */}
      <div className="h-52 bg-slate-100 dark:bg-slate-900/80 relative overflow-hidden transition-colors duration-300 border-b border-slate-100 dark:border-slate-700/50">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 select-none"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-slate-500 dark:text-slate-400 font-bold text-lg tracking-wider uppercase">
              {project.title.split(" — ")[0]}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2.5 gap-2">
          <h3 className="font-bold text-lg leading-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-[10px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-2.5 py-1 rounded-full whitespace-nowrap border border-blue-200/80 dark:border-blue-800/80">
            {project.category}
          </span>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200/80 dark:border-slate-700/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Card Footer: Status & Links */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${
              project.status === "Completed"
                ? "text-emerald-600 dark:text-emerald-400"
                : project.status === "In Progress"
                ? "text-amber-600 dark:text-amber-400"
                : "text-slate-500"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                project.status === "Completed"
                  ? "bg-emerald-500"
                  : project.status === "In Progress"
                  ? "bg-amber-500"
                  : "bg-slate-400"
              }`}
            />
            {project.status}
          </span>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <GithubIcon size={16} />
              </a>
            )}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={16} />
              </a>
            )}

            <button
              type="button"
              onClick={onClick}
              aria-label={`View more details for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.97] transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}