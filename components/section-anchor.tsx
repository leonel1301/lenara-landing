"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import {
  parseSectionHref,
  requestSectionScroll,
  scrollToSection,
} from "@/lib/scroll-to-section";

type Props = {
  href: string;
  className?: string;
  children: React.ReactNode;
  "aria-current"?: React.AriaAttributes["aria-current"];
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function SectionAnchor({
  href,
  className,
  children,
  onClick,
  ...rest
}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { path, sectionId } = parseSectionHref(href);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented || !sectionId) return;

    event.preventDefault();

    if (pathname === path) {
      scrollToSection(sectionId);
      return;
    }

    requestSectionScroll(sectionId);
    router.push(path);
  }

  return (
    <Link href={path} onClick={handleClick} className={className} {...rest}>
      {children}
    </Link>
  );
}
