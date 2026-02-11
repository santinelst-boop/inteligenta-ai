export interface SanityCategory {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  icon?: string;
}

export interface SanityTool {
  _id: string;
  name: string;
  slug: string;
  tagline?: string;
  description: string;
  logoUrl?: string;
  category: SanityCategory;
  website: string;
  pricing: "free" | "freemium" | "paid" | "enterprise" | "open-source";
  pricingDetails?: string;
  rating: number;
  pros?: string[];
  cons?: string[];
  features?: string[];
  useCases?: string[];
  alternatives?: SanityToolPreview[];
  featured: boolean;
  publishedAt?: string;
  updatedAt?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export interface SanityToolPreview {
  _id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  rating: number;
  pricing: string;
}

// Map Sanity pricing values to Romanian display labels
export function getPricingLabel(pricing: string): string {
  const labels: Record<string, string> = {
    free: "Gratuit",
    freemium: "Freemium",
    paid: "Plătit",
    enterprise: "Enterprise",
    "open-source": "Open Source",
  };
  return labels[pricing] || pricing;
}

// Convert Sanity rating (1-10) to 5-star scale
export function toStarRating(rating: number): number {
  return Math.round((rating / 10) * 5 * 10) / 10;
}
