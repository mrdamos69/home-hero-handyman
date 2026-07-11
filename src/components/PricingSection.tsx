import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

/**
 * Price transparency — a top conversion factor for home services.
 * No invented prices: we explain the process honestly instead.
 */
const points = [
  {
    icon: "camera",
    title: "Estimate before work begins",
    text: "Send photos and a description — we review the scope and give you a clear picture of the cost before anything starts.",
  },
  {
    icon: "check",
    title: "You approve the scope first",
    text: "No surprise charges. If anything changes once we see the project in person, we discuss it with you before continuing.",
  },
  {
    icon: "list",
    title: "One visit, one bill",
    text: "Bundle several small tasks into a single visit — it's the most cost-effective way to work through your to-do list.",
  },
  {
    icon: "wrench",
    title: "Cash and cards accepted",
    text: "Pay the way that's convenient for you when the work is done and you're happy with the result.",
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="pricing-heading">
      <div className="wrap">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-dark">
              Fair &amp; transparent
            </p>
            <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Honest Pricing, No Surprises
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Every project starts with a clear conversation about scope and
              cost. You&apos;ll know what to expect before we pick up a tool.
            </p>
            <Link href="/estimate" className="btn-primary mt-8">
              Get Your Free Estimate
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {points.map((point) => (
                <li key={point.title} className="card">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-btn bg-amber/15 text-amber-dark">
                    <Icon name={point.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="font-semibold">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{point.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
