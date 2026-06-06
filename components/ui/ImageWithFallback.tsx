"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageWithFallbackProps = {
  src?: string | string[] | null;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackClassName?: string;
  sizes?: string;
  priority?: boolean;
  children: ReactNode;
};

export function ImageWithFallback({
  src,
  alt,
  className,
  imgClassName,
  fallbackClassName,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  children
}: ImageWithFallbackProps) {
  const candidates = useMemo(() => {
    if (!src) {
      return [];
    }

    return Array.isArray(src) ? src.filter(Boolean) : [src];
  }, [src]);
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState(false);
  const currentSrc = candidates[index];
  const showImage = Boolean(currentSrc) && !failed;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {showImage ? (
        <Image
          src={currentSrc}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
          onError={() => {
            if (index < candidates.length - 1) {
              setIndex((value) => value + 1);
              return;
            }

            setFailed(true);
          }}
        />
      ) : (
        <div className={cn("h-full w-full", fallbackClassName)} role="img" aria-label={alt}>
          {children}
        </div>
      )}
    </div>
  );
}
