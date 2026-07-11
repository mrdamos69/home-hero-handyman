import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import Reveal from "@/components/Reveal";
import { serviceCategories } from "@/config/services";

export default function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="services-heading">
      <div className="wrap">
        <SectionHeading
          eyebrow="What we do"
          title="Services for Homes and Rental Properties"
          intro="One reliable professional for the repairs, installations and improvements on your list."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((service, i) => (
            <Reveal key={service.slug} delay={Math.min(i * 60, 240)}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
