"use client";

import { Link, usePathname } from "@/i18n/navigation";

function parseSectionHref(href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) {
    return { path: href, sectionId: undefined };
  }

  return {
    path: href.slice(0, hashIndex) || "/",
    sectionId: href.slice(hashIndex + 1),
  };
}

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionAnchor({ href, className, children }: Props) {
  const pathname = usePathname();
  const { path, sectionId } = parseSectionHref(href);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!sectionId || pathname !== path) return;

    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
