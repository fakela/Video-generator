import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const SceneReceipts: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "The Receipts" — spring punch at frame 8
  const titleSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 8, stiffness: 160 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.5, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // "Not promises. Proof." — fade at frame 28
  const subtitleOpacity = interpolate(frame, [28, 48], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Three receipt items — staggered fade-up
  const items = [
    { stat: "$1.77M Raised", detail: "14,208 SOL from 1,000+ pioneers" },
    { stat: "84,000 Tests", detail: "28 validated drug hits onchain" },
    { stat: "10 Disease Programs", detail: "11 ARS mutations modelled" },
  ];

  const itemStartFrame = 55;
  const itemInterval = 18;

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
          gap: 16,
        }}
      >
        {/* "The Receipts" */}
        <div
          style={{
            fontSize: 80,
            color: "#ffffff",
            fontWeight: 900,
            fontFamily: ldTechD,
            transform: `scale(${titleScale})`,
            opacity: titleOpacity,
          }}
        >
          The Receipts
        </div>

        {/* "Not promises. Proof." */}
        <div
          style={{
            fontSize: 44,
            color: "#A89BC2",
            fontFamily: ldTechD,
            opacity: subtitleOpacity,
            marginBottom: 24,
          }}
        >
          Not promises. Proof.
        </div>

        {/* Receipt items */}
        {items.map((item, i) => {
          const itemDelay = itemStartFrame + i * itemInterval;
          const itemOpacity = interpolate(
            frame,
            [itemDelay, itemDelay + 15],
            [0, 1],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
          );
          const itemTranslateY = interpolate(
            frame,
            [itemDelay, itemDelay + 15],
            [24, 0],
            { extrapolateRight: "clamp", extrapolateLeft: "clamp" }
          );

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                opacity: itemOpacity,
                transform: `translateY(${itemTranslateY}px)`,
              }}
            >
              <div
                style={{
                  fontSize: 44,
                  color: "#E040FB",
                  fontWeight: 700,
                  fontFamily: ldTechD,
                  minWidth: 340,
                  textAlign: "right",
                }}
              >
                {item.stat}
              </div>
              <div
                style={{
                  width: 3,
                  height: 36,
                  background: "rgba(123,47,190,0.5)",
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  fontSize: 38,
                  color: "#A89BC2",
                  fontFamily: ldTechD,
                  textAlign: "left",
                }}
              >
                {item.detail}
              </div>
            </div>
          );
        })}
      </div>
    </SceneWrapper>
  );
};
