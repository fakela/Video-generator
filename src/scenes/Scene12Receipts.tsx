import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

// Stat card data
const STATS = [
  {
    target: 1770000,
    prefix: "$",
    suffix: "M",
    displayDivisor: 1000000,
    displayDecimals: 2,
    label: "Raised",
    detail: "14,208 SOL from 1,000+ pioneers",
  },
  {
    target: 84000,
    prefix: "",
    suffix: "K",
    displayDivisor: 1000,
    displayDecimals: 0,
    label: "Compounds Screened",
    detail: "28 validated drug hits onchain",
  },
  {
    target: 10,
    prefix: "",
    suffix: "",
    displayDivisor: 1,
    displayDecimals: 0,
    label: "Disease Programs",
    detail: "11 ARS mutations modelled",
  },
];

export const Scene12Receipts: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Not promises. Proof." — springs in at frame 10
  const headSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 10, stiffness: 160 },
  });
  const headScale = interpolate(headSpring, [0, 1], [0.6, 1]);
  const headOpacity = interpolate(headSpring, [0, 0.3], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Cards stagger in — 3 cards, 30f apart, starting at frame 55
  const cardStart = 55;
  const cardInterval = 30;

  return (
    <SceneWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          fontFamily: ldTechD,
          textAlign: "center",
          gap: 32,
        }}
      >
        {/* "Not promises. Proof." */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: headOpacity,
            transform: `scale(${headScale})`,
          }}
        >
          Not promises.{" "}
          <span style={{ color: "#E040FB" }}>Proof.</span>
        </div>

        {/* 3 stat cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 28,
            marginTop: 8,
          }}
        >
          {STATS.map((stat, i) => {
            const delay = cardStart + i * cardInterval;

            // Card drops in from above
            const cardSpring = spring({
              frame: frame - delay,
              fps,
              config: { damping: 12, stiffness: 150 },
            });
            const cardY = interpolate(cardSpring, [0, 1], [-60, 0]);
            const cardOpacity = interpolate(cardSpring, [0, 0.4], [0, 1], {
              extrapolateRight: "clamp",
              extrapolateLeft: "clamp",
            });

            // Count-up animation — starts at delay, runs 1.5s (45f)
            const countProgress = interpolate(
              frame,
              [delay, delay + 45],
              [0, 1],
              { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
            );
            const rawValue = countProgress * stat.target;
            const displayValue = rawValue / stat.displayDivisor;
            const formatted =
              stat.displayDecimals > 0
                ? displayValue.toFixed(stat.displayDecimals)
                : Math.round(displayValue).toString();

            return (
              <div
                key={i}
                style={{
                  background: "linear-gradient(135deg, rgba(123,47,190,0.25), rgba(74,26,122,0.15))",
                  border: "1px solid rgba(204,68,255,0.4)",
                  borderRadius: 20,
                  padding: "32px 44px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                  minWidth: 280,
                  opacity: cardOpacity,
                  transform: `translateY(${cardY}px)`,
                  boxShadow: "0 0 30px rgba(123,47,190,0.25)",
                }}
              >
                {/* Stat number */}
                <div
                  style={{
                    fontSize: 80,
                    fontWeight: 900,
                    color: "#E040FB",
                    fontFamily: ldTechD,
                    lineHeight: 1,
                  }}
                >
                  {stat.prefix}{formatted}{stat.suffix}
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: 36,
                    fontWeight: 700,
                    color: "#ffffff",
                    fontFamily: ldTechD,
                  }}
                >
                  {stat.label}
                </div>

                {/* Detail */}
                <div
                  style={{
                    fontSize: 28,
                    color: "#A89BC2",
                    fontFamily: ldTechD,
                    maxWidth: 260,
                  }}
                >
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SceneWrapper>
  );
};
