import ArticleCard from "@/components/ArticleCard";
import { latestArticles } from "@/data/tools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recenzii AI — Teste Reale ale Celor Mai Bune Instrumente de Inteligență Artificială",
  description:
    "Recenzii detaliate ale instrumentelor AI: ChatGPT, Midjourney, Claude, Copilot și altele. Teste practice, prețuri, avantaje și dezavantaje. Ghidul tău pentru software AI în România.",
  alternates: { canonical: "https://inteligenta.ai/recenzii" },
  openGraph: {
    title: "Recenzii AI — inteligenta.ai",
    description:
      "Recenzii complete ale instrumentelor AI. Teste practice și recomandări.",
    url: "https://inteligenta.ai/recenzii",
  },
};

export default function RecenziiPage() {
  const reviewArticles = latestArticles.filter((a) => a.contentType === "review");

  return (
    <>
      <section className="hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Recenzii AI
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Recenzii detaliate, comparații cap la cap și teste reale ale instrumentelor AI
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-5">
          {reviewArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="default" />
          ))}
        </div>
      </section>
    </>
  );
}
