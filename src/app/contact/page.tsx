import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — inteligenta.ai",
  description: "Contactează-ne pentru întrebări, sugestii sau colaborări.",
};

export default function ContactPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-surface border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary transition-colors">Acasă</Link>
            <span>/</span>
            <span className="text-text font-medium">Contact</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Contact
          </h1>
          <p className="text-white/80 text-lg">
            Ai o întrebare sau sugestie? Scrie-ne și îți răspundem cât mai curând.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <h2 className="text-xl font-bold text-text mb-6">Cum ne poți contacta</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Email</h3>
                  {/* TODO: înlocuiește cu contact@inteligenta.ai după configurare email hosting */}
                  <a href="mailto:contact@inteligenta.ai" className="text-text-light hover:text-primary transition-colors">
                    contact@inteligenta.ai
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-text mb-1">Locație</h3>
                  <p className="text-text-light">Alba Iulia, România</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="font-semibold text-text mb-3">Urmărește-ne</h3>
              <div className="flex gap-4">
                <a href="#" className="text-text-light hover:text-primary transition-colors text-sm">Twitter</a>
                <a href="#" className="text-text-light hover:text-primary transition-colors text-sm">LinkedIn</a>
                <a href="#" className="text-text-light hover:text-primary transition-colors text-sm">Facebook</a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            <h2 className="text-xl font-bold text-text mb-6">Trimite-ne un mesaj</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">Nume</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Numele tău" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="email@exemplu.ro" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">Mesaj</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2.5 rounded-xl border border-border bg-surface text-text focus:outline-none focus:ring-2 focus:ring-primary text-sm" placeholder="Scrie mesajul tău aici..."></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors">
                Trimite mesajul
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
