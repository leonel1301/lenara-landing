import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPageShell } from "@/components/legal-page-shell";
import { routing } from "@/i18n/routing";
import { getCardsReminderPrivacy } from "@/lib/legal/cards-reminder";

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
    namespace: "apps.cardsReminder.legal.privacy.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CardsReminderPrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("apps.cardsReminder.legal");

  return (
    <LegalPageShell
      eyebrow={t("eyebrow")}
      backLabel={t("backToApp")}
      backHref="/apps#cards-reminder"
      document={getCardsReminderPrivacy(locale)}
    />
  );
}
