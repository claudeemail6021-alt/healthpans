import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | HealthPans",
  description: "Get in touch with the HealthPans team for corrections, review requests, partnership inquiries, or any questions about our non-toxic cookware reviews.",
  alternates: { canonical: "https://healthpans.com/contact" },
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-4">Get in Touch</h1>
          <p className="text-neutral-600 leading-relaxed">Have a question, found an error, or want to suggest a product for us to review? We read every message and reply within 2 business days.</p>
        </div>
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-card p-8">
          <ContactForm />
        </div>
        <div className="mt-8 text-center text-sm text-neutral-500">
          <p>For media or partnership inquiries: <a href="mailto:hello@healthpans.com" className="text-terracotta-500 hover:underline">hello@healthpans.com</a></p>
        </div>
      </div>
    </section>
  );
}
