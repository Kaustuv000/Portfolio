import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kaustuv Dey — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 25% 30%, rgba(167,139,250,0.15) 0%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(167,139,250,0.10) 0%, transparent 60%), #101012",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#a78bfa",
            fontSize: 28,
            fontFamily: "monospace",
            letterSpacing: 4,
            marginBottom: 24,
          }}
        >
          KD.
        </div>
        <div
          style={{
            color: "#e4e4e7",
            fontSize: 92,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            marginBottom: 28,
          }}
        >
          Kaustuv Dey
        </div>
        <div
          style={{
            color: "#a1a1aa",
            fontSize: 38,
            lineHeight: 1.3,
            maxWidth: 900,
          }}
        >
          Software Engineer building scalable cloud infrastructure &
          data-driven systems.
        </div>
        <div
          style={{
            color: "#a78bfa",
            fontSize: 26,
            fontFamily: "monospace",
            marginTop: 48,
          }}
        >
          warnerbros.discovery · nit jalandhar
        </div>
      </div>
    ),
    { ...size }
  );
}
