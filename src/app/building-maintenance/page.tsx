import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PropertyManagerForm from "@/components/PropertyManagerForm";
import Icon from "@/components/Icon";
import SectionHeading from "@/components/SectionHeading";
import { scopeDisclaimer } from "@/config/services";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Building Maintenance in Los Angeles — Commercial & Residential",
  description:
    "Commercial and residential building maintenance in Los Angeles: preventive upkeep, repairs, welding, turnovers and emergency call-outs — on contract or on call. One dependable point of contact for your property.",
  alternates: { canonical: "/building-maintenance" },
};

const serves = [
  "Apartment & multifamily buildings",
  "Condos & HOAs",
  "Commercial buildings",
  "Offices",
  "Retail & storefronts",
  "Property management companies",
  "Landlords & rental owners",
  "Individual homes",
];

const services = [
  { icon: "shield", title: "Preventive maintenance", text: "Scheduled inspections and small fixes that stop minor issues from becoming expensive ones." },
  { icon: "building", title: "Common-area upkeep", text: "Hallways, lobbies, stairwells, laundry and shared spaces kept clean, safe and working." },
  { icon: "list", title: "Turnovers & punch lists", text: "Fast unit turnovers and complete punch lists so spaces are ready to lease or occupy." },
  { icon: "roller", title: "Repairs & finishes", text: "Drywall, paint, doors, hardware, flooring and trim across your building." },
  { icon: "spark", title: "Welding & metal repairs", text: "Railings, gates, stairs and structural metal repaired or fabricated on site." },
  { icon: "faucet", title: "Fixture work", text: "Fixture and hardware replacement where legally permitted; licensed specialists brought in when required." },
  { icon: "clock", title: "Emergency & on-call", text: "Rapid response for urgent repairs that can't wait for the next scheduled visit." },
  { icon: "camera", title: "Documentation", text: "Before-and-after photos and clear status updates for every job, for your records." },
];

const contracts = [
  {
    icon: "contract",
    title: "Recurring maintenance agreement",
    text: "A set cadence of scheduled visits with priority response — ideal for buildings that need consistent, predictable upkeep.",
  },
  {
    icon: "clock",
    title: "On-call / as-needed",
    text: "No fixed schedule — call us when something needs attention and we handle it, with the same crew that knows your property.",
  },
  {
    icon: "list",
    title: "Per-project",
    text: "One-off turnovers, punch lists or larger repair packages scoped, quoted and completed as a single project.",
  },
];

export default function BuildingMaintenancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Building Maintenance", path: "/building-maintenance" },
            ])
          ),
        }}
      />

      <PageHeader
        eyebrow="Commercial & residential"
        title="Building Maintenance in"
        accent="Los Angeles"
        intro="One team to keep your building running — preventive maintenance, repairs, welding, turnovers and emergency call-outs, on a contract that fits how you operate."
      />

      <section className="py-14 sm:py-16">
        <div className="wrap">
          <SectionHeading
            eyebrow="Who we serve"
            title="Buildings of Every Kind"
            intro="From a single apartment building to a portfolio of commercial properties — we scale to the property and the workload."
          />
          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Property types we serve">
            {serves.map((a) => (
              <li
                key={a}
                className="rounded-full border border-charcoal/10 bg-white px-4 py-2.5 text-sm font-medium text-ink"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-stone py-14 sm:py-16">
        <div className="wrap">
          <SectionHeading
            eyebrow="What we handle"
            title="Complete Maintenance Under One Contract"
            intro="Everything a building needs to stay safe, presentable and fully operational — handled by one accountable team."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="card card-hover flex h-full flex-col">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-btn bg-gradient-to-br from-amber/20 to-amber/5 text-amber-dark ring-1 ring-amber/20">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="wrap">
          <SectionHeading
            eyebrow="How we work together"
            title="Maintenance Contracts, Built Around You"
            intro="Choose the arrangement that fits your building and budget — you can always start small and scale up."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contracts.map((c) => (
              <div key={c.title} className="card card-hover flex h-full flex-col">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-btn bg-charcoal text-amber-light">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{c.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-soft">{scopeDisclaimer}</p>
        </div>
      </section>

      <section className="bg-stone py-14 sm:py-16" aria-labelledby="bm-form-heading">
        <div className="wrap max-w-3xl">
          <SectionHeading
            eyebrow="Get started"
            title="Tell Us About Your Building"
            intro="Share a few details about your property and what you need maintained. We'll follow up to discuss scope, scheduling and the right contract for you."
          />
          <div className="mt-8">
            <PropertyManagerForm />
          </div>
        </div>
      </section>
    </>
  );
}
