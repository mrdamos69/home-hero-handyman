import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import SectionHeading from "@/components/SectionHeading";
import { business } from "@/config/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Home Hero Service — call, text or send project details online. Serving Los Angeles, CA and nearby areas.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ])
          ),
        }}
      />

      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        intro="The fastest way to get help is to send your project details and photos through the estimate form — or reach us directly."
      />

      <section className="py-14 sm:py-16">
        <div className="wrap max-w-4xl">
          <ContactSection />

          <div className="mt-12 rounded-card bg-charcoal p-8 text-center text-cream sm:p-10">
            <SectionHeading
              title="Ready to Start?"
              intro="Describe your project, attach photos and pick a convenient time."
              light
              center
            />
            <Link href="/estimate" className="btn-primary mt-6">
              {business.cta.primary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
