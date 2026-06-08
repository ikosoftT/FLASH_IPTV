import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { PopularLineupCarousel } from "@/components/sections/PopularLineupCarousel";
import { StreamingPosterCarousel } from "@/components/sections/StreamingPosterCarousel";
import { TrustBar } from "@/components/sections/TrustBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <StreamingPosterCarousel />
      <PopularLineupCarousel />
      <PricingPreview />
      <FinalCTA />
    </>
  );
}
