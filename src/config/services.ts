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
    slug: "repairs-maintenance",
    title: "General Home Repairs",
    short: "Small repairs, adjustments and improvements throughout the home.",
    icon: "wrench",
    items: [
      "Minor household repairs",
      "Drywall patching",
      "Caulking and sealing",
      "Hardware replacement",
      "Cabinet adjustments",
      "Minor trim repairs",
      "General troubleshooting",
      "Punch-list completion",
    ],
  },
  {
    slug: "assembly-installation",
    title: "Furniture Assembly & Installation",
    short: "Furniture assembly, wall-mounted items, shelving and home accessories.",
    icon: "assembly",
    items: [
      "Beds, tables and desks",
      "Cabinets and shelving units",
      "Storage systems",
      "Outdoor furniture",
      "Other ready-to-assemble furniture",
      "Shelves and wall-mounted accessories",
      "Curtain rods and window blinds",
      "Bathroom accessories",
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
      "Cabinet and door hardware",
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
    slug: "bathroom-kitchen",
    title: "Bathroom & Kitchen Projects",
    short: "Fixture replacement, hardware installation, caulking, cabinets and minor improvements.",
    icon: "faucet",
    items: [
      "Faucet or fixture-related minor work where legally permitted",
      "Cabinet hardware",
      "Towel bars and toilet paper holders",
      "Mirrors and shelving",
      "Caulking",
      "Minor cosmetic improvements",
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
    slug: "property-maintenance",
    title: "Property Maintenance",
    short: "Ongoing repair and maintenance support for landlords and property managers.",
    icon: "building",
    items: [
      "Unit turnover punch lists",
      "Move-in and move-out repairs",
      "Preventive maintenance",
      "Hardware replacement",
      "Drywall and paint touch-ups",
      "Recurring maintenance visits",
    ],
  },
];

export const scopeDisclaimer =
  "Service availability depends on the project scope. Certain electrical, plumbing, HVAC, structural or construction work may require a licensed professional. We review every request honestly and will let you know if your project calls for a licensed specialist.";
