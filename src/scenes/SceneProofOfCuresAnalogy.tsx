import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const SceneProofOfCuresAnalogy: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Frame 5: Tag "THE ANALOGY" fades in
  const tagOpacity = interpolate(frame, [5, 18], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Frame 22: Body line fades up
  const bodyOpacity = interpolate(frame, [22, 42], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const bodyY = interpolate(frame, [22, 42], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Frame 65: Punch line spring-in
  const punchSpring = spring({
    frame: frame - 65,
    fps,
    config: { damping: 10, stiffness: 160 },
  });
  const punchScale = interpolate(punchSpring, [0, 1], [0.7, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const punchOpacity = interpolate(punchSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Subtle glow pulse
  const glowPulse = Math.sin(frame * 0.05) * 0.15 + 0.85;

  return (
    <SceneWrapper>
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
          gap: 32,
          position: "relative",
          padding: "0 80px",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            width: 800,
            height: 800,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(204,68,255,0.18) 0%, transparent 60%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* Tag: "THE ANALOGY" */}
        <div
          style={{
            fontSize: 40,
            color: "#CC44FF",
            fontWeight: 700,
            fontFamily: ldTechD,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: tagOpacity,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          THE ANALOGY
        </div>

        {/* Body line */}
        <div
          style={{
            fontSize: 52,
            color: "#A89BC2",
            fontWeight: 500,
            fontFamily: ldTechD,
            maxWidth: 1000,
            lineHeight: 1.4,
            opacity: bodyOpacity,
            transform: `translateY(${bodyY}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          Like Proof of Work and Proof of Stake, Proof of Cures is a consensus
          mechanism —
        </div>

        {/* Punch line */}
        <div
          style={{
            fontSize: 62,
            color: "#E040FB",
            fontWeight: 900,
            fontFamily: ldTechD,
            maxWidth: 1000,
            lineHeight: 1.3,
            transform: `scale(${punchScale})`,
            opacity: punchOpacity,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          but it hinges on visibility into how funds are used.
        </div>
      </div>
    </SceneWrapper>
  );
};
