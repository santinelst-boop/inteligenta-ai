import ArticleCard from "@/components/ArticleCard";
import { latestArticles } from "@/data/tools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog AI — Ghiduri Practice, Tutoriale și Noutăți despre Inteligență Artificială",
  description:
    "Ghiduri practice despre inteligență artificială: cum să folosești ChatGPT, AI pentru productivitate, AI pentru studenți, marketing cu AI și multe altele. Totul în română.",
  alternates: { canonical: "https://inteligenta.ai/blog" },
  openGraph: {
    title: "Blog AI — inteligenta.ai",
    description:
      "Ghiduri practice și tutoriale din lumea inteligenței artificiale.",
    url: "https://inteligenta.ai/blog",
  },
};

export default function BlogPage() {
  const blogArticles = latestArticles.filter((a) => a.contentType === "blog");

  return (
    <>
      <section className="hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Blog
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Ghiduri practice, tutoriale și noutăți din lumea inteligenței artificiale
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-5">
          {blogArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="default" />
          ))}
        </div>
      </section>
    </>
  );
}
