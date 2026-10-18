"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Mail, Phone, MapPin } from "lucide-react";

// ✅ কাস্টম SVG আইকন
const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 py-10 px-4 md:px-0 print:bg-white print:py-0">

      {/* টপ অ্যাকশন বার (প্রিন্টে দেখা যাবে না) */}
      <div className="max-w-4xl mx-auto mb-6 flex justify-between items-center print:hidden">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
        >
          <Printer size={16} /> Download PDF
        </button>
      </div>

      {/* মূল CV কন্টেইনার */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-950 print:bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none">

        {/* হেডার সেকশন */}
        <div className="bg-slate-900 text-white p-8 md:p-12 print:text-black print:bg-white print:border-b">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair tracking-tight mb-2">Md. Aminul Islam Mahi</h1>
          <p className="text-blue-400 print:text-blue-600 font-semibold tracking-widest uppercase text-sm mb-6">
            Aspiring Full Stack Developer | Frontend Completed, Backend in Progress
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300 print:text-slate-600">
            <span className="flex items-center gap-2"><MapPin size={14} /> Rajshahi, Bangladesh</span>
            <span className="flex items-center gap-2"><Phone size={14} /> +880 1709150885</span>
            <span className="flex items-center gap-2"><Mail size={14} /> aminulislam424842@gmail.com</span>
            <span className="flex items-center gap-2"><GithubIcon size={14} /> github.com/aminulislam424842</span>
            <span className="flex items-center gap-2"><LinkedinIcon size={14} /> linkedin.com/in/aminulislamjs/</span>
          </div>
        </div>

        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-10 print:grid-cols-3 print:gap-6">

          {/* বাম কলাম (প্রোফাইল, স্কিলস, এডুকেশন, অ্যাচিভমেন্ট) */}
          <div className="space-y-8 md:col-span-1">

            {/* About */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Professional Summary</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed print:text-slate-700">
                Passionate Full Stack Developer specializing in building modern, responsive, and scalable web applications. Proficient in React, Next.js, Node.js, and MongoDB with a strong focus on SaaS products, dashboards, and AI integrations. Always eager to learn and build real-world solutions.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Technical Skills</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">Frontend</span>
                  <p className="text-slate-600 dark:text-slate-400">React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3, JavaScript</p>
                </div>
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">Backend</span>
                  <p className="text-slate-600 dark:text-slate-400">Node.js, Express, NestJS, REST API, JWT Auth</p>
                </div>
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">Database</span>
                  <p className="text-slate-600 dark:text-slate-400">MongoDB, PostgreSQL, Prisma ORM</p>
                </div>
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">Tools & Others</span>
                  <p className="text-slate-600 dark:text-slate-400">Git, GitHub, Docker, AWS, OpenAI API, Socket.io</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Education & Training</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white print:text-black">Diploma in CST</h4>
                  <p className="text-xs text-slate-500 mt-1">Rajshahi Polytechnic Institute</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Current Semester: 5th</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white print:text-black">AI-Driven Full Stack Web Engineer</h4>
                  <p className="text-xs text-slate-500 mt-1">Programming Hero (Batch-14)</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">Frontend Completed · Backend in Progress</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Languages</h3>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                <li className="flex justify-between"><span>Bengali</span> <span className="font-semibold text-slate-800 dark:text-slate-200">Native</span></li>
                <li className="flex justify-between"><span>English</span> <span className="font-semibold text-slate-800 dark:text-slate-200">Intermediate</span></li>
              </ul>
            </div>

          </div>

          {/* ডান কলাম (প্রজেক্ট এবং সার্টিফিকেশন) */}
          <div className="space-y-8 md:col-span-2">

            {/* Projects - ✅ হোম পেজের প্রজেক্টগুলো এখানে বসানো হলো */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Selected Projects</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-white print:text-black">HireNet — Job Board & Admin Portal</h4>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 mb-2">Next.js · Node.js · MongoDB · JWT</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 leading-relaxed mb-1">
                    Dual-dashboard job board for seekers & employers with role-based access, job moderation, and applicant tracking pipeline.
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    <a href="https://hirenet.vercel.app" target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-white print:text-black">TaskFlow — Project Management SaaS</h4>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 mb-2">Next.js · Node.js · MongoDB · JWT Auth</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 leading-relaxed mb-1">
                    Role-based project management with Admin/User access, JWT auth, real-time CRUD, and relational MongoDB schema.
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    <a href="https://taskflow.vercel.app" target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-white print:text-black">GenAI — Content Generation Platform</h4>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 mb-2">React · Express.js · PostgreSQL · OpenAI API</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 leading-relaxed mb-1">
                    AI-powered SaaS with OpenAI API integration, credit-based subscription system in PostgreSQL with Prisma ORM.
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    <a href="https://genai-platform.vercel.app" target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-white print:text-black">StockPulse — E-Commerce Inventory</h4>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 mb-2">Tailwind CSS · NestJS · Prisma · MongoDB</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 leading-relaxed mb-1">
                    Inventory dashboard for thousands of products with real-time analytics, low-stock alerts, and dynamic filtering.
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    <a href="https://stockpulse.vercel.app" target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-white print:text-black">ChatSphere — Real-Time Chat</h4>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 mb-2">React · Socket.io · Node.js · MongoDB</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 leading-relaxed mb-1">
                    WebSocket chat with private/group messaging, online status, typing indicators, and file sharing.
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    <a href="https://chatsphere.vercel.app" target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-white print:text-black">DevBlog — Markdown Blog Platform</h4>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 mb-2">Next.js · MDX · Prisma · PostgreSQL</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 leading-relaxed mb-1">
                    Developer blog with custom Markdown editor, syntax highlighting, SEO meta tags, and admin panel with draft scheduling.
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    <a href="https://devblog.vercel.app" target="_blank" className="text-blue-500 hover:underline">Live Demo</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Certifications & Learning</h3>
              <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 space-y-1">
                <li>Programming Hero — AI-Driven Full Stack Web Engineer (Batch-14), ongoing</li>
                <li>Responsive Web Design — freeCodeCamp</li>
                <li>Introduction to JavaScript for Front-End Engineers — CodeSignal</li>
              </ul>
            </div>

            {/* Career Objective */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Career Objective</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 leading-relaxed">
                Seeking a Junior Frontend Developer, Junior Web Developer, or internship role while progressing toward full-stack development.
              </p>
            </div>

          </div>
        </div>
      </div>
      <style jsx global>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          nav, footer { display: none !important; }
        }
      `}</style>
    </div>
  );
}