import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Check, X, ShieldCheck } from "lucide-react";
import { getAllProducts } from "@/data/products";
import StarRating from "@/components/StarRating";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { amazonLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "10 Best Non-Toxic, PFAS-Free Cookware Sets & Pans (2026)",
  description: "Our expert-ranked top 10 non-toxic cookware picks for 2026. Tested and verified PFAS-free — cast iron, ceramic, carbon steel, and stainless options.",
  alternates: { canonical: "https://healthpans.com/top-10" },
};

export default function Top10Page() {
  const products = getAllProducts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "10 Best Non-Toxic PFAS-Free Cookware 2026",
    url: "https://healthpans.com/top-10",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `https://healthpans.com/reviews/${p.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="section-padding bg-terracotta-50">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-1.5 bg-terracotta-100 text-terracotta-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4">2026 Rankings</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">10 Best Non-Toxic Cookware Picks</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-4">Every pan on this list is verified PFAS-free. We tested for safety, durability, heat distribution, and real-world cooking performance.</p>
          <AffiliateDisclosure />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {products.map((p) => (
              <article key={p.id} className="rounded-2xl border border-neutral-200 overflow-hidden shadow-card">
                <div className={`px-6 py-4 flex items-center justify-between ${p.rank === 1 ? "bg-terracotta-500 text-white" : "bg-terracotta-50"}`}>
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-serif font-bold ${p.rank === 1 ? "text-white" : "text-terracotta-500"}`}>#{p.rank}</span>
                    <div>
                      <h2 className={`font-serif text-xl font-bold ${p.rank === 1 ? "text-white" : "text-neutral-900"}`}>{p.name}</h2>
                      <span className={`text-sm ${p.rank === 1 ? "text-white/80" : "text-neutral-500"}`}>{p.brand} · {p.material}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`text-xl font-bold ${p.rank === 1 ? "text-white" : "text-neutral-900"}`}>{p.price}</span>
                    <span className={`block text-xs ${p.rank === 1 ? "text-white/70" : "text-neutral-400"}`}>{p.priceRange}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <StarRating rating={p.rating} reviewCount={p.reviewCount} size="sm" />
                        <span className="inline-flex items-center gap-1 text-xs text-green-700 font-medium bg-green-50 px-2 py-0.5 rounded-full">
                          <ShieldCheck className="h-3 w-3" />{p.safetyProfile}
                        </span>
                      </div>
                      <p className="text-neutral-700 leading-relaxed mb-4">{p.shortDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {p.compatibility.map((c) => (
                          <span key={c} className="text-xs bg-sage-50 text-sage-700 px-2 py-0.5 rounded-full">{c}</span>
                        ))}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">Pros</h4>
                          {p.pros.map((pro, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-neutral-700 mb-1">
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />{pro}
                            </div>
                          ))}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-red-500 uppercase tracking-wide mb-2">Cons</h4>
                          {p.cons.map((con, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-neutral-700 mb-1">
                              <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />{con}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-48 flex flex-col gap-3">
                      <Link href={`/reviews/${p.slug}`} className="block text-center px-4 py-2.5 border-2 border-terracotta-500 text-terracotta-500 font-semibold rounded-full hover:bg-terracotta-50 transition-colors text-sm">
                        Full Review
                      </Link>
                      <a href={amazonLink(p.asin)} target="_blank" rel="noopener noreferrer nofollow"
                        className="flex items-center justify-center gap-2 px-4 py-2.5 bg-terracotta-500 text-white font-bold rounded-full hover:bg-terracotta-600 transition-colors text-sm">
                        Buy on Amazon <ExternalLink className="h-4 w-4" />
                      </a>
                      <p className="text-xs text-neutral-400 text-center">Price may vary. Check for current deals.</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
