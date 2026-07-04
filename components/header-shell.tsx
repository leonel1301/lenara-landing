"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const MOBILE_MAX_WIDTH = 1023;
const SCROLL_THRESHOLD = 8;
const TOP_THRESHOLD = 16;
const BOTTOM_THRESHOLD = 80;
const TOGGLE_COOLDOWN_MS = 320;

type Props = {
  children: React.ReactNode;
};

export function HeaderShell({ children }: Props) {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const lastScrollY = useRef(0);
  const visibleRef = useRef(true);
  const lastToggleAt = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`);

    function syncMobile() {
      const mobile = media.matches;
      setIsMobile(mobile);

      if (!mobile) {
        delete document.documentElement.dataset.mobileHeaderHidden;
        visibleRef.current = true;
        setVisible(true);
      }
    }

    syncMobile();
    media.addEventListener("change", syncMobile);
    return () => media.removeEventListener("change", syncMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    document.documentElement.dataset.mobileHeaderHidden = visible
      ? "false"
      : "true";

    return () => {
      delete document.documentElement.dataset.mobileHeaderHidden;
    };
  }, [visible, isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    lastScrollY.current = window.scrollY;

    function updateVisibility(nextVisible: boolean) {
      if (visibleRef.current === nextVisible) return;

      const now = Date.now();
      if (now - lastToggleAt.current < TOGGLE_COOLDOWN_MS) return;

      visibleRef.current = nextVisible;
      lastToggleAt.current = now;
      setVisible(nextVisible);
    }

    function getMaxScrollY() {
      return Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
    }

    function onScroll() {
      if (ticking.current) return;

      ticking.current = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const maxScrollY = getMaxScrollY();
        const delta = currentY - lastScrollY.current;
        const nearTop = currentY <= TOP_THRESHOLD;
        const nearBottom = currentY >= maxScrollY - BOTTOM_THRESHOLD;

        if (nearTop || nearBottom) {
          updateVisibility(true);
        } else if (delta > SCROLL_THRESHOLD) {
          updateVisibility(false);
        } else if (delta < -SCROLL_THRESHOLD) {
          updateVisibility(true);
        }

        lastScrollY.current = currentY;
        ticking.current = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  return (
    <header
      className={cn(
        "z-50 border-b border-border/25 bg-background/20 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/15",
        "max-lg:fixed max-lg:inset-x-0 max-lg:top-0 max-lg:transition-transform max-lg:duration-300 max-lg:ease-out",
        isMobile && !visible && "max-lg:-translate-y-full",
        "lg:sticky lg:top-0",
      )}
    >
      {children}
    </header>
  );
}
