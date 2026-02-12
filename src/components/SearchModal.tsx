"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { featuredTools, articles, categories } from "@/data/tools";

interface SearchResult {
  type: "tool" | "article";
  title: string;
  description: string;
  url: string;
  category: string;
  categoryLabel: string;
}

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const getCategoryLabel = (catId: string) => {
    const cat = categories.find((c) => c.id === catId);
    return cat ? cat.name : catId;
  };

  const search = useCallback((q: string) => {
    if (q.length < 2) { setResults([]); return; }
    const lower = q.toLowerCase();
    const matched: SearchResult[] = [];

    for (const tool of featuredTools) {
      if (
        tool.name.toLowerCase().includes(lower) ||
        tool.description.toLowerCase().includes(lower) ||
        tool.tags.some((t) => t.toLowerCase().includes(lower))
      ) {
        matched.push({
          type: "tool",
          title: tool.name,
          description: tool.description.slice(0, 120) + "...",
          url: `/instrumente#${tool.id}`,
          category: tool.category,
          categoryLabel: getCategoryLabel(tool.category),
        });
      }
    }

    for (const art of articles) {
      if (
        art.title.toLowerCase().includes(lower) ||
        art.excerpt.toLowerCase().includes(lower) ||
        art.slug.toLowerCase().includes(lower)
      ) {
        const basePath = "/recenzii";
        matched.push({
          type: "article",
          title: art.title,
          description: art.excerpt.slice(0, 120) + "...",
          url: `${basePath}/${art.slug}`,
          category: art.category,
          categoryLabel: getCategoryLabel(art.category),
        });
      }
    }

    setResults(matched.slice(0, 10));
  }, []);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    search(query);
  }, [query, search]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh]" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Caută instrumente AI, articole, recenzii..."
            className="flex-1 text-base outline-none placeholder:text-gray-400"
          />
          <kbd className="hidden sm:inline-flex px-2 py-0.5 text-xs text-gray-400 bg-gray-100 rounded font-mono">ESC</kbd>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.length < 2 && (
            <div className="px-5 py-8 text-center text-sm text-gray-400">
              Scrie minim 2 caractere pentru a căuta
            </div>
          )}

          {query.length >= 2 && results.length === 0 && (
            <div className="px-5 py-8 text-center text-sm text-gray-400">
              Nicio rezultat pentru &ldquo;{query}&rdquo;
            </div>
          )}

          {results.length > 0 && (
            <ul className="py-2">
              {results.map((r, i) => (
                <li key={`${r.type}-${i}`}>
                  <Link
                    href={r.url}
                    onClick={onClose}
                    className="flex items-start gap-3 px-5 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <span className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-semibold text-white ${r.type === "tool" ? "bg-blue-500" : "bg-emerald-500"}`}>
                      {r.type === "tool" ? "🔧" : "📄"}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm text-gray-900 truncate">{r.title}</span>
                        <span className="flex-shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500">
                          {r.categoryLabel}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{r.description}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {results.length > 0 && (
          <div className="px-5 py-2.5 border-t border-gray-100 text-[11px] text-gray-400 text-right">
            {results.length} rezultat{results.length !== 1 ? "e" : ""}
          </div>
        )}
      </div>
    </div>
  );
}
