import Link from "next/link";
import Logo from "@/components/Logo";
import { business } from "@/config/business";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/property-maintenance", label: "Property Maintenance" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/estimate", label: "Request an Estimate" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { label: "Instagram", href: business.social.instagram },
    { label: "Yelp", href: business.social.yelp },
    { label: "Google", href: business.social.googleBusiness },
  ].filter((s) => s.href);

  return (
    <footer className="bg-charcoal text-cream">
      <div className="wrap grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
            Professional handyman and property maintenance services in Los Angeles.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cream/50">Navigate</h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-cream/80 hover:text-amber">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-cream/50">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            {business.phone && business.phoneHref && (
              <li>
                <a href={`tel:${business.phoneHref}`} className="hover:text-amber">
                  {business.phone}
                </a>
              </li>
            )}
            {business.email && (
              <li>
                <a href={`mailto:${business.email}`} className="break-all hover:text-amber">
                  {business.email}
                </a>
              </li>
            )}
            <li>{business.mainServiceArea}</li>
            {business.hours && <li>{business.hours}</li>}
          </ul>
          {socials.length > 0 && (
            <ul className="mt-4 flex gap-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-cream/80 hover:text-amber"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="wrap flex flex-col gap-2 py-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.legalName}. All rights reserved.
          </p>
          <p>Serving Los Angeles and nearby areas.</p>
        </div>
      </div>
    </footer>
  );
}
