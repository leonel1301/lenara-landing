import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPageShell } from "@/components/legal-page-shell";
import { routing } from "@/i18n/routing";
import { getWaloopTerms } from "@/lib/legal/waloop";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "apps.waloop.legal.terms.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://lenaralabs.com/${locale}/apps/waloop/terms`,
      languages: {
        en: "https://lenaralabs.com/en/apps/waloop/terms",
        es: "https://lenaralabs.com/es/apps/waloop/terms",
      },
    },
  };
}

export default async function WaloopTermsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("apps.waloop.legal");

  return (
    <LegalPageShell
      eyebrow={t("eyebrow")}
      backLabel={t("backToApp")}
      backHref="/apps/waloop"
      document={getWaloopTerms(locale)}
    />
  );
}
