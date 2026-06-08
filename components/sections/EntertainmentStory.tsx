import { homeImages } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const stories = [
  {
    title: "Movies & Series for Every Night",
    eyebrow: "VOD library",
    description:
      "Build every evening around a premium IPTV library with movies, series, kids, documentaries, family picks, and 4K-ready entertainment where available.",
    image: homeImages.moviesSeries,
    imageAlt: "Movie and series streaming library on a living room screen",
    fallback: "poster" as const,
    reverse: false,
    points: [
      "100,000+ VOD titles",
      "Movies and series library",
      "HD / FHD / 4K quality where available",
      "Family, action, drama, kids, documentaries, and more"
    ]
  },
  {
    title: "Live Sports & Match-Day Streaming",
    eyebrow: "Live events",
    description:
      "Get ready before kickoff with live sports categories, football-focused viewing, international events, and support when match nights matter most.",
    image: homeImages.liveSports,
    imageAlt: "Generic live sports streaming interface on a TV",
    fallback: "sports" as const,
    reverse: true,
    points: [
      "Live sports categories",
      "Football and international events",
      "Match-day ready setup",
      "Support before big games",
      "Built for stable streaming"
    ]
  },
  {
    title: "Watch on the Devices You Already Own",
    eyebrow: "Every screen",
    description:
      "Flash 4K IPTV is made for the screens already in your home, from the main living-room TV to mobile and desktop viewing.",
    image: homeImages.devicesLineup,
    imageAlt: "Device lineup for watching IPTV on TV, phone, tablet, and computer",
    fallback: "devices" as const,
    reverse: false,
    points: ["Smart TV", "Fire Stick", "Android TV", "iPhone / iPad", "MAG Box", "Windows / Mac", "PC and tablets"]
  }
];

function MediaFallback({ variant }: { variant: "poster" | "sports" | "devices" }) {
  if (variant === "devices") {
    return (
      <div className="flex h-full items-end justify-center gap-3 p-6">
        <div className="h-[48%] w-[42%] rounded-2xl border-4 border-platinum/22 bg-ink/78 shadow-glow" />
        <div className="h-[68%] w-[18%] rounded-[1.35rem] border-4 border-platinum/22 bg-ink/82 shadow-gold" />
        <div className="h-[36%] w-[28%] rounded-xl border-4 border-platinum/22 bg-ink/78 shadow-glow" />
      </div>
    );
  }

  if (variant === "sports") {
    return (
      <div className="flex h-full flex-col justify-end p-6">
        <div className="mb-auto inline-flex w-fit rounded-full border border-live/30 bg-live/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-live">
          Live
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl border border-white/14 bg-ink/58 p-4 backdrop-blur-xl">
          <span className="text-right text-sm font-bold text-white">Home</span>
          <span className="rounded-full bg-champagne px-3 py-1 text-xs font-black text-ink">20:45</span>
          <span className="text-sm font-bold text-white">Away</span>
        </div>
      </div>
    );
  }

  return (
    <div className="grid h-full grid-cols-3 gap-3 p-5">
      {["Cinema", "Series", "Kids", "Drama", "4K", "Family"].map((item) => (
        <div key={item} className="flex items-end rounded-xl border border-white/12 bg-ink/44 p-3 shadow-[0_14px_36px_rgba(0,0,0,0.28)]">
          <span className="text-xs font-bold text-white">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function EntertainmentStory() {
  return (
    <section className="section-pad relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#05070d_0%,#0a0f1a_46%,#05070d_100%)]" />
      <Container className="space-y-16 lg:space-y-24">
        {stories.map((story) => (
          <div
            key={story.title}
            className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${story.reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full border border-champagne/22 bg-champagne/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-champagne">
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" aria-hidden="true" />
                {story.eyebrow}
              </div>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                {story.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-platinum/70 sm:text-lg">{story.description}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {story.points.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm leading-6 text-platinum/74">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button href="#pricing-preview" variant="secondary">
                  View Plans
                </Button>
              </div>
            </FadeUp>

            <FadeUp>
              <ImageWithFallback
                src={story.image}
                alt={story.imageAlt}
                className="min-h-[18rem] rounded-[1.5rem] border border-white/12 shadow-[0_30px_90px_rgba(0,0,0,0.36)] sm:min-h-[24rem]"
                imgClassName="object-cover"
                fallbackVariant={story.fallback}
                sizes="(max-width: 1024px) 100vw, 50vw"
              >
                <MediaFallback variant={story.fallback} />
              </ImageWithFallback>
            </FadeUp>
          </div>
        ))}
      </Container>
    </section>
  );
}
