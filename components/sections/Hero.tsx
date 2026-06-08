import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faDesktop,
  faFire,
  faMobileScreenButton,
  faSatelliteDish,
  faTabletScreenButton,
  faTv
} from "@fortawesome/free-solid-svg-icons";
import { contact, homeImages } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { HeroBackgroundRotator } from "@/components/ui/HeroBackgroundRotator";
import { whatsappUrl } from "@/lib/whatsapp";

const devices = ["Smart TV", "Fire Stick", "Android TV", "iPhone", "iPad", "MAG", "PC"];
const deviceIcons = [faTv, faFire, faBolt, faMobileScreenButton, faTabletScreenButton, faSatelliteDish, faDesktop];

export function Hero() {
  return (
    <section className="relative isolate -mt-[4.75rem] min-h-[100svh] overflow-hidden pt-[4.75rem] sm:-mt-[5.5rem] sm:pt-[5.5rem]">
      <div className="absolute inset-0 -z-10">
        <HeroBackgroundRotator
          slides={homeImages.heroSlides}
          alt="Family watching a movie on a large TV in a dark living room"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,0.06),transparent_26rem),linear-gradient(180deg,rgba(5,7,13,0.28)_0%,rgba(5,7,13,0.62)_34%,rgba(5,7,13,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,0.82),rgba(5,7,13,0.42)_48%,rgba(5,7,13,0.82))]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink via-ink/88 to-transparent" />
      </div>

      <Container className="flex min-h-[calc(100svh-4.75rem)] items-center justify-center pb-9 pt-10 sm:min-h-[calc(100svh-5.5rem)] sm:pb-14 sm:pt-16 lg:pt-20">
        <FadeUp className="mx-auto w-full max-w-[980px] text-center">
          <Badge className="border-champagne/24 bg-ink/38 px-4 py-1.5 text-champagne shadow-[0_18px_50px_rgba(216,180,106,0.12)] backdrop-blur-2xl">
            Premium 4K IPTV Streaming
          </Badge>
          <h1 className="hero-title-modern mx-auto mt-5 max-w-5xl text-balance text-5xl font-black leading-[0.92] tracking-normal text-white min-[380px]:text-6xl sm:mt-6 sm:text-7xl md:text-8xl lg:text-[6.8rem]">
            <span className="hero-title-gold block">Flash 4K IPTV</span>
            <span className="hero-title-white mt-3 block sm:mt-4">Cinema at Home</span>
            <span className="hero-title-spectrum block">Sports. Series. Live TV.</span>
          </h1>
          <div className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-[0.72rem] font-black uppercase tracking-normal text-champagne sm:mt-6 sm:text-xs">
            <span className="rounded-full border border-champagne/22 bg-champagne/10 px-3 py-1.5">Movies</span>
            <span className="rounded-full border border-champagne/22 bg-champagne/10 px-3 py-1.5">Live Sports</span>
            <span className="rounded-full border border-champagne/22 bg-champagne/10 px-3 py-1.5">Series</span>
            <span className="rounded-full border border-champagne/22 bg-champagne/10 px-3 py-1.5">4K VOD</span>
          </div>
          <p className="hero-copy mx-auto mt-5 max-w-3xl text-[0.98rem] leading-7 text-platinum/84 sm:mt-6 sm:text-xl sm:leading-8">
            Turn your home into a premium entertainment room with <span>gold-standard IPTV access</span> for movies,
            live matches, binge-worthy series, family nights, and 4K-ready viewing.
          </p>

          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <Button href="#pricing-preview" size="lg" className="min-h-12 px-7">
              View Plans
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href={whatsappUrl(contact.trialWhatsAppMessage)}
              variant="secondary"
              size="lg"
              className="min-h-12 px-7"
              target="_blank"
              rel="noreferrer"
            >
              Start Free Trial
            </Button>
          </div>

          <div className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3" aria-label="Supported device icons">
            {devices.map((device, index) => {
              const Icon = deviceIcons[index];
              return (
                <span
                  key={device}
                  className="group relative grid h-11 w-11 place-items-center rounded-full border border-white/14 bg-white/[0.075] text-champagne shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-champagne/42 hover:bg-white/[0.12] sm:h-12 sm:w-12"
                  aria-label={device}
                  title={device}
                >
                  <FontAwesomeIcon icon={Icon} className="h-5 w-5 transition group-hover:scale-110" aria-hidden="true" />
                  <span className="sr-only">{device}</span>
                </span>
              );
            })}
            <span
              className="group relative grid h-11 w-11 place-items-center rounded-full border border-live/24 bg-live/10 text-live shadow-[0_18px_50px_rgba(255,54,94,0.16)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-live/45 hover:bg-live/16 sm:h-12 sm:w-12"
              aria-label="Live streaming"
              title="Live streaming"
            >
              <FontAwesomeIcon icon={faFire} className="h-5 w-5 transition group-hover:scale-110" aria-hidden="true" />
              <span className="sr-only">Live streaming</span>
            </span>
          </div>
        </FadeUp>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-5" aria-hidden="true">
        <span className="h-10 w-px bg-gradient-to-b from-champagne/0 via-champagne/70 to-champagne/0" />
      </div>
    </section>
  );
}
