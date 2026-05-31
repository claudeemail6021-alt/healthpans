import type { Metadata } from "next";
import { getAllBlogPosts } from "@/lib/mdx";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Non-Toxic Cookware Blog — PFAS, Safe Materials & Kitchen Guides",
  description: "Science-backed articles on non-toxic cookware, PFAS dangers, material safety guides, and how to choose the safest pans for your kitchen.",
  alternates: { canonical: "https://healthpans.com/blog" },
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-4">Safe Cooking Resource Guide</h1>
          <p className="text-lg text-neutral-600 max-w-xl mx-auto">Science-backed articles on PFAS dangers, material safety, and choosing the healthiest cookware for your kitchen.</p>
        </div>
        {posts.length === 0 ? (
          <p className="text-center text-neutral-500">No articles yet — check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        )}
      </div>
    </section>
  );
}
