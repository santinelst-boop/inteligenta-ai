"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    setIsVisible(false);
    // Dispatch event for GoogleAnalytics component to update consent
    window.dispatchEvent(new Event("cookieConsentUpdate"));
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("cookieConsent", "essential");
    setIsVisible(false);
    window.dispatchEvent(new Event("cookieConsentUpdate"));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      {/* Backdrop blur */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Banner */}
      <div className="relative bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Text content */}
            <div className="flex-1">
              <h3 className="font-bold text-text mb-2">
                Preferintele tale de confidentialitate
              </h3>
              <p className="text-sm text-text-light">
                Folosim module cookie pentru a imbunatati experienta ta pe site.
                Acceptand, consimti la folosirea tuturor categoriilor de cookies.{" "}
                <Link
                  href="/politica-confidentialitate"
                  className="underline text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Citeste politica noastra de confidentialitate
                </Link>
                .
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={handleEssentialOnly}
                className="px-5 py-2.5 rounded-lg border border-gray-300 text-text font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Doar necesare
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-colors text-sm"
              >
                Accepta tot
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
