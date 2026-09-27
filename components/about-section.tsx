import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { AboutBuildStack } from "@/components/about-build-stack";
import { ScrollReveal } from "@/components/scroll-reveal";
import { PERSONAL_HOMEPAGE_URL } from "@/lib/process";
import type { ProjectArea } from "@/lib/projects";

const FOUNDER_PHOTO_SRC = "/images/lenara/leonel-ortega.jpg";

type ProjectAreaLabel = {
  id: ProjectArea;
  label: string;
  detail: string;
};

type Props = {
  title: string;
  subtitle: string;
  founderLabel: string;
  name: string;
  role: string;
  description: string;
  profileLink: string;
  profileLinkAria: string;
  initials: string;
  projectsLabel: string;
  projectsTitle: string;
  projectsDescription: string;
  projectAreas: ProjectAreaLabel[];
  appsLink: string;
  appsLinkAria: string;
};

export function AboutSection({
  title,
  subtitle,
  founderLabel,
  name,
  role,
  description,
  profileLink,
  profileLinkAria,
  projectsLabel,
  projectsTitle,
  projectsDescription,
  projectAreas,
  appsLink,
  appsLinkAria,
}: Props) {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="slab-field scroll-mt-[var(--header-height)] px-6 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-16 lg:grid-cols-12 lg:gap-x-10">
        <div className="flex flex-col gap-12 lg:col-span-5 lg:gap-16">
          <ScrollReveal className="space-y-5">
            <h2
              id="about-title"
              className="text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.035em] text-balance text-[var(--slab-ink)] md:text-6xl"
            >
              {title}
            </h2>
            <p className="max-w-md text-lg leading-relaxed text-pretty text-[var(--slab-ink-soft)]">
              {subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <figure
              aria-label={founderLabel}
              className="border-t border-[var(--slab-rule)] pt-8"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={FOUNDER_PHOTO_SRC}
                  alt={name}
                  width={160}
                  height={160}
                  sizes="80px"
                  className="size-20 shrink-0 rounded-full object-cover shadow-[0_10px_24px_-14px_var(--slab-shadow)] ring-1 ring-[var(--slab-rule)]"
                />
                <figcaption className="min-w-0">
                  <p className="text-xl font-semibold tracking-[-0.02em] text-[var(--slab-ink)]">
                    {name}
                  </p>
                  <p className="text-sm font-medium text-[var(--slab-accent)]">
                    {role}
                  </p>
                </figcaption>
              </div>
              <blockquote className="mt-6 max-w-md text-base leading-relaxed text-pretty text-[var(--slab-ink-soft)]">
                {description}
              </blockquote>
              <a
                href={PERSONAL_HOMEPAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={profileLinkAria}
                className="slab-link group mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
              >
                {profileLink}
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </a>
            </figure>
          </ScrollReveal>
        </div>

        <div
          aria-label={projectsLabel}
          role="group"
          className="flex flex-col gap-10 lg:col-span-6 lg:col-start-7 lg:pt-3"
        >
          <ScrollReveal className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[var(--slab-ink)] md:text-3xl">
              {projectsTitle}
            </h3>
            <p className="max-w-md text-base leading-relaxed text-pretty text-[var(--slab-ink-soft)]">
              {projectsDescription}
            </p>
          </ScrollReveal>

          <AboutBuildStack
            areas={projectAreas}
            appsLink={appsLink}
            appsLinkAria={appsLinkAria}
          />
        </div>
      </div>
    </section>
  );
}
