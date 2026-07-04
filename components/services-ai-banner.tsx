"use client";

import { AccentStrip } from "@/components/accent-strip";
import { ScrollReveal } from "@/components/scroll-reveal";

type Props = {
  text: string;
};

export function ServicesAiBanner({ text }: Props) {
  return (
    <ScrollReveal trigger="mount" duration={0.45}>
      <AccentStrip ariaLabel={text}>
        <p className="mx-auto max-w-4xl text-center text-sm font-medium leading-snug text-[#1a1b1c] md:text-base">
          {text}
        </p>
      </AccentStrip>
    </ScrollReveal>
  );
}
