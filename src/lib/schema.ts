import { business } from "@/config/business";
import type { FaqItem } from "@/config/faq";

/** LocalBusiness / HomeAndConstructionBusiness JSON-LD for the whole site. */
export function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: business.name,
    description:
      "Professional handyman services for home repairs, installations and property maintenance in Los Angeles.",
    url: business.siteUrl,
    areaServed: business.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, CA`,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
  };
  if (business.phoneHref) schema.telephone = business.phoneHref;
  if (business.email) schema.email = business.email;
  const sameAs = [
    business.social.instagram,
    business.social.yelp,
    business.social.googleBusiness,
  ].filter(Boolean);
  if (sameAs.length) schema.sameAs = sameAs;
  return schema;
}

/** FAQPage JSON-LD — only for FAQs actually rendered on the page. */
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** BreadcrumbList JSON-LD for inner pages. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${business.siteUrl}${crumb.path}`,
    })),
  };
}
