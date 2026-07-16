import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, Award, Heart, BookOpen, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About HealthPans — Our Mission & Review Process",
  description: "HealthPans independently researches non-toxic cookware using published toxicology data, manufacturer certifications, and long-term user feedback. Learn about our review process and standards.",
  alternates: { canonical: "https://healthpans.com/about" },
};

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">About HealthPans</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            We started HealthPans with a single question: <em>which pans are actually safe to cook with?</em> The answer turned out to be more complicated — and more important — than we expected.
          </p>
        </div>

        <div className="prose mb-16">
          <h2>Why We Built This</h2>
          <p>In 2022, our founder read a study linking PFAS (&ldquo;forever chemicals&rdquo;) in non-stick cookware to hormonal disruption, immune system suppression, and increased cancer risk. She threw out every non-stick pan she owned that same week. But finding a trustworthy replacement was surprisingly hard — marketing claims were confusing, &ldquo;PFAS-free&rdquo; labels were inconsistent, and most review sites were packed with undisclosed affiliate bias.</p>
          <p>HealthPans exists to cut through that noise. We research the science, test the products, and give you straightforward, safety-first recommendations — with full transparency about how we make money (affiliate commissions from links we&apos;d recommend anyway).</p>
          <p>We are an independent research and editorial site. We are not affiliated with any cookware brand or manufacturer. Our editorial team researches each product category using the sources and methodology described below.</p>

          <h2>Our Review Methodology</h2>
          <p>Every cookware product we feature is evaluated through a structured process that prioritizes verified safety data over marketing claims:</p>
          <ul>
            <li>
              <strong>Safety verification from primary sources</strong> — We review third-party safety certifications (Intertek, SGS, Bureau Veritas), published peer-reviewed toxicology research, and EPA/NIH data on cookware materials and their behavior under heat. We cross-reference manufacturer claims against independent lab testing whenever available. A brand&apos;s own &ldquo;PFAS-free&rdquo; self-declaration is not sufficient evidence — we look for third-party verification.
            </li>
            <li>
              <strong>Material and coating analysis</strong> — We evaluate coating technology, base material composition, and bonding methods using published materials science literature. We distinguish between genuine PFAS-free materials (ceramic, stainless steel, cast iron, carbon steel) and marketing-rebranded products that may still contain PTFE or related compounds.
            </li>
            <li>
              <strong>Performance and durability assessment</strong> — We assess heat distribution characteristics, non-stick longevity, ease of cleaning, and compatibility with different heat sources, drawing on long-term user reviews (6+ months of verified use) that capture durability data that initial reviews miss.
            </li>
            <li>
              <strong>Value analysis</strong> — We compare price against verified durability tier. A $200 lifetime stainless pan purchased once is often better value than a $50 ceramic pan replaced every two years — we make this math explicit in our recommendations.
            </li>
            <li>
              <strong>User feedback synthesis</strong> — We aggregate verified purchaser reviews across multiple platforms, with particular attention to reviewers who describe long-term use and durability degradation over time.
            </li>
          </ul>

          <h2>Our Research Sources</h2>
          <p>Our safety evaluations draw on the following published research and regulatory guidance:</p>
          <ul>
            <li>EPA PFAS research and National PFAS Testing Strategy documentation</li>
            <li>NIH National Toxicology Program reports on fluoropolymer compounds</li>
            <li>Environmental Health Perspectives peer-reviewed toxicology research</li>
            <li>CertiPUR-US and Intertek certification databases</li>
            <li>Manufacturer-provided third-party testing certificates (where publicly available)</li>
            <li>EFSA (European Food Safety Authority) materials contact guidelines</li>
          </ul>
          <p>We cite specific studies and sources in individual product reviews and category guides where the research is directly relevant to our recommendations.</p>

          <h2>Our Commitment to Independence</h2>
          <p>HealthPans is reader-supported. We earn commissions from affiliate links — but this never influences which products we recommend or how we rank them. Products are evaluated purely on safety, performance, and value. We do not accept sponsored reviews, free products in exchange for coverage, or paid placements. Rankings are not for sale.</p>
          <p>We disclose our affiliate relationships on every page where affiliate links appear. You can read our full <Link href="/affiliate-disclosure" className="text-terracotta-600 underline">affiliate disclosure policy here</Link>.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: ShieldCheck, title: "Safety First", desc: "Every recommendation is verified PFAS-free and cross-referenced against third-party lab data and published toxicology research — not just manufacturer claims." },
            { icon: FlaskConical, title: "Primary Source Research", desc: "We cite EPA reports, NIH toxicology data, and peer-reviewed journal articles. Our safety analyses are grounded in publicly available science." },
            { icon: Award, title: "No Paid Placements", desc: "Rankings are never for sale. A brand cannot pay to be featured or improve its ranking on HealthPans. We do not accept free products in exchange for coverage." },
            { icon: Heart, title: "Reader-Funded", desc: "Affiliate commissions from purchases you make keep us independent. We only link to products we would recommend to family." },
            { icon: BookOpen, title: "Transparent Methodology", desc: "Our evaluation criteria and sources are published openly. You can see exactly how we assess every product category and what evidence we rely on." },
            { icon: LinkIcon, title: "Third-Party Verification", desc: "We prioritize products with publicly available third-party certification documents from accredited labs (Intertek, SGS, Bureau Veritas) over self-certified claims." },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-terracotta-50 rounded-2xl flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-terracotta-100 rounded-xl flex items-center justify-center">
                <item.icon className="h-6 w-6 text-terracotta-500" />
              </div>
              <div>
                <h3 className="font-bold text-neutral-900 mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-neutral-900 mb-3">Questions or Corrections?</h2>
          <p className="text-neutral-600 mb-4">
            If you believe any information on HealthPans is inaccurate, or if you have research we should incorporate into our evaluations, we welcome that feedback.
          </p>
          <Link href="/contact" className="inline-block bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold px-6 py-3 rounded-full transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
