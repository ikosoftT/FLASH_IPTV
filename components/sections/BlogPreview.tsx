import Link from "next/link";
import { ArrowRight, Clock, CalendarDays, BookOpen, Eye, ChevronRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { FadeUp } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export function BlogPreview() {
  return (
    <section className="section-pad bg-midnight relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-champagne/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(216,180,106,0.04),transparent_40rem)]" />
      <div className="absolute bottom-0 right-0 w-[60rem] h-[30rem] bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.02),transparent_30rem)]" />

      <Container className="relative z-10">
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            align="left"
            eyebrow="From The Journal"
            title="Latest From Our Journal"
            description="Expert guides, streaming tips, and industry insights"
          />
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-champagne/80 hover:text-champagne transition-colors shrink-0 mb-1"
          >
            View all articles
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </FadeUp>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
            <FadeUp key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne/50 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight rounded-2xl">
                <Card className="h-full flex flex-col overflow-hidden p-0 border-white/[0.06] bg-white/[0.04] backdrop-blur-2xl hover:bg-white/[0.07] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-champagne/25 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(216,180,106,0.08)]">
                  <div className="relative overflow-hidden h-56 sm:h-64">
                    <ImageWithFallback
                      src={post.coverImage}
                      alt={`Featured image for ${post.title} article`}
                      className="h-full w-full"
                      imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                      fallbackClassName="bg-gradient-to-br from-ink via-midnight to-ink"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/40 to-transparent opacity-90" />
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center rounded-full bg-champagne/90 text-ink px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] backdrop-blur-md shadow-lg shadow-black/20">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-5 right-5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/50 text-white/70 px-3 py-1.5 text-[11px] font-medium backdrop-blur-md">
                        <BookOpen className="h-3 w-3" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6 md:p-7">
                    <div className="flex items-center gap-4 text-xs font-medium text-platinum/50 mb-4">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {post.readTime.replace("min read", "min").trim()}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-3 transition-colors duration-300 group-hover:text-champagne">
                      {post.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-platinum/65 line-clamp-3 mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-5">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-platinum/80 group-hover:text-champagne transition-colors duration-300">
                        Read article
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-platinum/40">
                        <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                        Continue
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
