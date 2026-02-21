import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene2Scale: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pulsing radial glow
  const glowPulse = Math.sin(frame * 0.06) * 0.15 + 0.35;

  // 1. "10,000+" (frame 10) — spring punch
  const statPunch = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 200 } });
  const statScale = interpolate(statPunch, [0, 1], [0.7, 1]);

  // 2. Description (frame 35) — fade up
  const descOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const descY = interpolate(frame, [35, 55], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 3. "95% have no..." (frame 60) — fade up
  const subOpacity = interpolate(frame, [60, 80], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const subY = interpolate(frame, [60, 80], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <SceneWrapper>
      {/* Pulsing radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 800,
          background: `radial-gradient(circle, rgba(168,85,247,${glowPulse}) 0%, transparent 70%)`,
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
        {/* 1. "10,000+" */}
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
          10,000+
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
          Rare diseases have been identified worldwide
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
          95% have no approved treatment. Not even one option.
        </div>
      </div>
    </SceneWrapper>
  );
};
