import type { Metadata } from "next";

import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

export const SITE_URL = "https://lenaralabs.com";

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

  languages["x-default"] = pageUrl(routing.defaultLocale, href);

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
