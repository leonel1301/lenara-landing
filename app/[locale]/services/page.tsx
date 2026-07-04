import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/webpage-jsonld";
import { EyebrowBadge } from "@/components/eyebrow-badge";
import { FullscreenSection } from "@/components/fullscreen-section";
import { PageCta } from "@/components/page-cta";
import { ServicesAiBanner } from "@/components/services-ai-banner";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { ServiceShowcase } from "@/components/service-showcase";
import {
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/scroll-reveal";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import {
  getServiceImagePath,
  servicePageOrder,
} from "@/lib/services";
import { buildAlternates, buildOpenGraph, buildTwitter } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale as Locale, "/services"),
    openGraph: buildOpenGraph(
      locale as Locale,
      "/services",
      t("title"),
      t("description"),
    ),
    twitter: buildTwitter(t("title"), t("description")),
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("header");
  const firstService = servicePageOrder[0];

  return (
    <>
      <WebPageJsonLd
        locale={locale as Locale}
        href="/services"
        name={t("title")}
        description={t("description")}
      />
      <BreadcrumbJsonLd
        locale={locale as Locale}
        items={[
          { name: tNav("nav.home"), href: "/" },
          { name: tNav("nav.services"), href: "/services" },
        ]}
      />
      <FullscreenSection
        fullHeight
        containerClassName="max-w-3xl items-center text-center"
        className="border-b border-border bg-background"
        scrollIndicator={
          <ScrollIndicator
            href={`#${firstService}`}
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

      <ServicesAiBanner text={t("aiBanner")} />

      {servicePageOrder.map((id, index) => (
        <FullscreenSection
          key={id}
          id={id}
          containerClassName="max-w-6xl"
          className={index > 0 ? "border-t border-border" : undefined}
        >
          <ServiceShowcase
            id={id}
            title={t(`items.${id}.title`)}
            description={t(`items.${id}.description`)}
            imageSrc={getServiceImagePath(id)}
            imageAlt={t(`items.${id}.imageAlt`)}
            reversed={index % 2 === 1}
          />
        </FullscreenSection>
      ))}

      <FullscreenSection
        containerClassName="max-w-3xl items-center text-center"
        className="border-t border-border"
      >
        <PageCta
          title={t("cta.title")}
          description={t("cta.description")}
          buttonLabel={t("cta.button")}
          buttonHref="/#contact"
        />
      </FullscreenSection>
    </>
  );
}
