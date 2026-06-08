import { Container } from "@/components/ui/Container";

const trustItems = ["24/7 WhatsApp Support", "HD / FHD / 4K", "Fast Activation", "All Major Devices"];

export function TrustBar() {
  return (
    <section aria-label="Flash 4K IPTV trust indicators" className="border-y border-white/10 bg-white/[0.035]">
      <Container>
        <div className="grid gap-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item} className="flex items-center justify-center gap-3 text-sm font-medium text-platinum/70">
              <span className="h-2 w-2 rounded-full bg-champagne" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
