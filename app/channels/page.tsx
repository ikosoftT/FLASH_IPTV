import type { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ChannelsExplorer } from "@/components/sections/ChannelsExplorer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createMetadata({
  title: "Channels - Flash 4K IPTV",
  description: "Explore Flash 4K IPTV categories for live sports, football, movies, series, news, kids, international channels, VOD, EPG, and 4K TV.",
  path: "/channels"
});

export default function ChannelsPage() {
  return (
    <>
      <section className="pb-12 pt-16 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Channels</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-6xl">
              26,000+ live channels and 100,000+ VOD titles
            </h1>
            <p className="mt-5 text-lg leading-8 text-platinum/70">
              Search live sports, football, movies, series, news, kids, international, 24/7 channels, premium cinema,
              documentaries, and entertainment categories with HD / FHD / 4K quality where available.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={whatsappUrl()} variant="secondary">Ask About Channel Availability</Button>
            </div>
          </div>
          <div className="mt-12">
            <ChannelsExplorer />
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
