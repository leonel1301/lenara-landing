import { MessageSquareOff, Smartphone } from "lucide-react";

import { FeedbackDateTime } from "@/components/feedback-date-time";
import { compareFeedbackDatesDesc } from "@/lib/feedback/parse-feedback-date";
import type { FeedbackAdminItem } from "@/lib/feedback/types";
import { cn } from "@/lib/utils";

type Labels = {
  emptyTitle: string;
  emptyDescription: string;
  count: string;
  updatedLabel: string;
};

type Props = {
  items: FeedbackAdminItem[];
  labels: Labels;
  className?: string;
};

export function WaloopFeedbackList({ items, labels, className }: Props) {
  if (items.length === 0) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 px-6 py-16 text-center",
          className,
        )}
      >
        <div className="flex size-14 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">
          <MessageSquareOff className="size-6" strokeWidth={1.75} aria-hidden />
        </div>
        <div className="space-y-2">
          <p className="text-base font-medium text-foreground">{labels.emptyTitle}</p>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            {labels.emptyDescription}
          </p>
        </div>
      </div>
    );
  }

  const sorted = [...items].sort((a, b) => compareFeedbackDatesDesc(a.created_at, b.created_at));

  return (
    <div className={cn("space-y-6", className)}>
      <p className="text-sm text-muted-foreground">{labels.count}</p>
      <ul className="space-y-4">
        {sorted.map((item) => {
          const wasUpdated = item.updated_at !== item.created_at;

          return (
            <li
              key={item.id}
              className="rounded-xl border border-border bg-card p-5 shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_4%,transparent)]"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h2>
                  <div className="flex shrink-0 flex-col items-end gap-0.5 text-xs text-muted-foreground">
                    <FeedbackDateTime iso={item.created_at} />
                    {wasUpdated ? (
                      <span className="inline-flex items-center gap-1">
                        <span>{labels.updatedLabel}</span>
                        <FeedbackDateTime iso={item.updated_at} />
                      </span>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground/80">{item.user_name}</span>
                  {item.device ? (
                    <>
                      <span aria-hidden className="text-border">
                        ·
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Smartphone className="size-3.5 shrink-0" strokeWidth={1.75} aria-hidden />
                        {item.device}
                      </span>
                    </>
                  ) : null}
                </div>
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                  {item.content}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
