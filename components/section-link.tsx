"use client";

import { buttonVariants } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Props = {
  href: `/#${string}`;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  children: React.ReactNode;
};

export function SectionLink({
  href,
  variant = "default",
  size = "default",
  className,
  onClick,
  children,
}: Props) {
  const pathname = usePathname();
  const sectionId = href.split("#")[1];

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (pathname !== "/" || !sectionId) return;

    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${sectionId}`);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {children}
    </Link>
  );
}
