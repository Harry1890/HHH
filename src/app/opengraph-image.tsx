import { ImageResponse } from "next/og";
import { LogoMark } from "@/components/layout/LogoMark";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.companyName} — ${siteConfig.seoTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card generated at build time from `siteConfig`. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(180deg, #F7F7F5 0%, #FFFFFF 100%)",
          color: "#111111",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <LogoMark size={48} />
          <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.5 }}>{siteConfig.companyName}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#666660",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#5C7CFF" }} />
            Global AI engineering agency
          </div>
          <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1, letterSpacing: -3, maxWidth: 1000 }}>
            {siteConfig.headline}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#666660" }}>
          <div>{siteConfig.tagline}</div>
          <div>{siteConfig.locationMessage}</div>
        </div>
      </div>
    ),
    size,
  );
}
