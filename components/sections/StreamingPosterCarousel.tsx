import Image from "next/image";
import { streamingPosterCards } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";

export function StreamingPosterCarousel() {
  const cards = [...streamingPosterCards, ...streamingPosterCards];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink py-12" aria-labelledby="streaming-poster-title">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(255,54,94,0.15),transparent_22rem),radial-gradient(circle_at_78%_22%,rgba(72,167,255,0.12),transparent_24rem)]" />
      <Container>
        <FadeUp className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">Movies, series & live TV</p>
            <h2 id="streaming-poster-title" className="mt-2 max-w-2xl text-2xl font-semibold text-white sm:text-3xl">
              Browse a cinematic wall of movies, sports, series & family picks
            </h2>
          </div>
        </FadeUp>
      </Container>

      <div className="relative overflow-hidden" aria-label="Streaming content category carousel">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink to-transparent sm:w-36" />
        <div className="flex w-max gap-4 px-5 marquee-slow">
          {cards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className="poster-card group relative aspect-[2/3] w-36 shrink-0 overflow-hidden rounded-[1.1rem] border border-white/12 bg-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.38)] transition duration-300 hover:-translate-y-1 hover:border-champagne/45 sm:w-44"
            >
              <Image
                src={card.image.find((src) => src.startsWith("https://")) ?? card.image[0]}
                alt={`${card.title} movie poster style artwork`}
                fill
                sizes="(max-width: 640px) 144px, 176px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.22),transparent_8rem),linear-gradient(180deg,transparent_18%,rgba(5,7,13,0.18)_44%,rgba(5,7,13,0.9)_100%)]" />
              <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                <span className="rounded-full border border-white/18 bg-ink/40 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                  {card.category}
                </span>
                <span className="grid h-5 w-5 place-items-center rounded-full border border-white/30 text-[0.55rem] text-white/80" aria-hidden="true">
                  ▶
                </span>
              </div>
              <div className="absolute inset-x-4 bottom-4">
                <h3 className="text-lg font-black leading-tight text-white drop-shadow">{card.title}</h3>
                <p className="mt-1 text-xs font-medium text-platinum/64">Flash 4K IPTV</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
