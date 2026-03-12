import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const SceneDrugCandidates: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Giant "2" — spring punch at frame 8
  const numSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 10, stiffness: 200 },
  });
  const numScale = interpolate(numSpring, [0, 1], [0.3, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const numOpacity = interpolate(numSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "drug candidates identified" — fade up at frame 35
  const line1Opacity = interpolate(frame, [35, 55], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line1Y = interpolate(frame, [35, 55], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "for AARS2 Deficiency" — fade up at frame 55
  const line2Opacity = interpolate(frame, [55, 73], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line2Y = interpolate(frame, [55, 73], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "via Perlara yeast-avatar screening" — fade up at frame 75
  const line3Opacity = interpolate(frame, [75, 93], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line3Y = interpolate(frame, [75, 93], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Pulsing radial glow
  const glowPulse = Math.sin(frame * 0.07) * 0.3 + 0.7;

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
          gap: 16,
        }}
      >
        {/* Pulsing purple radial glow */}
        <div
          style={{
            position: "absolute",
            width: 800,
            height: 800,
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(224,64,251,0.22) 0%, transparent 65%)",
            opacity: glowPulse,
            pointerEvents: "none",
          }}
        />

        {/* Giant "2" */}
        <div
          style={{
            fontSize: 200,
            color: "#E040FB",
            fontWeight: 900,
            fontFamily: ldTechD,
            lineHeight: 1,
            transform: `scale(${numScale})`,
            opacity: numOpacity,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
            textShadow:
              "0 0 60px rgba(224,64,251,0.6), 0 0 120px rgba(224,64,251,0.25)",
          }}
        >
          2
        </div>

        {/* "drug candidates identified" */}
        <div
          style={{
            fontSize: 64,
            color: "#ffffff",
            fontWeight: 700,
            fontFamily: ldTechD,
            opacity: line1Opacity,
            transform: `translateY(${line1Y}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          drug candidates identified
        </div>

        {/* "for AARS2 Deficiency" */}
        <div
          style={{
            fontSize: 52,
            color: "#A89BC2",
            fontFamily: ldTechD,
            fontWeight: 600,
            opacity: line2Opacity,
            transform: `translateY(${line2Y}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          for AARS2 Deficiency
        </div>

        {/* "via Perlara yeast-avatar screening" */}
        <div
          style={{
            fontSize: 44,
            color: "#CC44FF",
            fontFamily: ldTechD,
            fontWeight: 500,
            opacity: line3Opacity,
            transform: `translateY(${line3Y}px)`,
            position: "relative",
            zIndex: 1,
            willChange: "transform, opacity",
          }}
        >
          via Perlara yeast-avatar screening
        </div>
      </div>
    </SceneWrapper>
  );
};
