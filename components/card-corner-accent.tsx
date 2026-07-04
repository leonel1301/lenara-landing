import { cn } from "@/lib/utils";

type Props = {
  position?: "top-right" | "bottom-left";
};

export function CardCornerAccent({ position = "top-right" }: Props) {
  const topRight = position === "top-right";

  return (
    <>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute size-11 border-primary/15 transition-all duration-500 group-hover:border-primary/30",
          topRight
            ? "top-5 right-5 border-t border-r group-hover:top-4 group-hover:right-4"
            : "bottom-5 left-5 border-b border-l group-hover:bottom-4 group-hover:left-4",
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100",
          topRight ? "top-14 right-8 w-20" : "bottom-14 left-8 w-24",
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute w-px bg-gradient-to-b from-transparent via-primary/15 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90",
          topRight ? "top-8 right-14 h-16" : "bottom-8 left-14 h-14",
        )}
      />
    </>
  );
}
