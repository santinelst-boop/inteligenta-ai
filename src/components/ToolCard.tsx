import Link from "next/link";
import type { AITool } from "@/data/tools";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? "star-filled" : "star-empty"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-text-light ml-1">{rating}</span>
    </div>
  );
}

function PricingBadge({ pricing }: { pricing: string }) {
  const colors: Record<string, string> = {
    Gratuit: "bg-green-100 text-green-700",
    Freemium: "bg-blue-100 text-blue-700",
    "Pl\u0103tit": "bg-amber-100 text-amber-700",
    "Open Source": "bg-purple-100 text-purple-700",
  };

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${colors[pricing] || "bg-gray-100 text-gray-700"}`}>
      {pricing}
    </span>
  );
}

export default function ToolCard({ tool }: { tool: AITool }) {
  return (
    <div className="card-hover bg-card rounded-2xl border border-border p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
          {tool.name[0]}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-text truncate">{tool.name}</h3>
          <StarRating rating={tool.rating} />
        </div>
        <PricingBadge pricing={tool.pricing} />
      </div>

      {/* Description */}
      <p className="text-sm text-text-light leading-relaxed mb-4 flex-1">
        {tool.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tool.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-primary bg-primary/5 px-2 py-0.5 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link
        href={tool.affiliateUrl}
        className="block text-center py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
        target="_blank"
        rel="noopener noreferrer sponsored"
      >
        \u00cencearcă {tool.name} \u2192
      </Link>
    </div>
  );
}
