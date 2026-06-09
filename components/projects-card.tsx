"use client";

import { motion } from "framer-motion";
import {
  Apple,
  BrainCircuit,
  Cpu,
  Globe,
  LayoutGrid,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import { Link } from "@/i18n/navigation";
import { type ProjectArea } from "@/lib/projects";
import { cn } from "@/lib/utils";

const icons: Record<ProjectArea, LucideIcon> = {
  ios: Apple,
  android: Smartphone,
  web: Globe,
  iot: Cpu,
  ai: BrainCircuit,
};

const iconStyles: Record<ProjectArea, { bg: string; text: string; border: string }> = {
  ios: {
    bg: "bg-[color-mix(in_oklch,var(--icon-1)_14%,transparent)]",
    text: "text-[var(--icon-1)]",
    border: "border-[color-mix(in_oklch,var(--icon-1)_28%,transparent)]",
  },
  android: {
    bg: "bg-[color-mix(in_oklch,var(--icon-3)_14%,transparent)]",
    text: "text-[var(--icon-3)]",
    border: "border-[color-mix(in_oklch,var(--icon-3)_28%,transparent)]",
  },
  web: {
    bg: "bg-[color-mix(in_oklch,var(--icon-2)_14%,transparent)]",
    text: "text-[var(--icon-2)]",
    border: "border-[color-mix(in_oklch,var(--icon-2)_28%,transparent)]",
  },
  iot: {
    bg: "bg-[color-mix(in_oklch,var(--icon-4)_14%,transparent)]",
    text: "text-[var(--icon-4)]",
    border: "border-[color-mix(in_oklch,var(--icon-4)_28%,transparent)]",
  },
  ai: {
    bg: "bg-[color-mix(in_oklch,var(--icon-1)_14%,transparent)]",
    text: "text-[var(--icon-1)]",
    border: "border-[color-mix(in_oklch,var(--icon-1)_28%,transparent)]",
  },
};

type Area = {
  id: ProjectArea;
  label: string;
};

type Props = {
  label: string;
  title: string;
  description: string;
  areas: Area[];
  appsLink: string;
  appsLinkAria: string;
};

export function ProjectsCard({
  label,
  title,
  description,
  areas,
  appsLink,
  appsLinkAria,
}: Props) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card",
        "shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_6%,transparent)]",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-primary/25 hover:shadow-[0_16px_48px_-16px_color-mix(in_oklch,var(--primary)_18%,transparent)]",
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -left-12 -bottom-12 size-40 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125"
      />

      <div className="relative flex flex-1 flex-col gap-6 p-6 md:p-8">
        <div className="space-y-2">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">
            {label}
          </p>
          <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {areas.map((area, index) => {
            const Icon = icons[area.id];
            const style = iconStyles[area.id];

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border p-3",
                  "border-border bg-background transition-colors duration-300",
                  "hover:border-primary/20",
                )}
              >
                <div
                  className={cn(
                    "flex size-10 items-center justify-center rounded-lg border",
                    style.bg,
                    style.text,
                    style.border,
                  )}
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <span className="text-center text-xs font-medium text-muted-foreground">
                  {area.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-auto pt-2">
          <Link
            href="/apps"
            aria-label={appsLinkAria}
            className={cn(
              "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/25 bg-badge px-4 py-2.5",
              "text-sm font-medium text-primary transition-all duration-300",
              "hover:border-primary/40 hover:bg-primary hover:text-primary-foreground",
            )}
          >
            {appsLink}
            <LayoutGrid className="size-4" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
