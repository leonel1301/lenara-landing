import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "es",
  localeDetection: true,
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
