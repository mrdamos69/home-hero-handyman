import Image from "next/image";
import Link from "next/link";
import { business } from "@/config/business";
import { featuredImages } from "@/config/gallery";

const stats = [
  { value: "5.0", label: "on Yelp" },
  { value: "24/7", label: "response" },
  { value: "Any", label: "complexity" },
];

const serves = [
  "Apartment buildings",
  "HOA & condo",
  "Commercial",
  "Offices & retail",
  "Homes",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-cream">
      {/* Ambient premium backdrop */}
      <div className="aurora" aria-hidden="true" />
      <div className="orb orb-gold -right-40 -top-48 h-[42rem] w-[42rem]" aria-hidden="true" />
      <div className="orb orb-teal -bottom-56 -left-48 h-[36rem] w-[36rem]" aria-hidden="true" />
      <div className="absolute inset-0 grid-texture" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-charcoal"
        aria-hidden="true"
      />

      <div className="wrap spotlight relative z-10 grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
        <div className="animate-rise">
          <span className="glass-dark mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold text-cream">
            <span className="text-amber-light tracking-tight" aria-hidden="true">★★★★★</span>
            5.0 on Yelp · Building maintenance in Los Angeles
          </span>

          <h1
            data-fx-hl="1"
            className="text-[2.6rem] font-bold leading-[1.03] tracking-tight text-cream sm:text-6xl lg:text-[4.2rem]"
          >
            Complete{" "}
            <span className="text-gradient-hero text-glow">Building Maintenance</span>{" "}
            for Los Angeles Properties
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/75 sm:text-xl">
            From apartment buildings and commercial properties to individual homes — we
            handle repairs, upkeep, welding and ongoing maintenance contracts, with clear
            communication and real attention to detail.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3.5">
            <Link href="/estimate" className="btn-primary btn-glow text-base">
              {business.cta.primary}
            </Link>
            <Link href="/building-maintenance" className="btn-outline-light text-base">
              Building Maintenance
            </Link>
          </div>

          <dl className="mt-11 flex flex-wrap gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass-dark flex min-w-[7.5rem] flex-col rounded-2xl px-5 py-3"
              >
                <dt className="text-2xl font-bold text-gradient-gold">{s.value}</dt>
                <dd className="text-xs font-medium uppercase tracking-wider text-cream/60">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-sm text-cream/55">
            {serves.join("  ·  ")}
          </p>
        </div>

        <div className="animate-photo anim-delay-200 relative">
          <div className="orb orb-gold -right-10 -top-10 h-40 w-40 opacity-70" aria-hidden="true" />
          <div className="aura-ring" aria-hidden="true" />

          <span className="sparkle text-2xl" style={{ top: "-2%", left: "8%" }} aria-hidden="true">✦</span>
          <span className="sparkle sparkle-2 text-lg" style={{ top: "10%", right: "-2%" }} aria-hidden="true">✦</span>
          <span className="sparkle sparkle-3 text-xl" style={{ bottom: "6%", left: "-3%" }} aria-hidden="true">✦</span>
          <span className="sparkle sparkle-4 text-base" style={{ bottom: "18%", right: "4%" }} aria-hidden="true">✦</span>

          <div className="media-glow alive shine-sweep relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-charcoal-soft lg:aspect-[5/5.2]">
            <Image
              src={featuredImages.hero.src}
              alt={featuredImages.hero.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="glass absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl px-4 py-3 text-charcoal sm:left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber to-amber-dark text-cream">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M3 11.5 12 4l9 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.5 10v9.5h13V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">Home Hero Service</span>
              <span className="block text-xs text-ink-soft">Buildings · Repairs · Welding</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
