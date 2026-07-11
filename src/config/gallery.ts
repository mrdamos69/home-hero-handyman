/**
 * Gallery projects. Replace the placeholder images in /public/images with real
 * photos of your work (see public/images/README.md), then update titles and
 * categories here. Categories drive the filter buttons automatically.
 */

export const galleryCategories = [
  "Repairs",
  "Installations",
  "Painting",
  "Flooring",
  "Doors",
  "Maintenance",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/home-repair-detail.jpg",
    alt: "Close-up of a completed home repair with clean finishing",
    title: "General Home Repair",
    category: "Repairs",
  },
  {
    src: "/images/door-installation.jpg",
    alt: "Interior door installed and adjusted with new hardware",
    title: "Door Installation & Hardware",
    category: "Doors",
  },
  {
    src: "/images/laminate-flooring.jpg",
    alt: "Laminate flooring installed with clean baseboard transitions",
    title: "Laminate Flooring",
    category: "Flooring",
  },
  {
    src: "/images/furniture-assembly.jpg",
    alt: "Assembled furniture placed neatly in a bedroom",
    title: "Furniture Assembly",
    category: "Installations",
  },
  {
    src: "/images/property-maintenance.jpg",
    alt: "Rental unit refreshed during tenant turnover maintenance",
    title: "Rental Turnover Maintenance",
    category: "Maintenance",
  },
  {
    src: "/images/drywall-repair-after.jpg",
    alt: "Wall surface after drywall patching and paint touch-up",
    title: "Drywall & Paint Touch-Up",
    category: "Painting",
  },
];

/** Before/after pairs shown with the comparison slider. */
export const beforeAfterPairs = [
  {
    before: "/images/drywall-repair-before.jpg",
    after: "/images/drywall-repair-after.jpg",
    beforeAlt: "Damaged drywall before patching",
    afterAlt: "Smooth painted wall after drywall repair",
    title: "Drywall Repair",
  },
];
