import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termeni și Condiții — inteligenta.ai",
  description: "Termenii și condițiile de utilizare ale site-ului inteligenta.ai.",
};

export default function TermeniPage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
            <span>/</span>
            <span className="text-text font-medium">Termeni și Condiții</span>
          </nav>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-8">Termeni și Condiții</h1>
        <div className="prose max-w-none space-y-8 text-text-light">
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Acceptarea termenilor</h2>
            <p>Prin accesarea și utilizarea site-ului inteligenta.ai, acceptați să fiți obligat de acești termeni și condiții. Dacă nu sunteți de acord, vă rugăm să nu utilizați acest site.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Licența de utilizare</h2>
            <p>Vi se acordă o licență limitată pentru a accesa și vizualiza conținutul de pe acest site doar în scopuri personale și necomerciale. Nu aveți dreptul să:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Modificați sau copiați materialele</li>
              <li>Utilizați materialele în scopuri comerciale</li>
              <li>Încercați să decompilați software-ul</li>
              <li>Transferați materialele către o altă persoană</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Declarație de renunțare</h2>
            <p>Materialele de pe site sunt furnizate &quot;în starea în care se află&quot;. Nu oferim nicio garanție, expresă sau implicită.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Limitări de răspundere</h2>
            <p>În niciun caz inteligenta.ai sau furnizorii săi nu vor fi răspunzători pentru daune de orice fel care rezultă din utilizarea sau imposibilitatea de a utiliza materialele de pe site.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Acuratețea materialelor</h2>
            <p>Materialele de pe site pot conține erori tehnice, tipografice sau fotografice. Putem modifica conținutul oricând fără notificare.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">6. Link-uri externe</h2>
            <p>Site-ul poate conține link-uri către site-uri terțe. Nu suntem responsabili pentru conținutul acestora.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">7. Link-uri afiliat</h2>
            <p>Unele link-uri de pe site sunt link-uri afiliat. Consultați{" "}<Link href="/afiliere" className="text-primary hover:underline">pagina de afiliere</Link>{" "}pentru mai multe detalii.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">8. Modificări</h2>
            <p>Ne rezervăm dreptul de a modifica acești termeni oricând. Prin continuarea utilizării site-ului, acceptați versiunea curentă a termenilor.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">9. Legea aplicabilă</h2>
            <p>Acești termeni sunt guvernați de legile din România. Orice litigiu va fi soluționat de instanțele competente din București.</p>
          </section>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-sm text-text-light">
          <p>Ultima actualizare: Februarie 2026</p>
        </div>
      </section>
    </>
  );
}
