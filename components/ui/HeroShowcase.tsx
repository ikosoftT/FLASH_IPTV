import { Clapperboard, MonitorSmartphone, Play, ShieldCheck, Sparkles, Trophy, Zap } from "lucide-react";
import { assets, devices } from "@/lib/data";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const heroTiles = [
  { label: "Live Football", icon: Trophy, tone: "from-field/40 via-electric/20 to-ink" },
  { label: "Premium Cinema", icon: Clapperboard, tone: "from-champagne/35 via-aura/20 to-ink" },
  { label: "Series & VOD", icon: Play, tone: "from-electric/35 via-live/15 to-ink" }
];

export function HeroShowcase() {
  return (
    <div className="hero-showcase-float relative mx-auto w-full max-w-[560px] lg:ml-auto">
      <div className="absolute -left-6 top-12 z-20 hidden rounded-2xl border border-white/14 bg-ink/62 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:block">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-live/15 text-live">
            <Zap className="h-5 w-5 fill-current" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-platinum/50">Activation</p>
            <p className="text-sm font-semibold text-white">2 min WhatsApp setup</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 bottom-24 z-20 hidden rounded-2xl border border-champagne/24 bg-champagne/12 px-4 py-3 shadow-gold backdrop-blur-2xl sm:block">
        <div className="flex items-center gap-2 text-sm font-bold text-champagne">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          4K / FHD / HD
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.065] p-2 shadow-[0_34px_120px_rgba(0,0,0,0.52)] backdrop-blur-2xl sm:rounded-[2.35rem] sm:p-3">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(216,180,106,0.22),transparent_32%),radial-gradient(circle_at_100%_18%,rgba(72,167,255,0.24),transparent_36%)]" />
        <div className="hero-screen-shine pointer-events-none absolute inset-0" />

        <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-ink sm:rounded-[1.9rem]">
          <div className="relative aspect-[1.08] min-h-[430px] overflow-hidden sm:aspect-[1.04]">
            <ImageWithFallback
              src={assets.heroDashboard}
              alt="Generic premium sports streaming background"
              className="absolute inset-0 h-full w-full"
              imgClassName="object-cover object-center"
              fallbackClassName="hidden"
              sizes="(max-width: 1024px) 92vw, 560px"
              priority
            >
              <span />
            </ImageWithFallback>
            <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/42 to-ink/96" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/42" />

            <div className="relative flex h-full flex-col justify-between p-4 sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-live/35 bg-live/14 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-live live-pulse" />
                  Live now
                </div>
                <div className="rounded-full border border-champagne/30 bg-champagne/15 px-3 py-1.5 text-xs font-black text-champagne backdrop-blur-xl">
                  4K READY
                </div>
              </div>

              <div className="max-w-[21rem]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-champagne">Flash Match Center</p>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Premium sports, cinema & live TV in one command center
                </h2>
                <p className="mt-3 text-sm leading-6 text-platinum/68">
                  Built for match night, movie night, and every screen in the house.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroTiles.map((tile) => (
                  <div
                    key={tile.label}
                    className={`rounded-2xl border border-white/12 bg-gradient-to-br ${tile.tone} p-3 shadow-[0_16px_46px_rgba(0,0,0,0.28)] backdrop-blur-xl`}
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/12 text-white">
                      <tile.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-white">{tile.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-ink/82 p-3 sm:p-4">
            <div className="flex flex-wrap items-center gap-2">
              {devices.slice(0, 5).map((device) => (
                <span key={device.name} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs text-platinum/72">
                  <MonitorSmartphone className="h-3.5 w-3.5 text-electric" aria-hidden="true" />
                  {device.name}
                </span>
              ))}
              <span className="ml-auto hidden items-center gap-2 rounded-full border border-field/20 bg-field/10 px-3 py-1.5 text-xs font-semibold text-field sm:inline-flex">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                Secure access
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
