"use client";

import { buttonVariants } from "@/components/ui/button";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import {
  parseSectionHref,
  requestSectionScroll,
  scrollToSection,
} from "@/lib/scroll-to-section";
import { cn } from "@/lib/utils";

type Props = {
  href: `/#${string}`;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  /** Skip button styling so the caller can shape the link. */
  bare?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
};

export function SectionLink({
  href,
  variant = "default",
  size = "default",
  bare = false,
  className,
  onClick,
  children,
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
    <Link
      href={path}
      onClick={handleClick}
      className={bare ? className : cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </Link>
  );
}
