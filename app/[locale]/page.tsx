import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AboutSection } from "@/components/about-section";
import { ContactSection, buildServiceLabels } from "@/components/contact-section";
import { EyebrowBadge } from "@/components/eyebrow-badge";
import { HeroCta } from "@/components/hero-cta";
import { FullscreenSection } from "@/components/fullscreen-section";
import { ScrollIndicator } from "@/components/scroll-indicator";
import {
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/scroll-reveal";
import { TypewriterText } from "@/components/typewriter-text";
import { projectAreas as projectAreasList } from "@/lib/projects";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import { OrganizationJsonLd } from "@/components/organization-jsonld";
import { buildAlternates, buildOpenGraph, buildTwitter } from "@/lib/seo";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.metadata" });

  return {
    title: { absolute: t("title") },
    description: t("description"),
    alternates: buildAlternates(locale as Locale, "/"),
    openGraph: buildOpenGraph(locale as Locale, "/", t("title"), t("description")),
    twitter: buildTwitter(t("title"), t("description")),
  };
}

export default async function OverviewPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");
  const typewriterPhrases = t.raw("typewriterPhrases") as string[];

  return (
    <>
      <OrganizationJsonLd />
      <FullscreenSection
        fullHeight
        containerClassName="max-w-3xl items-center text-center"
        className="border-b border-border bg-background"
        scrollIndicator={
          <ScrollIndicator
            href="#about"
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
          <ScrollRevealItem className="w-full">
            <h1 className="w-full text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              <span className="inline-block min-h-[2.6em] md:min-h-[2.4em]">
                <TypewriterText phrases={typewriterPhrases} />
              </span>
            </h1>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <HeroCta
              contactLabel={t("hero.ctaContact")}
              servicesLabel={t("hero.ctaServices")}
            />
          </ScrollRevealItem>
        </ScrollRevealStagger>
      </FullscreenSection>

      <AboutSection
        title={t("about.title")}
        subtitle={t("about.subtitle")}
        founderLabel={t("about.founderLabel")}
        name={t("about.name")}
        role={t("about.role")}
        description={t("about.description")}
        profileLink={t("about.profileLink")}
        profileLinkAria={t("about.profileLinkAria")}
        initials={t("about.initials")}
        projectsLabel={t("about.projects.label")}
        projectsTitle={t("about.projects.title")}
        projectsDescription={t("about.projects.description")}
        projectAreas={projectAreasList.map((area) => ({
          id: area,
          label: t(`about.projects.areas.${area}`),
        }))}
        appsLink={t("about.appsLink")}
        appsLinkAria={t("about.appsLinkAria")}
      />

      <ContactSection
        title={t("contact.title")}
        headline={t("contact.headline")}
        description={t("contact.description")}
        email={t("contact.email")}
        responseTime={t("contact.responseTime")}
        fieldLabels={{
          fullName: {
            label: t("contact.form.fullName.label"),
            placeholder: t("contact.form.fullName.placeholder"),
          },
          email: {
            label: t("contact.form.email.label"),
            placeholder: t("contact.form.email.placeholder"),
          },
          company: {
            label: t("contact.form.company.label"),
            placeholder: t("contact.form.company.placeholder"),
          },
          service: {
            label: t("contact.form.service.label"),
            placeholder: t("contact.form.service.placeholder"),
          },
          message: {
            label: t("contact.form.message.label"),
            placeholder: t("contact.form.message.placeholder"),
          },
        }}
        serviceLabels={buildServiceLabels((key) => t(`contact.${key}`))}
        submit={t("contact.form.submit")}
        submitting={t("contact.form.submitting")}
      />
    </>
  );
}
