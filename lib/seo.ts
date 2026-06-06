import type { Metadata } from "next";
import { brand } from "./data";
import { absoluteUrl } from "./utils";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: SeoInput): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl("/opengraph-image");

  return {
    title,
    description,
    metadataBase: new URL("https://flash4kiptv.it.com"),
    alternates: {
      canonical: url
    },
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/imgs/logo-mark.svg", type: "image/svg+xml" }
      ],
      shortcut: "/favicon.svg",
      apple: "/imgs/logo-mark.svg"
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.name,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${brand.name} premium IPTV social preview`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl]
    }
  };
}
