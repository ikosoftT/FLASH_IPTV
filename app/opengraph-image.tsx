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
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #05070d 0%, #0b1f17 42%, #0b1222 72%, #15101f 100%)",
          color: "white"
        }}
      >
        <div style={{ color: "#d8b46a", fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>
          Live Sports IPTV
        </div>
        <div style={{ marginTop: 28, maxWidth: 900, fontSize: 78, lineHeight: 1.05, fontWeight: 700 }}>
          {brand.name}
        </div>
        <div style={{ marginTop: 28, maxWidth: 760, color: "#d7dce7", fontSize: 30, lineHeight: 1.35 }}>
          26,000+ live channels, 100,000+ VOD titles, WhatsApp activation, and HD/FHD/4K access.
        </div>
      </div>
    ),
    size
  );
}
