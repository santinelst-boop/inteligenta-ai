export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  rating: number;
  pricing: "Gratuit" | "Freemium" | "Plătit" | "Open Source";
  affiliateUrl: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
  featured: boolean;
}

export const categories = [
  { id: "ai-text", name: "AI Text", icon: "pencil", color: "#4f46e5" },
  { id: "ai-imagine", name: "AI Imagine", icon: "image", color: "#7c3aed" },
  { id: "ai-video", name: "AI Video", icon: "video", color: "#2563eb" },
  { id: "ai-cod", name: "AI Cod", icon: "code", color: "#059669" },
  { id: "ai-audio", name: "AI Audio", icon: "music", color: "#d97706" },
  { id: "ai-productivitate", name: "AI Productivitate", icon: "zap", color: "#dc2626" },
];

export const featuredTools: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "Cel mai popular chatbot AI. Genereaz\u0103 text, r\u0103spunde la \u00eentreb\u0103ri, scrie cod \u0219i multe altele.",
    category: "ai-text",
    rating: 4.8,
    pricing: "Freemium",
    affiliateUrl: "#",
    imageUrl: "/images/tools/chatgpt.svg",
    tags: ["chatbot", "text", "cod"],
    featured: true,
  },
  {
    id: "claude",
    name: "Claude",
    description:
      "Asistentul AI de la Anthropic. Excelent la analiz\u0103, scriere \u0219i programare cu context extins.",
    category: "ai-text",
    rating: 4.9,
    pricing: "Freemium",
    affiliateUrl: "#",
    imageUrl: "/images/tools/claude.svg",
    tags: ["chatbot", "analiz\u0103", "cod"],
    featured: true,
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description:
      "Generator de imagini AI premium. Creeaz\u0103 art\u0103 digital\u0103 uluitoare din descrieri text.",
    category: "ai-imagine",
    rating: 4.7,
    pricing: "Pl\u0103tit",
    affiliateUrl: "#",
    imageUrl: "/images/tools/midjourney.svg",
    tags: ["imagine", "art\u0103", "design"],
    featured: true,
  },
  {
    id: "runway",
    name: "Runway ML",
    description:
      "Platform\u0103 de editare video cu AI. Genereaz\u0103 \u0219i editeaz\u0103 clipuri video cu inteligen\u021b\u0103 artificial\u0103.",
    category: "ai-video",
    rating: 4.6,
    pricing: "Freemium",
    affiliateUrl: "#",
    imageUrl: "/images/tools/runway.svg",
    tags: ["video", "editare", "generare"],
    featured: true,
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description:
      "Asistent de programare AI. Sugereaz\u0103 cod \u00een timp real direct \u00een editorul t\u0103u preferat.",
    category: "ai-cod",
    rating: 4.7,
    pricing: "Pl\u0103tit",
    affiliateUrl: "#",
    imageUrl: "/images/tools/copilot.svg",
    tags: ["cod", "programare", "IDE"],
    featured: true,
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description:
      "Sintez\u0103 vocal\u0103 AI realist\u0103. Transform\u0103 textul \u00een voce natural\u0103 \u00een zeci de limbi.",
    category: "ai-audio",
    rating: 4.8,
    pricing: "Freemium",
    affiliateUrl: "#",
    imageUrl: "/images/tools/elevenlabs.svg",
    tags: ["voce", "audio", "text-to-speech"],
    featured: true,
  },
];

export const latestArticles: Article[] = [
  {
    slug: "chatgpt-vs-claude-comparatie-2026",
    title: "ChatGPT vs Claude: Care este mai bun \u00een 2026?",
    excerpt:
      "Compara\u021bie detaliat\u0103 \u00eentre cei doi gigan\u021bi AI. Analiz\u0103m performan\u021ba, pre\u021bul \u0219i cazurile de utilizare.",
    category: "ai-text",
    date: "6 Februarie 2026",
    readTime: "8 min",
    imageUrl: "/images/articles/chatgpt-vs-claude.svg",
    featured: true,
  },
  {
    slug: "top-10-generatoare-imagini-ai",
    title: "Top 10 Generatoare de Imagini AI \u00een 2026",
    excerpt:
      "De la Midjourney la DALL-E 3 \u0219i Stable Diffusion. Ghid complet cu exemple \u0219i pre\u021buri.",
    category: "ai-imagine",
    date: "5 Februarie 2026",
    readTime: "12 min",
    imageUrl: "/images/articles/top-generatoare.svg",
    featured: true,
  },
  {
    slug: "cum-sa-folosesti-ai-productivitate",
    title: "Cum s\u0103 folose\u0219ti AI pentru productivitate maxim\u0103",
    excerpt:
      "10 instrumente AI care \u00ee\u021bi vor transforma modul de lucru. Ghid practic cu exemple reale.",
    category: "ai-productivitate",
    date: "4 Februarie 2026",
    readTime: "10 min",
    imageUrl: "/images/articles/productivitate.svg",
    featured: false,
  },
  {
    slug: "ghid-complet-github-copilot",
    title: "Ghid complet GitHub Copilot: Merit\u0103 investi\u021bia?",
    excerpt:
      "Recenzie detaliat\u0103 cu teste practice. C\u00e2t de bun e la programare real\u0103 vs. marketing?",
    category: "ai-cod",
    date: "3 Februarie 2026",
    readTime: "15 min",
    imageUrl: "/images/articles/copilot-review.svg",
    featured: false,
  },
];
