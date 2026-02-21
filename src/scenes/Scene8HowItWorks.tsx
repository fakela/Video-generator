import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene8HowItWorks: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "How Curetopia Works" (frame 10) — fade up
  const titleOpacity = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const titleY = interpolate(frame, [10, 30], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 2. "From community funding..." (frame 30) — fade up
  const descOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const descY = interpolate(frame, [30, 50], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 3. "20x cheaper..." (frame 50) — spring punch
  const statPunch = spring({ frame: frame - 50, fps, config: { damping: 12, stiffness: 200 } });
  const statScale = interpolate(statPunch, [0, 1], [0.7, 1]);

  return (
    <SceneWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {/* 1. Title */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          How Curetopia Works
        </div>

        {/* 2. Description */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 26,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            opacity: descOpacity,
            transform: `translateY(${descY}px)`,
            marginTop: 16,
          }}
        >
          From community funding to FDA approval.
        </div>

        {/* 3. Cost stat */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 36,
            fontWeight: 700,
            color: "#22c55e",
            textAlign: "center",
            transform: `scale(${statScale})`,
            marginTop: 24,
          }}
        >
          20× cheaper than Big Pharma.
        </div>
      </div>
    </SceneWrapper>
  );
};
