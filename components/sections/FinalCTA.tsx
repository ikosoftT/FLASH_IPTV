import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faComments } from "@fortawesome/free-solid-svg-icons";
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
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/12 px-6 py-16 text-center shadow-[0_34px_110px_rgba(0,0,0,0.38)] sm:px-10 lg:py-20">
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
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-champagne to-transparent" />
          <FadeUp>
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-champagne/30 bg-champagne/10 text-champagne backdrop-blur">
              <FontAwesomeIcon icon={faComments} className="h-6 w-6" aria-hidden="true" />
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl text-balance text-3xl font-semibold text-white sm:text-5xl">
              Ready to Turn Every Screen Into Premium Entertainment?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-platinum/74">
              Start your Flash 4K IPTV package through WhatsApp and get help setting it up on your favorite device.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="#pricing-preview" size="lg">
                View Plans
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" aria-hidden="true" />
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
