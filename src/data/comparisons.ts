export interface Comparison {
  slug: string;
  left: { name: string; emoji: string; color: string; toolId?: string };
  right: { name: string; emoji: string; color: string; toolId?: string };
  description: string;
  category: string;
}

export const comparisons: Comparison[] = [
  {
    slug: "chatgpt-vs-claude",
    left: { name: "ChatGPT", emoji: "🟢", color: "bg-green-100", toolId: "chatgpt" },
    right: { name: "Claude", emoji: "🟠", color: "bg-orange-100", toolId: "claude" },
    description: "Cine câștigă bătălia chatbot-urilor AI în 2026?",
    category: "AI Text",
  },
  {
    slug: "midjourney-vs-dalle",
    left: { name: "Midjourney", emoji: "🔵", color: "bg-blue-100", toolId: "midjourney" },
    right: { name: "DALL-E 3", emoji: "🟣", color: "bg-purple-100", toolId: "dalle-3" },
    description: "Care generator de imagini merită banii?",
    category: "AI Imagine",
  },
  {
    slug: "copilot-vs-cursor",
    left: { name: "GitHub Copilot", emoji: "⪫", color: "bg-gray-100", toolId: "github-copilot" },
    right: { name: "Cursor", emoji: "🔵", color: "bg-sky-100", toolId: "cursor" },
    description: "Cel mai bun asistent de programare AI — care e pentru tine?",
    category: "AI Cod",
  },
  {
    slug: "elevenlabs-vs-murf",
    left: { name: "ElevenLabs", emoji: "🟡", color: "bg-yellow-100", toolId: "elevenlabs" },
    right: { name: "Murf AI", emoji: "🟢", color: "bg-emerald-100" },
    description: "Sinteză vocală AI: care sună mai natural?",
    category: "AI Audio",
  },
];
