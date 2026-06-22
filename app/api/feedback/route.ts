import { FeedbackFetchError, fetchFeedback } from "@/lib/feedback/fetch-feedback";

export async function GET() {
  try {
    const feedback = await fetchFeedback();
    return Response.json(feedback, { status: 200 });
  } catch (error) {
    if (error instanceof FeedbackFetchError) {
      return Response.json({ error: error.message }, { status: error.status });
    }

    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
