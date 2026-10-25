import Image from "next/image";
import {
  MapPin,
  Code,
  Clock,
  Zap,
  BookOpen,
  Gamepad2,
  Users,
  Trophy,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function About() {
  const infoItems = [
    { icon: <MapPin size={18} />, text: "Rajshahi, Bangladesh" },
    { icon: <Code size={18} />, text: "Full Stack Developer" },
    { icon: <Clock size={18} />, text: "Remote Available" },
    { icon: <Zap size={18} />, text: "SaaS • APIs • Dashboards" },
  ];

  const hobbies = [
    {
      icon: <Trophy size={16} />,
      label: "Football & Cricket",
      text: "Playing with friends on weekends",
    },
    {
      icon: <BookOpen size={16} />,
      label: "Reading",
      text: "Tech blogs & self-improvement books",
    },
    {
      icon: <Gamepad2 size={16} />,
      label: "Gaming",
      text: "Strategy games & eFootball",
    },
    {
      icon: <Users size={16} />,
      label: "Community",
      text: "Helping beginners learn to code",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#f8f9fa] px-6 py-20 dark:bg-slate-900/50" 
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
          <SectionTitle
            label="ABOUT ME"
            title="Building Scalable Web Apps, From Frontend to Backend"
            
          />
       

        {/* Main Content */}
        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-12">
          {/* Left Column: Photo & Hobbies */}
          <div className="w-full">
            <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-3xl border-4 border-white shadow-2xl dark:border-slate-800">
              <Image
                src="/about.jpg" // আপনার ইমেজের পাথ ঠিক আছে কিনা দেখে নিন
                alt="Md. Aminul Islam Mahi"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Floating Card on Image */}
              <div className="absolute right-4 bottom-4 left-4 flex items-center gap-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-sm dark:bg-slate-800/95">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Full Stack Developer
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Frontend • Backend • Data Systems
                  </p>
                </div>
              </div>
            </div>

            {/* Hobbies Card */}
            <div className="mx-auto mt-6 max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <h4 className="mb-5 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Hobbies &amp; Interests
              </h4>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {hobbies.map((hobby) => (
                  <div key={hobby.label} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      {hobby.icon}
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-slate-800 dark:text-slate-200">
                        {hobby.label}
                      </p>
                      <p className="mt-1 text-[14px] leading-relaxed text-slate-500 dark:text-slate-400">
                        {hobby.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Introduction */}
          <div className="w-full">
            <div className="mb-8 space-y-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              <p>
                I&apos;m{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Md. Aminul Islam Mahi
                </strong>
                , an aspiring Full Stack Developer currently pursuing a Diploma
                in Computer Science &amp; Technology (CST) at Rajshahi
                Polytechnic Institute.
              </p>

              <p>
                My programming journey started in{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  October 2025
                </strong>{" "}
                — I opened a code editor for the first time, typed my first HTML
                tag, and something clicked. What began as simple curiosity
                quickly turned into a deep passion. I loved that code could turn
                ideas into real things people could see and use in their
                browser.
              </p>

              <p>
                I worked my way through HTML, CSS, and JavaScript, then fell in
                love with{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  React
                </strong>
                . By early 2026, I had completed my full frontend journey and
                built real projects including{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Bazardor
                </strong>{" "}
                (a Bengali market price tracker),{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  FitLog
                </strong>
                , and{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  Book Vibe
                </strong>
                . Currently, I&apos;m expanding into the backend with Node.js,
                Express, and MongoDB.
              </p>

              <p>
                I genuinely love building{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  products that solve real problems
                </strong>{" "}
                — dashboards, SaaS tools, and data-driven apps. I care about
                clean code, thoughtful UX, and crafting interfaces that feel
                intuitive to use.
              </p>

              <p>
                Outside of coding, I enjoy playing{" "}
                <strong className="font-semibold text-slate-900 dark:text-white">
                  football with friends
                </strong>
                , watching cricket, reading self-improvement books, and helping
                beginner developers. I believe continuous learning and
                problem-solving are essential qualities for becoming a better
                developer.
              </p>
            </div>

            {/* Quick Information */}
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {infoItems.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  <span className="shrink-0 text-blue-600 dark:text-blue-400">
                    {item.icon}
                  </span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button href="/cv" variant="primary" size="md" className="rounded-full px-6">
                View My CV
              </Button>
              <Button href="#contact" variant="outline" size="md" className="rounded-full px-6">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}