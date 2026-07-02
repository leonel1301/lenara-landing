import { LENARA_ICON_SRC } from "@/lib/brand";
import { SITE_URL } from "@/lib/seo";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Lenara Labs",
      url: SITE_URL,
      logo: `${SITE_URL}${LENARA_ICON_SRC}`,
      email: "hello@lenaralabs.com",
      description:
        "Lenara Labs designs and builds digital products, websites, and mobile apps — for clients and its own portfolio.",
      founder: {
        "@type": "Person",
        name: "Leonel Ortega",
        jobTitle: "Founder & Lead Engineer",
      },
      sameAs: ["https://www.linkedin.com/company/lenaralabs"],
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@lenaralabs.com",
        contactType: "customer support",
        availableLanguage: ["en", "es"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Lenara Labs",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: ["en", "es"],
    },
  ],
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
