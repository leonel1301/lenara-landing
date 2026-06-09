"use client";

import { useServerInsertedHTML } from "next/navigation";

import { themeInitScript } from "@/lib/theme-init-script";

export function ThemeScript() {
  useServerInsertedHTML(() => (
    <script
      id="theme-init"
      dangerouslySetInnerHTML={{ __html: themeInitScript }}
    />
  ));

  return null;
}
