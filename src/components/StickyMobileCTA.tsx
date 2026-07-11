import Link from "next/link";
import Icon from "@/components/Icon";
import { business } from "@/config/business";

/**
 * Fixed bottom action bar, mobile only (hidden on md+ screens).
 * Call and Text buttons only render when the numbers are configured.
 */
export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-stretch gap-2 px-3 py-2">
        {business.phoneHref && (
          <a
            href={`tel:${business.phoneHref}`}
            className="btn-outline flex-1 !px-2 text-xs"
            aria-label={`Call ${business.shortName}`}
          >
            <Icon name="phone" className="h-4 w-4" />
            Call
          </a>
        )}
        {business.textHref && (
          <a
            href={`sms:${business.textHref}`}
            className="btn-outline flex-1 !px-2 text-xs"
            aria-label={`Text ${business.shortName}`}
          >
            <Icon name="message" className="h-4 w-4" />
            Text
          </a>
        )}
        <Link href="/estimate" className="btn-primary flex-[1.4] !px-2 text-xs">
          Request an Estimate
        </Link>
      </div>
    </div>
  );
}
