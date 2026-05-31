import Link from "next/link";
import { Info } from "lucide-react";
export default function AffiliateDisclosure({ compact=false }:{compact?:boolean}) {
  if(compact) return <p className="text-xs text-neutral-500 italic flex items-start gap-1.5"><Info className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-neutral-400"/>As an Amazon Associate and AWIN partner, we earn from qualifying purchases. <Link href="/affiliate-disclosure" className="underline hover:text-neutral-700">Details</Link></p>;
  return <div className="bg-terracotta-50 border border-terracotta-100 rounded-xl p-4 flex items-start gap-3 my-6"><Info className="h-5 w-5 text-terracotta-500 flex-shrink-0 mt-0.5"/><div className="text-sm text-neutral-600 leading-relaxed"><strong className="text-neutral-800">Affiliate Disclosure:</strong> HealthPans.com participates in Amazon Associates and AWIN. We earn a commission on qualifying purchases at no extra cost to you. Rankings are never influenced by affiliate relationships. <Link href="/affiliate-disclosure" className="text-terracotta-500 underline hover:text-terracotta-600">Full disclosure →</Link></div></div>;
}
