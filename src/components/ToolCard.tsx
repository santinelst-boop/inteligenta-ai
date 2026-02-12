import Link from "next/link";
import Image from "next/image";
import type { SanityTool } from "@/lib/types";
import { toStarRating, getPricingLabel, getLogoUrl, getCategoryName } from "@/lib/types";

export default function ToolCard({ tool }: { tool: SanityTool }) {
  const starRating = toStarRating(tool.rating);
  const logo = getLogoUrl(tool);
  const catColor = tool.category?.color || "#6B7280";

  return (
    <Link
      href={`/instrumente/${tool.slug}`}
      className="card-hover flex flex-col bg-card rounded-2xl border border-border p-5 group"
    >
      {/* Header: logo + name */}
      <div className="flex items-center gap-3 mb-3">
        {logo ? (
          <Image
            src={logo}
            alt={tool.name}
            width={40}
            height={40}
            className="rounded-xl object-contain"
          />
        ) : (
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-lg font-bold text-primary">
            {tool.name.charAt(0)}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-text group-hover:text-primary transition-colors truncate">
            {tool.name}
          </h3>
          {tool.category && (
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full inline-block"
              style={{
                backgroundColor: `${catColor}15`,
                color: catColor,
              }}
            >
              {tool.category.icon && (
                <span className="mr-0.5">{tool.category.icon}</span>
              )}
              {getCategoryName(tool.category)}
            </span>
          )}
        </div>
      </div>

      {/* Tagline */}
      {tool.tagline && (
        <p className="text-sm text-text-light line-clamp-2 mb-3 flex-grow">
          {tool.tagline}
        </p>
      )}

      {/* Footer: rating + pricing */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/50">
        <div className="flex items-center gap-1">
          <span className="text-yellow-500 text-sm">★</span>
          <span className="text-sm font-medium text-text">
            {starRating.toFixed(1)}
          </span>
        </div>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            tool.pricing === "free"
              ? "bg-green-100 text-green-700"
              : tool.pricing === "freemium"
              ? "bg-blue-100 text-blue-700"
              : tool.pricing === "open-source"
              ? "bg-purple-100 text-purple-700"
              : tool.pricing === "enterprise"
              ? "bg-gray-100 text-gray-700"
              : "bg-orange-100 text-orange-700"
          }`}
        >
          {getPricingLabel(tool.pricing)}
        </span>
      </div>
    </Link>
  );
}
