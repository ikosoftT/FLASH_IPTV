import { ImageResponse } from "next/og";
import { brand } from "@/lib/data";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 72,
          background: "linear-gradient(135deg, #05070d 0%, #0a1d18 34%, #071528 67%, #15101f 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -120,
            top: -160,
            width: 520,
            height: 520,
            borderRadius: 520,
            background: "rgba(22, 163, 74, 0.34)"
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 500,
            height: 500,
            borderRadius: 500,
            background: "rgba(72, 167, 255, 0.25)"
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 420,
            bottom: -260,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: "rgba(216, 180, 106, 0.2)"
          }}
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: 42,
            padding: 54,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(255,255,255,0.055)"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", width: 720 }}>
            <div style={{ color: "#d8b46a", fontSize: 25, letterSpacing: 5, textTransform: "uppercase" }}>
              Premium live sports IPTV
            </div>
            <div style={{ marginTop: 26, maxWidth: 760, fontSize: 76, lineHeight: 0.98, fontWeight: 800 }}>
              {brand.name}
            </div>
            <div style={{ marginTop: 26, maxWidth: 720, color: "#d7dce7", fontSize: 28, lineHeight: 1.35 }}>
              26,000+ live channels, 100,000+ VOD titles, WhatsApp activation, and HD/FHD/4K access.
            </div>
            <div style={{ display: "flex", gap: 14, marginTop: 38 }}>
              {["World Cup Ready", "4K Quality", "All Devices"].map((item) => (
                <div
                  key={item}
                  style={{
                    border: "1px solid rgba(216,180,106,0.45)",
                    borderRadius: 999,
                    padding: "12px 18px",
                    color: "#fff2c3",
                    fontSize: 20,
                    fontWeight: 700,
                    background: "rgba(216,180,106,0.12)"
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              width: 260,
              height: 260,
              borderRadius: 66,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(145deg, rgba(216,180,106,0.22), rgba(72,167,255,0.16), rgba(22,163,74,0.24))",
              border: "2px solid rgba(255,255,255,0.18)"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ color: "#d8b46a", fontSize: 118, lineHeight: 0.9, fontWeight: 900 }}>4K</div>
              <div style={{ marginTop: 14, color: "#f6f8fb", fontSize: 42, fontWeight: 900, letterSpacing: 4 }}>
                LIVE
              </div>
              <div style={{ marginTop: 14, width: 92, height: 7, borderRadius: 999, background: "#16a34a" }} />
            </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
