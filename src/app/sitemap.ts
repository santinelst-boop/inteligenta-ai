import { MetadataRoute } from "next";
import { latestArticles } from "@/data/tools";
import { comparisons } from "@/data/comparisons";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://inteligenta.ai";
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/recenzii`, lastModified: now, changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/instrumente`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/comparatii`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/despre`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/afiliere`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/termeni`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/confidentialitate`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${baseUrl}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const articlePages: MetadataRoute.Sitemap = latestArticles.map((article) => ({
    url: `${baseUrl}/recenzii/${article.slug}`,
    lastModified: article.date || now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const comparisonPages: MetadataRoute.Sitemap = comparisons.map((comp) => ({
    url: `${baseUrl}/comparatii/${comp.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...articlePages, ...comparisonPages];
}
