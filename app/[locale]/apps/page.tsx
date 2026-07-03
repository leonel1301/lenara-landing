import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AppCarousel } from "@/components/app-carousel";
import { AppShowcase } from "@/components/app-showcase";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { EyebrowBadge } from "@/components/eyebrow-badge";
import { FullscreenSection } from "@/components/fullscreen-section";
import { ScrollIndicator } from "@/components/scroll-indicator";
import {
  ScrollReveal,
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/scroll-reveal";
import { WALOOP_APP_STORE_URL } from "@/lib/apps";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { buildAlternates, buildOpenGraph, buildTwitter } from "@/lib/seo";

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
    twitter: buildTwitter(t("title"), t("description")),
  };
}

export default async function AppsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("apps");
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("header");
  const buildWaloopGallery = (platform: "ios" | "android") =>
    Array.from({ length: 6 }, (_, i) => {
      const number = i + 1;
      return {
        src: `/images/waloop/${platform}/${locale}/Frame%20${number}.png`,
        alt: t("waloop.screenshotAlt", { number }),
      };
    });
  const waloopIosGallery = buildWaloopGallery("ios");
  const waloopAndroidGallery = buildWaloopGallery("android");

  return (
    <>
      <BreadcrumbJsonLd
        locale={locale as Locale}
        items={[
          { name: tNav("nav.home"), href: "/" },
          { name: tNav("nav.apps"), href: "/apps" },
        ]}
      />
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
            appStoreHref={WALOOP_APP_STORE_URL}
            androidSoonLabel={t("waloop.androidSoonLabel")}
            media={
              <AppCarousel
                iosSlides={waloopIosGallery}
                androidSlides={waloopAndroidGallery}
                label={t("waloop.galleryLabel")}
                prevLabel={tCommon("carouselPrev")}
                nextLabel={tCommon("carouselNext")}
                iosLabel={t("waloop.platformIos")}
                androidLabel={t("waloop.platformAndroid")}
              />
            }
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
        id="coming-soon"
        containerClassName="max-w-3xl items-center text-center"
        className="border-t border-border"
      >
        <ScrollReveal
          delay={0.05}
          className="flex w-full flex-col items-center gap-5"
        >
          <EyebrowBadge>{t("comingSoon.eyebrow")}</EyebrowBadge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t("comingSoon.title")}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t("comingSoon.description")}
          </p>
        </ScrollReveal>
      </FullscreenSection>
    </>
  );
}
