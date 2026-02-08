import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Cookie-uri",
  description:
    "Politica de cookie-uri a site-ului inteligenta.ai — ce cookie-uri folosim, de ce și cum le poți gestiona.",
  alternates: { canonical: "https://inteligenta.ai/cookies" },
  robots: { index: false, follow: true },
};

// TODO: înlocuiește cu legal@inteligenta.ai după configurare email hosting
const CONTACT_EMAIL = "santinel.st@gmail.com";

export default function CookiesPage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">
              Acasă
            </Link>
            <span>/</span>
            <span className="text-text font-medium">Cookie-uri</span>
          </nav>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-8">
          Politica de Cookie-uri
        </h1>

        <div className="prose max-w-none space-y-8 text-text-light">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              1. Ce sunt cookie-urile?
            </h2>
            <p>
              Cookie-urile sunt fișiere text de dimensiuni mici stocate pe
              dispozitivul dumneavoastră (computer, telefon, tabletă) atunci
              când vizitați un site web. Acestea permit site-ului să vă
              recunoască la vizitele ulterioare și sunt esențiale pentru
              funcționarea corectă a majorității site-urilor moderne.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              2. Tipuri de cookie-uri utilizate
            </h2>

            <h3 className="font-semibold text-text mt-4 mb-2">
              🟢 Cookie-uri strict necesare
            </h3>
            <p>
              Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și
              nu pot fi dezactivate. Nu stochează date personale identificabile.
            </p>

            <h3 className="font-semibold text-text mt-4 mb-2">
              📊 Cookie-uri analitice (Google Analytics 4)
            </h3>
            <p>
              Ne ajută să înțelegem cum folosesc vizitatorii site-ul —
              ce pagini sunt cele mai populare, cât timp petrec pe site și de
              unde vin. Datele sunt agregate și anonimizate.
            </p>

            <h3 className="font-semibold text-text mt-4 mb-2">
              ⚙️ Cookie-uri funcționale
            </h3>
            <p>
              Rețin preferințele dumneavoastră (de exemplu, alegerea privind
              acceptarea cookie-urilor) pentru a oferi o experiență
              personalizată.
            </p>

            <h3 className="font-semibold text-text mt-4 mb-2">
              🔗 Cookie-uri de marketing / afiliere
            </h3>
            <p>
              Utilizate de partenerii noștri afiliați pentru a urmări
              conversiile. Sunt activate doar cu consimțământul dumneavoastră.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              3. Lista cookie-urilor utilizate
            </h2>
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full text-sm border border-border">
                <thead>
                  <tr className="bg-surface">
                    <th className="border border-border px-3 py-2 text-left text-text font-semibold">
                      Nume
                    </th>
                    <th className="border border-border px-3 py-2 text-left text-text font-semibold">
                      Furnizor
                    </th>
                    <th className="border border-border px-3 py-2 text-left text-text font-semibold">
                      Scop
                    </th>
                    <th className="border border-border px-3 py-2 text-left text-text font-semibold">
                      Tip
                    </th>
                    <th className="border border-border px-3 py-2 text-left text-text font-semibold">
                      Durată
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-3 py-2 font-mono text-xs">
                      cookie_consent
                    </td>
                    <td className="border border-border px-3 py-2">
                      inteligenta.ai
                    </td>
                    <td className="border border-border px-3 py-2">
                      Stochează preferința de cookie consent
                    </td>
                    <td className="border border-border px-3 py-2">
                      Strict necesar
                    </td>
                    <td className="border border-border px-3 py-2">
                      365 zile
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 font-mono text-xs">
                      _ga
                    </td>
                    <td className="border border-border px-3 py-2">
                      Google
                    </td>
                    <td className="border border-border px-3 py-2">
                      Distinge vizitatorii unici (GA4)
                    </td>
                    <td className="border border-border px-3 py-2">
                      Analitic
                    </td>
                    <td className="border border-border px-3 py-2">
                      2 ani
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 font-mono text-xs">
                      _ga_*
                    </td>
                    <td className="border border-border px-3 py-2">
                      Google
                    </td>
                    <td className="border border-border px-3 py-2">
                      Menține starea sesiunii GA4
                    </td>
                    <td className="border border-border px-3 py-2">
                      Analitic
                    </td>
                    <td className="border border-border px-3 py-2">
                      2 ani
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 font-mono text-xs">
                      _gid
                    </td>
                    <td className="border border-border px-3 py-2">
                      Google
                    </td>
                    <td className="border border-border px-3 py-2">
                      Distinge vizitatorii pentru rapoarte 24h
                    </td>
                    <td className="border border-border px-3 py-2">
                      Analitic
                    </td>
                    <td className="border border-border px-3 py-2">
                      24 ore
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2 font-mono text-xs">
                      irclickid / irmpname
                    </td>
                    <td className="border border-border px-3 py-2">
                      impact.com
                    </td>
                    <td className="border border-border px-3 py-2">
                      Tracking conversii afiliate
                    </td>
                    <td className="border border-border px-3 py-2">
                      Marketing
                    </td>
                    <td className="border border-border px-3 py-2">
                      30 zile
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              4. Mecanismul de consimțământ
            </h2>
            <p>
              La prima vizită, veți vedea un banner de cookie consent care vă
              permite să:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>
                <strong>Acceptați toate</strong> cookie-urile
              </li>
              <li>
                <strong>Acceptați doar cookie-urile necesare</strong> (analitice
                și de marketing vor fi dezactivate)
              </li>
            </ul>
            <p className="mt-2">
              Cookie-urile analitice (GA4) și de marketing sunt încărcate{" "}
              <strong>doar după consimțământul explicit</strong>. Puteți modifica
              preferințele oricând ștergând cookie-ul{" "}
              <code className="bg-surface px-1 py-0.5 rounded text-xs">
                cookie_consent
              </code>{" "}
              din browser — banner-ul va apărea din nou.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              5. Cum dezactivezi cookie-urile din browser
            </h2>
            <p>
              Puteți gestiona sau șterge cookie-urile din setările browserului
              dumneavoastră. Instrucțiuni pentru browserele populare:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>
                <strong>Google Chrome:</strong> Setări → Confidențialitate și
                securitate → Cookie-uri
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Setări → Confidențialitate →
                Cookie-uri și date de site
              </li>
              <li>
                <strong>Safari:</strong> Preferințe → Confidențialitate →
                Gestionare date site-uri
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Setări → Cookie-uri și permisiuni
                de site
              </li>
            </ul>
            <p className="mt-2">
              Dezactivarea cookie-urilor poate afecta funcționarea corectă a
              unor secțiuni ale site-ului.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              6. Mai multe informații
            </h2>
            <p>
              Pentru informații detaliate despre protecția datelor, consultați{" "}
              <Link
                href="/confidentialitate"
                className="text-primary hover:underline"
              >
                Politica de Confidențialitate
              </Link>
              . Pentru întrebări, scrieți la:{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-primary hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-sm text-text-light">
          <p>Ultima actualizare: Februarie 2026</p>
        </div>
      </section>
    </>
  );
}
