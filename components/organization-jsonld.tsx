import { LENARA_ICON_SRC } from "@/lib/brand";
import { SITE_URL } from "@/lib/seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lenara Labs",
  url: SITE_URL,
  logo: `${SITE_URL}${LENARA_ICON_SRC}`,
  email: "hello@lenaralabs.com",
};

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
