import Link from "next/link";
import { ExternalLink, Check, X, ShieldCheck } from "lucide-react";
import { type Product } from "@/data/products";
import StarRating from "./StarRating";
import { amazonLink } from "@/lib/utils";

interface Props { product: Product; showDetails?: boolean; }
export default function ProductCard({ product: p, showDetails = false }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden flex flex-col group">
      {p.rank && (
        <div className={`px-4 py-2 flex items-center justify-between ${p.rank === 1 ? "bg-terracotta-500" : "bg-terracotta-50"}`}>
          <span className={`text-xs font-bold uppercase tracking-wider ${p.rank === 1 ? "text-white" : "text-terracotta-600"}`}>
            {p.rank === 1 ? "🏆 Editor's Pick" : `#${p.rank} Pick`}
          </span>
          <span className={`text-xs font-semibold ${p.rank === 1 ? "text-white/80" : "text-terracotta-400"}`}>{p.priceRange}</span>
        </div>
      )}
      <div className="h-40 flex items-center justify-center" style={{background:"linear-gradient(135deg,#FAE5DA,#E5EDE5)"}}>
        <span className="font-serif text-lg font-bold text-neutral-500">{p.brand}</span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start gap-2 mb-1">
          <div className="flex-1">
            <span className="text-xs text-neutral-400 font-medium">{p.brand}</span>
            <h3 className="font-serif text-base font-bold text-neutral-900 leading-snug group-hover:text-terracotta-500 transition-colors">
              <Link href={`/reviews/${p.slug}`}>{p.name}</Link>
            </h3>
          </div>
        </div>
        <StarRating rating={p.rating} reviewCount={p.reviewCount} size="sm" />
        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs text-green-700 font-medium bg-green-50 px-2 py-0.5 rounded-full">
            <ShieldCheck className="h-3 w-3"/>PFAS-Free
          </span>
          <span className="text-xs text-neutral-500 bg-sage-50 px-2 py-0.5 rounded-full">{p.material}</span>
        </div>
        <p className="mt-3 text-sm text-neutral-600 leading-relaxed line-clamp-2 flex-1">{p.shortDescription}</p>
        {showDetails && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div>
              {p.pros.slice(0, 2).map((pro, i) => (
                <div key={i} className="flex items-start gap-1 text-xs text-neutral-600 mb-1">
                  <Check className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0"/><span>{pro}</span>
                </div>
              ))}
            </div>
            <div>
              {p.cons.slice(0, 2).map((con, i) => (
                <div key={i} className="flex items-start gap-1 text-xs text-neutral-600 mb-1">
                  <X className="h-3 w-3 text-red-400 mt-0.5 flex-shrink-0"/><span>{con}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-4 flex items-center justify-between gap-2">
          <div>
            <span className="font-bold text-neutral-900">{p.price}</span>
            <Link href={`/reviews/${p.slug}`} className="block text-xs text-terracotta-500 hover:text-terracotta-600 font-medium">Full review →</Link>
          </div>
          <a href={amazonLink(p.asin)} target="_blank" rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1 px-4 py-2 bg-terracotta-500 text-white text-xs font-bold rounded-full hover:bg-terracotta-600 transition-colors shadow-sm">
            Buy <ExternalLink className="h-3 w-3"/>
          </a>
        </div>
      </div>
    </article>
  );
}
