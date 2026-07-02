import type { MetadataRoute } from "next";

import { pageUrl, SEO_DEFAULT_LOCALE, SITEMAP_PATHS } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((href) => ({
    url: pageUrl(SEO_DEFAULT_LOCALE, href),
    lastModified: new Date(),
  }));
}
