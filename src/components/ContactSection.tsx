import Icon from "@/components/Icon";
import { business } from "@/config/business";

/**
 * Contact details block. Every row renders only when the corresponding
 * value is set in src/config/business.ts — no raw placeholders ever
 * reach the public page.
 */
export default function ContactSection() {
  const socials = [
    { label: "Instagram", href: business.social.instagram },
    { label: "Yelp", href: business.social.yelp },
    { label: "Google Business Profile", href: business.social.googleBusiness },
  ].filter((s) => s.href);

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {business.phone && business.phoneHref && (
        <a href={`tel:${business.phoneHref}`} className="card flex items-center gap-4 hover:shadow-md">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-dark">
            <Icon name="phone" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-medium uppercase tracking-wide text-ink-soft">Call</span>
            <span className="block font-semibold text-charcoal">{business.phone}</span>
          </span>
        </a>
      )}

      {business.textNumber && business.textHref && (
        <a href={`sms:${business.textHref}`} className="card flex items-center gap-4 hover:shadow-md">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-dark">
            <Icon name="message" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-medium uppercase tracking-wide text-ink-soft">Text</span>
            <span className="block font-semibold text-charcoal">{business.textNumber}</span>
          </span>
        </a>
      )}

      {business.email && (
        <a href={`mailto:${business.email}`} className="card flex items-center gap-4 hover:shadow-md">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-dark">
            <Icon name="chat" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-medium uppercase tracking-wide text-ink-soft">Email</span>
            <span className="block break-all font-semibold text-charcoal">{business.email}</span>
          </span>
        </a>
      )}

      <div className="card flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-dark">
          <Icon name="building" className="h-5 w-5" />
        </span>
        <span>
          <span className="block text-xs font-medium uppercase tracking-wide text-ink-soft">Service area</span>
          <span className="block font-semibold text-charcoal">{business.mainServiceArea}</span>
        </span>
      </div>

      {business.hours && (
        <div className="card flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber-dark">
            <Icon name="calendar" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-xs font-medium uppercase tracking-wide text-ink-soft">Business hours</span>
            <span className="block font-semibold text-charcoal">{business.hours}</span>
          </span>
        </div>
      )}

      {socials.length > 0 && (
        <div className="card sm:col-span-2">
          <span className="block text-xs font-medium uppercase tracking-wide text-ink-soft">Find us online</span>
          <div className="mt-2 flex flex-wrap gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-amber-dark hover:text-charcoal"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
