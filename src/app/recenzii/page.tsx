import ArticleCard from "@/components/ArticleCard";
import { latestArticles } from "@/data/tools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recenzii AI — Analize detaliate ale celor mai bune instrumente",
  description:
    "Recenzii complete și obiective ale instrumentelor de inteligență artificială. Teste practice, comparații și recomandări pentru utilizatori din România.",
  alternates: { canonical: "https://inteligenta.ai/recenzii" },
  openGraph: {
    title: "Recenzii AI — inteligenta.ai",
    description:
      "Recenzii complete ale instrumentelor AI. Teste practice și recomandări.",
    url: "https://inteligenta.ai/recenzii",
  },
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
            Analize detaliate, oneste și actualizate ale instrumentelor de inteligență artificială
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
