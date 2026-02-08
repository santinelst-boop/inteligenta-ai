import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

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
    { href: "/comparatii", label: "Comparații" },
    { href: "/blog", label: "Blog" },
    { href: "/despre", label: "Despre noi" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/termeni", label: "Termeni și condiții" },
    { href: "/confidentialitate", label: "Politica de confidențialitate" },
    { href: "/cookies", label: "Politica de cookies" },
    { href: "/afiliere", label: "Declarație afiliere" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-text-inverse">
      {/* Newsletter */}
      <div className="hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Rămâi la curent cu lumea AI
          </h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Primești săptămânal cele mai importante noutăți, recenzii și ghiduri AI direct în inbox.
          </p>
          <NewsletterForm />
          <p className="text-white/60 text-xs mt-3">
            Fără spam. Te poți dezabona oricând.
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
              Primul portal de inteligență artificială din România. Recenzii oneste, comparații
              detaliate și ghiduri practice.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
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

        {/* Publicitate & Contact */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-white/60">
            <div>
              <h4 className="font-semibold text-white mb-2">Publicitate</h4>
              <p>
                Pentru colaborări și publicitate:{" "}
                {/* TODO: înlocuiește cu publicitate@inteligenta.ai după configurare email hosting */}
                <a href="mailto:santinel.st@gmail.com" className="text-primary-light hover:text-white transition-colors">
                  santinel.st@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Redacție</h4>
              <p>
                Propuneri articole sau corectări:{" "}
                {/* TODO: înlocuiește cu redactie@inteligenta.ai după configurare email hosting */}
                <a href="mailto:santinel.st@gmail.com" className="text-primary-light hover:text-white transition-colors">
                  santinel.st@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; 2026 inteligenta.ai — Toate drepturile rezervate.
          </p>
          <p className="text-xs text-white/40">
            Acest site conține link-uri de afiliere. Putem primi un comision pentru achizițiile
            efectuate prin intermediul acestora.
          </p>
        </div>
      </div>
    </footer>
  );
}
