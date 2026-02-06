import type { MetadataRoute } from "next";

const robots: MetadataRoute["robots"] = () => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://inteligenta-ai.vercel.app/sitemap.xml",
  };
};

export default robots;
