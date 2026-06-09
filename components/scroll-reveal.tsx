"use client";

import {
  motion,
  useReducedMotion,
  type Transition,
  type Variants,
} from "framer-motion";

import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Trigger = "mount" | "view";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  trigger?: Trigger;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.55,
  trigger = "view",
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const hidden = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 28 };
  const visible = { opacity: 1, y: 0 };
  const transition: Transition = {
    duration: prefersReducedMotion ? 0 : duration,
    delay: prefersReducedMotion ? 0 : delay,
    ease: easeOut,
  };

  if (trigger === "mount") {
    return (
      <motion.div
        initial={hidden}
        animate={visible}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ScrollRevealStaggerProps = {
  children: React.ReactNode;
  className?: string;
  trigger?: Trigger;
  stagger?: number;
};

export function ScrollRevealStagger({
  children,
  className,
  trigger = "view",
  stagger = 0.1,
}: ScrollRevealStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : stagger,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={trigger === "mount" ? "visible" : undefined}
      whileInView={trigger === "view" ? "visible" : undefined}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type ScrollRevealItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollRevealItem({ children, className }: ScrollRevealItemProps) {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants: Variants = {
    hidden: prefersReducedMotion
      ? { opacity: 1, y: 0 }
      : { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <motion.div variants={itemVariants} className={cn(className)}>
      {children}
    </motion.div>
  );
}
