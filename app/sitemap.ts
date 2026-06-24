import type { MetadataRoute } from "next";

import { routing, type Locale } from "@/i18n/routing";
import { pageUrl, SEO_DEFAULT_LOCALE, SITEMAP_PATHS } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((href) => ({
    url: pageUrl(SEO_DEFAULT_LOCALE, href),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, pageUrl(locale as Locale, href)]),
      ),
    },
  }));
}
