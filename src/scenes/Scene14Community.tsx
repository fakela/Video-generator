import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene14Community: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // "Community Medicine." scale from 0.5 with spring
  const line1Spring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 8, stiffness: 140, overshootClamping: false },
  });
  const line1Scale = interpolate(line1Spring, [0, 1], [0.5, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line1Opacity = interpolate(line1Spring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "Onchain." delayed scale punch
  const line2Spring = spring({
    frame: frame - 30,
    fps,
    config: { damping: 7, stiffness: 160, overshootClamping: false },
  });
  const line2Scale = interpolate(line2Spring, [0, 1], [0.5, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const line2Opacity = interpolate(line2Spring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Pulsing glow ring
  const ringPulse = Math.sin(frame * 0.06) * 0.5 + 0.5;
  const ringScale = interpolate(ringPulse, [0, 1], [0.8, 1.2], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const ringOpacity = interpolate(ringPulse, [0, 1], [0.2, 0.7], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Ring entrance
  const ringEntrance = interpolate(frame, [20, 50], [0, 1], {
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
          width: "100%",
          height: "100%",
          fontFamily: ldTechD,
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Pulsing glow ring */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "3px solid #7B2FBE",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${ringScale})`,
            opacity: ringOpacity * ringEntrance,
            boxShadow:
              "0 0 40px rgba(123,47,190,0.4), inset 0 0 40px rgba(123,47,190,0.2)",
            pointerEvents: "none",
          }}
        />

        {/* Second ring offset for depth */}
        <div
          style={{
            position: "absolute",
            width: 650,
            height: 650,
            borderRadius: "50%",
            border: "2px solid rgba(123,47,190,0.3)",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${interpolate(ringPulse, [0, 1], [1.1, 0.9], { extrapolateRight: "clamp", extrapolateLeft: "clamp" })})`,
            opacity: ringOpacity * 0.5 * ringEntrance,
            pointerEvents: "none",
          }}
        />

        {/* "Community Medicine." */}
        <div
          style={{
            fontSize: 80,
            color: "#ffffff",
            fontWeight: 800,
            fontFamily: ldTechD,
            opacity: line1Opacity,
            transform: `scale(${line1Scale})`,
            position: "relative",
            zIndex: 1,
            textShadow:
              "0 0 40px rgba(123,47,190,0.5), 0 0 80px rgba(123,47,190,0.3)",
          }}
        >
          That's Community Medicine.
        </div>

        {/* "Onchain." */}
        <div
          style={{
            fontSize: 80,
            color: "#E040FB",
            fontWeight: 800,
            fontFamily: ldTechD,
            opacity: line2Opacity,
            transform: `scale(${line2Scale})`,
            position: "relative",
            zIndex: 1,
            marginTop: 8,
            textShadow:
              "0 0 30px rgba(123,47,190,0.6), 0 0 60px rgba(123,47,190,0.3)",
          }}
        >
          Onchain.
        </div>
      </div>
    </SceneWrapper>
  );
};
