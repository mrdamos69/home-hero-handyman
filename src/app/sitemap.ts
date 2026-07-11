import type { MetadataRoute } from "next";
import { business } from "@/config/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.siteUrl;
  const routes = [
    "",
    "/services",
    "/property-maintenance",
    "/about",
    "/gallery",
    "/service-areas",
    "/estimate",
    "/contact",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/estimate" ? 0.9 : 0.7,
  }));
}
