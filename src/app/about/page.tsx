import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About HealthPans — Our Mission & Review Process",
  description: "Learn how HealthPans independently tests and reviews non-toxic cookware. Our team, our process, and our commitment to unbiased safety-first recommendations.",
  alternates: { canonical: "https://healthpans.com/about" },
};

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">About HealthPans</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">We started HealthPans with a single question: <em>which pans are actually safe to cook with?</em> The answer turned out to be more complicated — and more important — than we expected.</p>
        </div>

        <div className="prose mb-16">
          <h2>Why We Built This</h2>
          <p>In 2022, our founder read a study linking PFAS ("forever chemicals") in non-stick cookware to hormonal disruption, immune system suppression, and increased cancer risk. She threw out every non-stick pan she owned that same week. But finding a trustworthy replacement was surprisingly hard — marketing claims were confusing, "PFAS-free" labels were inconsistent, and most review sites were packed with undisclosed affiliate bias.</p>
          <p>HealthPans exists to cut through that noise. We research the science, test the products, and give you straightforward, safety-first recommendations — with full transparency about how we make money (affiliate commissions from links we'd recommend anyway).</p>

          <h2>Our Review Process</h2>
          <p>Every pan we feature goes through a multi-step evaluation:</p>
          <ul>
            <li><strong>Safety verification</strong> — We review available third-party safety data and manufacturer certifications (PFAS-free, PTFE-free, lead-free, cadmium-free). We cross-reference claims against independent lab testing when available.</li>
            <li><strong>Material analysis</strong> — We evaluate the coating technology, base material, and long-term durability data for each product.</li>
            <li><strong>Performance testing</strong> — We assess heat distribution, non-stick performance, ease of cleaning, and compatibility with different heat sources.</li>
            <li><strong>Value assessment</strong> — We compare price against durability, performance, and available alternatives at each price tier.</li>
            <li><strong>User feedback aggregation</strong> — We synthesize verified customer reviews across multiple platforms to capture real-world experience.</li>
          </ul>

          <h2>Our Commitment to Independence</h2>
          <p>HealthPans is reader-supported. We earn commissions from affiliate links — but this never influences which products we recommend or how we rank them. Products are evaluated purely on safety, performance, and value. We do not accept sponsored reviews, free products in exchange for coverage, or paid placements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: ShieldCheck, title: "Safety First", desc: "Every recommendation is verified PFAS-free and cross-referenced against available toxicology data." },
            { icon: FlaskConical, title: "Science-Backed", desc: "We cite peer-reviewed research, not marketing materials. Our ingredient and material analyses are grounded in chemistry." },
            { icon: Award, title: "No Paid Placements", desc: "Rankings are never for sale. A brand cannot pay to be featured or improve its ranking on HealthPans." },
            { icon: Heart, title: "Reader-Funded", desc: "Affiliate commissions from purchases you make keep us independent. We only link to products we'd recommend to family." },
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
      </div>
    </section>
  );
}
