"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Apple, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;
const AUTO_ADVANCE_MS = 7000;
const PHONE_ASPECT = "1284 / 2778";

/** Shared sizing — larger on mobile, slightly tighter on desktop columns. */
const PHONE_FRAME_SIZE =
  "h-[95%] max-h-full w-auto max-w-[min(96vw,28rem)] sm:max-w-[min(92vw,26rem)] md:max-w-[min(100%,20rem)] lg:max-w-[min(100%,18rem)]";

type Slide = {
  src: string;
  alt: string;
};

type Props = {
  slides: Slide[];
  label: string;
  prevLabel: string;
  nextLabel: string;
  iosLabel: string;
  androidLabel: string;
  className?: string;
};

function CarouselSlideFrame({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-1 pt-14 pb-6 sm:px-4 md:px-8 md:py-14">
      {/* Ambient glow — blurred reflection of the screenshot */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <div
          className={cn("relative shrink-0", PHONE_FRAME_SIZE)}
          style={{ aspectRatio: PHONE_ASPECT }}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="(max-width: 640px) 96vw, (max-width: 1024px) 88vw, 20rem"
            className="scale-[1.35] object-cover opacity-[0.42] blur-3xl saturate-150 dark:opacity-[0.3] dark:saturate-125"
          />
        </div>

        {/* Fade screenshot whites into the page background (light & dark) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_72%_at_50%_48%,transparent_0%,var(--background)_72%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
      </div>

      {/* Foreground screenshot with rounded device corners */}
      <div
        className={cn(
          "relative z-[1] shrink-0 overflow-hidden",
          PHONE_FRAME_SIZE,
          "rounded-[2.25rem] sm:rounded-[2.35rem] md:rounded-[2.5rem]",
          "border border-border/50 bg-background",
          "shadow-[0_28px_70px_-24px_color-mix(in_oklch,var(--foreground)_28%,transparent)]",
          "ring-1 ring-foreground/[0.06]",
        )}
        style={{ aspectRatio: PHONE_ASPECT }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 96vw, (max-width: 1024px) 88vw, 20rem"
          className="object-cover object-top"
          priority={priority}
        />

        {/* Soft inner edge so white UI bleeds into the frame */}
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_color-mix(in_oklch,var(--foreground)_6%,transparent)]" />
      </div>
    </div>
  );
}

export function AppCarousel({
  slides,
  label,
  prevLabel,
  nextLabel,
  iosLabel,
  androidLabel,
  className,
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const count = slides.length;
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const [paused, setPaused] = useState(false);

  const paginate = useCallback(
    (step: number) => {
      setState(([current]) => [(current + step + count) % count, step]);
    },
    [count],
  );

  const goTo = useCallback((next: number) => {
    setState(([current]) => [next, next >= current ? 1 : -1]);
  }, []);

  useEffect(() => {
    if (count <= 1 || paused) return;

    const id = window.setInterval(() => paginate(1), AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [count, paused, paginate, index]);

  const slide = slides[index];

  const variants = {
    enter: (dir: number) =>
      prefersReducedMotion
        ? { opacity: 0 }
        : { opacity: 0, x: dir > 0 ? 48 : -48 },
    center: { opacity: 1, x: 0 },
    exit: (dir: number) =>
      prefersReducedMotion
        ? { opacity: 0 }
        : { opacity: 0, x: dir > 0 ? -48 : 48 },
  };

  return (
    <motion.div
      initial={
        prefersReducedMotion ? false : { opacity: 0, y: 24, scale: 0.97 }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, ease: easeOut }}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      className={cn(
        "group relative flex h-[44rem] w-full items-center justify-center overflow-hidden rounded-xl bg-background sm:h-[42rem] md:h-[46rem]",
        className,
      )}
    >
      <div className="absolute top-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-badge px-3 py-1.5",
            "text-xs font-semibold tracking-wide text-primary",
            "shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_8%,transparent)]",
          )}
        >
          <Apple className="size-3.5" strokeWidth={2} aria-hidden />
          {iosLabel}
        </span>
        <span
          aria-disabled
          className={cn(
            "inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-border px-3 py-1.5",
            "bg-muted/50 text-xs font-medium text-muted-foreground opacity-70",
          )}
        >
          <Smartphone className="size-3.5" strokeWidth={1.75} aria-hidden />
          {androidLabel}
        </span>
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: prefersReducedMotion ? 0.3 : 0.55,
            ease: easeOut,
          }}
          className="absolute inset-0"
        >
          <CarouselSlideFrame
            src={slide.src}
            alt={slide.alt}
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        aria-label={prevLabel}
        onClick={() => paginate(-1)}
        className="absolute left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-foreground opacity-0 backdrop-blur-md transition-all duration-200 hover:border-primary/35 hover:bg-background focus-visible:opacity-100 group-hover:opacity-100"
      >
        <ChevronLeft className="size-5" strokeWidth={2} aria-hidden />
      </button>
      <button
        type="button"
        aria-label={nextLabel}
        onClick={() => paginate(1)}
        className="absolute right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/70 text-foreground opacity-0 backdrop-blur-md transition-all duration-200 hover:border-primary/35 hover:bg-background focus-visible:opacity-100 group-hover:opacity-100"
      >
        <ChevronRight className="size-5" strokeWidth={2} aria-hidden />
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-2.5 py-1.5 backdrop-blur-md">
        {slides.map((_, dot) => (
          <button
            key={dot}
            type="button"
            aria-label={`${dot + 1}`}
            aria-current={dot === index}
            onClick={() => goTo(dot)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              dot === index
                ? "w-6 bg-primary"
                : "w-1.5 bg-border hover:bg-muted-foreground",
            )}
          />
        ))}
      </div>
    </motion.div>
  );
}
