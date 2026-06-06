import { popularLineup, visualDisclaimers } from "@/lib/data";
import { ChannelLogoPill } from "@/components/ui/ChannelLogoPill";
import { Container } from "@/components/ui/Container";

export function PopularLineupCarousel() {
  return (
    <section className="border-b border-white/10 bg-ink/72 py-8" aria-labelledby="popular-lineup-title">
      <Container>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">Popular lineup</p>
            <h2 id="popular-lineup-title" className="mt-2 text-2xl font-semibold text-white">
              Sports, movies & premium channel names users often look for
            </h2>
          </div>
          <p className="max-w-xl text-xs leading-6 text-platinum/45">{visualDisclaimers.popularLineup}</p>
        </div>
        <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.025] p-3" aria-label="Popular entertainment categories and channel-name references">
          <div className="flex w-max gap-3 marquee">
            {[...popularLineup, ...popularLineup].map((item, index) => (
              <ChannelLogoPill key={`${item.name}-${index}`} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
