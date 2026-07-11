"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import { business } from "@/config/business";
import { navLinks } from "@/config/nav";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-charcoal">
      <div className="wrap flex h-16 items-center justify-between gap-4 md:h-[72px]">
        <Logo light />

        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`whitespace-nowrap rounded-btn px-2 py-2 text-sm transition-colors xl:px-3 ${
                    pathname === link.href
                      ? "text-amber"
                      : "text-cream/80 hover:text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          {business.phone && business.phoneHref && (
            <a
              href={`tel:${business.phoneHref}`}
              className="hidden whitespace-nowrap text-sm font-semibold text-cream hover:text-amber min-[1360px]:block"
            >
              {business.phone}
            </a>
          )}
          <Link
            href="/estimate"
            className="btn-primary hidden !px-4 lg:inline-flex xl:!px-6"
          >
            {business.cta.primary}
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
