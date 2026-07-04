import type { MetadataRoute } from "next";

import { pageUrl, SEO_DEFAULT_LOCALE, SITEMAP_ENTRIES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_ENTRIES.map(({ href, priority, changeFrequency }) => ({
    url: pageUrl(SEO_DEFAULT_LOCALE, href),
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
