import Link from "next/link";
import Image from "next/image";
import ToolCard from "@/components/ToolCard";
import ArticleCard from "@/components/ArticleCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import { getAllCategories, getFeaturedTools } from "@/lib/sanity";
import { latestArticles } from "@/data/tools";
import type { SanityTool, SanityCategory } from "@/lib/types";
import { toStarRating, getPricingLabel } from "@/lib/types";

export const revalidate = 3600;

export default async function Home() {
  const [sanityTools, sanityCategories]: [SanityTool[], SanityCategory[]] = await Promise.all([
    getFeaturedTools(),
    getAllCategories(),
  ]);

  const featuredArticles = latestArticles.filter((a) => a.featured);
  const recentArticles = latestArticles.slice(0, 4);
  const top10Tools = sanityTools.slice(0, 10);

  return (
    <>
      {/* ===== AFFILIATE DISCLOSURE ===== */}
      <AffiliateDisclosure />

      {/* ===== HERO SECTION ===== */}
      <section className="hero-gradient relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-sm mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Actualizat zilnic cu cele mai noi instrumente AI
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Descoperă cele mai bune
            <br />
            <span className="text-white/90">instrumente AI</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Recenzii oneste, comparații detaliate și ghiduri practice.
            Primul portal de inteligență artificială din România.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Caută instrumente AI... (ex: ChatGPT, Midjourney, Copilot)"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-text text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {sanityCategories.map((cat) => (
              <Link
                key={cat._id}
                href={`/instrumente?cat=${cat.slug}`}
                className="pill px-5 py-2 rounded-full bg-white/15 backdrop-blur-sm text-white text-sm font-medium border border-white/20"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED TOOLS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-text">
              Instrumente populare
            </h2>
            <p className="text-text-light mt-1">
              Cele mai apreciate instrumente AI din fiecare categorie
            </p>
          </div>
          <Link
            href="/instrumente"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
          >
            Vezi toate →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sanityTools.slice(0, 6).map((tool) => (
            <ToolCard key={tool._id} tool={tool} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/instrumente"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            Vezi toate instrumentele →
          </Link>
        </div>
      </section>

      {/* ===== TOP 10 TABLE ===== */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                Top 10 Instrumente AI 2026
              </h2>
              <p className="text-text-light mt-1">
                Clasamentul nostru bazat pe performanță, preț și funcționalități
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 text-xs font-semibold text-text-light uppercase">#</th>
                  <th className="py-3 px-4 text-xs font-semibold text-text-light uppercase">Instrument</th>
                  <th className="py-3 px-4 text-xs font-semibold text-text-light uppercase">Categorie</th>
                  <th className="py-3 px-4 text-xs font-semibold text-text-light uppercase">Rating</th>
                  <th className="py-3 px-4 text-xs font-semibold text-text-light uppercase">Preț</th>
                  <th className="py-3 px-4 text-xs font-semibold text-text-light uppercase"></th>
                </tr>
              </thead>
              <tbody>
                {top10Tools.map((tool, idx) => (
                  <tr key={tool._id} className="border-b border-border/50 hover:bg-surface/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-primary">{idx + 1}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        {tool.logoUrl ? (
                          <Image src={tool.logoUrl} alt={tool.name} width={32} height={32} className="w-8 h-8 rounded-lg object-contain" />
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                            {tool.name[0]}
                          </div>
                        )}
                        <span className="font-medium text-text">{tool.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-text-light">{tool.category?.name}</td>
                    <td className="py-3 px-4">
                      <span className="font-semibold text-text">{toStarRating(tool.rating).toFixed(1)}</span>
                      <span className="text-text-light text-xs">/5</span>
                    </td>
                    <td className="py-3 px-4 text-sm text-text-light">{getPricingLabel(tool.pricing)}</td>
                    <td className="py-3 px-4">
                      <Link
                        href={`/instrumente/${tool.slug}`}
                        className="text-sm text-primary font-medium hover:text-primary-dark"
                      >
                        Recenzie →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== ARTICLES SECTION (still from static data) ===== */}
      {recentArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                Ultimele articole
              </h2>
              <p className="text-text-light mt-1">
                Ghiduri, tutoriale și noutăți din lumea AI
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
            >
              Vezi toate →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {recentArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="bg-primary/5 border-y border-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
            Rămâi la curent cu AI
          </h2>
          <p className="text-text-light mb-6">
            Primește săptămânal cele mai noi instrumente AI, recenzii și ghiduri practice. Gratis, fără spam.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email-ul tău"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
              Abonează-te
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
