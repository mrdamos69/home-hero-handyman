/** Service categories shown on the home page and the Services page. */

export type ServiceCategory = {
  slug: string;
  title: string;
  short: string;
  icon: string; // key into the Icon component
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "building-maintenance",
    title: "Building & Property Maintenance",
    short: "Ongoing upkeep and repairs for commercial and residential buildings — on contract or on call.",
    icon: "building",
    items: [
      "Preventive maintenance programs",
      "Common-area and unit upkeep",
      "Unit turnovers and punch lists",
      "Recurring scheduled visits",
      "On-call and emergency repairs",
      "One point of contact for the property",
    ],
  },
  {
    slug: "welding",
    title: "Welding & Metal Work",
    short: "Railings, gates, fences and on-site welding — repairs and custom fabrication of any complexity.",
    icon: "spark",
    items: [
      "Railings and guardrails",
      "Gates, fences and enclosures",
      "Security bars and window guards",
      "Custom metal fabrication",
      "Mobile / on-site welding",
      "Emergency welded repairs",
    ],
  },
  {
    slug: "repairs-maintenance",
    title: "General Repairs",
    short: "Small repairs, adjustments and improvements throughout the building.",
    icon: "wrench",
    items: [
      "Minor household repairs",
      "Drywall patching",
      "Caulking and sealing",
      "Hardware replacement",
      "Cabinet adjustments",
      "General troubleshooting",
      "Punch-list completion",
    ],
  },
  {
    slug: "drywall-painting",
    title: "Drywall & Painting",
    short: "Drywall patching, minor repairs, touch-ups and interior painting projects.",
    icon: "roller",
    items: [
      "Drywall patching",
      "Paint touch-ups",
      "Interior painting",
      "Surface preparation",
      "Minor wall repairs",
      "Baseboards and trim",
    ],
  },
  {
    slug: "doors-hardware",
    title: "Doors & Hardware",
    short: "Door adjustments, handles, locks, hinges, barn doors and related hardware.",
    icon: "door",
    items: [
      "Interior door adjustments",
      "Hinges, handles and locks",
      "Barn door installation",
      "Sliding door hardware",
      "Minor door repairs",
      "Weatherstripping",
    ],
  },
  {
    slug: "assembly-installation",
    title: "Furniture Assembly & Installation",
    short: "Furniture assembly, wall-mounted items, shelving and accessories.",
    icon: "assembly",
    items: [
      "Beds, tables and desks",
      "Cabinets and shelving units",
      "Storage systems",
      "Shelves and wall-mounted accessories",
      "Curtain rods and window blinds",
      "Bathroom accessories",
    ],
  },
  {
    slug: "flooring-trim",
    title: "Flooring & Trim",
    short: "Laminate flooring, baseboards, trim repairs and finishing details.",
    icon: "floor",
    items: [
      "Laminate flooring",
      "Minor flooring repairs",
      "Baseboard installation",
      "Transitions",
      "Finishing details",
    ],
  },
  {
    slug: "mounting",
    title: "TV, Shelves & Wall Mounting",
    short: "TV mounting, mirrors, artwork, curtain rods, blinds and shelving.",
    icon: "tv",
    items: [
      "TV mounting",
      "Mirrors and artwork",
      "Curtain rods and blinds",
      "Shelving",
      "Wall-mounted accessories",
    ],
  },
  {
    slug: "bathroom-kitchen",
    title: "Bathroom & Kitchen Projects",
    short: "Fixture replacement, hardware installation, caulking, cabinets and minor improvements.",
    icon: "faucet",
    items: [
      "Fixture-related minor work where legally permitted",
      "Cabinet hardware",
      "Towel bars and holders",
      "Mirrors and shelving",
      "Caulking",
      "Minor cosmetic improvements",
    ],
  },
];

export const scopeDisclaimer =
  "Service availability depends on the project scope. Certain electrical, plumbing, HVAC, structural or construction work may require a licensed professional. We review every request honestly and will let you know if your project calls for a licensed specialist.";
