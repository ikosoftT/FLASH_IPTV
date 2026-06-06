import { features } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp, Stagger, staggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturesGrid({ compact = false }: { compact?: boolean }) {
  const shown = compact ? features.slice(0, 6) : features;

  return (
    <section className="section-pad bg-white/[0.025]">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Premium features"
            title="Commercial IPTV features built for sports and entertainment"
            description="World Cup 2026 ready streaming, fast WhatsApp activation, EPG guide support, huge VOD access, and setup help across every major device."
          />
        </FadeUp>
        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((feature) => (
            <Card key={feature.title} variants={staggerItem}>
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-champagne/25 bg-champagne/10 text-champagne">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-platinum/62">{feature.description}</p>
            </Card>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
