import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { WaloopFeedbackList } from "@/components/waloop-feedback-list";
import { WaloopSubpageShell } from "@/components/waloop-subpage-shell";
import { routing } from "@/i18n/routing";
import { FeedbackFetchError, fetchFeedback } from "@/lib/feedback/fetch-feedback";
import type { FeedbackAdminItem } from "@/lib/feedback/types";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "apps.waloop.feedback.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `https://lenaralabs.com/${locale}/apps/waloop/feedback`,
      languages: {
        en: "https://lenaralabs.com/en/apps/waloop/feedback",
        es: "https://lenaralabs.com/es/apps/waloop/feedback",
      },
    },
  };
}

export default async function WaloopFeedbackPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("apps.waloop");
  const tLegal = await getTranslations("apps.waloop.legal");

  let items: FeedbackAdminItem[] = [];
  let errorMessage: string | null = null;

  try {
    items = await fetchFeedback();
  } catch (error) {
    if (error instanceof FeedbackFetchError && error.status === 401) {
      errorMessage = t("feedback.errorUnauthorized");
    } else {
      errorMessage = t("feedback.errorGeneric");
    }
  }

  return (
    <WaloopSubpageShell
      eyebrow={tLegal("eyebrow")}
      backLabel={tLegal("backToApp")}
      backHref="/apps/waloop"
      title={t("feedback.title")}
      description={t("feedback.description")}
    >
      {errorMessage ? (
        <div
          role="alert"
          className="rounded-xl border border-destructive/30 bg-destructive/5 px-5 py-4 text-sm text-destructive"
        >
          {errorMessage}
        </div>
      ) : (
        <WaloopFeedbackList
          items={items}
          labels={{
            emptyTitle: t("feedback.emptyTitle"),
            emptyDescription: t("feedback.emptyDescription"),
            count: t("feedback.count", { count: items.length }),
            updatedLabel: t("feedback.updatedLabel"),
          }}
        />
      )}
    </WaloopSubpageShell>
  );
}
