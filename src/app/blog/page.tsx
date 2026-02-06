import ArticleCard from "@/components/ArticleCard";
import { latestArticles } from "@/data/tools";

export const metadata = {
  title: "Blog AI \u2014 Ghiduri \u0219i tutoriale | inteligenta.ai",
  description: "Ghiduri practice, tutoriale \u0219i nout\u0103\u021bi din lumea inteligen\u021bei artificiale.",
};

export default function BlogPage() {
  return (
    <>
      <section className="hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Blog
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Ghiduri practice, tutoriale \u0219i nout\u0103\u021bi din lumea inteligen\u021bei artificiale
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-5">
          {latestArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="default" />
          ))}
        </div>
      </section>
    </>
  );
}
