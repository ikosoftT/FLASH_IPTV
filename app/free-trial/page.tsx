import type { Metadata } from "next";
import { MessageCircle, MonitorSmartphone, ShieldCheck, Wifi } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { contact } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createMetadata({
  title: "Free IPTV Trial - Flash 4K IPTV",
  description: "Request a Flash 4K IPTV trial to test your real device, app setup, internet connection, EPG, and streaming quality before choosing a plan.",
  path: "/free-trial"
});

const checks = [
  { title: "Test your real device", description: "Use the Smart TV, Fire Stick, Android TV, iPhone, iPad, Windows PC, or Mac you plan to watch on.", icon: MonitorSmartphone },
  { title: "Check your network", description: "Confirm whether your Wi-Fi or Ethernet setup is stable enough for live TV, sports, movies, and series.", icon: Wifi },
  { title: "Confirm setup support", description: "Ask support which player app and login format fit your device before choosing a longer package.", icon: MessageCircle },
  { title: "Choose with confidence", description: "Verify playlist loading, EPG behavior, and playback quality without guessing from generic device claims.", icon: ShieldCheck }
];

export default function FreeTrialPage() {
  return (
    <>
      <section className="section-pad">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Free Trial</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-6xl">
              Test IPTV on your real device before choosing a plan
            </h1>
            <p className="mt-5 text-lg leading-8 text-platinum/70">
              Request setup help through WhatsApp, test playback on the device you actually use, and confirm the app, EPG, and stream quality fit your home.
            </p>
            <Button href={whatsappUrl(contact.trialWhatsAppMessage)} className="mt-8" size="lg" target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Request Trial on WhatsApp
            </Button>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {checks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.045] p-6">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-champagne/12 text-champagne">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-xl font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-platinum/64">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA />
    </>
  );
}
