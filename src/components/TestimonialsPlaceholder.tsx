/**
 * TestimonialsPlaceholder — intentionally NOT rendered anywhere yet.
 *
 * Do not show this section publicly until you have real client reviews.
 * When you do, add real quotes below (with the client's permission) and
 * drop <TestimonialsPlaceholder /> into src/app/page.tsx.
 */

type Testimonial = { quote: string; author: string; context?: string };

// Add real, permission-granted reviews here. Never invent testimonials.
const testimonials: Testimonial[] = [];

export default function TestimonialsPlaceholder() {
  if (testimonials.length === 0) return null;

  return (
    <section className="py-16 sm:py-20" aria-labelledby="testimonials-heading">
      <div className="wrap">
        <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
          What Clients Say
        </h2>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.author} className="card">
              <blockquote className="text-sm leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-charcoal">
                {t.author}
                {t.context && <span className="block font-normal text-ink-soft">{t.context}</span>}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
