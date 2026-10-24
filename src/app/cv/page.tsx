"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Printer, Mail, Phone, MapPin, Globe } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-slate-100 print:bg-white py-8 print:py-0 px-4 print:px-0">
      {/* Top Action Bar */}
      <div className="max-w-[210mm] mx-auto mb-6 flex justify-between items-center print:hidden">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 cursor-pointer"
        >
          <Printer size={16} /> Download PDF
        </button>
      </div>

      {/* Main A4 CV Container */}
      <div className="w-[210mm] min-h-[297mm] mx-auto bg-white shadow-xl print:shadow-none p-9 print:p-[10mm] text-slate-800 box-border flex flex-col justify-between">
        {/* Header Section */}
        <div className="flex justify-between items-start border-b-2 border-slate-800 pb-3 mb-3.5 shrink-0">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-0.5">Md. Aminul Islam Mahi</h1>
            <h2 className="text-lg font-semibold text-blue-600 mb-2.5">Aspiring Full Stack Developer</h2>

            <div className="grid grid-cols-2 gap-y-1.5 gap-x-4 text-[12px] text-slate-600">
              <span className="flex items-center gap-1.5"><MapPin size={13} className="text-blue-600 shrink-0" /> Rajshahi, Bangladesh</span>
              <a href="tel:+8801709150885" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"><Phone size={13} className="text-blue-600 shrink-0" /> +880 1709150885</a>
              <a href="mailto:aminulislam424842@gmail.com" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"><Mail size={13} className="text-blue-600 shrink-0" /> aminulislam424842@gmail.com</a>
              <a href="https://github.com/aminulislamdev" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"><GithubIcon size={13} /> github.com/aminulislamdev</a>
              <a href="https://www.linkedin.com/in/aminulislamjs/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"><LinkedinIcon size={13} /> linkedin.com/in/aminulislamjs/</a>
              <a href="https://aminul-seven.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"><Globe size={13} className="text-blue-600 shrink-0" /> aminul-seven.vercel.app</a>
            </div>
          </div>

          <div className="w-28 h-28 ml-5 relative rounded-lg overflow-hidden border border-slate-200 shrink-0 shadow-sm">
            <Image
              src="/profile.jpg"
              alt="Aminul Islam"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* 2-Column Body Layout */}
        <div className="grid grid-cols-3 gap-6 flex-1">
          {/* Left Column (1/3 width) */}
          <div className="col-span-1 space-y-4">
            {/* Technical Skills */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Technical Skills</h3>
              <div className="space-y-2.5 text-[12px]">
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Frontend</span>
                  <p className="text-slate-600 leading-snug">React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3, DaisyUI</p>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Backend</span>
                  <p className="text-slate-600 leading-snug">Node.js, Express.js, REST API, JWT Auth, Socket.io</p>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Database & Tools</span>
                  <p className="text-slate-600 leading-snug">MongoDB, Git, GitHub, VS Code, Vercel, OpenAI API</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Education</h3>
              <div className="space-y-1.5 text-[12px]">
                <div>
                  <h4 className="font-bold text-slate-900 text-[13px]">Diploma in CST</h4>
                  <p className="text-slate-600">Rajshahi Polytechnic Institute</p>
                  <p className="text-slate-500">Current: 6th Semester</p>
                  <p className="text-slate-500">Expected Graduation: 2027</p>
                </div>
              </div>
            </div>

            {/* Certifications & Courses */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Certifications</h3>
              <ul className="text-[11.5px] text-slate-600 space-y-2 leading-tight">
                <li>
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-800 text-[12px]">Programming Hero</strong>
                    <span className="text-[9px] font-bold text-amber-600 bg-amber-50 px-1 py-0.5 rounded border border-amber-200">Ongoing</span>
                  </div>
                  <div>Full Stack Web Engineer</div>
                </li>

                <li>
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-800 text-[12px]">freeCodeCamp</strong>
                    <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1 py-0.5 rounded border border-green-200">Certified</span>
                  </div>
                  <div>Responsive Web Design</div>
                </li>

                <li>
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-800 text-[12px]">freeCodeCamp</strong>
                    <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1 py-0.5 rounded border border-green-200">Certified</span>
                  </div>
                  <div>Front End Development Libraries</div>
                </li>

                <li>
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-800 text-[12px]">CodeSignal</strong>
                    <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1 py-0.5 rounded border border-green-200">Certified</span>
                  </div>
                  <div>Intro to JavaScript for Front-End</div>
                </li>

                <li>
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-800 text-[12px]">CodeSignal</strong>
                    <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1 py-0.5 rounded border border-green-200">Certified</span>
                  </div>
                  <div>Advanced Prompt Engineering</div>
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Languages</h3>
              <ul className="text-[12px] text-slate-600 space-y-1">
                <li className="flex justify-between"><span>Bangla</span> <span className="font-semibold text-slate-700">Native</span></li>
                <li className="flex justify-between"><span>English</span> <span className="font-semibold text-slate-700">Intermediate</span></li>
                <li className="flex justify-between"><span>Hindi</span> <span className="font-semibold text-slate-700">Conversational (60–70%)</span></li>
              </ul>
            </div>

            {/* Key Strengths */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Key Strengths</h3>
              <ul className="text-[12px] text-slate-600 space-y-1 leading-tight">
                <li>• Problem-Solving Mindset</li>
                <li>• Fast Learner & Adaptable</li>
                <li>• Clean Code & Reusable Components</li>
              </ul>
            </div>
          </div>

          {/* Right Column (2/3 width) */}
          <div className="col-span-2 space-y-4">
            {/* Professional Summary */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">Professional Summary</h3>
              <p className="text-[12px] text-slate-600 leading-relaxed">
                Passionate Full Stack Developer with a solid foundation in frontend architecture and growing expertise in backend engineering. Experienced in building responsive, scalable web applications using React, Next.js, and Node.js. Currently pursuing a Diploma in CST at Rajshahi Polytechnic Institute and seeking a Junior Developer or Internship role to contribute to production-level applications.
              </p>
            </div>

            {/* Projects (Actual Curated Projects Only) */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">Projects</h3>

              <div className="space-y-3 text-[12px]">
                {/* 1. Bazardor */}
                <div>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-bold text-slate-900 text-[13px]">Bazardor — Market Price Tracking Platform</h4>
                    <span className="text-blue-600 font-semibold text-[11px]">Next.js · TypeScript · Tailwind · MongoDB</span>
                  </div>
                  <p className="text-slate-600 leading-snug mb-1">
                    A Bengali-first market price tracking platform that helps users explore daily commodity prices and analyze trends.
                  </p>
                  <p className="text-slate-600 text-[11.5px] leading-snug">
                    <strong className="font-semibold text-slate-800">Features:</strong> Live price ticker with Bengali numerals, top price risers/fallers, protected product details with min/avg/max pricing, price trends for day/week/month.
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Live: <a href="https://bazardor-nu.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">bazardor-nu.vercel.app</a>
                  </p>
                </div>

                {/* 2. FitLog */}
                <div>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-bold text-slate-900 text-[13px]">FitLog — Workout Library & Routine Planner</h4>
                    <span className="text-blue-600 font-semibold text-[11px]">React · TypeScript · Tailwind · LocalStorage</span>
                  </div>
                  <p className="text-slate-600 leading-snug mb-1">
                    A responsive workout management application for exploring exercises, logging routines, and organizing daily workout plans.
                  </p>
                  <p className="text-slate-600 text-[11.5px] leading-snug">
                    <strong className="font-semibold text-slate-800">Features:</strong> 12 workout routines with images and stats, custom daily routine planner, duration/calorie filters, persistent local storage state.
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Live: <a href="https://fitlog-ph-s.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">fitlog-ph-s.vercel.app</a> | Code: <a href="https://github.com/aminulislamdev/Fitlog" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">github.com/aminulislamdev/Fitlog</a>
                  </p>
                </div>

                {/* 3. Book Vibe */}
                <div>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-bold text-slate-900 text-[13px]">Book Vibe — Reading Progress & Book Discovery</h4>
                    <span className="text-blue-600 font-semibold text-[11px]">Next.js · React · TypeScript · Tailwind</span>
                  </div>
                  <p className="text-slate-600 leading-snug mb-1">
                    A responsive book discovery platform where readers explore titles, organize reading lists, and track page progress.
                  </p>
                  <p className="text-slate-600 text-[11.5px] leading-snug">
                    <strong className="font-semibold text-slate-800">Features:</strong> Detailed book directory, Read List and Wishlist management, duplicate prevention across lists, page-count progress chart.
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Live: <a href="https://book-vibe-ph-s.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">book-vibe-ph-s.vercel.app</a>
                  </p>
                </div>

                {/* 4. DevStack */}
                <div>
                  <div className="flex justify-between items-baseline mb-0.5">
                    <h4 className="font-bold text-slate-900 text-[13px]">DevStack — Technology Stack Builder</h4>
                    <span className="text-blue-600 font-semibold text-[11px]">React · TypeScript · Tailwind · DaisyUI</span>
                  </div>
                  <p className="text-slate-600 leading-snug mb-1">
                    An interactive technology discovery platform for exploring tools and building custom tech stacks.
                  </p>
                  <p className="text-slate-600 text-[11.5px] leading-snug">
                    <strong className="font-semibold text-slate-800">Features:</strong> Categorized technology directory, interactive stack builder dock, duplicate prevention with feedback, live item counter.
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Live: <a href="https://devstack-ph-s.vercel.app/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">devstack-ph-s.vercel.app</a> | Code: <a href="https://github.com/aminulislamdev/DevStack" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">github.com/aminulislamdev/DevStack</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-1.5">Achievements</h3>
              <ul className="text-[12px] text-slate-600 space-y-1 leading-snug">
                <li>• Earned 60/60 on multiple Programming Hero coding assignments.</li>
                <li>• Selected for Programming Hero&apos;s exclusive Durbar Group (Top Students).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            background: white;
            margin: 0;
            padding: 0;
          }
          nav, footer, .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}