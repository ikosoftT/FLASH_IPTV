import { assets, sportsCards } from "@/lib/data";
import { LiveMatchCard } from "@/components/ui/LiveMatchCard";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp, Stagger, staggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function SportsEventSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <ImageWithFallback
          src={assets.worldCupSportsBg}
          alt="Generic sports stadium background"
          className="h-full w-full opacity-20"
          fallbackClassName="hidden"
          sizes="100vw"
        >
          <span />
        </ImageWithFallback>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-ink" />
      </div>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeUp>
            <SectionHeading
              align="left"
              eyebrow="Match day"
              title="Built for Match Day, Big Events & World Cup 2026 Demand"
              description="Flash 4K IPTV brings live football, international sports, movies, series, news, and VOD together with fast WhatsApp setup before the action starts."
            />
            <div className="mt-8">
              <LiveMatchCard />
            </div>
          </FadeUp>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {sportsCards.map((card) => (
              <Card key={card.title} variants={staggerItem}>
                <card.icon className="h-6 w-6 text-champagne" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-platinum/62">{card.description}</p>
              </Card>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
