import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Cookie-uri \u2014 inteligenta.ai",
  description: "Politica de cookie-uri a site-ului inteligenta.ai.",
};

export default function CookiesPage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Acas\u0103</Link>
            <span>/</span>
            <span className="text-text font-medium">Cookie-uri</span>
          </nav>
        </div>
      </div>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-text mb-8">Politica de Cookie-uri</h1>
        <div className="prose max-w-none space-y-8 text-text-light">
          <section>
            <h2 className="text-xl font-bold text-text mb-3">1. Ce sunt cookie-urile?</h2>
            <p>Cookie-urile sunt fi\u0219iere text mici plasate pe dispozitivul t\u0103u atunci c\u00E2nd vizitezi un site web. Sunt utilizate pe scar\u0103 larg\u0103 pentru a face site-urile s\u0103 func\u021Bioneze mai eficient.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Cum utiliz\u0103m cookie-urile</h2>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li><strong>Cookie-uri esen\u021Biale:</strong> Necesare pentru func\u021Bionarea corect\u0103 a site-ului</li>
              <li><strong>Cookie-uri analitice:</strong> Ne ajut\u0103 s\u0103 \u00EEn\u021Belegem cum utilizeaz\u0103 vizitatorii site-ul</li>
              <li><strong>Cookie-uri de preferin\u021B\u0103:</strong> Re\u021Bin preferin\u021Bele \u0219i set\u0103rile tale</li>
              <li><strong>Cookie-uri de marketing:</strong> Folosite pentru a m\u0103sura eficien\u021Ba publicit\u0103\u021Bii</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Tipuri de cookie-uri</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-text mb-1">Cookie-uri de sesiune</h3>
                <p>Expir\u0103 c\u00E2nd \u00EEnchizi browserul \u0219i sunt folosite pentru a men\u021Bine sesiunea ta.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">Cookie-uri persistente</h3>
                <p>R\u0103m\u00E2n pe dispozitivul t\u0103u p\u00E2n\u0103 expir\u0103 sau le \u0219tergi manual.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">Cookie-uri ter\u021B\u0103</h3>
                <p>Setate de servicii externe precum Google Analytics.</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Gestionarea cookie-urilor</h2>
            <p>Po\u021Bi controla \u0219i gestiona cookie-urile din set\u0103rile browserului t\u0103u.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Confiden\u021Bialitate</h2>
            <p>Pentru mai multe informa\u021Bii, consulta\u021Bi{" "}<Link href="/confidentialitate" className="text-primary hover:underline">politica de confiden\u021Bialitate</Link>.</p>
          </section>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-sm text-text-light">
          <p>Ultima actualizare: Februarie 2026</p>
        </div>
      </section>
    </>
  );
}
