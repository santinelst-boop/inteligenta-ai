import ToolCard from "@/components/ToolCard";
import { getAllTools, getAllCategories, getToolsByCategory } from "@/lib/sanity";
import Link from "next/link";
import type { Metadata } from "next";
import type { SanityTool, SanityCategory } from "@/lib/types";
import { getCategoryName } from "@/lib/types";

export const revalidate = 3600; // ISR: revalidate every hour

export const metadata: Metadata = {
  title: "Instrumente AI — Director Complet de Aplicații cu Inteligență Artificială (2026)",
  description:
    "Director complet de instrumente AI și aplicații cu inteligență artificială. Chatbot AI, generatoare imagini, AI video, AI audio, AI programare — clasificate pe categorii cu prețuri și rating-uri.",
  alternates: { canonical: "https://inteligenta.ai/instrumente" },
  openGraph: {
    title: "Instrumente AI — inteligenta.ai",
    description:
      "Director complet cu peste 200 de instrumente AI clasificate pe categorii.",
    url: "https://inteligenta.ai/instrumente",
  },
};

type Props = {
  searchParams: Promise<{ cat?: string }>;
};

export default async function InstrumentePage({ searchParams }: Props) {
  const { cat: activeCat } = await searchParams;

  const [allTools, categories]: [SanityTool[], SanityCategory[]] =
    await Promise.all([getAllTools(), getAllCategories()]);

  // Filter tools server-side if category selected
  const tools = activeCat
    ? allTools.filter((t) => t.category?.slug === activeCat)
    : allTools;

  const activeCategory = activeCat
    ? categories.find((c) => c.slug === activeCat)
    : null;

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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Link
            href="/instrumente"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !activeCat
                ? "bg-primary text-white shadow-md"
                : "bg-white text-text-light border border-border hover:bg-primary hover:text-white hover:scale-105"
            }`}
          >
            Toate
          </Link>
          {categories.map((cat) => {
            const isActive = activeCat === cat.slug;
            return (
              <Link
                key={cat._id}
                href={`/instrumente?cat=${cat.slug}`}
                className={`pill px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? "text-white shadow-md"
                    : "bg-white text-text-light border border-border"
                }`}
                style={
                  isActive && cat.color
                    ? { backgroundColor: cat.color }
                    : undefined
                }
              >
                {cat.icon && <span className="mr-1">{cat.icon}</span>}
                {getCategoryName(cat)}
              </Link>
            );
          })}
        </div>

        {/* Results count */}
        <p className="text-sm text-text-light mb-3">
          Se afișează <strong className="text-text">{tools.length}</strong>{" "}
          instrumente
          {activeCategory && (
            <>
              {" "}
              în categoria{" "}
              <strong className="text-text">
                {getCategoryName(activeCategory)}
              </strong>
            </>
          )}
        </p>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tools.map((tool) => (
            <ToolCard key={tool._id} tool={tool} />
          ))}
        </div>

        {/* Empty state */}
        {tools.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-light text-lg mb-4">
              Nu am găsit instrumente în această categorie.
            </p>
            <Link
              href="/instrumente"
              className="text-primary font-medium hover:underline"
            >
              ← Înapoi la toate instrumentele
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
