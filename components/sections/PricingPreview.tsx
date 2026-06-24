import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappUrl } from "@/lib/whatsapp";

export function PricingPreview() {
  return (
    <section id="pricing-preview" className="section-pad bg-[#05070d] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,180,106,0.05),transparent_50rem)]" />
      
      <Container className="relative z-10">
        <FadeUp>
          <SectionHeading
            eyebrow="Premium Access Plans"
            title="Choose Your Elite Streaming Experience"
            description="Select your desired number of connections and billing cycle. All plans include 4K quality, fast WhatsApp setup, and dedicated VIP support."
          />
        </FadeUp>
        <div className="mt-14">
          <PricingCalculator preview />
        </div>
        <div className="mt-12 flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-platinum/60 text-sm max-w-md">
            Not sure which package fits your setup? We provide free technical consultation to ensure you get the best streaming experience.
          </p>
          <Button href={whatsappUrl()} variant="secondary" className="px-8 min-h-12 border-white/20 bg-white/5 hover:bg-white/10 text-white">
            Get Expert Setup Advice
          </Button>
        </div>
      </Container>
    </section>
  );
}
