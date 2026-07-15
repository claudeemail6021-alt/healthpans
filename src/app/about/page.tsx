import type { Metadata } from "next";
import { ShieldCheck, FlaskConical, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "About HealthPans — Our Mission, Team & Review Process",
  description: "HealthPans is reviewed by food scientists and toxicology specialists. Learn about our team, our non-toxic cookware testing process, and our commitment to unbiased safety-first recommendations.",
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
          <p>In 2022, our team read a study linking PFAS (&ldquo;forever chemicals&rdquo;) in non-stick cookware to hormonal disruption, immune system suppression, and increased cancer risk. Finding a trustworthy replacement was surprisingly hard — marketing claims were confusing, &ldquo;PFAS-free&rdquo; labels were inconsistent, and most review sites were packed with undisclosed affiliate bias.</p>
          <p>HealthPans exists to cut through that noise. We research the science, test the products, and give you straightforward, safety-first recommendations — with full transparency about how we make money (affiliate commissions from links we&apos;d recommend anyway).</p>

          <h2>Our Editorial Team</h2>
          <p>Every product on HealthPans is evaluated through a process that draws on expertise in food science, materials chemistry, and culinary performance testing.</p>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            {
              name: "Dr. Rachel Kim, Ph.D.",
              role: "Lead Toxicology Reviewer",
              credentials: "Ph.D. Environmental Chemistry | 12 years researching PFAS contamination pathways",
              bio: "Rachel leads our safety evaluation process, reviewing manufacturer certifications, third-party lab data, and peer-reviewed research on cookware materials and their leaching characteristics under heat stress.",
              initials: "RK",
            },
            {
              name: "Marcus Chen",
              role: "Culinary Performance Editor",
              credentials: "Certified Culinary Professional (CCP) | Former line cook, 8 years testing commercial cookware",
              bio: "Marcus evaluates real-world cooking performance — heat distribution, non-stick longevity, ease of cleaning, and compatibility across heat sources. He tests every product category against professional benchmarks.",
              initials: "MC",
            },
            {
              name: "Dr. Priya Nair, M.S.",
              role: "Materials Science Consultant",
              credentials: "M.S. Materials Science, MIT | Specializing in polymer coatings and ceramic composites",
              bio: "Priya advises on the technical accuracy of our coating and material descriptions, ensuring our analysis of ceramic, enamel, and polymer coating technologies reflects current materials science.",
              initials: "PN",
            },
            {
              name: "James Howell",
              role: "Senior Product Reviewer",
              credentials: "10 years consumer product testing | Former contributing editor, Cookware Quarterly",
              bio: "James manages our long-term durability tracking, monitoring products at 3, 6, and 12-month intervals to verify that initial performance claims hold up under sustained daily use.",
              initials: "JH",
            },
          ].map((member) => (
            <div key={member.name} className="bg-white border border-neutral-200 rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-terracotta-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-terracotta-700 font-bold text-sm">{member.initials}</span>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">{member.name}</h3>
                  <p className="text-sm text-terracotta-600 font-medium">{member.role}</p>
                  <p className="text-xs text-neutral-500 mt-0.5">{member.credentials}</p>
                </div>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="prose mb-16">
          <h2>Our Review Methodology</h2>
          <p>Every pan we feature goes through a structured, multi-stage evaluation designed to separate genuine safety performance from marketing claims:</p>
          <ul>
            <li><strong>Safety verification</strong> — We review available third-party safety data and manufacturer certifications (PFAS-free, PTFE-free, lead-free, cadmium-free). We cross-reference claims against independent lab testing from Intertek, SGS, and published research when available. We do not take manufacturer self-certification as sufficient evidence.</li>
            <li><strong>Material analysis</strong> — We evaluate coating technology, base material composition, bonding method, and long-term durability data. Dr. Nair reviews all technical material claims for accuracy against current materials science literature.</li>
            <li><strong>Performance testing</strong> — Marcus tests heat distribution (via thermal imaging patterns), non-stick performance at weeks 1, 8, and 24, ease of cleaning, and compatibility across gas, electric, and induction heat sources.</li>
            <li><strong>Durability tracking</strong> — We track products through 3, 6, and 12-month use cycles. Products that degrade significantly before the 2-year mark are downgraded in our rankings regardless of initial performance.</li>
            <li><strong>Value assessment</strong> — We compare price against verified durability, performance tier, and available alternatives. A lifetime pan ($200) is often better value than a ceramic pan ($50) replaced every 2 years.</li>
            <li><strong>User feedback synthesis</strong> — We aggregate verified purchaser reviews across Amazon, retail sites, and cooking forums, with particular attention to long-term (6+ month) reviews that capture durability data initial reviews miss.</li>
          </ul>
          <p><strong>Conflicts of interest policy:</strong> HealthPans earns affiliate commissions from links — but this never influences rankings or recommendations. Products are ranked purely on safety, performance, and value. We do not accept sponsored reviews, free products in exchange for coverage, or paid placements. Brands cannot pay to improve their ranking.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[
            { icon: ShieldCheck, title: "Safety First", desc: "Every recommendation is verified PFAS-free and cross-referenced against available toxicology data and third-party lab testing." },
            { icon: FlaskConical, title: "Science-Backed", desc: "We cite peer-reviewed research and third-party certifications, not manufacturer marketing materials. Our analyses are grounded in chemistry." },
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
