import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { brand } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

config.autoAddCss = false;

export const metadata: Metadata = createMetadata({
  title: `${brand.name} - Premium IPTV for Live Sports, Movies & 4K TV`,
  description:
    "Get premium Flash 4K IPTV with 26,000+ live channels, 100,000+ movies and series, HD/4K streaming, WhatsApp activation, and all-device support."
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
