import Link from "next/link";
import { brand, footerLinks } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer id="disclaimer" className="border-t border-white/10 bg-gradient-to-b from-ink/95 to-[#030408]">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2fr]">
          <div>
            <Link href="/" className="group inline-flex" aria-label={`${brand.name} home`}>
              <BrandLogo textClassName="sm:[&>span:first-child]:text-2xl" />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-platinum/64">{brand.description}</p>
            <p className="mt-5 max-w-lg text-xs leading-6 text-platinum/45">{brand.disclaimer}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h2 className="relative text-sm font-semibold capitalize text-white before:mb-2 before:block before:h-px before:w-6 before:bg-champagne/60">
                  {title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={`${title}-${link.label}`}>
                      <Link
                        className="relative text-sm text-platinum/58 transition-all duration-200 hover:translate-x-1 hover:text-champagne hover:drop-shadow-[0_0_8px_rgba(216,180,106,0.15)]"
                        href={link.href}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-platinum/48 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>Secure streaming access. Premium setup. Clear support.</p>
        </div>
      </Container>
    </footer>
  );
}
