"use client";

import Image from "next/image";
import { useState } from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { beforeAfterPairs, galleryItems } from "@/config/gallery";

// Filters are derived from the projects that actually exist, so a category
// never renders an empty grid.
const itemCategories = Array.from(new Set(galleryItems.map((i) => i.category)));
const filters = [
  "All",
  ...itemCategories,
  ...(beforeAfterPairs.length > 0 ? ["Before & After"] : []),
];

export default function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const [active, setActive] = useState("All");

  const items =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);
  const visibleItems = preview ? items.slice(0, 6) : items;
  const showBeforeAfter =
    beforeAfterPairs.length > 0 && (active === "All" || active === "Before & After");
  const showGridItems = active !== "Before & After";

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
            className={`min-h-[44px] whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === filter
                ? "bg-charcoal text-cream"
                : "border border-charcoal/10 bg-white text-ink hover:bg-stone"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {showGridItems && (
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <li
              key={item.src + item.title}
              className="group overflow-hidden rounded-card border border-charcoal/5 bg-white shadow-sm"
            >
              <div className="relative aspect-square overflow-hidden bg-stone">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between gap-2 px-4 py-3">
                <h3 className="text-sm font-semibold text-charcoal">{item.title}</h3>
                <span className="whitespace-nowrap rounded-full bg-stone px-2.5 py-1 text-xs font-medium text-ink-soft">
                  {item.category}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {showBeforeAfter && !preview && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold">Before &amp; After</h3>
          <div className="mt-4 grid gap-6 lg:grid-cols-2">
            {beforeAfterPairs.map((pair) => (
              <BeforeAfterSlider
                key={pair.title}
                beforeSrc={pair.before}
                afterSrc={pair.after}
                beforeAlt={`${pair.title} — before`}
                afterAlt={`${pair.title} — after`}
                label={pair.title}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
