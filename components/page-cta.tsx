import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionLink } from "@/components/section-link";

type Props = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: `/#${string}`;
};

export function PageCta({ title, description, buttonLabel, buttonHref }: Props) {
  return (
    <ScrollReveal
      delay={0.05}
      className="flex w-full flex-col items-center gap-5"
    >
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
      <SectionLink href={buttonHref} size="lg" className="h-11 px-6">
        {buttonLabel}
      </SectionLink>
    </ScrollReveal>
  );
}
