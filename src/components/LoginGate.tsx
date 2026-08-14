"use client";

import { useEffect, useRef, useState } from "react";

const SANS = "var(--font-geist), system-ui, sans-serif";
const MONO = "var(--font-geist-mono), monospace";

// Front-end demo flow (per design handoff). Real auth + SMS provider land later;
// these gate nothing — there is no content behind the login yet.
const DEMO_USERS: Record<string, string> = {
  admin: "Admin@2026",
  editor: "Editor@2026",
};
const DEMO_CODE = "482913";

const PHRASES = [
  "Human talent writes. Intelligence amplifies.",
  "Every great book begins with a human mind.",
  "AI in service of the written word.",
  "Where stories, talent and intelligence meet.",
];

type Step = "login" | "sms" | "ok";

export default function LoginGate() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);
  const taglineRef = useRef<HTMLSpanElement>(null);

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<Step>("login");
  const [status, setStatus] = useState<"idle" | "error">("idle");

  // --- canvas flow-field animation (ported verbatim from the handoff prototype) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const host = canvas.parentElement as HTMLElement;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = host.clientWidth;
      h = host.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    // particles in 0..1 space so resize is safe; seeded so the start is stable
    type P = { x: number; y: number; hist: number[]; sp: number; z: number };
    const parts: P[] = [];
    let seed = 7;
    const rnd = () => {
      seed = (seed * 16807) % 2147483647;
      return seed / 2147483647;
    };
    for (let i = 0; i < 560; i++) {
      parts.push({
        x: rnd(),
        y: rnd(),
        hist: [],
        sp: 34 + rnd() * 46,
        z: 0.35 + rnd() * 0.65,
      });
    }

    // time-varying pseudo-noise field: sum of incommensurate sines -> never repeats
    const field = (x: number, y: number, t: number) =>
      1.5 * Math.sin(x * 0.0016 + t * 0.137) +
      1.3 * Math.cos(y * 0.0021 - t * 0.101) +
      0.9 * Math.sin(x * 0.0008 + y * 0.0012 + t * 0.059);

    const SPEED = 1;
    const COUNT = Math.min(parts.length, 5 * 70);
    const SHOW_HEADS = true;

    let prev = 0;
    let raf = 0;

    const draw = (now: number) => {
      if (!w || !h) return;
      const t = now * 0.001 * SPEED;
      const dt = Math.min(0.05, (now - (prev || now)) * 0.001) * SPEED;
      prev = now;

      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#060A12");
      bg.addColorStop(0.55, "#0A1122");
      bg.addColorStop(1, "#070B14");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const glow = ctx.createRadialGradient(
        w * 0.36, h * 0.52, 0,
        w * 0.36, h * 0.52, Math.max(w, h) * 0.55
      );
      glow.addColorStop(0, "rgba(79,124,255,0.09)");
      glow.addColorStop(0.5, "rgba(79,124,255,0.03)");
      glow.addColorStop(1, "rgba(79,124,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      ctx.lineCap = "round";
      for (let i = 0; i < COUNT; i++) {
        const p = parts[i];
        const px = p.x * w;
        const py = p.y * h;
        const a = field(px, py, t);
        p.x += ((Math.cos(a) * p.sp + 9) * dt) / w;
        p.y += ((Math.sin(a) * p.sp * 0.8) * dt) / h;
        if (p.x < -0.02 || p.x > 1.02 || p.y < -0.05 || p.y > 1.05) {
          p.x = -0.015;
          p.y = Math.random();
          p.hist = [];
          continue;
        }
        p.hist.push(px, py);
        if (p.hist.length > 36) p.hist.splice(0, 2);
        if (p.hist.length >= 6) {
          ctx.beginPath();
          ctx.moveTo(p.hist[0], p.hist[1]);
          for (let k = 2; k < p.hist.length; k += 2) {
            ctx.lineTo(p.hist[k], p.hist[k + 1]);
          }
          ctx.lineTo(p.x * w, p.y * h);
          ctx.strokeStyle =
            "rgba(122,156,255," + (0.04 + 0.1 * p.z).toFixed(3) + ")";
          ctx.lineWidth = 0.8 + 0.7 * p.z;
          ctx.stroke();
        }
        if (SHOW_HEADS) {
          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, 0.9 + 0.8 * p.z, 0, Math.PI * 2);
          ctx.fillStyle =
            "rgba(170,193,255," + (0.25 + 0.35 * p.z).toFixed(3) + ")";
          ctx.fill();
        }
      }

      const vg = ctx.createRadialGradient(
        w * 0.5, h * 0.5, Math.min(w, h) * 0.35,
        w * 0.5, h * 0.5, Math.max(w, h) * 0.75
      );
      vg.addColorStop(0, "rgba(6,9,17,0)");
      vg.addColorStop(1, "rgba(4,6,12,0.55)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);
    };

    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  // --- tagline typewriter (imperative textContent updates, no re-renders) ---
  useEffect(() => {
    let pi = 0;
    let ci = PHRASES[0].length;
    let mode: "hold" | "del" | "type" = "hold";
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const el = taglineRef.current;
      if (!el) {
        timer = setTimeout(tick, 300);
        return;
      }
      if (mode === "hold") {
        mode = "del";
        timer = setTimeout(tick, 2700);
        return;
      }
      if (mode === "del") {
        ci--;
        el.textContent = PHRASES[pi].slice(0, ci);
        if (ci <= 0) {
          pi = (pi + 1) % PHRASES.length;
          mode = "type";
        }
        timer = setTimeout(tick, 18);
      } else {
        ci++;
        el.textContent = PHRASES[pi].slice(0, ci);
        if (ci >= PHRASES[pi].length) mode = "hold";
        timer = setTimeout(tick, 42);
      }
    };
    timer = setTimeout(tick, 2400);
    return () => clearTimeout(timer);
  }, []);

  // auto-focus the code input when the SMS step appears
  useEffect(() => {
    if (step === "sms") codeRef.current?.focus();
  }, [step]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const u = user.trim();
    if (DEMO_USERS[u] === pass) {
      setStep("sms");
      setCode("");
      setStatus("idle");
    } else {
      setStatus("error");
    }
  };

  const verify = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === DEMO_CODE) {
      setStep("ok");
      setStatus("idle");
    } else {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    height: 46,
    padding: "0 14px",
    fontFamily: SANS,
    fontSize: 15,
    color: "#0B1220",
    background: "#FFFFFF",
    borderRadius: 9,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.09em",
    textTransform: "uppercase",
    color: "#525C78",
  };

  const errorStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "11px 13px",
    fontSize: 13,
    color: "#B4232A",
    background: "#FDF1F1",
    border: "1px solid #F2D4D4",
    borderRadius: 8,
  };

  const buttonStyle: React.CSSProperties = {
    height: 48,
    fontFamily: SANS,
    fontSize: 15,
    fontWeight: 600,
    color: "#FFFFFF",
    border: "none",
    borderRadius: 9,
    cursor: "pointer",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 27,
    fontWeight: 600,
    letterSpacing: "-0.02em",
    color: "#0B1220",
  };

  const subStyle: React.CSSProperties = {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 1.5,
    color: "#66708A",
  };

  return (
    <div
      className="lg-shell"
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100vh",
        minHeight: 600,
        fontFamily: SANS,
        background: "#070B14",
      }}
    >
      {/* left pane — animation */}
      <div
        className="lg-left"
        style={{
          position: "relative",
          flex: 1.35,
          minWidth: 0,
          overflow: "hidden",
          background: "#070B14",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 44,
            display: "flex",
            alignItems: "baseline",
            gap: 2,
          }}
        >
          <span
            style={{
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#F4F6FB",
            }}
          >
            inteligenta
          </span>
          <span
            style={{
              fontSize: 21,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              color: "#4F7CFF",
            }}
          >
            .ai
          </span>
        </div>
        <div
          style={{
            position: "absolute",
            left: 44,
            bottom: 40,
            right: 44,
            display: "flex",
            flexDirection: "column",
            gap: 14,
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: "-0.015em",
              lineHeight: 1.35,
              color: "#E7EBF4",
              maxWidth: 440,
              minHeight: 66,
              textWrap: "pretty",
            }}
          >
            <span ref={taglineRef}>
              Human talent writes. Intelligence&nbsp;amplifies.
            </span>
            <span
              className="lg-caret"
              style={{
                display: "inline-block",
                width: 2,
                height: 20,
                marginLeft: 6,
                background: "#7A9CFF",
                verticalAlign: -3,
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: "0.08em",
              color: "#5A6682",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#2ED3B7",
                boxShadow: "0 0 8px rgba(46,211,183,0.8)",
              }}
            />
            <span style={{ color: "#8A94AB" }}>SYSTEM ONLINE</span>
            <span style={{ color: "#3C4560" }}>·</span>
            <span style={{ color: "#5A6682" }}>SECURE CHANNEL</span>
          </div>
        </div>
      </div>

      {/* right pane — auth panel */}
      <div
        className="lg-right"
        style={{
          flex: "none",
          width: 460,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 56px 40px",
          background: "#FBFCFE",
          borderLeft: "1px solid rgba(7,11,20,0.06)",
        }}
      >
        <div
          className="lg-panel-inner"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {step === "login" && (
            <>
              <div style={headingStyle}>Sign in</div>
              <div style={subStyle}>
                Restricted area. Authorized accounts only.
              </div>
              <form
                onSubmit={submit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  marginTop: 36,
                }}
              >
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 7 }}
                >
                  <label htmlFor="li-user" style={labelStyle}>
                    Username
                  </label>
                  <input
                    id="li-user"
                    className="lg-input"
                    type="text"
                    autoComplete="username"
                    spellCheck={false}
                    value={user}
                    onChange={(e) => {
                      setUser(e.target.value);
                      setStatus("idle");
                    }}
                    style={inputStyle}
                  />
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 7 }}
                >
                  <label htmlFor="li-pass" style={labelStyle}>
                    Password
                  </label>
                  <input
                    id="li-pass"
                    className="lg-input"
                    type="password"
                    autoComplete="current-password"
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                      setStatus("idle");
                    }}
                    style={inputStyle}
                  />
                </div>
                {status === "error" && (
                  <div className="lg-error" style={errorStyle}>
                    <span style={{ fontWeight: 600 }}>Access denied.</span>
                    <span style={{ color: "#9A3A3F" }}>
                      Check your credentials.
                    </span>
                  </div>
                )}
                <button
                  type="submit"
                  className="lg-btn"
                  style={{ ...buttonStyle, marginTop: 4 }}
                >
                  Continue
                </button>
              </form>
            </>
          )}

          {step === "sms" && (
            <>
              <div
                style={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#EEF2FC",
                  border: "1px solid #DCE4F7",
                  borderRadius: 11,
                  marginBottom: 22,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect
                    x="5.5"
                    y="2"
                    width="9"
                    height="16"
                    rx="2"
                    stroke="#4F7CFF"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8.5 15.5H11.5"
                    stroke="#4F7CFF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div style={headingStyle}>Two-step verification</div>
              <div style={{ ...subStyle, textWrap: "pretty" }}>
                Enter the 6-digit code sent by SMS to{" "}
                <span
                  style={{
                    fontWeight: 600,
                    color: "#39415C",
                    whiteSpace: "nowrap",
                  }}
                >
                  +40&nbsp;•••&nbsp;•••&nbsp;•12
                </span>
                .
              </div>
              <form
                onSubmit={verify}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  marginTop: 32,
                }}
              >
                <input
                  ref={codeRef}
                  className="lg-input"
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={6}
                  spellCheck={false}
                  placeholder="••••••"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value.replace(/\D/g, "").slice(0, 6));
                    setStatus("idle");
                  }}
                  style={{
                    height: 58,
                    padding: "0 4px 0 18px",
                    fontFamily: MONO,
                    fontSize: 24,
                    fontWeight: 500,
                    letterSpacing: "0.45em",
                    textAlign: "center",
                    color: "#0B1220",
                    background: "#FFFFFF",
                    borderRadius: 9,
                  }}
                />
                {status === "error" && (
                  <div className="lg-error" style={errorStyle}>
                    <span style={{ fontWeight: 600 }}>Invalid code.</span>
                    <span style={{ color: "#9A3A3F" }}>
                      Try again or resend.
                    </span>
                  </div>
                )}
                <button type="submit" className="lg-btn" style={buttonStyle}>
                  Verify
                </button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 13,
                  }}
                >
                  <span
                    className="lg-link-muted"
                    onClick={() => {
                      setStep("login");
                      setPass("");
                      setCode("");
                      setStatus("idle");
                    }}
                  >
                    ← Back to sign in
                  </span>
                  <span
                    className="lg-link-accent"
                    onClick={() => {
                      setCode("");
                      setStatus("idle");
                    }}
                  >
                    Resend code
                  </span>
                </div>
              </form>
            </>
          )}

          {step === "ok" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#E7F7F2",
                  border: "1px solid #C6EBE0",
                  borderRadius: "50%",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12.5L10 17.5L19 7.5"
                    stroke="#149C7E"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div style={{ ...headingStyle, marginTop: 22 }}>
                Authenticated
              </div>
              <div style={subStyle}>
                Signed in as{" "}
                <span style={{ fontWeight: 600, color: "#39415C" }}>
                  {user}
                </span>
                . Access granted.
              </div>
              <span
                className="lg-link-accent"
                style={{ marginTop: 28, fontSize: 13 }}
                onClick={() => {
                  setStep("login");
                  setUser("");
                  setPass("");
                  setCode("");
                  setStatus("idle");
                }}
              >
                Sign out
              </span>
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            fontSize: 12,
            color: "#9AA3B8",
          }}
        >
          <span>© 2026 inteligenta.ai</span>
          <span
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: "0.06em",
            }}
          >
            v1.0
          </span>
        </div>
      </div>
    </div>
  );
}
