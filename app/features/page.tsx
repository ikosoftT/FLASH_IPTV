import type { Metadata } from "next";
import { CheckCircle2, MinusCircle } from "lucide-react";
import { FAQ } from "@/components/sections/FAQ";
import { FeaturesGrid } from "@/components/sections/FeaturesGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { comparison } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Features - Flash 4K IPTV",
  description: "Flash 4K IPTV features include World Cup 2026 ready streaming, 26,000+ channels, 100,000+ VOD, EPG guide, WhatsApp activation, and all-device support.",
  path: "/features"
});

export default function FeaturesPage() {
  return (
    <>
      <section className="pb-8 pt-16 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Features</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-6xl">
              Sports-focused IPTV features for live TV, VOD, and 4K entertainment
            </h1>
            <p className="mt-5 text-lg leading-8 text-platinum/70">
              Flash 4K IPTV combines World Cup 2026 ready sports streaming, huge VOD access, EPG guide support, and fast WhatsApp activation.
            </p>
          </div>
        </Container>
      </section>
      <FeaturesGrid />
      <section className="section-pad">
        <Container>
          <Card className="overflow-hidden p-0">
            <div className="grid border-b border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-semibold text-platinum/62 sm:grid-cols-3">
              <span>Capability</span>
              <span className="hidden text-center sm:block">Basic IPTV Experience</span>
              <span className="hidden text-center sm:block">Flash 4K IPTV Experience</span>
            </div>
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
                    <span className="sm:hidden">{["Basic IPTV", "Flash 4K IPTV"][index]}</span>
                  </span>
                ))}
              </div>
            ))}
          </Card>
        </Container>
      </section>
      <FAQ title="Feature questions, answered" />
      <FinalCTA />
    </>
  );
}
