"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent px-0 py-3 transition duration-300",
        scrolled || open ? "bg-ink/72 backdrop-blur-2xl" : "bg-ink/20 backdrop-blur-xl"
      )}
    >
      <Container>
        <nav
          className={cn(
            "nav-luxury-shell relative flex h-16 items-center justify-between overflow-hidden rounded-full border px-3 shadow-[0_24px_90px_rgba(0,0,0,0.34)] transition duration-300 sm:h-[4.6rem] sm:px-4",
            scrolled || open
              ? "border-white/14 bg-ink/78"
              : "border-white/10 bg-white/[0.045]"
          )}
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="relative z-10 flex min-w-0 items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            aria-label={`${brand.name} home`}
            onClick={() => setOpen(false)}
          >
            <BrandLogo />
            <span className="hidden items-center gap-1.5 rounded-full border border-live/25 bg-live/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-live sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-live live-pulse" />
              4K Live
            </span>
          </Link>

          <div className="relative z-10 hidden items-center rounded-full border border-white/12 bg-ink/44 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2.5 text-sm font-semibold text-platinum/68 transition duration-200 hover:text-white",
                    "before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-white/[0.075] before:opacity-0 before:transition before:duration-200 hover:before:opacity-100",
                    active && "text-champagne before:bg-gradient-to-r before:from-champagne/18 before:via-white/[0.08] before:to-electric/12 before:opacity-100"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="relative z-10 hidden items-center gap-3 lg:flex">
            <a
              href={whatsappUrl()}
              className="group relative grid h-12 w-12 place-items-center rounded-full border border-emerald-200/28 bg-gradient-to-br from-emerald-400/18 via-emerald-500/12 to-white/[0.035] text-emerald-200 shadow-[0_16px_48px_rgba(16,185,129,0.18)] transition hover:-translate-y-0.5 hover:border-emerald-200/55 hover:text-white hover:shadow-[0_20px_70px_rgba(16,185,129,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
              aria-label="Open WhatsApp chat"
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute inset-0 rounded-full bg-emerald-300/16 opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
              <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)] live-pulse" aria-hidden="true" />
              <WhatsAppIcon className="relative h-6 w-6 transition group-hover:scale-105" />
            </a>
          </div>

          <button
            type="button"
            className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-white/14 bg-white/[0.07] text-white shadow-[0_12px_34px_rgba(0,0,0,0.25)] transition hover:bg-white/[0.11] lg:hidden"
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
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="px-4 pb-4 pt-2 lg:hidden"
          >
            <div className="mobile-nav-panel relative mx-auto flex max-w-7xl flex-col gap-2 overflow-hidden rounded-[1.65rem] border border-white/12 bg-ink/88 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "relative rounded-2xl px-4 py-3.5 text-base font-semibold text-platinum/76 transition hover:bg-white/[0.07] hover:text-white",
                    pathname === link.href && "bg-gradient-to-r from-champagne/14 via-white/[0.06] to-electric/10 text-champagne"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button href={whatsappUrl()} className="mt-2 w-full shadow-[0_18px_60px_rgba(216,180,106,0.18)]" onClick={() => setOpen(false)}>
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp
              </Button>
              <p className="px-3 pb-1 pt-2 text-center text-[11px] font-medium text-platinum/42">
                Fast activation, 4K-ready access, and guided setup.
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
