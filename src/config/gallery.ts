/**
 * Gallery projects — real photos of completed work, currently served from the
 * business's public Yelp profile (all photos were taken and published by the
 * business itself).
 *
 * To make the site independent from Yelp's CDN, download these photos and
 * place them in /public/images, then change each `src` to a local path like
 * "/images/kitchen-hood.jpg". Nothing else needs to change.
 */

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Kitchen range hood installed under white cabinets, before and after",
    title: "Kitchen Hood Installation",
    category: "Installations",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Old bathroom ceiling light replaced with a modern four-shade fixture",
    title: "Light Fixture Upgrade",
    category: "Installations",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Garage wall patched, primed and repainted around a mini-split unit",
    title: "Garage Wall Repair & Paint",
    category: "Painting",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Assembled ladder shelf and locking storage cabinet in an office",
    title: "Office Furniture Assembly",
    category: "Installations",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Corroded outdoor faucet replaced with a new brass hose bib",
    title: "Outdoor Faucet Replacement",
    category: "Repairs",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "New exterior utility door installed and trimmed on a stucco wall",
    title: "Exterior Door Installation",
    category: "Doors",
  },
  {
    src: "/images/gallery-7.jpg",
    alt: "Old stained utility sink replaced with a clean freestanding unit",
    title: "Utility Sink Replacement",
    category: "Repairs",
  },
];

/**
 * Featured single-image shots reused across the site.
 * The mascot illustrations are generated brand art; they are decoded from
 * src/assets/*.b64 into /public/images at build time (scripts/build-logo.mjs).
 */
export const featuredImages = {
  hero: {
    src: "/images/mascot-hero.jpg",
    alt: "Home Hero mascot — a friendly handyman superhero in navy uniform with a golden cape, standing in front of a Los Angeles home",
  },
  about: {
    src: "/images/mascot-about.jpg",
    alt: "Home Hero mascot giving a thumbs up with a golden toolbox in a freshly renovated living room",
  },
  maintenance: {
    src: "/images/maintenance.jpg",
    alt: "Rental garage wall repaired and repainted during unit turnover, before and after",
  },
};

/**
 * Before/after pairs for the interactive slider. Requires two separate photos
 * taken from the same angle. Add pairs here when you have them — all
 * before/after sections appear automatically.
 */
export const beforeAfterPairs: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  title: string;
}[] = [];
