import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { useTransitionProgress } from "@remotion/transitions";

const NUM_PARTICLES = 3000;
const particles = Array.from({ length: NUM_PARTICLES }, (_, i) => {
  const seed1 = (i * 137.508 + Math.sin(i * 0.1) * 50) % 100;
  const seed2 = (i * 73.137 + Math.cos(i * 0.17) * 40) % 100;
  const x = (seed1 + (i % 7) * 14.28) % 100;
  const y = (seed2 + (i % 11) * 9.09) % 100;
  return {
    x, y,
    size: i % 8 === 0 ? 4 : i % 4 === 0 ? 3 : i % 2 === 0 ? 2 : 1,
    speed: 0.005 + (i % 17) * 0.002,
    phase: i * 0.53,
    hasGlow: i % 2 === 0,
    glowColor: i % 5 === 0 ? "rgba(255,100,255,0.8)" : i % 4 === 0 ? "rgba(204,68,255,0.7)" : i % 3 === 0 ? "rgba(155,48,208,0.6)" : "rgba(224,64,251,0.5)",
    baseOpacity: 0.4 + (i % 10) * 0.06,
  };
});

const StarField: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {particles.map((p, i) => {
        const twinkle = Math.sin(frame * p.speed + p.phase) * 0.2 + p.baseOpacity;
        return (
          <div key={i} style={{
            position: "absolute", left: `${p.x}%`, top: `${p.y}%`,
            width: p.size, height: p.size, borderRadius: "50%",
            backgroundColor: i % 6 === 0 ? "#FF88FF" : i % 4 === 0 ? "#DD88FF" : "#FFFFFF",
            opacity: Math.min(twinkle, 1),
            boxShadow: p.hasGlow ? `0 0 ${p.size * 6}px ${p.glowColor}` : "none",
          }} />
        );
      })}
    </AbsoluteFill>
  );
};

const GalaxyRing: React.FC = () => {
  const frame = useCurrentFrame();
  const rotation = frame * 0.2;
  return (
    <AbsoluteFill style={{ overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
      {/* Outer ring — thick bright visible border */}
      <div style={{
        position: "absolute", width: 1300, height: 650, borderRadius: "50%",
        border: "3px solid rgba(220,80,255,0.60)",
        boxShadow: "0 0 30px 14px rgba(204,68,255,0.40), 0 0 80px 35px rgba(204,68,255,0.20), inset 0 0 30px 14px rgba(204,68,255,0.22)",
        transform: `rotate(${rotation}deg) rotateX(70deg)`,
      }} />
      {/* Inner ring */}
      <div style={{
        position: "absolute", width: 900, height: 450, borderRadius: "50%",
        border: "2px solid rgba(255,100,255,0.50)",
        boxShadow: "0 0 20px 10px rgba(224,64,251,0.35), inset 0 0 20px 10px rgba(224,64,251,0.20)",
        transform: `rotate(${-rotation * 0.7 + 30}deg) rotateX(65deg)`,
      }} />
      {/* Wide outer faint ring */}
      <div style={{
        position: "absolute", width: 1600, height: 500, borderRadius: "50%",
        border: "1px solid rgba(180,60,255,0.35)",
        boxShadow: "0 0 40px 18px rgba(150,40,220,0.22)",
        transform: `rotate(${rotation * 0.4 + 60}deg) rotateX(75deg)`,
      }} />
      {/* Spinning arc highlight */}
      <div style={{
        position: "absolute", width: 1100, height: 550, borderRadius: "50%",
        background: `conic-gradient(from ${rotation}deg, rgba(255,130,255,0.60) 0deg, rgba(220,80,255,0.35) 25deg, transparent 70deg, transparent 290deg, rgba(220,80,255,0.30) 335deg, rgba(255,130,255,0.60) 360deg)`,
        transform: "rotateX(68deg)", filter: "blur(5px)",
      }} />
    </AbsoluteFill>
  );
};

const GalaxySpiral: React.FC = () => {
  const frame = useCurrentFrame();
  const r1 = frame * 0.15, r2 = -frame * 0.08;
  return (
    <AbsoluteFill style={{ overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
      <div style={{ position: "absolute", width: 1500, height: 1500, borderRadius: "50%", background: "conic-gradient(from 0deg, transparent 0deg, rgba(123,47,190,0.22) 30deg, transparent 90deg, rgba(204,68,255,0.16) 150deg, transparent 210deg, rgba(155,48,208,0.20) 270deg, transparent 330deg, rgba(123,47,190,0.22) 360deg)", transform: `rotate(${r1}deg)`, filter: "blur(35px)", opacity: 0.9 }} />
      <div style={{ position: "absolute", width: 1200, height: 1200, borderRadius: "50%", background: "conic-gradient(from 45deg, transparent 0deg, rgba(224,64,251,0.20) 40deg, transparent 100deg, rgba(255,80,255,0.18) 180deg, transparent 240deg, rgba(224,64,251,0.16) 310deg, transparent 360deg)", transform: `rotate(${r2}deg)`, filter: "blur(40px)", opacity: 0.85 }} />
      <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "conic-gradient(from 90deg, rgba(80,0,160,0.14) 0deg, rgba(180,60,255,0.18) 60deg, rgba(80,0,160,0.10) 120deg, rgba(220,80,255,0.16) 200deg, rgba(80,0,160,0.12) 280deg, rgba(180,60,255,0.14) 360deg)", transform: `rotate(${r1 * 0.5}deg)`, filter: "blur(30px)", opacity: 0.8 }} />
    </AbsoluteFill>
  );
};

const AuroraStreaks: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ overflow: "hidden", pointerEvents: "none" }}>
      <div style={{ position: "absolute", left: "-10%", top: "5%", width: "75%", height: 220, background: "linear-gradient(135deg, transparent 0%, rgba(155,48,208,0.12) 30%, rgba(204,68,255,0.18) 50%, rgba(155,48,208,0.10) 70%, transparent 100%)", transform: `translateX(${Math.sin(frame * 0.008) * 60}px) translateY(${Math.cos(frame * 0.006) * 30}px)`, filter: "blur(25px)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", right: "-5%", bottom: "10%", width: "65%", height: 180, background: "linear-gradient(-135deg, transparent 0%, rgba(224,64,251,0.12) 30%, rgba(255,80,255,0.16) 55%, rgba(123,47,190,0.10) 75%, transparent 100%)", transform: `translateX(${Math.cos(frame * 0.007) * 50}px) translateY(${Math.sin(frame * 0.009) * 25}px)`, filter: "blur(28px)", borderRadius: "50%" }} />
    </AbsoluteFill>
  );
};

const nebulaPatches = [
  { x: "50%", y: "50%", w: 1600, h: 1200, color: "rgba(123,47,190,0.20)", rot: 0 },
  { x: "25%", y: "30%", w: 1000, h: 800, color: "rgba(155,48,208,0.16)", rot: -15 },
  { x: "75%", y: "55%", w: 900, h: 700, color: "rgba(204,68,255,0.14)", rot: 25 },
  { x: "15%", y: "80%", w: 700, h: 600, color: "rgba(123,47,190,0.16)", rot: 40 },
  { x: "85%", y: "20%", w: 800, h: 600, color: "rgba(224,64,251,0.12)", rot: -30 },
  { x: "10%", y: "50%", w: 900, h: 500, color: "rgba(155,48,208,0.14)", rot: 10 },
  { x: "70%", y: "85%", w: 800, h: 500, color: "rgba(123,47,190,0.12)", rot: -20 },
  { x: "50%", y: "15%", w: 1400, h: 400, color: "rgba(204,68,255,0.10)", rot: 0 },
  { x: "40%", y: "65%", w: 1100, h: 700, color: "rgba(155,48,208,0.13)", rot: 15 },
  { x: "65%", y: "35%", w: 700, h: 700, color: "rgba(224,64,251,0.10)", rot: -45 },
  { x: "30%", y: "90%", w: 600, h: 400, color: "rgba(204,68,255,0.11)", rot: 5 },
  { x: "90%", y: "50%", w: 500, h: 800, color: "rgba(123,47,190,0.14)", rot: -10 },
  { x: "55%", y: "25%", w: 600, h: 500, color: "rgba(255,80,255,0.08)", rot: 20 },
  { x: "20%", y: "60%", w: 800, h: 600, color: "rgba(180,60,255,0.11)", rot: -5 },
];

const NebulaField: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {nebulaPatches.map((patch, i) => {
        const pulse = Math.sin(frame * 0.012 + i * 1.3) * 0.15 + 0.85;
        return (
          <div key={i} style={{
            position: "absolute", left: patch.x, top: patch.y, width: patch.w, height: patch.h,
            transform: `translate(-50%, -50%) rotate(${patch.rot}deg)`,
            background: `radial-gradient(ellipse, ${patch.color} 0%, transparent 70%)`,
            opacity: pulse, pointerEvents: "none",
          }} />
        );
      })}
    </AbsoluteFill>
  );
};

export const SceneWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { entering, exiting } = useTransitionProgress();
  const contentOpacity = entering * (1 - exiting);

  return (
    <AbsoluteFill style={{ background: "radial-gradient(ellipse at 50% 50%, #2A0A50 0%, #180830 40%, #090818 80%)" }}>
      <NebulaField />
      <GalaxySpiral />
      <GalaxyRing />
      <AuroraStreaks />
      <StarField />
      {/* Dark centre vignette so text always contrasts against the background */}
      <AbsoluteFill style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(4,0,12,0.60) 0%, rgba(4,0,12,0.28) 45%, transparent 72%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        padding: "80px 120px", boxSizing: "border-box",
        display: "flex", alignItems: "center", justifyContent: "center",
        textAlign: "center", flexDirection: "column",
        opacity: contentOpacity,
      }}>
        {children}
      </div>
    </AbsoluteFill>
  );
};