"use client";

import { useEffect } from "react";

import { usePathname } from "@/i18n/navigation";
import {
  consumePendingSectionScroll,
  scrollToSection,
} from "@/lib/scroll-to-section";

export function SectionScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    const pendingSectionId = consumePendingSectionScroll();
    if (pendingSectionId) {
      requestAnimationFrame(() => scrollToSection(pendingSectionId));
      return;
    }

    const hash = window.location.hash.slice(1);
    if (hash) {
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, [pathname]);

  return null;
}
