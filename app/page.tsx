import { BlogPreview } from "@/components/sections/BlogPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { PopularLineupCarousel } from "@/components/sections/PopularLineupCarousel";
import { StreamingPosterCarousel } from "@/components/sections/StreamingPosterCarousel";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { DeviceCompatibility } from "@/components/sections/DeviceCompatibility";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { FAQ } from "@/components/sections/FAQ";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChoose />
      <StreamingPosterCarousel />
      <FeaturesGrid />
      <PopularLineupCarousel />
      <DeviceCompatibility />
      <Testimonials />
      <PricingPreview />
      <FAQ />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
