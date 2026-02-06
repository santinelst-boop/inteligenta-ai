import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Cookie-uri — inteligenta.ai",
  description: "Politica de cookie-uri a site-ului inteligenta.ai.",
};

export default function CookiesPage() {
  return (
    <>
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
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
            <p>Cookie-urile sunt fișiere text mici plasate pe dispozitivul tău atunci când vizitezi un site web. Sunt utilizate pe scară largă pentru a face site-urile să funcționeze mai eficient.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">2. Cum utilizăm cookie-urile</h2>
            <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
              <li><strong>Cookie-uri esențiale:</strong> Necesare pentru funcționarea corectă a site-ului</li>
              <li><strong>Cookie-uri analitice:</strong> Ne ajută să înțelegem cum utilizează vizitatorii site-ul</li>
              <li><strong>Cookie-uri de preferință:</strong> Rețin preferințele și setările tale</li>
              <li><strong>Cookie-uri de marketing:</strong> Folosite pentru a măsura eficiența publicității</li>
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">3. Tipuri de cookie-uri</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-text mb-1">Cookie-uri de sesiune</h3>
                <p>Expiră când închizi browserul și sunt folosite pentru a menține sesiunea ta.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">Cookie-uri persistente</h3>
                <p>Rămân pe dispozitivul tău până expiră sau le ștergi manual.</p>
              </div>
              <div>
                <h3 className="font-semibold text-text mb-1">Cookie-uri terță</h3>
                <p>Setate de servicii externe precum Google Analytics.</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">4. Gestionarea cookie-urilor</h2>
            <p>Poți controla și gestiona cookie-urile din setările browserului tău.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-text mb-3">5. Confidențialitate</h2>
            <p>Pentru mai multe informații, consultați{" "}<Link href="/confidentialitate" className="text-primary hover:underline">politica de confidențialitate</Link>.</p>
          </section>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-sm text-text-light">
          <p>Ultima actualizare: Februarie 2026</p>
        </div>
      </section>
    </>
  );
}
