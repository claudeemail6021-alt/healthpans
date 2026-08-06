"use client";
import { useEffect, useRef } from "react";
declare global { interface Window { adsbygoogle: { push: (p: object) => void }[]; } }
interface AdUnitProps { slot: string; className?: string; }
export default function AdUnit({ slot, className = "" }: AdUnitProps) {
  const initialized = useRef(false);
  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch {}
  }, []);
  return (
    <div className={`my-6 overflow-hidden ${className}`} aria-label="Advertisement">
      <ins className="adsbygoogle" style={{ display: "block" }}
        data-ad-client="ca-pub-3024315445700130" data-ad-slot={slot}
        data-ad-format="auto" data-full-width-responsive="true" />
    </div>
  );
}
