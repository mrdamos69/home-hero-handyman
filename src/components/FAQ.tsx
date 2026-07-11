import SectionHeading from "@/components/SectionHeading";
import type { FaqItem } from "@/config/faq";

/** Accessible accordion built on native <details>/<summary>. */
export default function FAQ({ items, heading = true }: { items: FaqItem[]; heading?: boolean }) {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="faq-heading">
      <div className="wrap max-w-3xl">
        {heading && (
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently Asked Questions"
            intro="Honest answers about scope, scheduling and how we work."
          />
        )}
        <div className="mt-8 space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-card border border-charcoal/10 bg-white px-5 open:shadow-sm"
            >
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-charcoal [&::-webkit-details-marker]:hidden">
                {item.question}
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-amber-dark transition-transform group-open:rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
