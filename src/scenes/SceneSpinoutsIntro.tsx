import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const SceneSpinoutsIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Proof of Cures" title — 3D rotateX flip-in
  const titleSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 10, stiffness: 120 },
  });
  const titleRotateX = interpolate(titleSpring, [0, 1], [-90, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleOpacity = interpolate(frame, [8, 16], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Pulsing green glow
  const glowPulse = Math.sin(frame * 0.07) * 0.25 + 0.75;

  // Problem text — fade + blur-in
  const problemOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const problemBlur = interpolate(frame, [30, 50], [8, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Designed to close that gap" — spring punch
  const gapSpring = spring({
    frame: frame - 60,
    fps,
    config: { damping: 8, stiffness: 150 },
  });
  const gapScale = interpolate(gapSpring, [0, 1], [0.5, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const gapOpacity = interpolate(frame, [60, 68], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

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
          position: "relative",
        }}
      >
        {/* Green glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(224,64,251,0.15) 0%, transparent 60%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* "Proof of Cures" */}
        <div
          style={{
            fontSize: 88,
            color: "#E040FB",
            fontWeight: 900,
            fontFamily: ldTechD,
            opacity: titleOpacity,
            transform: `perspective(800px) rotateX(${titleRotateX}deg)`,
            transformOrigin: "center bottom",
            position: "relative",
            zIndex: 1,
            textShadow:
              "0 0 40px rgba(224,64,251,0.5), 0 0 80px rgba(224,64,251,0.2)",
          }}
        >
          Proof of Cures
        </div>

        {/* Problem statement */}
        <div
          style={{
            fontSize: 36,
            color: "#A89BC2",
            fontFamily: ldTechD,
            maxWidth: 950,
            opacity: problemOpacity,
            filter: `blur(${problemBlur}px)`,
            marginTop: 28,
            position: "relative",
            zIndex: 1,
            lineHeight: 1.45,
          }}
        >
          Many DeSci projects raise capital quickly — but contributors often
          have limited visibility into how funds are used, what milestones are
          being pursued, or what progress is being made.
        </div>

        {/* Close the gap */}
        <div
          style={{
            fontSize: 44,
            color: "#ffffff",
            fontWeight: 600,
            fontFamily: ldTechD,
            opacity: gapOpacity,
            transform: `scale(${gapScale})`,
            marginTop: 28,
            position: "relative",
            zIndex: 1,
            maxWidth: 950,
            lineHeight: 1.4,
          }}
        >
          <span style={{ color: "#E040FB", fontWeight: 700 }}>
            Proof of Cures
          </span>{" "}
          was designed to close that gap.
        </div>
      </div>
    </SceneWrapper>
  );
};
