import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      className="group fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full border border-emerald-200/35 bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 text-white shadow-[0_22px_70px_rgba(16,185,129,0.38)] transition hover:-translate-y-0.5 hover:shadow-[0_26px_80px_rgba(16,185,129,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
      aria-label="Open WhatsApp chat"
      target="_blank"
      rel="noreferrer"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400/35 opacity-70 animate-ping" aria-hidden="true" />
      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
      <WhatsAppIcon className="relative h-7 w-7 drop-shadow" />
    </a>
  );
}
