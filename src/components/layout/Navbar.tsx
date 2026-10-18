"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "next-themes"; // ✅ নতুন হুক
import { navLinks } from "@/data/navLinks";
import Button from "@/components/ui/Button";

const subscribe = () => () => { };
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // মাউন্ট হওয়ার পর থিম ডিটেক্ট করা (SSR ইস্যু এড়াতে)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
      ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm"
      : "bg-transparent"
      }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
          <span className="text-blue-600 dark:text-blue-400">Aminul</span>
          <span>Islam</span>
        </Link>

        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* ✅ মাউন্টেড না হলে বাটন দেখাবে না (ফ্ল্যাশ এড়াতে) */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}

          <div className="hidden sm:block">
            <Button href="/cv.html" variant="primary" size="sm">
              <Download size={16} /> Resume
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 p-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium hover:text-blue-600"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <Button href="/cv.html" variant="primary" className="w-full">
              <Download size={16} /> Resume
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}