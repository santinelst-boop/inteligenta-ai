import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Declarație de Afiliere",
  description:
    "Transparență privind link-urile afiliate de pe inteligenta.ai — cum funcționează, ce programe folosim și cum rămânem obiectivi.",
  alternates: { canonical: "https://inteligenta.ai/afiliere" },
  robots: { index: false, follow: true },
};

// TODO: înlocuiește cu afiliere@inteligenta.ai după configurare email hosting
// Emails planificate: contact@, publicitate@, redactie@, legal@, newsletter@, afiliere@
const AFFILIATE_EMAIL = "santinel.st@gmail.com";

const affiliatePrograms = [
  {
    name: "Hostinger",
    category: "Hosting web & AI tools",
  },
  {
    name: "Grammarly",
    category: "Scriere asistată de AI",
  },
  {
    name: "Canva",
    category: "Design grafic AI",
  },
  {
    name: "Jasper AI",
    category: "Generare de conținut",
  },
  {
    name: "NordVPN",
    category: "Securitate și confidențialitate",
  },
  {
    name: "Surfer SEO",
    category: "SEO și optimizare conținut",
  },
  {
    name: "Amazon Associates",
    category: "Cărți, gadgeturi și electronice",
  },
  {
    name: "impact.com",
    category: "Rețea de afiliere (multipli advertiseri)",
  },
];

export default function AfilierePage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">
              Acasă
            </Link>
            <span>/</span>
            <span className="text-text font-medium">Afiliere</span>
          </nav>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-8">
          Declarație de Afiliere
        </h1>

        <div className="prose max-w-none space-y-8 text-text-light">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              1. Ce sunt link-urile afiliate?
            </h2>
            <p>
              inteligenta.ai participă la programe de afiliere cu diverși
              furnizori de instrumente și servicii AI. Acest lucru înseamnă că
              unele link-uri de pe site sunt &quot;link-uri afiliate&quot; — dacă
              faceți clic pe ele și achiziționați un produs sau serviciu, noi
              primim un comision de la furnizor.
            </p>
            <p className="mt-2 font-semibold text-text">
              Important: Nu plătiți niciun cost suplimentar. Prețul rămâne
              identic indiferent dacă folosiți link-ul nostru sau mergeți direct
              pe site-ul furnizorului.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              2. Cum funcționează
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Faceți clic pe un link de recenzie, un buton &quot;Încearcă
                gratuit&quot; sau un link din comparații
              </li>
              <li>
                Sunteți redirecționat către site-ul oficial al furnizorului
                prin pagina noastră de tracking (
                <code className="bg-surface px-1 py-0.5 rounded text-xs">
                  /go/[slug]
                </code>
                )
              </li>
              <li>
                Dacă efectuați o achiziție sau vă înregistrați, noi primim un
                comision (de obicei între 10-30% din valoare)
              </li>
              <li>
                Comisioanele ne permit să menținem site-ul activ, să
                achiziționăm instrumente pentru testare și să producem conținut
                de calitate
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              3. Obiectivitate și independență editorială
            </h2>
            <p>
              Ne angajăm ferm ca relațiile de afiliere să <strong>nu
              influențeze</strong> conținutul editorial:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>
                Recenziile reflectă experiența noastră reală după testarea
                fiecărui instrument
              </li>
              <li>
                Acordăm scoruri negative dacă un produs nu merită recomandarea,
                chiar dacă avem un acord de afiliere cu furnizorul
              </li>
              <li>
                Recomandăm și produse cu care nu avem relație de afiliere, dacă
                sunt cele mai bune opțiuni
              </li>
              <li>
                Nu acceptăm plăți pentru recenzii pozitive sau pentru
                modificarea scorurilor
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              4. Programele noastre de afiliere
            </h2>
            <p>
              În prezent, avem relații de afiliere cu următorii furnizori și
              rețele:
            </p>
            <div className="overflow-x-auto mt-3">
              <table className="min-w-full text-sm border border-border">
                <thead>
                  <tr className="bg-surface">
                    <th className="border border-border px-4 py-2 text-left text-text font-semibold">
                      Program
                    </th>
                    <th className="border border-border px-4 py-2 text-left text-text font-semibold">
                      Categorie
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {affiliatePrograms.map((program) => (
                    <tr key={program.name}>
                      <td className="border border-border px-4 py-2 font-medium">
                        {program.name}
                      </td>
                      <td className="border border-border px-4 py-2">
                        {program.category}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm">
              Această listă este actualizată periodic pe măsură ce adăugăm sau
              eliminăm parteneriate.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              5. Cum recunoști un link afiliat
            </h2>
            <p>
              Link-urile afiliate de pe inteligenta.ai sunt identificabile
              prin:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>
                Redirectarea prin{" "}
                <code className="bg-surface px-1 py-0.5 rounded text-xs">
                  inteligenta.ai/go/...
                </code>
              </li>
              <li>
                Butoanele cu text de tipul &quot;Încearcă gratuit&quot;,
                &quot;Accesează oferta&quot; sau &quot;Vezi prețul&quot;
              </li>
              <li>
                Mențiunea{" "}
                <span className="italic">
                  &quot;Acest site conține link-uri de afiliere&quot;
                </span>{" "}
                afișată în footer-ul fiecărei pagini
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              6. Propuneri de parteneriat
            </h2>
            <p>
              Dacă sunteți un furnizor de instrumente AI și doriți să
              colaborați cu inteligenta.ai, ne puteți contacta la:{" "}
              <a
                href={`mailto:${AFFILIATE_EMAIL}`}
                className="text-primary hover:underline"
              >
                {AFFILIATE_EMAIL}
              </a>
            </p>
            <p className="mt-2">
              Evaluăm fiecare propunere pe baza calității produsului și a
              relevanței pentru audiența noastră. Nu garantăm includerea în
              recenzii sau comparații.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              7. Întrebări?
            </h2>
            <p>
              Dacă aveți întrebări despre politica noastră de afiliere, nu
              ezitați să ne scrieți la{" "}
              <a
                href={`mailto:${AFFILIATE_EMAIL}`}
                className="text-primary hover:underline"
              >
                {AFFILIATE_EMAIL}
              </a>
              . Transparența este o valoare fundamentală a inteligenta.ai și
              suntem deschiși la orice discuție.
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
