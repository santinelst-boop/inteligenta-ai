import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Declara\u021Bie de Afiliere \u2014 inteligenta.ai",
  description: "Informa\u021Bii despre programul nostru de afiliere \u0219i modul \u00EEn care monetiz\u0103m recenziile.",
};

export default function AfilierePage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Acas\u0103</Link>
            <span>/</span>
            <span className="text-text font-medium">Afiliere</span>
          </nav>
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-8">Declara\u021Bie de Afiliere</h1>
        <div className="prose max-w-none space-y-8 text-text-light">
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Rela\u021Bii de afiliere</h2>
            <p>Acest site con\u021Bine link-uri afiliat. Aceasta \u00EEnseamn\u0103 c\u0103 putem primi un comision dac\u0103 faci clic pe anumite link-uri \u0219i achizi\u021Bionezi un produs sau serviciu. Recomand\u0103m doar produse \u00EEn care credem.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Transparen\u021B\u0103</h2>
            <p>\u00CEn conformitate cu reglement\u0103rile \u00EEn vigoare, declar\u0103m c\u0103 avem rela\u021Bii de afiliere cu companiile ale c\u0103ror produse le recenz\u0103m. Link-urile afiliat sunt marcate corespunz\u0103tor pe tot site-ul.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Cum func\u021Bioneaz\u0103</h2>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>E\u0219ti redirectat c\u0103tre site-ul furnizorului</li>
              <li>Dac\u0103 faci o achizi\u021Bie, noi primim un comision</li>
              <li>Pl\u0103te\u0219ti acela\u0219i pre\u021B ca \u00EEn mod normal</li>
              <li>Comisioanele ne ajut\u0103 s\u0103 men\u021Binem acest site</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Recomand\u0103rile noastre</h2>
            <p>Toate recomand\u0103rile se bazeaz\u0103 pe evaluarea noastr\u0103 onest\u0103. Faptul c\u0103 primim un comision nu influen\u021Beaz\u0103 calitatea recenziilor.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. F\u0103r\u0103 costuri suplimentare</h2>
            <p>Utilizarea link-urilor noastre afiliat nu te cost\u0103 nimic \u00EEn plus.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">6. \u00CEntreb\u0103ri</h2>
            <p>Contacteaz\u0103-ne la: <a href="mailto:contact@inteligenta-ai.ro" className="text-primary hover:underline">contact@inteligenta-ai.ro</a></p>
          </section>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-sm text-text-light">
          <p>Ultima actualizare: Februarie 2026</p>
        </div>
      </section>
    </>
  );
}
