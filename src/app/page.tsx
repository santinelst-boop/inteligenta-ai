import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import ArticleCard from "@/components/ArticleCard";
import { categories, featuredTools, latestArticles } from "@/data/tools";

export default function Home() {
  const featuredArticles = latestArticles.filter((a) => a.featured);
  const recentArticles = latestArticles.slice(0, 4);

  return (
    <>
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
            Descoper\u0103 cele mai bune
            <br />
            <span className="text-white/90">instrumente AI</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Recenzii oneste, compara\u021bii detaliate \u0219i ghiduri practice.
            Primul portal de inteligen\u021b\u0103 artificial\u0103 din Rom\u00e2nia.
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
                placeholder="Caut\u0103 instrumente AI... (ex: ChatGPT, Midjourney, Copilot)"
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-text text-base shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
              />
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/instrumente?cat=${cat.id}`}
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
            Vezi toate \u2192
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/instrumente"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            Vezi toate instrumentele \u2192
          </Link>
        </div>
      </section>

      {/* ===== LATEST REVIEWS ===== */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                Recenzii recente
              </h2>
              <p className="text-text-light mt-1">
                Analize detaliate ale celor mai noi instrumente AI
              </p>
            </div>
            <Link
              href="/recenzii"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
            >
              Toate recenziile \u2192
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Articles */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {featuredArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  variant="featured"
                />
              ))}
            </div>

            {/* Sidebar - Popular */}
            <div className="bg-surface rounded-2xl p-5">
              <h3 className="font-bold text-text mb-4 flex items-center gap-2">
                <span className="text-lg">\ud83d\udd25</span> Populare
              </h3>
              <div className="space-y-4">
                {recentArticles.map((article) => (
                  <ArticleCard
                    key={article.slug}
                    article={article}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CATEGORIES SHOWCASE ===== */}
      <section className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
            Exploreaz\u0103 pe categorii
          </h2>
          <p className="text-white/70 text-center mb-10 max-w-lg mx-auto">
            De la generatoare de text la editoare video \u2014 g\u0103se\u0219te instrumentul AI perfect pentru tine
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/instrumente?cat=${cat.id}`}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/10 hover:bg-white/20 transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${cat.color}30` }}
                >
                  {cat.id === "ai-text" && "\u270f\ufe0f"}
                  {cat.id === "ai-imagine" && "\ud83c\udfa8"}
                  {cat.id === "ai-video" && "\ud83c\udfac"}
                  {cat.id === "ai-cod" && "\ud83d\udcbb"}
                  {cat.id === "ai-audio" && "\ud83c\udfb5"}
                  {cat.id === "ai-productivitate" && "\u26a1"}
                </div>
                <h3 className="font-semibold text-white text-sm">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TEASER ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-text">
              Compara\u021bii
            </h2>
            <p className="text-text-light mt-1">
              Analize cap la cap pentru a face alegerea corect\u0103
            </p>
          </div>
          <Link
            href="/comparatii"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
          >
            Toate compara\u021biile \u2192
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Comparison Card 1 */}
          <Link
            href="/comparatii/chatgpt-vs-claude"
            className="card-hover flex items-center gap-5 bg-card rounded-2xl border border-border p-6"
          >
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-2xl shrink-0">
              \ud83d\udfe2
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                VS
              </span>
              <h3 className="font-bold text-text">ChatGPT vs Claude</h3>
              <p className="text-sm text-text-light">
                Cine c\u00e2\u0219tig\u0103 b\u0103t\u0103lia chatbot-ilor AI \u00een 2026?
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center text-2xl shrink-0">
              \ud83d\udfe0
            </div>
          </Link>

          {/* Comparison Card 2 */}
          <Link
            href="/comparatii/midjourney-vs-dalle"
            className="card-hover flex items-center gap-5 bg-card rounded-2xl border border-border p-6"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl shrink-0">
              \ud83d\udd35
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                VS
              </span>
              <h3 className="font-bold text-text">Midjourney vs DALL-E 3</h3>
              <p className="text-sm text-text-light">
                Care generator de imagini merit\u0103 banii?
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-2xl shrink-0">
              \ud83d\udfe3
            </div>
          </Link>
        </div>
      </section>

      {/* ===== TRUST BANNER ===== */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-sm text-text-light uppercase tracking-wide font-medium mb-6">
            De ce ne citesc mii de rom\u00e2ni
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Instrumente analizate" },
              { number: "50+", label: "Recenzii detaliate" },
              { number: "Zilnic", label: "Con\u021binut actualizat" },
              { number: "100%", label: "Opinii oneste" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-primary">
                  {stat.number}
                </p>
                <p className="text-sm text-text-light mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
