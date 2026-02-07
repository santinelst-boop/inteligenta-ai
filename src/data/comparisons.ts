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
    left: { name: "ChatGPT", emoji: "🟢", color: "bg-green-100" },
    right: { name: "Claude", emoji: "🟠", color: "bg-orange-100" },
    description: "Cine câștigă bătălia chatbot-urilor AI în 2026?",
    category: "AI Text",
  },
  {
    slug: "midjourney-vs-dalle",
    left: { name: "Midjourney", emoji: "🔵", color: "bg-blue-100" },
    right: { name: "DALL-E 3", emoji: "🟣", color: "bg-purple-100" },
    description: "Care generator de imagini merită banii?",
    category: "AI Imagine",
  },
  {
    slug: "copilot-vs-cursor",
    left: { name: "GitHub Copilot", emoji: "⪫", color: "bg-gray-100" },
    right: { name: "Cursor", emoji: "🔵", color: "bg-sky-100" },
    description: "Cel mai bun asistent de programare AI — care e pentru tine?",
    category: "AI Cod",
  },
  {
    slug: "elevenlabs-vs-murf",
    left: { name: "ElevenLabs", emoji: "🟡", color: "bg-yellow-100" },
    right: { name: "Murf AI", emoji: "🟢", color: "bg-emerald-100" },
    description: "Sinteză vocală AI: care sună mai natural?",
    category: "AI Audio",
  },
];