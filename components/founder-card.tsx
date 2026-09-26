"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { LENARA_ICON_SRC } from "@/lib/brand";
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
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card",
        "shadow-[0_24px_60px_-36px_color-mix(in_oklch,var(--primary)_45%,transparent)]",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-primary/30 hover:shadow-[0_28px_70px_-32px_color-mix(in_oklch,var(--primary)_55%,transparent)]",
      )}
    >
      <div className="relative h-52 overflow-hidden sm:h-56">
        <Image
          src={LENARA_ICON_SRC}
          alt=""
          fill
          sizes="(min-width: 1024px) 420px, 100vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[#1a1b1c]/55 via-[#1a1b1c]/5 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 md:p-6">
          <span className="inline-flex items-center rounded-full border border-white/35 bg-white/20 px-2.5 py-1 text-[11px] font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-md">
            {founderLabel}
          </span>
          <span
            aria-hidden
            className="flex size-11 items-center justify-center rounded-2xl border border-white/40 bg-white/85 text-sm font-semibold tracking-tight text-[#2a3a96] shadow-sm"
          >
            {initials}
          </span>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-6 md:p-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-[1.75rem]">
            {name}
          </h3>
          <p className="text-sm font-medium text-primary">{role}</p>
        </div>

        <p className="border-l-2 border-primary/35 pl-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>

        <a
          href={PERSONAL_HOMEPAGE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={profileLinkAria}
          className={cn(
            "mt-auto inline-flex items-center gap-2 self-start pt-2 text-sm font-medium text-primary",
            "transition-colors duration-300 hover:text-[var(--primary-hover)]",
          )}
        >
          {profileLink}
          <ArrowUpRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={1.75}
          />
        </a>
      </div>
    </motion.article>
  );
}
