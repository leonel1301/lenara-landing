"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function SystemThemeSync() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("system");

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncWithSystem = () => setTheme("system");

    media.addEventListener("change", syncWithSystem);
    return () => media.removeEventListener("change", syncWithSystem);
  }, [setTheme]);

  return null;
}
