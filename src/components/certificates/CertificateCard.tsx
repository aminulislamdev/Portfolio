import Image from "next/image";
import { ExternalLink, Calendar } from "lucide-react";
import { Certificate } from "@/data/certificates";

interface CertificateCardProps {
  cert: Certificate;
  onClick: () => void;
}

export default function CertificateCard({ cert, onClick }: CertificateCardProps) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View ${cert.title} certificate`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-blue-950/30 transition-all duration-300 cursor-pointer flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="h-44 bg-slate-50 dark:bg-slate-900/80 relative overflow-hidden flex items-center justify-center p-2.5 border-b border-slate-100 dark:border-slate-700/50">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 select-none"
        />
      </div>

      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 rounded-md mb-2">
            {cert.category}
          </span>
          <h3 className="font-bold text-sm mb-1 line-clamp-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {cert.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{cert.issuer}</p>
        </div>

        <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5 text-[11px]">
            <Calendar size={13} className="text-slate-400 dark:text-slate-500" />
            {cert.date}
          </span>
          <span className="flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 group-hover:underline">
            View
            <ExternalLink size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </div>
  );
}