import { popularLineup } from "@/lib/data";
import { ChannelLogoPill } from "@/components/ui/ChannelLogoPill";
import { Container } from "@/components/ui/Container";

export function PopularLineupCarousel() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink/72 py-10" aria-labelledby="popular-lineup-title">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_30%,rgba(216,180,106,0.12),transparent_24rem),radial-gradient(circle_at_86%_15%,rgba(72,167,255,0.12),transparent_26rem)]" />
      <Container>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">Channel categories</p>
            <h2 id="popular-lineup-title" className="mt-2 text-2xl font-semibold text-white">
              A premium strip for sports, cinema, series, news & family viewing
            </h2>
          </div>
        </div>
        <div
          className="logo-carousel-shell relative overflow-hidden rounded-[1.65rem] border border-white/12 bg-white/[0.035] p-4 shadow-[0_26px_90px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
          aria-label="Popular entertainment categories and channel-name references"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink via-ink/78 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink via-ink/78 to-transparent" />
          <div className="flex w-max gap-4 marquee">
            {[...popularLineup, ...popularLineup].map((item, index) => (
              <ChannelLogoPill key={`${item.name}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
