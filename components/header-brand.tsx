import Image from "next/image";

import { Link } from "@/i18n/navigation";
import { LENARA_ICON_SRC } from "@/lib/brand";
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
        "group brand-mark inline-flex items-center rounded-lg",
        className,
      )}
    >
      <span className="relative flex h-9 items-center gap-2.5">
        <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-[8px] ring-1 ring-black/5 ring-inset transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 dark:ring-white/10">
          <Image
            src={LENARA_ICON_SRC}
            alt=""
            width={1254}
            height={1254}
            className="size-9 object-cover"
            aria-hidden
            priority
          />
        </span>
        <span className="whitespace-nowrap text-[0.9375rem] font-semibold tracking-[-0.02em] text-foreground transition-colors duration-300 group-hover:text-primary">
          {brand}
        </span>
      </span>
    </Link>
  );
}
