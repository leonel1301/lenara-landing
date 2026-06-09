"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Globe,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { type ServiceItem } from "@/lib/services";

const icons: Record<ServiceItem, LucideIcon> = {
  mobile: Smartphone,
  web: Globe,
  cloud: Cloud,
  consulting: BrainCircuit,
};

const iconStyles: Record<ServiceItem, { bg: string; text: string; border: string; hover: string }> = {
  mobile: {
    bg: "bg-[color-mix(in_oklch,var(--icon-1)_14%,transparent)]",
    text: "text-[var(--icon-1)]",
    border: "border-[color-mix(in_oklch,var(--icon-1)_28%,transparent)]",
    hover: "group-hover:bg-[var(--icon-1)] group-hover:text-primary-foreground group-hover:border-[var(--icon-1)]",
  },
  web: {
    bg: "bg-[color-mix(in_oklch,var(--icon-2)_14%,transparent)]",
    text: "text-[var(--icon-2)]",
    border: "border-[color-mix(in_oklch,var(--icon-2)_28%,transparent)]",
    hover: "group-hover:bg-[var(--icon-2)] group-hover:text-primary-foreground group-hover:border-[var(--icon-2)]",
  },
  cloud: {
    bg: "bg-[color-mix(in_oklch,var(--icon-3)_14%,transparent)]",
    text: "text-[var(--icon-3)]",
    border: "border-[color-mix(in_oklch,var(--icon-3)_28%,transparent)]",
    hover: "group-hover:bg-[var(--icon-3)] group-hover:text-primary-foreground group-hover:border-[var(--icon-3)]",
  },
  consulting: {
    bg: "bg-[color-mix(in_oklch,var(--icon-4)_14%,transparent)]",
    text: "text-[var(--icon-4)]",
    border: "border-[color-mix(in_oklch,var(--icon-4)_28%,transparent)]",
    hover: "group-hover:bg-[var(--icon-4)] group-hover:text-primary-foreground group-hover:border-[var(--icon-4)]",
  },
};

type Service = {
  id: ServiceItem;
  title: string;
  description: string;
};

type Props = {
  items: Service[];
  compact?: boolean;
  magazine?: boolean;
};

export function ServiceCards({ items, compact = false, magazine = false }: Props) {
  return (
    <div
      className={cn(
        "grid gap-4",
        magazine ? "grid-cols-1 sm:grid-cols-2" : "sm:grid-cols-2",
        compact ? "md:gap-5" : "gap-6",
      )}
    >
      {items.map((item, index) => {
        const Icon = icons[item.id];
        const style = iconStyles[item.id];

        return (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: compact ? -4 : -6 }}
            className={cn(
              "group relative overflow-hidden rounded-xl border border-border bg-card",
              compact ? "p-5" : "p-6",
              "transition-[border-color,box-shadow] duration-300",
              "hover:border-primary/30 hover:shadow-[0_12px_40px_-12px_color-mix(in_oklch,var(--primary)_25%,transparent)]",
            )}
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 size-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150"
            />

            <motion.div
              whileHover={{ scale: 1.1, rotate: -4 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
              className={cn(
                "relative inline-flex items-center justify-center rounded-lg border",
                style.bg,
                style.text,
                style.border,
                style.hover,
                "transition-colors duration-300",
                compact ? "mb-3 size-10" : "mb-4 size-12",
              )}
            >
              <Icon className="size-5" strokeWidth={1.75} />
            </motion.div>

            <h3 className="relative text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
              {item.title}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </motion.article>
        );
      })}
    </div>
  );
}
