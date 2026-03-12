import React from "react";
import { useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

const STEPS = [
  {
    number: "01",
    title: "Propose",
    description: "Community members submit disease targets onchain.",
  },
  {
    number: "02",
    title: "Vote",
    description: "$CURES token holders vote on which projects to fund.",
  },
  {
    number: "03",
    title: "Fund",
    description: "Treasury deploys capital to the winning proposal.",
  },
  {
    number: "04",
    title: "Research",
    description: "Partner labs run drug screens and validation studies.",
  },
  {
    number: "05",
    title: "Validate",
    description: "All results published onchain — transparent and verifiable.",
  },
  {
    number: "06",
    title: "Spinout",
    description: "Successful candidates spin out as independent biotech companies.",
  },
  {
    number: "07",
    title: "Revenue Flows Back",
    description: "Spinout revenues return to the DAO treasury and token holders.",
  },
];

const STEP_DURATION = 90; // 3s per step at 30fps
const LAST_STEP_DURATION = 100;

export const Scene07StepsRapidFire: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const currentStep = Math.min(Math.floor(frame / STEP_DURATION), STEPS.length - 1);
  const stepLocalFrame = frame - currentStep * STEP_DURATION;

  const step = STEPS[currentStep];

  const numberBrightness = interpolate(stepLocalFrame, [0, 9, 18], [0, 1, 0.7], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const numberOpacity = interpolate(stepLocalFrame, [0, 5], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const textOpacity = interpolate(stepLocalFrame, [5, 14], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const textY = interpolate(stepLocalFrame, [5, 14], [16, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const burstOpacity = interpolate(stepLocalFrame, [0, 3, 6], [0.6, 0.2, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const burstScale = interpolate(stepLocalFrame, [0, 6], [0.2, 2.5], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const numberColor = `rgba(224,64,251,${numberBrightness})`;

  return (
    <SceneWrapper>
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${burstScale})`,
          background: "radial-gradient(circle, rgba(224,64,251,0.5) 0%, transparent 70%)",
          opacity: burstOpacity,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          fontFamily: ldTechD,
          textAlign: "center",
          gap: 24,
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 160,
            fontWeight: 900,
            color: numberColor,
            fontFamily: ldTechD,
            lineHeight: 1,
            opacity: numberOpacity,
            textShadow: `0 0 40px rgba(224,64,251,${numberBrightness * 0.8})`,
          }}
        >
          {step.number}
        </div>

        <div
          style={{
            fontSize: 88,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: ldTechD,
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
          }}
        >
          {step.title}
        </div>

        <div
          style={{
            fontSize: 48,
            color: "#A89BC2",
            fontFamily: ldTechD,
            maxWidth: 900,
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
          }}
        >
          {step.description}
        </div>
      </div>
    </SceneWrapper>
  );
};