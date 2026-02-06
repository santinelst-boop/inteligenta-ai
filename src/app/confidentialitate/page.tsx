import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Confiden\u021Bialitate \u2014 inteligenta.ai",
  description: "Politica de confiden\u021Bialitate a site-ului inteligenta.ai. Cum colect\u0103m \u0219i protej\u0103m datele tale.",
};

export default function ConfidentialitatePage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Acas\u0103</Link>
            <span>/</span>
            <span className="text-text font-medium">Confiden\u021Bialitate</span>
          </nav>
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-8">Politica de Confiden\u021Bialitate</h1>
        <div className="prose max-w-none space-y-8 text-text-light">
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Introducere</h2>
            <p>La inteligenta.ai, respect\u0103m confiden\u021Bialitatea vizitatorilor no\u0219tri. Aceast\u0103 politic\u0103 explic\u0103 cum colect\u0103m, utiliz\u0103m \u0219i protej\u0103m informa\u021Biile tale.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Informa\u021Bii colectate</h2>
            <p>Putem colecta informa\u021Bii \u00EEn urm\u0103toarele moduri:</p>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li><strong>Direct de la tine:</strong> Prin formulare de contact sau \u00EEntreb\u0103ri</li>
              <li><strong>Automat:</strong> Prin cookie-uri \u0219i tehnologii similare</li>
              <li><strong>De la ter\u021Bi:</strong> De la furnizori de analitice \u0219i parteneri</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Cum utiliz\u0103m informa\u021Biile</h2>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Furniza \u0219i \u00EEmbun\u0103t\u0103\u021Bi serviciile noastre</li>
              <li>R\u0103spunde la \u00EEntreb\u0103rile \u0219i solicit\u0103rile tale</li>
              <li>Trimite comunic\u0103ri de marketing (cu consim\u021B\u0103m\u00E2ntul t\u0103u)</li>
              <li>Analiza utilizarea site-ului</li>
              <li>Respecta obliga\u021Biile legale</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Partajarea informa\u021Biilor</h2>
            <p>Nu vindem \u0219i nu \u00EEnchiriem informa\u021Biile tale personale. Putem partaja informa\u021Bii doar cu furnizorii de servicii, c\u00E2nd este cerut de lege, sau cu consim\u021B\u0103m\u00E2ntul t\u0103u explicit.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Securitatea datelor</h2>
            <p>Implement\u0103m m\u0103suri tehnice \u0219i organizatorice adecvate pentru a proteja informa\u021Biile tale personale.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">6. Cookie-uri</h2>
            <p>Site-ul nostru utilizeaz\u0103 cookie-uri. Consulta\u021Bi{" "}<Link href="/cookies" className="text-primary hover:underline">politica noastr\u0103 de cookie-uri</Link>{" "}pentru detalii.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">7. Drepturile tale (GDPR)</h2>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li>Dreptul de acces la datele tale</li>
              <li>Dreptul de rectificare a datelor incorecte</li>
              <li>Dreptul de \u0219tergere a datelor</li>
              <li>Dreptul de opozi\u021Bie la prelucrare</li>
              <li>Dreptul la portabilitatea datelor</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">8. Contact</h2>
            <p>Pentru \u00EEntreb\u0103ri: <a href="mailto:contact@inteligenta-ai.ro" className="text-primary hover:underline">contact@inteligenta-ai.ro</a></p>
          </section>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-sm text-text-light">
          <p>Ultima actualizare: Februarie 2026</p>
        </div>
      </section>
    </>
  );
}
