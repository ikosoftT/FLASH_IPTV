import type { MetadataRoute } from "next";
import { blogPosts, navLinks } from "@/lib/data";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["/", ...navLinks.map((link) => link.href)];
  const blogRoutes = blogPosts.map((post) => `/blog/${post.slug}`);

  return [...baseRoutes, ...blogRoutes].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7
  }));
}
