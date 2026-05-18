import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name    = searchParams.get("name")    || "IT Services";
  const desc    = searchParams.get("desc")    || "Enterprise-grade IT for small business.";
  const category = searchParams.get("category") || "Managed IT Services";

  // Truncate desc to ~100 chars so it fits cleanly
  const shortDesc = desc.length > 100 ? desc.slice(0, 97) + "…" : desc;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0A0A0A",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Green accent bar top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            backgroundColor: "#3D7A3F",
          }}
        />

        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Green glow — top right */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(61,122,63,0.18) 0%, transparent 70%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px 80px 52px",
            height: "100%",
          }}
        >
          {/* Logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <svg width="40" height="40" viewBox="0 0 44 44" fill="none">
              <polygon points="22,2 38,11 38,33 22,42 6,33 6,11" fill="none" stroke="#3D7A3F" strokeWidth="3" />
              <polygon points="22,9 33,15.5 33,28.5 22,35 11,28.5 11,15.5" fill="none" stroke="#4A9E4D" strokeWidth="2" />
              <polygon points="22,16 28,19.5 28,26.5 22,30 16,26.5 16,19.5" fill="#3D7A3F" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#4A9E4D",
                  fontWeight: 900,
                  fontSize: "18px",
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                LOGIC BEVERS
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.28)",
                  fontSize: "7px",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: "3px",
                }}
              >
                UNLOCKING LOGIC AND EMPOWERING VENTURES
              </span>
            </div>
          </div>

          {/* Main content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {/* Category pill */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#3D7A3F",
                }}
              />
              <span
                style={{
                  color: "#3D7A3F",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </span>
            </div>

            {/* Service name — big headline */}
            <div
              style={{
                color: "#ffffff",
                fontSize: name.length > 25 ? "54px" : "66px",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-1.5px",
                maxWidth: "820px",
              }}
            >
              {name}
            </div>

            {/* Description */}
            <div
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.5,
                maxWidth: "720px",
                marginTop: "4px",
              }}
            >
              {shortDesc}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "20px",
            }}
          >
            <span
              style={{
                color: "rgba(255,255,255,0.3)",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.08em",
              }}
            >
              logicbevers.com
            </span>
            <div
              style={{
                display: "flex",
                gap: "24px",
              }}
            >
              {["150+ Companies", "99.99% Uptime", "0 Breaches"].map((stat, i) => (
                <span
                  key={i}
                  style={{
                    color: "rgba(255,255,255,0.25)",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
