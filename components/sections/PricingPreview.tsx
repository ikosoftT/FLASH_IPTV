"use client";

import { useMemo, useState } from "react";
import { Check, HelpCircle, MessageCircle, MonitorSmartphone, ShieldCheck, Star, Zap } from "lucide-react";
import { brand, contact, pricingConfig } from "@/lib/data";
import { cn, formatCurrency } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

type DeviceCount = (typeof pricingConfig.deviceOptions)[number];

const perks = [
  "26,000+ Live Channels",
  "100,000+ VOD Titles",
  "4K / FHD / HD",
  "EPG Guide",
  "24/7 Support",
  "All Devices",
];

const deviceIcons = [MonitorSmartphone, Star, Zap];

export function PricingPreview() {
  const [devices, setDevices] = useState<DeviceCount>(1);

  const cards = useMemo(() => pricingConfig.plansByDevices[devices], [devices]);

  return (
    <section id="pricing-preview" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 bg-champagne-glow opacity-40" />
        <div className="absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-electric/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-aura/10 blur-[120px]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={pricingConfig.promoLabel}
          title="Straightforward pricing"
          description={`Pay once, activate fast, and start streaming with zero monthly surprises. ${brand.name} is about clarity and quality.`}
        />

        <FadeUp className="mt-12">
          <div className="flex justify-center">
            <div className="inline-flex items-center overflow-hidden rounded-full bg-white/[0.04] p-1 shadow-lg ring-1 ring-white/10 backdrop-blur-xl sm:p-1.5">
              {pricingConfig.deviceOptions.map((count) => {
                const Icon = deviceIcons[count - 1] || MonitorSmartphone;
                const active = devices === count;
                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() => setDevices(count)}
                    className={cn(
                      "relative flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 sm:gap-2 sm:px-7 sm:py-2.5 sm:text-sm",
                      active
                        ? "bg-gradient-to-r from-champagne to-champagne-dark text-ink shadow-lg shadow-champagne/20"
                        : "text-platinum-muted hover:text-white"
                    )}
                  >
                    {active && (
                      <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-champagne/40 to-champagne-dark/40 blur-sm" />
                    )}
                    <Icon className="relative z-10 h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
                    <span className="relative z-10">
                      {count} {count === 1 ? "Device" : "Devices"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => {
            const isBest = card.months === 12;
            const monthlyEq = "monthlyEquivalent" in card ? (card as { monthlyEquivalent: string }).monthlyEquivalent : undefined;
            const bonus = "bonus" in card ? (card as { bonus: string }).bonus : undefined;
            const regularPrice = "regularPrice" in card ? (card as { regularPrice: number }).regularPrice : undefined;

            return (
              <FadeUp key={card.months} style={{ animationDelay: `${index * 100}ms` }}>
                <div
                  className={cn(
                    "pricing-card group relative flex flex-col overflow-hidden rounded-[1.75rem] p-6 transition-all duration-500 sm:p-8 lg:p-10",
                    isBest
                      ? "pricing-card-featured"
                      : "border border-white/[0.08] bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-xl hover:border-white/[0.18]"
                  )}
                >
                  {isBest && (
                    <>
                      <div className="absolute right-6 top-6 z-10 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-champagne to-champagne-dark px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink shadow-lg shadow-champagne/30">
                        <Star className="h-3.5 w-3.5 fill-ink" aria-hidden="true" />
                        Most Popular
                      </div>
                      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-champagne/10 blur-[60px]" />
                    </>
                  )}

                  <div className="relative z-10">
                    <p
                      className={cn(
                        "text-xs font-bold uppercase tracking-[0.18em]",
                        isBest ? "text-champagne-light" : "text-platinum-muted"
                      )}
                    >
                      {card.label}
                    </p>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                        {formatCurrency(card.price)}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-medium",
                          isBest ? "text-champagne/80" : "text-platinum-muted"
                        )}
                      >
                        total
                      </span>
                    </div>

                    {regularPrice && (
                      <p className="mt-1 text-sm text-platinum-muted line-through">
                        {formatCurrency(regularPrice)}
                      </p>
                    )}

                    {monthlyEq && (
                      <p className="mt-2 inline-block rounded-full bg-field/15 px-3 py-1 text-sm font-semibold text-field ring-1 ring-field/20">
                        {monthlyEq}
                      </p>
                    )}

                    {bonus && (
                      <div className="mt-4 flex items-center gap-2 rounded-xl bg-champagne/10 px-4 py-2 text-sm font-semibold text-champagne ring-1 ring-champagne/20">
                        <Zap className="h-4 w-4" aria-hidden="true" />
                        {bonus}
                      </div>
                    )}

                    <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                    <ul className="mt-8 space-y-3">
                      {perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-3 text-sm text-platinum/80">
                          <span
                            className={cn(
                              "flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                              isBest ? "bg-champagne/15 text-champagne" : "bg-white/[0.07] text-platinum-muted"
                            )}
                          >
                            <Check className="h-3 w-3" aria-hidden="true" />
                          </span>
                          {perk}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 space-y-3">
                      <Button
                        href={whatsappUrl(
                          `Hello ${brand.name}, I'm interested in the ${card.label} plan for ${devices} device${devices > 1 ? "s" : ""}. Please send payment and setup details.`
                        )}
                        className={cn(
                          "w-full min-h-[3.25rem] text-base font-semibold shadow-lg transition-all duration-300",
                          isBest
                            ? "bg-gradient-to-r from-champagne via-champagne-light to-champagne-dark text-ink shadow-champagne/25 hover:brightness-110 hover:shadow-champagne/40"
                            : "border border-white/[0.12] bg-white/[0.06] text-white backdrop-blur hover:border-champagne/40 hover:bg-white/[0.12]"
                        )}
                      >
                        <MessageCircle className="h-5 w-5" aria-hidden="true" />
                        Activate via WhatsApp
                      </Button>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-platinum-muted">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>7-day money-back guarantee</span>
                      <HelpCircle className="ml-1 h-3 w-3 opacity-60" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
