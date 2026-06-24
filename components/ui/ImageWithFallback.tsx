"use client";

import { useMemo, useState, type ReactNode } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type FallbackVariant = "default" | "hero" | "poster" | "sports" | "devices" | "cta";

type ImageWithFallbackProps = {
  src?: string | string[] | null;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackClassName?: string;
  fallbackVariant?: FallbackVariant;
  sizes?: string;
  priority?: boolean;
  children?: ReactNode;
};

const fallbackVariants: Record<FallbackVariant, string> = {
  default: "bg-[radial-gradient(circle_at_20%_15%,rgba(216,180,106,0.24),transparent_18rem),radial-gradient(circle_at_78%_18%,rgba(72,167,255,0.2),transparent_20rem),linear-gradient(135deg,#101622,#05070d_58%,#080d18)]",
  hero: "cinematic-fallback-bg",
  poster: "bg-[radial-gradient(circle_at_32%_18%,rgba(255,255,255,0.16),transparent_10rem),linear-gradient(150deg,rgba(255,54,94,0.42),rgba(139,92,246,0.28)_42%,rgba(72,167,255,0.16))]",
  sports: "bg-[radial-gradient(circle_at_24%_18%,rgba(22,163,74,0.44),transparent_18rem),radial-gradient(circle_at_78%_24%,rgba(216,180,106,0.22),transparent_18rem),linear-gradient(145deg,#07140d,#05070d_64%,#101622)]",
  devices: "pitch-grid bg-field/10",
  cta: "bg-[radial-gradient(circle_at_24%_12%,rgba(216,180,106,0.24),transparent_20rem),radial-gradient(circle_at_74%_16%,rgba(255,54,94,0.18),transparent_22rem),linear-gradient(135deg,#14090d,#05070d_58%,#101622)]"
};

export function ImageWithFallback({
  src,
  alt,
  className,
  imgClassName,
  fallbackClassName,
  fallbackVariant = "default",
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

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {currentSrc && !failed ? (
        <Image
          src={currentSrc!}
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
        <div className={cn("h-full w-full", fallbackVariants[fallbackVariant], fallbackClassName)} role="img" aria-label={alt}>
          {children ?? <span className="sr-only">{alt}</span>}
        </div>
      )}
    </div>
  );
}
