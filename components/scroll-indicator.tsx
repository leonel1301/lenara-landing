"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Props = {
  href: string;
  label: string;
};

export function ScrollIndicator({ href, label }: Props) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      aria-label={label}
      initial={prefersReducedMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-muted-foreground transition-colors hover:text-primary md:bottom-8"
    >
      <motion.span
        animate={prefersReducedMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 1.75, repeat: Infinity, ease: "easeInOut" }}
        className="flex size-10 items-center justify-center rounded-full border border-border/60 bg-background/50 backdrop-blur-sm"
      >
        <ChevronDown className="size-5" strokeWidth={1.75} />
      </motion.span>
    </motion.a>
  );
}
