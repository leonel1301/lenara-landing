import type { Metadata } from "next";

import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export const SITE_URL = "https://lenaralabs.com";

/**
 * Canonical locale for SEO. Must match `routing.defaultLocale`.
 * With `localePrefix: "never"`, every locale shares the same public URL;
 * crawlers always see the default (English) at the bare path.
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
  _locale: Locale,
  href: Href = "/",
): NonNullable<Metadata["alternates"]> {
  const canonical = pageUrl(SEO_DEFAULT_LOCALE, href);

  return { canonical };
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
    url: pageUrl(SEO_DEFAULT_LOCALE, href),
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

/** Primary site sections surfaced in navigation and structured data. */
export const MAIN_SITE_PAGES = [
  { href: "/", name: "Home" },
  { href: "/services", name: "Services" },
  { href: "/process", name: "Process" },
  { href: "/apps", name: "Our Apps" },
] as const satisfies readonly { href: Href; name: string }[];

type SitemapEntry = {
  href: Href;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

export const SITEMAP_ENTRIES = [
  { href: "/", priority: 1, changeFrequency: "weekly" },
  { href: "/services", priority: 0.9, changeFrequency: "monthly" },
  { href: "/process", priority: 0.9, changeFrequency: "monthly" },
  { href: "/apps", priority: 0.9, changeFrequency: "weekly" },
  { href: "/apps/waloop", priority: 0.7, changeFrequency: "monthly" },
  { href: "/apps/waloop/privacy", priority: 0.3, changeFrequency: "yearly" },
  { href: "/apps/waloop/terms", priority: 0.3, changeFrequency: "yearly" },
  { href: "/apps/waloop/faq", priority: 0.4, changeFrequency: "monthly" },
] as const satisfies readonly SitemapEntry[];
