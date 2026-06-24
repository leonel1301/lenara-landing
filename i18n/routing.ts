import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  localeDetection: true,
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
