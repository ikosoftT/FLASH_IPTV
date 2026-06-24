import { faqs } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ({ items = faqs, title = "Questions before you start?" }: { items?: typeof faqs; title?: string }) {
  return (
    <section id="faq" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(72,167,255,0.04),transparent_50%)]" />
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="FAQ"
            title={title}
            description="Clear answers to the most common setup, device, quality, and support questions."
          />
        </FadeUp>
        <FadeUp className="mx-auto mt-10 max-w-3xl">
          <div className="divide-y divide-white/10 overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/[0.045] shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl">
            {items.map((item) => (
              <details key={item.question} className="group transition-colors duration-300 hover:bg-white/[0.02] [&[open]]:bg-white/[0.02]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-base font-semibold text-white marker:hidden transition-colors duration-300 group-hover:text-champagne-light [&[open]]:text-champagne-light">
                  {item.question}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-champagne/30 bg-champagne/10 text-sm text-champagne transition-all duration-300 group-hover:bg-champagne/20 group-open:rotate-45 group-open:border-champagne/50">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-6 pt-0 text-sm leading-7 text-platinum/62 transition-all duration-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
