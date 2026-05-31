"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Flame } from "lucide-react";
const navLinks = [
  { label: "Top 10 Picks", href: "/top-10" },
  { label: "Reviews", href: "/reviews/lodge-cast-iron-skillet-12" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-terracotta-100 shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Flame className="h-5 w-5 text-terracotta-500 group-hover:text-terracotta-400 transition-colors" />
            <span className="font-serif text-xl font-bold text-neutral-900">Health<span className="text-terracotta-500">Pans</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(l => <Link key={l.href} href={l.href} className="text-sm font-medium text-neutral-600 hover:text-terracotta-500 transition-colors">{l.label}</Link>)}
            <Link href="/top-10" className="ml-2 px-4 py-2 bg-terracotta-500 text-white text-sm font-semibold rounded-full hover:bg-terracotta-600 transition-colors shadow-sm">Top Picks →</Link>
          </nav>
          <button className="md:hidden p-2 text-neutral-600 hover:text-terracotta-500" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-terracotta-100 px-6 py-4 space-y-3">
          {navLinks.map(l => <Link key={l.href} href={l.href} className="block text-sm font-medium text-neutral-700 hover:text-terracotta-500 py-1" onClick={() => setOpen(false)}>{l.label}</Link>)}
          <Link href="/top-10" className="block text-center px-4 py-2 bg-terracotta-500 text-white text-sm font-semibold rounded-full" onClick={() => setOpen(false)}>Top Picks →</Link>
        </div>
      )}
    </header>
  );
}
