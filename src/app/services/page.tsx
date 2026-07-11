import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { serviceCategories, scopeDisclaimer } from "@/config/services";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Handyman Services in Los Angeles — Repairs, Installations & More",
  description:
    "Home repairs, furniture assembly, drywall and painting, doors and hardware, flooring, bathroom and kitchen projects. Professional handyman services in Los Angeles.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ])
          ),
        }}
      />

      <PageHeader
        eyebrow="Services"
        title="Handyman Services for Homes and Rental Properties"
        intro="Repairs, installations and improvements — organized, communicated clearly and finished cleanly. Here's what we can help with."
      />

      <section className="py-14 sm:py-16">
        <div className="wrap">
          {/* In-page category navigation */}
          <nav aria-label="Service categories" className="mb-12">
            <ul className="flex flex-wrap gap-2">
              {serviceCategories.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`#${service.slug}`}
                    className="inline-flex min-h-[44px] items-center rounded-full border border-charcoal/10 bg-white px-4 py-2 text-sm font-medium text-ink hover:border-amber hover:text-amber-dark"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid gap-8 lg:grid-cols-2">
            {serviceCategories.map((service) => (
              <article
                key={service.slug}
                id={service.slug}
                className="card scroll-mt-24"
                aria-labelledby={`${service.slug}-title`}
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-btn bg-amber/15 text-amber-dark">
                    <Icon name={service.icon} className="h-6 w-6" />
                  </span>
                  <h2 id={`${service.slug}-title`} className="text-xl font-semibold">
                    {service.title}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{service.short}</p>
                <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-amber-dark" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/estimate"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-dark hover:text-charcoal"
                >
                  Request an estimate for this
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-10 rounded-card border border-amber/30 bg-amber/10 px-5 py-4 text-sm leading-relaxed text-ink">
            <strong className="font-semibold text-charcoal">Please note:</strong>{" "}
            {scopeDisclaimer}
          </p>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Category Your Project Fits?"
        text="Send us your list and photos — we'll review the scope and tell you honestly what we can take on."
      />
    </>
  );
}
