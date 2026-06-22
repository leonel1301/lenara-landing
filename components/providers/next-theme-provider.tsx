"use client";

import { ThemeProvider } from "next-themes";

import { SystemThemeSync } from "@/components/providers/system-theme-sync";

export function NextThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
      scriptProps={{ type: "application/json" }}
    >
      <SystemThemeSync />
      {children}
    </ThemeProvider>
  );
}
