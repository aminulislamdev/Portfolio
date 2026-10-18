import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
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
            <a href="https://wa.me/8801709150885" target="_blank" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors">
              <Phone size={18} />
            </a>
            <a href="https://github.com/aminulislam424842" target="_blank" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/aminulislamjs/" target="_blank" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Linkedin size={18} />
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