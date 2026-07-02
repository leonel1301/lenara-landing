import type { Metadata } from "next";

import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export const SITE_URL = "https://lenaralabs.com";

/**
 * Canonical/primary locale. Must match `routing.defaultLocale` so the "as-needed"
 * URLs (e.g. lenaralabs.com/apps) and the hreflang `x-default` point at the same
 * language and Google indexes one consistent version per page.
 */
export const SEO_DEFAULT_LOCALE: Locale = "en";

/** Default social share image (1200×630) used for Open Graph and Twitter cards. */
export const SITE_OG_IMAGE = "/og/og-default.png";

type Href = Parameters<typeof getPathname>[0]["href"];

export function pageUrl(locale: Locale, href: Href = "/"): string {
  const pathname = getPathname({ locale, href });
  return `${SITE_URL}${pathname}`;
}

export function buildAlternates(
  locale: Locale,
  href: Href = "/",
): NonNullable<Metadata["alternates"]> {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, pageUrl(l, href)]),
  ) as Record<string, string>;

  languages["x-default"] = pageUrl(SEO_DEFAULT_LOCALE, href);

  return {
    canonical: pageUrl(locale, href),
    languages,
  };
}

export function buildOpenGraph(
  locale: Locale,
  href: Href,
  title: string,
  description: string,
): NonNullable<Metadata["openGraph"]> {
  return {
    type: "website",
    locale: locale === "es" ? "es_ES" : "en_US",
    url: pageUrl(locale, href),
    siteName: "Lenara Labs",
    title,
    description,
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Lenara Labs",
      },
    ],
  };
}

export function buildTwitter(
  title: string,
  description: string,
): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    title,
    description,
    images: [SITE_OG_IMAGE],
  };
}

export const SITEMAP_PATHS = [
  "/",
  "/apps",
  "/apps/waloop",
  "/apps/waloop/privacy",
  "/apps/waloop/terms",
  "/apps/waloop/faq",
] as const satisfies readonly Href[];
