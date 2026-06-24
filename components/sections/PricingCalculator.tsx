"use client";

import { useMemo, useState } from "react";
import { pricingConfig } from "@/lib/data";
import { cn, formatCurrency } from "@/lib/utils";
import { whatsappPlanUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ShieldCheck, Tv, Zap, Headphones, MessageCircle } from "lucide-react";

type DeviceCount = (typeof pricingConfig.deviceOptions)[number];

const PLAN_TIERS: Record<number, { name: string; description: string }> = {
  3: { name: "Starter", description: "Perfect for testing the waters." },
  6: { name: "Popular", description: "Our most chosen plan for sports fans." },
  12: { name: "Elite", description: "The ultimate year-round VIP experience." },
};

export function PricingCalculator({ preview = false }: { preview?: boolean }) {
  const [devices, setDevices] = useState<DeviceCount>(1);

  const cards = useMemo(() => pricingConfig.plansByDevices[devices], [devices]);

  return (
    <div id="plans" className="max-w-6xl mx-auto">
      <div className="flex justify-center mb-10">
        <Card className="relative inline-flex items-center overflow-hidden p-2 bg-white/5 border-white/10 shadow-2xl backdrop-blur-xl rounded-full">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
          <span className="pl-4 pr-6 text-sm font-semibold uppercase tracking-wider text-platinum/80 flex items-center gap-2">
            <Tv className="w-4 h-4 text-champagne" />
            Connections
          </span>
          <div className="flex gap-1 bg-black/40 rounded-full p-1 border border-white/5">
            {pricingConfig.deviceOptions.map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setDevices(count)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300",
                  devices === count
                    ? "bg-gradient-to-r from-champagne to-champagne/80 text-ink shadow-[0_0_20px_rgba(216,180,106,0.4)]"
                    : "text-platinum/60 hover:text-white hover:bg-white/5"
                )}
              >
                {count} {count === 1 ? "Device" : "Devices"}
              </button>
            ))}
          </div>
        </Card>
      </div>

      <div className={cn("grid gap-6 lg:gap-8", preview ? "lg:grid-cols-3" : "lg:grid-cols-3")}>
        {cards.map((card) => {
          const best = card.months === 12;
          const tier = PLAN_TIERS[card.months] || { name: card.label, description: "Premium IPTV Plan" };
          const bonus = "bonus" in card ? card.bonus : undefined;
          const regularPrice = "regularPrice" in card ? card.regularPrice : undefined;
          const monthlyEquivalent = "monthlyEquivalent" in card ? card.monthlyEquivalent : undefined;

          return (
            <Card
              key={card.months}
              className={cn(
                "relative flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2",
                best ? "border-champagne/50 bg-gradient-to-b from-champagne/10 to-black/60 shadow-[0_20px_60px_rgba(216,180,106,0.15)] scale-[1.02]" : "border-white/10 bg-black/40 hover:border-white/20"
              )}
            >
              {best && (
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-champagne/50 via-champagne to-champagne/50" />
              )}
              {best ? (
                <span className="absolute right-5 top-5 rounded-full bg-champagne px-3 py-1 text-xs font-bold text-ink shadow-lg shadow-champagne/20">
                  BEST VALUE
                </span>
              ) : null}
              
              <div className="p-8 pb-0">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-champagne mb-2">
                  {card.label}
                </p>
                <h3 className="text-3xl font-bold text-white">{tier.name}</h3>
                <p className="mt-2 text-sm text-platinum/60">{tier.description}</p>
                
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-5xl font-black text-white">{formatCurrency(card.price)}</span>
                  {regularPrice && (
                    <span className="text-lg text-platinum/40 line-through">${regularPrice.toFixed(2)}</span>
                  )}
                </div>
                
                <div className="mt-3 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1 text-xs font-medium text-platinum/70 border border-white/5">
                    {devices} {devices === 1 ? "device" : "devices"}
                  </span>
                  <span className="text-sm font-semibold text-field">{card.savingsLabel}</span>
                </div>
                
                {monthlyEquivalent && (
                  <p className="mt-3 text-sm font-bold text-champagne">{monthlyEquivalent}</p>
                )}
                {bonus && (
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-champagne/10 px-3 py-1.5 text-sm font-semibold text-champagne border border-champagne/20">
                    <Zap className="h-4 w-4" />
                    {bonus}
                  </div>
                )}
              </div>

              <div className="p-8 pt-6 flex-1 flex flex-col">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                <ul className="flex-1 space-y-4">
                  {pricingConfig.includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-platinum/80 items-start">
                      <ShieldCheck className="h-5 w-5 shrink-0 text-field mt-0.5" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  href={whatsappPlanUrl({ label: `${tier.name} (${card.label})`, devices })}
                  className={cn(
                    "mt-8 w-full min-h-[3.5rem] text-base font-semibold shadow-lg",
                    best ? "bg-champagne text-ink hover:bg-white shadow-champagne/25" : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  )}
                >
                  {best ? `Get ${tier.name} Access` : `Choose ${tier.name}`}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {!preview && (
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Zap, text: "Instant Activation" },
            { icon: MessageCircle, text: "WhatsApp Checkout" },
            { icon: Tv, text: "All Devices Supported" },
            { icon: ShieldCheck, text: "Money-Back Guarantee" }
          ].map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-3 rounded-2xl border border-white/5 bg-black/20 p-4 text-sm font-medium text-platinum/70 backdrop-blur-sm">
              <item.icon className="h-5 w-5 text-champagne opacity-80" aria-hidden="true" />
              {item.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
