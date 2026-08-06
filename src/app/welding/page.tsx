import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { business } from "@/config/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Welding Services in Los Angeles — Railings, Gates & Mobile Welding",
  description:
    "On-site and shop welding in Los Angeles: railings, guardrails, gates, fences, custom metal fabrication and emergency welded repairs. Work of any complexity for buildings and homes.",
  alternates: { canonical: "/welding" },
};

const work = [
  { icon: "fence", title: "Railings & guardrails", text: "Stair, balcony and rooftop railings and guardrails — new, repaired or brought back to code." },
  { icon: "door", title: "Gates, fences & enclosures", text: "Driveway and pedestrian gates, fences, trash and equipment enclosures — built and repaired." },
  { icon: "shield", title: "Security bars & window guards", text: "Window guards, security bars and grilles fabricated and installed for buildings and homes." },
  { icon: "building", title: "Stairs, handrails & platforms", text: "Steel stairs, handrails, ramps and access platforms repaired and reinforced." },
  { icon: "spark", title: "Custom metal fabrication", text: "One-off metal parts, brackets, frames and supports fabricated to spec." },
  { icon: "truck", title: "Mobile / on-site welding", text: "We bring the welding to your property — repairs done in place, with minimal disruption." },
];

const steps = [
  { n: "1", title: "Send the details", text: "Describe the job and add photos. On-site look when it helps us scope it right." },
  { n: "2", title: "Clear quote", text: "We confirm the approach, materials and price before any work begins." },
  { n: "3", title: "Welded & finished", text: "Clean, safe welds — finished, checked and documented for your records." },
];

export default function WeldingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Welding", path: "/welding" },
            ])
          ),
        }}
      />

      <PageHeader
        eyebrow="Metal work"
        title="Welding Services in"
        accent="Los Angeles"
        intro="On-site and shop welding for buildings and homes — railings, gates, fences, custom fabrication and emergency repairs. We take on work of any complexity."
      />

      <section className="py-14 sm:py-16">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we weld"
            title="Railings, Gates & Custom Metal Work"
            intro="Whether it's a single railing repair or fabrication for a whole building, we handle it — with clean, structurally sound welds."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {work.map((w) => (
              <div key={w.title} className="card card-hover flex h-full flex-col">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-btn bg-gradient-to-br from-amber/20 to-amber/5 text-amber-dark ring-1 ring-amber/20">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Any complexity band */}
      <section className="edge-top relative overflow-hidden bg-charcoal py-16 text-cream">
        <div className="aurora" aria-hidden="true" />
        <div className="wrap relative z-10 grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow-rule mb-3 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-light">
              No job too big or small
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Work of <span className="text-gradient-hero text-glow">Any Complexity</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-cream/75">
              A quick railing fix or ongoing metal work across a building — we're set up for
              both. Mobile welding brings the shop to your property, and we coordinate around
              your tenants and schedule.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/estimate" className="btn-primary btn-glow text-base">
              {business.cta.primary}
            </Link>
            {business.phoneHref && (
              <a href={`tel:${business.phoneHref}`} className="btn-outline-light text-base">
                {business.cta.call}
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="wrap">
          <SectionHeading
            eyebrow="Simple process"
            title="From Request to Finished Weld"
            center
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="card flex h-full flex-col">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-sm font-bold text-amber-light">
                  {s.n}
                </span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Structural, load-bearing or code-regulated metal work is assessed honestly — where a
            certified or licensed specialist is required, we'll tell you up front.
          </p>
        </div>
      </section>

      <CTASection
        title="Have a Welding Project?"
        text="Send the details and photos of what needs to be welded, repaired or fabricated. We'll get back to you with a clear plan and quote."
      />
    </>
  );
}
