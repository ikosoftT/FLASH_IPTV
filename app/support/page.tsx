import type { Metadata } from "next";
import { Mail, MessageCircle, MessagesSquare, Wrench } from "lucide-react";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { assets, contact, setupGuides, supportFaqs, supportTopics } from "@/lib/data";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { createMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createMetadata({
  title: "Support - Flash 4K IPTV",
  description: "Get Flash 4K IPTV WhatsApp activation, setup help, buffering fixes, EPG support, device guides, and before-match troubleshooting.",
  path: "/support"
});

const contactOptions = [
  {
    title: "Live Chat",
    description: "Use the support chat placeholder for setup and renewal help.",
    icon: MessagesSquare,
    href: whatsappUrl(),
    label: "Open WhatsApp"
  },
  {
    title: "WhatsApp",
    description: "Connect through the editable WhatsApp support link.",
    icon: MessageCircle,
    href: whatsappUrl(),
    label: "Message Support"
  },
  {
    title: "Email",
    description: contact.email,
    icon: Mail,
    href: `mailto:${contact.email}`,
    label: "Email Us"
  }
];

export default function SupportPage() {
  return (
    <>
      <section id="contact" className="pb-12 pt-16 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Support</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-6xl">
              WhatsApp support for activation, setup, and match-day help
            </h1>
            <p className="mt-5 text-lg leading-8 text-platinum/70">
              Get help with package activation, Smart TV setup, Fire Stick installation, buffering fixes, EPG guide refresh, and account status.
            </p>
            <p className="mt-4 text-sm font-semibold text-champagne">{contact.responseTime} - {contact.supportHours}</p>
          </div>

          <Card className="mt-12 grid items-center gap-8 overflow-hidden p-0 lg:grid-cols-[1.05fr_0.95fr]">
            <ImageWithFallback
              src={assets.supportSetup}
              alt="Generic IPTV support setup visual"
              className="h-72 lg:h-full"
              fallbackClassName="pitch-grid bg-field/10 p-6"
              sizes="(max-width: 1024px) 100vw, 640px"
            >
              <div className="flex h-full items-center justify-center">
                <div className="w-72 rounded-[1.5rem] border border-white/15 bg-ink/78 p-5 shadow-glow">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-7 w-7 text-field" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-semibold text-white">WhatsApp Setup</p>
                      <p className="text-xs text-platinum/50">Activation guidance ready</p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-2">
                    {["Device check", "Player install", "EPG refresh"].map((item) => (
                      <div key={item} className="rounded-xl bg-white/[0.07] px-3 py-2 text-xs text-platinum/70">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ImageWithFallback>
            <div className="p-6 lg:p-8">
              <Badge>Before big match?</Badge>
              <h2 className="mt-5 text-3xl font-semibold text-white">Test your IPTV setup before kickoff</h2>
              <p className="mt-4 text-sm leading-7 text-platinum/62">
                Message support early with your device, app, and package question. Flash 4K IPTV can help with
                activation status, player setup, EPG refresh, and buffering checks.
              </p>
              <Button href={whatsappUrl()} className="mt-6">
                Get WhatsApp Help
              </Button>
            </div>
          </Card>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {contactOptions.map((option) => (
              <Card key={option.title}>
                <option.icon className="h-7 w-7 text-champagne" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-semibold text-white">{option.title}</h2>
                <p className="mt-3 min-h-14 text-sm leading-7 text-platinum/62">{option.description}</p>
                <Button href={option.href} className="mt-6" variant="secondary">
                  {option.label}
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="guides" className="section-pad bg-white/[0.025]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Badge>Setup guides</Badge>
            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-5xl">Guided setup for every popular IPTV device</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {setupGuides.map((guide) => (
              <Card key={guide.title}>
                <guide.icon className="h-7 w-7 text-electric" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold text-white">{guide.title}</h3>
                <p className="mt-3 text-sm leading-7 text-platinum/62">{guide.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-pad">
        <Container>
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportTopics.map((topic) => (
              <Card key={topic.title}>
                <topic.icon className="h-6 w-6 text-champagne" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-white">{topic.title}</h2>
                <p className="mt-3 text-sm leading-7 text-platinum/62">{topic.description}</p>
              </Card>
            ))}
          </div>
          <Card className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Wrench className="h-8 w-8 text-champagne" aria-hidden="true" />
              <h2 className="mt-5 text-3xl font-semibold text-white">Troubleshooting checklist</h2>
              <p className="mt-4 text-sm leading-7 text-platinum/62">
                These quick steps solve most playback issues before support needs to adjust account or app settings.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Restart your player app and device",
                "Use Ethernet or stronger Wi-Fi before big matches",
                "Check account details for typos",
                "Refresh playlist and EPG data",
                "Close unused apps during 4K viewing",
                "Contact WhatsApp support before switching devices"
              ].map((step) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-platinum/72">
                  {step}
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>
      <FAQ items={supportFaqs} title="Support questions, answered" />
      <section id="legal" className="sr-only" aria-label="Legal placeholder" />
      <FinalCTA />
    </>
  );
}
