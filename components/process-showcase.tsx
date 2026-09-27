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
import { SlabBacked, SlabBadge, SlabStair } from "@/components/slab";
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

type StackLabels = {
  toolsLabel: string;
  aiLabel: string;
  tools: Record<string, string>;
  ai: Record<string, string>;
};

type Props = {
  id: ProcessStep;
  step: number;
  totalSteps: number;
  stepLabel: string;
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
  totalSteps,
  stepLabel,
  title,
  description,
  imageSrc,
  imageAlt,
  stackLabels,
  reversed = false,
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const Icon = icons[id];
  const tone = step - 1;

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
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
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
        <motion.div variants={copyItem} className="flex items-end gap-5">
          <SlabBadge tone={tone}>
            <Icon className="size-5" strokeWidth={1.75} aria-hidden />
          </SlabBadge>
          <SlabStair step={step} total={totalSteps} label={stepLabel} className="pb-2" />
        </motion.div>
        <motion.h2
          variants={copyItem}
          className="text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-5xl"
        >
          {title}
        </motion.h2>
        <motion.p
          variants={copyItem}
          className="max-w-lg text-base leading-relaxed text-pretty text-muted-foreground md:text-lg"
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
        <SlabBacked side={reversed ? "left" : "right"} tone={tone}>
          <ShowcaseImage
            src={imageSrc}
            alt={imageAlt}
            fallback={
              <div className="flex h-full w-full items-center justify-center bg-muted/40">
                <SlabBadge tone={tone} className="scale-125">
                  <Icon className="size-6" strokeWidth={1.5} aria-hidden />
                </SlabBadge>
              </div>
            }
          />
        </SlabBacked>
      </motion.div>
    </div>
  );
}
