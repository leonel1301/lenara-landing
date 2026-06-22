import { ArrowLeft } from "lucide-react";

import { FullscreenSection } from "@/components/fullscreen-section";
import { Link } from "@/i18n/navigation";

type Props = {
  eyebrow: string;
  backLabel: string;
  backHref: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function WaloopSubpageShell({
  eyebrow,
  backLabel,
  backHref,
  title,
  description,
  children,
}: Props) {
  return (
    <FullscreenSection containerClassName="max-w-3xl">
      <header className="mb-10 flex flex-col gap-4 border-b border-border pb-8">
        <Link
          href={backHref}
          className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 shrink-0" aria-hidden />
          <span>{backLabel}</span>
        </Link>
        <p className="text-sm text-muted-foreground">{eyebrow}</p>
      </header>
      <div className="space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </FullscreenSection>
  );
}
