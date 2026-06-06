import { faqs } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FAQ({ items = faqs, title = "Questions before you start?" }: { items?: typeof faqs; title?: string }) {
  return (
    <section id="faq" className="section-pad">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="FAQ"
            title={title}
            description="Clear answers to the most common setup, device, quality, and support questions."
          />
        </FadeUp>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10 rounded-[1.5rem] border border-white/10 bg-white/[0.045]">
          {items.map((item) => (
            <details key={item.question} className="group p-6">
              <summary className="cursor-pointer list-none text-base font-semibold text-white marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-champagne transition group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-platinum/62">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
