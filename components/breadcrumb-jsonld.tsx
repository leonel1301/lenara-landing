import type { Locale } from "@/i18n/routing";
import { pageUrl } from "@/lib/seo";

type Crumb = { name: string; href: string };

type Props = {
  locale: Locale;
  items: Crumb[];
};

export function BreadcrumbJsonLd({ locale, items }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(locale, item.href as Parameters<typeof pageUrl>[1]),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
