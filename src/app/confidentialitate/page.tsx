import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate",
  description:
    "Politica de confidențialitate GDPR a site-ului inteligenta.ai — cum colectăm, utilizăm și protejăm datele tale personale.",
  alternates: { canonical: "https://inteligenta.ai/confidentialitate" },
  robots: { index: false, follow: true },
};

// TODO: înlocuiește cu legal@inteligenta.ai după configurare email hosting
const DPO_EMAIL = "contact@inteligenta.ai";

export default function ConfidentialitatePage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">
              Acasă
            </Link>
            <span>/</span>
            <span className="text-text font-medium">Confidențialitate</span>
          </nav>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-8">
          Politica de Confidențialitate
        </h1>

        <div className="prose max-w-none space-y-8 text-text-light">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              1. Introducere
            </h2>
            <p>
              La inteligenta.ai, protejarea datelor dumneavoastră personale este
              o prioritate. Această Politică de Confidențialitate explică ce
              date colectăm, cum le utilizăm, cui le transmitem și ce drepturi
              aveți, în conformitate cu Regulamentul General privind Protecția
              Datelor (GDPR — Regulamentul UE 2016/679) și legislația română
              aplicabilă.
            </p>
            <p className="mt-2">
              <strong>Operator de date:</strong> inteligenta.ai
              <br />
              <strong>Contact DPO:</strong>{" "}
              <a
                href={`mailto:${DPO_EMAIL}`}
                className="text-primary hover:underline"
              >
                {DPO_EMAIL}
              </a>
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              2. Ce date colectăm
            </h2>

            <h3 className="font-semibold text-text mt-4 mb-2">
              2.1. Date furnizate direct de dumneavoastră
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Adresa de email</strong> — când vă abonați la
                newsletter-ul nostru
              </li>
              <li>
                <strong>Mesaje de contact</strong> — când ne scrieți prin
                formularul de contact sau email
              </li>
            </ul>

            <h3 className="font-semibold text-text mt-4 mb-2">
              2.2. Date colectate automat
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Date de navigare</strong> — pagini vizitate, durata
                vizitei, sursa traficului (prin Google Analytics 4)
              </li>
              <li>
                <strong>Date tehnice</strong> — tipul browserului, sistemul de
                operare, rezoluția ecranului, adresa IP (anonimizată)
              </li>
              <li>
                <strong>Cookie-uri</strong> — conform{" "}
                <Link
                  href="/cookies"
                  className="text-primary hover:underline"
                >
                  Politicii de Cookie-uri
                </Link>
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              3. Google Analytics 4 (GA4)
            </h2>
            <p>
              Utilizăm Google Analytics 4 pentru a înțelege cum este utilizat
              Site-ul. GA4 colectează:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Paginile vizitate și evenimentele de interacțiune</li>
              <li>Sursa traficului (organic, referral, direct)</li>
              <li>Date demografice agregate (țară, oraș)</li>
              <li>Tipul dispozitivului și browserului</li>
              <li>Durata sesiunilor</li>
            </ul>
            <p className="mt-2">
              GA4 nu colectează date personale identificabile. Adresele IP sunt
              anonimizate. Datele sunt stocate pe serverele Google (SUA), în
              baza Clauzelor Contractuale Standard (SCC) aprobate de Comisia
              Europeană. Puteți dezactiva urmărirea GA4 instalând extensia{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              .
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              4. Cookie-uri
            </h2>
            <p>
              Utilizăm cookie-uri strict necesare, analitice (GA4), funcționale
              (preferința de consent) și de tracking afiliat. Cookie-urile
              analitice și de marketing sunt activate doar după consimțământul
              dumneavoastră explicit prin banner-ul de cookie consent.
            </p>
            <p className="mt-2">
              Pentru lista completă a cookie-urilor utilizate, consultați{" "}
              <Link
                href="/cookies"
                className="text-primary hover:underline"
              >
                Politica de Cookie-uri
              </Link>
              .
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              5. Newsletter
            </h2>
            <p>
              Dacă vă abonați la newsletter-ul nostru, adresa de email va fi
              stocată și procesată prin platforma MailerLite (MailerLite Ltd.,
              Lituania, UE). MailerLite acționează ca procesator de date în
              conformitate cu GDPR.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>
                <strong>Temei legal:</strong> Consimțământul dumneavoastră
                (Art.&nbsp;6 alin.&nbsp;1 lit.&nbsp;a GDPR)
              </li>
              <li>
                <strong>Scop:</strong> Trimiterea de noutăți, recenzii și ghiduri
                AI săptămânal
              </li>
              <li>
                <strong>Dezabonare:</strong> Link de dezabonare în fiecare email
                sau prin contactarea noastră directă
              </li>
              <li>
                <strong>Stocare:</strong> Datele sunt păstrate până la
                dezabonare sau la solicitarea ștergerii
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              6. Scopul și temeiul legal al prelucrării
            </h2>
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full text-sm border border-border">
                <thead>
                  <tr className="bg-surface">
                    <th className="border border-border px-4 py-2 text-left text-text font-semibold">
                      Scop
                    </th>
                    <th className="border border-border px-4 py-2 text-left text-text font-semibold">
                      Temei legal (GDPR)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Analiză trafic site (GA4)
                    </td>
                    <td className="border border-border px-4 py-2">
                      Consimțământ — Art.&nbsp;6(1)(a)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Trimitere newsletter
                    </td>
                    <td className="border border-border px-4 py-2">
                      Consimțământ — Art.&nbsp;6(1)(a)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Răspuns la mesaje de contact
                    </td>
                    <td className="border border-border px-4 py-2">
                      Interes legitim — Art.&nbsp;6(1)(f)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Tracking afiliat (măsurare conversii)
                    </td>
                    <td className="border border-border px-4 py-2">
                      Consimțământ — Art.&nbsp;6(1)(a)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Funcționare cookie consent
                    </td>
                    <td className="border border-border px-4 py-2">
                      Interes legitim — Art.&nbsp;6(1)(f)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              7. Transfer de date către terți
            </h2>
            <div className="overflow-x-auto mt-2">
              <table className="min-w-full text-sm border border-border">
                <thead>
                  <tr className="bg-surface">
                    <th className="border border-border px-4 py-2 text-left text-text font-semibold">
                      Furnizor
                    </th>
                    <th className="border border-border px-4 py-2 text-left text-text font-semibold">
                      Locație
                    </th>
                    <th className="border border-border px-4 py-2 text-left text-text font-semibold">
                      Garanții
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Google LLC (Analytics)
                    </td>
                    <td className="border border-border px-4 py-2">SUA</td>
                    <td className="border border-border px-4 py-2">
                      Clauze Contractuale Standard (SCC)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      MailerLite (Newsletter)
                    </td>
                    <td className="border border-border px-4 py-2">
                      UE (Lituania)
                    </td>
                    <td className="border border-border px-4 py-2">
                      Date procesate în UE
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-2">
                      Vercel Inc. (Hosting)
                    </td>
                    <td className="border border-border px-4 py-2">SUA</td>
                    <td className="border border-border px-4 py-2">
                      Clauze Contractuale Standard (SCC)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              8. Drepturile dumneavoastră (GDPR)
            </h2>
            <p>
              În conformitate cu GDPR, aveți următoarele drepturi:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
              <li>
                <strong>Dreptul de acces</strong> (Art.&nbsp;15) — puteți solicita o
                copie a datelor personale pe care le deținem despre dumneavoastră
              </li>
              <li>
                <strong>Dreptul la rectificare</strong> (Art.&nbsp;16) — puteți
                solicita corectarea datelor inexacte
              </li>
              <li>
                <strong>Dreptul la ștergere</strong> (Art.&nbsp;17) — puteți
                solicita ștergerea datelor (&quot;dreptul de a fi uitat&quot;)
              </li>
              <li>
                <strong>Dreptul la restricționarea prelucrării</strong>{" "}
                (Art.&nbsp;18) — puteți solicita limitarea prelucrării în
                anumite condiții
              </li>
              <li>
                <strong>Dreptul la portabilitatea datelor</strong> (Art.&nbsp;20)
                — puteți solicita datele într-un format structurat, utilizat
                frecvent și care poate fi citit automat
              </li>
              <li>
                <strong>Dreptul la opoziție</strong> (Art.&nbsp;21) — puteți
                vă opune prelucrării bazate pe interes legitim
              </li>
              <li>
                <strong>Dreptul de a retrage consimțământul</strong> — oricând,
                fără a afecta legalitatea prelucrării anterioare
              </li>
            </ul>
            <p className="mt-3">
              Pentru exercitarea acestor drepturi, scrieți la:{" "}
              <a
                href={`mailto:${DPO_EMAIL}`}
                className="text-primary hover:underline"
              >
                {DPO_EMAIL}
              </a>
              . Vom răspunde în termen de 30 de zile calendaristice.
            </p>
            <p className="mt-2">
              De asemenea, aveți dreptul de a depune o plângere la{" "}
              <strong>
                Autoritatea Națională de Supraveghere a Prelucrării Datelor cu
                Caracter Personal (ANSPDCP)
              </strong>{" "}
              — <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.dataprotection.ro</a>.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              9. Perioada de stocare
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Date analytics (GA4):</strong> 14 luni de la colectare
                (setare implicită GA4)
              </li>
              <li>
                <strong>Date newsletter:</strong> Până la dezabonare sau
                solicitarea explicită de ștergere
              </li>
              <li>
                <strong>Mesaje de contact:</strong> Maximum 12 luni de la
                finalizarea conversației
              </li>
              <li>
                <strong>Cookie-uri:</strong> Conform duratelor specificate în{" "}
                <Link
                  href="/cookies"
                  className="text-primary hover:underline"
                >
                  Politica de Cookie-uri
                </Link>
              </li>
            </ul>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              10. Securitatea datelor
            </h2>
            <p>
              Implementăm măsuri tehnice și organizatorice adecvate pentru
              protejarea datelor personale: comunicare criptată (HTTPS/TLS),
              acces restricționat la baze de date, actualizări regulate ale
              software-ului și selectarea atentă a furnizorilor de servicii.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              11. Modificări ale politicii
            </h2>
            <p>
              Această politică poate fi actualizată periodic. Versiunea curentă
              va fi disponibilă permanent pe această pagină, cu data ultimei
              actualizări afișată mai jos.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">12. Contact</h2>
            <p>
              Pentru orice întrebări privind prelucrarea datelor personale,
              contactați-ne la:{" "}
              <a
                href={`mailto:${DPO_EMAIL}`}
                className="text-primary hover:underline"
              >
                {DPO_EMAIL}
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
