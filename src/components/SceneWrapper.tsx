import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";

// ---------- Dust Particles ----------
const NUM_PARTICLES = 180;

const particles = Array.from({ length: NUM_PARTICLES }, (_, i) => ({
  x: (i * 137.508) % 100,
  y: (i * 73.137) % 100,
  size: 0.6 + (i % 5) * 0.4,
  speed: 0.012 + (i % 7) * 0.006,
  phase: i * 0.83,
  hasGlow: i % 14 === 0,
  colorType: i % 10, // 0-5 = muted white, 6-8 = light purple, 9 = purple
}));

const DustField: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {particles.map((p, i) => {
        const twinkle =
          Math.sin(frame * p.speed + p.phase) * 0.3 + 0.5;

        let color: string;
        if (p.colorType <= 5) {
          color = "rgba(255,255,255,0.6)";
        } else if (p.colorType <= 8) {
          color = "rgba(196,181,253,0.5)";
        } else {
          color = "rgba(168,85,247,0.4)";
        }

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
              backgroundColor: color,
              opacity: twinkle * 0.6,
              boxShadow: p.hasGlow
                ? `0 0 ${p.size * 4}px rgba(168,85,247,0.25)`
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
  { x: "30%", y: "40%", w: 900, h: 700, color: "rgba(124,58,237,0.10)", rot: -15 },
  { x: "72%", y: "62%", w: 700, h: 500, color: "rgba(168,85,247,0.07)", rot: 25 },
  { x: "50%", y: "18%", w: 1200, h: 350, color: "rgba(192,132,252,0.05)", rot: 0 },
  { x: "14%", y: "78%", w: 500, h: 500, color: "rgba(147,51,234,0.08)", rot: 40 },
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
          "radial-gradient(ellipse at 50% 50%, #150025 0%, #0D0019 50%, #06000F 100%)",
      }}
    >
      <NebulaField />
      <DustField />
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
