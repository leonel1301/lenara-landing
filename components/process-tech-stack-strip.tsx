"use client";

import { motion, useReducedMotion } from "framer-motion";

import { ProcessStackIcon } from "@/components/process-stack-icon";
import { SERVICES_AI_BANNER_COLOR } from "@/lib/brand";
import type { ProcessStep } from "@/lib/process";
import {
  processAiStack,
  processToolStack,
  type ProcessAiItem,
  type ProcessToolItem,
} from "@/lib/process-tech-stack";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Labels = {
  toolsLabel: string;
  aiLabel: string;
  tools: Record<string, string>;
  ai: Record<string, string>;
};

type Props = {
  step: ProcessStep;
  labels: Labels;
  className?: string;
};

function StackChip({
  name,
  item,
  className,
}: {
  name: string;
  item: ProcessToolItem | ProcessAiItem;
  className?: string;
}) {
  return (
    <span
      title={name}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors",
        className,
      )}
    >
      <ProcessStackIcon item={item} className="opacity-85" />
      {name}
    </span>
  );
}

export function ProcessTechStackStrip({ step, labels, className }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const tools = processToolStack[step];
  const aiTools = processAiStack[step];

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: 0.12, ease: easeOut }}
      className={cn("flex flex-col gap-2 sm:flex-row sm:items-stretch", className)}
    >
      <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-[color-mix(in_oklch,var(--accent-strip)_28%,var(--border))] bg-card shadow-[0_0_0_1px_color-mix(in_oklch,var(--accent-strip)_6%,transparent)]">
        <div
          className="h-0.5 w-full"
          style={{ backgroundColor: SERVICES_AI_BANNER_COLOR }}
          aria-hidden
        />
        <div className="px-3.5 py-3 md:px-4 md:py-3.5">
          <p className="text-[11px] font-medium text-muted-foreground">
            {labels.toolsLabel}
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {tools.map((item) => (
              <li key={item}>
                <StackChip
                  item={item}
                  name={labels.tools[item]}
                  className="border-border/80 bg-muted/35 text-foreground/90 hover:border-[color-mix(in_oklch,var(--accent-strip)_35%,var(--border))] hover:bg-muted/55"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-[color-mix(in_oklch,var(--accent-strip)_40%,var(--border))] bg-gradient-to-br from-violet-500/12 via-[color-mix(in_oklch,var(--accent-strip)_22%,transparent)] to-fuchsia-500/14 shadow-[0_0_24px_-8px_color-mix(in_oklch,var(--accent-strip)_45%,transparent)]">
        <div className="h-0.5 w-full bg-gradient-to-r from-violet-400/80 via-[var(--accent-strip)] to-fuchsia-400/80" aria-hidden />
        <div className="px-3.5 py-3 md:px-4 md:py-3.5">
          <p className="text-[11px] font-semibold tracking-wide text-[color-mix(in_oklch,var(--accent-strip)_85%,var(--foreground))]">
            {labels.aiLabel}
          </p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {aiTools.map((item) => (
              <li key={item}>
                <StackChip
                  item={item}
                  name={labels.ai[item]}
                  className="border-[color-mix(in_oklch,var(--accent-strip)_30%,var(--border))] bg-background/55 text-foreground/95 backdrop-blur-sm hover:border-[color-mix(in_oklch,var(--accent-strip)_50%,var(--border))] hover:bg-background/75"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
