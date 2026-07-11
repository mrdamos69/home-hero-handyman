import Link from "next/link";
import { business } from "@/config/business";

export default function CTASection({
  title = "Let’s Take Care of Your Project",
  text = "Tell us what needs to be repaired, installed or improved. Include photos and project details to help us understand the work.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-charcoal py-16 text-center text-cream sm:py-20">
      <div className="wrap max-w-2xl">
        <h2 className="text-3xl font-bold tracking-tight text-cream sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-cream/70">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/estimate" className="btn-primary">
            {business.cta.primary}
          </Link>
          {business.phoneHref ? (
            <a href={`tel:${business.phoneHref}`} className="btn-outline-light">
              {business.cta.call}
            </a>
          ) : (
            <Link href="/contact" className="btn-outline-light">
              Contact Us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
