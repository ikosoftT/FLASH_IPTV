import { trustItems } from "@/lib/data";
import { Container } from "@/components/ui/Container";

export function TrustBar() {
  return (
    <section aria-label="Flash 4K IPTV trust indicators" className="border-y border-white/10 bg-white/[0.035]">
      <Container>
        <div className="grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-3 text-sm font-medium text-platinum/70">
              <item.icon className="h-4 w-4 text-champagne" aria-hidden="true" />
              {item.label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
