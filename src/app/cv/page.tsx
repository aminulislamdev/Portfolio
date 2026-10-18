"use client";

import Link from "next/link";
import { ArrowLeft, Printer, Mail, Phone, MapPin, Globe } from "lucide-react";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 py-10 px-4 md:px-0 print:bg-white print:py-0">

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

  
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-950 print:bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none">

   
        <div className="bg-slate-900 text-white p-8 md:p-12 print:text-black print:bg-white print:border-b">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair tracking-tight mb-2">Aminul Islam Mahi</h1>
          <p className="text-blue-400 print:text-blue-600 font-semibold tracking-widest uppercase text-sm mb-6">Full Stack Developer & SaaS Builder</p>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300 print:text-slate-600">
            <span className="flex items-center gap-2"><Mail size={14} /> aminulislam424842@gmail.com</span>
            <span className="flex items-center gap-2"><Phone size={14} /> +880 1709150885</span>
            <span className="flex items-center gap-2"><MapPin size={14} /> Rajshahi, Bangladesh</span>
            <span className="flex items-center gap-2"><Globe size={14} /> github.com/aminulislam424842</span>
          </div>
        </div>

        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-10 print:grid-cols-3 print:gap-6">

     
          <div className="space-y-8 md:col-span-1">

            {/* About */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Profile</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed print:text-slate-700">
                Passionate Full Stack Developer currently pursuing a Diploma in CST at Rajshahi Polytechnic Institute. I enjoy building responsive, user-friendly web applications and am actively improving my backend skills to build scalable systems.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Git & GitHub"].map((skill) => (
                  <span key={skill} className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md print:bg-slate-100 print:text-slate-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white print:text-black">Diploma in CST</h4>
                  <p className="text-xs text-slate-500 mt-1">Rajshahi Polytechnic Institute</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">2024 - Present (5th Semester)</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white print:text-black">Secondary School Certificate (SSC)</h4>
                  <p className="text-xs text-slate-500 mt-1">Masjid Mission Academy</p>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">2023 · GPA 5.00</p>
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

    
          <div className="space-y-8 md:col-span-2">

            {/* Projects */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Key Projects</h3>

              <div className="space-y-6">

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-white print:text-black">HireNet — Job Board & Admin Portal</h4>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 mb-2">Next.js · Node.js · MongoDB · JWT</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 leading-relaxed">
                    Dual-dashboard job board for seekers & employers. Admin portal with role-based access, job moderation, applicant tracking pipeline, advanced search/filter, and email notifications.
                  </p>
                </div>

  
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-white print:text-black">TaskFlow — Project Management SaaS</h4>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 mb-2">Next.js · Node.js · MongoDB · JWT Auth</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 leading-relaxed">
                    Role-based project management with Admin/User access, JWT auth, real-time CRUD, and relational MongoDB schema for complex team workflows.
                  </p>
                </div>

                {/* প্রজেক্ট ৩ */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 dark:text-white print:text-black">GenAI — Content Generation Platform</h4>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 mb-2">React · Express.js · PostgreSQL · OpenAI API</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 leading-relaxed">
                    AI-powered SaaS with OpenAI API integration, credit-based subscription system in PostgreSQL with Prisma ORM, and real-time streaming responses.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-blue-600 border-b border-slate-200 pb-2 mb-4">Experience</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white print:text-black">Freelance Full Stack Developer</h4>
                  <p className="text-xs text-slate-500 font-medium mb-2">Independent / Remote · 2024 - Present</p>
                  <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 print:text-slate-700 space-y-1">
                    <li>Shipped 10+ end-to-end web projects across SaaS, fintech, and AI domains.</li>
                    <li>Built NESCO prepaid card generator for SR Computer & Photostat, Rajshahi.</li>
                    <li>500+ GitHub commits with clean, modular, production-quality code.</li>
                  </ul>
                </div>
              </div>
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