import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { EyebrowBadge } from "@/components/eyebrow-badge";
import { FullscreenSection } from "@/components/fullscreen-section";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

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
    namespace: "apps.waloop.page.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://lenaralabs.com/${locale}/apps/waloop`,
      languages: {
        en: "https://lenaralabs.com/en/apps/waloop",
        es: "https://lenaralabs.com/es/apps/waloop",
      },
    },
  };
}

export default async function WaloopPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("apps.waloop");
  const tPage = await getTranslations("apps.waloop.page");
  const subtitles = t.raw("subtitles") as string[];

  return (
    <FullscreenSection containerClassName="max-w-3xl">
      <div className="space-y-8">
        <Link
          href="/apps"
          className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 shrink-0" aria-hidden />
          <span>{tPage("backToApps")}</span>
        </Link>

        <div className="space-y-4">
          <EyebrowBadge>{t("badge")}</EyebrowBadge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            {t("name")}
          </h1>
          <p className="text-lg font-medium text-primary">{t("tagline")}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {tPage("purposeTitle")}
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {tPage("purpose")}
          </p>
          <p className="text-sm text-muted-foreground">{tPage("developedBy")}</p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {tPage("featuresTitle")}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {subtitles.map((feature) => (
              <li
                key={feature}
                className="rounded-lg border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <nav
          aria-label={t("legal.privacyLink")}
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
        >
          <Link
            href="/apps/waloop/privacy"
            className="font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {t("legal.privacyLink")}
          </Link>
          <Link
            href="/apps/waloop/terms"
            className="font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {t("legal.termsLink")}
          </Link>
          <Link
            href="/apps/waloop/faq"
            className="font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {t("legal.faqLink")}
          </Link>
          <Link
            href="/apps/waloop/feedback"
            className="font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {t("legal.feedbackLink")}
          </Link>
        </nav>
      </div>
    </FullscreenSection>
  );
}
