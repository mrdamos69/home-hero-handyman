import Link from "next/link";
import { business } from "@/config/business";

export default function CTASection({
  title = "Let’s Take Care of Your Project",
  text = "Tell us what needs to be repaired, installed or improved. Send photos and project details — we’ll take it from there.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="edge-top relative overflow-hidden bg-charcoal py-24 text-center text-cream sm:py-28">
      <div className="aurora" aria-hidden="true" />
      <div className="orb orb-gold -left-32 -top-32 h-[30rem] w-[30rem]" aria-hidden="true" />
      <div className="orb orb-teal -bottom-40 -right-32 h-[26rem] w-[26rem]" aria-hidden="true" />
      <div className="absolute inset-0 grid-texture" aria-hidden="true" />

      <div className="wrap spotlight relative z-10 max-w-3xl">
        <p className="eyebrow-rule mb-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.2em] text-amber-light">
          Ready when you are
        </p>
        <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Let’s Take Care of{" "}
          <span className="text-gradient-hero text-glow">Your Project</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-cream/75 sm:text-xl">
          {text}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3.5">
          <Link href="/estimate" className="btn-primary btn-glow text-base">
            {business.cta.primary}
          </Link>
          {business.phoneHref ? (
            <a href={`tel:${business.phoneHref}`} className="btn-outline-light text-base">
              {business.cta.call}
              {business.phone ? ` ${business.phone}` : ""}
            </a>
          ) : (
            <Link href="/contact" className="btn-outline-light text-base">
              Contact Us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
