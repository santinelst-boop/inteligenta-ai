import Link from "next/link";

export const metadata = {
  title: "Compara\u021bii AI \u2014 Cap la cap | inteligenta.ai",
  description: "Compara\u021bii detaliate \u00eentre cele mai populare instrumente AI. ChatGPT vs Claude, Midjourney vs DALL-E \u0219i multe altele.",
};

const comparisons = [
  {
    slug: "chatgpt-vs-claude",
    left: { name: "ChatGPT", emoji: "\ud83d\udfe2", color: "bg-green-100" },
    right: { name: "Claude", emoji: "\ud83d\udfe0", color: "bg-orange-100" },
    description: "Cine c\u00e2\u0219tig\u0103 b\u0103t\u0103lia chatbot-ilor AI \u00een 2026?",
    category: "AI Text",
  },
  {
    slug: "midjourney-vs-dalle",
    left: { name: "Midjourney", emoji: "\ud83d\udd35", color: "bg-blue-100" },
    right: { name: "DALL-E 3", emoji: "\ud83d\udfe3", color: "bg-purple-100" },
    description: "Care generator de imagini merit\u0103 banii?",
    category: "AI Imagine",
  },
  {
    slug: "copilot-vs-cursor",
    left: { name: "GitHub Copilot", emoji: "\u26ab", color: "bg-gray-100" },
    right: { name: "Cursor", emoji: "\ud83d\udd35", color: "bg-sky-100" },
    description: "Cel mai bun asistent de programare AI \u2014 care e pentru tine?",
    category: "AI Cod",
  },
  {
    slug: "elevenlabs-vs-murf",
    left: { name: "ElevenLabs", emoji: "\ud83d\udfe1", color: "bg-yellow-100" },
    right: { name: "Murf AI", emoji: "\ud83d\udfe2", color: "bg-emerald-100" },
    description: "Sintez\u0103 vocal\u0103 AI: care sun\u0103 mai natural?",
    category: "AI Audio",
  },
];

export default function ComparatiiPage() {
  return (
    <>
      <section className="hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Compara\u021bii AI
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Analize cap la cap pentru a face alegerea corect\u0103
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {comparisons.map((comp) => (
            <Link
              key={comp.slug}
              href={`/comparatii/${comp.slug}`}
              className="card-hover flex items-center gap-5 bg-card rounded-2xl border border-border p-6"
            >
              <div className={`w-14 h-14 rounded-xl ${comp.left.color} flex items-center justify-center text-2xl shrink-0`}>
                {comp.left.emoji}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {comp.category}
                  </span>
                </div>
                <h3 className="font-bold text-text">
                  {comp.left.name} vs {comp.right.name}
                </h3>
                <p className="text-sm text-text-light">{comp.description}</p>
              </div>
              <div className={`w-14 h-14 rounded-xl ${comp.right.color} flex items-center justify-center text-2xl shrink-0`}>
                {comp.right.emoji}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
