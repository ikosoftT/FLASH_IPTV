"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={cn(
        "luxury-border rounded-[1.5rem] bg-white/[0.055] p-6 shadow-glow backdrop-blur-xl transition duration-300 hover:border-champagne/35 hover:bg-white/[0.075]",
        className
      )}
      {...props}
    />
  );
}
