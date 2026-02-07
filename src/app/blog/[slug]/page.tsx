import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { articleContent } from '@/data/article-content';
import { latestArticles } from '@/data/tools';
import AffiliateDisclosure from '@/components/AffiliateDisclosure';
import { Calendar, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
interface ArticleData {
  title: string;
  metaDescription: string;
  content: string;
}
export async function generateStaticParams() {
  return Object.keys(articleContent).map((slug) => ({
    slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articleContent[slug as keyof typeof articleContent] as
    | ArticleData
    | undefined;
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
    };
  }
  const articleMeta = latestArticles.find((a) => a.slug === slug);
  return {
    title: `${article.title} | inteligenta.ai`,
    description: article.metaDescription,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: 'article',
      url: `https://inteligenta.ai/blog/${slug}`,
      siteName: "inteligenta.ai",
      publishedTime: articleMeta?.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription,
    },
    alternates: {
      canonical: `https://inteligenta.ai/blog/${slug}`,
    },
  };
}
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleContent[slug as keyof typeof articleContent] as
    | ArticleData
    | undefined;
  if (!article) {
    notFound();
  }
  const articleMeta = latestArticles.find((a) => a.slug === slug);
  const relatedArticles = latestArticles
    .filter((a) => a.category === articleMeta?.category && a.slug !== slug)
    .slice(0, 3);
  const displayedRelated =
    relatedArticles.length > 0
      ? relatedArticles
      : latestArticles.filter((a) => a.slug !== slug).slice(0, 3);
  const formattedDate = articleMeta?.date
    ? new Date(articleMeta.date).toLocaleDateString('ro-RO', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : '';
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900 transition-colors duration-200">
              Acasa
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-slate-900 transition-colors duration-200">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium truncate">
              {article.title}
            </span>
          </div>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors duration-200 mb-8 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Inapoi la blog
        </Link>
      </div>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          {articleMeta?.category && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide">
                {articleMeta.category}
              </span>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-600 border-b border-slate-200 pb-6">
            {formattedDate && (
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-400" />
                <time dateTime={articleMeta?.date} className="text-sm font-medium">
                  {formattedDate}
                </time>
              </div>
            )}
            {articleMeta?.readTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium">{articleMeta.readTime}</span>
              </div>
            )}
          </div>
        </header>
        <div
          className="prose prose-slate prose-lg max-w-none mb-12 prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4 prose-li:text-slate-700 prose-strong:text-slate-900 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        <AffiliateDisclosure />
      </article>
      {displayedRelated.length > 0 && (
        <section className="mt-16 pt-16 border-t border-slate-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-10">
              Articole conexe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayedRelated.map((relatedArticle) => {
                const relatedDate = new Date(relatedArticle.date).toLocaleDateString(
                  'ro-RO',
                  { year: 'numeric', month: 'short', day: 'numeric' }
                );
                return (
                  <Link
                    key={relatedArticle.slug}
                    href={`/blog/${relatedArticle.slug}`}
                    className="group overflow-hidden rounded-lg border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="p-5">
                      <div className="mb-3">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                          {relatedArticle.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <time dateTime={relatedArticle.date}>{relatedDate}</time>
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Descopera mai multe unelte AI
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Exploreaza curatorul nostru de unelte AI de top pentru a gasi solutia perfecta pentru nevoile tale.
          </p>
          <Link
            href="/instrumente"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Vezi toate uneltele
          </Link>
        </div>
      </section>
    </div>
  );
}
