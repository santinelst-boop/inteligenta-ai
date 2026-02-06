import ArticleCard from "@/components/ArticleCard";
import { latestArticles } from "@/data/tools";

export const metadata = {
  title: "Recenzii AI \u2014 Analize detaliate | inteligenta.ai",
  description: "Recenzii oneste \u0219i detaliate ale celor mai populare instrumente de inteligen\u021b\u0103 artificial\u0103.",
};

export default function RecenziiPage() {
  return (
    <>
      <section className="hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Recenzii AI
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Analize detaliate, oneste \u0219i actualizate ale instrumentelor de inteligen\u021b\u0103 artificial\u0103
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="featured" />
          ))}
        </div>
      </section>
    </>
  );
}
