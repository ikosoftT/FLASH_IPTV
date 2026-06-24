import { ArrowRight, MessageCircle } from "lucide-react";
import { contact, homeImages } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { whatsappUrl } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section className="px-0 py-16">
      <Container>
        <div className="group relative isolate overflow-hidden rounded-[2rem] border border-white/12 px-6 py-16 text-center shadow-[0_34px_110px_rgba(0,0,0,0.38)] transition-shadow duration-500 hover:shadow-[0_34px_130px_rgba(216,180,106,0.06)] sm:px-10 lg:py-20">
          <div className="absolute inset-0 -z-10">
            <ImageWithFallback
              src={homeImages.finalCtaBackground}
              alt="Family movie night with a glowing TV in a premium living room"
              className="h-full w-full"
              imgClassName="object-cover object-center"
              fallbackVariant="cta"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,13,0.56),rgba(5,7,13,0.9)),radial-gradient(circle_at_50%_10%,rgba(216,180,106,0.18),transparent_24rem)]" />
          </div>
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-champagne/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <FadeUp>
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-champagne/30 bg-gradient-to-br from-champagne/20 to-champagne/5 text-champagne shadow-[0_0_30px_rgba(216,180,106,0.12)] backdrop-blur">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-semibold text-white sm:text-5xl">
              Ready to Transform Your Screen Time?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-platinum/74">
              Get started through WhatsApp and receive fast activation, guided setup, and premium live TV across all your devices.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="#pricing-preview" size="lg">
                View Plans
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={whatsappUrl(contact.trialWhatsAppMessage)}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noreferrer"
              >
                Start Free Trial
              </Button>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
