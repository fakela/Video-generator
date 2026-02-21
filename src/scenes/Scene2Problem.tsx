import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
  Easing,
} from "remotion";
import { poppins } from "../fonts";

const ease = Easing.bezier(0.16, 1, 0.3, 1);

interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  subtext?: string;
  accentColor: string;
  frame: number;
  enterFrame: number;
  fps: number;
  countFrom?: number;
  countTo?: number;
  countSuffix?: string;
  countPrefix?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  subtext,
  accentColor,
  frame,
  enterFrame,
  fps,
  countFrom,
  countTo,
  countSuffix = "",
  countPrefix = "",
}) => {
  const localFrame = frame - enterFrame;

  const slideIn = spring({
    frame: localFrame,
    fps,
    config: { damping: 20, stiffness: 180 },
  });

  const isCountable = countFrom !== undefined && countTo !== undefined;
  const countValue = isCountable
    ? Math.round(
        interpolate(localFrame, [0, 50], [countFrom!, countTo!], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: ease,
        })
      )
    : null;

  const displayCount = isCountable
    ? `${countPrefix}${countValue!.toLocaleString()}${countSuffix}`
    : null;

  return (
    <div
      style={{
        opacity: slideIn,
        transform: `translateY(${(1 - slideIn) * 60}px)`,
        background:
          "linear-gradient(135deg, rgba(59,7,100,0.85) 0%, rgba(26,5,50,0.9) 100%)",
        border: `1px solid ${accentColor}55`,
        borderRadius: 20,
        padding: "28px 36px",
        boxShadow: `0 0 40px ${accentColor}30, inset 0 0 30px rgba(168,85,247,0.05), 0 4px 24px rgba(0,0,0,0.4)`,
        backdropFilter: "blur(10px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow corner accent */}
      <div
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}40 0%, transparent 70%)`,
        }}
      />
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
        <div
          style={{
            fontSize: 36,
            lineHeight: 1,
            flexShrink: 0,
            marginTop: 4,
          }}
        >
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              color: "#9ca3af",
              fontSize: 14,
              fontWeight: 600,
              fontFamily: poppins,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 6,
            }}
          >
            {label}
          </div>
          <div
            style={{
              color: isCountable ? "#f0abfc" : "#ffffff",
              fontSize: isCountable ? 48 : 36,
              fontWeight: 900,
              fontFamily: poppins,
              lineHeight: 1.1,
              textShadow: `0 0 20px ${accentColor}80`,
            }}
          >
            {isCountable ? displayCount : value}
          </div>
          {subtext && (
            <div
              style={{
                color: "#c4b5fd",
                fontSize: 16,
                fontWeight: 400,
                fontFamily: poppins,
                marginTop: 6,
                lineHeight: 1.4,
              }}
            >
              {subtext}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // 10-frame crossfade
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

  const titleProgress = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 180 },
  });

  // 4 stats enter 8 frames apart (Big Pharma Threshold moved to Scene 2b)
  const ENTER_FRAMES = [0, 8, 16, 24];

  const stats = [
    {
      icon: "🦠",
      label: "Rare Diseases Identified",
      value: "10,000+",
      subtext: "Most with no known cure or treatment",
      accentColor: "#a855f7",
      enterFrame: ENTER_FRAMES[0],
      countFrom: 0,
      countTo: 10000,
      countSuffix: "+",
    },
    {
      icon: "🌍",
      label: "Global Prevalence",
      value: "1 in 10",
      subtext: "People affected by a rare disease worldwide",
      accentColor: "#ec4899",
      enterFrame: ENTER_FRAMES[1],
      countFrom: 0,
      countTo: 10,
      countPrefix: "1 in ",
    },
    {
      icon: "💊",
      label: "With No Treatment",
      value: "95%",
      subtext: "Patients have no approved therapy",
      accentColor: "#f97316",
      enterFrame: ENTER_FRAMES[2],
      countFrom: 0,
      countTo: 95,
      countSuffix: "%",
    },
    {
      icon: "💵",
      label: "Underserved Market",
      value: "$1 Trillion",
      subtext: "Market size — ignored by Big Pharma",
      accentColor: "#22c55e",
      enterFrame: ENTER_FRAMES[3],
      countFrom: 0,
      countTo: 1,
      countPrefix: "$",
      countSuffix: " Trillion",
    },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, opacity: sceneOpacity }}>
      {/* Section header */}
      <div
        style={{
          position: "absolute",
          top: 68,
          left: 68,
          right: 68,
          opacity: titleProgress,
          transform: `translateY(${(1 - titleProgress) * -20}px)`,
        }}
      >
        <div
          style={{
            color: "#ec4899",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: poppins,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          The Problem
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 52,
            fontWeight: 900,
            fontFamily: poppins,
            lineHeight: 1.1,
            textShadow: "0 0 40px rgba(168,85,247,0.6)",
          }}
        >
          A Market Too Small for Big Pharma.
          <br />
          <span style={{ color: "#a855f7" }}>Too Large to Ignore.</span>
        </div>
      </div>

      {/* Stats grid — 2×2, fully contained within screen */}
      <div
        style={{
          position: "absolute",
          top: 260,
          left: 68,
          right: 68,
          bottom: 68,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: 20,
        }}
      >
        {stats.map((stat, i) => (
          <StatCard
            key={i}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
            subtext={stat.subtext}
            accentColor={stat.accentColor}
            frame={frame}
            enterFrame={stat.enterFrame}
            fps={fps}
            countFrom={stat.countFrom}
            countTo={stat.countTo}
            countPrefix={stat.countPrefix}
            countSuffix={stat.countSuffix}
          />
        ))}
      </div>
    </div>
  );
};
