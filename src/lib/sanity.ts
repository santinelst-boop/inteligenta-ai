import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "95fqd470",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const categoryProjection = `{_id, "name": title, "nameRo": titleRo, "slug": slug.current, color, icon}`;

// Fetch all published AI tools
export async function getAllTools() {
  return client.fetch(`
    *[_type == "aiTool"] | order(rating desc) {
      _id,
      name,
      "slug": slug.current,
      tagline,
      description,
      "logoUrl": logo.asset->url,
      "category": category->${categoryProjection},
      website,
      pricing,
      pricingDetails,
      rating,
      pros,
      cons,
      features,
      useCases,
      featured,
      publishedAt,
      updatedAt,
      seo
    }
  `);
}

// Fetch featured AI tools only
export async function getFeaturedTools() {
  return client.fetch(`
    *[_type == "aiTool" && featured == true] | order(rating desc) {
      _id,
      name,
      "slug": slug.current,
      tagline,
      description,
      "logoUrl": logo.asset->url,
      "category": category->${categoryProjection},
      website,
      pricing,
      pricingDetails,
      rating,
      pros,
      cons,
      features,
      useCases,
      featured,
      publishedAt,
      seo
    }
  `);
}

// Fetch a single tool by slug
export async function getToolBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "aiTool" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      tagline,
      description,
      "logoUrl": logo.asset->url,
      "category": category->${categoryProjection},
      website,
      pricing,
      pricingDetails,
      rating,
      pros,
      cons,
      features,
      useCases,
      "alternatives": alternatives[]->{
        _id,
        name,
        "slug": slug.current,
        "logoUrl": logo.asset->url,
        rating,
        pricing
      },
      featured,
      publishedAt,
      updatedAt,
      seo
    }
  `,
    { slug }
  );
}

// Fetch all tool slugs (for generateStaticParams)
export async function getAllToolSlugs() {
  return client.fetch(`
    *[_type == "aiTool"] { "slug": slug.current }
  `);
}

// Fetch all categories
export async function getAllCategories() {
  return client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      "name": title,
      "nameRo": titleRo,
      "slug": slug.current,
      description,
      color,
      icon
    }
  `);
}

// Fetch tools by category slug
export async function getToolsByCategory(categorySlug: string) {
  return client.fetch(
    `
    *[_type == "aiTool" && category->slug.current == $categorySlug] | order(rating desc) {
      _id,
      name,
      "slug": slug.current,
      tagline,
      description,
      "logoUrl": logo.asset->url,
      "category": category->${categoryProjection},
      website,
      pricing,
      pricingDetails,
      rating,
      featured,
      seo
    }
  `,
    { categorySlug }
  );
}
