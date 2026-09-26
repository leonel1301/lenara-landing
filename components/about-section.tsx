import { FounderCard } from "@/components/founder-card";
import { ProjectsCard } from "@/components/projects-card";
import { FullscreenSection } from "@/components/fullscreen-section";
import { ScrollReveal } from "@/components/scroll-reveal";

type ProjectAreaLabel = {
  id: "ios" | "android" | "web" | "iot" | "ai";
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
  initials,
  projectsLabel,
  projectsTitle,
  projectsDescription,
  projectAreas,
  appsLink,
  appsLinkAria,
}: Props) {
  return (
    <FullscreenSection
      id="about"
      containerClassName="max-w-6xl"
      className="relative"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-80 h-[58rem] bg-[linear-gradient(to_bottom,transparent_0%,color-mix(in_oklch,var(--primary)_7%,var(--background))_22%,color-mix(in_oklch,var(--primary)_7%,var(--background))_48%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-[6%] size-[28rem] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 size-64 rounded-full bg-[var(--icon-4)]/10 blur-3xl"
      />

      <div className="relative flex flex-col gap-8 md:gap-10">
        <ScrollReveal className="max-w-3xl space-y-4">
          <h2 className="text-4xl font-semibold tracking-[-0.035em] text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="grid items-stretch gap-5 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-6">
            <FounderCard
              founderLabel={founderLabel}
              name={name}
              role={role}
              description={description}
              profileLink={profileLink}
              profileLinkAria={profileLinkAria}
              initials={initials}
            />
            <ProjectsCard
              label={projectsLabel}
              title={projectsTitle}
              description={projectsDescription}
              areas={projectAreas}
              appsLink={appsLink}
              appsLinkAria={appsLinkAria}
            />
          </div>
        </ScrollReveal>
      </div>
    </FullscreenSection>
  );
}
