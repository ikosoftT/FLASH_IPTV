import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { absoluteUrl } from "@/lib/utils";

const staticRoutes = ["/", "/channels", "/features", "/pricing", "/free-trial", "/blog", "/support"];
const lastModified = new Date("2026-06-09T00:00:00.000Z");
const sitemapSlugs = [
  "world-cup-2026-iptv-trends",
  "prepare-iptv-for-104-world-cup-matches",
  "best-devices-world-cup-2026-iptv",
  "4k-hdr-world-cup-streaming-iptv-setup",
  "low-latency-iptv-live-football",
  "world-cup-2026-time-zones-iptv-guide",
  "epg-favorites-world-cup-2026-iptv",
  "multi-screen-iptv-world-cup-households",
  "avoid-buffering-world-cup-2026",
  "smart-tv-fire-stick-world-cup-iptv",
  "travel-viewing-world-cup-2026-iptv",
  "legal-reliable-world-cup-iptv-checklist",
  "setup-iptv-on-smart-tv",
  "install-iptv-on-fire-stick",
  "setup-iptv-on-android-tv",
  "why-iptv-buffers-and-how-to-fix-it",
  "best-internet-speed-for-4k-iptv-streaming",
  "use-epg-tv-guide-with-iptv",
  "iptv-not-working-common-problems-fixes",
  "watch-iptv-on-iphone-and-ipad",
  "watch-iptv-on-windows-or-mac",
  "choose-best-iptv-plan-for-devices",
  "prepare-iptv-before-big-sports-match",
  "smart-tv-vs-fire-stick-vs-android-box-iptv"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const liveBlogSlugs = new Set(blogPosts.map((post) => post.slug));
  const blogRoutes = sitemapSlugs.filter((slug) => liveBlogSlugs.has(slug)).map((slug) => `/blog/${slug}`);

  return [...staticRoutes, ...blogRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}
