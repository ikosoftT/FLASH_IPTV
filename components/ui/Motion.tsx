import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MotionLikeProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  variants?: unknown;
};

export function FadeUp({ className, ...props }: MotionLikeProps) {
  return <div className={cn("reveal-static", className)} {...props} />;
}

export function Stagger({ className, ...props }: MotionLikeProps) {
  return <div className={cn("stagger-static", className)} {...props} />;
}

export const staggerItem = undefined;
