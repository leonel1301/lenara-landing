"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  fallback: React.ReactNode;
  className?: string;
};

export function ShowcaseImage({ src, alt, fallback, className }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-muted/40",
          className,
        )}
      >
        {fallback}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-muted/30",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
