import Link from "next/link";
import { comparisons } from "@/data/comparisons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparații AI — Tool vs Tool, cine câștigă?",
  description:
    "Comparații directe între instrumentele AI populare. ChatGPT vs Claude, Midjourney vs DALL-E și multe altele.",
  alternates: { canonical: "https://inteligenta.ai/comparatii" },
  openGraph: {
    title: "Comparații AI — inteligenta.ai",
    description:
      "Comparații directe între instrumentele AI populare. Cine câștigă?",
    url: "https://inteligenta.ai/comparatii",
  },
};

export default function ComparatiiPage() {
  return (
    <>
      <section className="hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Comparații AI
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Analize cap la cap pentru a face alegerea corectă
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
