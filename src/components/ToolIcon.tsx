interface ToolIconProps {
  name: string;
  toolId: string;
  logoUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}
const brandColors: Record<string, { bg: string; text: string }> = {
  chatgpt: { bg: "bg-[#10a37f]/10", text: "text-[#10a37f]" },
  claude: { bg: "bg-[#d4a574]/10", text: "text-[#d4a574]" },
  midjourney: { bg: "bg-[#383640]/10", text: "text-[#383640]" },
  runway: { bg: "bg-[#6c5ce7]/10", text: "text-[#6c5ce7]" },
  "github-copilot": { bg: "bg-[#1f2328]/10", text: "text-[#1f2328]" },
  elevenlabs: { bg: "bg-[#1a1a2e]/10", text: "text-[#1a1a2e]" },
  jasper: { bg: "bg-[#f7a400]/10", text: "text-[#f7a400]" },
  grammarly: { bg: "bg-[#15c39a]/10", text: "text-[#15c39a]" },
  canva: { bg: "bg-[#00c4cc]/10", text: "text-[#00c4cc]" },
  pictory: { bg: "bg-[#6c63ff]/10", text: "text-[#6c63ff]" },
  synthesia: { bg: "bg-[#5b21b6]/10", text: "text-[#5b21b6]" },
  "notion-ai": { bg: "bg-[#000000]/10", text: "text-[#000000]" },
  "copy-ai": { bg: "bg-[#6d28d9]/10", text: "text-[#6d28d9]" },
  "dalle-3": { bg: "bg-[#10a37f]/10", text: "text-[#10a37f]" },
  "stable-diffusion": { bg: "bg-[#a855f7]/10", text: "text-[#a855f7]" },
  cursor: { bg: "bg-[#000000]/10", text: "text-[#000000]" },
  perplexity: { bg: "bg-[#20808d]/10", text: "text-[#20808d]" },
  gemini: { bg: "bg-[#4285f4]/10", text: "text-[#4285f4]" },
  getresponse: { bg: "bg-[#00baff]/10", text: "text-[#00baff]" },
  writesonic: { bg: "bg-[#6366f1]/10", text: "text-[#6366f1]" },
};
const defaultColors = { bg: "bg-primary/10", text: "text-primary" };
export default function ToolIcon({
  name, toolId, logoUrl, size = "md", className = "",
}: ToolIconProps) {
  const colors = brandColors[toolId] || defaultColors;
  const sizeClasses = {
    sm: "w-8 h-8 text-xs rounded-lg",
    md: "w-12 h-12 text-lg rounded-xl",
    lg: "w-16 h-16 text-2xl rounded-2xl",
  };
  if (logoUrl) {
    return (
      <div className={`${sizeClasses[size]} overflow-hidden ${className}`}>
        <img src={logoUrl} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div className={`${sizeClasses[size]} ${colors.bg} flex items-center justify-center font-bold shrink-0 ${className}`}>
      <span className={colors.text}>{name.charAt(0)}</span>
    </div>
  );
}
