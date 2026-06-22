import type { LegalDocumentContent } from "@/lib/legal/types";

export const waloopTermsEn: LegalDocumentContent = {
  title: "Terms of Service",
  lastUpdated: "Last updated: June 21, 2026",
  intro: [
    "These Terms of Service (the \"Terms\") govern access to and use of the Waloop mobile application (the \"App\"), a personal finance tool for managing credit cards, developed and operated by Lenara Labs (\"we\", \"our\", or \"the Company\"), with website at https://lenaralabs.com.",
    "By downloading, registering, accessing, or using the App, you (the \"User\") agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the App.",
  ],
  sections: [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      paragraphs: [
        "By creating an account or using Waloop, you represent that you are at least 18 years old and have the legal capacity to enter into contracts under the laws of your country.",
        "If you use the App on behalf of a legal entity, you represent that you have sufficient authority to bind that entity to these Terms.",
      ],
    },
    {
      id: "description",
      title: "2. Service description",
      paragraphs: [
        "Waloop is an iOS personal finance application that helps you organize credit cards and cardholders, track billing cycles and payment due dates, receive reminders, view a timeline of upcoming due dates, identify optimal purchase days, mark payments as completed, and review payment history.",
        "Tagline: Card billing cycles & payment tracker.",
        "The App uses Sign in with Apple and Google Sign-In authentication through Firebase Authentication, push notifications through Firebase Cloud Messaging, and a backend API hosted on Railway.",
        "Waloop does not store full credit card numbers, CVV, PIN, or banking credentials. It does not process real payments, connect to banks or financial aggregators, or transfer money on your behalf.",
      ],
    },
    {
      id: "account",
      title: "3. Eligibility and user account",
      list: [
        "To use certain features, you must create an account through Sign in with Apple or Google Sign-In.",
        "You are responsible for maintaining the confidentiality of your device and credentials associated with your account.",
        "You must provide accurate information and keep it updated as required by the App.",
        "You may sign out of the App at any time.",
        "You may request account deletion through the in-app option or by emailing hello@lenaralabs.com.",
        "You must notify us immediately if you detect unauthorized access to your account.",
      ],
    },
    {
      id: "acceptable-use",
      title: "4. Acceptable use and prohibitions",
      paragraphs: [
        "When using the App, you agree to:",
      ],
      list: [
        "Use Waloop only for personal and lawful purposes.",
        "Enter information accurately and verify dates and relevant data before making decisions.",
        "Not use the App for fraudulent, illegal activities, or activities that infringe third-party rights.",
        "Not attempt unauthorized access to systems, accounts, or data of other users.",
        "Not reverse engineer, decompile, modify, or distribute the App without express authorization from Lenara Labs.",
        "Not use automated mechanisms to extract data or interfere with service operation.",
        "Not misrepresent your identity or impersonate another person.",
      ],
    },
    {
      id: "user-accuracy",
      title: "5. Accuracy of user-provided information",
      paragraphs: [
        "You are solely responsible for the accuracy and completeness of all information you enter into Waloop, including card names, billing cycle days, payment due days, cardholder details, and payment records.",
        "Lenara Labs does not verify your information against financial institutions and is not responsible for errors resulting from incorrect or outdated data you provide.",
      ],
    },
    {
      id: "informational-nature",
      title: "6. Disclaimer — informational tool only",
      paragraphs: [
        "Waloop is an organization and reminder tool. Recommendations, alerts, suggested dates, optimal purchase days, timeline views, and any content displayed in the App are for informational and organizational purposes only.",
        "Waloop does not guarantee exact billing or payment dates as determined by your bank or card issuer. Billing cycles, grace periods, holidays, and issuer policies may differ from the dates you enter or that the App calculates. You are solely responsible for verifying all dates, amounts, charges, interest, and payment obligations directly with your financial institution.",
        "The App does not constitute financial, accounting, legal, tax, or investment advice. Lenara Labs is not a financial institution, bank, card issuer, or regulated advisor.",
      ],
    },
    {
      id: "notifications",
      title: "7. Push notifications",
      paragraphs: [
        "Waloop may send push notifications about billing cycles, payment due dates, and reminders you configure. Push notifications are optional and require your consent through your device settings and in-app preferences.",
        "You may disable notifications at any time through your device settings or within the App. Disabling notifications may limit certain features but will not delete your account or stored data.",
        "We are not responsible for missed notifications due to device settings, connectivity issues, operating system restrictions, or third-party service interruptions.",
      ],
    },
    {
      id: "intellectual-property",
      title: "8. Intellectual property",
      paragraphs: [
        "The App, its design, source code, Waloop brand, logos, text, interfaces, algorithms, and other content are owned by Lenara Labs or its licensors, and are protected by applicable intellectual property laws.",
        "These Terms do not grant you any ownership rights over the App or its components, except for a limited, personal, non-exclusive, revocable, and non-transferable license to use the App in accordance with these Terms.",
      ],
    },
    {
      id: "liability",
      title: "9. Limitation of liability",
      paragraphs: [
        "To the maximum extent permitted by applicable law, Lenara Labs shall not be liable for:",
      ],
      list: [
        "Missed payments, late fees, interest, penalties, or damages resulting from incorrect information entered by the User.",
        "Financial decisions made based on recommendations, notifications, or content from the App.",
        "Discrepancies between dates shown in the App and dates determined by your bank or card issuer.",
        "Temporary service interruptions, connectivity failures, operating system updates, or unavailability of third-party services (including Firebase, Google, Apple, or Railway).",
        "Indirect, incidental, special, or consequential losses, including loss of profits or data, unless mandatory law provides otherwise.",
      ],
      subsections: [
        {
          id: "as-is",
          title: "Exclusion of warranties",
          paragraphs: [
            "The App is provided \"as is\" and \"as available\", without express or implied warranties of absolute accuracy, uninterrupted availability, or fitness for a particular purpose.",
          ],
        },
      ],
    },
    {
      id: "indemnification",
      title: "10. Indemnification",
      paragraphs: [
        "You agree to indemnify, defend, and hold harmless Lenara Labs, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of the App, your violation of these Terms, your violation of any third-party rights, or inaccurate information you provide.",
      ],
    },
    {
      id: "modifications",
      title: "11. Modifications to the service and Terms",
      paragraphs: [
        "We may modify, suspend, or discontinue any part of the App at any time, with or without notice.",
        "We may modify these Terms at any time. We will publish the updated version at https://lenaralabs.com/en/apps/waloop/terms (English) and https://lenaralabs.com/es/apps/waloop/terms (Spanish). When changes are material, we will endeavor to notify you through the App or by email.",
        "Continued use of the App after changes take effect will constitute acceptance of the revised Terms, unless the law requires additional consent.",
      ],
    },
    {
      id: "termination",
      title: "12. Termination",
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
            "You may stop using the App at any time. You may delete your account through the in-app option or by emailing hello@lenaralabs.com.",
            "Provisions that by their nature should survive termination — including limitation of liability, indemnification, intellectual property, and applicable law — will remain in effect.",
          ],
        },
      ],
    },
    {
      id: "third-parties",
      title: "13. Third-party services",
      paragraphs: [
        "The App integrates third-party services, including Firebase (Google), Google Sign-In, Sign in with Apple, and Railway. Use of such services may be subject to additional terms and policies from those providers.",
        "Lenara Labs does not control and is not responsible for the operation, availability, or policies of third-party services.",
      ],
    },
    {
      id: "law",
      title: "14. Governing law and jurisdiction",
      paragraphs: [
        "These Terms shall be governed by and construed in accordance with the laws of the Republic of Peru, without prejudice to mandatory consumer protection rules applicable in your country of residence.",
        "Any dispute arising from these Terms shall preferably be resolved amicably. If no agreement is reached, the parties submit to the jurisdiction of the competent courts of Lima, Peru, unless mandatory law provides otherwise.",
      ],
    },
    {
      id: "contact",
      title: "15. Contact",
      paragraphs: [
        "For inquiries about these Terms, you may contact us at:",
        "Email: hello@lenaralabs.com",
        "Website: https://lenaralabs.com",
        "Company: Lenara Labs",
        "© 2026 Lenara Labs. All rights reserved. Powered by Lenara Labs.",
      ],
    },
  ],
};
