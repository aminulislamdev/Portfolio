import Image from "next/image";
import { X } from "lucide-react";
import { Certificate } from "@/data/certificates";

interface CertificateModalProps {
  cert: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="w-full aspect-video bg-slate-100 dark:bg-slate-800 relative">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="p-6 md:p-8">
          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
            {cert.category}
          </span>
          <h3 className="text-2xl font-bold mt-2 mb-2 text-slate-900 dark:text-white">
            {cert.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {cert.issuer} · {cert.date}
          </p>
        </div>
      </div>
    </div>
  );
}