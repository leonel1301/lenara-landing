"use client";

import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "home", href: "/" },
  { key: "apps", href: "/apps" },
] as const;

type Props = {
  label: string;
};

export function HeaderNav({ label }: Props) {
  const pathname = usePathname();
  const t = useTranslations("header");

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav aria-label={label} className="hidden items-center gap-6 md:flex">
      {navItems.map(({ key, href }) => (
        <Link
          key={key}
          href={href}
          aria-current={isActive(href) ? "page" : undefined}
          className={cn(
            "rounded-lg border px-3 py-1.5 text-sm transition-colors",
            isActive(href)
              ? "border-primary/35 bg-badge font-medium text-foreground"
              : "border-transparent text-muted-foreground hover:border-border hover:text-foreground",
          )}
        >
          {t(`nav.${key}`)}
        </Link>
      ))}
    </nav>
  );
}
