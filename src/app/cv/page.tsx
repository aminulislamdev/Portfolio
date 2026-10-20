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

      {/* টপ অ্যাকশন বার */}
      <div className="max-w-[210mm] mx-auto mb-6 flex justify-between items-center print:hidden">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
        >
          <Printer size={16} /> Download PDF
        </button>
      </div>

      {/* মূল CV কন্টেইনার */}
      <div className="w-[210mm] h-[297mm] mx-auto bg-white shadow-xl print:shadow-none p-10 print:p-[12mm] text-slate-800 box-border flex flex-col">

        {/* ১. হেডার সেকশন */}
        <div className="flex justify-between items-start border-b-2 border-slate-800 pb-4 mb-4 shrink-0">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-1">Md. Aminul Islam Mahi</h1>
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Aspiring Full Stack Developer</h2>

            <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[13px] text-slate-600">
              <span className="flex items-center gap-2"><MapPin size={14} /> Rajshahi, Bangladesh</span>
              <span className="flex items-center gap-2"><Phone size={14} /> +880 1709150885</span>
              <span className="flex items-center gap-2"><Mail size={14} /> aminulislam424842@gmail.com</span>
              <span className="flex items-center gap-2"><GithubIcon size={14} /> github.com/aminulislamdev</span>
              <span className="flex items-center gap-2"><LinkedinIcon size={14} /> linkedin.com/in/aminulislamjs/</span>
              <span className="flex items-center gap-2"><Globe size={14} /> aminul-seven.vercel.app/</span>
            </div>
          </div>

          <div className="w-32 h-32 ml-6 relative rounded-lg overflow-hidden border border-slate-200 shrink-0 shadow-sm">
            <Image
              src="/profile.jpg"
              alt="Aminul Islam"
              fill
              className="object-cover"
            />
          </div>
        </div>

        
        <div className="grid grid-cols-3 gap-8 flex-1">

      
          <div className="col-span-1 space-y-5">

       
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Technical Skills</h3>
              <div className="space-y-3 text-[13px]">
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Frontend</span>
                  <p className="text-slate-600 leading-relaxed">React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3</p>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Backend</span>
                  <p className="text-slate-600 leading-relaxed">Node.js, Express.js, REST API, JWT Auth,Socket.io</p>
                </div>
                <div>
                  <span className="font-bold text-slate-900 block mb-0.5">Database & Tools</span>
                  <p className="text-slate-600 leading-relaxed">MongoDB, Git, GitHub, Vercel</p>
                </div>
              </div>
            </div>

            {/* ৩. Education */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Education</h3>
              <div className="space-y-2 text-[13px]">
                <div>
                  <h4 className="font-bold text-slate-900 text-[14px]">Diploma in CST</h4>
                  <p className="text-slate-600">Rajshahi Polytechnic Institute</p>
                  <p className="text-slate-500">Current: 6th Semester</p>
                  <p className="text-slate-500">Expected Graduation: 2027</p>
                </div>
              </div>
            </div>

            {/* ✅ ৫টি সার্টিফিকেট যুক্ত করা হলো */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Certifications</h3>
              <ul className="text-[12.5px] text-slate-600 space-y-2.5 leading-tight">

                <li>
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-800 text-[13px]">Programming Hero</strong>
                    <span className="text-[9px] font-bold text-amber-600 px-1.5 py-0.5  ">Ongoing</span>
                  </div>
                  <div>Full Stack Web Engineer</div>
                </li>

                <li>
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-800 text-[13px]">freeCodeCamp</strong>
                    <span className="text-[9px] font-bold text-green-600  px-1.5 py-0.5  ">Certified</span>
                  </div>
                  <div>Responsive Web Design</div>
                </li>

                <li>
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-800 text-[13px]">freeCodeCamp</strong>
                    <span className="text-[9px] font-bold text-green-600  px-1.5 py-0.5 ">Certified</span>
                  </div>
                  <div>Front End Development Libraries</div>
                </li>

                <li>
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-800 text-[13px]">CodeSignal</strong>
                    <span className="text-[9px] font-bold text-green-600  px-1.5 py-0.5 ">Certified</span>
                  </div>
                  <div>Intro to JavaScript for Front-End</div>
                </li>

                <li>
                  <div className="flex justify-between items-center">
                    <strong className="text-slate-800 text-[13px]">CodeSignal</strong>
                    <span className="text-[9px] font-bold text-green-600  px-1.5 py-0.5 ">Certified</span>
                  </div>
                  <div>Advanced Prompt Engineering</div>
                </li>

              </ul>
            </div>

            {/* ৭. Language Skills */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Languages</h3>
              <ul className="text-[13px] text-slate-600 space-y-1">
                <li className="flex justify-between"><span>Bengali</span> <span className="font-semibold">Native</span></li>
                <li className="flex justify-between"><span>English</span> <span className="font-semibold">Intermediate</span></li>
              </ul>
            </div>

            {/* Key Strengths */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Key Strengths</h3>
              <ul className="text-[13px] text-slate-600 space-y-1 leading-tight">
                <li>• Problem-Solving Mindset</li>
                <li>• Fast Learner & Adaptable</li>
                <li>• Clean Code Practices</li>
              </ul>
            </div>

          </div>

          {/* ডান কলাম */}
          <div className="col-span-2 space-y-5">

            {/* ২. Professional Summary */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Professional Summary</h3>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                Passionate Full Stack Developer with a solid foundation in frontend technologies and growing expertise in backend development. Experienced in building responsive, scalable web applications using React, Next.js, and Node.js. Currently pursuing a Diploma in CST and seeking a Junior Developer or Internship role to contribute to production-level applications.
              </p>
            </div>

            {/* ৫. Projects */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">Projects</h3>

              <div className="space-y-4 text-[13px]">

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-900 text-[14px]">DevStack — Web Application</h4>
                    <span className="text-blue-600 font-semibold text-[11px]">React · TypeScript · Tailwind</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-1">
                    Built a fully responsive web app with reusable components.
                  </p>
                  <p className="text-slate-600"><strong className="font-semibold text-slate-800">Features:</strong> Component-driven UI, responsive layouts, optimized state management.</p>
                  <p className="text-[11px] text-slate-500 mt-1">Live: devstack-ph-s.vercel.app | Code: github.com/aminulislamdev/DevStack</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-900 text-[14px]">HireNet — Job Board</h4>
                    <span className="text-blue-600 font-semibold text-[11px]">Next.js · Node.js · MongoDB</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-1">
                    Architected a dual-dashboard platform for job seekers and employers.
                  </p>
                  <p className="text-slate-600"><strong className="font-semibold text-slate-800">Features:</strong> Role-based access control, JWT authentication, job moderation, applicant tracking.</p>
                  <p className="text-[11px] text-slate-500 mt-1">Code: github.com/aminulislamdev/HireNet</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-900 text-[14px]">ChatSphere — Real-Time Chat</h4>
                    <span className="text-blue-600 font-semibold text-[11px]">React · Socket.io · Node.js</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-1">
                    Developed a real-time messaging application for instant communication.
                  </p>
                  <p className="text-slate-600"><strong className="font-semibold text-slate-800">Features:</strong> Private/group chats, online status, typing indicators, Socket.io integration.</p>
                  <p className="text-[11px] text-slate-500 mt-1">Code: github.com/aminulislamdev/ChatSphere</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-slate-900 text-[14px]">FitLog — Workout Library</h4>
                    <span className="text-blue-600 font-semibold text-[11px]">React · LocalStorage</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-1">
                    Created an interactive workout tracking platform.
                  </p>
                  <p className="text-slate-600"><strong className="font-semibold text-slate-800">Features:</strong> Client-side state management, local storage persistence, workout plan customization.</p>
                  <p className="text-[11px] text-slate-500 mt-1">Code: github.com/aminulislamdev/Fitlog</p>
                </div>

              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-[14px] font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">Achievements</h3>
              <ul className="text-[13px] text-slate-600 space-y-1 leading-tight">
                <li>• Earned 60/60 on multiple Programming Hero coding assignments.</li>
                <li>• Selected for Programming Hero&apos;s exclusive Durbar Group (Top Students).</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* প্রিন্ট স্টাইল */}
      <style jsx global>{`
        @media print {
          @page { size: A4; margin: 0; }
          body { 
            -webkit-print-color-adjust: exact; 
            print-color-adjust: exact; 
            background: white;
            margin: 0;
            padding: 0;
          }
          nav, footer, .print\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}