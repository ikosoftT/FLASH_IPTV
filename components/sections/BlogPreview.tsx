import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { FadeUp } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BlogPreview() {
  return (
    <section className="section-pad bg-white/[0.025]">
      <Container>
        <FadeUp>
          <SectionHeading
            eyebrow="World Cup IPTV guides"
            title="Fresh match-day advice for World Cup 2026"
            description="Practical IPTV articles for 4K sports, low latency, Smart TV, Fire Stick, EPG setup, buffering fixes, and choosing the right package."
          />
        </FadeUp>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full overflow-hidden p-0">
                <ImageWithFallback
                  src={post.coverImage}
                  alt={`${post.title} IPTV guide cover`}
                  className="h-36"
                  fallbackClassName="bg-gradient-to-br from-field/35 via-electric/25 to-champagne/25"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                >
                  <div className="flex h-full items-end p-4">
                    <span className="rounded-full bg-ink/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {post.category}
                    </span>
                  </div>
                </ImageWithFallback>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-champagne">{post.category}</p>
                  <h3 className="mt-4 text-xl font-semibold text-white transition group-hover:text-champagne">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-platinum/62">{post.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-champagne">
                    Read guide {index === 0 ? "first" : ""}
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
