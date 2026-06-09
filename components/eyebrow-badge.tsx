import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function EyebrowBadge({ children, className }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-primary/25 bg-badge px-3.5 py-1.5",
        "text-xs font-medium tracking-wide text-primary uppercase",
        "shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_8%,transparent)]",
        "ring-1 ring-primary/10",
        className,
      )}
    >
      {children}
    </span>
  );
}
