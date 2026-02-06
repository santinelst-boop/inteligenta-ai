export const metadata = {
  title: "Despre noi | inteligenta.ai",
  description: "Echipa din spatele inteligenta.ai \u2014 primul portal de inteligen\u021b\u0103 artificial\u0103 din Rom\u00e2nia.",
};

export default function DesprePage() {
  return (
    <>
      <section className="hero-gradient py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Despre inteligenta.ai
          </h1>
          <p className="text-white/80 max-w-xl mx-auto">
            Primul portal de inteligen\u021b\u0103 artificial\u0103 din Rom\u00e2nia
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">Misiunea noastr\u0103</h2>
            <p className="text-text-light leading-relaxed mb-4">
              inteligenta.ai s-a n\u0103scut din dorin\u021ba de a face inteligen\u021ba artificial\u0103 accesibil\u0103
              tuturor rom\u00e2nilor. \u00centr-o lume \u00een care AI-ul evolueaz\u0103 zilnic, ne-am propus s\u0103 fim
              ghidul t\u0103u de \u00eencredere \u2014 oferindu-\u021bi recenzii oneste, compara\u021bii obiective \u0219i ghiduri
              practice pe care le po\u021bi folosi imediat.
            </p>
            <p className="text-text-light leading-relaxed">
              Nu suntem sponsoriza\u021bi de nicio companie AI. Test\u0103m fiecare instrument personal \u0219i
              scriem recenzii bazate pe experien\u021b\u0103 real\u0103, nu pe comunicate de pres\u0103.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">Ce oferim</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Recenzii detaliate", desc: "Teste practice cu pro, contra \u0219i verdict clar" },
                { title: "Compara\u021bii obiective", desc: "Analize cap la cap pentru alegerea corect\u0103" },
                { title: "Ghiduri practice", desc: "Tutoriale pas cu pas pentru \u00eencep\u0103tori \u0219i avansa\u021bi" },
                { title: "Actualiz\u0103ri zilnice", desc: "Cele mai noi instrumente AI, testate \u0219i recenzate" },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-surface rounded-xl">
                  <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                  <p className="text-sm text-text-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Transparen\u021b\u0103</h2>
            <p className="text-text-light leading-relaxed">
              Acest site con\u021bine link-uri de afiliere. Asta \u00eenseamn\u0103 c\u0103 putem primi un mic comision
              atunci c\u00e2nd achizi\u021bionezi un produs prin intermediul link-urilor noastre, f\u0103r\u0103 niciun
              cost suplimentar pentru tine. Acest model ne permite s\u0103 men\u021binem site-ul gratuit \u0219i s\u0103
              continu\u0103m s\u0103 producem con\u021binut de calitate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
