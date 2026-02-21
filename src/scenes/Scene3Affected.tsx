import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene3Affected: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Softer glow (blue-purple, lower opacity)
  const glowPulse = Math.sin(frame * 0.05) * 0.1 + 0.25;

  // 1. "1 in 10" (frame 10) — slower zoom
  const statPunch = spring({ frame: frame - 10, fps, config: { damping: 18, stiffness: 100 } });
  const statScale = interpolate(statPunch, [0, 1], [0.8, 1]);

  // 2. Description (frame 40) — fade up
  const descOpacity = interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const descY = interpolate(frame, [40, 60], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 3. "That's 800 million..." (frame 65) — fade up
  const subOpacity = interpolate(frame, [65, 85], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const subY = interpolate(frame, [65, 85], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <SceneWrapper>
      {/* Softer radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background: `radial-gradient(circle, rgba(139,92,246,${glowPulse}) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 1. "1 in 10" */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 140,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            transform: `scale(${statScale})`,
          }}
        >
          1 in 10
        </div>

        {/* 2. Description */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 32,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            opacity: descOpacity,
            transform: `translateY(${descY}px)`,
          }}
        >
          People on Earth are living with a rare disease.
        </div>

        {/* 3. Sub text */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 22,
            fontWeight: 400,
            color: "#c4b5fd",
            textAlign: "center",
            opacity: subOpacity,
            transform: `translateY(${subY}px)`,
            marginTop: 20,
          }}
        >
          That's 800 million people. Waiting.
        </div>
      </div>
    </SceneWrapper>
  );
};
