import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getToolBySlug, getAllToolSlugs } from "@/lib/sanity";
import { getPricingLabel, toStarRating , getLogoUrl } from "@/lib/types";
import type { SanityTool } from "@/lib/types";

export const revalidate = 3600;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool: SanityTool | null = await getToolBySlug(slug);
  if (!tool) return {};

  const title = tool.seo?.metaTitle || `${tool.name} - Recenzie Completă 2026 | inteligenta.ai`;
  const description = tool.seo?.metaDescription || tool.description;

  return {
    title,
    description,
    openGraph: {
      title: tool.seo?.metaTitle || `${tool.name} - Recenzie Completă 2026`,
      description,
      type: "website",
      url: `https://inteligenta.ai/instrumente/${slug}`,
      siteName: "inteligenta.ai",
    },
    twitter: {
      card: "summary_large_image",
      title: tool.seo?.metaTitle || `${tool.name} - Recenzie Completă 2026`,
      description,
    },
    alternates: {
      canonical: `https://inteligenta.ai/instrumente/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const slugs = await getAllToolSlugs();
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export default async function InstrumentPage({ params }: Props) {
  const { slug } = await params;
  const tool: SanityTool | null = await getToolBySlug(slug);
  if (!tool) notFound();

  const stars = toStarRating(tool.rating);
  const pricingLabel = getPricingLabel(tool.pricing);

  const softwareData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "AI Tool",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: stars,
      bestRating: 5,
      ratingCount: 100,
    },
    offers: {
      "@type": "Offer",
      price: tool.pricing === "free" ? "0" : undefined,
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
      ratingValue: stars,
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
            <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
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
              {tool.logoUrl ? (
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
                  <Image src={tool.logoUrl} alt={tool.name} width={80} height={80} className="w-full h-full object-contain" />
                </div>
              ) : (
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-white text-3xl font-bold">
                  {tool.name[0]}
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {tool.category && (
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase">
                    {tool.category.name}
                  </span>
                )}
                <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                  {pricingLabel}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                {tool.name}
              </h1>
              {tool.tagline && (
                <p className="text-white/90 text-xl font-medium mb-2">{tool.tagline}</p>
              )}
              <p className="text-white/80 text-lg leading-relaxed mb-4">
                {tool.description}
              </p>
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className={`w-5 h-5 ${star <= Math.round(stars) ? "star-filled" : "star-empty"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white font-medium ml-1">{stars.toFixed(1)}/5</span>
                <span className="text-white/60 text-sm ml-2">({tool.rating}/10)</span>
              </div>
              <a
                href={tool.website}
                target="_blank"
                rel="nofollow sponsored"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
              >
                Încearcă {tool.name} →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Pros & Cons */}
        {(tool.pros?.length || tool.cons?.length) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {tool.pros && tool.pros.length > 0 && (
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-lg font-bold text-green-800 mb-3">✅ Avantaje</h3>
                <ul className="space-y-1">
                  {tool.pros.map((pro, i) => (
                    <li key={i} className="text-green-700 text-sm">{pro}</li>
                  ))}
                </ul>
              </div>
            )}
            {tool.cons && tool.cons.length > 0 && (
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="text-lg font-bold text-red-800 mb-3">❌ Dezavantaje</h3>
                <ul className="space-y-1">
                  {tool.cons.map((con, i) => (
                    <li key={i} className="text-red-700 text-sm">{con}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Key Features */}
        {tool.features && tool.features.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-text mb-4">Funcționalități cheie</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tool.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 bg-surface rounded-lg p-2.5">
                  <span className="text-primary mt-0.5">⚡</span>
                  <span className="text-sm text-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Use Cases */}
        {tool.useCases && tool.useCases.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-text mb-4">Ideal pentru</h2>
            <div className="flex flex-wrap gap-2">
              {tool.useCases.map((useCase, i) => (
                <span key={i} className="text-sm text-primary bg-primary/5 px-3 py-1.5 rounded-full">
                  {useCase}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Details */}
        {tool.pricingDetails && (
          <div className="mb-8 bg-surface rounded-xl p-6">
            <h2 className="text-xl font-bold text-text mb-3">💰 Prețuri</h2>
            <p className="text-text-light text-sm whitespace-pre-line">{tool.pricingDetails}</p>
          </div>
        )}

        {/* Affiliate CTA - keep existing component for backwards compatibility */}
        <div className="mb-8 bg-primary/5 rounded-xl p-6 text-center">
          <p className="text-text font-medium mb-3">Vrei să încerci {tool.name}?</p>
          <a
            href={tool.website}
            target="_blank"
            rel="nofollow sponsored"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
          >
            Vizitează {tool.name} →
          </a>
        </div>
      </section>

      {/* Alternatives */}
      {tool.alternatives && tool.alternatives.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <h2 className="text-xl font-bold text-text mb-6">
            Alternative la {tool.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tool.alternatives.map((alt) => (
              <Link
                key={alt._id}
                href={`/instrumente/${alt.slug}`}
                className="bg-card rounded-xl border border-border p-4 hover:shadow-md transition-shadow"
              >
                {getLogoUrl(alt) ? (
                  <Image src={getLogoUrl(alt)!} alt={alt.name} width={32} height={32} className="w-8 h-8 object-contain mb-2" />
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm mb-2">
                    {alt.name[0]}
                  </div>
                )}
                <p className="font-semibold text-text text-sm">{alt.name}</p>
                <p className="text-xs text-text-light">{getPricingLabel(alt.pricing)} · {toStarRating(alt.rating).toFixed(1)}/5</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
