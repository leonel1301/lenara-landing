import type { LegalDocumentContent } from "@/lib/legal/types";

export const waloopFaqEn: LegalDocumentContent = {
  title: "Frequently Asked Questions",
  lastUpdated: "Last updated: June 21, 2026",
  intro: [
    "Find answers to common questions about Waloop, the credit card billing cycle and payment tracker app by Lenara Labs.",
    "For privacy or legal inquiries, see our Privacy Policy and Terms of Service, or contact hello@lenaralabs.com.",
  ],
  sections: [
    {
      id: "what-is-waloop",
      title: "What is Waloop?",
      paragraphs: [
        "Waloop is an iOS personal finance app that helps you organize credit cards, track billing cycles and payment due dates, receive reminders, and identify optimal purchase days. It is published by Lenara Labs.",
        "Tagline: Card billing cycles & payment tracker.",
      ],
    },
    {
      id: "rename",
      title: "Is Waloop the same as Cards Reminder?",
      paragraphs: [
        "Yes. Waloop is the new name for Cards Reminder (formerly also known as Cyklo in some contexts). The app, features, and your data remain the same — only the brand name has changed.",
      ],
    },
    {
      id: "bank-connection",
      title: "Does Waloop connect to my bank?",
      paragraphs: [
        "No. Waloop does not connect to banks, financial institutions, or open banking aggregators. You manually enter card information such as card name, last four digits, billing cycle day, and payment due day.",
      ],
    },
    {
      id: "card-numbers",
      title: "Does Waloop store my full credit card number?",
      paragraphs: [
        "No. Waloop never requests or stores full credit card numbers, CVV, PIN, or banking credentials. You may optionally record the last four digits as a reference.",
      ],
    },
    {
      id: "payments",
      title: "Can I pay my credit card bills through Waloop?",
      paragraphs: [
        "No. Waloop does not process real payments or transfer money. It is an organizational and reminder tool. You mark payments as completed for your own tracking — actual payments must be made through your bank or card issuer.",
      ],
    },
    {
      id: "sign-in",
      title: "How do I sign in?",
      paragraphs: [
        "Waloop supports Sign in with Apple and Google Sign-In. Authentication is managed through Firebase Authentication. We receive your email, display name, and a unique user identifier to create and manage your account.",
      ],
    },
    {
      id: "household",
      title: "Can I manage cards for multiple people in my household?",
      paragraphs: [
        "Yes. Waloop lets you create cardholders (owners) and associate cards with each person. You can optionally set a salary day for each cardholder and mark who is the primary user.",
      ],
    },
    {
      id: "optimal-days",
      title: "What are optimal purchase days?",
      paragraphs: [
        "Based on each card's billing cycle day, Waloop suggests the best days to make purchases so charges fall into the most favorable billing period. These are estimates — always verify with your card issuer.",
      ],
    },
    {
      id: "notifications",
      title: "How do push notifications work?",
      paragraphs: [
        "If you enable notifications, Waloop sends reminders about upcoming payment due dates and billing cycles. Notifications are optional and require your consent. You can disable them anytime in your device settings or within the App.",
      ],
    },
    {
      id: "data-storage",
      title: "Where is my data stored?",
      paragraphs: [
        "Your account and card data are synced to our backend API hosted on Railway over encrypted HTTPS. Some preferences (theme, onboarding status) are stored locally on your device. Your profile may also be cached locally using SwiftData.",
      ],
    },
    {
      id: "delete-account",
      title: "How do I delete my account?",
      paragraphs: [
        "You can sign out at any time. Waloop offers an account deletion option within the App. If the in-app flow is unavailable, email hello@lenaralabs.com to request deletion. We will remove your personal data within a reasonable timeframe, subject to legal retention requirements.",
      ],
    },
    {
      id: "languages",
      title: "What languages does Waloop support?",
      paragraphs: [
        "Waloop is available in English and Spanish. The app interface adapts to your device language settings.",
      ],
    },
    {
      id: "platforms",
      title: "Is Waloop available on Android?",
      paragraphs: [
        "Waloop is currently available on iOS (SwiftUI). Android support is not yet available.",
      ],
    },
    {
      id: "financial-advice",
      title: "Is Waloop financial advice?",
      paragraphs: [
        "No. Waloop is an informational and organizational tool. It does not provide financial, legal, or tax advice. Always verify dates, amounts, and payment obligations with your financial institution.",
      ],
    },
    {
      id: "contact",
      title: "How do I contact Lenara Labs?",
      paragraphs: [
        "Email: hello@lenaralabs.com",
        "Website: https://lenaralabs.com",
        "© 2026 Lenara Labs. All rights reserved. Powered by Lenara Labs.",
      ],
    },
  ],
};
