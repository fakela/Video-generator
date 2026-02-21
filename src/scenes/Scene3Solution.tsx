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

// Horizontal flow positions — evenly distributed across 1920px
const STEP_CX = [180, 540, 960, 1380, 1740];
const STEP_CY = 560;
const ICON_R = 64; // radius of icon circle

interface FlowStepProps {
  cx: number;
  cy: number;
  icon: string;
  stepNum: number;
  title: string;
  subtitle: string;
  accentColor: string;
  progress: number;
}

const FlowStep: React.FC<FlowStepProps> = ({
  cx,
  cy,
  icon,
  stepNum,
  title,
  subtitle,
  accentColor,
  progress,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        left: cx - ICON_R,
        top: cy - ICON_R,
        width: ICON_R * 2,
        opacity: progress,
        transform: `scale(${interpolate(progress, [0, 1], [0.4, 1])}) translateY(${(1 - progress) * 40}px)`,
      }}
    >
      {/* Step number badge */}
      <div
        style={{
          position: "absolute",
          top: -16,
          left: ICON_R - 14,
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${accentColor}, #ec4899)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontSize: 13,
          fontWeight: 700,
          fontFamily: poppins,
          boxShadow: `0 0 12px ${accentColor}80`,
          zIndex: 2,
        }}
      >
        {stepNum}
      </div>

      {/* Icon circle */}
      <div
        style={{
          width: ICON_R * 2,
          height: ICON_R * 2,
          borderRadius: "50%",
          background: `radial-gradient(circle at 35% 35%, rgba(168,85,247,0.3) 0%, rgba(26,5,50,0.95) 100%)`,
          border: `2px solid ${accentColor}80`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 48,
          boxShadow: `0 0 30px ${accentColor}50, 0 0 60px ${accentColor}20`,
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <div
        style={{
          marginTop: 16,
          color: "#ffffff",
          fontSize: 18,
          fontWeight: 700,
          fontFamily: poppins,
          textAlign: "center",
          lineHeight: 1.3,
          width: 200,
          marginLeft: -36,
          textShadow: `0 0 12px ${accentColor}60`,
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      <div
        style={{
          marginTop: 8,
          color: "#9ca3af",
          fontSize: 14,
          fontWeight: 400,
          fontFamily: poppins,
          textAlign: "center",
          lineHeight: 1.4,
          width: 200,
          marginLeft: -36,
        }}
      >
        {subtitle}
      </div>
    </div>
  );
};

interface ConnectorProps {
  x1: number;
  x2: number;
  cy: number;
  progress: number;
  accentColor: string;
}

const Connector: React.FC<ConnectorProps> = ({ x1, x2, cy, progress, accentColor }) => {
  const connectorWidth = interpolate(progress, [0, 1], [0, x2 - x1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        position: "absolute",
        left: x1,
        top: cy - 2,
        width: connectorWidth,
        height: 4,
        background: `linear-gradient(90deg, ${accentColor}cc, #ec4899cc)`,
        borderRadius: 2,
        boxShadow: `0 0 12px ${accentColor}80, 0 0 24px ${accentColor}40`,
        overflow: "hidden",
      }}
    >
      {/* Animated shimmer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)`,
          transform: `translateX(${(progress * 200 - 100)}%)`,
        }}
      />
    </div>
  );
};

// 8-frame stagger for 5 steps
const STEPS = [
  {
    icon: "🧬",
    title: "Community Funds Research",
    subtitle: "via $CURES token",
    accentColor: "#a855f7",
    enterFrame: 0,
  },
  {
    icon: "🍺",
    title: "Yeast-Avatar Drug Screening",
    subtitle: "8,500 compounds tested",
    accentColor: "#ec4899",
    enterFrame: 8,
  },
  {
    icon: "👨‍👩‍👧",
    title: "Patient Families",
    subtitle: "Run N-of-1 studies",
    accentColor: "#f97316",
    enterFrame: 16,
  },
  {
    icon: "⚡",
    title: "FDA Fast-Track",
    subtitle: "Priority Review Voucher + Orphan Drug",
    accentColor: "#22c55e",
    enterFrame: 24,
  },
  {
    icon: "💰",
    title: "Revenue → Treasury",
    subtitle: "Funds next rare disease",
    accentColor: "#a855f7",
    enterFrame: 32,
  },
];

export const Scene3Solution: React.FC = () => {
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

  const stepProgresses = STEPS.map((step) =>
    spring({
      frame: frame - step.enterFrame,
      fps,
      config: { damping: 20, stiffness: 180 },
    })
  );

  // Connectors animate between step enter frames
  const connectorProgresses = STEPS.slice(0, 4).map((_, i) =>
    interpolate(
      frame,
      [STEPS[i].enterFrame + 8, STEPS[i + 1].enterFrame + 20],
      [0, 1],
      {
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        easing: ease,
      }
    )
  );

  return (
    <div style={{ position: "absolute", inset: 0, opacity: sceneOpacity }}>
      {/* Header — properly padded from edges */}
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 120,
          right: 120,
          opacity: titleProgress,
          transform: `translateY(${(1 - titleProgress) * -20}px)`,
        }}
      >
        <div
          style={{
            color: "#a855f7",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: poppins,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          The Solution
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
          The Curetopia Pipeline
        </div>
        <div
          style={{
            color: "#c4b5fd",
            fontSize: 22,
            fontWeight: 400,
            fontFamily: poppins,
            marginTop: 8,
          }}
        >
          From community funding to FDA approval — 20x cheaper than Big Pharma
        </div>
      </div>

      {/* Flow diagram background lane */}
      <div
        style={{
          position: "absolute",
          left: 68,
          right: 68,
          top: STEP_CY - 2,
          height: 4,
          background: "rgba(168,85,247,0.12)",
          borderRadius: 2,
        }}
      />

      {/* Animated connectors */}
      {connectorProgresses.map((progress, i) => (
        <Connector
          key={i}
          x1={STEP_CX[i] + ICON_R + 8}
          x2={STEP_CX[i + 1] - ICON_R - 8}
          cy={STEP_CY}
          progress={progress}
          accentColor={STEPS[i].accentColor}
        />
      ))}

      {/* Arrow heads */}
      {connectorProgresses.map((progress, i) => {
        const arrowX = STEP_CX[i + 1] - ICON_R - 8;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: arrowX - 10,
              top: STEP_CY - 8,
              opacity: progress,
              width: 0,
              height: 0,
              borderTop: "8px solid transparent",
              borderBottom: "8px solid transparent",
              borderLeft: `14px solid ${STEPS[i].accentColor}cc`,
              filter: `drop-shadow(0 0 6px ${STEPS[i].accentColor})`,
            }}
          />
        );
      })}

      {/* Flow steps */}
      {STEPS.map((step, i) => (
        <FlowStep
          key={i}
          cx={STEP_CX[i]}
          cy={STEP_CY}
          icon={step.icon}
          stepNum={i + 1}
          title={step.title}
          subtitle={step.subtitle}
          accentColor={step.accentColor}
          progress={stepProgresses[i]}
        />
      ))}
    </div>
  );
};
