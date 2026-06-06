import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-500 text-white shadow-[0_20px_60px_rgba(16,185,129,0.28)] transition hover:-translate-y-0.5 hover:bg-emerald-400 sm:w-auto sm:px-5"
      aria-label="WhatsApp Support"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="ml-2 hidden text-sm font-semibold sm:inline">WhatsApp Support</span>
    </a>
  );
}
