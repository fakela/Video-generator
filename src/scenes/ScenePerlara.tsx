import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const ScenePerlara: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Yeast-Avatar Drug Screening" title — spring punch at frame 8
  const titleSpring = spring({
    frame: frame - 8,
    fps,
    config: { damping: 10, stiffness: 180 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.7, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // "Partner lab Perlara..." — fade up at frame 30
  const line1Opacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line1TranslateY = interpolate(frame, [30, 50], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "11 ARS mutations modelled. 84,000 tests." — fade up at frame 55
  const line2Opacity = interpolate(frame, [55, 75], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line2TranslateY = interpolate(frame, [55, 75], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "The most comprehensive..." — spring punch at frame 85
  const punchSpring = spring({
    frame: frame - 85,
    fps,
    config: { damping: 8, stiffness: 160 },
  });
  const punchScale = interpolate(punchSpring, [0, 1], [0.6, 1]);
  const punchOpacity = interpolate(punchSpring, [0, 1], [0, 1]);

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
          gap: 20,
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: 60,
            color: "#E040FB",
            fontWeight: 800,
            fontFamily: ldTechD,
            transform: `scale(${titleScale})`,
            opacity: titleOpacity,
          }}
        >
          Yeast-Avatar Drug Screening
        </div>

        {/* Partner lab description */}
        <div
          style={{
            fontSize: 44,
            color: "#ffffff",
            fontFamily: ldTechD,
            maxWidth: 1000,
            opacity: line1Opacity,
            transform: `translateY(${line1TranslateY}px)`,
          }}
        >
          Partner lab Perlara screens 8,500 existing compounds against yeast
          models of the disease.
        </div>

        {/* Scaling stats */}
        <div
          style={{
            fontSize: 44,
            color: "#E040FB",
            fontWeight: 700,
            fontFamily: ldTechD,
            opacity: line2Opacity,
            transform: `translateY(${line2TranslateY}px)`,
          }}
        >
          11 ARS mutations modelled. 84,000 tests.
        </div>

        {/* Punch line */}
        <div
          style={{
            fontSize: 42,
            color: "#A89BC2",
            fontFamily: ldTechD,
            fontStyle: "italic",
            marginTop: 8,
            transform: `scale(${punchScale})`,
            opacity: punchOpacity,
          }}
        >
          The most comprehensive rare disease drug screen ever run.
        </div>
      </div>
    </SceneWrapper>
  );
};
