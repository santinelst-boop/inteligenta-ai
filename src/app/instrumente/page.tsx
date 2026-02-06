import ToolCard from "@/components/ToolCard";
import { categories, featuredTools } from "@/data/tools";
import Link from "next/link";

export const metadata = {
  title: "Instrumente AI \u2014 Director complet | inteligenta.ai",
  description: "Exploreaz\u0103 cele mai bune instrumente de inteligen\u021b\u0103 artificial\u0103. Filtreaz\u0103 pe categorii: text, imagine, video, cod, audio.",
};

export default function InstrumentePage() {
  return (
    <>
      {/* Page Header */}
      <section className="hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Director Instrumente AI
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Exploreaz\u0103, compar\u0103 \u0219i alege cele mai bune instrumente de inteligen\u021b\u0103 artificial\u0103
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium">
            Toate
          </button>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/instrumente?cat=${cat.id}`}
              className="pill px-4 py-2 rounded-full bg-white text-text-light text-sm font-medium border border-border"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Pricing Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["Gratuit", "Freemium", "Pl\u0103tit", "Open Source"].map((p) => (
            <button
              key={p}
              className="px-3 py-1.5 rounded-full text-xs font-medium border border-border text-text-light hover:border-primary hover:text-primary transition-colors"
            >
              {p}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-text-light mb-6">
          Se afi\u0219eaz\u0103 <strong className="text-text">{featuredTools.length}</strong> din {featuredTools.length} instrumente
        </p>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>
    </>
  );
}
