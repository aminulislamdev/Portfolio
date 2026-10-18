"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import CertificateGrid from "@/components/certificates/CertificateGrid";
import CertificateModal from "@/components/certificates/CertificateModal";
import Button from "@/components/ui/Button";
import { Certificate, certificatesData } from "@/data/certificates";

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // showAll true হলে সব, false হলে প্রথম ৪টি
  const displayedCertificates = showAll
    ? certificatesData
    : certificatesData.slice(0, 4);

  return (
    <>
      <section id="certificates" className="py-20 px-6 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label="Credentials"
            title="Certificates & Learning"
            subtitle="Hover to preview · Click to view full certificate · Organized by category."
          />

          <CertificateGrid
            certificates={displayedCertificates}
            onSelect={setSelectedCert}
          />

          {!showAll && (
            <div className="text-center mt-12">
              <Button onClick={() => setShowAll(true)} variant="primary" size="lg">
                Show All Certificates
              </Button>
            </div>
          )}
        </div>
      </section>

      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </>
  );
}