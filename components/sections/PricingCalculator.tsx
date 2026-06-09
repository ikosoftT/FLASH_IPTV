"use client";

import { useMemo, useState } from "react";
import { pricingConfig } from "@/lib/data";
import { cn, formatCurrency } from "@/lib/utils";
import { whatsappPlanUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type DeviceCount = (typeof pricingConfig.deviceOptions)[number];

export function PricingCalculator({ preview = false }: { preview?: boolean }) {
  const [devices, setDevices] = useState<DeviceCount>(1);

  const cards = useMemo(() => pricingConfig.plansByDevices[devices], [devices]);

  return (
    <div id="plans">
      <Card className="relative overflow-hidden p-4">
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-field to-transparent" />
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-champagne">Select devices</p>
            <p className="mt-2 text-sm text-platinum/58">Choose how many screens need active IPTV access.</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {pricingConfig.deviceOptions.map((count) => (
              <button
                key={count}
                type="button"
                onClick={() => setDevices(count)}
                className={cn(
                  "rounded-full border px-5 py-3 text-sm font-semibold transition",
                  devices === count
                    ? "border-field bg-field text-white shadow-[0_16px_45px_rgba(22,163,74,0.22)]"
                    : "border-white/10 bg-white/[0.04] text-platinum/68 hover:border-white/25"
                )}
              >
                {count} {count === 1 ? "Device" : "Devices"}
              </button>
            ))}
          </div>
        </div>
      </Card>

      <div className={cn("mt-8 grid gap-4", preview ? "lg:grid-cols-3" : "lg:grid-cols-3")}>
        {cards.map((card) => {
          const best = card.months === 12;
          const planLabel = "planLabel" in card ? card.planLabel : "Subscription";
          const bonus = "bonus" in card ? card.bonus : undefined;
          const regularPrice = "regularPrice" in card ? card.regularPrice : undefined;
          const description = "description" in card ? card.description : undefined;
          const monthlyEquivalent = "monthlyEquivalent" in card ? card.monthlyEquivalent : undefined;
          return (
            <Card
              key={card.months}
              className={cn(
                "relative flex flex-col overflow-hidden",
                best && "border-champagne/70 bg-gradient-to-b from-champagne/[0.12] to-white/[0.055] shadow-gold"
              )}
            >
              {best ? (
                <span className="absolute right-5 top-5 rounded-full bg-champagne px-3 py-1 text-xs font-bold text-ink">
                  BEST VALUE
                </span>
              ) : null}
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-champagne">
                {planLabel}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{card.label}</h3>
              {bonus ? <p className="mt-2 text-sm font-semibold text-field">{bonus}</p> : null}
              <div className="mt-5">
                {regularPrice ? (
                  <p className="text-sm text-platinum/45">
                    <span className="line-through">${regularPrice.toFixed(2)} regular</span>
                  </p>
                ) : null}
                <span className="text-5xl font-semibold text-white">{formatCurrency(card.price)}</span>
                <p className="mt-2 text-sm text-platinum/54">
                  {devices} {devices === 1 ? "device" : "devices"} - {card.savingsLabel}
                </p>
              </div>
              {description ? <p className="mt-4 text-sm text-electric">{description}</p> : null}
              {monthlyEquivalent ? <p className="mt-2 text-sm font-semibold text-champagne">{monthlyEquivalent}</p> : null}
              <ul className="mt-6 flex-1 space-y-3">
                {pricingConfig.includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-platinum/70">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-field shadow-[0_0_14px_rgba(22,163,74,0.45)]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href={whatsappPlanUrl({ label: card.label, devices })}
                className="mt-7 w-full"
                variant={best ? "primary" : "secondary"}
              >
                {card.cta}
              </Button>
            </Card>
          );
        })}
      </div>

      {!preview ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          {["Fast activation", "WhatsApp checkout", "All devices supported", "7-day money-back guarantee"].map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm text-platinum/72">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-champagne" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
