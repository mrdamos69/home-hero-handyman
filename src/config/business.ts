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
  name: "Home Hero Handyman LLC",
  shortName: "Home Hero Handyman",
  legalName: "HOME HERO HANDYMAN LLC",
  tagline: "Professional handyman and property maintenance services in Los Angeles.",

  /** Phone number in a human-readable format, e.g. "(323) 555-0100". Leave "" to hide. */
  phone: "",
  /** Phone number for tel: links, digits only with country code, e.g. "+13235550100". */
  phoneHref: "",
  /** Number that receives text messages (often the same as phone). Leave "" to hide. */
  textNumber: "",
  /** Text number for sms: links, e.g. "+13235550100". */
  textHref: "",
  /** Business email. Leave "" to hide. */
  email: "",
  /** Business hours as a display string, e.g. "Mon–Sat, 8am–6pm". Leave "" to hide. */
  hours: "",

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
    yelp: "",
    googleBusiness: "",
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
