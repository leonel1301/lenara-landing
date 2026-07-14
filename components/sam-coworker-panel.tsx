"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { ShowcaseMediaReveal } from "@/components/showcase-media-reveal";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Bullet = {
  text: string;
  highlighted?: boolean;
};

type Props = {
  label: string;
  chatUserLabel: string;
  chatUserMessage: string;
  chatBotLabel: string;
  chatBotIntro: string;
  bullets: Bullet[];
  resultLabel: string;
};

export function SamCoworkerPanel({
  label,
  chatUserLabel,
  chatUserMessage,
  chatBotLabel,
  chatBotIntro,
  bullets,
  resultLabel,
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <ShowcaseMediaReveal
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-xl border border-border",
        "bg-section shadow-[0_18px_40px_-28px_rgba(44,45,46,0.35)]",
        "dark:bg-section dark:shadow-[0_22px_48px_-28px_rgba(0,0,0,0.65)]",
      )}
      aria-label={label}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <MessageCircle className="size-4 text-primary" strokeWidth={1.75} aria-hidden />
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {label}
        </p>
      </div>

      <div className="flex flex-col gap-3 p-4 sm:gap-4 sm:p-5">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="ml-auto max-w-[92%] space-y-1.5"
        >
          <p className="text-right text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
            {chatUserLabel}
          </p>
          <div className="rounded-2xl rounded-br-md border border-border bg-background px-3.5 py-3 text-sm leading-relaxed text-foreground">
            {chatUserMessage}
          </div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: prefersReducedMotion ? 0 : 0.12, ease: easeOut }}
          className="mr-auto max-w-[95%] space-y-1.5"
        >
          <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
            {chatBotLabel}
          </p>
          <div className="space-y-3 rounded-2xl rounded-bl-md border border-primary/15 bg-badge/70 px-3.5 py-3">
            <p className="text-sm leading-relaxed text-foreground">{chatBotIntro}</p>
            <ul className="space-y-2">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={bullet.text}
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 8 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{
                    duration: 0.4,
                    delay: prefersReducedMotion ? 0 : 0.22 + index * 0.07,
                    ease: easeOut,
                  }}
                  className={cn(
                    "rounded-md px-2.5 py-1.5 text-sm leading-snug",
                    bullet.highlighted
                      ? "bg-background/90 font-medium text-foreground ring-1 ring-primary/20"
                      : "text-muted-foreground/65 line-through decoration-border",
                  )}
                >
                  {bullet.text}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.p
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: prefersReducedMotion ? 0 : 0.4, ease: easeOut }}
        className="border-t border-border px-4 py-3 text-sm text-muted-foreground sm:px-5"
      >
        {resultLabel}
      </motion.p>
    </ShowcaseMediaReveal>
  );
}
