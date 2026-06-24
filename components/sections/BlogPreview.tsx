import Link from "next/link";
import { ArrowRight, Clock, CalendarDays } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { FadeUp } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BlogPreview() {
  return (
    <section className="section-pad bg-[#080d18] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <Container>
        <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="Inside The Stream"
            title="Latest from our editorial desk"
            description="Expert guides, streaming tips, and industry trends to help you get the most out of your 4K IPTV setup."
          />
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-champagne hover:text-white transition-colors shrink-0 mb-4 md:mb-8">
            View all articles
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </FadeUp>
        
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post, index) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                <Card className="h-full flex flex-col overflow-hidden p-0 border-white/10 bg-black/40 hover:bg-black/60 transition-all duration-500 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  <div className="relative overflow-hidden h-52 sm:h-60">
                    <ImageWithFallback
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      fallbackClassName="bg-gradient-to-br from-ink via-black to-ink"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-champagne/90 text-ink px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    <div className="flex items-center gap-4 text-xs font-medium text-platinum/50 mb-4">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime} min read
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug group-hover:text-champagne transition-colors duration-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-platinum/70 line-clamp-3 mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-sm font-bold text-platinum group-hover:text-white transition-colors">
                        Read full story
                      </span>
                      <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-champagne group-hover:text-ink transition-all duration-300">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
