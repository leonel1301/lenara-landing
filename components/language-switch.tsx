"use client";

import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { getPathname, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeLabels: Record<Locale, string> = {
  en: "EN",
  es: "ES",
};

export function LanguageSwitch() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations("common");

  function onSelect(nextLocale: Locale) {
    if (nextLocale === locale) return;
    const href = getPathname({ locale: nextLocale, href: pathname });
    window.location.assign(href);
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      className="inline-flex items-center rounded-lg border border-border bg-background p-0.5"
    >
      {routing.locales.map((loc) => (
        <Button
          key={loc}
          type="button"
          variant={locale === loc ? "default" : "ghost"}
          size="sm"
          className={cn(
            "h-7 min-w-10 px-2.5 text-xs font-semibold tracking-wide",
            locale !== loc && "text-muted-foreground",
          )}
          aria-pressed={locale === loc}
          onClick={() => onSelect(loc)}
        >
          {localeLabels[loc]}
        </Button>
      ))}
    </div>
  );
}
