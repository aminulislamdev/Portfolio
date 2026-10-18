"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-100 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* বাম দিক: ইনফো */}
        <div>
          <SectionTitle
            label="Get in Touch"
            title="Let's Build Something Great"
            center={false}
          />
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
            Have a SaaS idea that needs building? Need a robust backend architecture for your application? I&apos;m always open to discussing new projects.
          </p>

          <div className="space-y-4">
            <a href="mailto:aminulislam424842@gmail.com" className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Email</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">aminulislam424842@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/8801709150885" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl hover:bg-green-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">WhatsApp</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">+880 1709150885</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Location</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Rajshahi, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* ডান দিক: ফর্ম */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send a Message</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
              <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Project Details</label>
              <textarea rows={4} placeholder="Tell me about your project requirements..." className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-colors resize-none" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}