import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* প্রজেক্টের ছবি */}
      <div className="h-48 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-300 dark:bg-slate-600 flex items-center justify-center text-slate-500 font-semibold text-sm">
          {/* এখানে চাইলে Image কম্পোনেন্ট ব্যবহার করে প্রজেক্টের আসল ছবি দিতে পারেন */}
          {project.title.split(' ')[0]} UI
        </div>
      </div>

      {/* কন্টেন্ট */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-bold text-lg leading-tight text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <span className="text-[10px] font-bold bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-full whitespace-nowrap">
            {project.category}
          </span>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline mt-auto"
        >
          View Project <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}