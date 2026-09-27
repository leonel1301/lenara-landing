import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/webpage-jsonld";
import { FullscreenSection } from "@/components/fullscreen-section";
import { PageCta } from "@/components/page-cta";
import { PageHero } from "@/components/page-hero";
import { ProcessShowcase } from "@/components/process-showcase";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import {
  getProcessImagePath,
  processSteps,
  type ProcessStep,
} from "@/lib/process";
import { buildAlternates, buildOpenGraph, buildTwitter } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "process.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: buildAlternates(locale as Locale, "/process"),
    openGraph: buildOpenGraph(
      locale as Locale,
      "/process",
      t("title"),
      t("description"),
    ),
    twitter: buildTwitter(t("title"), t("description")),
  };
}

export default async function ProcessPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("process");
  const tCommon = await getTranslations("common");
  const tNav = await getTranslations("header");
  const firstStep = processSteps[0];
  const stackTools = t.raw("stack.tools") as Record<string, string>;
  const stackAi = t.raw("stack.ai") as Record<string, string>;
  const stackLabels = {
    toolsLabel: t("stack.toolsLabel"),
    aiLabel: t("stack.aiLabel"),
    tools: stackTools,
    ai: stackAi,
  };
  return (
    <>
      <WebPageJsonLd
        locale={locale as Locale}
        href="/process"
        name={t("title")}
        description={t("description")}
      />
      <BreadcrumbJsonLd
        locale={locale as Locale}
        items={[
          { name: tNav("nav.home"), href: "/" },
          { name: tNav("nav.process"), href: "/process" },
        ]}
      />
      <PageHero
        title={t("title")}
        description={t("description")}
        indexLabel={tCommon("onThisPage")}
        items={processSteps.map((id) => ({
          id,
          label: t(`steps.${id}.title`),
        }))}
        scrollIndicator={
          <ScrollIndicator
            href={`#${firstStep}`}
            label={tCommon("scrollDown")}
          />
        }
      />

      {processSteps.map((id, index) => (
        <FullscreenSection
          key={id}
          id={id}
          containerClassName="max-w-6xl"
        >
          <ProcessShowcase
            id={id as ProcessStep}
            step={index + 1}
            totalSteps={processSteps.length}
            stepLabel={t("stepLabel", {
              step: index + 1,
              total: processSteps.length,
            })}
            title={t(`steps.${id}.title`)}
            description={t(`steps.${id}.description`)}
            imageSrc={getProcessImagePath(id)}
            imageAlt={t(`steps.${id}.imageAlt`)}
            stackLabels={stackLabels}
            reversed={index % 2 === 1}
          />
        </FullscreenSection>
      ))}

      <PageCta
        title={t("cta.title")}
        description={t("cta.description")}
        buttonLabel={t("cta.button")}
        buttonHref="/#contact"
      />
    </>
  );
}
