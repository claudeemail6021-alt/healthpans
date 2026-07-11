import type { MetadataRoute } from "next";
import { getAllProducts } from "@/data/products";

const blogSlugs = [
  "how-to-tell-if-your-pan-is-toxic",
  "best-non-toxic-cookware-sets-2026",
  "cast-iron-vs-ceramic-vs-stainless",
  "carbon-steel-seasoning-guide",
  "pfas-free-cookware-guide",
  "best-non-toxic-dutch-oven-2026",
  "replace-toxic-cookware-on-a-budget",
  "always-pan-vs-cast-iron-2026",
  "is-your-cookware-toxic",
  "cast-iron-beginner-guide",
  "stainless-steel-vs-ceramic-cookware",
  "best-pans-for-induction-cooktop",
  "non-toxic-cookware-gift-guide-2026",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://healthpans.com";
  const products = getAllProducts();

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/top-10`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.3 },
    ...products.map((p) => ({ url: `${base}/reviews/${p.slug}`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.85 })),
    ...blogSlugs.map((slug) => ({ url: `${base}/blog/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
