import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  fullHeight?: boolean;
  className?: string;
  containerClassName?: string;
  scrollIndicator?: React.ReactNode;
  children: React.ReactNode;
};

export function FullscreenSection({
  id,
  fullHeight = false,
  className,
  containerClassName,
  scrollIndicator,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-16 px-6",
        fullHeight
          ? "relative flex min-h-[calc(100svh-var(--header-height))] flex-col justify-center"
          : "py-16 md:py-24",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full flex-col",
          fullHeight && "justify-center",
          containerClassName,
        )}
      >
        {children}
      </div>
      {fullHeight ? scrollIndicator : null}
    </section>
  );
}
