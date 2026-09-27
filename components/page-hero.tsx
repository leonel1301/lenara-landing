import { ArrowDown } from "lucide-react";

import { FullscreenSection } from "@/components/fullscreen-section";
import {
  ScrollRevealItem,
  ScrollRevealStagger,
} from "@/components/scroll-reveal";
import { SlabIndex } from "@/components/slab";

type IndexItem = {
  id: string;
  label: string;
  detail?: string;
};

type Props = {
  title: string;
  description: string;
  indexLabel: string;
  items: IndexItem[];
  scrollIndicator?: React.ReactNode;
};

export function PageHero({
  title,
  description,
  indexLabel,
  items,
  scrollIndicator,
}: Props) {
  return (
    <FullscreenSection
      fullHeight
      containerClassName="max-w-6xl"
      className="bg-background"
      scrollIndicator={scrollIndicator}
    >
      <div className="grid items-center gap-14 py-16 lg:grid-cols-12 lg:gap-x-10">
        <ScrollRevealStagger
          trigger="mount"
          stagger={0.12}
          className="flex flex-col gap-6 lg:col-span-6"
        >
          <ScrollRevealItem>
            <h1 className="text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-balance text-foreground md:text-7xl">
              {title}
            </h1>
          </ScrollRevealItem>
          <ScrollRevealItem>
            <p className="max-w-lg text-lg leading-relaxed text-pretty text-muted-foreground md:text-xl">
              {description}
            </p>
          </ScrollRevealItem>
        </ScrollRevealStagger>

        <nav aria-label={indexLabel} className="lg:col-span-5 lg:col-start-8">
          <SlabIndex
            trigger="mount"
            size="lg"
            items={items.map((item) => ({
              ...item,
              href: `#${item.id}`,
              icon: (
                <ArrowDown
                  aria-hidden
                  className="size-5 text-[var(--slab-ink-soft)] transition-[color,translate] duration-300 group-hover:translate-y-0.5 group-hover:text-[var(--slab-accent)]"
                  strokeWidth={1.75}
                />
              ),
            }))}
          />
        </nav>
      </div>
    </FullscreenSection>
  );
}
