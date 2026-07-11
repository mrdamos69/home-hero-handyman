"use client";

import Image from "next/image";
import { useId, useState } from "react";

/**
 * Accessible before/after comparison. Controlled by a range input, so it works
 * with keyboard, touch and mouse without any drag libraries.
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  label = "Before and after comparison",
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
}) {
  const [pos, setPos] = useState(50);
  const id = useId();

  return (
    <figure className="overflow-hidden rounded-card border border-charcoal/5 bg-white shadow-sm">
      <div className="relative aspect-[4/3] select-none">
        <Image src={afterSrc} alt={afterAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          aria-hidden="true"
        >
          <Image src={beforeSrc} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-amber"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        />
        <span className="absolute left-3 top-3 rounded-full bg-charcoal/80 px-2.5 py-1 text-xs font-semibold text-cream">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-amber px-2.5 py-1 text-xs font-semibold text-charcoal">
          After
        </span>
      </div>
      <figcaption className="px-4 pt-3 text-sm text-ink-soft">
        <label htmlFor={id} className="sr-only">
          {label} — drag to compare
        </label>
        <span aria-hidden="true">{beforeAlt}</span>
      </figcaption>
      <div className="px-4 pb-4 pt-2">
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="h-11 w-full cursor-ew-resize accent-amber"
        />
      </div>
    </figure>
  );
}
