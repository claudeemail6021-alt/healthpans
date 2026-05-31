import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Terms of Use | HealthPans",
  description: "Terms of use for HealthPans.com — rules for using this site and its content.",
  alternates: { canonical: "https://healthpans.com/terms" },
};
export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-8">Terms of Use</h1>
        <div className="prose">
          <p><strong>Last updated: January 2026</strong></p>
          <h2>Acceptance of Terms</h2>
          <p>By using HealthPans.com, you agree to these terms. If you do not agree, please do not use this site.</p>
          <h2>Content & Accuracy</h2>
          <p>We strive to keep all product information, pricing, and safety data current and accurate. However, prices change frequently, products are updated or discontinued, and safety information evolves. Always verify information before making purchasing decisions. Nothing on this site constitutes medical or health advice.</p>
          <h2>Not Medical Advice</h2>
          <p>The content on HealthPans.com is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.</p>
          <h2>Intellectual Property</h2>
          <p>All content on HealthPans.com — including text, graphics, and logos — is the property of HealthPans.com and may not be reproduced without written permission.</p>
          <h2>External Links</h2>
          <p>We link to third-party sites including Amazon. We are not responsible for the content, privacy practices, or accuracy of external sites.</p>
          <h2>Limitation of Liability</h2>
          <p>HealthPans.com is not liable for any damages arising from the use of, or inability to use, this site or any linked site.</p>
          <h2>Changes to Terms</h2>
          <p>We may update these terms at any time. Continued use of the site constitutes acceptance of the updated terms.</p>
          <h2>Contact</h2>
          <p>Questions about these terms? <a href="/contact">Contact us</a>.</p>
        </div>
      </div>
    </section>
  );
}
