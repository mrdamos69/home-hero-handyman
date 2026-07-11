import Link from "next/link";

/**
 * Text-based logo. Works on dark and light backgrounds via the `light` prop.
 * The mark is a minimal house outline that doubles as an "H" counter-form.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Home Hero Handyman LLC — home"
      className="inline-flex items-center gap-2.5"
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="32" height="32" rx="7" className={light ? "fill-cream/10" : "fill-charcoal"} />
        <path d="M16 6 5.5 14.5h3v11h5v-7h5v7h5v-11h3L16 6z" fill="#C8933A" />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-heading text-[17px] font-bold tracking-tight ${
            light ? "text-cream" : "text-charcoal"
          }`}
        >
          HOME HERO
        </span>
        <span
          className={`mt-0.5 block text-[10px] font-semibold tracking-[0.28em] ${
            light ? "text-cream/60" : "text-ink-soft"
          }`}
        >
          HANDYMAN LLC
        </span>
      </span>
    </Link>
  );
}
