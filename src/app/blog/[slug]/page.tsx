import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ChevronRight, Calendar, Clock, User } from "lucide-react";
import { getBlogPost, getAllBlogSlugs } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: `https://healthpans.com/blog/${slug}` },
    openGraph: { title: post.frontmatter.title, description: post.frontmatter.description, type: "article", publishedTime: post.frontmatter.date },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    datePublished: post.frontmatter.date,
    author: { "@type": "Person", name: post.frontmatter.author },
    publisher: { "@type": "Organization", name: "HealthPans", url: "https://healthpans.com" },
    url: `https://healthpans.com/blog/${slug}`,
  };


  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": frontmatter.title,
    "description": frontmatter.description,
    "datePublished": frontmatter.date,
    "dateModified": frontmatter.date,
    "author": {
      "@type": "Organization",
      "name": frontmatter.author || "HealthPans Editorial Team",
      "url": "https://healthpans.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HealthPans.com",
      "url": "https://healthpans.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://healthpans.com/og-default.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://healthpans.com/blog/${params.slug}`
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <div className="bg-neutral-50 border-b border-neutral-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-neutral-500">
            <Link href="/" className="hover:text-terracotta-500">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blog" className="hover:text-terracotta-500">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-700 font-medium truncate max-w-xs">{post.frontmatter.title}</span>
          </nav>
        </div>
      </div>
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-terracotta-500">{post.frontmatter.category}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-4">{post.frontmatter.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-8 pb-8 border-b border-neutral-100">
            <span className="flex items-center gap-1"><User className="h-4 w-4"/>{post.frontmatter.author}</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4"/>{formatDate(post.frontmatter.date)}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4"/>{post.frontmatter.readTime}</span>
          </div>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="prose">
            <MDXRemote source={post.content} />
          </article>
          <div className="mt-12 pt-8 border-t border-neutral-100">
            <Link href="/blog" className="text-terracotta-500 font-semibold hover:text-terracotta-600">← Back to all articles</Link>
          </div>
        </div>
      </section>
    </>
  );
}
