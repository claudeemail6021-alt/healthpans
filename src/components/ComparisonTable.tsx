import Link from "next/link";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { type Product } from "@/data/products";
import StarRating from "./StarRating";
import { amazonLink } from "@/lib/utils";

interface Props { products: Product[]; }
export default function ComparisonTable({ products }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-card">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-terracotta-50 border-b border-terracotta-100">
            <th className="px-4 py-3 text-left font-semibold text-neutral-700 w-8">#</th>
            <th className="px-4 py-3 text-left font-semibold text-neutral-700 min-w-[180px]">Cookware</th>
            <th className="px-4 py-3 text-left font-semibold text-neutral-700 hidden md:table-cell">Material</th>
            <th className="px-4 py-3 text-left font-semibold text-neutral-700 hidden lg:table-cell">Safety</th>
            <th className="px-4 py-3 text-left font-semibold text-neutral-700">Rating</th>
            <th className="px-4 py-3 text-left font-semibold text-neutral-700 hidden sm:table-cell">Price</th>
            <th className="px-4 py-3 text-left font-semibold text-neutral-700"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={p.id} className={`border-b border-neutral-100 hover:bg-sage-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-neutral-50/50"}`}>
              <td className="px-4 py-3">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${p.rank === 1 ? "bg-terracotta-500 text-white" : p.rank <= 3 ? "bg-terracotta-100 text-terracotta-700" : "bg-neutral-100 text-neutral-500"}`}>{p.rank}</span>
              </td>
              <td className="px-4 py-3">
                <Link href={`/reviews/${p.slug}`} className="font-semibold text-neutral-900 hover:text-terracotta-500 transition-colors block leading-snug">{p.name}</Link>
                <span className="text-xs text-neutral-400">{p.brand}</span>
              </td>
              <td className="px-4 py-3 hidden md:table-cell">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-sage-50 text-sage-700 rounded-full text-xs font-medium">{p.material}</span>
              </td>
              <td className="px-4 py-3 hidden lg:table-cell">
                <span className="inline-flex items-center gap-1 text-xs text-green-700 font-medium"><ShieldCheck className="h-3 w-3"/>{p.safetyProfile}</span>
              </td>
              <td className="px-4 py-3">
                <StarRating rating={p.rating} reviewCount={p.reviewCount} size="sm" />
              </td>
              <td className="px-4 py-3 hidden sm:table-cell">
                <span className="font-semibold text-neutral-800">{p.price}</span>
                <span className="text-xs text-neutral-400 block">{p.priceRange}</span>
              </td>
              <td className="px-4 py-3">
                <a href={amazonLink(p.asin)} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 px-3 py-1.5 bg-terracotta-500 text-white text-xs font-semibold rounded-full hover:bg-terracotta-600 transition-colors whitespace-nowrap">
                  Buy <ExternalLink className="h-3 w-3"/>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
