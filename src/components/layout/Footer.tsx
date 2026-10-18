import { Mail, Phone } from "lucide-react";
import Link from "next/link";

// কাস্টম SVG আইকন কম্পোনেন্ট
const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            Aminul<span className="text-blue-500">.</span>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Full-Stack Developer specializing in building scalable, data-driven SaaS products and modern web applications from Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link href="#about" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">About Me</Link>
            <Link href="#skills" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Skills</Link>
            <Link href="#projects" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Projects</Link>
            <Link href="#contact" className="text-sm text-slate-300 hover:text-blue-400 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Connect</h4>
          <div className="flex gap-3">
            <a href="mailto:aminulislam424842@gmail.com" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Mail size={18} />
            </a>
            <a href="https://wa.me/8801709150885" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors">
              <Phone size={18} />
            </a>
            <a href="https://github.com/aminulislam424842" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
              <GithubIcon size={18} />
            </a>
            <a href="https://linkedin.com/in/aminulislamjs/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; 2026 Aminul Islam. All rights reserved.</p>
        <p>Designed & Built with <span className="text-red-500">♥</span> in Bangladesh</p>
      </div>
    </footer>
  );
}