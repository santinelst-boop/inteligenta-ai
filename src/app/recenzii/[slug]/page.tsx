import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { latestArticles, featuredTools } from "@/data/tools";
import { getArticleContent } from "@/data/article-content";

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
      url: `https://inteligenta-ai.vercel.app/recenzii/${slug}`,
    },
    alternates: {
      canonical: `https://inteligenta-ai.vercel.app/recenzii/${slug}`,
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

  const content = getArticleContent(slug);
  if (!content) notFound();

  const relatedTools = featuredTools
    .filter((t) => t.category === article.category)
    .slice(0, 3);

  const relatedArticles = latestArticles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

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
      url: "https://inteligenta-ai.vercel.app",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://inteligenta-ai.vercel.app/recenzii/${slug}`,
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

      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">
              Acas\u0103
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

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
              {article.category.replace("ai-", "AI ")}
            </span>
            <time className="text-sm text-text-light" dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("ro-RO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-sm text-text-light">
              {article.readTime} lectur\u0103
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-text leading-tight mb-4">
            {article.title}
          </h1>

          <p className="text-lg text-text-light leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-text prose-p:text-text-light prose-a:text-primary prose-strong:text-text prose-li:text-text-light"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Affiliate CTA Box */}
        {relatedTools.length > 0 && (
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-text mb-4">
              Instrumente men\u021bionate \u00een acest articol
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedTools.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {tool.name.charAt(0)}
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
              <Link href="/despre" className="underline">
                politica noastr\u0103
              </Link>
              .
            </p>
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-text mb-6">
              Articole similare
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/recenzii/${a.slug}`}
                  className="group bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
                >
                  <span className="text-xs font-bold text-primary uppercase">
                    {a.category.replace("ai-", "AI ")}
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
