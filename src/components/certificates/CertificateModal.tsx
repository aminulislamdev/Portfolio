"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Calendar, Award, Tag, Maximize2 } from "lucide-react";
import { Certificate } from "@/data/certificates";

interface CertificateModalProps {
  cert: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  // Escape key handler
  useEffect(() => {
    if (!cert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [cert, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (!cert) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [cert]);

  if (!cert) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/80 backdrop-blur-sm animate-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-slate-900 rounded-3xl w-full max-w-4xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col md:flex-row max-h-[90vh] animate-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100/90 dark:bg-slate-800/90 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Close certificate modal"
        >
          <X size={20} />
        </button>

        {/* Left Column (Desktop) / Top Section (Mobile): Certificate Image */}
        <div className="w-full md:w-7/12 bg-slate-100/80 dark:bg-slate-950/70 p-6 sm:p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 relative min-h-[260px] sm:min-h-[320px] md:min-h-[420px]">
          <div className="relative w-full h-full min-h-[240px] sm:min-h-[300px] md:min-h-[380px] flex items-center justify-center">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-contain rounded-xl drop-shadow-md select-none"
              priority
            />
          </div>
        </div>

        {/* Right Column (Desktop) / Bottom Section (Mobile): Certificate Details */}
        <div className="w-full md:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-6">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/60 w-fit">
              <Tag size={13} />
              <span>{cert.category}</span>
            </div>

            {/* Title */}
            <div>
              <h3
                id="certificate-modal-title"
                className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug pr-8"
              >
                {cert.title}
              </h3>
            </div>

            {/* Details List */}
            <div className="space-y-3 pt-1">
              {/* Issuing Organization */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Issuing Organization
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Issue Date */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 shrink-0">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Issue Date
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {cert.date}
                  </p>
                </div>
              </div>

              {/* Category */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 shrink-0">
                  <Tag size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Category
                  </p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                    {cert.category}
                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* Action Button: View Full-Size Certificate Image */}
          <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] transition-all shadow-lg shadow-blue-600/25"
            >
              <Maximize2 size={16} />
              <span>View Full-Size Certificate</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}