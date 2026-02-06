export const metadata = {
  title: "Despre noi | inteligenta.ai",
  description: "Echipa din spatele inteligenta.ai — primul portal de inteligență artificială din România.",
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
            Primul portal de inteligență artificială din România
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">Misiunea noastră</h2>
            <p className="text-text-light leading-relaxed mb-4">
              inteligenta.ai s-a născut din dorința de a face inteligența artificială accesibilă
              tuturor românilor. Într-o lume în care AI-ul evoluează zilnic, ne-am propus să fim
              ghidul tău de încredere — oferindu-ți recenzii oneste, comparații obiective și ghiduri
              practice pe care le poți folosi imediat.
            </p>
            <p className="text-text-light leading-relaxed">
              Nu suntem sponsorizați de nicio companie AI. Testăm fiecare instrument personal și
              scriem recenzii bazate pe experiență reală, nu pe comunicate de presă.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8 mb-8">
            <h2 className="text-2xl font-bold text-text mb-4">Ce oferim</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Recenzii detaliate", desc: "Teste practice cu pro, contra și verdict clar" },
                { title: "Comparații obiective", desc: "Analize cap la cap pentru alegerea corectă" },
                { title: "Ghiduri practice", desc: "Tutoriale pas cu pas pentru începători și avansați" },
                { title: "Actualizări zilnice", desc: "Cele mai noi instrumente AI, testate și recenzate" },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-surface rounded-xl">
                  <h3 className="font-semibold text-text mb-1">{item.title}</h3>
                  <p className="text-sm text-text-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8">
            <h2 className="text-2xl font-bold text-text mb-4">Transparență</h2>
            <p className="text-text-light leading-relaxed">
              Acest site conține link-uri de afiliere. Asta înseamnă că putem primi un mic comision
              atunci când achiziționezi un produs prin intermediul link-urilor noastre, fără niciun
              cost suplimentar pentru tine. Acest model ne permite să menținem site-ul gratuit și să
              continuăm să producem conținut de calitate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
