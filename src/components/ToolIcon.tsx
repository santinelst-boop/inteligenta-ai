import Image from "next/image";

interface ToolIconProps {
  name: string;
  toolId: string;
  logoUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const toolLogos: Record<string, string> = {
  "chatgpt": "/logos/chatgpt.png",
  "claude": "/logos/claude.png",
  "midjourney": "/logos/midjourney.png",
  "runway": "/logos/runway.png",
  "github-copilot": "/logos/github-copilot.png",
  "elevenlabs": "/logos/elevenlabs.png",
  "jasper": "/logos/jasper.png",
  "grammarly": "/logos/grammarly.png",
  "canva": "/logos/canva.png",
  "pictory": "/logos/pictory.png",
  "synthesia": "/logos/synthesia.png",
  "notion-ai": "/logos/notion-ai.png",
  "copy-ai": "/logos/copy-ai.png",
  "dalle-3": "/logos/dalle-3.png",
  "stable-diffusion": "/logos/stable-diffusion.png",
  "cursor": "/logos/cursor.png",
  "perplexity": "/logos/perplexity.png",
  "gemini": "/logos/gemini.png",
  "getresponse": "/logos/getresponse.png",
  "writesonic": "/logos/writesonic.png",
};

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
  writesonic: { bg: "bg-[#0066FF]/10", text: "text-[#0066FF]" },
};

const defaultColors = { bg: "bg-primary/10", text: "text-primary" };

const sizePx: Record<string, number> = { sm: 32, md: 48, lg: 64 };

export default function ToolIcon({
  name, toolId, logoUrl, size = "md", className = "",
}: ToolIconProps) {
  const resolvedLogo = logoUrl || toolLogos[toolId];
  const colors = brandColors[toolId] || defaultColors;
  const sizeClasses = {
    sm: "w-8 h-8 text-xs rounded-lg",
    md: "w-12 h-12 text-lg rounded-xl",
    lg: "w-16 h-16 text-2xl rounded-2xl",
  };

  if (resolvedLogo) {
    return (
      <div className={`${sizeClasses[size]} overflow-hidden ${className}`}>
        <Image
          src={resolvedLogo}
          alt={`Logo ${name}`}
          width={sizePx[size]}
          height={sizePx[size]}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${colors.bg} flex items-center justify-center font-bold shrink-0 ${className}`}>
      <span className={colors.text}>{name.charAt(0)}</span>
    </div>
  );
}
