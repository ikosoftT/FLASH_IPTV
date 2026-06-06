import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { blogPosts } from "@/lib/data";
import { createMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return createMetadata({
      title: "Article Not Found - Flash 4K IPTV",
      description: "The requested Flash 4K IPTV article could not be found.",
      path: "/blog"
    });
  }

  return createMetadata({
    title: `${post.title} - Flash 4K IPTV`,
    description: post.excerpt,
    path: `/blog/${post.slug}`
  });
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article className="section-pad">
        <Container className="max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-champagne hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to blog
          </Link>
          <header className="mt-8">
            <Badge>{post.category}</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">{post.title}</h1>
            <p className="mt-5 text-lg leading-8 text-platinum/70">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-platinum/52">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </header>
          <ImageWithFallback
            src={post.coverImage}
            alt={`${post.title} IPTV guide cover`}
            className="mt-10 h-72 rounded-[2rem] border border-white/10"
            fallbackClassName="bg-gradient-to-br from-field/30 via-electric/24 to-champagne/24"
            sizes="(max-width: 896px) 100vw, 896px"
          >
            <div className="flex h-full items-end p-8">
              <span className="rounded-full bg-ink/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Flash 4K IPTV Guide
              </span>
            </div>
          </ImageWithFallback>
          <div className="mt-12 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
                <p className="mt-4 text-lg leading-8 text-platinum/70">{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-12 rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-6">
            <h2 className="text-2xl font-semibold text-white">Need setup help from support?</h2>
            <p className="mt-3 text-sm leading-7 text-platinum/62">
              Send your device name, app name, and plan question to Flash 4K IPTV on WhatsApp. Support can help before match time.
            </p>
            <Button href={whatsappUrl()} className="mt-6">
              Message WhatsApp Support
            </Button>
          </div>
        </Container>
      </article>
      <FinalCTA />
    </>
  );
}
