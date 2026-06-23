"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Apple, ArrowUpRight, Smartphone } from "lucide-react";

import { AppVideoPanel } from "@/components/app-video-panel";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Props = {
  badge: string;
  name: string;
  nameHref?: string;
  nameLinkAria?: string;
  description: string;
  platformsLabel: string;
  iosLabel: string;
  androidSoonLabel: string;
  subtitles: string[];
  videoLabel: string;
  videoFallback: string;
  videoSrc: string;
  videoPoster: string;
  reversed?: boolean;
  legalLinks?: {
    privacyHref: string;
    termsHref: string;
    faqHref?: string;
    feedbackHref?: string;
    privacyLabel: string;
    termsLabel: string;
    faqLabel?: string;
    feedbackLabel?: string;
  };
};

export function AppShowcase({
  badge,
  name,
  nameHref,
  nameLinkAria,
  description,
  platformsLabel,
  iosLabel,
  androidSoonLabel,
  subtitles,
  videoLabel,
  videoFallback,
  videoSrc,
  videoPoster,
  reversed = false,
  legalLinks,
}: Props) {
  const prefersReducedMotion = useReducedMotion();

  const leftContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const leftItem: Variants = {
    hidden: prefersReducedMotion
      ? { opacity: 1, x: 0, y: 0 }
      : { opacity: 0, x: reversed ? 24 : -24, y: 12 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.55, ease: easeOut },
    },
  };

  return (
    <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25, margin: "0px 0px -8% 0px" }}
        variants={leftContainer}
        className={cn(
          "flex flex-col justify-center space-y-6 lg:sticky lg:top-24 lg:self-start",
          reversed && "lg:order-2",
        )}
      >
        <motion.p
          variants={leftItem}
          className="text-xs font-medium tracking-wide text-primary uppercase"
        >
          {badge}
        </motion.p>
        <motion.h2
          variants={leftItem}
          className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          {nameHref ? (
            <Link
              href={nameHref}
              aria-label={nameLinkAria}
              className="inline-flex items-center gap-2"
            >
              {name}
              <ArrowUpRight className="size-5 shrink-0" strokeWidth={2} aria-hidden />
            </Link>
          ) : (
            name
          )}
        </motion.h2>
        <motion.p
          variants={leftItem}
          className="text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>

        <motion.div variants={leftItem} className="space-y-3">
          <p className="text-sm font-medium text-foreground">{platformsLabel}</p>
          <div className="flex flex-wrap gap-3">
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5, ease: easeOut }}
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium",
                "border-[color-mix(in_oklch,var(--icon-1)_28%,transparent)]",
                "bg-[color-mix(in_oklch,var(--icon-1)_12%,transparent)] text-[var(--icon-1)]",
              )}
            >
              <Apple className="size-4" strokeWidth={1.75} />
              {iosLabel}
            </motion.span>
            <motion.span
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.58, ease: easeOut }}
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
              className={cn(
                "inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium",
                "bg-muted/50 text-muted-foreground",
              )}
            >
              <Smartphone className="size-4" strokeWidth={1.75} />
              {androidSoonLabel}
            </motion.span>
          </div>
        </motion.div>

        {legalLinks ? (
          <motion.nav
            variants={leftItem}
            aria-label={legalLinks.privacyLabel}
            className="flex flex-wrap gap-x-4 gap-y-2 text-sm"
          >
            <Link
              href={legalLinks.privacyHref}
              className="font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {legalLinks.privacyLabel}
            </Link>
            <Link
              href={legalLinks.termsHref}
              className="font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              {legalLinks.termsLabel}
            </Link>
            {legalLinks.faqHref && legalLinks.faqLabel ? (
              <Link
                href={legalLinks.faqHref}
                className="font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {legalLinks.faqLabel}
              </Link>
            ) : null}
            {legalLinks.feedbackHref && legalLinks.feedbackLabel ? (
              <Link
                href={legalLinks.feedbackHref}
                className="font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {legalLinks.feedbackLabel}
              </Link>
            ) : null}
          </motion.nav>
        ) : null}
      </motion.div>

      <AppVideoPanel
        subtitles={subtitles}
        videoLabel={videoLabel}
        videoFallback={videoFallback}
        videoSrc={videoSrc}
        videoPoster={videoPoster}
        className={reversed ? "lg:order-1" : undefined}
      />
    </div>
  );
}
