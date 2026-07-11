import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { featuredImages } from "@/config/gallery";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Home Hero Handyman",
  description:
    "Home Hero Handyman provides dependable repairs, installations and property maintenance in Los Angeles — with clear communication and respect for your home.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "chat",
    title: "Clear communication",
    text: "You'll know what we plan to do, when we'll do it and what it involves — before work starts.",
  },
  {
    icon: "detail",
    title: "Attention to detail",
    text: "Straight lines, clean caulk, level shelves. The small things are the whole job.",
  },
  {
    icon: "broom",
    title: "Respect for your property",
    text: "We protect the work area, keep it organized and leave it clean when we're done.",
  },
  {
    icon: "check",
    title: "Honest assessment",
    text: "If a project needs a licensed specialist, we'll say so instead of taking on work we shouldn't.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ])
          ),
        }}
      />

      <PageHeader
        eyebrow="About"
        title="Your Home Deserves Careful, Professional Work"
        intro="A dependable handyman service for homeowners, landlords and property managers in Los Angeles."
      />

      <section className="py-14 sm:py-16">
        <div className="wrap grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-card bg-stone">
              <Image
                src={featuredImages.owner.src}
                alt={featuredImages.owner.alt}
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-center text-sm font-medium text-ink-soft">
              Dmitrii — Owner &amp; Handyman
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Why Home Hero Exists</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Home Hero Handyman was created to provide homeowners and
                property professionals with a more dependable way to handle
                repairs, installations and maintenance projects. Finding one
                reliable person for a list of small and mid-sized tasks
                shouldn&apos;t be harder than the tasks themselves.
              </p>
              <p>
                Every project is approached with clear communication, practical
                problem-solving and respect for the client&apos;s property. We
                show up when we say we will, do the work we agreed on and leave
                the space clean.
              </p>
            </div>

            <h2 className="mt-10 text-2xl font-bold tracking-tight sm:text-3xl">How We Work</h2>
            <ul className="mt-6 space-y-5">
              {values.map((v) => (
                <li key={v.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-dark">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Project in Mind?"
        text="Send the details and a few photos — we'll review the scope and get back to you."
      />
    </>
  );
}
