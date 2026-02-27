import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene2Scale: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Pulsing radial glow
  const glowPulse = Math.sin(frame * 0.06) * 0.15 + 0.35;

  // 1. "10,000+" — number counter animation + scale punch from 0.3
  const counterProgress = interpolate(frame, [10, 55], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const displayNumber = Math.round(counterProgress * 10000);
  const formattedNumber =
    displayNumber >= 10000
      ? "10,000+"
      : displayNumber.toLocaleString();

  const statSpring = spring({
    frame: frame - 10,
    fps,
    config: { damping: 7, stiffness: 130 },
  });
  const statScale = interpolate(statSpring, [0, 1], [0.3, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const statOpacity = interpolate(frame, [10, 16], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 2. Description — blur-in animation (blur 12px to 0)
  const descBlur = interpolate(frame, [45, 70], [12, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const descOpacity = interpolate(frame, [45, 70], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // 3. Sub text — fade + scale from 0.9
  const subOpacity = interpolate(frame, [65, 85], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const subScale = interpolate(frame, [65, 85], [0.9, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <SceneWrapper>
      {/* Pulsing radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          background: `radial-gradient(circle, rgba(124,58,237,${glowPulse}) 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 1. "10,000+" — counter + scale punch */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 200,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            transform: `scale(${statScale})`,
            opacity: statOpacity,
          }}
        >
          {formattedNumber}
        </div>

        {/* 2. Description — blur-in */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 52,
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            opacity: descOpacity,
            filter: `blur(${descBlur}px)`,
          }}
        >
          Rare diseases identified worldwide
        </div>

        {/* 3. Sub text — fade + scale */}
        <div
          style={{
            fontFamily: poppins,
            fontSize: 42,
            fontWeight: 400,
            color: "#c4b5fd",
            textAlign: "center",
            opacity: subOpacity,
            transform: `scale(${subScale})`,
            marginTop: 20,
          }}
        >
          95% have no approved treatment. Not even one option.
        </div>
      </div>
    </SceneWrapper>
  );
};
