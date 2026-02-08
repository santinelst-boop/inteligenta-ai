import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre inteligenta.ai",
  description:
    "Echipa din spatele inteligenta.ai — primul portal de inteligență artificială din România. Misiune, valori și cum ne poți contacta.",
  alternates: { canonical: "https://inteligenta.ai/despre" },
};

// TODO: înlocuiește cu publicitate@inteligenta.ai după configurare email hosting
const COLLAB_EMAIL = "santinel.st@gmail.com";

const stats = [
  { value: "200+", label: "Instrumente AI" },
  { value: "50+", label: "Recenzii detaliate" },
  { value: "10+", label: "Comparații cap-la-cap" },
  { value: "Zilnic", label: "Conținut actualizat" },
];

const values = [
  {
    icon: "🎯",
    title: "Obiectivitate",
    desc: "Recenziile reflectă experiența reală. Nu acceptăm plăți pentru scoruri pozitive.",
  },
  {
    icon: "🔍",
    title: "Transparență",
    desc: "Toate relațiile de afiliere sunt declarate. Veniturile nu influențează conținutul editorial.",
  },
  {
    icon: "🇷🇴",
    title: "Accesibilitate",
    desc: "Conținut 100% în limba română, adaptat pieței locale și nevoilor utilizatorilor români.",
  },
  {
    icon: "⚡",
    title: "Actualitate",
    desc: "Monitorizăm piața AI zilnic și actualizăm recenziile pe măsură ce produsele evoluează.",
  },
];

export default function DesprePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Despre inteligenta.ai
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-lg">
            Ajutăm românii să descopere și să folosească cele mai bune
            instrumente AI
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-2xl border border-border p-5 text-center"
            >
              <div className="text-2xl md:text-3xl font-extrabold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-light">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Misiune */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">
              Misiunea noastră
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              inteligenta.ai s-a născut din dorința de a face inteligența
              artificială accesibilă tuturor românilor. Într-o lume în care AI-ul
              evoluează zilnic, ne-am propus să fim ghidul tău de încredere —
              oferindu-ți recenzii oneste, comparații obiective și ghiduri
              practice pe care le poți folosi imediat.
            </p>
            <p className="text-text-light leading-relaxed">
              Nu suntem sponsorizați de nicio companie AI. Testăm fiecare
              instrument personal și scriem recenzii bazate pe experiență reală,
              nu pe comunicate de presă.
            </p>
          </div>

          {/* De ce existam */}
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">
              De ce existăm
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              Piața AI crește exponențial — în fiecare săptămână apar instrumente
              noi, iar pentru un utilizator obișnuit este aproape imposibil să
              țină pasul. În același timp, informația de calitate în limba română
              despre aceste instrumente este aproape inexistentă.
            </p>
            <p className="text-text-light leading-relaxed">
              Am creat inteligenta.ai pentru a acoperi acest gol: un loc unde
              poți găsi recenzii testate, comparații sincere și ghiduri practice
              — totul în română, adaptat realităților și nevoilor utilizatorilor
              din România.
            </p>
          </div>

          {/* Ce facem */}
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">Ce facem</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Recenzii detaliate",
                  desc: "Teste practice cu pro, contra și verdict clar",
                },
                {
                  title: "Comparații obiective",
                  desc: "Analize cap la cap pentru alegerea corectă",
                },
                {
                  title: "Ghiduri practice",
                  desc: "Tutoriale pas cu pas pentru începători și avansați",
                },
                {
                  title: "Director de instrumente",
                  desc: "Peste 200 de tool-uri AI clasificate și evaluate",
                },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-surface rounded-xl">
                  <h3 className="font-semibold text-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Valori */}
          <div className="bg-surface rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-text mb-6">
              Valorile noastre
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-card rounded-xl border border-border p-5"
                >
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <h3 className="font-semibold text-text mb-1">{v.title}</h3>
                  <p className="text-sm text-text-light">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Transparenta */}
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">Transparență</h2>
            <p className="text-text-light leading-relaxed">
              Acest site conține{" "}
              <Link
                href="/afiliere"
                className="text-primary hover:underline"
              >
                link-uri de afiliere
              </Link>
              . Asta înseamnă că putem primi un mic comision atunci când
              achiziționezi un produs prin intermediul link-urilor noastre, fără
              niciun cost suplimentar pentru tine. Acest model ne permite să
              menținem site-ul gratuit și să continuăm să producem conținut de
              calitate.
            </p>
          </div>

          {/* Colaborari */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Colaborări</h2>
            <p className="text-text-light leading-relaxed mb-3">
              Ești brand sau agenție? Suntem deschiși la colaborări cu furnizori
              de instrumente AI care își doresc recenzii oneste și expunere către
              audiența românească.
            </p>
            <p className="text-text-light leading-relaxed">
              Scrie-ne la{" "}
              <a
                href={`mailto:${COLLAB_EMAIL}`}
                className="text-primary hover:underline"
              >
                {COLLAB_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
