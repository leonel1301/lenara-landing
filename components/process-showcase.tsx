"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Code2,
  Palette,
  Rocket,
  Search,
  type LucideIcon,
} from "lucide-react";

import { ShowcaseImage } from "@/components/showcase-image";
import { ProcessTechStackStrip } from "@/components/process-tech-stack-strip";
import { type ProcessStep } from "@/lib/process";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

const icons: Record<ProcessStep, LucideIcon> = {
  discovery: Search,
  design: Palette,
  development: Code2,
  launch: Rocket,
};

const iconStyles: Record<
  ProcessStep,
  { bg: string; text: string; border: string; accent: string }
> = {
  discovery: {
    bg: "bg-[color-mix(in_oklch,var(--icon-1)_14%,transparent)]",
    text: "text-[var(--icon-1)]",
    border: "border-[color-mix(in_oklch,var(--icon-1)_28%,transparent)]",
    accent: "from-[var(--icon-1)]/20",
  },
  design: {
    bg: "bg-[color-mix(in_oklch,var(--icon-4)_14%,transparent)]",
    text: "text-[var(--icon-4)]",
    border: "border-[color-mix(in_oklch,var(--icon-4)_28%,transparent)]",
    accent: "from-[var(--icon-4)]/20",
  },
  development: {
    bg: "bg-[color-mix(in_oklch,var(--icon-2)_14%,transparent)]",
    text: "text-[var(--icon-2)]",
    border: "border-[color-mix(in_oklch,var(--icon-2)_28%,transparent)]",
    accent: "from-[var(--icon-2)]/20",
  },
  launch: {
    bg: "bg-[color-mix(in_oklch,var(--icon-3)_14%,transparent)]",
    text: "text-[var(--icon-3)]",
    border: "border-[color-mix(in_oklch,var(--icon-3)_28%,transparent)]",
    accent: "from-[var(--icon-3)]/20",
  },
};

type StackLabels = {
  toolsLabel: string;
  aiLabel: string;
  tools: Record<string, string>;
  ai: Record<string, string>;
};

type Props = {
  id: ProcessStep;
  step: number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  stackLabels: StackLabels;
  reversed?: boolean;
};

export function ProcessShowcase({
  id,
  step,
  title,
  description,
  imageSrc,
  imageAlt,
  stackLabels,
  reversed = false,
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = icons[id];
  const style = iconStyles[id];
  const stepLabel = String(step).padStart(2, "0");

  const copyContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: prefersReducedMotion ? 0 : 0.05,
      },
    },
  };

  const copyItem: Variants = {
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

  const imageVariants: Variants = {
    hidden: prefersReducedMotion
      ? { opacity: 1, x: 0, scale: 1 }
      : { opacity: 0, x: reversed ? -24 : 24, scale: 0.97 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.55, ease: easeOut, delay: 0.08 },
    },
  };

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25, margin: "0px 0px -8% 0px" }}
        variants={copyContainer}
        className={cn(
          "flex flex-col justify-center space-y-5",
          reversed && "lg:order-2",
        )}
      >
        <motion.div variants={copyItem} className="flex items-center gap-4">
          <motion.div
            whileHover={prefersReducedMotion ? undefined : { scale: 1.08, rotate: 6 }}
            whileTap={prefersReducedMotion ? undefined : { scale: 0.92 }}
            transition={{ type: "spring", stiffness: 420, damping: 18 }}
            className={cn(
              "inline-flex size-12 items-center justify-center rounded-xl border",
              style.bg,
              style.text,
              style.border,
            )}
          >
            <Icon className="size-5" strokeWidth={1.75} />
          </motion.div>
          <span className="text-sm font-semibold tracking-widest text-primary/70">
            {stepLabel}
          </span>
        </motion.div>
        <motion.h2
          variants={copyItem}
          className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={copyItem}
          className="text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {description}
        </motion.p>
        <motion.div variants={copyItem}>
          <ProcessTechStackStrip step={id} labels={stackLabels} />
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
        variants={imageVariants}
        className={cn(reversed && "lg:order-1")}
      >
        <ShowcaseImage
          src={imageSrc}
          alt={imageAlt}
          fallback={
            <div
              className={cn(
                "flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br to-transparent p-8",
                style.accent,
              )}
            >
              <div
                className={cn(
                  "flex size-16 items-center justify-center rounded-2xl border",
                  style.bg,
                  style.text,
                  style.border,
                )}
              >
                <Icon className="size-7" strokeWidth={1.5} />
              </div>
            </div>
          }
        />
      </motion.div>
    </div>
  );
}
