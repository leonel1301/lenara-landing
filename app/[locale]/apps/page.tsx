import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { NuudoShowcase } from "@/components/nuudo-showcase";
import { WaloopShowcase } from "@/components/waloop-showcase";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/webpage-jsonld";
import { FullscreenSection } from "@/components/fullscreen-section";
import { PageHero } from "@/components/page-hero";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SlabGhosts } from "@/components/slab";
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
  const techStackItems = t.raw("waloop.techStack.items") as Record<string, string>;
  const nuudoGallery = (["structure", "review", "infer"] as const).map((view) => ({
    src: `/images/nuudo/${locale}/${view}.jpg`,
    title: t(`nuudo.screens.${view}.title`),
    alt: t(`nuudo.screens.${view}.alt`),
    description: t(`nuudo.screens.${view}.description`),
  }));

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
      <PageHero
        title={t("title")}
        description={t("description")}
        indexLabel={tCommon("onThisPage")}
        items={[
          { id: "waloop", label: t("waloop.name"), detail: t("waloop.badge") },
          { id: "nuudo", label: t("nuudo.name"), detail: t("nuudo.badge") },
          {
            id: "coming-soon",
            label: t("comingSoon.title"),
            detail: t("comingSoon.eyebrow"),
          },
        ]}
        scrollIndicator={
          <ScrollIndicator
            href="#waloop"
            label={tCommon("scrollDown")}
          />
        }
      />

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
        id="nuudo"
        containerClassName="max-w-6xl"
      >
        <ScrollReveal delay={0.05}>
          <NuudoShowcase
            badge={t("nuudo.badge")}
            name={t("nuudo.name")}
            description={t("nuudo.description")}
            statusLabel={t("nuudo.statusLabel")}
            statusDetail={t("nuudo.statusDetail")}
            techStackLabel={t("nuudo.techStackLabel")}
            galleryLabel={t("nuudo.galleryLabel")}
            demoLabel={t("nuudo.demoLabel")}
            previousLabel={tCommon("carouselPrev")}
            nextLabel={tCommon("carouselNext")}
            expandLabel={t("nuudo.expandLabel")}
            closeLabel={t("nuudo.closeLabel")}
            slides={nuudoGallery}
          />
        </ScrollReveal>
      </FullscreenSection>

      <section
        id="coming-soon"
        className="slab-field scroll-mt-[var(--header-height)] px-6 py-20 md:py-28"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-x-10">
          <ScrollReveal className="space-y-5 lg:col-span-7">
            <h2 className="text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.035em] text-balance text-[var(--slab-ink)] md:text-6xl">
              {t("comingSoon.title")}
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-pretty text-[var(--slab-ink-soft)]">
              {t("comingSoon.description")}
            </p>
          </ScrollReveal>
          <SlabGhosts
            count={3}
            className="lg:col-span-4 lg:col-start-9 lg:pr-6"
          />
        </div>
      </section>
    </>
  );
}
