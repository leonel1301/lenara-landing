"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { TechStackIcon } from "@/components/tech-stack-icon";
import { SERVICES_AI_BANNER_COLOR } from "@/lib/brand";
import { waloopTechStack, type WaloopPlatform } from "@/lib/waloop-tech-stack";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Labels = {
  label: string;
  items: Record<string, string>;
};

type Props = {
  platform: WaloopPlatform;
  labels: Labels;
  className?: string;
};

export function AppTechStackStrip({ platform, labels, className }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const items = waloopTechStack[platform];

  return (
    <div
      className={cn("w-full", className)}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="overflow-hidden rounded-2xl border border-[color-mix(in_oklch,var(--accent-strip)_28%,var(--border))] bg-card shadow-[0_0_0_1px_color-mix(in_oklch,var(--accent-strip)_6%,transparent)]">
        <div
          className="h-0.5 w-full"
          style={{ backgroundColor: SERVICES_AI_BANNER_COLOR }}
          aria-hidden
        />

        <div className="px-4 py-3.5 md:px-4 md:py-4">
          <p className="text-xs font-medium text-muted-foreground">{labels.label}</p>

          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={platform}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -4 }}
              transition={{ duration: 0.24, ease: easeOut }}
              className="mt-2.5 flex flex-wrap gap-1.5"
            >
              {items.map((item) => (
                <li key={item}>
                  <span
                    title={labels.items[item]}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-muted/35 px-2.5 py-1 text-[11px] font-medium text-foreground/90 transition-colors hover:border-[color-mix(in_oklch,var(--accent-strip)_35%,var(--border))] hover:bg-muted/55"
                  >
                    <TechStackIcon item={item} className="opacity-80" />
                    {labels.items[item]}
                  </span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
