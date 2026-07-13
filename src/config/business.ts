/**
 * Central business data for Home Hero Handyman LLC.
 *
 * Edit this file to update contact details, service areas, hours and
 * social links across the entire site. Every component reads from here —
 * you never need to hunt for a phone number inside a component.
 *
 * Fields left as an empty string ("") are automatically hidden on the
 * public site, so you can launch before every detail is finalized.
 */

export const business = {
  /** Public brand name (no legal suffix — friendlier for clients). */
  name: "Home Hero Handyman",
  shortName: "Home Hero Handyman",
  /** Legal entity name — used only in the Privacy Policy. */
  legalName: "HOME HERO HANDYMAN LLC",
  tagline: "Professional handyman and property maintenance services in Los Angeles.",

  /** Phone number in a human-readable format, e.g. "(323) 555-0100". Leave "" to hide. */
  phone: "(213) 697-9107",
  /** Phone number for tel: links, digits only with country code, e.g. "+13235550100". */
  phoneHref: "+12136979107",
  /** Number that receives text messages (often the same as phone). Leave "" to hide. */
  textNumber: "(213) 697-9107",
  /** Text number for sms: links, e.g. "+13235550100". */
  textHref: "+12136979107",
  /** Business email. Leave "" to hide. */
  email: "",
  /** Business hours as a display string, e.g. "Mon–Sat, 8am–6pm". Leave "" to hide. */
  hours: "Open 24 hours, 7 days a week",

  mainServiceArea: "Los Angeles, CA",

  /**
   * Neighborhoods and nearby cities. Edit freely — the Service Areas page,
   * footer and LocalBusiness schema all read from this list.
   */
  serviceAreas: [
    "Los Angeles",
    "North Hollywood",
    "Burbank",
    "Glendale",
    "Studio City",
    "Sherman Oaks",
    "Van Nuys",
    "Encino",
    "Reseda",
    "Hollywood",
    "West Hollywood",
    "Beverly Hills",
    "Culver City",
    "Santa Monica",
  ],

  /** Social and profile links. Leave "" to hide the corresponding link. */
  social: {
    instagram: "",
    yelp: "https://www.yelp.com/biz/home-hero-handyman-los-angeles",
    googleBusiness: "",
  },

  /**
   * Public review stats — shown as a trust badge with a link to the source.
   * Keep these in sync with the live Yelp profile; set rating to "" to hide.
   */
  reviews: {
    rating: "5.0",
    count: 12,
    source: "Yelp",
    url: "https://www.yelp.com/biz/home-hero-handyman-los-angeles",
  },

  /** CTA labels used across the site. */
  cta: {
    primary: "Request an Estimate",
    call: "Call Now",
    text: "Text Us",
    book: "Book a Service",
    photos: "Send Project Photos",
    help: "Get Help With Your Project",
  },

  /** Public site URL — used for canonical links, sitemap and Open Graph. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.homeherohandyman.example",
} as const;

export type Business = typeof business;
