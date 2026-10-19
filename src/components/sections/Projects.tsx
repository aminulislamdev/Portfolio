import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { featuredProjects, roadmapProjects } from "@/data/projects";
import Button from "@/components/ui/Button";

export default function Projects() {
  return (
    // ✅ bg-slate-50 (লাইট) এবং dark:bg-slate-950 (ডার্ক) দেওয়া হলো
    <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* Featured Projects */}
        <SectionTitle
          label="Portfolio"
          title="Featured Projects"
          subtitle="Real-world applications I have built to master frontend development and UI/UX principles."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

       
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left mb-24 transition-colors duration-300">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
              Explore my code repositories.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Clean, structured, and version-controlled with Git.
            </p>
          </div>
          <Button href="https://github.com/aminulislamdev" variant="primary" size="md">
            Visit GitHub
          </Button>
        </div>

        {/* Future Roadmap Section */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-16 transition-colors duration-300">
          <SectionTitle
            label="Coming Soon"
            title="Project Roadmap"
            subtitle="Projects I am planning to build as I progress through my backend and full-stack learning journey."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80">
            {roadmapProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}