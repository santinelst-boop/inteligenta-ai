import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și Condiții",
  description:
    "Termenii și condițiile de utilizare ale portalului inteligenta.ai — recenzii, comparații și ghiduri AI.",
  alternates: { canonical: "https://inteligenta.ai/termeni" },
  robots: { index: false, follow: true },
};

// TODO: înlocuiește cu contact@inteligenta.ai după configurare email hosting
// Emails planificate: contact@, publicitate@, redactie@, legal@, newsletter@, afiliere@
const CONTACT_EMAIL = "santinel.st@gmail.com";

export default function TermeniPage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">
              Acasă
            </Link>
            <span>/</span>
            <span className="text-text font-medium">Termeni și Condiții</span>
          </nav>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-8">
          Termeni și Condiții de Utilizare
        </h1>

        <div className="prose max-w-none space-y-8 text-text-light">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              1. Acceptarea termenilor
            </h2>
            <p>
              Prin accesarea și utilizarea site-ului inteligenta.ai (&quot;Site-ul&quot;),
              acceptați în totalitate acești Termeni și Condiții. Dacă nu sunteți
              de acord cu oricare dintre prevederi, vă rugăm să nu utilizați
              Site-ul. Continuarea navigării constituie acceptarea implicită a
              termenilor în vigoare la momentul accesării.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              2. Descrierea serviciului
            </h2>
            <p>
              inteligenta.ai este un portal informativ dedicat inteligenței
              artificiale, care oferă:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Recenzii detaliate ale instrumentelor AI</li>
              <li>Comparații directe între produse similare</li>
              <li>Ghiduri practice și tutoriale</li>
              <li>Un director cu peste 200 de instrumente AI clasificate</li>
              <li>Articole de blog și noutăți din domeniu</li>
            </ul>
            <p className="mt-2">
              Conținutul este oferit exclusiv în scop informativ și educațional.
              Nu constituie consultanță profesională, financiară sau juridică.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              3. Proprietate intelectuală
            </h2>
            <p>
              Toate materialele publicate pe inteligenta.ai — texte, grafice,
              logo-uri, imagini, structura site-ului și codul sursă — sunt
              proprietatea inteligenta.ai sau sunt utilizate cu licență și sunt
              protejate de legislația română și internațională privind drepturile
              de autor. Nu aveți dreptul să:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>
                Reproduceți, distribuiți sau publicați conținutul fără acord
                scris
              </li>
              <li>Modificați sau creați lucrări derivate</li>
              <li>
                Utilizați conținutul în scopuri comerciale fără aprobare
                prealabilă
              </li>
              <li>
                Eliminați sau modificați notificările de copyright sau atribuire
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              4. Link-uri către terți
            </h2>
            <p>
              Site-ul conține link-uri către site-uri web operate de terți.
              inteligenta.ai nu controlează și nu este responsabil pentru
              conținutul, politicile de confidențialitate sau practicile
              acestor site-uri. Accesarea lor se face pe propria
              responsabilitate. Vă recomandăm să citiți termenii și politicile
              fiecărui site terț pe care îl vizitați.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              5. Link-uri afiliate și monetizare
            </h2>
            <p>
              Unele link-uri de pe Site sunt link-uri afiliate. Când faceți clic
              pe aceste link-uri și efectuați o achiziție, putem primi un
              comision de la furnizor. Acest lucru nu implică costuri
              suplimentare pentru dumneavoastră și nu influențează obiectivitatea
              recenziilor noastre.
            </p>
            <p className="mt-2">
              Pentru detalii complete, consultați{" "}
              <Link
                href="/afiliere"
                className="text-primary hover:underline"
              >
                Declarația de Afiliere
              </Link>
              .
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              6. Conținut generat de utilizatori
            </h2>
            <p>
              În cazul în care Site-ul permite comentarii sau alte forme de
              contribuție, vă obligați să nu publicați conținut ilegal,
              defăimător, obscen, ofensator sau care încalcă drepturile altora.
              Ne rezervăm dreptul de a modera și șterge orice conținut
              necorespunzător fără notificare prealabilă.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              7. Limitarea răspunderii
            </h2>
            <p>
              inteligenta.ai furnizează conținutul &quot;așa cum este&quot;, fără
              garanții de niciun fel, exprese sau implicite. Nu garantăm:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>
                Că informațiile sunt complete, exacte sau actualizate în
                permanență
              </li>
              <li>Că site-ul va funcționa neîntrerupt sau fără erori</li>
              <li>
                Rezultate specifice din utilizarea informațiilor publicate
              </li>
            </ul>
            <p className="mt-2">
              În niciun caz inteligenta.ai, autorii sau colaboratorii săi nu vor
              fi răspunzători pentru daune directe, indirecte, incidentale sau
              consecvente rezultate din utilizarea sau imposibilitatea de a
              utiliza Site-ul.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              8. Protecția datelor personale
            </h2>
            <p>
              Prelucrarea datelor personale este guvernată de{" "}
              <Link
                href="/confidentialitate"
                className="text-primary hover:underline"
              >
                Politica de Confidențialitate
              </Link>{" "}
              și de{" "}
              <Link
                href="/cookies"
                className="text-primary hover:underline"
              >
                Politica de Cookie-uri
              </Link>
              , care fac parte integrantă din acești Termeni.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              9. Modificarea termenilor
            </h2>
            <p>
              Ne rezervăm dreptul de a modifica acești Termeni și Condiții
              oricând, fără notificare prealabilă. Versiunea actualizată va fi
              publicată pe această pagină cu data ultimei modificări. Prin
              continuarea utilizării Site-ului după publicarea modificărilor,
              acceptați noii termeni.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">
              10. Legea aplicabilă și jurisdicția
            </h2>
            <p>
              Acești Termeni sunt guvernați de legislația din România. Orice
              litigiu va fi soluționat de instanțele competente din București,
              România. Se aplică prevederile Codului Civil și ale legislației
              privind comerțul electronic (Legea nr.&nbsp;365/2002).
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-text mb-3">11. Contact</h2>
            <p>
              Pentru orice întrebări legate de acești termeni, ne puteți
              contacta la:{" "}
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
