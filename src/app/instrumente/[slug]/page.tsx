import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { featuredTools, categories } from "@/data/tools";
import ToolIcon from "@/components/ToolIcon";
import AffiliateCTA from "@/components/AffiliateCTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = featuredTools.find((t) => t.id === slug);
  if (!tool) return {};

  return {
    title: `${tool.name} - Recenzie Completa 2026 | inteligenta.ai`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} - Recenzie Completa 2026`,
      description: tool.description,
      type: "website",
      url: `https://inteligenta.ai/instrumente/${slug}`,
      siteName: "inteligenta.ai",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} - Recenzie Completa 2026`,
      description: tool.description,
    },
    alternates: {
      canonical: `https://inteligenta.ai/instrumente/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return featuredTools.map((tool) => ({
    slug: tool.id,
  }));
}

export default async function InstrumentPage({ params }: Props) {
  const { slug } = await params;
  const tool = featuredTools.find((t) => t.id === slug);
  if (!tool) notFound();

  const categoryName =
    categories.find((c) => c.id === tool.category)?.name || tool.category;
  const relatedTools = featuredTools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "AI Tool",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating,
      bestRating: 5,
      ratingCount: 100,
    },
    offers: {
      "@type": "Offer",
      price: tool.pricing === "Gratuit" ? "0" : undefined,
      priceCurrency: "USD",
    },
  };

  const reviewData = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: tool.name,
    },
    author: {
      "@type": "Organization",
      name: "inteligenta.ai",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: tool.rating,
      bestRating: "5",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewData) }}
      />

      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Acasa</Link>
            <span>/</span>
            <Link href="/instrumente" className="hover:text-primary transition-colors">Instrumente</Link>
            <span>/</span>
            <span className="text-text font-medium truncate">{tool.name}</span>
          </nav>
        </div>
      </div>

      <section className="hero-gradient py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-5">
            <div className="shrink-0">
              <ToolIcon name={tool.name} toolId={tool.id} size="lg" className="bg-white/10" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase">
                  {categoryName}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                  {tool.pricing}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                {tool.name}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                {tool.description}
              </p>
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= Math.round(tool.rating) ? "star-filled" : "star-empty"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white font-medium ml-1">{tool.rating}</span>
              </div>
              <a
                href={`/go/${tool.id}`}
                target="_blank"
                rel="nofollow sponsored"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Incearca {tool.name} \u2192
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-primary bg-primary/5 px-2 py-0.5 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        <AffiliateCTA tool={tool} variant="box" />
      </section>

      {relatedTools.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h2 className="text-xl font-bold text-text mb-6">
            Alte instrumente din {categoryName}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedTools.map((t) => (
              <Link
                key={t.id}
                href={`/instrumente/${t.id}`}
                className="bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow"
              >
                <ToolIcon name={t.name} toolId={t.id} size="sm" className="mb-2" />
                <p className="font-semibold text-text text-sm">{t.name}</p>
                <p className="text-xs text-text-light">{t.pricing}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
