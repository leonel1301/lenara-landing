import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { LENARA_ICON_SRC, LENARA_ICON_ZOOM } from "@/lib/brand";
import { cn } from "@/lib/utils";

type Props = {
  brand: string;
  className?: string;
};

export function HeaderBrand({ brand, className }: Props) {
  return (
    <Link
      href="/"
      className={cn(
        "group brand-mark inline-flex items-center rounded-lg border border-border bg-background p-0.5",
        "transition-[border-color,box-shadow] duration-300",
        "hover:border-primary/35 hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--primary)_18%,transparent)]",
        className,
      )}
    >
      <span className="relative flex h-8 items-center gap-2.5 overflow-hidden rounded-[6px] px-2.5">
        <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden">
          <Image
            src={LENARA_ICON_SRC}
            alt=""
            width={1536}
            height={1024}
            className="h-8 w-auto shrink-0 object-contain dark:brightness-0 dark:invert"
            style={{ transform: `scale(${LENARA_ICON_ZOOM})` }}
            aria-hidden
            priority
          />
        </span>
        <span className="whitespace-nowrap text-sm font-semibold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
          {brand}
        </span>
        <span
          aria-hidden
          className="brand-mark-shine pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-primary/12 to-transparent"
        />
      </span>
    </Link>
  );
}
