import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projectsData } from "@/data/projects";
import Button from "@/components/ui/Button";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-100 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Portfolio"
          title="17+ Real-World Full-Stack Systems"
          subtitle="End-to-end web applications engineered from database architecture to interactive user interfaces — SaaS, AI, Fintech, Real-Time & more."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Explore backend architectures, API routes & DB schemas across 17+ projects.
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Clean, structured, and production-ready code.
            </p>
          </div>
          <Button href="https://github.com/aminulislamdev" variant="dark" size="md">
            Visit GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}