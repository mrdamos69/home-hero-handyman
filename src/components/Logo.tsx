import Image from "next/image";
import Link from "next/link";

/**
 * Brand logo. The image is generated at build time from src/assets/logo.b64
 * (see scripts/build-logo.mjs). The white sticker plate matches the logo's
 * own white outline, so it works on both the navy header and light footers.
 */
export default function Logo({ light = false }: { light?: boolean }) {
  void light; // same treatment works on dark and light backgrounds
  return (
    <Link
      href="/"
      aria-label="Home Hero Handyman — home"
      className="inline-flex items-center"
    >
      <span className="inline-flex items-center rounded-lg bg-white px-2 py-1 shadow-sm">
        <Image
          src="/images/logo.jpg"
          alt="Home Hero Handyman logo"
          width={447}
          height={148}
          priority
          className="h-9 w-auto md:h-10"
        />
      </span>
    </Link>
  );
}
