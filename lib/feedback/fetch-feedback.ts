import type { FeedbackAdminItem } from "@/lib/feedback/types";

export class FeedbackFetchError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message);
    this.name = "FeedbackFetchError";
  }
}

export async function fetchFeedback(): Promise<FeedbackAdminItem[]> {
  const baseUrl = process.env.FEEDBACK_URL_ENDPOINT;
  const token = process.env.FEEDBACK_ADMIN_TOKEN;

  if (!baseUrl || !token) {
    throw new FeedbackFetchError("Feedback configuration missing", 500);
  }

  const res = await fetch(`${baseUrl.replace(/\/$/, "")}/feedback`, {
    headers: {
      "X-Feedback-Token": token,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new FeedbackFetchError("Failed to fetch feedback", res.status);
  }

  const data: unknown = await res.json();

  if (!Array.isArray(data)) {
    throw new FeedbackFetchError("Invalid feedback response", 500);
  }

  return data as FeedbackAdminItem[];
}
