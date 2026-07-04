import { SERVICES_AI_BANNER_COLOR } from "@/lib/brand";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function AccentStrip({ children, className, ariaLabel }: Props) {
  return (
    <section
      aria-label={ariaLabel}
      className={cn("w-full px-6 py-4 md:py-5", className)}
      style={{ backgroundColor: SERVICES_AI_BANNER_COLOR }}
    >
      {children}
    </section>
  );
}
