"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight, Smartphone } from "lucide-react";

import { AppStoreBadge } from "@/components/app-store-badge";
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
  appStoreHref?: string;
  androidSoonLabel: string;
  /** Media panel rendered beside the copy (e.g. carousel or video panel). */
  media: React.ReactNode;
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
  afterLegal?: React.ReactNode;
};

export function AppShowcase({
  badge,
  name,
  nameHref,
  nameLinkAria,
  description,
  platformsLabel,
  appStoreHref,
  androidSoonLabel,
  media,
  reversed = false,
  legalLinks,
  afterLegal,
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
    <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-6">
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
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5, ease: easeOut }}
              whileHover={prefersReducedMotion ? undefined : { y: -3, scale: 1.02 }}
            >
              <AppStoreBadge href={appStoreHref} />
            </motion.div>
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

        {afterLegal ? (
          <motion.div variants={leftItem} className="pt-1">
            {afterLegal}
          </motion.div>
        ) : null}
      </motion.div>

      <div className={cn("flex w-full justify-start", reversed && "lg:order-1")}>
        {media}
      </div>
    </div>
  );
}
