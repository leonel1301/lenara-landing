import type { LegalDocumentContent, LegalSection } from "@/lib/legal/types";
import { cn } from "@/lib/utils";

type Props = {
  document: LegalDocumentContent;
  className?: string;
};

function LegalBlock({ paragraphs, list }: Pick<LegalSection, "paragraphs" | "list">) {
  return (
    <>
      {paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="leading-relaxed text-muted-foreground">
          {paragraph}
        </p>
      ))}
      {list && list.length > 0 ? (
        <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-primary/70">
          {list.map((item) => (
            <li key={item.slice(0, 48)} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

function LegalSectionBlock({ section, level }: { section: LegalSection; level: 2 | 3 }) {
  const Heading = level === 2 ? "h2" : "h3";

  return (
    <section id={section.id} className="scroll-mt-24 space-y-4">
      <Heading
        className={cn(
          "font-semibold tracking-tight text-foreground",
          level === 2 ? "text-xl md:text-2xl" : "text-lg md:text-xl",
        )}
      >
        {section.title}
      </Heading>
      <LegalBlock paragraphs={section.paragraphs} list={section.list} />
      {section.subsections?.map((subsection) => (
        <div key={subsection.id} className="space-y-3 border-l border-border pl-4">
          <LegalSectionBlock section={subsection} level={3} />
        </div>
      ))}
    </section>
  );
}

export function LegalDocument({ document, className }: Props) {
  return (
    <article className={cn("space-y-10", className)}>
      <header className="space-y-4 pb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {document.title}
        </h1>
        <p className="text-sm text-muted-foreground">{document.lastUpdated}</p>
        <div className="space-y-4">
          {document.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </header>

      <div className="space-y-10">
        {document.sections.map((section) => (
          <LegalSectionBlock key={section.id} section={section} level={2} />
        ))}
      </div>
    </article>
  );
}
