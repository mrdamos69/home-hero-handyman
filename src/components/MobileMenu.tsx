"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { business } from "@/config/business";
import { navLinks } from "@/config/nav";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Close on Escape, lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-btn text-cream hover:bg-cream/10"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto bg-charcoal px-4 pb-24 pt-4 md:top-[72px]"
        >
          <nav aria-label="Mobile navigation">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? "page" : undefined}
                    className={`block rounded-btn px-4 py-3.5 text-lg font-medium ${
                      pathname === link.href
                        ? "bg-cream/10 text-amber"
                        : "text-cream hover:bg-cream/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 space-y-3 border-t border-cream/10 pt-6">
            <Link href="/estimate" className="btn-primary w-full">
              {business.cta.primary}
            </Link>
            {business.phoneHref && (
              <a href={`tel:${business.phoneHref}`} className="btn-outline-light w-full">
                {business.cta.call}
                {business.phone ? ` — ${business.phone}` : ""}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
