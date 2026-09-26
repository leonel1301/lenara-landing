"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { ProjectAreaIcon } from "@/components/project-area-icon";
import { Link } from "@/i18n/navigation";
import { type ProjectArea } from "@/lib/projects";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

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
  detail: string;
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
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card",
        "shadow-[0_24px_60px_-36px_color-mix(in_oklch,var(--primary)_28%,transparent)]",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-primary/30",
      )}
    >
      <div
        aria-hidden
        className="h-1 bg-gradient-to-r from-[var(--icon-1)] via-[var(--icon-2)] to-[var(--icon-4)]"
      />

      <div className="relative flex flex-1 flex-col gap-6 p-6 md:p-8">
        <div className="space-y-2">
          <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
            {label}
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-[1.75rem]">
            {title}
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </div>

        <ul className="flex flex-col">
          {areas.map((area, index) => {
            const style = iconStyles[area.id];

            return (
              <motion.li
                key={area.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: easeOut }}
                className="flex items-center gap-3 border-t border-border/80 py-3.5 first:border-t-0"
              >
                <span className="w-7 shrink-0 font-mono text-[11px] font-semibold tracking-wider text-primary/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-xl border",
                    style.bg,
                    style.text,
                    style.border,
                  )}
                >
                  <ProjectAreaIcon area={area.id} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-foreground">
                    {area.label}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground md:text-sm">
                    {area.detail}
                  </span>
                </span>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-auto pt-1">
          <Link
            href="/apps"
            aria-label={appsLinkAria}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors duration-300 hover:text-[var(--primary-hover)]"
          >
            {appsLink}
            <ArrowUpRight className="size-4" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
