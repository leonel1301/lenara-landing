"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ProjectAreaIcon } from "@/components/project-area-icon";
import { SlabIndex, useSlabReveal } from "@/components/slab";
import { Link } from "@/i18n/navigation";
import type { ProjectArea } from "@/lib/projects";

type Area = {
  id: ProjectArea;
  label: string;
  detail: string;
};

type Props = {
  areas: Area[];
  appsLink: string;
  appsLinkAria: string;
};

export function AboutBuildStack({ areas, appsLink, appsLinkAria }: Props) {
  const reveal = useSlabReveal();

  return (
    <div className="flex flex-col">
      <SlabIndex
        items={areas.map((area) => ({
          ...area,
          icon: (
            <ProjectAreaIcon
              area={area.id}
              className="size-5 text-[var(--slab-ink-soft)] transition-colors duration-300 group-hover:text-[var(--slab-accent)]"
            />
          ),
        }))}
      />

      <motion.div {...reveal(0)} className="mt-6">
        <Link
          href="/apps"
          aria-label={appsLinkAria}
          className="slab-foot group relative flex h-14 items-center justify-between px-8 text-base font-semibold"
        >
          <span className="relative">{appsLink}</span>
          <ArrowRight
            aria-hidden
            className="relative size-5 transition-transform duration-300 ease-out group-hover:translate-x-1"
            strokeWidth={2}
          />
        </Link>
      </motion.div>
    </div>
  );
}
