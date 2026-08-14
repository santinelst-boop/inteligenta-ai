import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        background: "#070B14",
        fontFamily: "var(--font-geist), system-ui, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 27,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: "#F4F6FB",
        }}
      >
        404
      </div>
      <div style={{ fontSize: 14, color: "#8A94AB" }}>
        This page does not exist.
      </div>
      <Link href="/" style={{ fontSize: 14, fontWeight: 500 }}>
        Go to sign in →
      </Link>
    </div>
  );
}
