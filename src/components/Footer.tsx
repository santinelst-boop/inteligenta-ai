import Link from "next/link";

const footerLinks = {
  instrumente: [
    { href: "/instrumente?cat=ai-text", label: "AI Text" },
    { href: "/instrumente?cat=ai-imagine", label: "AI Imagine" },
    { href: "/instrumente?cat=ai-video", label: "AI Video" },
    { href: "/instrumente?cat=ai-cod", label: "AI Cod" },
    { href: "/instrumente?cat=ai-audio", label: "AI Audio" },
  ],
  resurse: [
    { href: "/recenzii", label: "Recenzii" },
    { href: "/comparatii", label: "Compara\u021bii" },
    { href: "/blog", label: "Blog" },
    { href: "/despre", label: "Despre noi" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/termeni", label: "Termeni \u0219i condi\u021bii" },
    { href: "/confidentialitate", label: "Politica de confiden\u021bialitate" },
    { href: "/cookies", label: "Politica de cookies" },
    { href: "/afiliere", label: "Declara\u021bie afiliere" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-text-inverse">
      {/* Newsletter */}
      <div className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            R\u0103m\u00e2i la curent cu lumea AI
          </h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Prime\u0219ti s\u0103pt\u0103m\u00e2nal cele mai importante nout\u0103\u021bi, recenzii \u0219i ghiduri AI direct \u00een inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="adresa@email.com"
              className="flex-1 px-4 py-3 rounded-full text-text bg-white focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Aboneaz\u0103-te
            </button>
          </form>
          <p className="text-white/60 text-xs mt-3">
            F\u0103r\u0103 spam. Te po\u021bi dezabona oric\u00e2nd.
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">ia</span>
              </div>
              <span className="text-xl font-bold text-white">
                inteligenta<span className="text-primary-light">.ai</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Primul portal de inteligen\u021b\u0103 artificial\u0103 din Rom\u00e2nia. Recenzii oneste, compara\u021bii
              detaliate \u0219i ghiduri practice.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={\u0060#${social}\u0060}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="text-xs font-bold uppercase">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Instrumente */}
          <div>
            <h4 className="font-semibold text-white mb-4">Instrumente AI</h4>
            <ul className="space-y-2">
              {footerLinks.instrumente.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resurse */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resurse</h4>
            <ul className="space-y-2">
              {footerLinks.resurse.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 inteligenta.ai \u2014 Toate drepturile rezervate.
          </p>
          <p className="text-xs text-white/40">
            Acest site con\u021bine link-uri de afiliere. Putem primi un comision pentru achizi\u021biile
            efectuate prin intermediul acestora.
          </p>
        </div>
      </div>
    </footer>
  );
}
