import {
  Pencil, Image, Video, Code, Music, Zap, Search, Mail,
  type LucideIcon,
} from "lucide-react";
interface CategoryConfig {
  icon: LucideIcon;
  gradient: string;
  pattern: string;
  label: string;
}
const categoryConfigs: Record<string, CategoryConfig> = {
  "ai-text": {
    icon: Pencil,
    gradient: "from-indigo-600 via-indigo-500 to-blue-500",
    pattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)",
    label: "Scriere AI",
  },
  "ai-imagine": {
    icon: Image,
    gradient: "from-violet-600 via-purple-500 to-fuchsia-500",
    pattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06) 0%, transparent 50%)",
    label: "Generare Imagini",
  },
  "ai-video": {
    icon: Video,
    gradient: "from-blue-600 via-blue-500 to-cyan-500",
    pattern: "radial-gradient(circle at 25% 75%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.06) 0%, transparent 50%)",
    label: "AI Video",
  },
  "ai-cod": {
    icon: Code,
    gradient: "from-emerald-600 via-green-500 to-teal-500",
    pattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)",
    label: "Programare AI",
  },
  "ai-audio": {
    icon: Music,
    gradient: "from-amber-600 via-orange-500 to-yellow-500",
    pattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06) 0%, transparent 50%)",
    label: "AI Audio",
  },
  "ai-productivitate": {
    icon: Zap,
    gradient: "from-red-600 via-rose-500 to-pink-500",
    pattern: "radial-gradient(circle at 25% 75%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 75% 25%, rgba(255,255,255,0.06) 0%, transparent 50%)",
    label: "Productivitate",
  },
  "ai-cautare": {
    icon: Search,
    gradient: "from-cyan-600 via-teal-500 to-emerald-500",
    pattern: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)",
    label: "Cautare AI",
  },
  "ai-email": {
    icon: Mail,
    gradient: "from-orange-700 via-amber-600 to-orange-500",
    pattern: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06) 0%, transparent 50%)",
    label: "Email Marketing",
  },
};
interface ArticleHeroImageProps {
  category: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}
export default function ArticleHeroImage({
  category, size = "md", className = "",
}: ArticleHeroImageProps) {
  const config = categoryConfigs[category] || categoryConfigs["ai-text"];
  const Icon = config.icon;
  const sizeClasses = { sm: "h-20 w-20", md: "h-48", lg: "h-64" };
  const iconSizes = { sm: "w-8 h-8", md: "w-16 h-16", lg: "w-20 h-20" };
  return (
    <div
      className={`bg-gradient-to-br ${config.gradient} ${sizeClasses[size]} rounded-xl flex flex-col items-center justify-center relative overflow-hidden ${className}`}
      style={{ backgroundImage: config.pattern }}
    >
      <div className="absolute top-3 right-3 w-16 h-16 rounded-full bg-white/5" />
      <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/5" />
      <div className="absolute top-1/2 left-1/4 w-6 h-6 rounded-full bg-white/5" />
      <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-2">
        <Icon className={`${iconSizes[size]} text-white`} />
      </div>
      {size !== "sm" && (
        <span className="relative z-10 text-white/80 text-xs font-medium tracking-wider uppercase mt-1">
          {config.label}
        </span>
      )}
    </div>
  );
}
