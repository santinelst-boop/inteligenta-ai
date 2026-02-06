import { articlesPart1 } from "./articles-part1";
import { articlesPart2 } from "./articles-part2";

export const articleContent: Record<string, { title: string; metaDescription: string; content: string }> = {
  ...articlesPart1,
  ...articlesPart2,
};
