import { CheckCircle2, MessageCircle, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatsappUrl } from "@/lib/whatsapp";

const steps = [
  {
    title: "Choose your package",
    description: "Select 1, 2, or 3 devices and pick 3, 6, or 12 months.",
    icon: CheckCircle2
  },
  {
    title: "Message us on WhatsApp",
    description: "Your selected plan opens with package details prefilled.",
    icon: MessageCircle
  },
  {
    title: "Start watching",
    description: "Receive activation details and setup guidance for your device.",
    icon: PlayCircle
  }
];

export function SetupSteps() {
  return (
    <section className="section-pad">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="Fast setup"
            title="Activate your IPTV package in 3 simple steps"
            description="A WhatsApp-first flow keeps setup human, fast, and clear before match night."
          />
        </FadeUp>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-field/15 text-field">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-4xl font-semibold text-white/10">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-platinum/62">{step.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href={whatsappUrl()} size="lg">
            Activate via WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
