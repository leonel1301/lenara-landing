"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;
const SLAB_SKEW = -28;

/* Tones follow the order of the Lenara mark, lightest at the top. */
const slabTones = [
  "var(--slab-1)",
  "var(--slab-2)",
  "var(--slab-1)",
  "var(--slab-3)",
  "var(--slab-2)",
];

export function slabTone(index: number) {
  return slabTones[index % slabTones.length];
}

function slabInk(index: number) {
  return slabTone(index).replace(")", "-ink)");
}

type Trigger = "mount" | "view";

export function useSlabReveal(trigger: Trigger = "view") {
  const prefersReducedMotion = useReducedMotion();

  return function reveal(order: number) {
    if (prefersReducedMotion) return {};
    const transition = { duration: 0.7, delay: order * 0.07, ease: easeOut };
    if (trigger === "mount") {
      return {
        initial: { opacity: 0, x: 28 },
        animate: { opacity: 1, x: 0 },
        transition: { ...transition, delay: 0.15 + order * 0.08 },
      };
    }
    return {
      initial: { opacity: 0, x: 28 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true, amount: 0.6 },
      transition,
    };
  };
}

type SlabIndexItem = {
  id: string;
  label: string;
  detail?: string;
  href?: string;
  icon?: React.ReactNode;
};

type SlabIndexProps = {
  items: SlabIndexItem[];
  trigger?: Trigger;
  size?: "md" | "lg";
  className?: string;
};

export function SlabIndex({
  items,
  trigger = "view",
  size = "md",
  className,
}: SlabIndexProps) {
  const reveal = useSlabReveal(trigger);
  const last = items.length;

  return (
    <ul className={cn("flex flex-col", className)}>
      {items.map((item, index) => {
        const row = (
          <>
            <span
              aria-hidden
              className="flex justify-end transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1.5"
            >
              <motion.span
                {...reveal(last - index)}
                className={cn(
                  "block transition-[filter] duration-300 group-hover:brightness-90",
                  size === "lg" ? "h-8" : "h-7",
                )}
                style={{
                  skewY: SLAB_SKEW,
                  width: `${(size === "lg" ? 2.75 : 2.5) + index * 0.4}rem`,
                  background: slabTone(index),
                }}
              />
            </span>
            <span className="min-w-0">
              <span
                className={cn(
                  "block font-semibold tracking-[-0.02em] text-[var(--slab-ink)] transition-colors duration-300 group-hover:text-[var(--slab-accent)]",
                  size === "lg" ? "text-xl md:text-[1.625rem]" : "text-xl md:text-2xl",
                )}
              >
                {item.label}
              </span>
              {item.detail ? (
                <span className="block text-sm text-[var(--slab-ink-soft)] md:text-base">
                  {item.detail}
                </span>
              ) : null}
            </span>
            {item.icon ?? <span aria-hidden />}
          </>
        );

        const rowClass = cn(
          "group grid grid-cols-[4.5rem_minmax(0,1fr)_auto] items-center gap-x-5 border-b border-[var(--slab-rule)] sm:gap-x-6",
          size === "lg" ? "py-5" : "py-4",
        );

        return (
          <li
            key={item.id}
            className={item.href ? "first:[&>a]:pt-0" : cn(rowClass, "first:pt-0")}
          >
            {item.href ? (
              <a href={item.href} className={rowClass}>
                {row}
              </a>
            ) : (
              row
            )}
          </li>
        );
      })}
    </ul>
  );
}

type SlabBadgeProps = {
  tone?: number;
  className?: string;
  children: React.ReactNode;
};

/** An icon set on a single slab of the mark. */
export function SlabBadge({ tone = 1, className, children }: SlabBadgeProps) {
  return (
    <span
      className={cn(
        "relative inline-flex h-14 w-16 shrink-0 items-center justify-center",
        className,
      )}
      style={{ color: slabInk(tone) }}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 inset-y-3"
        style={{ transform: `skewY(${SLAB_SKEW}deg)`, background: slabTone(tone) }}
      />
      <span className="relative">{children}</span>
    </span>
  );
}

type SlabBackedProps = {
  side?: "left" | "right";
  tone?: number;
  className?: string;
  children: React.ReactNode;
};

/** Media resting on a slab that steps out from behind one corner. */
export function SlabBacked({
  side = "right",
  tone = 1,
  className,
  children,
}: SlabBackedProps) {
  return (
    <div className={cn("relative isolate", className)}>
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-6 -z-10 h-12 w-20 md:-bottom-8 md:h-16 md:w-28",
          side === "right" ? "-right-3 md:-right-5" : "-left-3 md:-left-5",
        )}
        style={{
          transform: `skewY(${SLAB_SKEW}deg)`,
          background: slabTone(tone),
        }}
      />
      {children}
    </div>
  );
}

type SlabGhostsProps = {
  count: number;
  className?: string;
};

/** Outlined slabs: layers of the stack that are still being built. */
export function SlabGhosts({ count, className }: SlabGhostsProps) {
  const reveal = useSlabReveal();

  return (
    <span aria-hidden className={cn("flex flex-col items-end gap-9", className)}>
      {Array.from({ length: count }, (_, index) => (
        <motion.span
          key={index}
          {...reveal(count - index)}
          className="block h-11 border-2 border-dashed border-[var(--slab-ink-soft)] opacity-60"
          style={{ skewY: SLAB_SKEW, width: `${3.5 + index * 0.75}rem` }}
        />
      ))}
    </span>
  );
}

type SlabStairProps = {
  step: number;
  total: number;
  label: string;
  className?: string;
};

/** The mark's stair, filled up to the current step. */
export function SlabStair({ step, total, label, className }: SlabStairProps) {
  return (
    <span
      role="img"
      aria-label={label}
      className={cn("inline-flex flex-col items-end gap-1", className)}
    >
      {Array.from({ length: total }, (_, index) => (
        <span
          key={index}
          className={cn(
            "block h-2.5 transition-opacity",
            index < step ? "opacity-100" : "opacity-20",
          )}
          style={{
            width: `${1.5 + index * 0.35}rem`,
            transform: `skewY(${SLAB_SKEW}deg)`,
            background: index < step ? slabTone(index) : "var(--slab-ink-soft)",
          }}
        />
      ))}
    </span>
  );
}
