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

interface CounterCardProps {
  icon: string;
  prefix?: string;
  countTo: number;
  suffix?: string;
  label: string;
  subtext?: string;
  accentColor: string;
  frame: number;
  enterFrame: number;
  fps: number;
  decimals?: number;
}

const CounterCard: React.FC<CounterCardProps> = ({
  icon,
  prefix = "",
  countTo,
  suffix = "",
  label,
  subtext,
  accentColor,
  frame,
  enterFrame,
  fps,
  decimals = 0,
}) => {
  const localFrame = frame - enterFrame;
  const slideIn = spring({
    frame: localFrame,
    fps,
    config: { damping: 20, stiffness: 180 },
  });

  const rawCount = interpolate(localFrame, [0, 55], [0, countTo], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: ease,
  });

  const displayCount =
    decimals > 0
      ? rawCount.toFixed(decimals)
      : Math.round(rawCount).toLocaleString();

  return (
    <div
      style={{
        opacity: slideIn,
        transform: `translateY(${(1 - slideIn) * 50}px)`,
        background:
          "linear-gradient(135deg, rgba(59,7,100,0.85) 0%, rgba(26,5,50,0.9) 100%)",
        border: `1px solid ${accentColor}50`,
        borderRadius: 20,
        padding: "32px 28px",
        boxShadow: `0 0 40px ${accentColor}25, 0 4px 24px rgba(0,0,0,0.4)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          bottom: -30,
          right: -30,
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}35 0%, transparent 70%)`,
        }}
      />
      <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
      <div
        style={{
          color: "#f0abfc",
          fontSize: 56,
          fontWeight: 900,
          fontFamily: poppins,
          lineHeight: 1,
          textShadow: `0 0 24px ${accentColor}80`,
          letterSpacing: "-0.02em",
        }}
      >
        {prefix}
        {displayCount}
        {suffix}
      </div>
      <div
        style={{
          color: "#ffffff",
          fontSize: 18,
          fontWeight: 600,
          fontFamily: poppins,
          marginTop: 10,
        }}
      >
        {label}
      </div>
      {subtext && (
        <div
          style={{
            color: "#9ca3af",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: poppins,
            marginTop: 4,
            lineHeight: 1.4,
          }}
        >
          {subtext}
        </div>
      )}
    </div>
  );
};

export const Scene5Numbers: React.FC = () => {
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

  // 4 metrics, 8-frame stagger
  const metrics = [
    {
      icon: "💰",
      prefix: "$",
      countTo: 1.77,
      suffix: "M raised",
      label: "Total Capital Raised",
      subtext: "From community contributors worldwide",
      accentColor: "#a855f7",
      enterFrame: 0,
      decimals: 2,
    },
    {
      icon: "👥",
      prefix: "",
      countTo: 1000,
      suffix: "+",
      label: "Contributors",
      subtext: "Patients, researchers & supporters",
      accentColor: "#ec4899",
      enterFrame: 8,
    },
    {
      icon: "🦠",
      prefix: "",
      countTo: 20,
      suffix: "+",
      label: "Rare Diseases in Pipeline",
      subtext: "Currently in active research",
      accentColor: "#f97316",
      enterFrame: 16,
    },
    {
      icon: "⚡",
      prefix: "",
      countTo: 2,
      suffix: "×",
      label: "Higher FDA Approval Rate",
      subtext: "For rare diseases vs. standard drugs",
      accentColor: "#22c55e",
      enterFrame: 24,
    },
  ];

  return (
    <div style={{ position: "absolute", inset: 0, opacity: sceneOpacity }}>
      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 68,
          left: 68,
          right: 68,
          opacity: titleProgress,
          transform: `translateY(${(1 - titleProgress) * -16}px)`,
        }}
      >
        <div
          style={{
            color: "#a855f7",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: poppins,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          The Numbers
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 48,
            fontWeight: 900,
            fontFamily: poppins,
            lineHeight: 1.1,
            textShadow: "0 0 40px rgba(168,85,247,0.6)",
          }}
        >
          Traction Speaks for Itself
        </div>
      </div>

      {/* Metric cards — 4-column grid, fully contained */}
      <div
        style={{
          position: "absolute",
          top: 220,
          left: 68,
          right: 68,
          bottom: 68,
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 20,
          alignContent: "center",
        }}
      >
        {metrics.map((m, i) => (
          <CounterCard
            key={i}
            icon={m.icon}
            prefix={m.prefix}
            countTo={m.countTo}
            suffix={m.suffix}
            label={m.label}
            subtext={m.subtext}
            accentColor={m.accentColor}
            frame={frame}
            enterFrame={m.enterFrame}
            fps={fps}
            decimals={m.decimals ?? 0}
          />
        ))}
      </div>
    </div>
  );
};
