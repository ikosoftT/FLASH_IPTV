import {
  Cpu,
  Monitor,
  MonitorSmartphone,
  Smartphone,
  TabletSmartphone,
  Tv,
} from "lucide-react";
import type { ElementType } from "react";
import { devices } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp, Stagger, staggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const iconMap: Record<string, ElementType> = {
  android: Smartphone,
  androidtv: Tv,
  googletv: Tv,
  firetv: MonitorSmartphone,
  appletv: Tv,
  samsung: Tv,
  lg: Tv,
  nvidia: Cpu,
  chromecast: MonitorSmartphone,
  roku: Tv,
  mag: Monitor,
  smarttv: Tv,
  ios: TabletSmartphone,
  desktop: Monitor,
};

export function DeviceCompatibility() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-electric/[0.03] via-transparent to-field/[0.03]"
      />
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="14+ device platforms"
            title="Compatible With Every Screen You Own"
            description="Stream seamlessly across 14+ device platforms"
          />
        </FadeUp>
        <Stagger className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:gap-5">
          {devices.map((device) => {
            const Icon = iconMap[device.icon] ?? Monitor;
            return (
              <Card
                key={device.name}
                variants={staggerItem}
                className="device-icon-card flex flex-col items-center gap-3 p-5 text-center sm:gap-4 sm:p-6"
              >
                <span className="grid size-12 place-items-center rounded-2xl border border-champagne/20 bg-champagne/10 text-champagne sm:size-14 sm:rounded-[1.125rem]">
                  <Icon className="size-5 sm:size-6" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium leading-snug text-white sm:text-base">
                  {device.name}
                </span>
              </Card>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
