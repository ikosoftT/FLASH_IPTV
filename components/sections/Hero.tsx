import { ArrowRight } from "lucide-react";
import { assets, heroStats } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { HeroShowcase } from "@/components/ui/HeroShowcase";
import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="stadium-bg relative min-h-[calc(100svh-5rem)] overflow-hidden pb-16 pt-14 sm:pt-20 lg:flex lg:items-center lg:pb-20 lg:pt-20">
      <div className="absolute inset-0 -z-10">
        <ImageWithFallback
          src={assets.heroStadium}
          alt="Generic premium stadium lights background"
          className="absolute inset-0 h-full w-full opacity-58"
          imgClassName="object-cover object-center"
          fallbackClassName="hidden"
          sizes="100vw"
          priority
        >
          <span />
        </ImageWithFallback>
        <div className="hero-animated-bg absolute inset-0" aria-hidden="true">
          <span className="hero-aurora hero-aurora-one" />
          <span className="hero-aurora hero-aurora-two" />
          <span className="hero-aurora hero-aurora-three" />
          <span className="hero-light-beam hero-light-beam-left" />
          <span className="hero-light-beam hero-light-beam-right" />
          <span className="hero-scanlines" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.96)_0%,rgba(5,7,13,0.78)_44%,rgba(5,7,13,0.34)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/68 via-transparent to-ink" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
      </div>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] xl:gap-14">
          <FadeUp className="relative z-10">
            <Badge>World Cup 2026 ready streaming</Badge>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl">
              Flash 4K IPTV for <span className="gold-text">premium live sports</span>, movies & 4K entertainment
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-platinum/74 sm:text-xl">
              A modern IPTV experience for live football, international sports, movies, series, and 26,000+ channels
              with fast WhatsApp activation across every major device.
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

          <FadeUp className="relative z-10" style={{ transitionDelay: "120ms" }}>
            <HeroShowcase />
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
