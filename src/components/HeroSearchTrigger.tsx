"use client";
import { useState } from "react";
import SearchModal from "./SearchModal";

export default function HeroSearchTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="max-w-xl mx-auto mb-4">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-text-light text-base text-left shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 cursor-pointer hover:shadow-xl transition-shadow"
          >
            Caută instrumente AI... (ex: ChatGPT, Midjourney, Copilot)
          </button>
        </div>
      </div>
      <SearchModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
