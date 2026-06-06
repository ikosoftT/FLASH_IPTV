import { Monitor, Smartphone, Tablet, Tv } from "lucide-react";
import { assets, devices } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const deviceIcons = [Tv, Smartphone, Tablet, Monitor];

export function DeviceCompatibility() {
  return (
    <section className="section-pad">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeUp>
            <SectionHeading
              align="left"
              eyebrow="Compatibility"
              title="Live TV across every screen before kickoff"
              description="Watch on Smart TV, Fire Stick, Android TV, iPhone, iPad, MAG Box, Windows, Mac, and compatible IPTV player apps."
            />
          </FadeUp>
          <FadeUp>
            <Card className="overflow-hidden p-0">
              <ImageWithFallback
                src={assets.devicesLineup}
                alt="Generic device lineup for IPTV streaming"
                className="h-72 border-b border-white/10"
                fallbackClassName="pitch-grid bg-field/10 p-6"
                sizes="(max-width: 1024px) 100vw, 680px"
              >
                <div className="flex h-full items-end justify-center gap-4">
                  <div className="h-36 w-48 rounded-2xl border-4 border-platinum/20 bg-ink/80 shadow-glow" />
                  <div className="h-48 w-24 rounded-[1.5rem] border-4 border-platinum/20 bg-ink/80 shadow-glow" />
                  <div className="h-28 w-36 rounded-2xl border-4 border-platinum/20 bg-ink/80 shadow-glow" />
                </div>
              </ImageWithFallback>
              <div className="grid gap-4 p-5 sm:grid-cols-2">
                {devices.map((device, index) => {
                  const Icon = deviceIcons[index % deviceIcons.length];
                  return (
                    <div key={device} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                      <Icon className="h-5 w-5 text-electric" aria-hidden="true" />
                      <span className="text-sm font-medium text-platinum/78">{device}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
