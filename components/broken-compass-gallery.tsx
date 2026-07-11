"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Music2 } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useMemo, useState } from "react";

import { BrokenCompassMusicPlayer } from "@/components/broken-compass-music-player";
import { ShowcaseMediaReveal } from "@/components/showcase-media-reveal";
import { getBrokenCompassPanelTheme } from "@/lib/broken-compass-theme";
import { cn } from "@/lib/utils";

type Slide = {
  src: string;
  alt: string;
  label: string;
};

type MusicProps = {
  title: string;
  tracks: {
    id: string;
    src: string;
    title: string;
    description?: string;
  }[];
  label: string;
  playLabel: string;
  pauseLabel: string;
};

type Props = {
  nightSlides: Slide[];
  daySlides: Slide[];
  label: string;
  previousLabel: string;
  nextLabel: string;
  music?: MusicProps;
};

export function BrokenCompassGallery({
  nightSlides,
  daySlides,
  label,
  previousLabel,
  nextLabel,
  music,
}: Props) {
  const { resolvedTheme } = useTheme();
  const [slideIndices, setSlideIndices] = useState({ dark: 0, light: 0 });
  const prefersReducedMotion = useReducedMotion();

  const themeMode = resolvedTheme === "light" ? "light" : "dark";
  const isDark = themeMode === "dark";
  const slides = isDark ? nightSlides : daySlides;
  const panelTheme = useMemo(() => getBrokenCompassPanelTheme(isDark), [isDark]);
  const activeIndex = slideIndices[themeMode];
  const activeSlide = slides[activeIndex] ?? slides[0];

  const setActiveIndex = (nextIndex: number) => {
    setSlideIndices((current) => ({
      ...current,
      [themeMode]: nextIndex,
    }));
  };

  const paginate = (step: number) => {
    setActiveIndex((activeIndex + step + slides.length) % slides.length);
  };

  if (!activeSlide) return null;

  return (
    <ShowcaseMediaReveal
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-xl border border-border",
        panelTheme.panel,
        panelTheme.panelShadow,
      )}
    >
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label={label}
        className="flex w-full flex-col"
      >
        <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={`${isDark ? "dark" : "light"}-${activeSlide.src}`}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.15 : 0.35 }}
              className="absolute inset-0"
            >
              <Image
                src={activeSlide.src}
                alt={activeSlide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover [image-rendering:pixelated]"
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent",
              panelTheme.imageGradient,
            )}
          />
          <p
            className={cn(
              "absolute bottom-4 left-4 rounded-md border px-3 py-1.5 text-xs font-semibold tracking-wide backdrop-blur-sm",
              panelTheme.slideLabel,
            )}
          >
            {activeSlide.label}
          </p>

          <button
            type="button"
            aria-label={previousLabel}
            onClick={() => paginate(-1)}
            className={cn(
              "absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition",
              panelTheme.navButton,
            )}
          >
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            onClick={() => paginate(1)}
            className={cn(
              "absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur-sm transition",
              panelTheme.navButton,
            )}
          >
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>

        <div className="flex shrink-0 items-center justify-center gap-2 px-4 py-3">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={slide.label}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === activeIndex
                  ? cn("w-7", panelTheme.dotActive)
                  : cn("w-2", panelTheme.dotInactive),
              )}
            />
          ))}
        </div>

        {music ? (
          <div>
            <div className="px-4 pt-4">
              <p
                className={cn(
                  "mb-3 flex items-center gap-2 text-xs font-semibold tracking-wide uppercase",
                  panelTheme.musicLabel,
                )}
              >
                <Music2 className="size-3.5" aria-hidden />
                {music.title}
              </p>
              <BrokenCompassMusicPlayer
                embedded
                panelTheme={panelTheme}
                tracks={music.tracks}
                label={music.label}
                playLabel={music.playLabel}
                pauseLabel={music.pauseLabel}
              />
            </div>
          </div>
        ) : null}
      </div>
    </ShowcaseMediaReveal>
  );
}
