import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { ldTechD } from "../fonts";

export const Scene9Step1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Emoji rotate-in: rotate from -180deg to 0
  const emojiProgress = spring({
    frame: frame - 5,
    fps,
    config: { damping: 10, stiffness: 120 },
  });
  const emojiRotation = interpolate(emojiProgress, [0, 1], [-180, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const emojiOpacity = interpolate(emojiProgress, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "STEP 1" label: fade + scale
  const labelProgress = spring({
    frame: frame - 15,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const labelScale = interpolate(labelProgress, [0, 1], [0.3, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const labelOpacity = interpolate(labelProgress, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Title: spring punch from 0.5
  const titleSpring = spring({
    frame: frame - 25,
    fps,
    config: { damping: 7, stiffness: 140, overshootClamping: false },
  });
  const titleScale = interpolate(titleSpring, [0, 1], [0.5, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Description: blur-in (blur 10 -> 0)
  const descProgress = interpolate(frame, [45, 70], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const descBlur = interpolate(descProgress, [0, 1], [10, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const descOpacity = interpolate(descProgress, [0, 1], [0, 1], {
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
          gap: 20,
          width: "100%",
          height: "100%",
          fontFamily: ldTechD,
          textAlign: "center",
        }}
      >
        {/* Emoji */}
        <div
          style={{
            fontSize: 100,
            transform: `rotate(${emojiRotation}deg)`,
            opacity: emojiOpacity,
          }}
        >
          🧬
        </div>

        {/* STEP 1 label */}
        <div
          style={{
            fontSize: 40,
            color: "#CC44FF",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: ldTechD,
            opacity: labelOpacity,
            transform: `scale(${labelScale})`,
          }}
        >
          STEP 1
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            color: "#ffffff",
            fontWeight: 800,
            fontFamily: ldTechD,
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
          }}
        >
          Community Funds Research
        </div>

        {/* Description with blur-in */}
        <div
          style={{
            fontSize: 44,
            color: "#A89BC2",
            fontWeight: 400,
            fontFamily: ldTechD,
            maxWidth: 900,
            opacity: descOpacity,
            filter: `blur(${descBlur}px)`,
            lineHeight: 1.4,
          }}
        >
          Token holders vote on which diseases to target. $CURES tokens fund the
          science directly.
        </div>
      </div>
    </SceneWrapper>
  );
};
