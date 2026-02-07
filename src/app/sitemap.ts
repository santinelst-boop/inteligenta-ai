import { MetadataRoute } from "next";
import { featuredTools, latestArticles } from "@/data/tools";
import { comparisons } from "@/data/comparisons";
import { articleContent } from "@/data/article-content";
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://inteligenta.ai";
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/recenzii`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/instrumente`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/comparatii`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/despre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/politica-confidentialitate`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/termeni`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/afiliere`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
  const toolPages = featuredTools.map((tool) => ({
    url: `${baseUrl}/instrumente/${tool.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  const articlePages = latestArticles.map((article) => ({
    url: `${baseUrl}/recenzii/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  const articleSlugs = new Set(latestArticles.map((a) => a.slug));
  const blogPages = Object.keys(articleContent)
    .filter((slug) => !articleSlugs.has(slug))
    .map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  const comparisonPages = comparisons.map((comp) => ({
    url: `${baseUrl}/comparatii/${comp.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticPages, ...toolPages, ...articlePages, ...blogPages, ...comparisonPages];
}
