import { articlesPart1 } from "./articles-part1";
import { articlesPart2 } from "./articles-part2";
import { articlesPart3 } from "./articles-part3";
import { articlesPart4 } from "./articles-part4";
import { articlesPart5 } from "./articles-part5";

export const articleContent: Record<string, { title: string; metaDescription: string; content: string }> = {
  ...articlesPart1,
  ...articlesPart2,
  ...articlesPart3,
  ...articlesPart4,
  ...articlesPart5,
};
