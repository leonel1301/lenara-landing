import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { AboutSection } from "@/components/about-section";
import { ContactSection, buildServiceLabels } from "@/components/contact-section";
import { EyebrowBadge } from "@/components/eyebrow-badge";
import { HeroCta } from "@/components/hero-cta";
import { FullscreenSection } from "@/components/fullscreen-section";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { ProcessSteps } from "@/components/process-steps";
import {
  ScrollReveal,
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/scroll-reveal";
import { ServiceCards } from "@/components/service-cards";
import { TypewriterText } from "@/components/typewriter-text";
import { processSteps as processStepsList } from "@/lib/process";
import { projectAreas as projectAreasList } from "@/lib/projects";
import { serviceItems as servicesList } from "@/lib/services";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

const processSteps = processStepsList;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function OverviewPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");
  const typewriterPhrases = t.raw("typewriterPhrases") as string[];
  const services = servicesList.map((item) => ({
    id: item,
    title: t(`services.items.${item}.title`),
    description: t(`services.items.${item}.description`),
  }));
  const process = processSteps.map((step, index) => ({
    id: step,
    step: index + 1,
    title: t(`process.steps.${step}.title`),
    description: t(`process.steps.${step}.description`),
  }));

  return (
    <>
      <FullscreenSection
        fullHeight
        containerClassName="max-w-3xl items-center text-center"
        className="border-b border-border bg-background"
        scrollIndicator={
          <ScrollIndicator
            href="#services"
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

      <FullscreenSection id="services" containerClassName="max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
          <ScrollReveal className="space-y-3 lg:sticky lg:top-24">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground">{t("services.description")}</p>
          </ScrollReveal>
          <ServiceCards items={services} compact magazine />
        </div>
      </FullscreenSection>

      <FullscreenSection containerClassName="max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
          <ScrollReveal className="space-y-3 lg:sticky lg:top-24">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {t("process.title")}
            </h2>
            <p className="text-muted-foreground">{t("process.description")}</p>
          </ScrollReveal>
          <ProcessSteps items={process} compact />
        </div>
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
