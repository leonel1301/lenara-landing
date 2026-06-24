import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AppShowcase } from "@/components/app-showcase";
import { EyebrowBadge } from "@/components/eyebrow-badge";
import { FullscreenSection } from "@/components/fullscreen-section";
import { ScrollIndicator } from "@/components/scroll-indicator";
import {
  ScrollReveal,
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/scroll-reveal";
import {
  WALOOP_VIDEO_POSTER,
  WALOOP_VIDEO_SRC,
  TIMES2U_VIDEO_POSTER,
  TIMES2U_VIDEO_SRC,
} from "@/lib/apps";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { buildAlternates, buildOpenGraph } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "apps.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale as Locale, "/apps"),
    openGraph: buildOpenGraph(locale as Locale, "/apps", t("title"), t("description")),
  };
}

export default async function AppsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("apps");
  const tCommon = await getTranslations("common");
  const waloopSubtitles = t.raw("waloop.subtitles") as string[];
  const times2uSubtitles = t.raw("times2u.subtitles") as string[];

  return (
    <>
      <FullscreenSection
        fullHeight
        containerClassName="max-w-3xl items-center text-center"
        className="border-b border-border bg-background"
        scrollIndicator={
          <ScrollIndicator
            href="#waloop"
            label={tCommon("scrollDown")}
          />
        }
      >
        <ScrollRevealStagger
          trigger="mount"
          stagger={0.12}
          className="flex w-full flex-col items-center gap-6"
        >
          <ScrollRevealItem>
            <EyebrowBadge>{t("eyebrow")}</EyebrowBadge>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {t("title")}
            </h1>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
          </ScrollRevealItem>
        </ScrollRevealStagger>
      </FullscreenSection>

      <FullscreenSection id="waloop" containerClassName="max-w-6xl">
        <ScrollReveal delay={0.05}>
          <AppShowcase
            badge={t("waloop.badge")}
            name={t("waloop.name")}
            nameHref="/apps/waloop"
            nameLinkAria={t("waloop.nameLinkAria")}
            description={t("waloop.description")}
            platformsLabel={t("waloop.platformsLabel")}
            iosLabel={t("waloop.iosLabel")}
            androidSoonLabel={t("waloop.androidSoonLabel")}
            subtitles={waloopSubtitles}
            videoLabel={t("waloop.videoLabel")}
            videoFallback={t("waloop.videoFallback")}
            videoSrc={WALOOP_VIDEO_SRC}
            videoPoster={WALOOP_VIDEO_POSTER}
            legalLinks={{
              privacyHref: "/apps/waloop/privacy",
              termsHref: "/apps/waloop/terms",
              faqHref: "/apps/waloop/faq",
              feedbackHref: "/apps/waloop/feedback",
              privacyLabel: t("waloop.legal.privacyLink"),
              termsLabel: t("waloop.legal.termsLink"),
              faqLabel: t("waloop.legal.faqLink"),
              feedbackLabel: t("waloop.legal.feedbackLink"),
            }}
          />
        </ScrollReveal>
      </FullscreenSection>

      <FullscreenSection
        id="times2u"
        containerClassName="max-w-6xl"
        className="border-t border-border"
      >
        <ScrollReveal delay={0.05}>
          <AppShowcase
            badge={t("times2u.badge")}
            name={t("times2u.name")}
            description={t("times2u.description")}
            platformsLabel={t("times2u.platformsLabel")}
            iosLabel={t("times2u.iosLabel")}
            androidSoonLabel={t("times2u.androidSoonLabel")}
            subtitles={times2uSubtitles}
            videoLabel={t("times2u.videoLabel")}
            videoFallback={t("times2u.videoFallback")}
            videoSrc={TIMES2U_VIDEO_SRC}
            videoPoster={TIMES2U_VIDEO_POSTER}
            reversed
          />
        </ScrollReveal>
      </FullscreenSection>
    </>
  );
}
