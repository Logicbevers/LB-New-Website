import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LogicBevers | Managed IT Services for Small Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
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

        {/* Grid background lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "60px 80px",
            height: "100%",
          }}
        >
          {/* Logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            {/* Geometric logo mark — simplified hexagonal ring */}
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <polygon points="22,2 38,11 38,33 22,42 6,33 6,11" fill="none" stroke="#3D7A3F" strokeWidth="3" />
              <polygon points="22,9 33,15.5 33,28.5 22,35 11,28.5 11,15.5" fill="none" stroke="#4A9E4D" strokeWidth="2" />
              <polygon points="22,16 28,19.5 28,26.5 22,30 16,26.5 16,19.5" fill="#3D7A3F" />
            </svg>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  color: "#4A9E4D",
                  fontWeight: 900,
                  fontSize: "20px",
                  letterSpacing: "0.08em",
                  lineHeight: 1,
                  textTransform: "uppercase",
                }}
              >
                LOGIC BEVERS
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.30)",
                  fontSize: "8px",
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

          {/* Headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
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
                  fontSize: "14px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Managed IT Services
              </span>
            </div>
            <div
              style={{
                color: "#fff",
                fontSize: "72px",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-2px",
              }}
            >
              Smart IT.
              <br />
              <span style={{ color: "#3D7A3F" }}>Scaled.</span> Right.
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "0px" }}>
            {[
              { value: "150+", label: "Companies" },
              { value: "$2M+", label: "Client Savings" },
              { value: "99.99%", label: "Uptime" },
              { value: "0", label: "Breaches" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px 32px",
                  borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)",
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span
                  style={{
                    color: "#3D7A3F",
                    fontSize: "28px",
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
