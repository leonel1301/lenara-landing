import type { Locale } from "@/i18n/routing";
import { pageUrl, SITE_URL } from "@/lib/seo";

type Href = Parameters<typeof pageUrl>[1];

type Props = {
  locale: Locale;
  href: Href;
  name: string;
  description: string;
};

export function WebPageJsonLd({ locale, href, name, description }: Props) {
  const url = pageUrl(locale, href);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: locale === "es" ? "es-ES" : "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
