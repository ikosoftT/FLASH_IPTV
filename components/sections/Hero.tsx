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
    <section className="relative isolate -mt-[4.75rem] overflow-hidden pt-[4.75rem] sm:-mt-[5.5rem] sm:pt-[5.5rem]">
      <div className="absolute inset-0 -z-10">
        <HeroBackgroundRotator
          slides={homeImages.heroSlides}
          alt="Family watching a movie on a large TV in a dark living room"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.22)_0%,rgba(5,7,13,0.58)_44%,rgba(5,7,13,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(5,7,13,0.92)_0%,rgba(5,7,13,0.52)_46%,rgba(5,7,13,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_22%_24%,rgba(216,180,106,0.22),transparent_30rem),radial-gradient(ellipse_at_82%_18%,rgba(72,167,255,0.2),transparent_32rem),radial-gradient(ellipse_at_58%_78%,rgba(255,54,94,0.12),transparent_28rem)]" />
        <div className="hero-scanlines" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink via-ink/82 to-transparent" />
      </div>

      <Container className="flex min-h-[92svh] flex-col justify-center pb-7 pt-10 sm:min-h-[90svh] sm:pb-9 sm:pt-16 lg:pt-20">
        <FadeUp className="grid gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(22rem,0.54fr)] lg:items-end">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border-champagne/24 bg-ink/38 px-4 py-1.5 text-champagne shadow-[0_18px_50px_rgba(216,180,106,0.12)] backdrop-blur-2xl">
                Premium 4K IPTV
              </Badge>
              <span className="inline-flex items-center gap-2 rounded-full border border-live/28 bg-live/12 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-2xl">
                <span className="h-2 w-2 rounded-full bg-live live-pulse" aria-hidden="true" />
                Live now
              </span>
            </div>

            <h1 className="hero-title-modern mt-6 max-w-5xl text-balance text-5xl font-black leading-[0.9] tracking-normal text-white min-[380px]:text-6xl sm:text-7xl md:text-8xl lg:text-[6.65rem]">
              <span className="hero-title-gold block">Flash 4K IPTV</span>
              <span className="hero-title-white mt-3 block sm:mt-4">Live sport, cinema</span>
              <span className="hero-title-spectrum block">and series in 4K.</span>
            </h1>

            <p className="hero-copy mt-5 max-w-2xl text-[0.98rem] leading-7 text-platinum/84 sm:mt-6 sm:text-xl sm:leading-8">
              Premium IPTV access for match nights, movie nights, and every screen at home, activated fast through WhatsApp.
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button href="#pricing-preview" size="lg" className="min-h-12 px-7">
                View Plans
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={whatsappUrl(contact.trialWhatsAppMessage)}
                variant="secondary"
                size="lg"
                className="min-h-12 px-7"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Free Trial
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5" aria-label="Service highlights">
              {heroPills.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-3.5 py-2 text-xs font-semibold text-platinum/82 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
                >
                  <pill.icon className="h-3.5 w-3.5 text-champagne" aria-hidden="true" />
                  {pill.label}
                </span>
              ))}
            </div>
          </div>

          <aside className="hero-command-panel w-full max-w-md justify-self-start rounded-[1.6rem] border border-white/14 bg-ink/44 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.36)] backdrop-blur-2xl lg:justify-self-end" aria-label="Flash 4K IPTV quick status">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-platinum/48">Now ready</p>
                <p className="mt-1 text-lg font-semibold text-white">Match-night access</p>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-field/14 text-field">
                <Play className="h-5 w-5 fill-current" aria-hidden="true" />
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.065] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <stat.icon className="h-4 w-4 text-champagne" aria-hidden="true" />
                    <BadgeCheck className="h-4 w-4 text-field" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-2xl font-black text-white">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold text-platinum/56">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2" aria-label="Supported devices">
              {devices.map((device) => (
                <span key={device} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-platinum/72">
                  {device === "Fire Stick" ? (
                    <Flame className="h-3.5 w-3.5 text-live" aria-hidden="true" />
                  ) : (
                    <MonitorSmartphone className="h-3.5 w-3.5 text-electric" aria-hidden="true" />
                  )}
                  {device}
                </span>
              ))}
            </div>
          </aside>
        </FadeUp>

        <FadeUp className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            "WhatsApp activation",
            "All major devices",
            "7-day money-back guarantee"
          ].map((item) => (
            <div key={item} className="min-h-14 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-semibold text-platinum/76 backdrop-blur-xl">
              {item}
            </div>
          ))}
        </FadeUp>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-4" aria-hidden="true">
        <span className="h-9 w-px bg-gradient-to-b from-champagne/0 via-champagne/70 to-champagne/0" />
      </div>
    </section>
  );
}
