"use client";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Acas\u0103" },
  { href: "/instrumente", label: "Instrumente AI" },
  { href: "/recenzii", label: "Recenzii" },
  { href: "/comparatii", label: "Compara\u021bii" },
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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">ia</span>
            </div>
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
              Exploreaz\u0103 AI
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
              Exploreaz\u0103 AI
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
