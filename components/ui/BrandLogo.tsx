import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faPlay } from "@fortawesome/free-solid-svg-icons";
import { brand } from "@/lib/data";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "full" | "mark";
  className?: string;
  textClassName?: string;
};

export function BrandLogo({ variant = "full", className, textClassName }: BrandLogoProps) {
  const mark = (
    <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-2xl border border-champagne/38 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.28),transparent_34%),linear-gradient(135deg,#f8df91,#d8b46a_48%,#9d7430)] text-ink shadow-[0_16px_50px_rgba(216,180,106,0.24)] sm:h-11 sm:w-11">
      <span className="absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full bg-live text-[0.42rem] text-white shadow-[0_0_18px_rgba(255,54,94,0.75)]" aria-hidden="true">
        <FontAwesomeIcon icon={faPlay} />
      </span>
      <FontAwesomeIcon icon={faBolt} className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
    </span>
  );

  if (variant === "mark") {
    return <span className={className}>{mark}</span>;
  }

  return (
    <span className={cn("inline-flex min-w-0 items-center gap-2.5", className)} aria-label={brand.name}>
      {mark}
      <span className={cn("leading-none", textClassName)}>
        <span className="block whitespace-nowrap text-[1.05rem] font-black tracking-normal text-champagne drop-shadow-[0_8px_24px_rgba(216,180,106,0.22)] sm:text-[1.35rem]">
          Flash 4K
        </span>
        <span className="mt-0.5 block whitespace-nowrap text-[0.72rem] font-black uppercase tracking-[0.18em] text-[#ffe7a3] sm:text-[0.78rem]">
          IPTV
        </span>
      </span>
    </span>
  );
}
