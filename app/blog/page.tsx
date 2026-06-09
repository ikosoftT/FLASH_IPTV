import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { blogPosts } from "@/lib/blog-data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog - Flash 4K IPTV",
  description: "Read Flash 4K IPTV guides for World Cup 2026 IPTV trends, 4K sports streaming, low latency, EPG setup, buffering fixes, and device planning.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <section className="section-pad">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
            <Badge>Blog</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold text-white sm:text-6xl">
            World Cup 2026 IPTV trends, guides, and match-day advice
            </h1>
            <p className="mt-5 text-lg leading-8 text-platinum/70">
            Practical articles for World Cup 2026 streaming, Smart TV, Fire Stick, Android TV, EPG setup, low latency, buffering fixes, 4K sports, and choosing the right package.
            </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full overflow-hidden p-0">
                <ImageWithFallback
                  src={post.coverImage}
                  alt={`${post.title} IPTV article cover`}
                  className="h-44"
                  fallbackClassName="bg-gradient-to-br from-field/35 via-electric/24 to-champagne/28"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                >
                  <div className="flex h-full items-end p-5">
                    <span className="rounded-full bg-ink/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                </ImageWithFallback>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-platinum/50">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-champagne">{post.category}</span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-5 text-2xl font-semibold text-white transition group-hover:text-champagne">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-platinum/62">{post.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-champagne">
                    Read guide
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
