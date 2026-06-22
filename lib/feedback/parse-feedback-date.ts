/**
 * Parse an API ISO-8601 timestamp (e.g. "2026-06-21T10:30:00Z") into a Date.
 * The `Z` suffix is interpreted as UTC — this step does not apply the device timezone.
 */
export function parseFeedbackDate(iso: string): Date {
  const date = new Date(iso);

  if (Number.isNaN(date.getTime())) {
    throw new RangeError(`Invalid ISO date: ${iso}`);
  }

  return date;
}

/** Compare two API timestamps for descending sort (newest first). */
export function compareFeedbackDatesDesc(a: string, b: string): number {
  return parseFeedbackDate(b).getTime() - parseFeedbackDate(a).getTime();
}
