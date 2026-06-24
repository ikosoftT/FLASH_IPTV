import { MonitorSmartphone, Play } from "lucide-react";
import { carouselCategories, devices, vodTiles } from "@/lib/data";
import { LiveMatchCard } from "@/components/ui/LiveMatchCard";

export function StreamingMockup() {
  const channels = carouselCategories.slice(0, 8);

  return (
    <div className="glass float-soft relative rounded-[1.6rem] p-2.5 sm:p-4">
      <div className="rounded-[1.3rem] border border-white/10 bg-ink/88 p-3 sm:p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-champagne">Flash Match Center</p>
            <h2 className="mt-1 text-lg font-semibold text-white sm:text-xl">Live TV Dashboard</h2>
          </div>
          <span className="rounded-full bg-champagne px-3 py-1 text-xs font-bold text-ink">4K READY</span>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
          <LiveMatchCard />
          <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
            <p className="text-sm font-semibold text-white">Channel Categories</p>
            <div className="mt-3 space-y-2">
              {channels.slice(0, 5).map((channel, index) => (
                <div key={channel} className="flex items-center justify-between rounded-xl bg-white/[0.055] px-3 py-2 text-xs text-platinum/70">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-field" />
                    {channel}
                  </span>
                  <span>{index === 0 ? "LIVE" : "HD"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3">
          <div className="flex w-max gap-3 marquee-slow">
            {[...vodTiles, ...vodTiles].map((tile, index) => (
              <div
                key={`${tile}-${index}`}
                className="h-24 w-36 shrink-0 rounded-2xl border border-white/10 bg-gradient-to-br from-electric/35 via-aura/25 to-champagne/25 p-3 sm:h-28 sm:w-40"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white/14 text-white">
                  <Play className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                </span>
                <p className="mt-5 text-sm font-semibold text-white sm:mt-8">{tile}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {devices.slice(0, 6).map((device) => (
            <span key={device.name} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs text-platinum/70">
              <MonitorSmartphone className="h-3.5 w-3.5 text-electric" aria-hidden="true" />
              {device.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
