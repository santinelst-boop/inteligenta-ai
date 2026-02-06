import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confidențialitate — inteligenta.ai",
  description: "Politica de confidențialitate a site-ului inteligenta.ai. Cum colectăm și protejăm datele tale.",
};

export default function ConfidentialitatePage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
            <span>/</span>
            <span className="text-text font-medium">Confidențialitate</span>
          </nav>
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-8">Politica de Confidențialitate</h1>
        <div className="prose max-w-none space-y-8 text-text-light">
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Introducere</h2>
            <p>La inteligenta.ai, respectăm confidențialitatea vizitatorilor noștri. Această politică explică cum colectăm, utilizăm și protejăm informațiile tale.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Informații colectate</h2>
            <p>Putem colecta informații în următoarele moduri:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li><strong>Direct de la tine:</strong> Prin formulare de contact sau întrebări</li>
              <li><strong>Automat:</strong> Prin cookie-uri și tehnologii similare</li>
              <li><strong>De la terți:</strong> De la furnizori de analitice și parteneri</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Cum utilizăm informațiile</h2>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Furniza și îmbunătăți serviciile noastre</li>
              <li>Răspunde la întrebările și solicitările tale</li>
              <li>Trimite comunicări de marketing (cu consimțământul tău)</li>
              <li>Analiza utilizarea site-ului</li>
              <li>Respecta obligațiile legale</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Partajarea informațiilor</h2>
            <p>Nu vindem și nu închiriem informațiile tale personale. Putem partaja informații doar cu furnizorii de servicii, când este cerut de lege, sau cu consimțământul tău explicit.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Securitatea datelor</h2>
            <p>Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja informațiile tale personale.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">6. Cookie-uri</h2>
            <p>Site-ul nostru utilizează cookie-uri. Consultați{" "}<Link href="/cookies" className="text-primary hover:underline">politica noastră de cookie-uri</Link>{" "}pentru detalii.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">7. Drepturile tale (GDPR)</h2>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Dreptul de acces la datele tale</li>
              <li>Dreptul de rectificare a datelor incorecte</li>
              <li>Dreptul de ștergere a datelor</li>
              <li>Dreptul de opoziție la prelucrare</li>
              <li>Dreptul la portabilitatea datelor</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">8. Contact</h2>
            <p>Pentru întrebări: <a href="mailto:contact@inteligenta-ai.ro" className="text-primary hover:underline">contact@inteligenta-ai.ro</a></p>
          </section>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-sm text-text-light">
          <p>Ultima actualizare: Februarie 2026</p>
        </div>
      </section>
    </>
  );
}
