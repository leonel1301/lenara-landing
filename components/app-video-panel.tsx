"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Apple } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Props = {
  subtitles: string[];
  videoLabel: string;
  videoFallback: string;
  videoSrc: string;
  videoPoster: string;
  className?: string;
};

export function AppVideoPanel({
  subtitles,
  videoLabel,
  videoFallback,
  videoSrc,
  videoPoster,
  className,
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

  const mediaPanel: Variants = {
    hidden: prefersReducedMotion
      ? { opacity: 1, x: 0, scale: 1 }
      : { opacity: 0, y: 24, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: easeOut },
    },
  };

  const videoReveal: Variants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut, delay: prefersReducedMotion ? 0 : 0.2 },
    },
  };

  const subtitleReveal: Variants = {
    hidden: prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut, delay: prefersReducedMotion ? 0 : 0.3 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      variants={mediaPanel}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={cn(
        "flex min-h-[28rem] flex-col overflow-hidden rounded-xl border border-border bg-card shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_6%,transparent)] transition-[border-color,box-shadow] duration-300 hover:border-primary/20 hover:shadow-[0_16px_48px_-16px_color-mix(in_oklch,var(--primary)_18%,transparent)] md:min-h-[32rem]",
        className,
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
            transition={{ duration: 0.6, delay: 0.25, ease: easeOut }}
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
            transition={{ duration: 0.5, delay: 0.25 }}
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
                index === activeSubtitle ? "w-6 bg-primary" : "w-1.5 bg-border",
              )}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
