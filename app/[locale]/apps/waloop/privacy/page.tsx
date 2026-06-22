import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPageShell } from "@/components/legal-page-shell";
import { routing } from "@/i18n/routing";
import { getWaloopPrivacy } from "@/lib/legal/waloop";

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
    namespace: "apps.waloop.legal.privacy.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://lenaralabs.com/${locale}/apps/waloop/privacy`,
      languages: {
        en: "https://lenaralabs.com/en/apps/waloop/privacy",
        es: "https://lenaralabs.com/es/apps/waloop/privacy",
      },
    },
  };
}

export default async function WaloopPrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("apps.waloop.legal");

  return (
    <LegalPageShell
      eyebrow={t("eyebrow")}
      backLabel={t("backToApp")}
      backHref="/apps#waloop"
      document={getWaloopPrivacy(locale)}
    />
  );
}
