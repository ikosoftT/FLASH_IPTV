"use client";

import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

type ChannelLogoPillProps = {
  item: {
    name: string;
    image: string | string[] | null;
    category: string;
    disclaimer: string;
  };
};

export function ChannelLogoPill({ item }: ChannelLogoPillProps) {
  return (
    <div
      className="flex h-16 min-w-48 shrink-0 items-center justify-center rounded-2xl border border-white/14 bg-white/[0.085] px-5 text-center shadow-glow backdrop-blur-xl"
      aria-label={`${item.name} ${item.category} ${item.disclaimer}`}
    >
      <ImageWithFallback
        src={item.image}
        alt={`${item.name} owner-provided logo`}
        className="h-full w-full"
        imgClassName="object-contain p-2 opacity-100"
        fallbackClassName="flex flex-col items-center justify-center"
      >
        <span className="text-sm font-bold uppercase tracking-[0.08em] text-white">
          {item.name}
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.14em] text-champagne/80">{item.category}</span>
      </ImageWithFallback>
    </div>
  );
}
