"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <Container>
        <nav className="flex h-20 items-center justify-between" aria-label="Primary navigation">
          <Link href="/" className="flex items-center gap-3" aria-label={`${brand.name} home`}>
            <BrandLogo />
            <span className="hidden rounded-full border border-live/30 bg-live/10 px-2 py-0.5 text-[10px] font-bold text-live sm:inline-flex">
              LIVE
            </span>
          </Link>

          <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.045] px-2 py-2 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-platinum/70 transition hover:bg-white/[0.07] hover:text-white",
                    active && "bg-white/[0.09] text-champagne"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href={whatsappUrl()} size="sm">
              WhatsApp Now
            </Button>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.06] text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="border-t border-white/10 bg-ink/95 px-5 pb-5 pt-2 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-medium text-platinum/76 transition hover:bg-white/[0.07] hover:text-white",
                    pathname === link.href && "bg-white/[0.08] text-champagne"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href={whatsappUrl()} className="mt-3 w-full" onClick={() => setOpen(false)}>
                Get Started
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
