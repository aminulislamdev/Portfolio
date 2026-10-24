"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Copy, Check, Send } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Please enter your name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = "Please enter a subject (at least 3 characters).";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters long.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Direct, honest dispatch via mailto to author's verified address
    const recipient = "aminulislam424842@gmail.com";
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aminulislam424842@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-100 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column: Contact Channels */}
        <div>
          <SectionTitle label="Get in Touch" title="Let's Connect" center={false} />
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md leading-relaxed text-sm sm:text-base">
            I am actively seeking Junior Full Stack Developer and Internship opportunities. Whether you have an opening, a question, or a project in mind, feel free to reach out.
          </p>

          <div className="space-y-3.5">
            {/* Email Link */}
            <a
              href="mailto:aminulislam424842@gmail.com"
              className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 border border-slate-200 dark:border-slate-700/80 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5 font-medium">Email</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  aminulislam424842@gmail.com
                </p>
              </div>
            </a>

            {/* WhatsApp Link */}
            <a
              href="https://wa.me/8801709150885"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl hover:border-emerald-500 dark:hover:border-emerald-500 border border-slate-200 dark:border-slate-700/80 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5 font-medium">WhatsApp</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  +880 1709150885
                </p>
              </div>
            </a>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/aminulislamjs/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl hover:border-sky-500 dark:hover:border-sky-500 border border-slate-200 dark:border-slate-700/80 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <LinkedinIcon size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5 font-medium">LinkedIn</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  linkedin.com/in/aminulislamjs
                </p>
              </div>
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/aminulislamdev"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl hover:border-purple-500 dark:hover:border-purple-500 border border-slate-200 dark:border-slate-700/80 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700/80 text-slate-800 dark:text-slate-200 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <GithubIcon size={20} />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5 font-medium">GitHub</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  github.com/aminulislamdev
                </p>
              </div>
            </a>

            {/* Location Indicator */}
            <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm">
              <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-0.5 font-medium">Location</p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Rajshahi, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Responsive Contact Form with Validation & Feedback */}
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">Send a Message</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Fill out the details below to initiate direct email communication.
            </p>
          </div>

          {submitted ? (
            <div className="space-y-5 py-4 animate-modal-content">
              <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 space-y-3">
                <div className="flex items-center gap-2.5 font-bold text-base text-emerald-800 dark:text-emerald-300">
                  <CheckCircle2 size={22} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Email Client Launched</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-emerald-700 dark:text-emerald-300">
                  Your default email application has been opened with your pre-filled inquiry. If it did not launch automatically, you can email directly to:
                </p>
                <div className="flex items-center justify-between gap-2 p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-emerald-200 dark:border-emerald-800/80">
                  <span className="text-xs sm:text-sm font-mono font-semibold text-slate-800 dark:text-slate-200 truncate">
                    aminulislam424842@gmail.com
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-800 transition-colors shrink-0"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              {Object.keys(errors).length > 0 && (
                <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 flex items-start gap-2.5 text-xs text-red-600 dark:text-red-400">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>Please correct the highlighted fields before sending.</span>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className={`w-full bg-slate-50 dark:bg-slate-900 border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  }`}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className={`w-full bg-slate-50 dark:bg-slate-900 border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  }`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email}</p>}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="e.g. Junior Developer Role / Project Inquiry"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: undefined });
                  }}
                  className={`w-full bg-slate-50 dark:bg-slate-900 border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors ${
                    errors.subject
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  }`}
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && <p className="text-xs text-red-500 mt-1 font-medium">{errors.subject}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Provide details about your project or opportunity..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  className={`w-full bg-slate-50 dark:bg-slate-900 border rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  }`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1 font-medium">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 active:scale-[0.99] transition-all shadow-lg shadow-blue-600/25 cursor-pointer mt-2"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}