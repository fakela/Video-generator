import React from "react";
import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { SceneWrapper } from "../components/SceneWrapper";
import { poppins } from "../fonts";

export const Scene11Step3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Emoji: flip animation (rotateY from 90deg to 0)
  const emojiSpring = spring({
    frame: frame - 5,
    fps,
    config: { damping: 10, stiffness: 130 },
  });
  const emojiRotateY = interpolate(emojiSpring, [0, 1], [90, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const emojiOpacity = interpolate(emojiSpring, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // "STEP 3" label: fade + scale
  const labelProgress = spring({
    frame: frame - 16,
    fps,
    config: { damping: 12, stiffness: 100 },
  });
  const labelOpacity = interpolate(labelProgress, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const labelScale = interpolate(labelProgress, [0, 1], [0.4, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Title: letter-spacing animation 20 -> 2
  const titleProgress = spring({
    frame: frame - 26,
    fps,
    config: { damping: 10, stiffness: 100 },
  });
  const titleLetterSpacing = interpolate(titleProgress, [0, 1], [20, 2], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleOpacity = interpolate(titleProgress, [0, 1], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleScale = interpolate(titleProgress, [0, 1], [1.1, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  // Description: fade + scale
  const descSpring = spring({
    frame: frame - 46,
    fps,
    config: { damping: 10, stiffness: 120 },
  });
  const descScale = interpolate(descSpring, [0, 1], [0.7, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const descOpacity = interpolate(descSpring, [0, 1], [0, 1], {
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
          fontFamily: poppins,
          textAlign: "center",
        }}
      >
        {/* Emoji with flip */}
        <div
          style={{
            fontSize: 100,
            opacity: emojiOpacity,
            transform: `perspective(600px) rotateY(${emojiRotateY}deg)`,
          }}
        >
          📊
        </div>

        {/* STEP 3 label */}
        <div
          style={{
            fontSize: 28,
            color: "#c4b5fd",
            letterSpacing: 6,
            textTransform: "uppercase",
            fontWeight: 600,
            fontFamily: poppins,
            opacity: labelOpacity,
            transform: `scale(${labelScale})`,
          }}
        >
          STEP 3
        </div>

        {/* Title with letter-spacing animation */}
        <div
          style={{
            fontSize: 72,
            color: "#ffffff",
            fontWeight: 800,
            fontFamily: poppins,
            opacity: titleOpacity,
            letterSpacing: titleLetterSpacing,
            transform: `scale(${titleScale})`,
          }}
        >
          Transparent Progress Tracking
        </div>

        {/* Description: fade + scale */}
        <div
          style={{
            fontSize: 36,
            color: "#c4b5fd",
            fontWeight: 400,
            fontFamily: poppins,
            maxWidth: 900,
            lineHeight: 1.4,
            opacity: descOpacity,
            transform: `scale(${descScale})`,
          }}
        >
          Every milestone is published onchain. Token holders see exactly where
          their money goes.
        </div>
      </div>
    </SceneWrapper>
  );
};
