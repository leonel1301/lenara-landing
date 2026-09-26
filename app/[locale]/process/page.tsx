import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { WebPageJsonLd } from "@/components/webpage-jsonld";
import { EyebrowBadge } from "@/components/eyebrow-badge";
import { FullscreenSection } from "@/components/fullscreen-section";
import { PageCta } from "@/components/page-cta";
import { ProcessLayersHero } from "@/components/process-layers-hero";
import { ProcessShowcase } from "@/components/process-showcase";
import { ScrollIndicator } from "@/components/scroll-indicator";
import {
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/scroll-reveal";
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
  const heroLayers = processSteps.map((id, index) => ({
    id,
    number: String(index + 1).padStart(2, "0"),
    title: t(`steps.${id}.title`),
  }));

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
      <FullscreenSection
        fullHeight
        containerClassName="relative z-10 max-w-7xl"
        className="overflow-hidden border-b border-border bg-background"
        scrollIndicator={
          <ScrollIndicator
            href={`#${firstStep}`}
            label={tCommon("scrollDown")}
          />
        }
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 bottom-12 size-80 rounded-full bg-[var(--icon-4)]/10 blur-3xl"
        />
        <div className="grid w-full items-center gap-10 py-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:py-0">
          <ScrollRevealStagger
            trigger="mount"
            stagger={0.12}
            className="flex w-full flex-col items-start gap-6 text-left"
          >
            <ScrollRevealItem>
              <EyebrowBadge>{t("eyebrow")}</EyebrowBadge>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.035em] text-foreground md:text-6xl lg:text-7xl lg:leading-[0.96]">
                {t("title")}
              </h1>
            </ScrollRevealItem>
            <ScrollRevealItem>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {t("description")}
              </p>
            </ScrollRevealItem>
            <ScrollRevealItem className="w-full">
              <nav aria-label={t("visual.stepsLabel")} className="w-full">
                <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
                  {heroLayers.map((layer) => (
                    <li key={layer.id}>
                      <a
                        href={`#${layer.id}`}
                        className="group flex items-center gap-2 rounded-xl border border-border/80 bg-card/45 px-3 py-2.5 text-sm text-foreground transition-[border-color,background-color,transform] hover:-translate-y-0.5 hover:border-primary/35 hover:bg-card"
                      >
                        <span className="font-mono text-[10px] font-semibold tracking-wider text-primary/75">
                          {layer.number}
                        </span>
                        <span className="truncate font-medium text-foreground/85 group-hover:text-primary">
                          {layer.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </ScrollRevealItem>
          </ScrollRevealStagger>

          <ScrollRevealItem className="w-full">
            <ProcessLayersHero
              layers={heroLayers}
              kicker={t("visual.kicker")}
              hint={t("visual.hint")}
            />
          </ScrollRevealItem>
        </div>
      </FullscreenSection>

      {processSteps.map((id, index) => (
        <FullscreenSection
          key={id}
          id={id}
          containerClassName="max-w-6xl"
          className={index > 0 ? "border-t border-border" : undefined}
        >
          <ProcessShowcase
            id={id as ProcessStep}
            step={index + 1}
            title={t(`steps.${id}.title`)}
            description={t(`steps.${id}.description`)}
            imageSrc={getProcessImagePath(id)}
            imageAlt={t(`steps.${id}.imageAlt`)}
            stackLabels={stackLabels}
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
