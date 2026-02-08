import { ImageResponse } from "next/og";
export const runtime = "edge";
export const alt = "inteligenta.ai \u2014 Descopera cele mai bune instrumente AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        background: "linear-gradient(135deg, #001d4a 0%, #003380 30%, #0055EE 60%, #0088FF 100%)",
        width: "100%", height: "100%",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        fontFamily: "system-ui, sans-serif", position: "relative",
      }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.03)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 120, height: 120, borderRadius: 28, background: "rgba(255,255,255,0.15)", marginBottom: 32, fontSize: 64, fontWeight: 800, color: "white" }}>ia</div>
        <div style={{ fontSize: 56, fontWeight: 800, color: "white", marginBottom: 16, letterSpacing: "-1px" }}>inteligenta.ai</div>
        <div style={{ fontSize: 28, color: "rgba(255,255,255,0.8)", maxWidth: 700, textAlign: "center", lineHeight: 1.4 }}>
          Descopera cele mai bune instrumente AI din Romania
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 6, background: "linear-gradient(90deg, #3399FF, #a78bfa, #c084fc)" }} />
      </div>
    ),
    { ...size }
  );
}
