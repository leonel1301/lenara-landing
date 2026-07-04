"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LayoutGrid } from "lucide-react";

import { CardCornerAccent } from "@/components/card-corner-accent";
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
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card",
        "shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_6%,transparent)]",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-primary/25 hover:shadow-[0_16px_48px_-16px_color-mix(in_oklch,var(--primary)_18%,transparent)]",
      )}
    >
      <CardCornerAccent position="bottom-left" />

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
            const style = iconStyles[area.id];

            return (
              <motion.div
                key={area.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: easeOut }}
                whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border p-3",
                  "border-border bg-background transition-colors duration-300",
                  "hover:border-primary/20",
                )}
              >
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: -4 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 420, damping: 18 }}
                  className={cn(
                    "flex size-10 items-center justify-center rounded-lg border",
                    style.bg,
                    style.text,
                    style.border,
                  )}
                >
                  <ProjectAreaIcon area={area.id} />
                </motion.div>
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
