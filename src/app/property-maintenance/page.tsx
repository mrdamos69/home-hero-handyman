import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PropertyManagerForm from "@/components/PropertyManagerForm";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Property Maintenance for Rentals in Los Angeles",
  description:
    "Turnover punch lists, move-in and move-out repairs, and recurring maintenance for landlords, property managers and rental owners in Los Angeles.",
  alternates: { canonical: "/property-maintenance" },
};

const audience = [
  "Property managers",
  "Landlords",
  "Apartment owners",
  "Realtors",
  "Short-term rental operators",
  "Small commercial property owners",
];

const services = [
  { title: "Unit turnover punch lists", text: "Complete task lists between tenants so units are ready to show and rent." },
  { title: "Pre-move-in repairs", text: "Fix the small issues before a new tenant gets the keys." },
  { title: "Post-move-out repairs", text: "Patch, touch up and reset the unit after a tenant leaves." },
  { title: "Preventive maintenance", text: "Catch small problems — loose hardware, worn caulking, sticking doors — before they grow." },
  { title: "Door and hardware repairs", text: "Locks, hinges, handles and adjustments across your units." },
  { title: "Drywall and paint touch-ups", text: "Clean patches and matched touch-ups that keep units presentable." },
  { title: "Furniture and fixture assembly", text: "Furnished units, staging pieces and replacement fixtures assembled and installed." },
  { title: "Minor property improvements", text: "Small upgrades that add value between larger renovation cycles." },
  { title: "Recurring maintenance visits", text: "Scheduled visits on a cadence that fits your portfolio." },
  { title: "Photo documentation", text: "Before-and-after photos of completed work for your records." },
  { title: "Project status communication", text: "Clear updates so you always know where a task stands." },
];

export default function PropertyMaintenancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Property Maintenance", path: "/property-maintenance" },
            ])
          ),
        }}
      />

      <PageHeader
        eyebrow="For property professionals"
        title="Property Maintenance Support in Los Angeles"
        intro="One dependable point of contact for punch lists, turnovers and ongoing maintenance across your rental properties."
      />

      <section className="py-14 sm:py-16">
        <div className="wrap">
          <SectionHeading
            eyebrow="Who we work with"
            title="Built for the People Who Manage Properties"
            intro="We understand that rental work is about turnaround time, documentation and predictability — not just the repair itself."
          />
          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Client types">
            {audience.map((a) => (
              <li
                key={a}
                className="rounded-full border border-charcoal/10 bg-white px-4 py-2.5 text-sm font-medium text-ink"
              >
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card">
                <div className="flex items-start gap-3">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-amber-dark" />
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone py-14 sm:py-16" aria-labelledby="pm-form-heading">
        <div className="wrap max-w-3xl">
          <SectionHeading
            eyebrow="Get started"
            title="Tell Us About Your Property"
            intro="Share a few details about your property and maintenance needs. We'll follow up to discuss scope, scheduling and how we can support your portfolio."
          />
          <div className="mt-8">
            <PropertyManagerForm />
          </div>
        </div>
      </section>
    </>
  );
}
