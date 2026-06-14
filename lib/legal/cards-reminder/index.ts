import { cardsReminderPrivacyEn } from "@/lib/legal/cards-reminder/privacy.en";
import { cardsReminderPrivacyEs } from "@/lib/legal/cards-reminder/privacy.es";
import { cardsReminderTermsEn } from "@/lib/legal/cards-reminder/terms.en";
import { cardsReminderTermsEs } from "@/lib/legal/cards-reminder/terms.es";
import type { LegalDocumentContent } from "@/lib/legal/types";

type Locale = "en" | "es";

const privacyByLocale: Record<Locale, LegalDocumentContent> = {
  es: cardsReminderPrivacyEs,
  en: cardsReminderPrivacyEn,
};

const termsByLocale: Record<Locale, LegalDocumentContent> = {
  es: cardsReminderTermsEs,
  en: cardsReminderTermsEn,
};

export function getCardsReminderPrivacy(locale: string): LegalDocumentContent {
  return privacyByLocale[locale as Locale] ?? cardsReminderPrivacyEs;
}

export function getCardsReminderTerms(locale: string): LegalDocumentContent {
  return termsByLocale[locale as Locale] ?? cardsReminderTermsEs;
}
