import Link from "next/link";
import type { AITool } from "@/data/tools";
import ToolIcon from "./ToolIcon";
interface AffiliateCTAProps {
  tool: AITool;
  variant?: "inline" | "box";
}
export default function AffiliateCTA({ tool, variant = "box" }: AffiliateCTAProps) {
  if (variant === "inline") {
    return (
      <div className="my-6 flex items-center gap-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
        <ToolIcon name={tool.name} toolId={tool.id} size="md" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-text text-sm">{tool.name}</p>
          <p className="text-xs text-text-light">{tool.pricing}</p>
        </div>
        <a href={`/go/${tool.id}`} target="_blank" rel="nofollow sponsored"
          className="shrink-0 px-4 py-2 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors">
          Incearca Gratuit \u2192
        </a>
      </div>
    );
  }
  return (
    <div className="my-8 bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-indigo-100 shadow-sm">
      <div className="flex items-start gap-4 mb-4">
        <ToolIcon name={tool.name} toolId={tool.id} size="lg" />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-text mb-1">{tool.name}</h3>
          <p className="text-sm text-text-light leading-relaxed">
            {tool.description.slice(0, 120)}...
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <a href={`/go/${tool.id}`} target="_blank" rel="nofollow sponsored"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg">
          Incearca {tool.name} Gratuit \u2192
        </a>
        <span className="text-xs text-text-light self-center">
          * Link afiliat.{" "}
          <Link href="/afiliere" className="underline">Detalii</Link>
        </span>
      </div>
    </div>
  );
}
