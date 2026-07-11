import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Project Gallery — Handyman Work in Los Angeles",
  description:
    "Recent handyman projects in Los Angeles: repairs, installations, painting, flooring, doors and property maintenance, including before-and-after comparisons.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Gallery", path: "/gallery" },
            ])
          ),
        }}
      />

      <PageHeader
        eyebrow="Gallery"
        title="Recent Projects"
        intro="Clean, careful work — repairs, installations, painting, flooring and maintenance. Filter by category or compare before-and-after results."
      />

      <section className="py-14 sm:py-16">
        <div className="wrap">
          <GalleryGrid />
          <p className="mt-10 text-sm text-ink-soft">
            All photos show our own completed projects. See dozens more on our{" "}
            <a
              href="https://www.yelp.com/biz_photos/home-hero-handyman-los-angeles"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-dark underline hover:text-charcoal"
            >
              Yelp photo gallery
            </a>
            . Published photos never include clients&apos; personal information.
          </p>
        </div>
      </section>

      <CTASection
        title="Want Results Like These at Your Place?"
        text="Send photos of your project and we'll take a look."
      />
    </>
  );
}
