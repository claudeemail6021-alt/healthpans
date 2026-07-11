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

      {/* Buying Guide */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom max-w-4xl">
          <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-8 text-center">
            How to Choose Non-Toxic Cookware
          </h2>
          <div className="space-y-6">

            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 text-lg mb-3">1. &ldquo;PFOA-Free&rdquo; Is Not Enough — Here&apos;s What to Look For Instead</h3>
              <p className="text-neutral-700 leading-relaxed">
                The most important piece of cookware safety knowledge in 2026: &ldquo;PFOA-free&rdquo; means one specific chemical was removed from the manufacturing process. It does not mean the pan is free of PTFE (the actual non-stick coating), other PFAS chemicals (there are over 12,000 in the class), lead, cadmium, or any other concerning substances. PFOA was voluntarily phased out by manufacturers in 2013 under EPA pressure — so virtually all non-stick cookware today is PFOA-free by default. The marketing claim is nearly meaningless. What to look for instead: &ldquo;PFAS-free&rdquo; (the full chemical class), &ldquo;PTFE-free&rdquo; (the actual non-stick polymer), third-party testing certificates (Intertek, SGS), or materials with no coatings whatsoever (cast iron, carbon steel, stainless steel).
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 text-lg mb-3">2. The Material Guide: What Each Type Does Best</h3>
              <p className="text-neutral-700 leading-relaxed">
                No single cookware material does everything well. <strong>Cast iron</strong> (Lodge, Field Company) excels at searing, oven use, and campfire cooking — zero coatings, improves with age, lasts generations. <strong>Carbon steel</strong> (Made In, Lodge) is lighter than cast iron with similar non-toxic credentials, preferred in professional kitchens for stovetop sautéing. <strong>Enameled cast iron</strong> (Lodge, Le Creuset, Staub) brings cast iron&apos;s heat retention with a porcelain coating that&apos;s non-reactive with acidic foods — ideal for braises, soups, and Dutch oven use. <strong>Ceramic non-stick</strong> (GreenPan, Caraway) provides familiar non-stick performance without PFAS — at the cost of a coating that degrades over 2–4 years. <strong>Stainless steel</strong> (All-Clad, Made In) has zero coatings, lasts forever, and produces the best sear — but requires technique to prevent sticking. The best non-toxic kitchen uses 2–3 materials for different jobs rather than seeking one pan that does everything.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 text-lg mb-3">3. Lifetime Pans vs. Replacement Pans: The Real Cost Calculation</h3>
              <p className="text-neutral-700 leading-relaxed">
                Non-toxic cookware divides into two fundamentally different economic models. Lifetime pans — cast iron, carbon steel, stainless steel, enameled cast iron — cost more upfront but never need replacing. A $30 Lodge cast iron skillet or a $165 All-Clad stainless pan, properly cared for, can realistically last 50+ years. Replacement pans — ceramic non-stick — cost less upfront but need replacement every 2–4 years as the coating degrades. Over 10 years, a quality ceramic set purchased twice costs more than a lifetime cast iron and stainless setup purchased once. If you&apos;re making a long-term investment, cast iron and stainless steel are the economically rational choices. Ceramic non-stick makes sense as a transitional option while learning new cooking techniques, or for specific tasks (eggs, delicate fish) where you want genuine non-stick performance without PFAS.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 text-lg mb-3">4. Making the Switch from Non-Stick: The Transition Guide</h3>
              <p className="text-neutral-700 leading-relaxed">
                The biggest obstacle to switching from Teflon to non-toxic cookware is technique. Most people who try cast iron or stainless and conclude it &ldquo;doesn&apos;t work&rdquo; are applying non-stick habits to materials that require different approaches. The key adjustments: preheat properly (cast iron needs 5–8 minutes over medium, stainless needs 2–3 minutes until the water drop test confirms readiness). Use oil before adding food — non-toxic pans require oil for every cooking session. Don&apos;t force food that sticks — a proper sear on stainless will release naturally when done. For eggs and delicate fish where you genuinely need non-stick performance, keep one ceramic pan for those tasks while using cast iron and stainless for everything else. See our guide: <Link href="/blog/cast-iron-beginner-guide" className="text-terracotta-600 underline">The Complete Beginner&apos;s Guide to Cast Iron →</Link>
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 p-6">
              <h3 className="font-bold text-neutral-900 text-lg mb-3">5. What to Buy First (If Starting From Scratch)</h3>
              <p className="text-neutral-700 leading-relaxed">
                If you&apos;re replacing your cookware and can only buy one or two pieces to start, this is the sequence we recommend. First: a <strong>12-inch Lodge cast iron skillet ($30)</strong> — handles 80% of stovetop cooking tasks, zero coatings, completely non-toxic, works on all heat sources including induction. Second: a <strong>GreenPan ceramic non-stick fry pan ($45–60)</strong> for eggs and delicate fish where you want non-stick performance without PFAS. Third, when budget allows: a <strong>Lodge or Le Creuset enameled Dutch oven</strong> for soups, braises, and one-pot meals. This three-piece setup covers virtually every cooking need at every price point, with complete PFAS-free safety across all three.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Frequently Asked Questions</h2>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Is all non-stick cookware toxic?", acceptedAnswer: { "@type": "Answer", text: "Traditional non-stick cookware coated with PTFE (Teflon) is generally safe when used correctly at normal cooking temperatures. Problems occur when the coating is overheated above 500°F, scratched, or worn. Modern PFAS-free ceramic alternatives (GreenPan Thermolon, Caraway) eliminate the fluoropolymer coating entirely. Cookware with no coatings at all — cast iron, carbon steel, stainless steel — has zero coating-related safety concerns." } },
                { "@type": "Question", name: "What is the safest cookware material?", acceptedAnswer: { "@type": "Answer", text: "Cast iron and carbon steel have the simplest and most inert composition — just iron (and a small percentage of carbon in carbon steel). They have no coatings, no PFAS, and have been used safely for centuries. 100% ceramic (like Xtrema) is technically the most chemically inert option, testing below detectable limits for all heavy metals. Stainless steel (18/10) is completely non-reactive for virtually all cooking." } },
                { "@type": "Question", name: "Does ceramic cookware last as long as cast iron?", acceptedAnswer: { "@type": "Answer", text: "No — ceramic coatings degrade over 2–4 years with regular use, while cast iron and stainless steel last indefinitely with proper care. Ceramic's advantage is familiar non-stick performance without PFAS. Cast iron's advantage is permanence — it improves with use and never wears out. The choice depends on whether you prioritize non-stick performance (ceramic) or lifetime durability and zero coating concerns (cast iron/stainless)." } },
                { "@type": "Question", name: "Can I use metal utensils on non-toxic cookware?", acceptedAnswer: { "@type": "Answer", text: "On cast iron, carbon steel, and stainless steel — yes, metal utensils are perfectly safe. On ceramic non-stick, metal utensils scratch and degrade the coating, significantly shortening its lifespan. On enameled cast iron, metal utensils can chip the enamel over time — silicone or wooden utensils are preferred. Always match your utensil material to the cooking surface to maximize longevity." } },
              ]
            }) }} />
            <div className="space-y-4">
              {[
                { q: "Is all non-stick cookware toxic?", a: "Traditional non-stick coated with PTFE (Teflon) is generally safe at normal cooking temperatures. Problems occur when overheated above 500°F or when the coating is scratched and degraded. Modern PFAS-free ceramic alternatives (GreenPan Thermolon, Caraway) eliminate the fluoropolymer entirely. Cookware with no coatings — cast iron, carbon steel, stainless steel — has zero coating-related safety concerns." },
                { q: "What is the safest cookware material?", a: "Cast iron and carbon steel have the simplest composition — just iron, no coatings, no PFAS, used safely for centuries. 100% ceramic (Xtrema) is technically the most chemically inert, testing below detectable limits for all heavy metals. Stainless steel (18/10) is completely non-reactive for virtually all cooking. All three are excellent choices." },
                { q: "Does ceramic cookware last as long as cast iron?", a: "No — ceramic coatings degrade over 2–4 years with regular use. Cast iron and stainless steel last indefinitely with proper care. Ceramic's advantage is non-stick performance without PFAS; cast iron's advantage is permanence. The right choice depends on whether you prioritize non-stick convenience (ceramic) or lifetime durability (cast iron/stainless)." },
                { q: "Can I use metal utensils on non-toxic cookware?", a: "On cast iron, carbon steel, and stainless steel — yes, metal utensils are completely safe. On ceramic non-stick, metal utensils scratch and degrade the coating, shortening its lifespan significantly. On enameled cast iron, metal utensils can chip the enamel over time. Match your utensil choice to the cooking surface material." },
              ].map((item, i) => (
                <details key={i} className="bg-white border border-neutral-200 rounded-xl p-5 group">
                  <summary className="font-semibold text-neutral-900 cursor-pointer list-none flex justify-between items-center">
                    {item.q}
                    <span className="text-terracotta-500 text-lg group-open:rotate-180 transition-transform ml-2 flex-shrink-0">▾</span>
                  </summary>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Related reading */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-6">Related Guides</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { href: "/blog/is-your-cookware-toxic", title: "Is Your Cookware Toxic? 7 Warning Signs" },
                { href: "/blog/cast-iron-beginner-guide", title: "The Complete Beginner's Guide to Cast Iron" },
                { href: "/blog/cast-iron-vs-ceramic-vs-stainless", title: "Cast Iron vs Ceramic vs Stainless: Full Comparison" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block p-4 rounded-xl border border-neutral-200 hover:border-terracotta-300 hover:bg-terracotta-50 transition-colors">
                  <p className="text-sm font-semibold text-neutral-800">{link.title}</p>
                  <p className="text-xs text-terracotta-600 mt-1">Read guide →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
