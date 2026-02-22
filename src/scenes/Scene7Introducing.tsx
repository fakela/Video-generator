import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene7Introducing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "Meet Curetopia." (frame 10) — fade up
  const titleOpacity = interpolate(frame, [10, 30], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const titleY = interpolate(frame, [10, 30], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 2. Description (frame 35) — fade up
  const descOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const descY = interpolate(frame, [35, 55], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  // 3. "Decentralized. Community-owned. Unstoppable." (frame 60) — spring punch
  const tagPunch = spring({ frame: frame - 60, fps, config: { damping: 12, stiffness: 200 } });
  const tagScale = interpolate(tagPunch, [0, 1], [0.8, 1]);

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
        {/* 1. "Meet Curetopia." */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Meet Curetopia.
        </div>

        {/* 2. Description */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 28,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            opacity: descOpacity,
            transform: `translateY(${descY}px)`,
            maxWidth: 800,
            marginTop: 16,
          }}
        >
          The world's first BioDAO dedicated to eradicating rare diseases.
        </div>

        {/* 3. Tagline */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 28,
            fontWeight: 700,
            color: "#a855f7",
            textAlign: "center",
            transform: `scale(${tagScale})`,
            marginTop: 24,
          }}
        >
          Decentralized. Community-owned. Unstoppable.
        </div>
      </div>
    </SceneWrapper>
  );
};
