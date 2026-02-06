import { articlesPart1 } from "./articles-part1";
import { articlesPart2 } from "./articles-part2";

const allArticles: Record<string, string> = {
  ...articlesPart1,
  ...articlesPart2,
};

export function getArticleContent(slug: string): string | null {
  return allArticles[slug] || null;
}
