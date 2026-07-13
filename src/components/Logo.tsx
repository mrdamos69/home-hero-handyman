import Link from "next/link";

/**
 * Clean text logo in the brand palette (navy / gold). To use an image logo
 * instead, drop a high-resolution file into /public/images/logo.png and
 * replace the contents of this component with an <Image>.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Home Hero Handyman — home"
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
        <path d="M16 6 5.5 14.5h3v11h5v-7h5v7h5v-11h3L16 6z" fill="#DCA733" />
      </svg>
      <span className="leading-none">
        <span
          className={`block font-heading text-[17px] font-bold tracking-tight ${
            light ? "text-cream" : "text-charcoal"
          }`}
        >
          HOME<span className="text-amber">★</span>HERO
        </span>
        <span
          className={`mt-0.5 block text-[10px] font-semibold tracking-[0.28em] ${
            light ? "text-teal-light" : "text-teal-dark"
          }`}
        >
          HANDYMAN
        </span>
      </span>
    </Link>
  );
}
