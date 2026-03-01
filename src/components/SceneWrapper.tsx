import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

// ---------- Cosmic Star Particles ----------
// HEAVY density — bright, very visible, flooding the entire background
// White #FFFFFF at 30-80% opacity, sizes 1-3px
// Many dots have soft blur/glow in #CC44FF or #9B30D0
// Slight twinkle/shimmer feel
const NUM_PARTICLES = 1800;

// Use multiple offset seeds for truly random-feeling distribution
const particles = Array.from({ length: NUM_PARTICLES }, (_, i) => {
  const seed1 = (i * 137.508 + Math.sin(i * 0.1) * 50) % 100;
  const seed2 = (i * 73.137 + Math.cos(i * 0.17) * 40) % 100;
  const x = (seed1 + (i % 7) * 14.28) % 100;
  const y = (seed2 + (i % 11) * 9.09) % 100;

  return {
    x,
    y,
    // mostly 1px, some 2px, rare 3px
    size: i % 15 === 0 ? 3 : i % 4 === 0 ? 2 : 1,
    speed: 0.005 + (i % 17) * 0.002,
    phase: i * 0.53,
    // ~35% of dots have a glow
    hasGlow: i % 3 === 0,
    glowColor:
      i % 6 === 0
        ? "rgba(204,68,255,0.6)" // bright #CC44FF glow
        : i % 3 === 0
          ? "rgba(155,48,208,0.5)" // #9B30D0 glow
          : "none",
    // Base opacity varies per particle — 30% to 80%
    baseOpacity: 0.3 + (i % 10) * 0.05,
  };
});

const StarField: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {particles.map((p, i) => {
        // Twinkle/shimmer — oscillates around the particle's base opacity
        const twinkle =
          Math.sin(frame * p.speed + p.phase) * 0.15 + p.baseOpacity;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              opacity: twinkle,
              boxShadow: p.hasGlow
                ? `0 0 ${p.size * 8}px ${p.glowColor}`
                : "none",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ---------- Nebula / Purple Atmosphere ----------
// Rich, visible purple-pink haze throughout — NOT subtle
const nebulaPatches = [
  // Large central glow — very visible light purple
  { x: "50%", y: "50%", w: 1600, h: 1200, color: "rgba(123,47,190,0.25)", rot: 0 },
  // Strong upper-left purple cloud
  { x: "25%", y: "30%", w: 1000, h: 800, color: "rgba(155,48,208,0.22)", rot: -15 },
  // Right-side magenta wash
  { x: "75%", y: "55%", w: 900, h: 700, color: "rgba(204,68,255,0.16)", rot: 25 },
  // Bottom-left deep purple
  { x: "15%", y: "80%", w: 700, h: 600, color: "rgba(123,47,190,0.20)", rot: 40 },
  // Top-right bright pink cloud
  { x: "85%", y: "20%", w: 800, h: 600, color: "rgba(224,64,251,0.14)", rot: -30 },
  // Mid-left soft purple
  { x: "10%", y: "50%", w: 900, h: 500, color: "rgba(155,48,208,0.18)", rot: 10 },
  // Bottom-right
  { x: "70%", y: "85%", w: 800, h: 500, color: "rgba(123,47,190,0.15)", rot: -20 },
  // Top wide band — light purple haze
  { x: "50%", y: "15%", w: 1400, h: 400, color: "rgba(204,68,255,0.12)", rot: 0 },
  // Additional depth patches
  { x: "40%", y: "65%", w: 1100, h: 700, color: "rgba(155,48,208,0.14)", rot: 15 },
  { x: "65%", y: "35%", w: 700, h: 700, color: "rgba(224,64,251,0.10)", rot: -45 },
  { x: "30%", y: "90%", w: 600, h: 400, color: "rgba(204,68,255,0.12)", rot: 5 },
  { x: "90%", y: "50%", w: 500, h: 800, color: "rgba(123,47,190,0.16)", rot: -10 },
];

const NebulaField: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {nebulaPatches.map((patch, i) => {
        const pulse = Math.sin(frame * 0.012 + i * 1.3) * 0.2 + 0.8;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: patch.x,
              top: patch.y,
              width: patch.w,
              height: patch.h,
              transform: `translate(-50%, -50%) rotate(${patch.rot}deg)`,
              background: `radial-gradient(ellipse, ${patch.color} 0%, transparent 70%)`,
              opacity: pulse,
              pointerEvents: "none",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ---------- Scene Wrapper ----------
export const SceneWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%, #1E0A3C 0%, #130828 40%, #080818 80%)",
      }}
    >
      <NebulaField />
      <StarField />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: "80px 120px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
