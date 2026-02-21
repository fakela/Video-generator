import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate, Easing } from "remotion";
import { poppins } from "../fonts";

// Asteroid-like CSS shapes for visual depth
const ASTEROIDS = [
  { x: 1460, y: 80,  w: 110, h: 72,  rotation: 18,  color: "#2d1b69", glow: "rgba(168,85,247,0.4)" },
  { x: 1650, y: 340, w: 70,  h: 48,  rotation: -22, color: "#1a0d42", glow: "rgba(168,85,247,0.2)" },
  { x: 1550, y: 560, w: 90,  h: 60,  rotation: 35,  color: "#2d1b69", glow: "rgba(236,72,153,0.3)" },
  { x: 1760, y: 180, w: 50,  h: 35,  rotation: -8,  color: "#3b0764", glow: "rgba(168,85,247,0.25)" },
  { x: 1400, y: 420, w: 60,  h: 42,  rotation: 55,  color: "#1e1040", glow: "rgba(236,72,153,0.2)" },
  { x: 1700, y: 700, w: 80,  h: 55,  rotation: -30, color: "#2d1b69", glow: "rgba(168,85,247,0.3)" },
];

const ease = Easing.bezier(0.16, 1, 0.3, 1);

export const Scene1Title: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // 10-frame crossfade in/out
  const fadeIn = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
    easing: ease,
  });

  const fadeOut = interpolate(frame, [durationInFrames - 10, durationInFrames], [1, 0], {
    extrapolateLeft: "clamp",
  });

  const sceneOpacity = Math.min(fadeIn, fadeOut);

  // Logo
  const logoProgress = spring({ frame, fps, config: { damping: 20, stiffness: 180 } });

  // 8-frame staggered entrance for headline elements
  const headlineProgress = spring({
    frame: frame - 0,
    fps,
    config: { damping: 20, stiffness: 180 },
  });

  const problemProgress = spring({
    frame: frame - 8,
    fps,
    config: { damping: 20, stiffness: 180 },
  });

  const subheadProgress = spring({
    frame: frame - 16,
    fps,
    config: { damping: 20, stiffness: 180 },
  });

  const tagProgress = spring({
    frame: frame - 24,
    fps,
    config: { damping: 20, stiffness: 180 },
  });

  return (
    <div style={{ position: "absolute", inset: 0, opacity: sceneOpacity }}>
      {/* Asteroid shapes */}
      {ASTEROIDS.map((a, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: a.x,
            top: a.y,
            width: a.w,
            height: a.h,
            backgroundColor: a.color,
            borderRadius: "40% 60% 55% 45% / 50% 45% 60% 40%",
            transform: `rotate(${a.rotation}deg)`,
            boxShadow: `inset -8px -4px 16px rgba(0,0,0,0.6), 0 0 20px ${a.glow}`,
            opacity: 0.85,
          }}
        />
      ))}

      {/* Logo — top left */}
      <div
        style={{
          position: "absolute",
          top: 70,
          left: 100,
          display: "flex",
          alignItems: "center",
          gap: 14,
          opacity: logoProgress,
          transform: `translateY(${(1 - logoProgress) * -18}px)`,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
            boxShadow: "0 0 24px rgba(168,85,247,0.7), 0 0 48px rgba(168,85,247,0.3)",
          }}
        >
          🧬
        </div>
        <span
          style={{
            color: "#ffffff",
            fontSize: 26,
            fontWeight: 700,
            fontFamily: poppins,
            letterSpacing: "0.15em",
          }}
        >
          CURETOPIA
        </span>
      </div>

      {/* Hero headline — fully centered on screen */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingLeft: 100,
          paddingRight: 100,
        }}
      >
        {/* "The" */}
        <div
          style={{
            color: "#c4b5fd",
            fontSize: 56,
            fontWeight: 700,
            fontFamily: poppins,
            fontStyle: "italic",
            lineHeight: 1,
            opacity: headlineProgress,
            transform: `translateY(${(1 - headlineProgress) * 50}px)`,
            letterSpacing: "0.05em",
          }}
        >
          The
        </div>

        {/* "$400K" */}
        <div
          style={{
            color: "#ffffff",
            fontSize: 160,
            fontWeight: 900,
            fontFamily: poppins,
            fontStyle: "italic",
            lineHeight: 1.0,
            opacity: headlineProgress,
            transform: `scale(${interpolate(headlineProgress, [0, 1], [0.7, 1])}) translateY(${(1 - headlineProgress) * 60}px)`,
            textShadow: "0 0 80px rgba(168,85,247,0.9), 0 0 160px rgba(168,85,247,0.5)",
            letterSpacing: "-0.02em",
          }}
        >
          $400K
        </div>

        {/* "Problem" */}
        <div
          style={{
            color: "#a855f7",
            fontSize: 160,
            fontWeight: 900,
            fontFamily: poppins,
            fontStyle: "italic",
            lineHeight: 1.0,
            opacity: problemProgress,
            transform: `scale(${interpolate(problemProgress, [0, 1], [0.7, 1])}) translateY(${(1 - problemProgress) * 60}px)`,
            textShadow: "0 0 80px rgba(168,85,247,0.8), 0 0 120px rgba(236,72,153,0.5)",
            letterSpacing: "-0.02em",
          }}
        >
          Problem
        </div>

        {/* Divider — centered */}
        <div
          style={{
            marginTop: 36,
            width: interpolate(subheadProgress, [0, 1], [0, 560]),
            height: 3,
            background: "linear-gradient(90deg, transparent, #a855f7, #ec4899, transparent)",
            borderRadius: 2,
            boxShadow: "0 0 16px rgba(168,85,247,0.7)",
          }}
        />

        {/* Subheadline */}
        <div
          style={{
            marginTop: 28,
            color: "#f0abfc",
            fontSize: 48,
            fontWeight: 600,
            fontFamily: poppins,
            letterSpacing: "0.08em",
            opacity: subheadProgress,
            transform: `translateY(${(1 - subheadProgress) * 30}px)`,
          }}
        >
          Our 10x Solution
        </div>

        {/* Tag line */}
        <div
          style={{
            marginTop: 20,
            color: "#9ca3af",
            fontSize: 22,
            fontWeight: 400,
            fontFamily: poppins,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            opacity: tagProgress,
            transform: `translateY(${(1 - tagProgress) * 20}px)`,
          }}
        >
          Decentralized Science · Rare Disease · BioDAO
        </div>
      </div>
    </div>
  );
};
