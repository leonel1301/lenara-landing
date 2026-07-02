"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Apple, ChevronLeft, ChevronRight, Smartphone } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;
const AUTO_ADVANCE_MS = 7000;
const PHONE_ASPECT = "1284 / 2778";

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

function PhoneScreenshot({
  src,
  alt,
  eager,
  className,
  style,
}: {
  src: string;
  alt: string;
  eager?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[2.25rem] sm:rounded-[2.35rem] md:rounded-[2.5rem]",
        "border border-border/50 bg-background",
        "max-md:border-border/35 max-md:shadow-none",
        "md:shadow-[0_28px_70px_-24px_color-mix(in_oklch,var(--foreground)_28%,transparent)]",
        "ring-1 ring-foreground/[0.06] max-md:ring-foreground/[0.04]",
        className,
      )}
      style={style}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 86vw, (max-width: 1024px) 88vw, 20rem"
        className="object-cover object-top"
        loading={eager ? "eager" : "lazy"}
        priority={eager}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_0_0_1px_color-mix(in_oklch,var(--foreground)_6%,transparent)]" />
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
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  const paginate = useCallback(
    (step: number) => {
      setIndex((current) => (current + step + count) % count);
    },
    [count],
  );

  const goTo = useCallback((next: number) => {
    setIndex(next);
  }, []);

  // Preload every slide so crossfades never reveal an empty frame.
  useEffect(() => {
    slides.forEach(({ src }) => {
      const img = new window.Image();
      img.decoding = "async";
      img.onload = () => {
        setLoaded((current) => ({ ...current, [src]: true }));
      };
      img.src = src;
    });
  }, [slides]);

  useEffect(() => {
    if (count <= 1 || paused) return;

    const id = window.setInterval(() => paginate(1), AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [count, paused, paginate, index]);

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
        "group relative w-full bg-transparent md:flex md:h-[46rem] md:items-center md:justify-center md:overflow-hidden md:rounded-xl md:bg-background",
        className,
      )}
    >
      <div className="relative w-full max-md:pt-11 max-md:pb-2 md:absolute md:inset-0 md:pt-14 md:pb-12">
        <div className="absolute top-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 md:top-4">
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

        {/* Stage — mobile height follows the phone; desktop fills the panel */}
        <div
          className="relative mx-auto w-full max-w-[min(86vw,25rem)] max-md:aspect-[1284/2778] md:absolute md:inset-x-8 md:top-14 md:bottom-14 md:max-w-none"
          aria-live="polite"
        >
          {/* Desktop ambient glow (current slide only) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ aspectRatio: PHONE_ASPECT }}
            >
              <Image
                src={slides[index].src}
                alt=""
                fill
                sizes="20rem"
                className="scale-[1.35] object-cover opacity-[0.42] blur-3xl saturate-150 dark:opacity-[0.3] dark:saturate-125"
              />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_72%_at_50%_48%,transparent_0%,var(--background)_72%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
          </div>

          {/* All slides stay mounted — crossfade, no unmount flash */}
          {slides.map((slideItem, slideIndex) => (
            <motion.div
              key={slideItem.src}
              initial={false}
              animate={{ opacity: slideIndex === index ? 1 : 0 }}
              transition={{
                duration: prefersReducedMotion ? 0.2 : 0.4,
                ease: easeOut,
              }}
              aria-hidden={slideIndex !== index}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                zIndex: slideIndex === index ? 1 : 0,
                pointerEvents: slideIndex === index ? "auto" : "none",
              }}
            >
              <PhoneScreenshot
                src={slideItem.src}
                alt={slideItem.alt}
                eager={slideIndex === 0 || Boolean(loaded[slideItem.src])}
                className="h-full w-auto max-w-full md:h-[95%] md:w-auto md:max-w-[min(100%,20rem)] lg:max-w-[min(100%,18rem)]"
                style={{ aspectRatio: PHONE_ASPECT }}
              />
            </motion.div>
          ))}

          <button
            type="button"
            aria-label={prevLabel}
            onClick={() => paginate(-1)}
            className="absolute top-1/2 left-2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground opacity-100 backdrop-blur-md transition-all duration-200 hover:border-primary/35 hover:bg-background focus-visible:opacity-100 md:left-3 md:size-10 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronLeft className="size-5" strokeWidth={2} aria-hidden />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            onClick={() => paginate(1)}
            className="absolute top-1/2 right-2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/80 text-foreground opacity-100 backdrop-blur-md transition-all duration-200 hover:border-primary/35 hover:bg-background focus-visible:opacity-100 md:right-3 md:size-10 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronRight className="size-5" strokeWidth={2} aria-hidden />
          </button>
        </div>

        <div className="relative z-20 mt-4 flex justify-center gap-1.5 md:absolute md:bottom-4 md:left-1/2 md:mt-0 md:-translate-x-1/2">
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
      </div>
    </motion.div>
  );
}
