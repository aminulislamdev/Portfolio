"use client";

import Image from "next/image";
import { Code2, ExternalLink, Mail } from "lucide-react";
import Button from "@/components/ui/Button";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 min-h-screen">

      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold border border-blue-100 dark:border-blue-800">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot"></span>
          Open to Internships & Junior Roles
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-playfair tracking-tight text-slate-900 dark:text-white">
          Aspiring Full Stack<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">Developer</span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
          Diploma student in CST at Rajshahi Polytechnic Institute. I build modern, responsive web applications using React, Next.js, and TypeScript, and I am currently expanding my backend skills.
        </p>

        <div className="flex flex-wrap gap-3">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Learning Node.js"].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4 items-center">
          <Button href="#projects" variant="primary" size="lg">
            View Projects
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            <Mail size={16} /> Contact Me
          </Button>

          <div className="flex gap-3 ml-2">
            <a href="https://github.com/aminulislamdev" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-700 dark:text-slate-300">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aminulislamjs/" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
              <LinkedinIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex-1 relative animate-float">
        <div className="w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative mx-auto bg-linear-to-br from-blue-100 to-blue-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
          <Image
            src="/profile.jpg"
            alt="Aminul Islam"
            fill
            className="object-cover z-10"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <span className="text-blue-500 dark:text-blue-400 font-bold text-2xl z-0 absolute">
            AI
          </span>
        </div>

        <div className="absolute -left-4 md:-left-10 top-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
          <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg text-green-600 dark:text-green-400">
            <Code2 size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800 dark:text-white">Frontend</p>
            <p className="text-[10px] text-slate-500">Completed</p>
          </div>
        </div>

        <div className="absolute -right-4 md:-right-8 bottom-20 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg text-blue-600 dark:text-blue-400">
            <ExternalLink size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800 dark:text-white">Backend</p>
            <p className="text-[10px] text-slate-500">In Progress</p>
          </div>
        </div>
      </div>

    </section>
  );
}