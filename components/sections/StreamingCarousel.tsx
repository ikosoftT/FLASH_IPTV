import { carouselCategories, vodTiles } from "@/lib/data";
import { Container } from "@/components/ui/Container";

export function StreamingCarousel() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-8" aria-label="Streaming categories">
      <Container>
        <div className="overflow-hidden">
          <div className="flex w-max gap-3 marquee">
            {[...carouselCategories, ...carouselCategories].map((item, index) => (
              <div key={`${item}-${index}`} className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-platinum/78">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 overflow-hidden">
          <div className="flex w-max gap-4 marquee-slow">
            {[...vodTiles, ...vodTiles].map((item, index) => (
              <div key={`${item}-${index}`} className="h-24 w-44 shrink-0 rounded-2xl border border-white/10 bg-gradient-to-br from-field/35 via-electric/20 to-champagne/25 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/55">VOD</p>
                <p className="mt-5 text-sm font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
