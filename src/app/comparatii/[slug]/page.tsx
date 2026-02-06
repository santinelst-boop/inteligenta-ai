import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { comparisons } from "@/data/comparisons";
import { featuredTools } from "@/data/tools";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) return {};

  const title = `${comp.left.name} vs ${comp.right.name} — Comparație | inteligenta.ai`;
  const description = comp.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://inteligenta-ai.vercel.app/comparatii/${slug}`,
    },
    alternates: {
      canonical: `https://inteligenta-ai.vercel.app/comparatii/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return comparisons.map((comp) => ({
    slug: comp.slug,
  }));
}

export default async function ComparatiePage({ params }: Props) {
  const { slug } = await params;
  const comp = comparisons.find((c) => c.slug === slug);
  if (!comp) notFound();

  const leftToolId = comp.slug.split("-vs-")[0];
  const rightToolId = comp.slug.split("-vs-")[1];

  const toolLeft = featuredTools.find(
    (t) => t.id === leftToolId || t.name.toLowerCase().replace(/\s+/g, "-") === leftToolId || t.name.toLowerCase().includes(leftToolId.replace(/-/g, " "))
  );
  const toolRight = featuredTools.find(
    (t) => t.id === rightToolId || t.name.toLowerCase().replace(/\s+/g, "-") === rightToolId || t.name.toLowerCase().includes(rightToolId.replace(/-/g, " "))
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${comp.left.name} vs ${comp.right.name}`,
    description: comp.description,
    author: { "@type": "Organization", name: "inteligenta.ai" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
            <span>/</span>
            <Link href="/comparatii" className="hover:text-primary transition-colors">Comparații</Link>
            <span>/</span>
            <span className="text-text font-medium">{comp.left.name} vs {comp.right.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase mb-4">
            {comp.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            {comp.left.name} vs {comp.right.name}
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            {comp.description}
          </p>
        </div>
      </section>

      {/* Tool Cards */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Left Tool */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-xl ${comp.left.color} flex items-center justify-center text-2xl`}>
                {comp.left.emoji}
              </div>
              <div>
                <h2 className="text-xl font-bold text-text">{comp.left.name}</h2>
                {toolLeft && <span className="text-sm text-text-light">{toolLeft.pricing}</span>}
              </div>
            </div>
            {toolLeft && (
              <>
                <p className="text-text-light text-sm mb-4">{toolLeft.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className={`w-4 h-4 ${star <= Math.round(toolLeft.rating) ? "star-filled" : "star-empty"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-text font-medium">{toolLeft.rating}</span>
                </div>
                <a href={toolLeft.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors">
                  Încearcă {comp.left.name} →
                </a>
              </>
            )}
          </div>

          {/* Right Tool */}
          <div className="bg-card rounded-2xl border border-border p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-xl ${comp.right.color} flex items-center justify-center text-2xl`}>
                {comp.right.emoji}
              </div>
              <div>
                <h2 className="text-xl font-bold text-text">{comp.right.name}</h2>
                {toolRight && <span className="text-sm text-text-light">{toolRight.pricing}</span>}
              </div>
            </div>
            {toolRight && (
              <>
                <p className="text-text-light text-sm mb-4">{toolRight.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className={`w-4 h-4 ${star <= Math.round(toolRight.rating) ? "star-filled" : "star-empty"}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-text font-medium">{toolRight.rating}</span>
                </div>
                <a href={toolRight.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-5 py-2 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors">
                  Încearcă {comp.right.name} →
                </a>
              </>
            )}
          </div>
        </div>

        {/* Comparison Table */}
        {toolLeft && toolRight && (
          <div className="bg-card rounded-2xl border border-border overflow-hidden mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="text-left px-6 py-4 text-text-light font-medium">Criteriu</th>
                  <th className="text-center px-6 py-4 text-text font-bold">{comp.left.name}</th>
                  <th className="text-center px-6 py-4 text-text font-bold">{comp.right.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 text-text-light">Rating</td>
                  <td className="px-6 py-4 text-center text-text font-medium">{toolLeft.rating} / 5</td>
                  <td className="px-6 py-4 text-center text-text font-medium">{toolRight.rating} / 5</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 text-text-light">Preț</td>
                  <td className="px-6 py-4 text-center text-text font-medium">{toolLeft.pricing}</td>
                  <td className="px-6 py-4 text-center text-text font-medium">{toolRight.pricing}</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-6 py-4 text-text-light">Categorie</td>
                  <td className="px-6 py-4 text-center text-text font-medium">{comp.category}</td>
                  <td className="px-6 py-4 text-center text-text font-medium">{comp.category}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Affiliate CTA */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-100">
          <h3 className="text-xl font-bold text-text mb-2">Alege instrumentul potrivit pentru tine</h3>
          <p className="text-text-light mb-4">Testează ambele instrumente și decide care se potrivește cel mai bine nevoilor tale.</p>
          <div className="flex flex-wrap gap-3">
            {toolLeft && (
              <a href={toolLeft.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
                Vizitează {comp.left.name} →
              </a>
            )}
            {toolRight && (
              <a href={toolRight.affiliateUrl} target="_blank" rel="noopener noreferrer sponsored" className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
                Vizitează {comp.right.name} →
              </a>
            )}
          </div>
          <p className="text-xs text-text-light mt-3">
            * Link afiliat. Citește{" "}
            <Link href="/afiliere" className="underline">declarația noastră</Link>.
          </p>
        </div>
      </section>

      {/* Other Comparisons */}
      {comparisons.filter((c) => c.slug !== slug).length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h2 className="text-xl font-bold text-text mb-6">Alte comparații</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {comparisons.filter((c) => c.slug !== slug).slice(0, 4).map((c) => (
              <Link key={c.slug} href={`/comparatii/${c.slug}`} className="card-hover flex items-center gap-4 bg-card rounded-xl border border-border p-4">
                <span className="text-xl">{c.left.emoji}</span>
                <div className="flex-1">
                  <p className="font-semibold text-text text-sm">{c.left.name} vs {c.right.name}</p>
                  <p className="text-xs text-text-light">{c.category}</p>
                </div>
                <span className="text-xl">{c.right.emoji}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
