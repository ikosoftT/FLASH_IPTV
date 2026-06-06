import { ArrowRight } from "lucide-react";
import { channelCategories } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp, Stagger, staggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

export function ChannelsPreview() {
  return (
    <section className="section-pad">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Featured categories"
            title="Live sports, football, movies, series, and 26,000+ channels"
            description="A sports-first IPTV lineup with live TV, premium cinema, kids, news, international content, 24/7 channels, and 100,000+ VOD titles."
          />
        </FadeUp>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channelCategories.slice(0, 8).map((category) => (
            <Card key={category.title} className="overflow-hidden p-0" variants={staggerItem}>
              <ImageWithFallback
                src={category.image}
                alt={`${category.title} IPTV category visual`}
                className="h-32"
                fallbackClassName={`bg-gradient-to-br ${category.gradient}`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              >
                <div className="flex h-full items-end p-4">
                  <span className="rounded-full bg-ink/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {category.type}
                  </span>
                </div>
              </ImageWithFallback>
              <div className="p-5">
                <category.icon className="h-5 w-5 text-champagne" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">{category.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-platinum/56">{category.description}</p>
                <p className="mt-2 text-sm text-platinum/58">{category.count} channels / titles</p>
              </div>
            </Card>
          ))}
        </Stagger>
        <div className="mt-10 flex justify-center">
          <Button href="/channels" variant="secondary">
            Explore 26,000+ Channels
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
