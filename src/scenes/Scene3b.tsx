import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Easing,
  AbsoluteFill,
} from "remotion";
import { poppins } from "../fonts";

const ease = Easing.bezier(0.16, 1, 0.3, 1);

export const Scene3bCommunity: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // 10-frame crossfade in/out
  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
    easing: ease,
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 10, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp" }
  );
  const sceneOpacity = Math.min(fadeIn, fadeOut);

  // Text spring in
  const textProgress = spring({ frame, fps, config: { damping: 20, stiffness: 180 } });
  const glowPulse = Math.sin(frame / 20) * 0.3 + 0.7;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: sceneOpacity,
        padding: "70px 120px",
        textAlign: "center",
      }}
    >
      {/* Subtle center glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 50%, rgba(168,85,247,0.12) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Decorative top sparkle */}
      <div
        style={{
          fontSize: 32,
          marginBottom: 32,
          opacity: textProgress * glowPulse,
          transform: `scale(${interpolate(textProgress, [0, 1], [0.5, 1])})`,
        }}
      >
        ✦
      </div>

      {/* Main cinematic text */}
      <div
        style={{
          color: "#c4b5fd",
          fontSize: 76,
          fontWeight: 900,
          fontFamily: poppins,
          lineHeight: 1.2,
          letterSpacing: "0.06em",
          textShadow: `0 0 60px rgba(196,181,253,${glowPulse * 0.8}), 0 0 120px rgba(168,85,247,0.4)`,
          opacity: textProgress,
          transform: `scale(${interpolate(textProgress, [0, 1], [0.85, 1])}) translateY(${(1 - textProgress) * 30}px)`,
        }}
      >
        Community Medicine.
      </div>
      <div
        style={{
          color: "#a855f7",
          fontSize: 76,
          fontWeight: 900,
          fontFamily: poppins,
          lineHeight: 1.2,
          letterSpacing: "0.06em",
          textShadow: `0 0 60px rgba(168,85,247,${glowPulse * 0.9}), 0 0 120px rgba(236,72,153,0.4)`,
          opacity: textProgress,
          transform: `scale(${interpolate(textProgress, [0, 1], [0.85, 1])}) translateY(${(1 - textProgress) * 30}px)`,
          marginTop: 8,
        }}
      >
        Onchain.
      </div>

      {/* Decorative bottom sparkle */}
      <div
        style={{
          fontSize: 32,
          marginTop: 32,
          opacity: textProgress * glowPulse,
          transform: `scale(${interpolate(textProgress, [0, 1], [0.5, 1])})`,
        }}
      >
        ✦
      </div>
    </AbsoluteFill>
  );
};
