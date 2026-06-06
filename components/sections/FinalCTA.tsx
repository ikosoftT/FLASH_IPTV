import { ArrowRight, MessageCircle } from "lucide-react";
import { brand } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { whatsappUrl } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="px-5 py-16">
      <Container className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-10">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
        <FadeUp>
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-champagne/30 bg-champagne/10 text-champagne">
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-semibold text-white sm:text-5xl">
            Get match-day ready with Flash 4K IPTV
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-platinum/70">
            Message us on WhatsApp, choose your package, receive activation details, and start watching live sports, movies, series, and 4K-ready channels.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={whatsappUrl()} size="lg">
              {brand.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/pricing#plans" variant="secondary" size="lg">
              View Packages
            </Button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
