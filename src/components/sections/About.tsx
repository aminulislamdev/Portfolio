import Image from "next/image";
import { MapPin, Code, Clock, Zap } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function About() {
  const infoItems = [
    { icon: <MapPin size={18} />, text: "Rajshahi, Bangladesh" },
    { icon: <Code size={18} />, text: "Full Stack Developer" },
    { icon: <Clock size={18} />, text: "Remote Available" },
    { icon: <Zap size={18} />, text: "SaaS • APIs • Dashboards" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-100 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="relative">
          <div className="w-full aspect-4/5 max-w-md mx-auto rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative">
            <Image
              src="/about.jpg"
              alt="Aminul Islam"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white shrink-0">
                <Code size={24} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">Full Stack Developer</h4>
                <p className="text-xs text-slate-500">Frontend • Backend • Data Systems</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionTitle
            label="About Me"
            title="Building Scalable Web Apps, From Frontend to Backend"
            center={false}
          />

          <div className="space-y-4 text-slate-600 dark:text-slate-400 mb-8">
            <p>
              I&apos;m <strong className="text-slate-900 dark:text-white">Aminul Islam</strong>, an aspiring Full Stack Developer currently pursuing a Diploma in CST at Rajshahi Polytechnic Institute.
            </p>
            <p>
              I have a strong foundation in frontend development using React, Next.js, and TypeScript, and I am actively expanding my backend skills with Node.js and databases. I focus on writing clean, maintainable code and building real-world projects.
            </p>
            <p>
              I am currently seeking a <strong className="text-slate-900 dark:text-white">Junior Developer or Internship role</strong> where I can contribute to production-level applications and grow under the mentorship of experienced engineers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {infoItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                <span className="text-blue-600 dark:text-blue-400">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          <Button href="/cv" variant="primary" size="md">
            View My CV
          </Button>
        </div>

      </div>
    </section>
  );
}