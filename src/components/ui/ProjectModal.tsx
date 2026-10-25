"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ExternalLink, CheckCircle2, Tag, AlertTriangle, Lightbulb } from "lucide-react";
import { Project } from "@/data/projects";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = originalOverflow; };
  }, [project]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-slate-900 rounded-3xl w-full max-w-5xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh] animate-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Scrollable body — single column on mobile, two columns on md+ */}
        <div className="flex flex-col md:flex-row overflow-y-auto md:overflow-hidden flex-1 min-h-0">

          {/* ── LEFT: Image + Challenges ── */}
          <div className="w-full md:w-[45%] md:overflow-y-auto bg-slate-50 dark:bg-slate-950/60 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex flex-col p-6 sm:p-8 gap-6">

            {/* Project image */}
            <div className="relative w-full min-h-[200px] sm:min-h-[260px] rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-contain p-4 select-none"
                  priority
                />
              ) : (
                <span className="text-2xl font-bold text-slate-400 tracking-wider uppercase">{project.title}</span>
              )}
            </div>

            {/* Challenges Faced */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-2xl p-5">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-3">
                  <AlertTriangle size={13} />
                  Challenges Faced
                </h4>
                <ul className="space-y-2.5">
                  {project.challenges.map((c, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="w-5 h-5 rounded-full bg-amber-200 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">{idx + 1}</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ── RIGHT: Details ── */}
          <div className="w-full md:w-[55%] md:overflow-y-auto p-6 sm:p-8 flex flex-col gap-5">

            {/* Category & Status badges */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/60">
                <Tag size={12} /> {project.category}
              </span>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                project.status === "Completed"
                  ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60"
                  : project.status === "In Progress"
                  ? "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/60"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700"
              }`}>
                <span className={`w-2 h-2 rounded-full ${project.status === "Completed" ? "bg-emerald-500" : project.status === "In Progress" ? "bg-amber-500" : "bg-slate-400"}`} />
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight pr-8">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                Main Technology Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-2.5 py-1 rounded-lg border border-blue-200 dark:border-blue-800/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2.5">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug">
                      <CheckCircle2 size={15} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future Plans */}
            {project.futurePlans && project.futurePlans.length > 0 && (
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-800/50 rounded-2xl p-5">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                  <Lightbulb size={13} />
                  Future Plans &amp; Improvements
                </h4>
                <ul className="space-y-2">
                  {project.futurePlans.map((plan, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            {(project.link || project.github) && (
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3 mt-auto">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 flex-1 min-w-[140px] py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/25"
                  >
                    <ExternalLink size={16} />
                    Live Project Link
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 flex-1 min-w-[140px] py-3 px-4 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 active:scale-[0.98] transition-all border border-slate-200 dark:border-slate-700"
                  >
                    <GithubIcon size={16} />
                    GitHub Repo (Client)
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
