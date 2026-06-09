import { ContactForm } from "@/components/contact-form";
import { FullscreenSection } from "@/components/fullscreen-section";
import {
  ScrollReveal,
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/scroll-reveal";
import { cn } from "@/lib/utils";
import { serviceItems, type ServiceItem } from "@/lib/services";

type Props = {
  title: string;
  headline: string;
  description: string;
  email: string;
  responseTime: string;
  fieldLabels: {
    fullName: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    company: { label: string; placeholder: string };
    service: { label: string; placeholder: string };
    message: { label: string; placeholder: string };
  };
  serviceLabels: Record<ServiceItem, string>;
  submit: string;
  submitting: string;
};

export function ContactSection({
  title,
  headline,
  description,
  email,
  responseTime,
  fieldLabels,
  serviceLabels,
  submit,
  submitting,
}: Props) {
  return (
    <FullscreenSection
      id="contact"
      containerClassName="max-w-5xl"
      className="border-t border-border bg-background"
    >
      <div className="flex flex-col gap-8 md:gap-10">
        <ScrollReveal className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground">{description}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <ScrollRevealStagger
            stagger={0.12}
            className={cn(
              "overflow-hidden rounded-xl border border-border bg-background",
              "shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_6%,transparent)]",
              "lg:grid lg:grid-cols-[1fr_1.15fr]",
            )}
          >
            <ScrollRevealItem className="flex flex-col justify-center space-y-4 border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-lg font-medium leading-snug text-foreground md:text-xl">
                {headline}
              </p>
              <div className="space-y-2">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex text-sm font-medium text-primary transition-colors hover:text-[var(--primary-hover)]"
                >
                  {email}
                </a>
                <p className="text-sm text-muted-foreground">{responseTime}</p>
              </div>
            </ScrollRevealItem>

            <ScrollRevealItem className="p-6 md:p-8 lg:p-10">
              <ContactForm
                email={email}
                responseTime={responseTime}
                fieldLabels={fieldLabels}
                serviceLabels={serviceLabels}
                submit={submit}
                submitting={submitting}
                compact
              />
            </ScrollRevealItem>
          </ScrollRevealStagger>
        </ScrollReveal>
      </div>
    </FullscreenSection>
  );
}

export function buildServiceLabels(
  t: (key: string) => string,
): Record<ServiceItem, string> {
  return Object.fromEntries(
    serviceItems.map((item) => [item, t(`services.${item}`)]),
  ) as Record<ServiceItem, string>;
}
