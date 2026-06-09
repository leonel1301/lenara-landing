"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { type ProcessStep } from "@/lib/process";

const icons: Record<ProcessStep, LucideIcon> = {
  discovery: Search,
  design: Palette,
  development: Code2,
  launch: Rocket,
};

const iconStyles: Record<ProcessStep, { bg: string; text: string; border: string; hover: string }> = {
  discovery: {
    bg: "bg-[color-mix(in_oklch,var(--icon-1)_14%,transparent)]",
    text: "text-[var(--icon-1)]",
    border: "border-[color-mix(in_oklch,var(--icon-1)_28%,transparent)]",
    hover: "group-hover:bg-[var(--icon-1)] group-hover:text-primary-foreground group-hover:border-[var(--icon-1)]",
  },
  design: {
    bg: "bg-[color-mix(in_oklch,var(--icon-4)_14%,transparent)]",
    text: "text-[var(--icon-4)]",
    border: "border-[color-mix(in_oklch,var(--icon-4)_28%,transparent)]",
    hover: "group-hover:bg-[var(--icon-4)] group-hover:text-primary-foreground group-hover:border-[var(--icon-4)]",
  },
  development: {
    bg: "bg-[color-mix(in_oklch,var(--icon-2)_14%,transparent)]",
    text: "text-[var(--icon-2)]",
    border: "border-[color-mix(in_oklch,var(--icon-2)_28%,transparent)]",
    hover: "group-hover:bg-[var(--icon-2)] group-hover:text-primary-foreground group-hover:border-[var(--icon-2)]",
  },
  launch: {
    bg: "bg-[color-mix(in_oklch,var(--icon-3)_14%,transparent)]",
    text: "text-[var(--icon-3)]",
    border: "border-[color-mix(in_oklch,var(--icon-3)_28%,transparent)]",
    hover: "group-hover:bg-[var(--icon-3)] group-hover:text-primary-foreground group-hover:border-[var(--icon-3)]",
  },
};

type Step = {
  id: ProcessStep;
  step: number;
  title: string;
  description: string;
};

type Props = {
  items: Step[];
  compact?: boolean;
};

export function ProcessSteps({ items, compact = false }: Props) {
  return (
    <ol className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2", compact ? "md:gap-5" : "gap-6")}>
      {items.map((item, index) => {
        const Icon = icons[item.id];
        const style = iconStyles[item.id];

        return (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            whileHover={{ y: compact ? -3 : -5 }}
            className={cn(
              "group relative rounded-xl border border-border bg-card sm:aspect-square",
              compact ? "p-4 md:p-5" : "p-6",
              "flex flex-col gap-4 sm:justify-between sm:gap-0",
              "transition-[border-color,box-shadow] duration-300",
              "hover:border-primary/30 hover:shadow-[0_12px_40px_-12px_color-mix(in_oklch,var(--primary)_22%,transparent)]",
            )}
          >
            <div
              className={cn(
                "flex items-center justify-between gap-3",
                compact ? "mb-3" : "mb-4",
              )}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 6 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 420, damping: 18 }}
                className={cn(
                  "inline-flex items-center justify-center rounded-lg border",
                  style.bg,
                  style.text,
                  style.border,
                  style.hover,
                  "transition-colors duration-300",
                  compact ? "size-10" : "size-12",
                )}
              >
                <Icon className="size-5" strokeWidth={1.75} />
              </motion.div>

              <span className="text-xs font-semibold tracking-widest text-primary/70">
                {String(item.step).padStart(2, "0")}
              </span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </motion.li>
        );
      })}
    </ol>
  );
}
