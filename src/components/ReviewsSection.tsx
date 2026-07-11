import YelpBadge from "@/components/YelpBadge";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { business } from "@/config/business";

/**
 * Real social proof from the live Yelp profile. Themes below summarize what
 * actual reviewers consistently mention — update them if reviews change.
 */
const themes = [
  { icon: "calendar", text: "Punctual — shows up when promised and responds quickly" },
  { icon: "check", text: "Fair, transparent pricing with no surprises" },
  { icon: "detail", text: "Fast, careful work — done right the first time" },
];

export default function ReviewsSection() {
  const { rating, url } = business.reviews;
  if (!rating || !url) return null;

  return (
    <section className="bg-stone py-16 sm:py-20" aria-labelledby="reviews-heading">
      <div className="wrap max-w-4xl text-center">
        <Reveal>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-dark">
            What clients say
          </p>
          <h2 id="reviews-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Rated 5.0 by Los Angeles Clients
          </h2>
          <div className="mt-6 flex justify-center">
            <YelpBadge />
          </div>

          <blockquote className="mx-auto mt-8 max-w-xl">
            <p className="font-heading text-xl font-semibold leading-snug text-charcoal sm:text-2xl">
              &ldquo;Punctual and provided excellent service.&rdquo;
            </p>
            <footer className="mt-3 text-sm text-ink-soft">
              — Hendry A., West Hollywood · via Yelp
            </footer>
          </blockquote>

          <ul className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
            {themes.map((theme) => (
              <li key={theme.text} className="card flex items-start gap-3 !p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-dark">
                  <Icon name={theme.icon} className="h-5 w-5" />
                </span>
                <p className="text-sm leading-relaxed text-ink">{theme.text}</p>
              </li>
            ))}
          </ul>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark mt-8"
          >
            Read All Reviews on Yelp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
