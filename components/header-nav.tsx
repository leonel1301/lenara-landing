"use client";

import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "home", href: "/" },
  { key: "services", href: "/services" },
  { key: "process", href: "/process" },
  { key: "apps", href: "/apps" },
] as const;

type Props = {
  label: string;
};

const linkClassName =
  "rounded-lg border border-transparent px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-border hover:text-foreground";
const activeClassName = "border-primary/35 bg-badge font-medium text-foreground";

export function HeaderNav({ label }: Props) {
  const pathname = usePathname();
  const t = useTranslations("header");

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav aria-label={label} className="hidden items-center gap-1 lg:flex">
      {navItems.map(({ key, href }) => {
        const active = isActive(href);

        return (
          <Link
            key={key}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(linkClassName, active && activeClassName)}
          >
            {t(`nav.${key}`)}
          </Link>
        );
      })}
    </nav>
  );
}
