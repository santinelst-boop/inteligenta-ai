import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Declarație de Afiliere — inteligenta.ai",
  description: "Informații despre programul nostru de afiliere și modul în care monetizăm recenziile.",
};

export default function AfilierePage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
            <span>/</span>
            <span className="text-text font-medium">Afiliere</span>
          </nav>
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-8">Declarație de Afiliere</h1>
        <div className="prose max-w-none space-y-8 text-text-light">
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Relații de afiliere</h2>
            <p>Acest site conține link-uri afiliat. Aceasta înseamnă că putem primi un comision dacă faci clic pe anumite link-uri și achiziționezi un produs sau serviciu. Recomandăm doar produse în care credem.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Transparență</h2>
            <p>În conformitate cu reglementările în vigoare, declarăm că avem relații de afiliere cu companiile ale căror produse le recenzăm. Link-urile afiliat sunt marcate corespunzător pe tot site-ul.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Cum funcționează</h2>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Ești redirectat către site-ul furnizorului</li>
              <li>Dacă faci o achiziție, noi primim un comision</li>
              <li>Plătești același preț ca în mod normal</li>
              <li>Comisioanele ne ajută să menținem acest site</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Recomandările noastre</h2>
            <p>Toate recomandările se bazează pe evaluarea noastră onestă. Faptul că primim un comision nu influențează calitatea recenziilor.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Fără costuri suplimentare</h2>
            <p>Utilizarea link-urilor noastre afiliat nu te costă nimic în plus.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">6. Întrebări</h2>
            <p>Contactează-ne la: <a href="mailto:contact@inteligenta-ai.ro" className="text-primary hover:underline">contact@inteligenta-ai.ro</a></p>
          </section>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-sm text-text-light">
          <p>Ultima actualizare: Februarie 2026</p>
        </div>
      </section>
    </>
  );
}
