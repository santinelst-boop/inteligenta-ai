import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl mb-6">🤖</div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-3">
          Pagina nu a fost găsită
        </h1>
        <p className="text-text-light text-lg mb-8">
          Se pare că această pagină nu există sau a fost mutată. Dar nu-ți face
          griji — avem multe de explorat!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-colors"
          >
            Înapoi la pagina principală
          </Link>
          <Link
            href="/instrumente"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border text-text font-semibold hover:border-primary hover:text-primary transition-colors"
          >
            Explorează instrumente AI
          </Link>
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-sm text-text-light mb-3">
            Poate te interesează:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/recenzii"
              className="px-4 py-2 rounded-full bg-surface text-sm text-text-light hover:text-primary transition-colors"
            >
              Recenzii AI
            </Link>
            <Link
              href="/comparatii"
              className="px-4 py-2 rounded-full bg-surface text-sm text-text-light hover:text-primary transition-colors"
            >
              Comparații
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full bg-surface text-sm text-text-light hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/instrumente"
              className="px-4 py-2 rounded-full bg-surface text-sm text-text-light hover:text-primary transition-colors"
            >
              Instrumente
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
