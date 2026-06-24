import { whyChoose } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp, Stagger, staggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChoose() {
  return (
    <section className="section-pad relative overflow-hidden bg-white/[0.015]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(216,180,106,0.04),transparent_50%)]" />
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Why choose us"
            title="A premium service experience, not a reseller template"
            description="Flash 4K IPTV focuses on live sports, fast WhatsApp activation, clear package choices, and guided setup across every major device."
          />
        </FadeUp>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <Card
              key={item.title}
              variants={staggerItem}
              className="group relative border-champagne/10 transition-all duration-500 hover:-translate-y-1 hover:border-champagne/25 hover:shadow-[0_24px_80px_rgba(216,180,106,0.06)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-gradient-to-b from-champagne/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <item.icon className="h-7 w-7 text-champagne transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(216,180,106,0.3)]" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-champagne-light">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-platinum/62">{item.description}</p>
              </div>
            </Card>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
