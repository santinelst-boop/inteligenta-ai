import Link from "next/link";
import type { Article } from "@/data/tools";
import { categories } from "@/data/tools";

export default function ArticleCard({
  article,
  variant = "default",
}: {
  article: Article;
  variant?: "default" | "featured" | "compact";
}) {
  const category = categories.find((c) => c.id === article.category);

  if (variant === "compact") {
    return (
      <Link
        href={`/recenzii/${article.slug}`}
        className="flex gap-3 group"
      >
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 shrink-0 flex items-center justify-center">
          <span className="text-2xl">📝</span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-text group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h4>
          <p className="text-xs text-text-light mt-1">{article.date}</p>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link
        href={`/recenzii/${article.slug}`}
        className="card-hover block bg-card rounded-2xl border border-border overflow-hidden"
      >
        <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <span className="text-6xl">🤖</span>
        </div>
        <div className="p-5">
          {category && (
            <span
              className="text-xs font-medium px-2.5 py-0.5 rounded-full"
              style={{
                backgroundColor: `${category.color}15`,
                color: category.color,
              }}
            >
              {category.name}
            </span>
          )}
          <h3 className="text-lg font-bold text-text mt-2 mb-2 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-sm text-text-light line-clamp-2 mb-3">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-text-light">
            <span>📅 {article.date}</span>
            <span>⏱ {article.readTime} citire</span>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <Link
      href={`/recenzii/${article.slug}`}
      className="card-hover flex gap-4 bg-card rounded-2xl border border-border p-4 group"
    >
      <div className="w-32 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 shrink-0 flex items-center justify-center">
        <span className="text-3xl">📝</span>
      </div>
      <div className="flex-1 min-w-0">
        {category && (
          <span
            className="text-xs font-medium px-2.5 py-0.5 rounded-full"
            style={{
              backgroundColor: `${category.color}15`,
              color: category.color,
            }}
          >
            {category.name}
          </span>
        )}
        <h3 className="text-base font-semibold text-text mt-1 mb-1 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-text-light line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-3 text-xs text-text-light mt-2">
          <span>📅 {article.date}</span>
          <span>⏱ {article.readTime} citire</span>
        </div>
      </div>
    </Link>
  );
}
