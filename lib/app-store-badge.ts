import type { Locale } from "@/i18n/routing";

const badges: Record<Locale, { black: string; white: string }> = {
  en: {
    black: "/images/apple/en/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",
    white: "/images/apple/en/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg",
  },
  es: {
    black: "/images/apple/es/Download_on_the_App_Store_Badge_ES_RGB_blk_100217.svg",
    white: "/images/apple/es/Download_on_the_App_Store_Badge_ES_RGB_wht_100217.svg",
  },
};

export function getAppStoreBadgeSrc(locale: Locale, variant: "black" | "white") {
  return badges[locale][variant];
}
