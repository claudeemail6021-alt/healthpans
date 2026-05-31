"use client";
import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
export default function NewsletterSignup() {
  const [email,setEmail]=useState(""); const [ok,setOk]=useState(false);
  return (
    <section className="bg-terra-gradient rounded-3xl p-8 md:p-12 text-center" style={{background:"linear-gradient(135deg,#FAE5DA,#F5C7B0)"}}>
      <div className="max-w-xl mx-auto">
        <Mail className="h-10 w-10 text-terracotta-500 mx-auto mb-4"/>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-neutral-900 mb-3">Safe Cooking Tips in Your Inbox</h2>
        <p className="text-neutral-600 mb-6 leading-relaxed">Join 6,000+ readers who get our weekly non-toxic cookware roundup — new PFAS-free finds, deals, and cooking guides. No spam.</p>
        {ok?<div className="flex items-center justify-center gap-2 text-green-700 font-semibold"><CheckCircle2 className="h-5 w-5"/>You&apos;re on the list!</div>:
        <form onSubmit={e=>{e.preventDefault();if(email)setOk(true);}} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input type="email" required placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)} className="flex-1 px-4 py-3 rounded-xl border border-terracotta-200 bg-white text-neutral-900 focus:outline-none focus:ring-2 focus:ring-terracotta-300 text-sm"/>
          <button type="submit" className="px-6 py-3 bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold rounded-xl transition-colors text-sm">Subscribe Free</button>
        </form>}
        <p className="text-xs text-neutral-400 mt-3">Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
