"use client";

import { useState } from "react";

export default function AffiliateDisclosure() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (isCollapsed) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <button
          onClick={() => setIsCollapsed(false)}
          className="text-xs text-primary hover:text-primary-dark underline"
        >
          Arată informația de affiliate
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-sky-50 border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-sky-500 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-700">
              <span className="font-medium text-gray-900">Informație importantă:</span> Acest articol poate conține link-uri affiliate. Dacă faci o achiziție prin link-urile noastre, putem primi un comision fără cost suplimentar pentru tine. Aceasta ne ajută să menținem site-ul și să oferim conținut de calitate.
            </p>
          </div>
          <button
            onClick={() => setIsCollapsed(true)}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0 mt-0.5"
            aria-label="Închide informația de affiliate"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
