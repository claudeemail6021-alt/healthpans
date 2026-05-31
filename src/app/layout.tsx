import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://healthpans.com"),
  title: { default: "HealthPans — Best Non-Toxic, PFAS-Free Cookware Reviews 2026", template: "%s | HealthPans" },
  description: "Independent, science-backed reviews of the safest non-toxic cookware. Find the best PFAS-free, ceramic, cast iron, and stainless steel pans for your kitchen.",
  keywords: ["non-toxic cookware", "PFAS-free pans", "ceramic cookware", "cast iron skillet", "healthy cooking", "best cookware 2026"],
  authors: [{ name: "HealthPans Editorial Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://healthpans.com",
    siteName: "HealthPans",
    title: "HealthPans — Best Non-Toxic, PFAS-Free Cookware Reviews 2026",
    description: "Independent reviews of the safest non-toxic cookware. PFAS-free, ceramic, cast iron & stainless options tested and ranked.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "HealthPans — Non-Toxic Cookware Reviews" }],
  },
  twitter: { card: "summary_large_image", title: "HealthPans — Best Non-Toxic Cookware 2026", description: "Independent reviews of PFAS-free cookware." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://healthpans.com" },
  other: { "google-adsense-account": "ca-pub-3024315445700130" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3024315445700130" crossOrigin="anonymous"></script>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FX9J59JQ1M" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-FX9J59JQ1M');`}</Script>
        {/* Google Ads */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18184715619" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','AW-18184715619');`}</Script>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
