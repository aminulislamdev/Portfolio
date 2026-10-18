"use client";

import Image from "next/image";
import { Code2, ExternalLink, Download } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 min-h-screen">

      {/* বাম দিকের কন্টেন্ট */}
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold border border-blue-100 dark:border-blue-800">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-dot"></span>
          Available for Freelance
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight font-playfair tracking-tight">
          Transforming Ideas<br />
          into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">SaaS Products</span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
          CST Student | Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, MongoDB, AI Integration, and scalable SaaS applications.
        </p>

        <div className="flex flex-wrap gap-3">
          {["Full Stack Dev", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Button href="#contact" variant="primary" size="lg">
            Hire Me
          </Button>
          <Button href="#projects" variant="outline" size="lg">
            View Projects
          </Button>
          <Button href="/cv.html" variant="dark" size="lg">
            <Download size={16} /> Resume
          </Button>
        </div>
      </div>

      {/* ডান দিকের ছবি ও ফ্লোটিং কার্ড */}
      <div className="flex-1 relative animate-float">
        <div className="w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative mx-auto">
          <Image
            src="/profile.jpg"
            alt="Aminul Islam"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* ফ্লোটিং কার্ড ১ */}
        <div className="absolute -left-4 md:-left-10 top-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
          <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg text-green-600 dark:text-green-400">
            <Code2 size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800 dark:text-white">Features Shipped</p>
            <p className="text-[10px] text-slate-500">50+ production features</p>
          </div>
        </div>

        {/* ফ্লোটিং কার্ড ২ */}
        <div className="absolute -right-4 md:-right-8 bottom-20 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
          <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg text-blue-600 dark:text-blue-400">
            <ExternalLink size={20} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-800 dark:text-white">API Integration</p>
            <p className="text-[10px] text-slate-500">REST API & AI Services</p>
          </div>
        </div>
      </div>

    </section>
  );
}