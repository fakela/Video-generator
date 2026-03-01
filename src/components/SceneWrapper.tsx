import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

// ---------- Star Particles ----------
// White dots, opacity 5–20%, sizes 1–3px, some with magenta/purple glow
const NUM_PARTICLES = 500;

const particles = Array.from({ length: NUM_PARTICLES }, (_, i) => ({
  x: (i * 137.508) % 100,
  y: (i * 73.137) % 100,
  // mostly 1px, some 2px, rare 3px
  size: i % 12 === 0 ? 3 : i % 5 === 0 ? 2 : 1,
  speed: 0.008 + (i % 11) * 0.004,
  phase: i * 0.83,
  // Some dots have a soft glow in #CC44FF or #9B30D0
  hasGlow: i % 7 === 0,
  glowColor: i % 14 === 0 ? "rgba(204,68,255,0.35)" : "rgba(155,48,208,0.3)",
}));

const StarField: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {particles.map((p, i) => {
        // Slight twinkle/shimmer — opacity between 5% and 20%
        const twinkle =
          Math.sin(frame * p.speed + p.phase) * 0.075 + 0.125;

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
                ? `0 0 ${p.size * 5}px ${p.glowColor}`
                : "none",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

// ---------- Nebula Glow Layers ----------
const nebulaPatches = [
  { x: "30%", y: "40%", w: 900, h: 700, color: "rgba(123,47,190,0.14)", rot: -15 },
  { x: "72%", y: "62%", w: 700, h: 500, color: "rgba(155,48,208,0.10)", rot: 25 },
  { x: "50%", y: "18%", w: 1200, h: 350, color: "rgba(204,68,255,0.07)", rot: 0 },
  { x: "14%", y: "78%", w: 500, h: 500, color: "rgba(123,47,190,0.12)", rot: 40 },
  { x: "85%", y: "25%", w: 600, h: 600, color: "rgba(155,48,208,0.09)", rot: -30 },
  { x: "20%", y: "15%", w: 800, h: 400, color: "rgba(224,64,251,0.06)", rot: 10 },
  { x: "60%", y: "85%", w: 700, h: 350, color: "rgba(123,47,190,0.08)", rot: -20 },
  { x: "45%", y: "55%", w: 1000, h: 600, color: "rgba(155,48,208,0.07)", rot: 15 },
  { x: "75%", y: "30%", w: 500, h: 500, color: "rgba(204,68,255,0.05)", rot: -45 },
];

const NebulaField: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {nebulaPatches.map((patch, i) => {
        const pulse = Math.sin(frame * 0.015 + i * 1.5) * 0.3 + 0.7;
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
          "radial-gradient(ellipse at 50% 50%, #1A1640 0%, #080818 60%, #080818 100%)",
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
