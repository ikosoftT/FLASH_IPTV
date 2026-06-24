import { features } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp, Stagger, staggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function FeaturesGrid({ compact = false }: { compact?: boolean }) {
  const shown = compact ? features.slice(0, 6) : features;

  return (
    <section className="section-pad relative overflow-hidden bg-white/[0.025]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(216,180,106,0.06),transparent_50%),radial-gradient(ellipse_at_80%_80%,rgba(72,167,255,0.04),transparent_50%)]" />
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Premium Features"
            title="Commercial IPTV features built for sports and entertainment"
            description="World Cup 2026 ready streaming, fast WhatsApp activation, EPG guide support, huge VOD access, and setup help across every major device."
          />
        </FadeUp>
        <Stagger className={cn("mt-12 grid gap-5", compact ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6" : "md:grid-cols-2 lg:grid-cols-3")}>
          {shown.map((feature) => (
            <Card key={feature.title} variants={staggerItem} className="group transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(216,180,106,0.08)]">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-champagne/25 bg-gradient-to-br from-champagne/20 to-champagne/5 text-champagne shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 group-hover:border-champagne/40 group-hover:shadow-[0_0_30px_rgba(216,180,106,0.15)]">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-champagne-light">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-platinum/62">{feature.description}</p>
            </Card>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
