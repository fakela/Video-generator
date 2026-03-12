import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene08AARS2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pillOpacity = interpolate(frame, [8, 22], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const pillX = interpolate(frame, [8, 22], [-40, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const titleSpring = spring({
    frame: frame - 35,
    fps,
    config: { damping: 8, stiffness: 200 },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.5, 1]);
  const titleOpacity = interpolate(titleSpring, [0, 0.2], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const desc1Opacity = interpolate(frame, [70, 88], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const desc1Y = interpolate(frame, [70, 88], [24, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const cureSpring = spring({
    frame: frame - 120,
    fps,
    config: { damping: 10, stiffness: 220 },
  });
  const cureScale = interpolate(cureSpring, [0, 1], [0.6, 1]);
  const cureOpacity = interpolate(cureSpring, [0, 0.2], [0, 1], {
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
          gap: 16,
        }}
      >
        <div
          style={{
            fontSize: 36,
            color: "#ffffff",
            fontWeight: 700,
            background: "#7B2FBE",
            padding: "10px 32px",
            borderRadius: 24,
            letterSpacing: 4,
            fontFamily: ldTechD,
            opacity: pillOpacity,
            transform: `translateX(${pillX}px)`,
            boxShadow: "0 0 20px rgba(123,47,190,0.5)",
          }}
        >
          PROJECT 001
        </div>

        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: "#ffffff",
            fontFamily: ldTechD,
            lineHeight: 1.05,
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
            maxWidth: 1200,
          }}
        >
          Yeast-powered drug repurposing for AARS2.
        </div>

        <div
          style={{
            fontSize: 50,
            color: "#A89BC2",
            fontFamily: ldTechD,
            maxWidth: 960,
            opacity: desc1Opacity,
            transform: `translateY(${desc1Y}px)`,
          }}
        >
          Genetically personalised yeast "patient avatars" built to model AARS2 mitochondrial deficiency.
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#E040FB",
            fontFamily: ldTechD,
            marginTop: 12,
            opacity: cureOpacity,
            transform: `scale(${cureScale})`,
            textShadow: "0 0 30px rgba(224,64,251,0.6)",
          }}
        >
          In partnership with Perlara.
        </div>
      </div>
    </SceneWrapper>
  );
};