import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export const alt = "K2 Vizag Net Center & Customized Gifts";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  // Read the local user-provided logo file as base64
  const logoPath = path.join(process.cwd(), "public/logo.png");
  const logoBuffer = fs.readFileSync(logoPath);
  const logoData = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          position: "relative",
          padding: "0 60px",
        }}
      >
        {/* Subtle large K2 watermark in background */}
        <div
          style={{
            position: "absolute",
            fontSize: "400px",
            fontWeight: 900,
            color: "rgba(245, 224, 0, 0.02)",
            left: "10%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        >
          K2
        </div>

        {/* Logo: Sized to 480px inside WhatsApp's square crop area */}
        <img
          src={logoData}
          width={480}
          height={480}
          style={{
            objectFit: "contain",
          }}
        />

        {/* Tagline to the right */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "48px",
            maxWidth: "540px",
            gap: "12px",
          }}
        >
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "44px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            DOCUMENTS, PRINTS &
          </div>
          <div
            style={{
              color: "#F5E000",
              fontSize: "44px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            CUSTOM GIFTS IN VIZAG
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
