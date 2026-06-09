import { z } from "zod";

import { serviceItems } from "@/lib/services";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "fullName"),
  email: z.string().trim().email("email"),
  company: z.string().trim().optional(),
  service: z.enum(serviceItems, { message: "service" }),
  message: z.string().trim().min(10, "message"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

export const initialContactFormState: ContactFormState = {
  ok: false,
  message: "",
};
