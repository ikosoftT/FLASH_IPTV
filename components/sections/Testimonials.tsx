import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp, Stagger, staggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="section-pad bg-white/[0.025]">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Customer stories"
            title="Trusted by viewers who value clarity and support"
            description="Realistic service expectations, guided setup, and responsive help make premium streaming feel simple."
          />
        </FadeUp>
        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} variants={staggerItem}>
              <div className="flex gap-1 text-champagne" aria-label="Five star review">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-5 text-base leading-8 text-platinum/78">&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <div className="mt-6">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-platinum/50">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
