"use client";

import Image from "next/image";
import { Code2, ExternalLink, Mail, Download, Phone } from "lucide-react";
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
    <section id="hero" className="pt-20 pb-16 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 min-h-[90vh]">

      {/* বাম দিকের টেক্সট */}
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1.5 rounded-full text-xs font-bold border border-blue-100 dark:border-blue-800">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot"></span>
          Open to Internships & Junior Roles
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-[1.15] font-playfair tracking-tight text-slate-900 dark:text-white">
          Aspiring Full Stack<br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-blue-400">Developer</span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
          Diploma student in CST at Rajshahi Polytechnic Institute. I build modern, responsive web applications using React, Next.js, and TypeScript, and I am currently expanding my backend skills.
        </p>

        <div className="flex flex-wrap gap-3">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Learning Node.js"].map((tag) => (
            <span key={tag} className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold shadow-sm border border-slate-200 dark:border-slate-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-6 items-center">
          <Button href="#projects" variant="primary" size="lg" className="shadow-lg shadow-blue-600/20">
            View Projects
          </Button>

          <Button href="/cv" variant="outline" size="lg">
            <Download size={16} /> Download Resume
          </Button>

          <Button href="#contact" variant="outline" size="lg">
            <Mail size={16} /> Contact Me
          </Button>

          <div className="flex gap-3">
          <a href="https://github.com/aminulislamdev" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700">
            <GithubIcon size={20} />
          </a>
          <a href="https://www.linkedin.com/in/aminulislamjs/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all hover:-translate-y-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm border border-slate-200 dark:border-slate-700">
            <LinkedinIcon size={20} />
          </a>
          <a href="mailto:aminulislam424842@gmail.com" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700">
              <Mail size={20} />
            </a>
            <a href="https://wa.me/8801709150885" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:-translate-y-1 text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700">
              <Phone size={20} />
            </a>
        </div>
        </div>
      </div>

      {/* ✅ ডান দিকের ছবি ও স্টাইল */}
      <div className="flex-1 relative flex justify-center items-center">

        {/* পেছনের গ্লো/ব্লব ইফেক্ট */}
        <div className="absolute inset-0 bg-linear-to-tr from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-slate-800/50 rounded-full blur-3xl opacity-60 scale-90"></div>

        <div className="relative w-80 h-105 md:w-100 md:h-130">

          
          <div className="w-full h-full rounded-4xl overflow-hidden border-[6px] border-white dark:border-slate-800 shadow-2xl relative z-10">
            <Image
              src="/profile.jpg"
              alt="Aminul Islam"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* ✅ ফ্লোটিং কার্ড ১ (সুন্দরভাবে ছবির কর্নারে বসানো) */}
          <div className="absolute -left-6 md:-left-10 top-16 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-20 animate-float">
            <div className="bg-green-100 dark:bg-green-900/50 p-2.5 rounded-xl text-green-600 dark:text-green-400">
              <Code2 size={22} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-white">Frontend</p>
              <p className="text-[11px] font-medium text-slate-500">Completed</p>
            </div>
          </div>

          {/* ✅ ফ্লোটিং কার্ড ২ (সুন্দরভাবে ছবির কর্নারে বসানো) */}
          <div className="absolute -right-6 md:-right-10 bottom-24 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 z-20 animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="bg-blue-100 dark:bg-blue-900/50 p-2.5 rounded-xl text-blue-600 dark:text-blue-400">
              <ExternalLink size={22} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-white">Backend</p>
              <p className="text-[11px] font-medium text-slate-500">In Progress</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}