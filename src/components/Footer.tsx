import Link from "next/link";
import { Flame, Heart } from "lucide-react";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-neutral-900 text-neutral-400 mt-20">
      <div className="bg-neutral-800 border-b border-neutral-700">
        <div className="container-custom py-3"><p className="text-xs text-neutral-400 text-center"><strong className="text-neutral-300">Affiliate Disclosure:</strong> As an Amazon Associate and AWIN affiliate partner, we earn from qualifying purchases at no extra cost to you. <Link href="/affiliate-disclosure" className="underline hover:text-white">Learn more</Link></p></div>
      </div>
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4"><Flame className="h-5 w-5 text-terracotta-400" /><span className="font-serif text-lg font-bold text-white">Health<span className="text-terracotta-400">Pans</span></span></Link>
            <p className="text-sm leading-relaxed">Independent reviews of the best non-toxic, PFAS-free cookware in 2026.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Top Reviews</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/reviews/lodge-cast-iron-skillet-12" className="hover:text-white">Lodge Cast Iron</Link></li>
              <li><Link href="/reviews/greenpan-paris-pro-ceramic" className="hover:text-white">GreenPan Paris Pro</Link></li>
              <li><Link href="/reviews/made-in-carbon-steel-skillet" className="hover:text-white">Made In Carbon Steel</Link></li>
              <li><Link href="/reviews/caraway-ceramic-cookware-set" className="hover:text-white">Caraway Set</Link></li>
              <li><Link href="/top-10" className="text-terracotta-400 hover:text-terracotta-300">All Top 10 →</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/pfas-free-cookware-guide" className="hover:text-white">PFAS-Free Guide</Link></li>
              <li><Link href="/blog/cast-iron-vs-ceramic-vs-stainless" className="hover:text-white">Cast Iron vs Ceramic</Link></li>
              <li><Link href="/blog" className="text-terracotta-400 hover:text-terracotta-300">All Articles →</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500">© {year} HealthPans.com — Independent non-toxic cookware reviews. Not medical advice.</p>
          <p className="text-xs text-neutral-500 flex items-center gap-1">Made with <Heart className="h-3 w-3 text-terracotta-500" /> for safe cooking</p>
        </div>
      </div>
    </footer>
  );
}
