import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EstimateForm from "@/components/EstimateForm";
import Icon from "@/components/Icon";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Request an Estimate",
  description:
    "Request a handyman estimate in Los Angeles. Describe your project, upload photos and choose a convenient time — we'll review the details and follow up.",
  alternates: { canonical: "/estimate" },
};

const tips = [
  { icon: "camera", text: "Photos of the project area help us understand the scope quickly." },
  { icon: "list", text: "Have several tasks? List them all — one visit can often cover multiple projects." },
  { icon: "chat", text: "We'll review your request and contact you to confirm details and scheduling." },
];

export default function EstimatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Request an Estimate", path: "/estimate" },
            ])
          ),
        }}
      />

      <PageHeader
        eyebrow="Get started"
        title="Request an Estimate"
        intro="Tell us what needs to be repaired, installed or improved. The more detail you share, the faster we can get back to you with next steps."
      />

      <section className="py-14 sm:py-16">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_320px]">
          <EstimateForm />

          <aside aria-label="Tips for a faster estimate" className="space-y-4 lg:pt-2">
            <h2 className="text-lg font-semibold">Tips for a faster estimate</h2>
            <ul className="space-y-4">
              {tips.map((tip) => (
                <li key={tip.text} className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/15 text-teal-dark">
                    <Icon name={tip.icon} className="h-5 w-5" />
                  </span>
                  <p className="text-sm leading-relaxed text-ink-soft">{tip.text}</p>
                </li>
              ))}
            </ul>
            <p className="rounded-card border border-charcoal/10 bg-stone px-4 py-3 text-xs leading-relaxed text-ink-soft">
              Certain electrical, plumbing, HVAC, structural or construction
              work may require a licensed professional. We review every request
              and will tell you honestly if your project needs a specialist.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
