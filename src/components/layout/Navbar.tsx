"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import { Moon, Sun, Menu, X, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks } from "@/data/navLinks";
import Button from "@/components/ui/Button";

// ক্লায়েন্ট সাইডে মাউন্ট হয়েছে কিনা চেক করার জন্য (লিন্ট এরর ফিক্স)
const emptySubscribe = () => () => { };
const useMounted = () => {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
};

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm"
        : "bg-transparent"
      }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* লোগো এবং নাম */}
        <Link href="/" className="flex items-center gap-3 font-bold text-xl tracking-tighter">
          <div className="relative w-10 h-10 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Aminul Islam Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="leading-none">
            <span className="text-blue-600 dark:text-blue-400">Aminul </span>
            <span className="text-slate-900 dark:text-white">Islam</span>
          </div>
        </Link>

        {/* ডেস্কটপ মেনু */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* ডার্ক মোড বাটন */}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )}
            </button>
          )}

          {/* রেজুমে বাটন */}
          <div className="hidden sm:block">
            <Button href="/cv.html" variant="primary" size="sm">
              <Download size={16} /> Resume
            </Button>
          </div>

          {/* মোবাইল মেনু টগল */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* মোবাইল মেনু */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 p-4 space-y-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600"
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