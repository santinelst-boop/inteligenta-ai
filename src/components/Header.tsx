"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/instrumente", label: "Instrumente AI" },
  { href: "/recenzii", label: "Recenzii" },
  { href: "/comparatii", label: "Comparații" },
  { href: "/blog", label: "Blog" },
  { href: "/despre", label: "Despre" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 180 180" fill="none" className="flex-shrink-0" style={{overflow: "visible"}}>
              <defs>
                <linearGradient id="hbg" x1="26" y1="26" x2="154" y2="154" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0070FF"/>
                  <stop offset="100%" stopColor="#0042CC"/>
                </linearGradient>
                <filter id="hglow" x="-60%" y="-60%" width="220%" height="220%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              {/* Pulse ring 1 */}
              <circle cx="90" cy="90" r="66" fill="none" stroke="#0088FF" strokeWidth="1.5">
                <animate attributeName="r" values="66;80;66;76;66" dur="1.2s" repeatCount="indefinite" keyTimes="0;0.15;0.3;0.45;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"/>
                <animate attributeName="opacity" values="0.3;0.15;0.3;0.2;0.3" dur="1.2s" repeatCount="indefinite" keyTimes="0;0.15;0.3;0.45;1"/>
              </circle>
              {/* Pulse ring 2 */}
              <circle cx="90" cy="90" r="66" fill="none" stroke="#00AAFF" strokeWidth="0.8">
                <animate attributeName="r" values="66;86;66;82;66" dur="1.2s" repeatCount="indefinite" keyTimes="0;0.18;0.33;0.48;1" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"/>
                <animate attributeName="opacity" values="0.2;0.08;0.2;0.1;0.2" dur="1.2s" repeatCount="indefinite" keyTimes="0;0.18;0.33;0.48;1"/>
              </circle>
              {/* Soft aura */}
              <circle cx="90" cy="90" r="68" fill="#0066FF" opacity="0.04">
                <animate attributeName="r" values="68;74;68;72;68" dur="1.2s" repeatCount="indefinite" keyTimes="0;0.15;0.3;0.45;1"/>
              </circle>
              {/* Main container */}
              <rect x="26" y="26" width="128" height="128" rx="30" fill="url(#hbg)"/>
              {/* Glass highlight */}
              <rect x="32" y="32" width="116" height="58" rx="24" fill="white" opacity="0.04"/>
              {/* iA text with glow */}
              <text x="90" y="108" textAnchor="middle" fontFamily="DM Sans, sans-serif" fontWeight="700" fontSize="66" fill="white" letterSpacing="-2" filter="url(#hglow)">iA</text>
            </svg>
            <span className="text-xl font-bold text-text">
              inteligenta<span className="text-primary">.ai</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-text-light hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Search + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-lg text-text-light hover:text-primary hover:bg-primary/5 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link
              href="/instrumente"
              className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
            >
              Explorează AI
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-text-light hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-text-light hover:text-primary hover:bg-primary/5"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/instrumente"
              className="block mt-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Explorează AI
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
