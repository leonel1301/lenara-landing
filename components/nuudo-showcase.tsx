"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, Monitor, Sparkles, X } from "lucide-react";
import { useRef, useState } from "react";
import type { IconType } from "react-icons";
import {
  SiFastapi, SiNextdotjs, SiPostgresql, SiPython, SiReact,
  SiTailwindcss, SiTanstack, SiTypescript, SiVite,
} from "react-icons/si";

import { AppShowcase } from "@/components/app-showcase";
import { ShowcaseMediaReveal } from "@/components/showcase-media-reveal";
import { nuudoTechStack } from "@/lib/nuudo-tech-stack";
import { cn } from "@/lib/utils";

type Slide = { src: string; title: string; alt: string; description: string };
type Props = {
  badge: string;
  name: string;
  description: string;
  statusLabel: string;
  statusDetail: string;
  techStackLabel: string;
  galleryLabel: string;
  demoLabel: string;
  previousLabel: string;
  nextLabel: string;
  expandLabel: string;
  closeLabel: string;
  slides: Slide[];
};

const icons: Record<string, IconType> = {
  react: SiReact, typescript: SiTypescript, next: SiNextdotjs,
  vite: SiVite, tailwind: SiTailwindcss, python: SiPython,
  fastapi: SiFastapi, postgres: SiPostgresql, tanstack: SiTanstack,
};

export function NuudoShowcase(props: Props) {
  return (
    <AppShowcase
      badge={props.badge}
      name={props.name}
      description={props.description}
      reversed
      availability={
        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">{props.statusLabel}</p>
          <span className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-badge px-3 py-2 text-sm font-medium text-primary">
            <Monitor className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
            {props.statusDetail}
          </span>
        </div>
      }
      afterLegal={
        <div className="rounded-2xl border border-border bg-card p-4">
          <h3 className="text-xs font-medium text-muted-foreground">{props.techStackLabel}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {nuudoTechStack.map(({ id, name }) => {
              const Icon = icons[id] ?? Sparkles;
              return (
                <li key={id} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-foreground">
                  <Icon className="size-3.5 shrink-0 opacity-75" aria-hidden />
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      }
      media={<NuudoGallery {...props} />}
    />
  );
}

function NuudoGallery({
  slides, galleryLabel, demoLabel, previousLabel, nextLabel, expandLabel, closeLabel,
}: Props) {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const slide = slides[index];
  if (!slide) return null;
  const paginate = (step: number) => setIndex(current => (current + step + slides.length) % slides.length);
  const controlClass = "inline-flex size-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  return (
    <ShowcaseMediaReveal className="w-full overflow-hidden rounded-xl border border-border bg-card shadow-[0_18px_40px_-28px_rgba(44,45,46,0.35)]">
      <div role="region" aria-roledescription="carousel" aria-label={galleryLabel}>
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <Image src="/images/nuudo/icon.png" alt="" width={28} height={28} className="rounded-lg" />
            <p className="truncate text-sm font-semibold text-foreground">Nuudo</p>
          </div>
          <button type="button" className={controlClass} aria-label={expandLabel} title={expandLabel} onClick={() => dialog.current?.showModal()}>
            <Expand className="size-4" aria-hidden />
          </button>
        </div>

        <figure>
          <button type="button" className="relative block aspect-[8/5] w-full overflow-hidden bg-black focus-visible:outline-2 focus-visible:outline-primary" aria-label={expandLabel} onClick={() => dialog.current?.showModal()}>
            <Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 1024px) 100vw, 46vw" quality={90} className="object-contain" />
          </button>
          <figcaption className="space-y-1.5 px-4 pt-4" aria-live="polite" aria-atomic="true">
            <p className="text-sm font-semibold text-foreground">{slide.title}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{slide.description}</p>
          </figcaption>
        </figure>

        <div className="flex items-center gap-2 px-4 py-3">
          <button type="button" className={controlClass} aria-label={previousLabel} onClick={() => paginate(-1)}>
            <ChevronLeft className="size-4" aria-hidden />
          </button>
          <div className="flex min-w-0 flex-1 justify-center gap-1.5" aria-label={galleryLabel}>
            {slides.map((item, slideIndex) => (
              <button key={item.src} type="button" aria-pressed={index === slideIndex} onClick={() => setIndex(slideIndex)}
                className={cn("min-w-0 rounded-lg px-2 py-1.5 text-[11px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-primary", index === slideIndex ? "bg-badge text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground")}>
                {item.title}
              </button>
            ))}
          </div>
          <button type="button" className={controlClass} aria-label={nextLabel} onClick={() => paginate(1)}>
            <ChevronRight className="size-4" aria-hidden />
          </button>
        </div>
        <p className="border-t border-border px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">{demoLabel}</p>
      </div>

      <dialog ref={dialog} aria-labelledby="nuudo-capture-title"
        className="fixed inset-0 m-auto max-h-[95svh] w-[min(94vw,1440px)] max-w-none overflow-auto rounded-xl border border-border bg-background p-4 text-foreground shadow-2xl backdrop:bg-black/80"
        onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 id="nuudo-capture-title" className="text-sm font-semibold">Nuudo · {slide.title}</h3>
          <button type="button" className={controlClass} aria-label={closeLabel} onClick={() => dialog.current?.close()}>
            <X className="size-4" aria-hidden />
          </button>
        </div>
        <Image src={slide.src} alt={slide.alt} width={1440} height={900} quality={95} sizes="94vw" className="mx-auto max-h-[80svh] w-full max-w-full rounded-lg object-contain" />
        <p className="mt-3 text-xs text-muted-foreground">{demoLabel}</p>
      </dialog>
    </ShowcaseMediaReveal>
  );
}
