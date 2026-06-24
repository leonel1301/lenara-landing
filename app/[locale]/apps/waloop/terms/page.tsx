import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LegalPageShell } from "@/components/legal-page-shell";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { getWaloopTerms } from "@/lib/legal/waloop";
import { buildAlternates, buildOpenGraph } from "@/lib/seo";

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
    alternates: buildAlternates(locale as Locale, "/apps/waloop/terms"),
    openGraph: buildOpenGraph(
      locale as Locale,
      "/apps/waloop/terms",
      t("title"),
      t("description"),
    ),
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
