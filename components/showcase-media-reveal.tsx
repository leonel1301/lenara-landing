"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type Props = HTMLMotionProps<"div">;

export function ShowcaseMediaReveal({ children, className, ...props }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial={prefersReducedMotion ? false : { opacity: 0, filter: "blur(10px)" }}
      whileInView={
        prefersReducedMotion ? undefined : { opacity: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.8, ease: easeOut }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
