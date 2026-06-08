import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  variants?: unknown;
};

export function Card({ className, variants, ...props }: CardProps) {
  void variants;

  return (
    <div
      className={cn(
        "luxury-border rounded-[1.5rem] bg-white/[0.055] p-6 shadow-glow backdrop-blur-xl transition duration-300 hover:border-champagne/35 hover:bg-white/[0.075]",
        className
      )}
      {...props}
    />
  );
}
