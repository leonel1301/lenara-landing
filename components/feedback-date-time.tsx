"use client";

import { parseFeedbackDate } from "@/lib/feedback/parse-feedback-date";
import { cn } from "@/lib/utils";

type Props = {
  iso: string;
  className?: string;
};

/**
 * Format an API UTC timestamp for display in the viewer's locale and timezone.
 * `undefined` locale uses the browser/system locale; formatting uses local timezone.
 */
export function FeedbackDateTime({ iso, className }: Props) {
  let formatted = iso;

  try {
    const date = parseFeedbackDate(iso);
    formatted = new Intl.DateTimeFormat(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  } catch {
    // Keep raw ISO string as fallback when parsing fails.
  }

  return (
    <time dateTime={iso} className={cn(className)}>
      {formatted}
    </time>
  );
}
