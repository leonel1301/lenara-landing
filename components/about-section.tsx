import { FounderCard } from "@/components/founder-card";
import { ProjectsCard } from "@/components/projects-card";
import { FullscreenSection } from "@/components/fullscreen-section";
import { ScrollReveal } from "@/components/scroll-reveal";

type ProjectAreaLabel = {
  id: "ios" | "android" | "web" | "iot" | "ai";
  label: string;
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
      containerClassName="max-w-5xl"
      className="border-t border-border"
    >
      <div className="flex flex-col gap-8 md:gap-10">
        <ScrollReveal className="max-w-2xl space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid items-stretch gap-6 md:grid-cols-2">
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
