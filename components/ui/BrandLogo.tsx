"use client";

import { Zap } from "lucide-react";
import { assets, brand } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type BrandLogoProps = {
  variant?: "full" | "mark";
  className?: string;
  textClassName?: string;
};

export function BrandLogo({ variant = "full", className, textClassName }: BrandLogoProps) {
  const mark = (
    <ImageWithFallback
      src={assets.logoMark}
      alt={`${brand.name} logo mark`}
      className="h-10 w-10 rounded-full"
      imgClassName="object-contain"
      fallbackClassName="grid place-items-center rounded-full border border-champagne/35 bg-champagne/10 text-champagne shadow-gold"
    >
      <Zap className="h-5 w-5 fill-current" aria-hidden="true" />
    </ImageWithFallback>
  );

  if (variant === "mark") {
    return <div className={className}>{mark}</div>;
  }

  return (
    <div className={cn("flex items-center", className)}>
      <ImageWithFallback
        src={assets.logo}
        alt={`${brand.name} logo`}
        className="hidden h-12 w-44 sm:block"
        imgClassName="object-contain object-left"
        fallbackClassName="flex items-center gap-3"
      >
        {mark}
        <span className={cn("text-base font-semibold tracking-normal text-white", textClassName)}>
          {brand.shortName}
        </span>
      </ImageWithFallback>
      <span className={cn("text-base font-semibold tracking-normal text-white sm:hidden", textClassName)}>
        {brand.shortName}
      </span>
    </div>
  );
}
