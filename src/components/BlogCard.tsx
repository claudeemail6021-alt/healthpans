import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { type BlogPost } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
export default function BlogCard({ post }:{post:BlogPost}) {
  return (
    <article className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden flex flex-col group">
      <div className="h-40 flex items-center justify-center" style={{background:"linear-gradient(135deg,#FAE5DA,#E5EDE5)"}}>
        <span className="text-4xl">🍳</span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs uppercase tracking-wider font-semibold text-terracotta-500 mb-2">{post.frontmatter.category}</span>
        <h3 className="font-serif text-lg font-bold text-neutral-900 leading-snug group-hover:text-terracotta-500 transition-colors mb-2"><Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link></h3>
        <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 flex-1">{post.frontmatter.description}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3"/>{formatDate(post.frontmatter.date)}</span>
            <span className="flex items-center gap-1"><Clock className="h-3 w-3"/>{post.frontmatter.readTime}</span>
          </div>
          <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-terracotta-500 font-medium hover:text-terracotta-600">Read <ArrowRight className="h-3 w-3"/></Link>
        </div>
      </div>
    </article>
  );
}
