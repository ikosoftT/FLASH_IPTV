"use client";

import { useEffect, useState } from "react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
type HeroBackgroundRotatorProps = {
  slides: Array<string | string[]>;
  alt: string;
};

export function HeroBackgroundRotator({ slides, alt }: HeroBackgroundRotatorProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActive((current) => {
        const next = Math.floor(Math.random() * slides.length);
        return next === current ? (current + 1) % slides.length : next;
      });
    }, 8000);

    return () => {
      window.clearInterval(interval);
    };
  }, [slides.length]);

  return (
    <div className="absolute inset-0">
      <ImageWithFallback
        key={active}
        src={slides[active]}
        alt={alt}
        className="hero-bg-fade absolute inset-0 h-full w-full"
        imgClassName="object-cover object-center scale-[1.03]"
        fallbackVariant="hero"
        sizes="100vw"
        priority={active === 0}
      />
    </div>
  );
}
