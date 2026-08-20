import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * SNS共有時に使われるOGP画像。next/ogのデフォルトフォントは日本語グリフを持たないため、
 * ここでは欧文のみで構成し、ブランドカラー(鉄黒/クリーンホワイト/鍛造の炎)で世界観を伝える。
 * （①②のopengraph-image.tsxと同じ方針。CLAUDE.md Phase 5品質チェック対応）
 */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#141414",
          color: "#f5f4f1",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 10,
            color: "#ff7a5c",
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Personal Gym
        </div>
        <div style={{ display: "flex", fontSize: 150, letterSpacing: 20 }}>FORGE</div>
        <div style={{ marginTop: 40, width: 120, height: 1, backgroundColor: "#ff4a26" }} />
        <div style={{ fontSize: 24, marginTop: 32, color: "#e4e2dc" }}>
          Concept Project by SakuyaLabs
        </div>
      </div>
    ),
    size,
  );
}
