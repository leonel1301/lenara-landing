import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Gamepad2 } from "lucide-react";

import { AppShowcase } from "@/components/app-showcase";
import { BrokenCompassGallery } from "@/components/broken-compass-gallery";
import { WaloopShowcase } from "@/components/waloop-showcase";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/webpage-jsonld";
import { EyebrowBadge } from "@/components/eyebrow-badge";
import { FullscreenSection } from "@/components/fullscreen-section";
import { ScrollIndicator } from "@/components/scroll-indicator";
import {
  ScrollReveal,
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/scroll-reveal";
import { WALOOP_APP_STORE_URL } from "@/lib/apps";
import {
  BROKEN_COMPASS_DAY_PRESENTATION,
  BROKEN_COMPASS_NIGHT_PRESENTATION,
} from "@/lib/broken-compass-presentation";
import { BROKEN_COMPASS_MUSIC_TRACKS } from "@/lib/broken-compass-music";
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
  const techStackItems = t.raw("waloop.techStack.items") as Record<string, string>;
  const brokenCompassTracks = BROKEN_COMPASS_MUSIC_TRACKS.map((track) => ({
    id: track.id,
    src: track.src,
    title: t(`brokenCompass.tracks.${track.titleKey}.title`),
    description: t(`brokenCompass.tracks.${track.titleKey}.description`),
  }));
  const buildBrokenCompassSlides = (
    slides: typeof BROKEN_COMPASS_NIGHT_PRESENTATION | typeof BROKEN_COMPASS_DAY_PRESENTATION,
  ) =>
    slides.map((slide) => ({
      src: slide.src,
      label: t(`brokenCompass.presentation.${slide.titleKey}.label`),
      alt: t(`brokenCompass.presentation.${slide.titleKey}.alt`),
    }));
  const brokenCompassNightSlides = buildBrokenCompassSlides(BROKEN_COMPASS_NIGHT_PRESENTATION);
  const brokenCompassDaySlides = buildBrokenCompassSlides(BROKEN_COMPASS_DAY_PRESENTATION);

  return (
    <>
      <WebPageJsonLd
        locale={locale as Locale}
        href="/apps"
        name={t("title")}
        description={t("description")}
      />
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
          <WaloopShowcase
            badge={t("waloop.badge")}
            name={t("waloop.name")}
            nameHref="/apps/waloop"
            nameLinkAria={t("waloop.nameLinkAria")}
            description={t("waloop.description")}
            platformsLabel={t("waloop.platformsLabel")}
            appStoreHref={WALOOP_APP_STORE_URL}
            androidSoonLabel={t("waloop.androidSoonLabel")}
            iosSlides={waloopIosGallery}
            androidSlides={waloopAndroidGallery}
            galleryLabel={t("waloop.galleryLabel")}
            carouselPrevLabel={tCommon("carouselPrev")}
            carouselNextLabel={tCommon("carouselNext")}
            iosLabel={t("waloop.platformIos")}
            androidLabel={t("waloop.platformAndroid")}
            techStackLabels={{
              label: t("waloop.techStack.label"),
              items: techStackItems,
            }}
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
        id="broken-compass"
        containerClassName="max-w-6xl"
        className="border-t border-border"
      >
        <ScrollReveal delay={0.05}>
          <AppShowcase
            badge={t("brokenCompass.badge")}
            name={t("brokenCompass.name")}
            description={t("brokenCompass.description")}
            reversed
            availability={
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">
                  {t("brokenCompass.statusLabel")}
                </p>
                <span className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-badge px-3 py-2 text-sm font-medium text-primary">
                  <Gamepad2 className="size-4" strokeWidth={1.75} aria-hidden />
                  {t("brokenCompass.statusDetail")}
                </span>
              </div>
            }
            media={
              <BrokenCompassGallery
                nightSlides={brokenCompassNightSlides}
                daySlides={brokenCompassDaySlides}
                label={t("brokenCompass.galleryLabel")}
                previousLabel={t("brokenCompass.galleryPrevious")}
                nextLabel={t("brokenCompass.galleryNext")}
                music={{
                  title: t("brokenCompass.musicTitle"),
                  tracks: brokenCompassTracks,
                  label: t("brokenCompass.musicLabel"),
                  playLabel: t("brokenCompass.playLabel"),
                  pauseLabel: t("brokenCompass.pauseLabel"),
                }}
              />
            }
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
