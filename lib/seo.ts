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

  return {
    title,
    description,
    metadataBase: new URL("https://flash4kiptv.example"),
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: brand.name,
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${brand.name} premium sports IPTV interface`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
