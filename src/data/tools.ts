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
      "Cel mai popular chatbot AI. Generează text, răspunde la întrebări, scrie cod și multe altele.",
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
      "Asistentul AI de la Anthropic. Excelent la analiză, scriere și programare cu context extins.",
    category: "ai-text",
    rating: 4.9,
    pricing: "Freemium",
    affiliateUrl: "#",
    imageUrl: "/images/tools/claude.svg",
    tags: ["chatbot", "analiză", "cod"],
    featured: true,
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description:
      "Generator de imagini AI premium. Creează artă digitală uluitoare din descrieri text.",
    category: "ai-imagine",
    rating: 4.7,
    pricing: "Plătit",
    affiliateUrl: "#",
    imageUrl: "/images/tools/midjourney.svg",
    tags: ["imagine", "artă", "design"],
    featured: true,
  },
  {
    id: "runway",
    name: "Runway ML",
    description:
      "Platformă de editare video cu AI. Generează și editează clipuri video cu inteligență artificială.",
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
      "Asistent de programare AI. Sugerează cod în timp real direct în editorul tău preferat.",
    category: "ai-cod",
    rating: 4.7,
    pricing: "Plătit",
    affiliateUrl: "#",
    imageUrl: "/images/tools/copilot.svg",
    tags: ["cod", "programare", "IDE"],
    featured: true,
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    description:
      "Sinteză vocală AI realistă. Transformă textul în voce naturală în zeci de limbi.",
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
    title: "ChatGPT vs Claude: Care este mai bun în 2026?",
    excerpt:
      "Comparație detaliată între cei doi giganți AI. Analizăm performanța, prețul și cazurile de utilizare.",
    category: "ai-text",
    date: "6 Februarie 2026",
    readTime: "8 min",
    imageUrl: "/images/articles/chatgpt-vs-claude.svg",
    featured: true,
  },
  {
    slug: "top-10-generatoare-imagini-ai",
    title: "Top 10 Generatoare de Imagini AI în 2026",
    excerpt:
      "De la Midjourney la DALL-E 3 și Stable Diffusion. Ghid complet cu exemple și prețuri.",
    category: "ai-imagine",
    date: "5 Februarie 2026",
    readTime: "12 min",
    imageUrl: "/images/articles/top-generatoare.svg",
    featured: true,
  },
  {
    slug: "cum-sa-folosesti-ai-productivitate",
    title: "Cum să folosești AI pentru productivitate maximă",
    excerpt:
      "10 instrumente AI care îți vor transforma modul de lucru. Ghid practic cu exemple reale.",
    category: "ai-productivitate",
    date: "4 Februarie 2026",
    readTime: "10 min",
    imageUrl: "/images/articles/productivitate.svg",
    featured: false,
  },
  {
    slug: "ghid-complet-github-copilot",
    title: "Ghid complet GitHub Copilot: Merită investiția?",
    excerpt:
      "Recenzie detaliată cu teste practice. Cât de bun e la programare reală vs. marketing?",
    category: "ai-cod",
    date: "3 Februarie 2026",
    readTime: "15 min",
    imageUrl: "/images/articles/copilot-review.svg",
    featured: false,
  },
];
