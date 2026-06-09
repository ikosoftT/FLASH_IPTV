import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { blogPosts, type BlogPost, type BlogSection } from "@/lib/blog-data";
import { createMetadata } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { absoluteUrl } from "@/lib/utils";

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
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`
  });
}

function ArticleTable({ table }: { table: NonNullable<BlogSection["table"]> }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10">
      <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
        <thead className="bg-white/[0.07] text-champagne">
          <tr>
            {table.headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          {table.rows.map((row) => (
            <tr key={row.join("|")} className="text-platinum/70">
              {row.map((cell) => (
                <td key={cell} className="px-4 py-3 align-top leading-6">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleSection({ section }: { section: BlogSection }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-lg leading-8 text-platinum/70">
          {paragraph}
        </p>
      ))}
      {section.table ? <ArticleTable table={section.table} /> : null}
      {section.steps ? (
        <ol className="mt-5 space-y-3">
          {section.steps.map((step, index) => (
            <li key={step} className="flex gap-4 text-lg leading-8 text-platinum/70">
              <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-champagne text-sm font-bold text-ink">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      ) : null}
      {section.bullets ? (
        <ul className="mt-5 space-y-3">
          {section.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-lg leading-8 text-platinum/70">
              <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-field" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {section.subsections?.map((item) => (
        <div key={item.heading} className="mt-6">
          <h3 className="text-xl font-semibold text-white">{item.heading}</h3>
          <p className="mt-3 text-lg leading-8 text-platinum/70">{item.body}</p>
        </div>
      ))}
    </section>
  );
}

function blogJsonLd(post: BlogPost) {
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.updatedDate,
    author: {
      "@type": "Organization",
      name: post.author
    },
    publisher: {
      "@type": "Organization",
      name: "Flash 4K IPTV"
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.h1, item: absoluteUrl(`/blog/${post.slug}`) }
    ]
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  const firstSteps = post.sections.flatMap((section) => section.steps ?? []);
  const howTo =
    firstSteps.length > 0 && post.schemaRecommendation.some((item) => item.includes("HowTo"))
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: post.h1,
          description: post.metaDescription,
          step: firstSteps.slice(0, 12).map((step, index) => ({
            "@type": "HowToStep",
            position: index + 1,
            text: step
          }))
        }
      : null;

  return howTo ? [article, breadcrumb, faq, howTo] : [article, breadcrumb, faq];
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd(post)) }} />
      <article className="section-pad">
        <Container className="max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-champagne hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to blog
          </Link>
          <header className="mt-8">
            <Badge>{post.category}</Badge>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">{post.h1}</h1>
            <p className="mt-5 text-lg leading-8 text-platinum/70">{post.intro}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-platinum/52">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span>Updated {post.updatedDate}</span>
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
            {post.sections.filter((section) => section.heading !== "Current article audit").map((section) => (
              <ArticleSection key={section.heading} section={section} />
            ))}
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
            <div className="mt-5 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.045]">
              {post.faq.map((item) => (
                <details key={item.question} className="group p-5">
                  <summary className="cursor-pointer list-none text-lg font-semibold text-white">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-base leading-7 text-platinum/68">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-2xl font-semibold text-white">Final takeaway</h2>
            <p className="mt-4 text-lg leading-8 text-platinum/70">{post.finalTakeaway}</p>
            <Button href={post.cta.href} className="mt-6">
              {post.cta.label}
            </Button>
            <p className="mt-3 text-sm leading-6 text-platinum/55">{post.cta.text}</p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-white">Related IPTV guides</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {post.internalLinks.slice(0, 8).map((link) => (
                <Link
                  key={`${link.href}-${link.anchor}`}
                  href={link.href}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm leading-6 text-platinum/70 transition hover:border-champagne/45 hover:text-white"
                >
                  <span className="font-semibold text-champagne">{link.anchor}</span>
                  <span className="mt-1 block text-platinum/52">Related setup and planning guide</span>
                </Link>
              ))}
            </div>
          </section>

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
