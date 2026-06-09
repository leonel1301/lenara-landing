"use server";

import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

import {
  contactSchema,
  type ContactFormState,
  initialContactFormState,
} from "@/lib/contact-schema";

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const t = await getTranslations("home.contact.form");

  const parsed = contactSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    company: formData.get("company") || undefined,
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};

    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !(field in fieldErrors)) {
        fieldErrors[field] = t(`errors.${field}`);
      }
    }

    return {
      ok: false,
      message: t("validationError"),
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return {
      ok: false,
      message: t("configError"),
    };
  }

  const servicesT = await getTranslations("home.contact.services");
  const { fullName, email, company, service, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Lenara Labs] New contact from ${fullName}`,
      text: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        `Service: ${servicesT(service)}`,
        "",
        "Message:",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return {
      ok: true,
      message: t("success"),
    };
  } catch {
    return {
      ok: false,
      message: t("error"),
    };
  }
}

export { initialContactFormState };
