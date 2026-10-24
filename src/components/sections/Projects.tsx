"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { featuredProjects, Project } from "@/data/projects";
import Button from "@/components/ui/Button";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="py-20 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <SectionTitle
            label="Portfolio"
            title="Featured Projects"
            subtitle="Explore real-world web applications I have built. Click on any card for full architecture details and key features."
          />

          {/* 4 Featured Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

          {/* GitHub CTA Banner */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left transition-colors duration-300">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Explore more code repositories.
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Clean, structured, and version-controlled with Git on GitHub.
              </p>
            </div>
            <Button
              href="https://github.com/aminulislamdev"
              variant="primary"
              size="md"
            >
              Visit GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}