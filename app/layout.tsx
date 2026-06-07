import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { brand } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: `${brand.name} - Premium IPTV for Live Sports, Movies & 4K TV`,
  description:
    "Flash 4K IPTV offers premium IPTV access with 26,000+ live channels, 100,000+ VOD titles, HD/FHD/4K quality, fast WhatsApp activation, and support for all major devices."
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </head>
      <body className="font-sans antialiased">
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
