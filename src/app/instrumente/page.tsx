import ToolCard from "@/components/ToolCard";
import { getAllTools, getAllCategories } from "@/lib/sanity";
import Link from "next/link";
import type { Metadata } from "next";
import type { SanityTool, SanityCategory } from "@/lib/types";

export const revalidate = 3600; // ISR: revalidate every hour

export const metadata: Metadata = {
  title: "Instrumente AI — Director complet de tool-uri",
  description:
    "Directorul complet al instrumentelor de inteligență artificială. Peste 200 de tool-uri clasificate pe categorii cu rating-uri și prețuri.",
  alternates: { canonical: "https://inteligenta.ai/instrumente" },
  openGraph: {
    title: "Instrumente AI — inteligenta.ai",
    description:
      "Director complet cu peste 200 de instrumente AI clasificate pe categorii.",
    url: "https://inteligenta.ai/instrumente",
  },
};

export default async function InstrumentePage() {
  const [tools, categories]: [SanityTool[], SanityCategory[]] = await Promise.all([
    getAllTools(),
    getAllCategories(),
  ]);

  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Director Instrumente AI
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Explorează, compară și alege cele mai bune instrumente de inteligență artificială
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/instrumente"
            className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium"
          >
            Toate
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/instrumente?cat=${cat.slug}`}
              className="pill px-4 py-2 rounded-full bg-white text-text-light text-sm font-medium border border-border"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-text-light mb-6">
          Se afișează <strong className="text-text">{tools.length}</strong> instrumente
        </p>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.map((tool) => (
            <ToolCard key={tool._id} tool={tool} />
          ))}
        </div>
      </section>
    </>
  );
}
