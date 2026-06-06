import type { Metadata } from "next";
import { CheckCircle2, MessageCircle, MinusCircle } from "lucide-react";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PricingCalculator } from "@/components/sections/PricingCalculator";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { comparison, pricingConfig } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createMetadata({
  title: "Pricing - Flash 4K IPTV",
  description: "Choose Flash 4K IPTV pricing for 1, 2, or 3 devices with 3-month, 6-month, and best-value 12-month WhatsApp activation packages.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <section className="pb-12 pt-16 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>{pricingConfig.promoLabel}</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-6xl">
              Choose your Flash 4K IPTV package
            </h1>
            <p className="mt-5 text-lg leading-8 text-platinum/70">
              Select 1, 2, or 3 devices, then activate your 3-month, 6-month, or best-value 12-month subscription directly through WhatsApp.
            </p>
          </div>
          <div className="mt-12">
            <PricingCalculator />
          </div>
        </Container>
      </section>

      <section className="section-pad bg-white/[0.025]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Compare</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">Basic IPTV vs Flash 4K IPTV</h2>
          </div>
          <Card className="mt-10 overflow-hidden p-0">
            {comparison.map((row) => (
              <div key={row.feature} className="grid gap-3 border-b border-white/10 px-5 py-5 text-sm last:border-b-0 sm:grid-cols-3">
                <span className="font-medium text-white">{row.feature}</span>
                {[row.basic, row.flash].map((included, index) => (
                  <span key={`${row.feature}-${index}`} className="flex items-center gap-2 text-platinum/62 sm:justify-center">
                    {included ? (
                      <CheckCircle2 className="h-5 w-5 text-champagne" aria-hidden="true" />
                    ) : (
                      <MinusCircle className="h-5 w-5 text-platinum/28" aria-hidden="true" />
                    )}
                    <span>{["Basic IPTV", "Flash 4K IPTV"][index]}</span>
                  </span>
                ))}
              </div>
            ))}
          </Card>
        </Container>
      </section>
      <section className="section-pad">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>After payment</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">What happens after payment?</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {["Choose your plan", "Message us on WhatsApp", "Complete payment instructions", "Receive activation details", "Start watching on your device"].map((step, index) => (
              <Card key={step}>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-field/15 text-sm font-bold text-field">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-base font-semibold text-white">{step}</h3>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Button href={whatsappUrl()} size="lg">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Start My Subscription
            </Button>
          </div>
        </Container>
      </section>
      <FAQ title="Pricing questions, answered" />
      <FinalCTA />
    </>
  );
}
