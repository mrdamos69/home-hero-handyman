import YelpBadge from "@/components/YelpBadge";
import Reveal from "@/components/Reveal";
import { business } from "@/config/business";

/**
 * Real client reviews from the live Yelp profile, summarized in our own
 * words (full original reviews are one click away on Yelp). Keep these in
 * sync with the profile — never invent reviews.
 */
const reviews = [
  {
    name: "Dennis I.",
    area: "Los Angeles",
    date: "March 2025",
    summary:
      "A roof turbine vent broke just as rain was starting. The Home Hero team moved the schedule up, showed the damaged part, picked up a replacement and had it installed the same morning.",
    job: "Roof vent replacement",
  },
  {
    name: "Hendry A.",
    area: "West Hollywood",
    date: "March 2025",
    summary:
      "A previous handyman left a door installation half-finished. Home Hero showed up on time, completed the job quickly and charged a fair price — now the go-to for future work.",
    job: "Door installation",
  },
  {
    name: "Michael B.",
    area: "West Hollywood",
    date: "September 2024",
    summary:
      "A deck faucet needed a soldered copper fitting. Fast response, a fair upfront estimate, and no markup on the replacement part — a direct, honest exchange from start to finish.",
    job: "Outdoor faucet repair",
  },
  {
    name: "Lisa W.",
    area: "Santa Monica",
    date: "June 2024",
    summary:
      "Sealed the house against critters: inspected the roof and exterior, replaced old vent covers and custom-built a crawlspace door. Great value — and they've been invited back.",
    job: "Exterior critter-proofing",
  },
];

function Stars() {
  return (
    <span className="flex" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-amber" aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

export default function ReviewsSection() {
  const { rating, url } = business.reviews;
  if (!rating || !url) return null;

  return (
    <section className="bg-stone py-16 sm:py-20" aria-labelledby="reviews-heading">
      <div className="wrap">
        <Reveal>
          <div className="text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-dark">
              What clients say
            </p>
            <h2 id="reviews-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              Rated 5.0 by Los Angeles Clients
            </h2>
            <div className="mt-6 flex justify-center">
              <YelpBadge />
            </div>
          </div>

          <ul className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
            {reviews.map((review) => (
              <li key={review.name} className="card flex h-full flex-col">
                <div className="flex items-center justify-between gap-3">
                  <Stars />
                  <span className="whitespace-nowrap rounded-full bg-teal/10 px-2.5 py-1 text-xs font-medium text-teal-dark">
                    {review.job}
                  </span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink">{review.summary}</p>
                <p className="mt-4 text-sm font-semibold text-charcoal">
                  {review.name}
                  <span className="font-normal text-ink-soft">
                    {" "}
                    · {review.area} · {review.date}
                  </span>
                </p>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-soft">
            Summaries of real Yelp reviews, in our own words. Read every full
            review, unedited, on our Yelp profile.
          </p>

          <div className="mt-6 text-center">
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn-dark">
              Read All Reviews on Yelp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
