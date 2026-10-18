import Image from "next/image";
import { MapPin, Code, Clock, Zap } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-slate-100 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* বাম দিকের ছবি */}
        <div className="relative">
          <div className="w-full aspect-4/5 max-w-md mx-auto rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl relative">
            <Image
              src="/about.jpg"
              alt="Aminul Islam"
              fill
              className="object-cover"
            />
            {/* ওভারলে কার্ড */}
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

        {/* ডান দিকের কন্টেন্ট */}
        <div>
          <SectionTitle
            label="About Me"
            title="Building Scalable Web Apps, From Frontend to Backend"
            center={false}
          />

          <div className="space-y-4 text-slate-600 dark:text-slate-400 mb-8">
            <p>
              I&apos;m <strong className="text-slate-900 dark:text-white">Aminul Islam</strong>, a passionate Full Stack Developer specializing in building modern, responsive, and scalable web applications.
            </p>
            <p>
              My skill set includes designing clean UI/UX, developing REST APIs, handling databases, and automating workflows. I focus on writing efficient, maintainable code and building systems that solve real-world problems.
            </p>
            <p>
              My goal is to grow as a <strong className="text-slate-900 dark:text-white">professional full stack developer</strong> and work remotely with global clients.
            </p>
          </div>

          <Button href="/cv.html" variant="primary" size="md">
            View My CV
          </Button>
        </div>

      </div>
    </section>
  );
}