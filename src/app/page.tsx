import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesGrid from "@/components/ServicesGrid";
import MultiProject from "@/components/MultiProject";
import HowItWorks from "@/components/HowItWorks";
import PropertyManagerSection from "@/components/PropertyManagerSection";
import GalleryGrid from "@/components/GalleryGrid";
import ReviewsSection from "@/components/ReviewsSection";
import PricingSection from "@/components/PricingSection";
import { featuredImages } from "@/config/gallery";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { faqItems } from "@/config/faq";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Home Hero Service | Handyman & Property Services in Los Angeles",
  description:
    "Professional home repair, handyman and property maintenance services in Los Angeles. Send your project details and request a free estimate.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />

      <Hero />
      <TrustBar />
      <ServicesGrid />
      <ReviewsSection />
      <MultiProject />
      <HowItWorks />
      <PricingSection />
      <PropertyManagerSection />

      {/* Gallery preview */}
      <section className="bg-stone py-16 sm:py-20" aria-labelledby="gallery-heading">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Our work"
              title="Recent Projects"
              intro="A look at the kind of clean, careful work we aim for on every visit."
            />
            <Link href="/gallery" className="btn-outline">
              View Full Gallery
            </Link>
          </div>
          <div className="mt-10">
            <GalleryGrid preview />
          </div>
          <p className="mt-6 text-sm text-ink-soft">
            Real projects, photographed on site — more on our{" "}
            <a
              href="https://www.yelp.com/biz_photos/home-hero-handyman-los-angeles"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-amber-dark underline hover:text-charcoal"
            >
              Yelp photo gallery
            </a>
            .
          </p>
        </div>
      </section>

      {/* About preview */}
      <section className="py-16 sm:py-20" aria-labelledby="about-heading">
        <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-card bg-stone">
              <Image
                src={featuredImages.about.src}
                alt={featuredImages.about.alt}
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-ink-soft">
              Careful work, documented on every job
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-dark">
              About us
            </p>
            <h2 id="about-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your Home Deserves Careful, Professional Work
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Home Hero Service was created to provide homeowners and property
              professionals with a more dependable way to handle repairs,
              installations and maintenance projects. Every project is
              approached with clear communication, practical problem-solving
              and respect for the client&apos;s property.
            </p>
            <Link href="/about" className="btn-dark mt-8">
              More About Us
            </Link>
          </Reveal>
        </div>
      </section>

      <FAQ items={faqItems} />
      <CTASection />
    </>
  );
}
