import Link from "next/link";
import Image from "next/image";
import type { SanityTool } from "@/lib/types";
import { getPricingLabel, toStarRating } from "@/lib/types";

function StarRating({ rating }: { rating: number }) {
  const stars = toStarRating(rating);
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(stars) ? "star-filled" : "star-empty"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm text-text-light ml-1">{stars.toFixed(1)}</span>
    </div>
  );
}

function PricingBadge({ pricing }: { pricing: string }) {
  const label = getPricingLabel(pricing);
  const colors: Record<string, string> = {
    free: "bg-green-100 text-green-700",
    freemium: "bg-blue-100 text-blue-700",
    paid: "bg-amber-100 text-amber-700",
    enterprise: "bg-purple-100 text-purple-700",
    "open-source": "bg-teal-100 text-teal-700",
  };

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${colors[pricing] || "bg-gray-100 text-gray-700"}`}>
      {label}
    </span>
  );
}

export default function ToolCard({ tool }: { tool: SanityTool }) {
  return (
    <div className="card-hover bg-card rounded-2xl border border-border p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary font-bold text-lg shrink-0">
          {tool.logoUrl ? (
            <Image src={tool.logoUrl} alt={tool.name} width={48} height={48} className="w-full h-full object-contain" />
          ) : (
            tool.name[0]
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-text truncate">{tool.name}</h3>
          <StarRating rating={tool.rating} />
        </div>
        <PricingBadge pricing={tool.pricing} />
      </div>

      {/* Tagline or Description */}
      <p className="text-sm text-text-light leading-relaxed mb-4 flex-1">
        {tool.tagline || tool.description}
      </p>

      {/* Category Tag */}
      {tool.category && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="text-xs text-primary bg-primary/5 px-2 py-0.5 rounded-full">
            {tool.category.name}
          </span>
        </div>
      )}

      {/* CTA */}
      <Link
        href={`/instrumente/${tool.slug}`}
        className="block text-center py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
      >
        Vezi recenzie {tool.name} →
      </Link>
    </div>
  );
}
