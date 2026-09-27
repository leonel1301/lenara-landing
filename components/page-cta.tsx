import { ArrowRight } from "lucide-react";

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
    <section className="slab-field px-6 py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-end gap-10 lg:grid-cols-12 lg:gap-x-10">
        <ScrollReveal className="space-y-5 lg:col-span-7">
          <h2 className="text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.035em] text-balance text-[var(--slab-ink)] md:text-6xl">
            {title}
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-pretty text-[var(--slab-ink-soft)]">
            {description}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
          <SectionLink
            href={buttonHref}
            bare
            className="slab-foot group relative flex h-14 items-center justify-between px-8 text-base font-semibold"
          >
            <span className="relative">{buttonLabel}</span>
            <ArrowRight
              aria-hidden
              className="relative size-5 transition-transform duration-300 ease-out group-hover:translate-x-1"
              strokeWidth={2}
            />
          </SectionLink>
        </ScrollReveal>
      </div>
    </section>
  );
}
