import { ArrowRight } from "lucide-react";
import { assets, heroStats } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { StreamingMockup } from "@/components/ui/StreamingMockup";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="stadium-bg relative overflow-hidden pb-16 pt-14 sm:pt-20 lg:pb-24 lg:pt-24">
      <div className="absolute inset-0 -z-10">
        <ImageWithFallback
          src={assets.heroStadium}
          alt="Generic premium stadium lights background"
          className="absolute inset-0 h-full w-full opacity-70"
          imgClassName="object-cover object-center"
          fallbackClassName="hidden"
          sizes="100vw"
          priority
        >
          <span />
        </ImageWithFallback>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/92 via-ink/66 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/92" />
        <div className="absolute left-0 top-10 h-96 w-96 rounded-full bg-field/20 blur-[120px]" />
        <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-electric/20 blur-[130px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
      </div>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr]">
          <FadeUp>
            <Badge>World Cup 2026 ready streaming</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Flash 4K IPTV - Premium Live TV, Sports & <span className="gold-text">World Cup Streaming</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-platinum/74 sm:text-xl">
              Get match-day ready with premium IPTV access for live football, international sports, movies, series,
              and 26,000+ channels across every device.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={whatsappUrl()} size="lg">
                Get Started on WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button href="/pricing#plans" variant="secondary" size="lg">
                View Packages
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroStats.map((item) => (
                <div key={item.label} className="flex items-center gap-3 text-sm text-platinum/70">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-champagne shadow-glow">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item.label}
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp className="relative mx-auto w-full max-w-[520px] lg:ml-auto" style={{ transitionDelay: "120ms" }}>
            <ImageWithFallback
              src={assets.heroDashboard}
              alt="Generic Flash 4K IPTV streaming dashboard mockup"
              className="aspect-[0.92] w-full rounded-[1.6rem]"
              imgClassName="object-contain"
              fallbackClassName="h-full w-full"
              sizes="(max-width: 1024px) 92vw, 520px"
              priority
            >
              <StreamingMockup />
            </ImageWithFallback>
            <div className="absolute -left-3 top-10 hidden rounded-full border border-live/30 bg-live/15 px-4 py-2 text-xs font-bold text-live backdrop-blur-xl sm:block">
              LIVE
            </div>
            <div className="absolute -right-2 bottom-16 hidden rounded-full border border-champagne/30 bg-champagne/15 px-4 py-2 text-xs font-bold text-champagne backdrop-blur-xl sm:block">
              26,000+ Channels
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
