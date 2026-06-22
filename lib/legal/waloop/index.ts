import { waloopFaqEn } from "@/lib/legal/waloop/faq.en";
import { waloopFaqEs } from "@/lib/legal/waloop/faq.es";
import { waloopPrivacyEn } from "@/lib/legal/waloop/privacy.en";
import { waloopPrivacyEs } from "@/lib/legal/waloop/privacy.es";
import { waloopTermsEn } from "@/lib/legal/waloop/terms.en";
import { waloopTermsEs } from "@/lib/legal/waloop/terms.es";
import type { LegalDocumentContent } from "@/lib/legal/types";
import type { Locale } from "@/i18n/routing";

const privacyByLocale: Record<Locale, LegalDocumentContent> = {
  es: waloopPrivacyEs,
  en: waloopPrivacyEn,
};

const termsByLocale: Record<Locale, LegalDocumentContent> = {
  es: waloopTermsEs,
  en: waloopTermsEn,
};

const faqByLocale: Record<Locale, LegalDocumentContent> = {
  es: waloopFaqEs,
  en: waloopFaqEn,
};

export function getWaloopPrivacy(locale: string): LegalDocumentContent {
  return privacyByLocale[locale as Locale] ?? waloopPrivacyEs;
}

export function getWaloopTerms(locale: string): LegalDocumentContent {
  return termsByLocale[locale as Locale] ?? waloopTermsEs;
}

export function getWaloopFaq(locale: string): LegalDocumentContent {
  return faqByLocale[locale as Locale] ?? waloopFaqEs;
}
