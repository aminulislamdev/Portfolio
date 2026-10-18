import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Certificate } from "@/data/certificates";

interface CertificateCardProps {
  cert: Certificate;
  onClick: () => void;
}

export default function CertificateCard({ cert, onClick }: CertificateCardProps) {
  return (
    <div
      onClick={onClick}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
    >
      <div className="h-40 bg-slate-100 dark:bg-slate-700 relative overflow-hidden">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-sm mb-1 line-clamp-2 text-slate-900 dark:text-white">
          {cert.title}
        </h3>
        <p className="text-xs text-slate-500 mb-3">{cert.issuer}</p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-slate-700">
          <span className="text-[10px] font-bold bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-full">
            {cert.category}
          </span>
          <ExternalLink size={14} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
        </div>
      </div>
    </div>
  );
}