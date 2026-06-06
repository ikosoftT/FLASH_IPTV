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
      className="logo-glass-pill group relative flex h-[5.35rem] min-w-[14.5rem] shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] border border-white/14 bg-white/[0.07] px-6 text-center shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition duration-300 hover:-translate-y-0.5 hover:border-champagne/45 hover:bg-white/[0.11]"
      aria-label={`${item.name} ${item.category} ${item.disclaimer}`}
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_0%,rgba(255,255,255,0.18),transparent_40%),linear-gradient(135deg,rgba(216,180,106,0.12),rgba(72,167,255,0.08),rgba(22,163,74,0.1))] opacity-80" aria-hidden="true" />
      <span className="absolute -left-14 top-0 h-full w-12 rotate-12 bg-white/20 blur-sm transition duration-700 group-hover:left-[115%]" aria-hidden="true" />
      <span className="absolute inset-x-5 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/60 to-transparent" aria-hidden="true" />
      <ImageWithFallback
        src={item.image}
        alt={`${item.name} owner-provided logo`}
        className="relative h-full w-full"
        imgClassName="object-contain p-3 opacity-100 drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]"
        fallbackClassName="flex flex-col items-center justify-center"
      >
        <span className="text-base font-black uppercase tracking-[0.08em] text-white drop-shadow">
          {item.name}
        </span>
        <span className="mt-1 rounded-full border border-champagne/25 bg-champagne/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-champagne/90">
          {item.category}
        </span>
      </ImageWithFallback>
    </div>
  );
}
