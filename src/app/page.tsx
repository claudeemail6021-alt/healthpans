import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, FlaskConical, Award, BookOpen } from "lucide-react";
import { getAllProducts } from "@/data/products";
import { getAllBlogPosts } from "@/lib/mdx";
import ComparisonTable from "@/components/ComparisonTable";
import ProductCard from "@/components/ProductCard";
import BlogCard from "@/components/BlogCard";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Best Non-Toxic, PFAS-Free Cookware Reviews 2026 | HealthPans",
  description: "We test and rank the safest non-toxic cookware available. Expert reviews of PFAS-free ceramic, cast iron, carbon steel, and stainless steel pans.",
  alternates: { canonical: "https://healthpans.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HealthPans",
  url: "https://healthpans.com",
  description: "Independent reviews of the best non-toxic, PFAS-free cookware.",
  potentialAction: { "@type": "SearchAction", target: "https://healthpans.com/reviews/{search_term_string}", "query-input": "required name=search_term_string" },
};

const trustBadges = [
  { icon: ShieldCheck, label: "PFAS-Free Verified", desc: "We confirm every pan is free from harmful forever chemicals" },
  { icon: FlaskConical, label: "Science-Backed", desc: "Reviews grounded in toxicology and material safety research" },
  { icon: Award, label: "Independently Tested", desc: "No brand sponsorships — only honest, unbiased recommendations" },
  { icon: BookOpen, label: "Research-Based", desc: "Evaluated using published safety data, materials science, and third-party certifications" },
];

const materials = [
  { name: "Cast Iron", emoji: "🍳", desc: "Nearly indestructible, naturally non-stick when seasoned, lasts generations. Zero chemical coatings — just iron.", ideal: "Searing, frying, baking" },
  { name: "Carbon Steel", emoji: "⚙️", desc: "Lighter than cast iron with the same non-stick benefits. Loved by professional chefs worldwide.", ideal: "High-heat cooking, woks" },
  { name: "Ceramic", emoji: "🌿", desc: "Sol-gel coating — no PTFE, no PFAS. Easy cleanup and beautiful colors. Best for low-to-medium heat.", ideal: "Eggs, sautéing, everyday" },
  { name: "Stainless Steel", emoji: "✨", desc: "Fully inert, no coatings to worry about. Ideal for browning and deglazing. Built to last a lifetime.", ideal: "Searing, soups, sauces" },
];

export default async function HomePage() {
  const products = getAllProducts();
  const blogPosts = await getAllBlogPosts();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #FDF4F0 0%, #F0F5F0 50%, #FDFCF8 100%)" }}>
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-1.5 bg-terracotta-100 text-terracotta-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">Updated for 2026</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-neutral-900 leading-tight mb-6">
            Cook Safely.<br /><span className="text-terracotta-500">Without Compromise.</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-10">
            We independently review and rank the best PFAS-free, non-toxic cookware. No sponsored content — just honest research to help you cook healthier meals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/top-10" className="px-8 py-3.5 bg-terracotta-500 text-white font-bold rounded-full hover:bg-terracotta-600 transition-colors shadow-md">See Our Top 10 Picks →</Link>
            <Link href="/blog/pfas-free-cookware-guide" className="px-8 py-3.5 bg-white text-neutral-700 font-semibold rounded-full border border-neutral-200 hover:border-terracotta-300 transition-colors">What Is PFAS? Learn More</Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-neutral-500">
            <span>✓ 8 pans tested</span>
            <span>✓ 100% PFAS-free picks</span>
            <span>✓ No affiliate bias</span>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map((b) => (
              <div key={b.label} className="text-center p-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-terracotta-50 rounded-xl mb-3">
                  <b.icon className="h-6 w-6 text-terracotta-500" />
                </div>
                <h3 className="font-semibold text-sm text-neutral-900 mb-1">{b.label}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-3">2026 Non-Toxic Cookware Rankings</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">Every pan ranked is confirmed PFAS-free and independently evaluated on safety, performance, and value.</p>
          </div>
          <ComparisonTable products={products.slice(0, 8)} />
          <div className="text-center mt-8">
            <Link href="/top-10" className="inline-flex items-center gap-2 px-6 py-3 bg-terracotta-500 text-white font-semibold rounded-full hover:bg-terracotta-600 transition-colors">View Full Top 10 Rankings →</Link>
          </div>
        </div>
      </section>

      {/* Material guide */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-3">Know Your Safe Materials</h2>
            <p className="text-neutral-600 max-w-xl mx-auto">Not all "non-stick" is equal. Here's what makes each material safe — and which to choose for your cooking style.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((m) => (
              <div key={m.name} className="p-6 rounded-2xl border border-neutral-100 hover:border-terracotta-200 transition-colors bg-white">
                <span className="text-3xl mb-3 block">{m.emoji}</span>
                <h3 className="font-bold text-neutral-900 mb-2">{m.name}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-3">{m.desc}</p>
                <span className="text-xs bg-sage-50 text-sage-700 px-2 py-1 rounded-full font-medium">Best for: {m.ideal}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-3">Editor's Top Picks</h2>
            <p className="text-neutral-600">Our highest-rated non-toxic pans for every cooking style and budget.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/top-10" className="inline-flex items-center gap-2 text-terracotta-500 font-semibold hover:text-terracotta-600">View all 10 picks →</Link>
          </div>
        </div>
      </section>

      {/* Blog preview */}
      {blogPosts.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-3">Learn About Safe Cooking</h2>
              <p className="text-neutral-600">Science-backed guides to help you make the safest choices for your kitchen.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/blog" className="inline-flex items-center gap-2 text-terracotta-500 font-semibold hover:text-terracotta-600">Read all articles →</Link>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="section-padding bg-terracotta-50">
        <div className="container-custom max-w-2xl text-center">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
