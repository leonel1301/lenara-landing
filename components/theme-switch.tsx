"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const iconTransition = {
  duration: 0.28,
  ease: [0.22, 1, 0.36, 1] as const,
};

function ThemeIcon({ isDark, reducedMotion }: { isDark: boolean; reducedMotion: boolean }) {
  const Icon = isDark ? Sun : Moon;

  return (
    <span className="relative inline-flex size-4 items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} mode="sync">
        <motion.span
          key={isDark ? "sun" : "moon"}
          initial={
            reducedMotion
              ? false
              : { y: -14, opacity: 0, scale: 0.9, rotate: -20, zIndex: 2 }
          }
          animate={{ y: 0, opacity: 1, scale: 1, rotate: 0, zIndex: 2 }}
          exit={
            reducedMotion
              ? undefined
              : { y: 2, opacity: 0.3, scale: 0.82, rotate: 0, zIndex: 1 }
          }
          transition={iconTransition}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Icon className="size-4" />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function ThemeSwitch() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("common");
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="size-9"
        aria-hidden
        disabled
      />
    );
  }

  const isDark = resolvedTheme === "dark";
  const followsSystem = theme === "system";

  function handleClick() {
    if (followsSystem) {
      setTheme(isDark ? "light" : "dark");
      return;
    }

    setTheme("system");
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className="size-9 overflow-hidden"
      aria-label={
        followsSystem
          ? isDark
            ? t("themeLight")
            : t("themeDark")
          : t("themeSystem")
      }
      onClick={handleClick}
    >
      <ThemeIcon isDark={isDark} reducedMotion={prefersReducedMotion ?? false} />
    </Button>
  );
}
