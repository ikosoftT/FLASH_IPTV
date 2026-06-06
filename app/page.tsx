import { BlogPreview } from "@/components/sections/BlogPreview";
import { ChannelsPreview } from "@/components/sections/ChannelsPreview";
import { DeviceCompatibility } from "@/components/sections/DeviceCompatibility";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { PopularLineupCarousel } from "@/components/sections/PopularLineupCarousel";
import { SetupSteps } from "@/components/sections/SetupSteps";
import { SportsEventSection } from "@/components/sections/SportsEventSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhyChoose } from "@/components/sections/WhyChoose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PopularLineupCarousel />
      <SportsEventSection />
      <ChannelsPreview />
      <DeviceCompatibility />
      <PricingPreview />
      <WhyChoose />
      <SetupSteps />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
