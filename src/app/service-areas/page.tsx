import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceAreaList from "@/components/ServiceAreaList";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Areas — Handyman in Los Angeles & Nearby",
  description:
    "Home Hero Service serves Los Angeles and nearby areas including North Hollywood, Burbank, Glendale, Studio City, Sherman Oaks and surrounding neighborhoods.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Service Areas", path: "/service-areas" },
            ])
          ),
        }}
      />

      <PageHeader
        eyebrow="Where we work"
        title="Serving Los Angeles and Nearby Areas"
        intro="Based in Los Angeles, California — providing handyman services, home repairs and property maintenance across the city and surrounding neighborhoods."
      />

      <section className="py-14 sm:py-16">
        <div className="wrap">
          <SectionHeading
            eyebrow="Coverage"
            title="Neighborhoods We Serve"
            intro="If your neighborhood isn't listed, reach out anyway — we take on projects in other nearby areas depending on scope and scheduling."
          />
          <div className="mt-8">
            <ServiceAreaList />
          </div>

          <div className="mt-14 max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight">
              A Local Handyman for Los Angeles Homes and Rentals
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
              <p>
                Whether it&apos;s drywall repair in a Studio City apartment,
                furniture assembly in Santa Monica or door adjustments across a
                rental building in North Hollywood, we bring the same approach
                everywhere: clear communication, careful work and a clean
                finish.
              </p>
              <p>
                For landlords and property managers with units in several
                neighborhoods, we can coordinate visits across locations —
                one contact for your whole portfolio.
              </p>
            </div>
          </div>

          {/*
            SEO note: each area in src/config/business.ts can later become its
            own landing page (e.g. /service-areas/north-hollywood — "Handyman
            in North Hollywood") by adding a [slug] route under this folder.
            Keep those pages genuinely useful and unique — no keyword stuffing.
          */}
        </div>
      </section>

      <CTASection
        title="In Our Area? Let's Talk."
        text="Tell us where your project is and what needs to be done — we'll confirm availability."
      />
    </>
  );
}
