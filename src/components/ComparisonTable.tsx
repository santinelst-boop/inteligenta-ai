"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AITool } from "@/data/tools";

interface ComparisonTableProps {
  tools: AITool[];
  maxTools?: number;
}

export default function ComparisonTable({
  tools,
  maxTools = 10,
}: ComparisonTableProps) {
  const [sortBy, setSortBy] = useState<"rating" | "name">("rating");

  const sortedTools = [...tools]
    .sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }
      return a.name.localeCompare(b.name, "ro");
    })
    .slice(0, maxTools);

  const getPricingLabel = (pricing: string) => {
    switch (pricing) {
      case "Gratuit":
        return "Gratuit";
      case "Freemium":
        return "Freemium";
      case "Plătit":
        return "Plătit";
      case "Open Source":
        return "Open Source";
      default:
        return pricing;
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing) {
      case "Gratuit":
        return "bg-green-100 text-green-800";
      case "Freemium":
        return "bg-blue-100 text-blue-800";
      case "Plătit":
        return "bg-amber-100 text-amber-800";
      case "Open Source":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      {/* Sort controls */}
      <div className="flex justify-end">
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-text">
            Sortează după:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "rating" | "name")}
            className="px-3 py-2 rounded-lg border border-gray-300 text-sm bg-white text-text focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="rating">Rating (descrescător)</option>
            <option value="name">Nume (A-Z)</option>
          </select>
        </div>
      </div>

      {/* Table wrapper */}
      <div className="overflow-x-auto rounded-2xl border border-gray-200">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-50 to-sky-50 border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-bold text-text">
                Instrument
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-text">
                Categorie
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-text">
                Rating
              </th>
              <th className="px-6 py-4 text-left text-sm font-bold text-text">
                Preț
              </th>
              <th className="px-6 py-4 text-center text-sm font-bold text-text">
                Acțiune
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedTools.map((tool, idx) => (
              <tr
                key={tool.id}
                className={`${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50 transition-colors`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {tool.logoUrl ? (
                        <Image src={tool.logoUrl} alt={tool.name} width={40} height={40} className="w-full h-full object-contain" />
                      ) : (
                        tool.name.charAt(0)
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-text text-sm">
                        {tool.name}
                      </p>
                      <p className="text-xs text-text-light truncate">
                        {tool.description.split(".")[0]}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm text-text-light">{tool.category}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-sm font-bold text-text">
                      {tool.rating.toFixed(1)}
                    </span>
                    <span className="text-yellow-400">★</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getPricingColor(
                      tool.pricing
                    )}`}
                  >
                    {getPricingLabel(tool.pricing)}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  {tool.affiliateUrl && tool.affiliateUrl !== "#" ? (
                    <Link
                      href={tool.affiliateUrl}
                      rel="noopener noreferrer sponsored"
                      target="_blank"
                      className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
                    >
                      Verifică Prețul
                    </Link>
                  ) : (
                    <span className="text-xs text-text-light">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer note */}
      <p className="text-xs text-text-light text-center">
        Comparație bazată pe ultimele informații disponibile. Prețurile și caracteristicile se pot schimba.
      </p>
    </div>
  );
}
