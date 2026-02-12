import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { latestArticles, featuredTools, categories } from "@/data/tools";
import { articleContent } from "@/data/article-content";
import AffiliateCTA from "@/components/AffiliateCTA";
import ArticleHeroImage from "@/components/ArticleHeroImage";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = latestArticles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: `${article.title} | inteligenta.ai`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      url: `https://inteligenta.ai/recenzii/${slug}`,
      siteName: "inteligenta.ai",
      ...(article.imageUrl ? { images: [{ url: `https://inteligenta.ai${article.imageUrl}`, width: 1200, height: 669 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
    alternates: {
      canonical: `https://inteligenta.ai/recenzii/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return latestArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = latestArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const content = articleContent[slug]?.content;
  if (!content) notFound();

  const relatedTools = featuredTools
    .filter((t) => t.category === article.category)
    .slice(0, 3);

  const relatedArticles = latestArticles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  const categoryName =
    categories.find((c) => c.id === article.category)?.name || article.category;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "inteligenta.ai",
    },
    publisher: {
      "@type": "Organization",
      name: "inteligenta.ai",
      url: "https://inteligenta.ai",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://inteligenta.ai/recenzii/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">
              Acasa
            </Link>
            <span>/</span>
            <Link
              href="/recenzii"
              className="hover:text-primary transition-colors"
            >
              Recenzii
            </Link>
            <span>/</span>
            <span className="text-text font-medium truncate">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {article.imageUrl ? (
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        ) : (
          <ArticleHeroImage category={article.category} size="lg" className="w-full rounded-2xl" />
        )}
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
              {categoryName}
            </span>
            <time className="text-sm text-text-light" dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("ro-RO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-sm text-text-light">
              {article.readTime} lectura
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-4">
            {article.title}
          </h1>

          <p className="text-lg text-text-light leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        {relatedTools.length > 0 && (
          <AffiliateCTA tool={relatedTools[0]} variant="inline" />
        )}

        <div
          className="prose prose-lg max-w-none prose-headings:text-text prose-p:text-text-light prose-a:text-primary prose-strong:text-text prose-li:text-text-light"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {relatedTools.length > 0 && (
          <AffiliateCTA tool={relatedTools[0]} variant="box" />
        )}

        {relatedTools.length > 0 && (
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-text mb-4">
              Instrumente mentionate in acest articol
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedTools.map((tool) => (
                <a
                  key={tool.id}
                  href={`/go/${tool.id}`}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden">
                    {tool.logoUrl ? (
                      <Image
                        src={tool.logoUrl}
                        alt={tool.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-primary font-bold text-sm">
                        {tool.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-text text-sm">
                      {tool.name}
                    </p>
                    <p className="text-xs text-text-light">{tool.pricing}</p>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-xs text-text-light mt-4">
              * Unele linkuri sunt linkuri afiliate. Citeste{" "}
              <Link href="/afiliere" className="underline">
                politica noastra
              </Link>
              .
            </p>
          </div>
        )}

        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-text mb-3">
              Articole similare
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/recenzii/${a.slug}`}
                  className="group bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
                >
                  <span className="text-xs font-bold text-primary uppercase">
                    {categories.find((c) => c.id === a.category)?.name || a.category}
                  </span>
                  <h4 className="font-bold text-text mt-1 group-hover:text-primary transition-colors line-clamp-2">
                    {a.title}
                  </h4>
                  <p className="text-sm text-text-light mt-2 line-clamp-2">
                    {a.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}
