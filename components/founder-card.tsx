"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, User } from "lucide-react";

import { PERSONAL_HOMEPAGE_URL } from "@/lib/process";
import { cn } from "@/lib/utils";

type Props = {
  founderLabel: string;
  name: string;
  role: string;
  description: string;
  profileLink: string;
  profileLinkAria: string;
  initials: string;
};

export function FounderCard({
  founderLabel,
  name,
  role,
  description,
  profileLink,
  profileLinkAria,
  initials,
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
        className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125"
      />

      <div className="relative flex flex-1 flex-col items-center gap-5 p-6 text-center md:p-8">
        <div
          aria-hidden
          className={cn(
            "flex size-20 items-center justify-center rounded-xl",
            "border border-primary/20 bg-badge text-xl font-semibold tracking-tight text-primary",
            "ring-4 ring-primary/8 transition-all duration-300 group-hover:ring-primary/15",
          )}
        >
          {initials}
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground">
          <User className="size-3.5" strokeWidth={1.75} />
          {role}
        </span>

        <div className="space-y-2">
          <p className="text-xs font-medium tracking-wide text-primary uppercase">
            {founderLabel}
          </p>
          <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            {name}
          </h3>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>

        <a
          href={PERSONAL_HOMEPAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={profileLinkAria}
          className={cn(
            "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/25 bg-badge px-4 py-2.5",
            "text-sm font-medium text-primary transition-all duration-300",
            "hover:border-primary/40 hover:bg-primary hover:text-primary-foreground",
          )}
        >
          {profileLink}
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.75} />
        </a>
      </div>
    </motion.article>
  );
}
