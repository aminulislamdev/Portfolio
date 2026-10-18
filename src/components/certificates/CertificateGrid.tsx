import CertificateCard from "./CertificateCard";
import { Certificate } from "@/data/certificates";

interface CertificateGridProps {
  certificates: Certificate[];
  onSelect: (cert: Certificate) => void;
}

export default function CertificateGrid({ certificates, onSelect }: CertificateGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {certificates.map((cert) => (
        <CertificateCard
          key={cert.id}
          cert={cert}
          onClick={() => onSelect(cert)}
        />
      ))}
    </div>
  );
}