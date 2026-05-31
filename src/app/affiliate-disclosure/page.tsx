import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Affiliate Disclosure | HealthPans",
  description: "How HealthPans earns affiliate commissions and how that affects our reviews.",
  alternates: { canonical: "https://healthpans.com/affiliate-disclosure" },
};
export default function AffiliateDisclosurePage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-8">Affiliate Disclosure</h1>
        <div className="prose">
          <p><strong>Last updated: January 2026</strong></p>
          <p>HealthPans.com participates in affiliate marketing programs. This means we may earn a commission when you click on links to products and make a purchase. This comes at no extra cost to you.</p>
          <h2>Programs We Participate In</h2>
          <ul>
            <li><strong>Amazon Associates:</strong> As an Amazon Associate, we earn from qualifying purchases made through our Amazon links.</li>
            <li><strong>AWIN Network:</strong> We partner with brands via AWIN for additional affiliate commissions.</li>
          </ul>
          <h2>How This Affects Our Reviews</h2>
          <p>It doesn't. Our editorial process is completely independent from our affiliate relationships. Products are ranked purely based on safety credentials, performance, build quality, and value for money. A brand cannot pay to be featured or improve its ranking. We link only to products we would genuinely recommend to friends and family.</p>
          <h2>FTC Compliance</h2>
          <p>In accordance with FTC guidelines, we disclose our affiliate relationships on every page where affiliate links appear. The disclosure statement that reads "As an Amazon Associate and AWIN affiliate partner, we earn from qualifying purchases" appears in the footer of every page on this site.</p>
          <h2>Questions?</h2>
          <p>If you have questions about our affiliate relationships, please <a href="/contact">contact us</a>.</p>
        </div>
      </div>
    </section>
  );
}
