import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp, Stagger, staggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(216,180,106,0.04),transparent_50%)]" />
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Customer stories"
            title="Trusted by viewers who value clarity and support"
            description="Realistic service expectations, guided setup, and responsive help make premium streaming feel simple."
          />
        </FadeUp>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              variants={staggerItem}
              className="group relative transition-all duration-500 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-gradient-to-b from-champagne/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex gap-1 text-champagne" aria-label="Five star review">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current drop-shadow-[0_0_6px_rgba(216,180,106,0.3)]" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-8 text-platinum/78">
                  <span className="text-champagne/40 select-none" aria-hidden="true">&ldquo;</span>
                  {testimonial.quote}
                  <span className="text-champagne/40 select-none" aria-hidden="true">&rdquo;</span>
                </blockquote>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-platinum/50">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
