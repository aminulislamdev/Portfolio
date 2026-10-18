import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { servicesData } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
      <SectionTitle
        label="What I Offer"
        title="Full-Stack Engineering Services"
        subtitle="Scalable, secure, and performance-optimized solutions tailored for modern businesses and startups."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}