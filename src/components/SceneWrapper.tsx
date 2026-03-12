import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { useTransitionProgress } from "@remotion/transitions";

const NUM_PARTICLES = 4000;
const particles = Array.from({ length: NUM_PARTICLES }, (_, i) => {
  const seed1 = (i * 137.508 + Math.sin(i * 0.1) * 50) % 100;
  const seed2 = (i * 73.137 + Math.cos(i * 0.17) * 40) % 100;
  const x = (seed1 + (i % 7) * 14.28) % 100;
  const y = (seed2 + (i % 11) * 9.09) % 100;
  return {
    x, y,
    size: i % 12 === 0 ? 3 : i % 4 === 0 ? 2 : 1,
    speed: 0.003 + (i % 17) * 0.002,
    phase: i * 0.53,
    baseOpacity: 0.3 + (i % 8) * 0.07,
    yBias: Math.min(y, 72),
    driftX: Math.sin(i * 2.3) * 0.06,
    driftY: (Math.cos(i * 1.7) * 0.04) - 0.015,
    layer: i % 3,
  };
});

const StarField: React.FC = () => {
  const frame = useCurrentFrame();
  const layerSpeeds = [0.3, 0.7, 1.3];

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {particles.map((p, i) => {
        const twinkle = Math.sin(frame * p.speed + p.phase) * 0.18 + p.baseOpacity;
        const speed = layerSpeeds[p.layer];
        const dx = ((p.driftX * frame * speed) % 100 + 100) % 100;
        const dy = ((p.driftY * frame * speed) % 100 + 100) % 100;
        const cx = (p.x + dx) % 100;
        const cy = (p.yBias + dy) % 72;
        return (
          <div key={i} style={{
            position: "absolute",
            left: `${cx}%`,
            top: `${cy}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            backgroundColor: i % 8 === 0 ? "#CCB8FF" : "#FFFFFF",
            opacity: Math.min(twinkle, 1),
          }} />
        );
      })}
    </AbsoluteFill>
  );
};

const ORBS = [
  { x: 78, y: 18, size: 90,  speed: 0.006, phase: 0,   color: "rgba(80,160,255,0.9)",   glowColor: "rgba(80,160,255,0.5)"  },
  { x: 12, y: 55, size: 110, speed: 0.005, phase: 1.2, color: "rgba(100,180,255,0.85)", glowColor: "rgba(100,180,255,0.4)" },
  { x: 88, y: 62, size: 70,  speed: 0.007, phase: 2.4, color: "rgba(60,140,255,0.8)",   glowColor: "rgba(60,140,255,0.4)"  },
  { x: 5,  y: 30, size: 55,  speed: 0.004, phase: 0.8, color: "rgba(120,200,255,0.7)",  glowColor: "rgba(120,200,255,0.3)" },
];

const FloatingOrbs: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ overflow: "hidden", pointerEvents: "none" }}>
      {ORBS.map((orb, i) => {
        const floatY = Math.sin(frame * orb.speed + orb.phase) * 18;
        const floatX = Math.cos(frame * orb.speed * 0.7 + orb.phase) * 10;
        return (
          <div key={i} style={{
            position: "absolute",
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            transform: `translate(${floatX}px, ${floatY}px)`,
          }}>
            <div style={{
              position: "absolute",
              width: orb.size * 2.5,
              height: orb.size * 2.5,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${orb.glowColor} 0%, transparent 70%)`,
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
            }} />
            <div style={{
              width: orb.size,
              height: orb.size,
              borderRadius: "50%",
              background: `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.6) 0%, ${orb.color} 40%, rgba(20,60,140,0.9) 100%)`,
              boxShadow: `0 0 30px 10px ${orb.glowColor}, inset 0 0 20px rgba(255,255,255,0.2)`,
              position: "relative",
            }}>
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: `repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.08) 8px, rgba(255,255,255,0.08) 9px),
                             repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.08) 8px, rgba(255,255,255,0.08) 9px)`,
                opacity: 0.6,
              }} />
            </div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

const RockyTerrain: React.FC = () => {
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div style={{
        position: "absolute", bottom: 0, left: 0,
        width: "25%", height: "28%",
        background: "linear-gradient(135deg, #0A0520 0%, #120830 50%, #1A0A3A 100%)",
        clipPath: "polygon(0% 100%, 0% 40%, 8% 30%, 15% 45%, 22% 20%, 30% 35%, 40% 15%, 55% 30%, 65% 10%, 80% 25%, 90% 8%, 100% 20%, 100% 100%)",
        filter: "drop-shadow(0 -10px 20px rgba(100,0,150,0.3))",
      }} />
      <div style={{
        position: "absolute", bottom: 0, right: 0,
        width: "30%", height: "32%",
        background: "linear-gradient(225deg, #0A0520 0%, #120830 50%, #1A0A3A 100%)",
        clipPath: "polygon(0% 20%, 10% 8%, 25% 25%, 35% 5%, 50% 18%, 60% 0%, 72% 15%, 82% 5%, 90% 20%, 100% 10%, 100% 100%, 0% 100%)",
        filter: "drop-shadow(0 -10px 20px rgba(100,0,150,0.3))",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: "35%",
        width: "30%", height: "12%",
        background: "#0D0620",
        clipPath: "polygon(0% 100%, 5% 50%, 12% 70%, 20% 30%, 30% 60%, 45% 20%, 55% 50%, 65% 15%, 75% 45%, 85% 25%, 95% 55%, 100% 100%)",
      }} />
    </AbsoluteFill>
  );
};

const NebulaClouds: React.FC = () => {
  const frame = useCurrentFrame();
  const breathe = Math.sin(frame * 0.008) * 0.04 + 1;

  return (
    <AbsoluteFill style={{ overflow: "hidden", pointerEvents: "none" }}>
      <div style={{
        position: "absolute",
        bottom: "8%", left: "-10%",
        width: "120%", height: "35%",
        background: "radial-gradient(ellipse at 50% 100%, rgba(200,0,200,0.55) 0%, rgba(160,0,180,0.35) 30%, rgba(100,0,140,0.15) 60%, transparent 80%)",
        transform: `scaleY(${breathe})`,
        transformOrigin: "bottom center",
        filter: "blur(8px)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "12%", left: "-5%",
        width: "55%", height: "30%",
        background: "radial-gradient(ellipse at 30% 80%, rgba(180,0,220,0.50) 0%, rgba(140,0,180,0.30) 40%, transparent 70%)",
        transform: `translate(${Math.sin(frame * 0.005) * 12}px, ${Math.cos(frame * 0.004) * 8}px) scaleY(${breathe})`,
        transformOrigin: "bottom left",
        filter: "blur(12px)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%", right: "-5%",
        width: "50%", height: "28%",
        background: "radial-gradient(ellipse at 70% 80%, rgba(200,0,200,0.45) 0%, rgba(150,0,180,0.25) 40%, transparent 70%)",
        transform: `translate(${Math.cos(frame * 0.006) * 10}px, ${Math.sin(frame * 0.005) * 6}px) scaleY(${breathe})`,
        transformOrigin: "bottom right",
        filter: "blur(14px)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "14%", left: "30%",
        width: "40%", height: "25%",
        background: "radial-gradient(ellipse at 50% 90%, rgba(220,40,220,0.60) 0%, rgba(180,0,200,0.35) 40%, transparent 70%)",
        transform: `scaleY(${breathe + 0.02})`,
        transformOrigin: "bottom center",
        filter: "blur(6px)",
      }} />
      <div style={{
        position: "absolute",
        top: "20%", left: "35%",
        width: "30%", height: "20%",
        background: "radial-gradient(ellipse, rgba(120,0,180,0.20) 0%, transparent 70%)",
        filter: "blur(20px)",
      }} />
    </AbsoluteFill>
  );
};

const ASTEROIDS = [
  { x: 82, y: 55, size: 28, speed: 0.004, phase: 0   },
  { x: 90, y: 68, size: 18, speed: 0.005, phase: 1.0 },
  { x: 86, y: 72, size: 14, speed: 0.006, phase: 2.0 },
  { x: 78, y: 78, size: 10, speed: 0.007, phase: 0.5 },
  { x: 3,  y: 62, size: 22, speed: 0.004, phase: 1.5 },
];

const Asteroids: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ overflow: "hidden", pointerEvents: "none" }}>
      {ASTEROIDS.map((a, i) => {
        const floatY = Math.sin(frame * a.speed + a.phase) * 12;
        const floatX = Math.cos(frame * a.speed * 0.8 + a.phase) * 6;
        const rotate = frame * a.speed * 20;
        return (
          <div key={i} style={{
            position: "absolute",
            left: `${a.x}%`,
            top: `${a.y}%`,
            width: a.size,
            height: a.size,
            transform: `translate(${floatX}px, ${floatY}px) rotate(${rotate}deg)`,
            background: "radial-gradient(circle at 35% 35%, #2A1A3A, #0D0618)",
            borderRadius: "40% 50% 45% 55%",
            boxShadow: "inset -3px -3px 6px rgba(0,0,0,0.8), 0 0 8px rgba(80,0,120,0.3)",
          }} />
        );
      })}
    </AbsoluteFill>
  );
};

export const CosmicBackground: React.FC = () => {
  const frame = useCurrentFrame();

  const zoom = interpolate(frame, [0, 400], [1, 1.06], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <AbsoluteFill style={{
      background: "linear-gradient(180deg, #050818 0%, #0A0A2A 25%, #150830 50%, #200838 70%, #180530 100%)",
    }}>
      <AbsoluteFill style={{
        transform: `scale(${zoom})`,
        transformOrigin: "center center",
      }}>
        <StarField />
        <NebulaClouds />
        <FloatingOrbs />
        <Asteroids />
        <RockyTerrain />
      </AbsoluteFill>
      <AbsoluteFill style={{
        background: "radial-gradient(ellipse at 50% 40%, transparent 40%, rgba(2,0,10,0.55) 100%)",
        pointerEvents: "none",
      }} />
    </AbsoluteFill>
  );
};

export const SceneWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { entering, exiting } = useTransitionProgress();
  const contentOpacity = entering * (1 - exiting);

  return (
    <AbsoluteFill style={{ background: "transparent" }}>
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