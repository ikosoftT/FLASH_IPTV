import { ArrowRight, Clapperboard, MessageCircle, MonitorSmartphone, Radio, ShieldCheck, Sparkles, Star, Zap } from "lucide-react";
import { brand, contact, homeImages } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { HeroBackgroundRotator } from "@/components/ui/HeroBackgroundRotator";
import { whatsappUrl } from "@/lib/whatsapp";

const heroStats = [
  { label: "Live Channels", value: "26K+", icon: Radio },
  { label: "VOD Library", value: "100K+", icon: Clapperboard },
  { label: "Average Setup", value: "2 Min", icon: Zap },
  { label: "Support", value: "24/7", icon: MessageCircle }
];

const devices = ["Smart TV", "Fire Stick", "Android TV", "iPhone", "MAG", "PC"];

export function Hero() {
  return (
    <section className="relative isolate -mt-[4.75rem] min-h-[100svh] flex flex-col justify-center overflow-hidden pt-[4.75rem] sm:-mt-[5.5rem] sm:pt-[5.5rem]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <HeroBackgroundRotator
            slides={homeImages.heroSlides}
            alt="Premium IPTV streaming experience"
          />
        </div>
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-[#05070d]" />
        <div className="stadium-bg absolute inset-0" />
        <div className="hero-aurora hero-aurora-one" aria-hidden="true" />
        <div className="hero-aurora hero-aurora-two" aria-hidden="true" />
        <div className="hero-aurora hero-aurora-three" aria-hidden="true" />
        <div className="hero-light-beam hero-light-beam-left" aria-hidden="true" />
        <div className="hero-light-beam hero-light-beam-right" aria-hidden="true" />
        <div className="hero-scanlines opacity-20" aria-hidden="true" />
      </div>

      <Container className="relative z-10 flex flex-col justify-center pb-12 pt-8 sm:pb-16 sm:pt-16 lg:pt-24">
        <FadeUp className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 lg:items-center">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-champagne/30 bg-black/40 px-5 py-2 text-champagne backdrop-blur-2xl uppercase tracking-wider text-xs shadow-lg">
                Premium IPTV Service
              </Badge>
              <span className="inline-flex items-center gap-2 rounded-full border border-live/30 bg-live/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xl shadow-lg">
                <span className="h-2 w-2 rounded-full bg-live live-pulse" aria-hidden="true" />
                Live Sports & Events
              </span>
            </div>

            <h1 className="hero-title-modern mt-8 max-w-4xl text-balance text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="block text-white drop-shadow-2xl">Premium</span>
              <span className="hero-title-gold block mt-2">Flash 4K IPTV</span>
              <span className="block mt-2 text-4xl font-extrabold text-platinum/90 sm:text-5xl lg:text-6xl">
                Elevated.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-platinum/80 sm:text-xl sm:leading-loose">
              {brand.description}
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button
                href="/pricing#plans"
                size="lg"
                className="min-h-14 px-8 text-lg font-semibold shadow-[0_0_40px_rgba(216,180,106,0.3)] transition-shadow hover:shadow-[0_0_60px_rgba(216,180,106,0.5)]"
              >
                View Plans
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <Button
                href={whatsappUrl(contact.trialWhatsAppMessage)}
                variant="secondary"
                size="lg"
                className="min-h-14 border-white/20 bg-white/10 px-8 text-lg font-semibold backdrop-blur-xl transition-all hover:bg-white/20"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                Start Free Trial
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <div className="-space-x-2 flex mr-2">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-ink"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-ink"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-ink"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt=""
                />
              </div>
              <div className="text-sm font-medium text-platinum/70">
                <div className="mb-0.5 flex text-champagne">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
                Trusted by 10,000+ users
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-platinum/50">
                Works on
              </span>
              {devices.map((device) => (
                <span
                  key={device}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-platinum/80 backdrop-blur-sm"
                >
                  {device === "Fire Stick" ? (
                    <MonitorSmartphone className="h-3 w-3 text-live" aria-hidden="true" />
                  ) : (
                    <MonitorSmartphone className="h-3 w-3 text-electric" aria-hidden="true" />
                  )}
                  {device}
                </span>
              ))}
            </div>
          </div>

          <aside
            className="glass-premium relative w-full overflow-hidden rounded-2xl p-6 shadow-[0_30px_90px_rgba(0,0,0,0.5)] lg:self-center"
            aria-label="Service stats"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 via-transparent to-electric/5 opacity-50" />

            <div className="relative z-10">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="text-xs font-bold uppercase tracking-widest text-champagne">
                  Why Flash 4K
                </p>
                <span className="flex items-center gap-1.5 text-xs text-field">
                  <span className="h-1.5 w-1.5 rounded-full bg-field live-pulse" />
                  Trusted Service
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/5 bg-white/5 p-3.5 transition-colors hover:bg-white/10"
                  >
                    <stat.icon className="mb-2 h-4 w-4 text-champagne opacity-80" aria-hidden="true" />
                    <p className="text-xl font-black text-white">{stat.value}</p>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-platinum/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-platinum/50">
                  Premium Benefits
                </p>
                <div className="space-y-2">
                  {[
                    "4K / FHD / HD Quality",
                    "Anti-Freeze Servers",
                    "EPG TV Guide",
                    "7-Day Guarantee"
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-sm text-platinum/80">
                      <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-field" aria-hidden="true" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </FadeUp>
      </Container>
    </section>
  );
}
