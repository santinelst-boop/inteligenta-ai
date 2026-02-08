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
            <svg width="32" height="32" viewBox="0 0 200 190" fill="none" className="flex-shrink-0">
              <defs>
                <linearGradient id="logoGrad" x1="30" y1="0" x2="170" y2="190" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#0077FF"/>
                  <stop offset="100%" stopColor="#0055DD"/>
                </linearGradient>
              </defs>
              {/* A outer chevron */}
              <path d="M100 10 L190 170 L170 170 L100 42 L30 170 L10 170 Z" fill="url(#logoGrad)"/>
              {/* A middle chevron */}
              <path d="M100 58 L155 170 L135 170 L100 90 L65 170 L45 170 Z" fill="url(#logoGrad)"/>
              {/* I central pillar */}
              <rect x="94" y="100" width="12" height="70" rx="3" fill="url(#logoGrad)"/>
              {/* I dot */}
              <circle cx="100" cy="92" r="6" fill="#00CCFF"/>
              {/* Data pulse particles */}
              <circle cx="100" cy="160" r="3" fill="#00EEFF" opacity="0">
                <animate attributeName="cy" values="160;90" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="100" cy="160" r="3" fill="#00EEFF" opacity="0">
                <animate attributeName="cy" values="160;90" dur="2s" begin="0.5s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin="0.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="100" cy="160" r="3" fill="#00EEFF" opacity="0">
                <animate attributeName="cy" values="160;90" dur="2s" begin="1s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0;1;1;0" dur="2s" begin="1s" repeatCount="indefinite"/>
              </circle>
              {/* Top glow pulse */}
              <circle cx="100" cy="92" r="8" fill="none" stroke="#00CCFF" strokeWidth="2" opacity="0.3">
                <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
              </circle>
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
