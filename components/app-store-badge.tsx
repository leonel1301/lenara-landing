"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { getAppStoreBadgeSrc } from "@/lib/app-store-badge";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  className?: string;
  height?: number;
};

export function AppStoreBadge({ href, className, height = 40 }: Props) {
  const locale = useLocale() as Locale;
  const t = useTranslations("common");
  const label = t("appStoreBadgeAria");
  const width = Math.round((119.66407 / 40) * height);

  const badge = (
    <>
      <Image
        src={getAppStoreBadgeSrc(locale, "black")}
        alt={label}
        width={width}
        height={height}
        className="h-auto w-auto dark:hidden"
        style={{ height }}
      />
      <Image
        src={getAppStoreBadgeSrc(locale, "white")}
        alt={label}
        width={width}
        height={height}
        className="hidden h-auto w-auto dark:block"
        style={{ height }}
      />
    </>
  );

  const classes = cn("inline-flex shrink-0", className);

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className={classes}
      >
        {badge}
      </a>
    );
  }

  return <span className={classes}>{badge}</span>;
}
