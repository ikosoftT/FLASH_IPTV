import { whyChoose } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp, Stagger, staggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChoose() {
  return (
    <section className="section-pad">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Why choose us"
            title="A premium service experience, not a reseller template"
            description="Flash 4K IPTV focuses on live sports, fast WhatsApp activation, clear package choices, and guided setup across every major device."
          />
        </FadeUp>
        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <Card key={item.title} variants={staggerItem}>
              <item.icon className="h-7 w-7 text-champagne" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-platinum/62">{item.description}</p>
            </Card>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
