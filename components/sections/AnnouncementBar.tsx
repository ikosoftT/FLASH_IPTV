import Link from "next/link";
import { announcement } from "@/lib/data";
import { Container } from "@/components/ui/Container";

export function AnnouncementBar() {
  return (
    <div className="border-b border-white/10 bg-ink/80 backdrop-blur-2xl">
      <Container>
        <div className="flex min-h-10 flex-col items-center justify-center gap-2 py-2 text-center text-xs text-platinum/72 sm:flex-row sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-live live-pulse" aria-hidden="true" />
            {announcement.label}
          </span>
          <Link href={announcement.href} className="font-semibold text-champagne transition hover:text-white">
            {announcement.cta}
          </Link>
        </div>
      </Container>
    </div>
  );
}
