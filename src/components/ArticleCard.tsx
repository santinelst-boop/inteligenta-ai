import Link from "next/link";
import type { Article } from "@/data/tools";
import { categories } from "@/data/tools";

// Gradient map per category for article cards
const categoryGradients: Record<string, string> = {
  "ai-text": "from-indigo-500 to-blue-600",
  "ai-imagine": "from-violet-500 to-purple-600",
  "ai-video": "from-blue-500 to-cyan-600",
  "ai-cod": "from-emerald-500 to-green-600",
  "ai-audio": "from-amber-500 to-orange-600",
  "ai-productivitate": "from-red-500 to-rose-600",
  "ai-cautare": "from-cyan-500 to-teal-600",
  "ai-email": "from-orange-700 to-amber-600",
  "ai-educatie": "from-teal-500 to-cyan-600",
  "ai-business": "from-slate-500 to-gray-600",
  "ai-opinie": "from-rose-500 to-pink-600",
  "ai-marketing": "from-fuchsia-500 to-purple-600",
};

const categoryIcons: Record<string, string> = {
  "ai-text": "✍️",
  "ai-imagine": "🎨",
  "ai-video": "🎬",
  "ai-cod": "💻",
  "ai-audio": "🎵",
  "ai-productivitate": "⚡",
  "ai-cautare": "🔍",
  "ai-email": "📧",
  "ai-educatie": "📚",
  "ai-business": "💼",
  "ai-opinie": "💡",
  "ai-marketing": "📢",
};

export default function ArticleCard({
  article,
  variant = "default",
}: {
  article: Article;
  variant?: "default" | "featured" | "compact";
}) {
  const category = categories.find((c) => c.id === article.category);
  const gradient = categoryGradients[article.category] || "from-gray-500 to-gray-600";
  const icon = categoryIcons[article.category] || "📝";
  const href = `/recenzii/${article.slug}`;

  if (variant === "compact") {
    return (
      <Link href={href} className="flex gap-3 group">
        <div
          className={`w-20 h-20 rounded-xl bg-gradient-to-br ${gradient} shrink-0 flex items-center justify-center`}
        >
          <span className="text-2xl">{icon}</span>
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
        href={href}
        className="card-hover block bg-card rounded-2xl border border-border overflow-hidden"
      >
        <div
          className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center relative`}
        >
          <span className="text-6xl opacity-80">{icon}</span>
          {category && (
            <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
              {category.name}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-text mb-2 line-clamp-2">
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

  // Default variant — horizontal card
  return (
    <Link
      href={href}
      className="card-hover flex gap-4 bg-card rounded-2xl border border-border p-4 group"
    >
      <div
        className={`w-32 h-24 rounded-xl bg-gradient-to-br ${gradient} shrink-0 flex items-center justify-center`}
      >
        <span className="text-3xl opacity-80">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        {category && (
          <span
            className="text-xs font-medium px-2.5 py-0.5 rounded-full inline-block mb-1"
            style={{
              backgroundColor: `${category.color}15`,
              color: category.color,
            }}
          >
            {category.name}
          </span>
        )}
        <h3 className="text-base font-semibold text-text group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-text-light line-clamp-2 mt-1">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-text-light mt-2">
          <span>📅 {article.date}</span>
          <span>⏱ {article.readTime} citire</span>
        </div>
      </div>
    </Link>
  );
}
