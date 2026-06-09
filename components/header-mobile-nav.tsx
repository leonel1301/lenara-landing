"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useId, useRef, useState } from "react";

import { ContactHeaderButton } from "@/components/contact-header-button";
import { LanguageSwitch } from "@/components/language-switch";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "home", href: "/" },
  { key: "apps", href: "/apps" },
] as const;

type Props = {
  label: string;
  menuOpenLabel: string;
  menuCloseLabel: string;
};

export function HeaderMobileNav({ label, menuOpenLabel, menuCloseLabel }: Props) {
  const pathname = usePathname();
  const t = useTranslations("header");
  const prefersReducedMotion = useReducedMotion();
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    function onPointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative md:hidden">
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="size-9"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? menuCloseLabel : menuOpenLabel}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <X className="size-5" strokeWidth={1.75} />
        ) : (
          <Menu className="size-5" strokeWidth={1.75} />
        )}
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id={menuId}
            aria-label={label}
            initial={
              prefersReducedMotion
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.96, y: -8 }
            }
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={
              prefersReducedMotion
                ? { opacity: 1, scale: 1, y: 0 }
                : { opacity: 0, scale: 0.96, y: -6 }
            }
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top right" }}
            className={cn(
              "absolute top-[calc(100%+0.5rem)] right-0 z-50 w-72 max-w-[calc(100vw-3rem)]",
              "overflow-hidden rounded-xl border border-border/60 bg-background/95 p-4",
              "shadow-[0_20px_50px_-16px_color-mix(in_oklch,var(--foreground)_30%,transparent)] backdrop-blur-xl",
            )}
          >
            <ul className="space-y-0.5">
              {navItems.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(href) ? "page" : undefined}
                    className={cn(
                      "flex rounded-lg border px-3 py-2.5 text-sm transition-colors",
                      isActive(href)
                        ? "border-primary/35 bg-badge font-medium text-foreground"
                        : "border-transparent text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 space-y-3 border-t border-border/60 pt-4">
              <ContactHeaderButton
                className="h-9 w-full px-3 text-sm"
                onClick={() => setOpen(false)}
              />
              <div className="flex items-center justify-between gap-2">
                <LanguageSwitch />
                <ThemeSwitch />
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
