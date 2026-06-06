import { RadioTower } from "lucide-react";

export function LiveMatchCard() {
  return (
    <div className="pitch-grid overflow-hidden rounded-2xl border border-white/12 bg-field/10 p-4">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-live px-3 py-1 text-xs font-bold text-white">
          <span className="h-2 w-2 rounded-full bg-white live-pulse" aria-hidden="true" />
          LIVE FOOTBALL
        </span>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-platinum">
          72:18
        </span>
      </div>
      <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
        <div className="rounded-2xl bg-white/10 p-3">
          <p className="text-xs text-platinum/52">HOME</p>
          <p className="mt-1 text-3xl font-semibold text-white">2</p>
        </div>
        <span className="text-sm font-semibold text-champagne">VS</span>
        <div className="rounded-2xl bg-white/10 p-3">
          <p className="text-xs text-platinum/52">AWAY</p>
          <p className="mt-1 text-3xl font-semibold text-white">1</p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-ink/50 px-3 py-2 text-xs text-platinum/68">
        <span className="inline-flex items-center gap-2">
          <RadioTower className="h-4 w-4 text-electric" aria-hidden="true" />
          Now streaming in 4K
        </span>
        <span className="text-champagne">Match Night Ready</span>
      </div>
    </div>
  );
}
