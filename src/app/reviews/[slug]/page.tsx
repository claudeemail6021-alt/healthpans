import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Check, X, ShieldCheck, ChevronRight } from "lucide-react";
import { getProductBySlug, getAllProducts } from "@/data/products";
import StarRating from "@/components/StarRating";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import { amazonLink } from "@/lib/utils";

export async function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} Review (${new Date().getFullYear()}) — Is It Really Non-Toxic?`,
    description: `In-depth review of the ${product.name}. Safety profile, performance testing, pros and cons, and who it's best for. Rating: ${product.rating}/5.`,
    alternates: { canonical: `https://healthpans.com/reviews/${slug}` },
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const allProducts = getAllProducts();
  const related = allProducts.filter((p) => p.slug !== slug && p.material === product.material).slice(0, 3);
  const fallbackRelated = allProducts.filter((p) => p.slug !== slug).slice(0, 3);

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${product.name} Review`,
    reviewBody: product.shortDescription,
    reviewRating: { "@type": "Rating", ratingValue: product.rating, bestRating: 5, worstRating: 1 },
    author: { "@type": "Organization", name: "HealthPans Editorial Team" },
    itemReviewed: {
      "@type": "Product",
      name: product.name,
      brand: { "@type": "Brand", name: product.brand },
      offers: { "@type": "Offer", price: product.price.replace("$",""), priceCurrency: "USD" },
      aggregateRating: { "@type": "AggregateRating", ratingValue: product.rating, reviewCount: product.reviewCount, bestRating: 5 },
    },
  };

  const faqJsonLd = product.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } : null;

  const relatedProducts = related.length > 0 ? related : fallbackRelated;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      {/* Breadcrumb */}
      <div className="bg-neutral-50 border-b border-neutral-100">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-sm text-neutral-500">
            <Link href="/" className="hover:text-terracotta-500">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/top-10" className="hover:text-terracotta-500">Reviews</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-neutral-700 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-terracotta-500">{product.material}</span>
                {product.rank && <span className="text-xs bg-terracotta-50 text-terracotta-600 px-2 py-0.5 rounded-full font-semibold">#{product.rank} Overall</span>}
              </div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-neutral-900 mb-4">{product.name} Review</h1>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <StarRating rating={product.rating} reviewCount={product.reviewCount} size="lg" />
                <span className="inline-flex items-center gap-1 text-sm text-green-700 font-medium bg-green-50 px-3 py-1 rounded-full">
                  <ShieldCheck className="h-4 w-4" />{product.safetyProfile}
                </span>
              </div>
              <AffiliateDisclosure />
              <p className="text-lg text-neutral-700 leading-relaxed my-6">{product.shortDescription}</p>

              {/* Compatibility */}
              <div className="mb-8">
                <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">Compatible With</h2>
                <div className="flex flex-wrap gap-2">
                  {product.compatibility.map((c) => <span key={c} className="px-3 py-1 bg-sage-50 text-sage-700 rounded-full text-sm font-medium">{c}</span>)}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-green-50 rounded-2xl">
                  <h2 className="font-semibold text-green-800 mb-3 flex items-center gap-2"><Check className="h-5 w-5"/>Pros</h2>
                  {product.pros.map((pro, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-neutral-700 mb-2">
                      <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />{pro}
                    </div>
                  ))}
                </div>
                <div className="p-5 bg-red-50 rounded-2xl">
                  <h2 className="font-semibold text-red-700 mb-3 flex items-center gap-2"><X className="h-5 w-5"/>Cons</h2>
                  {product.cons.map((con, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-neutral-700 mb-2">
                      <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />{con}
                    </div>
                  ))}
                </div>
              </div>

              {/* Safety Breakdown */}
              {product.featureBreakdown && Object.keys(product.featureBreakdown).length > 0 && (
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">Safety & Material Breakdown</h2>
                <div className="space-y-3">
                  {Object.entries(product.featureBreakdown).map(([key, val]) => (
                    <div key={key} className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                      <span className="font-semibold text-neutral-900 text-sm">{key}</span>
                      <p className="text-sm text-neutral-600 mt-1">{val}</p>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {/* Who it's for */}
              <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 bg-terracotta-50 rounded-2xl">
                  <h3 className="font-bold text-terracotta-700 mb-2">Best For</h3>
                  <p className="text-sm text-neutral-700">{product.whoItsFor}</p>
                </div>
                <div className="p-5 bg-neutral-100 rounded-2xl">
                  <h3 className="font-bold text-neutral-600 mb-2">Not Ideal For</h3>
                  <p className="text-sm text-neutral-700">{product.notFor}</p>
                </div>
              </div>

              {/* How to Use */}
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-4">How to Use & Care</h2>
                <p className="text-neutral-700 leading-relaxed">{product.howToUse}</p>
              </div>

              {/* FAQ */}
              {product.faq.length > 0 && (
                <div className="mb-8">
                  <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {product.faq.map((f, i) => (
                      <div key={i} className="p-5 bg-neutral-50 rounded-xl border border-neutral-100">
                        <h3 className="font-semibold text-neutral-900 mb-2">{f.question}</h3>
                        <p className="text-sm text-neutral-700 leading-relaxed">{f.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Buy Box */}
                <div className="bg-white rounded-2xl border border-neutral-200 shadow-card p-6">
                  <div className="h-32 bg-gradient-to-br from-terracotta-50 to-sage-50 rounded-xl mb-4 flex items-center justify-center">
                    <span className="font-serif text-neutral-500 font-bold">{product.brand}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-neutral-900 mb-1">{product.name}</h3>
                  <StarRating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
                  <div className="my-4 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-neutral-900">{product.price}</span>
                    <span className="text-sm text-neutral-400">{product.priceRange}</span>
                  </div>
                  <a href={amazonLink(product.asin)} target="_blank" rel="noopener noreferrer nofollow"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-terracotta-500 text-white font-bold rounded-full hover:bg-terracotta-600 transition-colors mb-3">
                    Buy on Amazon <ExternalLink className="h-4 w-4" />
                  </a>
                  <p className="text-xs text-neutral-400 text-center">Price checked regularly. May vary.</p>
                </div>

                {/* Quick specs */}
                <div className="bg-sage-50 rounded-2xl p-5">
                  <h3 className="font-bold text-neutral-900 mb-4">Quick Specs</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-neutral-500">Material</span><span className="font-medium text-neutral-800">{product.material}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-500">Pan Type</span><span className="font-medium text-neutral-800">{product.panType}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-500">Safety</span><span className="font-medium text-green-700">{product.safetyProfile}</span></div>
                    <div className="flex justify-between"><span className="text-neutral-500">Price Range</span><span className="font-medium text-neutral-800">{product.priceRange}</span></div>
                  </div>
                </div>

                {/* Related */}
                {relatedProducts.length > 0 && (
                  <div className="bg-white rounded-2xl border border-neutral-100 p-5">
                    <h3 className="font-bold text-neutral-900 mb-4">Similar Picks</h3>
                    <div className="space-y-3">
                      {relatedProducts.map((rp) => (
                        <Link key={rp.id} href={`/reviews/${rp.slug}`} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-xl hover:bg-terracotta-50 transition-colors">
                          <div className="w-10 h-10 bg-gradient-to-br from-terracotta-100 to-sage-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-bold text-neutral-500">#{rp.rank}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-neutral-900 truncate">{rp.name}</p>
                            <StarRating rating={rp.rating} size="sm" showNumber={false} />
                          </div>
                          <span className="text-xs font-bold text-neutral-700 flex-shrink-0">{rp.price}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
