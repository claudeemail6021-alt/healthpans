import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section-padding text-center">
      <div className="container-custom max-w-lg">
        <div className="text-8xl mb-6">🍳</div>
        <h1 className="font-serif text-4xl font-bold text-neutral-900 mb-4">Page Not Found</h1>
        <p className="text-neutral-600 mb-8">Looks like this page got burned. Let's get you back to the kitchen.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="px-6 py-3 bg-terracotta-500 text-white font-semibold rounded-full hover:bg-terracotta-600 transition-colors">Back to Home</Link>
          <Link href="/top-10" className="px-6 py-3 border border-neutral-200 text-neutral-700 font-semibold rounded-full hover:border-terracotta-300 transition-colors">See Top 10 Picks</Link>
        </div>
      </div>
    </section>
  );
}
