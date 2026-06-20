import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "K2 Vizag Net Center & Customized Gifts";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 80px",
          position: "relative",
        }}
      >
        {/* Subtle large K2 watermark in background */}
        <div
          style={{
            position: "absolute",
            fontSize: "400px",
            fontWeight: 900,
            color: "rgba(245, 224, 0, 0.03)",
            left: "10%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          K2
        </div>

        {/* Left Side: Logo */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <span
            style={{
              fontSize: "110px",
              fontWeight: 900,
              color: "#F5E000",
              lineHeight: 1,
              letterSpacing: "-0.05em",
            }}
          >
            K2
          </span>
          <span
            style={{
              fontSize: "36px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1,
              letterSpacing: "0.2em",
            }}
          >
            VIZAG
          </span>
        </div>

        {/* Right Side: Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxWidth: '580px',
            gap: "15px",
          }}
        >
          <span
            style={{
              fontSize: "44px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            DOCUMENTS, PRINTS &
          </span>
          <span
            style={{
              fontSize: "44px",
              fontWeight: 800,
              color: "#F5E000",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            CUSTOM GIFTS IN VIZAG
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
