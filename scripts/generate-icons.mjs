/**
 * Generate favicon and PWA icons for inteligenta.ai
 * Run: node scripts/generate-icons.mjs
 */
import sharp from "sharp";
import { writeFileSync } from "fs";

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4f46e5"/>
      <stop offset="100%" style="stop-color:#7c3aed"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <text x="256" y="310" font-family="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif" font-weight="800" font-size="240" fill="white" text-anchor="middle" dominant-baseline="central" letter-spacing="-8">ia</text>
</svg>`;

// Save SVG source
writeFileSync("public/icon.svg", SVG);
console.log("✓ public/icon.svg");

// Generate PNG icons
const sizes = [
  { name: "public/icon-512.png", size: 512 },
  { name: "public/icon-192.png", size: 192 },
  { name: "public/apple-touch-icon.png", size: 180 },
  { name: "public/favicon-32.png", size: 32 },
];

for (const { name, size } of sizes) {
  // Use a larger SVG render for better quality, then resize
  const svgForSize = SVG.replace('width="512"', `width="${Math.max(size, 512)}"`)
    .replace('height="512"', `height="${Math.max(size, 512)}"`)
    .replace('viewBox="0 0 512 512"', `viewBox="0 0 512 512"`);

  await sharp(Buffer.from(svgForSize))
    .resize(size, size, { fit: "cover" })
    .png()
    .toFile(name);
  console.log(`✓ ${name} (${size}x${size})`);
}

// Generate favicon.ico from 32x32 PNG
// sharp can output to png, we'll use ImageMagick for ICO conversion
// or just copy the 32px as the primary favicon reference
import { execSync } from "child_process";
try {
  execSync("convert public/favicon-32.png public/favicon.ico");
  console.log("✓ public/favicon.ico (ICO via ImageMagick)");
} catch {
  // Fallback: just copy the 32px PNG as favicon (browsers support PNG favicons)
  await sharp(Buffer.from(SVG))
    .resize(32, 32)
    .png()
    .toFile("public/favicon.ico");
  console.log("✓ public/favicon.ico (PNG fallback)");
}

console.log("\nAll icons generated!");
