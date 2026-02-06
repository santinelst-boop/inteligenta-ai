export interface Comparison {
  slug: string;
  left: { name: string; emoji: string; color: string };
  right: { name: string; emoji: string; color: string };
  description: string;
  category: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "chatgpt-vs-claude",
    left: { name: "ChatGPT", emoji: "\uD83D\uDFE2", color: "bg-green-100" },
    right: { name: "Claude", emoji: "\uD83D\uDFE0", color: "bg-orange-100" },
    description: "Cine c\u00E2\u0219tig\u0103 b\u0103t\u0103lia chatbot-ilor AI \u00EEn 2026?",
    category: "AI Text",
  },
  {
    slug: "midjourney-vs-dalle",
    left: { name: "Midjourney", emoji: "\uD83D\uDD35", color: "bg-blue-100" },
    right: { name: "DALL-E 3", emoji: "\uD83D\uDFE3", color: "bg-purple-100" },
    description: "Care generator de imagini merit\u0103 banii?",
    category: "AI Imagine",
  },
  {
    slug: "copilot-vs-cursor",
    left: { name: "GitHub Copilot", emoji: "\u2AAB", color: "bg-gray-100" },
    right: { name: "Cursor", emoji: "\uD83D\uDD35", color: "bg-sky-100" },
    description: "Cel mai bun asistent de programare AI \u2014 care e pentru tine?",
    category: "AI Cod",
  },
  {
    slug: "elevenlabs-vs-murf",
    left: { name: "ElevenLabs", emoji: "\uD83D\uDFE1", color: "bg-yellow-100" },
    right: { name: "Murf AI", emoji: "\uD83D\uDFE2", color: "bg-emerald-100" },
    description: "Sintez\u0103 vocal\u0103 AI: care sun\u0103 mai natural?",
    category: "AI Audio",
  },
];
