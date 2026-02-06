import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni \u0219i Condi\u021Bii \u2014 inteligenta.ai",
  description: "Termenii \u0219i condi\u021Biile de utilizare ale site-ului inteligenta.ai.",
};

export default function TermeniPage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Acas\u0103</Link>
            <span>/</span>
            <span className="text-text font-medium">Termeni \u0219i Condi\u021Bii</span>
          </nav>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-8">Termeni \u0219i Condi\u021Bii</h1>
        <div className="prose max-w-none space-y-8 text-text-light">
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Acceptarea termenilor</h2>
            <p>Prin accesarea \u0219i utilizarea site-ului inteligenta.ai, accepta\u021Bi s\u0103 fi\u021Bi obligat de ace\u0219ti termeni \u0219i condi\u021Bii. Dac\u0103 nu sunte\u021Bi de acord, v\u0103 rug\u0103m s\u0103 nu utiliza\u021Bi acest site.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Licen\u021Ba de utilizare</h2>
            <p>Vi se acord\u0103 o licen\u021B\u0103 limitat\u0103 pentru a accesa \u0219i vizualiza con\u021Binutul de pe acest site doar \u00EEn scopuri personale \u0219i necomerciale. Nu ave\u021Bi dreptul s\u0103:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Modifica\u021Bi sau copia\u021Bi materialele</li>
              <li>Utiliza\u021Bi materialele \u00EEn scopuri comerciale</li>
              <li>\u00CEncerca\u021Bi s\u0103 decompila\u021Bi software-ul</li>
              <li>Transfera\u021Bi materialele c\u0103tre o alt\u0103 persoan\u0103</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Declara\u021Bie de renun\u021Bare</h2>
            <p>Materialele de pe site sunt furnizate &quot;\u00EEn starea \u00EEn care se afl\u0103&quot;. Nu oferim nicio garan\u021Bie, expres\u0103 sau implicit\u0103.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Limit\u0103ri de r\u0103spundere</h2>
            <p>\u00CEn niciun caz inteligenta.ai sau furnizorii s\u0103i nu vor fi r\u0103spunz\u0103tori pentru daune de orice fel care rezult\u0103 din utilizarea sau imposibilitatea de a utiliza materialele de pe site.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Acurate\u021Bea materialelor</h2>
            <p>Materialele de pe site pot con\u021Bine erori tehnice, tipografice sau fotografice. Putem modifica con\u021Binutul oric\u00E2nd f\u0103r\u0103 notificare.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">6. Link-uri externe</h2>
            <p>Site-ul poate con\u021Bine link-uri c\u0103tre site-uri ter\u021Be. Nu suntem responsabili pentru con\u021Binutul acestora.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">7. Link-uri afiliat</h2>
            <p>Unele link-uri de pe site sunt link-uri afiliat. Consulta\u021Bi{" "}<Link href="/afiliere" className="text-primary hover:underline">pagina de afiliere</Link>{" "}pentru mai multe detalii.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">8. Modific\u0103ri</h2>
            <p>Ne rezerv\u0103m dreptul de a modifica ace\u0219ti termeni oric\u00E2nd. Prin continuarea utiliz\u0103rii site-ului, accepta\u021Bi versiunea curent\u0103 a termenilor.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">9. Legea aplicabil\u0103</h2>
            <p>Ace\u0219ti termeni sunt guverna\u021Bi de legile din Rom\u00E2nia. Orice litigiu va fi solu\u021Bionat de instan\u021Bele competente din Bucure\u0219ti.</p>
          </section>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-sm text-text-light">
          <p>Ultima actualizare: Februarie 2026</p>
        </div>
      </section>
    </>
  );
}
