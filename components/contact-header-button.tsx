"use client";

import { useTranslations } from "next-intl";

import { SectionLink } from "@/components/section-link";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function ContactHeaderButton({ className, onClick }: Props = {}) {
  const t = useTranslations("header");

  return (
    <SectionLink
      href="/#contact"
      size="sm"
      className={cn("h-7 px-3 text-xs font-semibold", className)}
      onClick={onClick}
    >
      {t("contact")}
    </SectionLink>
  );
}
