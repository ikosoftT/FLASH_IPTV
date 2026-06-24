"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faComments } from "@fortawesome/free-solid-svg-icons";
import { brand, contact, navLinks } from "@/lib/data";
import { whatsappUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="nav-luxury-shell sticky top-0 z-50 px-0 py-2.5 sm:py-3">
      <Container>
        <nav
          className="relative flex min-h-14 items-center justify-between rounded-2xl border border-white/10 bg-ink/60 px-3 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:min-h-16 sm:px-5"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="group min-w-0 shrink-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            aria-label={`${brand.name} home`}
          >
            <BrandLogo />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm font-semibold transition",
                    isActive
                      ? "text-white shadow-[inset_0_0_0_1px_rgba(216,180,106,0.35)]"
                      : "text-platinum/70 hover:bg-white/[0.075] hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full bg-gradient-to-b from-champagne/8 to-transparent"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Button href="#pricing-preview" variant="secondary" className="h-10 px-4">
              View Plans
            </Button>
            <Button
              href={whatsappUrl(contact.trialWhatsAppMessage)}
              className="h-10 px-4"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faComments} className="h-4 w-4" aria-hidden="true" />
              Start Free Trial
            </Button>
          </div>

          <details className="group/details relative lg:hidden">
            <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-xl border border-white/14 bg-white/[0.07] text-white transition hover:bg-white/[0.12] [&::-webkit-details-marker]:hidden">
              <FontAwesomeIcon icon={faBars} className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="mobile-nav-panel mobile-menu-drop absolute right-0 top-12 grid w-[min(20rem,calc(100vw-2rem))] gap-2 rounded-2xl border border-white/12 bg-ink/96 p-3 shadow-[0_28px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-base font-semibold transition",
                      isActive
                        ? "text-champagne shadow-[inset_0_0_0_1px_rgba(216,180,106,0.35)]"
                        : "text-platinum/76 hover:bg-white/[0.07] hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="grid gap-2 pt-2">
                <Button href="#pricing-preview" variant="secondary" className="w-full">
                  View Plans
                </Button>
                <Button
                  href={whatsappUrl(contact.trialWhatsAppMessage)}
                  className="w-full"
                  target="_blank"
                  rel="noreferrer"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </details>
        </nav>
      </Container>
    </header>
  );
}
