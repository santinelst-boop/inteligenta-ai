import Link from "next/link";
import ToolCard from "@/components/ToolCard";
import ArticleCard from "@/components/ArticleCard";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import ComparisonTable from "@/components/ComparisonTable";
import { categories, featuredTools, latestArticles } from "@/data/tools";

export default function Home() {
  const featuredArticles = latestArticles.filter((a) => a.featured);
  const recentArticles = latestArticles.slice(0, 4);
  const top10Tools = featuredTools.sort((a, b) => b.rating - a.rating).slice(0, 10);

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
            Vezi toate →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredTools.slice(0, 6).map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
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

      {/* ===== COMPARISON TABLE SECTION ===== */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-text">
                Tabel Comparativ Prețuri
              </h2>
              <p className="text-text-light mt-1">
                Compară top 10 instrumente AI pe baza rating-ului, prețului și funcționalități
              </p>
            </div>
          </div>

          <ComparisonTable tools={top10Tools} maxTools={10} />
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
              Toate recenziile →
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
                <span className="text-lg">🔥</span> Populare
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
            Explorează pe categorii
          </h2>
          <p className="text-white/70 text-center mb-10 max-w-lg mx-auto">
            De la generatoare de text la editoare video — găsește instrumentul AI perfect pentru tine
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
                  {cat.id === "ai-text" && "✏️"}
                  {cat.id === "ai-imagine" && "🎨"}
                  {cat.id === "ai-video" && "🎬"}
                  {cat.id === "ai-cod" && "💻"}
                  {cat.id === "ai-audio" && "🎵"}
                  {cat.id === "ai-productivitate" && "⚡"}
                  {cat.id === "ai-cautare" && "🔍"}
                  {cat.id === "ai-email" && "✉️"}
                </div>
                <h3 className="font-semibold text-white text-sm">
                  {cat.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Primește recenzii și ghiduri în inbox
            </h2>
            <p className="text-white/80 mb-6">
              Abonează-te la newsletter-ul nostru și fii printre primii care află despre noile instrumente AI și analysele noastre detaliate.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Introdu adresa de email..."
                required
                className="flex-1 px-5 py-3 rounded-lg bg-white text-text placeholder-text-light focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-white text-primary font-bold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Abonează-te
              </button>
            </form>

            <p className="text-xs text-white/60 mt-4">
              Nu trimitem spam. Te poți dezabona oricând.
            </p>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TEASEP ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-text">
              Comparații
            </h2>
            <p className="text-text-light mt-1">
              Analize cap la cap pentru a face alegerea corectă
            </p>
          </div>
          <Link
            href="/comparatii"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
          >
            Toate comparațiile →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Comparison Card 1 */}
          <Link
            href="/comparatii/chatgpt-vs-claude"
            className="card-hover flex items-center gap-5 bg-card rounded-2xl border border-border p-6"
          >
            <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-2xl shrink-0">
              🟡
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                VS
              </span>
              <h3 className="font-bold text-text">ChatGPT vs Claude</h3>
              <p className="text-sm text-text-light">
                Cine câștigă bătălia chatbot-ilor AI în 2026?
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center text-2xl shrink-0">
              🟠
            </div>
          </Link>

          {/* Comparison Card 2 */}
          <Link
            href="/comparatii/midjourney-vs-dalle"
            className="card-hover flex items-center gap-5 bg-card rounded-2xl border border-border p-6"
          >
            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-2xl shrink-0">
              🔵
            </div>
            <div className="flex-1">
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                VS
              </span>
              <h3 className="font-bold text-text">Midjourney vs DALL-E 3</h3>
              <p className="text-sm text-text-light">
                Care generator de imagini merită banii?
              </p>
            </div>
            <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center text-2xl shrink-0">
              🟣
            </div>
          </Link>
        </div>
      </section>

      {/* ===== TRUST BANNER ===== */}
      <section className="bg-white border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-sm text-text-light uppercase tracking-wide font-medium mb-6">
            De ce ne citesc mii de români
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "200+", label: "Instrumente analizate" },
              { number: "50+", label: "Recenzii detaliate" },
              { number: "Zilnic", label: "Conținut actualizat" },
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
