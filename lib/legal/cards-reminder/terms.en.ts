import type { LegalDocumentContent } from "@/lib/legal/types";

export const cardsReminderTermsEn: LegalDocumentContent = {
  title: "Terms and Conditions of Use",
  lastUpdated: "Last updated: June 13, 2026",
  intro: [
    "These Terms and Conditions of Use (the \"Terms\") govern access to and use of the CardsReminder mobile application (the \"App\"), developed and operated by Lenara Labs (\"we\", \"our\", or \"the Company\"), with website at lenaralabs.com.",
    "By downloading, registering, accessing, or using the App, you (the \"User\") agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the App.",
  ],
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      paragraphs: [
        "By creating an account or using CardsReminder, you represent that you are at least 18 years old and have the legal capacity to enter into contracts under the laws of your country.",
        "If you use the App on behalf of a legal entity, you represent that you have sufficient authority to bind that entity to these Terms.",
      ],
    },
    {
      id: "description",
      title: "2. Service description",
      paragraphs: [
        "CardsReminder is a personal credit card management application that allows you to register cards, billing and payment dates, receive due date notifications, and view payment recommendations based on information you enter.",
        "The App uses Google Sign-In and Apple Sign-In authentication through Firebase, and push notifications through Firebase Cloud Messaging.",
        "CardsReminder does not store full credit card numbers, banking credentials, or perform financial transactions on your behalf.",
      ],
    },
    {
      id: "account",
      title: "3. Registration and user account",
      list: [
        "To use certain features, you must create an account through Google Sign-In or Apple Sign-In.",
        "You are responsible for maintaining the confidentiality of your device and credentials associated with your account.",
        "You must provide accurate information and keep it updated as required by the App.",
        "You must notify us immediately if you detect unauthorized access to your account.",
      ],
    },
    {
      id: "responsibilities",
      title: "4. User responsibilities",
      paragraphs: [
        "When using the App, you agree to:",
      ],
      list: [
        "Use CardsReminder only for personal and lawful purposes.",
        "Enter information accurately and verify dates, amounts, and relevant data before making decisions.",
        "Not use the App for fraudulent, illegal activities, or activities that infringe third-party rights.",
        "Not attempt unauthorized access to systems, accounts, or data of other users.",
        "Not reverse engineer, decompile, modify, or distribute the App without express authorization from Lenara Labs.",
        "Not use automated mechanisms to extract data or interfere with service operation.",
      ],
    },
    {
      id: "informational-nature",
      title: "5. Informational nature of the service",
      paragraphs: [
        "CardsReminder is an organization and reminder tool. Recommendations, alerts, suggested dates, and any content displayed in the App are for informational purposes and personal management support.",
        "The App does not constitute financial, accounting, legal, tax, or investment advice. Lenara Labs is not a financial institution, bank, card issuer, or regulated advisor.",
        "You are solely responsible for verifying with your issuing entity or financial provider the accuracy of dates, amounts, charges, interest, and payment obligations.",
      ],
    },
    {
      id: "liability",
      title: "6. Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, Lenara Labs shall not be liable for:",
      ],
      list: [
        "Missed payments, late fees, interest, penalties, or damages resulting from incorrect information entered by the User.",
        "Financial decisions made based on recommendations, notifications, or content from the App.",
        "Temporary service interruptions, connectivity failures, operating system updates, or unavailability of third-party services.",
        "Indirect, incidental, special, or consequential losses, including loss of profits or data, unless mandatory law provides otherwise.",
      ],
      subsections: [
        {
          id: "as-is",
          title: "As-is provision",
          paragraphs: [
            "The App is provided \"as is\" and \"as available\", without express or implied warranties of absolute accuracy, uninterrupted availability, or fitness for a particular purpose.",
          ],
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual property",
      paragraphs: [
        "The App, its design, source code, CardsReminder brand, logos, text, interfaces, algorithms, and other content are owned by Lenara Labs or its licensors, and are protected by applicable intellectual property laws.",
        "These Terms do not grant you any ownership rights over the App or its components, except for a limited, personal, non-exclusive, revocable, and non-transferable license to use the App in accordance with these Terms.",
      ],
    },
    {
      id: "suspension",
      title: "8. Suspension and termination",
      paragraphs: [
        "We may suspend or terminate your access to the App, temporarily or permanently, if:",
      ],
      list: [
        "You breach these Terms or applicable law.",
        "You use the App in a way that may cause harm, risk, or liability to Lenara Labs or third parties.",
        "It is necessary for security, maintenance, legal compliance, or service protection reasons.",
      ],
      subsections: [
        {
          id: "user-termination",
          title: "User termination",
          paragraphs: [
            "You may stop using the App at any time and request account deletion by emailing hello@lenaralabs.com.",
            "Provisions that by their nature should survive termination — including limitation of liability, intellectual property, and applicable law — will remain in effect.",
          ],
        },
      ],
    },
    {
      id: "third-parties",
      title: "9. Third-party services",
      paragraphs: [
        "The App integrates third-party services, including Google, Apple, and Firebase. Use of such services may be subject to additional terms and policies from those providers.",
        "Lenara Labs does not control and is not responsible for the operation, availability, or policies of third-party services.",
      ],
    },
    {
      id: "modifications",
      title: "10. Modifications to Terms",
      paragraphs: [
        "We may modify these Terms at any time. We will publish the updated version at lenaralabs.com and, when changes are material, will endeavor to notify you through the App or by email.",
        "Continued use of the App after changes take effect will constitute acceptance of the revised Terms, unless the law requires additional consent.",
      ],
    },
    {
      id: "law",
      title: "11. Governing law and jurisdiction",
      paragraphs: [
        "These Terms shall be governed by and construed in accordance with the laws of the Republic of Peru, without prejudice to mandatory consumer protection rules applicable in your country of residence.",
        "Any dispute arising from these Terms shall preferably be resolved amicably. If no agreement is reached, the parties submit to the jurisdiction of the competent courts of Lima, Peru, unless mandatory law provides otherwise.",
      ],
    },
    {
      id: "contact",
      title: "12. Contact",
      paragraphs: [
        "For inquiries about these Terms, you may contact us at:",
        "Email: hello@lenaralabs.com",
        "Website: lenaralabs.com",
        "Controller: Lenara Labs",
      ],
    },
  ],
};
