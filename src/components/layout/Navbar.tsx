"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { navLinks } from "@/data/navLinks";
import Button from "@/components/ui/Button";

const getThemeSnapshot = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
};

const getServerThemeSnapshot = () => false;

const subscribeToTheme = (callback: () => void) => {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  mediaQuery.addEventListener("change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
    mediaQuery.removeEventListener("change", callback);
  };
};

export default function Navbar() {
  const isDark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // পেজ লোড হওয়ার সময় localStorage থেকে থিম চেক করা
  useEffect(() => {
    if (getThemeSnapshot()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    localStorage.setItem("theme", newTheme); // ✅ localStorage এ সেভ

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.dispatchEvent(new Event("theme-change"));
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
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

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