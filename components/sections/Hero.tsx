import {
  ArrowRight,
  BadgeCheck,
  Clapperboard,
  Flame,
  MessageCircle,
  MonitorSmartphone,
  Play,
  Radio,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap
} from "lucide-react";
import { contact, homeImages } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { HeroBackgroundRotator } from "@/components/ui/HeroBackgroundRotator";
import { whatsappUrl } from "@/lib/whatsapp";

const heroStats = [
  { label: "Live Channels", value: "26K+", icon: Radio },
  { label: "VOD Library", value: "100K+", icon: Clapperboard },
  { label: "Setup Time", value: "2 min", icon: Zap },
  { label: "Support", value: "24/7", icon: MessageCircle }
];

const heroPills = [
  { label: "World Cup ready", icon: Trophy },
  { label: "4K / FHD / HD", icon: Sparkles },
  { label: "Secure activation", icon: ShieldCheck }
];

const devices = ["Smart TV", "Fire Stick", "Android TV", "iPhone", "MAG", "PC"];

export function Hero() {
  return (
    <section className="relative isolate -mt-[4.75rem] overflow-hidden pt-[4.75rem] sm:-mt-[5.5rem] sm:pt-[5.5rem] min-h-[100svh] flex flex-col justify-center">
      <div className="absolute inset-0 -z-10">
        <HeroBackgroundRotator
          slides={homeImages.heroSlides}
          alt="Premium IPTV streaming experience"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#05070d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_22%_24%,rgba(216,180,106,0.15),transparent_35rem),radial-gradient(ellipse_at_82%_18%,rgba(72,167,255,0.12),transparent_40rem),radial-gradient(ellipse_at_58%_78%,rgba(255,54,94,0.08),transparent_35rem)]" />
        <div className="hero-scanlines opacity-20" />
      </div>

      <Container className="relative z-10 flex flex-col justify-center pb-12 pt-16 sm:pb-16 sm:pt-24 lg:pt-32">
        <FadeUp className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-center">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="border-champagne/30 bg-black/40 px-5 py-2 text-champagne backdrop-blur-2xl uppercase tracking-wider text-xs shadow-lg">
                Premium 4K IPTV Service
              </Badge>
              <span className="inline-flex items-center gap-2 rounded-full border border-live/30 bg-live/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xl shadow-lg">
                <span className="h-2 w-2 rounded-full bg-live live-pulse" aria-hidden="true" />
                Live Sports & Events
              </span>
            </div>

            <h1 className="hero-title-modern mt-8 max-w-4xl text-balance text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
              <span className="block text-white drop-shadow-2xl">The Ultimate</span>
              <span className="hero-title-gold block mt-2">Streaming Experience</span>
              <span className="block text-platinum/90 mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold">For Serious Viewers.</span>
            </h1>

            <p className="hero-copy mt-8 max-w-2xl text-lg leading-relaxed text-platinum/80 sm:text-xl sm:leading-loose">
              Elevate your home entertainment with ultra-stable 4K streaming. Get instant access to every live match, blockbuster movie, and premium channel—setup takes less than 2 minutes.
            </p>

            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button href="#pricing-preview" size="lg" className="min-h-14 px-8 text-lg font-semibold shadow-[0_0_40px_rgba(216,180,106,0.3)] hover:shadow-[0_0_60px_rgba(216,180,106,0.5)] transition-shadow">
                View Premium Plans
                <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
              </Button>
              <Button
                href={whatsappUrl(contact.trialWhatsAppMessage)}
                variant="secondary"
                size="lg"
                className="min-h-14 px-8 text-lg font-semibold bg-white/10 hover:bg-white/20 border-white/20 backdrop-blur-xl transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-5 w-5 mr-2" aria-hidden="true" />
                Start Free Trial
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 items-center" aria-label="Service highlights">
              <div className="flex -space-x-2 mr-2">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-ink" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-ink" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Customer" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-ink" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Customer" />
              </div>
              <div className="text-sm font-medium text-platinum/70">
                <div className="flex text-champagne mb-0.5">
                  <span className="text-sm tracking-widest">★★★★★</span>
                </div>
                Trusted by 10,000+ users
              </div>
            </div>
          </div>

          <aside className="hero-command-panel w-full justify-self-center rounded-3xl border border-white/10 bg-black/40 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.5)] backdrop-blur-3xl lg:justify-self-end relative overflow-hidden" aria-label="Service status">
            <div className="absolute inset-0 bg-gradient-to-br from-champagne/10 to-transparent opacity-50" />
            
            <div className="relative z-10 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-champagne">System Status</p>
                <p className="mt-1.5 text-lg font-semibold text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-field live-pulse" />
                  All Systems Operational
                </p>
              </div>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-field/20 text-field shadow-[0_0_20px_rgba(22,163,74,0.3)]">
                <ShieldCheck className="h-6 w-6 fill-current opacity-80" aria-hidden="true" />
              </span>
            </div>

            <div className="relative z-10 mt-5 grid grid-cols-2 gap-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/5 p-4 hover:bg-white/10 transition-colors">
                  <stat.icon className="h-5 w-5 text-champagne mb-3 opacity-80" aria-hidden="true" />
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-platinum/50">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-5 pt-5 border-t border-white/10">
              <p className="text-xs font-semibold uppercase tracking-wider text-platinum/50 mb-3">Compatible With</p>
              <div className="flex flex-wrap gap-2" aria-label="Supported devices">
                {devices.map((device) => (
                  <span key={device} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-platinum/80">
                    {device === "Fire Stick" ? (
                      <Flame className="h-3 w-3 text-live" aria-hidden="true" />
                    ) : (
                      <MonitorSmartphone className="h-3 w-3 text-electric" aria-hidden="true" />
                    )}
                    {device}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </FadeUp>
      </Container>
    </section>
  );
}
