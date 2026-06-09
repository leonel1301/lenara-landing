"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Apple, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Props = {
  badge: string;
  name: string;
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
};

export function AppShowcase({
  badge,
  name,
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
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const [activeSubtitle, setActiveSubtitle] = useState(0);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setVideoError(false);
  }, [videoSrc]);

  useEffect(() => {
    if (subtitles.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveSubtitle((current) => (current + 1) % subtitles.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [subtitles.length]);

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

  const mediaPanel: Variants = {
    hidden: prefersReducedMotion
      ? { opacity: 1, x: 0, scale: 1 }
      : { opacity: 0, x: reversed ? -32 : 32, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.65, ease: easeOut, delay: prefersReducedMotion ? 0 : 0.15 },
    },
  };

  const videoReveal: Variants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut, delay: prefersReducedMotion ? 0 : 0.35 },
    },
  };

  const subtitleReveal: Variants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut, delay: prefersReducedMotion ? 0 : 0.45 },
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
          {name}
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
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
        variants={mediaPanel}
        whileHover={prefersReducedMotion ? undefined : { y: -4 }}
        transition={{ type: "spring", stiffness: 380, damping: 28 }}
        className={cn(
          "flex min-h-[28rem] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_6%,transparent)] transition-[border-color,box-shadow] duration-300 hover:border-primary/20 hover:shadow-[0_16px_48px_-16px_color-mix(in_oklch,var(--primary)_18%,transparent)] md:min-h-[32rem]",
          reversed && "lg:order-1",
        )}
      >
        <motion.div
          variants={videoReveal}
          className="relative h-1/2 min-h-[14rem] border-b border-border bg-background"
        >
          <span className="sr-only">{videoLabel}</span>
          {!videoError ? (
            <motion.video
              key={videoSrc}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
              className="h-full w-full object-cover"
              src={videoSrc}
              poster={videoPoster}
              controls
              playsInline
              preload="metadata"
              onError={() => setVideoError(true)}
            />
          ) : (
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex h-full flex-col items-center justify-center gap-3 bg-[color-mix(in_oklch,var(--icon-1)_6%,transparent)] px-6 text-center"
            >
              <motion.div
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }
                }
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex size-14 items-center justify-center rounded-full border border-primary/20 bg-badge text-primary"
              >
                <Apple className="size-6" strokeWidth={1.75} />
              </motion.div>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {videoFallback}
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          variants={subtitleReveal}
          className="relative flex h-1/2 min-h-[14rem] flex-col items-center justify-center overflow-hidden bg-[color-mix(in_oklch,var(--foreground)_4%,transparent)] px-6 py-8"
        >
          <div
            aria-live="polite"
            className="relative flex w-full max-w-md flex-1 items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={activeSubtitle}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 24, scale: 0.96 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  prefersReducedMotion
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: -16, scale: 0.98 }
                }
                transition={{ duration: 0.35, ease: easeOut }}
                className="text-center text-xl font-bold leading-snug tracking-tight text-foreground md:text-2xl"
              >
                {subtitles[activeSubtitle]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex gap-1.5">
            {subtitles.map((_, index) => (
              <motion.span
                key={index}
                aria-hidden
                layout
                transition={{ duration: 0.3, ease: easeOut }}
                className={cn(
                  "h-1 rounded-full",
                  index === activeSubtitle
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-border",
                )}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
