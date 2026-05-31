import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy | HealthPans",
  description: "HealthPans privacy policy — how we collect, use, and protect your information.",
  alternates: { canonical: "https://healthpans.com/privacy-policy" },
};
export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-8">Privacy Policy</h1>
        <div className="prose">
          <p><strong>Last updated: January 2026</strong></p>
          <h2>Information We Collect</h2>
          <p>We collect information you voluntarily provide (such as your email address if you sign up for our newsletter or contact us) and information collected automatically (such as IP address, browser type, and pages visited via analytics tools like Google Analytics).</p>
          <h2>How We Use Information</h2>
          <ul>
            <li>To send newsletters and product updates (only if you opt in)</li>
            <li>To respond to contact form inquiries</li>
            <li>To analyze site traffic and improve our content</li>
            <li>To display relevant advertising via Google AdSense</li>
          </ul>
          <h2>Cookies</h2>
          <p>We use cookies for analytics (Google Analytics) and advertising (Google AdSense). You can disable cookies in your browser settings, though this may affect site functionality.</p>
          <h2>Third-Party Services</h2>
          <p>We use Google Analytics, Google AdSense, and Amazon Associates. Each of these services has its own privacy policy governing how they handle data.</p>
          <h2>Data Retention</h2>
          <p>We retain newsletter subscriber data until you unsubscribe. Contact form submissions are retained for up to 12 months.</p>
          <h2>Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data by contacting us at <a href="/contact">our contact page</a>.</p>
          <h2>Contact</h2>
          <p>For privacy-related questions, contact us at <a href="mailto:privacy@healthpans.com">privacy@healthpans.com</a>.</p>
        </div>
      </div>
    </section>
  );
}
