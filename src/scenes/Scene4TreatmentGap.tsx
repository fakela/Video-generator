import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene4TreatmentGap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 1. "95%" — dramatic scale punch from 0.2 with color transition (red pulse)
  const statSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 6, stiffness: 150 },
  });
  const statScale = interpolate(statSpring, [0, 1], [0.2, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const statOpacity = interpolate(frame, [8, 14], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  // Red pulse glow that throbs
  const redPulse = Math.sin(frame * 0.12) * 10 + 15;

  // 2. "of rare diseases have no approved treatment" — fade + translateY
  const descOpacity = interpolate(frame, [38, 58], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const descY = interpolate(frame, [38, 58], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. "Not even one option." — spring punch scale
  const subSpring = spring({
    frame: frame - 68,
    fps,
    config: { damping: 8, stiffness: 180 },
  });
  const subScale = interpolate(subSpring, [0, 1], [0.3, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const subOpacity = interpolate(frame, [68, 74], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

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
        {/* 1. "95%" — dramatic scale punch + red pulse glow */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 220,
            fontWeight: 900,
            color: "#ef4444",
            textAlign: "center",
            transform: `scale(${statScale})`,
            opacity: statOpacity,
            textShadow: `0 0 ${redPulse}px rgba(239, 68, 68, 0.7), 0 0 ${redPulse * 2}px rgba(239, 68, 68, 0.3)`,
          }}
        >
          95%
        </div>

        {/* 2. Description */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 52,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            opacity: descOpacity,
            transform: `translateY(${descY}px)`,
          }}
        >
          of rare diseases have no approved treatment
        </div>

        {/* 3. "Not even one option." — spring punch */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 44,
            fontWeight: 700,
            color: "#c4b5fd",
            textAlign: "center",
            opacity: subOpacity,
            transform: `scale(${subScale})`,
            marginTop: 20,
          }}
        >
          Not even one option.
        </div>
      </div>
    </SceneWrapper>
  );
};
