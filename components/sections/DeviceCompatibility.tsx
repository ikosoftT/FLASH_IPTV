import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faMobileScreenButton, faTabletScreenButton, faTv } from "@fortawesome/free-solid-svg-icons";
import { assets, devices } from "@/lib/data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const deviceIcons = [faTv, faMobileScreenButton, faTabletScreenButton, faDesktop];

export function DeviceCompatibility() {
  return (
    <section className="section-pad">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeUp>
            <SectionHeading
              align="left"
              eyebrow="Compatibility"
              title="Movies, series, sports, and live TV across every screen"
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
              <div className="grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-5">
                {devices.map((device, index) => {
                  const icon = deviceIcons[index % deviceIcons.length];
                  return (
                    <div key={device} className="flex min-h-14 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.045] p-3 sm:gap-3 sm:rounded-2xl sm:p-4">
                      <FontAwesomeIcon icon={icon} className="h-4 w-4 shrink-0 text-electric sm:h-5 sm:w-5" aria-hidden="true" />
                      <span className="text-xs font-medium leading-snug text-platinum/78 sm:text-sm">{device}</span>
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
