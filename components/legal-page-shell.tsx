import { ArrowLeft } from "lucide-react";

import { FullscreenSection } from "@/components/fullscreen-section";
import { LegalDocument } from "@/components/legal-document";
import { Link } from "@/i18n/navigation";
import type { LegalDocumentContent } from "@/lib/legal/types";

type Props = {
  eyebrow: string;
  backLabel: string;
  backHref: string;
  document: LegalDocumentContent;
};

export function LegalPageShell({ eyebrow, backLabel, backHref, document }: Props) {
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
      <LegalDocument document={document} />
    </FullscreenSection>
  );
}
