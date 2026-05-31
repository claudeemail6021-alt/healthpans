"use client";
import { useState } from "react";
export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [form, setForm] = useState({ name:"", email:"", subject:"", message:"" });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1000));
    setStatus("sent");
  };
  if (status === "sent") return <div className="p-8 bg-green-50 rounded-2xl text-center"><p className="text-green-700 font-semibold text-lg mb-2">Message sent!</p><p className="text-neutral-600">Thanks for reaching out. We typically reply within 2 business days.</p></div>;
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
          <input required type="text" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-300 text-sm" placeholder="Your name"/>
        </div>
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
          <input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-300 text-sm" placeholder="you@example.com"/>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
        <input required type="text" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-300 text-sm" placeholder="Review request, correction, partnership..."/>
      </div>
      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
        <textarea required rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-terracotta-300 text-sm resize-none" placeholder="Tell us what's on your mind..."/>
      </div>
      <button type="submit" disabled={status==="sending"} className="w-full py-3 bg-terracotta-500 text-white font-bold rounded-full hover:bg-terracotta-600 transition-colors disabled:opacity-60">
        {status==="sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
