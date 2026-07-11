import Link from "next/link";
import Icon from "@/components/Icon";
import type { ServiceCategory } from "@/config/services";

export default function ServiceCard({ service }: { service: ServiceCategory }) {
  return (
    <article className="card group flex h-full flex-col transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-btn bg-amber/15 text-amber-dark">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{service.short}</p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-dark hover:text-charcoal"
      >
        Learn More
        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        <span className="sr-only"> about {service.title}</span>
      </Link>
    </article>
  );
}
