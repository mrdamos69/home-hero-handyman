import { business } from "@/config/business";

/**
 * Verified review badge linking to the live Yelp profile.
 * Renders nothing until business.reviews.rating is set — never shows
 * unverifiable numbers.
 */
export default function YelpBadge({ dark = false }: { dark?: boolean }) {
  const { rating, source, url } = business.reviews;
  if (!rating || !url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
        dark
          ? "border-cream/20 bg-cream/5 text-cream hover:border-amber"
          : "border-charcoal/10 bg-white text-charcoal hover:border-amber"
      }`}
      aria-label={`Rated ${rating} out of 5 on ${source} — opens in a new tab`}
    >
      <span className="flex" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-amber">
            <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
          </svg>
        ))}
      </span>
      {rating} on {source}
    </a>
  );
}
