import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappUrl } from "@/lib/whatsapp";

export function PricingPreview() {
  return (
    <section id="pricing-preview" className="section-pad bg-white/[0.025]">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Packages"
            title="World Cup-ready IPTV packages with WhatsApp activation"
            description="Select 1, 2, or 3 devices and choose from 3-month, 6-month, or best-value 12-month access. No unsupported 1-month plan."
          />
        </FadeUp>
        <div className="mt-10">
          <PricingCalculator preview />
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={whatsappUrl()} variant="secondary">
            Ask Which Package Fits Me
          </Button>
        </div>
      </Container>
    </section>
  );
}
