"use client";

import { useActionState } from "react";
import { Mail } from "lucide-react";

import { sendContactMessage } from "@/app/actions/contact";
import { initialContactFormState } from "@/lib/contact-schema";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { serviceItems, type ServiceItem } from "@/lib/services";
import { cn } from "@/lib/utils";

const fieldClassName =
  "h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30";

type FieldLabels = {
  fullName: { label: string; placeholder: string };
  email: { label: string; placeholder: string };
  company: { label: string; placeholder: string };
  service: { label: string; placeholder: string };
  message: { label: string; placeholder: string };
};

type Props = {
  email: string;
  responseTime: string;
  fieldLabels: FieldLabels;
  serviceLabels: Record<ServiceItem, string>;
  submit: string;
  submitting: string;
  compact?: boolean;
};

export function ContactForm({
  email,
  responseTime,
  fieldLabels,
  serviceLabels,
  submit,
  submitting,
  compact = false,
}: Props) {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialContactFormState,
  );

  return (
    <div className={cn("space-y-6", compact && "space-y-5")}>
      {!compact ? (
        <div className="space-y-3 border-b border-border pb-6">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-[var(--primary-hover)]"
          >
            <Mail className="size-4" strokeWidth={1.75} />
            {email}
          </a>
          <p className="text-sm text-muted-foreground">{responseTime}</p>
        </div>
      ) : null}

      {state.message ? (
        <p
          role="status"
          className={cn(
            "rounded-lg border px-4 py-3 text-sm",
            state.ok
              ? "border-primary/25 bg-badge text-primary"
              : "border-destructive/25 bg-destructive/10 text-destructive",
          )}
        >
          {state.message}
        </p>
      ) : null}

      <form action={formAction} className={cn("space-y-4", compact && "space-y-3.5")}>
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            id="fullName"
            label={fieldLabels.fullName.label}
            error={state.fieldErrors?.fullName}
          >
            <Input
              id="fullName"
              name="fullName"
              placeholder={fieldLabels.fullName.placeholder}
              required
              aria-invalid={Boolean(state.fieldErrors?.fullName)}
              className="h-10 bg-background dark:bg-input/30"
            />
          </FormField>

          <FormField
            id="email"
            label={fieldLabels.email.label}
            error={state.fieldErrors?.email}
          >
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={fieldLabels.email.placeholder}
              required
              aria-invalid={Boolean(state.fieldErrors?.email)}
              className="h-10 bg-background dark:bg-input/30"
            />
          </FormField>
        </div>

        <FormField
          id="company"
          label={fieldLabels.company.label}
          error={state.fieldErrors?.company}
        >
          <Input
            id="company"
            name="company"
            placeholder={fieldLabels.company.placeholder}
            className="h-10 bg-background dark:bg-input/30"
          />
        </FormField>

        <FormField
          id="service"
          label={fieldLabels.service.label}
          error={state.fieldErrors?.service}
        >
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            aria-invalid={Boolean(state.fieldErrors?.service)}
            className={cn(fieldClassName, "appearance-none")}
          >
            <option value="" disabled>
              {fieldLabels.service.placeholder}
            </option>
            {serviceItems.map((item) => (
              <option key={item} value={item}>
                {serviceLabels[item]}
              </option>
            ))}
          </select>
        </FormField>

        <FormField
          id="message"
          label={fieldLabels.message.label}
          error={state.fieldErrors?.message}
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder={fieldLabels.message.placeholder}
            aria-invalid={Boolean(state.fieldErrors?.message)}
            className={cn(fieldClassName, compact ? "min-h-24" : "min-h-32", "resize-y")}
          />
        </FormField>

        <button
          type="submit"
          disabled={isPending}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-11 w-full px-6 sm:w-auto",
          )}
        >
          {isPending ? submitting : submit}
        </button>
      </form>
    </div>
  );
}

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
