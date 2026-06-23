import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPageShell } from "@/components/legal-page-shell";
import { routing } from "@/i18n/routing";
import { getWaloopFaq } from "@/lib/legal/waloop";

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
    namespace: "apps.waloop.legal.faq.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://lenaralabs.com/${locale}/apps/waloop/faq`,
      languages: {
        en: "https://lenaralabs.com/en/apps/waloop/faq",
        es: "https://lenaralabs.com/es/apps/waloop/faq",
      },
    },
  };
}

export default async function WaloopFaqPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("apps.waloop.legal");

  return (
    <LegalPageShell
      eyebrow={t("eyebrow")}
      backLabel={t("backToApp")}
      backHref="/apps/waloop"
      document={getWaloopFaq(locale)}
    />
  );
}
