import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.companyName} — ${siteConfig.seoTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share card generated at build time from `siteConfig`. */
export default async function OpenGraphImage() {
  // The OG renderer cannot use next/image; embed the mark tile directly.
  const mark = await readFile(join(process.cwd(), "public/brand/orbion-mark.png"));
  const markSrc = `data:image/png;base64,${mark.toString("base64")}`;

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
          {/* eslint-disable-next-line @next/next/no-img-element -- OG renderer, not the DOM */}
          <img src={markSrc} width={48} height={48} alt="" style={{ borderRadius: 12 }} />
          <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: 6, textTransform: "uppercase" }}>
            {siteConfig.companyName}
          </div>
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
